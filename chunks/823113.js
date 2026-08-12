n.d(t, { D: () => be });
var i,
    l,
    s,
    r,
    a = n(419954),
    o = n(780964),
    u = n(550640),
    d = n(107384),
    c = n(477900),
    g = n(582128),
    m = n(17928),
    A = n(652215),
    E = n(346055),
    h = n(297264),
    S = n(364522),
    T = n(97808),
    x = n(778712),
    p = n(821609),
    f = n(775602),
    _ = n(320095),
    N = n(963852),
    I = n(763754),
    C = n(20851),
    b = n(95701),
    y = n(486020),
    v = n(885386),
    j = n(375708),
    O = n(827053);
let L = new b.nA({ id: "1337", guild_id: "1337", type: A.rbe.GUILD_TEXT, name: "preview" }),
    D = [
        { status: A.clD.IDLE, discriminator: "2" },
        { status: A.clD.DND, discriminator: "3" },
        { status: A.clD.ONLINE, mobile: !0, discriminator: "4" },
    ];
function R(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    return (0, _.rh)({ ...(0, N.Ay)({ channelId: L.id, content: e }), state: A.cmJ.SENT, reactions: t });
}
var P = n(856488);
let G = (0, a.zD)(o.X.ENABLE_LEGACY_CHAT_INPUT, {
        useTitle: () => j.intl.string(j.t.TZ2hZH),
        useSubtitle: () => j.intl.string(j.t.Q7wgHc),
        useValue: () => v.D_.useSetting(),
        setValue: (e) => v.D_.updateSetting(e),
    }),
    M = (0, a.zD)(o.X.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS, {
        useTitle: () => j.intl.string(j.t.XYvMIX),
        useSubtitle: () => j.intl.string(j.t.T0rbtM),
        useValue: v._z.useSetting,
        setValue: v._z.updateSetting,
    });
var U = n(100767),
    V = n(435558),
    k = n.n(V),
    w = n(935399),
    F = n(331322),
    B = n(106236),
    z = n(834730),
    X = n(113494),
    Y = n(782134),
    H = n(54570),
    K = n(8880),
    W = n(75804);
let Z = k().debounce((e) => {
    (0, H.zU)(e);
}, 250);
function q() {
    let [e, t] = g.useState(!1);
    return (
        (0, w.l0)(() => (0, H.pr)()),
        (0, c.jsx)(p.$, {
            text: j.intl.string(j.t.SKNnqq),
            icon: e ? X.E : Y.u,
            size: "sm",
            onClick: function () {
                if (e) {
                    (0, H.pr)(), t(!1);
                    return;
                }
                (0, H.AU)(
                    j.intl.string(j.t.PKaNJL),
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
let Q = (0, a.E2)(o.X.TTS_PLAYBACK_RATE, {
        useSearchTerms: () => [j.intl.string(j.t.lsW5Ev)],
        Component: function () {
            let e = (0, m.bG)([K.A], () => K.A.speechRate);
            return (0, c.jsxs)(F.B, {
                gap: 16,
                children: [
                    (0, c.jsx)(B.A, {
                        label: j.intl.string(j.t.lsW5Ev),
                        description: j.intl.string(j.t.Ci4wMS),
                        markers: W.P,
                        initialValue: e,
                        defaultValue: 1,
                        stickToMarkers: !0,
                        onValueChange: Z,
                        onValueRender: (e) => `x${e.toFixed(2)}`,
                        onMarkerRender: (e) =>
                            0 === e
                                ? (0, c.jsx)(z.E, {
                                      variant: "text-xs/medium",
                                      color: "text-subtle",
                                      children: j.intl.string(j.t["493lwX"]),
                                  })
                                : 10 === e
                                  ? (0, c.jsx)(z.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: j.intl.string(j.t.ZSZEdS),
                                    })
                                  : 1 === e
                                    ? (0, c.jsx)(z.E, {
                                          variant: "text-xs/medium",
                                          color: "text-feedback-positive",
                                          children: "x1.0",
                                      })
                                    : e % 1 == 0
                                      ? ""
                                      : void 0,
                    }),
                    (0, c.jsx)(q, {}),
                ],
            });
        },
        usePredicate: () => U.$j,
    }),
    J = (0, a.zZ)(o.X.AUDIO_AND_SCREEN_READER_CATEGORY, {
        useTitle: () => j.intl.string(j.t.XVR0Rb),
        buildLayout: () => [Q, M, G],
    }),
    $ = (0, a.AK)(o.X.ACCESSIBILITY_TO_DISPLAY_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.aTfeGK),
        destinationKey: o.X.APPEARANCE_PANEL,
    }),
    ee = (0, a.gN)(o.X.COLOR_AND_CONTRAST_RELATED_SETTINGS, { buildLayout: () => [$] });
var et = n(955572);
let en = (0, a.zD)(o.X.DESATURATE_CUSTOM_COLORS, {
    useTitle: () => j.intl.string(j.t.OCJg5f),
    useSubtitle: () => j.intl.string(j.t.HEO0s3),
    useValue: () => (0, m.bG)([f.Ay], () => f.Ay.desaturateUserColors),
    setValue: () => (0, et.YV)(),
});
var ei = n(652525);
let el = (0, a.zD)(o.X.ENABLE_CUSTOM_CURSOR, {
        useTitle: () => j.intl.string(j.t["+Isihb"]),
        useSubtitle: () => j.intl.string(j.t.nNZ1Tz),
        useValue: () => (0, m.bG)([f.Ay], () => f.Ay.enableCustomCursor),
        setValue: (e) => (0, et.ts)(e),
        usePredicate: () => (0, ei.t)("EnableCustomCursorSetting"),
    }),
    es = (0, a.zD)(o.X.ENABLE_SWITCH_ICONS, {
        useTitle: () => j.intl.string(j.t["S3z+pV"]),
        useSubtitle: () => j.intl.string(j.t["3QuI9+"]),
        useValue: () => (0, m.bG)([f.Ay], () => f.Ay.isSwitchIconsEnabled),
        setValue: (e) => (0, et.Gm)(e),
        hasIcon: !0,
    });
var er = n(554146);
let ea = (0, a.zD)(o.X.HIGH_CONTRAST_MODE, {
    useTitle: () => j.intl.string(j.t.aZlePv),
    useSubtitle: () => j.intl.string(j.t["v2qF8+"]),
    useValue: () => (0, m.bG)([f.Ay], () => f.Ay.isHighContrastModeEnabled),
    setValue: (e) => (0, et.uh)(e ? f._1.HIGH : f._1.DEFAULT),
    getDismissibleBadges: () => [
        { badgeType: d.Xi.NEW, dismissibleContent: er.M.ACCESSIBILITY_HIGH_CONTRAST_MODE_NEW_BADGE },
    ],
});
var eo = n(406360),
    eu = n(742023);
let ed = (0, a.Qx)(o.X.HIGH_DYNAMIC_RANGE, {
        useTitle: () => j.intl.string(j.t.nemtgW),
        useSubtitle: () => j.intl.string(j.t["O/Gjvn"]),
        usePersistentBadge: () => ({ badgeType: d.Xi.BETA }),
        useOptions: function () {
            return g.useMemo(
                () => [
                    { name: j.intl.string(j.t.D5Fma9), desc: j.intl.string(j.t.Qj75ck), value: "no-limit" },
                    { name: j.intl.string(j.t.ldcGIH), desc: j.intl.string(j.t["+V/bDk"]), value: "standard" },
                ],
                [],
            );
        },
        usePredicate: function () {
            return (0, eo.i)("HDRDynamicRangeSetting");
        },
        setValue: function (e) {
            (0, et.FU)(e);
        },
        useValue: function () {
            return (0, m.bG)([eu.Ay], () => eu.Ay.hdrDynamicRange);
        },
        useSearchTerms: () => ["HDR", j.intl.string(j.t["O/Gjvn"])],
    }),
    ec = (0, a.Hn)(o.X.OFFICIAL_MESSAGE_STYLE, {
        useTitle: () => j.intl.string(j.t.nC2XBl),
        useSubtitle: () => j.intl.string(j.t.a3IPrX),
        useOptions: () => [
            { id: "default", label: j.intl.string(j.t.ERaS6f), value: "default" },
            { id: "no_text_color", label: j.intl.string(j.t.JKfipk), value: "no_text_color" },
            { id: "no_gradient", label: j.intl.string(j.t.O2vBoY), value: "no_gradient" },
            { id: "hidden", label: j.intl.string(j.t["+loyQl"]), value: "hidden" },
        ],
        useValue: () => (0, m.bG)([f.Ay], () => f.Ay.officialMessageStyle),
        setValue: (e) => (0, et.w_)(e),
    }),
    eg = (0, a.Hn)(o.X.ROLE_STYLE, {
        useTitle: () => j.intl.string(j.t.uSOPWm),
        useSubtitle: () => j.intl.string(j.t.u7fFKS),
        useOptions: () => [
            { id: "username", label: j.intl.string(j.t.eDdMzJ), value: "username" },
            { id: "dot", label: j.intl.string(j.t.rdmJp0), value: "dot" },
            { id: "hidden", label: j.intl.string(j.t.Ji2EVJ), value: "hidden" },
        ],
        useValue: () => (0, m.bG)([f.Ay], () => f.Ay.roleStyle),
        setValue: (e) => (0, et.IX)(e),
    });
(0, a.Qx)(o.X.ROLE_STYLE, {
    useTitle: () => j.intl.string(j.t.uSOPWm),
    useSubtitle: () => j.intl.string(j.t["86hjzQ"]),
    useOptions: () => [
        { name: j.intl.string(j.t.YEOEi6), value: "username" },
        { name: j.intl.string(j.t.mQaro3), value: "dot" },
        { name: j.intl.string(j.t.Ji2EVJ), value: "hidden" },
    ],
    useValue: () => (0, m.bG)([f.Ay], () => f.Ay.roleStyle),
    setValue: (e) => (0, et.IX)(e),
});
let em = (0, a.sN)(o.X.SATURATION, {
    useTitle: () => j.intl.string(j.t["5PWWCY"]),
    useSubtitle: () => j.intl.string(j.t.xf5S6P),
    markers: A.hH7.SATURATION_INCREMENTS,
    onMarkerRender: (e) => ((100 * e) % 2 == 0 ? `${100 * e}%` : void 0),
    stickToMarkers: !0,
    minValue: 0,
    maxValue: 1,
    getInitialValue: () => f.Ay.saturation,
    asValueChanges: (e) => (0, et.HU)(e),
});
var eA = n(964486),
    eE = n(839214),
    eh = n(502229),
    eS = n(975571);
let eT = (0, eE.D)(() => ({ syncEnabled: null, updateTimeout: null })),
    ex = (0, a.zD)(o.X.SYNC_FORCED_COLORS, {
        useTitle: () => j.intl.string(j.t.cguiec),
        useSubtitle: () => j.intl.format(j.t.GwEVE2, { learnMoreLink: eS.A.getArticleURL(A.MVz.FORCED_COLORS) }),
        useValue: () => {
            let e = (0, m.bG)([f.Ay], () => f.Ay.syncForcedColors);
            return (
                (0, eA.Ay)(() => {
                    eT.setState({ syncEnabled: f.Ay.syncForcedColors });
                }),
                eT.useState((e) => e.syncEnabled) ?? e
            );
        },
        setValue: (e) => {
            let { updateTimeout: t } = eT.getState();
            if (null != t) {
                clearTimeout(t), eT.setState({ syncEnabled: e, updateTimeout: null });
                return;
            }
            if (e === f.Ay.syncForcedColors) return void eT.setState({ syncEnabled: e });
            let n = setTimeout(() => {
                (0, et.D3)(e), eT.setState({ updateTimeout: null });
            }, 150);
            eT.setState({ syncEnabled: e, updateTimeout: n });
        },
        usePredicate: () => (0, eh.D)(),
    }),
    ep = (0, a.zZ)(o.X.COLOR_AND_CONTRAST_CATEGORY, {
        useTitle: () => j.intl.string(j.t.JqvyiY),
        buildLayout: () => [em, en, ea, el, ex, ed, eg, ec, es, ee],
    });
var ef = n(397438),
    e_ = n(355097);
function eN(e) {
    return (0, m.bG)([ef.A], () =>
        (function (e) {
            switch (e) {
                case e_._A.REDUCED_MOTION:
                    return j.intl.format(j.t["1dT9V4"], {});
                case e_._A.REDUCED_MOTION_STICKERS:
                    return j.intl.string(j.t["2ExvRu"]);
                default:
                    return;
            }
        })(ef.A.getAppliedOverrideReasonKey(e)),
    );
}
let eI = (0, a.zD)(o.X.ANIMATE_EMOJIS, {
        useTitle: () => j.intl.string(j.t.iIaOlc),
        useSubtitle: () => eN("animateEmoji"),
        useValue: () => v.Sf.useSetting(),
        setValue: (e) => v.Sf.updateSetting(e),
    }),
    eC = (0, a.zD)(o.X.ANIMATE_GIFS, {
        useTitle: () => j.intl.string(j.t.wqsK7q),
        useSubtitle: () => eN("gifAutoPlay"),
        useValue: () => v.kt.useSetting(),
        setValue: (e) => v.kt.updateSetting(e),
    });
var eb = n(823894);
let ey = (0, a.Qx)(o.X.ANIMATE_STICKERS, {
        useTitle: () => j.intl.string(j.t.sBHIh0),
        useSubtitle: () => eN("animateStickers"),
        useOptions: () => [
            { name: j.intl.string(j.t["Xp+X2U"]), value: eb.BJ.ALWAYS_ANIMATE },
            { name: j.intl.string(j.t.IlLT7e), desc: j.intl.string(j.t.bIW9Tl), value: eb.BJ.ANIMATE_ON_INTERACTION },
            { name: j.intl.string(j.t.IGu8x3), value: eb.BJ.NEVER_ANIMATE },
        ],
        useValue: () => v.S0.useSetting(),
        setValue: (e) => v.S0.updateSetting(e),
    }),
    ev = (0, a.zD)(o.X.REDUCED_MOTION, {
        useTitle: () => j.intl.string(j.t.b3XBzg),
        useSubtitle: () => j.intl.format(j.t.XqvxJc, { helpdeskArticle: eS.A.getArticleURL(A.MVz.REDUCED_MOTION) }),
        useValue: () => (0, m.bG)([f.Ay], () => f.Ay.useReducedMotion),
        setValue: (e) => (0, et.qz)(e ? "reduce" : "no-preference"),
    }),
    ej = (0, a.zD)(o.X.SYNC_REDUCED_MOTION, {
        useTitle: () => j.intl.string(j.t.oL55A6),
        useValue: () => (0, m.bG)([f.Ay], () => "auto" === f.Ay.rawPrefersReducedMotion),
        setValue: (e) => (0, et.qz)(e ? "auto" : f.Ay.systemPrefersReducedMotion),
    }),
    eO = (0, a.zZ)(o.X.MOTION_CATEGORY, {
        useTitle: () => j.intl.string(j.t.e3TR1b),
        buildLayout: () => [ev, ej, eC, eI, ey],
    });
var eL = n(688810),
    eD = n(259065),
    eR = n(864386);
let eP = (0, a.zD)(o.X.DISPLAY_NAME_STYLES, {
    useTitle: () => j.intl.string(eR.default["2gFUEw"]),
    useSubtitle: () => {
        let { analyticsLocations: e } = (0, eL.Ay)();
        return j.intl.format(eR.default.aEax6P, {
            onClickOpenModal() {
                (0, eD.L)({ analyticsLocations: e });
            },
        });
    },
    useValue: () => (0, m.bG)([f.Ay], () => f.Ay.displayNameStylesEnabled),
    setValue: (e) => (0, et.Dm)(e),
});
function eG(e) {
    return `${e.toFixed(0)}px`;
}
let eM = (0, a.sN)(o.X.APPEARANCE_FONT_SCALING, {
        useTitle: () => j.intl.string(j.t.rT3Pq5),
        useSubtitle: () => j.intl.string(j.t.LXUhen),
        markers: A.hH7.FONT_SIZES,
        stickToMarkers: !0,
        minValue: A.hH7.FONT_SIZES["0"],
        maxValue: A.hH7.FONT_SIZES[A.hH7.FONT_SIZES.length - 1],
        useDefaultValue: () => A.hH7.FONT_SIZE_DEFAULT,
        getInitialValue: () => f.Ay.fontSize,
        onValueRender: eG,
        onMarkerRender: eG,
        asValueChanges: (e) => (0, et.XS)(e),
    }),
    eU = (0, a.zD)(o.X.UNDERLINE_LINKS, {
        useTitle: () => j.intl.string(j.t.OLZFB8),
        useSubtitle: () => j.intl.string(j.t.DIX3ke),
        useValue: () => (0, m.bG)([f.Ay], () => f.Ay.alwaysShowLinkDecorations),
        setValue: (e) => (0, et.kI)(e),
    }),
    eV = (0, a.zZ)(o.X.TEXT_READABILITY_CATEGORY, {
        useTitle: () => j.intl.string(j.t["bxh/R7"]),
        buildLayout: () => [eM, eU, eP],
    });
var ek = n(873298);
let ew = (0, a.Qx)(o.X.APPEARANCE_UI_DENSITY, {
        useTitle: () => j.intl.string(j.t["C/5V0A"]),
        useSubtitle: () => j.intl.string(j.t.QLZhYk),
        useSearchTerms: () => ["List Spacing"],
        useOptions: () => [
            { name: j.intl.string(j.t["7iegX4"]), value: ek.NS.COMPACT },
            { name: j.intl.string(j.t.bBvAEH), value: ek.NS.DEFAULT },
            { name: j.intl.string(j.t["4cuYHx"]), value: ek.NS.COZY },
        ],
        useValue: () => v.Xi.useSetting(),
        setValue: (e) => {
            e !== ek.NS.UNSET_UI_DENSITY && v.Xi.updateSetting(e);
        },
    }),
    eF = "cozy",
    eB = "compact",
    ez = (0, a.Qx)(o.X.APPEARANCE_MESSAGE_DISPLAY_MODE, {
        useTitle: () => j.intl.string(j.t.nKRoPv),
        useSubtitle: () => j.intl.string(j.t.QntEEG),
        useSearchTerms: () => [j.intl.string(j.t.ZEoGMd)],
        useOptions: () => [
            { name: j.intl.string(j.t.Jqj4cZ), value: eF },
            { name: j.intl.string(j.t["1JNcPS"]), value: eB },
        ],
        useValue: () => (v.hH.useSetting() ? eB : eF),
        setValue: (e) => {
            v.hH.updateSetting(e === eB), (0, et.AC)();
        },
    });
var eX = n(381941);
function eY(e) {
    return `${e.toFixed(0)}px`;
}
let eH = (0, a.sN)(o.X.APPEARANCE_MESSAGE_GROUP_SPACING, {
    useTitle: () => j.intl.string(j.t.Q6lKkg),
    useSubtitle: () => j.intl.string(j.t.p7eUrb),
    markers: eX.qh,
    stickToMarkers: !0,
    minValue: eX.qh["0"],
    maxValue: eX.qh[eX.qh.length - 1],
    useDefaultValue: () => (v.hH.useSetting() ? eX.y5 : eX.ES),
    useExternalValue: () => (0, m.bG)([f.Ay], () => f.Ay.messageGroupSpacing),
    getInitialValue: () => f.Ay.messageGroupSpacing,
    onValueRender: eY,
    onMarkerRender: eY,
    asValueChanges: (e) => {
        switch (e) {
            case 0:
            case 4:
            case 8:
            case 16:
            case 24:
                (0, et.AC)(e);
        }
    },
});
var eK = n(775121),
    eW = n(723702);
let eZ = (0, a.sN)(o.X.APPEARANCE_ZOOM, {
        usePredicate: () => eW.isPlatformEmbedded,
        useTitle: () => j.intl.string(j.t.i19n5L),
        useSubtitle: () => j.intl.format(j.t["x9PK/3"], { modKey: eK.A.modKey }),
        markers: A.hH7.ZOOM_SCALES,
        stickToMarkers: !0,
        minValue: A.hH7.ZOOM_SCALES["0"],
        maxValue: A.hH7.ZOOM_SCALES[A.hH7.ZOOM_SCALES.length - 1],
        useDefaultValue: () => A.hH7.ZOOM_DEFAULT,
        getInitialValue: () => f.Ay.zoom,
        useExternalValue: () => (0, m.bG)([f.Ay], () => f.Ay.zoom),
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        setValue: (e) => (0, et.Qp)(e),
        useSearchTerms: () => [j.intl.string(j.t.ip0uSf)],
    }),
    eq = (0, a.zZ)(o.X.VISUAL_DENSITY_CATEGORY, {
        useTitle: () => j.intl.string(j.t.VKYWk8),
        buildLayout: () => [ew, ez, eH, eZ],
    }),
    eQ = (0, a.t_)(o.X.ACCESSIBILITY_PANEL, {
        useTitle: () => j.intl.string(j.t.G0neg7),
        buildLayout: () => [eV, eq, ep, eO, J],
        decoration: {
            type: d.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: function () {
                let e = v.hH.useSetting(),
                    t = v.jW.useSetting(),
                    n = g.useMemo(
                        () => [
                            R(
                                j.intl.formatToPlainString(j.t.BknJRT, {}),
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
                            R(j.intl.formatToPlainString(j.t["4rDfgM"], { link: "https://discord.com/accessibility" })),
                        ],
                        [t],
                    ),
                    i = (0, m.bG)([f.Ay], () => f.Ay.messageGroupSpacing);
                return (0, c.jsx)(E.M, {
                    children: (0, c.jsxs)("section", {
                        "aria-label": j.intl.string(j.t.RC22qg),
                        children: [
                            (0, c.jsx)(h.D, {
                                variant: "text-md/medium",
                                color: "text-muted",
                                className: O.Vf,
                                children: j.intl.string(j.t.RC22qg),
                            }),
                            (0, c.jsxs)(S.Ip, {
                                className: O.VH,
                                children: [
                                    (0, c.jsx)("ol", {
                                        className: O.DZ,
                                        style: { gap: i },
                                        "aria-label": j.intl.string(j.t.xfjsEV),
                                        children: n.map((t) =>
                                            (0, c.jsx)(
                                                "li",
                                                {
                                                    children: (0, c.jsx)(C.A, {
                                                        message: t,
                                                        channel: L,
                                                        compact: e,
                                                        author: { ...(0, I.p_)(t), colorString: "#dd80f4" },
                                                    }),
                                                },
                                                t.id,
                                            ),
                                        ),
                                    }),
                                    (0, c.jsxs)("div", {
                                        className: O.Jb,
                                        children: [
                                            (0, c.jsx)("div", {
                                                className: O.HD,
                                                children: D.map((e) => {
                                                    let { status: t, discriminator: n, mobile: i = !1 } = e;
                                                    return (0, c.jsx)(
                                                        T.eu,
                                                        {
                                                            status: t,
                                                            isMobile: i,
                                                            size: x._3.SIZE_32,
                                                            src: y.Ay.getDefaultAvatarURL(void 0, n),
                                                            "aria-label": j.intl.string(j.t.VKE5TK),
                                                        },
                                                        t,
                                                    );
                                                }),
                                            }),
                                            (0, c.jsx)(p.$, {
                                                text: j.intl.string(j.t["2RHHgz"]),
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
    eJ = (0, a.i4)(o.X.ACCESSIBILITY_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.G0neg7),
        icon: u.c,
        useMenu: P.A,
        buildLayout: () => [eQ],
    });
n(321073);
var e$ = n(650809),
    e0 = n(477782),
    e1 = n(562465),
    e2 = n(228366),
    e3 = n(74396),
    e5 = n(93055),
    e6 = n(269880),
    e4 = n(55619),
    e8 = n(351906),
    e7 = n(174459),
    e9 = n(812993),
    te = n(189081);
let tt = (0, a.zD)(o.X.SHOW_GAME_LIBRARY, {
        usePredicate: () => (0, m.bG)([te.A], () => te.A.hasLibraryApplication()),
        useTitle: () => j.intl.string(j.t.fi3UQN),
        useSubtitle: () => j.intl.string(j.t["8mYp37"]),
        useValue: () => !v.l_.useSetting(),
        setValue: (e) => v.l_.updateSetting(!e),
    }),
    tn = (0, a.zZ)(o.X.APPEARANCE_ADVANCED_CATEGORY, {
        useTitle: () => j.intl.string(j.t["8/udY0"]),
        buildLayout: () => [tt],
    });
var ti = n(284009),
    tl = n.n(ti),
    ts = n(199966),
    tr = n(963935);
function ta(e) {
    let { title: t } = e;
    return t;
}
function to(e) {
    let { useTitle: t, settingKey: n, formatter: i, index: l } = e,
        s = t();
    return "string" == typeof s ? i({ title: s, index: l, key: n }) : s;
}
function tu(e) {
    let { setting: t, formatter: n, index: i } = e;
    return () => (0, c.jsx)(to, { useTitle: t.useTitle, settingKey: t.key, formatter: n, index: i }, t.key);
}
function td(e) {
    return e.type === tr.Z6.LIST;
}
function tc(e, t) {
    let { limit: n = 2, formatter: i = ta } = t ?? {};
    tl()(n > 0, "[useSettingCollapsibleSubtitle] Limit must be greater than 0");
    let { visibleDirectory: l, accessibleDirectory: s } = (0, ts._)(),
        r = l.get(e) ?? s.get(e);
    tl()(
        null != r && (r.type === tr.Z6.ACCORDION || td(r)),
        "[useSettingCollapsibleSubtitle] Node is not a collapsible settings node",
    );
    let a = td(r) ? (r.collapseAfter ?? 0) : 0,
        o = r.layout;
    return g.useMemo(() => {
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
                return j.intl.format(j.t["3H9tCW"], { settingOneHook: tu({ setting: t[0], formatter: i, index: 0 }) });
            else if (2 === t.length)
                return j.intl.format(j.t.MWryo6, {
                    settingOneHook: tu({ setting: t[0], formatter: i, index: 0 }),
                    settingTwoHook: tu({ setting: t[1], formatter: i, index: 1 }),
                });
            else
                return j.intl.format(j.t.a00b5G, {
                    settingOneHook: tu({ setting: t[0], formatter: i, index: 0 }),
                    settingTwoHook: tu({ setting: t[1], formatter: i, index: 1 }),
                    settingThreeHook: tu({ setting: t[2], formatter: i, index: 2 }),
                });
        return 1 === l
            ? j.intl.format(j.t.O8vNbS, { settingOneHook: tu({ setting: t[0], formatter: i, index: 0 }) })
            : 2 === l
              ? j.intl.format(j.t["acXG/W"], {
                    settingOneHook: tu({ setting: t[0], formatter: i, index: 0 }),
                    settingTwoHook: tu({ setting: t[1], formatter: i, index: 1 }),
                })
              : j.intl.format(j.t["5+ldWc"], {
                    settingOneHook: tu({ setting: t[0], formatter: i, index: 0 }),
                    settingTwoHook: tu({ setting: t[1], formatter: i, index: 1 }),
                    settingThreeHook: tu({ setting: t[2], formatter: i, index: 2 }),
                });
    }, [n, a, o, i]);
}
var tg = n(951260);
let tm = (0, a.zD)(o.X.ENABLE_APPS_BUTTON, {
        useTitle: () => j.intl.string(j.t.ZTH4j4),
        useValue: () => (0, m.bG)([f.Ay], () => f.Ay.isAppsButtonEnabled),
        setValue: (e) => (0, et.n8)({ appsButtonEnabled: e }),
    }),
    tA = {
        useTitle: () => j.intl.string(j.t["I/5LyL"]),
        useValue: () => (0, m.bG)([f.Ay], () => f.Ay.isSubmitButtonEnabled),
        setValue: () => (0, et.Xt)(),
    },
    tE = (0, a.zD)(o.X.ENABLE_SEND_BUTTON, tA),
    th = (0, a.zD)(o.X.ENABLE_SEND_BUTTON_OUTSIDE_EXPERIMENT, {
        ...tA,
        usePredicate: () => !(0, tg.n)("EnableSendButtonOutsideExperiment"),
    }),
    tS = (0, a.zD)(o.X.CONDENSE_PICKER_WHEN_NARROW, {
        useTitle: () => j.intl.string(j.t.WggFoO),
        useSubtitle: () => j.intl.string(j.t.XpErGj),
        useValue: () => (0, m.bG)([f.Ay], () => f.Ay.condensePickerWhenNarrow),
        setValue: (e) => (0, et.n8)({ condensePickerWhenNarrow: e }),
        usePredicate: () => (0, m.bG)([f.Ay], () => f.Ay.expressionPickerFormat === f.IG.FLEXIBLE),
    }),
    tT = (0, a.zD)(o.X.ENABLE_EMOJI_BUTTON, {
        useTitle: () => j.intl.string(j.t.YErWkD),
        useValue: () => (0, m.bG)([f.Ay], () => f.Ay.isEmojiButtonEnabled),
        setValue: (e) => (0, et.n8)({ emojiButtonEnabled: e }),
        usePredicate: () => (0, m.bG)([f.Ay], () => f.Ay.expressionPickerFormat === f.IG.FLEXIBLE),
    }),
    tx = (0, a.zD)(o.X.ENABLE_GIF_BUTTON, {
        useTitle: () => j.intl.string(j.t.k7oNEz),
        useValue: () => (0, m.bG)([f.Ay], () => f.Ay.isGifButtonEnabled),
        setValue: (e) => (0, et.n8)({ gifButtonEnabled: e }),
        usePredicate: () => (0, m.bG)([f.Ay], () => f.Ay.expressionPickerFormat === f.IG.FLEXIBLE),
    }),
    tp = (0, a.zD)(o.X.ENABLE_STICKER_BUTTON, {
        useTitle: () => j.intl.string(j.t.Ar0krj),
        useValue: () => (0, m.bG)([f.Ay], () => f.Ay.isStickerButtonEnabled),
        setValue: (e) => (0, et.n8)({ stickerButtonEnabled: e }),
        usePredicate: () => (0, m.bG)([f.Ay], () => f.Ay.expressionPickerFormat === f.IG.FLEXIBLE),
    }),
    tf = (0, a.Qx)(o.X.EXPRESSION_PICKER_FORMAT, {
        useTitle: () => j.intl.string(j.t.AxRAWt),
        useValue: () => (0, m.bG)([f.Ay], () => f.Ay.expressionPickerFormat),
        setValue: (e) => (0, et.n8)({ expressionPickerFormat: e }),
        useOptions: function () {
            return [
                { name: j.intl.string(j.t.k86Soy), desc: j.intl.string(j.t.bSGTTZ), value: f.IG.FLEXIBLE },
                { name: j.intl.string(j.t.bjwSOn), desc: j.intl.string(j.t.We36HX), value: f.IG.CONDENSED },
                { name: j.intl.string(j.t.FDIKss), desc: j.intl.string(j.t["rclZL/"]), value: f.IG.HIDDEN },
            ];
        },
    }),
    t_ = (0, a.FW)(o.X.EXPRESSION_PICKER_FIELD_SET, {
        variant: "compact",
        isTitleHiddenVisually: !0,
        useTitle: () => j.intl.string(j.t["V9/cNN"]),
        buildLayout: () => [tf, tS, tT, tx, tp],
    }),
    tN = (0, a.bd)(o.X.CHAT_BAR_ADVANCED_ACCORDION, {
        useTitle: function (e) {
            return e ? j.intl.string(j.t.IwVGQs) : j.intl.string(j.t.cFNDh5);
        },
        useCollapsedSubtitle: () => tc(o.X.CHAT_BAR_ADVANCED_ACCORDION),
        usePredicate: () => (0, tg.n)("ChatBarAdvancedAccordion"),
        buildLayout: () => [tE, tm, t_],
    });
var tI = n(565645);
let tC = (0, a.zD)(o.X.CHAT_EMOJI_CONVERT_EMOTICONS, {
        useTitle: () => j.intl.string(j.t["79qal8"]),
        useSubtitle: () =>
            j.intl.format(j.t.GejoQK, { emojiHook: (e, t) => (0, c.jsx)(tI.A, { emojiName: "\uD83D\uDE42" }, t) }),
        useValue: v.j7.useSetting,
        setValue: v.j7.updateSetting,
    }),
    tb = (0, a.zD)(o.X.CHAT_GAME_MENTIONS_AUTOCOMPLETE, {
        useTitle: () => j.intl.string(j.t.c0oFDw),
        useValue: v.BQ.useSetting,
        setValue: v.BQ.updateSetting,
    }),
    ty = (0, a.zD)(o.X.CHAT_TEXT_BOX_PREVIEWS, {
        useTitle: () => j.intl.string(j.t.AqGrEI),
        useValue: v.SI.useSetting,
        setValue: (e) => {
            e7.default.track(A.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                enabled: e,
                location: { section: A.JJy.SETTINGS_TEXT_AND_IMAGES },
            }),
                v.SI.updateSetting(e);
        },
    });
var tv = n(793574);
let tj = (0, a.zD)(o.X.CHAT_STICKERS_AUTOCOMPLETE, {
        useTitle: () => j.intl.string(j.t["d+It2U"]),
        useValue: v.ML.useSetting,
        setValue: (e) => {
            e7.default.track(A.HAw.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
                enabled: e,
                location: { section: A.JJy.SETTINGS_TEXT_AND_IMAGES },
                location_stack: [tv.A.TEXT_AND_IMAGES],
            }),
                v.ML.updateSetting(e);
        },
    }),
    tO = (0, a.zZ)(o.X.APPEARANCE_CHAT_BOX_CATEGORY, {
        useTitle: () => j.intl.string(j.t.Ob7VMB),
        useSearchTerms: () => [j.intl.string(j.t.onqU6o)],
        buildLayout: () => [ty, tC, tj, tb, th, tN],
    });
var tL = n(526162),
    tD = n(793943),
    tR = n(792656),
    tP = n(830543),
    tG = n(785007),
    tM = n(806932),
    tU = n(915089),
    tV = n(174197),
    tk = n(202541);
let tw = (0, a.E2)(o.X.APPEARANCE_IN_APP_ICON, {
    useSearchTerms: () => [j.intl.string(j.t.gnwxvT)],
    Component: function () {
        let e = (0, tU.GV)(),
            { ref: t, ...n } = (0, tG._u)({ orientation: "horizontal", labelledBy: e }),
            i = (0, m.bG)([tL.A], () => tL.A.isUpsellPreview);
        return (
            (0, w.Ay)(() => {
                i &&
                    e7.default.track(A.HAw.PREMIUM_UPSELL_VIEWED, {
                        type: tk.e.APP_ICON_UPSELL,
                        location_stack: [tv.A.USER_SETTINGS],
                    });
            }),
            (0, c.jsx)("div", {
                ...n,
                ref: t,
                children: (0, c.jsx)(F.B, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    children: (0, c.jsx)(tM.m, { disabled: i, size: tV.N8.SIZE_48 }),
                }),
            })
        );
    },
});
function tF() {
    (0, tD.nf)(tD.HP.APP_ICON), (0, tP.default)();
}
function tB() {
    return (0, c.jsx)(tR.A, {
        subscriptionTier: tk.pe.TIER_2,
        defaultTextOverride: j.intl.string(j.t.mr4K7D),
        premiumModalAnalyticsLocation: { object: A.ZSU.BUTTON_CTA, objectType: A.AnalyticsObjectTypes.BUY },
        fullWidth: !0,
    });
}
let tz = (0, a.zZ)(o.X.APPEARANCE_IN_APP_ICON_CATEGORY, {
        useTitle: () => j.intl.string(j.t.RPh2ou),
        useSubtitle: () => j.intl.string(j.t.IgENJo),
        useHeaderDecoration: function () {
            let e = (0, m.bG)([tL.A], () => tL.A.isUpsellPreview);
            return g.useMemo(() => {
                let t = [];
                return (
                    t.push({
                        id: "preview-icon-button",
                        type: d.UV.BUTTON,
                        text: j.intl.string(j.t["6acvnZ"]),
                        onClick: tF,
                    }),
                    e && t.push({ id: "upsell-button", type: d.UV.STRONGLY_DISCOURAGED_CUSTOM, button: tB }),
                    { type: d.WX.BUTTON_GROUP, buttons: t }
                );
            }, [e]);
        },
        buildLayout: () => [tw],
    }),
    tX = (0, a.AK)(o.X.APPEARANCE_CHAT_ACCESSIBLITY_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.UDr3Iy),
        useSearchTerms: () => [j.intl.string(j.t.UDr3Iy)],
        destinationKey: o.X.ACCESSIBILITY_PANEL,
    }),
    tY = (0, a.gN)(o.X.APPEARANCE_CHAT_RELATED_SETTINGS, { buildLayout: () => [tX] });
var tH = n(452027),
    tK = n(243721),
    tW = n(976860),
    tZ = n(16236),
    tq = n(635233),
    tQ = n(551289),
    tJ = n(449817);
let t$ = eS.A.getArticleURL(A.MVz.FAVORITES_GUILD);
function t0() {
    let { analyticsLocations: e } = (0, eL.Ay)(tv.A.USER_SETTINGS_FAVORITES),
        t = g.useCallback(() => {
            (0, tq.mv)("settings_page"), (0, tW.uh)(A.YYv), (0, tP.default)();
        }, []);
    return (0, c.jsx)(eL.f5, {
        value: e,
        children: (0, c.jsx)(tH.D, {
            label: j.intl.string(tJ.default.OT1NK5),
            description: j.intl.format(tJ.default.GR2KOG, { helpCenterLink: t$ }),
            layout: "horizontal-responsive",
            badge: "beta",
            children: (0, c.jsxs)(F.B, {
                direction: "horizontal",
                gap: 8,
                fullWidth: !1,
                children: [
                    (0, c.jsx)(p.$, { variant: "secondary", text: j.intl.string(tJ.default["7WwLnr"]), onClick: t }),
                    (0, c.jsx)(tR.A, {
                        subscriptionTier: tk.pe.TIER_2,
                        defaultTextOverride: j.intl.string(tJ.default["20sYUU"]),
                    }),
                ],
            }),
        }),
    });
}
let t1 = (0, a.E2)(o.X.CHAT_FAVORITES_TOGGLE, {
        usePredicate: () => (0, e5.TW)("FavoritesGuildToggle").isExperimentEnabled,
        useSearchTerms: () => [j.intl.string(tJ.default.OT1NK5)],
        Component: function () {
            let { hasAccess: e } = (0, e5.TW)("FavoritesGuildVisibilitySetting"),
                t = (0, tQ.dM)();
            return e
                ? (0, c.jsx)(tK.d, {
                      checked: t,
                      description: j.intl.format(tJ.default.GR2KOG, { helpCenterLink: t$ }),
                      onChange: tZ.kG,
                      label: j.intl.string(tJ.default.OT1NK5),
                      badge: "beta",
                  })
                : (0, c.jsx)(t0, {});
        },
    }),
    t2 = (0, a.zD)(o.X.CHAT_INLINE_MEDIA_LINKS, {
        useTitle: () => j.intl.string(j.t.U47N1p),
        useValue: v.hD.useSetting,
        setValue: v.hD.updateSetting,
    }),
    t3 = (0, a.zD)(o.X.CHAT_INLINE_MEDIA_UPLOADS, {
        useTitle: () => j.intl.string(j.t.VP11No),
        useValue: v.X6.useSetting,
        setValue: v.X6.updateSetting,
    }),
    t5 = (0, a.FW)(o.X.CHAT_INLINE_FIELD_SET, {
        useTitle: () => j.intl.string(j.t["9nyle0"]),
        buildLayout: () => [t2, t3],
    }),
    t6 = (0, a.zD)(o.X.CHAT_EMBEDS_RENDER_EMBEDS, {
        useTitle: () => j.intl.string(j.t["5bK9vw"]),
        useValue: v.rs.useSetting,
        setValue: v.rs.updateSetting,
    }),
    t4 = (0, a.zD)(o.X.CHAT_EMOJI_RENDER_REACTIONS, {
        useTitle: () => j.intl.string(j.t["zge/fP"]),
        useValue: v.jW.useSetting,
        setValue: v.jW.updateSetting,
    });
var t8 = n(939249),
    t7 = n(817281),
    t9 = n(766075);
let ne = (0, a.zD)(o.X.APPEARANCE_DISPLAY_COMPACT_AVATARS, {
        useTitle: () => j.intl.string(j.t.JgjNG3),
        useSubtitle: () => {
            if (!v.hH.useSetting())
                return j.intl.format(j.t["31PRaj"], {
                    a11yHook: (e, t) =>
                        (0, c.jsx)(
                            t8.D,
                            {
                                tag: "a",
                                onClick: () => (0, t9.openUserSettings)(o.X.APPEARANCE_MESSAGE_DISPLAY_MODE),
                                children: e,
                            },
                            t,
                        ),
                });
        },
        useDisabled: () => !v.hH.useSetting(),
        useValue: () => {
            let e = (0, m.bG)([eu.Ay], () => eu.Ay.displayCompactAvatars);
            return !v.hH.useSetting() || e;
        },
        setValue: (e) => {
            t7.Ay.updatedUnsyncedSettings({ displayCompactAvatars: e });
        },
    }),
    nt = (0, a.Hn)(o.X.CHAT_SPOILERS_SHOW_SPOILERS, {
        useTitle: () => j.intl.string(j.t.QgwmVz),
        useOptions: () => [
            { value: A.P6Q.ON_CLICK, id: A.P6Q.ON_CLICK, label: j.intl.string(j.t["KFH/me"]) },
            { value: A.P6Q.ALWAYS, id: A.P6Q.ALWAYS, label: j.intl.string(j.t.Pe1RbL) },
            { value: A.P6Q.IF_MODERATOR, id: A.P6Q.IF_MODERATOR, label: j.intl.string(j.t.K5VTBE) },
        ],
        useValue: v.gs.useSetting,
        setValue: v.gs.updateSetting,
    }),
    nn = (0, a.zD)(o.X.CHAT_THREADS_SPLIT_VIEW, {
        useTitle: () => j.intl.string(j.t.AInv5m),
        useValue: v.SY.useSetting,
        setValue: v.SY.updateSetting,
    }),
    ni = (0, a.zZ)(o.X.APPEARANCE_MESSAGES_CATEGORY, {
        useTitle: () => j.intl.string(j.t.OIgYlQ),
        useSearchTerms: () => [j.intl.string(j.t["/VQax8"])],
        buildLayout: () => [t5, t6, t4, nt, nn, ne, t1, tY],
    });
var nl = n(753806),
    ns = n(145331);
let nr = (0, a.Qx)(o.X.MESSAGE_SEARCH_DEFAULT_DM_SEARCH_BEHAVIOR, {
        useTitle: () => j.intl.string(j.t.VkoLsy),
        useSearchTerms: () => [j.intl.string(j.t["t4+fbe"])],
        useOptions: function () {
            return [
                { name: j.intl.string(j.t.E9JM4J), value: 0 },
                { name: j.intl.string(j.t["Kr+lPi"]), value: 1 },
            ];
        },
        useValue: () => +!!v.Hu.useSetting(),
        setValue: (e) => {
            let t = 1 === e;
            t ? nl.A.cleanUpPrivateChannelSearchState() : nl.A.cleanUpSearchState({ type: A.I4_.DMS }),
                (0, ns._k)({
                    prevIsCrossDMSettingEnabled: v.Hu.getSetting(),
                    isCrossDMSettingEnabled: t,
                    location: ns.vy.USER_SETTINGS,
                }),
                v.Hu.updateSetting(t);
        },
    }),
    na = (0, a.zZ)(o.X.APPEARANCE_SEARCH_CATEGORY, {
        useTitle: () => j.intl.string(j.t["5h0QOP"]),
        buildLayout: () => [nr],
    });
var no = n(574381);
let nu = (0, a.zD)(o.X.STREAMING_AUTO_STREAMER_MODE, {
        useTitle: () => j.intl.string(j.t.IxjaoF),
        useValue: function () {
            return (0, m.bG)([e8.A], () => {
                let { autoToggle: e } = e8.A.getSettings();
                return e;
            });
        },
        setValue: function (e) {
            e4.A.update({ autoToggle: e });
        },
        usePredicate: function () {
            return no.Av;
        },
    }),
    nd = (0, a.zD)(o.X.STREAMING_STREAMER_MODE, {
        useTitle: () => j.intl.string(j.t.TGNg6T),
        useSubtitle: () => j.intl.string(j.t["4nXLnE"]),
        useValue: function () {
            return (0, m.bG)([e8.A], () => {
                let { enabled: e } = e8.A.getSettings();
                return e;
            });
        },
        setValue: function (e) {
            e4.A.update({ enabled: e });
        },
    });
var nc = n(77729),
    ng = n(589051),
    nm = n(588857),
    nA = n(999834);
let nE = [],
    nh = (0, a.Hn)(o.X.STREAMER_MODE_HIDE_OVERLAY_WIDGETS, {
        selectionMode: "multiple",
        useTitle: () => j.intl.string(j.t.VCDSLW),
        useSearchTerms: () => [j.intl.string(j.t.VCDSLW)],
        usePredicate: () => {
            let e = (0, nA.b_)(),
                t = (0, ng.Mn)("StreamerModeSettings");
            return e && t;
        },
        useOptions: function () {
            return g.useMemo(() => {
                let e = [];
                for (let [t, n] of Object.entries(nm.A))
                    null != n.streamerModeLabel &&
                        (null == n.predicate || n.predicate()) &&
                        e.push({ id: t, value: t, label: n.streamerModeLabel() });
                return e;
            }, []);
        },
        useValue: function () {
            return (0, m.bG)([e8.A], () => e8.A.getSettings().disabledOverlayWidgets ?? nE);
        },
        setValue: (e) => e4.A.update({ disabledOverlayWidgets: e }),
        closeOnSelect: !1,
        wrapTags: !0,
    }),
    nS = (0, a.zD)(o.X.STREAMER_MODE_HIDE_PERSONAL_INFORMATION, {
        useTitle: () => j.intl.string(j.t.LSBUGR),
        useValue: () =>
            (0, m.bG)([e8.A], () => {
                let { hidePersonalInformation: e } = e8.A.getSettings();
                return e;
            }),
        setValue: (e) => e4.A.update({ hidePersonalInformation: e }),
    }),
    nT = (0, a.zD)(o.X.STREAMER_MODE_HIDE_INVITE_LINKS, {
        useTitle: () => j.intl.string(j.t.uWBOri),
        useValue: () =>
            (0, m.bG)([e8.A], () => {
                let { hideInstantInvites: e } = e8.A.getSettings();
                return e;
            }),
        setValue: (e) => e4.A.update({ hideInstantInvites: e }),
    }),
    nx = (0, a.zD)(o.X.STREAMER_MODE_DISABLE_SOUNDS, {
        useTitle: () => j.intl.string(j.t.OrqYDP),
        useValue: () =>
            (0, m.bG)([e8.A], () => {
                let { disableSounds: e } = e8.A.getSettings();
                return e;
            }),
        setValue: (e) => e4.A.update({ disableSounds: e }),
    }),
    np = (0, a.zD)(o.X.STREAMER_MODE_DISABLE_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.sUAbLd),
        useValue: () =>
            (0, m.bG)([e8.A], () => {
                let { disableNotifications: e } = e8.A.getSettings();
                return e;
            }),
        setValue: (e) => e4.A.update({ disableNotifications: e }),
    }),
    nf = (0, a.zD)(o.X.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE, {
        useTitle: () => j.intl.string(j.t["iA81+a"]),
        useSubtitle: () => j.intl.string(j.t.P4vj0h),
        useValue: () =>
            (0, m.bG)([e8.A], () => {
                let { enableContentProtection: e } = e8.A.getSettings();
                return e;
            }),
        setValue: (e) => e4.A.update({ enableContentProtection: e }),
        usePredicate: () => nc.A?.window?.supportsContentProtection?.() ?? !1,
    }),
    n_ = (0, a.FW)(o.X.STREAMER_MODE_OPTIONS_LIST, {
        variant: "compact",
        useTitle: () => j.intl.string(j.t.xYhOEh),
        buildLayout: () => [nS, nT, nx, np, nf, nh],
    }),
    nN = (0, a.zZ)(o.X.STREAMER_MODE_CATEGORY, {
        useTitle: () => j.intl.string(j.t.S5GfOW),
        buildLayout: () => [nd, nu, n_],
    });
var nI = n(147248),
    nC = n(141343),
    nb = n(665267),
    ny = n(414133),
    nv = n(412848);
let nj = (0, a.Hn)(o.X.APPEARANCE_GUILD_THEME_DEFAULT_PREFERENCE, {
        useTitle: () => j.intl.string(j.t.Q7mm4g),
        useSearchTerms: () => [j.intl.string(nv.default["/6NbRv"])],
        useOptions: () => [
            { id: "guild", label: j.intl.string(j.t["hrS/Pc"]), value: ek.tI.GUILD },
            { id: "personal", label: j.intl.string(j.t.mlvXIq), value: ek.tI.PERSONAL },
        ],
        useValue: () => v.zY.useSetting(),
        setValue: v.zY.updateSetting,
        usePredicate: () => (0, ny.OS)("GuildThemeDefaultPreferenceSetting"),
    }),
    nO = (0, a.zD)(o.X.SYNC_PROFILE_THEMES, {
        useTitle: () => j.intl.string(j.t.C00w4l),
        useValue: () => (0, m.bG)([f.Ay], () => f.Ay.syncProfileThemeWithUserTheme),
        setValue: () => (0, et.M1)(),
    });
var nL = n(458024),
    nD = n(284016),
    nR = n(363195);
let nP = (0, a.zD)(o.X.APPEARANCE_SYNC_THEME, {
    useTitle: () => j.intl.string(j.t["/B+kEV"]),
    useSearchTerms: () => [j.intl.string(j.t.Ksh3ik)],
    useValue: function () {
        return (0, m.bG)([nD.A], () => !1 !== nD.A.shouldSync("appearance"));
    },
    useDisabled: function () {
        let e = (0, nL.Ay)("SyncThemeSetting"),
            t = (0, m.bG)([nR.A], () => nR.A.isSameAsDeviceThemeEnabled());
        return e && t;
    },
    setValue: function (e) {
        var t;
        let n = nR.A.theme,
            i = nI.A.gradientPreset?.id ?? null,
            l = v.eh.getSetting()?.customUserThemeSettings != null;
        (t = A.HAw.SYNC_ACROSS_CLIENTS_TOGGLED),
            e2.h.dispatch({
                type: "TRACK",
                event: t,
                properties: { is_sync_enabled: e, base_theme: n, client_theme: i, has_custom_theme: l },
            }),
            t7.Ay.setShouldSyncAppearanceSettings(e);
    },
});
var nG = n(393284);
let nM = (0, a.AK)(o.X.APPEARANCE_THEME_ACCESSIBLITY_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.nhVQDJ),
        useSearchTerms: () => [j.intl.string(j.t.nhVQDJ)],
        destinationKey: o.X.ACCESSIBILITY_PANEL,
    }),
    nU = (0, a.gN)(o.X.APPEARANCE_THEME_RELATED_SETTINGS, { buildLayout: () => [nM] }),
    nV = (0, a.zZ)(o.X.APPEARANCE_THEME_CATEGORY, {
        useTitle: () => j.intl.string(j.t.Ksh3ik),
        useInlineNotice: function () {
            return (0, m.bG)([f.Ay], () => f.Ay.useForcedColors)
                ? {
                      type: d.lT.INLINE_NOTICE,
                      noticeType: "info",
                      text: (0, eh.D)()
                          ? j.intl.format(j.t.Jae48E, {
                                onClick: () => {
                                    (0, t9.openUserSettings)(o.X.SYNC_FORCED_COLORS);
                                },
                            })
                          : j.intl.string(j.t.AUMSZP),
                  }
                : null;
        },
        useHeaderDecoration: function () {
            let e = (0, m.bG)([nI.A, f.Ay], () => f.Ay.useForcedColors || nI.A.isPreview),
                t = (0, nC.V)();
            return e || t
                ? null
                : {
                      type: d.WX.BUTTON_GROUP,
                      buttons: [
                          {
                              id: "open-client-themes-button",
                              type: d.UV.BUTTON,
                              text: j.intl.string(j.t["E+COuA"]),
                              onClick: nb.J3,
                          },
                      ],
                  };
        },
        buildLayout: () => [nG.k, nP, nO, nj, nU],
    }),
    nk = (0, a.t_)(o.X.APPEARANCE_PANEL, {
        initialize: function () {
            e3.A.isFetching() ||
                (e2.h.dispatch({ type: "SAVED_CUSTOM_THEMES_FETCH_START" }),
                e1.Bo.get({ url: A.Rsh.USERS_ME_CUSTOM_THEMES, oldFormErrors: !0, rejectWithError: !0 })
                    .then((e) => {
                        e2.h.dispatch({
                            type: "SAVED_CUSTOM_THEMES_FETCH_SUCCESS",
                            themes: e.body?.custom_themes ?? [],
                        });
                    })
                    .catch((e) => {
                        e2.h.dispatch({ type: "SAVED_CUSTOM_THEMES_FETCH_FAILURE", error: e });
                    }));
        },
        useTitle: () => j.intl.string(j.t["iHH+ky"]),
        buildLayout: () => [nV, tz, ni, tO, na, nN, tn],
    }),
    nw = [
        { badgeType: d.Xi.NEW, dismissibleContent: er.M.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE },
        {
            badgeType: d.Xi.STRONGLY_DISCOURAGED_CUSTOM,
            dismissibleContent: er.M.FAVORITES_GUILD_NEW_BADGE,
            StronglyDiscouragedCustomComponent: function () {
                return (0, c.jsx)(e9.JI, { text: j.intl.string(j.t.y2b7CA) });
            },
        },
    ],
    nF = (0, a.i4)(o.X.APPEARANCE_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["iHH+ky"]),
        icon: e$.B,
        useMenu: function () {
            let e,
                t,
                n,
                i = (0, e6.A)(),
                l =
                    ((e = v.D_.useSetting()),
                    (t = v.SI.useSetting()),
                    e
                        ? null
                        : (0, c.jsx)(e0.sL, {
                              id: "preview-markdown-toggle",
                              label: j.intl.string(j.t.sHJ9wZ),
                              action: () => {
                                  let e = !t;
                                  e7.default.track(A.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                                      enabled: e,
                                      location: { section: A.JJy.SETTINGS_CONTEXT_MENU },
                                  }),
                                      v.SI.updateSetting(e);
                              },
                              checked: t,
                          })),
                s =
                    ((n = (0, m.bG)([e8.A], () => e8.A.enabled, [])),
                    (0, c.jsx)(e0.sL, {
                        id: "streamer-mode-toggle",
                        label: j.intl.string(j.t.p9ZAJZ),
                        action: () => {
                            e4.A.setEnabled(!n);
                        },
                        checked: n,
                    }));
            return g.useMemo(() => {
                let e = [...i];
                return (
                    null != l &&
                        e.push((0, c.jsx)(e0.rX, { label: j.intl.string(j.t.Ob7VMB), children: l }, "text-and-images")),
                    null != s && e.push((0, c.jsx)(e0.rX, { children: s }, "streamer-mode")),
                    e
                );
            }, [i, l, s]);
        },
        getDismissibleBadges: () =>
            (0, e5.ad)().isFreemium
                ? nw.filter((e) => {
                      let { dismissibleContent: t } = e;
                      return t !== er.M.FAVORITES_GUILD_NEW_BADGE;
                  })
                : nw,
        buildLayout: () => [nk],
    });
var nB = n(37646),
    nz = n(434404);
let nX = (0, a.t_)(o.X.LANGUAGE_AND_TIME_PANEL, {
        useTitle: () => j.intl.string(j.t.KyFVyi),
        buildLayout: () => [nz.F],
    }),
    nY = (0, a.i4)(o.X.LANGUAGE_AND_TIME_SIDEBAR_ITEM, {
        icon: nB.U,
        useTitle: () => j.intl.string(j.t.KyFVyi),
        buildLayout: () => [nX],
    });
var nH = n(3137),
    nK = n(661531),
    nW = n(314116),
    nZ = n(270003),
    nq = n(369606),
    nQ = n(320448),
    nJ = n(604121),
    n$ = n(725951),
    n0 = n(400492),
    n1 = n(669067),
    n2 = n(115063),
    n3 = n(754692),
    n5 = n(927018),
    n6 = n(512599),
    n4 = n(532197),
    n8 = n(403362),
    n7 = n(874486),
    n9 = n(503698),
    ie = n.n(n9),
    it = n(989349),
    ii = n.n(it),
    il = n(58703),
    is = n(906688),
    ir = n(892208);
function ia(e) {
    let { achievementId: t, dateUnlocked: n } = e,
        i = (0, n5.vM)(t);
    if (null == i) return null;
    let l = null != n,
        { name: s, description: r, hideDescriptionUntilUnlock: a, onAction: o } = i,
        u = a && !l,
        d = l ? "text-strong" : "text-muted",
        g = l ? "text-default" : "text-muted",
        m = ii()(n),
        A = null != o && l,
        E = A ? t8.D : "div";
    return (0, c.jsxs)(E, {
        className: ie()(ir.kL, A && ir.b),
        onClick: function () {
            A && o();
        },
        children: [
            (0, c.jsx)("div", {
                className: ir.zc,
                children: (0, c.jsx)(is.A, { achievementId: t, size: is.A.Sizes.SIZE_40, unlocked: l }),
            }),
            (0, c.jsxs)("div", {
                className: ir.VW,
                children: [
                    null != n &&
                        (0, c.jsx)(z.E, {
                            variant: "text-xxs/semibold",
                            color: "text-muted",
                            className: ir.YR,
                            children: (0, il.mk)(m),
                        }),
                    (0, c.jsx)(z.E, { variant: "text-md/medium", color: d, children: s() }),
                    (0, c.jsx)(z.E, { variant: "text-xs/normal", color: g, children: u ? "?????" : r() }),
                ],
            }),
        ],
    });
}
var io = n(776351);
function iu(e) {
    let { onBackClick: t } = e,
        n = (0, m.bG)([n7.A], () => n7.A.getAllUnlockedAchievements()),
        i = g.useMemo(() => Object.values(n).sort((e, t) => t.dateUnlocked - e.dateUnlocked), [n]),
        l = g.useMemo(
            () =>
                Object.values(n5.l0)
                    .filter(n8.Vq)
                    .filter((e) => null == n[e.id])
                    .sort((e, t) => e.rarity - t.rarity),
            [n],
        );
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsxs)(t8.D, {
                onClick: t,
                className: io.vv,
                children: [
                    (0, c.jsx)(n4.A, { direction: n4.A.Directions.LEFT, className: io.Kk }),
                    (0, c.jsx)(z.E, {
                        variant: "text-lg/normal",
                        color: "text-default",
                        children: j.intl.string(j.t["13/7kX"]),
                    }),
                ],
            }),
            (0, c.jsxs)("div", {
                className: io.N1,
                children: [
                    (0, c.jsxs)("div", {
                        className: io.if,
                        children: [
                            (0, c.jsx)(h.D, {
                                variant: "heading-lg/extrabold",
                                color: "text-strong",
                                children: j.intl.string(j.t["6jI0hd"]),
                            }),
                            (0, c.jsx)(z.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                children: j.intl.string(j.t.GuUItX),
                            }),
                        ],
                    }),
                    (0, c.jsx)("div", {
                        className: io.nr,
                        children: (0, c.jsx)(nq.O, {
                            size: "custom",
                            color: nK.A.unsafe_rawColors.ORANGE_345.css,
                            width: 40,
                            height: 40,
                        }),
                    }),
                ],
            }),
            i.length > 0 &&
                (0, c.jsx)("div", {
                    className: io.yF,
                    children: (0, c.jsx)("div", {
                        className: io.Eh,
                        children: i.map((e) => {
                            let { achievementId: t, dateUnlocked: n } = e;
                            return (0, c.jsx)(ia, { achievementId: t, dateUnlocked: n }, t);
                        }),
                    }),
                }),
            l.length > 0 &&
                (0, c.jsxs)("div", {
                    className: io.yF,
                    children: [
                        (0, c.jsx)("div", {
                            className: io.if,
                            children: (0, c.jsx)(z.E, {
                                variant: "text-md/bold",
                                color: "text-default",
                                children: j.intl.string(j.t.GFyMg1),
                            }),
                        }),
                        (0, c.jsx)("div", {
                            className: io.Eh,
                            children: l.map((e) => (0, c.jsx)(ia, { achievementId: e.id }, e.id)),
                        }),
                    ],
                }),
            (0, c.jsx)("div", { className: io.yF, children: (0, c.jsx)("div", { className: io.F3 }) }),
        ],
    });
}
var id = n(224964),
    ic = n(31408),
    ig = n(381579);
let im = { enabled: !0, combosEnabled: !0, screenshakeEnabled: !1, confettiEnabled: !1 },
    iA = (0, V.range)(0, 11),
    iE = (0, V.range)(0, 2.25, 0.25),
    ih = (0, V.range)(1, 11),
    iS = (0, V.range)(1, 26),
    iT = { 0: "poggermode_settings_panel", 1: "poggermode_achievements_panel" };
function ix(e) {
    let { disabled: t, locations: n, settingsLocations: i, onChange: l } = e,
        s = n.map((e) =>
            (0, c.jsx)(
                tK.d,
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
    return (0, c.jsx)(nZ.n, { label: j.intl.string(j.t.bWVN1D), children: s });
}
function ip(e) {
    let { children: t } = e;
    return (0, c.jsx)(z.E, { className: ig.iF, variant: "text-sm/normal", color: "text-default", children: t });
}
function i_(e) {
    let {
            settings: { enabled: t, warningSeen: n },
            updateSettings: i,
        } = e,
        l = (0, m.bG)([f.Ay], () => f.Ay.useReducedMotion);
    return (0, c.jsx)(tK.d, {
        label: j.intl.string(j.t.vuiXm9),
        description: j.intl.string(j.t.KuYbWN),
        checked: t,
        onChange: function (e) {
            e || (0, n3._)(n5.sn.DISABLE_POGGERMODE),
                e && (!n || l)
                    ? (0, nW.A)({
                          title: l ? j.intl.string(j.t["FxT+p0"]) : j.intl.string(j.t.TAZ4F9),
                          subtitle: l ? j.intl.string(j.t.gmixrx) : j.intl.string(j.t.jN3t3K),
                          confirmText: j.intl.string(j.t.JFfins),
                          onConfirm: () => i(l ? im : { enabled: !0, warningSeen: !0 }),
                      })
                    : i({ enabled: e });
        },
    });
}
function iN(e) {
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
    return (0, c.jsxs)(nZ.n, {
        label: j.intl.string(j.t.mqxwJO),
        children: [
            (0, c.jsx)(tK.d, {
                label: j.intl.string(j.t.s0KCgF),
                description: j.intl.string(j.t.O1Vflg),
                checked: n,
                disabled: !t,
                onChange: (e) => r({ confettiEnabled: e }, 0),
            }),
            (0, c.jsxs)("div", {
                children: [
                    (0, c.jsx)(z.E, {
                        variant: "text-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: ig.KF,
                        children: j.intl.string(j.t.vd0D81),
                    }),
                    (0, c.jsx)(ip, { children: j.intl.string(j.t.a18Sug) }),
                    (0, c.jsx)(B.A, {
                        disabled: a,
                        markers: ih,
                        stickToMarkers: !0,
                        minValue: ih[0],
                        maxValue: ih[ih.length - 1],
                        initialValue: i,
                        onValueChange: (e) => r({ confettiCount: e }, 0),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
            (0, c.jsxs)("div", {
                children: [
                    (0, c.jsx)(z.E, {
                        variant: "text-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: ig.KF,
                        children: j.intl.string(j.t.sPO3ij),
                    }),
                    (0, c.jsx)(ip, { children: j.intl.string(j.t.xoldVn) }),
                    (0, c.jsx)(B.A, {
                        disabled: a,
                        markers: iS,
                        stickToMarkers: !0,
                        minValue: iS[0],
                        maxValue: iS[iS.length - 1],
                        initialValue: l,
                        onValueChange: (e) => r({ confettiSize: e }, 0),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
            (0, c.jsx)(ix, {
                disabled: a,
                locations: [
                    {
                        location: ic.k.CHAT_INPUT,
                        title: j.intl.string(j.t.elTtyz),
                        description: j.intl.string(j.t.HtKfMi),
                    },
                    {
                        location: ic.k.REACTION,
                        title: j.intl.string(j.t.Ik4VIa),
                        description: j.intl.string(j.t.y4rqK0),
                    },
                    {
                        location: ic.k.MEMBER_USER,
                        title: j.intl.string(j.t.ZXBlAn),
                        description: j.intl.string(j.t["m9RD+c"]),
                    },
                    {
                        location: ic.k.CALL_TILE,
                        title: j.intl.string(j.t.V66giQ),
                        description: j.intl.string(j.t.fiHV7u),
                    },
                ],
                settingsLocations: s,
                onChange: (e) => r({ confettiEnabledLocations: e }, 0),
            }),
        ],
    });
}
function iI(e) {
    let {
            settings: { enabled: t, combosEnabled: n, comboSoundsEnabled: i, combosRequiredCount: l },
            updateSettings: s,
        } = e,
        r = !t || !n;
    return (0, c.jsxs)(nZ.n, {
        label: j.intl.string(j.t.Xz0ole),
        children: [
            (0, c.jsx)(tK.d, {
                label: j.intl.string(j.t.o3iV7B),
                description: j.intl.string(j.t["31Z8Ee"]),
                checked: n,
                disabled: !t,
                onChange: (e) => s({ combosEnabled: e }),
            }),
            (0, c.jsx)(tK.d, {
                label: j.intl.string(j.t["Ax+IoW"]),
                description: j.intl.string(j.t["9rgQEr"]),
                checked: i,
                disabled: !t,
                onChange: (e) => s({ comboSoundsEnabled: e }),
            }),
            (0, c.jsxs)("div", {
                children: [
                    (0, c.jsx)(z.E, {
                        variant: "text-md/semibold",
                        color: r ? "text-muted" : "text-strong",
                        className: ig.KF,
                        children: j.intl.string(j.t.L0oQuh),
                    }),
                    (0, c.jsx)(ip, { children: j.intl.string(j.t["/OOFpL"]) }),
                    (0, c.jsx)(B.A, {
                        disabled: r,
                        markers: iA,
                        stickToMarkers: !0,
                        minValue: iA[0],
                        maxValue: iA[iA.length - 1],
                        initialValue: l,
                        onValueChange: (e) => s({ combosRequiredCount: e }),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
        ],
    });
}
function iC(e) {
    let {
            settings: { enabled: t, screenshakeEnabled: n, shakeIntensity: i, screenshakeEnabledLocations: l },
            updateSettings: s,
        } = e,
        r = (0, m.bG)([f.Ay], () => f.Ay.useReducedMotion),
        a = !t || !n || r;
    return (0, c.jsxs)(nZ.n, {
        label: j.intl.string(j.t.wVS5Sd),
        children: [
            (0, c.jsx)(tK.d, {
                label: j.intl.string(j.t.N004zO),
                description: r ? j.intl.string(j.t.GckHGw) : j.intl.string(j.t.Qq5W3v),
                checked: n && !r,
                disabled: !t || r,
                onChange: (e) => s({ screenshakeEnabled: e }, 1),
            }),
            (0, c.jsxs)("div", {
                children: [
                    (0, c.jsx)(z.E, {
                        variant: "text-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: ig.KF,
                        children: j.intl.string(j.t.UxnnC4),
                    }),
                    (0, c.jsx)(ip, { children: j.intl.string(j.t.CEOEOb) }),
                    (0, c.jsx)(B.A, {
                        disabled: a,
                        markers: iE,
                        equidistant: !0,
                        stickToMarkers: !0,
                        minValue: iE[0],
                        maxValue: iE[iE.length - 1],
                        initialValue: i,
                        onValueChange: (e) => {
                            var t;
                            null != (t = { shakeIntensity: e }).shakeIntensity &&
                                t.shakeIntensity > i &&
                                (0, n3._)(n5.sn.MORE),
                                s(t, 1);
                        },
                        onMarkerRender: (e) => (e === iE[iE.length - 1] ? j.intl.string(j.t["4rbMWc"]) : `${100 * e}%`),
                    }),
                ],
            }),
            (0, c.jsx)(ix, {
                disabled: a,
                locations: [
                    {
                        location: ic.uD.CHAT_INPUT,
                        title: j.intl.string(j.t.vUcvPP),
                        description: j.intl.string(j.t.y00OrF),
                    },
                    {
                        location: ic.uD.VOICE_USER,
                        title: j.intl.string(j.t.TcRO54),
                        description: j.intl.string(j.t.YJCxVY),
                    },
                    {
                        location: ic.uD.MENTION,
                        title: j.intl.string(j.t.oW4shO),
                        description: j.intl.string(j.t["mqfw/H"]),
                    },
                ],
                settingsLocations: l,
                onChange: (e) => s({ screenshakeEnabledLocations: e }, 1),
            }),
        ],
    });
}
function ib(e) {
    let { updateSettings: t } = e;
    return (0, c.jsx)(nZ.n, {
        label: j.intl.string(j.t.EuXv2q),
        children: (0, c.jsxs)(F.B, {
            gap: 16,
            children: [
                (0, c.jsx)("div", { children: j.intl.string(j.t["1SLnki"]) }),
                (0, c.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: ig.hw,
                    children: (0, c.jsx)(p.$, {
                        variant: "primary",
                        size: "sm",
                        text: j.intl.string(j.t.qz65yY),
                        onClick: function () {
                            t({ enabled: !1, settingsVisible: !1 }), (0, tP.default)();
                        },
                    }),
                }),
            ],
        }),
    });
}
function iy(e) {
    let { onChangePage: t } = e;
    return (0, c.jsxs)(t8.D, {
        onClick: function () {
            return t(1);
        },
        className: ig.Tq,
        children: [
            (0, c.jsx)("div", {
                className: ig.w1,
                children: (0, c.jsx)(nq.O, { size: "md", color: nK.A.unsafe_rawColors.ORANGE_345.css }),
            }),
            (0, c.jsxs)("div", {
                className: ig.qL,
                children: [
                    (0, c.jsx)(h.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: j.intl.string(j.t["6jI0hd"]),
                    }),
                    (0, c.jsx)(z.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        children: j.intl.string(j.t.GuUItX),
                    }),
                ],
            }),
            (0, c.jsx)(nQ._, { size: "custom", color: "currentColor", width: 16, className: ig.nT }),
        ],
    });
}
function iv() {
    return n
        .e("4660")
        .then(n.t.bind(n, 662336, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
}
function ij(e) {
    let { onChangePage: t, setShowEnableAnimation: n } = e,
        i = (0, m.cf)([nH.A], () => nH.A.getState()),
        [l, s] = g.useState({ x: 0, y: 0 }),
        r = (0, id.A)();
    function a(e, t) {
        var s, a, o, u, d, c, g, m;
        if (
            (e.enabled &&
                !1 === i.enabled &&
                (n(!0),
                (0, n0.Ak)("poggermode_enabled"),
                (0, n2.fO)({ duration: 2e3, intensity: e.shakeIntensity ?? i.shakeIntensity })),
            (0, n6.O9)(e),
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
        1 === t && E && (0, n2.fO)({ duration: 1e3, intensity: e.shakeIntensity ?? i.shakeIntensity });
    }
    function o(e) {
        s({ x: e.clientX, y: e.clientY });
    }
    return (
        g.useEffect(
            () => (window.addEventListener("mousemove", o), () => window.removeEventListener("mousemove", o)),
            [],
        ),
        (0, c.jsxs)(F.B, {
            gap: 24,
            children: [
                (0, c.jsx)(i_, { settings: i, updateSettings: a }),
                (0, c.jsx)(iy, { onChangePage: t }),
                (0, c.jsx)(iI, { settings: i, updateSettings: a }),
                (0, c.jsx)(iC, { settings: i, updateSettings: a }),
                (0, c.jsx)(iN, { settings: i, updateSettings: a }),
                (0, c.jsx)(ib, { updateSettings: a }),
            ],
        })
    );
}
function iO(e) {
    return 0 === e ? n$.f.LEFT : n$.f.RIGHT;
}
let iL = (0, a.E2)(o.X.POGGERMODE_SETTING, {
        Component: function () {
            let [e, t] = g.useState(0),
                [n, i] = g.useState(iO(e)),
                [l, s] = g.useState(!1),
                r = (0, m.bG)([f.Ay], () => f.Ay.useReducedMotion),
                a = l && !r;
            return (
                g.useEffect(() => {
                    let t = setTimeout(() => {
                        i(iO(e));
                    }, 500);
                    return () => clearTimeout(t);
                }, [e]),
                g.useEffect(() => {
                    (0, n1._)(iT[e]);
                }, [e]),
                g.useEffect(() => {
                    Math.random() > 0.99 && (0, n3._)(n5.sn.VISITOR_100);
                }, []),
                (0, c.jsxs)(c.Fragment, {
                    children: [
                        (0, c.jsx)(n$.A, {
                            className: ig.l3,
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
                                        return (0, c.jsx)(ij, { onChangePage: i(1), setShowEnableAnimation: n });
                                    case 1:
                                        return (0, c.jsx)(iu, { onBackClick: i(0) });
                                    default:
                                        return null;
                                }
                            })(e, t, s),
                        }),
                        (0, c.jsx)("div", {
                            className: a ? ig.Sr : ig.IP,
                            children: (0, c.jsx)(nJ.a, {
                                className: ig.gT,
                                importData: iv,
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
            j.intl.string(j.t.AtCukI),
            j.intl.string(j.t.mqxwJO),
            j.intl.string(j.t.wVS5Sd),
            j.intl.string(j.t.Xz0ole),
            j.intl.string(j.t["Ax+IoW"]),
            j.intl.string(j.t["6jI0hd"]),
            j.intl.string(j.t.s0KCgF),
        ],
    }),
    iD = (0, a.zZ)(o.X.POGGERMODE_CATEGORY, { buildLayout: () => [iL] });
var iR = n(231570);
let iP = (0, a.t_)(o.X.POGGERMODE_PANEL, { useTitle: () => j.intl.string(j.t.AtCukI), buildLayout: () => [iD] }),
    iG = (0, a.i4)(o.X.POGGERMODE_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.AtCukI),
        icon: () => (0, c.jsx)("img", { alt: "", src: n(724405), className: iR.$ }),
        usePredicate: () => (0, m.bG)([nH.A], () => nH.A.settingsVisible),
        buildLayout: () => [iP],
    });
var iM = n(307301),
    iU = n(410767),
    iV = n(683071),
    ik = n(97260),
    iw = n(695366),
    iF = n(812729),
    iB = n.n(iF),
    iz = n(587895),
    iX = n(429913),
    iY = n(616356),
    iH = n(952818);
function iK(e, t) {
    return null != e && null != e.id ? e.id : null != t && null != t.id ? t.id : void 0;
}
function iW() {
    let e = (0, m.bG)([iY.A], () => iY.A.getStreamerActiveStreamMetadata()),
        t = (0, m.bG)(
            [iH.Ay],
            () => {
                let e = iH.Ay.getVisibleGame();
                return null != e ? iH.Ay.getGameOrTransformedSubgameForPID(e.pid) : null;
            },
            [],
            iB(),
        ),
        [n] = (0, iX.A)([iK(e, t)]);
    return { runningGame: t ?? void 0, runningGameApplication: n ?? void 0 };
}
var iZ = n(769015),
    iq = n(749983),
    iQ = n(935671),
    iJ = n(868886);
function i$(e) {
    let { game: t, application: n } = e;
    return null == t || null == n
        ? (0, c.jsx)("div", {
              className: iJ.zc,
              children: (0, c.jsx)(iw.E, { size: "sm", color: nK.A.colors.TEXT_FEEDBACK_WARNING }),
          })
        : (0, c.jsxs)("div", {
              className: iJ.nt,
              children: [
                  (0, c.jsx)(iZ.A, { game: n, pid: t.pid, size: iZ.M.MEDIUM }),
                  (0, c.jsx)("div", {
                      className: iJ.Am,
                      children: (0, c.jsx)(iw.E, { size: "sm", color: nK.A.colors.TEXT_FEEDBACK_WARNING }),
                  }),
              ],
          });
}
function i0(e) {
    let t = (0, m.bG)([iq.Ay], () => iq.Ay.getMode()),
        { runningGame: n, runningGameApplication: i } = iW();
    null == n || n.elevated || ((n = void 0), (i = void 0));
    let l = (0, iQ.NP)(),
        s = l && null != n && t === A.TBI.PUSH_TO_TALK;
    return { canPrompt: "voice" === e ? s : l, runningGame: n, runningGameApplication: i };
}
function i1(e) {
    let { className: t, sourcePage: n } = e,
        { canPrompt: i, runningGame: l, runningGameApplication: s } = i0(n);
    return i
        ? (0, c.jsxs)("div", {
              className: ie()(iJ.kL, t),
              children: [
                  (0, c.jsx)(i$, { game: l, application: s }),
                  (0, c.jsxs)("div", {
                      className: iJ.FS,
                      children: [
                          (0, c.jsx)(z.E, {
                              variant: "text-sm/medium",
                              color: "text-strong",
                              children:
                                  "voice" === n
                                      ? j.intl.string(j.t.vxfv7v)
                                      : null != l
                                        ? j.intl.string(j.t.fAYU2G)
                                        : j.intl.string(j.t["9V4X/c"]),
                          }),
                          (0, c.jsx)(z.E, {
                              variant: "text-xs/medium",
                              color: "text-muted",
                              children: j.intl.format(j.t["/y6htt"], {
                                  helpCenterLink: eS.A.getArticleURL(A.MVz.SYSTEM_SERVICE),
                              }),
                          }),
                      ],
                  }),
                  (0, c.jsx)(p.$, {
                      variant: "secondary",
                      size: "sm",
                      text: j.intl.string(j.t["1iI46O"]),
                      onClick: function () {
                          (0, iQ.sL)(n + (null != l ? "-with-game" : "-no-game"));
                      },
                  }),
              ],
          })
        : null;
}
var i2 = n(404778),
    i3 = n(691885),
    i5 = n(408278),
    i6 = n(241326),
    i4 = n(866665),
    i8 = n(140735),
    i7 = n(489718),
    i9 = n(635242),
    le = n(350535),
    lt = n(189213),
    ln = n(192308),
    li = n(95477),
    ll = n(320989),
    ls = n(978263);
let lr = [];
var la = n(235986),
    lo = n(820785),
    lu = n(734057),
    ld = n(808728),
    lc = n(71393),
    lg = n(967198),
    lm = n(926140),
    lA = n(387722);
function lE() {}
let lh = [lm.rD.VOICE_CHANNEL];
function lS(e) {
    e.setOptions({ voiceChannelGuildFilter: null }), e.setLimit(1 / 0);
}
function lT() {
    return (0, c.jsx)("div", {
        className: lA.i1,
        children: (0, c.jsx)(z.E, {
            variant: "text-md/medium",
            color: "text-muted",
            className: lA.GN,
            children: j.intl.string(j.t.zHjCd1),
        }),
    });
}
function lx(e) {
    let { keybind: t, className: n } = e,
        i = g.useRef(t);
    g.useEffect(() => {
        i.current = t;
    });
    let [l, s] = g.useState(t.params?.channelId ?? void 0),
        r = g.useCallback(() => {
            (0, ln.openModalLazy)(
                async () => (e) =>
                    (0, c.jsx)(lp, {
                        ...e,
                        onSelect: (e) => {
                            s(e), ik.A.setKeybind({ ...i.current, params: { channelId: e } });
                        },
                    }),
            );
        }, []);
    return (0, c.jsx)("div", {
        className: ie()(lA.a8, n),
        children: (0, c.jsx)(tH.D, {
            label: j.intl.string(j.t.q4JpM8),
            children: (0, c.jsxs)(la.A, {
                align: la.A.Align.STRETCH,
                children: [
                    (0, c.jsx)("div", { className: lA.$X, children: (0, c.jsx)(lf, { channelId: l }) }),
                    (0, c.jsx)(la.A.Child, {
                        grow: 0,
                        shrink: 0,
                        children: (0, c.jsx)(p.$, { variant: "primary", text: j.intl.string(j.t.Dm8O4e), onClick: r }),
                    }),
                ],
            }),
        }),
    });
}
function lp(e) {
    let t,
        n,
        { transitionState: i, onClose: l, onSelect: s } = e,
        r = g.useId(),
        a = g.useRef(null),
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
                [s, r] = g.useState(""),
                [a, o] = g.useState(lr),
                u = g.useCallback((e, t) => {
                    "" === (t = t.trim()).trim() ? o(lr) : o(e);
                }, []);
            g.useEffect(
                () =>
                    ll.A.addRouteChangeListener(() => {
                        r("");
                    }),
                [],
            );
            let [d] = g.useState(() => new ls.A(u, n, void 0, i));
            return (
                g.useEffect(() => {
                    t ? (l?.(d), d.createSearchContext()) : (d.clean(), r(""));
                }, [t, d, l]),
                {
                    queryResults: a,
                    query: s,
                    updateQuery: g.useCallback(
                        (e) => {
                            r(e), d.search(e);
                        },
                        [d],
                    ),
                }
            );
        })({ visible: !0, autocompleterResultTypes: lh, autocompleterBeforeCreateSearchContext: lS }),
        A =
            ((t = "" !== o),
            (n = (0, m.yK)([ld.Ay, lu.A, lg.A], () => {
                let e = lg.A.getGuildId();
                if (t || null == e) return [];
                let n = [];
                for (let t of ld.Ay.getVocalChannelIds(e)) {
                    let e = lu.A.getChannel(t);
                    null != e && n.push(e);
                }
                return n;
            }, [t])),
            t ? null : n),
        { focusedIndex: E, setFocusedIndex: h } = (function (e) {
            let [t, n] = g.useState(0),
                i = g.useRef(e);
            return (
                e !== i.current && 0 !== t && n(0),
                g.useEffect(() => {
                    i.current = e;
                }),
                { focusedIndex: t, setFocusedIndex: n }
            );
        })(o);
    g.useEffect(() => {
        let { current: e } = a;
        null == e || e.isItemVisible(0, E, !0) || e.scrollToIndex({ section: 0, row: E });
    }, [E]);
    let S = null != A ? A.length : d.length,
        T = (() => {
            if (null != A) return A[E]?.id;
            let e = d[E];
            if (e?.type === lm.rD.VOICE_CHANNEL) return e.record.id;
        })(),
        x =
            S > 0 || "" === o
                ? {
                      innerId: r,
                      innerRole: "listbox",
                      innerAriaLabel: j.intl.string(j.t["+N3fW7"]),
                      ref: a,
                      sections: [S],
                      renderRow: function (e) {
                          let { row: t } = e,
                              n = (() => {
                                  if (null != A) return A[t];
                                  let e = d[t];
                                  if (e?.type === lm.rD.VOICE_CHANNEL) return e.record;
                              })();
                          if (null == n) return null;
                          let i = null != n.parent_id ? lu.A.getChannel(n.parent_id) : void 0,
                              r = lc.A.getGuild(n.guild_id);
                          return (0, c.jsx)(
                              lo.c3,
                              {
                                  id: n.id,
                                  channel: n,
                                  category: i,
                                  focused: E === t,
                                  onMouseEnter: () => h(t),
                                  onClick: () => {
                                      s(n.id), l();
                                  },
                                  onFocus: () => h(t),
                                  children:
                                      null != r ? (0, c.jsx)("div", { className: lA.J5, children: r.name }) : null,
                              },
                              n.id,
                          );
                      },
                      sectionHeight: 0,
                      rowHeight: 34,
                  }
                : { sections: [1], renderRow: () => (0, c.jsx)(lT, {}), sectionHeight: 0, rowHeight: 52 };
    return (0, c.jsx)(lt.Modal, {
        transitionState: i,
        onClose: l,
        title: j.intl.string(j.t.Dm8O4e),
        subtitle: j.intl.string(j.t.q4JpM8),
        actions: void 0,
        input: (0, c.jsx)(li.k, {
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
                                if (null != A) return A[E];
                                let e = d[E];
                                if (e?.type === lm.rD.VOICE_CHANNEL) return e.record;
                            })();
                            null == e ? s(void 0) : s(e.id), l();
                            break;
                        }
                        case "arrowup":
                            0 === E ? h(S - 1) : h(E - 1);
                            break;
                        case "arrowdown":
                            E >= S - 1 ? h(0) : h(E + 1);
                    }
            },
            placeholder: j.intl.string(j.t.tG0r7g),
            role: "combobox",
            "aria-controls": r,
            "aria-expanded": S > 0,
            "aria-activedescendant": S > 0 && null != T ? T : void 0,
            "aria-autocomplete": "list",
            spellCheck: !1,
            autoFocus: !0,
        }),
        listProps: x,
    });
}
function lf(e) {
    let { channelId: t } = e,
        {
            channel: n,
            category: i,
            guild: l,
        } = (0, m.cf)([lu.A, lc.A], () => {
            let e = null != t ? lu.A.getChannel(t) : void 0;
            return null != e
                ? {
                      channel: e,
                      category: null != e.parent_id ? lu.A.getChannel(e.parent_id) : void 0,
                      guild: null != e.guild_id ? lc.A.getGuild(e.guild_id) : void 0,
                  }
                : { channel: void 0, category: void 0, guild: void 0 };
        });
    return null == n
        ? (0, c.jsx)(z.E, {
              variant: "text-md/medium",
              color: "text-muted",
              className: lA.GN,
              children: j.intl.string(j.t["/fYIK7"]),
          })
        : (0, c.jsx)(lo.c3, {
              channel: n,
              id: n.id,
              category: i,
              onClick: lE,
              onFocus: lE,
              onMouseEnter: lE,
              focused: !1,
              children: null != l ? (0, c.jsx)("div", { className: lA.J5, children: l.name }) : null,
          });
}
var l_ = n(650583),
    lN = n(492064);
function lI(e) {
    let { keybind: t } = e,
        n = le.dI(t.shortcut);
    return eK.A.hasBind(n)
        ? (0, c.jsx)("div", {
              className: lN.$e,
              children: (0, c.jsx)(iV.w, { type: "warning", children: j.intl.string(j.t["7lQlw3"]) }),
          })
        : l_.Yy.has(n)
          ? (0, c.jsx)("div", {
                className: lN.$e,
                children: (0, c.jsx)(iV.w, {
                    type: "warning",
                    children: j.intl.format(j.t.MOIaNd, {
                        keyboardNavArticle: eS.A.getArticleURL(A.MVz.KEYBOARD_NAVIGATION),
                    }),
                }),
            })
          : void 0;
}
function lC(e) {
    let { keybind: t } = e;
    return t.action === A.hCu.SWITCH_TO_VOICE_CHANNEL ? (0, c.jsx)(lx, { keybind: t, className: lN._M }) : null;
}
let lb = g.memo(function (e) {
    let { keybind: t, keybindDescriptions: n, keybindActionTypes: i } = e,
        l = g.useCallback((e) => ik.A.setKeybind({ ...t, action: e }), [t]),
        s = g.useCallback((e) => ik.A.setKeybind({ ...t, shortcut: e }), [t]),
        r = g.useCallback(() => ik.A.setKeybind({ ...t, enabled: !t.enabled }), [t]),
        a = g.useCallback(() => ik.A.deleteKeybind(t.id), [t.id]),
        o = g.useId(),
        u = g.useMemo(() => i.find((e) => e.value === t.action)?.label ?? t.action, [t.action, i]);
    return (0, c.jsxs)("div", {
        className: lN.f_,
        children: [
            (0, c.jsx)(lI, { keybind: t }),
            (0, c.jsx)("div", {
                className: lN.XI,
                children: (0, c.jsx)(i3.l, {
                    selectionMode: "single",
                    label: j.intl.string(j.t.XH5b12),
                    value: t.action,
                    options: i,
                    onSelectionChange: l,
                    disabled: t.managed,
                }),
            }),
            (0, c.jsx)("div", {
                className: lN.LE,
                children: (0, c.jsx)(tH.D, {
                    label: j.intl.string(j.t["1La4tC"]),
                    layout: "vertical",
                    children: (0, c.jsx)(i9.A, { defaultValue: t.shortcut, onChange: s }),
                }),
            }),
            (0, c.jsxs)("div", {
                className: lN.ne,
                children: [
                    !t.managed &&
                        (0, c.jsx)(i5.K, {
                            variant: "icon-only",
                            onClick: a,
                            icon: i6.u,
                            "aria-label": j.intl.string(j.t.qEHmmB),
                        }),
                    (0, c.jsx)(i4.m, {
                        text: j.intl.string(t.enabled ? j.t.pNYGbx : j.t["51DGkH"]),
                        ariaHidden: !0,
                        children: (0, c.jsxs)("div", {
                            children: [
                                (0, c.jsx)(i8.A, {
                                    id: o,
                                    children: j.intl.format(t.enabled ? j.t["myr/Y0"] : j.t.lYhtPO, { actionName: u }),
                                }),
                                (0, c.jsx)(i7.I, { checked: t.enabled, onChange: r, labelledBy: o }),
                            ],
                        }),
                    }),
                ],
            }),
            (0, c.jsx)(z.E, {
                variant: "text-xs/normal",
                color: "text-subtle",
                className: lN.h_,
                children: n[t.action],
            }),
            (0, c.jsx)(lC, { keybind: t }),
        ],
    });
});
var ly = n(549406),
    lv = n(734066),
    lj = n(880144),
    lO = n(614455),
    lL = n(532624),
    lD = n(487866);
let lR = function () {
        let e,
            t,
            n,
            i,
            l,
            s,
            {
                customizableKeybinds: r,
                keybindDescriptions: a,
                keybindActionTypes: o,
            } = ((e = (0, m.bG)([lL.Ay], () => lL.Ay.getState())),
            (t = (0, m.bG)([iq.Ay], () => (0, lj.A)(iq.Ay))),
            (n = (0, m.bG)([lO.A], () => lO.A.isSupported)),
            (i = (0, lv.sw)()),
            (l = (0, lv.BW)()),
            {
                customizableKeybinds: (function (e) {
                    let { keybinds: t, enableClips: n, enableScreenshotKeybind: i, allowSoundboard: l } = e;
                    return k()(t)
                        .reject(
                            (e) =>
                                e.managed &&
                                ![
                                    A.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
                                    A.hCu.SAVE_CLIP,
                                    A.hCu.SAVE_SCREENSHOT,
                                ].includes(e.action),
                        )
                        .reject((e) => !n && (e.action === A.hCu.SAVE_CLIP || e.action === A.hCu.SAVE_SCREENSHOT))
                        .reject((e) => !i && e.action === A.hCu.SAVE_SCREENSHOT)
                        .reject((e) => !l && (e.action === A.hCu.SOUNDBOARD || e.action === A.hCu.SOUNDBOARD_HOLD))
                        .sortBy((e) => e.id)
                        .sortBy((e) => (!0 === e.managed ? -1 : 0))
                        .value();
                })({
                    keybinds: e,
                    enableClips: i,
                    enableScreenshotKeybind: l,
                    allowSoundboard: (s = (0, eW.isWindows)()),
                }),
                keybindActionTypes: (function (e) {
                    let {
                            overlaySupported: t,
                            canGoLive: n,
                            allowSoundboard: i,
                            enableClips: l,
                            enableScreenshotKeybind: s,
                        } = e,
                        r = [
                            { id: "unassigned", value: A.hCu.UNASSIGNED, label: j.intl.string(j.t["0Uh579"]) },
                            { id: "push-to-talk", value: A.hCu.PUSH_TO_TALK, label: j.intl.string(j.t.Y5lgTP) },
                            {
                                id: "push-to-talk-priority",
                                value: A.hCu.PUSH_TO_TALK_PRIORITY,
                                label: j.intl.string(j.t.DkSwJ2),
                            },
                            { id: "push-to-mute", value: A.hCu.PUSH_TO_MUTE, label: j.intl.string(j.t.hSCRqd) },
                            { id: "vad-priority", value: A.hCu.VAD_PRIORITY, label: j.intl.string(j.t["49d6Nd"]) },
                            { id: "toggle-mute", value: A.hCu.TOGGLE_MUTE, label: j.intl.string(j.t.PlkYKD) },
                            { id: "toggle-deafen", value: A.hCu.TOGGLE_DEAFEN, label: j.intl.string(j.t.NvGq1K) },
                            {
                                id: "toggle-voice-mode",
                                value: A.hCu.TOGGLE_VOICE_MODE,
                                label: j.intl.string(j.t.Wa5H9S),
                            },
                            {
                                id: "toggle-streamer-mode",
                                value: A.hCu.TOGGLE_STREAMER_MODE,
                                label: j.intl.string(j.t.BK0Ncc),
                            },
                            { id: "toggle-camera", value: A.hCu.TOGGLE_CAMERA, label: j.intl.string(j.t.hf8JVT) },
                            {
                                id: "toggle-voice-channel-chat",
                                value: A.hCu.TOGGLE_VOICE_CHANNEL_CHAT,
                                label: j.intl.string(j.t.YeqEjm),
                            },
                        ];
                    return (
                        t &&
                            (r.push({
                                id: "toggle-overlay-input-lock",
                                value: A.hCu.TOGGLE_OVERLAY_INPUT_LOCK,
                                label: j.intl.string(j.t.VsAZcC),
                            }),
                            r.push({
                                id: "activate-overlay-region-text-widget",
                                value: A.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
                                label: j.intl.string(j.t.hurHWo),
                            })),
                        n &&
                            ((0, eW.isWindows)() || iq.Ay.getUseSystemScreensharePicker()) &&
                            r.push({
                                id: "toggle-go-live-streaming",
                                value: A.hCu.TOGGLE_GO_LIVE_STREAMING,
                                label: j.intl.string(j.t.ybdjJD),
                            }),
                        (0, eW.isDesktop)() &&
                            (r.push(
                                { id: "navigate-back", value: A.hCu.NAVIGATE_BACK, label: j.intl.string(j.t.gRSaOa) },
                                {
                                    id: "navigate-forward",
                                    value: A.hCu.NAVIGATE_FORWARD,
                                    label: j.intl.string(j.t.zOXpjU),
                                },
                                {
                                    id: "switch-to-voice-channel",
                                    value: A.hCu.SWITCH_TO_VOICE_CHANNEL,
                                    label: j.intl.string(j.t.ty7Lxy),
                                },
                                {
                                    id: "disconnect-from-voice-channel",
                                    value: A.hCu.DISCONNECT_FROM_VOICE_CHANNEL,
                                    label: j.intl.string(j.t.CV7mT7),
                                },
                            ),
                            i &&
                                r.push(
                                    { id: "soundboard", value: A.hCu.SOUNDBOARD, label: j.intl.string(j.t.yPH4xm) },
                                    {
                                        id: "soundboard-hold",
                                        value: A.hCu.SOUNDBOARD_HOLD,
                                        label: j.intl.string(j.t["1xFbP/"]),
                                    },
                                ),
                            l &&
                                (r.push({ id: "save-clip", value: A.hCu.SAVE_CLIP, label: j.intl.string(j.t.U4URzP) }),
                                s &&
                                    r.push({
                                        id: "save-screenshot",
                                        value: A.hCu.SAVE_SCREENSHOT,
                                        label: j.intl.string(j.t["+WloFH"]),
                                    }))),
                        r
                    );
                })({
                    overlaySupported: n,
                    canGoLive: t,
                    allowSoundboard: s,
                    enableClips: i,
                    enableScreenshotKeybind: l,
                }),
                keybindDescriptions: (function (e) {
                    let { overlaySupported: t, canGoLive: n, enableClips: i, enableScreenshotKeybind: l } = e,
                        s = {
                            [A.hCu.UNASSIGNED]: j.intl.string(j.t.rvlNLv),
                            [A.hCu.PUSH_TO_MUTE]: j.intl.string(j.t.xtESim),
                            [A.hCu.PUSH_TO_TALK]: j.intl.string(j.t.wTcBSy),
                            [A.hCu.PUSH_TO_TALK_PRIORITY]: j.intl.string(j.t.FhHvWH),
                            [A.hCu.TOGGLE_MUTE]: j.intl.string(j.t.X2fbUm),
                            [A.hCu.TOGGLE_DEAFEN]: j.intl.string(j.t.MjREZV),
                            [A.hCu.TOGGLE_VOICE_MODE]: j.intl.string(j.t.snm5YW),
                            [A.hCu.TOGGLE_STREAMER_MODE]: j.intl.string(j.t.YszLLx),
                            [A.hCu.VAD_PRIORITY]: j.intl.string(j.t.rSe8IZ),
                            [A.hCu.TOGGLE_CAMERA]: j.intl.string(j.t.v1JBtL),
                            [A.hCu.TOGGLE_VOICE_CHANNEL_CHAT]: j.intl.string(j.t.desfB4),
                        };
                    return (
                        t && (s[A.hCu.TOGGLE_OVERLAY_INPUT_LOCK] = j.intl.string(j.t.IoP5vc)),
                        n && (0, eW.isWindows)() && (s[A.hCu.TOGGLE_GO_LIVE_STREAMING] = j.intl.string(j.t.s4C238)),
                        (0, eW.isDesktop)() &&
                            ((s[A.hCu.NAVIGATE_BACK] = j.intl.string(j.t.nKDlEt)),
                            (s[A.hCu.NAVIGATE_FORWARD] = j.intl.string(j.t.DK0FFk)),
                            (s[A.hCu.SOUNDBOARD] = (0, eW.isWindows)()
                                ? j.intl.string(j.t["5wJefL"])
                                : j.intl.string(j.t.gzjsSP)),
                            (s[A.hCu.SOUNDBOARD_HOLD] = (0, eW.isWindows)()
                                ? j.intl.string(j.t.RRkZc9)
                                : j.intl.string(j.t.laNlTl)),
                            i &&
                                ((s[A.hCu.SAVE_CLIP] = j.intl.string(j.t.z3Wbam)),
                                l && (s[A.hCu.SAVE_SCREENSHOT] = j.intl.string(j.t.m0zd57)))),
                        s
                    );
                })({ overlaySupported: n, canGoLive: t, enableClips: i, enableScreenshotKeybind: l }),
            });
        return 0 === r.length
            ? (0, c.jsx)(z.E, { variant: "text-sm/normal", color: "text-subtle", children: j.intl.string(j.t.vyYgWp) })
            : (0, c.jsx)("div", {
                  className: lD.A,
                  children: r.map((e, t) =>
                      (0, c.jsxs)(
                          g.Fragment,
                          {
                              children: [
                                  (0, c.jsx)(lb, { keybind: e, keybindDescriptions: a, keybindActionTypes: o }),
                                  t < r.length - 1 ? (0, c.jsx)(i2.c, { className: lD.y, gap: 24 }) : null,
                              ],
                          },
                          e.id,
                      ),
                  ),
              });
    },
    lP = (0, a.E2)(o.X.CUSTOM_KEYBINDS_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t["069nVT"])],
        Component: function () {
            return no.Av
                ? (0, c.jsx)(lR, {})
                : (0, c.jsx)(iV.w, {
                      type: "info",
                      children: j.intl.format(j.t.mPi3F3, { downloadLink: A.X7G.DOWNLOAD }),
                  });
        },
    });
var lG = n(475358),
    lM = n(28647),
    lU = n(760677);
function lV(e) {
    let { children: t } = e;
    return t([ly.Q_.MESSAGE, ly.Q_.NAVIGATION, ly.Q_.DND, ly.Q_.CHAT, ly.Q_.VOICE_AND_VIDEO, ly.Q_.MISCELLANEOUS]);
}
function lk(e) {
    let { showHeader: t = !0 } = e,
        n = k()((0, ly.Bx)())
            .filter((e) => e.description !== j.intl.string(j.t.HnNtEI))
            .groupBy((e) => e.group)
            .value();
    return (0, c.jsxs)(F.B, {
        gap: 48,
        children: [
            (0, c.jsx)(nZ.n, {
                label: t ? j.intl.string(j.t.Lz5KHI) : void 0,
                children: (0, c.jsx)("div", {
                    className: lU.jh,
                    children: (0, c.jsxs)("div", {
                        className: lU.yZ,
                        children: [
                            (0, c.jsx)(z.E, { variant: "text-md/normal", children: j.intl.string(j.t.sMWLBj) }),
                            (0, c.jsx)("div", {
                                className: lU.DM,
                                children: (0, c.jsx)(lG.e, { shortcut: lM.z.binds["0"], className: lU.LE }),
                            }),
                        ],
                    }),
                }),
            }),
            (0, c.jsx)(lV, {
                children: (e) =>
                    (0, c.jsx)(c.Fragment, {
                        children: e.map((e, t) => {
                            let i = (0, ly.Gm)(e),
                                l = (0, ly.zF)(e),
                                s = n[e];
                            return (0, c.jsx)(
                                nZ.n,
                                {
                                    label: i,
                                    description: l,
                                    children: (0, c.jsx)("div", {
                                        className: lU.jh,
                                        children: s.map((e, t) =>
                                            (0, c.jsxs)(
                                                g.Fragment,
                                                {
                                                    children: [
                                                        0 !== t && (0, c.jsx)(i2.c, {}),
                                                        (0, c.jsxs)("div", {
                                                            className: lU.yZ,
                                                            children: [
                                                                (0, c.jsx)(z.E, {
                                                                    variant: "text-md/normal",
                                                                    children: e.description,
                                                                }),
                                                                (0, c.jsx)("div", {
                                                                    className: lU.DM,
                                                                    children: e.binds.map((e) =>
                                                                        (0, c.jsx)(
                                                                            lG.e,
                                                                            { shortcut: e, className: lU.LE },
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
let lw = (0, a.E2)(o.X.DEFAULT_KEYBINDS_SETTING, {
    useSearchTerms: () => [j.intl.string(j.t.Lz5KHI)],
    Component: () => (0, c.jsx)(lk, { showHeader: !1 }),
});
var lF = n(19575),
    lB = n(546385);
let lz = (0, a.E2)(o.X.HARDWARE_ACCELERATION, {
    usePredicate: () => no.Av && !(0, no.cX)(),
    useSearchTerms: () => [j.intl.string(j.t["/HIxyY"]), j.intl.string(j.t.B0hqpb)],
    Component: function () {
        let [e] = g.useState(() => lF.Ay.getEnableHardwareAcceleration()),
            t = j.intl.string(j.t["/HIxyY"]),
            n = j.intl.string(j.t.B0hqpb);
        return (0, c.jsxs)(F.B, {
            children: [
                (0, c.jsx)(tK.d, { label: t, description: n, checked: e, onChange: lX }),
                !e && (0, c.jsx)(lB.A, { look: lB.k.WARNING, children: j.intl.string(j.t.j7S6IX) }),
            ],
        });
    },
});
function lX(e) {
    let t = e ? j.intl.format(j.t.LYXRxL, {}) : j.intl.format(j.t.uDP3Kz, {});
    (0, nW.A)({
        title: j.intl.string(j.t.aqpAvn),
        subtitle: t,
        confirmText: j.intl.string(j.t.vT7ckk),
        onConfirm: () => {
            lF.Ay.setEnableHardwareAcceleration(e);
        },
    });
}
let lY = (0, eE.D)(() => ({ openOnStartup: !0, startMinimized: !1, minimizeToTray: !0 }));
async function lH() {
    let e = await lF.Ay.getOpenOnStart(),
        t = await lF.Ay.getSetting("START_MINIMIZED", !1),
        n = await lF.Ay.getSetting("MINIMIZE_TO_TRAY", !0);
    lY.setState({ openOnStartup: e, startMinimized: t, minimizeToTray: n });
}
let lK = (0, a.zD)(o.X.OS_OPEN_ON_STARTUP, {
        useTitle: () => j.intl.string(j.t["3BeZti"]),
        usePredicate: () => no.Av && !(0, no.cX)(),
        useValue: () => lY.useState((e) => e.openOnStartup),
        setValue: function (e) {
            lY.setState({ openOnStartup: e }), lF.Ay.send("TOGGLE_OPEN_ON_STARTUP", e);
        },
        initialize: () => {
            lF.Ay.getOpenOnStart().then((e) => lY.setState({ openOnStartup: e }));
        },
    }),
    lW = (0, a.zD)(o.X.OS_MINIMIZE_TO_TRAY, {
        useTitle: () => j.intl.string(j.t.dJ5MUh),
        useSubtitle: () => j.intl.string(j.t.nQavHr),
        usePredicate: () => no.Av && !(0, no.cX)(),
        useValue: () => lY.useState((e) => e.minimizeToTray),
        setValue: function (e) {
            lY.setState({ minimizeToTray: e }), lF.Ay.send("TOGGLE_MINIMIZE_TO_TRAY", e);
        },
        initialize: () => {
            lF.Ay.getSetting("MINIMIZE_TO_TRAY", !0).then((e) => lY.setState({ minimizeToTray: e }));
        },
    }),
    lZ = (0, a.zD)(o.X.OS_START_MINIMIZED, {
        useTitle: () => j.intl.string(j.t.GfBL83),
        useSubtitle: () => j.intl.string(j.t.XGyhhc),
        usePredicate: () => (0, no.uF)(),
        useValue: () => lY.useState((e) => !!e.openOnStartup && e.startMinimized),
        setValue: function (e) {
            lY.setState({ startMinimized: e }), lF.Ay.send("TOGGLE_START_MINIMIZED", e);
        },
        useDisabled: () => !lY.useState((e) => e.openOnStartup),
        initialize: () => {
            lF.Ay.getSetting("START_MINIMIZED", !1).then((e) => lY.setState({ startMinimized: e }));
        },
    });
var lq = n(314647);
let lQ = new Set(["failure", "unknown"]),
    lJ = (0, a.E2)(o.X.OS_SYSTEM_SERVICE, {
        useSearchTerms: () => [j.intl.string(j.t.roHq80)],
        Component: function () {
            let [e, t] = g.useState(!1),
                [n, i] = g.useState(() => (0, iQ.TC)()),
                l = (0, m.bG)([iH.Ay], () => iH.Ay.getSystemServiceStatus("input-service")),
                s = g.useCallback(async () => {
                    t(!0),
                        n ? await (0, iQ.z8)("windows-settings") : await (0, iQ.sL)("windows-settings"),
                        t(!1),
                        i((0, iQ.TC)());
                }, [n]);
            return (0, c.jsxs)("div", {
                className: lq.q,
                children: [
                    (0, c.jsxs)("div", {
                        className: lq.L,
                        children: [
                            (0, c.jsxs)(F.B, {
                                direction: "horizontal",
                                children: [
                                    (0, c.jsx)(z.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        children: j.intl.string(j.t.roHq80),
                                    }),
                                    n &&
                                        (0, c.jsxs)(c.Fragment, {
                                            children: [
                                                (0, c.jsx)(z.E, {
                                                    variant: "text-md/medium",
                                                    color: "text-strong",
                                                    "aria-hidden": !0,
                                                    children: "\u2022",
                                                }),
                                                (0, c.jsx)(z.E, {
                                                    variant: "text-md/medium",
                                                    color:
                                                        "running" === l.state
                                                            ? "text-feedback-positive"
                                                            : lQ.has(l.state)
                                                              ? "text-feedback-critical"
                                                              : "text-feedback-warning",
                                                    children: (function (e) {
                                                        switch (e.state) {
                                                            case "unknown":
                                                                return j.intl.string(j.t["KW+nqT"]);
                                                            case "disabled":
                                                                return j.intl.string(j.t["Q/wAF7"]);
                                                            case "disconnected":
                                                                return j.intl.string(j.t.Xvs9IM);
                                                            case "initializing":
                                                                return j.intl.string(j.t.h4qz8W);
                                                            case "connecting":
                                                                return j.intl.string(j.t.fSu9XF);
                                                            case "handshaking":
                                                                return j.intl.string(j.t["00aYLJ"]);
                                                            case "running":
                                                                return j.intl.string(j.t["54TB7Z"]);
                                                            case "waiting-for-retry":
                                                                return j.intl.string(j.t["0FONwi"]);
                                                            case "failure":
                                                                return j.intl.string(j.t.Ic0nkd);
                                                            default:
                                                                (0, n8.xb)(e.state);
                                                        }
                                                    })(l),
                                                }),
                                            ],
                                        }),
                                ],
                            }),
                            (0, c.jsx)(z.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: j.intl.format(j.t["8CAL+D"], {
                                    helpCenterLink: eS.A.getArticleURL(A.MVz.SYSTEM_SERVICE),
                                }),
                            }),
                        ],
                    }),
                    (0, c.jsx)(p.$, {
                        variant: n ? "critical-secondary" : "primary",
                        loading: e,
                        onClick: s,
                        text: n ? j.intl.string(j.t.pAwbdL) : j.intl.string(j.t["1iI46O"]),
                    }),
                ],
            });
        },
        usePredicate: iQ.XQ,
    });
function l$() {
    e2.h.dispatch({ type: "DISCORD_STATS_POPOUT_WINDOW_OPEN" });
}
var l0 = n(287809);
let l1 = (0, a.Tf)(o.X.DISCORD_STATS_POPOUT, {
        useTitle: () => "Discord Stats",
        useSubtitle: () => "Open a floating panel showing live GPU, CPU, and memory usage.",
        useLabel: () => "Open",
        usePredicate: () => (0, m.bG)([l0.default], () => l0.default.getCurrentUser()?.isStaff() ?? !1),
        onClick: () => {
            l$();
        },
    }),
    l2 = (0, a.zZ)(o.X.SYSTEM_ADVANCED_CATEGORY, {
        useTitle: () => j.intl.string(j.t["8/udY0"]),
        buildLayout: () => [l1],
    }),
    l3 = (0, a.zZ)(o.X.SYSTEM_GENERAL_CATEGORY, {
        useTitle: () => j.intl.string(j.t.cg6ltt),
        buildLayout: () => [lK, lZ, lW, lz],
        usePredicate: () => no.Av && ((0, no.uF)() || (0, no.j9)()),
        initialize: () => {
            lH();
        },
    }),
    l5 = (0, a.zZ)(o.X.SYSTEM_CUSTOM_KEYBINDS_CATEGORY, {
        useTitle: () => j.intl.string(j.t["069nVT"]),
        useSubtitle: () => j.intl.string(j.t.T4LZVL),
        buildLayout: () => [lP],
        initialize: () => (ik.A.enableAll(!1), () => ik.A.enableAll(!0)),
        useInlineNotice: function () {
            return no.Av
                ? {
                      type: d.lT.STRONGLY_DISCOURAGED_CUSTOM,
                      notice: () =>
                          (0, c.jsxs)(F.B, {
                              direction: "vertical",
                              gap: "md",
                              children: [
                                  (0, c.jsx)(iV.w, { type: "info", children: j.intl.string(j.t["5pkmHa"]) }),
                                  (0, c.jsx)(i1, { sourcePage: "keybinds" }),
                              ],
                          }),
                  }
                : null;
        },
        useHeaderDecoration: () =>
            no.Av
                ? {
                      type: d.WX.BUTTON_GROUP,
                      buttons: [
                          {
                              id: "add-keybind",
                              type: d.UV.BUTTON,
                              text: j.intl.string(j.t.zk6Xbs),
                              variant: "secondary",
                              icon: iM.j,
                              onClick: () => ik.A.addKeybind(),
                          },
                      ],
                  }
                : null,
    }),
    l6 = (0, a.zZ)(o.X.SYSTEM_DEFAULT_KEYBINDS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.Lz5KHI),
        buildLayout: () => [lw],
    }),
    l4 = (0, a.zZ)(o.X.SYSTEM_HELPER_CATEGORY, {
        useTitle: () => j.intl.string(j.t["+XZgmA"]),
        usePredicate: () => no.Av && ((0, no.uF)() || (0, no.j9)()),
        buildLayout: () => [lJ],
    }),
    l8 = (0, a.t_)(o.X.SYSTEM_PANEL, {
        useTitle: () => j.intl.string(j.t["VJ/qKo"]),
        buildLayout: () => [l3, l5, l6, l4, l2],
    }),
    l7 = (0, a.i4)(o.X.SYSTEM_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["VJ/qKo"]),
        icon: iU.F,
        buildLayout: () => [l8],
    });
var l9 = n(831544),
    se = n(922795),
    st = n(212245),
    sn = n(329551),
    si = n(285918),
    sl = n(413339),
    ss = n(952572),
    sr = n(382003);
let sa = (0, a.E2)(o.X.CAMERA_BACKGROUND_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t.lZTUPs)],
        usePredicate: ss.A,
        Component: function () {
            let e = (0, st.p)(),
                t = g.useRef(!1),
                n = (0, m.bG)([iq.Ay], () => iq.Ay.getVideoDeviceId()),
                [i, l] = g.useState((0, sn.i)(l0.default.getCurrentUser())),
                s = g.useRef(i);
            return (
                g.useEffect(
                    () => () => {
                        t.current && (0, si._C)(s.current);
                    },
                    [],
                ),
                (0, c.jsx)(sr.A, {
                    selectedBackgroundOption: i,
                    onSelectBackgroundOption: function (n) {
                        (t.current = !0), (s.current = n), l(n), (0, sl.gB)(n, { location: e.location }).catch(A.tEg);
                    },
                    currentDeviceId: n,
                })
            );
        },
    }),
    so = (0, a.zD)(o.X.CAMERA_PREVIEW_PREFERENCE, {
        useTitle: () => j.intl.string(j.t["3Ppr1h"]),
        useSubtitle: () => j.intl.string(j.t.WNbX4O),
        useValue: v.bm.useSetting,
        setValue: (e) => {
            v.bm.updateSetting(e), e7.default.track(A.HAw.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: e });
        },
    });
var su = n(625841),
    sd = n(74848),
    sc = n(204050);
let sg = (0, eE.D)(() => ({ previewEnabled: !1 }));
var sm = n(731854);
let sA = (0, a.E2)(o.X.CAMERA_SELECTION_SETTING, {
    useSearchTerms: () => [j.intl.string(j.t.FsQ3OR)],
    Component: function () {
        let e = (0, m.bG)([iq.Ay], () => iq.Ay.isVideoAvailable()),
            { id: t } = (0, sd.x5)(sm.oh.VIDEO_INPUT),
            { analyticsLocations: n } = (0, eL.Ay)();
        return (0, c.jsx)(su.U, {
            label: j.intl.string(j.t.FsQ3OR),
            deviceType: sm.oh.VIDEO_INPUT,
            location: "UserSettingsCameraSelect",
            isDisabled: !e,
            helperText: (0, sc.p)()
                ? j.intl.format(j.t.aJYgRt, {
                      onCameraSettingsClick: () => {
                          sg.setState({ previewEnabled: !1 }),
                              window.open((0, sc.i)(t)),
                              e7.default.track(A.HAw.SYSTEM_CAMERA_SETTINGS_OPENED, { location_stack: n });
                      },
                  })
                : void 0,
        });
    },
});
var sE = n(745317),
    sh = n(514956);
let sS = (0, a.E2)(o.X.CAMERA_VIDEO_PREVIEW, {
        useSearchTerms: () => [j.intl.string(j.t.JIf4v7)],
        Component: function () {
            let e = iq.Ay.getCameraComponent(),
                t = (0, m.bG)([iq.Ay], () => iq.Ay.getVideoDeviceId()),
                n = sg.useField("previewEnabled"),
                i = (0, m.bG)([iq.Ay], () => iq.Ay.isVideoAvailable());
            return ((0, eA.l0)(() => {
                sg.setState({ previewEnabled: !1 });
            }),
            n)
                ? (0, c.jsx)("div", {
                      className: sh.T9,
                      children: (0, c.jsxs)("div", {
                          className: sh.Xi,
                          children: [
                              (0, c.jsxs)("div", {
                                  className: sh.UI,
                                  children: [
                                      (0, c.jsx)(e, { deviceId: t, width: 387, height: 218, disabled: !n }),
                                      (0, c.jsx)(sE.kE, {}),
                                  ],
                              }),
                              (0, c.jsx)(sE.eK, {}),
                          ],
                      }),
                  })
                : (0, c.jsx)("div", {
                      className: sh.T9,
                      children: (0, c.jsx)(i4.m, {
                          text: i ? null : j.intl.string(j.t["8jSzSe"]),
                          children: (0, c.jsx)(p.$, {
                              variant: "primary",
                              text: j.intl.string(j.t.JIf4v7),
                              onClick: () => sg.setState({ previewEnabled: !0 }),
                              disabled: !i,
                          }),
                      }),
                  });
        },
    }),
    sT = (0, a.zZ)(o.X.CAMERA_CATEGORY, {
        useTitle: () => j.intl.string(j.t.uje3P9),
        usePredicate: () => (0, m.bG)([iq.Ay], () => iq.Ay.supports(sm.O5.VIDEO)),
        buildLayout: () => [sS, so, sA, sa],
    });
var sx = n(827343);
let sp = (0, a.zD)(o.X.VOICE_AND_VIDEO_OPENH264, {
        useTitle: () => j.intl.string(j.t.qFphsa),
        useSubtitle: () => j.intl.string(j.t.cQfwyY),
        usePredicate: function () {
            return (0, no.j9)();
        },
        useValue: function () {
            return (0, m.bG)([iq.Ay], () => iq.Ay.getOpenH264Enabled());
        },
        setValue: function (e) {
            sx.A.setOpenH264Enabled(e),
                (0, nW.A)({
                    title: j.intl.string(j.t["9jf31O"]),
                    subtitle: j.intl.string(j.t["J2wg+X"]),
                    confirmText: j.intl.string(j.t.BddRzS),
                    onConfirm: () => nc.A.app.relaunch(),
                });
        },
        useSearchTerms: () => ["open", "OpenH264", "H264", "codec"],
    }),
    sf = (0, a.zD)(o.X.VOICE_AND_VIDEO_AUDIO_RECORDING, {
        useTitle: () => j.intl.string(j.t["r6K+TL"]),
        useSubtitle: () => j.intl.string(j.t["xl9+I6"]),
        useValue: function () {
            return (0, m.bG)([iq.Ay], () => iq.Ay.getAecDump());
        },
        setValue: sx.A.setAecDump,
        usePredicate: function () {
            return (0, m.bG)([iq.Ay], () => iq.Ay.isAecDumpSupported());
        },
    });
var s_ = n(139033),
    sN = n(862482),
    sI = n(640238),
    sC = n(825484),
    sb = n(77138),
    sy = n(487329),
    sv = n(353835);
let sj = (0, eE.D)(() => ({ isUploading: !1, isDisabled: !1 }));
async function sO() {
    let e = await nc.A.fileManager.getLogPath();
    nc.A.fileManager.showItemInFolder(e);
}
function sL(e) {
    (0, nW.A)({
        title: j.intl.string(j.t["7UXEF2"]),
        subtitle: j.intl.string(j.t.IYPrRl),
        confirmText: j.intl.string(j.t.BddRzS),
        onConfirm: () => sx.A.setDebugLogging(e),
    });
}
async function sD(e) {
    let { onUploadStart: t, onUploadFinish: n } = e;
    t?.();
    try {
        let e, t;
        await iq.Ay.getMediaEngine().writeAudioDebugState(),
            await sv.A.submitLiveCrashReport({ message: { message: "User Live Dump" } }),
            await (0, sb.a)(A.Umv.RTC),
            (e = j.intl.string(j.t["fKBB8+"])),
            (t = j.intl.string(j.t.BvyxE7)),
            (0, s_.A)({ title: e, subtitle: t });
    } catch (s) {
        var i;
        let e, t, n, l;
        (i = s.displayMessage),
            (e = j.intl.string(j.t.QZg0J7)),
            (t = i ?? j.intl.string(j.t.VzHcSm)),
            (n = (0, sy.B1)(sy.iy.DEBUG_LOG_UPLOAD_FAILED)?.errorCode),
            (l = j.intl.formatToPlainString(j.t.ejOT95, { errorCode: n })),
            (0, ln.openModal)((n) =>
                (0, c.jsx)(sI.a, {
                    header: e,
                    confirmButtonColor: sN.$n.Colors.BRAND,
                    confirmText: j.intl.string(j.t.BddRzS),
                    ...n,
                    children: (0, c.jsxs)("div", {
                        style: { display: "flex", flexDirection: "column", height: "100%" },
                        children: [
                            (0, c.jsx)(z.E, { variant: "text-md/normal", children: t }),
                            (0, c.jsx)(z.E, {
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
async function sR() {
    await sD({
        onUploadStart: () => sj.setState({ isUploading: !0 }),
        onUploadFinish: () => sj.setState({ isUploading: !1, isDisabled: !0 }),
    });
}
let sP = (0, a.E2)(o.X.VOICE_AND_VIDEO_DEBUG_LOGGING, {
    useSearchTerms: () => [j.intl.string(j.t["726JHL"]), j.intl.string(j.t.EbwFfR), j.intl.string(j.t.nuPtYi)],
    usePredicate: function () {
        let e = (0, m.bG)([iq.Ay], () => iq.Ay.supports(sm.O5.DEBUG_LOGGING));
        return no.Av && e && null != nc.A.fileManager.readLogFiles;
    },
    Component: function () {
        let e = (0, m.bG)([iq.Ay], () => iq.Ay.getDebugLogging()),
            t = sj.useField("isUploading"),
            n = sj.useField("isDisabled"),
            i = g.useId();
        return (0, c.jsxs)("fieldset", {
            children: [
                (0, c.jsx)(i8.A, { tag: "legend", id: i, children: j.intl.string(j.t["FjN+et"]) }),
                (0, c.jsxs)(F.B, {
                    direction: "vertical",
                    gap: 4,
                    children: [
                        (0, c.jsx)(tK.d, {
                            label: j.intl.string(j.t["726JHL"]),
                            description: j.intl.string(j.t["/7ak9Q"]),
                            checked: e,
                            onChange: sL,
                        }),
                        (0, c.jsx)("div", {
                            role: "group",
                            "aria-labelledby": i,
                            children: (0, c.jsxs)(sC.e, {
                                children: [
                                    (0, c.jsx)(p.$, {
                                        variant: "secondary",
                                        text: j.intl.string(j.t.EbwFfR),
                                        onClick: sR,
                                        loading: t,
                                        disabled: n,
                                        "aria-label": j.intl.string(j.t.aY1OH2),
                                    }),
                                    (0, c.jsx)(p.$, {
                                        variant: "secondary",
                                        text: j.intl.string(j.t.nuPtYi),
                                        onClick: sO,
                                        "aria-label": j.intl.string(j.t["L/hFOe"]),
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
var sG = n(233545),
    sM = n(412780);
function sU() {
    return (0, m.bG)([l0.default, iq.Ay], () => {
        let e = l0.default.getCurrentUser(),
            t = e?.isStaff() ?? !1,
            n = "canary" === lF.Ay.releaseChannel || "development" === lF.Ay.releaseChannel,
            i = iq.Ay.supports(sm.O5.CONNECTION_REPLAY);
        return t && n && i;
    });
}
let sV = (0, a.zD)(o.X.VOICE_AND_VIDEO_RECORD_CONNECTION_REPLAY, {
        useTitle: () => j.intl.string(j.t.U4FgFK),
        useSubtitle: () => j.intl.string(j.t.Lm72RU),
        useValue: function () {
            return (0, m.bG)([sM.Ay], () => sM.Ay.shouldRecordNextConnection());
        },
        setValue: sG.Et,
        usePredicate: sU,
    }),
    sk = (0, a.Tf)(o.X.VOICE_AND_VIDEO_OPEN_CONNECTION_REPLAY, {
        useTitle: () => j.intl.string(j.t.nJnOHO),
        useLabel: () => j.intl.string(j.t["3xjX0U"]),
        onClick: sG.YW,
        usePredicate: sU,
    });
var sw = n(926919),
    sF = n(111162),
    sB = n(855302);
let sz = (0, a.zD)(o.X.VOICE_AND_VIDEO_STREAM_INFO_OVERLAY, {
        useTitle: () => j.intl.string(j.t["0CEP6e"]),
        useSubtitle: () => j.intl.string(j.t["kBXuW+"]),
        useValue: function () {
            return (0, m.bG)([sF.default], () => sF.default.isStreamInfoOverlayEnabled);
        },
        setValue: function (e) {
            let t = sF.default.isStreamInfoOverlayEnabled;
            (0, sB.A)("stream_info_overlay_enabled", e, t), (0, sw.x)({ isStreamInfoOverlayEnabled: e });
        },
        usePredicate: function () {
            return v.Q_.useSetting();
        },
    }),
    sX = (0, a.bd)(o.X.VOICE_AND_VIDEO_DIAGNOSTICS_ACCORDION, {
        useTitle: (e) => (e ? j.intl.string(j.t["/B4I8H"]) : j.intl.string(j.t.BTlsWH)),
        useCollapsedSubtitle: () => j.intl.string(j.t.la1Ys4),
        buildLayout: () => [sz, sf, sV, sk, sP],
    });
function sY(e, t, n) {
    (0, nW.A)({ title: e, subtitle: t, confirmText: j.intl.string(j.t.BddRzS), onConfirm: n });
}
let sH = (0, a.Tf)(o.X.VOICE_AND_VIDEO_RESET_ALL_SETTINGS, {
        useTitle: () => j.intl.string(j.t.SXfv1v),
        useSubtitle: () => j.intl.string(j.t["buA5/q"]),
        useLabel: () => j.intl.string(j.t.yBZMsQ),
        onClick: function () {
            sY(j.intl.string(j.t["4iKQ/3"]), j.intl.string(j.t.sQ42iT), sx.A.reset);
        },
        useVariant: () => "critical-secondary",
    }),
    sK = (0, a.zZ)(o.X.VOICE_AND_VIDEO_DIAGNOSTICS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.UDAU9K),
        buildLayout: () => [sp, sX, sH],
    });
var sW = n(347481),
    sZ = n(852712);
let sq = (0, a.zD)(o.X.VOICE_AUTOMATIC_GAIN_CONTROL_SETTING, {
        useTitle: () => j.intl.string(j.t.cUMdH0),
        useSubtitle: () => j.intl.string(j.t["6EjbvA"]),
        useValue: function () {
            return (0, m.bG)([iq.Ay], () => iq.Ay.getAutomaticGainControl());
        },
        setValue: function (e) {
            sx.A.setAutomaticGainControl(e, { page: A.liQ.USER_SETTINGS, section: A.JJy.SETTINGS_VOICE_AND_VIDEO });
        },
        useDisabled: function () {
            return (0, m.bG)([iq.Ay, sW.A], () => {
                let e = iq.Ay.getInputDeviceId();
                return sW.A.hasAutomaticGainControl(e);
            });
        },
        usePredicate: function () {
            return (0, m.bG)([iq.Ay], () => iq.Ay.isAutomaticGainControlSupported() && iq.Ay.isInputProfileCustom());
        },
    }),
    sQ = (0, a.sN)(o.X.VOICE_GLOBAL_ATTENUATION_SLIDER, {
        useTitle: () => j.intl.string(j.t.AlybXj),
        setValue: (e) =>
            sx.A.setAttenuation(e, iq.Ay.getAttenuateWhileSpeakingSelf(), iq.Ay.getAttenuateWhileSpeakingOthers()),
        minValue: 0,
        maxValue: 100,
        getInitialValue: () => iq.Ay.getAttenuation(),
    }),
    sJ = (0, a.zD)(o.X.VOICE_GLOBAL_ATTENUATION_FOR_SELF_SETTING, {
        useTitle: () => j.intl.string(j.t["9dHxRY"]),
        useValue: () => (0, m.bG)([iq.Ay], () => iq.Ay.getAttenuateWhileSpeakingSelf()),
        setValue: (e) => sx.A.setAttenuation(iq.Ay.getAttenuation(), e, iq.Ay.getAttenuateWhileSpeakingOthers()),
    }),
    s$ = (0, a.zD)(o.X.VOICE_GLOBAL_ATTENUATION_FOR_OTHERS_SETTING, {
        useTitle: () => j.intl.string(j.t.SMt0Gr),
        useValue: () => (0, m.bG)([iq.Ay], () => iq.Ay.getAttenuateWhileSpeakingOthers()),
        setValue: (e) => sx.A.setAttenuation(iq.Ay.getAttenuation(), iq.Ay.getAttenuateWhileSpeakingSelf(), e),
    }),
    s0 = (0, a.FW)(o.X.VOICE_GLOBAL_ATTENUATION_FIELD_SET, {
        variant: "compact",
        useTitle: () => j.intl.string(j.t.oSdBvW),
        useSubtitle: () => j.intl.string(j.t["0A/8Rt"]),
        usePredicate: () => (0, m.bG)([iq.Ay], () => iq.Ay.supports(sm.O5.ATTENUATION)),
        buildLayout: () => [sQ, sJ, s$],
    });
var s1 = n(801644);
let s2 = (0, a.zD)(o.X.VOICE_HARDWARE_MUTE_SILENCE_ALERT_SETTING, {
        useTitle: () => j.intl.string(j.t.pZ0vr4),
        useSubtitle: () => j.intl.string(j.t.tVbzoZ),
        useValue: function () {
            return (0, m.bG)([eu.Ay], () => !eu.Ay.disableHardwareMuteSilenceAlert);
        },
        setValue: function (e) {
            (0, sB.A)("hardware_mute_silence_alert_enabled", e, !eu.Ay.disableHardwareMuteSilenceAlert),
                t7.Ay.updatedUnsyncedSettings({ disableHardwareMuteSilenceAlert: !e });
        },
        usePredicate: function () {
            let { enableHardwareSilenceWarning: e } = s1.A.useConfig({ location: "HardwareMuteSilenceAlertSetting" });
            return e;
        },
    }),
    s3 = (0, a.zD)(o.X.VOICE_BYPASS_SYSTEM_INPUT_PROCESSING_SETTING, {
        useTitle: () => j.intl.string(j.t.DFPXIG),
        useSubtitle: () => j.intl.string(j.t["UyRX+C"]),
        useValue: function () {
            return (0, m.bG)([iq.Ay], () => iq.Ay.getBypassSystemInputProcessing());
        },
        setValue: function (e) {
            sx.A.setBypassSystemInputProcessing(e);
        },
        usePredicate: function () {
            return (0, m.bG)([iq.Ay], () => iq.Ay.showBypassSystemInputProcessing() && iq.Ay.isInputProfileCustom());
        },
    }),
    s5 = (0, a.zD)(o.X.VOICE_SWITCH_CHANNEL_ALERT_SETTING, {
        useTitle: () => j.intl.string(j.t.jrWHD3),
        useSubtitle: () => j.intl.string(j.t.YCCMkJ),
        useValue: function () {
            return (0, m.bG)([eu.Ay], () => !eu.Ay.disableVoiceChannelChangeAlert);
        },
        setValue: function (e) {
            (0, sB.A)("switch_channel_warning_enabled", e, !eu.Ay.disableVoiceChannelChangeAlert),
                t7.Ay.updatedUnsyncedSettings({ disableVoiceChannelChangeAlert: !e });
        },
    }),
    s6 = (0, a.zD)(o.X.ADVANCED_VOICE_ACTIVITY_PROCESSING_SETTING, {
        useTitle: () => j.intl.string(j.t.BbESsg),
        useSubtitle: () => j.intl.string(j.t.LoOB1F),
        useValue: function () {
            return (0, m.bG)([iq.Ay], () => {
                let { vadUseKrisp: e } = iq.Ay.getModeOptions();
                return e;
            });
        },
        setValue: function (e) {
            let t = iq.Ay.getMode();
            sx.A.setMode(t, { vadUseKrisp: e });
        },
        useDisabled: function () {
            return (0, m.bG)(
                [iq.Ay],
                () => iq.Ay.getMode() !== A.TBI.VOICE_ACTIVITY || !iq.Ay.getModeOptions().autoThreshold,
            );
        },
        usePredicate: function () {
            return (0, m.bG)([iq.Ay], () => iq.Ay.isAdvancedVoiceActivitySupported() && iq.Ay.isInputProfileCustom());
        },
    }),
    s4 = (0, a.Hn)(o.X.VOICE_AUDIO_SUBSYSTEM_SETTING, {
        useTitle: () => j.intl.string(j.t.wVBHr0),
        useValue: function () {
            return (0, m.bG)([iq.Ay], () => iq.Ay.getAudioSubsystem());
        },
        setValue: function (e) {
            sY(j.intl.string(j.t.uY7AcQ), j.intl.string(j.t.gBqik6), () => sx.A.setAudioSubsystem(e));
        },
        useOptions: function () {
            let {
                legacyAudioSubsystemSupported: e,
                experimentalAudioSubsystemSupported: t,
                automaticAudioSubsystemSupported: n,
            } = (0, m.cf)([iq.Ay], () => ({
                legacyAudioSubsystemSupported: iq.Ay.supports(sm.O5.LEGACY_AUDIO_SUBSYSTEM),
                experimentalAudioSubsystemSupported: iq.Ay.supports(sm.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM),
                automaticAudioSubsystemSupported: iq.Ay.supports(sm.O5.AUTOMATIC_AUDIO_SUBSYSTEM),
            }));
            return g.useMemo(() => {
                let i;
                return (
                    (i = [{ id: sm.rB.STANDARD, value: sm.rB.STANDARD, label: j.intl.string(j.t.dqb2JZ) }]),
                    e && i.push({ id: sm.rB.LEGACY, value: sm.rB.LEGACY, label: j.intl.string(j.t["TYfH+5"]) }),
                    t &&
                        i.push({ id: sm.rB.EXPERIMENTAL, value: sm.rB.EXPERIMENTAL, label: j.intl.string(j.t.liQmtr) }),
                    n && i.push({ id: sm.rB.AUTOMATIC, value: sm.rB.AUTOMATIC, label: j.intl.string(j.t.qNgtO1) }),
                    i
                );
            }, [n, t, e]);
        },
        usePredicate: function () {
            return (0, m.bG)([iq.Ay], () => iq.Ay.shouldOfferManualSubsystemSelection());
        },
    }),
    s8 = (0, a.zD)(o.X.VOICE_QUALITY_OF_SERVICE_SETTING, {
        useTitle: () => j.intl.string(j.t.uancuJ),
        useSubtitle: () => j.intl.string(j.t.I1Eoqq),
        useValue: function () {
            return (0, m.bG)([iq.Ay], () => iq.Ay.getQoS());
        },
        setValue: function (e) {
            sx.A.setQoS(e);
        },
        usePredicate: function () {
            return (0, m.bG)([iq.Ay], () => iq.Ay.supports(sm.O5.QOS));
        },
    }),
    s7 = (0, a.zD)(o.X.VOICE_SILENCE_WARNING_SETTING, {
        useTitle: () => j.intl.string(j.t["4rsOPQ"]),
        useSubtitle: () => j.intl.string(j.t.jtiiCw),
        useValue: function () {
            return (0, m.bG)([iq.Ay], () => iq.Ay.getEnableSilenceWarning());
        },
        setValue: function (e) {
            sx.A.setSilenceWarning(e);
        },
        usePredicate: function () {
            return eW.isPlatformEmbedded;
        },
    }),
    s9 = (0, a.bd)(o.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
        useTitle: function (e) {
            return e ? j.intl.string(j.t.KHsSWK) : j.intl.string(j.t.PPDo5V);
        },
        useCollapsedSubtitle: () =>
            tc(o.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
                limit: (0, m.bG)([iq.Ay], () => iq.Ay.isInputProfileCustom()) ? 3 : 2,
            }),
        buildLayout: () => [sq, s6, s3, s7, s2, s5, s0, s4, s8],
    }),
    re = (0, a.zD)(o.X.VOICE_ECHO_CANCELLATION_SETTING, {
        useTitle: () => j.intl.string(j.t.iWTwu6),
        useValue: function () {
            return (0, m.bG)([iq.Ay], () => iq.Ay.getEchoCancellation());
        },
        setValue: function (e) {
            sx.A.setEchoCancellation(e, { page: A.liQ.USER_SETTINGS, section: A.JJy.SETTINGS_VOICE_AND_VIDEO });
        },
        useDisabled: function () {
            return (0, m.bG)([iq.Ay, sW.A], () => {
                let e = iq.Ay.getInputDeviceId();
                return sW.A.hasEchoCancellation(e);
            });
        },
        usePredicate: function () {
            return (0, m.bG)([iq.Ay], () => iq.Ay.isInputProfileCustom());
        },
    });
var rt = n(459838),
    rn = n(451988),
    ri = n(934246),
    rl = n(300839);
let rs = (0, tU.Ld)();
function rr(e) {
    let { isSpeaking: t, className: n, id: i, ariaDescribedBy: l, ariaLabelledBy: s, disabled: r } = e;
    return (0, c.jsx)("div", {
        role: "meter",
        className: ie()(ri.$I, n),
        id: i,
        "aria-describedby": l,
        "aria-labelledby": s,
        "aria-valuenow": t && !r ? 100 : 0,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuetext": t && !r ? j.intl.string(j.t.haLKZ0) : j.intl.string(j.t.X2hJL7),
        children: (0, c.jsx)("div", { className: ie()(ri.Jx, ri.NU, { [ri.zY]: t && !r, [ri.r9]: r }) }),
    });
}
function ra(e) {
    let { volume: t, id: n, ariaDescribedBy: i, ariaLabelledBy: l, disabled: s } = e,
        { threshold: r, autoThreshold: a } = (0, m.cf)([iq.Ay], () => ({
            threshold: iq.Ay.getModeOptions().threshold,
            autoThreshold: iq.Ay.getModeOptions().autoThreshold,
        })),
        o = (0, m.bG)([iq.Ay], () => iq.Ay.getMode());
    return (0, c.jsx)("section", {
        className: ie()(ri.Mo, ri.jW),
        id: n,
        "aria-describedby": i,
        "aria-labelledby": l,
        children: (0, c.jsx)(B.A, {
            initialValue: r + 100,
            onValueRender: (e) => `${(-((100 - e) * 1)).toFixed(0)}dB`,
            onValueChange: (e) => {
                var t;
                return (t = -((100 - e) * 1)), void sx.A.setMode(o, { threshold: t, autoThreshold: a });
            },
            barStyles: { background: nK.A.unsafe_rawColors.GREEN_360.css },
            fillStyles: { background: nK.A.unsafe_rawColors.YELLOW_300.css },
            "aria-labelledby": rs,
            disabled: s,
            children: (0, c.jsxs)("div", {
                className: ie()(ri.NU, ri.TL, ri.Jx, rl.bar),
                children: [
                    (0, c.jsx)("div", { className: ie()(ri.GS, ri.SH), style: { width: s ? 0 : t + 100 + "%" } }),
                    (0, c.jsx)("div", { className: "grow" }),
                ],
            }),
        }),
    });
}
let ro = (0, a.E2)(o.X.VOICE_INPUT_SENSITIVITY_FIELD_SET, {
    useSearchTerms: () => [j.intl.string(j.t["sqUm+k"]), j.intl.string(j.t.I1Zuq0), j.intl.string(j.t.nuFtHH)],
    usePredicate: () => (0, m.bG)([iq.Ay], () => iq.Ay.isInputProfileCustom()),
    Component: function () {
        let { autoThreshold: e, disabled: t } = (0, m.cf)([iq.Ay], () => ({
                autoThreshold: iq.Ay.getModeOptions().autoThreshold,
                disabled: iq.Ay.getMode() !== sm.TB.VOICE_ACTIVITY,
            })),
            n = g.useCallback((e) => {
                let t = iq.Ay.getMode(),
                    { threshold: n } = iq.Ay.getModeOptions();
                sx.A.setMode(t, { autoThreshold: e, threshold: n });
            }, []),
            i = (0, m.bG)([iq.Ay], () => iq.Ay.supports(sm.O5.AUTOMATIC_VAD)),
            { volume: l, isSpeaking: s } = (function () {
                let [e, t] = g.useState(-100),
                    [n, i] = g.useState(!1);
                function l(e, n) {
                    t(e), i((n & sm.ME.VOICE) === sm.ME.VOICE);
                }
                return (
                    g.useEffect(() => {
                        let e = new rn.Ep();
                        return (
                            e.start(1e3, () => {
                                iq.Ay.getMediaEngine().on(rt.bg.VoiceActivity, l), e.stop();
                            }),
                            () => {
                                iq.Ay.getMediaEngine().removeListener(rt.bg.VoiceActivity, l), e.stop();
                            }
                        );
                    }, []),
                    { volume: e, isSpeaking: n }
                );
            })(),
            r = (0, m.bG)([iq.Ay], () => iq.Ay.isEnabled()),
            a = g.useMemo(
                () =>
                    !r &&
                    (0, c.jsx)("div", {
                        className: ri.B4,
                        children: (0, c.jsx)(iV.w, {
                            type: "warning",
                            children: j.intl.format(j.t["O13I+O"], { onEnableClick: () => sx.A.enable(!0) }),
                        }),
                    }),
                [r],
            ),
            o = g.useMemo(() => (e ? j.intl.string(j.t.JsbzjA) : j.intl.string(j.t.MLmyMY)), [e]),
            u = g.useId(),
            d = g.useId();
        return i
            ? (0, c.jsxs)("fieldset", {
                  "aria-describedby": d,
                  children: [
                      (0, c.jsx)(i8.A, { tag: "legend", id: u, children: j.intl.string(j.t.GByLar) }),
                      (0, c.jsx)(i8.A, { id: d, children: o }),
                      (0, c.jsxs)(F.B, {
                          direction: "vertical",
                          gap: 8,
                          children: [
                              (0, c.jsx)(tK.d, {
                                  disabled: t,
                                  label: j.intl.string(j.t.lY6j47),
                                  description: o,
                                  checked: e,
                                  onChange: n,
                              }),
                              e
                                  ? (0, c.jsx)(rr, {
                                        isSpeaking: s,
                                        className: ri.UJ,
                                        ariaDescribedBy: d,
                                        ariaLabelledBy: u,
                                        disabled: t,
                                    })
                                  : (0, c.jsx)(ra, { volume: l, ariaDescribedBy: d, ariaLabelledBy: u, disabled: t }),
                              a,
                          ],
                      }),
                  ],
              })
            : (0, c.jsxs)(F.B, {
                  direction: "vertical",
                  gap: 8,
                  children: [
                      (0, c.jsx)(tH.D, {
                          label: j.intl.string(j.t["sqUm+k"]),
                          description: o,
                          layout: "vertical",
                          children: (n) =>
                              e
                                  ? (0, c.jsx)(rr, {
                                        isSpeaking: s,
                                        className: ri.UJ,
                                        id: n.controlId,
                                        ariaDescribedBy: n.describedById,
                                        ariaLabelledBy: n.labelId,
                                        disabled: t,
                                    })
                                  : (0, c.jsx)(ra, {
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
var ru = n(366010);
let rd = n(993830),
    rc = n(413142),
    rg = { page: A.liQ.USER_SETTINGS, section: A.JJy.SETTINGS_VOICE_AND_VIDEO };
function rm() {
    let e = (0, m.bG)([nR.A], () => (0, ru.q)(nR.A.theme));
    return (0, c.jsx)("img", { src: e ? rd : rc, width: 48, height: 32, alt: "" });
}
let rA = (0, a.E2)(o.X.VOICE_NOISE_SUPPRESSION_SETTING, {
    useSearchTerms: () => [j.intl.string(j.t.t8Qhib), j.intl.string(j.t.hmfkCi)],
    usePredicate: function () {
        return (0, m.bG)([iq.Ay], () => iq.Ay.isInputProfileCustom() && iq.Ay.isNoiseSuppressionSupported());
    },
    Component: function () {
        let e = g.useCallback((e) => {
                sx.A.setNoiseCancellation("KRISP" === e, rg), sx.A.setNoiseSuppression("STANDARD" === e, rg);
            }, []),
            {
                noiseCancellation: t,
                noiseSuppression: n,
                isNoiseSuppressionSupported: i,
                isNoiseCancellationSupported: l,
            } = (0, m.cf)([iq.Ay], () => ({
                noiseCancellation: iq.Ay.getNoiseCancellation(),
                noiseSuppression: iq.Ay.getNoiseSuppression(),
                isNoiseSuppressionSupported: iq.Ay.isNoiseSuppressionSupported(),
                isNoiseCancellationSupported: iq.Ay.isNoiseCancellationSupported(),
            })),
            s = g.useMemo(() => {
                let e = [];
                return (
                    l && e.push({ id: "krisp", label: j.intl.string(j.t.rdoNzt), value: "KRISP" }),
                    i && e.push({ id: "standard", label: j.intl.string(j.t.qXeYHw), value: "STANDARD" }),
                    e.push({ id: "disabled", label: j.intl.string(j.t.wkYAlz), value: "NONE" }),
                    e
                );
            }, [l, i]),
            r = l
                ? j.intl.format(j.t["1q5aTp"], { helpArticle: eS.A.getArticleURL(A.MVz.NOISE_SUPPRESSION) })
                : j.intl.string(j.t.OWKjw5);
        return (0, c.jsxs)(F.B, {
            direction: "vertical",
            gap: 0,
            children: [
                (0, c.jsx)(i3.l, {
                    label: j.intl.string(j.t.t8Qhib),
                    description: r,
                    layout: "horizontal",
                    value: t ? "KRISP" : n ? "STANDARD" : "NONE",
                    onSelectionChange: e,
                    options: s,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                l && (0, c.jsx)(rm, {}),
            ],
        });
    },
});
var rE = n(934729),
    rh = n(621380);
let rS = !no.Av;
function rT() {
    return (0, m.bG)([iq.Ay], () => iq.Ay.getMode() === sm.TB.PUSH_TO_TALK);
}
let rx = (0, a.zD)(o.X.VOICE_PUSH_TO_TALK_SETTING, {
    useTitle: function () {
        return no.Av ? j.intl.string(j.t.tG4Np5) : j.intl.string(j.t.JMyQin);
    },
    useSubtitle: function () {
        let e = (0, m.bG)([iq.Ay], () => iq.Ay.getMode());
        return g.useMemo(() => {
            if (!no.Av && e === sm.TB.PUSH_TO_TALK)
                return j.intl.format(j.t["VHI4+Y"], { onDownloadClick: () => (0, rE._)("Help Text PTT") });
        }, [e]);
    },
    usePredicate: function () {
        return (0, m.bG)([iq.Ay], () => iq.Ay.getActiveInputProfile() !== rh.m.STUDIO);
    },
    useValue: function () {
        return (0, m.bG)([iq.Ay], () => iq.Ay.getMode() === sm.TB.PUSH_TO_TALK);
    },
    setValue: function (e) {
        var t, i;
        (t = e ? sm.TB.PUSH_TO_TALK : sm.TB.VOICE_ACTIVITY),
            (i = [tv.A.USER_SETTINGS_VOICE_AND_VIDEO]),
            t === sm.TB.PUSH_TO_TALK &&
                rS &&
                (0, ln.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("74558"), n.e("10919")]).then(n.bind(n, 556506));
                    return (t) =>
                        (0, c.jsx)(e, {
                            title: j.intl.string(j.t.Kdt0Gb),
                            confirmText: j.intl.string(j.t["1WjMbC"]),
                            cancelText: j.intl.string(j.t.BddRzS),
                            onConfirm: () => (0, rE._)("PTT Limited Modal"),
                            body: j.intl.string(j.t.NIozvt),
                            ...t,
                        });
                }),
            sx.A.setMode(t, void 0, void 0, { analyticsLocations: i });
    },
    useSearchTerms: () => [j.intl.string(j.t["pS+K2L"]), j.intl.string(j.t.nuFtHH)],
});
var rp = n(297932);
let rf = (0, a.E2)(o.X.VOICE_PUSH_TO_TALK_KEYBIND_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t["pS+K2L"]), j.intl.string(j.t.nuFtHH)],
        usePredicate: rT,
        Component: function () {
            let e = (0, m.bG)([iq.Ay], () => {
                    let { shortcut: e } = iq.Ay.getModeOptions();
                    return e;
                }),
                t = j.intl.format(j.t.HVvn5T, {
                    onClick: () => (0, t9.openUserSettings)(o.X.SYSTEM_CUSTOM_KEYBINDS_CATEGORY),
                });
            return (0, c.jsx)(tH.D, {
                label: j.intl.string(j.t["o+BJQR"]),
                description: t,
                layout: "horizontal-responsive",
                children: (0, c.jsx)("div", {
                    className: rp.e,
                    children: (0, c.jsx)(i9.A, {
                        defaultValue: e,
                        onChange: (e) => sx.A.setMode(A.TBI.PUSH_TO_TALK, { shortcut: e }),
                    }),
                }),
            });
        },
    }),
    r_ = (0, a.sN)(o.X.VOICE_PUSH_TO_TALK_RELEASE_DELAY_SETTING, {
        useTitle: () => j.intl.string(j.t.GCNMM8),
        useSearchTerms: () => [j.intl.string(j.t["pS+K2L"]), j.intl.string(j.t.nuFtHH)],
        setValue: function (e) {
            sx.A.setMode(A.TBI.PUSH_TO_TALK, { delay: e });
        },
        minValue: 0,
        maxValue: A.IjB,
        getInitialValue: function () {
            let { delay: e } = iq.Ay.getModeOptions();
            return e;
        },
        onValueRender: function (e) {
            return e >= 1e3 ? ((e /= 1e3), `${e.toFixed(2)}s`) : `${e.toFixed(0)}\u00A0ms`;
        },
        usePredicate: rT,
    });
var rN = n(957658),
    rI = n(329139);
let rC = (0, a.zD)(o.X.VOICE_SPATIAL_AUDIO_SETTING, {
        useTitle: () => j.intl.string(rI.default.LGDPhA),
        useValue: function () {
            return (0, m.bG)([iq.Ay], () => iq.Ay.isSpatialAudioEnabled());
        },
        setValue: function (e) {
            sx.A.setSpatialAudio(e, [tv.A.USER_SETTINGS_VOICE_AND_VIDEO]);
        },
        usePredicate: function () {
            return (0, rN.A)("VoiceSettings");
        },
    }),
    rb = (0, a.Qx)(o.X.VOICE_INPUT_PROFILE_SETTING, {
        useTitle: () => j.intl.string(j.t.LM3U3k),
        usePredicate: function () {
            let { enabledInputProfiles: e } = (0, sZ._)({ location: "SettingsRendererConfig" });
            return e.length > 0;
        },
        useSearchTerms: () => [j.intl.string(j.t.nuFtHH), j.intl.string(j.t.VZPR0R), j.intl.string(j.t.cjPbpT)],
        useValue: function () {
            return (0, m.bG)([iq.Ay], () => iq.Ay.getActiveInputProfile() ?? rh.m.CUSTOM);
        },
        setValue: function (e) {
            let t = [tv.A.USER_SETTINGS_VOICE_AND_VIDEO];
            sx.A.setActiveInputProfile(e, { analyticsLocations: t });
        },
        useOptions: function () {
            let { enabledInputProfiles: e } = (0, sZ.d)({ location: "InputProfileCategory" });
            return [
                { value: rh.m.VOICE_ISOLATION, name: j.intl.string(j.t.cjPbpT), desc: j.intl.string(j.t.CzhvnE) },
                { value: rh.m.STUDIO, name: j.intl.string(j.t.VZPR0R), desc: j.intl.string(j.t.ZaJksS) },
                { value: rh.m.CUSTOM, name: j.intl.string(j.t["N/PQjv"]), desc: j.intl.string(j.t.SnBmuY) },
            ].filter((t) => {
                let { value: n } = t;
                return e.includes(n);
            });
        },
    }),
    ry = (0, a.zZ)(o.X.VOICE_INPUT_PROFILE_CATEGORY, {
        useInlineNotice: function () {
            let e = (0, m.bG)([sW.A, iq.Ay], () => {
                let e = iq.Ay.getInputDeviceId();
                return (
                    (sW.A.hasEchoCancellation(e) || sW.A.hasNoiseSuppression(e) || sW.A.hasAutomaticGainControl(e)) &&
                    iq.Ay.isInputProfileCustom()
                );
            });
            return g.useMemo(() => {
                if (e) return { type: d.lT.INLINE_NOTICE, noticeType: "info", text: j.intl.string(j.t["/Whuzi"]) };
            }, [e]);
        },
        buildLayout: () => [rb, ro, rA, re, rC, rx, rf, r_, s9],
    });
var rv = n(403581),
    rj = n(512950),
    rO = n(983851),
    rL = n(687021),
    rD = n(128450),
    rR = n(796774),
    rP = n(209932),
    rG = n(813564),
    rM = n(984813),
    rU = n(922016),
    rV = n(305866),
    rk = n(22231),
    rw = n(158045),
    rF = n(792348),
    rB = n(674168),
    rz = n(484036),
    rX = n(805945),
    rY = n(199300);
function rH(e) {
    let { onSelect: t } = e,
        [n, i] = g.useState(!1),
        l = (0, m.bG)([l0.default], () => l0.default.getCurrentUser()),
        s = rw.Ay.canUseCustomCallSounds(l),
        r = g.useRef(null);
    function a(e) {
        s && (i(!1), t?.(e));
    }
    return (0, c.jsx)(rU.Y, {
        targetElementRef: r,
        shouldShow: n,
        position: "left",
        onRequestClose: () => i(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, c.jsx)(rV.l, {
                children: (0, c.jsx)(rz.A, {
                    suppressPlaySound: !0,
                    shouldShowLockedSounds: !1,
                    guildId: null,
                    channel: null,
                    onClose: t,
                    onSelect: a,
                    gridNotice: s ? null : (0, c.jsx)(rB.m, {}),
                    analyticsSource: "call sounds edit setting",
                }),
            });
        },
        children: (e) =>
            (0, c.jsx)(rX.dT, {
                ...e,
                ref: r,
                onClick: () => {
                    i(!n);
                },
                text: j.intl.string(j.t.uOe0Az),
                children: (0, c.jsx)(rk.R, { size: "md", color: "currentColor", className: rY.Wo }),
            }),
    });
}
function rK(e) {
    let { sound: t } = e,
        { previewSound: n } = (0, rF.A)(t, null),
        i =
            0 === (0, rG.wH)()
                ? j.intl.string(j.t.OASXjt)
                : j.intl.formatToPlainString(j.t["/8fYO5"], { emojiName: t.emojiName, soundName: t.name });
    return (0, c.jsx)(rX.dT, {
        onClick: n,
        text: i,
        children: (0, c.jsx)(rO.H, { size: "md", color: "currentColor", className: rY.wg }),
    });
}
function rW(e) {
    let { sound: t, isGlobal: n, onSelect: i } = e,
        l = null != t,
        s = t?.emojiId,
        r = t?.emojiName,
        a = l && (null != r || null != s);
    return (0, c.jsxs)("div", {
        className: rY.D6,
        children: [
            (0, c.jsxs)("div", {
                className: rY.kL,
                children: [
                    a && (0, c.jsx)(tI.A, { emojiId: s, emojiName: r, className: rY.Zg }),
                    (0, c.jsx)(z.E, {
                        variant: "text-md/normal",
                        color: "text-strong",
                        className: rY.dj,
                        children:
                            null == t
                                ? j.intl.string(j.t.PoWNfe)
                                : n
                                  ? j.intl.format(j.t.B6HU6O, {
                                        soundName: t.name,
                                        subtextHook: function (e) {
                                            return (0, c.jsx)(z.E, {
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
                        ? (0, c.jsx)(rK, { sound: t })
                        : (0, c.jsx)(rO.H, { size: "md", color: "currentColor", className: rY.Gk }),
                ],
            }),
            (0, c.jsxs)("div", {
                className: rY.kL,
                children: [
                    (0, c.jsx)(rH, { onSelect: i }),
                    l &&
                        !n &&
                        (0, c.jsx)(rX.dT, {
                            onClick: () => i(null),
                            text: j.intl.string(j.t.jmtcGA),
                            children: (0, c.jsx)(i6.u, {
                                size: "md",
                                color: nK.A.unsafe_rawColors.RED_400.css,
                                className: rY.Wo,
                            }),
                        }),
                ],
            }),
        ],
    });
}
var rZ = n(617617);
n(980504);
var rq = n(907895);
function rQ(e) {
    return (0, m.bG)([rP.A], () => {
        if (null == e) return null;
        let { guildId: t, soundId: n } = e;
        return rP.A.getSound("0" === t ? "0" : t, n);
    });
}
function rJ(e) {
    let { guildId: t } = e,
        n = (0, m.bG)([rZ.A], () => rZ.A.settings.guilds?.guilds?.[t]?.joinSound),
        i = rQ(n);
    if (null == n || null == i) return null;
    let { emojiId: l, emojiName: s } = i,
        r = null != l || null != s;
    return (0, c.jsxs)("div", {
        className: rq.Io,
        children: [
            r
                ? (0, c.jsx)(tI.A, { emojiId: l, emojiName: s, className: rq.nW })
                : (0, c.jsx)(rO.H, { size: "md", color: "currentColor", className: rq.nW }),
            (0, c.jsx)(z.E, { className: rq.dK, variant: "text-xs/medium", children: i.name }),
        ],
    });
}
let r$ = (0, a.E2)(o.X.ENTRANCE_SOUNDS_SETTING, {
    useSearchTerms: () => [j.intl.string(j.t.nzUc3B)],
    Component: function () {
        let { analyticsLocations: e } = (0, eL.Ay)(),
            [t, n] = g.useState("0"),
            i = (0, rM.mz)(t),
            l = rQ(i),
            s = i?.type === rM.PP.GLOBAL,
            r = (0, m.bG)([rP.A], () => rP.A.hasFetchedAllSounds()) && null != i && null == l;
        g.useEffect(() => {
            r && (0, rG.ND)({ location: e });
        }, [r, e]),
            g.useEffect(() => {
                (0, rR.E7)();
            }, []);
        let a = g.useCallback((e, t) => {
            let { inDropdown: n } = t;
            return null == e ? null : n ? (0, c.jsx)(rJ, { guildId: e.value }) : null;
        }, []);
        return (0, c.jsxs)(nZ.n, {
            label: j.intl.string(j.t.nzUc3B),
            description: j.intl.format(j.t.u9RWmv, { helpdeskArticle: eS.A.getArticleURL(A.MVz.SOUNDBOARD) }),
            children: [
                (0, c.jsx)(rL.A, {
                    guildId: t,
                    className: rq.Dt,
                    globalOption: { label: j.intl.string(j.t["CpEUP/"]), value: "0" },
                    onChange: (e) => {
                        n(null == e ? "0" : e.id);
                    },
                    renderOptionSuffix: a,
                    hideDivider: !0,
                }),
                (0, c.jsxs)(rD.A, {
                    title: j.intl.format(j.t.I2TsYN, {
                        nitroWheelHook: () => (0, c.jsx)(rv.t, { size: "md", color: "currentColor", className: rq.ax }),
                    }),
                    children: [
                        (0, c.jsx)(rW, {
                            sound: l,
                            isGlobal: s,
                            onSelect: (n) => {
                                null == n ? (0, rG.Dv)(t, e) : (0, rG.un)(t, n, e);
                            },
                        }),
                        r &&
                            (0, c.jsx)(rj.p, {
                                className: rq.lm,
                                messageType: rj.Y.WARNING,
                                children: j.intl.string(j.t.WkPsFR),
                            }),
                    ],
                }),
            ],
        });
    },
});
var r0 = n(824744);
let r1 = (0, a.sN)(o.X.SOUNDBOARD_VOLUME_SETTING, {
    useTitle: () => j.intl.string(j.t.kbFsAD),
    useSubtitle: () => j.intl.format(j.t.BPbGq7, { helpCenterArticle: eS.A.getArticleURL(A.MVz.SOUNDBOARD) }),
    setValue: function (e) {
        let t = [tv.A.USER_SETTINGS_VOICE_AND_VIDEO],
            n = (0, r0.w)(e);
        (0, rR.iy)(n, t);
    },
    minValue: 0,
    maxValue: 100,
    getInitialValue: function () {
        let e = (0, rG.wH)();
        return (0, r0.M)(e);
    },
    onValueRender: function (e) {
        return `${e.toFixed(0)}%`;
    },
});
var r2 = n(864145);
let r3 = (0, a.sN)(o.X.SOUNDMOJI_VOLUME_SETTING, {
        useTitle: () => j.intl.string(j.t["2JbvKw"]),
        useSubtitle: () => j.intl.string(j.t.INenzY),
        setValue: function (e) {
            let t = (0, r0.w)(e);
            v.HO.updateSetting(t);
        },
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = v.HO.getSetting();
            return (0, r0.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        usePredicate: function () {
            return (0, r2.X)({ location: "SoundmojiVolumeSetting" });
        },
    }),
    r5 = (0, a.zZ)(o.X.SOUNDBOARD_CATEGORY, {
        useTitle: () => j.intl.string(j.t.ABjMWI),
        buildLayout: () => [r1, r3, r$],
    });
var r6 = n(803224),
    r4 = n(552122);
let r8 = (0, a.E2)(o.X.SOUNDS_HOLIDAY_NOTICE, {
        useSearchTerms: () => [j.intl.string(j.t.fgSHf8)],
        usePredicate: () => null != r4.A.useHolidaySoundpack(),
        Component: () =>
            (0, c.jsx)(z.E, {
                variant: "text-md/normal",
                color: "text-subtle",
                children: j.intl.format(j.t.Eup6Wv, {
                    onClick: () => (0, t9.openUserSettings)(o.X.NOTIFICATIONS_SOUNDS_CATEGORY),
                }),
            }),
    }),
    r7 = (0, a.AK)(o.X.VOICE_AND_VIDEO_TO_NOTIFICATION_SOUNDS_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.eyGEE4),
        useSearchTerms: () => [j.intl.string(j.t.eyGEE4)],
        destinationKey: o.X.NOTIFICATIONS_SOUNDS_CATEGORY,
    }),
    r9 = (0, a.gN)(o.X.VOICE_AND_VIDEO_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [r7] });
var ae = n(264686);
let at = (0, eE.D)(() => ({ currentPlayingSound: null }));
function an() {
    let e = at.getField("currentPlayingSound");
    e?.stop(), at.setState({ currentPlayingSound: null });
}
function ai(e) {
    let t = at.getField("currentPlayingSound");
    t?.stop();
    let n = (0, n0.Ak)(e);
    at.setState({ currentPlayingSound: n });
}
function al(e) {
    return (0, a.zD)(`${o.X.SOUNDS_LIST_ITEM_PREFIX}${e.sound}`, {
        useTitle: e.useTitle,
        useSubtitle: () => j.intl.format(j.t.OOiGCM, { onClick: () => ai(e.sound) }),
        useSearchTerms: e.useSearchTerms,
        useValue: () => {
            let t = (0, m.bG)([r6.A], () => r6.A.isSoundDisabled(e.sound)),
                n = e.useDisabled?.();
            return !t && !n;
        },
        setValue: (t) => {
            let n = r6.A.getDisabledSounds().filter((t) => t !== e.sound);
            t || n.push(e.sound), ae.default.setDisabledSounds(n);
        },
        useDisabled: () => {
            let t = e.useDisabled?.(),
                n = (0, m.bG)([r6.A], () => r6.A.getDisableAllSounds());
            return t || n;
        },
        useDisabledMessage: e.useDisabledMessage,
    });
}
let as = [
        { useTitle: () => j.intl.string(j.t.hK51Yg), sound: "deafen" },
        { useTitle: () => j.intl.string(j.t.XiejaJ), sound: "undeafen" },
        { useTitle: () => j.intl.string(j.t.w4m945), sound: "mute" },
        { useTitle: () => j.intl.string(j.t.YqAjXy), sound: "unmute" },
        { useTitle: () => j.intl.string(j.t.JoTq8n), sound: "camera_on" },
        { useTitle: () => j.intl.string(j.t["8P6tQ6"]), sound: "camera_off" },
        { useTitle: () => j.intl.string(j.t["juL9/L"]), sound: "disconnect" },
        {
            useTitle: () => j.intl.string(j.t.x98vQq),
            useSearchTerms: () => [j.intl.string(j.t.Q8gkVL)],
            sound: "ptt_start",
        },
        {
            useTitle: () => j.intl.string(j.t["1HjRqC"]),
            useSearchTerms: () => [j.intl.string(j.t.Q8gkVL)],
            sound: "ptt_stop",
        },
        { useTitle: () => j.intl.string(j.t["9JB1Ck"]), sound: "user_join" },
        { useTitle: () => j.intl.string(j.t.KUBBNt), sound: "user_leave" },
        { useTitle: () => j.intl.string(j.t.EZjqUT), sound: "user_moved" },
        { useTitle: () => j.intl.string(j.t.LnNlQh), sound: "call_calling" },
        { useTitle: () => j.intl.string(j.t.Nd8P5y), sound: "stream_started" },
        { useTitle: () => j.intl.string(j.t["9bYj+G"]), sound: "stream_ended" },
        { useTitle: () => j.intl.string(j.t.KccUI1), sound: "stream_user_joined" },
        { useTitle: () => j.intl.string(j.t.dsjkiN), sound: "stream_user_left" },
        { useTitle: () => j.intl.string(j.t.nFOcf9), sound: "activity_launch" },
        { useTitle: () => j.intl.string(j.t["a6lw/u"]), sound: "activity_end" },
        { useTitle: () => j.intl.string(j.t.KaFxrY), sound: "activity_user_join" },
        { useTitle: () => j.intl.string(j.t.S14z9n), sound: "activity_user_left" },
        { useTitle: () => j.intl.string(j.t.CP3DC3), sound: "reconnect" },
    ],
    ar = (0, a.D1)(o.X.VOICE_AND_VIDEO_SOUNDS_LIST, {
        collapseAfter: 4,
        useCollapsibleTitle: (e, t) =>
            e
                ? j.intl.formatToPlainString(j.t["0JYT98"], { count: t })
                : j.intl.formatToPlainString(j.t.ji1uNt, { count: t }),
        useCollapsedSubtitle: () => tc(o.X.VOICE_AND_VIDEO_SOUNDS_LIST, { limit: 3 }),
        initialize: function () {
            return () => {
                an();
            };
        },
        buildLayout: () => as.map((e) => al(e)),
    }),
    aa = (0, a.zZ)(o.X.SOUNDS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.MKWyKc),
        useInlineNotice: function () {
            let e = (0, m.bG)([r6.A], () => r6.A.getDisableAllSounds());
            return g.useMemo(() => {
                if (e)
                    return {
                        type: d.lT.INLINE_NOTICE,
                        noticeType: "warning",
                        text: j.intl.format(j.t.fRvixS, {
                            onClick: () => (0, t9.openUserSettings)(o.X.NOTIFICATIONS_SOUNDS_CATEGORY),
                        }),
                    };
            }, [e]);
        },
        buildLayout: () => [ar, r8, r9],
    }),
    ao = (0, a.zD)(o.X.STREAMING_SHOW_STREAM_PREVIEWS, {
        useTitle: () => j.intl.string(j.t.e3Zz3F),
        useSubtitle: () => j.intl.string(j.t.RztTjP),
        useValue: function () {
            return !v.uh.useSetting();
        },
        setValue: function (e) {
            (0, sB.A)("stream_previews_disabled", !e, v.uh.getSetting(), [tv.A.USER_SETTINGS_VOICE_AND_VIDEO]),
                v.uh.updateSetting(!e);
        },
    }),
    au = (0, a.zD)(o.X.STREAMING_ADVANCED_SCREENSHARE, {
        useTitle: () => j.intl.string(j.t.GmWk2E),
        useSearchTerms: () => [j.intl.string(j.t["Fj/xn1"])],
        useSubtitle: () => j.intl.string(j.t["Fj/xn1"]),
        useValue: function () {
            return (0, m.bG)([iq.Ay], () => iq.Ay.getVideoHook());
        },
        setValue: sx.A.setVideoHook,
        usePredicate: function () {
            return (0, m.bG)([iq.Ay], () => iq.Ay.supportsVideoHook());
        },
    }),
    ad = (0, a.zD)(o.X.STREAMING_EXPERIMENTAL_SOUNDSHARE, {
        useTitle: () => j.intl.string(j.t["4I0qzZ"]),
        useValue: function () {
            return (0, m.bG)([iq.Ay], () => iq.Ay.getExperimentalSoundshare());
        },
        setValue: sx.A.setExperimentalSoundshare,
        usePredicate: function () {
            return (0, m.bG)([iq.Ay], () => {
                let e = iq.Ay.supportsExperimentalSoundshare(),
                    t = iq.Ay.supportsHookSoundshare();
                return e && t;
            });
        },
    }),
    ac = (0, a.zD)(o.X.STREAMING_STREAM_ATTENUATION, {
        useTitle: () => j.intl.string(j.t["/jwMtn"]),
        useSubtitle: () => j.intl.string(j.t.zlA23F),
        useValue: function () {
            return (0, m.bG)([iq.Ay], () => iq.Ay.getSidechainCompression());
        },
        setValue: function (e) {
            let t = [tv.A.USER_SETTINGS_VOICE_AND_VIDEO];
            sx.A.setSidechainCompression(e, { analyticsLocations: t });
        },
        usePredicate: function () {
            return iq.Ay.supports(sm.O5.SIDECHAIN_COMPRESSION);
        },
    }),
    ag = (0, a.sN)(o.X.STREAMING_STREAM_ATTENUATION_STRENGTH, {
        useTitle: () => j.intl.string(j.t.fhEzfj),
        setValue: function (e) {
            let t = [tv.A.USER_SETTINGS_VOICE_AND_VIDEO];
            sx.A.setSidechainCompressionStrength(e, { analyticsLocations: t });
        },
        minValue: 1,
        maxValue: 100,
        getInitialValue: iq.Ay.getSidechainCompressionStrength,
        usePredicate: function () {
            let e = (0, m.bG)([iq.Ay], () => iq.Ay.getSidechainCompression());
            return iq.Ay.supports(sm.O5.SIDECHAIN_COMPRESSION) && e;
        },
    }),
    am = (0, a.zD)(o.X.STREAMING_OS_MENU_SCREEN_CAPTURE, {
        useTitle: () => j.intl.string(j.t.lt8rRx),
        useSubtitle: () => j.intl.string(j.t.ie1mgY),
        useValue: function () {
            return (0, m.bG)([iq.Ay], () => iq.Ay.getUseSystemScreensharePicker());
        },
        setValue: function (e) {
            (0, no.cX)() && e
                ? (0, nW.A)({
                      title: j.intl.string(j.t["9jf31O"]),
                      subtitle: j.intl.string(j.t.uBd6JW),
                      variant: "primary",
                      onConfirm: () => {
                          sx.A.setUseSystemScreensharePicker(e), nc.A.app.relaunch();
                      },
                      confirmText: j.intl.string(j.t.BddRzS),
                  })
                : sx.A.setUseSystemScreensharePicker(e);
        },
        usePredicate: function () {
            return (0, m.bG)([iq.Ay], () => iq.Ay.supportsSystemScreensharePicker() && (0, no.cX)());
        },
    }),
    aA = (0, a.bd)(o.X.STREAMING_ADVANCED_ACCORDION, {
        useTitle: (e) => (e ? j.intl.string(j.t.qrMyvm) : j.intl.string(j.t.LEtTNl)),
        useCollapsedSubtitle: () => tc(o.X.STREAMING_ADVANCED_ACCORDION),
        buildLayout: () => [ac, ag, am, ad, au],
    }),
    aE = (0, a.zZ)(o.X.STREAMING_CATEGORY, { useTitle: () => j.intl.string(j.t.KDdjou), buildLayout: () => [ao, aA] });
var ah = n(106713);
let aS = (0, a.E2)(o.X.VOICE_MICROPHONE_INPUT_SELECT, {
        useSearchTerms: () => [],
        Component: function () {
            let { showDeviceFormFactorIndicators: e } = ah.A.useConfig({ location: "MicrophoneInputSelect" });
            return (0, c.jsx)(su.U, {
                label: j.intl.string(j.t.UTM8VP),
                deviceType: sm.oh.AUDIO_INPUT,
                location: "UserSettingsVoiceVideo",
                hideDeviceTypeIcon: !e,
            });
        },
    }),
    aT = (0, a.E2)(o.X.VOICE_SPEAKER_OUTPUT_SELECT, {
        useSearchTerms: () => [],
        Component: function () {
            let { showDeviceFormFactorIndicators: e } = ah.A.useConfig({ location: "SpeakerOutputSelect" });
            return (0, c.jsx)(su.U, {
                label: j.intl.string(j.t.xuYQ0n),
                deviceType: sm.oh.AUDIO_OUTPUT,
                location: "UserSettingsDevices",
                hideDeviceTypeIcon: !e,
            });
        },
    }),
    ax = (0, a.zC)(o.X.VOICE_INPUT_OUTPUT_DEVICE_SPLIT, { buildLayout: () => [aS, aT] }),
    ap = (0, a.sN)(o.X.VOICE_INPUT_VOLUME_SETTING, {
        useTitle: () => j.intl.string(j.t.Rtsr6w),
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = iq.Ay.getInputVolume();
            return (0, r0.M)(e);
        },
        asValueChanges: function (e) {
            let t = [tv.A.USER_SETTINGS_VOICE_AND_VIDEO],
                n = (0, r0.w)(e);
            sx.A.setInputVolume(n, { analyticsLocations: t });
        },
    }),
    af = (0, a.sN)(o.X.VOICE_OUTPUT_VOLUME_SETTING, {
        useTitle: () => j.intl.string(j.t.aUJ062),
        minValue: 0,
        maxValue: 200,
        getInitialValue: function () {
            let e = iq.Ay.getOutputVolume();
            return (0, r0.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        asValueChanges: function (e) {
            let t = [tv.A.USER_SETTINGS_VOICE_AND_VIDEO],
                n = (0, r0.w)(e);
            sx.A.setOutputVolume(n, { analyticsLocations: t });
        },
    }),
    a_ = (0, a.zC)(o.X.VOICE_INPUT_OUTPUT_VOLUME_SPLIT, { buildLayout: () => [ap, af] });
var aN = n(702841),
    aI = n(349288),
    aC = n(152567),
    ab = n(141218);
let ay = `${eS.A.getArticleURL(A.MVz.VOICE_VIDEO_TROUBLESHOOTING)}?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm`,
    av = (0, a.E2)(o.X.VOICE_MICROPHONE_TEST_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t.nuFtHH)],
        usePredicate: function () {
            return (0, aN.bG)([iq.Ay], () => iq.Ay.supports(sm.O5.LOOPBACK));
        },
        Component: function () {
            return (0, aN.bG)([iq.Ay], () => iq.Ay.supports(sm.O5.LOOPBACK))
                ? (0, c.jsx)(aC.A, {
                      size: "md",
                      notchBackground: aC.V.GRAY,
                      captionVoice: j.intl.string(j.t.bp3JOV),
                      captionNoVoice: (0, c.jsxs)(c.Fragment, {
                          children: [
                              (0, c.jsx)(z.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-default",
                                  children: j.intl.string(j.t.bgn75v),
                              }),
                              j.intl.string(j.t["MA+OZh"]),
                              (0, c.jsx)(aI.Anchor, {
                                  className: ab.X,
                                  href: eS.A.getArticleURL(A.MVz.NO_INPUT_DETECTED),
                                  children: j.intl.string(j.t.RYKKox),
                              }),
                          ],
                      }),
                      helpText: j.intl.format(j.t["V+B3FH"], { guideURL: ay }),
                      buttonTest: j.intl.string(j.t.gyljWE),
                      buttonStop: j.intl.string(j.t.I6OnJ3),
                      buttonVariant: "primary",
                      location: { page: A.liQ.USER_SETTINGS, section: A.JJy.SETTINGS_VOICE_AND_VIDEO },
                  })
                : null;
        },
    }),
    aj = eW.isWindows() ? ["BTHENUM", "BTHHFENUM"] : [];
function aO(e) {
    let { inputAndOutputAreBluetooth: t, canPromptSystemServiceInstallForVoice: n } = e;
    return (0, c.jsxs)(F.B, {
        children: [
            n && (0, c.jsx)(i1, { sourcePage: "voice" }),
            t && (0, c.jsx)(lB.A, { look: lB.k.WARNING, children: j.intl.string(j.t.Ioz3gx) }),
        ],
    });
}
let aL = (0, a.zZ)(o.X.VOICE_CATEGORY, {
        useTitle: () => j.intl.string(j.t.K3lovD),
        useSearchTerms: () => [
            j.intl.string(j.t.hHMYbb),
            j.intl.string(j.t.nuFtHH),
            j.intl.string(j.t.dl18zb),
            j.intl.string(j.t["3182VD"]),
            j.intl.string(j.t["DGq/PR"]),
            j.intl.string(j.t.eATD2B),
            j.intl.string(j.t.Rtsr6w),
            j.intl.string(j.t.aUJ062),
        ],
        useInlineNotice: function () {
            let e = i0("voice"),
                t = (0, sd.x5)(sm.oh.AUDIO_INPUT),
                n = (0, sd.x5)(sm.oh.AUDIO_OUTPUT),
                i = g.useMemo(() => {
                    let e = aj.some((e) => t?.hardwareId?.startsWith(e)),
                        i = aj.some((e) => n?.hardwareId?.startsWith(e));
                    return e && i && t?.containerId != null && t.containerId === n?.containerId;
                }, [t, n]);
            return g.useMemo(
                () =>
                    e.canPrompt || i
                        ? {
                              type: d.lT.STRONGLY_DISCOURAGED_CUSTOM,
                              notice: () =>
                                  (0, c.jsx)(aO, {
                                      inputAndOutputAreBluetooth: i,
                                      canPromptSystemServiceInstallForVoice: e.canPrompt,
                                  }),
                          }
                        : null,
                [e.canPrompt, i],
            );
        },
        buildLayout: () => [ax, a_, av],
    }),
    aD = (0, a.t_)(o.X.VOICE_AND_VIDEO_PANEL, {
        useTitle: () => j.intl.string(j.t.B1fFpf),
        buildLayout: () => [aL, ry, sT, aE, aa, r5, sK],
    }),
    aR = (0, a.i4)(o.X.VOICE_AND_VIDEO_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.B1fFpf),
        usePredicate: () => iq.Ay.isSupported(),
        icon: l9.c,
        useMenu: se.A,
        buildLayout: () => [aD],
    }),
    aP = (0, a.WI)(o.X.APP_SECTION, {
        useTitle: () => j.intl.string(j.t.gcyH1J),
        buildLayout: () => [aR, nF, eJ, iG, l7, nY],
    });
var aG = n(360669),
    aM = n(974544),
    aU = n(423764),
    aV = n(289873),
    ak = n(132500),
    aw = n(465323),
    aF = n(37766),
    aB = n(194261),
    az = n(391048),
    aX = n(277984),
    aY = n(99696),
    aH = n(202613),
    aK = n(615405),
    aW = n(580630),
    aZ = n(83617),
    aq = n(935208),
    aQ = n(607399),
    aJ = n(993077),
    a$ = n(150934),
    a0 = n(256006),
    a1 = n(198970),
    a2 = n(71532);
let a3 = /[^0-9/]/g,
    a5 = /[^0-9]/g;
class a6 extends g.PureComponent {
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
                ((i = (n = e.replace(a3, "").split("/"))[0]),
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
            ? (u = u.replace(a5, ""))
            : u === r && e.includes("/") && !r.includes("/") && (u += "/"),
            u.length > e.length && (d += u.length - e.length),
            (this.selectionStart = d),
            null != a && a(u, t);
    };
    render() {
        return (0, c.jsx)(li.k, {
            ...this.props,
            inputMode: "numeric",
            onChange: this.handleChange,
            inputRef: this.setRef,
        });
    }
}
var a4 = n(832208),
    a8 = n(729919);
let a7 = [
        {
            fields: [
                {
                    expirationDate: {
                        name: "expirationDate",
                        id: (0, tU.Ld)(),
                        title: () => j.intl.string(j.t["CeBa/4"]),
                        autoComplete: "cc-exp",
                        placeholder: () => j.intl.string(j.t.xeEWQ6),
                        pattern: "\\d*",
                        getClassNameForLayout: () => a8.ep,
                        renderInput: (e) => (0, c.jsx)(a6, { ...e }),
                    },
                }.expirationDate,
            ],
        },
    ],
    a9 = function (e) {
        let { onCardInfoChange: t, className: n, expirationDate: i, error: l } = e,
            [s, r] = g.useState(!1),
            [a, o] = g.useState(null),
            [u, d] = g.useState(i);
        return (
            g.useEffect(() => {
                t({ expirationDate: u }, null === a);
            }, [u, t, a]),
            (0, c.jsx)(a4.A, {
                className: n,
                form: a7,
                values: { expirationDate: u },
                errors: null != a ? { expirationDate: a } : {},
                formError: l,
                onFieldChange: function (e) {
                    s || "" === e || r(!0),
                        (s && "" === e) || !(0, a2.So)(e) ? o(j.intl.string(j.t["9/zZdl"])) : o(null),
                        d(e);
                },
            })
        );
    };
var oe = n(219887),
    ot = n(520229);
let on = "isDefault";
class oi extends g.PureComponent {
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
            expiresMonth: t instanceof aH.YS ? t.expiresMonth : void 0,
            expiresYear: t instanceof aH.YS ? t.expiresYear : void 0,
            billingAddressValid: !1,
            isDefault: n,
            expirationValid: !0,
            dirtyFields: {},
        };
    }
    componentWillUnmount() {
        e2.h.wait(() => {
            (0, aX.ey)(), (0, aX.tc)();
        });
    }
    handleSubmit = (e) => {
        if ((e.preventDefault(), e.stopPropagation(), 0 === Object.values(this.state.dirtyFields).filter(n8.Vq).length))
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
                ? (0, c.jsx)("div", {
                      className: ot.zc,
                      children: (0, c.jsx)(iV.w, { type: "critical", children: t.message }),
                  })
                : null
            : (0, c.jsx)("div", {
                  className: ot.zc,
                  children: (0, c.jsx)(iV.w, { type: "critical", children: e.message }),
              });
    }
    renderBillingAddressSection() {
        let { billingAddress: e } = this.state,
            { updateError: t, paymentSource: n } = this.props,
            i = (0, a0.g)(n);
        return (0, c.jsxs)("div", {
            className: ot.yV,
            children: [
                (0, c.jsx)(z.E, {
                    className: ot.bV,
                    variant: "text-sm/normal",
                    children: j.intl.string(j.t["50Auo2"]),
                }),
                (0, c.jsx)(a1.Ay, {
                    ...e,
                    mode: a1.Ay.Modes.EDIT,
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
        return (0, c.jsxs)("div", {
            className: ot.yV,
            children: [
                (0, c.jsx)(z.E, { className: ot.bV, variant: "text-sm/normal", children: j.intl.string(j.t.Fo2YP7) }),
                (0, c.jsx)(a9, {
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
        return (0, c.jsx)("div", {
            className: ot.AU,
            children: (0, c.jsxs)(F.B, {
                direction: "horizontal",
                justify: "space-between",
                children: [
                    (0, c.jsx)(sC.e, {
                        children: (0, c.jsxs)("div", {
                            className: ot.lH,
                            children: [
                                n
                                    ? (0, c.jsx)(i4.m, {
                                          text: j.intl.string(j.t["v6/z28"]),
                                          children: (0, c.jsx)("div", { "aria-hidden": !0, className: ot.dm }),
                                      })
                                    : null,
                                (0, c.jsx)(p.$, {
                                    type: "button",
                                    disabled: n || e,
                                    loading: t,
                                    onClick: this.handleDelete,
                                    variant: "critical-secondary",
                                    size: aQ.Fr ? "sm" : "md",
                                    text: aQ.Fr ? j.intl.string(j.t.oyYWHE) : j.intl.string(j.t.yk5qfb),
                                }),
                            ],
                        }),
                    }),
                    (0, c.jsxs)(sC.e, {
                        children: [
                            (0, c.jsx)(p.$, {
                                type: "button",
                                disabled: e || t,
                                onClick: this.handleCancel,
                                variant: "secondary",
                                size: aQ.Fr ? "sm" : "md",
                                text: j.intl.string(j.t["ETE/oC"]),
                            }),
                            (0, c.jsx)(p.$, {
                                loading: e,
                                disabled: !i || t || !l,
                                type: "submit",
                                variant: "active",
                                size: aQ.Fr ? "sm" : "md",
                                text: j.intl.string(j.t["R3BPH+"]),
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
            r = e instanceof aH.SJ;
        return (0, c.jsx)(aJ.Z, {
            editable: !0,
            className: ie()(ot.Nr, i),
            children: (0, c.jsxs)("form", {
                onSubmit: this.handleSubmit,
                noValidate: !0,
                children: [
                    this.renderError(),
                    (0, c.jsxs)("div", {
                        className: ot.__invalid_paymentSection,
                        children: [
                            (0, c.jsx)(oe.A, {
                                paymentSource: e,
                                isDefault: t,
                                isForSubscription: l,
                                locale: n,
                                showLabels: !0,
                                showPaymentSourceIcon: !0,
                            }),
                            e.invalid
                                ? (0, c.jsx)("div", { className: ot.Um, children: j.intl.string(j.t["3R0U0b"]) })
                                : null,
                            (0, c.jsx)("div", {
                                className: ot.Sv,
                                children: r
                                    ? j.intl.format(j.t.w9WkBl, { paypalURL: "https://www.paypal.com" })
                                    : j.intl.string(j.t.VXndyr),
                            }),
                        ],
                    }),
                    this.renderCardExpirationSection(),
                    this.renderBillingAddressSection(),
                    (0, c.jsx)("div", {
                        className: ot.D5,
                        children: (0, c.jsx)(a$.S, {
                            value: on,
                            checked: s,
                            onChange: (e) => this.handleFieldChange(e, on),
                            label: j.intl.string(j.t.nag9Og),
                            labelType: "secondary",
                        }),
                    }),
                    (0, c.jsx)(i2.c, {}),
                    this.renderActions(),
                ],
            }),
        });
    }
}
let ol = m.Ay.connectStores([aK.A], () => ({ updateError: aK.A.editSourceError, removeError: aK.A.removeSourceError }))(
    oi,
);
var os = n(776409),
    or = n(743526),
    oa = n(455218);
function oo() {
    (0, aY.HF)({ withRedemptionSuccessModal: !0, source: "desktop_billing_page", loadId: (0, ak.A)() });
}
class ou extends g.PureComponent {
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
            ? (0, c.jsx)(ol, {
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
            : (0, c.jsxs)(c.Fragment, {
                  children: [
                      i ? null : (0, c.jsx)(i2.c, { className: oa.__invalid_sourceDivider }),
                      (0, c.jsxs)("div", {
                          className: oa.Yb,
                          children: [
                              (0, c.jsx)(oe.A, {
                                  paymentSource: e,
                                  isDefault: t,
                                  isForSubscription: l,
                                  locale: s,
                                  showSubtext: !0,
                                  showLabels: !0,
                                  showPaymentSourceIcon: !0,
                              }),
                              (0, c.jsx)(p.$, {
                                  variant: "secondary",
                                  onClick: this.handleEditClick,
                                  size: "sm",
                                  text: j.intl.string(j.t.bt75uw),
                              }),
                          ],
                      }),
                  ],
              });
    }
}
let od = g.memo(function (e) {
    let { paymentSource: t, hideDivider: n, isForSubscription: i, locale: l, onRedeemClick: s } = e,
        [r, a] = g.useState(null),
        o = (0, m.bG)([l0.default], () => l0.default.getCurrentUser()?.storeCountry?.country ?? null),
        u = (0, m.bG)([aK.A], () => aK.A.ipCountryCode),
        d = g.useMemo(() => (0, aw.TW)(`-${o ?? u ?? "US"}`), [o, u]);
    return (
        g.useEffect(() => {
            void 0 === t
                ? a({ amount: 0, currency: d })
                : aX.YP(t.id).then((e) => {
                      a(e);
                  });
        }, [t, d]),
        (0, c.jsxs)(c.Fragment, {
            children: [
                n ? null : (0, c.jsx)(i2.c, { className: oa.__invalid_sourceDivider }),
                (0, c.jsxs)("div", {
                    className: oa.Yb,
                    children: [
                        void 0 !== t
                            ? (0, c.jsx)(oe.A, {
                                  paymentSource: t,
                                  isDefault: !1,
                                  isForSubscription: i,
                                  locale: l,
                                  showSubtext: !1,
                                  showLabels: !1,
                                  showPaymentSourceIcon: !0,
                              })
                            : (0, c.jsxs)(la.A, {
                                  align: la.A.Align.CENTER,
                                  children: [
                                      (0, c.jsx)(aF._, { size: "lg" }),
                                      (0, c.jsx)(z.E, {
                                          variant: "text-sm/medium",
                                          className: or.Wi,
                                          children: j.intl.string(os.default["/FQWfA"]),
                                      }),
                                  ],
                              }),
                        (0, c.jsxs)("div", {
                            className: oa.zy,
                            children: [
                                (0, c.jsx)("div", {
                                    className: oa.Tq,
                                    children:
                                        null == r
                                            ? (0, c.jsx)(aV.y, { type: aV.y.Type.SPINNING_CIRCLE })
                                            : (0, c.jsx)(z.E, {
                                                  variant: "text-sm/medium",
                                                  children: (function () {
                                                      let { amount: e, currency: t } = r ?? {},
                                                          n = t ?? d,
                                                          i = String(n).toUpperCase(),
                                                          l = (0, aW.$g)(e ?? 0, n, {
                                                              currencyDisplay: "narrowSymbol",
                                                          });
                                                      return `${i} ${l}`;
                                                  })(),
                                              }),
                                }),
                                (0, c.jsx)(p.$, {
                                    variant: "secondary",
                                    onClick: s,
                                    size: "sm",
                                    text: j.intl.string(os.default.hnRau6),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
});
class oc extends g.PureComponent {
    state = { editingPayment: null };
    handleEditClick = async (e) => {
        try {
            await aX.Gr(e), this.setState({ editingPayment: e });
        } catch (e) {}
    };
    handleCancel = () => {
        this.setState({ editingPayment: null });
    };
    handleDelete = async (e) => {
        try {
            await aX.JQ(e), this.setState({ editingPayment: null });
        } catch (e) {}
    };
    handleSubmit = async (e, t) => {
        if (null != e)
            try {
                await aX.Ps(e, t), this.setState({ editingPayment: null });
            } catch (e) {}
    };
    handlePaymentSourceAdded = async (e) => {
        await (0, aZ.c_)(e.id);
    };
    handleAddPaymentMethod = () => {
        (0, ln.openModalLazy)(
            async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 362111));
                return (t) => (0, c.jsx)(e, { ...t, onAddPaymentSource: this.handlePaymentSourceAdded });
            },
            {
                onCloseCallback: () => {
                    (0, az.ET)();
                },
            },
        );
    };
    renderFooter() {
        let { paymentSources: e } = this.props;
        return (0, c.jsxs)("div", {
            className: oa.qr,
            children: [
                0 === Object.keys(e).length
                    ? (0, c.jsxs)("div", {
                          className: oa.z8,
                          children: [
                              (0, c.jsx)(z.E, { variant: "text-sm/normal", children: j.intl.string(j.t.aRHpAB) }),
                              (0, c.jsx)(z.E, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  className: oa.Sv,
                                  children: j.intl.string(j.t.o9bOIl),
                              }),
                          ],
                      })
                    : null,
                (0, c.jsx)(p.$, { onClick: this.handleAddPaymentMethod, text: j.intl.string(j.t.CpOiEO) }),
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
            u = k()
                .values(i)
                .sort((e, t) => (e.id === n ? -1 : t.id === n ? 1 : aq.default.compare(e.id, t.id))),
            d = u.filter((e) => !(e instanceof aH.LQ)),
            g = u.filter((e) => e instanceof aH.LQ),
            m = this.state.editingPayment,
            A = d.findIndex((e) => e.id === m),
            E = d.map((e, t) =>
                (0, c.jsx)(
                    ou,
                    {
                        locale: l,
                        paymentSource: e,
                        isDefault: n === e.id,
                        onCancel: this.handleCancel,
                        onDelete: this.handleDelete,
                        isForSubscription: e.id === a,
                        hideDivider: 0 === t || A === t - 1,
                        onSubmit: this.handleSubmit,
                        submitting: r,
                        removing: s,
                        isEditing: m === e.id,
                        onEditClick: this.handleEditClick,
                    },
                    e.id,
                ),
            );
        return (
            (e =
                g.length > 0
                    ? g.map((e, t) =>
                          (0, c.jsx)(
                              od,
                              {
                                  paymentSource: e,
                                  hideDivider: 0 === d.length || A === d.length - 1,
                                  isForSubscription: e.id === a,
                                  locale: l,
                                  onRedeemClick: oo,
                              },
                              e.id,
                          ),
                      )
                    : (0, c.jsx)(od, {
                          hideDivider: 0 === d.length || A === d.length - 1,
                          isForSubscription: !1,
                          locale: l,
                          onRedeemClick: oo,
                      })),
            (0, c.jsxs)(c.Fragment, {
                children: [
                    t
                        ? (0, c.jsxs)(c.Fragment, {
                              children: [
                                  (0, c.jsxs)(h.D, {
                                      variant: "heading-lg/semibold",
                                      children: [
                                          (0, c.jsx)(aB.X, { size: "sm", className: oa.hz }),
                                          " ",
                                          j.intl.string(j.t.W26xGQ),
                                      ],
                                  }),
                                  (0, c.jsx)(z.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      children: j.intl.string(j.t.h6V3uK),
                                  }),
                              ],
                          })
                        : null,
                    E,
                    o && e,
                    A !== d.length - 1 || (o && g.length > 0) ? (0, c.jsx)(i2.c, {}) : null,
                    this.renderFooter(),
                ],
            })
        );
    }
}
var og = n(459357),
    om = n(295405),
    oA = n(166403),
    oE = n(773669),
    oh = n(844828);
function oS() {
    let e = (0, m.bG)([l0.default], () => l0.default.getCurrentUser()?.storeCountry);
    return e?.country == null ? null : { country: e.country, countryName: (0, aU.Gw)(e.country) };
}
let oT = (0, a.E2)(o.X.BILLING_PAYMENT_METHODS, {
        Component: function (e) {
            let { showHeader: t = !1 } = e,
                n = (0, m.bG)([aK.A], () => aK.A.isSyncing),
                i = (0, m.bG)([om.A], () => om.A.paymentSources),
                l = (0, m.bG)([om.A], () => om.A.defaultPaymentSourceId),
                s = (0, m.bG)([oE.default], () => oE.default.locale),
                r = (0, m.bG)([oA.A], () => oA.A.getPremiumTypeSubscription()),
                a = (0, m.bG)([aK.A], () => aK.A.isRemovingPaymentSource),
                o = (0, m.bG)([aK.A], () => aK.A.isUpdatingPaymentSource),
                { enabled: u } = (0, og.c)({ location: "UserSettingsBilling" });
            return (g.useEffect(() => {
                aX.$o(), aX.hP();
            }, []),
            n && 0 === Object.keys(i).length)
                ? (0, c.jsx)("div", { className: oh.o, children: (0, c.jsx)(aV.y, {}) })
                : (0, c.jsx)(oc, {
                      showHeader: t,
                      paymentSources: i,
                      defaultPaymentSourceId: l,
                      premiumSubscriptionPaymentSourceId:
                          null != r && r.status !== A.Dmq.CANCELED ? r.paymentSourceId : null,
                      locale: s,
                      removing: a,
                      submitting: o,
                      showGiftCards: u,
                  });
        },
        useSearchTerms: () => [j.intl.string(j.t.W26xGQ), j.intl.string(j.t["3pIjBH"])],
    }),
    ox = (0, a.zZ)(o.X.BILLING_PAYMENT_METHODS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.W26xGQ),
        useSubtitle: () => {
            let e = oS();
            return null != e ? j.intl.format(j.t.e2t1G5, { country: e.countryName }) : j.intl.string(j.t.h6V3uK);
        },
        useSubtitleDecoration: function () {
            return null == oS()
                ? null
                : {
                      type: d.p3.INFO_POPOVER,
                      ariaLabel: j.intl.string(j.t.PuB1W7),
                      popoverProps: {
                          title: "",
                          body: j.intl.string(j.t["21skUa"]),
                          size: "sm",
                          position: "top",
                          getActions: (e) => [
                              {
                                  text: j.intl.string(j.t.PuB1W7),
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
        buildLayout: () => [oT],
    });
var op = n(549363),
    of = n(545075);
let o_ = (0, a.E2)(o.X.BILLING_TRANSACTION_HISTORY, {
        Component: function () {
            let e = (0, m.bG)([oE.default], () => oE.default.locale);
            return (0, c.jsxs)(c.Fragment, { children: [(0, c.jsx)(of.kb, {}), (0, c.jsx)(op.A, { locale: e })] });
        },
        useSearchTerms: () => [j.intl.string(j.t.obLrcK)],
    }),
    oN = (0, a.zZ)(o.X.BILLING_TRANSACTION_HISTORY_CATEGORY, {
        useTitle: () => j.intl.string(j.t.obLrcK),
        buildLayout: () => [o_],
    }),
    oI = (0, a.t_)(o.X.BILLING_PANEL, {
        useTitle: () => j.intl.string(j.t.oeUm2s),
        buildLayout: () => [ox, oN],
        useObscuredNotice: aM.L,
    }),
    oC = (0, a.i4)(o.X.BILLING_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.oeUm2s),
        icon: aG.B,
        buildLayout: () => [oI],
    });
var ob = n(70283),
    oy = n(597770),
    ov = n(682618),
    oj = n(611881),
    oO = n(962644),
    oL = n(35587),
    oD = n(86379);
let oR = (0, a.E2)(o.X.GIFT_BLOCKED_PAYMENTS_SETTING, {
        Component: of.uK,
        usePredicate: () => (0, oD.Hp)(),
        useSearchTerms: () => [j.intl.string(j.t.vwMEHS)],
    }),
    oP = (0, a.zZ)(o.X.GIFT_BLOCKED_PAYMENTS_CATEGORY, { buildLayout: () => [oR] });
var oG = n(982240),
    oM = n(788833),
    oU = n(914410),
    oV = n(360615),
    ok = n(215082);
function ow(e) {
    let { tier: t, active: n = !1 } = e;
    return (0, c.jsxs)("div", {
        className: ie()(ok.fO, { [ok.bF]: n }),
        children: [
            null != t.simple_icon_url && (0, c.jsx)("img", { src: t.simple_icon_url, alt: "", className: ok.si }),
            (0, c.jsxs)("div", {
                className: ok.tc,
                children: [
                    (0, c.jsx)(z.E, { variant: "text-sm/semibold", color: "text-subtle", children: t.name ?? "" }),
                    (0, c.jsx)(z.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: j.intl.format(oV.default.qvx9E4, { count: (0, oG.rL)(t) }),
                    }),
                ],
            }),
        ],
    });
}
function oF(e) {
    let { tiers: t, currentTier: n } = e;
    return (0, c.jsx)("div", {
        className: ok.dw,
        children: t.map((e) => (0, c.jsx)(ow, { tier: e, active: e.key === n?.key }, e.key)),
    });
}
function oB(e) {
    let { analyticsLocation: t, location: n } = e,
        { analyticsLocations: i } = (0, eL.Ay)(tv.A.USER_SETTINGS_GIFT_INVENTORY),
        { openGiftModal: l } = (0, oM.$)({
            giftRecipient: void 0,
            analyticsLocations: i,
            analyticsObject: { object: A.ZSU.BUTTON_CTA, objectType: A.AnalyticsObjectTypes.GIFT },
            analyticsLocation: t,
            location: n,
        });
    return (0, c.jsx)("div", {
        className: ok.NG,
        children: (0, c.jsx)(p.$, {
            variant: "primary",
            icon: oy.o,
            text: j.intl.string(oV.default.DZnomS),
            onClick: l,
        }),
    });
}
function oz(e) {
    let t,
        { badgeProgress: n, currentTier: i, nextTier: l, giftsRemaining: s } = e,
        r = (0, oG.rL)(i),
        a = (0, oG.rL)(l),
        o = (0, oj.GZ)(n, i, l);
    return (
        (t =
            null != l
                ? j.intl.formatToPlainString(oV.default.XTX3OO, { count: s, nextTier: l?.name ?? "" })
                : j.intl.formatToPlainString(oV.default.LnsdbK, { currentTier: i?.name ?? "" })),
        (0, c.jsxs)("div", {
            className: ok.mY,
            children: [
                i?.simple_icon_url != null &&
                    (0, c.jsx)("div", {
                        className: ok.fC,
                        children: (0, c.jsx)("img", { src: i.simple_icon_url, alt: "", className: ok.qS }),
                    }),
                (0, c.jsxs)("div", {
                    className: ok.Qs,
                    children: [
                        (0, c.jsx)(z.E, { variant: "text-md/medium", color: "text-strong", children: t }),
                        (0, c.jsx)(oU.Ay, { variant: oU.qP.BLUE, weight: oU.fh.MEDIUM, progress: o }),
                        (0, c.jsx)(z.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            className: ok.qg,
                            children: j.intl.format(oV.default.iIpfQe, {
                                threshold: null != l ? a : r,
                                count: null != l ? n : r,
                            }),
                        }),
                    ],
                }),
                l?.simple_icon_url != null &&
                    (0, c.jsx)("div", {
                        className: ok.fC,
                        children: (0, c.jsx)("img", { src: l.simple_icon_url, alt: "", className: ok.qS }),
                    }),
            ],
        })
    );
}
function oX(e) {
    let { analyticsLocation: t } = e,
        {
            badgeProgress: n,
            currentTier: i,
            nextTier: l,
            giftsRemaining: s,
            tiers: r,
        } = (0, m.cf)([oG.Ay], () => ({
            badgeProgress: oG.Ay.getSingleRequirementProgress(ob.$.GIFTING)?.current ?? 0,
            currentTier: oG.Ay.getCurrentTier(ob.$.GIFTING),
            nextTier: oG.Ay.getNextTier(ob.$.GIFTING),
            giftsRemaining: oG.Ay.getRemainingToNextTier(ob.$.GIFTING),
            tiers: oG.Ay.getBadgeById(ob.$.GIFTING)?.tiers ?? [],
        }));
    return 0 === r.length
        ? null
        : (0, c.jsxs)("div", {
              className: ok.kL,
              children: [
                  (0, c.jsxs)("div", {
                      className: ok.Jo,
                      children: [
                          n > 0 &&
                              (0, c.jsxs)(c.Fragment, {
                                  children: [
                                      (0, c.jsx)(oz, {
                                          badgeProgress: n,
                                          currentTier: i,
                                          nextTier: l,
                                          giftsRemaining: s,
                                      }),
                                      (0, c.jsx)("div", { className: ok.yF }),
                                  ],
                              }),
                          (0, c.jsx)(oF, { tiers: r, currentTier: i }),
                          (0, c.jsx)(z.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              className: ok.PJ,
                              children: j.intl.string(oV.default["4Yp0mI"]),
                          }),
                      ],
                  }),
                  (0, c.jsx)(oB, { analyticsLocation: t, location: "UserSettingsGiftingBadgeProgress" }),
              ],
          });
}
let oY = (0, a.zZ)(o.X.GIFTING_BADGE_CATEGORY, {
        useTitle: () => j.intl.string(oV.default.sFokBp),
        buildLayout: () => [oH],
        usePredicate: () => {
            let e = (0, oj.F5)("gift_inventory"),
                t = (0, m.bG)([oG.Ay], () => oG.Ay.getBadgeById(ob.$.GIFTING));
            return e && null != t;
        },
    }),
    oH = (0, a.E2)(o.X.GIFTING_BADGE_CONTENT, {
        useSearchTerms: () => [j.intl.string(oV.default.sFokBp)],
        Component: () => (0, c.jsx)(oX, {}),
    });
var oK = n(264779),
    oW = n(528464),
    oZ = n(555393),
    oq = n(725807),
    oQ = n(212168),
    oJ = n(469778),
    o$ = n(45938),
    o0 = n(109802),
    o1 = n(869038),
    o2 = n(221347);
function o3(e) {
    let { children: t, className: n, splashArtURL: i } = e;
    return (0, c.jsxs)(la.A, {
        className: ie()(o2.wx, n),
        align: la.A.Align.CENTER,
        children: [
            (0, c.jsx)("div", { className: o2.Bn, style: null != i ? { backgroundImage: `url(${i})` } : void 0 }),
            t,
        ],
    });
}
function o5(e) {
    let { children: t, className: n } = e;
    return (0, c.jsx)("div", { className: ie()(o2.rf, n), children: t });
}
class o6 extends g.PureComponent {
    static Header = o3;
    static Body = o5;
    render() {
        let { children: e, className: t, onMouseEnter: n, onMouseLeave: i } = this.props;
        return (0, c.jsx)("div", { className: ie()(o2.Nr, t), onMouseEnter: n, onMouseLeave: i, children: e });
    }
}
var o4 = n(165191),
    o8 = n(871123),
    o7 = n(366523),
    o9 = n(280450),
    ue = n(30793),
    ut = n(97352),
    un = n(67480),
    ui = n(147925),
    ul = n(957565),
    us = n(615396),
    ur = n(990125);
class ua extends g.PureComponent {
    _copyModeTimeout = new rn.Ep();
    state = { copyMode: o0.q.DEFAULT };
    componentWillUnmount() {
        this._copyModeTimeout.stop();
    }
    get copyButtonText() {
        switch (this.state.copyMode) {
            case o0.q.SUCCESS:
                return j.intl.string(j.t.XVvPjU);
            case o0.q.ERROR:
                return j.intl.string(j.t.i4GM3L);
            default:
                return j.intl.string(j.t.OpuAlK);
        }
    }
    handleRevoke(e) {
        o1.A.revokeGiftCode(e);
    }
    handleCopy = (e) => {
        let { giftCode: t, sku: n } = this.props;
        (0, o$.AK)(t, n),
            (0, ul.C)(
                e,
                () => this.setState({ copyMode: o0.q.SUCCESS }),
                () => this.setState({ copyMode: o0.q.ERROR }),
            ),
            this._copyModeTimeout.start(1e3, () => {
                this.setState({ copyMode: o0.q.DEFAULT });
            });
    };
    render() {
        let { hideCode: e, giftCode: t } = this.props,
            { copyMode: n } = this.state;
        return (0, c.jsxs)(la.A, {
            direction: la.A.Direction.VERTICAL,
            className: ur.Gj,
            children: [
                (0, c.jsx)(o0.e, {
                    className: ur.ph,
                    value: (0, o$.Zq)(t.code),
                    text: this.copyButtonText,
                    mode: n,
                    supportsCopy: ul.p5,
                    hideMessage: e ? j.intl.string(j.t["0RLn47"]) : null,
                    onCopy: this.handleCopy,
                    buttonColor: sN.XD.BRAND,
                    buttonLook: sN.pR.FILLED,
                }),
                (0, c.jsxs)("div", {
                    className: ur.KB,
                    children: [
                        null != t.expiresAt
                            ? (0, c.jsxs)(g.Fragment, {
                                  children: [
                                      j.intl.format(j.t.ltVZcJ, { hours: t.expiresAt.diff(ii()(), "h") }),
                                      " \u2014\xa0",
                                  ],
                              })
                            : null,
                        (0, c.jsx)(t8.D, {
                            tag: "a",
                            onClick: () => this.handleRevoke(t.code),
                            children: j.intl.string(j.t.v6Yazx),
                        }),
                    ],
                }),
            ],
        });
    }
}
class uo extends g.PureComponent {
    _loadedAt = null;
    state = { isOpen: !1, isCreating: !1, isHovered: !1 };
    componentDidMount() {
        this._loadedAt = Date.now();
    }
    handleGenerateGiftCode = async (e) => {
        e.stopPropagation();
        let { skuId: t, subscriptionPlanId: n, giftStyle: i } = this.props;
        this.setState({ isCreating: !0 }),
            await o1.A.createGiftCode(t, n, i),
            this.setState({ isCreating: !1, isOpen: !0 });
    };
    handleToggleOpen = () => {
        let { skuId: e, subscriptionPlanId: t, loadedAt: n } = this.props,
            i = !this.state.isOpen;
        (null == n || null == this._loadedAt || n < this._loadedAt) && i && o1.A.fetchUserGiftCodesForSKU(e, t),
            this.setState({ isOpen: !this.state.isOpen });
    };
    renderGiftIcon() {
        let { sku: e, giftStyle: t, application: n } = this.props;
        return (0, o8.bF)(e)
            ? (0, c.jsx)(o7.e, { shape: "square", sku: e, containerClassName: ur.ez })
            : null != t
              ? (0, c.jsx)(o4.A, { giftStyle: t, className: ur.ez, shouldAnimate: this.state.isHovered })
              : (0, c.jsx)(iZ.A, { game: n, size: iZ.M.MEDIUM, skuId: e.id });
    }
    renderSubtitle() {
        let { sku: e, entitlements: t, application: n } = this.props;
        return (0, o8.bF)(e)
            ? (0, c.jsxs)("div", {
                  className: ie()(ur.Oc, ur.ic),
                  children: [
                      (0, c.jsx)(iZ.A, { game: n, size: iZ.M.XSMALL, skuId: e.id, className: ur._u }),
                      j.intl.format(j.t["6plpZi"], { applicationName: n.name, copies: t.length }),
                  ],
              })
            : (0, c.jsx)("div", { className: ur.Oc, children: j.intl.format(j.t.zMcvcA, { copies: t.length }) });
    }
    renderTitle() {
        let e,
            { sku: t, subscriptionPlan: n, giftCodeBatchId: i } = this.props;
        return (
            (e =
                i === tk.FB
                    ? j.intl.string(j.t.odsU6W)
                    : i === tk.Bu && null != n
                      ? j.intl.formatToPlainString(n.interval === tk.WT.MONTH ? j.t.uZjpiJ : j.t.bJW1EA, {
                            skuName: t.name,
                            intervalCount: n.intervalCount,
                        })
                      : null == n
                        ? t.name
                        : j.intl.formatToPlainString(n.interval === tk.WT.MONTH ? j.t.rCJvqo : j.t.Vd3Iu8, {
                              skuName: t.name,
                              intervalCount: n.intervalCount,
                          })),
            (0, c.jsx)("div", { className: ur.mO, children: e })
        );
    }
    renderGenerateGiftCodeRow() {
        return (0, c.jsxs)(la.A, {
            justify: la.A.Justify.BETWEEN,
            align: la.A.Align.CENTER,
            className: ur.pe,
            children: [
                (0, c.jsx)(z.E, { variant: "text-md/normal", children: j.intl.string(j.t.lELyPj) }),
                (0, c.jsx)(p.$, {
                    variant: "primary",
                    size: "sm",
                    text: j.intl.string(j.t.Q3Qguo),
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
        return (0, c.jsxs)(o6, {
            className: i,
            children: [
                (0, c.jsx)(t8.D, {
                    onClick: this.handleToggleOpen,
                    className: ur.Nr,
                    onMouseEnter: () => this.setIsHovered(!0),
                    onMouseLeave: () => this.setIsHovered(!1),
                    children: (0, c.jsx)(o6.Header, {
                        splashArtURL: t.getSplashURL(512),
                        children: (0, c.jsxs)("div", {
                            className: ur.MY,
                            children: [
                                (0, c.jsxs)(la.A, {
                                    align: la.A.Align.CENTER,
                                    children: [
                                        this.renderGiftIcon(),
                                        (0, c.jsxs)("div", {
                                            className: ur.TK,
                                            children: [this.renderTitle(), this.renderSubtitle()],
                                        }),
                                    ],
                                }),
                                (0, c.jsx)(ui.A, {
                                    direction: a ? ui.A.Directions.UP : ui.A.Directions.DOWN,
                                    className: ur.eO,
                                }),
                            ],
                        }),
                    }),
                }),
                a
                    ? (0, c.jsx)(o6.Body, {
                          children: s
                              ? (0, c.jsx)(aV.y, { className: ur.u1 })
                              : (0, c.jsxs)(g.Fragment, {
                                    children: [
                                        n.length < e.length ? this.renderGenerateGiftCodeRow() : null,
                                        n.map((e) => (0, c.jsx)(ua, { giftCode: e, sku: l, hideCode: r }, e.code)),
                                    ],
                                }),
                      })
                    : null,
            ],
        });
    }
}
let uu = m.Ay.connectStores([un.A, e8.A, ue.A, iz.A, ut.A, o9.default], (e) => {
    let { skuId: t, subscriptionPlanId: n, giftStyle: i } = e,
        l = un.A.get(t);
    if (null == l) throw Error("SKU was unavailable while rendering gift.");
    let s = ue.A.getForGifterSKUAndPlan(o9.default.getId(), t, n)
        .filter((e) => !e.isClaimed)
        .filter((e) => e.giftStyle === i);
    return {
        sku: l,
        hideCodes: e8.A.enabled,
        isFetching: ue.A.getUserGiftCodesFetchingForSKUAndPlan(t, n),
        loadedAt: ue.A.getUserGiftCodesLoadedAtForSKUAndPlan(t, n),
        application: iz.A.getApplication(l.applicationId),
        subscriptionPlan: null != n ? (0, us.c9)(n) : null,
        giftCodes: s,
    };
})(uo);
var ud = n(725570),
    uc = n(736653),
    ug = n(46054);
let um = ii().duration(30, "days");
var uA = n(416052),
    uE = n(53070);
function uh(e) {
    let { onClose: t, transitionState: n } = e;
    return (0, c.jsx)(lt.Modal, {
        title: "",
        size: "md",
        input: (0, c.jsx)("div", { className: uE.aR }),
        onClose: async () => await t(),
        actions: [{ text: j.intl.string(j.t.cpT0Cq), variant: "primary", onClick: t }],
        transitionState: n,
        children: (0, c.jsxs)("div", {
            className: uE.t4,
            children: [
                (0, c.jsx)(h.D, { variant: "heading-xl/semibold", children: j.intl.string(j.t.iufib1) }),
                (0, c.jsx)(z.E, { variant: "text-md/normal", className: uE.G3, children: j.intl.string(j.t.eAn6z2) }),
            ],
        }),
    });
}
let uS = function (e) {
    let { onClose: t, onClaim: n, code: i, outboundPromotion: l, transitionState: s } = e,
        [r, a] = g.useState(null),
        o = (0, tU.GV)(),
        { analyticsLocations: u } = (0, eL.Ay)(tv.A.USER_SETTINGS_GIFT_INVENTORY);
    return (g.useEffect(() => {
        null == i &&
            (0, oK.kd)({
                promotionId: l.id,
                promotionTitle: l.outboundTitle,
                partnerId: l.partnerId,
                analyticsLocations: u,
            })
                .then((e) => n(e))
                .catch((e) => a(e?.body?.code));
    }, [i, l.id, l.outboundTitle, l.partnerId, n, u]),
    null != r)
        ? (0, c.jsx)(uh, { onClose: t, transitionState: s })
        : null == i
          ? (0, c.jsx)(aV.y, { className: uE.Lq })
          : (0, c.jsx)(lt.Modal, {
                title: "",
                size: "md",
                onClose: async () => await t(),
                input: (0, c.jsxs)("div", {
                    className: uE.N1,
                    children: [
                        (0, c.jsx)("div", { className: uE.Qw }),
                        (0, c.jsx)(h.D, { variant: "heading-xl/semibold", children: j.intl.string(j.t["23BfZh"]) }),
                        (0, c.jsx)(z.E, {
                            variant: "text-md/normal",
                            className: uE.G3,
                            children: l.outboundRedemptionModalBody,
                        }),
                    ],
                }),
                actions: [
                    { text: j.intl.string(j.t.TulDPl), variant: "secondary", onClick: async () => await t() },
                    {
                        text: j.intl.string(j.t["+zx47d"]),
                        variant: "primary",
                        onClick: () => {
                            let e = (0, oK.kc)(i, l);
                            window.open(e, "_blank");
                        },
                    },
                ],
                transitionState: s,
                "aria-label": o,
                children: (0, c.jsxs)("div", {
                    children: [
                        (0, c.jsx)(i2.c, { className: uE.M5 }),
                        (0, c.jsx)(tH.D, {
                            label: j.intl.string(j.t.s9LFQh),
                            helperText: j.intl.string(j.t["F+nFTZ"]),
                            children: (0, c.jsx)(uA.A, {
                                value: i,
                                buttonColor: sN.$n.Colors.BRAND,
                                buttonLook: sN.$n.Looks.FILLED,
                                delay: 1e3,
                            }),
                        }),
                    ],
                }),
            });
};
var uT = n(707554),
    ux = n(339048),
    up = n(104589);
function uf() {
    let e = (0, m.yK)([oJ.A], () => oJ.A.getGiftable()).filter((e) => {
            let { giftCodeBatchId: t } = e;
            return null == t;
        }),
        t = k().groupBy(e, (e) => (0, o$.Kx)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
        [n, i] = g.useState(!1);
    if (
        (g.useEffect(() => {
            e2.h.wait(() => {
                (0, ux.XJ)().then(() => i(!0));
            });
        }, []),
        !n)
    )
        return (0, c.jsx)(aV.y, { className: up.Lq });
    if (0 === Object.keys(t).length)
        return (0, c.jsxs)("div", {
            className: up.p$,
            children: [
                (0, c.jsx)("div", { className: up.QT }),
                (0, c.jsx)(uT.H, { className: up.ks, children: j.intl.string(j.t.B1qgZn) }),
                (0, c.jsx)("p", {
                    className: up.WO,
                    children: j.intl.format(j.t.HezvJ8, {
                        onClick: function () {
                            (0, t9.openUserSettings)(o.X.NITRO_PANEL);
                        },
                    }),
                }),
            ],
        });
    let l = k()
        .keys(t)
        .map((e) => {
            let { skuId: n, subscriptionPlanId: i, giftStyle: l } = (0, o$.X6)(e);
            return (0, c.jsx)(uu, { skuId: n, subscriptionPlanId: i, entitlements: t[e], giftStyle: l }, e);
        });
    return (0, c.jsx)(F.B, { gap: "lg", children: l });
}
function u_(e) {
    let t,
        { outboundPromotion: n, code: i } = e,
        [l, s] = g.useState(!1),
        [r, a] = g.useState(!1);
    function o() {
        return s((e) => !e);
    }
    let u = (0, uc.Ay)(),
        d = (0, oK.WD)(n.id, u),
        m = null != i,
        A = g.useMemo(
            () =>
                (0, il.i$)(
                    m
                        ? null != n.outboundRedemptionEndDate
                            ? ii()(n.outboundRedemptionEndDate)
                            : ii()(n.endDate).add(um)
                        : ii()(n.endDate),
                    "LL",
                ),
            [n, m],
        );
    m && l
        ? (t = j.intl.format(j.t.pkxVx6, { endDate: A, onClickDetails: o }))
        : m && !l
          ? (t = j.intl.format(j.t["4sFeob"], { endDate: A, onClickDetails: o }))
          : !m && l
            ? (t = j.intl.format(j.t["RBnE+l"], { endDate: A, onClickDetails: o }))
            : m || l || (t = j.intl.format(j.t["57+7Qn"], { endDate: A, onClickDetails: o }));
    let E = m ? j.intl.string(j.t["2cHUti"]) : j.intl.string(j.t.O13yhz),
        S = (0, oZ.N)()?.isEligible === !0,
        T = g.useCallback(() => a(!1), []),
        { outboundTitle: x, outboundTermsAndConditions: f } = n;
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsxs)("div", {
                className: up.AX,
                children: [
                    (0, c.jsxs)("div", {
                        className: up.Pg,
                        children: [
                            (0, c.jsxs)("div", {
                                className: up.At,
                                children: [
                                    (0, c.jsx)("div", {
                                        className: up.$G,
                                        children: (0, c.jsx)("img", { alt: "", src: d, className: up.IJ }),
                                    }),
                                    (0, c.jsxs)("div", {
                                        children: [
                                            (0, c.jsx)(h.D, { variant: "heading-md/semibold", children: x }),
                                            (0, c.jsx)(z.E, {
                                                variant: "text-sm/normal",
                                                color: "text-default",
                                                children: t,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (m || S) && (0, c.jsx)(p.$, { text: E, onClick: () => a(!0), size: "sm" }),
                        ],
                    }),
                    l &&
                        (0, c.jsx)(z.E, {
                            className: up.GL,
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: ug.A.parse(f, !1, { allowLinks: !0 }),
                        }),
                ],
            }),
            r &&
                (0, c.jsx)(ud.aF, {
                    renderModal: (e) =>
                        (0, c.jsx)(uS, {
                            ...e,
                            onClose: T,
                            onClaim: oO.Ay.addClaimedOutboundPromotionCode,
                            code: i,
                            outboundPromotion: n,
                        }),
                    onCloseRequest: T,
                }),
        ],
    });
}
function uN(e) {
    let { redesign: t = !1 } = e,
        n = (0, m.yK)([oJ.A], () => oJ.A.getGiftable()).filter((e) => {
            let { giftCodeBatchId: t } = e;
            return null != t;
        }),
        i = (0, oZ.N)()?.isEligible ?? null,
        {
            activeOutboundPromotions: l,
            claimedEndedOutboundPromotions: s,
            claimedOutboundPromotionCodeMap: r,
        } = (0, oL.y7)(),
        a = n.find((e) => e.giftCodeBatchId === tk.FB && !e.consumed),
        o = n.filter((e) => e.giftCodeBatchId === tk.Bu && !e.consumed) ?? [],
        [u, d] = k().partition(o, (e) => {
            let { subscriptionPlanId: t } = e;
            return t === tk.gD.PREMIUM_YEAR_TIER_2;
        }),
        g = l.length + s.length > 0,
        E =
            t || !g
                ? null
                : (0, c.jsxs)("div", {
                      className: up.N1,
                      children: [
                          (0, c.jsx)(h.D, { variant: "heading-md/semibold", children: j.intl.string(j.t.wFsj3B) }),
                          (0, c.jsx)(i2.c, { className: up.yF }),
                      ],
                  }),
        S =
            !1 === i && g
                ? (0, c.jsxs)("div", {
                      className: up.uo,
                      children: [
                          (0, c.jsx)(rv.t, {
                              size: "md",
                              color: nK.A.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2,
                              className: up.PC,
                          }),
                          (0, c.jsx)(z.E, {
                              variant: "text-md/normal",
                              className: up.Qw,
                              children: j.intl.format(j.t.G4fwxK, {
                                  onClick: () => {
                                      (0, tP.default)(), (0, tW.pX)(A.BVt.APPLICATION_STORE);
                                  },
                              }),
                          }),
                          (0, c.jsx)(oq.A, {
                              showGradient: !0,
                              className: up.aA,
                              subscriptionTier: tk.pe.TIER_2,
                              textOptions: { textOverride: j.intl.string(j.t.mr4K7D) },
                          }),
                      ],
                  })
                : null;
    return (0, c.jsxs)("div", {
        children: [
            E,
            (0, c.jsx)(oQ.A, {
                className: up.Yj,
                isShown: !1 === i && g,
                type: oQ.i.PREMIUM,
                hasBackground: !0,
                children: (0, c.jsxs)("div", {
                    className: up.DE,
                    children: [
                        S,
                        s.map((e) => {
                            let { code: t, promotion: n } = e;
                            return (0, c.jsx)(u_, { outboundPromotion: n, code: t }, n.id);
                        }),
                        l.map((e) => (0, c.jsx)(u_, { outboundPromotion: e, code: r[e.id] }, e.id)),
                        null != a
                            ? (0, c.jsx)(
                                  uu,
                                  {
                                      skuId: a.skuId,
                                      subscriptionPlanId: a.subscriptionPlanId,
                                      entitlements: [a],
                                      giftCodeBatchId: tk.FB,
                                  },
                                  (0, o$.Kx)(a.skuId, a.subscriptionPlanId),
                              )
                            : null,
                        u.length > 0
                            ? (0, c.jsx)(
                                  uu,
                                  {
                                      skuId: u[0].skuId,
                                      subscriptionPlanId: u[0].subscriptionPlanId,
                                      entitlements: u,
                                      giftCodeBatchId: tk.Bu,
                                  },
                                  (0, o$.Kx)(u[0].skuId, u[0].subscriptionPlanId),
                              )
                            : null,
                        d.length > 0
                            ? (0, c.jsx)(
                                  uu,
                                  {
                                      skuId: d[0].skuId,
                                      subscriptionPlanId: d[0].subscriptionPlanId,
                                      entitlements: d,
                                      giftCodeBatchId: tk.Bu,
                                  },
                                  (0, o$.Kx)(d[0].skuId, d[0].subscriptionPlanId),
                              )
                            : null,
                    ],
                }),
            }),
        ],
    });
}
let uI = (0, a.zZ)(o.X.MY_GIFTS_CATEGORY, {
        useTitle: ub,
        buildLayout: () => [uC],
        usePredicate: () => {
            let { claimedOutboundPromotionCodes: e, claimedOutboundPromotionCodesLoaded: t } = (0, m.cf)(
                    [oW.A],
                    () => ({
                        claimedOutboundPromotionCodes: oW.A.claimedOutboundPromotionCodes,
                        claimedOutboundPromotionCodesLoaded: oW.A.claimedOutboundPromotionCodesLoaded,
                    }),
                ),
                n = (0, oL.T1)({ includeClaimedPromotions: !0 }),
                i = (0, oK.Wl)(e, n).length;
            return t && n.length + i > 0;
        },
    }),
    uC = (0, a.E2)(o.X.MY_GIFTS_CONTENT, {
        useSearchTerms: () => [ub()],
        Component: () => (0, c.jsx)(uN, { redesign: !0 }),
    });
function ub() {
    return j.intl.string(j.t.YzjdWJ);
}
let uy = (0, a.zZ)(o.X.PURCHASED_GIFTS_CATEGORY, { useTitle: uj, buildLayout: () => [uv] }),
    uv = (0, a.E2)(o.X.PURCHASED_GIFTS_CONTENT, { useSearchTerms: () => [uj()], Component: () => (0, c.jsx)(uf, {}) });
function uj() {
    return j.intl.string(j.t.FWe6CP);
}
var uO = n(532446),
    uL = n(499454);
class uD extends g.Component {
    state = { codeInput: "", submitting: !1, hasError: !1, isPromoCode: !1 };
    get analyticsLocation() {
        let {
            analyticsContext: { location: e },
        } = this.props;
        return { ...e, object: A.ZSU.BUTTON_CTA };
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
                    await (0, aY.Qp)(n),
                        (0, aY.HF)({
                            initialCode: n,
                            withRedemptionSuccessModal: !0,
                            source: "user_settings_gift_code_redemption",
                            loadId: (0, ak.A)(),
                        }),
                        this.setState({ codeInput: "" });
                    return;
                } catch {}
            let e = (0, o$.Vd)(t);
            if (null == e) return void this.setState({ hasError: !0 });
            let i = await o1.A.resolveGiftCode(e);
            if (null != i && null != i.giftCode.promotion)
                throw (this.setState({ isPromoCode: !0 }), Error("Cannnot redeem promotion code as gift"));
            e7.default.track(A.HAw.OPEN_MODAL, {
                type: "gift_accept",
                location: {
                    ...this.analyticsLocation,
                    section: A.JJy.LIBRARY_INVENTORY_CODE_REDEMPTION,
                    object: A.ZSU.BUTTON_CTA,
                },
            }),
                (0, uL.h)({ processedCode: e }),
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
            r = e ? j.intl.string(j.t["hVEn/j"]) : j.intl.string(j.t.SeKIoS),
            a = e ? j.intl.string(j.t.epHMtp) : void 0;
        return (0, c.jsx)(nZ.n, {
            label: e ? void 0 : j.intl.string(j.t["il+VCo"]),
            children: (0, c.jsx)("form", {
                onSubmit: this.handleSubmit,
                children: (0, c.jsxs)(uO.M, {
                    children: [
                        (0, c.jsx)(li.k, {
                            label: r,
                            description: a,
                            type: t ? "password" : "text",
                            value: n,
                            onChange: this.handleChange,
                            placeholder: "WUMP-AAAAA-BBBBB-CCCCC",
                            error: !s && l ? j.intl.string(j.t.Y11a2u) : null,
                            helperText: s
                                ? j.intl.format(j.t.gPt3PE, {
                                      promoLink: () => {
                                          window.open(`https://discord.com/billing/promotions/${n}`);
                                      },
                                  })
                                : null,
                            fullWidth: !0,
                        }),
                        (0, c.jsx)(p.$, {
                            variant: "primary",
                            text: j.intl.string(j.t.KIpp7M),
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
function uR(e) {
    let { redesign: t = !1 } = e,
        { enabled: n } = (0, og.c)({ location: "UserSettingsBilling" }),
        i = g.useContext(e7.AnalyticsContext),
        l = (0, m.bG)([e8.A], () => e8.A.enabled);
    return (0, c.jsx)(uD, { analyticsContext: i, obscureInput: l, acceptGiftCardRedemption: n, redesign: t });
}
let uP = (0, a.zZ)(o.X.REDEEM_GIFT_CATEGORY, {
        useTitle: () => j.intl.string(j.t["il+VCo"]),
        buildLayout: () => [uG],
        usePredicate: () => !(0, oD.Hp)(),
    }),
    uG = (0, a.E2)(o.X.REDEEM_CODE_INPUT, {
        Component: () => (0, c.jsx)(uR, { redesign: !0 }),
        useSearchTerms: () => [j.intl.string(j.t["jcSP+g"]), j.intl.string(j.t["il+VCo"])],
    }),
    uM = (0, a.t_)(o.X.GIFT_PANEL, {
        useTitle: () => j.intl.string(j.t["jcSP+g"]),
        buildLayout: () => [uP, uI, oY, uy, oP],
        initialize: () => {
            oO.Ay.fetchClaimedOutboundPromotionCodes(), (0, oj.Ig)("gift_inventory") && (0, ov.o0)(ob.$.GIFTING);
        },
    }),
    uU = (0, a.i4)(o.X.GIFT_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["jcSP+g"]),
        icon: oy.o,
        usePersistentBadge: function () {
            let e = (0, oL.IO)().length;
            return g.useMemo(() => ({ badgeType: d.Xi.COUNT, count: e }), [e]);
        },
        buildLayout: () => [uM],
    });
var uV = n(659758),
    uk = n(103531),
    uw = n(815846);
let uF = (0, a.E2)(o.X.NITRO_SETTING, {
        Component: function () {
            let e = (0, m.bG)([l0.default], () => l0.default.getCurrentUser());
            return (0, rw.YE)(e, tk.PremiumTypes.TIER_2) ? (0, c.jsx)(uw.A, {}) : (0, c.jsx)(uk.A, {});
        },
        useSearchTerms: () => [j.intl.string(j.t.Ipxkog)],
    }),
    uB = (0, a.zZ)(o.X.NITRO_CATEGORY, { buildLayout: () => [uF] }),
    uz = (0, a.t_)(o.X.NITRO_PANEL, {
        useTitle: () => j.intl.string(j.t.Ipxkog),
        useObscuredNotice: aM.L,
        buildLayout: () => [uB],
    }),
    uX = (0, a.i4)(o.X.NITRO_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.Ipxkog),
        icon: rv.t,
        usePersistentBadge: function (e) {
            let t = (0, uV.e)(e);
            return g.useMemo(() => ({ badgeType: d.Xi.STRONGLY_DISCOURAGED_CUSTOM, customBadge: t }), [t]);
        },
        buildLayout: () => [uz],
    });
var uY = n(104510),
    uH = n(820739),
    uK = n(73825),
    uW = n(160946),
    uZ = n(859241),
    uq = n(531260),
    uQ = n(527113),
    uJ = n(338548),
    u$ = n(776096),
    u0 = n(711014),
    u1 = n(178368),
    u2 = n(725538),
    u3 = n(168482);
function u5() {
    return (0, c.jsxs)("div", {
        className: u2.iE,
        children: [
            (0, c.jsx)("img", { className: u2.Kk, alt: "", src: u3 }),
            (0, c.jsxs)("div", {
                className: u2.pq,
                children: [
                    (0, c.jsx)(z.E, { variant: "text-lg/bold", children: j.intl.string(j.t.ZHNSYf) }),
                    (0, c.jsx)(z.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: j.intl.string(j.t.kCj5ps),
                    }),
                ],
            }),
            (0, c.jsx)(p.$, {
                variant: "secondary",
                text: j.intl.string(j.t.JFlifp),
                onClick: function () {
                    (0, tW.pX)(A.BVt.GUILD_DISCOVERY), (0, tP.default)();
                },
            }),
        ],
    });
}
var u6 = n(365199),
    u4 = n(906199),
    u8 = n(443865),
    u7 = n(980707),
    u9 = n(473145);
function de(e) {
    let {
            guildBoostSlot: t,
            onClose: i,
            hasCancelableGuildBoostSlot: l,
            premiumSubscription: s,
            onSelect: r,
            fractionalState: a,
        } = e,
        u = {
            transfer: {
                label: null != t.premiumGuildSubscription ? j.intl.string(j.t["PR0n//"]) : j.intl.string(j.t["+fmEYG"]),
                subtext: t.isOnCooldown() ? j.intl.string(j.t.XnB8M0) : null,
                disabled: t.isOnCooldown(),
            },
            cancel: { label: j.intl.string(j.t.twFU3R), subtext: l ? null : j.intl.string(j.t.oQ9lOh), disabled: !l },
            uncancel: { label: j.intl.string(j.t["2glQNp"]), subtext: null, disabled: !1 },
        };
    switch (s.status) {
        case A.Dmq.PAST_DUE:
            (u.cancel.disabled = !0), (u.cancel.subtext = j.intl.string(j.t.WnL6DV)), (u.uncancel.disabled = !0);
            break;
        case A.Dmq.PAUSE_PENDING:
        case A.Dmq.PAUSED:
            a === tk.xc.NONE &&
                ((u.transfer.disabled = !0),
                (u.transfer.subtext = j.intl.string(j.t.LiLRRT)),
                (u.cancel.subtext = j.intl.string(j.t["1ywaWL"])),
                (u.cancel.disabled = !0),
                (u.uncancel.disabled = !0));
    }
    let d = g.useMemo(
        () =>
            s.isPausedOrPausePending && a === tk.xc.NONE
                ? (0, c.jsx)(e0.Dr, {
                      id: "manage-subscription",
                      label: j.intl.string(j.t.obRG6Y),
                      action: () => (0, t9.openUserSettings)(o.X.SUBSCRIPTIONS_PANEL),
                      iconLeft: u8.x,
                      leadingAccessory: { type: "icon", icon: u8.x },
                  })
                : null,
        [a, s],
    );
    return (0, c.jsxs)(u7.W, {
        "data-menu-migrated-auto": !0,
        onSelect: r,
        navId: "subscription-context",
        variant: "fixed",
        "aria-label": j.intl.string(j.t.ogxXGq),
        onClose: i,
        children: [
            (0, c.jsx)(e0.Dr, {
                id: "apply",
                label: u.transfer.label,
                subtext: u.transfer.subtext,
                action: function () {
                    (0, ln.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([
                            n.e("50614"),
                            n.e("56275"),
                            n.e("93781"),
                            n.e("87356"),
                            n.e("10943"),
                            n.e("34428"),
                            n.e("93173"),
                            n.e("96329"),
                            n.e("38249"),
                        ]).then(n.bind(n, 724624));
                        return (n) =>
                            (0, c.jsx)(e, { ...n, guildBoostSlots: [t], locationSection: A.JJy.SETTINGS_PREMIUM });
                    });
                },
                disabled: u.transfer.disabled,
            }),
            (0, u9.I5)(t)
                ? (0, c.jsx)(e0.Dr, {
                      id: "uncancel",
                      label: u.uncancel.label,
                      subtext: u.uncancel.subtext,
                      action: function () {
                          (0, ln.openModalLazy)(async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 342744));
                              return (n) => (0, c.jsx)(e, { ...n, guildBoostSlotId: t.id });
                          });
                      },
                      disabled: u.uncancel.disabled,
                  })
                : (0, c.jsx)(e0.Dr, {
                      id: "cancel",
                      label: u.cancel.label,
                      subtext: u.cancel.subtext,
                      action: function () {
                          (0, ln.openModalLazy)(async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 983511));
                              return (n) => (0, c.jsx)(e, { ...n, guildBoostSlot: t });
                          });
                      },
                      disabled: u.cancel.disabled,
                      color: "danger",
                  }),
            d,
        ],
    });
}
var dt = n(545934),
    dn = n(548118),
    di = n(987144),
    dl = n(864310),
    ds = n(378102);
function dr(e) {
    let { guild: t, className: n } = e,
        { total: i } = (0, dl.A)(t.id);
    return (0, c.jsxs)("div", {
        className: n ?? ds.OA,
        children: [
            (0, c.jsx)(dn.Ay, { className: ds.$f, guild: t, size: dn.Ay.Sizes.MEDIUM }),
            (0, c.jsxs)("div", {
                className: ds.gI,
                children: [
                    (0, c.jsx)(z.E, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        tag: "span",
                        children: t.name,
                    }),
                    (0, c.jsxs)("div", {
                        className: ds.ew,
                        children: [
                            (0, c.jsxs)("div", {
                                className: ds.QW,
                                children: [
                                    (0, c.jsx)(uY._, {
                                        className: ds.Wz,
                                        color: nK.A.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH,
                                    }),
                                    (0, c.jsx)(z.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: j.intl.format(j.t["pob/cL"], { subscriptions: i }),
                                    }),
                                ],
                            }),
                            t.premiumTier !== A.TVA.NONE &&
                                (0, c.jsxs)(c.Fragment, {
                                    children: [
                                        (0, c.jsx)("div", { className: ds.zk }),
                                        (0, c.jsx)(z.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-subtle",
                                            children: (0, u9.gb)(t.premiumTier, { useLevels: !1 }),
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
function da(e) {
    let { guildId: t } = e,
        n = (0, m.bG)([lc.A], () => lc.A.getGuild(t), [t]);
    return null == n
        ? null
        : (0, c.jsxs)("div", {
              className: ds.Nr,
              children: [
                  (0, c.jsx)(dr, { guild: n }),
                  (0, c.jsx)(p.$, {
                      variant: "secondary",
                      size: "sm",
                      icon: uY._,
                      text: j.intl.string(j.t.aBHecF),
                      onClick: () => {
                          (0, di.g)({
                              analyticsLocations: [],
                              analyticsLocation: {
                                  page: A.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                  section: A.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA,
                                  object: A.ZSU.BUTTON_CTA,
                                  objectType: A.AnalyticsObjectTypes.BUY,
                              },
                              guild: n,
                          });
                      },
                  }),
              ],
          });
}
var du = n(512062);
let dd =
    "https://cdn.discordapp.com/assets/content/272d3fa6496aedb9dee76f2d555913bfd56c9e9aacd6de3c18449644d9749657.png";
function dc(e) {
    let { slot: t, guildTier: n, premiumSubscription: i, hasCancelableSlots: l, isLast: s } = e,
        r = g.useRef(null),
        a = (0, u9.I5)(t),
        o = g.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t.cooldownEndsAt]),
        u = null != o && o > new Date(),
        d = (0, uq.A)(),
        m = g.useMemo(
            () =>
                (function (e, t) {
                    if (null == e || e === A.TVA.NONE) return "";
                    let n = [
                        j.intl.formatToPlainString(j.t["dLlKX/"], { numEmojiSlots: tk.TG[e].limits.emoji }),
                        j.intl.formatToPlainString(j.t["+ANIfv"], { numStickerSlots: tk.TG[e].limits.stickers }),
                        j.intl.formatToPlainString(j.t["4gt60b"], {
                            numSoundboardSlots: tk.TG[e].limits.soundboardSounds,
                        }),
                        j.intl.formatToPlainString(j.t.XahSjZ, {
                            resolution: tk.TG[e].limits.screenShareQualityResolution,
                            framerate: tk.TG[e].limits.screenShareQualityFramerate,
                        }),
                        j.intl.formatToPlainString(j.t.NbNs7S, { bitrate: tk.TG[e].limits.bitrate / 1e3 }),
                        j.intl.formatToPlainString(j.t.VVKcpn, { filesize: tk.TG[e].limits.fileSize / 1024 / 1024 }),
                        j.intl.formatToPlainString(j.t.TbpCvv, { numVideoStageSeats: tk.TG[e].limits.stageVideoUsers }),
                        j.intl.string(j.t.LDyX3i),
                        j.intl.string(j.t.YtGlPW),
                    ];
                    e >= A.TVA.TIER_2 && (n.push(j.intl.string(j.t.SztbtN)), n.push(j.intl.string(j.t["3GK91n"]))),
                        e >= A.TVA.TIER_3 && n.push(j.intl.string(j.t["XUUJd+"]));
                    let i = 0;
                    for (let e = 0; e < t.length; e++) i = (31 * i + t.charCodeAt(e)) | 0;
                    let l = n[Math.abs(i) % n.length];
                    return j.intl.formatToPlainString(j.t["/dOAmQ"], { perk: l });
                })(n, t.id),
            [n, t.id],
        ),
        E = g.useMemo(() => {
            if ("" !== m) return m;
            let e = null != t.premiumGuildSubscription ? aq.default.extractTimestamp(t.premiumGuildSubscription.id) : 0;
            return j.intl.formatToPlainString(j.t.lY2Bur, { date: new Date(e) });
        }, [m, t.premiumGuildSubscription]),
        h = g.useMemo(
            () => (a ? (i.isPausedForFractionalPremium ? d.endsAt.toDate() : i.currentPeriodEnd) : null),
            [a, i, d],
        );
    return (0, c.jsxs)("div", {
        className: ie()(du.iq, { [du.Mt]: s }),
        children: [
            (0, c.jsxs)("div", {
                className: du.kd,
                children: [
                    (0, c.jsx)("img", { alt: "", className: du.bB, src: dd }),
                    a && null != h
                        ? (0, c.jsx)(z.E, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              children: j.intl.format(j.t.Z4ULRD, { date: h }),
                          })
                        : (0, c.jsxs)(c.Fragment, {
                              children: [
                                  (0, c.jsx)(z.E, { variant: "text-sm/medium", color: "text-subtle", children: E }),
                                  u &&
                                      null != o &&
                                      (0, c.jsxs)(c.Fragment, {
                                          children: [
                                              (0, c.jsx)("div", { className: du.zk }),
                                              (0, c.jsx)(z.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-feedback-info",
                                                  children: j.intl.formatToPlainString(j.t.YJlswH, {
                                                      date: o.toLocaleDateString(),
                                                  }),
                                              }),
                                          ],
                                      }),
                                  !u &&
                                      null != i.trialEndsAt &&
                                      (0, c.jsxs)(c.Fragment, {
                                          children: [
                                              (0, c.jsx)("div", { className: du.zk }),
                                              (0, c.jsx)(z.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-feedback-warning",
                                                  children: j.intl.formatToPlainString(j.t.OdPSpk, {
                                                      date: new Date(i.trialEndsAt).toLocaleDateString(),
                                                  }),
                                              }),
                                          ],
                                      }),
                              ],
                          }),
                ],
            }),
            (0, c.jsx)(rU.Y, {
                targetElementRef: r,
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, c.jsx)(de, {
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
                    (0, c.jsx)(t8.D, {
                        innerRef: r,
                        "aria-label": j.intl.string(j.t.PdRCRg),
                        className: du.Mj,
                        ...e,
                        children: (0, c.jsx)(u6.j, { size: "xs", color: nK.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                    }),
            }),
        ],
    });
}
function dg(e) {
    let { guildId: t, slots: n, premiumSubscription: i, hasCancelableSlots: l } = e,
        s = (0, m.bG)([lc.A], () => lc.A.getGuild(t), [t]);
    return (0, c.jsxs)("div", {
        className: du.Nr,
        children: [
            (0, c.jsx)("div", {
                className: du.MY,
                children:
                    null != s
                        ? (0, c.jsxs)(c.Fragment, {
                              children: [
                                  (0, c.jsx)(dr, { guild: s, className: du.OA }),
                                  (0, c.jsx)(p.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: j.intl.string(j.t.KLOhbO),
                                      onClick: () => {
                                          (0, tP.default)(),
                                              (0, u4.K4)({
                                                  guildId: s.id,
                                                  location: {
                                                      section: A.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA,
                                                  },
                                              });
                                      },
                                  }),
                              ],
                          })
                        : (0, c.jsx)("div", {
                              className: du.OA,
                              children: (0, c.jsx)(h.D, {
                                  variant: "heading-md/semibold",
                                  color: "text-default",
                                  children: j.intl.string(j.t["6Kwwuo"]),
                              }),
                          }),
            }),
            n.map((e, t) =>
                (0, c.jsx)(
                    dc,
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
function dm(e) {
    let { guildBoostSlots: t, premiumSubscription: n, pausedAppliedGuildBoosts: i, isPaused: l } = e,
        { boostsByGuildId: s, numActiveSlots: r } = g.useMemo(() => {
            if (l && null != n)
                return {
                    boostsByGuildId: (function (e, t) {
                        let n = {};
                        for (let t of e) t.guildId in n || (n[t.guildId] = []), n[t.guildId].push(t);
                        let i = {};
                        for (let e of Object.keys(n)) {
                            let l = n[e];
                            i[e] = l.map((n) =>
                                dt.A.createFromServer(
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
                if ((!(0, u9.I5)(i) && e++, null != i.premiumGuildSubscription)) {
                    let e = i.premiumGuildSubscription.guildId;
                    e in s || (s[e] = []), s[e].push(i);
                }
            }
            return { boostsByGuildId: s, numActiveSlots: e };
        }, [t, l, i, n]);
    if (null == n || 0 === Object.keys(s).length) return null;
    let a = r > rw.Ay.getNumIncludedPremiumGuildSubscriptionSlots(n.planId);
    return (0, c.jsx)("div", {
        className: du.kR,
        children: aq.default
            .keys(s)
            .map((e) => (0, c.jsx)(dg, { guildId: e, slots: s[e], premiumSubscription: n, hasCancelableSlots: a }, e)),
    });
}
var dA = n(502572),
    dE = n(983511),
    dh = n(342744),
    dS = n(496431);
let dT = function (e) {
    let { className: t, cooldown: n } = e,
        i = (0, dS.A)(n);
    return (0, c.jsx)(z.E, {
        className: t,
        variant: "text-sm/medium",
        color: "text-muted",
        children: (0, il.uN)(i, { days: j.t.WUTPDc, hours: j.t.c1qodV, minutes: j.t["2+A3dv"] }),
    });
};
var dx = n(928171);
function dp(e) {
    let { guildBoostSlots: t, fractionalPremiumState: i } = e,
        l = (0, m.bG)([oA.A], () => oA.A.getPremiumTypeSubscription()),
        { unappliedSlots: s, numActiveSlots: r } = g.useMemo(() => {
            let e = [],
                n = 0;
            for (let i of t) !(0, u9.I5)(i) && n++, null == i.premiumGuildSubscription && e.push(i);
            return { unappliedSlots: e, numActiveSlots: n };
        }, [t]),
        a = r > (null != l ? rw.Ay.getNumIncludedPremiumGuildSubscriptionSlots(l.planId) : 0),
        o = l?.isPausedOrPausePending === !0 && i === tk.xc.NONE;
    return 0 === s.length
        ? null
        : (0, c.jsxs)("div", {
              className: dx.Nr,
              children: [
                  (0, c.jsxs)("div", {
                      className: dx.MY,
                      children: [
                          (0, c.jsxs)("div", {
                              className: dx._L,
                              children: [
                                  (0, c.jsxs)("div", {
                                      className: dx.MD,
                                      children: [
                                          (0, c.jsx)("img", { alt: "", className: dx.F8, src: dd }),
                                          (0, c.jsx)("div", {
                                              className: ie()(dx.qS, "theme-dark"),
                                              children: (0, c.jsx)("span", { className: dx.Vv, children: s.length }),
                                          }),
                                      ],
                                  }),
                                  (0, c.jsxs)("div", {
                                      className: dx.Qp,
                                      children: [
                                          (0, c.jsx)(z.E, {
                                              variant: "heading-md/semibold",
                                              color: "text-default",
                                              tag: "span",
                                              children: j.intl.format(j.t.BPadnO, {
                                                  numUnappliedGuildBoostSlots: s.length,
                                              }),
                                          }),
                                          (0, c.jsx)(z.E, {
                                              variant: "text-xs/semibold",
                                              color: "text-subtle",
                                              children: j.intl.format(j.t.Kaw82o, {
                                                  numUnappliedGuildBoostSlots: s.length,
                                              }),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, c.jsx)(dA.A, {
                              shouldShow: o,
                              text: j.intl.string(j.t.mOWsF1),
                              "aria-label": j.intl.string(j.t.mOWsF1),
                              children: (e) =>
                                  (0, c.jsx)(p.$, {
                                      ...e,
                                      variant: "primary",
                                      size: "sm",
                                      icon: uY._,
                                      text: j.intl.string(j.t.BMx1iy),
                                      disabled: o,
                                      onClick: () => {
                                          (0, ln.openModalLazy)(async () => {
                                              let { default: e } = await Promise.all([n.e("93781"), n.e("96329")]).then(
                                                  n.bind(n, 770101),
                                              );
                                              return (t) =>
                                                  (0, c.jsx)(e, {
                                                      ...t,
                                                      onSelectGuild: (e) => {
                                                          t.onClose(),
                                                              (0, di.g)({
                                                                  analyticsLocations: [],
                                                                  analyticsLocation: {
                                                                      page: A.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                                                      section: A.JJy.SETTINGS_PREMIUM,
                                                                      object: A.ZSU.BUTTON_CTA,
                                                                      objectType: A.AnalyticsObjectTypes.BUY,
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
                      (0, c.jsx)(
                          df,
                          {
                              slot: e,
                              isLast: t === s.length - 1,
                              isCancelable: a && !(0, u9.I5)(e),
                              isCanceled: (0, u9.I5)(e),
                              premiumSubscription: l,
                              modificationsDisabled: o,
                          },
                          e.id,
                      ),
                  ),
              ],
          });
}
function df(e) {
    let t,
        { slot: n, isLast: i, isCancelable: l, isCanceled: s, premiumSubscription: r, modificationsDisabled: a } = e,
        o = g.useRef(null),
        u = g.useMemo(() => (null != n.cooldownEndsAt ? new Date(n.cooldownEndsAt) : null), [n.cooldownEndsAt]);
    t =
        s && null != r
            ? (0, c.jsx)(z.E, {
                  variant: "text-sm/medium",
                  color: "text-subtle",
                  children: j.intl.format(j.t.Z4ULRD, { date: r.currentPeriodEnd }),
              })
            : n.isOnCooldown() && null != u
              ? (0, c.jsx)(dT, { cooldown: u.getTime() })
              : (0, c.jsx)(z.E, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: j.intl.string(j.t["2mcafz"]),
                });
    let d = l || s;
    return (0, c.jsxs)("div", {
        className: ie()(dx.iq, { [dx.Mt]: i }),
        children: [
            (0, c.jsxs)("div", {
                className: dx.kd,
                children: [(0, c.jsx)("img", { alt: "", className: dx.bB, src: dd }), t],
            }),
            d &&
                (0, c.jsx)(rU.Y, {
                    targetElementRef: o,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, c.jsxs)(u7.W, {
                            navId: "unapplied-boost-actions",
                            "aria-label": j.intl.string(j.t.ogxXGq),
                            onSelect: void 0,
                            onClose: t,
                            children: [
                                l &&
                                    (0, c.jsx)(e0.Dr, {
                                        id: "cancel-boost",
                                        label: j.intl.string(j.t.twFU3R),
                                        color: "danger",
                                        disabled: a,
                                        subtext: a ? j.intl.string(j.t.mOWsF1) : void 0,
                                        action: () => {
                                            t(),
                                                (0, ln.openModalLazy)(
                                                    async () => (e) =>
                                                        (0, c.jsx)(dE.default, { ...e, guildBoostSlot: n }),
                                                );
                                        },
                                    }),
                                s &&
                                    (0, c.jsx)(e0.Dr, {
                                        id: "uncancel-boost",
                                        label: j.intl.string(j.t["2glQNp"]),
                                        disabled: a,
                                        subtext: a ? j.intl.string(j.t.mOWsF1) : void 0,
                                        action: () => {
                                            t(),
                                                (0, ln.openModalLazy)(
                                                    async () => (e) =>
                                                        (0, c.jsx)(dh.default, { ...e, guildBoostSlotId: n.id }),
                                                );
                                        },
                                    }),
                            ],
                        });
                    },
                    align: "right",
                    position: "bottom",
                    children: (e) =>
                        (0, c.jsx)(t8.D, {
                            innerRef: o,
                            "aria-label": j.intl.string(j.t["UKOtz+"]),
                            className: dx.Mj,
                            ...e,
                            children: (0, c.jsx)(u6.j, { size: "xs", color: nK.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                        }),
                }),
        ],
    });
}
var d_ = n(942053);
function dN(e) {
    let {
            guildBoostSlots: t,
            guildBoostSlotsByGuildId: n,
            premiumSubscription: i,
            pausedAppliedGuildBoosts: l,
            fractionalPremiumState: s,
        } = e,
        r = eS.A.getArticleURL(A.MVz.GUILD_BOOSTING_FAQ),
        a = i?.isPaused === !0 && s !== tk.xc.FP_SUB_PAUSED,
        o = t.some((e) => null == e.premiumGuildSubscription),
        u = a && l.length > 0,
        d = a ? u : t.some((e) => null != e.premiumGuildSubscription);
    return o || d
        ? (0, c.jsxs)("div", {
              className: d_.i,
              children: [
                  (0, c.jsxs)("div", {
                      className: d_.b,
                      children: [
                          (0, c.jsx)(h.D, { variant: "heading-md/semibold", children: j.intl.string(j.t.W5rDjW) }),
                          (0, c.jsx)(z.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: j.intl.format(j.t.SpDz1x, { helpdeskArticle: r }),
                          }),
                      ],
                  }),
                  (0, c.jsx)(dm, {
                      guildBoostSlots: n,
                      premiumSubscription: i,
                      pausedAppliedGuildBoosts: l,
                      isPaused: a,
                  }),
                  (0, c.jsx)(dp, { guildBoostSlots: t, fractionalPremiumState: s }),
              ],
          })
        : null;
}
var dI = n(333722),
    dC = n(401721);
function db() {
    return (0, c.jsxs)("div", {
        className: dC.iE,
        children: [
            (0, c.jsx)(h.D, { variant: "heading-xl/normal", children: j.intl.string(j.t.IzKs3o) }),
            (0, c.jsx)("div", {
                className: dC.kR,
                children: dI.s.map((e, t) => {
                    let n = e.icon;
                    return (0, c.jsxs)(
                        "div",
                        {
                            className: dC.Nr,
                            children: [
                                (0, c.jsx)(n, { className: dC.Kk }),
                                (0, c.jsx)(z.E, {
                                    className: dC.h_,
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
var dy = n(847374),
    dv = n(232122),
    dj = n(630579);
function dO() {
    let [e, t] = g.useState(null),
        [n, i] = g.useState(null);
    return (0, c.jsxs)("div", {
        className: dj.iE,
        children: [
            (0, c.jsx)(h.D, { variant: "heading-xl/normal", children: j.intl.string(j.t.HPJ6Nj) }),
            (0, c.jsx)("ul", {
                className: dj.p_,
                children: dv.m.map((l, s) => {
                    let r = e === s,
                        a = n === s,
                        o = r || a ? "text-strong" : "text-muted";
                    return (0, c.jsxs)(
                        t8.D,
                        {
                            tag: "li",
                            className: ie()(dj.Aw, { [dj.$K]: r }),
                            onClick: () => t((e) => (e === s ? null : s)),
                            onMouseEnter: () => i(s),
                            onMouseLeave: () => i(null),
                            children: [
                                (0, c.jsxs)("div", {
                                    className: dj.k7,
                                    children: [
                                        (0, c.jsx)(z.E, {
                                            className: dj.b1,
                                            color: o,
                                            variant: "heading-md/semibold",
                                            tag: "span",
                                            children: l.getQuestion(),
                                        }),
                                        (0, c.jsx)(dy.a, {
                                            size: "sm",
                                            color: nK.A.colors.INTERACTIVE_ICON_DEFAULT,
                                            className: dj.q4,
                                            style: { transform: r ? "rotate(180deg)" : "rotate(0deg)" },
                                        }),
                                    ],
                                }),
                                r &&
                                    (0, c.jsx)(z.E, {
                                        className: dj.ZF,
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
var dL = n(182859),
    dD = n(853513),
    dR = n(880482);
function dP() {
    let e = eS.A.getArticleURL(A.MVz.GUILD_SUBSCRIPTIONS);
    return (0, c.jsxs)("div", {
        className: dR.wx,
        children: [
            (0, c.jsxs)("div", {
                className: dR.Qs,
                children: [
                    (0, c.jsxs)("div", {
                        className: dR.B5,
                        children: [
                            (0, c.jsx)("img", { alt: "", className: dR.F8, src: "/assets/263e4cc9043cab70.svg" }),
                            (0, c.jsx)(h.D, {
                                variant: "heading-xl/normal",
                                children: j.intl.string(dD.default.hjvcLO),
                            }),
                        ],
                    }),
                    (0, c.jsx)(z.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: j.intl.format(j.t.TUHyoA, { helpdeskArticle: e }),
                    }),
                ],
            }),
            (0, c.jsx)(dL.A, {
                variant: "member",
                className: dR.iO,
                analyticsLocation: {
                    page: A.liQ.GUILD_BOOSTING_USER_SETTINGS,
                    section: A.JJy.HERO,
                    object: A.ZSU.CARD,
                },
                videoPlacement: "settings_header",
            }),
        ],
    });
}
var dG = n(315629),
    dM = n(87719),
    dU = n(524170);
function dV() {
    let e = (0, m.bG)([l0.default], () => l0.default.getCurrentUser());
    if (null == e || rw.Ay.hasFreeBoosts(e)) return null;
    let t = eS.A.getArticleURL(A.MVz.GUILD_BOOSTING_FAQ);
    return (0, c.jsxs)(dG.h, {
        color: "nitro-pink",
        className: dU.vK,
        children: [
            (0, c.jsxs)("div", {
                className: dU.nw,
                children: [
                    (0, c.jsx)("img", { alt: "", className: dU.q3, src: dd }),
                    (0, c.jsxs)("div", {
                        className: dU.Tm,
                        children: [
                            (0, c.jsx)(z.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: j.intl.format(j.t.Idh1Vs, { count: tk.M4, boostCount: tk.M4 }),
                            }),
                            (0, c.jsxs)("div", {
                                className: dU.xv,
                                children: [
                                    (0, c.jsx)(rv.t, { className: dU.nE }),
                                    (0, c.jsx)(z.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: j.intl.format(j.t["6UAu+f"], {
                                            count: tk.M4,
                                            boostCount: tk.M4,
                                            helpdeskArticle: t,
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, c.jsx)(p.$, {
                variant: "expressive",
                size: "sm",
                icon: rv.t,
                text: j.intl.string(j.t["8x0jKT"]),
                onClick: dM.e,
            }),
        ],
    });
}
var dk = n(738262);
function dw() {
    let e = (0, m.bG)([u$.A], () => u$.A.affinities),
        t = (0, m.bG)([u0.Ay], () => u0.Ay.getFlattenedGuildIds()),
        n = g.useMemo(() => {
            let n = e.slice(0, 3).map((e) => e.guildId);
            for (let e = 0; e < t.length && n.length < 3; e++) {
                let i = t[e];
                n.includes(i) || n.push(i);
            }
            return n;
        }, [e, t]);
    return 0 === n.length
        ? null
        : (0, c.jsxs)("div", {
              className: dk.i,
              children: [
                  (0, c.jsx)(h.D, { variant: "heading-md/semibold", children: j.intl.string(j.t.r90Wgo) }),
                  (0, c.jsx)("div", { className: dk.k, children: n.map((e) => (0, c.jsx)(da, { guildId: e }, e)) }),
              ],
          });
}
var dF = n(553429);
function dB(e) {
    let { count: t, disabledReason: i } = e,
        l = eS.A.getArticleURL(A.MVz.GUILD_BOOSTING_FAQ);
    return (0, c.jsxs)(dG.h, {
        color: "nitro-pink",
        className: dF.vK,
        children: [
            (0, c.jsxs)("div", {
                className: dF.nw,
                children: [
                    (0, c.jsxs)("div", {
                        className: dF.MD,
                        children: [
                            (0, c.jsx)("img", { alt: "", className: dF.F8, src: dd }),
                            (0, c.jsx)("div", {
                                className: ie()(dF.qS, "theme-dark"),
                                children: (0, c.jsx)("span", { className: dF.Vv, children: t }),
                            }),
                        ],
                    }),
                    (0, c.jsxs)("div", {
                        className: dF.Tm,
                        children: [
                            (0, c.jsx)(z.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: j.intl.format(j.t.KewnLu, { count: t, boostCount: t }),
                            }),
                            (0, c.jsxs)("div", {
                                className: dF.xv,
                                children: [
                                    (0, c.jsx)(rv.t, { className: dF.nE }),
                                    (0, c.jsx)(z.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: j.intl.format(j.t["6UAu+f"], {
                                            count: tk.M4,
                                            boostCount: tk.M4,
                                            helpdeskArticle: l,
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, c.jsx)(dA.A, {
                shouldShow: null != i,
                text: i ?? "",
                "aria-label": i,
                children: (e) =>
                    (0, c.jsx)(p.$, {
                        ...e,
                        variant: "primary",
                        size: "sm",
                        icon: uY._,
                        text: j.intl.string(j.t.BMx1iy),
                        disabled: null != i,
                        onClick: () => {
                            (0, ln.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([n.e("93781"), n.e("96329")]).then(
                                    n.bind(n, 770101),
                                );
                                return (t) =>
                                    (0, c.jsx)(e, {
                                        ...t,
                                        onSelectGuild: (e) => {
                                            t.onClose(),
                                                (0, di.g)({
                                                    analyticsLocations: [],
                                                    analyticsLocation: {
                                                        page: A.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                                        section: A.JJy.SETTINGS_PREMIUM,
                                                        object: A.ZSU.BUTTON_CTA,
                                                        objectType: A.AnalyticsObjectTypes.BUY,
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
var dz = n(561835);
function dX(e) {
    let { premiumSubscription: t } = e,
        n = (0, m.bG)([u1.A], () => u1.A.boostSlots),
        i = g.useMemo(() => Object.values(n), [n]),
        l = (0, m.bG)([l0.default], () => l0.default.getCurrentUser()),
        s = (0, m.bG)([u$.A], () => u$.A.affinities),
        r = (0, m.bG)([u0.Ay], () => u0.Ay.getFlattenedGuildIds()),
        a = s.length > 0 || r.length > 0,
        o = g.useMemo(() => i.filter((e) => null != e.premiumGuildSubscription), [i]).length,
        u = (0, m.bG)([uZ.A], () => uZ.A.getCurrentUserAppliedBoosts()),
        { fractionalState: d } = (0, uq.A)({ forceFetch: !0 }),
        A = l?.isPremiumGroupMember(),
        E = t?.isPausedOrPausePending === !0 && d === tk.xc.NONE,
        h = g.useMemo(() => i.some((e) => null == e.premiumGuildSubscription && e.isAvailable()), [i]),
        S = E ? j.intl.string(j.t.mOWsF1) : h ? void 0 : j.intl.string(j.t.xr4m5B),
        T = g.useMemo(() => {
            if (null == t) return 0;
            let e = rw.Ay.getNumIncludedPremiumGuildSubscriptionSlots(t.planId);
            return 0 === e || e !== i.length ? 0 : Math.max(0, e - o);
        }, [t, i.length, o]);
    return (0, c.jsxs)("div", {
        className: dz.GO,
        children: [
            (0, c.jsx)(of.kb, { className: dz.ek }),
            (0, c.jsx)(dP, {}),
            (0, c.jsx)(dV, {}),
            T > 0 && (0, c.jsx)(dB, { count: T, disabledReason: S }),
            A && (0, c.jsx)(uJ.A, {}),
            !a && (0, c.jsx)(u5, {}),
            (0, c.jsxs)("div", {
                className: dz.C_,
                children: [
                    (0, c.jsx)(dN, {
                        guildBoostSlots: i,
                        guildBoostSlotsByGuildId: n,
                        premiumSubscription: t,
                        pausedAppliedGuildBoosts: u,
                        fractionalPremiumState: d,
                    }),
                    (0, c.jsx)(dw, {}),
                    (0, c.jsx)(uQ.A, { hideHeading: !0, hideTier0: !0 }),
                    (0, c.jsx)(db, {}),
                    (0, c.jsx)(dO, {}),
                ],
            }),
        ],
    });
}
var dY = n(672140);
let dH = (0, a.E2)(o.X.PREMIUM_GUILD_SUBSCRIPTIONS_SETTING, {
        Component: function () {
            g.useEffect(() => {
                e2.h.wait(() => {
                    aX.hP(), aX.$o(), (0, uH.CD)(), (0, uK.zS)(null, null, A.tF5.DISCOVERY), (0, uH.tO)(!0);
                });
            }, []);
            let { hasFetchedSubscriptions: e, premiumSubscription: t } = (0, m.cf)([oA.A], () => ({
                    hasFetchedSubscriptions: oA.A.hasFetchedSubscriptions(),
                    premiumSubscription: oA.A.getPremiumTypeSubscription(),
                })),
                n = (0, uW.Y)(),
                i = (0, m.bG)([om.A], () => om.A.hasFetchedPaymentSources),
                l = (0, m.bG)([uZ.A], () => uZ.A.isFetchingCurrentUserAppliedBoosts),
                s = !e || !n || !i || l,
                [r, a] = g.useState(!1);
            return (s || r || a(!0), s && !r)
                ? (0, c.jsx)("div", { className: ie()(dY.kL, dY.Lq), children: (0, c.jsx)(aV.y, {}) })
                : (0, c.jsxs)("div", {
                      className: dY.kL,
                      children: [
                          (0, c.jsx)("div", { className: dY.Tp }),
                          (0, c.jsx)("div", { className: dY.Qs, children: (0, c.jsx)(dX, { premiumSubscription: t }) }),
                      ],
                  });
        },
        useSearchTerms: () => [j.intl.string(j.t["+CbP2v"]), j.intl.string(j.t.Nn1lJy)],
    }),
    dK = (0, a.zZ)(o.X.PREMIUM_GUILD_SUBSCRIPTIONS_CATEGORY, { buildLayout: () => [dH] }),
    dW = (0, a.t_)(o.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
        useTitle: () => j.intl.string(j.t["+CbP2v"]),
        buildLayout: () => [dK],
    }),
    dZ = (0, a.i4)(o.X.PREMIUM_GUILD_SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["+CbP2v"]),
        icon: uY._,
        buildLayout: () => [dW],
    });
var dq = n(153659),
    dQ = n(155984),
    dJ = n(357758),
    d$ = n(262077),
    d0 = n(281445),
    d1 = n(933832),
    d2 = n(624479),
    d3 = n(626584),
    d5 = n(131607),
    d6 = n(95035),
    d4 = n(196736),
    d8 = n(685743),
    d7 = n(349085),
    d9 = n(342942),
    ce = n(252589),
    ct = n(758836),
    cn = n(49999),
    ci = n(275695),
    cl = n(356061);
let cs = new d3.A("GameServerSubscriptionsSection");
function cr(e) {
    return e.toLocaleDateString(void 0, { year: "numeric", month: "numeric", day: "numeric" });
}
function ca(e, t) {
    return (
        e.priceLabel === t.priceLabel &&
        e.dateLabel === t.dateLabel &&
        e.isCanceled === t.isCanceled &&
        e.isDanger === t.isDanger
    );
}
let co = g.memo(function (e) {
    let { server: t, planOptionBySkuId: n, canUseShopDiscount: i } = e,
        { analyticsLocations: l } = (0, eL.Ay)(),
        s = t.instance.subscriptionId,
        r = t.instance.planId,
        a = (0, d7.A)(t.gameId, "cover") ?? t.coverUrl;
    g.useEffect(() => {
        (0, uK.ur)(r).catch(() => {});
    }, [r]);
    let [o, u] = (0, d5.kn)([er.M.GAME_SERVER_HOSTING_PORTKEY_TOS]),
        d = o !== er.M.GAME_SERVER_HOSTING_PORTKEY_TOS,
        E = o9.default.getId() ?? "0",
        { handleCopyServerIp: h, animateCopyIcon: S } = (0, d8.A)(E, t.id, tv.A.GAME_SERVER_PAGE, t.serverIp),
        T = g.useCallback(() => {
            (0, d9.A)({
                provider: d0.X.SHOCKBYTE,
                onAccept: () => {
                    u(cn.i.TAKE_ACTION), h();
                },
            });
        }, [u, h]),
        {
            priceLabel: x,
            dateLabel: f,
            isCanceled: _,
            isDanger: N,
        } = (0, m.bG)(
            [oA.A, ut.A],
            () => {
                let e = null != s ? oA.A.getSubscriptionById(s) : null;
                if (null == e) return { priceLabel: null, dateLabel: null, isCanceled: !1, isDanger: !1 };
                let t = null != e.canceledAt,
                    l = !t && null != e.renewalMutations,
                    r = l ? e.renewalMutations?.items[0]?.planId : e.items[0]?.planId,
                    a = null != r ? ut.A.get(r) : null,
                    o = null != a ? n.get(a.skuId) : null,
                    u = i && o?.nitroPriceAmount != null ? o.nitroPriceAmount : o?.standardPriceAmount,
                    d =
                        null != u && o?.priceCurrency != null
                            ? j.intl.formatToPlainString(j.t.AbOLNu, { price: (0, aW.$g)(u, o.priceCurrency) })
                            : null,
                    c = cr(e.currentPeriodEnd);
                return {
                    priceLabel: d,
                    dateLabel: t
                        ? j.intl.formatToPlainString(ci.default["3aEgK6"], { date: c })
                        : l
                          ? j.intl.formatToPlainString(ci.default.KFSA3M, { date: c })
                          : j.intl.formatToPlainString(ci.default["9A6cRW"], { date: c }),
                    isCanceled: t,
                    isDanger: t || l,
                };
            },
            [s, n, i],
            ca,
        ),
        I = g.useCallback(() => {
            if (null == s) return;
            let e = oA.A.getSubscriptionById(s),
                t = null != e ? cr(e.currentPeriodEnd) : "";
            (0, nW.A)({
                title: j.intl.string(ci.default.TEYPNR),
                subtitle: j.intl.formatToPlainString(ci.default.XR1WrB, { date: t }),
                confirmText: j.intl.string(j.t["cY+Oob"]),
                cancelText: j.intl.string(ci.default.zjfaGH),
                variant: "critical",
                onConfirm: async () => {
                    try {
                        await aX.M2(s, l), await aX.hP();
                    } catch (e) {
                        cs.error("Failed to cancel game server subscription", e);
                    }
                },
            });
        }, [s, l]),
        C = g.useCallback(() => {
            if (null == s) return;
            let e = oA.A.getSubscriptionById(s);
            if (null == e) return;
            let t = e.items[0]?.planId,
                a = null != t ? ut.A.get(t) : null,
                o = null != a ? n.get(a.skuId) : null,
                u = i && o?.nitroPriceAmount != null ? o.nitroPriceAmount : o?.standardPriceAmount,
                d = null != u && o?.priceCurrency != null ? (0, aW.$g)(u, o.priceCurrency) : "",
                c = cr(e.currentPeriodEnd);
            (0, nW.A)({
                title: j.intl.string(ci.default.o96qbc),
                subtitle: j.intl.formatToPlainString(ci.default["7n6Qq+"], { price: d, date: c }),
                confirmText: j.intl.string(j.t.iIvF2z),
                cancelText: j.intl.string(j.t["ETE/oC"]),
                variant: "primary",
                onConfirm: async () => {
                    try {
                        await (0, uK.ur)(r);
                        let t = e.items;
                        await aX.nV(
                            e,
                            { status: A.Dmq.ACTIVE, items: t, currency: e.currency },
                            { amount: 0, currency: e.currency },
                            (0, rw.UC)(t, e.currency),
                            l,
                        ),
                            await aX.hP();
                    } catch (e) {
                        cs.error("Failed to re-subscribe to game server subscription", e);
                    }
                },
            });
        }, [s, r, l, n, i]),
        b = "" !== t.serverIp && ":" !== t.serverIp;
    return (0, c.jsxs)("div", {
        className: cl.nM,
        children: [
            (0, c.jsxs)("div", {
                className: cl.M4,
                children: [
                    (0, c.jsxs)("div", {
                        className: cl.Vs,
                        "aria-hidden": !0,
                        children: [
                            null != a && (0, c.jsx)("img", { className: cl.uP, src: a, alt: "" }),
                            (0, c.jsx)("div", { className: cl.tw }),
                        ],
                    }),
                    (0, c.jsxs)("div", {
                        className: cl.CR,
                        children: [
                            (0, c.jsx)(z.E, {
                                variant: "text-md/semibold",
                                color: "text-default",
                                tag: "span",
                                lineClamp: 1,
                                children: t.serverName,
                            }),
                            (0, c.jsx)(z.E, {
                                variant: "text-sm/medium",
                                color: "text-muted",
                                tag: "span",
                                lineClamp: 1,
                                children: `${t.gameName}  \u{2022}  ${t.planName}`,
                            }),
                            b &&
                                (d
                                    ? (0, c.jsxs)("div", {
                                          className: cl.CQ,
                                          children: [
                                              (0, c.jsx)(z.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-muted",
                                                  tag: "span",
                                                  lineClamp: 1,
                                                  children: t.serverIp,
                                              }),
                                              (0, c.jsx)(t8.D, {
                                                  className: cl.cL,
                                                  onClick: h,
                                                  "aria-label": j.intl.string(j.t.OpuAlK),
                                                  children: S
                                                      ? (0, c.jsx)(d1.A, {
                                                            size: "custom",
                                                            width: 16,
                                                            height: 16,
                                                            color: "currentColor",
                                                        })
                                                      : (0, c.jsx)(d2.T, {
                                                            size: "custom",
                                                            width: 16,
                                                            height: 16,
                                                            color: "currentColor",
                                                        }),
                                              }),
                                          ],
                                      })
                                    : (0, c.jsx)(d6.A, { onClick: T, children: j.intl.string(ci.default["f+F7H3"]) })),
                        ],
                    }),
                ],
            }),
            (0, c.jsxs)("div", {
                className: cl.Rd,
                children: [
                    (0, c.jsxs)("div", {
                        className: cl.Ff,
                        children: [
                            null != x &&
                                (0, c.jsx)(z.E, {
                                    variant: "text-md/semibold",
                                    color: "text-default",
                                    tag: "span",
                                    children: x,
                                }),
                            null != f &&
                                (N
                                    ? (0, c.jsxs)("div", {
                                          className: cl.ez,
                                          children: [
                                              (0, c.jsx)(iw.E, { size: "xs", color: "text-feedback-critical" }),
                                              (0, c.jsx)(z.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-feedback-critical",
                                                  tag: "span",
                                                  children: f,
                                              }),
                                          ],
                                      })
                                    : (0, c.jsx)(z.E, {
                                          variant: "text-sm/medium",
                                          color: "text-muted",
                                          tag: "span",
                                          children: f,
                                      })),
                        ],
                    }),
                    _
                        ? (0, c.jsx)(p.$, {
                              variant: "primary",
                              size: "sm",
                              text: j.intl.string(j.t.iIvF2z),
                              onClick: C,
                          })
                        : (0, c.jsx)(p.$, {
                              variant: "secondary",
                              size: "sm",
                              text: j.intl.string(j.t["ETE/oC"]),
                              onClick: I,
                          }),
                ],
            }),
        ],
    });
});
function cu(e) {
    let { servers: t } = e,
        n = (0, d4.H)({ location: "user_settings_subscriptions" }),
        { games: i } = (0, ce.Y)(),
        l = (0, m.bG)([l0.default], () => rw.Ay.canUseShopDiscounts(l0.default.getCurrentUser())),
        s = g.useMemo(() => {
            let e = new Map();
            for (let t of i) for (let n of t.plans ?? []) e.set(n.id, n);
            return e;
        }, [i]);
    g.useEffect(() => {
        let e = [...s.keys()];
        e.length > 0 && (0, uK.jv)(e).catch(() => {});
    }, [s]);
    let r = g.useCallback(() => {
        (0, tP.default)(), (0, tW.pX)(A.BVt.COLLECTIBLES_SHOP_WITH_TAB(ct.G2.GAME_SERVERS));
    }, []);
    return (0, c.jsxs)("div", {
        className: cl.uW,
        children: [
            (0, c.jsxs)("div", {
                className: cl.wx,
                children: [
                    (0, c.jsx)(z.E, {
                        variant: "text-lg/medium",
                        color: "text-strong",
                        children: j.intl.string(ci.default.vCzwM7),
                    }),
                    (0, c.jsxs)("div", {
                        className: cl.h_,
                        children: [
                            (0, c.jsx)(z.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                tag: "span",
                                children: j.intl.string(ci.default.y85Eg9),
                            }),
                            n &&
                                (0, c.jsx)(d6.A, {
                                    onClick: r,
                                    children: (0, c.jsx)(z.E, {
                                        variant: "text-sm/normal",
                                        color: "text-link",
                                        tag: "span",
                                        children: j.intl.string(ci.default["F/BDbC"]),
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            (0, c.jsx)("div", {
                className: cl.p_,
                children: t.map((e) =>
                    (0, c.jsx)(co, { server: e, planOptionBySkuId: s, canUseShopDiscount: l }, e.id),
                ),
            }),
        ],
    });
}
var cd = n(55766),
    cc = n(696986),
    cg = n(898555);
function cm(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, c.jsxs)("div", {
        children: [
            (0, c.jsx)(h.D, { variant: "heading-md/bold", children: j.intl.string(j.t["KzCF/6"]) }),
            (0, c.jsx)(cc.h, { size: 4 }),
            (0, c.jsx)(z.E, { variant: "text-md/normal", className: cg.yV, children: j.intl.string(j.t["3D7qCu"]) }),
            (0, c.jsx)(cc.h, { size: 24 }),
            (0, c.jsxs)("div", {
                className: cg.Nr,
                children: [
                    (0, c.jsx)("img", { src: "/assets/5a420feed295b595.svg", alt: "", className: cg.RI }),
                    (0, c.jsxs)("div", {
                        className: cg.FS,
                        children: [
                            (0, c.jsx)(h.D, {
                                variant: "heading-xl/semibold",
                                className: cg.wx,
                                children: j.intl.string(j.t["KzCF/6"]),
                            }),
                            (0, c.jsx)(z.E, {
                                variant: "text-md/normal",
                                className: cg.h_,
                                children: j.intl.format(j.t["m+pcOO"], { numSubscriptions: n }),
                            }),
                        ],
                    }),
                    (0, c.jsx)(p.$, {
                        size: "sm",
                        variant: "overlay-primary",
                        text: j.intl.string(j.t["3a8Xxj"]),
                        onClick: t,
                    }),
                ],
            }),
        ],
    });
}
var cA = n(872351),
    cE = n(9113),
    ch = n(599941),
    cS = n(384684),
    cT = n(2242);
let cx = [];
var cp = n(885574),
    cf = n(912851),
    c_ = n(497267);
let cN = function (e) {
    let { label: t, onClick: n, submitting: i } = e;
    return (0, c.jsx)(t8.D, {
        onClick: i ? void 0 : n,
        className: c_.x6,
        children: (0, c.jsxs)("div", {
            className: c_.hQ,
            children: [
                i
                    ? (0, c.jsx)(aV.y, { type: aV.y.Type.PULSING_ELLIPSIS, className: c_.__invalid_spinner })
                    : (0, c.jsx)(z.E, { variant: "text-md/medium", className: c_.Pf, children: t }),
                (0, c.jsx)(dy.a, { size: "md", color: "currentColor", className: c_.UE }),
            ],
        }),
    });
};
var cI = n(465932),
    cC = n(543767),
    cb = n(951555),
    cy = n(790284),
    cv = n(636194),
    cj = n(624456),
    cO = n(710144),
    cL = n(815332),
    cD = n(162093),
    cR = n(960309);
function cP(e) {
    let { transitionState: t, groupListing: n, listing: i, subscription: l, onClose: s } = e,
        r = (0, tU.GV)(),
        { analyticsLocations: a } = (0, eL.Ay)(tv.A.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL),
        {
            cancelSubscription: o,
            error: u,
            submitting: d,
        } = (function (e) {
            let [t, n] = g.useState(!1),
                [i, l] = g.useState(null);
            return {
                cancelSubscription: async function (t) {
                    try {
                        return n(!0), await aX.M2(t, e), !0;
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
    async function m() {
        (await o(l.id)) && s();
    }
    let A = i.role_benefits.benefits.filter((e) => e.ref_type === cT.bN.CHANNEL),
        E = i.role_benefits.benefits.filter((e) => e.ref_type === cT.bN.INTANGIBLE),
        h = ii()(l.currentPeriodEnd).format("MMMM Do, YYYY"),
        S = j.intl.formatToPlainString(j.t.KsMRP5, {
            numChannels: A.length,
            numAdditionalBenefits: E.length,
            subscriptionEndDate: h,
        });
    return (0, c.jsx)(lt.Modal, {
        transitionState: t,
        "aria-labelledby": r,
        actions: [
            { text: j.intl.string(j.t.EP6EPb), variant: "secondary", onClick: s },
            { variant: "critical-primary", text: j.intl.string(j.t.F6lUDF), onClick: m, loading: d },
        ],
        title: j.intl.string(j.t.O6l5tM),
        subtitle: S,
        onClose: s,
        children: (0, c.jsxs)(F.B, {
            gap: 8,
            children: [
                null != u ? (0, c.jsx)(iV.w, { type: "critical", children: u.message }) : null,
                (0, c.jsx)(cD.x, { listingId: i.id, guildId: n.guild_id, className: cR.P }),
            ],
        }),
    });
}
var cG = n(319225),
    cM = n(746080),
    cU = n(74669);
function cV(e) {
    let { label: t, value: n, showInfoIcon: i, infoIconTooltipText: l } = e;
    return (0, c.jsxs)("div", {
        className: cU.L0,
        children: [
            (0, c.jsxs)("div", {
                className: cU.a5,
                children: [
                    (0, c.jsx)(h.D, { variant: "heading-deprecated-12/semibold", className: cU.HU, children: t }),
                    i &&
                        (0, c.jsx)(i4.m, {
                            text: l,
                            children: (0, c.jsx)(cp.m, { size: "xs", color: "currentColor", className: cU.Mo }),
                        }),
                ],
            }),
            (0, c.jsx)(h.D, { variant: "heading-xl/semibold", className: cU.sx, children: n }),
        ],
    });
}
function ck(e) {
    let { subscription: t } = e,
        { analyticsLocations: n } = (0, eL.Ay)(),
        [i] = (0, cC.YV)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: n,
            analyticsLocation: tv.A.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        l = (0, m.bG)([om.A], () => om.A.hasFetchedPaymentSources);
    return null != i && l ? (0, c.jsx)(cb.A, { subscription: t, currentInvoicePreview: i }) : (0, c.jsx)(aV.y, {});
}
function cw(e) {
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
        : (0, c.jsx)(tH.D, {
              label: j.intl.string(j.t["4neDM+"]),
              children: (0, c.jsx)("div", {
                  className: cU.__invalid_rowButtons,
                  children: n
                      ? (0, c.jsx)(p.$, { variant: "primary", text: j.intl.string(j.t.y3mAE4), onClick: r, loading: i })
                      : (0, c.jsxs)(c.Fragment, {
                            children: [
                                !t && !l && (0, c.jsx)(cN, { label: j.intl.string(j.t.FRbWR8), onClick: a }),
                                (0, c.jsx)(cN, { label: j.intl.string(j.t.Dx0lF7), onClick: s }),
                            ],
                        }),
              }),
          });
}
let cF = function (e) {
    let { subscription: t } = e,
        {
            listing: n,
            groupListing: i,
            guild: l,
            expanded: s,
            handleToggleExpanded: r,
            subscriptionInfo: a,
        } = (function (e) {
            let t = (0, cj.M)(e),
                n = (0, m.bG)([cv.A], () => cv.A.getSubscriptionListingForPlan(t)),
                i = (0, m.bG)([cv.A], () =>
                    null != n ? cv.A.getSubscriptionGroupListingForSubscriptionListing(n.id) : null,
                ),
                l = (0, m.bG)([lc.A], () => lc.A.getGuild(i?.guild_id)),
                [s, r] = g.useState(!1),
                { fetchSubscriptionsSettings: a } = (0, ch.XE)();
            g.useEffect(() => {
                s && null != l && null == cv.A.getSubscriptionSettings(l.id) && a(l.id);
            }, [s, l, a]);
            let o =
                null == n
                    ? void 0
                    : (function (e) {
                          let { subscription: t } = e,
                              n = ii()(t.currentPeriodEnd).format("M/D/YY"),
                              i = null != t.price ? (0, aW.$g)(t.price, t.currency) : "",
                              l = ii()(t.createdAt).format("M/D/YY"),
                              s = t.status === A.Dmq.CANCELED,
                              r = t.status === A.Dmq.PAST_DUE,
                              a = t.hasActiveTrial;
                          return {
                              memberSince: l,
                              nextRenewalDate: n,
                              nextRenewalLabel: s ? j.intl.string(j.t.UAfot2) : j.intl.string(j.t.CVjLcM),
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
        [u, d] = g.useState(!1),
        E = (0, tU.GV)(),
        { analyticsLocations: h } = (0, eL.Ay)(),
        { shouldHideGuildPurchaseEntryPoints: S } = (0, cI.MH)(l?.id),
        T = t?.isPurchasedViaAppleGeneric;
    if (null == i || null == n || null == a) return null;
    async function x() {
        try {
            d(!0), await aX.QP(t, h), (0, cG.E)({ title: j.intl.string(j.t.oPV2cy), body: j.intl.string(j.t.DdRizV) });
        } finally {
            d(!1);
        }
    }
    let {
            isCancelled: p,
            isPastDue: f,
            subscriptionPrice: _,
            memberSince: N,
            nextRenewalDate: I,
            nextRenewalLabel: C,
            isTrial: b,
        } = a,
        y = n.soft_deleted || null == l || T;
    return (0, c.jsxs)("div", {
        className: cU.kL,
        children: [
            (0, c.jsx)(cO.A, {
                onClick: r,
                className: cU.N1,
                children: (e) => {
                    let { areaRef: t, handleStopPropagation: i } = e;
                    return (0, c.jsxs)(c.Fragment, {
                        children: [
                            null != l && (0, c.jsx)(dn.Ay, { guild: l, active: !0, size: dn.Ay.Sizes.MEDIUM }),
                            (0, c.jsxs)("div", {
                                className: cU.if,
                                children: [
                                    (0, c.jsx)(z.E, {
                                        variant: "text-md/medium",
                                        className: cU.J5,
                                        children: null != l ? l.name : j.intl.string(j.t["He+cmd"]),
                                    }),
                                    (0, c.jsxs)("div", {
                                        className: cU.xp,
                                        children: [
                                            (0, c.jsx)(z.E, {
                                                variant: "text-sm/normal",
                                                className: cU.KR,
                                                children: n.name,
                                            }),
                                            p
                                                ? (0, c.jsx)(e9.Lp, { text: j.intl.string(j.t["7uFZGt"]) })
                                                : b
                                                  ? (0, c.jsx)(e9.Lp, {
                                                        text: j.intl.string(j.t["6anton"]),
                                                        color: nK.A.unsafe_rawColors.BRAND_500.css,
                                                    })
                                                  : f
                                                    ? (0, c.jsx)(i4.m, {
                                                          text: j.intl.string(j.t.eSuJE2),
                                                          children: (0, c.jsx)("div", {
                                                              children: (0, c.jsx)(e9.Lp, {
                                                                  className: cU.qc,
                                                                  text: j.intl.string(j.t.NrRwIl),
                                                                  color: nK.A.unsafe_rawColors.YELLOW_300.css,
                                                              }),
                                                          }),
                                                      })
                                                    : null,
                                            T
                                                ? (0, c.jsx)(i4.m, {
                                                      text: j.intl.string(j.t.nv1IqK),
                                                      children: (0, c.jsx)("div", {
                                                          children: (0, c.jsx)(e9.Lp, {
                                                              text: j.intl.string(j.t["sBl3X/"]),
                                                              color: nK.A.colors.BACKGROUND_MOD_MUTED.css,
                                                          }),
                                                      }),
                                                  })
                                                : null,
                                        ],
                                    }),
                                ],
                            }),
                            (0, c.jsx)(t8.D, {
                                onClick: i(r),
                                "aria-label": j.intl.string(j.t.e5eQOy),
                                "aria-controls": E,
                                "aria-expanded": s,
                                focusProps: { ringTarget: t },
                                children: (0, c.jsx)(dy.a, {
                                    size: "md",
                                    color: "currentColor",
                                    className: ie()(cU.D6, { [cU.S7]: s }),
                                }),
                            }),
                        ],
                    });
                },
            }),
            null != i && s
                ? (0, c.jsxs)("div", {
                      id: E,
                      children: [
                          (0, c.jsx)("div", { className: cU.yF }),
                          (0, c.jsx)(cL.A, { groupListingId: i.id, subscription: t, className: cU.kE }),
                          (0, c.jsxs)("div", {
                              className: cU.Zx,
                              children: [
                                  (0, c.jsx)(cV, { label: C, value: I }),
                                  (0, c.jsx)(cV, {
                                      label: j.intl.string(j.t.dltUMH),
                                      value: _,
                                      showInfoIcon: b,
                                      infoIconTooltipText: b ? j.intl.string(j.t["/q6fpa"]) : void 0,
                                  }),
                                  (0, c.jsx)(cV, { label: j.intl.string(j.t.AOcwWB), value: N }),
                              ],
                          }),
                          (0, c.jsx)(cc.h, { size: 16 }),
                          !p &&
                              !T &&
                              (0, c.jsx)(tH.D, {
                                  label: j.intl.string(j.t.wmMFvA),
                                  children: (0, c.jsx)(ck, { subscription: t }),
                              }),
                          !y &&
                              (0, c.jsx)(cw, {
                                  isTrial: b,
                                  isCancelled: p,
                                  isResubscribing: u,
                                  shouldHideRoleSubscriptionEntryPoints: S,
                                  onCancelSubscriptionClick: function () {
                                      if (null != l && null != i && null != n) {
                                          var e;
                                          (e = { groupListing: i, listing: n, subscription: t }),
                                              (0, ln.openModal)((t) => (0, c.jsx)(cP, { ...t, ...e }));
                                      }
                                  },
                                  onChangePlanClick: function () {
                                      null != l &&
                                          ((0, tW.pX)(A.BVt.CHANNEL(l.id, cM.VV.ROLE_SUBSCRIPTIONS)),
                                          (0, tP.default)(),
                                          cf.A.show(
                                              A.kqX.BACK_TO_PREVIOUS_SCREEN,
                                              void 0,
                                              j.intl.string(j.t.DvbaM4),
                                              () => {
                                                  cy.A.setState({ subsection: e_.nR }),
                                                      (0, t9.openUserSettings)(o.X.SUBSCRIPTIONS_PANEL);
                                              },
                                          ));
                                  },
                                  onResubscribeClick: x,
                              }),
                      ],
                  })
                : null,
        ],
    });
};
var cB = n(175880);
let cz = function (e) {
    let { onGoBack: t } = e,
        n = (function () {
            let { ensureFresh: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t =
                    (0, m.bG)([cS.A], () =>
                        (function () {
                            let [e] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [cS.A],
                                t = e.getGuildIdsWithPurchasableRoles(),
                                n = !1;
                            return (t.forEach((t) => {
                                e.getUserSubscriptionRoles(t).size > 0 && (n = !0);
                            }),
                            n)
                                ? cT.M_.SUBSCRIBED
                                : 0 === t.size
                                  ? cT.M_.NONE
                                  : cT.M_.IN_SUBSCRIPTION_SERVER;
                        })([cS.A]),
                    ) === cT.M_.SUBSCRIBED,
                n = (0, m.bG)([oA.A], () => oA.A.getActiveGuildSubscriptions()),
                i = g.useRef(!1);
            return (
                g.useEffect(() => {
                    (function (e) {
                        let { ensureFresh: t, hasFetched: n, hasRoleSubscriptions: i } = e,
                            l = oA.A.getActiveGuildSubscriptions();
                        return (
                            ((l?.length ?? 0) === 0 && !!i) || (!!t && !n) || (!n && !oA.A.hasFetchedSubscriptions())
                        );
                    })({ ensureFresh: e, hasRoleSubscriptions: t, hasFetched: i.current }) &&
                        ((i.current = !0), aX.hP());
                }, [e, t]),
                n ?? cx
            );
        })(),
        { loading: i } = (0, ch.eb)(n);
    return ((0, cE.A)(aQ.Fr ? "role-subscriptions-user-setting" : void 0), i)
        ? (0, c.jsx)(aV.y, {})
        : 0 === n.length
          ? null
          : (0, c.jsxs)("div", {
                children: [
                    (0, c.jsx)(p.$, { text: j.intl.string(j.t.hqyhKQ), icon: cA.z, variant: "secondary", onClick: t }),
                    (0, c.jsx)(cc.h, { size: 10 }),
                    (0, c.jsx)(nZ.n, {
                        label: j.intl.string(j.t["KzCF/6"]),
                        description: j.intl.string(j.t["Y+ucR7"]),
                        children: (0, c.jsx)("div", {
                            className: cB.A,
                            children: n.map((e) => (0, c.jsx)(cF, { subscription: e }, e.id)),
                        }),
                    }),
                ],
            });
};
var cX = n(327479),
    cY = n(388567);
function cH(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, c.jsxs)("div", {
        children: [
            (0, c.jsx)(h.D, { variant: "heading-md/bold", children: j.intl.string(j.t["48ywCu"]) }),
            (0, c.jsx)(cc.h, { size: 4 }),
            (0, c.jsx)(z.E, { variant: "text-md/normal", className: cY.yV, children: j.intl.string(j.t.VWxmSo) }),
            (0, c.jsx)(cc.h, { size: 24 }),
            (0, c.jsxs)("div", {
                className: cY.Nr,
                children: [
                    (0, c.jsx)("img", { src: "/assets/d6bcd13fb6c85425.svg", alt: "", className: cY._e }),
                    (0, c.jsxs)("div", {
                        className: cY.FS,
                        children: [
                            (0, c.jsx)(h.D, {
                                variant: "heading-xl/semibold",
                                className: cY.wx,
                                children: j.intl.string(j.t["48ywCu"]),
                            }),
                            (0, c.jsx)(z.E, {
                                variant: "text-md/normal",
                                className: cY.h_,
                                children: j.intl.format(j.t["/esXLj"], { numSubscriptions: n }),
                            }),
                        ],
                    }),
                    (0, c.jsx)(cX.A, { onClick: t, text: j.intl.string(j.t["z5YcJ+"]) }),
                ],
            }),
        ],
    });
}
var cK = n(548411),
    cW = n(417098),
    cZ = n(143582),
    cq = n(915043),
    cQ = n(46367);
function cJ(e) {
    let { className: t, header: n, headerClassName: i, children: l } = e,
        s = g.useMemo(() => {
            let e = !1;
            return (
                g.Children.forEach(l, (t) => {
                    null != t && (e = !0);
                }),
                e
            );
        }, [l]);
    return (0, c.jsxs)("div", {
        className: ie()(cQ.iE, t),
        children: [
            (0, c.jsx)("div", { className: ie()(cQ.wx, i), children: n }),
            s && (0, c.jsx)("div", { className: cQ.Qs, children: l }),
        ],
    });
}
var c$ = n(885996),
    c0 = n(144165),
    c1 = n(664121),
    c2 = n(950305),
    c3 = n(943775),
    c5 = n(123791),
    c6 = n(900797),
    c4 = n(300118);
let c8 = g.createContext({ isOpen: !1, toggleOpen: () => {} });
function c7(e) {
    let { children: t } = e,
        [n, i] = g.useReducer((e) => !e, !1),
        l = g.useMemo(() => ({ isOpen: n, toggleOpen: i }), [n]);
    return (0, c.jsx)(c8.Provider, { value: l, children: t(n) });
}
c7.Toggle = function (e) {
    let { className: t, text: n } = e,
        { isOpen: i, toggleOpen: l } = g.useContext(c8),
        s = i ? c6.t : dy.a,
        r = null != n ? n : i ? j.intl.string(j.t.fgq1gs) : j.intl.string(j.t.XJuakA);
    return (0, c.jsxs)(t8.D, {
        className: ie()(c4.L, t),
        onClick: l,
        children: [
            (0, c.jsx)(z.E, { variant: "heading-sm/semibold", tag: "div", color: "currentColor", children: r }),
            (0, c.jsx)(s, { size: "sm", color: "currentColor" }),
        ],
    });
};
var c9 = n(627363),
    ge = n(243217),
    gt = n(328968),
    gn = n(163437),
    gi = n(3432);
function gl(e) {
    return e.toLocaleDateString(void 0, { dateStyle: "long" });
}
var gs = n(583995),
    gr = (((i = {})[(i.LOADING = 0)] = "LOADING"), (i[(i.DONE = 1)] = "DONE"), (i[(i.ERROR = 2)] = "ERROR"), i);
function ga(e) {
    let { subscription: t, navigateToSwitchPlan: n, loadingState: i } = e,
        l = t.metadata?.application_subscription_guild_id,
        { renewalMutations: s, planId: r } = t,
        {
            appId: a,
            plan: o,
            storeListing: u,
            isGuildSubscription: d,
            subscriptionForGuild: E,
            sku: S,
            isCancelled: T,
            isOrphanedGuildSubscription: x,
            renewalPlan: p,
        } = (0, m.cf)([ut.A, un.A, gt.A, lc.A], () => {
            let e,
                n = ut.A.get(r),
                i = null != n ? un.A.get(n.skuId) : void 0,
                a = i?.applicationId,
                o = null != n ? gt.A.getForSKU(n.skuId) : null,
                u = null != o && (0, gn.PJ)(o.skuFlags),
                d = u && null != l ? lc.A.getGuild(l) : void 0,
                c = (0, gn.Uo)(t, i),
                g = u && null != l && null == d;
            if (!1 === c && null != s && s.items.length > 0) {
                let t = s.items[0];
                e = ut.A.get(t.planId) ?? void 0;
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
        { data: f } = (0, c9.YY)(a),
        _ = g.useMemo(() => (null != f ? (0, c3.A)(f, 100) : null), [f]),
        N = S?.deleted ?? !1,
        I = null != S && (0, gn.Se)(S),
        C = t.status === A.Dmq.PAST_DUE,
        { analyticsLocations: b } = (0, eL.Ay)(),
        [y] = (0, cC.YV)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: b,
            analyticsLocation: tv.A.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        v = gl(t.currentPeriodEnd),
        O = 0 === i;
    return (0, c.jsxs)(cJ, {
        headerClassName: gs.dL,
        header:
            !1 === O
                ? (0, c.jsxs)(c.Fragment, {
                      children: [
                          (0, c.jsxs)("div", {
                              className: gs.VW,
                              children: [
                                  null != _ &&
                                      (0, c.jsx)(c0._, { src: _.href, imageClassName: gs.Z2, width: 40, height: 40 }),
                                  (0, c.jsxs)("div", {
                                      className: gs.aF,
                                      children: [
                                          (0, c.jsx)(h.D, {
                                              variant: "heading-md/semibold",
                                              lineClamp: 1,
                                              children: f?.name ?? j.intl.string(j.t["7kqy7W"]),
                                          }),
                                          (0, c.jsx)(z.E, {
                                              variant: "text-sm/medium",
                                              color: "text-default",
                                              lineClamp: 1,
                                              children: o?.name ?? j.intl.string(j.t.sqkbMK),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, c.jsx)("div", {
                              className: gs.Pz,
                              children:
                                  null != f &&
                                  null != u &&
                                  null != S &&
                                  (0, c.jsx)(gg, {
                                      subscription: t,
                                      app: f,
                                      guild: E,
                                      sku: S,
                                      storeListing: u,
                                      isCancelled: T,
                                      isOrphanedGuildSubscription: x,
                                      navigateToSwitchPlan: n,
                                      renewalSkuId: p?.skuId,
                                  }),
                          }),
                      ],
                  })
                : (0, c.jsx)(aV.y, { type: aV.t.PULSING_ELLIPSIS }),
        children: [
            T &&
                (0, c.jsx)(gc, {
                    type: "warning",
                    title: I
                        ? j.intl.formatToPlainString(j.t.QOnM1y, { subscriptionPeriodEnd: v })
                        : j.intl.formatToPlainString(j.t.HOaZu8, { subscriptionPeriodEnd: v }),
                }),
            !T && x && (0, c.jsx)(gc, { type: "warning", title: j.intl.string(j.t.SmSP8Q) }),
            C && (0, c.jsx)(gc, { type: "danger", title: j.intl.string(j.t.fvOqBo) }),
            (0, c.jsxs)("div", {
                className: gs.zH,
                children: [
                    (0, c.jsx)(gd, {
                        title: j.intl.string(j.t["5D/KEH"]),
                        content: d
                            ? (0, c.jsxs)(c.Fragment, {
                                  children: [
                                      (0, c.jsxs)("span", {
                                          className: gs.yW,
                                          children: [(0, c.jsx)(c1.R, { size: "xs" }), j.intl.string(j.t.QjL3vn)],
                                      }),
                                      null != E &&
                                          (0, c.jsxs)("span", {
                                              className: gs._t,
                                              children: [
                                                  (0, c.jsx)(z.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-muted",
                                                      children: j.intl.format(j.t["7ZD8p1"], { guildName: E.name }),
                                                  }),
                                                  (0, c.jsx)(dn.Ay, { guild: E, size: dn.Ay.Sizes.MINI }),
                                              ],
                                          }),
                                  ],
                              })
                            : (0, c.jsxs)("span", {
                                  className: gs.yW,
                                  children: [(0, c.jsx)(c2.n, { size: "xs" }), j.intl.string(j.t["6anEVv"])],
                              }),
                    }),
                    (0, c.jsx)(go, { invoicePreview: y, subscriptionPlan: o }),
                    (0, c.jsx)(gd, {
                        title: j.intl.string(j.t.dnUzb6),
                        content: gl(t.createdAt ?? t.currentPeriodStart),
                    }),
                    (0, c.jsx)(gu, { isCancelled: T, subscriptionPeriodEnd: v, renewalPlan: p }),
                ],
            }),
            (0, c.jsx)(gA, {
                subscription: t,
                currentInvoicePreview: y,
                loadingState: i,
                isDeleted: N,
                isCancelled: T,
            }),
            null != f &&
                u?.benefits != null &&
                u.benefits.length > 0 &&
                (0, c.jsx)(gm, { appId: f.id, listingBenefits: u.benefits }),
        ],
    });
}
function go(e) {
    let { subscriptionPlan: t, invoicePreview: n } = e;
    if (null == t) return (0, c.jsx)(gd, { title: j.intl.string(j.t.KI7ERx), content: "" });
    let i = (0, aW.CE)((0, aW.$g)(t.price, t.currency), t.interval, t.intervalCount),
        l = n?.findInvoiceItemByPlanId(t.id);
    if (null == l) return (0, c.jsx)(gd, { title: j.intl.string(j.t.KI7ERx), content: i });
    let s = (0, aW.CE)((0, aW.$g)(l.subscriptionPlanPrice, t.currency), t.interval, t.intervalCount);
    return (0, c.jsx)(gd, {
        title: j.intl.string(j.t.KI7ERx),
        content: (0, c.jsxs)(c.Fragment, {
            children: [
                (0, c.jsx)(z.E, { variant: "text-sm/semibold", children: s }),
                s !== i &&
                    (0, c.jsx)(i4.m, {
                        text: j.intl.format(j.t["6DoE57"], { listPrice: i }),
                        position: "bottom",
                        children: (0, c.jsx)(z.E, {
                            variant: "text-xs/medium",
                            color: "text-muted",
                            children: (0, c.jsx)("s", { children: i }),
                        }),
                    }),
            ],
        }),
    });
}
function gu(e) {
    let { isCancelled: t, subscriptionPeriodEnd: n, renewalPlan: i } = e;
    if (null != i) {
        let e = (0, aW.CE)((0, aW.$g)(i.price, i.currency), i.interval, i.intervalCount);
        return (0, c.jsx)(gd, {
            title: j.intl.string(j.t.hIhAM3),
            content: (0, c.jsxs)(c.Fragment, {
                children: [
                    (0, c.jsx)(z.E, { variant: "text-sm/medium", children: n }),
                    (0, c.jsx)(z.E, {
                        variant: "text-sm/normal",
                        children: j.intl.format(j.t.MCLbvj, { planName: i.name, price: e }),
                    }),
                ],
            }),
        });
    }
    return (0, c.jsx)(gd, { title: t ? j.intl.string(j.t.enxcAl) : j.intl.string(j.t["Ms+6Zq"]), content: n });
}
function gd(e) {
    let { title: t, content: n } = e;
    return (0, c.jsxs)("div", {
        className: gs.nM,
        children: [
            (0, c.jsx)(z.E, { variant: "text-sm/medium", children: t }),
            (0, c.jsx)(z.E, { variant: "text-sm/medium", className: gs.u4, children: n }),
        ],
    });
}
function gc(e) {
    let { type: t, title: n } = e;
    return (0, c.jsx)(rj.p, {
        messageType: "warning" === t ? rj.Y.WARNING : rj.Y.ERROR,
        className: gs.Xm,
        children: (0, c.jsx)(z.E, { variant: "text-sm/normal", children: n }),
    });
}
function gg(e) {
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
        A = (0, gn.Se)(l),
        { analyticsLocations: E } = (0, eL.Ay)(),
        [h, S] = g.useState(!1),
        T = (0, c5.C)(t.id),
        x = (0, m.bG)([un.A], () => un.A.getParentSKU(i.skuId), [i.skuId]),
        f = g.useMemo(() => {
            var e, t;
            let n;
            return null == x
                ? []
                : ((e = i.id),
                  (t = T.subscriptions),
                  (n = new Set(x.bundledSkuIds)),
                  t.filter((t) => t.id !== e && n.has(t.skuId)));
        }, [i.id, T, x]),
        _ = 0 !== f.length;
    async function N() {
        try {
            S(!0);
            let { subscription: e } = await (0, aX.QP)(s, E);
            if (null == e) return;
            (0, ln.openModalLazy)(async () => {
                let { default: t } = await Promise.all([n.e("76229"), n.e("52396")]).then(n.bind(n, 115623));
                return (n) => (0, c.jsx)(t, { ...n, storeListing: i, subscription: ge.A.createFromServer(e) });
            });
        } finally {
            S(!1);
        }
    }
    return (0, c.jsxs)("div", {
        className: gs.fw,
        children: [
            A || (r && a)
                ? null
                : r
                  ? (0, c.jsx)(p.$, {
                        variant: "secondary",
                        size: "sm",
                        text: j.intl.string(j.t.QtMnkW),
                        onClick: N,
                        loading: h,
                    })
                  : (0, c.jsx)(p.$, {
                        variant: "secondary",
                        size: "sm",
                        text: j.intl.string(j.t["E8G/tr"]),
                        onClick: function () {
                            (0, ln.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([n.e("52266"), n.e("22800")]).then(
                                    n.bind(n, 301139),
                                );
                                return (n) =>
                                    (0, c.jsx)(e, { ...n, application: t, storeListing: i, subscription: s, guild: o });
                            });
                        },
                    }),
            _ &&
                null != x &&
                !1 === r &&
                !1 === a &&
                (0, c.jsx)(p.$, {
                    variant: "primary",
                    size: "sm",
                    text: j.intl.string(j.t.R74ZBR),
                    onClick: () => {
                        d({
                            currentSubscription: s,
                            alternativeListings: f,
                            app: t,
                            subscriptionGroup: x,
                            currentListing: i,
                            renewalSkuId: u,
                        });
                    },
                }),
        ],
    });
}
function gm(e) {
    let { appId: t, listingBenefits: n } = e;
    return (0, c.jsx)(c7, {
        children: (e) =>
            (0, c.jsxs)("div", {
                className: gs.PX,
                children: [
                    (0, c.jsxs)("div", {
                        className: gs.wV,
                        children: [
                            e && (0, c.jsx)(z.E, { variant: "text-sm/semibold", children: j.intl.string(j.t.mORL67) }),
                            (0, c.jsx)(c7.Toggle, {
                                className: gs.Bh,
                                text: e ? j.intl.string(j.t.gsbFAw) : j.intl.string(j.t.IwjfxV),
                            }),
                        ],
                    }),
                    e
                        ? n.map((e) => {
                              let { id: n, name: i, description: l, icon: s } = e;
                              return (0, c.jsx)(c$.FY, { header: i, icon: (0, gi.N)(t, s), description: l }, n);
                          })
                        : null,
                ],
            }),
    });
}
function gA(e) {
    let { subscription: t, currentInvoicePreview: n, loadingState: i, isDeleted: l, isCancelled: s } = e;
    return null == n
        ? null
        : 0 === i
          ? (0, c.jsx)("div", {
                className: gs.Ji,
                children: (0, c.jsx)(tH.D, {
                    label: j.intl.string(j.t.azZaZa),
                    children: (0, c.jsx)(aV.y, { type: aV.t.PULSING_ELLIPSIS }),
                }),
            })
          : 2 === i
            ? (0, c.jsx)("div", {
                  className: gs.Ji,
                  children: (0, c.jsxs)(cW.$T, {
                      color: cW.Hv.DANGER,
                      style: { borderRadius: 0 },
                      children: [
                          j.intl.format(j.t.IIHUUF, { subscriptionId: t.id }),
                          (0, c.jsx)("br", {}),
                          j.intl.format(j.t.fh65ES, { helpLink: "https://support.discord.com/hc/en-us" }),
                      ],
                  }),
              })
            : (0, c.jsx)("div", {
                  className: gs.Ji,
                  children: (0, c.jsx)(tH.D, {
                      label: j.intl.string(j.t.azZaZa),
                      children: (0, c.jsx)(cb.A, { subscription: t, currentInvoicePreview: n, disabled: l || s }),
                  }),
              });
}
var gE = (((l = {}).HOME = "HOME"), (l.SWITCH_APP_PLANS = "SWITCH_APP_PLANS"), l);
n(938796);
var gh = n(38405);
let gS = (0, m.UT)(ut.A, {
    getQueryId: A.fic.SUBSCRIPTION_PLANS,
    get: (e) => {
        if (null == e) return null;
        let t = ut.A.getForSKU(e);
        return 0 === t.length ? null : t;
    },
    load: (e) => (
        null == e && gh.A.addBreadcrumb({ message: "Error loading subscription plans: skuId is null" }),
        null != e ? (0, uK.ur)(e).then(() => {}) : Promise.reject()
    ),
});
var gT = n(240248),
    gx = n(237218),
    gp = n(242653);
function gf(e) {
    let { children: t, lineClamp: n = 2, ...i } = e,
        [l, s] = g.useState(!1),
        [r, a] = g.useState(null),
        o =
            null != r &&
            (0, c.jsx)("button", {
                className: gp.x6,
                onClick: () => s((e) => !e),
                children: (0, c.jsxs)(z.E, {
                    className: gp.B0,
                    variant: "text-sm/medium",
                    color: "text-brand",
                    children: [
                        l ? j.intl.string(j.t["JQX/Pb"]) : j.intl.string(j.t.Fbrd8J),
                        l
                            ? (0, c.jsx)(c6.t, { color: nK.A.colors.TEXT_BRAND, size: "xs" })
                            : (0, c.jsx)(dy.a, { color: nK.A.colors.TEXT_BRAND, size: "xs" }),
                    ],
                }),
            }),
        [u, d] = g.useState(null),
        m = g.useCallback(() => {
            if (null == u) return;
            let { scrollHeight: e, clientHeight: t } = u;
            e > t && a({ truncatedHeight: t, expandedHeight: e });
        }, [u]);
    g.useEffect(() => {
        requestAnimationFrame(m);
    }, [m, t, n]);
    let A = "auto";
    return (
        null != r && (A = l ? `${r.expandedHeight}px` : `${r.truncatedHeight}px`),
        (0, c.jsxs)("div", {
            children: [
                (0, c.jsx)(z.E, {
                    ...i,
                    className: gp.Qs,
                    lineClamp: l ? void 0 : n,
                    ref: d,
                    style: { height: A },
                    children: t,
                }),
                o,
            ],
        })
    );
}
var g_ = n(386447);
function gN(e) {
    let { cta: t, storeListing: n, className: i } = e,
        { applicationId: l, benefits: s, description: r } = n,
        a = g.useMemo(() => (null == n.thumbnail ? null : (0, gx.t)(l, n.thumbnail, 256)), [l, n.thumbnail]),
        { data: o } = gS(n.skuId),
        u = g.useMemo(() => {
            if (null == o || 0 === o.length) return null;
            let e = o[0];
            return (0, aW._J)(e);
        }, [o]);
    return null == u
        ? null
        : (0, c.jsxs)(cJ, {
              className: ie()(g_.iE, i),
              header: (0, c.jsxs)(c.Fragment, {
                  children: [
                      (0, c.jsxs)("div", {
                          className: g_.qd,
                          children: [
                              null != a &&
                                  (0, c.jsx)(c0._, { src: a.href, imageClassName: g_.rW, width: 48, height: 48 }),
                              (0, c.jsxs)("div", {
                                  children: [
                                      (0, c.jsx)(h.D, { variant: "heading-md/bold", children: n.summary }),
                                      (0, c.jsx)(z.E, { variant: "text-md/medium", children: u }),
                                  ],
                              }),
                          ],
                      }),
                      t,
                  ],
              }),
              children: [
                  !(0, gT.uJ)(r) &&
                      (0, c.jsx)("div", {
                          className: g_.h_,
                          children: (0, c.jsx)(gf, { variant: "text-sm/medium", children: r }),
                      }),
                  null != s &&
                      s.length > 0 &&
                      (0, c.jsx)("div", {
                          className: g_.PX,
                          children: s.map((e) => {
                              let { id: t, name: n, description: i, icon: s } = e;
                              return (0, c.jsx)(c$.FY, { header: n, icon: (0, gi.N)(l, s), description: i }, t);
                          }),
                      }),
              ],
          });
}
var gI = n(185438),
    gC = n(711171);
function gb(e) {
    let {
            app: t,
            currentSubscription: n,
            currentListing: i,
            alternativeListings: l,
            navigateToHome: s,
            subscriptionGroup: r,
            renewalSkuId: a,
        } = e,
        o = (0, c3.A)(t, 100),
        u = (0, gn.PJ)(r.flags),
        d = u ? c1.R : c2.n,
        g = u ? j.intl.string(j.t["46YF2D"]) : j.intl.string(j.t.fFyGiA),
        A = n.metadata?.application_subscription_guild_id,
        E = (0, m.bG)([lc.A], () => (u && null != A ? lc.A.getGuild(A) : void 0), [A, u]),
        S = (0, m.bG)([un.A], () => {
            if (null != a) return un.A.get(a);
        }, [a]),
        T = gl(n.currentPeriodEnd);
    return (0, c.jsxs)("div", {
        children: [
            (0, c.jsxs)("div", {
                className: gC.wx,
                children: [
                    null != o && (0, c.jsx)(c0._, { src: o.href, imageClassName: gC.Z2, width: 48, height: 48 }),
                    (0, c.jsxs)("div", {
                        children: [
                            (0, c.jsx)(h.D, { variant: "heading-xl/semibold", children: t.name }),
                            (0, c.jsxs)("div", {
                                className: gC.p4,
                                children: [
                                    (0, c.jsxs)(h.D, {
                                        variant: "heading-md/normal",
                                        className: gC.N4,
                                        children: [(0, c.jsx)(d, { size: "xs", color: "currentColor" }), " ", g],
                                    }),
                                    null != E &&
                                        (0, c.jsxs)(c.Fragment, {
                                            children: [
                                                (0, c.jsx)(z.E, { variant: "text-md/normal", children: "\u2022" }),
                                                (0, c.jsxs)("span", {
                                                    className: gC.vP,
                                                    children: [
                                                        (0, c.jsx)(dn.Ay, { guild: E, size: dn.Ay.Sizes.SMOL }),
                                                        (0, c.jsx)(h.D, {
                                                            variant: "heading-md/semibold",
                                                            color: "text-muted",
                                                            children: j.intl.format(j.t["7ZD8p1"], {
                                                                guildName: E.name,
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
            (0, c.jsx)(c7, {
                children: (e) =>
                    (0, c.jsxs)("div", {
                        className: gC._B,
                        children: [
                            (0, c.jsx)(z.E, { variant: "text-md/normal", children: j.intl.string(j.t["goe+hk"]) }),
                            e &&
                                (0, c.jsxs)(c.Fragment, {
                                    children: [
                                        (0, c.jsx)(z.E, {
                                            variant: "text-md/normal",
                                            children: j.intl.format(j.t["Q8qJ+5"], {}),
                                        }),
                                        (0, c.jsx)(z.E, {
                                            variant: "text-md/normal",
                                            children: j.intl.format(j.t.sqowYz, {}),
                                        }),
                                    ],
                                }),
                            (0, c.jsx)(c7.Toggle, {
                                text: e ? j.intl.string(j.t["1Rkq/E"]) : j.intl.string(j.t.WsTHkY),
                            }),
                        ],
                    }),
            }),
            (0, c.jsxs)("div", {
                className: gC.x0,
                children: [
                    (0, c.jsx)(gN, {
                        storeListing: i,
                        className: gC.o3,
                        cta: (0, c.jsxs)("div", {
                            className: gC.cJ,
                            children: [
                                (0, c.jsx)(z.E, {
                                    variant: "eyebrow",
                                    color: "text-brand",
                                    children: j.intl.string(j.t.fHIpOY),
                                }),
                                null != S &&
                                    (0, c.jsx)(z.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-subtle",
                                        children: j.intl.format(j.t["OQk+jr"], { endDate: T }),
                                    }),
                            ],
                        }),
                    }),
                    l.map((e) =>
                        e.skuId === a
                            ? (0, c.jsx)(
                                  gN,
                                  {
                                      storeListing: e,
                                      cta: (0, c.jsx)(z.E, {
                                          variant: "text-sm/semibold",
                                          color: "text-subtle",
                                          children: j.intl.format(j.t.nn88hB, { startDate: T }),
                                      }),
                                  },
                                  e.id,
                              )
                            : (0, c.jsx)(gy, { storeListing: e, guildId: A, navigateToHome: s }, e.id),
                    ),
                ],
            }),
        ],
    });
}
function gy(e) {
    let { storeListing: t, guildId: n, navigateToHome: i } = e,
        { openModal: l } = (0, gI.A)({
            analyticsLocation: A.ThZ.APP_SUBSCRIPTIONS_MANAGEMENT,
            skuId: t.skuId,
            initialSubscribeForGuild: n,
            disableGuildSelector: !0,
            onComplete: i,
        });
    return (0, c.jsx)(gN, {
        storeListing: t,
        cta: (0, c.jsx)(p.$, { variant: "primary", size: "sm", text: j.intl.string(j.t["+KwmBt"]), onClick: l }),
    });
}
class gv extends g.PureComponent {
    state = { hasError: !1 };
    static getDerivedStateFromError(e) {
        return { hasError: !0 };
    }
    render() {
        return this.state.hasError
            ? (0, c.jsxs)(cW.$T, {
                  color: cW.Hv.DANGER,
                  style: { borderRadius: 0 },
                  children: [
                      j.intl.format(j.t.IIHUUF, { subscriptionId: this.props.subscription.id }),
                      " ",
                      j.intl.format(j.t.fh65ES, { helpLink: "https://support.discord.com/hc/en-us" }),
                  ],
              })
            : this.props.children;
    }
}
function gj(e) {
    let { subscriptions: t, updateHeader: n } = e,
        [i, l] = g.useState({ route: gE.HOME }),
        { route: s } = i;
    function r() {
        l({ route: gE.HOME });
    }
    let a = (e) => {
            l({ route: gE.SWITCH_APP_PLANS, ...e }), n(j.intl.string(j.t.VFqtkP), r);
        },
        [o, u] = g.useState({});
    g.useEffect(() => {
        for (let e of t) {
            let t = e.items[0]?.planId;
            null != t &&
                (u((t) => ({ ...t, [e.id]: gr.LOADING })),
                (0, cZ._R)(t)
                    .then(() => {
                        u((t) => ({ ...t, [e.id]: gr.DONE }));
                    })
                    .catch(() => {
                        u((t) => ({ ...t, [e.id]: gr.ERROR }));
                    }));
        }
    }, [t]);
    let { loadState: d } = (0, cq.E)(),
        m = d !== cq.mJ.LOADED;
    switch (s) {
        case gE.HOME:
            return (0, c.jsx)(c.Fragment, {
                children: t.map((e) =>
                    (0, c.jsx)(
                        gv,
                        {
                            subscription: e,
                            children: (0, c.jsx)(ga, {
                                subscription: e,
                                navigateToSwitchPlan: a,
                                loadingState: m ? gr.LOADING : (o[e.id] ?? gr.LOADING),
                            }),
                        },
                        e.id,
                    ),
                ),
            });
        case gE.SWITCH_APP_PLANS:
            let { route: A, ...E } = i;
            return (0, c.jsx)(gb, { ...E, navigateToHome: r });
        default:
            (0, n8.xb)(s);
    }
}
var gO = n(131352);
function gL(e) {
    let { onGoBack: t } = e,
        n = (0, m.yK)(
            [oA.A],
            () =>
                oA.A.getActiveApplicationSubscriptions()
                    ?.slice()
                    .sort(
                        (e, t) =>
                            (e.createdAt?.getTime() ?? e.currentPeriodStart.getTime()) -
                            (t.createdAt?.getTime() ?? t.currentPeriodStart.getTime()),
                    ) ?? [],
        ),
        [i, l] = g.useState();
    return (
        null == i && (i = (0, c.jsx)(gD, { onBack: t, title: j.intl.string(j.t["DB/m9a"]) })),
        (0, c.jsxs)("div", {
            children: [
                i,
                (0, c.jsx)("div", {
                    className: gO.A,
                    children: (0, c.jsx)(gj, {
                        subscriptions: n,
                        updateHeader: function (e, t) {
                            l(
                                (0, c.jsx)(gD, {
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
function gD(e) {
    let { onBack: t, title: n } = e;
    return (0, c.jsxs)("div", {
        className: gO.D,
        children: [
            (0, c.jsx)(i5.K, {
                "aria-label": j.intl.string(j.t["13/7kX"]),
                icon: () => (0, c.jsx)(cK.Z, { size: "sm" }),
                onClick: t,
                variant: "icon-only",
            }),
            (0, c.jsx)(h.D, { variant: "heading-lg/semibold", children: n }),
        ],
    });
}
var gR = n(881489),
    gP = n(366999),
    gG = n(466919),
    gM = n(406252);
function gU(e) {
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
        ? ((t = j.intl.string(gG.default["/S02sx"])), (n = j.intl.string(gG.default.OPJNST)))
        : i
          ? ((t = j.intl.string(j.t["hT6i/0"])),
            (n = null != a ? j.intl.format(j.t["0Vwb/l"], { activateDate: a }) : null))
          : ((t = j.intl.string(j.t["3G0CTC"])),
            (n = r === tk.xc.FP_SUB_PAUSED ? j.intl.format(j.t.MMvaIG, { resumeDate: s.toDate() }) : null));
    let u = ie()({ [gM.Hs]: i, [gM.mT]: !i }),
        d = ie()({ [gM.CQ]: i, [gM.ZM]: !i }),
        g = ie()({ [gM.EM]: !i });
    return (0, c.jsxs)("div", {
        className: gM.r6,
        children: [
            (0, c.jsxs)("div", {
                className: gM.Nv,
                children: [
                    (0, c.jsx)(h.D, { variant: "heading-md/semibold", className: g, children: t }),
                    null !== n && (0, c.jsx)(z.E, { variant: "text-sm/normal", children: n }),
                ],
            }),
            !o &&
                (0, c.jsx)("div", {
                    className: gM.ZS,
                    children: (0, c.jsx)("div", {
                        className: u,
                        children: (0, c.jsx)(z.E, { variant: "text-sm/semibold", className: d, children: l }),
                    }),
                }),
        ],
    });
}
let gV = function (e) {
    let { fractionalPremiumInfo: t, className: n, activationDate: i, hasPremiumGroup: l } = e,
        s = (0, rw.kX)(t),
        r = s.length > 0,
        a = (0, gP.Ay)(t.endsAt, gP.yE.SHORT_TIME),
        o = r ? s : a;
    return (0, c.jsx)("div", {
        children: (0, c.jsxs)("div", {
            className: ie()(n, gM.f8),
            children: [
                (0, c.jsx)("div", {
                    className: gM.J_,
                    children: (0, c.jsxs)("div", {
                        className: gM.Bh,
                        children: [
                            (0, c.jsx)("div", {
                                className: gM.xt,
                                children: (0, c.jsx)(rv.t, { size: "md", color: "white", className: gM.T8 }),
                            }),
                            (0, c.jsx)("div", {
                                className: gM.pt,
                                children: (0, c.jsx)(h.D, {
                                    variant: "heading-md/semibold",
                                    children: j.intl.string(j.t.DFMPWS),
                                }),
                            }),
                            (0, c.jsx)(z.E, {
                                className: gM.PJ,
                                variant: "text-md/semibold",
                                children: s.length > 0 ? s : j.intl.string(j.t["B66Z+f"]),
                            }),
                        ],
                    }),
                }),
                (0, c.jsx)(gU, {
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
var gk = n(983048);
function gw(e) {
    let t,
        {
            user: n,
            planId: i,
            count: l,
            userPremiumSubscription: s,
            unconsumedFractionalPremiumUnits: r = [],
            hasPremiumGroup: a,
        } = e,
        [o, u] = (0, m.yK)([ut.A], () => [ut.A.get(i), null != s ? ut.A.get(s.planId) : null]);
    if (null == o || rw.Ay.getInterval(i).intervalType !== tk.WT.MONTH) return null;
    let d = null != u ? u.skuId : null,
        g = o.skuId === d,
        E = rw.Ay.getDisplayName(i);
    if (a) t = j.intl.string(gG.default["5asczk"]);
    else if (g && null != s) {
        let e;
        e = new Date(s.status === A.Dmq.PAUSED && null != s.pauseEndsAt ? s.pauseEndsAt : s.currentPeriodEnd);
        let n = (0, rw._e)(e, r);
        t = j.intl.formatToPlainString(j.t["5CNRRA"], { date: n ?? 0 });
    } else t = j.intl.formatToPlainString(j.t.eNXZ5O, { planName: E });
    let S = n.hasFreePremium() || (null != s && s.isPurchasedExternally);
    return (0, c.jsxs)("div", {
        className: gM.Bh,
        children: [
            (0, c.jsx)("div", {
                className: ie()({
                    [gM.sr]: o.skuId === tk.pe.TIER_0,
                    [gM.lP]: o.skuId === tk.pe.TIER_1,
                    [gM.eb]: o.skuId === tk.pe.TIER_2,
                }),
                children: (0, c.jsx)(rv.t, { size: "md", color: "currentColor", className: gM.Kk }),
            }),
            (0, c.jsxs)("div", {
                className: gM.pt,
                children: [
                    (0, c.jsx)(h.D, {
                        variant: "heading-md/semibold",
                        children: j.intl.format(j.t.LzobT9, { planName: E }),
                    }),
                    !S &&
                        (0, c.jsx)(h.D, {
                            className: gM.gj,
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            children: t,
                        }),
                ],
            }),
            (0, c.jsx)(z.E, {
                className: gM.PJ,
                variant: "text-md/semibold",
                children: j.intl.format(j.t["ess/xl"], { count: l }),
            }),
        ],
    });
}
let gF = function (e) {
    let { className: t, entitlements: n } = e,
        i = k()(Array.from(n))
            .filter((e) => {
                let { subscriptionPlanId: t, parentId: n, consumed: i } = e;
                return null != t && null != n && !i;
            })
            .groupBy((e) => e.subscriptionPlanId)
            .value(),
        l = (0, m.yK)([oJ.A], () => oJ.A.getUnactivatedFractionalPremiumUnits()),
        s = (0, m.bG)([oA.A], () => oA.A.getPremiumSubscription()),
        r = (0, m.bG)([oA.A], () => null == oA.A.getPremiumTypeSubscription()),
        a = Object.keys(i).some((e) => e === tk.gD.PREMIUM_MONTH_TIER_1),
        o = (0, m.bG)([l0.default], () => l0.default.getCurrentUser());
    if (null == o) return null;
    let u = o.isPremiumWithPremiumGroup();
    return (0, c.jsxs)("div", {
        children: [
            (0, c.jsx)("div", {
                className: ie()(t, gM.xF, gM.J_),
                children: Object.keys(i).map((e) =>
                    (0, c.jsx)(
                        gw,
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
                (0, c.jsxs)("div", {
                    children: [
                        (0, c.jsx)(z.E, {
                            className: gM.eT,
                            variant: "text-md/normal",
                            children: j.intl.string(j.t["VNr4+O"]),
                        }),
                        (0, c.jsx)(gk.i, {}),
                    ],
                }),
        ],
    });
};
var gB = n(830991);
function gz(e) {
    let t,
        { subscription: n, withOverheadSeparator: i } = e,
        { analyticsLocations: l } = (0, eL.Ay)(),
        [s] = (0, cC.YV)({
            subscriptionId: n.id,
            renewal: !0,
            analyticsLocations: l,
            analyticsLocation: tv.A.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT,
        });
    if (null == s) return null;
    let r = i ? gB.r : gB.a,
        a = s.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return (0, rw.xq)(t);
        });
    if (null == a) return null;
    let o = a.subscriptionPlanId,
        u = ut.A.get(o);
    tl()(null != u, "Missing plan");
    let d = (0, aW.$g)(s.total, s.currency);
    return (
        u.interval === tk.WT.YEAR
            ? (t = j.intl.format(j.t["jPz/39"], {
                  price: d,
                  termsUrl: A.X7G.TERMS,
                  paidURL: A.X7G.PAID_TERMS,
                  privacyUrl: A.X7G.PRIVACY,
              }))
            : u.interval === tk.WT.MONTH &&
              (t =
                  1 === u.intervalCount
                      ? j.intl.format(j.t.m27GpI, {
                            price: d,
                            termsUrl: A.X7G.TERMS,
                            paidURL: A.X7G.PAID_TERMS,
                            privacyUrl: A.X7G.PRIVACY,
                        })
                      : j.intl.format(j.t["9xf5Vx"], {
                            price: d,
                            termsUrl: A.X7G.TERMS,
                            paidURL: A.X7G.PAID_TERMS,
                            privacyUrl: A.X7G.PRIVACY,
                            intervalCount: u.intervalCount,
                        })),
        (0, c.jsx)(z.E, { color: "text-muted", className: r, variant: "text-xs/normal", children: t })
    );
}
function gX(e) {
    let { subscription: t, withOverheadSeparator: n } = e;
    return t.status === A.Dmq.CANCELED || t.isPurchasedExternally
        ? null
        : (0, c.jsx)(gz, { subscription: t, withOverheadSeparator: n });
}
var gY = n(37397),
    gH = n(533792);
let gK = { [e_.nR]: "role_subscriptions_panel", [e_.PZ]: "application_subscriptions_panel" };
function gW() {
    return (0, c.jsx)(aJ.Z, {
        className: gH.wb,
        type: aJ.Z.Types.CUSTOM,
        children: (0, c.jsxs)(la.A, {
            align: la.A.Align.CENTER,
            children: [
                (0, c.jsx)(iZ.A, { game: null, size: iZ.M.SMALL, className: gH.pV }),
                (0, c.jsx)("span", { className: gH.O, children: j.intl.string(j.t["jy/hyj"]) }),
            ],
        }),
    });
}
function gZ(e, t) {
    return e === t || (null == e && null == t) || (null != e && null != t && (0, dJ._)(e, t));
}
function gq() {
    let e = (0, m.bG)([oJ.A], () => oJ.A.getForApplication(tk.tv), [], gZ);
    return (
        g.useEffect(() => {
            (0, ux.LM)(tk.tv);
        }, []),
        (0, c.jsx)(nZ.n, {
            label: j.intl.string(j.t["2GKrvn"]),
            description: j.intl.string(j.t.kNEjGm),
            children:
                null != e && rw.Ay.hasAccountCredit(e)
                    ? (0, c.jsx)(gF, { className: gH.fX, entitlements: e })
                    : (0, c.jsx)(gW, {}),
        })
    );
}
function gQ() {
    return (0, c.jsx)("hr", { className: gH.hr });
}
let gJ = function () {
        var e;
        let t = (0, m.bG)([oA.A], () => oA.A.getPremiumTypeSubscription()),
            n = (0, d$.A)({ subscriptionFilter: (e) => gY.Hy.has(e.status) }),
            i = (0, m.bG)([l0.default], () => l0.default.getCurrentUser()),
            l = n.length > 1,
            s = (0, m.bG)(
                [om.A],
                () => (null != t && null != t.paymentSourceId ? om.A.getPaymentSource(t.paymentSourceId) : null),
                [t],
            ),
            r = (0, m.bG)([oA.A], () => oA.A.hasFetchedSubscriptions()),
            a = (0, m.bG)([aK.A], () => aK.A.isBusy),
            u = (0, uW.Y)(),
            d = cy.A.useField("subsection"),
            E = cy.A.useField("scrollToGameServers"),
            S = g.useRef(null);
        g.useEffect(() => {
            (0, n1._)(null != d ? gK[d] : o.X.SUBSCRIPTIONS_PANEL);
        }, [d]);
        let T = (0, m.bG)([oA.A], () => oA.A.getActiveApplicationSubscriptions()?.length ?? 0),
            x = (0, m.bG)(
                [oA.A],
                () =>
                    Object.values(oA.A.getSubscriptions() ?? {})
                        .filter((e) => e.type === A.rzx.GUILD)
                        .filter((e) => e.status !== A.Dmq.ENDED).length,
            ),
            p = (0, m.bG)([oA.A], () =>
                Object.values(oA.A.getSubscriptions() ?? {}).some((e) => e.type === A.rzx.GAME_SERVER),
            ),
            { servers: f } = (0, cd.f)({ enabled: p }),
            _ = (0, uq.A)({ forceFetch: !0 }),
            N = (0, gR.ds)(),
            I = null !== t ? t.currentPeriodEnd : void 0,
            C =
                !(N && !(_.unactivatedUnits.length > 0)) &&
                (_.fractionalState !== tk.xc.NONE || _.unactivatedUnits.length > 0);
        return (g.useEffect(() => {
            E &&
                r &&
                u &&
                f.length > 0 &&
                (S.current?.scrollIntoView({ behavior: "smooth", block: "start" }),
                cy.A.setState({ scrollToGameServers: !1 }));
        }, [E, r, u, f.length]),
        g.useEffect(
            () => (
                e2.h.wait(() => {
                    (0, uK.zS)(), aX.hP(), (0, uH.CD)(), aX.$o();
                }),
                function () {
                    cy.A.resetState();
                }
            ),
            [],
        ),
        e8.A.enabled)
            ? (0, c.jsx)(aM.A, {})
            : r && u
              ? d === e_.nR
                  ? (0, c.jsx)(cz, { onGoBack: () => cy.A.setState({ subsection: null }) })
                  : d === e_.PZ
                    ? (0, c.jsx)(gL, { onGoBack: () => cy.A.setState({ subsection: null }) })
                    : (0, c.jsx)("div", {
                          className: gH.kL,
                          children: (0, c.jsxs)("div", {
                              className: gH.Qs,
                              children: [
                                  l ? (0, c.jsx)(gY.Sb, {}) : null,
                                  null != t
                                      ? (0, c.jsx)(gY.Ay, {
                                            subscription: t,
                                            paymentSource: s,
                                            busy: a,
                                            subscriptions: n,
                                        })
                                      : (0, c.jsx)(gY.TC, {}),
                                  C &&
                                      ((e = !!i?.isPremiumWithPremiumGroup()),
                                      (0, c.jsxs)("section", {
                                          children: [
                                              (0, c.jsx)(h.D, {
                                                  variant: "heading-md/bold",
                                                  className: gH.HL,
                                                  children: j.intl.string(j.t.Obre8v),
                                              }),
                                              (0, c.jsx)(z.E, {
                                                  variant: "text-md/normal",
                                                  className: gH.JU,
                                                  children: j.intl.format(j.t["7Zi06b"], {
                                                      helpCenterLink: eS.A.getArticleURL(
                                                          A.MVz.FRACTIONAL_PREMIUM_ABOUT,
                                                      ),
                                                  }),
                                              }),
                                              (0, c.jsx)(gV, {
                                                  className: gH.fX,
                                                  fractionalPremiumInfo: _,
                                                  activationDate: I,
                                                  hasPremiumGroup: e,
                                              }),
                                          ],
                                      })),
                                  (0, c.jsx)(gq, {}),
                                  x > 0 &&
                                      (0, c.jsxs)(c.Fragment, {
                                          children: [
                                              (0, c.jsx)(gQ, {}),
                                              (0, c.jsx)(cm, {
                                                  count: x,
                                                  onClickManageSubscription: () => cy.A.setState({ subsection: e_.nR }),
                                              }),
                                          ],
                                      }),
                                  T > 0 &&
                                      (0, c.jsxs)(c.Fragment, {
                                          children: [
                                              (0, c.jsx)(gQ, {}),
                                              (0, c.jsx)(cH, {
                                                  count: T,
                                                  onClickManageSubscription: () => {
                                                      cy.A.setState({ subsection: e_.PZ }),
                                                          e7.default.track(
                                                              A.HAw.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED,
                                                          );
                                                  },
                                              }),
                                          ],
                                      }),
                                  f.length > 0 &&
                                      (0, c.jsxs)("div", {
                                          ref: S,
                                          children: [(0, c.jsx)(gQ, {}), (0, c.jsx)(cu, { servers: f })],
                                      }),
                                  (0, c.jsx)(gQ, {}),
                                  null != t ? (0, c.jsx)(gX, { subscription: t, withOverheadSeparator: !1 }) : null,
                              ],
                          }),
                      })
              : (0, c.jsx)("div", { className: ie()(gH.kL, gH.Lq), children: (0, c.jsx)(aV.y, {}) });
    },
    g$ = (0, a.E2)(o.X.SUBSCRIPTIONS_SETTINGS, {
        useSearchTerms: () => [j.intl.string(j.t.trSpHX), j.intl.string(j.t["2GKrvn"])],
        Component: () => (0, c.jsx)(gJ, {}),
    }),
    g0 = (0, a.zZ)(o.X.SUBSCRIPTIONS_CATEGORY, {
        useSearchTerms: () => [j.intl.string(j.t.trSpHX), j.intl.string(j.t["2GKrvn"])],
        buildLayout: () => [g$],
    }),
    g1 = (0, a.t_)(o.X.SUBSCRIPTIONS_PANEL, { useTitle: () => j.intl.string(j.t.trSpHX), buildLayout: () => [g0] }),
    g2 = (0, a.i4)(o.X.SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.trSpHX),
        icon: dq.L,
        usePersistentBadge: function () {
            let e = (0, dQ.l)();
            return g.useMemo(
                () => ({
                    badgeType: d.Xi.STRONGLY_DISCOURAGED_CUSTOM,
                    customBadge: e ? (0, c.jsx)(iw.E, { size: "xs", color: nK.A.unsafe_rawColors.YELLOW_300 }) : null,
                }),
                [e],
            );
        },
        buildLayout: () => [g1],
    }),
    g3 = (0, a.WI)(o.X.BILLING_SECTION, {
        useTitle: () => j.intl.string(j.t.oeUm2s),
        buildLayout: () => [uX, dZ, g2, uU, oC],
    });
var g5 = n(540999),
    g6 = n(306471),
    g4 = n(964355),
    g8 = n(172272);
let g7 = (0, a.zD)(o.X.AXE_AUDITING, {
        useTitle: () => "Enable Accessibility Auditing",
        useSubtitle: () =>
            "Runs Axe auditing for accessibility while using the app. Violations get logged to the console. Only available in development.",
        usePredicate: () => !1,
        useValue: () => (0, m.bG)([sF.default], () => sF.default.isAxeEnabled),
        setValue: (e) => (0, sw.x)({ axeEnabled: e }),
    }),
    g9 = (0, a.zD)(o.X.CSS_DEBUGGING, {
        useTitle: () => "Enable CSS Debugging",
        useSubtitle: () => "Display raw colors as pink. Toggling this will refresh the browser.",
        useValue: () => (0, m.bG)([sF.default], () => sF.default.cssDebuggingEnabled),
        setValue: (e) => {
            (0, sw.x)({ cssDebuggingEnabled: e }).then(() => {
                setTimeout(() => location.reload(), 500);
            });
        },
    });
var me = n(276086),
    mt = n(354328);
let mn = (0, a.zD)(o.X.HIGHLIGHT_MANA_COMPONENTS, {
        useTitle: () => "Highlight Mana Components",
        useSubtitle: () => "Highlights all Mana design system components for easier debugging.",
        useValue: () => (0, mt.A)("highlight_mana_components"),
        setValue: (e) => {
            (0, me.L)("highlight_mana_components", e);
        },
    }),
    mi = (0, a.zD)(o.X.HIGHLIGHT_MANA_TEXT_OVERRIDES, {
        useTitle: () => "Audit overridden Mana Text (dashed red)",
        useSubtitle: () =>
            "Outlines Mana Text/Heading whose font is overridden by CSS with a dashed red border \u2014 it renders through the component but won\u2019t change between control and variant. Higher cost (measures computed styles), so keep it on only while auditing.",
        useValue: () => (0, mt.A)("highlight_mana_text_overrides"),
        setValue: (e) => {
            (0, me.L)("highlight_mana_text_overrides", e);
        },
    }),
    ml = (0, a.zD)(o.X.HIGHLIGHT_MANA_TEXT, {
        useTitle: () => "Mana Text Migration Highlighter",
        useSubtitle: () =>
            "Outlines Mana Text/Heading components in green, text composing a variant (experiment-reachable but not migrated) in yellow, and all other rendered text in red.",
        useValue: () => (0, mt.A)("highlight_mana_text"),
        setValue: (e) => {
            (0, me.L)("highlight_mana_text", e);
        },
    }),
    ms = (0, a.zD)(o.X.HIGHLIGHT_VOID_COMPONENTS, {
        useTitle: () => "Highlight Deprecated Void Components",
        useSubtitle: () =>
            "Highlights deprecated toggleable components: VoidCheckbox (green), VoidRadioGroup (yellow), VoidSwitch (blue).",
        useValue: () => (0, mt.A)("highlight_void_toggleables"),
        setValue: (e) => {
            (0, me.L)("highlight_void_toggleables", e);
        },
    }),
    mr = (0, a.sN)(o.X.LAYOUT_DEBUGGING_HORIZONTAL_SPACING, {
        useTitle: () => "Horizontal Grid Spacing",
        useSubtitle: () =>
            "Adjust the spacing between horizontal grid lines. Set to 0 to disable horizontal grid lines.",
        usePredicate: () => (0, m.bG)([sF.default], () => sF.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: g8.YR,
        markers: Array.from({ length: g8.YR + 1 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => g8.Or.getState().horizontalSpacing,
        asValueChanges: (e) => {
            g8.Or.getState().setHorizontalSpacing(e);
        },
    }),
    ma = (0, a.zD)(o.X.LAYOUT_DEBUGGING, {
        useTitle: () => "Enable Layout Debugging",
        useSubtitle: () => "Renders a grid on top of the app to help debug layout alignment issues.",
        useValue: () => (0, m.bG)([sF.default], () => sF.default.layoutDebuggingEnabled),
        setValue: (e) => {
            (0, sw.x)({ layoutDebuggingEnabled: e });
        },
    }),
    mo = (0, a.sN)(o.X.LAYOUT_DEBUGGING_VERTICAL_SPACING, {
        useTitle: () => "Vertical Grid Spacing",
        useSubtitle: () => "Adjust the spacing between vertical grid lines. Set to 0 to disable vertical grid lines.",
        usePredicate: () => (0, m.bG)([sF.default], () => sF.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: g8.YR,
        markers: Array.from({ length: g8.YR + 1 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => g8.Or.getState().verticalSpacing,
        asValueChanges: (e) => {
            g8.Or.getState().setVerticalSpacing(e);
        },
    }),
    mu = (0, a.zZ)(o.X.DESIGN_TOOLS, {
        useTitle: () => "Design & A11y Tools",
        useSearchTerms: () => ["accessibility tools"],
        buildLayout: () => [g9, ma, mr, mo, mn, ml, mi, ms, g7],
    }),
    md = (0, a.zD)(o.X.AD_OVERRIDE, {
        useTitle: () => "Always Deliver Ads",
        useSubtitle: () => "Makes the user targetable for all active ads.",
        useValue: () => v.HZ.useSetting(),
        setValue: (e) => {
            v.HZ.updateSetting(e);
        },
    });
var mc = n(396478),
    mg = n(173936),
    mm = n(260598),
    mA = n(414079),
    mE = n(148810),
    mh = n(380610),
    mS = n(986238),
    mT = n(281161),
    mx = n(663894),
    mp = n(522826);
let mf = ["discord_web", "discord_marketing", "discord_developers", "discord_ios", "discord_android"],
    m_ = [
        { id: "branch", value: "branch", label: "Branch Name" },
        { id: "id", value: "id", label: "Commit SHA" },
    ];
function mN(e) {
    return "discord_ios" in e || "discord_android" in e;
}
class mI extends g.Component {
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
        return (0, c.jsxs)(la.A, {
            direction: la.A.Direction.VERTICAL,
            className: ie()(mT.oS, mp.SX, mx.N, mT.nM),
            children: [
                (0, c.jsx)(mA.A, {
                    className: ie()(mT.lL, { [mT.zi]: i }),
                    onClick: i ? void 0 : this.handleRemoveBuildOverride,
                }),
                (0, c.jsxs)(la.A, {
                    className: mp.QB,
                    children: [
                        (0, c.jsx)(la.A.Child, {
                            basis: "50%",
                            children: (0, c.jsx)(i3.l, {
                                selectionMode: "single",
                                label: "Override Type",
                                options: m_,
                                onSelectionChange: this.handleOverrideTypeChanged,
                                value: t,
                                disabled: i,
                            }),
                        }),
                        (0, c.jsx)(la.A.Child, {
                            wrap: !0,
                            basis: "50%",
                            children: (0, c.jsx)(li.k, {
                                label: "branch" === t ? "Branch Name" : "Commit SHA",
                                value: n,
                                onChange: this.handleOverrideIdChanged,
                                disabled: i,
                            }),
                        }),
                    ],
                }),
                (0, c.jsxs)(la.A.Child, {
                    children: [
                        null != l &&
                            "" !== l &&
                            (0, c.jsx)(z.E, {
                                className: mT.AS,
                                color: "text-feedback-critical",
                                variant: "text-sm/normal",
                                children: l,
                            }),
                        (0, c.jsxs)(z.E, {
                            variant: "text-sm/normal",
                            className: mT.AS,
                            children: [
                                "This controls the build that will be served for the ",
                                (0, c.jsx)("code", { children: e }),
                                " project.",
                            ],
                        }),
                    ],
                }),
            ],
        });
    }
}
class mC extends g.Component {
    state = { loading: !0, buildOverrides: {}, loadedBuildOverrides: {}, errors: {}, saving: !1, didSave: !1 };
    async refreshBuildOverrides() {
        this.setState({ loading: !0 });
        let e = await (0, mh.bD)();
        this.setState({ loading: !1, buildOverrides: e, loadedBuildOverrides: k().cloneDeep(e), errors: {} });
    }
    isDirty() {
        let { buildOverrides: e, loadedBuildOverrides: t } = this.state;
        return !k().isEqual(e, t);
    }
    componentDidMount() {
        this.refreshBuildOverrides();
    }
    getAvailableProjects() {
        let { buildOverrides: e } = this.state;
        if (null == e) return [];
        let t = Object.keys(e);
        return k().without(mf, ...t);
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
        this.setState({ buildOverrides: k().cloneDeep(this.state.loadedBuildOverrides), errors: {}, didSave: !1 });
    };
    handleSaveChanges = async () => {
        let { buildOverrides: e } = this.state;
        if (null == e) return;
        this.setState({ saving: !0 });
        let t = await (0, mE.Zk)(e);
        if (200 === t.status) {
            let e = t.body;
            this.setState({
                buildOverrides: e,
                loadedBuildOverrides: k().cloneDeep(e),
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
        (0, ln.openModal)((t) => (0, c.jsx)(mb, { ...t, buildOverrides: e }));
    };
    renderEmpty() {
        return (0, c.jsx)(mc.pp, {
            theme: nR.A.theme,
            className: ie()(mp.eT, mp.SX),
            children: (0, c.jsx)(mc.SG, { children: "You have no build overrides configured." }),
        });
    }
    renderItems() {
        let { buildOverrides: e, saving: t, errors: n } = this.state;
        return null == e
            ? null
            : k().map(e, (e, i) =>
                  (0, c.jsx)(
                      mI,
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
            : (0, c.jsx)(p.$, { variant: "secondary", text: "Reload App", onClick: () => location.reload() });
    }
    renderLinkButton() {
        let { buildOverrides: e } = this.state;
        return null == e || 0 === Object.keys(e).length
            ? null
            : (0, c.jsx)(i4.m, {
                  text: "Generate Public Link",
                  children: (0, c.jsx)(i5.K, {
                      variant: "secondary",
                      icon: mg.q,
                      "aria-label": "Generate Public Link",
                      onClick: this.handleLinkGeneration,
                  }),
              });
    }
    renderSaveButton() {
        if (!this.isDirty()) return null;
        let { saving: e, buildOverrides: t } = this.state;
        return (0, c.jsxs)(c.Fragment, {
            children: [
                (0, c.jsx)(p.$, {
                    variant: "critical-primary",
                    text: "Discard Changes",
                    onClick: this.handleDiscardChanges,
                    disabled: e,
                }),
                (0, c.jsx)(p.$, {
                    variant: "primary",
                    text: "Save Build Overrides",
                    disabled: mN(t ?? {}),
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
            ? (0, c.jsx)(aV.y, { className: mp.QX })
            : null != i && 0 === Object.keys(i).length
              ? this.renderEmpty()
              : this.renderItems();
        let l = !n && !t && this.getAvailableProjects().length > 0,
            s =
                mN(i ?? {}) && "stable" !== window.GLOBAL_ENV.RELEASE_CHANNEL
                    ? (0, c.jsx)(z.E, {
                          color: "text-feedback-critical",
                          variant: "text-md/normal",
                          children:
                              "Mobile build overrides must be generated using the desktop/web stable client for now!",
                      })
                    : null;
        return (0, c.jsx)(nZ.n, {
            children: (0, c.jsxs)(F.B, {
                gap: 16,
                children: [
                    (0, c.jsx)(i3.l, {
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
                    (0, c.jsxs)(sC.e, {
                        justify: "end",
                        children: [this.renderRefreshButton(), this.renderLinkButton(), this.renderSaveButton()],
                    }),
                ],
            }),
        });
    }
}
class mb extends g.Component {
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
        e.key === l_.dh.ENTER && this.handleAddAllowedVersion();
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
            t = await (0, mE.SB)(e);
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
        return mN(this.props.buildOverrides ?? {});
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
            d = mS.fL.find((t) => t.value === e),
            g = l.map((e) => ({ id: e, label: e, value: e }));
        return (0, c.jsxs)(F.B, {
            gap: 20,
            children: [
                (0, c.jsx)(i3.l, {
                    selectionMode: "single",
                    label: "Expire After",
                    value: null != d ? d.value : void 0,
                    options: mS.fL,
                    onSelectionChange: this.handleExpirationChange,
                }),
                this.isMobile()
                    ? null
                    : (0, c.jsx)(i3.l, {
                          selectionMode: "single",
                          label: "Release Channel",
                          value: t,
                          options: mS.VP,
                          onSelectionChange: this.handleReleaseChannelChange,
                      }),
                this.isMobile()
                    ? (0, c.jsxs)(F.B, {
                          gap: 20,
                          children: [
                              (0, c.jsx)(li.k, {
                                  label: "Add allowed app version (required)",
                                  autoFocus: !0,
                                  value: s,
                                  onKeyDown: this.handleAllowedVersionEnter,
                                  error: r,
                                  onChange: this.handleAllowedVersionEntry,
                                  placeholder: "Example: 34",
                                  trailing: { icon: iM.j, onClick: this.handleAddAllowedVersion, "aria-label": "Add" },
                              }),
                              (0, c.jsx)(i3.l, {
                                  selectionMode: "single",
                                  label: "Remove allowed app version",
                                  value: void 0,
                                  options: g,
                                  onSelectionChange: this.handleRemoveAllowedVersion,
                                  disabled: 0 === l.length,
                              }),
                          ],
                      })
                    : null,
                this.isMobile()
                    ? null
                    : (0, c.jsx)(mm.f, {
                          label: "Limit to User IDs (optional)",
                          helperText: "User IDs can be separated by whitespace or commas.",
                          value: n,
                          error: i,
                          onBlur: () => this.setUserEntryError(""),
                          onChange: this.handleUserIDEntry,
                      }),
                (0, c.jsx)(mm.f, {
                    label: "Client Experiment Override",
                    description:
                        "Locally override the given experiments to the given bucket. This ONLY applies locally and WILL NOT affect the server. When the user clears build override, the experiment override is removed as well.",
                    value: o,
                    error: u,
                    onChange: this.handleExperiments,
                    placeholder: '{"2022-01_threads":1}',
                }),
                (0, c.jsx)(tK.d, { label: "Allow logged out users", checked: a, onChange: this.handleAllowLoggedOut }),
            ],
        });
    }
    renderHelpMessage() {
        let { statusText: e, status: t } = this.state;
        if (null == e) return (0, c.jsx)("div", {});
        let n = rj.Y.INFO;
        switch (t) {
            case 0:
                n = rj.Y.ERROR;
                break;
            case 1:
                n = rj.Y.WARNING;
        }
        return (0, c.jsx)(rj.p, { messageType: n, children: e });
    }
    render() {
        let { onClose: e, transitionState: t } = this.props,
            { publicLink: n } = this.state;
        return (0, c.jsx)(lt.Modal, {
            title: "Generate Public Build Override Link",
            input: this.renderHelpMessage(),
            actionBarInput: (0, c.jsx)(uA.A, { value: n }),
            transitionState: t,
            "aria-label": "Generate Public Build Override Link",
            actions: [{ variant: "primary", text: "Generate Link", onClick: this.handleGenerateLink }],
            onClose: e,
            children: this.renderSettingsForm(),
        });
    }
}
let my = (0, a.E2)(o.X.BUILD_OVERRIDES, { useSearchTerms: () => ["build overrides"], Component: mC });
var mv = n(256311),
    mj = n(883600);
let mO = (0, a.E2)(o.X.CHANGE_LOG_OVERRIDE, {
    useSearchTerms: () => ["changelog override", "change log override"],
    Component: function () {
        let e = (0, m.bG)([mj.A], () => mj.A.overrideId());
        async function t(e) {
            let t = mj.A.getChangelog(e, "en-US");
            return null != t ? t : ((await mv.A.fetchChangelog(e, "en-US", !1, !0)) ?? null);
        }
        return (0, c.jsx)(mY, {
            label: "Change Log Override",
            description: "Provide a change log ID to override the change log shown to this user.",
            placeholder: "Enter Change Log ID...",
            overrideId: e ?? null,
            setOverride: (e) => mv.A.setChangelogOverride(e),
            fetchOverride: t,
        });
    },
});
var mL = n(506774);
let mD = new Date("2018-01-01"),
    mR = (0, a.Tf)(o.X.CHANGE_LOG_CLEAR, {
        useTitle: () => "Clear Change Log",
        useSubtitle: () => "Resets the change log state so that it will show again on the next startup.",
        useLabel: () => "Clear",
        useDisabled: () => v.pK.useSetting() === aq.default.fromTimestamp(mD.getTime()),
        onClick: () => (mL.w.set("lastChangeLogDate", mD), v.pK.updateSetting(aq.default.fromTimestamp(mD.getTime()))),
    }),
    mP = (0, a.zD)(o.X.DISABLE_APP_COLLECTIONS_CACHE, {
        useTitle: () => "Disable Application Collections Cache",
        useSubtitle: () => "Forces application collection updates to be shown immediately.",
        useDisabled: () => (0, m.bG)([sF.default], () => sF.default.onlyShowPreviewAppCollections),
        useValue: () =>
            (0, m.bG)(
                [sF.default],
                () => sF.default.disableAppCollectionsCache || sF.default.onlyShowPreviewAppCollections,
            ),
        setValue: (e) => (0, sw.x)({ disableAppCollectionsCache: e }),
    }),
    mG = (0, a.zD)(o.X.FORCE_CANARY_API, {
        useTitle: () => "Force Canary API",
        useSubtitle: () => "Routes all API requests to Canary instances.",
        useValue: () => (0, m.bG)([sF.default], () => sF.default.isForcedCanary),
        setValue: (e) => {
            (0, sw.x)({ canary: e });
        },
    }),
    mM = (0, a.zD)(o.X.LOAD_SOURCE_MAPS, {
        useTitle: () => "Load Source Maps",
        useSubtitle: () => "Downloads source maps on this client. Only enable on devices you trust.",
        useValue: () => (0, m.bG)([sF.default], () => sF.default.sourceMapsEnabled),
        setValue: (e) => (0, sw.x)({ sourceMapsEnabled: e }),
    }),
    mU = (0, a.zD)(o.X.ONLY_SHOW_PREVIEW_APP_COLLECTIONS, {
        useTitle: () => "Only Show Preview App Collections",
        useSubtitle: () =>
            "Only show application collections (e.g. in App Directory, App Launcher in text) that have the 'preview' active state. This disables application collections cache, too, so you can see collections updates immediately.",
        useValue: () => (0, m.bG)([sF.default], () => sF.default.onlyShowPreviewAppCollections),
        setValue: (e) => (0, sw.x)({ onlyShowPreviewAppCollections: e }),
    });
var mV = n(10094),
    mk = n(683760);
let mw = [
        { id: "none", label: "Non-Nitro", value: 0 },
        { id: "tier_0", label: "Nitro Basic", value: tk.PremiumTypes.TIER_0 },
        { id: "tier_1", label: "Nitro Classic", value: tk.PremiumTypes.TIER_1 },
        { id: "tier_2", label: "Nitro Standard", value: tk.PremiumTypes.TIER_2 },
    ],
    mF = (0, a.Hn)(o.X.PREMIUM_TYPE_OVERRIDE, {
        useTitle: () => "Premium Type Override",
        useSearchTerms: () => ["nitro override"],
        useSubtitle: () => "Overrides the client's local premium type.",
        useOptions: () => mw,
        clearable: !0,
        useValue: () =>
            (0, m.bG)([mk.A], () => {
                let e = mk.A.getPremiumTypeOverride();
                return null === e ? 0 : e;
            }),
        setValue: (e) => {
            0 === e
                ? (0, mV.O)(null, void 0)
                : null === e
                  ? (0, mV.O)(void 0, void 0)
                  : (0, mV.O)(0 === e ? null : e, void 0);
        },
    });
var mB = n(246605),
    mz = n(274184);
let mX = (0, a.E2)(o.X.SURVEY_OVERRIDE, {
    useSearchTerms: () => ["survey override"],
    Component: function () {
        let e = (0, m.bG)([mz.Ay], () => mz.Ay.getSurveyOverride());
        return (0, c.jsx)(mY, {
            label: "Survey Override",
            description: "Provide a survey ID to override the survey shown to this user.",
            placeholder: "Enter Survey ID...",
            overrideId: e ?? null,
            setOverride: (e) => mB.xr(e),
            fetchOverride: (e) => mB.BC(e, !0) ?? null,
        });
    },
});
function mY(e) {
    let { label: t, description: n, placeholder: i, overrideId: l, setOverride: s, fetchOverride: r } = e,
        [a, o] = g.useState(l ?? ""),
        u = g.useRef(null),
        [d, m] = g.useState(0);
    function A() {
        null != u.current && (clearTimeout(u.current), (u.current = null));
    }
    return (
        g.useEffect(() => A, []),
        (0, c.jsx)(tH.D, {
            layout: "horizontal-responsive",
            label: t,
            description: n,
            children: (0, c.jsx)(li.k, {
                placeholder: i,
                error: 2 === d ? "Failed to fetch override" : void 0,
                successMessage: 3 === d ? "Override applied" : void 0,
                value: a,
                onChange: function (e) {
                    if (!(e.length > 0) || /^[0-9]+$/.test(e)) {
                        if ((o(e), A(), 0 === e.length)) {
                            m(0), s(null);
                            return;
                        }
                        u.current = setTimeout(() => {
                            m(1),
                                r(e).then((t) => {
                                    m(null == t ? 2 : 3), null != t && s(e);
                                });
                        }, 500);
                    }
                },
                clearable: !0,
            }),
        })
    );
}
let mH = (0, a.zZ)(o.X.DEV_OVERRIDES, {
        useTitle: () => "Overrides",
        buildLayout: () => [mF, mX, mO, mR, mG, md, mU, mP, mM, my],
        useInlineNotice: () => ({
            type: d.lT.INLINE_NOTICE,
            noticeType: "info",
            text: j.intl.format(j.t.UeZJlg, { link: "https://i.dis.gd/dev-settings-changes" }),
        }),
    }),
    mK = (0, a.zD)(o.X.ANALYTICS_LOGS, {
        useTitle: () => "Enable Logging of Analytics Events",
        useSubtitle: () => "Logs all analytics events to the developer console.",
        useValue: () => (0, m.bG)([sF.default], () => sF.default.isLoggingAnalyticsEvents),
        setValue: (e) => (0, sw.x)({ logAnalyticsEvents: e }),
    }),
    mW = (0, a.zD)(o.X.GATEWAY_LOGS, {
        useTitle: () => "Log Gateway Events",
        useSubtitle: () => "Logs all gateway events to console, including content. Enable verbose logs to see them.",
        useValue: () => (0, m.bG)([sF.default], () => sF.default.isLoggingGatewayEvents),
        setValue: (e) => (0, sw.x)({ logGatewayEvents: e }),
    }),
    mZ = (0, a.zD)(o.X.KEEP_POPOUTS_OPEN, {
        useTitle: () => "Keep Popouts Open",
        useSubtitle: () =>
            "When enabled, popouts will not close automatically, allowing their console contents to be inspected after a crash.",
        useValue: () => (0, m.bG)([sF.default], () => sF.default.preventPopoutClose),
        setValue: (e) => (0, sw.x)({ preventPopoutClose: e }),
    }),
    mq = (0, a.zD)(o.X.KEYBOARD_MISMATCHES, {
        useTitle: () => "Enable Logging of Keyboard Mismatches",
        useSubtitle: () => "Logs mismatches in detected keyboard codes to the console.",
        useValue: () => (0, m.bG)([sF.default], () => sF.default.logKeyboardMismatches),
        setValue: (e) => (0, sw.x)({ logKeyboardMismatches: e }),
    }),
    mQ = (0, a.zD)(o.X.OVERLAY_RPC_LOGS, {
        useTitle: () => "Enable Logging of Overlay RPC Events & Commands",
        useSubtitle: () => "Logs all overlay related RPC events. Super noisy if an overlay is connected.",
        useValue: () => (0, m.bG)([sF.default], () => sF.default.isLoggingOverlayEvents),
        setValue: (e) => (0, sw.x)({ logOverlayEvents: e }),
    }),
    mJ = (0, a.zD)(o.X.QUEST_LOGGING, {
        useTitle: () => "Enable Quests Debug Logging",
        useSubtitle: () => "Logs quest lifecycle events to the developer console.",
        useValue: () => (0, m.bG)([sF.default], () => sF.default.isLoggingQuestEvents),
        setValue: (e) => (0, sw.x)({ logQuestEvents: e }),
    }),
    m$ = (0, a.zD)(o.X.REQUEST_TRACING, {
        useTitle: () => "Enable Tracing Requests",
        useSubtitle: () => "Force trace all client requests with APM.",
        useValue: () => (0, m.bG)([sF.default], () => sF.default.isTracingRequests),
        setValue: (e) => (0, sw.x)({ trace: e }),
    }),
    m0 = (0, a.zZ)(o.X.LOGGING, { useTitle: () => "Logging", buildLayout: () => [mW, mQ, m$, mK, mq, mZ, mJ] }),
    m1 = (0, a.t_)(o.X.DEVELOPER_OPTIONS_PANEL, {
        useTitle: () => "Developer Options",
        buildLayout: () => [mH, m0, mu],
    }),
    m2 = (0, a.i4)(o.X.DEVELOPER_OPTIONS_SIDEBAR_ITEM, {
        useTitle: () => "Developer Options",
        icon: g6.V,
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
                    preventPopoutClose: u,
                    onlyShowPreviewAppCollections: d,
                    disableAppCollectionsCache: g,
                    isStaff: A,
                } = (0, m.cf)([sF.default, g5.A, l0.default], () => ({
                    layoutDebuggingEnabled: sF.default.layoutDebuggingEnabled,
                    isDeveloper: g5.A.isDeveloper,
                    isLoggingGatewayEvents: sF.default.isLoggingGatewayEvents,
                    isLoggingOverlayEvents: sF.default.isLoggingOverlayEvents,
                    isLoggingAnalyticsEvents: sF.default.isLoggingAnalyticsEvents,
                    isTracingRequests: sF.default.isTracingRequests,
                    isForcedCanary: sF.default.isForcedCanary,
                    isSourceMapsEnabled: sF.default.sourceMapsEnabled,
                    isAxeEnabled: sF.default.isAxeEnabled,
                    preventPopoutClose: sF.default.preventPopoutClose,
                    onlyShowPreviewAppCollections: sF.default.onlyShowPreviewAppCollections,
                    disableAppCollectionsCache: sF.default.disableAppCollectionsCache,
                    isStaff: l0.default.getCurrentUser()?.isStaff() ?? !1,
                })),
                { horizontalSpacing: E, verticalSpacing: h } = (0, g8.Or)(),
                { setHorizontalSpacing: S, setVerticalSpacing: T } = g8.Or.getState(),
                x = v.HZ.useSetting();
            return t
                ? [
                      (0, c.jsxs)(
                          e0.Dr,
                          {
                              id: "overrides",
                              label: "Overrides",
                              action: () => {
                                  (0, t9.openUserSettings)(o.X.DEV_OVERRIDES);
                              },
                              children: [
                                  (0, c.jsx)(
                                      e0.sL,
                                      {
                                          id: "always-deliver",
                                          label: "Always Deliver Ads",
                                          checked: x,
                                          action: () => {
                                              v.HZ.updateSetting(!x);
                                          },
                                      },
                                      "always-deliver",
                                  ),
                                  (0, c.jsx)(
                                      e0.sL,
                                      {
                                          id: "forced-canary",
                                          label: "Forced Canary",
                                          checked: r,
                                          action: () => {
                                              (0, sw.x)({ canary: !r });
                                          },
                                      },
                                      "forced-canary",
                                  ),
                                  (0, c.jsx)(
                                      e0.sL,
                                      {
                                          id: "preview-collections",
                                          label: "Preview Unpublished Collections",
                                          checked: d,
                                          action: () => {
                                              (0, sw.x)({ onlyShowPreviewAppCollections: !d });
                                          },
                                      },
                                      "preview-collections",
                                  ),
                                  (0, c.jsx)(
                                      e0.sL,
                                      {
                                          id: "disable-collections-cache",
                                          label: "Disable Collections Cache",
                                          checked: g,
                                          action: () => {
                                              (0, sw.x)({ disableAppCollectionsCache: !g });
                                          },
                                      },
                                      "disable-collections-cache",
                                  ),
                              ],
                          },
                          "overrides",
                      ),
                      (0, c.jsxs)(
                          e0.Dr,
                          {
                              id: "logging",
                              label: "Logging",
                              action: () => {
                                  (0, t9.openUserSettings)(o.X.LOGGING);
                              },
                              children: [
                                  (0, c.jsx)(
                                      e0.sL,
                                      {
                                          id: "gateway-events",
                                          label: "Gateway Events",
                                          checked: n,
                                          action: () => {
                                              (0, sw.x)({ logGatewayEvents: !n });
                                          },
                                      },
                                      "gateway-events",
                                  ),
                                  (0, c.jsx)(
                                      e0.sL,
                                      {
                                          id: "overlay-events",
                                          label: "Overlay RPC Events",
                                          checked: i,
                                          action: () => {
                                              (0, sw.x)({ logOverlayEvents: !i });
                                          },
                                      },
                                      "overlay-events",
                                  ),
                                  (0, c.jsx)(
                                      e0.sL,
                                      {
                                          id: "analytics-events",
                                          label: "Analytics Events",
                                          checked: l,
                                          action: () => {
                                              (0, sw.x)({ logAnalyticsEvents: !l });
                                          },
                                      },
                                      "analytics-events",
                                  ),
                                  (0, c.jsx)(
                                      e0.sL,
                                      {
                                          id: "tracing-requests",
                                          label: "Tracing Requests",
                                          checked: s,
                                          action: () => {
                                              (0, sw.x)({ trace: !s });
                                          },
                                      },
                                      "tracing-requests",
                                  ),
                                  (0, c.jsx)(
                                      e0.sL,
                                      {
                                          id: "prevent-popout-close",
                                          label: "Prevent Popouts From Closing",
                                          checked: u,
                                          action: () => {
                                              (0, sw.x)({ preventPopoutClose: !u });
                                          },
                                      },
                                      "prevent-popout-close",
                                  ),
                              ],
                          },
                          "logging",
                      ),
                      (0, c.jsxs)(
                          e0.Dr,
                          {
                              id: "design-tools",
                              label: "Design/A11y Tools",
                              action: () => {
                                  (0, t9.openUserSettings)(o.X.DESIGN_TOOLS);
                              },
                              children: [
                                  (0, c.jsx)(
                                      e0.sL,
                                      {
                                          id: "accessibility-auditing",
                                          label: "Accessibility Auditing",
                                          checked: a,
                                          action: () => {
                                              (0, sw.x)({ axeEnabled: !a });
                                          },
                                      },
                                      "accessibility-auditing",
                                  ),
                                  (0, c.jsx)(
                                      e0.sL,
                                      {
                                          id: "layout-debugging",
                                          label: "Enable Layout Debugging",
                                          checked: e,
                                          action: () => {
                                              (0, sw.x)({ layoutDebuggingEnabled: !e });
                                          },
                                      },
                                      "layout-debugging",
                                  ),
                                  e &&
                                      (0, c.jsxs)(c.Fragment, {
                                          children: [
                                              (0, c.jsx)(
                                                  e0.aK,
                                                  {
                                                      id: "horizontal-spacing",
                                                      label: "Horizontal Spacing",
                                                      control: (e, t) =>
                                                          (0, c.jsx)(g4.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: E,
                                                              minValue: 0,
                                                              maxValue: g8.YR,
                                                              onChange: (e) => S(e),
                                                              renderValue: (e) => `${Math.round(e)}px`,
                                                              "aria-label": "Horizontal Spacing",
                                                          }),
                                                  },
                                                  "horizontal-spacing",
                                              ),
                                              (0, c.jsx)(
                                                  e0.aK,
                                                  {
                                                      id: "vertical-spacing",
                                                      label: "Vertical Spacing",
                                                      control: (e, t) =>
                                                          (0, c.jsx)(g4.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: h,
                                                              minValue: 0,
                                                              maxValue: g8.YR,
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
                      A
                          ? (0, c.jsx)(
                                e0.Dr,
                                { id: "discord-stats", label: "Discord Stats", action: () => l$() },
                                "discord-stats",
                            )
                          : null,
                  ]
                : null;
        },
        buildLayout: () => [m1],
    });
var m3 = n(127062),
    m5 = n(25044),
    m6 = n(80703),
    m4 = n(123292),
    m8 = n(691540),
    m7 = n(857250),
    m9 = n(97483),
    Ae = n(892547),
    At = n(890856),
    An = n(100392),
    Ai = n(102609),
    Al = n(271478),
    As = n(736056),
    Ar = n(710195),
    Aa = n(386976),
    Ao = n(257433),
    Au = n(32523),
    Ad = n(96919),
    Ac = n(688151),
    Ag = n(142862);
function Am(e) {
    let { experiment: t, experimentId: n, overrideInfo: i, defaultOpen: l } = e,
        [s, r] = g.useState(l),
        [a, o] = g.useState(!1),
        u = g.useCallback(() => {
            r((e) => !e);
        }, []),
        d = (0, m.bG)([o9.default], () => o9.default.getId()),
        A = (0, m.bG)([o9.default], () => {
            let e = o9.default.getInstallationForTracking();
            return null == e ? null : (0, m6.v)(e);
        }),
        E = "installation" === t.kind && null != A ? A : d,
        h = (0, Ao.iN)(t, E),
        S = (0, Ao.Fm)(t, E),
        T = (0, m.yK)([As.A], () =>
            k()
                .sortBy(As.A.getRecentExposures(Ac.Vh.USER, n), (e) => {
                    let [t, n] = e;
                    return -n;
                })
                .map((e) => {
                    let [t, n] = e;
                    return `${new Date(n).toLocaleString()} (${t})`;
                }),
        ),
        x = g.useCallback(
            (e) => {
                (0, ul.C)((0, An.yA)(n), () => {
                    (0, m8.P0)({
                        id: "experiment-link-copied",
                        message: "Copied experiment link",
                        type: m9.Ck.SUCCESS,
                    }),
                        e.preventDefault(),
                        e.stopPropagation();
                });
            },
            [n],
        ),
        p = (0, c.jsx)(At.s, {
            "aria-label": "Toggle visibility",
            onClick: u,
            children: (0, c.jsxs)(z.E, {
                variant: "text-md/medium",
                className: Ag.DD,
                children: [
                    (0, c.jsxs)("div", {
                        children: [
                            (0, c.jsxs)(F.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 4,
                                children: [
                                    t.title,
                                    " ",
                                    ul.p5 &&
                                        (0, c.jsx)(t8.D, { onClick: x, children: (0, c.jsx)(mg.q, { size: "xs" }) }),
                                ],
                            }),
                            (0, c.jsx)(z.E, { color: "text-muted", variant: "text-sm/normal", children: n }),
                        ],
                    }),
                    (0, c.jsx)("span", {
                        className: Ag.km,
                        children: "installation" === t.kind ? "Installation" : "User",
                    }),
                ],
            }),
        });
    if (!s) return (0, c.jsx)("div", { className: Ag.Os, children: p });
    let f = "";
    return (
        (f =
            t.system === Ai.l5.LEGACY
                ? `Currently assigned to bucket ${h ?? Ac.RE.NOT_ELIGIBLE}`
                : null != h
                  ? `Currently assigned to variant ${h}`
                  : "Currently unassigned"),
        (0, c.jsxs)("div", {
            className: Ag.Os,
            children: [
                p,
                (0, c.jsx)("div", {
                    children: (0, c.jsx)(Al.g, {
                        label: t.system === Ai.l5.LEGACY ? "Bucket Override" : "Variant Override",
                        description: f,
                        experiment: t,
                        experimentId: n,
                        overrideInfo: i,
                    }),
                }),
                (0, c.jsx)("div", {
                    className: Ag.h_,
                    children:
                        null == S
                            ? (0, c.jsx)(z.E, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  children:
                                      'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.',
                              })
                            : null,
                }),
                a
                    ? (0, c.jsxs)("div", {
                          children: [
                              (0, c.jsx)(z.E, {
                                  variant: "text-lg/medium",
                                  className: Ag.id,
                                  children: "Server Descriptor",
                              }),
                              (0, c.jsx)(z.E, {
                                  variant: "code",
                                  className: Ag.AS,
                                  children: null == S ? "None" : JSON.stringify(S, void 0, 2),
                              }),
                              (0, c.jsx)(z.E, {
                                  variant: "text-lg/medium",
                                  className: Ag.id,
                                  children: "Override Descriptor",
                              }),
                              (0, c.jsx)(z.E, {
                                  variant: "code",
                                  className: Ag.AS,
                                  children:
                                      i?.originalDescriptor == null
                                          ? "None"
                                          : JSON.stringify(i.originalDescriptor, void 0, 2),
                              }),
                              (0, c.jsx)(z.E, {
                                  variant: "text-lg/medium",
                                  className: Ag.id,
                                  children: "Recent Exposures",
                              }),
                              (0, c.jsx)(z.E, {
                                  variant: "code",
                                  className: Ag.AS,
                                  children: 0 === T.length ? "None" : T.join("\n"),
                              }),
                          ],
                      })
                    : (0, c.jsx)("div", {
                          className: Ag.id,
                          children: (0, c.jsx)(m4.Q, {
                              variant: "secondary",
                              text: "More Details \xbb",
                              onClick: () => o(!0),
                          }),
                      }),
                (0, c.jsx)(i2.c, { className: Ag.yF }),
            ],
        })
    );
}
function AA(e) {
    let { experiment: t, experimentId: n, overrideInfo: i } = e,
        [l, s] = g.useState(null != i),
        [r, a] = g.useState(!1),
        o = g.useCallback(() => {
            s((e) => !e);
        }, []),
        u = (0, m.bG)([As.A], () => As.A.getLoadedGuildExperiment(n)),
        d = (0, m.bG)([As.A, lc.A, Ar.A], () => {
            if (t.system === Ai.l5.LEGACY) return null == As.A.getLoadedGuildExperiment(n);
            let e = t.name;
            return !lc.A.getGuildsArray().some((t) => null != Ar.A.getServerAssignment("guild", t.id, e));
        }),
        A = (0, m.yK)([As.A], () =>
            k()
                .sortBy(As.A.getRecentExposures(Ac.Vh.GUILD, n), (e) => {
                    let [t, n] = e;
                    return -n;
                })
                .map((e) => {
                    let [t, n] = e;
                    return `${new Date(n).toLocaleString()} (${t})`;
                }),
        ),
        [E, h] = (0, m.yK)([o9.default, lc.A, As.A, Ar.A], () => {
            let e = t.system === Ai.l5.LEGACY,
                i = t.name,
                l = o9.default.getId(),
                s = k().sortBy(lc.A.getGuildsArray(), (e) => e.name.toLowerCase()),
                r = {},
                a = [];
            for (let t of s) {
                let s = e
                    ? (As.A.getGuildExperimentDescriptor(n, t.id)?.bucket ?? Ac.RE.NOT_ELIGIBLE)
                    : (Ar.A.getEvaluationAndAssignment("guild", t.id, i, l)[1]?.variantId ?? Ac.RE.NOT_ELIGIBLE);
                s in r || (r[s] = 0), r[s]++, a.push(`${t.name}: ${s}`);
            }
            let o = k()(r)
                .keys()
                .map(Number)
                .sort()
                .map((e) => `${r[e]} guilds in bucket ${e}`)
                .join(", ");
            return [a.join("\n"), o];
        }),
        S = t.system !== Ai.l5.LEGACY,
        T = (0, m.yK)([lc.A], () => k().sortBy(lc.A.getGuildsArray(), (e) => e.name.toLowerCase())),
        [x, p] = g.useState(() => lg.A.getGuildId() ?? lg.A.getLastSelectedGuildId()),
        f = T.find((e) => e.id === x)?.name,
        _ = (0, m.bG)([Ar.A], () => {
            if (S && null != x) return Ar.A.getServerAssignment("guild", x, t.name);
        }, [S, x, t.name]),
        N = (0, m.bG)([Ar.A, o9.default], () => {
            if (!S) return;
            let e = o9.default.getId();
            return Ar.A.getEvaluationAndAssignment("user", e, t.name)[1];
        }),
        I = null != N && (N.isOverride || N.useAsEligibility),
        C = (0, c.jsx)(t8.D, {
            onClick: o,
            children: (0, c.jsxs)(z.E, {
                variant: "text-md/medium",
                className: Ag.DD,
                children: [
                    (0, c.jsxs)("div", {
                        children: [
                            (0, c.jsx)("span", { children: t.title }),
                            (0, c.jsx)(z.E, { color: "text-muted", variant: "text-sm/normal", children: n }),
                        ],
                    }),
                    (0, c.jsx)("span", { className: Ag.km, children: "Guild" }),
                ],
            }),
        });
    return l
        ? (0, c.jsxs)("div", {
              className: Ag.Os,
              children: [
                  C,
                  (0, c.jsx)(Al.g, {
                      label: "Bucket Override",
                      description: `Current Assignments: ${h}`,
                      experiment: t,
                      experimentId: n,
                      overrideInfo: i,
                  }),
                  S &&
                      T.length > 0 &&
                      (0, c.jsx)("div", {
                          className: Ag.h_,
                          children: (0, c.jsx)(i3.l, {
                              label: "Inspect guild",
                              description:
                                  "Server assignment and eligibility shown below are for this guild. The override above still applies to all guilds.",
                              value: x ?? void 0,
                              options: T.map((e) => ({ id: e.id, label: e.name, value: e.id })),
                              onSelectionChange: (e) => p(e),
                              selectionMode: "single",
                              fullWidth: !0,
                          }),
                      }),
                  (0, c.jsx)("div", {
                      className: Ag.h_,
                      children: d
                          ? (0, c.jsx)(z.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children:
                                    t.system === Ai.l5.LEGACY
                                        ? 'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.'
                                        : "Warning: Server did not send an assignment for this experiment. Make sure the experiment is configured to run on the APP surface in the admin UI.",
                            })
                          : null,
                  }),
                  S &&
                      (0, c.jsxs)("div", {
                          children: [
                              (0, c.jsxs)(z.E, {
                                  variant: "text-lg/medium",
                                  className: Ag.id,
                                  children: ["Server Descriptor", null != f ? ` (${f})` : ""],
                              }),
                              (0, c.jsx)(z.E, {
                                  variant: "code",
                                  className: Ag.AS,
                                  children: null == _ ? "None" : JSON.stringify(_, void 0, 2),
                              }),
                              (0, c.jsx)(z.E, {
                                  variant: "text-lg/medium",
                                  className: Ag.id,
                                  children: "Client Eligibility",
                              }),
                              (0, c.jsx)(z.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: I ? "Eligible: Yes" : "Eligible: No",
                              }),
                              (0, c.jsx)(z.E, {
                                  variant: "code",
                                  className: Ag.AS,
                                  children: null == N ? "None" : JSON.stringify(N, void 0, 2),
                              }),
                          ],
                      }),
                  r
                      ? (0, c.jsxs)("div", {
                            children: [
                                (0, c.jsx)(z.E, {
                                    variant: "text-lg/medium",
                                    className: Ag.id,
                                    children: "Guild Assignments",
                                }),
                                (0, c.jsx)(z.E, { variant: "code", className: Ag.AS, children: E }),
                                t.system === Ai.l5.LEGACY &&
                                    (0, c.jsxs)(c.Fragment, {
                                        children: [
                                            (0, c.jsx)(z.E, {
                                                variant: "text-lg/medium",
                                                className: Ag.id,
                                                children: "Server Descriptor",
                                            }),
                                            (0, c.jsx)(z.E, {
                                                variant: "code",
                                                className: Ag.AS,
                                                children: null == u ? "None" : JSON.stringify(u, void 0, 2),
                                            }),
                                        ],
                                    }),
                                (0, c.jsx)(z.E, {
                                    variant: "text-lg/medium",
                                    className: Ag.id,
                                    children: "Override Descriptor",
                                }),
                                (0, c.jsx)(z.E, {
                                    variant: "code",
                                    className: Ag.AS,
                                    children:
                                        i?.originalDescriptor == null
                                            ? "None"
                                            : JSON.stringify(i.originalDescriptor, void 0, 2),
                                }),
                                (0, c.jsx)(z.E, {
                                    variant: "text-lg/medium",
                                    className: Ag.id,
                                    children: "Recent Exposures",
                                }),
                                (0, c.jsx)(z.E, {
                                    variant: "code",
                                    className: Ag.AS,
                                    children: 0 === A.length ? "None" : A.join("\n"),
                                }),
                            ],
                        })
                      : (0, c.jsx)("div", {
                            className: Ag.id,
                            children: (0, c.jsx)(m4.Q, {
                                variant: "secondary",
                                text: "More Details \xbb",
                                onClick: () => a(!0),
                            }),
                        }),
                  (0, c.jsx)(i2.c, { className: Ag.yF }),
              ],
          })
        : (0, c.jsx)("div", { className: Ag.Os, children: C });
}
let AE = (0, a.E2)(o.X.EXPERIMENTS_SETTING, {
        Component: function () {
            let { experiments: e, overridesInfo: t } = (0, Aa.op)(),
                { experiments: n, overridesInfo: i } = (0, Au.hI)(),
                l = g.useMemo(() => ({ ...n, ...e }), [n, e]),
                s = g.useMemo(() => ({ ...i, ...t }), [i, t]),
                r = (0, m.bG)([o9.default], () => {
                    let e = o9.default.getInstallationForTracking();
                    return null == e ? null : (0, m6.v)(e);
                }),
                [a, o] = g.useState(""),
                u = (0, Ad.oC)((0, Ad.R3)((0, Ad.Fm)(l), s), a);
            return (0, c.jsxs)("div", {
                "data-mtctest-ignore": "true",
                children: [
                    null != r &&
                        (0, c.jsxs)(F.B, {
                            style: { gap: 8, marginBottom: 16 },
                            children: [
                                (0, c.jsxs)(z.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    children: ["Installation ID: ", r],
                                }),
                                ul.p5 &&
                                    (0, c.jsx)(m4.Q, {
                                        size: "sm",
                                        onClick: () => {
                                            (0, ul.C)(r, () => {
                                                (0, m8.P0)((0, m7.o)("Installation ID copied!", m9.Ck.SUCCESS));
                                            });
                                        },
                                        text: "Copy",
                                    }),
                            ],
                        }),
                    (0, c.jsx)(Ae.I, {
                        placeholder: "Search experiments",
                        query: a,
                        onChange: o,
                        onClear: () => o(""),
                    }),
                    u.length > 0
                        ? u.map((e) => {
                              let t = "guild" === e.experiment.kind ? AA : Am;
                              return (0, c.jsx)(
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
                        : (0, c.jsx)("div", {
                              className: Ag.p$,
                              children: (0, c.jsx)(h.D, {
                                  variant: "heading-md/semibold",
                                  children: "No Experiments Found",
                              }),
                          }),
                ],
            });
        },
        useSearchTerms: () => ["Experiments", "Bucket Override", "Variant Override"],
    }),
    Ah = (0, a.zZ)(o.X.EXPERIMENTS_CATEGORY, { buildLayout: () => [AE] }),
    AS = (0, a.t_)(o.X.EXPERIMENTS_PANEL, { useTitle: () => "Experiments", buildLayout: () => [Ah] }),
    AT = (0, a.i4)(o.X.EXPERIMENTS_SIDEBAR_ITEM, {
        useTitle: () => "Experiments",
        icon: m3.c,
        useMenu: m5.A,
        buildLayout: () => [AS],
    }),
    Ax = (0, a.WI)(o.X.DEVELOPER_SECTION, {
        useTitle: () => j.intl.string(j.t["+gHUHA"]),
        usePredicate: () => g5.A.isDeveloper,
        buildLayout: () => [AT, m2],
    });
var Ap = n(682348),
    Af = n(871633),
    A_ = n(751075),
    AN = n(843402);
let AI = (0, n(583613).L_)(function () {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return new Set(t.map((e) => e.exePath));
});
function AC() {
    let e = (0, m.yK)([iH.Ay], () => iH.Ay.getGamesSeen(!1)),
        t = (0, m.bG)([iH.Ay], () => AI(...iH.Ay.getOverrides()));
    g.useEffect(() => ((0, AN.a2)(), AN.e0), []);
    let { gameHistory: n, robloxSubgameHistory: i } = g.useMemo(
        () =>
            e.reduce((e, t) => ((0, Af.n1)(t) ? e.robloxSubgameHistory.push(t) : e.gameHistory.push(t), e), {
                gameHistory: [],
                robloxSubgameHistory: [],
            }),
        [e],
    );
    return { gameHistory: n, robloxSubgameHistory: i, overrideExePaths: t };
}
function Ab(e) {
    let { gameHistory: t } = AC();
    return {
        namedGames: g.useMemo(
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
function Ay(e) {
    let { namedGames: t, totalCount: n } = Ab(e);
    return { names: t.map((e) => e.name), totalCount: n };
}
function Av() {
    let { namedGames: e } = Ab(2),
        [t, n] = g.useMemo(() => e.map((e) => e.id), [e]);
    g.useEffect(() => {
        c9.Ay.fetchApplications([t, n].filter(n8.Vq));
    }, [t, n]);
    let [i, l] = (0, m.yK)([iz.A], () => [t, n].map(iz.A.getApplication), [t, n]);
    return null == t
        ? null
        : {
              frontIcon: { icon: (0, c.jsx)(iZ.A, { game: i, size: iZ.M.MEDIUM_LARGE }), shape: A_.e0.ROUNDED },
              backIcon:
                  null != n ? { icon: (0, c.jsx)(iZ.A, { game: l, size: iZ.M.MEDIUM }), shape: A_.e0.ROUNDED } : null,
          };
}
let Aj = (0, a.AK)(o.X.ACTIVITY_PRIVACY_TO_REGISTERED_GAMES_NAVIGATOR, {
        useSubtitle: function () {
            let { names: e, totalCount: t } = Ay(2);
            return j.intl.format(j.t["6nRCFl"], {
                also: "true",
                count: t,
                nameCount: e.length,
                game1: e[0],
                game2: e[1],
            });
        },
        useTrailingDecoration: () => {
            let e = Av();
            return { type: d.wF.STACKED_ICONS, icons: e };
        },
        destinationKey: o.X.REGISTERED_GAMES_PANEL,
        usePredicate: () =>
            (0, m.bG)([iH.Ay], () => iH.Ay.getGamesSeen(!1).some((e) => !(0, Af.n1)(e))) && (0, no.xl)(),
    }),
    AO = (0, a.gN)(o.X.ACTIVITY_SHARING_RELATED_SETTINGS, { buildLayout: () => [Aj] });
var AL = n(395277);
let AD = (0, a.zD)(o.X.ACTIVITY_PRIVACY_SETTING, {
    useTitle: () => j.intl.string(AL.default.WhdCGP),
    useSubtitle: () => j.intl.string(AL.default.UQ9RHJ),
    useValue: v.tz.useSetting,
    setValue: v.tz.updateSetting,
});
var AR = n(406535);
let AP = (0, a.zD)(o.X.ACTIVITY_PRIVACY_NOTIFY_FRIENDS_ONLINE_SETTING, {
        useTitle: () => j.intl.string(AL.default.A0FVCV),
        useSubtitle: () => j.intl.string(AL.default.vHX6RG),
        useValue: v.hV.useSetting,
        setValue: function (e) {
            v.hV.updateSetting(e),
                e7.default.track(A.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: AR.Y.ACCOUNT,
                    notify_friends_on_come_online: e,
                });
        },
    }),
    AG = (0, a.zZ)(o.X.ACTIVITY_PRIVACY_SHARING_CATEGORY, {
        useTitle: () => j.intl.string(j.t.WmsPis),
        useSearchTerms: () => [j.intl.string(j.t["8ka8li"])],
        buildLayout: () => [AD, AP, AO],
    });
var AM = n(106531);
let AU = (0, a.AK)(o.X.ACTIVITY_PRIVACY_TO_PROFILE_PRIVACY_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.J0SFL2),
        destinationKey: o.X.DATA_AND_PRIVACY_PANEL,
    }),
    AV = (0, a.gN)(o.X.ACTIVITY_PRIVACY_RELATED_SETTINGS, {
        usePredicate: () => (0, AM.lX)("ActivityPrivacyRelatedSettings"),
        buildLayout: () => [AU],
    });
var Ak = n(945810);
let Aw = (0, Ak.mj)({
    name: "2026-02-activity-privacy-matching",
    kind: "user",
    defaultConfig: { copyChanges: !1, upsell: !1 },
    variations: {
        0: { copyChanges: !1, upsell: !1 },
        1: { copyChanges: !0, upsell: !1 },
        2: { copyChanges: !0, upsell: !0 },
    },
});
var AF = n(365258);
let AB = (0, a.Qx)(o.X.ACTIVITY_PRIVACY_PER_GUILD_DEFAULT_SETTING, {
    useTitle: () => j.intl.string(AL.default["/LHVbt"]),
    useSubtitle: () => j.intl.string(j.t.L5IdzV),
    useOptions: function () {
        return [
            { value: ek.Qd.ACTIVITY_STATUS_OFF, name: j.intl.string(AL.default.m3oL7Q) },
            { value: ek.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS, name: j.intl.string(AL.default["5+lnTA"]) },
            { value: ek.Qd.ACTIVITY_STATUS_ON, name: j.intl.string(AL.default["egr+VZ"]) },
        ];
    },
    useValue: v._Z.useSetting,
    setValue: function (e) {
        var t;
        let i = v._Z.getSetting();
        if (
            (v._Z.updateSetting(e),
            (t = "GuildActivitySharingDefaultSetting"),
            !(0, AM.W1)(t) && !Aw.getConfig({ location: t }).upsell)
        )
            return;
        let l = (0, AF.g8)(i, e);
        if (null == l) return;
        let s = (0, AF.Xc)(e);
        (0, ln.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("81849"), n.e("62041"), n.e("41996")]).then(n.bind(n, 32167));
            return (t) =>
                (0, c.jsx)(e, { ...t, direction: l.direction, affectedGuildIds: l.affectedGuildIds, settingName: s });
        });
    },
});
var Az = n(498642),
    AX = n(573435),
    AY = n(260509),
    AH = n(876399);
function AK(e) {
    let { guild: t, size: n } = e,
        i = (0, AY.Iv)(t, n, !1, !0),
        l = (0, AY.Rb)(t);
    return null != i
        ? (0, c.jsx)("img", { src: i, alt: t.name, height: n, width: n })
        : (0, c.jsx)("div", {
              className: AH.F,
              children: (0, c.jsx)(z.E, {
                  color: "text-subtle",
                  variant: 48 === n ? "text-md/semibold" : "text-xxs/semibold",
                  children: l,
              }),
          });
}
function AW(e) {
    let { guild: t, size: n } = e;
    return (0, c.jsx)(AX.Ay, {
        className: AH.z,
        mask: AX.Ay.Masks.SQUIRCLE,
        width: n,
        height: n,
        children: (0, c.jsx)(AK, { guild: t, size: n }),
    });
}
var AZ =
    (((s = {}).SERVER_ORDER = "server-order"),
    (s.RECENTLY_JOINED = "recently-joined"),
    (s.ACTIVITY_SHARING_ON = "activity-sharing-on"),
    (s.ACTIVITY_SHARING_OFF = "activity-sharing-off"),
    s);
let Aq = {
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
var AQ = n(775657);
function AJ(e) {
    let { guild: t, isActivityRestricted: n, onToggleActivityRestrictedGuild: i } = e,
        l = (0, m.bG)([Az.A], () => Az.A.getMemberCount(t.id));
    return (0, c.jsxs)(F.B, {
        as: "li",
        direction: "horizontal",
        align: "center",
        gap: 16,
        children: [
            (0, c.jsx)("div", { className: AQ.FO, children: (0, c.jsx)(AW, { guild: t, size: 48 }) }),
            (0, c.jsx)("div", {
                className: AQ.QH,
                children: (0, c.jsx)(tK.d, {
                    label: t.name,
                    description: j.intl.format(j.t.zRl6XR, { count: l ?? 0 }),
                    checked: !n,
                    onChange: (e) => i({ checked: e, guildId: t.id }),
                }),
            }),
        ],
    });
}
let A$ = function (e) {
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
            numActivityRestrictedGuilds: E,
            numTotalGuilds: h,
        } = (function () {
            let [e, t] = (0, g.useState)(""),
                [n, i] = (0, g.useState)("server-order"),
                l = (0, m.bG)([u0.Ay], () => u0.Ay.getFlattenedGuildIds()),
                s = (0, m.bG)([lc.A], () => lc.A.getGuilds()),
                r = l.map((e) => s[e]).filter(Boolean),
                a = v.Pw.useSetting(),
                [o, u] = (0, g.useState)(a);
            async function d(e) {
                u(e);
                try {
                    await v.Pw.updateSetting(e);
                } catch (e) {
                    u(a);
                }
            }
            (0, g.useEffect)(() => {
                u(a);
            }, [a]);
            let c = 0 !== o.length,
                [A, E] = (0, g.useState)(() => Aq[n](r, a)),
                h = A.map((e) => s[e.id]).filter(Boolean);
            return {
                guilds: "" === e ? h : h.filter((t) => t.name.toLowerCase().includes(e.toLowerCase())),
                sortOrder: n,
                searchQuery: e,
                setSortOrder: (e) => {
                    E(Aq[e](r, a)), i(e);
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
        S = (0, g.useId)(),
        T = (0, g.useRef)(null),
        x = (0, g.useMemo)(
            () => [
                { id: AZ.SERVER_ORDER, label: j.intl.string(j.t.STMPJ2), value: AZ.SERVER_ORDER },
                { id: AZ.RECENTLY_JOINED, label: j.intl.string(j.t.CbaapP), value: AZ.RECENTLY_JOINED },
                { id: AZ.ACTIVITY_SHARING_ON, label: j.intl.string(AL.default.ZI51JZ), value: AZ.ACTIVITY_SHARING_ON },
                {
                    id: AZ.ACTIVITY_SHARING_OFF,
                    label: j.intl.string(AL.default["+kxafn"]),
                    value: AZ.ACTIVITY_SHARING_OFF,
                },
            ],
            [],
        ),
        p = x.find((e) => e.value === s)?.label ?? "";
    return (0, c.jsxs)("div", {
        className: AQ.iE,
        children: [
            t,
            (0, c.jsxs)("div", {
                className: AQ.N1,
                children: [
                    (0, c.jsx)(Ae.I, {
                        query: i,
                        onChange: l,
                        onClear: function () {
                            e7.default.track(A.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_cleared",
                                sort_order: s,
                                activity_restricted_guild_count: E,
                                total_guild_count: h,
                            }),
                                l("");
                        },
                        onFocus: () =>
                            e7.default.track(A.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_focused",
                                sort_order: s,
                                activity_restricted_guild_count: E,
                                total_guild_count: h,
                            }),
                        onBlur: () =>
                            e7.default.track(A.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_blurred",
                                sort_order: s,
                                activity_restricted_guild_count: E,
                                total_guild_count: h,
                            }),
                        placeholder: j.intl.string(j.t["H+nRYw"]),
                        "aria-label": j.intl.string(j.t["5h0QOP"]),
                        inputProps: { "aria-controls": S, "aria-expanded": !0 },
                    }),
                    n.length > 0 &&
                        (0, c.jsxs)("div", {
                            className: AQ.gO,
                            children: [
                                (0, c.jsx)(rU.Y, {
                                    targetElementRef: T,
                                    position: "bottom",
                                    align: "left",
                                    renderPopout: (e) => {
                                        let { closePopout: t } = e;
                                        return (0, c.jsx)(u7.W, {
                                            navId: "guild-sort-order-menu",
                                            onClose: t,
                                            "aria-label": j.intl.string(j.t.LxVjvJ),
                                            onSelect: t,
                                            children: (0, c.jsx)(e0.rX, {
                                                children: x.map((e) => {
                                                    let { id: t, label: n, value: i } = e;
                                                    return (0, c.jsx)(
                                                        e0.iD,
                                                        {
                                                            id: t,
                                                            group: "sort-order",
                                                            label: n,
                                                            checked: s === i,
                                                            action: () => {
                                                                e7.default.track(
                                                                    A.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED,
                                                                    {
                                                                        interaction: "sort_order_changed",
                                                                        sort_order: i,
                                                                        activity_restricted_guild_count: E,
                                                                        total_guild_count: h,
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
                                        (0, c.jsxs)(t8.D, {
                                            ...e,
                                            innerRef: T,
                                            className: AQ.Ku,
                                            children: [
                                                (0, c.jsx)(z.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-subtle",
                                                    children: p,
                                                }),
                                                (0, c.jsx)(dy.a, { size: "xs", color: nK.A.colors.TEXT_SUBTLE }),
                                            ],
                                        }),
                                }),
                                (0, c.jsx)(m4.Q, {
                                    variant: "primary",
                                    textVariant: "text-sm/medium",
                                    onClick: o,
                                    text: a ? j.intl.string(j.t["7lxcLO"]) : j.intl.string(j.t.zh6UEs),
                                }),
                            ],
                        }),
                ],
            }),
            (0, c.jsx)(i8.A, {
                "aria-live": "polite",
                role: "region",
                children: j.intl.format(AL.default.EvzDff, { count: n.length }),
            }),
            (0, c.jsxs)("ul", {
                className: AQ.X1,
                id: S,
                "aria-label": j.intl.string(j.t["7hB4kg"]),
                children: [
                    0 === n.length &&
                        (0, c.jsx)("div", {
                            className: AQ.pb,
                            children: (0, c.jsx)(z.E, {
                                className: AQ.R$,
                                variant: "text-lg/medium",
                                children: j.intl.string(j.t["Xe+fJM"]),
                            }),
                        }),
                    n.map((e) =>
                        (0, c.jsx)(
                            AJ,
                            { guild: e, isActivityRestricted: d(e.id), onToggleActivityRestrictedGuild: u },
                            e.id,
                        ),
                    ),
                ],
            }),
        ],
    });
};
var A0 = n(155957);
let A1 = (0, a.E2)(o.X.ACTIVITY_PRIVACY_PER_GUILD_SETTING, {
        useSearchTerms: () => [j.intl.string(AL.default["/LHVbt"])],
        Component: function () {
            let e = v.tz.useSetting()
                ? null
                : (0, c.jsx)("div", {
                      className: A0.l,
                      children: (0, c.jsx)(iV.w, { type: "warning", children: j.intl.string(AL.default["xxI0/W"]) }),
                  });
            return (0, c.jsx)(A$, { notice: e });
        },
    }),
    A2 = (0, a.zZ)(o.X.ACTIVITY_PRIVACY_PER_GUILD_CATEGORY, {
        useTitle: () => j.intl.string(j.t.bwqjL9),
        buildLayout: () => [AB, A1, AV],
    }),
    A3 = (0, a.zD)(o.X.ACTIVITY_PRIVACY_FRIENDS_JOIN_SETTING, {
        useTitle: () => j.intl.string(AL.default.khuuzv),
        useSubtitle: () => j.intl.string(AL.default["8EWsJ8"]),
        useValue: () => v.e.useSetting(),
        setValue: (e) => v.e.updateSetting(e),
    }),
    A5 = (0, a.E2)(o.X.ACTIVITY_PRIVACY_GAME_JOINING_BLURB, {
        useSearchTerms: () => [],
        Component: function () {
            return (0, c.jsx)(z.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: j.intl.format(j.t.Mf0720, {
                    privacySettingsHook: (e, t) =>
                        (0, c.jsx)(
                            z.E,
                            { tag: "span", variant: "text-sm/semibold", color: "text-muted", children: e },
                            t,
                        ),
                }),
            });
        },
    }),
    A6 = (0, a.zD)(o.X.ACTIVITY_PRIVACY_VOICE_JOIN_SETTING, {
        useTitle: () => j.intl.string(AL.default.Uz5Ipi),
        useSubtitle: () => j.intl.string(AL.default.CZI2Gb),
        useValue: () => v.UM.useSetting(),
        setValue: (e) => v.UM.updateSetting(e),
    }),
    A4 = (0, a.zZ)(o.X.ACTIVITY_PRIVACY_GAME_JOINING_CATEGORY, {
        useTitle: () => j.intl.string(AL.default["89YBr5"]),
        useSubtitle: () => j.intl.string(j.t.uGDpgH),
        buildLayout: () => [A3, A6, A5],
        useSearchTerms: () => [j.intl.string(j.t.VOszPA)],
    }),
    A8 = (0, a.t_)(o.X.ACTIVITY_PRIVACY_PANEL, {
        useTitle: () => j.intl.string(j.t.Cq98yL),
        buildLayout: () => [AG, A2, A4],
    }),
    A7 = (0, a.i4)(o.X.ACTIVITY_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.Cq98yL),
        icon: Ap._,
        buildLayout: () => [A8],
    });
var A9 = n(712440),
    Ee = n(370997);
let Et = (0, a.E2)(o.X.AUTHORIZED_APPS_LIST_SETTING, {
    Component: Ee.Ay,
    useSearchTerms: () => [j.intl.string(j.t["f6kk+r"])],
});
var En = n(462887),
    Ei = n(478016),
    El = n(789645),
    Es = n(259678),
    Er = n(77468),
    Ea = n(289498),
    Eo = n(573648),
    Eu = n(874490),
    Ed = n(370480),
    Ec = n(968309);
let Eg = new Set([A.fg2.XBOX, A.fg2.PLAYSTATION, A.fg2.PLAYSTATION_STAGING, A.fg2.CRUNCHYROLL]);
var Em = n(169869),
    EA = n(235693),
    EE = n(757036),
    Eh = n(555837),
    ES = n(814925),
    ET = n(733110),
    Ex = n(43990),
    Ep = n(241524),
    Ef = n(346017),
    E_ = n(51965),
    EN = n(631368),
    EI = n(968671),
    EC = n(212739),
    Eb = n(30370),
    Ey = n(933287),
    Ev = n(594387),
    Ej = n(651439);
function EO() {
    let e,
        t,
        i,
        l,
        s,
        { variant: r, showFooter: a } =
            ((e = (0, EN.$)()),
            (t = (0, EI.GM)("connectedAccountsBannerFooter")),
            (i = (0, EC.O)()),
            (s = null != (l = (0, m.bG)([Eb.A], () => Eb.A.getAccount(null, A.fg2.XBOX))) && !l.revoked),
            e === EN.C.NONE || i
                ? { variant: EN.C.NONE, showFooter: !1 }
                : { variant: e, showFooter: t && e === EN.C.NO_ACCESS && !s }),
        { analyticsLocations: o } = (0, eL.Ay)(tv.A.XBOX_CONNECTED_ACCOUNTS_BANNER),
        u = (0, Ef.yW)(o),
        d = (0, Ep.A)("(max-width: 485px)");
    if (r === EN.C.NONE) return null;
    let g = d ? "md" : "sm",
        E = "",
        S = null;
    switch (r) {
        case EN.C.HAS_ACCESS:
        case EN.C.BLOCK_CLAIM:
            (E = j.intl.string(Ey.default["7PdsMK"])),
                (S = (0, c.jsx)(E_.A, {
                    variant: "overlay-primary",
                    size: g,
                    fullWidth: d,
                    text: j.intl.string(Ey.default.CubeLC),
                    onClick: () => {
                        (0, ln.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([n.e("52283"), n.e("13088")]).then(
                                n.bind(n, 347171),
                            );
                            return (t) => (0, c.jsx)(e, { ...t, sourceAnalyticsLocations: o });
                        });
                    },
                }));
            break;
        case EN.C.NO_ACCESS:
            (E = j.intl.string(Ey.default.NwkRTZ)),
                (S = (0, c.jsx)(tR.A, {
                    defaultTextOverride: j.intl.string(Ey.default["0vY+ie"]),
                    variantOverride: "overlay-primary",
                    size: g,
                    fullWidth: d,
                    subscriptionTier: tk.pe.TIER_2,
                }));
            break;
        default:
            (0, n8.xb)(r);
    }
    return (0, c.jsxs)(eL.f5, {
        value: o,
        children: [
            (0, c.jsxs)("div", {
                className: Ej.bV,
                children: [
                    (0, c.jsx)(h.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: j.intl.string(j.t.NG1e6l),
                    }),
                    (0, c.jsx)(rv.t, { size: "xs", color: "var(--icon-default)" }),
                ],
            }),
            (0, c.jsx)(Ex.N, {
                theme: "dark",
                children: (e) =>
                    (0, c.jsx)("div", {
                        className: e,
                        children: (0, c.jsxs)("div", {
                            className: Ej.Nr,
                            children: [
                                (0, c.jsxs)("div", {
                                    className: Ej.Tp,
                                    children: [
                                        (0, c.jsx)("div", {
                                            className: Ej.Qw,
                                            style: {
                                                backgroundImage: `url(${a ? "https://cdn.discordapp.com/assets/content/1858990b1e56c7d51e887008753104d4663d06c0e0e296d8fe0ea85c7e3e8341.png" : "https://cdn.discordapp.com/assets/content/7308e937fbd3074b9de0ebba1fa3571fa7b10a2b88f384b382f711bae99f40e6.png"})`,
                                            },
                                        }),
                                        (0, c.jsx)("div", { className: Ej.$h }),
                                        (0, c.jsx)("div", { className: Ej.Rv }),
                                        (0, c.jsx)("div", { className: Ej.Lw }),
                                    ],
                                }),
                                (0, c.jsxs)("div", {
                                    className: Ej.Mn,
                                    children: [
                                        (0, c.jsxs)("div", {
                                            className: Ej.mY,
                                            children: [
                                                (0, c.jsx)("img", {
                                                    className: Ej.wm,
                                                    src: "https://cdn.discordapp.com/assets/content/c5fab2b5d1155c4c9bc088b07f8563b6db8d2d08666357486efc5aea6e97fbea.png",
                                                    alt: "Xbox Game Pass",
                                                }),
                                                (0, c.jsx)(z.E, {
                                                    variant: "text-lg/semibold",
                                                    color: "text-strong",
                                                    className: Ej.DD,
                                                    children: E,
                                                }),
                                            ],
                                        }),
                                        (0, c.jsx)("div", { className: Ej.lO, children: S }),
                                    ],
                                }),
                                a &&
                                    (0, c.jsxs)(c.Fragment, {
                                        children: [
                                            (0, c.jsx)("div", { className: Ej.yF }),
                                            (0, c.jsxs)("div", {
                                                className: Ej.sQ,
                                                children: [
                                                    (0, c.jsx)(oy.o, {
                                                        size: d ? "md" : "sm",
                                                        color: nK.A.colors.ICON_STRONG,
                                                    }),
                                                    (0, c.jsx)(z.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-default",
                                                        children: j.intl.format(Ev.default.mXY4Rb, {
                                                            onConnect: () => {
                                                                u(Ef.Hx.CONNECT),
                                                                    (0, Ec.A)({
                                                                        platformType: A.fg2.XBOX,
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
var EL = n(201718),
    ED = n(321078),
    ER = n(672130),
    EP = n(358776),
    EG = n(379848),
    EM = n(567910);
function EU(e) {
    let { markAsDismissed: t } = e;
    return (
        g.useEffect(() => t(cn.i.UNKNOWN), [t]),
        (0, c.jsx)(e9.Lp, { className: EM.Ad, text: j.intl.string(j.t.y2b7CA) })
    );
}
function EV(e) {
    let { title: t, body: n, img: i, newIndicatorDismissibleContent: l, onClick: s } = e;
    return (0, c.jsxs)("div", {
        className: EM.kL,
        children: [
            i,
            (0, c.jsxs)("div", {
                className: EM.FS,
                children: [
                    (0, c.jsxs)("div", {
                        className: EM.TK,
                        children: [
                            (0, c.jsx)(EG.Ay, {
                                contentTypes: [l],
                                children: (e) => {
                                    let { visibleContent: t, markAsDismissed: n } = e;
                                    return t === l ? (0, c.jsx)(EU, { markAsDismissed: n }) : null;
                                },
                            }),
                            (0, c.jsx)(z.E, { variant: "text-md/semibold", children: t }),
                        ],
                    }),
                    (0, c.jsx)(z.E, { variant: "text-xs/normal", children: n }),
                ],
            }),
            (0, c.jsx)(p.$, { text: j.intl.string(j.t.vD60Pv), onClick: s }),
        ],
    });
}
function Ek() {
    let e = eS.A.getArticleURL(A.MVz.PS_CONNECTION);
    return (0, c.jsx)(EV, {
        title: j.intl.string(j.t.v20wwm),
        body: j.intl.format(j.t.lTZBit, { help_article: e }),
        img: (0, c.jsx)("img", { src: "/assets/88954903b6a5b9cc.svg", width: "82", height: "auto", alt: "" }),
        newIndicatorDismissibleContent: er.M.PS_ONE_WAY_RECONNECT,
        onClick: () => (0, Ec.A)({ platformType: A.fg2.PLAYSTATION, location: "PS two way upsell" }),
    });
}
let Ew = "/assets/9df988a227916145.png";
function EF() {
    return (0, c.jsx)(EV, {
        title: j.intl.string(Ev.default["9cLtDI"]),
        body: j.intl.format(Ev.default["D+kUbg"], { learnMoreLink: eS.A.getArticleURL(A.MVz.XBOX_GAME_PASS_PERKS) }),
        img: (0, c.jsx)("img", { src: Ew, width: "auto", height: "45", alt: "" }),
        newIndicatorDismissibleContent: er.M.XBOX_PERKS_RECONNECT_UPSELL,
        onClick: () => (0, Ec.A)({ platformType: A.fg2.XBOX, location: "Xbox perks reconnect upsell" }),
    });
}
function EB() {
    let e = eS.A.getArticleURL(A.MVz.XBOX_CONNECTION);
    return (0, c.jsx)(EV, {
        title: j.intl.string(j.t["2okkZV"]),
        body: j.intl.format(j.t.OnERSS, { help_article: e }),
        img: (0, c.jsx)("img", { src: Ew, width: "auto", height: "45", alt: "" }),
        newIndicatorDismissibleContent: er.M.XBOX_ONE_WAY_RECONNECT,
        onClick: () => (0, Ec.A)({ platformType: A.fg2.XBOX, location: "Xbox two way upsell" }),
    });
}
var Ez = n(783419),
    EX = n(360308),
    EY = n(230451),
    EH = n(113463);
function EK(e) {
    let t,
        { integration: n } = e,
        {
            isJoining: i,
            joinErrorMessage: l,
            showJoinErrorMessage: s,
        } = (0, m.cf)(
            [Eb.A],
            () => ({
                isJoining: Eb.A.isJoining(n.id),
                joinErrorMessage:
                    "" === Eb.A.joinErrorMessage(n.id) ? j.intl.string(j.t.j2d6Km) : Eb.A.joinErrorMessage(n.id),
                showJoinErrorMessage: void 0 !== Eb.A.joinErrorMessage(n.id),
            }),
            [n.id],
        );
    return (
        null != (0, m.bG)([lc.A], () => lc.A.getGuild(n.guild.id), [n.guild.id]) ||
            (t = (0, c.jsx)(p.$, {
                size: "sm",
                onClick: function () {
                    Er.A.joinServer(n.id, () => {});
                },
                disabled: i,
                variant: "primary",
                text: i ? j.intl.string(j.t.RXvQQu) : j.intl.string(j.t.XpeFYr),
            })),
        (0, c.jsxs)("div", {
            className: EH.iA,
            children: [
                (0, c.jsxs)("div", {
                    className: EH.XX,
                    children: [
                        (0, c.jsx)(dn.Ay, { size: dn.Ay.Sizes.SMALL, guild: n.guild, className: EH.$f }),
                        (0, c.jsxs)("div", {
                            className: EH.Vn,
                            children: [
                                (0, c.jsx)(z.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: n.guild.name,
                                }),
                                (0, c.jsx)(aI.Anchor, {
                                    href: Eo.A.get(n.type)?.getPlatformUserUrl?.(n.account),
                                    children: (0, c.jsx)(z.E, {
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
                    (0, c.jsx)(z.E, {
                        variant: "text-xs/normal",
                        color: "text-feedback-critical",
                        className: EH.R,
                        children: l,
                    }),
            ],
        })
    );
}
function EW(e) {
    var t;
    let n,
        i,
        { account: l } = e,
        s =
            ((t = l.id),
            (n = (0, Eh.G)({ location: "useShouldShowXboxPerksReconnectUpsell" })),
            (i = (0, EE.L)(tk.PremiumTypes.TIER_2)),
            !n && !i && !/^\d+$/.test(t));
    return l.type === A.fg2.XBOX && s
        ? (0, c.jsx)(EF, {})
        : l.twoWayLink
          ? null
          : l.type === A.fg2.XBOX
            ? (0, c.jsx)(EB, {})
            : l.type === A.fg2.PLAYSTATION
              ? (0, c.jsx)(Ek, {})
              : null;
}
function EZ(e) {
    let t,
        n,
        i,
        l,
        s,
        r,
        a,
        { onDisconnect: o, account: u, theme: d, locale: m } = e,
        [E, h] = g.useState(u.friendSync),
        [S, T] = g.useState(u.visibility),
        [x, f] = g.useState(u.metadataVisibility),
        [_, N] = g.useState(u.showActivity),
        [I, C] = g.useState(null),
        [b, y] = g.useState(null),
        [v, O] = g.useState(!1),
        [L, D] = g.useState([]),
        R = (0, Eu.ML)(u.type),
        P = Eo.A.get(R);
    g.useEffect(() => {
        h(u.friendSync), T(u.visibility), f(u.metadataVisibility), N(u.showActivity);
    }, [u]);
    let G = { inProgressVisibility: I, inProgressMetadataVisibility: b },
        M = g.useRef(G);
    return (
        g.useEffect(() => {
            M.current = G;
        }),
        g.useEffect(() => {
            if (!1 === u.verified) return;
            let { inProgressVisibility: e, inProgressMetadataVisibility: t } = M.current;
            null != e && (T(e), Er.A.setVisibility(u.type, u.id, e), C(null)),
                null != t && (f(t), Er.A.setMetadataVisibility(u.type, u.id, t), y(null));
        }, [u]),
        (0, c.jsxs)("div", {
            className: EH.FI,
            children: [
                ((t = Eo.A.get(u.type)),
                (n = Eo.A.get(R)),
                (i = "1" === (u.metadata ?? {})[Ez.pK.TWITTER_VERIFIED]),
                (l = null),
                t.type === A.fg2.TWITTER &&
                    i &&
                    (l = (0, c.jsx)(i4.m, {
                        text: j.intl.string(j.t.Jebrww),
                        children: (0, c.jsx)(ES.A, {
                            color: nK.A.unsafe_rawColors.PLATFORM_TWITTER.css,
                            children: (0, c.jsx)(Ei.U, { size: "xs", color: nK.A.unsafe_rawColors.WHITE.css }),
                        }),
                    })),
                (0, c.jsxs)("div", {
                    className: EH.Il,
                    children: [
                        (0, c.jsx)("img", {
                            alt: n.name,
                            className: EH.gj,
                            src: (0, En.M)(d) ? n.icon.darkSVG : n.icon.lightSVG,
                        }),
                        (0, c.jsxs)("div", {
                            children: [
                                (0, c.jsxs)("div", {
                                    className: EH.$p,
                                    children: [
                                        (0, c.jsx)(z.E, {
                                            color: "text-strong",
                                            variant: "text-md/semibold",
                                            className: EH.RW,
                                            children: u.name,
                                        }),
                                        null != l && (0, c.jsx)("div", { className: EH.cG, children: l }),
                                    ],
                                }),
                                (0, c.jsx)(z.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    className: EH.Au,
                                    children: n.migrationData?.getMigrationExperimentEnabled(
                                        "User Settings Connections Web",
                                    )
                                        ? j.intl.format(EY.default.Glhokn, { platformName: n.name })
                                        : n.name,
                                }),
                            ],
                        }),
                        (0, c.jsx)(t8.D, {
                            className: EH.uH,
                            onClick: function () {
                                let e = Eo.A.get(u.type);
                                (0, ln.openModal)((t) =>
                                    (0, c.jsx)(lt.Modal, {
                                        title: j.intl.formatToPlainString(j.t.U5x12f, { name: e.name }),
                                        subtitle: j.intl.format(j.t.VgqIPj, { provider: e.name }),
                                        actions: [
                                            {
                                                text: j.intl.string(j.t["ETE/oC"]),
                                                onClick: t.onClose,
                                                variant: "secondary",
                                            },
                                            {
                                                text: j.intl.string(j.t.bsbMVz),
                                                onClick: () => {
                                                    o(), t.onClose();
                                                },
                                                variant: "primary",
                                            },
                                        ],
                                        ...t,
                                        children:
                                            Eg.has(u.type) &&
                                            u.twoWayLink &&
                                            (0, c.jsx)(lB.A, {
                                                children: j.intl.format(j.t.COW3Xn, { platformName: e.name }),
                                            }),
                                    }),
                                );
                            },
                            "aria-label": j.intl.string(j.t.ppppRJ),
                            focusProps: { offset: { top: -4, left: -4, right: -4 } },
                            children: (0, c.jsx)(El.P, { size: "xs", color: "currentColor" }),
                        }),
                    ],
                })),
                (0, c.jsx)(EW, { account: u }),
                (function (e) {
                    let t = e.metadata ?? {},
                        n = null,
                        i = (0, Ed.An)(t[Ez.pK.CREATED_AT], m);
                    switch (e.type) {
                        case A.fg2.REDDIT:
                            n = (0, Em.xE)(t, EH.Nz);
                            break;
                        case A.fg2.STEAM:
                            n = (0, Em.dy)(t, EH.Nz);
                            break;
                        case A.fg2.BLUESKY:
                        case A.fg2.TWITTER:
                        case A.fg2.MASTODON:
                            n = (0, Em.ED)(t, EH.Nz);
                            break;
                        case A.fg2.EBAY:
                            n = (0, Em.ub)(t, EH.Nz);
                            break;
                        case A.fg2.PAYPAL:
                            n = (0, Em.gZ)(t, EH.Nz);
                            break;
                        case A.fg2.TIKTOK:
                            n = (0, Em.HU)(t, EH.Nz);
                    }
                    null !== i &&
                        (null == n && (n = []),
                        n?.push(
                            (0, c.jsx)(
                                z.E,
                                {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    className: EH.M4,
                                    children: j.intl.format(j.t["9rfonh"], { date: i }),
                                },
                                "member-since",
                            ),
                        ));
                    let l = L.includes(e.id),
                        s = j.intl.string(j.t.wzzjk9);
                    if (null == n || 0 === n.length)
                        if (!0 !== Eo.A.get(e.type).hasMetadata) return null;
                        else
                            (n = [
                                (0, c.jsx)(e9.Lp, { className: EH.Z3, text: j.intl.string(j.t.y2b7CA) }, "badge"),
                                (0, c.jsx)(
                                    z.E,
                                    {
                                        variant: "text-xs/normal",
                                        className: EH.vt,
                                        children: j.intl.format(j.t.Up2ni7, {
                                            helpdeskUrl: eS.A.getArticleURL(A.MVz.CONNECTION_DETAILS),
                                        }),
                                    },
                                    "label",
                                ),
                            ]),
                                (s = j.intl.string(j.t["LVh3/5"]));
                    return (
                        l && (s = j.intl.string(j.t.i4jeWR)),
                        n.push(
                            (0, c.jsx)(
                                "div",
                                {
                                    className: EH.jy,
                                    children: (0, c.jsx)(p.$, {
                                        text: s,
                                        variant: "secondary",
                                        size: "sm",
                                        loading: v,
                                        disabled: l,
                                        "aria-label": j.intl.string(j.t.sCkLYH),
                                        onClick: l
                                            ? void 0
                                            : () => {
                                                  O(!0),
                                                      Er.A.refresh(e.type, e.id).finally(() => {
                                                          setTimeout(() => {
                                                              L.push(e.id), D(L), O(!1);
                                                          }, 2e3);
                                                      });
                                              },
                                    }),
                                },
                                "refresh-button",
                            ),
                        ),
                        (0, c.jsx)("div", { className: EH.tJ, children: n })
                    );
                })(u),
                (A.txh.has(u.type) &&
                    (s = (0, c.jsx)(tK.d, {
                        label: j.intl.string(j.t["+KCMSi"]),
                        checked: E,
                        onChange: function (e) {
                            h(e), Er.A.setFriendSync(u.type, u.id, e);
                        },
                    })),
                A.ewM.has(u.type) &&
                    (r = (0, c.jsx)(tK.d, {
                        label: j.intl.format(j.t["6u6J0q"], { platform: P.name }),
                        checked: _,
                        onChange: function (e) {
                            N(e), Er.A.setShowActivity(u.type, u.id, e);
                        },
                    })),
                Eo.A.get(u.type)?.hasMetadata === !0 &&
                    (a = (0, c.jsx)(tK.d, {
                        label: j.intl.string(j.t.FYKGsL),
                        checked: 1 === x,
                        onChange: function (e) {
                            let { verified: t } = u,
                                n = +!!e;
                            if (e && !t) {
                                y(n), (0, Ec.A)({ platformType: u.type, location: "User Settings" });
                                return;
                            }
                            f(n), Er.A.setMetadataVisibility(u.type, u.id, n);
                        },
                        disabled: 1 !== S || null == u.metadata,
                    })),
                (0, c.jsxs)("div", {
                    className: EH.HZ,
                    children: [
                        (0, c.jsx)(tK.d, {
                            label: j.intl.string(j.t.f7yOAX),
                            checked: 1 === S,
                            onChange: function (e) {
                                let { verified: t } = u,
                                    n = +!!e;
                                if (e && !t) {
                                    C(n), (0, Ec.A)({ platformType: u.type, location: "User Settings" });
                                    return;
                                }
                                T(n), Er.A.setVisibility(u.type, u.id, n);
                            },
                        }),
                        a,
                        r,
                        s,
                    ],
                })),
                (function () {
                    if (u.revoked || u.integrations.length > 0) return (0, c.jsx)(i2.c, {});
                })(),
                u.revoked
                    ? (0, c.jsx)(rj.p, {
                          messageType: rj.Y.INFO,
                          children: j.intl.format(j.t["6C4lgA"], {
                              onReconnect: function () {
                                  (0, Ec.A)({ platformType: u.type, location: "User Settings" });
                              },
                          }),
                      })
                    : u.integrations.length > 0
                      ? (0, c.jsx)(tH.D, {
                            label: j.intl.string(j.t.fOe3fZ),
                            children: u.integrations.map((e) => (0, c.jsx)(EK, { integration: e }, e.id)),
                        })
                      : void 0,
                (0, c.jsx)(EA.A, { partner: u.type }),
            ],
        })
    );
}
function Eq(e) {
    let { appIdentity: t, oauth2Token: n } = e;
    return null == n
        ? null
        : (0, c.jsxs)("div", {
              className: EH.FI,
              children: [
                  (function (e, t) {
                      let { application: n } = t,
                          i = y.Ay.getApplicationIconURL({ id: n.id, icon: n.icon });
                      return (0, c.jsxs)("div", {
                          className: EH.Il,
                          children: [
                              (0, c.jsx)("img", { alt: n.name, className: ie()(EH.gj, EH.sN), src: i }),
                              (0, c.jsxs)("div", {
                                  children: [
                                      (0, c.jsx)("div", {
                                          className: EH.$p,
                                          children: (0, c.jsx)(z.E, {
                                              color: "text-strong",
                                              variant: "text-md/semibold",
                                              className: EH.RW,
                                              children: e.profile.username,
                                          }),
                                      }),
                                      (0, c.jsx)(z.E, {
                                          variant: "text-xs/normal",
                                          color: "text-strong",
                                          className: EH.Au,
                                          children: n.name,
                                      }),
                                  ],
                              }),
                              (0, c.jsx)(t8.D, {
                                  className: EH.uH,
                                  onClick: () =>
                                      (0, Ee.d1)(n, t.scopes, () => {
                                          A9.A.delete(t.id);
                                      }),
                                  "aria-label": j.intl.string(j.t.ppppRJ),
                                  focusProps: { offset: { top: -4, left: -4, right: -4 } },
                                  children: (0, c.jsx)(El.P, { size: "xs", color: "currentColor" }),
                              }),
                          ],
                      });
                  })(t, n),
                  (0, c.jsx)("div", {
                      className: EH.HZ,
                      children: (0, c.jsx)(tK.d, {
                          label: j.intl.string(j.t.f7yOAX),
                          checked: t.profile?.connection_visible ?? !1,
                          onChange: (e) => {
                              EL.A.updateApplicationIdentityConfig(n.application.id, t.provider_issued_user_id, {
                                  connection_visible: e,
                              });
                          },
                      }),
                  }),
              ],
          });
}
function EQ(e) {
    let t = Eo.A.get(e);
    (0, Ec.A)({ platformType: t.type }),
        e7.default.track(A.HAw.ACCOUNT_LINK_STEP, {
            previous_step: "desktop connections",
            current_step: "desktop oauth",
            platform_type: t.type,
        });
}
function EJ() {
    let e = (0, Eu.gn)(),
        t = (0, iX.A)((0, EX.getMigratedApplicationIdentityConnectionsScreenApplications)("NewConnectionsList"));
    return (0, c.jsxs)("div", {
        className: EH.lA,
        children: [
            t.map(
                (e) =>
                    null != e &&
                    (0, c.jsx)(
                        ER.A,
                        { application: e, className: EH.__invalid_accountButton, innerClassName: EH.U$ },
                        e.id,
                    ),
            ),
            e
                .slice(0, 10 - t.length)
                .map((e) =>
                    (0, c.jsx)(
                        Ea.A,
                        { type: e.type, className: EH.__invalid_accountButton, innerClassName: EH.U$ },
                        e.type,
                    ),
                ),
            (0, c.jsx)(i4.m, {
                text: j.intl.string(j.t.QqTz8b),
                children: (0, c.jsx)("div", {
                    className: ie()(EH.ej, EH.__invalid_accountButton),
                    children: (0, c.jsx)(Es.vN, {
                        children: (0, c.jsx)("button", {
                            className: ie()(EH.R8, EH.U$),
                            type: "button",
                            onClick: function () {
                                e2.h.dispatch({ type: "CONNECTIONS_GRID_MODAL_SHOW", onComplete: EQ });
                            },
                            "aria-label": j.intl.string(j.t.Zhcj9X),
                            children: (0, c.jsx)(nQ._, {
                                color: "currentColor",
                                size: "md",
                                "aria-label": j.intl.string(j.t.QqTz8b),
                            }),
                        }),
                    }),
                }),
            }),
        ],
    });
}
function E$(e) {
    let t,
        { fetching: n, accounts: i, appIdentities: l, authorizedApps: s, theme: r, locale: a } = e,
        o = (0, EP.SV)("ConnectionsList"),
        u = g.useMemo(() => i.filter((e) => Eo.A.isSupported(e.type)), [i]);
    return (
        (t = n
            ? (0, c.jsx)(aV.y, { type: aV.y.Type.SPINNING_CIRCLE })
            : 0 === u.length && 0 === l.length
              ? (0, c.jsx)(mc.pp, {
                    theme: r,
                    className: o ? EH.p$ : void 0,
                    children: (0, c.jsx)(mc.SG, {
                        note: j.intl.string(j.t.WenGZ2),
                        children: j.intl.string(j.t.aoLS84),
                    }),
                })
              : (0, c.jsxs)(c.Fragment, {
                    children: [
                        o &&
                            (0, c.jsx)(h.D, {
                                variant: "heading-md/semibold",
                                color: "text-strong",
                                children: j.intl.format(j.t.AioIGb, { count: l.length + u.length }),
                            }),
                        l.map((e, t) =>
                            (0, c.jsx)(
                                Eq,
                                { appIdentity: e, oauth2Token: s.find((t) => t.application.id === e.application_id) },
                                `app-${t}`,
                            ),
                        ),
                        u.map((e, t) =>
                            (0, c.jsx)(
                                EZ,
                                {
                                    theme: r,
                                    account: e,
                                    locale: a,
                                    onDisconnect: () =>
                                        (function (e) {
                                            let { type: t, id: n } = e;
                                            Er.A.disconnect(t, n);
                                        })(e),
                                },
                                `connection-${t}`,
                            ),
                        ),
                    ],
                })),
        (0, c.jsx)("div", { className: EH.V, children: t })
    );
}
let E0 = (0, a.E2)(o.X.CONNECTIONS_ADD_CONNECTIONS_SETTING, {
        Component: function () {
            let e = (0, EP.SV)("NewConnectSection");
            return (0, c.jsx)(tH.D, {
                label: j.intl.string(e ? j.t["t+aGse"] : j.t.ZeDrUf),
                description: e ? void 0 : j.intl.format(j.t["oYc+Gz"], { privacyPolicyUrl: A.X7G.PRIVACY }),
                children: (0, c.jsx)(EJ, {}),
            });
        },
        useSearchTerms: () => [
            j.intl.string(j.t.ZeDrUf),
            j.intl.string(j.t.Zhcj9X),
            j.intl.string(j.t.QqTz8b),
            j.intl.string(j.t["+/hZM/"]),
            j.intl.string(j.t.bsbMVz),
            j.intl.string(j.t.f7yOAX),
            j.intl.string(j.t.FYKGsL),
            j.intl.string(j.t["+KCMSi"]),
        ],
    }),
    E1 = (0, a.E2)(o.X.CONNECTIONS_CONNECTED_ACCOUNTS_SETTING, {
        Component: function () {
            let e = (0, m.bG)([e8.A], () => e8.A.hidePersonalInformation),
                t = (0, m.bG)([Eb.A], () => Eb.A.isFetching()),
                n = (0, m.bG)([Eb.A], () => Eb.A.getAccounts()),
                { authorizedAppsFetchState: i, authorizedApps: l } = (0, m.cf)([ET.default], () => ({
                    authorizedAppsFetchState: ET.default.getFetchState(),
                    authorizedApps: ET.default.getNewestTokensForNonChildrenApplications(),
                })),
                { isLoading: s, filteredAppIdentities: r } = (0, ED.A)(l0.default.getCurrentUser().id, {
                    includeHidden: !0,
                }),
                a = (0, uc.Ay)(),
                o = (0, m.bG)([oE.default], () => oE.default.locale);
            return (g.useEffect(() => {
                i === ET.FetchState.NOT_FETCHED && A9.A.fetch();
            }, [i]),
            e)
                ? null
                : (0, c.jsxs)(c.Fragment, {
                      children: [
                          (0, c.jsx)(EO, {}),
                          (0, c.jsx)(E$, {
                              fetching: t || s || (r.length > 0 && i !== ET.FetchState.FETCHED),
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
            Er.A.fetch();
        },
        useSearchTerms: () => [
            j.intl.string(j.t["+/hZM/"]),
            j.intl.string(j.t.bsbMVz),
            j.intl.string(j.t.f7yOAX),
            j.intl.string(j.t.FYKGsL),
            j.intl.string(j.t["+KCMSi"]),
        ],
    });
var E2 = n(206828);
let E3 = (0, a.zZ)(o.X.CONNECTIONS_CATEGORY, {
        useTitle: () => j.intl.string(j.t["3fe7U5"]),
        useSubtitle: () => j.intl.string(j.t.U22vw6),
        useInlineNotice: function () {
            let e = (0, m.bG)([Eb.A], () => Eb.A.getAccounts()),
                t = g.useMemo(
                    () =>
                        Eo.A.filter(
                            (e) =>
                                e.migrationData?.getMigrationExperimentEnabled("ConnectionDeprecationInlineNotice") ===
                                !0,
                        ).filter((t) => e.some((e) => e.type === t.type)),
                    [e],
                ),
                [n, i] = g.useState(0),
                [l, s] = g.useState(t),
                r = t !== l;
            r && (s(t), i(0));
            let a = g.useMemo(() => t[n], [t, n]),
                o = (0, iX.h)(a?.migrationData?.replacedBy),
                { canStartAuthorization: u, hasAlreadyLinked: c, fetched: E } = (0, E2.RD)(o),
                h =
                    a?.type === A.fg2.RIOT_GAMES || a?.type === A.fg2.LEAGUE_OF_LEGENDS
                        ? j.intl.string(EY.default["1S6oAo"])
                        : o?.name,
                S = null != a && E,
                T = S && !c && u && o?.connectionEntrypointUrl != null;
            return (
                r || !S || T || i((e) => e + 1),
                g.useMemo(
                    () =>
                        T
                            ? {
                                  type: d.lT.INLINE_NOTICE,
                                  noticeType: "info",
                                  text: j.intl.format(EY.default.wUXupS, {
                                      connectionName: a.name,
                                      applicationName: h,
                                      connectionEntrypointUrl: o?.connectionEntrypointUrl,
                                      helpCenterLink:
                                          a.migrationData?.helpCenterLink != null ? a.migrationData.helpCenterLink : "",
                                  }),
                              }
                            : null,
                    [a, h, o, T],
                )
            );
        },
        buildLayout: () => [E0, E1],
    }),
    E5 = (0, a.zZ)(o.X.AUTHORIZED_APPS_CATEGORY, {
        useTitle: () => j.intl.string(j.t["f6kk+r"]),
        useSubtitle: () => j.intl.string(j.t.G9JfLg),
        buildLayout: () => [Et],
        initialize: () => (
            A9.A.fetch(),
            () => {
                Ee.iU.setState({ searchQuery: "" });
            }
        ),
    }),
    E6 = (0, a.t_)(o.X.CONNECTED_APPS_PANEL, {
        useTitle: () => j.intl.string(j.t.lrVuZO),
        useObscuredNotice: aM.L,
        buildLayout: () => [E3, E5],
    }),
    E4 = (0, a.i4)(o.X.CONNECTED_APPS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.lrVuZO),
        icon: mg.q,
        buildLayout: () => [E6],
    });
var E8 = n(625657),
    E7 = n(592598),
    E9 = n(773371),
    he = n(184809),
    ht = n(672396);
let hn = hl(null);
function hi() {
    var e;
    let t = hl(hn);
    (e = hn),
        k().isEqual(k().omit(t, "old_enabled"), k().omit(e, "old_enabled")) ||
            (e7.default.track(A.HAw.OVERLAY_SETTINGS_UPDATED, { ...t }), (hn = t));
}
function hl(e) {
    let t = he.default.getNotificationPositionMode(),
        n = t !== A.G6Q.DISABLED,
        i = lL.Ay.getOverlayKeybind(),
        l = lL.Ay.getOverlayChatKeybind();
    return {
        enabled: E9.default.enabled,
        notifications_enabled: n,
        notifications_position: n ? t : null,
        text_notifications_mode: E7.A.isNotificationDisabled(ht.KS.TextChat) ? "DISABLED" : "ENABLED",
        hotkey: null != i ? (0, le.dI)(i.shortcut) : null,
        text_activation_hotkey: null != l ? (0, le.dI)(l.shortcut) : null,
        text_opacity_slider: he.default.getTextWidgetOpacity(),
        old_enabled: e?.enabled ?? E9.default.enabled,
    };
}
var hs = n(237984),
    hr = n(295648);
function ha(e) {
    e.preventDefault(), e.stopPropagation();
}
function ho(e) {
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
    return (0, c.jsxs)("div", {
        className: ie()(hr.HS, d),
        children: [
            (0, c.jsxs)(At.s, {
                "aria-label": u,
                onClick: o,
                children: [
                    null != t && (0, c.jsx)("div", { className: hr.x_, children: t }),
                    (0, c.jsxs)("div", {
                        className: hr.rN,
                        children: [
                            null != n && (0, c.jsx)("div", { className: hr.$t, children: n }),
                            (0, c.jsxs)("div", {
                                className: hr.c8,
                                children: [
                                    (0, c.jsx)(z.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        className: hr.SZ,
                                        children: i,
                                    }),
                                    null != l &&
                                        (0, c.jsx)(z.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            children: l,
                                        }),
                                    null != r &&
                                        (0, c.jsx)(z.E, {
                                            variant: "text-xxs/medium",
                                            color: "text-muted",
                                            children: r,
                                        }),
                                ],
                            }),
                            (0, c.jsx)("div", { className: hr.a$, children: s }),
                        ],
                    }),
                ],
            }),
            (0, c.jsx)("div", { className: hr.Om, children: a }),
        ],
    });
}
let hu = (0, a.E2)(o.X.OVERLAY_BUG_REPORTER_SETTING, {
    Component: function () {
        return (0, c.jsx)(ho, {
            title: j.intl.string(j.t["z4/l+V"]),
            description: j.intl.string(j.t["3aZq/0"]),
            action: (0, c.jsx)(p.$, {
                variant: "primary",
                text: j.intl.string(j.t.s2nVhG),
                onClick: () => {
                    (0, hs.b)(tv.A.USER_SETTINGS, A.BRT.APP);
                },
            }),
            "aria-label": j.intl.string(j.t["z4/l+V"]),
        });
    },
    useSearchTerms: () => [j.intl.string(j.t["z4/l+V"])],
});
var hd = n(31300),
    hc = n(780907),
    hg = n(684013),
    hm = n(56562),
    hA = n(311043),
    hE = n(569926),
    hh = n(810412),
    hS = n(41984),
    hT = n(296027),
    hx = n(562519);
let hp = 5 * n(927813).A.Millis.DAY,
    hf = new hx.A("overlay_survey_timestamps");
function h_(e, t) {
    let i, l;
    (i = Date.now()),
        (null != (l = Array.from(hf.values()).reduce((e, t) => Math.max(e, t), 0)) && i - l < hp) ||
            Array.from(hf.values()).filter((e) => {
                let t = new Date(e);
                return t.getMonth() === new Date().getMonth() && t.getFullYear() === new Date().getFullYear();
            }).length >= 3 ||
            (0, ln.openModalLazy)(async () => {
                let i,
                    { default: l } = await Promise.all([n.e("79969"), n.e("82318")]).then(n.bind(n, 387101));
                return (i = Date.now()), hf.add(i), (n) => (0, c.jsx)(l, { ...n, clientSettingType: e, gameId: t });
            });
}
function hN() {
    (0, iQ.sL)("overlay-settings");
}
function hI(e) {
    let { className: t, game: n } = e;
    return (0, iQ.NP)() && null != n && n.elevated
        ? (0, c.jsx)("div", {
              className: t,
              children: (0, c.jsx)(rj.p, {
                  messageType: rj.Y.WARNING,
                  action: (0, c.jsx)(p.$, {
                      variant: "secondary",
                      size: "sm",
                      text: j.intl.string(j.t["1iI46O"]),
                      onClick: hN,
                  }),
                  children: j.intl.format(j.t["LJzl+0"], { helpCenterLink: eS.A.getArticleURL(A.MVz.SYSTEM_SERVICE) }),
              }),
          })
        : null;
}
var hC = n(760751),
    hb = n(9302),
    hy = n(656513);
let hv = new Set([
    hS.AR.INITIALIZING,
    hS.AR.WAITING_FOR_SCREEN_TYPE_RESOLUTION,
    hS.AR.WAITING_FOR_MODULE_TRACKING,
    hS.AR.WAITING_FOR_OVERLAY_OPEN,
    hS.AR.WAITING_FOR_POPOUT_OPEN,
    hS.AR.WAITING_FOR_MODULE_POPOUT_CAPTURE,
    hS.AR.WAITING_FOR_REACT_INITIALIZATION,
    hS.AR.WAITING_FOR_PID_FOCUS,
    hS.AR.WAITING_FOR_SUCCESSFUL_SHOW,
]);
function hj(e) {
    let { children: t, className: n, onExpand: i, ...l } = e,
        [s, r] = g.useState(!1);
    return (0, c.jsx)(hy.N, {
        className: hr.uR,
        collapsibleContent: (0, c.jsx)("div", { className: hr.oV, children: t }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, c.jsx)(ho, {
                ...l,
                onClick: (e) => {
                    var n;
                    r((n = !s)), i?.(n), t?.(e);
                },
                className: ie()(hr.AC, n),
                action: (0, c.jsxs)("div", {
                    className: hr.rc,
                    children: [
                        l.action,
                        s
                            ? (0, c.jsx)(dy.a, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "var(--interactive-text-active)",
                              })
                            : (0, c.jsx)(nQ._, {
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
let hO = (0, a.E2)(o.X.OVERLAY_CURRENT_GAME, {
    Component: function () {
        let { runningGame: e, runningGameApplication: t } = iW();
        (0, hE.I)(e?.id);
        let n = e?.pid,
            i = (0, m.bG)(
                [hT.default],
                () => (null == e || null == n ? null : hT.default.getTrackedGameByPid(n)),
                [e, n],
                iB(),
            ),
            { data: l } = (0, hE.I)(i?.gameId),
            { enabledLegacy: s, enabledOOP: r } = (0, m.cf)(
                [hC.A, te.A, hA.A],
                () =>
                    null == e && null == i
                        ? { enabledLegacy: !1, enabledOOP: !1 }
                        : null == e
                          ? { enabledLegacy: i?.legacyEnabled ?? !1, enabledOOP: i?.oopEnabled ?? !1 }
                          : (0, iH.hw)(e, !1, [hC.A, te.A, hA.A]),
                [e, i],
            ),
            a = (0, m.bG)(
                [iH.Ay, hC.A, te.A, hA.A],
                () => (null == e ? null : (0, iH.xU)(e, iH.Ay, hC.A, te.A, hA.A)),
                [e],
                iB(),
            ),
            [o, u] = g.useState(r),
            [d, A] = g.useState(s),
            [E, h] = g.useState(!1);
        g.useEffect(() => {
            u(r), A(s);
        }, [r, s]);
        let S = !(0, hb.supportsLegacy)(),
            T = !(0, hb.supportsOutOfProcess)(),
            { legacyEnabled: x, oopEnabled: p } = (0, m.cf)([hT.default], () => hT.default.getGlobalEnabledStatus());
        function f(t, n) {
            if (null == e) return;
            let i = !1,
                l = !1;
            switch (n) {
                case hh.OverlayToggledClientSettingType.LEGACY_GAME:
                    A(t), hc.Ay.toggleOverlay(e, t, o), (i = !t && d);
                    break;
                case hh.OverlayToggledClientSettingType.OOP_GAME:
                    u(t), hc.Ay.toggleOverlay(e, d, t), (l = !t && o);
                    break;
                case hh.OverlayToggledClientSettingType.LEGACY:
                    hg.A.setEnabled(t, p), (0, hh.Q3)(t, hh.OverlayToggledClientSettingType.LEGACY, e.id ?? null);
                    break;
                case hh.OverlayToggledClientSettingType.OOP:
                    hg.A.setEnabled(x, t), (0, hh.Q3)(t, hh.OverlayToggledClientSettingType.OOP, e.id ?? null);
            }
            (i || l) &&
                h_(
                    i ? hh.OverlayToggledClientSettingType.LEGACY_GAME : hh.OverlayToggledClientSettingType.OOP_GAME,
                    e.id ?? null,
                );
        }
        let _ = S && T,
            N = !x && !p,
            I = !o && !x && d && !S,
            C = !d && !p && o && !T,
            b = i?.overlayMethod === hS.Ue.Disabled,
            y = i?.state === hS.AR.OVERLAY_RENDERING && !b,
            v = i?.state != null && hv.has(i.state) && !b,
            O = i?.overlayMethod === hS.Ue.OutOfProcess,
            L = i?.overlayMethod === hS.Ue.OutOfProcessLimitedInteraction,
            D = i?.overlayMethod === hS.Ue.Hook,
            R = i?.state === hS.AR.OVERLAY_CRASHED || i?.state === hS.AR.OVERLAY_CRASHED_DISABLED,
            P = !o && !d,
            [G, M] = (function () {
                switch (!0) {
                    case y && O:
                        return [
                            j.intl.format(j.t.hFVBIg, {
                                overlayMethod: j.intl.string(j.t.a3eXSw),
                                overlayMethodHook: function (e, t) {
                                    return (0, c.jsx)(
                                        z.E,
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
                    case y && L:
                        return [
                            j.intl.format(j.t.hFVBIg, {
                                overlayMethod: j.intl.string(j.t["506Aba"]),
                                overlayMethodHook: function (e, t) {
                                    return (0, c.jsx)(
                                        z.E,
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
                    case y && D:
                        return [
                            j.intl.format(j.t.hFVBIg, {
                                overlayMethod: j.intl.string(j.t.bvlpDR),
                                overlayMethodHook: function (e, t) {
                                    return (0, c.jsx)(
                                        z.E,
                                        { tag: "span", variant: "text-sm/medium", color: "text-strong", children: e },
                                        t,
                                    );
                                },
                            }),
                            (function () {
                                switch (!0) {
                                    case i?.fullscreenType !== hm.aI.BORDERLESS_FULLSCREEN:
                                        return j.intl.string(j.t.mJmbeC);
                                    case T:
                                        return j.intl.string(j.t.C7bLTQ);
                                    case !i?.oopEnabled:
                                        return j.intl.string(j.t.WiY24u);
                                    case !p:
                                        return j.intl.string(j.t.cAFVsL);
                                    case !(l?.supportsOutOfProcessOverlay ?? !0):
                                        return j.intl.string(j.t.XcGEcs);
                                    default:
                                        return j.intl.string(j.t.bJXH2v);
                                }
                            })(),
                        ];
                    case R:
                        return [j.intl.string(j.t.OFC2aw), null];
                    case _:
                        return [j.intl.string(j.t.m7X4az), null];
                    case N:
                        return [j.intl.string(j.t["9DUS5l"]), null];
                    case P:
                        return [j.intl.string(j.t.nQ9EdJ), null];
                    case I:
                    case C:
                        return [j.intl.string(j.t.VWUn0a), null];
                    case v:
                        if (O) return [j.intl.string(j.t["s8+CFq"]), null];
                        if (D) return [j.intl.string(j.t.JEEdqt), null];
                        if (L) return [j.intl.string(j.t.pzBMwY), null];
                        return [j.intl.string(j.t["2Xhy9k"]), null];
                    case null == i:
                        return [j.intl.string(j.t.vwHPRi), null];
                    case b: {
                        let e = i?.fullscreenType === hm.aI.FULLSCREEN ? j.intl.string(j.t.mJmbeC) : null;
                        return [j.intl.string(j.t.VPW4XY), e];
                    }
                    default:
                        return [j.intl.string(j.t.ONovP5), null];
                }
            })();
        (0, eA.Ay)(() => {
            hc.Ay.getDetectableGames();
        });
        let [U, V] = g.useMemo(
            () =>
                v
                    ? ["text-muted", nK.A.colors.TEXT_MUTED.css]
                    : y && L
                      ? ["text-feedback-warning", nK.A.colors.TEXT_FEEDBACK_WARNING.css]
                      : y && O
                        ? ["text-feedback-positive", nK.A.colors.TEXT_FEEDBACK_POSITIVE.css]
                        : y && D
                          ? ["text-strong", nK.A.colors.TEXT_STRONG.css]
                          : ["interactive-text-default", nK.A.colors.INTERACTIVE_TEXT_DEFAULT.css],
            [v, y, L, O, D],
        );
        return null == e
            ? null
            : (0, c.jsxs)(hj, {
                  onExpand: h,
                  className: E ? hr.tx : void 0,
                  title: (0, c.jsxs)(c.Fragment, {
                      children: [
                          t?.name ?? a?.name ?? e?.gameName ?? "",
                          null != a && a.verified
                              ? (0, c.jsx)(i4.m, {
                                    text: j.intl.string(j.t["4PJP5p"]),
                                    children: (0, c.jsx)(ES.A, {
                                        size: 16,
                                        color: nK.A.colors.BACKGROUND_BRAND.css,
                                        children: (0, c.jsx)(Ei.U, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: nK.A.colors.WHITE.css,
                                        }),
                                    }),
                                })
                              : null,
                      ],
                  }),
                  description: G,
                  hint: null != M ? M : void 0,
                  header: (0, c.jsxs)(c.Fragment, {
                      children: [
                          y || v
                              ? (0, c.jsx)(hd.k, { size: "xxs", color: V })
                              : (0, c.jsx)("div", { className: hr.W4 }),
                          (0, c.jsx)(z.E, {
                              variant: "text-xs/semibold",
                              color: U,
                              children: j.intl.string(j.t.CDOx3w),
                          }),
                      ],
                  }),
                  icon: (0, c.jsx)(iZ.A, { game: t, pid: e?.pid, size: iZ.M.MEDIUM }),
                  "aria-label": j.intl.string(j.t["87O5GC"]),
                  action: (0, c.jsx)(t8.D, {
                      onClick: (e) => ha(e),
                      children: (0, c.jsx)(tK.d, {
                          checked: (o && p) || (d && x),
                          disabled: _,
                          onChange: (t) => {
                              !(function (t, n) {
                                  if (null == e) return;
                                  let i = !1,
                                      l = !1;
                                  switch (n) {
                                      case "game":
                                          hc.Ay.toggleOverlay(e, t, t), A(t), u(t), (i = !t && d), (l = !t && o);
                                          break;
                                      case "global":
                                          hg.A.setEnabled(t, t), (i = !t && x), (l = !t && p);
                                          break;
                                      case "both":
                                          hg.A.setEnabled(t, t),
                                              hc.Ay.toggleOverlay(e, t, t),
                                              A(t),
                                              u(t),
                                              (i = (!t && x) || (!t && d)),
                                              (l = (!t && p) || (!t && o));
                                  }
                                  let s = null;
                                  i
                                      ? (s =
                                            "game" === n
                                                ? hh.OverlayToggledClientSettingType.LEGACY_GAME
                                                : hh.OverlayToggledClientSettingType.LEGACY)
                                      : l &&
                                        (s =
                                            "game" === n
                                                ? hh.OverlayToggledClientSettingType.OOP_GAME
                                                : hh.OverlayToggledClientSettingType.OOP),
                                      null != s && h_(s, e.id ?? null);
                              })(
                                  t,
                                  (function (e, t) {
                                      let n = !t && e,
                                          i = !p && o,
                                          l = !x && d,
                                          s = !o && p,
                                          r = !d && x;
                                      switch (!0) {
                                          case n && (i || l) && (s || r):
                                              return "both";
                                          case n && (i || l):
                                              return "global";
                                          default:
                                              return "game";
                                      }
                                  })(t, (o && p) || (d && x)),
                              );
                          },
                      }),
                  }),
                  warning: (0, c.jsx)(hI, { className: hr.Hh, game: e }),
                  children: [
                      (0, c.jsx)(ho, {
                          title: j.intl.string(j.t["7BlVIs"]),
                          description: j.intl.string(j.t.ndgADE),
                          hint: p ? void 0 : j.intl.string(j.t.cAFVsL),
                          "aria-label": j.intl.string(j.t["7BlVIs"]),
                          action: (0, c.jsxs)(c.Fragment, {
                              children: [
                                  (0, c.jsx)(tK.d, {
                                      checked: o && p,
                                      disabled: T,
                                      onChange: (e) => {
                                          e && !p
                                              ? f(e, hh.OverlayToggledClientSettingType.OOP)
                                              : f(e, hh.OverlayToggledClientSettingType.OOP_GAME);
                                      },
                                  }),
                                  (0, c.jsx)("div", { className: hr.Kz }),
                              ],
                          }),
                      }),
                      (0, c.jsx)(ho, {
                          title: j.intl.string(j.t.BfFpW1),
                          description: j.intl.string(j.t.OzInYk),
                          hint: x ? void 0 : j.intl.string(j.t["3sYHXm"]),
                          "aria-label": j.intl.string(j.t.BfFpW1),
                          action: (0, c.jsxs)(c.Fragment, {
                              children: [
                                  (0, c.jsx)(tK.d, {
                                      checked: d && x,
                                      disabled: S,
                                      onChange: (e) => {
                                          e && !x
                                              ? f(e, hh.OverlayToggledClientSettingType.LEGACY)
                                              : f(e, hh.OverlayToggledClientSettingType.LEGACY_GAME);
                                      },
                                  }),
                                  (0, c.jsx)("div", { className: hr.Kz }),
                              ],
                          }),
                      }),
                  ],
              });
    },
    usePredicate: () => {
        let { runningGame: e } = iW();
        return null != e;
    },
    useSearchTerms: () => [j.intl.string(j.t["9cb1Uz"])],
});
var hL = n(206885);
function hD(e) {
    let { game: t, gameApplication: n } = e,
        i = g.useMemo(() => (null == t ? null : "pid" in t ? t.pid : null), [t]),
        l = (0, m.bG)([iz.A], () => (null != n ? n : iz.A.getApplication(t?.id)), [n, t]);
    return (0, c.jsx)(iZ.A, { game: l, pid: i, size: iZ.M.SMALL });
}
function hR(e) {
    let {
        rawGame: t,
        gameApplication: n,
        supportDisabled: i,
        getEnabledFromStatus: l,
        onChange: s,
        clientSettingType: r,
        ariaLabel: a,
    } = e;
    (0, hE.I)(t?.id);
    let o = (0, m.cf)([iH.Ay, hC.A, te.A, hA.A], () => (0, iH.xU)(t, iH.Ay, hC.A, te.A, hA.A)),
        u = (0, m.cf)([hC.A, te.A, hA.A], () => (0, iH.hw)(t, !1, [hC.A, te.A, hA.A]), [t]),
        d = l(u),
        [A, E] = g.useState(d);
    return (
        g.useEffect(() => {
            E(d);
        }, [d]),
        (0, c.jsx)(ho, {
            title: t.name,
            icon: (0, c.jsx)(hD, { game: o, gameApplication: n }),
            "aria-label": a,
            action: (0, c.jsxs)(c.Fragment, {
                children: [
                    (0, c.jsx)(tK.d, {
                        checked: A,
                        disabled: i,
                        onChange: (e) => {
                            let n;
                            return (n = !e && A), void (E(e), s(e, o, u), n && h_(r, o.id ?? t?.id ?? null));
                        },
                    }),
                    (0, c.jsx)("div", { className: hr.Kz }),
                ],
            }),
        })
    );
}
let hP = (0, a.E2)(o.X.OVERLAY_LEGACY_SETTING, {
        Component: function () {
            let [e, t] = g.useState(!1),
                { legacyEnabled: n, oopEnabled: i } = (0, m.cf)([hT.default], () =>
                    hT.default.getGlobalEnabledStatus(),
                ),
                l = (0, m.yK)([iH.Ay], () => iH.Ay.getGamesSeen(!0)).filter((e) => !(0, Af.n1)(e)),
                s = (0, iX.A)(l.map((e) => e.id)),
                r = !(0, hb.supportsLegacy)();
            function a(e) {
                hg.A.setEnabled(e, i);
                let t = iH.Ay.getCurrentGameForAnalytics()?.id ?? null;
                (0, hh.Q3)(e, hh.OverlayToggledClientSettingType.LEGACY, t),
                    !e && n && h_(hh.OverlayToggledClientSettingType.LEGACY, t);
            }
            function o(e, t, n) {
                let { enabledOOP: i } = n;
                hc.Ay.toggleOverlay(t, e, i);
            }
            let u = g.useMemo(
                () =>
                    (0, hb.supportsLegacy)()
                        ? r
                            ? j.intl.string(j.t.r9jEVw)
                            : j.intl.string(j.t.OzInYk)
                        : j.intl.string(j.t["8Ox6/E"]),
                [r],
            );
            return 0 === l.length
                ? (0, c.jsx)(ho, {
                      title: j.intl.string(j.t.BfFpW1),
                      description: u,
                      "aria-label": j.intl.string(j.t.BfFpW1),
                      className: hr.dA,
                      action: (0, c.jsxs)(c.Fragment, {
                          children: [
                              (0, c.jsx)(tK.d, { checked: n, disabled: r, onChange: (e) => a(e) }),
                              hL.O && (0, c.jsx)("div", { className: hr.Kz }),
                          ],
                      }),
                  })
                : (0, c.jsxs)(hj, {
                      onExpand: t,
                      className: e ? hr.tx : void 0,
                      title: j.intl.string(j.t.BfFpW1),
                      description: u,
                      "aria-label": j.intl.string(j.t.BfFpW1),
                      action: (0, c.jsx)(t8.D, {
                          onClick: (e) => ha(e),
                          children: (0, c.jsx)(tK.d, { checked: n, disabled: r, onChange: (e) => a(e) }),
                      }),
                      children: [
                          (0, c.jsx)("div", {
                              className: hr.SC,
                              children: (0, c.jsx)(z.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-muted",
                                  children: j.intl.string(j.t.FzoWRo),
                              }),
                          }),
                          (0, c.jsx)(S.Ip, {
                              className: hr.XG,
                              children: l.map((e, t) =>
                                  (0, c.jsx)(
                                      hR,
                                      {
                                          rawGame: e,
                                          clientSettingType: hh.OverlayToggledClientSettingType.LEGACY_GAME,
                                          supportDisabled: r,
                                          gameApplication: s[t],
                                          getEnabledFromStatus: (e) => {
                                              let { enabledLegacy: t } = e;
                                              return t;
                                          },
                                          onChange: o,
                                          ariaLabel: j.intl.format(j.t.hvPYsF, { gameName: e.name }).toString(),
                                      },
                                      e.id,
                                  ),
                              ),
                          }),
                      ],
                  });
        },
        useSearchTerms: () => [j.intl.string(j.t.BfFpW1)],
    }),
    hG = (0, a.E2)(o.X.OVERLAY_OOP_SETTING, {
        Component: function () {
            let [e, t] = g.useState(!1),
                { oopEnabled: n, legacyEnabled: i } = (0, m.cf)([hT.default], () =>
                    hT.default.getGlobalEnabledStatus(),
                ),
                l = !(0, hb.supportsOutOfProcess)(),
                s = (0, m.yK)([iH.Ay], () => iH.Ay.getGamesSeen(!0)).filter((e) => !(0, Af.n1)(e)),
                r = (0, iX.A)(s.map((e) => e.id));
            function a(e) {
                let t = !e && n;
                hg.A.setEnabled(i, e);
                let l = iH.Ay.getCurrentGameForAnalytics()?.id ?? null;
                (0, hh.Q3)(e, hh.OverlayToggledClientSettingType.OOP, l),
                    t && h_(hh.OverlayToggledClientSettingType.OOP, l);
            }
            function o(e, t, n) {
                let { enabledLegacy: i } = n;
                hc.Ay.toggleOverlay(t, e, i);
            }
            let u = g.useMemo(
                () => (hL.O ? (l ? j.intl.string(j.t.C7bLTQ) : j.intl.string(j.t.ndgADE)) : j.intl.string(j.t.m7X4az)),
                [l],
            );
            return 0 === s.length
                ? (0, c.jsx)(ho, {
                      title: j.intl.string(j.t["7BlVIs"]),
                      description: u,
                      "aria-label": j.intl.string(j.t["7BlVIs"]),
                      className: hr.dA,
                      action: (0, c.jsxs)(c.Fragment, {
                          children: [
                              (0, c.jsx)(tK.d, { checked: n, disabled: l, onChange: (e) => a(e) }),
                              hL.O && (0, c.jsx)("div", { className: hr.Kz }),
                          ],
                      }),
                  })
                : (0, c.jsxs)(hj, {
                      onExpand: t,
                      className: e ? hr.tx : void 0,
                      title: j.intl.string(j.t["7BlVIs"]),
                      description: u,
                      "aria-label": j.intl.string(j.t["7BlVIs"]),
                      action: (0, c.jsx)(t8.D, {
                          onClick: (e) => ha(e),
                          children: (0, c.jsx)(tK.d, { checked: n, disabled: l, onChange: (e) => a(e) }),
                      }),
                      children: [
                          (0, c.jsx)("div", {
                              className: hr.SC,
                              children: (0, c.jsx)(z.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-muted",
                                  children: j.intl.string(j.t.FzoWRo),
                              }),
                          }),
                          (0, c.jsx)(S.Ip, {
                              className: hr.XG,
                              children: s.map((e, t) =>
                                  (0, c.jsx)(
                                      hR,
                                      {
                                          rawGame: e,
                                          clientSettingType: hh.OverlayToggledClientSettingType.OOP_GAME,
                                          gameApplication: r[t],
                                          supportDisabled: l,
                                          getEnabledFromStatus: (e) => {
                                              let { enabledOOP: t } = e;
                                              return t;
                                          },
                                          onChange: o,
                                          ariaLabel: j.intl.format(j.t.nByTd3, { gameName: e.name }).toString(),
                                      },
                                      e.id,
                                  ),
                              ),
                          }),
                      ],
                  });
        },
        useSearchTerms: () => [j.intl.string(j.t["7BlVIs"])],
    }),
    hM = (0, a.zZ)(o.X.OVERLAY_ENABLE_CATEGORY, {
        useSubnavLabel: () => j.intl.string(j.t["/dp6yY"]),
        buildLayout: () => [hO, hG, hP, hu],
    }),
    hU = (0, a.zD)(o.X.OVERLAY_CLICKABLE_REGIONS_SETTING, {
        useValue: () => (0, m.bG)([he.default], () => !he.default.disableClickableRegions),
        setValue: (e) => {
            hg.A.setDisableClickableRegions(!e);
        },
        useTitle: () => j.intl.string(j.t["+eFXxq"]),
        useSubtitle: () => j.intl.string(j.t.kivMAp),
    }),
    hV = (0, a.E2)(o.X.OVERLAY_KEYBIND_SETTING, {
        Component: function () {
            let e = (0, m.bG)([lL.Ay], () => lL.Ay.getOverlayKeybind()),
                t = !(0, hb.supportsLegacy)(),
                n = !(0, hb.supportsOutOfProcess)(),
                [i, l] = (0, m.yK)([iH.Ay], () => [iH.Ay.canShowAdminWarning, iH.Ay.getVisibleGame()], []),
                s = (0, iQ.NP)(),
                r = null != l && l.elevated && i && !s,
                a = !(0, lL.DV)(e?.shortcut ?? []);
            return (0, c.jsx)("div", {
                className: hr.hc,
                children: (0, c.jsxs)("div", {
                    className: hr.eH,
                    children: [
                        (0, c.jsxs)("div", {
                            className: hr.Bu,
                            children: [
                                (0, c.jsx)(z.E, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    children: j.intl.string(j.t.VsAZcC),
                                }),
                                r &&
                                    (0, c.jsx)(z.E, {
                                        variant: "text-xs/normal",
                                        color: "text-feedback-warning",
                                        className: hr.y7,
                                        children: j.intl.string(j.t.NsowVa),
                                    }),
                                a &&
                                    (0, c.jsx)(z.E, {
                                        variant: "text-xs/normal",
                                        color: "text-feedback-warning",
                                        className: hr.y7,
                                        children: j.intl.string(j.t["UNoTw/"]),
                                    }),
                            ],
                        }),
                        (0, c.jsx)("div", {
                            className: hr.IH,
                            children: (0, c.jsx)(i9.A, {
                                disabled: t && n,
                                defaultValue: null != e ? e.shortcut : [],
                                onChange: function (t) {
                                    tl()(null != e, "Keybind should never be undefined"),
                                        ik.A.setKeybind({ ...e, shortcut: t });
                                },
                            }),
                        }),
                    ],
                }),
            });
        },
        useSearchTerms: () => [j.intl.string(j.t.VsAZcC)],
    });
var hk = n(515183),
    hw = n(682763);
let hF = (0, a.zD)(o.X.OVERLAY_LIMITED_INTERACTION_OVERRIDE_SETTING, {
        usePredicate: () => {
            let { runningGameApplication: e } = iW();
            return e?.id != null;
        },
        useDisabled: () => {
            let { runningGame: e } = iW();
            return null != e && (0, hk.qJ)(e.pid);
        },
        useValue: () => {
            let { runningGame: e, runningGameApplication: t } = iW(),
                n = t?.id,
                i = (0, m.bG)([E7.A], () => E7.A.isLimitedInteractionOverrideEnabled(n)),
                l = null != e && (0, hk.qJ)(e.pid);
            return i || l;
        },
        setValue: (e) => {
            let t,
                n,
                i,
                l,
                { runningGameApplication: s } =
                    ((t = iY.A.getStreamerActiveStreamMetadata()),
                    (l = iK(
                        t,
                        (i =
                            null != (n = iH.Ay.getVisibleGame())
                                ? iH.Ay.getGameOrTransformedSubgameForPID(n.pid)
                                : null),
                    )),
                    { runningGame: i ?? void 0, runningGameApplication: iz.A.getApplication(l) ?? void 0 });
            null != s && (0, hw.x8)(s.id, e);
        },
        useTitle: () => j.intl.string(j.t.wgVQND),
        useSubtitle: () => j.intl.string(j.t["5SsyF5"]),
    }),
    hB = (0, a.zZ)(o.X.OVERLAY_GENERAL_CATEGORY, { buildLayout: () => [hV, hF, hU] });
var hz = n(93465);
let hX = [
    {
        title: j.t.eVE4LX,
        description: j.t["72WNqk"],
        disabledSetting: hz.M.TEXT_CHAT,
        key: o.X.OVERLAY_NOTIFICATIONS_TEXT_CHAT,
    },
    {
        title: j.t.oifnSh,
        description: j.t.bgU5r0,
        disabledSetting: hz.M.WELCOME_GENERAL,
        key: o.X.OVERLAY_NOTIFICATIONS_WELCOME,
    },
    {
        title: j.t.hqsZJW,
        description: j.t.kHjdqc,
        disabledSetting: hz.M.GO_LIVE_NUDGE,
        key: o.X.OVERLAY_NOTIFICATIONS_GO_LIVE,
    },
    {
        title: j.t.sop3rn,
        description: j.t.pjgffc,
        disabledSetting: hz.M.GAME_ACTIVITY,
        key: o.X.OVERLAY_NOTIFICATIONS_GAME_ACTIVITY,
    },
    {
        title: j.t["2QVhbb"],
        description: j.t.wQ4ilB,
        disabledSetting: hz.M.NOW_PLAYING,
        key: o.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING,
    },
    {
        title: j.t.giM9fA,
        description: j.t.EhAfWj,
        disabledSetting: hz.M.NOW_PLAYING_DIFFERENT_GAMES,
        key: o.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING_DIFFERENT_GAMES,
        usePredicate: () => {
            let { showNowPlayingForDifferentGames: e } = (0, ng.M8)(
                    "OverlayV3NowPlayingDifferentGamesNotificationSetting",
                ),
                t = (0, m.bG)([E7.A], () => E7.A.isNotificationDisabledBySetting(hz.M.NOW_PLAYING));
            return !!e && !t;
        },
    },
];
function hY(e) {
    return (0, a.zD)(e.key, {
        useTitle: () => j.intl.string(e.title),
        useSubtitle: () => j.intl.string(e.description),
        useValue: () => !(0, m.bG)([E7.A], () => E7.A.getDisabledNotifications().has(e.disabledSetting)),
        setValue: (t) => {
            hg.A.setNotificationDisabledSetting(e.disabledSetting, !t);
        },
        usePredicate: e.usePredicate,
    });
}
let hH = (0, a.FW)(o.X.OVERLAY_NOTIFICATIONS_LIST, {
        variant: "compact",
        useTitle: () => j.intl.string(j.t.gnKWdS),
        isTitleHiddenVisually: !0,
        buildLayout: () => hX.map(hY),
    }),
    hK = (0, a.zZ)(o.X.OVERLAY_NOTIFICATIONS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.xOE5bA),
        buildLayout: () => [hH],
    }),
    hW = (0, a.Hn)(o.X.OVERLAY_VOICE_WIDGET_AVATAR_SIZE, {
        useTitle: () => j.intl.string(j.t.dnvZSg),
        useValue: () => (0, m.bG)([he.default], () => he.default.getAvatarSizeMode()),
        setValue: (e) => {
            hg.A.setAvatarSizeMode(e);
        },
        useOptions: () => [
            { id: "large", label: j.intl.string(j.t.YcOxtr), value: A.OSZ.LARGE },
            { id: "small", label: j.intl.string(j.t.BKIKqx), value: A.OSZ.SMALL },
        ],
    }),
    hZ = (0, a.Hn)(o.X.OVERLAY_VOICE_WIDGET_DISPLAY_NAMES, {
        useTitle: () => j.intl.string(j.t.J0dpcB),
        useValue: () => (0, m.bG)([he.default], () => he.default.getDisplayNameMode()),
        setValue: (e) => {
            hg.A.setDisplayNameMode(e);
        },
        useOptions: () => [
            { id: "always", label: j.intl.string(j.t.nBmDrT), value: A.pwA.ALWAYS },
            { id: "speaking", label: j.intl.string(j.t["2OvIZY"]), value: A.pwA.ONLY_WHILE_SPEAKING },
            { id: "never", label: j.intl.string(j.t.ekjlPL), value: A.pwA.NEVER },
        ],
    }),
    hq = (0, a.Hn)(o.X.OVERLAY_VOICE_WIDGET_DISPLAY_USERS, {
        useTitle: () => j.intl.string(j.t.swsWWC),
        useValue: () => (0, m.bG)([he.default], () => he.default.getDisplayUserMode()),
        setValue: (e) => {
            hg.A.setDisplayUserMode(e);
        },
        useOptions: () => [
            { id: "always", label: j.intl.string(j.t.nBmDrT), value: A.f5z.ALWAYS },
            { id: "speaking", label: j.intl.string(j.t["2OvIZY"]), value: A.f5z.ONLY_WHILE_SPEAKING },
        ],
    });
var hQ = n(391973),
    hJ = n(489277),
    h$ = n(897720),
    h0 = n(38502);
function h1() {
    let e = hJ.A.getWidgetByType(A.uss.VOICE_V3);
    if (null == e) return null;
    let t = h0.A.getWidget(e.id);
    return null != t && (0, h$.ZO)(t) ? t : null;
}
n(392164);
let h2 = (0, a.sN)(o.X.OVERLAY_VOICE_WIDGET_MAX_USERS, {
    useTitle: () => j.intl.string(j.t["X/Uyzc"]),
    minValue: 0,
    maxValue: 25,
    markers: [0, 5, 10, 15, 20, 25],
    onMarkerRender: (e) => (e < 1 ? j.intl.string(j.t.nrUzFL) : e),
    getInitialValue: () => {
        let e = h1();
        return e?.meta.voiceStatesMaxShown ?? 8;
    },
    onValueRender: function (e) {
        return e < 1 ? j.intl.string(j.t.nrUzFL) : `${Math.floor(e)}`;
    },
    setValue: (e) => {
        let t = h1();
        null != t &&
            (e < 1
                ? (0, hQ.cC)(t.id, { voiceStatesMaxShown: -1 })
                : (0, hQ.cC)(t.id, { voiceStatesMaxShown: Math.floor(e) }));
    },
});
var h3 = n(450740),
    h5 = n(968898),
    h6 = n(889227),
    h4 = n(288737);
function h8(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        l = "456" + Math.floor(1e6 * Math.random());
    return {
        voiceState: new h4.A({
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
        user: new h6.A({ id: l, username: e }),
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
let h7 = (0, a.E2)(o.X.OVERLAY_VOICE_WIDGET_PREVIEW, {
        Component: function () {
            let e,
                t = (0, m.bG)([l0.default], () => l0.default.getCurrentUser()),
                {
                    avatarSizeMode: n,
                    displayNameMode: i,
                    displayUserMode: l,
                } = (0, m.cf)([he.default], () => ({
                    avatarSizeMode: he.default.getAvatarSizeMode(),
                    displayNameMode: he.default.getDisplayNameMode(),
                    displayUserMode: he.default.getDisplayUserMode(),
                })),
                [s] = g.useState(() => [
                    h8(j.intl.string(j.t.C0ZDvo), !0, !1),
                    h8(j.intl.string(j.t.iOtj8E), !1, !1, !0),
                    h8(j.intl.string(j.t["0oqNgL"]), !1, !0),
                ]),
                r = (0, m.bG)([hJ.A, h0.A], () => {
                    let e = hJ.A.getWidgetByType(A.uss.VOICE_V3);
                    if (null == e) return null;
                    let t = h0.A.getWidget(e.id);
                    return null != t && (0, h$.ZO)(t) ? t : null;
                }),
                a = r?.meta?.voiceStatesMaxShown ?? 8,
                o = [null != t ? (((e = h8(t.username)).user = t), e) : null, ...s].filter(n8.Vq),
                u = [new Map(o.map((e) => [e.user.id, e])), o.map((e) => e.user.id)],
                d = (0, c.jsx)(Ex.N, {
                    theme: A.NJ8.MIDNIGHT,
                    children: (e) =>
                        (0, c.jsxs)("div", {
                            className: ie()(hr.Y5, e),
                            children: [
                                (0, c.jsx)("div", {
                                    className: hr.kJ,
                                    children: (0, c.jsx)(h3.DH, {
                                        id: "voice-widget",
                                        title: j.intl.string(j.t.KNJ6Vq),
                                        channel: (0, b.createChannelRecord)({
                                            id: "123",
                                            name: "Test Channel",
                                            type: A.rbe.GUILD_VOICE,
                                            guild_id: "456",
                                        }),
                                        overlayVoiceStates: u,
                                        displayNameMode: i,
                                        displayUserMode: l,
                                        avatarSizeMode: n,
                                        widget: A.uss.VOICE,
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
                                (0, c.jsxs)("div", {
                                    className: hr.R$,
                                    children: [
                                        (0, c.jsx)(h5.Pl, { children: j.intl.string(j.t.KNJ6Vq) }),
                                        (0, c.jsx)(h5.CS, {}),
                                        (0, c.jsx)(h5.O0, { id: r?.id ?? "voice-widget", pinned: r?.pinned ?? !1 }),
                                    ],
                                }),
                            ],
                        }),
                });
            return (0, c.jsx)("div", { className: hr.F9, children: d });
        },
        useSearchTerms: () => [],
    }),
    h9 = (0, a.zZ)(o.X.OVERLAY_VOICE_WIDGET_CATEGORY, {
        useTitle: () => j.intl.string(j.t.r1TZfh),
        buildLayout: () => [h7, hW, hZ, hq, h2],
    });
var Se = n(432816);
function St() {
    let [e, t] = (0, d5.kn)([er.M.OVERLAY_OOP_SETTINGS_NUX], void 0, !0);
    return ((0, w.Ay)(() => () => {
        t(cn.i.AUTO_DISMISS);
    }),
    e !== er.M.OVERLAY_OOP_SETTINGS_NUX)
        ? null
        : (0, c.jsxs)(c.Fragment, {
              children: [
                  (0, c.jsxs)("div", {
                      className: Se.xC,
                      children: [
                          (0, c.jsx)("div", {
                              children: (0, c.jsx)("img", {
                                  src: "https://cdn.discordapp.com/assets/content/10b8ab47f3371360233219f4b20fa86155553ddb810ceb8688654738bf7e15d0.png",
                                  alt: j.intl.string(j.t.mdXZh1),
                                  className: Se.tl,
                              }),
                          }),
                          (0, c.jsx)("div", {
                              children: (0, c.jsxs)("div", {
                                  className: Se.vJ,
                                  children: [
                                      (0, c.jsx)(h.D, {
                                          variant: "heading-xl/medium",
                                          color: "text-strong",
                                          children: j.intl.string(j.t.jzjJQg),
                                      }),
                                      (0, c.jsx)(z.E, {
                                          variant: "text-md/normal",
                                          color: "text-muted",
                                          children: j.intl.string(j.t["5dOfxb"]),
                                      }),
                                  ],
                              }),
                          }),
                          (0, c.jsx)("div", {
                              children: (0, c.jsx)("img", {
                                  src: "https://cdn.discordapp.com/assets/content/2aa57f16c71171fc8e0edb8cca60735f1192195344d17fa667de6d3ca8163ba0.png",
                                  alt: j.intl.string(j.t.mdXZh1),
                                  className: Se.lh,
                              }),
                          }),
                          (0, c.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: Se.VV,
                              children: (0, c.jsx)(p.$, {
                                  variant: "primary",
                                  text: j.intl.string(j.t.Q26diF),
                                  onClick: () => void t(cn.i.DISMISS),
                              }),
                          }),
                      ],
                  }),
                  (0, c.jsx)(i2.c, { className: Se.yF }),
              ],
          });
}
function Sn() {
    let e = (0, m.bG)([e8.A], () => e8.A.enabled),
        t = (0, ng.Mn)("OverlayStreamerModeNotice");
    return e && t
        ? (0, c.jsxs)(c.Fragment, {
              children: [
                  (0, c.jsx)(iV.w, {
                      type: "warning",
                      children: j.intl.format(j.t.fuEX5B, {
                          onClick: function () {
                              return (0, t9.openUserSettings)(o.X.STREAMER_MODE_CATEGORY);
                          },
                      }),
                  }),
                  (0, c.jsx)(i2.c, { className: Se.yF }),
              ],
          })
        : null;
}
let Si = (0, a.t_)(o.X.OVERLAY_PANEL, {
        initialize: function () {
            return (
                hi(),
                lL.Ay.addChangeListener(hi),
                E7.A.addChangeListener(hi),
                he.default.addChangeListener(hi),
                E9.default.addChangeListener(hi),
                eW.isPlatformEmbedded && (0, AN.a2)(),
                () => {
                    lL.Ay.removeChangeListener(hi),
                        E7.A.removeChangeListener(hi),
                        he.default.removeChangeListener(hi),
                        E9.default.removeChangeListener(hi),
                        eW.isPlatformEmbedded && (0, AN.e0)();
                }
            );
        },
        useTitle: () => j.intl.string(j.t["9cb1Uz"]),
        decoration: {
            type: d.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: function () {
                return (0, c.jsxs)(c.Fragment, { children: [(0, c.jsx)(St, {}), (0, c.jsx)(Sn, {})] });
            },
        },
        buildLayout: () => [hM, hB, h9, hK],
    }),
    Sl = (0, a.i4)(o.X.OVERLAY_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["9cb1Uz"]),
        icon: E8.l,
        usePredicate: nA.b_,
        buildLayout: () => [Si],
    });
var Ss = n(687966);
let Sr = (0, a.AK)(o.X.REGISTERED_GAMES_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.OYYY6q),
        destinationKey: o.X.ACTIVITY_PRIVACY_PANEL,
    }),
    Sa = (0, a.gN)(o.X.REGISTERED_GAMES_RELATED_SETTINGS, {
        usePredicate: () => (0, EP.SV)("RegisteredGamesRelatedSettings"),
        buildLayout: () => [Sr],
    });
var So = n(227309),
    Su = n(1215),
    Sd = n(39623),
    Sc = n(952270),
    Sg = n(138134),
    Sm = n(29160),
    SA = n(18293),
    SE = n(582835);
let Sh = (0, eW.isWindows)();
function SS(e) {
    let { rawGame: t, nowPlaying: i = !1, isOverride: l, subgames: s, isSubgame: r = !1, parentGame: a } = e;
    (0, hE.I)(t.id);
    let o = (0, m.cf)([iH.Ay, hC.A, te.A, hA.A], () => (0, iH.xU)(t, iH.Ay, hC.A, te.A, hA.A)),
        { canToggleDetection: u, isCurrentGameDetectionEnabled: d } = (0, m.cf)([iH.Ay], () => ({
            canToggleDetection: null == a || iH.Ay.isDetectionEnabled(a),
            isCurrentGameDetectionEnabled: iH.Ay.isDetectionEnabled(o),
        })),
        E = (0, m.bG)([iH.Ay], () => iH.Ay.getVisibleGame()),
        [h, S] = g.useState(!1),
        T = g.useMemo(
            () =>
                (0, Af.n1)(o)
                    ? r
                        ? o.gameName
                        : j.intl.formatToPlainString(j.t.G6BGdx, { subgameName: o.gameName })
                    : o.name,
            [o, r],
        ),
        [x, p] = g.useState(T ?? "???"),
        f = ie()(SE.tR, {
            [SA.LO]: !i,
            [SA.Rw]: i,
            [SA.FB]: null != o && i,
            [SA.xL]: r,
            [SA.fG]: null != s && s.length > 0,
        });
    function _() {
        null != s && s.length > 0 && d
            ? (0, ln.openModalLazy)(async () => {
                  let { Modal: e } = await n.e("4823").then(n.bind(n, 158954));
                  return (t) =>
                      (0, c.jsx)(e, {
                          ...t,
                          title: j.intl.formatToPlainString(j.t.PZ4fKc, { platform: T }),
                          subtitle: j.intl.formatToPlainString(j.t.ZIQbfb, { platform: T }),
                          actions: [
                              { text: j.intl.string(j.t["ETE/oC"]), onClick: () => t.onClose(), variant: "secondary" },
                              {
                                  text: j.intl.string(j.t.Fmjztz),
                                  onClick: () => {
                                      hc.Ay.toggleDetection(o), t.onClose();
                                  },
                                  variant: "primary",
                              },
                          ],
                      });
              })
            : hc.Ay.toggleDetection(o);
    }
    let N = null != E && (0, iH.Es)(o) === (0, iH.Es)(E),
        I = (null != a && a.id === E?.id) || N || (null != s && s.some((e) => e.id === E?.id));
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsxs)("div", {
                className: f,
                children: [
                    (0, c.jsxs)("div", {
                        className: ie()(SA.$K, SE.Vd),
                        children: [
                            o.verified && !l
                                ? (0, c.jsxs)("div", {
                                      className: SA.HS,
                                      children: [
                                          (0, c.jsx)("div", { className: SA.mO, children: T }),
                                          (0, c.jsx)(i4.m, {
                                              text: j.intl.string(j.t["4PJP5p"]),
                                              children: (0, c.jsx)(ES.A, {
                                                  className: SA.qf,
                                                  size: 18,
                                                  color: nK.A.unsafe_rawColors.BRAND_500.css,
                                                  children: (0, c.jsx)(Ei.U, {
                                                      size: "custom",
                                                      width: 18,
                                                      height: 18,
                                                      color: nK.A.unsafe_rawColors.WHITE.css,
                                                  }),
                                              }),
                                          }),
                                      ],
                                  })
                                : (0, c.jsx)("input", {
                                      className: ie()(SA.mO, SA.sr),
                                      type: "text",
                                      maxLength: 128,
                                      value: x,
                                      onBlur: function () {
                                          o.name !== x && hc.Ay.editName(o, x);
                                      },
                                      onKeyDown: function (e) {
                                          e.key === l_.dh.ENTER && (e.currentTarget.blur(), e.preventDefault());
                                      },
                                      onChange: (e) => p(e.target.value),
                                  }),
                            (function () {
                                let e,
                                    t,
                                    { played: n, exePath: l } = o;
                                return (
                                    i || N
                                        ? (e = j.intl.string(j.t.VbV5dv))
                                        : null != n && "" !== n && (e = j.intl.format(j.t["gGeOE+"], { when: n })),
                                    (0, c.jsx)("div", {
                                        className: SA.GN,
                                        children: (0, c.jsx)(Sm.A, {
                                            hoverText:
                                                null != l && "" !== l
                                                    ? ((t = l.replace(/^file:\/\//i, "")),
                                                      (0, eW.isWindows)() && (t = t.toUpperCase()),
                                                      t)
                                                    : "",
                                            children: e,
                                        }),
                                    })
                                );
                            })(),
                        ],
                    }),
                    l || h
                        ? null
                        : (0, c.jsx)("div", {
                              className: ie()(SE.tR, SE.oA, SE.LT, SA.E3),
                              children: (0, c.jsx)(i4.m, {
                                  text: j.intl.string(j.t["y0B+lo"]),
                                  children: (0, c.jsx)(t8.D, {
                                      "aria-label": j.intl.string(j.t["y0B+lo"]),
                                      className: SA.ym,
                                      onClick: function () {
                                          if (h) return;
                                          let e = null != o.id ? hC.A.getDetectableGame(o.id) : null;
                                          e7.default.track(A.HAw.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
                                              application_id: e?.id,
                                              game_name: (0, Af.n1)(o) ? o.gameName : o.name,
                                          }),
                                              S(!0),
                                              (0, ln.openModalLazy)(async () => {
                                                  let { default: t } = await Promise.all([
                                                      n.e("21072"),
                                                      n.e("27495"),
                                                  ]).then(n.bind(n, 651930));
                                                  return (n) =>
                                                      (0, c.jsx)(t, {
                                                          ...n,
                                                          detected: { name: o.name ?? "", gameId: e?.id ?? o.id },
                                                      });
                                              });
                                      },
                                      children: (0, c.jsx)(Sg.i, {
                                          size: "md",
                                          color: "currentColor",
                                          className: SA.Lj,
                                          colorClass: SA.GS,
                                      }),
                                  }),
                              }),
                          }),
                    (function () {
                        let { detectable: e } = o,
                            t =
                                e && u
                                    ? (0, c.jsx)(Sd.b, {
                                          size: "md",
                                          color: "currentColor",
                                          className: SA.Lj,
                                          colorClass: SA.GS,
                                      })
                                    : (0, c.jsx)(Sc.G, {
                                          size: "md",
                                          color: "currentColor",
                                          className: u ? SA.$V : SA.zN,
                                          colorClass: SA.GS,
                                      });
                        return (0, c.jsx)("div", {
                            className: ie()(SE.tR, SE.oA, SE.LT, SA.E3),
                            children: (0, c.jsx)(i4.m, {
                                text: j.intl.string(j.t.QmitzM),
                                children: u
                                    ? (0, c.jsx)(t8.D, {
                                          "aria-label": j.intl.string(j.t.QmitzM),
                                          className: SA.ym,
                                          onClick: _,
                                          children: t,
                                      })
                                    : t,
                            }),
                        });
                    })(),
                    (function () {
                        if (!Sh || null != a) return null;
                        let { overlay: e, overlayWarn: t } = o,
                            n = e
                                ? (0, c.jsx)(hd.k, {
                                      size: "md",
                                      color: "currentColor",
                                      className: SA.Lj,
                                      colorClass: SA.GS,
                                  })
                                : (0, c.jsx)(Su.n, {
                                      size: "md",
                                      color: "currentColor",
                                      className: SA.$V,
                                      colorClass: SA.GS,
                                  }),
                            i = t
                                ? (0, c.jsx)(i4.m, {
                                      text: j.intl.string(j.t.Vfw2L5),
                                      children: (0, c.jsx)("i", { className: SA.kb }),
                                  })
                                : null;
                        return (0, c.jsxs)("div", {
                            className: ie()(SE.tR, SE.oA, SE.LT, SA.E3),
                            children: [
                                i,
                                (0, c.jsx)(i4.m, {
                                    text: j.intl.string(j.t["1+O+Tu"]),
                                    children: (0, c.jsx)(t8.D, {
                                        "aria-label": j.intl.string(j.t["1+O+Tu"]),
                                        className: SA.ym,
                                        onClick: () => {
                                            var t;
                                            return (t = !e), void hc.Ay.toggleOverlay(o, t, t);
                                        },
                                        children: n,
                                    }),
                                }),
                            ],
                        });
                    })(),
                    (i && !l) || I
                        ? null
                        : (0, c.jsx)(mA.A, {
                              className: SA.LS,
                              onClick: function () {
                                  hc.Ay.deleteEntry(o),
                                      s?.forEach((e) => {
                                          hc.Ay.deleteEntry(e);
                                      });
                              },
                          }),
                ],
            }),
            null != s &&
                s.length > 0 &&
                !i &&
                (0, c.jsx)("div", {
                    className: SA.AQ,
                    children: s.map((e, t) =>
                        (0, c.jsxs)(
                            g.Fragment,
                            {
                                children: [
                                    (0, c.jsx)(SS, { rawGame: e, isOverride: !1, isSubgame: !0, parentGame: o }),
                                    t !== s.length - 1 && (0, c.jsx)("div", { className: SA.PQ }),
                                ],
                            },
                            (0, iH.Es)(e),
                        ),
                    ),
                }),
        ],
    });
}
function ST() {
    let e = (0, m.bG)([nR.A], () => nR.A.theme);
    return (0, c.jsxs)(mc.pp, {
        theme: e,
        className: mp.eT,
        children: [
            (0, c.jsx)(mc.G8, { darkSrc: n(839628), lightSrc: n(446404), width: 430, height: 250 }),
            (0, c.jsx)(mc.SG, { children: j.intl.string(j.t["1yiJwn"]) }),
        ],
    });
}
function Sx() {
    let { gameHistory: e, robloxSubgameHistory: t, overrideExePaths: n } = AC();
    return 0 === e.length
        ? (0, c.jsx)(ST, {})
        : (0, c.jsx)(nZ.n, {
              children: (0, c.jsx)("div", {
                  children: e.map((e) =>
                      (0, c.jsx)(
                          SS,
                          { rawGame: e, isOverride: n.has(e.exePath), subgames: e.id === So.a7 ? t : void 0 },
                          (0, iH.Es)(e),
                      ),
                  ),
              }),
          });
}
let Sp = (0, a.E2)(o.X.REGISTERED_GAMES_ADDED_GAMES_SETTING, {
    useSearchTerms: () => [],
    Component: () => (0, c.jsx)(Sx, {}),
});
var Sf = n(424994);
let S_ = (0, a.zZ)(o.X.REGISTERED_GAMES_ADDED_GAMES_CATEGORY, {
    buildLayout: () => [Sp, Sa],
    useTitle: () => j.intl.string(j.t.jCOdvx),
    useSubtitle: () => j.intl.format(j.t.KPA3m9, { igdbLink: Sf.s8 }),
});
var SN = n(783878),
    SI = n(930863),
    SC = n(997213);
function Sb(e) {
    let { onClose: t } = e,
        n = (0, m.bG)([iH.Ay], () => iH.Ay.getCandidateGames()),
        [i, l] = g.useState(null),
        s = n.map((e) => ({ id: e.pid.toString(), value: e, label: null != e.name ? e.name : "" }));
    return (0, c.jsxs)(rV.l, {
        className: ie()(SI.H, SC.Y_),
        "aria-label": j.intl.string(j.t.GTCx0p),
        children: [
            (0, c.jsx)(SN.Z, {
                selectionMode: "single",
                placeholder: j.intl.string(j.t.XqMe3N),
                value: i,
                options: s,
                onSelectionChange: function (e) {
                    l(e);
                },
            }),
            (0, c.jsx)(i2.c, { className: ie()(mp.Ot, mp.QB) }),
            (0, c.jsxs)("div", {
                className: ie()(SI.o, SE.xM),
                children: [
                    (0, c.jsx)(m4.Q, { variant: "secondary", text: j.intl.string(j.t["ETE/oC"]), onClick: t }),
                    (0, c.jsx)(p.$, {
                        variant: "primary",
                        text: j.intl.string(j.t.GTCx0p),
                        disabled: null == i,
                        onClick: function () {
                            null != i && (hc.Ay.addGame(i.pid, i.name), t());
                        },
                    }),
                ],
            }),
        ],
    });
}
var Sy = n(347990);
let Sv = (0, a.E2)(o.X.REGISTERED_GAMES_ADD_GAME_SETTING, {
    useSearchTerms: () => [j.intl.string(j.t.GTCx0p)],
    Component: function () {
        let e = g.useRef(null);
        return (0, c.jsxs)("div", {
            className: ie()(Sy.a, mp.Gf),
            children: [
                (0, c.jsx)("span", { children: j.intl.string(j.t.xwhoqM) }),
                (0, c.jsx)(rU.Y, {
                    targetElementRef: e,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, c.jsx)(Sb, { onClose: t });
                    },
                    align: "center",
                    position: "bottom",
                    children: (t) =>
                        (0, c.jsx)(m4.Q, {
                            ...t,
                            buttonRef: e,
                            variant: "primary",
                            textVariant: "text-sm/medium",
                            text: j.intl.string(j.t.GjgdXe),
                        }),
                }),
            ],
        });
    },
});
function Sj() {
    return (0, c.jsx)("div", {
        className: ie()(SE.tR, SA.eS, SA.Rw),
        children: (0, c.jsxs)("div", {
            className: ie()(SA.$K, SE.Vd),
            children: [
                (0, c.jsx)("div", { className: SA.mO, children: j.intl.string(j.t.H68X9x) }),
                (0, c.jsx)("div", { className: SA.GN, children: j.intl.string(j.t.T5Ilmw) }),
            ],
        }),
    });
}
let SO = (0, a.E2)(o.X.REGISTERED_GAMES_CURRENT_GAME_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t["MY9/Oe"])],
        Component: function () {
            let { robloxSubgameHistory: e, overrideExePaths: t } = AC(),
                n = (0, m.bG)([iH.Ay], () => iH.Ay.getVisibleGame());
            return null != n
                ? (0, c.jsx)(
                      SS,
                      {
                          rawGame: n,
                          isOverride: t.has(n.exePath),
                          nowPlaying: !0,
                          subgames: n.id === So.a7 ? e : void 0,
                      },
                      (0, iH.Es)(n),
                  )
                : (0, c.jsx)(Sj, {});
        },
    }),
    SL = (0, a.zZ)(o.X.REGISTERED_GAMES_CURRENT_GAME_CATEGORY, {
        useTitle: () => j.intl.string(j.t["MY9/Oe"]),
        buildLayout: () => [SO, Sv],
    }),
    SD = (0, a.t_)(o.X.REGISTERED_GAMES_PANEL, {
        useTitle: () => j.intl.string(j.t.AVDyEj),
        buildLayout: () => [SL, S_],
    }),
    SR = (0, a.i4)(o.X.REGISTERED_GAMES_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.AVDyEj),
        icon: Ss._,
        usePredicate: nA.Pi,
        buildLayout: () => [SD],
    }),
    SP = (0, a.WI)(o.X.GAMES_AND_APPS_SECTION, {
        useTitle: () => j.intl.string(j.t.BA9200),
        buildLayout: () => [SR, A7, Sl, E4],
    });
var SG = n(631670),
    SM = n(619499),
    SU = n(836602),
    SV = n(591179),
    Sk = n(854627),
    Sw = n(975732),
    SF = n(761508),
    SB = n(159001),
    Sz = n(344346),
    SX = n(919395),
    SY = n(699217);
function SH(e) {
    let { title: t, children: n } = e;
    return (0, c.jsxs)("div", {
        children: [(0, c.jsx)(h.D, { variant: "text-md/medium", className: SY.Vf, children: t }), n],
    });
}
function SK(e) {
    let {
        children: t,
        className: n,
        layoutClassName: i,
        profilePreview: l,
        profilePreviewTitle: s,
        nameplatePreview: r,
        stickyPreview: a = !0,
    } = e;
    return (0, c.jsx)("div", {
        className: ie()(SY.UA, n),
        children: (0, c.jsxs)("div", {
            className: ie()(SY.yt, i),
            children: [
                (0, c.jsx)("div", {
                    className: ie()(SY.Fp, a && SY.Oz),
                    children: (0, c.jsxs)(c.Fragment, {
                        children: [
                            (0, c.jsx)(SH, { title: s ?? j.intl.string(j.t.Zb06yP), children: l }),
                            null != r ? (0, c.jsx)(SH, { title: j.intl.string(j.t.x5CoXR), children: r }) : null,
                        ],
                    }),
                }),
                (0, c.jsx)("div", { className: SY.oB, children: t }),
            ],
        }),
    });
}
var SW = n(986687),
    SZ = n(101058),
    Sq = n(321191),
    SQ = n(696451),
    SJ = n(271078);
function S$() {
    return (0, c.jsxs)("div", {
        className: SJ.p$,
        children: [
            (0, c.jsx)("img", { src: "/assets/b3b15f93f9f43174.svg", alt: "", className: SJ.Sl }),
            (0, c.jsx)(h.D, { className: SJ.h8, variant: "heading-lg/extrabold", children: j.intl.string(j.t.Z1OZCV) }),
            (0, c.jsx)(z.E, { className: SJ.h8, variant: "text-md/normal", children: j.intl.string(j.t.ZSt4Tt) }),
            (0, c.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: SJ.h8,
                children: (0, c.jsx)(p.$, {
                    variant: "primary",
                    text: j.intl.string(j.t.jQ3pqt),
                    onClick: function () {
                        (0, tW.pX)(A.BVt.GUILD_DISCOVERY), (0, tP.default)();
                    },
                }),
            }),
        ],
    });
}
var S0 = n(81400),
    S1 = n(252732),
    S2 = n(355622),
    S3 = n(408018),
    S5 = n(138617),
    S6 = n(290386),
    S4 = n(594943);
let S8 = (0, tU.Ld)(),
    S7 = (0, b.createChannelRecord)({ id: "1", type: A.rbe.DM }),
    S9 = (0, tU.Ld)();
function Te(e) {
    let {
            sectionTitle: t,
            errors: n,
            onBioChange: i,
            pendingBio: l,
            placeholder: s,
            currentBio: r,
            disabled: a = !1,
        } = e,
        o = (0, S6.U)({ location: "profile_customization_about_me" }),
        [u, d] = g.useState(l ?? r),
        [m, A] = g.useState((0, S3.x7)(u)),
        E = g.useRef(r),
        h = g.useRef(!1);
    return (
        g.useEffect(() => {
            if (E.current !== r) {
                let e = (0, S3.x7)(r);
                d(r), A(e);
            }
            E.current = r;
        }, [r]),
        g.useEffect(() => {
            void 0 !== l || u === r || h.current || (d(r), A((0, S3.x7)(r)));
        }, [l, r, u]),
        (0, c.jsxs)(rD.A, {
            title: t,
            titleId: S8,
            description: j.intl.string(j.t.Bbw6Ac),
            errors: n,
            disabled: a,
            children: [
                (0, c.jsx)(S5.Ay, {
                    "aria-describedby": S9,
                    "aria-labelledby": S8,
                    className: S4.i,
                    innerClassName: S4.Z,
                    maxCharacterCount: o,
                    onChange: function (e, t, n) {
                        t !== u && (d(t), A(n), i(t));
                    },
                    placeholder: s,
                    channel: S7,
                    textValue: u,
                    richValue: m,
                    emojiPickerCloseOnModalOuterClick: !0,
                    parentModalKey: t9.USER_SETTINGS_MODAL_KEY,
                    type: S2.oU.PROFILE_BIO_INPUT,
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
                (0, c.jsx)(i8.A, { id: S9, children: j.intl.format(j.t["+DFxLc"], { maxLength: o }) }),
            ],
        })
    );
}
var Tt = n(930861),
    Tn = n(821956),
    Ti = n(562819),
    Tl = n(84540),
    Ts = n(848575);
function Tr(e) {
    let { user: t, guild: n, className: i, sectionTitle: l, forcedDivider: s = !1, withTutorial: r = !1 } = e,
        { analyticsLocations: a } = (0, eL.Ay)(),
        o = (0, SX.a4)({ user: t, guildId: n?.id }),
        { pendingAvatarDecoration: u, errors: d } = (0, SX.CP)(n?.id),
        g = r ? Tt.wL : sN.$n;
    return (0, c.jsx)(rD.A, {
        className: i,
        forcedDivider: s,
        hasBackground: !0,
        title: l,
        errors: d,
        children: (0, c.jsxs)("div", {
            className: Ts.NC,
            children: [
                (0, c.jsx)(g, {
                    size: sN.$n.Sizes.SMALL,
                    onClick: function () {
                        (0, Ti.L)({ analyticsLocations: a, guild: n });
                    },
                    className: ie()({ [Ts.yj]: r }),
                    children: j.intl.string(j.t.BVcYCx),
                }),
                (void 0 === u ? null != o : null != u) &&
                    (0, c.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: Ts.DT,
                        children: (0, c.jsx)(p.$, {
                            variant: "secondary",
                            size: "sm",
                            text: (0, Tn.uZ)(t, n) ? j.intl.string(j.t.CHf9iJ) : j.intl.string(j.t.OrokWm),
                            onClick: function () {
                                (0, Tl.p)({ guildId: n?.id, avatarDecoration: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var Ta = n(339984),
    To = n(831653);
let Tu = [{ name: "gif", extensions: ["gif"] }];
function Td(e) {
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
            withHighlight: m = !1,
        } = e,
        { newestAnalyticsLocation: A } = (0, eL.Ay)(),
        E = m ? Tt.wL : sN.$n,
        h = g.useCallback(() => {
            (0, S1.XD)({
                uploadType: Ta.HL.AVATAR,
                analyticsSource: A,
                filters: u ? Tu : void 0,
                guildId: r,
                isTryItOut: u,
            });
        }, [r, A, u]);
    return (0, c.jsx)(rD.A, {
        className: a,
        title: l,
        errors: n,
        disabled: o,
        forcedDivider: d,
        children: (0, c.jsxs)("div", {
            className: To.NC,
            children: [
                (0, c.jsx)(E, {
                    className: ie()({ [To.yj]: m }),
                    size: sN.$n.Sizes.SMALL,
                    onClick: h,
                    children: s ?? j.intl.string(j.t["4OynCD"]),
                }),
                t &&
                    (0, c.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: To.DT,
                        children: (0, c.jsx)(p.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != r ? j.intl.string(j.t.TDjKDm) : j.intl.string(j.t.twB3fz),
                            onClick: () => i(null),
                        }),
                    }),
            ],
        }),
    });
}
var Tc = n(248778),
    Tg = n(479183);
function Tm(e) {
    let { user: t, guildId: n, className: i } = e,
        l = rw.Ay.canUsePremiumProfileCustomization(t),
        { analyticsLocations: s } = (0, eL.Ay)(),
        {
            userDisplayNameStyles: r,
            guildDisplayNameStyles: a,
            pendingDisplayNameStyles: o,
            pendingErrors: u,
        } = (0, SX.B0)(t, n),
        d = (0, Tc.ux)("DisplayNameStylesSection"),
        [m, E] = (0, d5.kn)(d ? [er.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE] : []),
        h = m === er.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE,
        S = (0, g.useCallback)(() => {
            E(cn.i.TAKE_ACTION),
                e7.default.track(A.HAw.DISPLAY_NAME_STYLES_FROM_SETTINGS),
                (0, eD.L)({ analyticsLocations: s, guildId: n });
        }, [s, n, E]),
        T = (0, g.useCallback)(() => {
            (0, Tl.p)({ displayNameStyles: null }), e7.default.track(A.HAw.DISPLAY_NAME_STYLES_REMOVED);
        }, []),
        x = (0, g.useCallback)(() => {
            (0, Tl.p)({ guildId: n, displayNameStyles: null });
        }, [n]),
        f = void 0 !== o ? o : null != n ? a : r;
    return (0, c.jsx)(rD.A, {
        title: j.intl.string(eR.default["86GtGH"]),
        titleBadge: h ? (0, c.jsx)(e9.Lp, { text: j.intl.string(j.t.y2b7CA), className: Tg.A }) : void 0,
        className: i,
        showPremiumIcon: l,
        errors: u,
        children: (0, c.jsxs)("div", {
            className: Tg.N,
            children: [
                (0, c.jsx)(p.$, { variant: "primary", size: "sm", text: j.intl.string(eR.default.vJqrIg), onClick: S }),
                null == n &&
                    null != f &&
                    (0, c.jsx)(p.$, {
                        variant: "secondary",
                        size: "sm",
                        text: j.intl.string(eR.default.ymq8WQ),
                        onClick: T,
                    }),
                null != n &&
                    null != f &&
                    (0, c.jsx)(p.$, {
                        variant: "secondary",
                        size: "sm",
                        text: j.intl.string(eR.default["j/KRxc"]),
                        onClick: x,
                    }),
            ],
        }),
    });
}
var TA = n(637193),
    TE = n(946801);
function Th(e) {
    let { user: t, guild: n, titleIcon: i } = e,
        { analyticsLocations: l } = (0, eL.Ay)(),
        s = null != n,
        { userNameplate: r, guildNameplate: a, pendingNameplate: o, pendingErrors: u } = (0, SX.rv)(t, n?.id),
        d = g.useCallback(() => {
            (0, TA.p)({ analyticsLocations: l, guildId: n?.id });
        }, [l, n?.id]),
        m = g.useCallback(() => {
            (0, Tl.p)({ guildId: n?.id, nameplate: null });
        }, [n?.id]);
    return (0, c.jsx)(rD.A, {
        title: j.intl.string(j.t.x5CoXR),
        titleIcon: i,
        errors: u,
        children: (0, c.jsxs)("div", {
            className: TE.u,
            children: [
                (0, c.jsx)(p.$, { variant: "primary", size: "sm", text: j.intl.string(j.t.BwdeM1), onClick: d }),
                (void 0 === o ? (s ? a : r) != null : null != o) &&
                    (0, c.jsx)(p.$, {
                        variant: "secondary",
                        size: "sm",
                        text: s ? j.intl.string(j.t.CHf9iJ) : j.intl.string(j.t["9zwziY"]),
                        onClick: m,
                    }),
            ],
        }),
    });
}
var TS = n(617255);
function TT(e) {
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
        { newestAnalyticsLocation: g } = (0, eL.Ay)(),
        m = d ? Tt.wL : sN.$n;
    return (0, c.jsx)(rD.A, {
        className: s,
        title: j.intl.string(j.t.Vgdusv),
        showPremiumIcon: a,
        errors: n,
        disabled: r,
        forcedDivider: u,
        children: (0, c.jsxs)("div", {
            className: TS.NC,
            children: [
                (0, c.jsx)(m, {
                    className: ie()({ [TS.yj]: d }),
                    size: sN.$n.Sizes.SMALL,
                    onClick: () =>
                        (0, S1.XD)({ uploadType: Ta.HL.BANNER, analyticsSource: g, guildId: l, isTryItOut: o }),
                    children: j.intl.string(j.t.N0bC3P),
                }),
                t &&
                    (0, c.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: TS.DT,
                        children: (0, c.jsx)(p.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != l ? j.intl.string(j.t.jHlJNS) : j.intl.string(j.t.tT9n7D),
                            onClick: () => i(null),
                        }),
                    }),
            ],
        }),
    });
}
var Tx = n(617061),
    Tp = n(869438);
function Tf(e) {
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
        { analyticsLocations: u } = (0, eL.Ay)(),
        d = rw.Ay.canUsePremiumProfileCustomization(t),
        m = (0, SX.N2)({ user: t, guildId: n?.id }),
        { pendingProfileEffect: E, errors: h } = (0, SX.nZ)(n?.id);
    g.useEffect(() => {
        d &&
            e7.default.track(A.HAw.PREMIUM_UPSELL_VIEWED, {
                type: tk.e.PROFILE_EFFECTS_INLINE_SETTINGS,
                location_stack: u,
            });
    }, [d, u]);
    let S = a ? Tt.wL : sN.$n;
    return (0, c.jsx)(rD.A, {
        forcedDivider: r,
        borderType: oQ.i.PREMIUM,
        hasBackground: !0,
        title: s,
        showBorder: o,
        errors: h,
        className: l,
        children: (0, c.jsxs)("div", {
            className: Tp.NC,
            children: [
                (0, c.jsx)(S, {
                    size: sN.$n.Sizes.SMALL,
                    onClick: function () {
                        (0, Tx.W)({ analyticsLocations: u, guild: n, initialSelectedEffect: i });
                    },
                    className: ie()({ [Tp.yj]: a }),
                    children: j.intl.string(j.t["/dRfCf"]),
                }),
                (void 0 === E ? null != m : null != E) &&
                    (0, c.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: Tp.DT,
                        children: (0, c.jsx)(p.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != n ? j.intl.string(j.t.CHf9iJ) : j.intl.string(j.t.uMuafO),
                            onClick: function () {
                                (0, Tl.p)({ guildId: n?.id, profileEffect: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var T_ = n(13875),
    TN = n(515727),
    TI = n(566935);
function TC(e) {
    let { user: t, guild: n, sectionTitle: i } = e,
        { analyticsLocations: l } = (0, eL.Ay)(),
        s = (0, T_.sk)("ProfileFrameSection"),
        r = (0, SX.Xf)({ user: t, guildId: n?.id }),
        { pendingProfileFrame: a, errors: o } = (0, SX.Tu)(n?.id),
        [u, d] = (0, d5.kn)([er.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE]),
        g = u === er.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE;
    return s
        ? (0, c.jsx)(rD.A, {
              showBorder: g,
              borderType: g ? oQ.i.NEW_UPSELL : oQ.i.PREMIUM,
              hasBackground: g,
              title: i,
              titleBadge: g ? (0, c.jsx)(e9.Lp, { text: j.intl.string(j.t.y2b7CA), className: TI.Ad }) : void 0,
              description: g ? j.intl.string(j.t.yMoMAt) : void 0,
              errors: o,
              children: (0, c.jsxs)("div", {
                  className: TI.NC,
                  children: [
                      (0, c.jsx)(p.$, {
                          variant: "primary",
                          size: "sm",
                          text: j.intl.string(j.t["9/hmle"]),
                          onClick: function () {
                              (0, TN.w)({ analyticsLocations: l, guild: n }), d(cn.i.TAKE_ACTION);
                          },
                      }),
                      (void 0 === a ? null != r : null != a) &&
                          (0, c.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: TI.DT,
                              children: (0, c.jsx)(p.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  text: null != n ? j.intl.string(j.t.CHf9iJ) : j.intl.string(j.t.nQBruk),
                                  onClick: function () {
                                      (0, Tl.p)({ guildId: n?.id, profileFrame: null });
                                  },
                              }),
                          }),
                  ],
              }),
          })
        : null;
}
var Tb = n(602853),
    Ty = n(654107),
    Tv = n(999291),
    Tj = n(101928),
    TO = n(819169),
    TL = n(317097),
    TD = n(508274),
    TR = n(426399);
function TP(e) {
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
        d = g.useRef(null),
        m = (0, Tb.r)(nK.A.colors.BACKGROUND_BASE_LOW).hex(),
        E = nK.A.colors.BACKGROUND_MOD_MUTED.css,
        h = (0, S1.sN)(i),
        S = (0, TL.Hl)(i),
        T = S === m ? E : S,
        x = h ? nK.A.unsafe_rawColors.WHITE.css : nK.A.unsafe_rawColors.PRIMARY_530.css,
        p = (0, TO.A)(a),
        f = (0, TO.A)(o),
        [_, N] = g.useState((0, ak.A)());
    return (
        g.useEffect(() => {
            (p !== a || f !== o) && N((0, ak.A)());
        }, [o, a, f, p]),
        (0, c.jsx)(rU.Y, {
            targetElementRef: d,
            positionKey: _,
            renderPopout: (e) =>
                (0, c.jsx)(TD.VN, {
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
                return (0, c.jsxs)("div", {
                    ref: d,
                    className: ie()(TR.oP, { [TR.r9]: s }),
                    children: [
                        (0, c.jsx)(t8.D, {
                            ...n,
                            tabIndex: s ? -1 : 0,
                            onClick: s ? A.tEg : t,
                            style: { backgroundColor: S, borderColor: T },
                            className: TR.nf,
                            "aria-label": j.intl.string(j.t.Qp04hK),
                            focusProps: { ringTarget: d },
                            children: (0, c.jsx)(rk.R, {
                                size: "custom",
                                className: TR.BW,
                                width: 14,
                                height: 14,
                                color: x,
                            }),
                        }),
                        r,
                    ],
                });
            },
        })
    );
}
var TG = n(811160);
function TM(e) {
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
        g = (0, Tv.Ay)(t.id, r),
        { primaryColor: m, secondaryColor: A } = (0, Tj.A)({
            user: t,
            displayProfile: g,
            pendingThemeColors: i,
            isPreview: !0,
        }),
        E = rw.Ay.canUsePremiumProfileCustomization(t),
        h = null != n ? n : t.getAvatarURL(r, 80),
        S = (0, Tb.r)(nK.A.unsafe_rawColors.PRIMARY_530).hex(),
        T = (0, Ty.rh)(h, S, !1);
    return null == m || null == A
        ? null
        : (0, c.jsx)(rD.A, {
              title: j.intl.string(j.t.DMeO2X),
              disabled: !E && !s,
              className: ie()(TG.__invalid_profileThemesSection, a),
              showPremiumIcon: o,
              forcedDivider: d,
              children: (0, c.jsxs)("div", {
                  className: TG.hd,
                  children: [
                      (0, c.jsx)("div", {
                          className: TG.YX,
                          children: (0, c.jsx)(TP, {
                              onChange: (e) => l([e, A]),
                              color: m,
                              suggestedColors: T,
                              showEyeDropper: !0,
                              label: (0, c.jsx)(z.E, {
                                  className: TG.yz,
                                  color: "text-default",
                                  variant: "text-xs/normal",
                                  "aria-hidden": !0,
                                  children: j.intl.string(j.t.C3KTQk),
                              }),
                          }),
                      }),
                      (0, c.jsx)("div", {
                          className: TG.YX,
                          children: (0, c.jsx)(TP, {
                              onChange: (e) => l([m, e]),
                              color: A,
                              suggestedColors: T,
                              showEyeDropper: !0,
                              label: (0, c.jsx)(z.E, {
                                  className: TG.yz,
                                  color: "text-default",
                                  variant: "text-xs/normal",
                                  "aria-hidden": !0,
                                  children: j.intl.string(j.t["8elvy6"]),
                              }),
                          }),
                      }),
                      u &&
                          null != r &&
                          (0, c.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: TG.WA,
                              children: (0, c.jsx)(p.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  text: j.intl.string(j.t["L+GmoR"]),
                                  onClick: () => l([null, null]),
                              }),
                          }),
                  ],
              }),
          });
}
function TU(e) {
    let {
            sectionTitle: t,
            errors: n,
            onPronounsChange: i,
            pendingPronouns: l,
            placeholder: s,
            currentPronouns: r,
            disabled: a = !1,
        } = e,
        o = (0, tU.GV)();
    return (0, c.jsx)(rD.A, {
        title: t,
        titleId: o,
        errors: n,
        disabled: a,
        children: (0, c.jsx)(li.k, {
            "aria-labelledby": o,
            placeholder: s ?? j.intl.string(j.t.NPEUUu),
            maxLength: 40,
            value: l ?? r,
            onChange: function (e) {
                i(e === r ? void 0 : e);
            },
            disabled: a,
        }),
    });
}
var TV = n(427262),
    Tk = n(684732),
    Tw = n(576705),
    TF = n(522334);
function TB(e) {
    let { errors: t, pendingNick: n, currentNick: i, username: l, user: s, guild: r } = e,
        a = (0, m.bG)([Tw.A], () => Tw.A.can(A.xBc.CHANGE_NICKNAME, r) || Tw.A.can(A.xBc.MANAGE_NICKNAMES, r)),
        o = (0, EE.L)(tk.PremiumTypes.TIER_2);
    return (0, c.jsxs)(rD.A, {
        title: j.intl.string(j.t.me1lRk),
        errors: t,
        children: [
            (0, c.jsx)(li.k, {
                value: n ?? i ?? "",
                placeholder: l,
                maxLength: A.d0r,
                onChange: function (e) {
                    (0, Tl.p)({ guildId: r.id, nickname: e });
                },
                disabled: !a,
                helperText: a ? void 0 : j.intl.string(j.t.gzjxQi),
            }),
            o && (0, c.jsx)(Tm, { user: s, guildId: r.id, className: TF.F }),
        ],
    });
}
var Tz = n(816453);
let TX = "/assets/b25da78aa7949feb.png";
function TY(e) {
    let { user: t, showOverlay: n, children: i } = e,
        l = (0, uc.Ay)(),
        { analyticsLocations: s } = (0, eL.Ay)(tv.A.PREMIUM_UPSELL_OVERLAY);
    return (g.useEffect(() => {
        n &&
            e7.default.track(A.HAw.PREMIUM_UPSELL_VIEWED, {
                location_stack: s,
                type: tk.e.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE,
            });
    }, [n, s]),
    n)
        ? (0, c.jsxs)("div", {
              className: Tz.ry,
              children: [
                  (0, c.jsx)("div", { children: i }),
                  (0, c.jsxs)("div", {
                      className: Tz.Wc,
                      children: [
                          (0, c.jsx)("img", {
                              className: Tz.Tn,
                              alt: j.intl.string(j.t.LHFZQy),
                              src: (function (e) {
                                  switch (e) {
                                      case A.NJ8.DARK:
                                      case A.NJ8.DARKER:
                                      case A.NJ8.MIDNIGHT:
                                          return TX;
                                      case A.NJ8.LIGHT:
                                          return "/assets/a98f1410707fafea.png";
                                      default:
                                          return TX;
                                  }
                              })(l),
                          }),
                          (0, c.jsxs)("div", {
                              className: Tz._9,
                              children: [
                                  (0, c.jsx)(z.E, {
                                      variant: "text-lg/semibold",
                                      color: "text-overlay-light",
                                      children: j.intl.string(j.t.dMaDFX),
                                  }),
                                  (0, c.jsx)(z.E, {
                                      variant: "text-sm/normal",
                                      color: "text-overlay-light",
                                      children: j.intl.string(j.t.F7sgFH),
                                  }),
                              ],
                          }),
                          (0, c.jsx)(oq.A, {
                              size: sN.$n.Sizes.LARGE,
                              color: sN.$n.Colors.GREEN,
                              textOptions: {
                                  textOverride: rw.Ay.isPremium(t)
                                      ? j.intl.string(j.t.AfRWI8)
                                      : j.intl.string(j.t.nkdUym),
                              },
                              subscriptionTier: tk.pe.TIER_2,
                          }),
                      ],
                  }),
              ],
          })
        : i;
}
var TH = n(784075);
function TK() {
    let e = (0, m.bG)([l0.default], () => {
            let e = l0.default.getCurrentUser();
            return tl()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e;
        }),
        t = (0, EE.L)(tk.PremiumTypes.TIER_2),
        n = (0, m.bG)([SU.A, lc.A], () => lc.A.getGuild(SU.A.selectedGuildId));
    tl()(null != n, "guild should not be null");
    let {
            pendingAvatar: i,
            pendingNickname: l,
            pendingBanner: s,
            pendingBio: r,
            pendingPronouns: a,
            pendingThemeColors: o,
            errors: u,
        } = (0, m.cf)([SU.A], () => ({ ...SU.A.getPendingChanges(n.id), errors: SU.A.getErrors(n.id) })),
        d = (0, SZ.V7)({ userId: e.id, image: i }),
        g = (0, S0.EC)(n.id),
        A = (0, m.bG)([SQ.Ay], () => (null == n.id ? null : SQ.Ay.getMember(n.id, e.id))),
        E = (0, m.bG)([Sq.A], () => Sq.A.getGuildMemberProfile(e.id, n.id)),
        h = rw.Ay.canUsePremiumProfileCustomization(e),
        S = (0, SX.z5)(i, A?.avatar),
        T = (0, SX.Ac)(s, E?.banner),
        x = (0, Tk.l)(o, E?.themeColors),
        p = E?.bio ?? "",
        f = E?.pronouns ?? "";
    return (0, c.jsxs)("div", {
        className: TH.Q,
        children: [
            (0, c.jsx)(
                TB,
                {
                    errors: u?.nick ?? g?.nick,
                    username: TV.Ay.getName(e),
                    pendingNick: l,
                    currentNick: A?.nick,
                    user: e,
                    guild: n,
                },
                "nick",
            ),
            (0, c.jsx)(
                TU,
                {
                    sectionTitle: j.intl.string(j.t["+T3RI/"]),
                    errors: u?.pronouns,
                    onPronounsChange: (e) => (0, Tl.p)({ guildId: n.id, pronouns: e }),
                    pendingPronouns: a,
                    currentPronouns: f,
                },
                "pronouns",
            ),
            (0, c.jsxs)(TY, {
                user: e,
                showOverlay: !h,
                children: [
                    (0, c.jsx)(
                        Td,
                        {
                            sectionTitle: (0, c.jsxs)(c.Fragment, {
                                children: [
                                    j.intl.string(j.t.lqaIxI),
                                    (0, c.jsx)(i4.m, {
                                        text: j.intl.string(j.t["5AFxuK"]),
                                        children: (0, c.jsx)(rv.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: TH.a,
                                        }),
                                    }),
                                ],
                            }),
                            showRemoveAvatarButton: S,
                            onAvatarChange: function (e) {
                                if (null != n)
                                    return (0, S1.rM)(e, A?.avatar, (e) => (0, Tl.p)({ guildId: n.id, avatar: e }));
                            },
                            errors: u?.avatar,
                            guildId: n.id,
                            disabled: !h,
                        },
                        "avatar",
                    ),
                    (0, c.jsx)(
                        Tr,
                        {
                            sectionTitle: (0, c.jsxs)(c.Fragment, {
                                children: [
                                    j.intl.string(j.t["7v0T9P"]),
                                    (0, c.jsx)(i4.m, {
                                        text: j.intl.string(j.t["5AFxuK"]),
                                        children: (0, c.jsx)(rv.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: TH.a,
                                        }),
                                    }),
                                ],
                            }),
                            user: e,
                            guild: n,
                        },
                        "decoration",
                    ),
                    !t && (0, c.jsx)(Tm, { user: e, guildId: n.id }),
                    (0, c.jsx)(
                        Th,
                        {
                            user: e,
                            guild: n,
                            titleIcon: (0, c.jsx)(i4.m, {
                                text: j.intl.string(j.t["5AFxuK"]),
                                children: (0, c.jsx)(rv.t, { size: "md", color: "currentColor", className: TH.a }),
                            }),
                        },
                        "nameplate",
                    ),
                    (0, c.jsx)(
                        Tf,
                        {
                            sectionTitle: (0, c.jsxs)(c.Fragment, {
                                children: [
                                    j.intl.string(j.t.wR5wOo),
                                    (0, c.jsx)(i4.m, {
                                        text: j.intl.string(j.t["5AFxuK"]),
                                        children: (0, c.jsx)(rv.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: TH.a,
                                        }),
                                    }),
                                ],
                            }),
                            user: e,
                            guild: n,
                        },
                        "effect",
                    ),
                    (0, c.jsx)(
                        TC,
                        {
                            user: e,
                            guild: n,
                            sectionTitle: (0, c.jsxs)(c.Fragment, {
                                children: [
                                    j.intl.string(j.t.GWrZOd),
                                    (0, c.jsx)(i4.m, {
                                        text: j.intl.string(j.t["5AFxuK"]),
                                        children: (0, c.jsx)(rv.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: TH.a,
                                        }),
                                    }),
                                ],
                            }),
                        },
                        "frame",
                    ),
                    (0, c.jsx)(
                        TT,
                        {
                            showRemoveBannerButton: T,
                            errors: u?.banner,
                            onBannerChange: function (e) {
                                if (null != n)
                                    return (0, S1.rM)(e, E?.banner, (e) => (0, Tl.p)({ guildId: n.id, banner: e }));
                            },
                            guildId: n.id,
                            disabled: !h,
                        },
                        "banner",
                    ),
                    (0, c.jsx)(TM, {
                        user: e,
                        pendingAvatarSrc: d,
                        pendingColors: o,
                        onThemeColorsChange: (e) => (0, Tl.p)({ guildId: n.id, themeColors: e }),
                        guildId: n.id,
                        showResetThemeButton: x,
                    }),
                    (0, c.jsx)(
                        Te,
                        {
                            placeholder: j.intl.string(j.t["/7NKgv"]),
                            sectionTitle: (0, c.jsxs)(c.Fragment, {
                                children: [
                                    j.intl.string(j.t.ZzAR2Y),
                                    (0, c.jsx)(i4.m, {
                                        text: j.intl.string(j.t["5AFxuK"]),
                                        children: (0, c.jsx)(rv.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: TH.a,
                                        }),
                                    }),
                                ],
                            }),
                            onBioChange: (e) => (0, Tl.p)({ guildId: n.id, bio: e }),
                            errors: u?.bio ?? g?.bio,
                            pendingBio: r,
                            currentBio: p,
                            disabled: !h,
                        },
                        "about",
                    ),
                ],
            }),
        ],
    });
}
var TW = n(379550);
function TZ(e) {
    (0, ln.openModalLazy)(async () => {
        let { default: t } = await Promise.all([n.e("41509"), n.e("66901"), n.e("61129")]).then(n.bind(n, 475312));
        return (n) => (0, c.jsx)(t, { source: { ...e, page: A.liQ.GUILD_MEMBER_PROFILE_SETTINGS }, ...n });
    });
}
function Tq(e) {
    let { selectedGuild: t, onGuildChange: n } = e,
        { analyticsLocations: i } = (0, eL.Ay)(tv.A.USER_SETTINGS_GUILD_PROFILE),
        l = (0, m.bG)([l0.default], () => {
            let e = l0.default.getCurrentUser();
            return tl()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e;
        }),
        s = (0, m.bG)([SQ.Ay], () => (null != t ? SQ.Ay.getMember(t.id, l.id) : null)),
        r = (0, m.bG)([Sq.A], () => !Sq.A.isFetchingProfile(l.id, t?.id)),
        a = (0, m.bG)([e8.A], () => e8.A.hidePersonalInformation),
        { pendingAvatar: o, pendingNameplate: u, ...d } = (0, m.cf)([SU.A], () => SU.A.getPendingChanges(t?.id)),
        E = (0, SZ.V7)({ userId: l.id, image: o }),
        S = (0, SX.lw)({
            pendingValue: u,
            userValue: l?.collectibles?.nameplate,
            guildValue: s?.collectibles?.nameplate,
            guildId: t?.id,
        }),
        { pendingDisplayNameStyles: T } = (0, SX.B0)(l, t?.id);
    return (g.useEffect(() => () => e2.h.wait(SB.IM), []), a)
        ? (0, c.jsx)(aM.A, {})
        : r
          ? (0, c.jsxs)(eL.f5, {
                value: i,
                children: [
                    (0, c.jsx)(z.E, {
                        variant: "text-sm/normal",
                        children: j.intl.format(j.t["/PTB2E"], {
                            helpCenterLink: eS.A.getArticleURL(A.MVz.GUILD_PROFILES),
                        }),
                    }),
                    null != t
                        ? (0, c.jsxs)(c.Fragment, {
                              children: [
                                  (0, c.jsx)(rL.A, { guildId: t.id, onChange: n }),
                                  (0, c.jsx)(SK, {
                                      profilePreviewTitle: (0, c.jsx)(h.D, {
                                          variant: "heading-md/medium",
                                          className: TW.YV,
                                          children: j.intl.formatToPlainString(j.t.Tc0slG, { guildName: t?.name }),
                                      }),
                                      profilePreview: (0, c.jsx)(SW.A, {
                                          ...d,
                                          pendingAvatar: E,
                                          pendingDisplayNameStyles: T,
                                          user: l,
                                          guild: t,
                                          canUsePremiumCustomization: rw.Ay.canUsePremiumProfileCustomization(l),
                                          onUpsellClick: TZ,
                                          containerClassName: TW.ti,
                                      }),
                                      nameplatePreview: (0, c.jsx)(Sz.A, {
                                          ...d,
                                          pendingDisplayNameStyles: T,
                                          user: l,
                                          guildId: t?.id,
                                          nameplate: S,
                                          className: null == S ? TW.tJ : void 0,
                                          isHighlighted: !0,
                                      }),
                                      children: (0, c.jsx)(TK, {}),
                                  }),
                              ],
                          })
                        : (0, c.jsx)(S$, {}),
                ],
            })
          : (0, c.jsx)(aV.y, {});
}
var TQ = n(903209),
    TJ = n(834297);
function T$(e) {
    let { children: t, notice: n } = e;
    return (0, c.jsxs)("div", { className: TJ.r, children: [n, (0, c.jsx)("div", { children: t })] });
}
var T0 = n(269115),
    T1 = n(823092),
    T2 = n(839534),
    T3 = n(379197),
    T5 = n(488430),
    T6 = n(457421),
    T4 = n(940622),
    T8 = n(25176),
    T7 = n(341206);
let T9 = function () {
    let e,
        t,
        n,
        i,
        { analyticsLocations: l } = (0, eL.Ay)(tv.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL),
        s = g.useRef(null),
        {
            asset: r,
            popoutAsset: a,
            title: o,
            body: u,
            version: d,
            revertTextColor: E,
        } = ((e = (0, T4.mb)(T8.RN.UPSELL_BANNER)),
        (t = (0, T4.mb)(T8.RN.UPSELL_BANNER_POPOUT)),
        (n = (0, m.bG)([T6.A], () => T6.A.getMarketingBySurface(T3.R.EDIT_PROFILE_SETTINGS))),
        (i = g.useMemo(
            () =>
                null != n
                    ? n
                    : {
                          asset: "/assets/30e2c68819facd98.png",
                          popoutAsset: "/assets/c6d55507d7473057.png",
                          title: j.intl.string(j.t.QZVVBh),
                          body: j.intl.string(j.t.sajmAq),
                          version: 0,
                          revertTextColor: !1,
                      },
            [n],
        )),
        g.useMemo(
            () => ({ ...i, type: T5.G.BANNER, asset: e ?? i.asset, popoutAsset: t ?? i.popoutAsset }),
            [e, t, i],
        )),
        { navigateWithValidation: S } = (0, T1.L_)();
    return (
        g.useEffect(() => {
            e7.default.track(A.HAw.PREMIUM_UPSELL_VIEWED, {
                type: tk.e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
                location_stack: l,
                version: d,
            });
        }, [l, d]),
        (0, c.jsxs)("div", {
            ref: s,
            className: T7.kL,
            style: { backgroundImage: `url(${r})` },
            children: [
                (0, c.jsx)("div", {
                    className: T7.JS,
                    "aria-hidden": !0,
                    role: "presentation",
                    children: (0, c.jsx)("img", { src: a, className: T7.Qw, alt: "" }),
                }),
                (0, c.jsxs)("div", {
                    className: T7.Em,
                    children: [
                        (0, c.jsx)(h.D, {
                            variant: "heading-lg/extrabold",
                            color: E ? "text-overlay-dark" : "currentColor",
                            className: T7.DD,
                            children: o,
                        }),
                        (0, c.jsx)(z.E, {
                            variant: "text-sm/normal",
                            color: E ? "text-overlay-dark" : "currentColor",
                            children: u,
                        }),
                    ],
                }),
                (0, c.jsx)(p.$, {
                    onClick: function () {
                        S(() =>
                            (0, T2.Cz)({
                                analyticsLocations: l,
                                analyticsSource: tv.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
                            }),
                        );
                    },
                    variant: "overlay-primary",
                    text: j.intl.string(j.t.fYfGgK),
                }),
            ],
        })
    );
};
var xe = n(451909),
    xt = n(202639),
    xn = n(400669),
    xi = n(835071),
    xl = n(724651),
    xs = n(732280),
    xr = n(590180),
    xa = n(898461),
    xo = n(469054),
    xu = n(601298),
    xd = n(207803),
    xc = n(461797);
let xg = Object.keys(xc.jB);
function xm(e) {
    let t = null == e ? xg : xg.filter((t) => t !== e);
    return t[Math.floor(Math.random() * t.length)];
}
var xA = n(764336),
    xE = n(461893);
function xh(e) {
    let { preset: t, onShuffle: n } = e,
        i = (0, m.bG)([f.Ay], () => f.Ay.useReducedMotion),
        l = (0, xA.Xf)({ useReducedMotion: i }),
        { name: s, header: r } = g.useMemo(() => {
            let e = (0, xc.Wt)(t);
            return { name: e.getName(), header: e.getHeaderSrc() };
        }, [t]);
    return (0, c.jsxs)("div", {
        className: xE.kL,
        children: [
            (0, c.jsx)(t8.D, {
                onClick: () => {
                    n(), l.startAnimation(!1);
                },
                className: xE.x6,
                "aria-label": j.intl.string(j.t["44yJxh"]),
                children: l.render(),
            }),
            (0, c.jsxs)(t8.D, {
                onClick: () => {
                    n(), l.startAnimation(!1);
                },
                "aria-label": `${s}: ${j.intl.string(j.t["44yJxh"])}`,
                className: xE.Lt,
                children: [
                    (0, c.jsx)("img", { alt: "", "aria-hidden": !0, src: r, className: xE.L_ }),
                    (0, c.jsx)(z.E, {
                        className: xE._e,
                        variant: "text-sm/bold",
                        color: "text-overlay-light",
                        children: s,
                    }),
                ],
            }),
        ],
    });
}
var xS = n(511484),
    xT = n(811611),
    xx = n(515718),
    xp = n(507553);
function xf(e, t) {
    let n = xp.A.useField("scrollPosition"),
        i = (0, m.bG)([f.Ay], () => f.Ay.useReducedMotion);
    (0, g.useEffect)(() => {
        let l = e.current;
        if (null == l || n !== t) return;
        let s = requestAnimationFrame(() => {
            l.scrollIntoView({ behavior: i ? "auto" : "smooth" }), xp.A.setState({ scrollPosition: null });
        });
        return () => cancelAnimationFrame(s);
    }, [e, t, n, i]);
}
var x_ = n(844222),
    xN = n(4542);
let xI = "/assets/d4955aabdcb5bdee.png",
    xC = { assetOrigin: xo.E.NEW_ASSET, imageUri: xI, staticImageUri: xI, description: "", originalAsset: void 0 };
function xb(e) {
    let { user: t } = e,
        { reducedMotion: n } = g.useContext(x_.C),
        {
            pendingAvatar: i,
            pendingBanner: l,
            pendingAvatarDecoration: s,
            pendingProfileEffect: r,
            pendingDisplayNameStyles: a,
            pendingThemeColors: o,
            pendingPronouns: u,
            pendingBio: d,
            tryItOutThemeColors: A,
            tryItOutAvatar: E,
            tryItOutBanner: h,
            tryItOutAvatarDecoration: S,
            tryItOutDisplayNameStyles: T,
        } = (0, m.cf)([SU.A], () => {
            let e = SU.A.getPendingChanges(),
                t = SU.A.getTryItOutChanges();
            return { ...e, ...t };
        }),
        x = (0, SZ.V7)({ userId: t.id, image: E ?? i });
    return (0, c.jsx)(SW.A, {
        user: t,
        pendingPronouns: u,
        pendingBio: d,
        pendingBanner: h ?? l ?? xC,
        pendingDisplayNameStyles: T ?? a,
        pendingAvatar: x,
        pendingThemeColors: A ?? o,
        pendingAvatarDecoration: void 0 !== S ? S : s,
        pendingProfileEffect: r,
        avatarClassName: null != E || null != i || n.enabled ? void 0 : xN.WX,
        containerClassName: xN.ti,
        canUsePremiumCustomization: !0,
        isTryItOut: !0,
        hideExampleButton: !0,
    });
}
var xy = n(530702);
function xv(e) {
    let { user: t, isVisible: n, shouldShow: i } = e,
        l = rw.Ay.isPremium(t),
        s = rw.Ay.canUseAnimatedAvatar(t),
        {
            pendingAvatar: r,
            pendingThemeColors: a,
            tryItOutThemeColors: o,
            tryItOutAvatar: u,
            tryItOutBanner: d,
        } = (0, m.cf)([SU.A], () => {
            let e = SU.A.getPendingChanges(),
                t = SU.A.getErrors(),
                n = SU.A.getTryItOutChanges();
            return { ...e, ...n, errors: t };
        }),
        { preset: E, onShuffle: S } = (function () {
            let [e, t] = (0, g.useState)(xm()),
                {
                    banner: n,
                    themeColors: i,
                    avatarDecorationSkuId: l,
                    displayNameStyles: s,
                } = (0, g.useMemo)(() => {
                    let t = (0, xc.Wt)(e);
                    return {
                        banner: (0, xu.X)({
                            assetOrigin: xo.E.NEW_ASSET,
                            imageUri: t.getBannerSrc(!1),
                            staticImageUri: t.getBannerSrc(!0),
                            description: t.getBannerAltText(),
                            originalAsset: void 0,
                        }),
                        themeColors: t.themeColors,
                        avatarDecorationSkuId: t.avatarDecorationSkuId,
                        displayNameStyles: t.displayNameStyles,
                    };
                }, [e]),
                r = (0, m.bG)([xr.A], () => {
                    let e = xr.A.getProduct(l);
                    return (0, xa.T)(e?.items[0]) ? e.items[0] : null;
                });
            (0, g.useEffect)(() => {
                (0, xd.w5)({ banner: n, themeColors: i, avatarDecoration: r, displayNameStyles: s });
            }, [n, i, r, s]);
            let a = (0, g.useCallback)(() => {
                let n = xm(e);
                t(n), e7.default.track(A.HAw.TRY_IT_OUT_PRESET_SHUFFLED, { preset: n });
            }, [e]);
            return { preset: e, onShuffle: a };
        })(),
        T = g.useRef(null);
    xf(T, e_._F.TRY_IT_OUT);
    let { analyticsLocations: x, sourceAnalyticsLocations: p } = (0, eL.Ay)(tv.A.USER_SETTINGS_TRY_OUT_PREMIUM);
    function f(e) {
        e &&
            (d?.imageUri.startsWith("https:") === !0
                ? fetch(d.imageUri)
                      .then((e) => e.blob())
                      .then((e) => (0, xx.We)(e))
                      .then((e) => {
                          (0, Tl.p)({ avatar: u, themeColors: o, banner: { ...d, imageUri: e } });
                      })
                      .catch(() => {
                          (0, Tl.p)({ avatar: u, themeColors: o });
                      })
                : null != d
                  ? (0, Tl.p)({ avatar: u, themeColors: o, banner: d })
                  : (0, Tl.p)({ avatar: u, themeColors: o }),
            e7.default.track(A.HAw.TRY_IT_OUT_PRESET_SELECTED, { preset: E }));
    }
    g.useEffect(() => {
        n &&
            e7.default.track(A.HAw.PREMIUM_UPSELL_VIEWED, {
                type: tk.e.PREMIUM_PROFILE_TRY_IT_OUT,
                location: { page: A.liQ.USER_SETTINGS },
                location_stack: p,
            });
    }, [p, t, n]);
    let _ = (0, xs.V)()?.subscription_trial?.sku_id === tk.pe.TIER_2,
        N = (0, xl.O)(),
        I = (0, xS.U9)(N, tk.pe.TIER_2);
    return i
        ? (0, c.jsx)(eL.f5, {
              value: x,
              children: (0, c.jsxs)(oQ.A, {
                  ref: T,
                  className: xy.MT,
                  type: oQ.i.PREMIUM,
                  isShown: !0,
                  hasBackground: !0,
                  children: [
                      (0, c.jsx)(SK, {
                          stickyPreview: !1,
                          layoutClassName: xy.th,
                          profilePreviewTitle: (0, c.jsxs)(c.Fragment, {
                              children: [
                                  (0, c.jsx)(rv.t, { size: "md", color: "currentColor", className: xy.PC }),
                                  j.intl.string(j.t.gMlDNd),
                              ],
                          }),
                          profilePreview: (0, c.jsxs)(c.Fragment, {
                              children: [(0, c.jsx)(xh, { preset: E, onShuffle: S }), (0, c.jsx)(xb, { user: t })],
                          }),
                          children: (0, c.jsxs)("div", {
                              children: [
                                  (0, c.jsxs)("div", {
                                      children: [
                                          (0, c.jsx)(h.D, {
                                              variant: "heading-xl/extrabold",
                                              children: j.intl.string(j.t["2zGdAW"]),
                                          }),
                                          (0, c.jsx)(z.E, {
                                              className: xy.h_,
                                              variant: "text-sm/normal",
                                              children: j.intl.string(j.t.xeEC20),
                                          }),
                                      ],
                                  }),
                                  (0, c.jsx)(TM, {
                                      className: xy.fz,
                                      user: t,
                                      pendingAvatarSrc: (0, SZ.V7)({ userId: t.id, image: u ?? r }),
                                      pendingColors: o ?? a,
                                      onThemeColorsChange: xd.a,
                                      showPremiumIcon: !1,
                                      preventDisabled: !0,
                                  }),
                                  (0, c.jsx)(TT, {
                                      className: xy.fz,
                                      isTryItOut: !0,
                                      showRemoveBannerButton: null != d,
                                      onBannerChange: xd.xe,
                                      showPremiumIcon: !1,
                                  }),
                                  !s &&
                                      (0, c.jsx)(Td, {
                                          className: xy.fz,
                                          isTryItOut: !0,
                                          onAvatarChange: xd.e$,
                                          showRemoveAvatarButton: !1,
                                          changeAvatarButtonText: j.intl.string(j.t["7z0D1c"]),
                                          sectionTitle: j.intl.string(j.t.vtFfPX),
                                      }),
                                  (0, c.jsx)(Tm, { user: t, className: xy.fz }),
                                  !_ &&
                                      (0, c.jsx)(z.E, {
                                          variant: "text-sm/normal",
                                          children: j.intl.string(j.t["smo74/"]),
                                      }),
                              ],
                          }),
                      }),
                      !_ &&
                          (0, c.jsx)(xt.d, {
                              onSubscribeModalClose: f,
                              className: xy.Kv,
                              showUpsell: !0,
                              text: j.intl.format(j.t.TmfgI2, {
                                  onClick: () => {
                                      (0, xi.K)({ onSubscribeFinish: f });
                                  },
                              }),
                              button: l
                                  ? j.intl.string(j.t.AfRWI8)
                                  : I
                                    ? j.intl.formatToPlainString(j.t.bkQ4bH, { percent: N?.discount.amount })
                                    : j.intl.string(j.t.pj0XBN),
                              position: "inline",
                          }),
                      _ &&
                          (0, c.jsxs)("div", {
                              children: [
                                  (0, c.jsx)("div", { className: xy.BU }),
                                  (0, c.jsx)(xT.Ay, {
                                      type: tk.e.CUSTOM_PROFILE_TRY_OUT_UPSELL,
                                      subscriptionTier: tk.pe.TIER_2,
                                  }),
                              ],
                          }),
                  ],
              }),
          })
        : null;
}
var xj = n(814390),
    xO = n(909536),
    xL = n(843282),
    xD = n(145497),
    xR = n(685073),
    xP = n(534400),
    xG = n(581781),
    xM = n(743981),
    xU = n(217510);
let xV = (0, tU.Ld)(),
    xk = g.memo(function (e) {
        let { availablePrimaryGuilds: t, pendingPrimaryGuildId: n, onChange: i } = e,
            l = g.useMemo(() => new Map(t.map((e) => [e.id, e])), [t]),
            s = (0, m.bG)([l0.default], () => (0, xR.Zo)(l0.default.getCurrentUser()?.primaryGuild).guildId),
            r = void 0 !== n ? n : s,
            a = g.useMemo(
                () => t.reduce((e, t) => (t.profile?.tag != null && e.push({ label: t.name, value: t.id }), e), []),
                [t],
            ),
            o = g.useCallback(
                (e) => {
                    if (null == e) return null;
                    let t = l.get(e.value);
                    if (null == t) return null;
                    let n = t.profile?.tag;
                    return null == n
                        ? null
                        : (0, c.jsx)(xG.A, {
                              guildTag: n,
                              guildBadge: t.profile?.badge ?? void 0,
                              guildId: t.id,
                              guildName: e.label,
                              guildIcon: t.icon,
                              guildIconSize: 32,
                          });
                },
                [l],
            ),
            u = g.useCallback(
                (e) => {
                    if (null == e) return null;
                    let t = l.get(e.value);
                    return null == t || null == t.profile?.tag
                        ? null
                        : (0, c.jsx)(xD.j, {
                              guildId: t.id,
                              guildName: t.name,
                              guildIcon: t.icon,
                              iconSize: 32,
                              animate: !1,
                          });
                },
                [l],
            ),
            d = g.useCallback(
                (e) => {
                    if (null == e) return null;
                    let t = l.get(e.value);
                    if (null == t) return null;
                    let n = t.profile?.tag;
                    return null == n
                        ? null
                        : (0, c.jsx)(xP.o9, {
                              guildId: t.id,
                              guildTag: n,
                              guildBadge: t.profile?.badge ?? void 0,
                              badgeSize: xM.Sl.SIZE_16,
                              textColor: "interactive-text-default",
                              textVariant: "text-sm/semibold",
                          });
                },
                [l],
            ),
            A = g.useCallback(
                (e) => {
                    let t = e[0];
                    return null == t ? null : (0, c.jsx)(c.Fragment, { children: o(t) });
                },
                [o],
            ),
            E = g.useCallback(
                (e) => {
                    i?.(e);
                },
                [i],
            ),
            h = g.useCallback((e) => e === r, [r]),
            S = g.useCallback((e) => e, []),
            T = g.useCallback(() => {
                i?.(null);
            }, [i]),
            x = g.useRef(null);
        return (
            xf(x, e_._F.GUILD_TAG),
            (0, c.jsxs)(rD.A, {
                title: j.intl.string(j.t.Pdd1nd),
                titleId: xV,
                ref: x,
                children: [
                    (0, c.jsx)(z.E, {
                        className: xU.VA,
                        variant: "text-sm/normal",
                        children: j.intl.string(j.t.mlZ6Jx),
                    }),
                    (0, c.jsx)(xL.Pw, {
                        className: xU.Lt,
                        optionClassName: xU.S0,
                        isSelected: h,
                        options: a,
                        select: E,
                        renderLeading: u,
                        renderTrailing: d,
                        renderOptionValue: A,
                        serialize: S,
                        clear: T,
                        clearable: null != r,
                        maxVisibleItems: 8,
                        "data-migration-pending": !0,
                    }),
                ],
            })
        );
    });
var xw = n(318785),
    xF = n(992526),
    xB = n(470739);
let xz = function () {
    return (0, xF.J9)({ location: "UserSettingsProfileCustomization" })
        ? (0, c.jsx)(rD.A, {
              title: j.intl.string(j.t.l6w3Vj),
              description: j.intl.string(j.t.joHqdj),
              children: (0, c.jsx)(p.$, {
                  text: j.intl.string(j.t.wRraFx),
                  onClick: () => {
                      (0, xB._)();
                  },
                  size: "sm",
              }),
          })
        : null;
};
var xX = n(182817);
let xY = (0, tU.Ld)();
function xH(e) {
    let t = (0, EE.L)(tk.PremiumTypes.TIER_2);
    return (0, c.jsxs)(rD.A, {
        errors: e.errors,
        disabled: e.disabled,
        title: j.intl.string(j.t["9AjdkD"]),
        titleId: xY,
        children: [
            (0, c.jsx)("div", {
                children: (0, c.jsx)(li.k, {
                    "aria-labelledby": xY,
                    placeholder: e.placeholder,
                    maxLength: A.zzC,
                    onChange: e.onGlobalNameChange,
                    value: e.pendingGlobalName ?? e.currentGlobalName ?? "",
                }),
            }),
            t && (0, c.jsx)(Tm, { user: e.user, className: xX.F }),
        ],
    });
}
var xK = n(273151);
function xW(e) {
    let { legacyUsername: t, pendingLegacyUsernameDisabled: n } = e,
        i = v.m$.useSetting(),
        l = void 0 !== n ? n : i;
    return (0, c.jsx)("div", {
        className: xK.u,
        children: (0, c.jsx)(tK.d, {
            label: j.intl.string(j.t["3cWDuO"]),
            description: l ? null : j.intl.formatToPlainString(j.t.aYhclf, { username: t }),
            checked: !l,
            onChange: (e) => {
                !e === i ? (0, SG._e)() : (0, Tl.p)({ legacyUsernameDisabled: !e });
            },
        }),
    });
}
function xZ(e) {
    let { user: t, savedUserColor: n, pendingColor: i, setPendingAccentColor: l } = e,
        s = t.getAvatarURL(null, 80),
        r = (0, Tb.r)(nK.A.unsafe_rawColors.PRIMARY_530).hex(),
        a = (0, Ty.rh)(s, r, !1),
        o = (0, TL.LX)(a[0]);
    return (0, c.jsx)(rD.A, {
        title: j.intl.string(j.t["/X3fkf"]),
        children: (0, c.jsx)(TP, { onChange: (e) => l(e), color: i ?? n ?? o, suggestedColors: a, showEyeDropper: !0 }),
    });
}
var xq = n(518477);
let xQ = function () {
    let e = (0, m.bG)([o9.default], () => o9.default.getId());
    return (0, c.jsx)(rD.A, {
        title: j.intl.string(j.t.Jzj9q4),
        children: (0, c.jsx)(p.$, {
            text: j.intl.string(j.t.Geikwq),
            onClick: () => {
                (0, Sw.openUserProfileModal)({
                    userId: e,
                    sourceAnalyticsLocations: [tv.A.USER_SETTINGS_USER_PROFILE],
                    hideRestrictedProfile: !0,
                    tabSection: xq.RP.WIDGETS,
                });
            },
            size: "sm",
        }),
    });
};
var xJ = n(577997);
function x$() {
    let e = (0, m.bG)([l0.default], () => {
            let e = l0.default.getCurrentUser();
            return tl()(null != e, "DefaultCustomizationSections: user cannot be undefined"), e;
        }),
        t = (0, m.bG)([Sq.A], () => Sq.A.getUserProfile(e.id)),
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
            errors: g,
        } = (0, m.cf)([SU.A], () => {
            let e = SU.A.getPendingChanges(),
                t = SU.A.getErrors();
            return { ...e, errors: t };
        }),
        A = (0, SZ.V7)({ userId: e.id, image: n }),
        E = (0, S0.EC)(),
        h = rw.Ay.canUsePremiumProfileCustomization(e),
        S = (0, SX.z5)(n, e.avatar),
        T = (0, SX.Ac)(l, t?.banner),
        x = (0, Tv.Ay)(e.id),
        p = x?.getLegacyUsername(),
        f = (g.global_name?.length ?? 0) > 0 ? g.global_name : (E?.nick ?? []),
        _ = (g.bio?.length ?? 0) > 0 ? g.bio : (E?.bio ?? []),
        N = (0, xw.b)();
    return (0, c.jsxs)("div", {
        className: xJ.Q,
        children: [
            (0, c.jsx)(xH, {
                placeholder: e.username,
                errors: f,
                currentGlobalName: e.globalName,
                pendingGlobalName: i,
                onGlobalNameChange: (e) => (0, Tl.p)({ globalName: e }),
                user: e,
            }),
            (0, c.jsx)(
                TU,
                {
                    sectionTitle: j.intl.string(j.t["+T3RI/"]),
                    errors: g.pronouns,
                    onPronounsChange: (e) => (0, Tl.p)({ pronouns: e }),
                    pendingPronouns: r,
                    currentPronouns: t?.pronouns ?? "",
                },
                "pronouns",
            ),
            (0, c.jsx)(xQ, {}),
            (0, c.jsx)(
                Td,
                {
                    onAvatarChange: (e) => {
                        (0, Tl.p)({ avatar: e }), (0, SX.WU)(null == e ? "remove" : "set");
                    },
                    showRemoveAvatarButton: S,
                    errors: g.avatar,
                    sectionTitle: j.intl.string(j.t.lqaIxI),
                    forcedDivider: !0,
                },
                "avatar",
            ),
            (0, c.jsx)(Tr, { user: e, sectionTitle: j.intl.string(j.t["7v0T9P"]) }, "decoration"),
            (0, c.jsx)(Th, { user: e }),
            (0, c.jsx)(Tf, { user: e, sectionTitle: j.intl.string(j.t.wR5wOo) }, "effect"),
            (0, c.jsx)(TC, { user: e, sectionTitle: j.intl.string(j.t.GWrZOd) }, "frame"),
            h
                ? (0, c.jsxs)(c.Fragment, {
                      children: [
                          (0, c.jsx)(
                              TT,
                              {
                                  showRemoveBannerButton: T,
                                  errors: g.banner,
                                  onBannerChange: (e) => (0, Tl.p)({ banner: e }),
                                  forcedDivider: !0,
                              },
                              "banner",
                          ),
                          (0, c.jsx)(TM, {
                              user: e,
                              pendingAvatarSrc: A,
                              pendingColors: o,
                              onThemeColorsChange: (e) => (0, Tl.p)({ themeColors: e }),
                              forcedDivider: !0,
                          }),
                      ],
                  })
                : (0, c.jsx)(
                      xZ,
                      {
                          user: e,
                          savedUserColor: t?.accentColor,
                          pendingColor: a,
                          setPendingAccentColor: (e) => (0, Tl.p)({ accentColor: e }),
                      },
                      "color",
                  ),
            (0, c.jsx)(
                Te,
                {
                    sectionTitle: j.intl.string(j.t.ZzAR2Y),
                    errors: _,
                    onBioChange: (e) => (0, Tl.p)({ bio: e }),
                    pendingBio: s,
                    currentBio: t?.bio ?? "",
                },
                "bio",
            ),
            N.length > 0 &&
                (0, c.jsx)(xk, {
                    availablePrimaryGuilds: N,
                    pendingPrimaryGuildId: d,
                    onChange: (e) => (0, Tl.p)({ primaryGuildId: e }),
                }),
            null != p && (0, c.jsx)(xW, { legacyUsername: p, pendingLegacyUsernameDisabled: u }, "legacy_username"),
            (0, c.jsx)(xz, {}, "badges"),
        ],
    });
}
function x0() {
    (0, ln.openModalLazy)(async () => {
        let { default: e } = await Promise.all([n.e("41509"), n.e("66901"), n.e("41704")]).then(n.bind(n, 562011));
        return (t) =>
            (0, c.jsx)(e, {
                ...t,
                source: {
                    page: A.liQ.USER_SETTINGS,
                    section: A.JJy.SETTINGS_CUSTOMIZE_PROFILE,
                    object: A.ZSU.BUTTON_CTA,
                    type: A.AnalyticsObjectTypes.BUY,
                },
            });
    });
}
var x1 = n(157723);
function x2() {
    let e = (0, m.bG)([l0.default], () => {
            let e = l0.default.getCurrentUser();
            return tl()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e;
        }),
        t = (0, m.bG)([e8.A], () => e8.A.hidePersonalInformation),
        {
            pendingBio: n,
            pendingAvatar: i,
            pendingNameplate: l,
            showNotice: s,
            ...r
        } = (0, m.cf)([SU.A], () => ({ ...SU.A.getPendingChanges(), showNotice: SU.A.showNotice() })),
        a = (0, SZ.V7)({ userId: e.id, image: i }),
        o = (0, SX.lw)({ pendingValue: l, userValue: e?.collectibles?.nameplate }),
        u = (0, xj.A)() && null != n ? xe.Ay.parse(void 0, n).content : n,
        d = rw.Ay.canUsePremiumProfileCustomization(e),
        E = (0, xO.St)("edit-profile-upsell"),
        { analyticsLocations: h } = (0, eL.Ay)(tv.A.USER_SETTINGS_USER_PROFILE);
    g.useEffect(() => () => e2.h.wait(SG.IM), []);
    let [S, T] = g.useState(!1),
        x = !d,
        f = g.useRef(null);
    return t
        ? (0, c.jsx)(aM.A, {})
        : (0, c.jsxs)(eL.f5, {
              value: h,
              children: [
                  (0, c.jsx)(T9, {}),
                  (0, c.jsx)(SK, {
                      profilePreview: (0, c.jsx)(SW.A, {
                          user: e,
                          canUsePremiumCustomization: d,
                          onUpsellClick: x0,
                          pendingBio: u,
                          ...r,
                          pendingAvatar: a,
                          containerClassName: x1.ti,
                      }),
                      nameplatePreview: (0, c.jsx)(Sz.A, {
                          user: e,
                          nameplate: o,
                          ...r,
                          className: null == o ? x1.tJ : void 0,
                          isHighlighted: !0,
                      }),
                      children: (0, c.jsx)(x$, {}),
                  }),
                  (0, c.jsx)(T0.L, {
                      innerRef: f,
                      onChange: (e) => T(e),
                      threshold: 0.25,
                      active: x,
                      children: (0, c.jsx)("div", {
                          ref: f,
                          children: (0, c.jsx)(xv, { user: e, shouldShow: x, isVisible: S }),
                      }),
                  }),
                  x &&
                      !s &&
                      (0, c.jsx)(xt.d, {
                          className: x1.EL,
                          showUpsell: !S,
                          text: j.intl.format(j.t.TmfgI2, { onClick: () => (0, xi.K)({}) }),
                          textVariant: "heading-md/medium",
                          useUpdatedStyling: !0,
                          leadingAction: E
                              ? (0, c.jsx)(xn.l, { size: "md", location: tv.A.PREMIUM_WISHLIST_EDIT_PROFILE_UPSELL })
                              : void 0,
                          button: (0, c.jsx)("div", {
                              className: x1.Xl,
                              children: (0, c.jsx)(p.$, {
                                  variant: "overlay-primary",
                                  onClick: () => {
                                      e7.default.track(A.HAw.TRY_IT_OUT_PRESET_CLICKED, {
                                          cta_variant: "floating_action_button",
                                      }),
                                          f?.current?.scrollIntoView({ behavior: "smooth" });
                                  },
                                  text: j.intl.string(j.t.uw9zI7),
                                  icon: rv.t,
                              }),
                          }),
                      }),
              ],
          });
}
var x3 = n(625494);
n(46121);
var x5 = n(521078);
let x6 = { [e_.Eq.USER_PROFILE]: "main_profile_tab", [e_.Eq.GUILD]: "guild_profile_tab" },
    x4 = (0, a.E2)(o.X.PROFILE_SETTING, {
        Component: function () {
            let e = (0, m.bG)([lg.A, u0.Ay, SU.A], () => {
                    let e = SU.A.selectedGuildId ?? lg.A.getGuildId();
                    return null == e || SU._.has(e) ? u0.Ay.getFlattenedGuildIds().find((e) => !SU._.has(e)) : e;
                }),
                t = (0, m.bG)([lc.A], () => lc.A.getGuild(e)),
                n = (0, m.bG)([SU.A], () => SU.A.showNotice()),
                i = (0, m.bG)([l0.default], () => l0.default.getCurrentUser()),
                l = xp.A.useField("subsection");
            return (
                g.useEffect(() => {
                    (0, n1._)(x6[l]);
                }, [l]),
                g.useEffect(() => {
                    null != i && t?.id != null && (0, TQ.A)(i.id, i.getAvatarURL(t?.id, 80), { guildId: t?.id });
                }, [t?.id, i]),
                (0, c.jsx)(T$, {
                    children: (0, c.jsxs)(uT.F, {
                        component: (0, c.jsx)(i8.A, {
                            children: (0, c.jsx)(h.D, {
                                variant: "heading-xl/normal",
                                children: j.intl.string(j.t["vi7f+q"]),
                            }),
                        }),
                        children: [
                            (0, c.jsxs)(SF.V, {
                                className: x5.$H,
                                type: "top",
                                look: "brand",
                                selectedItem: l,
                                onItemSelect: function (e) {
                                    if (l !== e) {
                                        if (n) {
                                            (0, n2.fO)({ duration: 300, intensity: 1.4 }),
                                                x3._.dispatch(A.jej.EMPHASIZE_NOTICE);
                                            return;
                                        }
                                        e === e_.Eq.GUILD && null != t && (0, SB.V2)(t.id),
                                            xp.A.setState({ subsection: e });
                                    }
                                },
                                children: [
                                    (0, c.jsx)(
                                        SF.V.Item,
                                        {
                                            className: x5.YU,
                                            id: e_.Eq.USER_PROFILE,
                                            children: j.intl.string(j.t["2p07FR"]),
                                        },
                                        e_.Eq.USER_PROFILE,
                                    ),
                                    (0, c.jsx)(
                                        SF.V.Item,
                                        {
                                            className: ie()(x5.YU, x5.HY),
                                            "aria-label": j.intl.string(j.t.kPHroX),
                                            id: e_.Eq.GUILD,
                                            children: j.intl.string(j.t.kPHroX),
                                        },
                                        e_.Eq.GUILD,
                                    ),
                                ],
                            }),
                            l === e_.Eq.GUILD
                                ? (0, c.jsx)(Tq, {
                                      selectedGuild: t,
                                      onGuildChange: function (e) {
                                          if (n) {
                                              (0, n2.fO)({ duration: 300, intensity: 1.4 }),
                                                  x3._.dispatch(A.jej.EMPHASIZE_NOTICE);
                                              return;
                                          }
                                          null != e && (0, SB.JJ)(e.id);
                                      },
                                  })
                                : (0, c.jsx)(x2, {}),
                        ],
                    }),
                })
            );
        },
        useSearchTerms: () => [
            j.intl.string(j.t["vi7f+q"]),
            j.intl.string(j.t.Ip9nBS),
            j.intl.string(j.t["2p07FR"]),
            j.intl.string(j.t["7vhiqk"]),
            j.intl.string(j.t.kPHroX),
            j.intl.string(j.t.lqaIxI),
            j.intl.string(j.t.Vgdusv),
            j.intl.string(j.t.DMeO2X),
        ],
    }),
    x8 = (0, a.zZ)(o.X.PROFILE_CATEGORY, { buildLayout: () => [x4] });
var x7 = n(938706);
function x9() {
    let e = (0, m.bG)([l0.default], () => l0.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: n } = (0, Sk.A)({ userId: e?.id, size: x._3.SIZE_48 });
    return null == e
        ? null
        : (0, c.jsxs)("div", {
              className: x7.a5,
              children: [
                  (0, c.jsx)(T.eu, {
                      src: t,
                      avatarDecoration: n,
                      size: x._3.SIZE_48,
                      "aria-label": j.intl.string(j.t.lqaIxI),
                  }),
                  (0, c.jsxs)("div", {
                      className: x7.FS,
                      children: [
                          (0, c.jsx)(z.E, {
                              color: "text-strong",
                              variant: "text-md/medium",
                              lineClamp: 1,
                              children: e.globalName ?? e.username,
                          }),
                          (0, c.jsxs)("div", {
                              className: x7.Fk,
                              children: [
                                  (0, c.jsx)(z.E, {
                                      variant: "text-sm/normal",
                                      color: "currentColor",
                                      lineClamp: 1,
                                      children: j.intl.string(j.t.Ip9nBS),
                                  }),
                                  (0, c.jsx)(rk.R, { size: "xxs", color: "currentColor" }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
}
let pe = (0, a.t_)(o.X.PROFILE_PANEL, {
        useTitle: () => j.intl.string(j.t["vi7f+q"]),
        notice: { stores: [SU.A], element: SM.A },
        initialize: () => () =>
            e2.h.wait(() => {
                (0, SG.F7)();
            }),
        buildLayout: () => [x8],
    }),
    pt = (0, a.i4)(o.X.PROFILE_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["vi7f+q"]),
        icon: pi,
        StronglyDiscouragedCustomComponent: x9,
        usePredicate: () => !(0, SV.X)("user_settings_sidebar"),
        buildLayout: () => [pe],
    }),
    pn = (0, a.i4)(o.X.PROFILE_SIDEBAR_ITEM_WYSIWYG, {
        useTitle: () => j.intl.string(j.t["vi7f+q"]),
        icon: pi,
        StronglyDiscouragedCustomComponent: x9,
        usePredicate: () => (0, SV.X)("user_settings_sidebar"),
        onClick: () => {
            let e = o9.default.getId();
            (0, Sw.openUserProfileModal)({ userId: e });
        },
        buildLayout: () => [],
    });
function pi() {
    let e = (0, m.bG)([l0.default], () => l0.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: n } = (0, Sk.A)({ userId: e?.id, size: x._3.SIZE_48 });
    return (0, c.jsx)(T.eu, { src: t, avatarDecoration: n, size: x._3.SIZE_20, "aria-hidden": !0 });
}
let pl = (0, a.WI)(o.X.PROFILE_SECTION, { hoisted: !0, buildLayout: () => [pt, pn] });
var ps = n(98207),
    pr = (n(204925), n(818348));
let pa = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = arguments.length > 1 ? arguments[1] : void 0;
    (0, ln.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([n.e("69757"), n.e("19623"), n.e("21007")]).then(n.bind(n, 888363));
            return (n) => (0, c.jsx)(t, { claimRequired: e, ...n });
        },
        { onCloseRequest: e ? pr.tE : null, onCloseCallback: t },
    );
};
var po = n(940856),
    pu = n(36149),
    pd = n(207560);
function pc(e) {
    let t = (0, pd.fk)(),
        n = (0, pu.b8)(),
        i = (0, pu.yM)(),
        l = (0, pu.Y2)();
    if (!t) return !1;
    let s = !n || i;
    switch (e) {
        case "verify":
            return s;
        case "edit":
            return !s && l;
        case "info":
            return !s && !l;
        default:
            return !1;
    }
}
var pg = n(516761);
function pm() {
    let e = j.intl.string(j.t.XxRj7f);
    return (0, c.jsxs)(z.E, {
        variant: "text-md/medium",
        children: [
            `${e} \u{2022} `,
            j.intl.format(pg.default.WM5adV, {
                handleOnHelpUrlHook: function () {
                    return window.open(eS.A.getArticleURL(A.MVz.TIGGER_PAWTECT_LEARN_MORE), "_blank");
                },
            }),
        ],
    });
}
let pA = (0, a.Tf)(o.X.ACCOUNT_INFO_AGE_GROUP_EDIT_SETTING, {
        usePredicate: () => pc("edit"),
        useTitle: () => j.intl.string(j.t["/52UYy"]),
        useVariant: () => "secondary",
        useTrailingDecoration: () => ({
            type: d.fq.STRONGLY_DISCOURAGED_CUSTOM,
            StronglyDiscouragedCustomComponent: pm,
        }),
        useLabel: () => j.intl.string(j.t.bt75uw),
        onClick: function () {
            (0, ln.openModalLazy)(async () => {
                let { default: e } = await n.e("45361").then(n.bind(n, 151080));
                return (t) => (0, c.jsx)(e, { ...t });
            });
        },
    }),
    pE = (0, a.E2)(o.X.ACCOUNT_INFO_AGE_GROUP_INFO_SETTING, {
        usePredicate: () => pc("info"),
        useSearchTerms: () => [j.intl.string(j.t["/52UYy"])],
        Component: function () {
            return (0, c.jsx)(tH.D, {
                label: j.intl.string(j.t["/52UYy"]),
                layout: "horizontal",
                children: (0, c.jsxs)(F.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "end",
                    gap: "md",
                    children: [
                        (0, c.jsx)(z.E, { variant: "text-md/medium", children: j.intl.string(j.t.XxRj7f) }),
                        (0, c.jsx)("div", {
                            style: { visibility: "hidden" },
                            children: (0, c.jsx)(p.$, {
                                onClick: pr.tE,
                                text: j.intl.string(j.t.bt75uw),
                                "aria-hidden": !0,
                            }),
                        }),
                    ],
                }),
            });
        },
    });
var ph = n(31720),
    pS = n(847599);
let pT = (0, a.Tf)(o.X.ACCOUNT_INFO_AGE_GROUP_VERIFY_SETTING, {
        usePredicate: () => pc("verify"),
        useTitle: () => j.intl.string(j.t["/52UYy"]),
        useVariant: () => "secondary",
        useTrailingDecoration: () => ({
            type: d.fq.TEXT,
            text: (0, pu.yM)() ? j.intl.string(j.t.sK0dmH) : j.intl.string(j.t.lKDPGA),
        }),
        useLabel: function () {
            return (0, pu.yM)() ? j.intl.string(j.t["9KiIz6"]) : j.intl.string(j.t.DVywUB);
        },
        onClick: () => ph.A.showAgeVerificationGetStartedModal({ entryPoint: pS.q1.ACCOUNT_AGE_GROUP }),
    }),
    px = (0, a.Tf)(o.X.ACCOUNT_INFO_CLAIM_ACCOUNT_SETTING, {
        usePredicate: () => {
            let e = (0, m.bG)([l0.default], () => l0.default.getCurrentUser());
            return null != e && !e.isClaimed();
        },
        useTitle: () => j.intl.string(j.t.tlZllC),
        useVariant: () => "secondary",
        useTrailingDecoration: () => ({ type: d.fq.TEXT, text: j.intl.string(j.t.qxk9zo) }),
        useLabel: () => j.intl.string(j.t.BleMPB),
        onClick: () => pa(),
    });
function pp(e) {
    return `${"*".repeat(e.length - 4)}${e.slice(-4)}`;
}
function pf(e) {
    let [t, n] = e.split("@");
    return `${"*".repeat(t.length)}@${n}`;
}
function p_(e) {
    let { text: t, censor: n, revealLabel: i, hideLabel: l } = e,
        [s, r] = g.useState(!1),
        a = s ? t : n(t);
    return (0, c.jsxs)(F.B, {
        direction: "horizontal",
        align: "center",
        gap: 4,
        justify: "end",
        children: [
            (0, c.jsx)(z.E, { variant: "text-md/medium", children: a }),
            (0, c.jsx)(m4.Q, {
                variant: "primary",
                textVariant: "text-md/medium",
                "aria-label": s ? l : i,
                onClick: () => r(!s),
                text: s ? j.intl.string(j.t.fgq1gs) : j.intl.string(j.t.dcztdU),
            }),
        ],
    });
}
function pN() {
    let e = (0, m.bG)([l0.default], () => l0.default.getCurrentUser()?.email);
    return null == e
        ? (0, c.jsx)(z.E, { variant: "text-md/medium", children: j.intl.string(j.t["8SfTN/"]) })
        : (0, c.jsx)(p_, {
              text: e,
              censor: pf,
              revealLabel: j.intl.string(j.t["Zvx+yV"]),
              hideLabel: j.intl.string(j.t.nqTD4d),
          });
}
let pI = (0, a.Tf)(o.X.ACCOUNT_INFO_EMAIL_SETTING, {
    usePredicate: () => (0, m.bG)([l0.default], () => l0.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => j.intl.string(j.t.tlZllC),
    useVariant: () => "secondary",
    useTrailingDecoration: () => ({ type: d.fq.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: pN }),
    useLabel: function () {
        return null == (0, m.bG)([l0.default], () => l0.default.getCurrentUser()?.email)
            ? j.intl.string(j.t.OYkgVk)
            : j.intl.string(j.t.bt75uw);
    },
    useAriaLabel: function () {
        return null == (0, m.bG)([l0.default], () => l0.default.getCurrentUser()?.email)
            ? j.intl.string(j.t["pvBD+W"])
            : j.intl.string(j.t["8peUT0"]);
    },
    onClick: function () {
        (0, ln.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("11322"), n.e("20577"), n.e("65861")]).then(n.bind(n, 97060));
            return (t) => (0, c.jsx)(e, { ...t });
        });
    },
});
var pC = n(557722),
    pb = n(53516);
function py() {
    let e = (0, m.bG)([l0.default], () => l0.default.getCurrentUser()),
        t = e?.phone ?? null;
    return null == e || null == t
        ? (0, c.jsx)(z.E, { variant: "text-md/medium", children: j.intl.string(j.t.I5kDqj) })
        : (0, c.jsx)(F.B, {
              direction: "horizontal",
              align: "center",
              justify: "end",
              gap: "md",
              children: (0, c.jsx)(p_, {
                  text: t,
                  censor: pp,
                  revealLabel: j.intl.string(j.t.eY3xlT),
                  hideLabel: j.intl.string(j.t["jllbv+"]),
              }),
          });
}
let pv = (0, a.Tf)(o.X.ACCOUNT_INFO_PHONE_SETTING, {
    usePredicate: () => (0, m.bG)([l0.default], () => l0.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => j.intl.string(j.t.kerONq),
    useAriaLabel: function () {
        return null == (0, m.bG)([l0.default], () => l0.default.getCurrentUser()?.phone)
            ? j.intl.string(j.t["SfUuE+"])
            : j.intl.string(j.t.YDabSe);
    },
    useVariant: () => "secondary",
    useTrailingDecoration: () => ({ type: d.fq.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: py }),
    useLabel: function () {
        return null == (0, m.bG)([l0.default], () => l0.default.getCurrentUser()?.phone)
            ? j.intl.string(j.t.OYkgVk)
            : j.intl.string(j.t.bt75uw);
    },
    onClick: function () {
        null == l0.default.getCurrentUser()?.phone
            ? (0, ln.openModalLazy)(
                  async () => {
                      let { default: e } = await Promise.all([
                          n.e("49747"),
                          n.e("72712"),
                          n.e("89545"),
                          n.e("11493"),
                          n.e("84704"),
                          n.e("86197"),
                      ]).then(n.bind(n, 615715));
                      return (t) => (0, c.jsx)(e, { reason: pC.d.USER_SETTINGS_UPDATE, ...t });
                  },
                  { modalKey: pb.V },
              )
            : (0, ln.openModalLazy)(async () => {
                  let { default: e } = await Promise.all([n.e("55682"), n.e("40933")]).then(n.bind(n, 660740));
                  return (t) => (0, c.jsx)(e, { ...t });
              });
    },
});
function pj() {
    let e = (0, m.bG)([l0.default], () => l0.default.getCurrentUser());
    return null != e && !e.isClaimed();
}
function pO() {
    let e = (0, S0.EC)(),
        t = e?.nick?.[0] ?? null,
        n = (0, m.bG)([l0.default], () => l0.default.getCurrentUser());
    if (null == n) return null;
    let i = n.hasUniqueUsername() ? n.username : `${n.username}#${n.discriminator}`;
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsx)(z.E, { variant: "text-md/medium", children: i }),
            null != t &&
                (0, c.jsx)(i4.m, {
                    __unsupportedReactNodeAsText: t,
                    "aria-label": !1,
                    children: (0, c.jsx)(iw.E, {
                        size: "custom",
                        width: 20,
                        height: 20,
                        color: nK.A.colors.STATUS_WARNING.css,
                    }),
                }),
        ],
    });
}
let pL = (0, a.Tf)(o.X.ACCOUNT_INFO_USERNAME_SETTING, {
        useTitle: () => j.intl.string(j.t.qqhR3L),
        useTrailingDecoration: () => ({
            type: d.fq.STRONGLY_DISCOURAGED_CUSTOM,
            StronglyDiscouragedCustomComponent: pO,
        }),
        useLabel: () => j.intl.string(j.t.bt75uw),
        useAriaLabel: () => j.intl.string(j.t.JECa91),
        useSubtitle: () => (pj() ? j.intl.string(j.t["7Ngnyr"]) : void 0),
        useVariant: () => "secondary",
        useDisabled: pj,
        onClick: function () {
            (0, ln.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("80032"), n.e("20429"), n.e("43350")]).then(
                    n.bind(n, 667792),
                );
                return (t) => (0, c.jsx)(e, { ...t });
            });
        },
    }),
    pD = (0, a.zZ)(o.X.ACCOUNT_INFO_CATEGORY, {
        usePredicate: () => (0, m.bG)([l0.default], () => null != l0.default.getCurrentUser()),
        useTitle: () => j.intl.string(j.t.apNo4l),
        useInlineNotice: function () {
            let e = (0, m.bG)([l0.default], () => l0.default.getCurrentUser());
            return null == e
                ? null
                : e.isClaimed()
                  ? null == e.email || e.verified
                      ? null
                      : {
                            type: d.lT.INLINE_NOTICE,
                            noticeType: "warning",
                            title: j.intl.string(j.t.tuGzBT),
                            text: j.intl.string(j.t.NAzplE),
                            button: { text: j.intl.string(j.t.lm1UKt), onClick: () => (0, po.S)(e) },
                        }
                  : {
                        type: d.lT.INLINE_NOTICE,
                        noticeType: "critical",
                        title: j.intl.string(j.t["/3qnL/"]),
                        text: j.intl.string(j.t.qKs3vg),
                        button: { text: j.intl.string(j.t["7psymi"]), onClick: () => pa() },
                    };
        },
        buildLayout: () => [pL, px, pI, pv, pT, pA, pE],
    });
var pR = n(398177);
let pP = (0, a.Tf)(o.X.ACCOUNT_CHANGE_PASSWORD_SETTING, {
    useTitle: () => j.intl.string(j.t["CIGa+7"]),
    useLabel: () => j.intl.string(j.t.bt75uw),
    useAriaLabel: () => j.intl.string(j.t["FRep5/"]),
    useVariant: () => "secondary",
    onClick: () => {
        (0, ln.openModal)((e) => (0, c.jsx)(pR.default, { ...e, onSuccess: () => e.onClose() }));
    },
});
var pG = n(200921);
let pM = [];
function pU() {
    pM = [];
}
class pV extends m.Ay.Store {
    static displayName = "AuthSessionsStore";
    getSessions() {
        return pM;
    }
}
let pk = new pV(e2.h, {
    LOGOUT: pU,
    LOGIN_SUCCESS: pU,
    FETCH_AUTH_SESSIONS_SUCCESS: function (e) {
        let { sessions: t } = e;
        pM = t.map((e) => ({ ...e, approx_last_used_time: new Date(e.approx_last_used_time) }));
    },
    LOGOUT_AUTH_SESSIONS_SUCCESS: function (e) {
        let { sessionIdHashes: t } = e,
            n = [...pM],
            i = !1;
        for (let e of t) {
            let t = n.findIndex((t) => t.id_hash === e);
            t >= 0 && (n.splice(t, 1), (i = !0));
        }
        if (!i) return !1;
        pM = n;
    },
});
function pw() {
    let e = (0, m.cf)([pk], () => pk.getSessions());
    return g.useMemo(() => {
        let t = [...e],
            n = null,
            i = o9.default.getAuthSessionIdHash();
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
function pF(e) {
    return (Date.now() - e.valueOf()) / 1e3 / 60 / 60 < 1 ? j.intl.string(j.t.TXCmfL) : ii()(e).fromNow();
}
var pB = n(176524),
    pz = n(646270),
    pX = n(738678),
    pY = n(53061);
function pH(e) {
    let { icon: t, label: n, subLabel: i, description: l, children: s, muted: r } = e;
    return (0, c.jsxs)(F.B, {
        direction: "horizontal",
        align: "center",
        gap: "sm",
        role: "listitem",
        children: [
            (0, c.jsx)(pB.A, { icon: t, color: r ? nK.A.colors.ICON_MUTED : "currentColor" }),
            (0, c.jsxs)(F.B, {
                direction: "vertical",
                gap: "xxs",
                children: [
                    (0, c.jsxs)(F.B, {
                        direction: "horizontal",
                        gap: "xs",
                        children: [
                            (0, c.jsx)(z.E, { variant: "text-md/semibold", color: "text-strong", children: n }),
                            null != n &&
                                null != i &&
                                (0, c.jsx)(z.E, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    "aria-hidden": !0,
                                    children: "\u2022",
                                }),
                            null != i &&
                                (0, c.jsx)(z.E, { variant: "text-md/medium", color: "text-subtle", children: i }),
                        ],
                    }),
                    (0, c.jsx)(z.E, { variant: "text-sm/normal", color: "text-muted", children: l }),
                ],
            }),
            s,
        ],
    });
}
function pK(e) {
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
                            return { text: j.intl.string(j.t.cDHCNY), icon: hd.k };
                        case "ios":
                        case "android":
                            return { text: e, icon: pz.u };
                        case "horizon os":
                            return { text: e, icon: pX.G };
                        default:
                            return { text: e, icon: hd.k };
                    }
                })(e.client_info?.os);
            return { location: n, platform: i, os: l, Icon: s, lastActive: t ? null : pF(e.approx_last_used_time) };
        })(t, n),
        o = [i, a].filter(n8.Vq);
    return (0, c.jsx)(pH, {
        icon: r,
        label: s,
        subLabel: l,
        description: o.join(" \xb7 "),
        children:
            !n &&
            (0, c.jsx)(t8.D, {
                className: pY.X,
                onClick: () => (0, pG.U0)(t.id_hash),
                "aria-label": j.intl.string(j.t.E4MJNt),
                children: (0, c.jsx)(El.P, { size: "md", color: "currentColor" }),
            }),
    });
}
function pW(e) {
    let { title: t, children: n } = e,
        i = g.useId();
    return (0, c.jsxs)(F.B, {
        role: "group",
        "aria-labelledby": i,
        gap: "xl",
        padding: { top: 8, bottom: 8 },
        children: [
            (0, c.jsx)(h.D, { id: i, variant: "heading-md/semibold", color: "text-muted", children: t }),
            (0, c.jsx)(F.B, { role: "list", gap: "xl", children: n }),
        ],
    });
}
let pZ = (0, a.E2)(o.X.SESSIONS_CURRENT_SESSION_SETTING, {
        Component: function () {
            let { currentSession: e } = pw();
            return null == e
                ? (0, c.jsx)(aV.y, {})
                : (0, c.jsx)(pW, {
                      title: j.intl.string(j.t.LLS19o),
                      children: (0, c.jsx)(pK, { session: e, current: !0 }),
                  });
        },
        useSearchTerms: () => [],
    }),
    pq = (0, a.E2)(o.X.SESSIONS_LOGOUT_ALL_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = pw();
            return (0, c.jsx)(tH.D, {
                label: j.intl.string(j.t.Vij32M),
                description: j.intl.string(j.t.OTXyaf),
                children: (0, c.jsx)(p.$, {
                    onClick: () => (0, pG.U0)(e.map((e) => e.id_hash)),
                    variant: "critical-primary",
                    size: "sm",
                    text: j.intl.string(j.t.cLmmeY),
                }),
            });
        },
        useSearchTerms: () => [j.intl.string(j.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = pw();
            return e.length > 0;
        },
    });
var pQ = n(766928);
function pJ() {
    return (0, c.jsx)(pH, {
        icon: pQ.W,
        label: j.intl.string(j.t.iUa0sn),
        description: j.intl.format(j.t["044+8i"], {
            onClick: () =>
                (0, t9.openUserSettings)(o.X.ACCOUNT_PANEL, { analyticsLocations: [tv.A.USER_SETTINGS_SESSIONS] }),
        }),
        muted: !0,
    });
}
let p$ = (0, a.E2)(o.X.SESSIONS_OTHER_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = pw(),
                t = (0, m.bG)([l0.default], () => l0.default.getCurrentUser());
            return (0, c.jsxs)(pW, {
                title: j.intl.string(j.t.xx1MWc),
                children: [
                    e.map((e) => (0, c.jsx)(pK, { session: e }, e.id_hash)),
                    t?.mfaEnabled ? null : (0, c.jsx)(pJ, {}),
                ],
            });
        },
        useSearchTerms: () => [j.intl.string(j.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = pw(),
                t = (0, m.bG)([l0.default], () => l0.default.getCurrentUser()?.mfaEnabled);
            return e.length > 0 || !t;
        },
    }),
    p0 = (0, a.zZ)(o.X.SESSIONS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.mEndXM),
        useSubtitle: () => j.intl.string(j.t.b7ZpTM),
        initialize: () => {
            (0, pG.GY)();
        },
        buildLayout: () => [pZ, p$, pq],
        useSearchTerms: () => [
            j.intl.string(j.t["+1h0k/"]),
            j.intl.string(j.t.LLS19o),
            j.intl.string(j.t.xx1MWc),
            j.intl.string(j.t.lSWsrd),
        ],
    }),
    p1 = (0, a.t_)(o.X.SESSIONS_PANEL, {
        useTitle: () => j.intl.string(j.t.mEndXM),
        useObscuredNotice: aM.L,
        buildLayout: () => [p0],
    }),
    p2 = (0, a.t0)(o.X.ACCOUNT_SESSIONS_NESTED_PANEL, {
        buildLayout: () => [p1],
        initialize: () => {
            (0, pG.GY)();
        },
        useTrailingDecoration: () => {
            let { currentSession: e, otherSessions: t } = pw(),
                n = t.length + +(null != e);
            return {
                type: d.xn.TEXT,
                text: n > 0 ? j.intl.formatToPlainString(j.t.G7zwOk, { count: n }) : j.intl.string(j.t.MKDeyL),
            };
        },
    });
var p3 = n(464477);
function p5(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return null == e
        ? null
        : e.hasAnyStaffLevel()
          ? t
              ? j.intl.string(j.t.YJGvuD)
              : j.intl.string(j.t["3iKih7"])
          : e.hasFlag(A.nhx.PARTNER)
            ? t
                ? j.intl.string(j.t["9UucjT"])
                : j.intl.string(j.t.Sq6Q1u)
            : null == e.email
              ? t
                  ? j.intl.string(j.t["9VWpT9"])
                  : j.intl.string(j.t.LfCBZG)
              : null;
}
function p6() {
    return (0, aN.bG)([l0.default], () => {
        let e = l0.default.getCurrentUser();
        return null != e && e.mfaEnabled;
    });
}
var p4 =
    (((r = {}).AVAILABLE = "available"),
    (r.UNAVAILABLE_NO_CRYPTO = "unavailable_no_crypto"),
    (r.UNAVAILABLE_UNVERIFIED = "unavailable_unverified"),
    r);
function p8() {
    let e = (0, aN.bG)([l0.default], () => l0.default.getCurrentUser()?.verified);
    return p3.K7 ? (!1 === e ? "unavailable_unverified" : "available") : "unavailable_no_crypto";
}
function p7() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return (0, aN.bG)([lc.A, Tw.A, l0.default], () =>
        l0.default.getCurrentUser()?.hasAnyStaffLevel()
            ? e
                ? j.intl.string(j.t.hxf9fX)
                : j.intl.string(j.t["3iKih7"])
            : lc.A.getGuildsArray().some(
                    (e) =>
                        e.features.has(A.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) &&
                        Tw.A.can(A.xBc.ADMINISTRATOR, e),
                )
              ? e
                  ? j.intl.string(j.t.OYTCUh)
                  : j.intl.string(j.t.HC8uSZ)
              : null,
    );
}
var p9 = n(466034);
let fe = (0, a.Tf)(o.X.AUTHENTICATOR_APP_DISABLE_BUTTON, {
        useTitle: () => j.intl.string(j.t.lQsY7B),
        useSubtitle: () => p7(!0),
        useDisabled: () => null !== p7(!0),
        useLabel: () => j.intl.string(j.t.N86XcP),
        useVariant: () => "critical-secondary",
        usePredicate: () => {
            let e = (0, m.bG)([o9.default], () => o9.default.hasTOTPEnabled()),
                t = p8() === p4.AVAILABLE;
            return e && t;
        },
        onClick: () =>
            void (0, nW.A)({
                title: j.intl.string(j.t["D+aE7g"]),
                subtitle: j.intl.string(j.t.EA4ZEk),
                variant: "critical",
                confirmText: j.intl.string(j.t.N86XcP),
                onConfirm: () => ps.A.disable(),
            }),
    }),
    ft = (0, a.zZ)(o.X.AUTHENTICATOR_APP_CATEGORY, {
        useTitle: () => j.intl.string(j.t.RumMFo),
        useSubtitle: () => j.intl.string(j.t.iTbTo7),
        useHeaderDecoration: function () {
            let e = (0, m.bG)([o9.default], () => o9.default.hasTOTPEnabled()),
                t = p8() === p4.AVAILABLE;
            if (!e && t)
                return {
                    type: d.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: d.UV.BUTTON,
                            id: "mfa-setup-button",
                            text: j.intl.string(j.t.cTNUeD),
                            onClick: p9.Ay.enableMFA,
                        },
                    ],
                };
        },
        useInlineNotice: function () {
            switch (p8()) {
                case p4.UNAVAILABLE_NO_CRYPTO:
                    return { type: d.lT.INLINE_NOTICE, noticeType: "info", text: j.intl.string(j.t.PhHhsj) };
                case p4.UNAVAILABLE_UNVERIFIED:
                    return { type: d.lT.INLINE_NOTICE, noticeType: "warning", text: j.intl.string(j.t.uggF7o) };
                case p4.AVAILABLE:
                    return;
            }
        },
        collapseOnEmpty: !1,
        buildLayout: () => [fe],
    });
var fn = n(670492),
    fi = n(32880),
    fl = n(663417),
    fs = n(658675),
    fr = n(900686);
function fa() {
    (0, ln.openModalLazy)(async () => {
        let { default: e } = await Promise.resolve().then(n.bind(n, 662758));
        return (t) =>
            (0, c.jsx)(e, {
                ...t,
                handleSubmit: (e) =>
                    ps.A.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
                        var t;
                        return (
                            (t = e),
                            void (0, ln.openModalLazy)(
                                async () => {
                                    let { default: e } = await Promise.all([n.e("12536"), n.e("96179")]).then(
                                        n.bind(n, 518142),
                                    );
                                    return (n) => (0, c.jsx)(e, { ...n, password: t });
                                },
                                { stackingBehavior: "stack" },
                            )
                        );
                    }),
                title: j.intl.string(j.t.PsQmzU),
                actionText: j.intl.string(j.t.ajkYcF),
            });
    });
}
var fo = n(808658);
function fu(e) {
    return `${e.slice(0, 4)}-${e.slice(4)}`;
}
async function fd() {
    let e = fn.A.getVerificationKey();
    try {
        await ps.A.confirmViewBackupCodes(e, !0);
    } catch (e) {
        (0, m8.P0)({
            message: e.body?.message ?? j.intl.string(j.t.F8FvUy),
            type: m9.Ck.FAILURE,
            id: "backup-code-regen-failed",
        });
    }
}
function fc(e) {
    let {
            code: { code: t, consumed: n },
        } = e,
        i = fu(t),
        l = g.useRef(null),
        s = (0, c.jsxs)(c.Fragment, {
            children: [(0, c.jsx)(fs.P, { checked: n }), (0, c.jsx)(z.E, { variant: "text-md/normal", children: i })],
        });
    return ul.p5
        ? (0, c.jsx)(t8.D, {
              tag: "li",
              className: ie()(fo.aY, fo.vk),
              innerRef: l,
              onKeyDown: function (e) {
                  "c" === e.key &&
                      (e.metaKey || e.ctrlKey) &&
                      (e.preventDefault(), e.stopPropagation(), (0, ul.C)(i), l?.current?.focus());
              },
              onClick: function () {
                  (0, ul.C)(i),
                      (0, m8.P0)({ message: j.intl.string(j.t.mGZ66D), type: m9.Ck.SUCCESS, id: "backup-code-copied" });
              },
              children: s,
          })
        : (0, c.jsx)("li", { className: fo.aY, children: s });
}
let fg = (0, a.zZ)(o.X.BACKUP_CODES_CATEGORY, {
        useTitle: () => j.intl.string(j.t.fC9qV0),
        useSubtitle: () =>
            (0, m.bG)([fn.A], () => fn.A.getBackupCodes().length > 0)
                ? j.intl.format(j.t.tp7zEK, {})
                : j.intl.string(j.t.LoOi4S),
        usePredicate: p6,
        buildLayout: () => [fm],
    }),
    fm = (0, a.E2)(o.X.BACKUP_CODES_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t.fC9qV0)],
        Component: function () {
            let e = (0, m.bG)([fn.A], () => fn.A.getBackupCodes()),
                t = g.useMemo(
                    () =>
                        e
                            .map((e) => {
                                let { code: t, consumed: n } = e;
                                return `* ${fu(t)}` + (n ? ` (${j.intl.string(j.t["ycME+9"])})` : "");
                            })
                            .join("\r\n"),
                    [e],
                );
            return 0 === e.length
                ? (0, c.jsx)(p.$, { text: j.intl.string(j.t.Jc2myK), size: "sm", variant: "secondary", onClick: fa })
                : (0, c.jsxs)(c.Fragment, {
                      children: [
                          (0, c.jsx)("ul", {
                              className: fo.E5,
                              children: e.map((e) => (0, c.jsx)(fc, { code: e }, e.code)),
                          }),
                          (0, c.jsxs)(sC.e, {
                              size: "sm",
                              children: [
                                  (0, c.jsx)(fr.A, {
                                      fileContents: t,
                                      contentType: "text/plain",
                                      fileName: "discord_backup_codes.txt",
                                      children: (0, c.jsx)(p.$, {
                                          text: j.intl.string(j.t["OO+Nib"]),
                                          variant: "secondary",
                                          icon: fi.s,
                                      }),
                                  }),
                                  (0, c.jsx)(p.$, {
                                      text: j.intl.string(j.t["3x962E"]),
                                      variant: "secondary",
                                      icon: fl.f,
                                      onClick: fd,
                                  }),
                              ],
                          }),
                      ],
                  });
        },
    }),
    fA = (0, a.Tf)(o.X.SMS_AUTH_DISABLE_BUTTON, {
        useTitle: () => j.intl.string(j.t.lQsY7B),
        useSubtitle: function () {
            let [e, t] = g.useState(!1),
                n = (0, m.bG)([l0.default], () => l0.default.getCurrentUser()?.phone);
            return null == n
                ? null
                : j.intl.format(e ? j.t["xDBk/I"] : j.t.bnKdnl, {
                      phone: e ? n : n.slice(-4),
                      toggleButton: () =>
                          (0, c.jsx)(m4.Q, {
                              text: e ? j.intl.string(j.t.fgq1gs) : j.intl.string(j.t.dcztdU),
                              onClick: () => t(!e),
                          }),
                  });
        },
        useLabel: () => j.intl.string(j.t.N86XcP),
        useVariant: () => "critical-secondary",
        usePredicate: () => (0, m.bG)([l0.default], () => l0.default.getCurrentUser()?.hasFlag(A.nhx.MFA_SMS) ?? !1),
        onClick: () =>
            void (0, ln.openModalLazy)(async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 662758));
                return (t) =>
                    (0, c.jsx)(e, {
                        ...t,
                        handleSubmit: ps.A.disableSMS,
                        title: j.intl.string(j.t.KLWnit),
                        children: j.intl.string(j.t["W0/Duf"]),
                    });
            }),
    }),
    fE = (0, a.zZ)(o.X.SMS_AUTH_CATEGORY, {
        useTitle: () => j.intl.string(j.t.wuHuI5),
        useSubtitle: () => (0, m.bG)([l0.default], () => p5(l0.default.getCurrentUser(), !0)),
        useHeaderDecoration: () => {
            let e = (0, m.bG)([l0.default], () => l0.default.getCurrentUser()?.hasFlag(A.nhx.MFA_SMS) ?? !1),
                t = (0, m.bG)([l0.default], () => null != p5(l0.default.getCurrentUser()));
            if (!e)
                return {
                    type: d.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: d.UV.BUTTON,
                            id: "sms-setup-button",
                            text: j.intl.string(j.t.Age7yU),
                            onClick: fh,
                            disabled: t,
                        },
                    ],
                };
        },
        collapseOnEmpty: !1,
        usePredicate: () => {
            let e = p8(),
                t = p6(),
                n = (0, m.bG)([o9.default], () => o9.default.hasTOTPEnabled());
            return e === p4.AVAILABLE && t && n;
        },
        buildLayout: () => [fA],
    });
function fh() {
    let e = l0.default.getCurrentUser();
    if (null != e)
        if (null == e.phone) {
            var t;
            (t = { reason: pC.d.USER_SETTINGS_UPDATE, onAddedPhone: ps.A.enableSMS }),
                (0, ln.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e("49747"),
                            n.e("72712"),
                            n.e("89545"),
                            n.e("11493"),
                            n.e("84704"),
                            n.e("86197"),
                        ]).then(n.bind(n, 615715));
                        return (n) => (0, c.jsx)(e, { ...n, ...t });
                    },
                    { modalKey: pb.V },
                );
        } else ps.A.enableSMS();
}
var fS = n(665671),
    fT = n(442433),
    fx = n(917136),
    fp = n(976910),
    ff = n(303778);
function f_(e) {
    let { credential: t } = e;
    return (0, c.jsxs)("li", {
        className: ff.e,
        children: [
            (0, c.jsxs)("div", {
                children: [
                    (0, c.jsx)(z.E, { variant: "text-md/normal", children: t.name }),
                    null != t.last_used &&
                        (0, c.jsx)(z.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: j.intl.format(j.t["7JgxF5"], { lastUsed: pF(t.last_used) }),
                        }),
                ],
            }),
            (0, c.jsx)(i5.K, {
                icon: u6.j,
                variant: "icon-only",
                size: "sm",
                "aria-label": j.intl.string(j.t["+nrTbK"]),
                onClick: (e) => {
                    (0, fT.L3)(e, async () => {
                        let { default: e } = await n.e("32529").then(n.bind(n, 41e3));
                        return (n) => (0, c.jsx)(e, { credential: t, ...n });
                    });
                },
            }),
        ],
    });
}
let fN = (0, a.zZ)(o.X.SECURITY_KEYS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.IBq4Y3),
        useSubtitle: () => j.intl.string(j.t.yK9edS),
        useHeaderDecoration: function () {
            if (p8() === p4.AVAILABLE)
                return {
                    type: d.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: d.UV.BUTTON,
                            id: "add-security-key-button",
                            text: j.intl.string(j.t["Tzs/fw"]),
                            icon: iM.j,
                            onClick: fS.A,
                        },
                    ],
                };
        },
        useInlineNotice: () =>
            (function () {
                switch (p8()) {
                    case p4.UNAVAILABLE_NO_CRYPTO:
                        return { type: d.lT.INLINE_NOTICE, noticeType: "info", text: j.intl.string(j.t.bWCGI9) };
                    case p4.UNAVAILABLE_UNVERIFIED:
                        return { type: d.lT.INLINE_NOTICE, noticeType: "warning", text: j.intl.string(j.t.uggF7o) };
                    case p4.AVAILABLE:
                        return;
                }
            })(),
        buildLayout: () => [fI],
    }),
    fI = (0, a.E2)(o.X.SECURITY_KEYS_LIST, {
        useSearchTerms: () => [j.intl.string(j.t.y7SXYX)],
        Component: function () {
            let { credentials: e, hasFetchedCredentials: t } = (0, m.cf)([fp.A], () => ({
                hasFetchedCredentials: fp.A.hasFetchedCredentials(),
                credentials: fp.A.getCredentials(),
            }));
            return (g.useEffect(() => {
                t || fx.JQ();
            }, [t]),
            t)
                ? (0, c.jsx)(F.B, {
                      direction: "vertical",
                      gap: "sm",
                      as: "ul",
                      children: e.map((e) => (0, c.jsx)(f_, { credential: e }, e.id)),
                  })
                : (0, c.jsx)(aV.y, {});
        },
    }),
    fC = (0, a.t_)(o.X.MULTI_FACTOR_AUTHENTICATION, {
        useTitle: () => j.intl.string(j.t.m0FidJ),
        buildLayout: () => [fN, ft, fE, fg],
    }),
    fb = (0, a.t0)(o.X.ACCOUNT_MFA_NESTED_PANEL, {
        useTrailingDecoration: () => {
            let e = p6();
            return { type: d.xn.TEXT, text: e ? j.intl.string(j.t.lQsY7B) : j.intl.string(j.t.WsUuTt) };
        },
        buildLayout: () => [fC],
    }),
    fy = (0, a.zZ)(o.X.ACCOUNT_PASSWORD_SECURITY_CATEGORY, {
        useTitle: () => j.intl.string(j.t["0iH2vc"]),
        buildLayout: () => [pP, fb, p2],
    });
var fv = n(308645),
    fj = n(271995),
    fO = n(855267);
let fL = (0, a.E2)(o.X.ACCOUNT_STANDING_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t["16r9jm"])],
        Component: fO.A,
    }),
    fD = (0, a.zZ)(o.X.ACCOUNT_STANDING_NESTED_CATEGORY, { buildLayout: () => [fL] }),
    fR = (0, a.t_)(o.X.ACCOUNT_STANDING_PANEL, {
        useTitle: () => j.intl.string(j.t["16r9jm"]),
        buildLayout: () => [fD],
    }),
    fP = (0, a.zZ)(o.X.ACCOUNT_STANDING_CATEGORY, {
        useTitle: () => j.intl.string(j.t["16r9jm"]),
        buildLayout: () => [fG],
    }),
    fG = (0, a.t0)(o.X.ACCOUNT_STANDING_NESTED_PANEL, {
        useTitle: fj.$b,
        useSubtitle: fj.bh,
        useLeadingDecoration: function () {
            let { color: e, backgroundColor: t, Icon: n } = (0, fj._k)();
            return { type: d.Xy.ICON, icon: n, color: e, backgroundColor: t };
        },
        initialize: () => {
            fv.Yn();
        },
        buildLayout: () => [fR],
    });
var fM = n(738188),
    fU = n(834981),
    fV = n(987197),
    fk = n(822585),
    fw = n(840387),
    fF = n(465558),
    fB = n(602339);
let fz = (0, a.E2)(o.X.FAMILY_CENTER_SETTING, {
        Component: fF.p,
        useSearchTerms: () => [
            j.intl.string(fB.default.RZqaJn),
            j.intl.string(fB.default.bdBmqy),
            j.intl.string(fB.default["gVWG+6"]),
            j.intl.string(fB.default.ahKIJO),
            j.intl.string(fB.default["8SLtqb"]),
        ],
    }),
    fX = (0, a.zZ)(o.X.FAMILY_CENTER_CATEGORY, { buildLayout: () => [fz] }),
    fY = (0, a.t_)(o.X.FAMILY_CENTER_PANEL, {
        useTitle: () => j.intl.string(fB.default.RZqaJn),
        buildLayout: () => [fX],
    }),
    fH = (0, a.zZ)(o.X.ACCOUNT_FAMILY_CENTER_CATEGORY, {
        useTitle: () => j.intl.string(fB.default.RZqaJn),
        usePersistentBadge: function () {
            let e = (0, fV.f)(),
                t = (0, fk.L)()?.daysRemaining ?? null,
                n = e && null != t && t >= 0,
                i = (0, fU.VT)();
            return g.useMemo(() => (n ? { badgeType: d.Xi.WARNING } : { badgeType: d.Xi.COUNT, count: i }), [n, i]);
        },
        buildLayout: () => [fK],
    }),
    fK = (0, a.t0)(o.X.ACCOUNT_FAMILY_CENTER_NESTED_PANEL, {
        useTitle: () => ((0, fU.Li)() ? j.intl.string(fB.default.IcMQUP) : j.intl.string(fB.default["n8wrn/"])),
        useSubtitle: () => {
            let e = (0, fw.Z)(),
                t = (0, fU.Li)();
            return e
                ? t
                    ? j.intl.string(fB.default.G8lHFU)
                    : j.intl.string(fB.default.uOLNEZ)
                : j.intl.string(fB.default.Z53oSM);
        },
        useLeadingDecoration: function () {
            let e = (0, fV.f)(),
                t = (0, fk.L)()?.daysRemaining ?? null;
            return !e || null == t || t < 0
                ? null
                : {
                      type: d.Xy.ICON,
                      icon: fM.i,
                      color: nK.A.colors.ICON_FEEDBACK_WARNING,
                      backgroundColor: nK.A.colors.BACKGROUND_FEEDBACK_WARNING,
                  };
        },
        buildLayout: () => [fY],
    });
var fW = n(425587),
    fZ = n(662758);
function fq(e) {
    if (e.body.code === A.t02.INVALID_PASSWORD) throw e;
    (0, s_.A)({ title: j.intl.string(j.t.LX0nT8), subtitle: e.body.message });
}
async function fQ() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = l0.default.getCurrentUser();
    if (null == t) return;
    let n = [];
    try {
        n = (await fW.A.fetchTeams(!0)).body;
    } catch {}
    n.filter((e) => e.owner_user_id === t.id).length > 0
        ? (0, s_.A)({
              title: j.intl.string(j.t["Y++oNe"]),
              subtitle: j.intl.format(j.t.alpAUm, { devPortalLink: "https://discord.com/developers/teams" }),
          })
        : lc.A.getGuildsArray().filter((e) => e.ownerId === t.id).length > 0
          ? (0, s_.A)({ title: j.intl.string(j.t.vJiTOL), subtitle: j.intl.string(j.t.UyVVan) })
          : t.isClaimed()
            ? (0, ln.openModal)((t) =>
                  (0, c.jsx)(fZ.default, {
                      ...t,
                      handleSubmit: (t) => (0, SG.U_)(t, e).then(A.tEg, fq),
                      title: e ? j.intl.string(j.t.xca2ts) : j.intl.string(j.t.goXv9g),
                      actionText: e ? j.intl.string(j.t["8lQ2rR"]) : j.intl.string(j.t.jf5GGb),
                      variant: "critical-primary",
                      children: e ? j.intl.string(j.t.FB4H1D) : j.intl.string(j.t.gk7h32),
                  }),
              )
            : (0, nW.A)({
                  title: j.intl.string(j.t.xca2ts),
                  subtitle: j.intl.string(j.t.FB4H1D),
                  confirmText: j.intl.string(j.t["8lQ2rR"]),
                  onConfirm: () => (0, SG.U_)("", !0),
              });
}
let fJ = (0, a.Tf)(o.X.ACCOUNT_DELETE_SETTING, {
        useTitle: () => j.intl.string(j.t["gIpzR+"]),
        useSubtitle: () => j.intl.string(j.t.Bd6dOf),
        useLabel: () => j.intl.string(j.t["8lQ2rR"]),
        useVariant: () => "critical-primary",
        onClick: () => fQ(!0),
    }),
    f$ = (0, a.Tf)(o.X.ACCOUNT_DISABLE_SETTING, {
        useTitle: () => j.intl.string(j.t["p/Tjtp"]),
        useSubtitle: () => j.intl.string(j.t.YvDmKb),
        useLabel: () => j.intl.string(j.t.jf5GGb),
        useVariant: () => "critical-secondary",
        onClick: () => fQ(!1),
        usePredicate: () => {
            let e = (0, m.bG)([l0.default], () => l0.default.getCurrentUser());
            return e?.isClaimed() ?? !1;
        },
    }),
    f0 = (0, a.zZ)(o.X.ACCOUNT_REMOVAL_CATEGORY, { buildLayout: () => [f$, fJ] }),
    f1 = (0, a.t_)(o.X.ACCOUNT_PANEL, {
        useTitle: () => j.intl.string(j.t["ldCE/p"]),
        initialize: function () {
            return () => {
                ps.A.clearBackupCodes(), (0, SG.Uo)();
            };
        },
        useObscuredNotice: aM.L,
        buildLayout: () => [pD, fy, fP, fH, f0],
    }),
    f2 = (0, a.i4)(o.X.ACCOUNT_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["ldCE/p"]),
        icon: c2.n,
        buildLayout: () => [f1],
    });
var f3 = n(176781),
    f5 = n(341923),
    f6 = n(572164),
    f4 = n(539572),
    f8 = n(915725),
    f7 = n(16590);
let f9 = (0, a.zD)(o.X.CLIPS_ENABLE_AUTOCLIPPING, {
        useTitle: () => j.intl.string(f7.default.j29uJx),
        useSubtitle: () => j.intl.format(f7.default.UCzGcQ, { learnMoreLink: eS.A.getArticleURL(A.MVz.CLIPS) }),
        useValue: () => (0, m.bG)([f8.Ay], () => f8.Ay.getEnableAutoclipping()),
        setValue: f4.uL,
        useDisabled: () => !(0, f6.Et)(),
    }),
    _e = (0, a.zY)(o.X.CLIPS_AUTOCLIPPING_CARD, { buildLayout: () => [f9], headerSettingKey: f9.key }),
    _t = (0, a.zZ)(o.X.CLIPS_AUTOCLIPPING_CATEGORY, {
        useTitle: () => j.intl.string(f7.default.XWkJoi),
        useSubtitle: () => j.intl.string(f7.default["MJ/VsO"]),
        usePredicate: f5.H,
        usePersistentBadge: () => ({ badgeType: d.Xi.BETA }),
        useInlineNotice: () =>
            (0, f6.Et)()
                ? null
                : {
                      type: d.lT.INLINE_NOTICE,
                      noticeType: "info",
                      iconAlign: "center",
                      text: j.intl.string(f7.default.wUpqua),
                      button: {
                          variant: "primary",
                          size: "sm",
                          text: j.intl.string(f7.default.qGgW4M),
                          onClick: () => f4.yO({ clipsEnabled: !0, trackAnalytics: !0 }),
                      },
                  },
        buildLayout: () => [_e],
    });
var _n = n(974293),
    _i = n(696016);
let _l = [_i.zq, 25, 50, _i.Y2, _i.rv],
    _s = (0, a.sN)(o.X.CLIPS_BITRATE, {
        usePredicate: () => (0, _n.V0)("ClipsBitrateSetting"),
        useTitle: () => j.intl.string(j.t["8bZyov"]),
        useSubtitle: () => j.intl.string(j.t["h8DSx/"]),
        minValue: _i.zq,
        maxValue: _i.rv,
        useDefaultValue: () => _i.Y2,
        getInitialValue: () => f8.Ay.getSettings().clipsQuality.bitratePercent ?? _i.Y2,
        onValueRender: (e) => `${Math.round(e)}%`,
        setValue: (e) => {
            let { clipsQuality: t } = f8.Ay.getSettings();
            f4.GS({ ...t, bitratePercent: Math.round(e) });
        },
        markers: _l,
        onMarkerRender: (e) => `${Math.round(e)}%`,
        useDisabled: () => !(0, f6.Et)(),
    });
var _r = n(226640);
let _a = (0, a.Hn)(o.X.CLIPS_FRAME_RATE, {
        useTitle: () => j.intl.string(j.t["2wScL1"]),
        useSubtitle: () => j.intl.string(j.t["Rf9+fy"]),
        useValue: () => (0, m.bG)([f8.Ay], () => f8.Ay.getSettings().clipsQuality.frameRate),
        setValue: (e) => {
            let { clipsQuality: t } = f8.Ay.getSettings();
            f4.GS({ ...t, frameRate: e });
        },
        useOptions: _r.Fz,
        useDisabled: () => !(0, f6.Et)(),
    }),
    _o = (0, a.E2)(o.X.CLIPS_HARDWARE_CLASSIFICATION_WARNING, {
        useSearchTerms: () => [j.intl.string(j.t.SIxrIF)],
        usePredicate: () => (0, m.bG)([f8.Ay], () => f8.Ay.getHardwareClassification()) === _i.k9.BELOW_MINIMUM,
        Component: () => (0, c.jsx)(lB.A, { look: lB.k.WARNING, children: j.intl.string(j.t.SIxrIF) }),
    }),
    _u = (0, a.Hn)(o.X.CLIPS_LENGTH, {
        useTitle: () => j.intl.string(j.t.OgfUio),
        useSubtitle: () => j.intl.string(j.t.H7j4tY),
        useValue: () => (0, m.bG)([f8.Ay], () => f8.Ay.getSettings().clipsLength),
        setValue: (e) => f4.h$(e),
        useOptions: _r.Qu,
        useDisabled: () => !(0, f6.Et)(),
    }),
    _d = (0, a.E2)(o.X.CLIPS_QUALITY_INFOBOX, {
        useSearchTerms: () => [j.intl.string(j.t["Z+MfqT"])],
        Component: () => (0, c.jsx)(lB.A, { look: lB.k.INFO, children: j.intl.string(j.t["Z+MfqT"]) }),
    }),
    _c = (0, a.Hn)(o.X.CLIPS_RESOLUTION, {
        useTitle: () => j.intl.string(j.t.aFudZJ),
        useSubtitle: () => j.intl.string(j.t.nIrkW5),
        useValue: () => (0, m.bG)([f8.Ay], () => f8.Ay.getSettings().clipsQuality.resolution),
        setValue: (e) => {
            let { clipsQuality: t } = f8.Ay.getSettings();
            f4.GS({ ...t, resolution: e });
        },
        useOptions: _r.gF,
        useDisabled: () => !(0, f6.Et)(),
    }),
    _g = (0, a.zD)(o.X.CLIPS_ENABLE_REMINDERS, {
        useTitle: () => j.intl.string(j.t["3zwNf6"]),
        useSubtitle: () => j.intl.string(j.t.m4Cjj9),
        useValue: () => (0, m.bG)([f8.Ay], () => f8.Ay.getSettings().remindersEnabled),
        setValue: (e) => f4.Mt(e),
        useDisabled: () => !(0, f6.Et)(),
    }),
    _m = (0, a.zZ)(o.X.CLIPS_CAPTURE_SETTINGS_CATEGORY, {
        useTitle: () => j.intl.string(f7.default.TGwzMe),
        buildLayout: () => [_o, _u, _a, _c, _s, _d, _g],
    }),
    _A = (0, a.zD)(o.X.CLIPS_DEBUG_TOOLTIPS, {
        useTitle: () => "Show clips debug tooltips",
        useSubtitle: () =>
            "Show overlay tooltips for the clips engine starting, enabled features, auto-clip signals, and save errors. Intended for development and testing.",
        useValue: () => (0, m.bG)([f8.Ay], () => f8.Ay.getSettings().debugTooltipsEnabled),
        setValue: (e) => f4.YP(e),
    }),
    _E = (0, a.zD)(o.X.CLIPS_SHOW_POV_CLIPS, {
        useTitle: () => "Show POV clips in Gallery",
        useSubtitle: () =>
            "Show clips automatically captured from your point of view when a teammate clips a shared moment. Dev-only for now.",
        useValue: () => (0, m.bG)([f8.Ay], () => f8.Ay.getSettings().showPovClipsInGallery),
        setValue: (e) => f4.Uh(e),
    }),
    _h = (0, a.zZ)(o.X.CLIPS_DEVELOPER_CATEGORY, {
        useTitle: () => "Developer",
        usePredicate: () =>
            (0, m.bG)([l0.default], () => {
                let e = l0.default.getCurrentUser();
                return e?.isStaff() === !0 || e?.isStaffPersonal() === !0;
            }),
        buildLayout: () => [_A, _E],
    });
var _S = n(417270),
    _T = n(645886);
let _x = (0, a.E2)(o.X.CLIPS_KEYBIND, {
        useSearchTerms: () => [j.intl.string(j.t.pf54EU), j.intl.string(j.t["QyB/jK"])],
        Component: () => {
            let e = (0, m.bG)([lL.Ay], () => lL.Ay.getKeybindForAction(A.hCu.SAVE_CLIP, !0));
            tl()(null != e, "Save clip keybind unset");
            let t = !(0, f6.Et)(),
                n = g.useRef(null),
                i = g.useCallback(
                    (t) => {
                        ik.A.setKeybind({ ...e, shortcut: t });
                    },
                    [e],
                ),
                l = g.useCallback(() => {
                    ik.A.setKeybind({ ...e, shortcut: (0, le.OH)(_i.Ot) });
                }, [e]);
            return (0, c.jsx)(tH.D, {
                label: j.intl.string(j.t.pf54EU),
                description: j.intl.string(j.t["QyB/jK"]),
                layout: "horizontal-responsive",
                children: (0, c.jsx)("div", {
                    className: _T.g,
                    children: (0, c.jsx)(i9.A, {
                        ref: n,
                        disabled: t,
                        defaultValue: e.shortcut,
                        onChange: i,
                        trailingActions: (0, c.jsxs)(c.Fragment, {
                            children: [
                                (0, c.jsx)(i4.m, {
                                    text: j.intl.string(f7.default.bUtubv),
                                    position: "top",
                                    ariaHidden: !0,
                                    children: (0, c.jsx)(i5.K, {
                                        icon: iU.F,
                                        size: "sm",
                                        variant: "secondary",
                                        disabled: t,
                                        "aria-label": j.intl.string(f7.default.bUtubv),
                                        onClick: (e) => {
                                            e.stopPropagation(), n.current?.toggleRecordMode();
                                        },
                                    }),
                                }),
                                (0, c.jsx)(i4.m, {
                                    text: j.intl.string(f7.default.Kyk1Tp),
                                    position: "top",
                                    ariaHidden: !0,
                                    children: (0, c.jsx)(i5.K, {
                                        icon: _S.m,
                                        size: "sm",
                                        variant: "secondary",
                                        disabled: t,
                                        "aria-label": j.intl.string(f7.default.Kyk1Tp),
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
    _p = (0, a.E2)(o.X.CLIPS_SCREENSHOT_KEYBIND, {
        useSearchTerms: () => [j.intl.string(j.t["0U/hj7"]), j.intl.string(j.t["5zxkdo"])],
        usePredicate: lv.BW,
        Component: () => {
            let e = (0, m.bG)([lL.Ay], () => lL.Ay.getKeybindForAction(A.hCu.SAVE_CLIP, !0)),
                t = (0, m.bG)([lL.Ay], () => lL.Ay.getKeybindForAction(A.hCu.SAVE_SCREENSHOT, !0));
            tl()(null != e, "Save clip keybind unset"), tl()(null != t, "Save screenshot keybind unset");
            let n = g.useCallback(
                (e) => {
                    ik.A.setKeybind({ ...t, shortcut: e });
                },
                [t],
            );
            return (0, c.jsx)(tH.D, {
                label: j.intl.string(j.t["0U/hj7"]),
                description: j.intl.string(j.t["5zxkdo"]),
                layout: "horizontal",
                children: (0, c.jsx)("div", {
                    className: _T.g,
                    children: (0, c.jsx)(i9.A, { defaultValue: t.shortcut, onChange: n }),
                }),
            });
        },
    }),
    _f = (0, a.zD)(o.X.CLIPS_ENABLE, {
        useTitle: () => j.intl.string(j.t.h8rgrK),
        useSubtitle: () => j.intl.string(j.t["4Qw3NO"]),
        useValue: () => (0, f6.Et)(),
        setValue: (e) => f4.yO({ clipsEnabled: e, trackAnalytics: !0 }),
    }),
    __ = (0, a.zY)(o.X.CLIPS_GENERAL_CARD, { buildLayout: () => [_f, _x, _p], headerSettingKey: _f.key }),
    _N = (0, a.zZ)(o.X.CLIPS_GENERAL_CATEGORY, {
        useTitle: () => j.intl.string(j.t["rWKv+e"]),
        useSubtitle: () => j.intl.format(f7.default["dh7g+S"], { learnMoreLink: eS.A.getArticleURL(A.MVz.CLIPS) }),
        buildLayout: () => [__],
    }),
    _I = (0, a.E2)(o.X.CLIPS_STORAGE_LOCATION, {
        useSearchTerms: () => [j.intl.string(j.t.s4773E), j.intl.string(j.t.svjwGh)],
        Component: () => {
            let e = (0, m.bG)([f8.Ay], () => f8.Ay.getSettings().storageLocation),
                t = !(0, f6.Et)(),
                n = g.useRef(!1);
            async function i() {
                if (!t && !n.current) {
                    n.current = !0;
                    try {
                        let e = await nc.A.fileManager.showOpenDialog({
                            properties: ["openDirectory", "createDirectory"],
                        });
                        e.length > 0 && f4.HU(e[0]);
                    } finally {
                        n.current = !1;
                    }
                }
            }
            return (0, c.jsx)(tH.D, {
                label: j.intl.string(j.t.s4773E),
                description: j.intl.string(j.t.svjwGh),
                layout: "vertical",
                children: (0, c.jsxs)(F.B, {
                    direction: "horizontal",
                    align: "center",
                    gap: "sm",
                    children: [
                        (0, c.jsx)(li.k, {
                            fullWidth: !0,
                            value: e,
                            editable: !1,
                            disabled: t,
                            "aria-label": j.intl.formatToPlainString(j.t.iMONTj, { storageLocation: e }),
                        }),
                        (0, c.jsx)(p.$, {
                            variant: "secondary",
                            disabled: t,
                            onClick: i,
                            text: j.intl.string(f7.default.yQAN6B),
                        }),
                    ],
                }),
            });
        },
    }),
    _C = (0, a.zZ)(o.X.CLIPS_STORAGE_CATEGORY, {
        useTitle: () => j.intl.string(f7.default["0Q+pdZ"]),
        buildLayout: () => [_I],
    }),
    _b = (0, a.t_)(o.X.CLIPS_PANEL, {
        useTitle: () => j.intl.string(j.t.z2jK6X),
        usePredicate: lv.sw,
        buildLayout: () => [_N, _t, _m, _C, _h],
    }),
    _y = (0, a.i4)(o.X.CLIPS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.z2jK6X),
        icon: f3.x,
        buildLayout: () => [_b],
    });
var _v = n(957485),
    _j = n(875444);
function _O(e, t) {
    let n = (0, m.bG)([ET.default], () => ET.default.getFetchState()),
        i = (0, m.bG)([ET.default], () =>
            e ? ET.default.getNewestTokensForNonChildrenApplications() : ET.default.getNewestTokens(),
        ),
        l = g.useMemo(
            () => (null == i ? [] : i.filter((e) => (0, _j.O)(e.application, e.scopes)).map((e) => e.application)),
            [i],
        );
    return (
        g.useEffect(() => {
            t || A9.A.fetch();
        }, [t]),
        { showLoadingIndicator: n !== ET.FetchState.FETCHED && (null == i || 0 === i.length), slayerSdkApplications: l }
    );
}
var _L = n(390646);
function _D(e) {
    let { applications: t } = e,
        n = g.useMemo(() => t.sort((e, t) => aq.default.compare(t.id, e.id)), [t]),
        i = g.useMemo(() => {
            let e = [];
            for (let t = 0; t < 3; t++) {
                let i = n[t];
                if (null == i) break;
                e.push(i.name);
            }
            let t = e.join(", "),
                i = n.length - 3;
            return i > 0
                ? j.intl.format(j.t.sHFdTg, {
                      gameList: t,
                      plusMoreHook: (e, t) =>
                          (0, c.jsx)(
                              z.E,
                              {
                                  tag: "span",
                                  variant: "text-sm/medium",
                                  color: "text-muted",
                                  children: j.intl.format(j.t["EADv+4"], { count: i }),
                              },
                              t,
                          ),
                  })
                : e.join(", ");
        }, [n]),
        l = g.useMemo(() => {
            let e = [];
            for (let t = 0; t < 3; t++) {
                let i = n[t];
                if (null == i) break;
                let { icon: l, name: s, id: r } = i,
                    a = y.Ay.getApplicationIconURL({ id: r, icon: l });
                e.push(
                    (0, c.jsx)(
                        i4.m,
                        {
                            __unsupportedReactNodeAsText: s,
                            children: (0, c.jsx)("img", { src: a, "aria-label": s, className: _L.Kk }),
                        },
                        r,
                    ),
                );
            }
            let t = n.length - 3;
            return (
                t > 0 &&
                    e.push(
                        (0, c.jsx)(
                            "div",
                            {
                                className: _L.lK,
                                children: (0, c.jsx)(z.E, {
                                    variant: "text-xs/medium",
                                    color: "text-default",
                                    children: `+${t}`,
                                }),
                            },
                            "omitted",
                        ),
                    ),
                e
            );
        }, [n]);
    return (0, c.jsxs)("div", {
        className: _L.wx,
        children: [
            (0, c.jsxs)("div", {
                className: _L.kX,
                children: [
                    (0, c.jsx)(z.E, { variant: "text-md/normal", color: "text-strong", children: i }),
                    (0, c.jsxs)(t8.D, {
                        onClick: function () {
                            (0, t9.openUserSettings)(o.X.AUTHORIZED_APPS_CATEGORY);
                        },
                        className: _L.bJ,
                        children: [
                            (0, c.jsx)(z.E, {
                                variant: "text-xs/normal",
                                color: "interactive-text-default",
                                children: j.intl.format(j.t.oYaYOe, {}),
                            }),
                            (0, c.jsx)(nQ._, {
                                size: "xxs",
                                color: nK.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                className: _L.g7,
                            }),
                        ],
                    }),
                ],
            }),
            (0, c.jsx)("div", { className: _L.yF }),
            (0, c.jsx)("div", { className: _L.lJ, children: l }),
        ],
    });
}
function _R() {
    return (0, c.jsxs)("div", {
        className: _L.do,
        children: [
            (0, c.jsx)(z.E, {
                variant: "text-md/medium",
                color: "text-strong",
                className: _L.xV,
                children: j.intl.string(j.t["+0U77d"]),
            }),
            (0, c.jsx)(z.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: j.intl.format(j.t.V8wClM, {
                    helpdeskArticle: eS.A.getArticleURL(A.MVz.SOCIAL_LAYER_CONNECTIONS),
                }),
            }),
        ],
    });
}
function _P(e) {
    let { applications: t } = e;
    return t.length > 0 ? (0, c.jsx)(_D, { applications: t }) : (0, c.jsx)(_R, {});
}
let _G = (0, a.E2)(o.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES, {
    useSearchTerms: () => [j.intl.string(j.t.YpCiMt)],
    Component: function () {
        let { showLoadingIndicator: e, slayerSdkApplications: t } = _O(!0);
        return e ? (0, c.jsx)(aV.y, {}) : (0, c.jsx)(_P, { applications: t });
    },
});
function _M() {
    let { showLoadingIndicator: e, slayerSdkApplications: t } = _O(!0, !0);
    return !e && t.length > 0;
}
let _U = (0, a.zD)(o.X.CONTENT_AND_SOCIAL_ALLOW_GAME_FRIEND_DMS_SETTING, {
        useTitle: () => ((0, EP.SV)("GameFriendDMSetting") ? j.intl.string(j.t.W8JtfT) : j.intl.string(j.t.XpBObB)),
        useSubtitle: () =>
            (0, EP.SV)("GameFriendDMSetting")
                ? j.intl.string(j.t.a99KKy)
                : j.intl.format(j.t.oZsHTD, { helpdeskArticle: eS.A.getArticleURL(A.MVz.SLAYER_GAME_FRIENDS) }),
        useSearchTerms: () => [j.intl.string(j.t["Uv/eTx"])],
        useValue: () => v.Zk.useSetting(),
        setValue: (e) => v.Zk.updateSetting(e),
        usePredicate: _M,
    }),
    _V = (0, a.Qx)(o.X.CONTENT_AND_SOCIAL_IN_GAME_DMS_SETTING, {
        useTitle: () => j.intl.string(j.t["ms+Tme"]),
        useSubtitle: () =>
            (0, EP.SV)("InGameDMsSetting") ? j.intl.string(j.t["0ryspy"]) : j.intl.string(j.t["4NN4+/"]),
        useOptions: function () {
            return [
                { name: j.intl.string(j.t.JIFnN9), value: ek.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL },
                { name: j.intl.string(j.t.rRdsk1), value: ek.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME },
                {
                    name: (0, EP.SV)("InGameDMsSetting") ? j.intl.string(j.t.IVRPMX) : j.intl.string(j.t.AolKwN),
                    value: ek.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE,
                },
            ];
        },
        useValue: function () {
            let e = v.TA.useSetting();
            return e === ek.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET ? ek.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL : e;
        },
        setValue: (e) => v.TA.updateSetting(e),
        usePredicate: _M,
    }),
    _k = (0, a.zZ)(o.X.CONNECTED_GAMES_CATEGORY, {
        useSearchTerms: () => [j.intl.string(j.t.YpCiMt)],
        buildLayout: () => [_G, _U, _V],
    });
var _w = n(687123),
    _F = n(444802),
    _B = n(558001);
n(866945);
var _z = n(835002);
function _X() {
    let e = (0, _F.WX)();
    g.useEffect(() => {
        (0, _B.N)(_z.YA.AGE_CONFIRMATION_NOTICE, _z.YX.VIEWED);
    }, []);
    let t = g.useCallback(() => {
            window.open(eS.A.getArticleURL(e), "_blank"), (0, _B.N)(_z.YA.AGE_CONFIRMATION_NOTICE, _z.YX.LEARN_MORE);
        }, [e]),
        n = g.useCallback(() => {
            ph.A.showAgeVerificationGetStartedModal({ entryPoint: pS.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, _B.N)(_z.YA.AGE_CONFIRMATION_NOTICE, _z.YX.CONFIRM_AGE);
        }, []);
    return (0, c.jsx)(rj.p, {
        messageType: rj.Y.INFO,
        action: (0, c.jsx)(m4.Q, {
            variant: "secondary",
            size: "sm",
            textVariant: "text-sm/medium",
            text: j.intl.string(j.t.FDSSia),
            onClick: n,
        }),
        children: j.intl.format(j.t.mFgsfg, { hook: (e, n) => (0, c.jsx)(aI.Anchor, { onClick: t, children: e }, n) }),
    });
}
function _Y() {
    let e = (0, pd.aX)(_w.t.REACTIVE_CHECK),
        t = (0, pu.b8)();
    return g.useMemo(() => {
        if (e && !t) return { type: d.lT.STRONGLY_DISCOURAGED_CUSTOM, notice: _X };
    }, [e, t]);
}
var _H = n(308528),
    _K = n(171316);
function _W() {
    let e = (0, _K.uM)(),
        t = (0, fU.vx)(),
        n = g.useCallback(() => {
            (0, tP.default)(),
                _H.A.openPrivateChannel({ recipientIds: t }),
                (0, _B.N)(_z.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, _z.YX.LEARN_MORE);
        }, [t]),
        i = g.useCallback(() => {
            (0, _B.N)(_z.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, _z.YX.VIEWED);
        }, []);
    return g.useMemo(() => {
        if (e)
            return {
                type: d.lT.INLINE_NOTICE,
                noticeType: "info",
                trackView: i,
                text: j.intl.format(fB.default.i284fU, {
                    hook: (e, t) => (0, c.jsx)(aI.Anchor, { onClick: n, children: e }, t),
                    count: t.length,
                }),
            };
    }, [n, e, t.length, i]);
}
var _Z = n(323073),
    _q = n(386171),
    _Q = n(96607);
let _J = (0, a.zD)(o.X.CONTENT_AND_SOCIAL_AGE_RESTRICTED_DM_SETTING, {
        useTitle: () =>
            (0, EP.SV)("AgeRestrictedDMCommandsSetting") ? j.intl.string(j.t.gvC6q7) : j.intl.string(j.t.XahVjj),
        useSubtitle: () =>
            (0, EP.SV)("AgeRestrictedDMCommandsSetting") ? j.intl.string(j.t.zirUC1) : j.intl.string(j.t.R9fXyS),
        useValue: _q.hT,
        useDisabled: function () {
            let e = (0, _Q.A)() ?? !0,
                t = (0, _Z.sP)(),
                n = (0, pu.yM)();
            return (!t || !!n) && !e;
        },
        setValue: function (e) {
            (0, _Z.p5)() && e
                ? ph.A.showAgeVerificationGetStartedModal({ entryPoint: pS.q1.AGE_RESTRICTED_DM_COMMANDS_SETTINGS })
                : v.Qe.updateSetting(e);
        },
    }),
    _$ = (0, a.zD)(o.X.CONTENT_AND_SOCIAL_AGE_RESTRICTED_IOS_SETTING, {
        useTitle: () => j.intl.string(j.t["L+yTsa"]),
        useSubtitle: () =>
            (0, EP.SV)("AgeRestrictediOSSetting") ? j.intl.string(j.t["t6i/jW"]) : j.intl.string(j.t.hiM8pU),
        useValue: _q.tI,
        useDisabled: function () {
            let e = (0, _Q.A)() ?? !0,
                t = (0, _Z.sP)(),
                n = (0, pu.yM)();
            return g.useMemo(() => (!t || !!n) && !e, [t, e, n]);
        },
        setValue: function (e) {
            (0, _Z.p5)() && e
                ? ph.A.showAgeVerificationGetStartedModal({ entryPoint: pS.q1.AGE_RESTRICTED_SERVERS_ACCESS_SETTINGS })
                : v.Kg.updateSetting(e);
        },
    }),
    _0 = (0, a.AK)(o.X.CONTENT_FILTERS_APPEARANCE_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.hOXd45),
        destinationKey: o.X.APPEARANCE_MESSAGES_CATEGORY,
    }),
    _1 = (0, a.gN)(o.X.CONTENT_FILTERS_RELATED_SETTINGS, { buildLayout: () => [_0] });
n(667532);
var _2 = n(390248),
    _3 = n(632119),
    _5 = n(945276),
    _6 = n(389737),
    _4 = n(566769);
function _8() {
    let e,
        t = (0, _5.A)() ?? !0,
        n = (0, _K.uM)(),
        i = (0, _K.uM)(),
        {
            explicitContentGuilds: l,
            explicitContentFriendDm: s,
            explicitContentNonFriendDm: r,
        } = ((e = (0, aN.cf)([rZ.A], () => rZ.A.settings.textAndImages?.explicitContentSettings ?? (0, _3.C$)())),
        {
            explicitContentGuilds: (0, _3.Ys)({ setting: e?.explicitContentGuilds }),
            explicitContentNonFriendDm: (0, _3.Ys)({ setting: e?.explicitContentNonFriendDm, isDm: !0 }),
            explicitContentFriendDm: (0, _3.Ys)({ setting: e?.explicitContentFriendDm, isDm: !0, isFriend: !0 }),
        });
    function a(e) {
        let t = Object.values(e);
        (0, _2.hK)() && t.includes(ek.TO.SHOW)
            ? ph.A.showAgeVerificationGetStartedModal({ entryPoint: pS.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
            : (0, _3.Jz)(e);
    }
    let o = [
            { value: ek.TO.BLUR, label: j.intl.string(j.t.S49Uad) },
            { value: ek.TO.BLOCK, label: j.intl.string(j.t["D/157Y"]) },
        ],
        u = [{ value: ek.TO.BLUR, label: j.intl.string(j.t.S49Uad) }],
        d = { value: ek.TO.SHOW, label: j.intl.string(j.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let g = { isDisabled: i, tooltipText: n ? j.intl.string(fB.default["6Af/cw"]) : void 0 };
    return (0, c.jsxs)(_6.E, {
        description: j.intl.string(j.t.Wnojv1),
        children: [
            (0, c.jsx)(_4.A, {
                title: j.intl.string(j.t["+uI23H"]),
                value: s,
                onChange: (e) => a({ explicitContentFriendDm: e }),
                options: o,
                ...g,
            }),
            (0, c.jsx)(_4.A, {
                title: j.intl.string(j.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ explicitContentNonFriendDm: e }),
                options: o,
                ...g,
            }),
            (0, c.jsx)(_4.A, {
                title: j.intl.string(j.t["FP+a42"]),
                value: l,
                onChange: (e) => a({ explicitContentGuilds: e }),
                isDisabled: !t || i,
                tooltipText: n ? j.intl.string(fB.default["6Af/cw"]) : void 0,
                options: u,
            }),
        ],
    });
}
function _7() {
    let e,
        t = (0, _5.A)() ?? !0,
        n = (0, _K.uM)(),
        i = (0, _K.uM)(),
        {
            goreContentGuilds: l,
            goreContentFriendDm: s,
            goreContentNonFriendDm: r,
        } = ((e = (0, aN.cf)([rZ.A], () => rZ.A.settings.textAndImages?.goreContentSettings ?? (0, _F.T4)())),
        {
            goreContentGuilds: (0, _F.gC)({ setting: e?.goreContentGuilds }),
            goreContentNonFriendDm: (0, _F.gC)({ setting: e?.goreContentNonFriendDm, isDm: !0 }),
            goreContentFriendDm: (0, _F.gC)({ setting: e?.goreContentFriendDm, isDm: !0, isFriend: !0 }),
        });
    function a(e) {
        let t = Object.values(e);
        (0, _2.hK)() && t.includes(ek.TO.SHOW)
            ? ph.A.showAgeVerificationGetStartedModal({ entryPoint: pS.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
            : (0, _F.qY)(e);
    }
    let o = [
            { value: ek.TO.BLUR, label: j.intl.string(j.t.S49Uad) },
            { value: ek.TO.BLOCK, label: j.intl.string(j.t["D/157Y"]) },
        ],
        u = [{ value: ek.TO.BLUR, label: j.intl.string(j.t.S49Uad) }],
        d = { value: ek.TO.SHOW, label: j.intl.string(j.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let g = { isDisabled: i, tooltipText: n ? j.intl.string(fB.default["6Af/cw"]) : void 0 };
    return (0, c.jsxs)(_6.E, {
        description: j.intl.string(j.t.XgH9eh),
        children: [
            (0, c.jsx)(_4.A, {
                title: j.intl.string(j.t["+uI23H"]),
                value: s,
                onChange: (e) => a({ goreContentFriendDm: e }),
                options: o,
                ...g,
            }),
            (0, c.jsx)(_4.A, {
                title: j.intl.string(j.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ goreContentNonFriendDm: e }),
                options: o,
                ...g,
            }),
            (0, c.jsx)(_4.A, {
                title: j.intl.string(j.t["FP+a42"]),
                value: l,
                onChange: (e) => a({ goreContentGuilds: e }),
                isDisabled: !t || i,
                options: u,
                tooltipText: n ? j.intl.string(fB.default["6Af/cw"]) : void 0,
            }),
        ],
    });
}
var _9 = n(464946),
    Ne = n(875162),
    Nt = n(428275);
let Nn = (0, a.E2)(o.X.CONTENT_AND_SOCIAL_CONTENT_FILTERS_SETTING, {
    Component: function () {
        let e = (0, _F.WX)(),
            t = g.useMemo(
                () => [
                    {
                        id: "explicit-media-redaction",
                        title: j.intl.string(j.t.GYpoAq),
                        component: _8,
                        orientation: "vertical",
                    },
                    {
                        id: "gore-media-redaction",
                        title: j.intl.string(j.t["16/3Bi"]),
                        component: _7,
                        orientation: "vertical",
                    },
                ],
                [],
            );
        return (0, c.jsxs)(_9.h, {
            children: [
                (0, c.jsx)(_9._, {
                    header: j.intl.string(j.t["Hj/But"]),
                    description: j.intl.format(j.t.dliU4j, { learnMoreLink: eS.A.getArticleURL(e) }),
                }),
                (0, c.jsx)(Ne.A, { tabs: t, orientation: "vertical", tabsClassName: Nt.v }),
            ],
        });
    },
    useSearchTerms: () => [
        j.intl.string(j.t["Hj/But"]),
        j.intl.string(j.t["N/oRI+"]),
        j.intl.string(j.t.QVdYsK),
        j.intl.string(j.t["aWD+tu"]),
        j.intl.string(j.t["5mnTa7"]),
        j.intl.string(j.t["K0OWP+"]),
    ],
});
var Ni = n(639555),
    Nl = n(617641),
    Ns = n(546140),
    Nr = n(406935),
    Na = n(594061);
let No = (0, a.zD)(o.X.CONTENT_AND_SOCIAL_DM_SAFETY_ALERTS_SETTING, {
    useTitle: () => j.intl.string(j.t.qFsx5q),
    useSubtitle: () => j.intl.format(j.t.lunaRv, { learnMoreLink: eS.A.getArticleURL(A.MVz.SAFETY_ALERTS) }),
    useValue: Ns.L,
    setValue: function (e) {
        return Na.wc.updateAsync(
            "privacy",
            (t) => {
                t.inappropriateConversationWarnings = Nr._t.create({ value: e });
            },
            Na.Sb.INFREQUENT_USER_ACTION,
        );
    },
    usePredicate: function () {
        let e = (0, Nl.Lc)({ location: "DMSafetyAlertsSetting" }),
            t = (0, Ni.Rv)({ location: "DMSafetyAlertsSetting" }),
            n = (0, _5.A)() ?? !0;
        return e && !n && !t;
    },
});
var Nu = n(809505),
    Nd = n(923457),
    Nc = n(750714);
let Ng = (0, a.Qx)(o.X.CONTENT_AND_SOCIAL_DM_SPAM_SETTING, {
        useTitle: () => ((0, EP.SV)("DMSpamSetting") ? j.intl.string(j.t.puwSkY) : j.intl.string(j.t.tiCXaH)),
        useSubtitle: () =>
            (0, EP.SV)("DMSpamSetting")
                ? j.intl.string(j.t["+sXN3T"])
                : j.intl.format(j.t.RvjRRI, { appealLink: eS.A.getArticleURL(A.MVz.SAFE_DIRECT_MESSAGING) }),
        useValue: function () {
            let e = v.he.useSetting(),
                t = v.cj.useSetting(),
                n = (0, m.bG)([l0.default], () => l0.default.getCurrentUser()),
                i = (0, pd.yv)(Nd.p.SPAM_FILTERS);
            return e !== ek.he.DEFAULT_UNSET
                ? e
                : n?.nsfwAllowed === !1 && i
                  ? ek.he.FRIENDS_AND_NON_FRIENDS
                  : (Nc.xY.get(t) ?? ek.he.NON_FRIENDS);
        },
        setValue: (e) => v.he.updateSetting(e),
        useOptions: function () {
            let e = (0, EP.SV)("DMSpamSetting");
            return g.useMemo(
                () =>
                    e
                        ? [
                              { name: j.intl.string(j.t["+w5yKk"]), value: ek.he.FRIENDS_AND_NON_FRIENDS },
                              { name: j.intl.string(j.t.yAPg6r), value: ek.he.NON_FRIENDS },
                              { name: j.intl.string(j.t.FEXKsv), value: ek.he.DISABLED },
                          ]
                        : (0, Nu.YS)(),
                [e],
            );
        },
        useSearchTerms: () => [j.intl.string(j.t.JzaP4h), j.intl.string(j.t.H9XOl3), j.intl.string(j.t.k4W40P)],
    }),
    Nm = (0, a.zZ)(o.X.CONTENT_CATEGORY, {
        useTitle: () => ((0, EP.SV)("ContentCategory") ? j.intl.string(j.t["3upKU8"]) : j.intl.string(j.t.xVRG4P)),
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
                u = _W(),
                m =
                    ((e = (0, fw.Z)()),
                    (t = (0, _F.WX)()),
                    (n = g.useCallback(() => {
                        window.open(eS.A.getArticleURL(t), "_blank"),
                            (0, _B.N)(_z.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, _z.YX.LEARN_MORE);
                    }, [t])),
                    (i = g.useCallback(() => {
                        (0, _B.N)(_z.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, _z.YX.VIEWED);
                    }, [])),
                    g.useMemo(() => {
                        if (e)
                            return {
                                type: d.lT.INLINE_NOTICE,
                                noticeType: "info",
                                trackView: i,
                                text: j.intl.format(j.t.EUo0yj, {
                                    hook: (e, t) => (0, c.jsx)(aI.Anchor, { onClick: n, children: e }, t),
                                }),
                            };
                    }, [n, e, i])),
                A =
                    ((l = (0, pd.SJ)()),
                    (s = (0, pu.b8)()),
                    (r = l && !s),
                    (a = g.useCallback(() => {
                        ph.A.showAgeVerificationGetStartedModal({ entryPoint: pS.q1.CONTENT_AND_SOCIAL_NOTICE }),
                            (0, _B.N)(_z.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, _z.YX.LEARN_MORE);
                    }, [])),
                    (o = g.useCallback(() => {
                        (0, _B.N)(_z.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, _z.YX.VIEWED);
                    }, [])),
                    g.useMemo(() => {
                        if (r)
                            return {
                                type: d.lT.INLINE_NOTICE,
                                noticeType: "info",
                                trackView: o,
                                text: j.intl.format(j.t.OX4ybh, {
                                    hook: (e, t) => (0, c.jsx)(aI.Anchor, { onClick: a, children: e }, t),
                                }),
                            };
                    }, [a, r, o])),
                E = _Y();
            return u ?? E ?? A ?? m;
        },
        buildLayout: () => ((0, EP.Bv)("ContentCategory") ? [Nn, No, _J, _$, _1] : [Nn, Ng, No, _J, _$]),
    });
var NA = n(189883);
let NE = (0, a.zD)(o.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_EVERYONE_SETTING, {
    useTitle: () => j.intl.string(j.t["7x9dyE"]),
    useValue: function () {
        let e = v.FA.useSetting();
        return g.useMemo(() => (0, n2.Lx)(e), [e]).all;
    },
    setValue: function (e) {
        v.FA.updateSetting(e ? A.yKI : A.yKI & ~A.dzt.NO_RELATION);
    },
    useDisabled: function () {
        return (0, _K.uM)();
    },
});
var Nh = n(665260);
let NS = (0, a.zD)(o.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_MUTUAL_FRIENDS_SETTING, {
        useTitle: () => j.intl.string(j.t.NfeuZ3),
        useValue: function () {
            let e = v.FA.useSetting(),
                t = g.useMemo(() => (0, n2.Lx)(e), [e]);
            return t.all || t.mutualFriends;
        },
        setValue: function (e) {
            let t = v.FA.getSetting();
            v.FA.updateSetting(e ? Nh.UI(t, A.dzt.MUTUAL_FRIENDS) : Nh.iE(t, A.dzt.MUTUAL_FRIENDS, A.dzt.NO_RELATION));
        },
        useDisabled: function () {
            return (0, _K.uM)();
        },
    }),
    NT = (0, a.zD)(o.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_MUTUAL_GUILDS_SETTING, {
        useTitle: () => j.intl.string(j.t.qsMfsH),
        useSubtitle: () => ((0, EP.SV)("FriendRequestsMutualGuildsSetting") ? j.intl.string(j.t["6DqAp0"]) : void 0),
        useValue: function () {
            let e = v.FA.useSetting(),
                t = g.useMemo(() => (0, n2.Lx)(e), [e]);
            return t.all || t.mutualGuilds;
        },
        setValue: function (e) {
            let t = v.FA.getSetting();
            v.FA.updateSetting(e ? Nh.UI(t, A.dzt.MUTUAL_GUILDS) : Nh.iE(t, A.dzt.MUTUAL_GUILDS, A.dzt.NO_RELATION));
        },
        useDisabled: function () {
            return (0, _K.uM)();
        },
    }),
    Nx = (0, a.FW)(o.X.FRIEND_REQUESTS_FIELDSET, {
        useTitle: () => j.intl.string(j.t.wTdS6S),
        buildLayout: () => [NE, NS, NT],
    }),
    Np = (0, a.zD)(o.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_NOTES_SETTING, {
        useTitle: () => j.intl.string(j.t["jK+wdr"]),
        useSubtitle: () => j.intl.string(j.t["RYh/pW"]),
        useValue: () => !v.Zd.useSetting(),
        setValue: function (e) {
            v.Zd.updateSetting(!e);
        },
        usePredicate: () => NA.A.useConfig({ location: "Friend Request Setting" }).enabled,
        usePersistentBadge: () => ({ badgeType: d.Xi.BETA }),
    });
function Nf() {
    let { enabled: e } = NA.A.useConfig({ location: "Friend Request Setting" });
    return e ? j.intl.string(j.t.QVbF3l) : void 0;
}
let N_ = (0, a.zZ)(o.X.FRIEND_REQUESTS_CATEGORY, {
        useTitle: () => j.intl.string(j.t["5gxWrt"]),
        useSubtitle: Nf,
        useSubnavLabel: () => j.intl.string(j.t.fyA115),
        useInlineNotice: _W,
        buildLayout: () => [Nx, Np],
    }),
    NN = (0, a.zZ)(o.X.FRIEND_REQUESTS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.MNaVwq),
        useSubtitle: Nf,
        useInlineNotice: _W,
        buildLayout: () => [NE, NS, NT, Np],
    });
var NI = n(994500),
    NC = n(428678),
    Nb = n(717398),
    Ny = n(730134),
    Nv = n(943646);
function Nj(e) {
    let { listType: t, numberOfUsers: n } = e,
        i = "blocked" === t;
    return (0, c.jsxs)("div", {
        className: Nv.wx,
        children: [
            (0, c.jsx)("div", { className: Nv.zc, children: i ? (0, c.jsx)(NC.K, {}) : (0, c.jsx)(Sc.G, {}) }),
            (0, c.jsxs)("div", {
                className: Nv.Qq,
                children: [
                    (0, c.jsx)(z.E, {
                        variant: "text-md/semibold",
                        color: "interactive-text-active",
                        children: j.intl.string(i ? j.t.PFOUKW : j.t["93ZDWE"]),
                    }),
                    (0, c.jsx)(z.E, {
                        variant: "text-md/medium",
                        color: "text-default",
                        children: i
                            ? j.intl.format(j.t["r91W/h"], { numberOfBlockedUsers: n })
                            : j.intl.format(j.t.rXUeOl, { numberOfIgnoredUsers: n }),
                    }),
                ],
            }),
        ],
    });
}
function NO(e) {
    let { userId: t, last: n } = e,
        i = (0, m.bG)([NI.A], () => NI.A.isBlocked(t)),
        l = (0, m.bG)([l0.default], () => l0.default.getUser(t)),
        [s, r] = g.useState(!1),
        a = g.useCallback(() => {
            r(!0),
                i
                    ? Nb.A.unblockUser(t).catch(() => {
                          r(!1);
                      })
                    : Nb.A.unignoreUser(t, tv.A.USER_SETTINGS).catch(() => {
                          r(!1);
                      });
        }, [i, t]);
    return null == l
        ? null
        : (0, c.jsxs)("div", {
              className: ie()(Nv.nM, { [Nv.fW]: n }),
              children: [
                  (0, c.jsxs)("div", {
                      className: Nv.eF,
                      children: [
                          (0, c.jsx)(Ny.A, { user: l, size: x._3.SIZE_40 }),
                          (0, c.jsxs)("div", {
                              className: Nv.Qq,
                              children: [
                                  (0, c.jsx)(z.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      children: l.globalName ?? l.username,
                                  }),
                                  (0, c.jsx)(z.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: null != l.globalName ? l.username : null,
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (0, c.jsx)(p.$, {
                      variant: "secondary",
                      text: j.intl.string(i ? j.t.XyHpKH : j.t["8wXU9B"]),
                      onClick: a,
                      loading: s,
                  }),
              ],
          });
}
function NL(e) {
    let { userIds: t, listType: n } = e,
        [i, l] = g.useState(5);
    return (0, c.jsx)(_9.h, {
        children: (0, c.jsxs)("div", {
            className: Nv.Nr,
            children: [
                (0, c.jsx)(Nj, { listType: n, numberOfUsers: t.length }),
                (0, c.jsx)("div", {
                    className: Nv.jS,
                    children: t.slice(0, i).map((e, n) => (0, c.jsx)(NO, { userId: e, last: n === t.length - 1 }, e)),
                }),
                i < t.length
                    ? (0, c.jsx)("div", {
                          className: Nv.vM,
                          children: (0, c.jsx)(t8.D, {
                              onClick: function () {
                                  l((e) => e + 5);
                              },
                              className: Nv.Qf,
                              children: (0, c.jsx)(z.E, {
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  children: j.intl.format(j.t.jULEDr, {
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
let ND = (0, a.E2)(o.X.CONTENT_AND_SOCIAL_BLOCKED_USERS, {
        useSearchTerms: () => [j.intl.string(j.t.PFOUKW)],
        usePredicate: () => (0, m.bG)([NI.A], () => NI.A.getBlockedIDs().length > 0),
        Component: function () {
            let e = (0, m.yK)([NI.A], () => NI.A.getBlockedIDs());
            return (0, c.jsx)(NL, { userIds: e, listType: "blocked" });
        },
    }),
    NR = (0, a.E2)(o.X.CONTENT_AND_SOCIAL_IGNORED_USERS, {
        useSearchTerms: () => [j.intl.string(j.t["93ZDWE"])],
        usePredicate: () => (0, m.bG)([NI.A], () => NI.A.getIgnoredIDs().length > 0),
        Component: function () {
            let e = (0, m.yK)([NI.A], () => NI.A.getIgnoredIDs());
            return (0, c.jsx)(NL, { userIds: e, listType: "ignored" });
        },
    }),
    NP = (0, a.zZ)(o.X.RESTRICTED_USERS_CATEGORY, {
        useTitle: () =>
            (0, EP.SV)("RestrictedUsersCategory") ? j.intl.string(j.t["+Iryf3"]) : j.intl.string(j.t.LVwR56),
        useSubtitle: () =>
            j.intl.format(j.t["0aNQo9"], { helpArticle: eS.A.getArticleURL(A.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE) }),
        buildLayout: () => [ND, NR],
        usePredicate: function () {
            let { hasBlockedUsers: e, hasIgnoredUsers: t } = (0, m.cf)([NI.A], () => ({
                hasBlockedUsers: NI.A.getBlockedIDs().length > 0,
                hasIgnoredUsers: NI.A.getIgnoredIDs().length > 0,
            }));
            return t || e;
        },
    });
var NG = n(22385),
    NM = n(556534),
    NU = n(111159),
    NV = n(152056),
    Nk = n(467962);
let Nw = { label: () => j.intl.string(j.t["32u1Dx"]), value: NG.YG };
var NF = n(954225);
function NB() {
    return (0, NM.Tx)() !== NG.YG;
}
function Nz() {
    return j.intl.string(j.t["T+nevN"]);
}
let NX = (0, a.zD)(o.X.CONTENT_AND_SOCIAL_PERMISSIONS_ACTIVITY_JOIN_SETTING, {
    useTitle: Nz,
    useSubtitle: () =>
        j.intl.format(j.t.jXKQCu, { helpdeskArticle: eS.A.getArticleURL(A.MVz.ACTIVITY_STATUS_SETTINGS) }),
    useValue: function () {
        let e = (0, NM.Tx)();
        return !v.pE.useSetting().includes(e);
    },
    setValue: function (e) {
        let t = NG.xk.getState().selectedGuildId,
            n = (0, n2.CN)();
        e ? n.delete(t) : n.add(t),
            v.pE.updateSetting([...n]),
            e7.default.track(A.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                action: NF.m.RESTRICT_GUILD_ACTIVITY_JOIN_TOGGLE,
                ingress: e_.bf.USER_SETTINGS_PRIVACY_SAFETY,
                guild_id: t,
            });
    },
    usePredicate: NB,
});
function NY() {
    return (0, NM.Tx)() !== NG.YG;
}
function NH() {
    return j.intl.string(AL.default.WhdCGP);
}
let NK = (0, a.zD)(o.X.CONTENT_AND_SOCIAL_PERMISSIONS_ACTIVITY_SHARE_SETTING, {
    useTitle: NH,
    useSubtitle: () => j.intl.string(AL.default.UQ9RHJ),
    useValue: function () {
        let e = (0, NM.Tx)();
        return !v.JG.useSetting().includes(e);
    },
    setValue: function (e) {
        let t = NG.xk.getState().selectedGuildId,
            n = (0, n2.Kk)();
        e ? n.delete(t) : n.add(t),
            v.JG.updateSetting([...n]),
            e7.default.track(A.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                action: NF.m.RESTRICT_GUILD_ACTIVITY_STATUS_TOGGLE,
                ingress: e_.bf.USER_SETTINGS_PRIVACY_SAFETY,
                guild_id: t,
            });
    },
    usePredicate: NY,
});
var NW = n(307863),
    NZ = n(428031),
    Nq = n(972737);
function NQ() {
    return (0, NW.e)() ? j.intl.string(j.t.PMsfcH) : j.intl.string(j.t.RAQUSN);
}
function NJ() {
    let e = (0, NM.Tx)(),
        t = (0, NM.q9)(),
        n = (0, NW.e)();
    return e === NG.YG
        ? n
            ? j.intl.string(j.t.XXGmuB)
            : j.intl.string(j.t.wbYDfT)
        : t
          ? j.intl.string(j.t.V0ka0Q)
          : n
            ? j.intl.string(j.t.F9WY3f)
            : j.intl.string(j.t.G7c3Xo);
}
function N$() {
    let e = (0, NM.Tx)(),
        t = v.$s.useSetting().includes(e),
        n = (0, NZ.K)();
    return e === NG.YG ? !n : !t;
}
function N0() {
    let e = (0, _K.uM)();
    return (0, NM.Tx)() === NG.YG && e;
}
function N1(e, t) {
    e7.default.track(A.HAw.GUILD_DEFAULT_DMS_UPDATED, { default_guilds_restricted: e, applied_to_existing_guilds: t });
}
function N2(e) {
    let t = NG.xk.getState().selectedGuildId;
    if (t === NG.YG) {
        var n;
        (n = !e),
            (0, Nq.O)({
                header: j.intl.string(j.t["uUr+GR"]),
                body: j.intl.string(j.t.hjGJBp),
                confirmText: j.intl.string(j.t.gm1Vej),
                cancelText: j.intl.string(j.t.p89ACt),
                confirmButtonColor: sN.$n.Colors.BRAND,
                onConfirm: function () {
                    v.n6.updateSetting(n), N1(n, !1);
                },
                onCancel: function () {
                    v.n6.updateSetting(n), v.$s.updateSetting(n ? lc.A.getGuildIds() : []), N1(n, !0);
                },
            });
    } else {
        let n = (0, n2.Tb)();
        e ? n.delete(t) : n.add(t),
            v.$s.updateSetting(Array.from(n)),
            e7.default.track(A.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                action: NF.m.DIRECT_MESSAGES_TOGGLE,
                ingress: e_.bf.USER_SETTINGS_PRIVACY_SAFETY,
                guild_id: t,
            });
    }
}
let N3 = (0, a.zD)(o.X.CONTENT_AND_SOCIAL_PERMISSIONS_DMS_SETTING, {
        useTitle: NJ,
        useValue: N$,
        useDisabled: N0,
        setValue: N2,
    }),
    N5 = (0, a.zD)(o.X.CONTENT_AND_SOCIAL_PERMISSIONS_DMS_SETTING, {
        useTitle: NQ,
        useSubtitle: NJ,
        useValue: N$,
        useDisabled: N0,
        setValue: N2,
    });
var N6 = n(953298);
function N4(e, t) {
    e7.default.track(A.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
        default_guilds_restricted: e,
        applied_to_existing_guilds: t,
    });
}
function N8() {
    let e = (0, EP.SV)("PermissionsMessageRequestsSetting"),
        t = (0, NM.q9)();
    if (e)
        if (t) return j.intl.string(j.t["982I7+"]);
        else return j.intl.string(j.t["3yHM5i"]);
    return j.intl.string(j.t["3o2ojh"]);
}
let N7 = (0, a.zD)(o.X.CONTENT_AND_SOCIAL_PERMISSIONS_MESSAGE_REQUESTS_SETTING, {
        useTitle: N8,
        useSubtitle: function () {
            let e = (0, EP.SV)("PermissionsMessageRequestsSetting"),
                t = (0, NM.q9)();
            return e
                ? j.intl.format(j.t.BoCjTy, { learnMoreUrl: eS.A.getArticleURL(A.MVz.MESSAGE_REQUESTS) })
                : t
                  ? j.intl.format(j.t.WpnWLc, { helpdeskArticle: eS.A.getArticleURL(A.MVz.MESSAGE_REQUESTS) })
                  : j.intl.format(j.t.wkm9a3, { helpdeskArticle: eS.A.getArticleURL(A.MVz.MESSAGE_REQUESTS) });
        },
        useValue: function () {
            let e = (0, NM.Tx)(),
                t = (0, NZ.K)(),
                n = v.$s.useSetting().includes(e),
                i = v.YX.useSetting(),
                l = v.Zr.useSetting().includes(e);
            return e === NG.YG ? !t && !i : !n && !l;
        },
        useDisabled: function () {
            let e = (0, NM.Tx)(),
                t = (0, _K.uM)(),
                n = (0, NZ.K)(),
                i = v.$s.useSetting().includes(e);
            return e === NG.YG ? n || t : i;
        },
        setValue: function (e) {
            let t = NG.xk.getState().selectedGuildId;
            if (!e && (0, N6.w)())
                return void ph.A.showAgeVerificationGetStartedModal({ entryPoint: pS.q1.MESSAGE_REQUESTS_SETTINGS });
            if (t === NG.YG) {
                var n;
                (n = !e),
                    (0, Nq.O)({
                        header: j.intl.string(j.t.yAfu1p),
                        body: j.intl.string(j.t.Ry2z74),
                        confirmText: j.intl.string(j.t.gm1Vej),
                        cancelText: j.intl.string(j.t.p89ACt),
                        confirmButtonColor: sN.$n.Colors.BRAND,
                        onConfirm: function () {
                            v.YX.updateSetting(n), N4(n, !1);
                        },
                        onCancel: function () {
                            v.YX.updateSetting(n), v.Zr.updateSetting(n ? lc.A.getGuildIds() : []), N4(n, !0);
                        },
                    });
            } else {
                let n = (0, n2.xo)();
                e ? n.delete(t) : n.add(t),
                    v.Zr.updateSetting(Array.from(n)),
                    e7.default.track(A.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: NF.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                        ingress: e_.bf.USER_SETTINGS_PRIVACY_SAFETY,
                        guild_id: t,
                    });
            }
        },
    }),
    N9 = (0, a.E2)(o.X.CONTENT_AND_SOCIAL_PERMISSIONS_GUILD_SELECTOR, {
        useSearchTerms: function () {
            let e = (0, EP.SV)("GuildSelect"),
                t = [NQ(), N8()],
                n = NH(),
                i = NY();
            !e && i && t.push(n);
            let l = Nz(),
                s = NB();
            return !e && s && t.push(l), t;
        },
        Component: function () {
            let { selectedGuildId: e, setSelectedGuildId: t } = (0, NG.xk)(),
                n = (0, m.bG)([u0.Ay], () => u0.Ay.getFlattenedGuildIds()),
                i = (0, m.bG)([lc.A], () => lc.A.getGuilds()),
                l = n[0];
            g.useEffect(
                () =>
                    NV.A.subscribe(
                        (e) => {
                            let { query: t } = e;
                            return t.trim();
                        },
                        (e, n) => {
                            let i = NG.xk.getState().selectedGuildId;
                            "" === n && "" !== e && i === NG.YG && null != l
                                ? t(l)
                                : "" === e && i !== NG.YG && t(NG.YG);
                        },
                        { equalityFn: (e, t) => e === t },
                    ),
                [l, t],
            );
            let s = g.useMemo(() => {
                let e = [];
                return (
                    e.push({
                        ...Nw,
                        id: Nw.value,
                        label: Nw.label(),
                        leading: (0, c.jsx)("div", {
                            className: Nk.KP,
                            children: (0, c.jsx)(NU.p, {
                                size: "sm",
                                color: "white",
                                "aria-hidden": !0,
                                className: Nk.cl,
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
                                leading: (0, c.jsx)(dn.Ay, {
                                    className: Nk.cl,
                                    guild: n,
                                    size: dn.Ay.Sizes.SMALLER,
                                    active: !0,
                                }),
                            });
                    }),
                    e
                );
            }, [n, i]);
            return (0, c.jsx)(SN.Z, {
                selectionMode: "single",
                onSelectionChange: function (e) {
                    t(e);
                },
                value: e,
                options: s,
            });
        },
    });
function Ie() {
    let e = _W(),
        t = _Y();
    if ((0, NM.Tx)() === NG.YG) return e ?? t;
}
let It = (0, a.zZ)(o.X.PERMISSIONS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.Y5GYcX),
        useSubnavLabel: () => j.intl.string(j.t.YUU0RF),
        useInlineNotice: Ie,
        buildLayout: () => [N9, N3, N7],
    }),
    In = (0, a.zZ)(o.X.PERMISSIONS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.eYaT7L),
        useInlineNotice: Ie,
        buildLayout: () => [N9, N5, N7, NK, NX],
    }),
    Ii = (0, a.dT)(o.X.CONTENT_AND_SOCIAL_MAIN_TAB, {
        getTitle: () => j.intl.string(j.t["/7xJCF"]),
        buildLayout: () => [Nm, In, NN, NP],
    }),
    Il = (0, a.dT)(o.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES_TAB, {
        initialize: () => {
            A9.A.fetch();
        },
        getTitle: () => j.intl.string(j.t.YpCiMt),
        buildLayout: () => [_k],
    }),
    Is = (0, a.t_)(o.X.CONTENT_AND_SOCIAL_PANEL, {
        useTitle: () => j.intl.string(j.t["+o1pDZ"]),
        buildLayout: () => [Ii, Il],
    }),
    Ir = (0, a.i4)(o.X.CONTENT_AND_SOCIAL_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t["+o1pDZ"]),
        icon: _v.i,
        buildLayout: () => [Is],
    });
var Ia = n(254138),
    Io = n(290595),
    Iu = n(153488);
let Id = (0, a.zD)(o.X.CLIPS_ALLOW_VOICE_RECORDING_SETTING, {
    useTitle: () => j.intl.string(j.t.AGDDkH),
    useSubtitle: () => j.intl.string(j.t.kyo3dJ),
    useValue: () => v.Q$.useSetting(),
    setValue: (e) => f4.eQ({ allowVoiceRecording: e }),
});
var Ic = n(157559),
    Ig = n(331887);
function Im() {
    let e = (0, m.bG)([l0.default], () => l0.default.getCurrentUser()),
        t = (0, m.bG)([Ig.A], () => Ig.A.harvestType),
        [n, i] = g.useState(() => Date.now()),
        l = null == t ? n : new Date(t.created_at).getTime() + 2592e6,
        s = g.useRef(null);
    return (g.useEffect(() => {
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
let IA = (0, a.Tf)(o.X.DATA_HARVEST_REQUEST_SETTING, {
        useTitle: () => j.intl.string(j.t.qfFFos),
        useSubtitle: function () {
            let e = Im();
            if (e.allowed) return j.intl.format(j.t.NRI6vt, { article: eS.A.getArticleURL(A.MVz.GDPR_REQUEST_DATA) });
            switch (e.reason) {
                case "staff":
                    return j.intl.string(j.t.hIbRso);
                case "not_verified":
                    return j.intl.format(j.t.rBqJDq, {
                        settingsLink: (e, t) =>
                            (0, c.jsx)(
                                t8.D,
                                {
                                    tag: "a",
                                    onClick: () => (0, t9.openUserSettings)(o.X.ACCOUNT_INFO_EMAIL_SETTING),
                                    children: e,
                                },
                                t,
                            ),
                    });
                case "rate_limited": {
                    let t = ii()(e.nextAllowed).format("MMMM Do YYYY");
                    return j.intl.format(j.t["VLMG1+"], { date: t });
                }
                default:
                    return;
            }
        },
        initialize: () => {
            e2.h.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_START" }),
                e1.Bo.get({ url: A.Rsh.USER_HARVEST, oldFormErrors: !0, rejectWithError: !1 })
                    .then((e) => {
                        e2.h.dispatch({ type: "UPDATE_DATA_HARVEST_TYPE", harvestType: e.body });
                    })
                    .catch((e) => {
                        e2.h.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_FAILURE", error: e });
                    });
        },
        useDisabled: () => !Im().allowed,
        useLoading: () => (0, m.bG)([Ig.A], () => Ig.A.requestingHarvest),
        useVariant: () => "secondary",
        useLabel: () => j.intl.string(j.t.dmBSKo),
        onClick: function () {
            return new Promise((e) => {
                let t = !0;
                !(function (e) {
                    let { onConfirm: t, ...i } = e;
                    (0, ln.openModalLazy)(async () => {
                        let { default: e } = await n.e("92063").then(n.bind(n, 970018));
                        return (n) => (0, c.jsx)(e, { modalProps: n, onConfirm: t });
                    }, i);
                })({
                    onConfirm: (n) => {
                        (t = !1),
                            (0, SG.$I)(n)
                                .then(
                                    (e) => (
                                        null != e &&
                                            null != e.body &&
                                            e2.h.dispatch({ type: "UPDATE_DATA_HARVEST_TYPE", harvestType: e.body }),
                                        e
                                    ),
                                )
                                .then(
                                    (e) => {
                                        null != e && null != e.body
                                            ? Ic.A.show({
                                                  title: j.intl.string(j.t.i2iul5),
                                                  body: j.intl.string(j.t["6Nmv4i"]),
                                              })
                                            : Ic.A.show({
                                                  title: j.intl.string(j.t.OjbtDm),
                                                  body: j.intl.string(j.t["0F5Jyt"]),
                                              });
                                    },
                                    (e) => {
                                        let t = e?.message || e?.body?.message || j.intl.string(j.t["0F5Jyt"]);
                                        Ic.A.show({ title: j.intl.string(j.t.OjbtDm), body: t });
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
    IE = (0, a.v_)(o.X.DATA_USAGE_DISCLAIMER_SETTING, {
        useTitle: () => j.intl.string(j.t.D60Gfj),
        useSubtitle: () =>
            j.intl.format(j.t.dszICC, {
                onClickDisable: () => (0, t9.openUserSettings)(o.X.ACCOUNT_DISABLE_SETTING),
                onClickDelete: () => (0, t9.openUserSettings)(o.X.ACCOUNT_DELETE_SETTING),
            }),
    }),
    Ih = (0, a.zD)(o.X.DATA_USAGE_PERSONALIZATION_SETTING, {
        useTitle: () => j.intl.string(j.t.MNKzyg),
        useSubtitle: () =>
            j.intl.format(j.t["2SiYln"], { helpdeskArticle: eS.A.getArticleURL(A.MVz.DATA_USED_FOR_RECOMMENDED) }),
        useValue: function () {
            return (0, m.bG)([Iu.A], () => Iu.A.hasConsented(A.YAq.PERSONALIZATION));
        },
        setValue: function (e) {
            e
                ? (0, Io.U)([A.YAq.PERSONALIZATION], []).catch(Nq.i)
                : (0, Nq.O)({
                      header: j.intl.string(j.t["9SNpzv"]),
                      confirmText: j.intl.string(j.t["9g5UGw"]),
                      cancelText: j.intl.string(j.t["+ZLPw9"]),
                      onConfirm: () => {
                          (0, Io.U)([], [A.YAq.PERSONALIZATION]).catch(Nq.i);
                      },
                      body: j.intl.string(j.t.gJvDDh),
                  });
        },
        useDisabled: _K.uM,
    });
var IS = n(884705);
function IT() {
    return (0, m.bG)([IS.A], () => IS.A.isTogglesDisabled());
}
let Ix = (0, a.zD)(o.X.DATA_USAGE_QUESTS_3P_SETTING, {
        useTitle: () => j.intl.string(j.t.CyLYKZ),
        useSubtitle: () =>
            j.intl.format(j.t["md5l4/"], { helpdeskArticle: eS.A.getArticleURL(A.MVz.QUESTS_PRIVACY_CONTROLS) }),
        useValue: function () {
            return !v.vf.useSetting();
        },
        setValue: function (e) {
            v.vf.updateSetting(!e);
        },
        useDisabled: function () {
            let e = IT(),
                t = v.H1.useSetting(),
                n = (0, _K.uM)();
            return e || t || n;
        },
        useSearchTerms: () => [j.intl.string(j.t.CyLYKZ)],
    }),
    Ip = (0, a.zD)(o.X.DATA_USAGE_QUESTS_SETTING, {
        useTitle: () => j.intl.string(j.t.sJYh5t),
        useSubtitle: () => j.intl.string(j.t.w4fvxe),
        useValue: function () {
            return !v.H1.useSetting();
        },
        setValue: function (e) {
            v.H1.updateSetting(!e);
        },
        useSearchTerms: () => [j.intl.string(j.t.VkS7Yd)],
        useDisabled: function () {
            let e = IT(),
                t = (0, _K.uM)();
            return e || t;
        },
    }),
    If = (0, a.AK)(o.X.DATA_USAGE_ACTIVITY_PRIVACY_NAVIGATOR, {
        destinationKey: o.X.REGISTERED_GAMES_PANEL,
        useSubtitle: function () {
            let { names: e, totalCount: t } = Ay(2);
            return j.intl.format(j.t.GaTAYM, { count: t, nameCount: e.length, game1: e[0], game2: e[1] });
        },
        useTrailingDecoration: () => {
            let e = Av();
            return { type: d.wF.STACKED_ICONS, icons: e };
        },
        usePredicate: () =>
            (0, m.bG)([iH.Ay], () => iH.Ay.getGamesSeen(!1).some((e) => !(0, Af.n1)(e))) && (0, no.xl)(),
    }),
    I_ = (0, a.gN)(o.X.DATA_USAGE_RELATED_SETTINGS, { buildLayout: () => [If] }),
    IN = (0, a.zD)(o.X.DATA_USAGE_STATISTICS_SETTING, {
        useTitle: () => j.intl.string(j.t.XuADY2),
        useSubtitle: () =>
            j.intl.format(j.t.FNqmmX, { helpdeskArticle: eS.A.getArticleURL(A.MVz.DATA_PRIVACY_CONTROLS) }),
        useValue: function () {
            return (0, m.bG)([Iu.A], () => Iu.A.hasConsented(A.YAq.USAGE_STATISTICS));
        },
        setValue: function (e) {
            e
                ? (0, Io.U)([A.YAq.USAGE_STATISTICS], []).catch(Nq.i)
                : (0, Nq.O)({
                      header: j.intl.string(j.t.OdPCbN),
                      body: j.intl.string(j.t.MGWabA),
                      confirmText: j.intl.string(j.t["D3+rU4"]),
                      cancelText: j.intl.string(j.t.kYpG0u),
                      onConfirm: () => (0, Io.U)([], [A.YAq.USAGE_STATISTICS]).catch(Nq.i),
                  });
        },
        useSearchTerms: () => [j.intl.string(j.t.XuADY2)],
        useDisabled: _K.uM,
    }),
    II = (0, a.zZ)(o.X.DATA_USAGE_CATEGORY, {
        useTitle: () => j.intl.string(j.t.QDAriI),
        useInlineNotice: _W,
        initialize: () => {
            Iu.A.fetchedConsents || (0, Io.Q)();
        },
        buildLayout: () => [IE, IN, Ih, Ip, Ix, Id, IA, I_],
    });
var IC = n(567926);
let Ib = (0, a.zD)(o.X.NOTIFY_FRIENDS_ON_PROFILE_UPDATE_SETTING, {
    useTitle: () => j.intl.string(IC.default.F3llsQ),
    useSubtitle: () => j.intl.string(IC.default["6goWcz"]),
    useValue: v.Sy.useSetting,
    setValue: function (e) {
        v.Sy.updateSetting(e),
            e7.default.track(A.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                update_type: AR.Y.ACCOUNT,
                notify_friends_on_profile_update: e,
            });
    },
});
function Iy() {
    let e = v.JG.useSetting();
    return (0, m.yK)([u0.Ay, lc.A], () => {
        let t = new Set(e);
        return u0.Ay.getFlattenedGuildIds().filter((e) => null != lc.A.getGuild(e) && !t.has(e));
    }, [e]);
}
let Iv = (0, a.AK)(o.X.PROFILE_PRIVACY_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: function () {
            let e = Iy();
            if (0 === e.length) return j.intl.format(j.t.QJIJ5p, {});
            let t = lc.A.getGuild(e[0]),
                n = t?.name ?? "",
                i = e.length - 1;
            return 0 === i
                ? j.intl.format(j.t["T+8J4A"], { guildName: n })
                : j.intl.format(j.t["3JyODQ"], { guildName: n, count: i });
        },
        useTrailingDecoration: function () {
            let e,
                t,
                n =
                    ((e = Iy()),
                    0 ===
                    (t = (0, m.yK)(
                        [lc.A],
                        () =>
                            e
                                .slice(0, 2)
                                .map((e) => lc.A.getGuild(e))
                                .filter((e) => null != e),
                        [e],
                    )).length
                        ? null
                        : t.length >= 2
                          ? {
                                frontIcon: {
                                    icon: (0, c.jsx)(AK, { guild: t[0], size: A_.CD }),
                                    shape: A_.e0.SQUIRCLE,
                                },
                                backIcon: { icon: (0, c.jsx)(AK, { guild: t[1], size: A_.CD }), shape: A_.e0.SQUIRCLE },
                            }
                          : {
                                frontIcon: {
                                    icon: (0, c.jsx)(AK, { guild: t[0], size: A_.CD }),
                                    shape: A_.e0.SQUIRCLE,
                                },
                            });
            return { type: d.wF.STACKED_ICONS, icons: n };
        },
        destinationKey: o.X.ACTIVITY_PRIVACY_PANEL,
    }),
    Ij = (0, a.gN)(o.X.PROFILE_PRIVACY_RELATED_SETTINGS, {
        usePredicate: () => (0, AM.lX)("ProfilePrivacyRelatedSettings"),
        buildLayout: () => [Iv],
    }),
    IO = (0, a.Qx)(o.X.PROFILE_PRIVACY_SETTING, {
        usePredicate: () => (0, AM.lX)("ProfilePrivacySetting"),
        useTitle: () => j.intl.string(j.t.Qnf32C),
        useOptions: function () {
            return [
                {
                    name: j.intl.string(j.t.Boxc8R),
                    desc: j.intl.string(j.t["nLj+nc"]),
                    value: ek.KP.FRIENDS_AND_ALL_GUILDS,
                },
                {
                    name: j.intl.string(j.t.YOIKBt),
                    desc: j.intl.string(j.t.y0JZ4s),
                    value: ek.KP.FRIENDS_AND_SMALL_GUILDS,
                },
                { name: j.intl.string(j.t.u0nlJv), desc: j.intl.string(j.t["4jnKHu"]), value: ek.KP.FRIENDS_ONLY },
            ];
        },
        useValue: v.KP.useSetting,
        setValue: function (e) {
            let t = v.KP.getSetting();
            if ((v.KP.updateSetting(e), !(0, AM.W1)("ProfilePrivacySetting"))) return;
            let i = (0, AF.gS)(t, e);
            null != i &&
                (0, ln.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("81849"), n.e("62041"), n.e("63786")]).then(
                        n.bind(n, 413201),
                    );
                    return (t) =>
                        (0, c.jsx)(e, {
                            ...t,
                            direction: i.direction,
                            affectedGuildIds: i.affectedGuildIds,
                            settingName: i.settingName,
                            mappedActivityValue: i.mappedActivityValue,
                        });
                });
        },
        useSearchTerms: () => [j.intl.string(j.t.Qnf32C)],
    }),
    IL = (0, a.zZ)(o.X.PROFILE_PRIVACY_CATEGORY, {
        useTitle: () => j.intl.string(j.t.ul884f),
        useSubtitle: () =>
            j.intl.format(j.t.N4jSgR, {
                learnMoreUrl: eS.A.getArticleURL("38859942749463-Profile-Privacy-Setting-on-Discord"),
            }),
        buildLayout: () => [IO, Ib, Ij],
    });
var ID = n(936388),
    IR = n(714763),
    IP = n(814278);
let IG = (0, a.zD)(o.X.PERSISTENT_VERIFICATION_CODES_SETTING, {
    useTitle: () => j.intl.string(j.t["opi/XK"]),
    useSubtitle: () => j.intl.format(j.t["/T+ZlP"], { helpArticle: (0, IP.Lu)() }),
    useValue: function () {
        return (0, m.bG)([IR.A], () => IR.A.getPersistentCodesEnabled());
    },
    setValue: function (e) {
        ID.A.updatePersistentCodesEnabled(e);
    },
});
var IM = n(787392);
function IU() {
    return (0, m.yK)([IM.A], () => IM.A.getUserIds());
}
var IV = n(803306),
    Ik = n(966327),
    Iw = n(509531);
function IF(e) {
    let { userId: t, count: n } = e,
        { analyticsLocations: i } = (0, eL.Ay)(),
        l = (0, m.bG)([l0.default], () => l0.default.getUser(t)),
        s = TV.Ay.getFormattedName(l),
        r = g.useCallback(() => {
            (0, IP.kj)(t);
        }, [t]),
        a = g.useCallback(() => (0, Sw.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: i }), [t, i]);
    return (
        g.useEffect(() => {
            (0, IV.getUser)(t);
        }, [t]),
        (0, c.jsxs)("div", {
            className: Iw.uW,
            children: [
                null != l && (0, c.jsx)(Ik.A, { className: Iw.my, user: l, size: x._3.SIZE_40 }),
                (0, c.jsxs)("div", {
                    className: Iw.Qq,
                    children: [
                        (0, c.jsx)(t8.D, {
                            className: Iw.Xh,
                            onClick: a,
                            children: (0, c.jsx)(z.E, {
                                variant: "text-md/semibold",
                                color: "interactive-text-active",
                                children: s,
                            }),
                        }),
                        (0, c.jsx)(z.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            children: j.intl.format(j.t["/MBjYF"], { count: n }),
                        }),
                    ],
                }),
                (0, c.jsx)(t8.D, { onClick: r, className: Iw.Qz, children: (0, c.jsx)(i6.u, { size: "xs" }) }),
            ],
        })
    );
}
function IB(e) {
    let { className: t, userId: n, verification: i, index: l } = e,
        s = (0, IP.tC)(i.timestamp),
        r = g.useCallback(() => {
            (0, IP.W0)(n, i.verifiedKey);
        }, [i.verifiedKey, n]);
    return (0, c.jsxs)("div", {
        className: t,
        children: [
            (0, c.jsxs)("div", {
                className: Iw.Qq,
                children: [
                    (0, c.jsx)(z.E, {
                        variant: "text-sm/semibold",
                        color: "interactive-text-active",
                        children: j.intl.format(j.t.N4qBBO, { index: l + 1 }),
                    }),
                    (0, c.jsx)(z.E, { variant: "text-sm/medium", color: "text-default", children: s }),
                ],
            }),
            (0, c.jsx)(t8.D, {
                className: Iw.Kk,
                onClick: r,
                children: (0, c.jsx)(El.P, { size: "md", color: nK.A.colors.INTERACTIVE_TEXT_DEFAULT }),
            }),
        ],
    });
}
function Iz(e) {
    let { userId: t } = e,
        n = (0, m.yK)([IM.A], () =>
            k()(IM.A.getUserVerifiedKeys(t))
                .entries()
                .map((e) => {
                    let [t, n] = e;
                    return { verifiedKey: t, timestamp: n };
                })
                .sortBy((e) => -1 * e.timestamp)
                .value(),
        );
    return (0, c.jsxs)(c.Fragment, {
        children: [
            (0, c.jsx)(IF, { userId: t, count: n.length }),
            n.map((e, i) =>
                (0, c.jsxs)(
                    g.Fragment,
                    {
                        children: [
                            (0, c.jsx)(IB, { className: Iw.nM, userId: t, index: i, verification: e }),
                            i !== n.length - 1 && (0, c.jsx)("div", { className: Iw.yF }),
                        ],
                    },
                    `${i}-${e.timestamp}`,
                ),
            ),
        ],
    });
}
var IX = n(756625);
let IY = (0, a.E2)(o.X.USERS_VERIFIED_KEYS_LIST_SETTING, {
        useSearchTerms: () => [j.intl.string(j.t["5b3FNI"])],
        usePredicate: function () {
            let e = IU();
            return null != e && e.length > 0;
        },
        Component: function () {
            let e = IU();
            return (0, c.jsxs)(_9.h, {
                children: [
                    (0, c.jsx)(_9._, {
                        header: j.intl.string(j.t["5b3FNI"]),
                        description: j.intl.format(j.t.jrTSWU, { helpArticle: (0, IP.dc)() }),
                    }),
                    e.map((e) => (0, c.jsx)("div", { className: IX.A, children: (0, c.jsx)(Iz, { userId: e }) }, e)),
                ],
            });
        },
    }),
    IH = (0, a.zZ)(o.X.VOICE_SECURITY_CATEGORY, {
        useTitle: () => j.intl.string(j.t.bTwjaz),
        usePredicate: () => (0, eW.isDesktop)(),
        buildLayout: () => [IG, IY],
    }),
    IK = (0, a.t_)(o.X.DATA_AND_PRIVACY_PANEL, {
        useTitle: () => j.intl.string(j.t.OAuOHD),
        buildLayout: () => [II, IL, IH],
    }),
    IW = (0, a.i4)(o.X.DATA_AND_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.OAuOHD),
        icon: Ia.m,
        buildLayout: () => [IK],
    });
var IZ = n(476713);
let Iq = (0, a.AK)(o.X.CONNECTED_GAMES_AUTHORIZED_APPS_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t.O65dzZ),
        useTitle: () => j.intl.string(j.t["f6kk+r"]),
        destinationKey: o.X.AUTHORIZED_APPS_CATEGORY,
    }),
    IQ = (0, a.gN)(o.X.CONNECTED_GAMES_RELATED_SETTINGS, { buildLayout: () => [Iq] }),
    IJ = (0, a.E2)(o.X.CONNECTED_GAMES_UNAVAILABLE, {
        Component: function () {
            let { showLoadingIndicator: e } = _O(!0, !0);
            return e ? (0, c.jsx)(aV.y, {}) : (0, c.jsx)(_R, {});
        },
        useSearchTerms: () => [j.intl.string(j.t["+0U77d"])],
        usePredicate: () => {
            let { showLoadingIndicator: e, slayerSdkApplications: t } = _O(!0, !0);
            return e || 0 === t.length;
        },
    });
function I$() {
    let { slayerSdkApplications: e, showLoadingIndicator: t } = _O(!0, !0);
    return {
        sortedGames: g.useMemo(() => e.toSorted((e, t) => aq.default.compare(t.id, e.id)), [e]),
        showLoadingIndicator: t,
    };
}
n(839272);
let I0 = (0, a.zZ)(o.X.SPAM_FILTERS_CATEGORY, { useTitle: () => j.intl.string(j.t.Qwuoic), buildLayout: () => [Ng] }),
    I1 = (0, a.zZ)(o.X.CONNECTED_GAMES_CATEGORY, {
        useTitle: () => j.intl.string(j.t.RyvebU),
        useSubtitle: function () {
            let { sortedGames: e } = I$();
            function t(e, t) {
                return (0, c.jsx)(
                    z.E,
                    { tag: "span", variant: "text-sm/normal", color: "text-default", children: e },
                    t,
                );
            }
            return 0 === e.length
                ? j.intl.string(j.t.Amr1IZ)
                : 1 === e.length
                  ? j.intl.format(j.t["60IaC2"], { gameName: e[0].name, gameListHook: t })
                  : 2 === e.length
                    ? j.intl.format(j.t.lthjd7, { game1: e[0].name, game2: e[1].name, gameListHook: t })
                    : j.intl.format(j.t.RAUmQM, {
                          game1: e[0].name,
                          game2: e[1].name,
                          remaining: e.length - 2,
                          gameListHook: t,
                      });
        },
        useSubnavLabel: () => j.intl.string(j.t.YpCiMt),
        useHeaderDecoration: () => {
            let e = (function () {
                let { sortedGames: e } = I$();
                return g.useMemo(() => {
                    let t = e[0];
                    if (null == t) return null;
                    let n = e[1];
                    return {
                        frontIcon: {
                            icon: (0, c.jsx)("img", {
                                src: y.Ay.getApplicationIconURL({ id: t.id, icon: t.icon }),
                                alt: t.name,
                                width: A_.CD,
                                height: A_.CD,
                            }),
                            shape: A_.e0.ROUNDED,
                        },
                        ...(null != n && {
                            backIcon: {
                                icon: (0, c.jsx)("img", {
                                    src: y.Ay.getApplicationIconURL({ id: n.id, icon: n.icon }),
                                    alt: n.name,
                                    width: A_.YP,
                                    height: A_.YP,
                                }),
                                shape: A_.e0.ROUNDED,
                            },
                        }),
                    };
                }, [e]);
            })();
            return { type: d.WX.STACKED_ICONS, icons: e };
        },
        useSearchTerms: () => [j.intl.string(j.t.YpCiMt)],
        initialize: () => {
            A9.A.fetch();
        },
        buildLayout: () => [_U, _V, IJ, IQ],
    }),
    I2 = (0, a.t_)(o.X.MESSAGING_PERMISSIONS_PANEL, {
        useTitle: () => j.intl.string(j.t.Cz07t8),
        buildLayout: () => [Nm, I0, It, N_, I1, NP],
    }),
    I3 = (0, a.i4)(o.X.MESSAGING_PERMISSIONS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.Cz07t8),
        icon: IZ.l,
        buildLayout: () => [I2],
    });
var I5 = n(782603),
    I6 = n(899847),
    I4 = n(695515),
    I8 = n(936926);
let I7 = (0, a.Hn)(o.X.MOBILE_NOTIFICATION_DELAY, {
        useTitle: () => j.intl.string(j.t["8rHeOr"]),
        useSubtitle: () => j.intl.string(j.t["eJE6+J"]),
        useValue: v.cU.useSetting,
        setValue: v.cU.updateSetting,
        useOptions: () =>
            V.range(1, 11).map((e) => ({
                id: e.toString(),
                value: 60 * e,
                label: j.intl.formatToPlainString(j.t.iXLF9W, { minutes: e }),
            })),
    }),
    I9 = (0, a.zD)(o.X.TEXT_TO_SPEECH_COMMAND, {
        useTitle: () => j.intl.string(j.t["btbS+Z"]),
        useSubtitle: () =>
            j.intl.format(j.t.Q5crhR, { onClick: () => (0, t9.openUserSettings)(o.X.TTS_PLAYBACK_RATE) }),
        useValue: v.on.useSetting,
        setValue: v.on.updateSetting,
    }),
    Ce = (0, a.Qx)(o.X.TEXT_TO_SPEECH_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.JZxxGx),
        useSubtitle: () => j.intl.string(j.t.HDLtJl),
        useValue: () => (0, m.bG)([r6.A], () => r6.A.getTTSType()),
        setValue: (e) => ae.default.setTTSType(e),
        useOptions: function () {
            return [
                { name: j.intl.string(j.t.B1AGeJ), value: A.aVn.ALL_CHANNELS },
                { name: j.intl.string(j.t.uzZg9e), value: A.aVn.SELECTED_CHANNEL },
                { name: j.intl.string(j.t.DYO5Oi), value: A.aVn.NEVER },
            ];
        },
        usePredicate: () => U.$j,
    }),
    Ct = o.X.NOTIFICATIONS_ADVANCED_ACCORDION,
    Cn = (0, a.bd)(Ct, {
        useTitle: (e) => (e ? j.intl.string(j.t.RyimDk) : j.intl.string(j.t.CUICbO)),
        useCollapsedSubtitle: function () {
            return tc(Ct, {
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
        buildLayout: () => [I7, I9, Ce],
    }),
    Ci = (0, a.zZ)(o.X.NOTIFICATIONS_ADVANCED_CATEGORY, {
        useTitle: () => j.intl.string(j.t["31DySj"]),
        buildLayout: () => [Cn],
    }),
    Cl = (0, a.zD)(o.X.ENABLE_UNREAD_MESSAGE_BADGE, {
        useTitle: () => j.intl.string(j.t.VH8AIJ),
        useSubtitle: () => j.intl.string(j.t["9K4qwX"]),
        useValue: function () {
            return (0, m.bG)([r6.A], () => !r6.A.getDisableUnreadBadge());
        },
        setValue: (e) => ae.default.setDisableUnreadBadge(!e),
    }),
    Cs = (0, a.zZ)(o.X.NOTIFICATIONS_BADGES_CATEGORY, {
        useTitle: () => j.intl.string(j.t.l6w3Vj),
        buildLayout: () => [Cl],
    });
var Cr = n(840559),
    Ca = n(997187),
    Co = n(723923);
let Cu = Co.px.map((e) =>
        (0, a.zD)(`${o.X.EMAIL_LIST_ITEM_PREFIX}${e.category}`, {
            useTitle: e.label,
            useSubtitle: e.subLabel,
            useValue: () =>
                (function (e) {
                    let { categories: t } = (0, m.cf)([Ca.A], () => Ca.A.getEmailSettings());
                    return !!t[e];
                })(e.category),
            setValue: (t) => (0, Cr.CA)(e.category, t),
        }),
    ),
    Cd = (0, a.Tf)(o.X.UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS, {
        useTitle: () => j.intl.string(j.t.Ra9Pwk),
        useSubtitle: () => j.intl.string(j.t.iYjQ8X),
        useLabel: () => j.intl.string(j.t.KT1pBA),
        useDisabled: function () {
            let { categories: e } = (0, m.cf)([Ca.A], () => Ca.A.getEmailSettings());
            return Co.Zk.every((t) => !e[t]);
        },
        onClick: () => (0, Cr.NI)(),
        useVariant: () => "critical-secondary",
    }),
    Cc = (0, a.zZ)(o.X.NOTIFICATIONS_EMAIL_CATEGORY, {
        useTitle: () => j.intl.string(j.t["w/qqKK"]),
        initialize: function () {
            let { initialized: e } = Ca.A.getEmailSettings();
            e || (0, Cr.cR)();
        },
        buildLayout: () => [...Cu, Cd],
    }),
    Cg = (0, a.zD)(o.X.DESKTOP_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t["/0WCll"]),
        useSubtitle: () => j.intl.string(j.t.wF9ih3),
        useValue: function () {
            return (0, m.bG)([r6.A], () => r6.A.getDesktopType()) !== A.nRU.NEVER;
        },
        setValue: (e) => ae.default.setDesktopType(e ? A.nRU.ALL : A.nRU.NEVER),
    });
var Cm = n(832712),
    CA = n(543465),
    CE = n(790782);
let Ch = (0, a.zD)(o.X.EXPERIMENTAL_UNREADS, {
    useTitle: () => j.intl.string(j.t["k6m/si"]),
    useSubtitle: () => j.intl.string(j.t.LGynPs),
    useValue: () => (0, m.bG)([CA.Ay], () => CA.Ay.useNewNotifications),
    setValue: function (e) {
        Cm.A.setAccountFlag(AR.i.USE_NEW_NOTIFICATIONS, e),
            e ||
                (mL.w.set("turnedOffNewNotifications", !0),
                e7.default.track(A.HAw.NOTIFICATION_MIGRATION_OPTOUT, {
                    num_guilds_with_new_setting: lc.A.getGuildsArray().filter(
                        (e) => CA.Ay.resolveGuildUnreadSetting(e) === CE.e.ONLY_MENTIONS,
                    ).length,
                }));
    },
    usePredicate: () =>
        (0, m.bG)(
            [l0.default, CA.Ay],
            () =>
                l0.default.getCurrentUser()?.isStaff() ||
                l0.default.getCurrentUser()?.isStaffPersonal() ||
                CA.Ay.useNewNotifications,
        ),
});
var CS = n(534654);
let CT = (0, a.zD)(o.X.SCREEN_DOWNTIME_REMINDER, {
        useTitle: () => j.intl.string(j.t.z9h8Ym),
        useSubtitle: () => j.intl.string(j.t.TummoQ),
        useValue: () => (0, m.bG)([r6.A], () => r6.A.screenDowntimeReminder),
        setValue: (e) => ae.default.setScreenDowntimeReminder(e),
        usePredicate: function () {
            let e = (0, I8.Vh)({ location: "ScreenDowntimeReminderSetting" }),
                t = (0, CS.A)(),
                n = (0, fU.Du)();
            return e && t && n;
        },
    }),
    Cx = (0, a.zD)(o.X.SCREEN_DOWNTIME_SCHEDULE, {
        useTitle: () => j.intl.string(j.t.onrAy7),
        useSubtitle: () => j.intl.string(j.t["/071J7"]),
        useValue: v.gY.useSetting,
        setValue: (e) => v.gY.updateSetting(e),
        usePredicate: function () {
            let e = (0, I8.Vh)({ location: "ScreenDowntimeScheduleSetting" }),
                t = (0, CS.A)(),
                n = (0, fU.Du)();
            return e && t && n;
        },
    });
var Cp = n(70730);
let Cf = (0, a.zD)(o.X.FRIEND_ANNIVERSARY_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.NjOMvh),
        useValue: v.oz.useSetting,
        setValue: function (e) {
            v.oz.updateSetting(e),
                e7.default.track(A.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: AR.Y.ACCOUNT,
                    friend_anniversary_notifications: e,
                });
        },
        useSearchTerms: () => [j.intl.string(j.t.hi4dSk)],
        usePredicate: () => {
            let { enabled: e } = Cp.u.getConfig({ location: "FriendAnniversaryNotifications" });
            return e;
        },
    }),
    C_ = (0, Ak.mj)({
        kind: "user",
        name: "2026-03-friend-is-online-v3",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 } },
    }),
    CN = (0, a.zD)(o.X.FRIEND_ONLINE_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.sQQgFj),
        useValue: v.NR.useSetting,
        setValue: function (e) {
            v.NR.updateSetting(e),
                e7.default.track(A.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: AR.Y.ACCOUNT,
                    friend_online_notifications: e,
                });
        },
        usePredicate: () => C_.useConfig({ location: "FriendOnlineNotifications" }).showSettingsToggle,
    }),
    CI = (0, a.zD)(o.X.GO_LIVE_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.FSNIvs),
        useValue: v.Yh.useSetting,
        setValue: function (e) {
            v.Yh.updateSetting(e),
                e7.default.track(A.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: AR.Y.ACCOUNT,
                    go_live_notifications: e,
                });
        },
    }),
    CC = (0, Ak.mj)({
        kind: "user",
        name: "2026-01-profile-updates-notification",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 0: { showSettingsToggle: !1 }, 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 } },
    }),
    Cb = (0, a.zD)(o.X.PROFILE_UPDATES_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.xBLMhQ),
        useValue: v.T3.useSetting,
        setValue: function (e) {
            v.T3.updateSetting(e),
                e7.default.track(A.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: AR.Y.ACCOUNT,
                    profile_updates_notifications: e,
                });
        },
        usePredicate: () => CC.useConfig({ location: "user_settings.ProfileUpdatesNotifications" }).showSettingsToggle,
    });
var Cy = n(815807);
let Cv = (0, a.Hn)(o.X.REACTION_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.Wxj9Hp),
        useOptions: () => [
            { id: "enabled", label: j.intl.string(j.t["9x/RtT"]), value: ek.Tz.NOTIFICATIONS_ENABLED },
            { id: "only_dms", label: j.intl.string(j.t.fJAbQd), value: ek.Tz.ONLY_DMS },
            { id: "disabled", label: j.intl.string(j.t["xu+UDU"]), value: ek.Tz.NOTIFICATIONS_DISABLED },
        ],
        useValue: v.Zp.useSetting,
        setValue: (e) => (0, Cy.n4)(e, v.Zp.getSetting()),
    }),
    Cj = (0, a.zD)(o.X.SERVER_TRENDING_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t["k51K1+"]),
        useValue: v.Qr.useSetting,
        setValue: function (e) {
            v.Qr.updateSetting(e),
                e7.default.track(A.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: AR.Y.ACCOUNT,
                    server_trending_notifications: e,
                });
        },
        usePredicate: () => !1,
    }),
    CO = (0, Ak.mj)({
        kind: "user",
        name: "2026-04-upcoming-server-event",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 }, 3: { showSettingsToggle: !0 } },
    }),
    CL = (0, a.zD)(o.X.UPCOMING_SERVER_EVENT_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.G8NPz6),
        useValue: v.zS.useSetting,
        setValue: function (e) {
            v.zS.updateSetting(e),
                e7.default.track(A.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: AR.Y.ACCOUNT,
                    upcoming_server_event_notifications: e,
                });
        },
        usePredicate: () => CO.useConfig({ location: "UpcomingServerEventNotifications" }).showSettingsToggle,
    }),
    CD = (0, a.FW)(o.X.NOTIFICATION_SELECTION_FIELD_SET, {
        variant: "compact",
        useTitle: () => j.intl.string(j.t.FEVRDV),
        buildLayout: () => [CI, Cf, CN, Cj, CL, Cb, Cv],
    }),
    CR = (0, a.zD)(o.X.TASK_BAR_FLASHING, {
        useTitle: () => j.intl.string(j.t.xSmFQG),
        useSubtitle: () => j.intl.string(j.t.bd4j4x),
        useValue: () => (0, m.bG)([r6.A], () => r6.A.taskbarFlash),
        setValue: (e) => ae.default.setTaskbarFlash(e),
        usePredicate: () => (0, no.uF)(),
    }),
    CP = (0, a.zZ)(o.X.NOTIFICATIONS_OVERVIEW_CATEGORY, {
        useTitle: () => j.intl.string(j.t["/dp6yY"]),
        buildLayout: () => [Cg, CR, CD, Ch, Cx, CT],
    });
var CG = n(965957),
    CM = n(312671),
    CU = n(235079);
let CV = (0, a.zD)(o.X.NOTIFICATION_HOLIDAY_SOUNDPACK, {
    useTitle: () => {
        let e = r4.A.useHolidaySoundpack();
        return null == e ? "" : j.intl.format(j.t["E/OyBr"], { soundpack: j.intl.string(e.soundpackLabel) });
    },
    useValue: function () {
        let e = (0, m.bG)([CM.A], () => CM.A.getSoundpack()),
            t = r4.A.useHolidaySoundpack();
        return e === t?.soundpack;
    },
    setValue: function (e) {
        let t = r4.A.getHolidaySoundpack();
        tl()(null != t, "predicate should fail if no soundpack is available"), (0, CG.p)(e ? t : CU.i.CLASSIC);
    },
    usePredicate: r4.A.useIsEligible,
});
var Ck = n(970931);
let Cw = {
        useTitle: () => j.intl.string(j.t.jD1qzM),
        sound: "message1",
        useDisabled: Ck.kB,
        useDisabledMessage: () => ((0, Ck.kB)() ? j.intl.string(j.t.cIRG0s) : void 0),
    },
    CF = { useTitle: () => j.intl.string(j.t.XBrJT6), sound: "call_ringing" },
    CB = (0, a.zD)(o.X.SELECTED_CHANNEL_NOTIFICATIONS, {
        useTitle: () => j.intl.string(j.t.TzjwV9),
        useSubtitle: () => j.intl.format(j.t.OOiGCM, { onClick: () => ai("message3") }),
        useValue: () =>
            (0, m.bG)([r6.A], () => r6.A.getNotifyMessagesInSelectedChannel() && !r6.A.getDisableAllSounds()),
        setValue: (e) => ae.default.setNotifyMessagesInSelectedChannel(e),
        useDisabled: () => (0, m.bG)([r6.A], () => r6.A.getDisableAllSounds()),
    }),
    Cz = (0, a.zD)(o.X.DISABLE_ALL_NOTIFICATION_SOUNDS, {
        useTitle: () => j.intl.string(j.t["2ZhCOd"]),
        useSubtitle: () => j.intl.string(j.t.EAKdPr),
        useValue: () => (0, m.bG)([r6.A], () => r6.A.getDisableAllSounds()),
        setValue: (e) => ae.default.toggleDisableAllSounds(e),
    }),
    CX = (0, a.D1)(o.X.NOTIFICATION_SOUNDS_LIST, {
        initialize: function () {
            return () => {
                an();
            };
        },
        buildLayout: () => [al(Cw), CB, al(CF), Cz],
    }),
    CY = (0, a.AK)(o.X.NOTIFICATIONS_TO_VOICE_AND_VIDEO_SOUNDS_NAVIGATOR, {
        useSubtitle: () => j.intl.string(j.t["MMy+lm"]),
        useSearchTerms: () => [j.intl.string(j.t["MMy+lm"])],
        destinationKey: o.X.SOUNDS_CATEGORY,
    }),
    CH = (0, a.gN)(o.X.NOTIFICATIONS_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [CY] }),
    CK = (0, a.zZ)(o.X.NOTIFICATIONS_SOUNDS_CATEGORY, {
        useTitle: () => j.intl.string(j.t.LweOYy),
        buildLayout: () => [CV, CX, CH],
    }),
    CW = (0, a.t_)(o.X.NOTIFICATIONS_PANEL, {
        useTitle: () => j.intl.string(j.t.HcoRu0),
        initialize: () => {
            !(0, I8.Eq)({ location: "NotificationsPanel" }) ||
                null != I4.A.getAgeGroup() ||
                I4.A.isLoading() ||
                (I4.A.canRefetch() && I6.Ay.initialPageLoad());
        },
        buildLayout: () => [CP, CK, Cs, Cc, Ci],
    }),
    CZ = (0, a.i4)(o.X.NOTIFICATIONS_SIDEBAR_ITEM, {
        useTitle: () => j.intl.string(j.t.HcoRu0),
        icon: I5.X,
        buildLayout: () => [CW],
    }),
    Cq = (0, a.WI)(o.X.USER_SECTION, {
        useTitle: () => j.intl.string(j.t.ShSTDe),
        hideTitle: !0,
        buildLayout: () => {
            let e = (0, EP.Bv)("UserSection");
            return [f2, ...(e ? [] : [Ir]), IW, ...(e ? [I3] : []), CZ, _y];
        },
    });
var CQ = n(387758),
    CJ = n(271866),
    C$ = n(147964),
    C0 = n(868511);
let C1 = (0, a.zD)(o.X.APPLICATION_TEST_MODE, {
        useTitle: () => j.intl.string(j.t.erOqlh),
        useSubtitle: () => j.intl.string(j.t["52hMnD"]),
        usePredicate: v.Q_.useSetting,
        useValue: () => (0, m.bG)([C$.A], () => null != C$.A.testModeApplicationId),
        setValue: (e) => {
            e ? (0, ln.openModal)((e) => (0, c.jsx)(C0.A, { ...e })) : CJ.cL();
        },
    }),
    C2 = (0, a.zD)(o.X.DEVELOPER_MODE, {
        useTitle: () => j.intl.string(j.t.ObIb1Q),
        useSubtitle: () => j.intl.format(j.t["CY6q/Q"], { apiDocsUrl: A.X7G.API_DOCS }),
        useValue: v.Q_.useSetting,
        setValue: v.Q_.updateSetting,
        usePredicate: () => ul.p5,
    }),
    C3 = (0, a.zZ)(o.X.DEVELOPER_CATEGORY, { buildLayout: () => [C2, C1] }),
    C5 = (0, a.t_)(o.X.DEVELOPER_PANEL, { useTitle: () => j.intl.string(j.t["0BRxRp"]), buildLayout: () => [C3] }),
    C6 = (0, a.i4)(o.X.DEVELOPER_SIDEBAR_ITEM, {
        icon: CQ.G,
        useTitle: () => j.intl.string(j.t["0BRxRp"]),
        buildLayout: () => [C5],
    });
var C4 = n(70688),
    C8 = n(830215);
let C7 = (0, a.i4)(o.X.LOGOUT_SIDEBAR_ITEM, {
        variant: "destructive",
        useTitle: () => j.intl.string(j.t["2jxGer"]),
        icon: C4.o,
        onClick: () => {
            (0, nW.A)({
                title: j.intl.string(j.t["2jxGer"]),
                subtitle: j.intl.string(j.t.SUnWBB),
                confirmText: j.intl.string(j.t["2jxGer"]),
                onConfirm: () => {
                    C8.A.logout("settings");
                },
            });
        },
        buildLayout: () => [],
    }),
    C9 = (0, a.WI)(o.X.UTILITY_SECTION, {
        useTitle: () => j.intl.string(j.t["2kOEFe"]),
        hideTitle: !0,
        buildLayout: () => [C6, C7],
    }),
    be = (0, a.Hr)({ buildLayout: () => [pl, Cq, g3, aP, SP, Ax, C9], analyticsKey: "user_settings" });
