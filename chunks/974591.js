s.d(t, { default: () => tN });
var l = s(477900),
    a = s(582128),
    n = s(503698),
    i = s.n(n),
    r = s(613412),
    o = s(508425),
    d = s(559949),
    c = s(855986),
    u = s(52133),
    m = s(935462),
    f = s(534514),
    h = s(793574),
    g = s(688810),
    p = s(139286),
    N = s(919395),
    S = s(71393),
    E = s(287809),
    x = s(129230),
    A = s(871162),
    I = s(576254),
    v = s(750656),
    C = s(211824);
function y() {
    let { includeCampaignFonts: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = (0, I.Lz)(C.vB.DISPLAY_NAME_STYLE, "font-order"),
        s = e && t !== C.S9.HIDDEN;
    return a.useMemo(() => (s ? [...v.rA, ...v.fY] : v.rA), [s]);
}
var _ = s(501803),
    j = s(898985),
    D = s(430571),
    b = s(631670),
    T = s(620632),
    k = s(73153),
    L = s(626584),
    P = s(927813),
    M = s(773527);
let w = new L.A("HexagonActionCreators"),
    R = 5 * P.A.Millis.SECOND,
    O = null;
var F = s(207803),
    Y = s(84540),
    B = s(652215),
    G = s(836602),
    H = s(696451),
    U = s(427262),
    z = s(403581),
    K = s(646514),
    W = s(48736),
    J = s(317097),
    V = s(842671),
    X = s(792996);
function $(e, t) {
    return a.useMemo(
        () =>
            (t ?? (0, _.Fj)(e, null)).map((e, t) => {
                let { colors: s } = e;
                return {
                    colors: s,
                    a11yLabel: X.intl.formatToPlainString(V.default.FHfTsV, {
                        number: t + 1,
                        hexList: s.map(J.Hl).join(", "),
                    }),
                };
            }),
        [e, t],
    );
}
var q = s(116903),
    Q = s(837381),
    Z = s(741918),
    ee = s(265872),
    et = s(866665),
    es = s(939249),
    el = s(714385);
function ea(e) {
    let t,
        s,
        l,
        { selectedColors: n, hasCustomPalette: i, hasCustomSwatchSelected: r } = e,
        o = a.useId(),
        d = i
            ? ((t = Math.min(...n.map((e) => (0, J.bJ)(e, 0)))),
              {
                  useDarkIcon: (l = 3 > Math.max(t, (s = Math.min(...n.map((e) => (0, J.bJ)(e, 0xffffff)))))) || t >= s,
                  needsBacking: l,
              })
            : null;
    return {
        customColorDescriptionId: o,
        customColorDescription: r
            ? X.intl.formatToPlainString(X.t["7BFCRR"], { color: n.map(J.Hl).join(", ") })
            : void 0,
        iconContrast: d,
    };
}
var en = s(559106),
    ei = s(236630);
function er(e) {
    let { selected: t, onSelect: s, listItemId: a, "aria-label": n, fillStyle: r, children: o } = e,
        d = (0, Q.rm)(a);
    return (0, l.jsx)(en.vN, {
        offset: -2,
        children: (0, l.jsx)("button", {
            type: "button",
            className: i()(ei.nf, { [ei.wH]: t }),
            onClick: s,
            "aria-label": n,
            ...d,
            role: "option",
            "aria-selected": t,
            children: (0, l.jsx)("span", { className: ei.GS, style: r, children: o }),
        }),
    });
}
var eo = s(818168);
function ed(e) {
    let { colors: t, selected: s, onSelect: a, listItemId: n, "aria-label": i } = e;
    return (0, l.jsx)(er, {
        selected: s,
        onSelect: a,
        listItemId: n,
        "aria-label": i,
        children: t.map((e, t) => (0, l.jsx)("div", { className: eo._, style: { background: (0, J.Hl)(e) } }, t)),
    });
}
var ec = s(1986),
    eu = s(315710),
    em = s(650583),
    ef = s(607570);
let eh = [0, 60, 120, 180, 240, 300, 360];
function eg(e) {
    let { value: t, onChange: s, hueToColor: n, onConfirm: r, "aria-label": o, className: d } = e,
        c = (0, _.xo)((0, J.tf)(t).h),
        u = a.useRef(null);
    (0, eu.tj)(u);
    let m = a.useCallback((e) => s(n((0, _.xo)(e))), [s, n]),
        f = a.useCallback((e) => m(e.h), [m]),
        h = a.useMemo(() => `linear-gradient(to right, ${eh.map((e) => (0, J.Hl)(n(e))).join(", ")})`, [n]),
        g = a.useMemo(
            () =>
                function (e) {
                    let { hsl: t } = e;
                    return (0, l.jsx)("div", { className: ef.Wn, style: { background: (0, J.Hl)(n(t.h)) } });
                },
            [n],
        ),
        p = a.useCallback(
            (e) => {
                switch (e.key) {
                    case em.dh.ARROW_LEFT:
                    case em.dh.ARROW_DOWN:
                        m(c - 5);
                        break;
                    case em.dh.ARROW_RIGHT:
                    case em.dh.ARROW_UP:
                        m(c + 5);
                        break;
                    case em.dh.HOME:
                        m(0);
                        break;
                    case em.dh.END:
                        m(359);
                        break;
                    case em.dh.ENTER:
                    case em.dh.SPACE:
                        if (null == r) return;
                        r();
                        break;
                    default:
                        return;
                }
                e.preventDefault();
            },
            [c, m, r],
        );
    return (0, l.jsx)("div", {
        ref: u,
        className: i()(ef.kL, d),
        children: (0, l.jsx)("div", {
            className: ef.SP,
            style: { "--custom-hue-track": h },
            role: "slider",
            tabIndex: 0,
            "aria-label": o,
            "aria-valuemin": 0,
            "aria-valuemax": 360,
            "aria-valuenow": Math.round(c),
            onKeyDown: p,
            children: (0, l.jsx)(ec.RG, {
                hsl: { h: c, s: 1, l: 0.5 },
                direction: "horizontal",
                pointer: g,
                onChange: f,
            }),
        }),
    });
}
var ep = s(420080);
let eN = () => Promise.resolve();
function eS(e) {
    let { selectedColors: t, setSelectedColors: s, colorOptions: n, onCustomPalettePicked: r, className: d } = e,
        [c, m] = a.useState(!1),
        f = a.useRef(null),
        [h, g] = a.useState(B.TGz),
        p = a.useRef(null),
        N = a.useCallback(() => {
            (g(t.length > 0 ? (0, _.nO)(t) : B.TGz), m(!0));
        }, [t]),
        S = a.useCallback(
            (e) => {
                let t = (0, _.cf)(e);
                (g(e), (p.current = t), s(t, !0));
            },
            [s],
        ),
        E = a.useCallback(() => {
            let e = p.current;
            ((p.current = null), m(!1), null != e && r(e.slice()));
        }, [r]),
        x = $(o.z.GUMMY, n),
        A = x.findIndex((e) => {
            let { colors: s } = e;
            return (0, u.v)(s, t);
        }),
        I = t.length > 0 && !(A >= 0),
        v = I && !c,
        C = X.intl.string(X.t["FHBa/1"]),
        {
            customColorDescriptionId: y,
            customColorDescription: j,
            iconContrast: D,
        } = ea({ selectedColors: t, hasCustomPalette: I, hasCustomSwatchSelected: v }),
        b = (0, q.Ay)({
            id: "gummy-color-picker",
            isEnabled: !0,
            orientation: Z.Gl.HORIZONTAL,
            scrollToStart: eN,
            scrollToEnd: eN,
        });
    return (0, l.jsx)(Q.hD, {
        navigator: b,
        children: (0, l.jsx)(Q.PR, {
            children: (e) => {
                let { ref: a, ...n } = e;
                return (0, l.jsxs)("div", {
                    className: i()(ep.kL, d),
                    ref: a,
                    ...n,
                    role: "listbox",
                    "aria-label": X.intl.string(X.t.WTqQ5e),
                    children: [
                        (0, l.jsxs)("div", {
                            className: i()(ei.nf, ep.Ix, { [ei.wH]: v }),
                            children: [
                                (0, l.jsx)("div", {
                                    className: i()(ep.yB, { [ep.EI]: !I }),
                                    children:
                                        I &&
                                        t.map((e, t) =>
                                            (0, l.jsx)(
                                                "div",
                                                { className: ep._4, style: { background: (0, J.Hl)(e) } },
                                                t,
                                            ),
                                        ),
                                }),
                                (0, l.jsx)("div", {
                                    className: ep.fX,
                                    children: (0, l.jsx)(ee.Y, {
                                        targetElementRef: f,
                                        position: "top",
                                        align: "left",
                                        shouldShow: c,
                                        onRequestOpen: N,
                                        onRequestClose: E,
                                        renderPopout: () =>
                                            (0, l.jsx)(eg, {
                                                value: h,
                                                onChange: S,
                                                hueToColor: _.UZ,
                                                onConfirm: E,
                                                "aria-label": C,
                                            }),
                                        children: (e) =>
                                            (0, l.jsx)(et.m, {
                                                text: C,
                                                position: "top",
                                                ariaHidden: !0,
                                                children: (0, l.jsx)("div", {
                                                    ...e,
                                                    ref: f,
                                                    className: ep.r9,
                                                    children: (0, l.jsx)(Q.tG, {
                                                        id: "custom",
                                                        children: (e) =>
                                                            (0, l.jsx)(es.D, {
                                                                ...e,
                                                                className: ep.Vz,
                                                                "aria-label": C,
                                                                "aria-describedby": null != j ? y : void 0,
                                                                role: "option",
                                                                "aria-selected": v,
                                                                children: (0, l.jsx)(el.EyeDropperIcon, {
                                                                    size: "custom",
                                                                    width: 14,
                                                                    height: 14,
                                                                    color: "currentColor",
                                                                    className: i()(ep.IZ, {
                                                                        [ei.eQ]: D?.useDarkIcon === !0,
                                                                        [ei.mT]: D?.useDarkIcon === !1,
                                                                        [ep.N]: D?.needsBacking,
                                                                    }),
                                                                }),
                                                            }),
                                                    }),
                                                }),
                                            }),
                                    }),
                                }),
                                null != j && (0, l.jsx)("span", { id: y, hidden: !0, children: j }),
                            ],
                        }),
                        x.map((e, t) => {
                            let { colors: a, a11yLabel: n } = e;
                            return (0, l.jsx)(
                                ed,
                                {
                                    listItemId: `gummy-preset-${t}`,
                                    colors: a,
                                    selected: A === t,
                                    onSelect: () => s([...a]),
                                    "aria-label": n,
                                },
                                t,
                            );
                        }),
                    ],
                });
            },
        }),
    });
}
var eE = s(508274),
    ex = s(300158);
let eA = () => Promise.resolve(),
    eI = a.memo(function (e) {
        let { color: t, isSelected: s, onSelect: n, listItemId: i, "aria-label": r } = e,
            o = a.useCallback(() => n(t), [n, t]);
        return (0, l.jsx)(er, {
            selected: s,
            onSelect: o,
            listItemId: i,
            "aria-label": r,
            fillStyle: { backgroundColor: (0, J.Hl)(t) },
        });
    });
function ev(e) {
    let { value: t, isCustomColor: s, onChange: n, onCustomColorPicked: r } = e,
        [o, d] = a.useState(!1),
        c = s && !o,
        u = a.useRef(null),
        m = a.useRef(null),
        f = X.intl.string(X.t["FHBa/1"]),
        {
            customColorDescriptionId: h,
            customColorDescription: g,
            iconContrast: p,
        } = ea({ selectedColors: null != t ? [t] : [], hasCustomPalette: s, hasCustomSwatchSelected: c }),
        N = a.useCallback(
            (e) => {
                ((m.current = e), n(e));
            },
            [n],
        ),
        S = a.useCallback(() => {
            let e = m.current;
            ((m.current = null), d(!1), null != e && r(e));
        }, [r]);
    return (0, l.jsx)(ee.Y, {
        targetElementRef: u,
        position: "top",
        align: "left",
        shouldShow: o,
        onRequestOpen: () => d(!0),
        onRequestClose: S,
        renderPopout: () => (0, l.jsx)(eE.VN, { onChange: N, value: t, eagerUpdate: !0 }),
        children: (e) =>
            (0, l.jsx)(et.m, {
                text: f,
                position: "top",
                ariaHidden: !0,
                children: (0, l.jsxs)("div", {
                    ...e,
                    ref: u,
                    className: i()(ei.nf, ex.OF, { [ei.wH]: c }),
                    style: s && null != t ? { backgroundColor: (0, J.Hl)(t) } : void 0,
                    children: [
                        (0, l.jsx)(Q.tG, {
                            id: "custom",
                            children: (e) =>
                                (0, l.jsx)(es.D, {
                                    ...e,
                                    className: ex.Kd,
                                    "aria-label": f,
                                    "aria-describedby": null != g ? h : void 0,
                                    role: "option",
                                    "aria-selected": c,
                                    children: (0, l.jsx)(el.EyeDropperIcon, {
                                        className: i()(ex.EY, {
                                            [ei.eQ]: p?.useDarkIcon === !0,
                                            [ei.mT]: p?.useDarkIcon === !1,
                                        }),
                                        size: "custom",
                                        width: 14,
                                        height: 14,
                                        color: "currentColor",
                                    }),
                                }),
                        }),
                        null != g && (0, l.jsx)("span", { id: h, hidden: !0, children: g }),
                    ],
                }),
            }),
    });
}
function eC(e) {
    let {
            selectedColor: t,
            setSelectedColor: s,
            colorOptions: n,
            onCustomColorPicked: r,
            defaultColor: o,
            selectedEffectId: d,
            className: c,
        } = e,
        u = $(d, n),
        m = a.useCallback((e) => s(e), [s]),
        f = a.useCallback((e) => s(e, !0), [s]),
        h =
            null != t &&
            t !== o &&
            !u.some((e) => {
                let { colors: s } = e;
                return s[0] === t;
            });
    function g(e) {
        let { colors: s, a11yLabel: a } = e;
        return (0, l.jsx)(
            eI,
            { color: s[0], isSelected: s[0] === t, onSelect: m, listItemId: `preset-${s[0]}`, "aria-label": a },
            s[0],
        );
    }
    let p = (0, q.Ay)({
        id: "display-name-styles-solid-color-picker",
        isEnabled: !0,
        orientation: Z.Gl.HORIZONTAL,
        scrollToStart: eA,
        scrollToEnd: eA,
    });
    return (0, l.jsx)(Q.hD, {
        navigator: p,
        children: (0, l.jsx)(Q.PR, {
            children: (e) => {
                let { ref: s, ...a } = e;
                return (0, l.jsxs)("div", {
                    className: i()(ex.kL, c),
                    ref: s,
                    ...a,
                    role: "listbox",
                    "aria-label": X.intl.string(V.default.JOpi7z),
                    children: [
                        (0, l.jsx)(ev, { value: t, isCustomColor: h, onChange: f, onCustomColorPicked: r }),
                        (0, l.jsx)(eI, {
                            color: o,
                            isSelected: t === o,
                            onSelect: m,
                            listItemId: "default",
                            "aria-label": X.intl.string(X.t.bBvAEH),
                        }),
                        u.map(g),
                    ],
                });
            },
        }),
    });
}
var ey = s(143660),
    e_ = s(454137);
function ej(e) {
    var t;
    let s,
        { selectedColors: n, setSelectedColors: r, defaultColor: d, selectedEffectId: c, className: m } = e,
        h = (0, _.as)(c),
        g = (0, a.useMemo)(() => (0, v.ii)(c).map((e) => ({ colors: e, isCustom: !1 })), [c]),
        p =
            ((t = $(c, g)),
            a.useMemo(
                () =>
                    t.map((e) => {
                        let { colors: t, a11yLabel: s } = e;
                        return { colors: t, name: s };
                    }),
                [t],
            )),
        N =
            ((s = a.useRef(null)),
            a.useCallback(
                (e) => {
                    (null != s.current && (0, u.v)(s.current, e)) ||
                        ((s.current = e.slice()),
                        x.default.track(B.HAw.DISPLAY_NAME_STYLES_COLOR_SELECTED, {
                            default: 1 === e.length && e[0] === d,
                            colors: e,
                        }));
                },
                [d],
            )),
        S = (0, a.useCallback)(
            (e, t) => {
                (r([e]), !0 !== t && N([e]));
            },
            [r, N],
        ),
        E = (0, a.useCallback)(
            (e, t) => {
                (r(e), !0 !== t && N(e));
            },
            [r, N],
        ),
        A = (0, a.useCallback)(
            (e) => {
                N([e]);
            },
            [N],
        );
    return (0, l.jsxs)("div", {
        className: i()(ey.EE, m),
        children: [
            (0, l.jsxs)(f.D, {
                variant: "heading-sm/semibold",
                className: e_.sU,
                children: [
                    X.intl.string(V.default.JOpi7z),
                    (0, l.jsx)(z.NitroWheelIcon, { size: "xs", color: K.A.colors.TEXT_DEFAULT }),
                ],
            }),
            c === o.z.GUMMY
                ? (0, l.jsx)(eS, { selectedColors: n, setSelectedColors: E, colorOptions: g, onCustomPalettePicked: N })
                : h > 1
                  ? (0, l.jsx)(W.default, {
                        className: ey.kM,
                        gradientButtonClassName: ey.dy,
                        gradientSwatchClassName: ey.u_,
                        gradientPickerVariant: W.GradientPickerVariants.SQUARE,
                        shouldRenderSingleRow: !0,
                        swatchClassName: ey.Ay,
                        defaultColor: d,
                        colors: p,
                        value: n[0],
                        gradientColors: n,
                        onChange: S,
                        onChangeGradientColors: E,
                        isGradient: !0,
                        gradientWidth: c === o.z.PRISM ? "231px" : "calc(3 * var(--space-40) + 2 * var(--space-8))",
                        gradientDegrees: 90,
                        allowBlackCustomColor: !0,
                        customPickerPosition: "top",
                        onCustomPalettePicked: N,
                    })
                  : (0, l.jsx)(eC, {
                        className: ey.Ei,
                        selectedColor: n[0],
                        setSelectedColor: S,
                        colorOptions: g,
                        onCustomColorPicked: A,
                        defaultColor: d,
                        selectedEffectId: c,
                    }),
        ],
    });
}
let eD = { seenFontIds: new Set(), seenEffectIds: new Set(), newFontsBadgeDismissed: !1, newEffectsBadgeDismissed: !1 };
class eb extends c.Ay.PersistedStore {
    static displayName = "DisplayNameStylesSeenStore";
    static persistKey = "DisplayNameStylesSeenStore";
    static migrations = [(e) => ({ ...e, newFontsBadgeDismissed: !1, newEffectsBadgeDismissed: !1 })];
    initialize(e) {
        eD = {
            seenFontIds: new Set(e?.seenFontIds ?? []),
            seenEffectIds: new Set(e?.seenEffectIds ?? []),
            newFontsBadgeDismissed: e?.newFontsBadgeDismissed ?? !1,
            newEffectsBadgeDismissed: e?.newEffectsBadgeDismissed ?? !1,
        };
    }
    getState() {
        return {
            seenFontIds: Array.from(eD.seenFontIds),
            seenEffectIds: Array.from(eD.seenEffectIds),
            newFontsBadgeDismissed: eD.newFontsBadgeDismissed,
            newEffectsBadgeDismissed: eD.newEffectsBadgeDismissed,
        };
    }
    getSeenFonts() {
        return eD.seenFontIds;
    }
    getSeenEffects() {
        return eD.seenEffectIds;
    }
    getNewFontsBadgeDismissed() {
        return eD.newFontsBadgeDismissed;
    }
    getNewEffectsBadgeDismissed() {
        return eD.newEffectsBadgeDismissed;
    }
}
let eT = new eb(k.h, {
    DISPLAY_NAME_STYLES_MARK_FONT_SEEN: function (e) {
        let { fontId: t } = e;
        if (eD.seenFontIds.has(t)) return !1;
        eD = { ...eD, seenFontIds: new Set([...eD.seenFontIds, t]) };
    },
    DISPLAY_NAME_STYLES_MARK_EFFECT_SEEN: function (e) {
        let { effectId: t } = e;
        if (eD.seenEffectIds.has(t)) return !1;
        eD = { ...eD, seenEffectIds: new Set([...eD.seenEffectIds, t]) };
    },
    DISPLAY_NAME_STYLES_MARK_NEW_FONTS_BADGE_DISMISSED: function () {
        if (eD.newFontsBadgeDismissed) return !1;
        eD = { ...eD, newFontsBadgeDismissed: !0 };
    },
    DISPLAY_NAME_STYLES_MARK_NEW_EFFECTS_BADGE_DISMISSED: function () {
        if (eD.newEffectsBadgeDismissed) return !1;
        eD = { ...eD, newEffectsBadgeDismissed: !0 };
    },
});
var ek = s(922301),
    eL = s(16371),
    eP = s(742191);
function eM(e) {
    let { effectId: t, selected: s, showNewDot: a, onClick: n } = e,
        r = (0, j._)(t);
    return (0, l.jsxs)(es.D, {
        className: i()(eP.Tw, eP.uT, { [eP.wH]: s }),
        onClick: n,
        children: [
            (0, l.jsx)(eL.A, {
                userName: r.name,
                effectDisplayType: ek.G.ANIMATED,
                displayNameStyles: r.previewStyles,
                textClassName: eP.tr,
                loop: !0,
                inProfile: !0,
            }),
            a && (0, l.jsx)("div", { className: e_.s1, "aria-hidden": !0 }),
        ],
    });
}
let ew = a.memo(function (e) {
    var t;
    let s,
        { selectedEffectId: n, setSelectedEffectId: r, className: o } = e,
        { dotEffectIds: d, dismissEffectDot: u } =
            ((t = v.re),
            (s = (0, c.bG)([eT], () => eT.getSeenEffects())),
            {
                dotEffectIds: a.useMemo(() => new Set(t.filter((e) => v.gz.includes(e) && !s.has(e))), [t, s]),
                dismissEffectDot: a.useCallback((e) => {
                    k.h.dispatch({ type: "DISPLAY_NAME_STYLES_MARK_EFFECT_SEEN", effectId: e });
                }, []),
            }),
        m = Math.ceil(v.re.length / 2);
    return (0, l.jsxs)("div", {
        className: o,
        children: [
            (0, l.jsxs)(f.D, {
                variant: "heading-sm/semibold",
                className: e_.sU,
                children: [
                    X.intl.string(V.default["1wilM1"]),
                    (0, l.jsx)(z.NitroWheelIcon, { size: "xs", color: K.A.colors.TEXT_DEFAULT }),
                ],
            }),
            (0, l.jsx)("div", {
                className: i()(e_.fh, eP.KS),
                style: { "--custom-dns-tile-columns": m },
                children: v.re.map((e) => {
                    let t = d.has(e);
                    return (0, l.jsx)(
                        eM,
                        {
                            effectId: e,
                            selected: e === n,
                            showNewDot: t,
                            onClick: () => {
                                (r(e), t && u(e));
                            },
                        },
                        e,
                    );
                }),
            }),
        ],
    });
});
var eR = s(834730),
    eO = s(885574),
    eF = s(73392),
    eY = s(599715);
let eB = a.memo(function (e) {
    let t,
        { selectedFontId: s, setSelectedFontId: n, displayName: r, className: o } = e,
        u = y(),
        { dotFontIds: m, dismissFontDot: h } =
            ((t = (0, c.bG)([eT], () => eT.getSeenFonts())),
            {
                dotFontIds: a.useMemo(() => new Set(u.filter((e) => v._k.includes(e) && !t.has(e))), [u, t]),
                dismissFontDot: a.useCallback((e) => {
                    k.h.dispatch({ type: "DISPLAY_NAME_STYLES_MARK_FONT_SEEN", fontId: e });
                }, []),
            }),
        g = s !== d.x.DEFAULT,
        p = (0, _.Xr)(r),
        N = Math.ceil(u.length / 3);
    return (0, l.jsxs)("div", {
        className: o,
        children: [
            (0, l.jsxs)(f.D, {
                variant: "heading-sm/semibold",
                className: e_.sU,
                children: [
                    X.intl.string(V.default.nP0ngb),
                    (0, l.jsx)(z.NitroWheelIcon, { size: "xs", color: K.A.colors.TEXT_DEFAULT }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: i()(e_.fh, eY.qW),
                style: { "--custom-dns-tile-columns": N },
                children: [
                    u.map((e) => {
                        let t = (0, eF.p)(e),
                            a = e === s,
                            r = m.has(e),
                            o = X.intl.string(t.name);
                        return (0, l.jsx)(
                            et.m,
                            {
                                text: o,
                                asContainer: !0,
                                children: (0, l.jsxs)(es.D, {
                                    className: i()(eY.SO, eY.j4, { [eY.wH]: a }),
                                    onClick: () => {
                                        (n(e), r && h(e));
                                    },
                                    "aria-label": o,
                                    children: [
                                        (0, l.jsx)(eR.E, {
                                            variant: "body-lg/semibold",
                                            color: a ? "text-strong" : "text-default",
                                            className: i()(eY.FH, t.className),
                                            children: "Gg",
                                        }),
                                        r && (0, l.jsx)("div", { className: e_.s1, "aria-hidden": !0 }),
                                    ],
                                }),
                            },
                            e,
                        );
                    }),
                    g &&
                        p &&
                        (0, l.jsxs)("div", {
                            className: eY.Lb,
                            children: [
                                (0, l.jsx)(eO.CircleInformationIcon, { size: "lg" }),
                                (0, l.jsx)(eR.E, {
                                    variant: "body-sm/normal",
                                    color: "text-subtle",
                                    children: X.intl.string(V.default["+O1xL2"]),
                                }),
                            ],
                        }),
                ],
            }),
        ],
    });
});
var eG = s(821609),
    eH = s(90302),
    eU = s(87719),
    ez = s(465794),
    eK = s(757036),
    eW = s(682901),
    eJ = s(7212);
function eV(e) {
    let {
            onApply: t,
            onSurpriseMe: s,
            onClose: n,
            canApply: i,
            entryPoint: r,
            isPremiumTryItOut: o = !1,
            banner: d,
        } = e,
        c = (0, eK.L)(eW.PremiumTypes.TIER_2),
        u = a.useCallback(() => {
            x.default.track(B.HAw.DISPLAY_NAME_STYLES_NITRO_CLICKED, { cta: v.vY.BUTTON, entry_point: r });
        }, [r]),
        f = a.useCallback(() => {
            (x.default.track(B.HAw.DISPLAY_NAME_STYLES_NITRO_CLICKED, { cta: v.vY.LINK, entry_point: r }),
                (0, eU.x)(n));
        }, [r, n]),
        h = (0, l.jsx)(eG.$, {
            variant: "secondary",
            size: "md",
            onClick: s,
            icon: { type: "rive", asset: eH.m, riveProps: { dataBinding: { fill: K.A.colors.ICON_STRONG } } },
            text: X.intl.string(V.default.NOGFds),
        }),
        g = (0, l.jsxs)("div", {
            className: eJ.k0,
            children: [
                h,
                (0, l.jsx)(et.m, {
                    text: X.intl.string(V.default.cVTpnj),
                    shouldShow: !i,
                    children: (0, l.jsx)(eG.$, {
                        onClick: t,
                        disabled: !i,
                        text: X.intl.string(X.t["1Qm822"]),
                        variant: "primary",
                        size: "md",
                        fullWidth: !0,
                    }),
                }),
            ],
        }),
        p = null != d ? (0, l.jsxs)("div", { className: eJ.f4, children: [d, g] }) : g,
        N = (0, l.jsxs)("div", {
            className: eJ.UD,
            children: [
                h,
                (0, l.jsx)(ez.A, {
                    premiumModalAnalyticsLocation: {
                        section: B.JJy.DISPLAY_NAME_STYLES_MODAL_FOOTER,
                        object: B.ZSU.PREMIUM_UPSELL_BUTTON,
                    },
                    subscriptionTier: eW.pe.TIER_2,
                    onClick: u,
                }),
            ],
        }),
        S = (0, l.jsxs)("div", {
            className: eJ.UX,
            children: [
                (0, l.jsxs)("div", {
                    className: eJ.iQ,
                    children: [
                        (0, l.jsx)(et.m, {
                            text: X.intl.string(X.t["5AFxuK"]),
                            children: (0, l.jsx)(z.NitroWheelIcon, { size: "md", color: K.A.colors.ICON_STRONG }),
                        }),
                        (0, l.jsx)(eR.E, {
                            variant: "body-md/medium",
                            color: "text-default",
                            className: eJ.h_,
                            children: X.intl.format(V.default.PWf0xS, { onClickNitro: f }),
                        }),
                    ],
                }),
                N,
            ],
        }),
        E = (0, l.jsxs)("div", { className: eJ.UX, children: [d, N] }),
        A = null != d ? E : S;
    return (0, l.jsx)(m.jl, { "data-migration-pending": !0, className: eJ.qr, children: o || c ? p : A });
}
var eX = s(366010),
    e$ = s(43990),
    eq = s(629584),
    eQ = s(943255),
    eZ = s(575181),
    e0 = s(736653),
    e1 = s(780898),
    e8 = s(872200),
    e5 = s(432005),
    e2 = s(963852),
    e3 = s(763754),
    e6 = s(20851),
    e7 = s(641318),
    e9 = s(101058),
    e4 = s(527212),
    te = s(686189),
    tt = s(946356),
    ts = s(975571),
    tl = s(996988),
    ta = s(228839);
function tn(e) {
    let {
            user: t,
            guild: s,
            displayName: n,
            selectedFontId: r,
            selectedEffectId: o,
            selectedColors: d,
            isPremiumTryItOut: u = !1,
        } = e,
        m = (0, e0.Ay)(),
        f = (0, eX.M)(m),
        [h, g] = (0, a.useState)(f),
        p = (0, e4.Ay)(t.id, null),
        { pendingChanges: S, tryItOutChanges: E } = (0, c.cf)([G.A], () => ({
            pendingChanges: G.A.getPendingChanges(s?.id),
            tryItOutChanges: G.A.getTryItOutChanges(),
        })),
        {
            pendingAvatar: A,
            pendingAvatarDecoration: I,
            pendingPrimaryGuildId: v,
            pendingBanner: C,
            pendingThemeColors: y,
            pendingNickname: _,
            pendingPronouns: j,
            pendingProfileEffect: D,
            pendingProfileFrame: b,
            pendingAccentColor: T,
            pendingBio: k,
            pendingLegacyUsernameDisabled: L,
        } = S,
        P = null == s ? n : void 0,
        M = u ? E.tryItOutAvatar : A,
        w = (0, e9.V7)({ userId: t.id, image: M }),
        R = u ? void 0 : I,
        O = u ? E.tryItOutBanner : C,
        F = u ? E.tryItOutThemeColors : y,
        { bannerSrc: Y } = (0, te.A)({ displayProfile: p, size: 413, canAnimate: !1, pendingBanner: O }),
        { userNameplate: H, guildNameplate: U, pendingNameplate: z } = (0, N.rv)(t, s?.id),
        K = (0, e1.WK)(U);
    h && !f ? (m = B.NJ8.DARK) : !h && f && (m = B.NJ8.LIGHT);
    let W = (0, a.useCallback)((e) => {
            (g(e === B.NJ8.DARK), x.default.track(B.HAw.DISPLAY_NAME_STYLES_THEME_TOGGLE, { dark: e === B.NJ8.DARK }));
        }, []),
        J = (0, a.useMemo)(
            () => ({ ...(0, e3.FT)(t, null), nick: n, displayNameStyles: { fontId: r, effectId: o, colors: d } }),
            [t, r, o, d, n],
        );
    return (0, l.jsxs)("div", {
        className: ta._l,
        children: [
            null != Y &&
                (0, l.jsx)(tt.A, {
                    user: t,
                    displayProfile: p,
                    themeType: tl.d.MODAL_V2,
                    className: ta.LX,
                    pendingThemeColors: F,
                    forceUserTheme: !0,
                    children: (0, l.jsx)("div", { className: ta.b8, style: { backgroundImage: `url(${Y})` } }),
                }),
            (0, l.jsx)(e$.N, {
                theme: m,
                children: (e) =>
                    (0, l.jsxs)("div", {
                        className: i()(ta.cq, e),
                        inert: !0,
                        children: [
                            (0, l.jsx)(e7.A, {
                                user: t,
                                guild: s,
                                pendingGlobalName: P,
                                pendingNickname: _,
                                pendingPronouns: j,
                                pendingAvatar: w,
                                pendingAvatarDecoration: R,
                                pendingPrimaryGuildId: v,
                                pendingBanner: O,
                                pendingThemeColors: F,
                                pendingAccentColor: T,
                                pendingBio: k,
                                pendingProfileEffect: D,
                                pendingProfileFrame: b,
                                pendingLegacyUsernameDisabled: L,
                                pendingDisplayNameStyles: J.displayNameStyles,
                                canUsePremiumCustomization: !0,
                                disabledInputs: !0,
                                hideCustomStatus: !0,
                                hideBioSection: !0,
                                containerClassName: ta.ME,
                                interactive: !1,
                                hideExampleButton: !0,
                                hideProfileFrame: !0,
                            }),
                            (0, l.jsx)(e6.A, {
                                author: J,
                                message: (0, e5.rh)({
                                    ...(0, e2.Ay)({ channelId: "1337", content: X.intl.string(V.default.h5Cuej) }),
                                    state: B.cmJ.SENT,
                                    id: "0",
                                }),
                                isGroupStart: !0,
                                hideSimpleEmbedContent: !0,
                                hideGuildTag: !0,
                                className: ta.OT,
                                previewGuildId: s?.id,
                                avatarDecorationOverride: R,
                                avatarOverride: w,
                            }),
                            (0, l.jsx)(e8.A, {
                                user: t,
                                guildId: s?.id,
                                nameplate: z,
                                nameplateData: null == z ? (K ?? H) : void 0,
                                pendingGlobalName: P,
                                pendingNickname: _,
                                pendingAvatarDecoration: R,
                                pendingPrimaryGuildId: v,
                                pendingDisplayNameStyles: J.displayNameStyles,
                                pendingAvatar: M,
                                isHighlighted: !0,
                                className: ta.qF,
                            }),
                        ],
                    }),
            }),
            (0, l.jsxs)("div", {
                className: ta.dI,
                children: [
                    (0, l.jsx)(eR.E, {
                        variant: "body-xs/normal",
                        color: "text-muted",
                        children: X.intl.format(V.default.prQba8, {
                            helpArticleLink: ts.A.getArticleURL(B.MVz.DISPLAY_NAME_STYLES),
                        }),
                    }),
                    (0, l.jsx)(ti, { darkPreview: h, onToggleTheme: W }),
                ],
            }),
        ],
    });
}
function ti(e) {
    let { darkPreview: t, onToggleTheme: s } = e,
        a = t ? B.NJ8.DARK : B.NJ8.LIGHT;
    return (0, l.jsx)(eq.I, {
        className: ta.xr,
        optionClassName: ta.$C,
        options: [
            {
                name: "",
                tooltip: X.intl.string(X.t.b8Cei3),
                value: B.NJ8.DARK,
                icon: eQ.ThemeDarkIcon,
                className: a === B.NJ8.DARK ? ta.iB : void 0,
            },
            {
                name: "",
                tooltip: X.intl.string(X.t.K2sFfo),
                value: B.NJ8.LIGHT,
                icon: eZ.ThemeLightIcon,
                className: a === B.NJ8.LIGHT ? ta.iB : void 0,
            },
        ],
        value: a,
        onChange: (e) => {
            let { value: t } = e;
            return s(t);
        },
        look: "pill",
    });
}
var tr = s(97808),
    to = s(778712),
    td = s(913563),
    tc = s(497082);
function tu(e) {
    let { owner: t, displayNameStyles: s } = e,
        a = X.intl.string((0, td.A)(s.fontId)),
        { name: n } = (0, j._)(s.effectId),
        i = t.globalName ?? t.username;
    return (0, l.jsxs)("div", {
        className: tc.v,
        children: [
            (0, l.jsx)(tr.eu, { size: to._3.SIZE_32, src: t.getAvatarURL(void 0, 32), "aria-hidden": !0 }),
            (0, l.jsxs)("div", {
                className: tc.C,
                children: [
                    (0, l.jsx)(eR.E, {
                        variant: "body-md/medium",
                        color: "text-default",
                        children: X.intl.format(V.default.gYzaCr, {
                            displayNameHook: () =>
                                (0, l.jsx)(eL.A, {
                                    userName: i,
                                    displayNameStyles: s,
                                    effectDisplayType: ek.G.ANIMATED,
                                    loop: !0,
                                }),
                        }),
                    }),
                    (0, l.jsx)(eR.E, {
                        variant: "body-xs/normal",
                        color: "text-subtle",
                        children: X.intl.format(V.default.DC7gJB, { fontName: a, effectName: n }),
                    }),
                ],
            }),
        ],
    });
}
var tm = s(858899),
    tf = s(765178);
function th() {
    let e = X.intl.string(X.t.iufib1);
    ((0, tm.P0)({ text: e, variant: "critical" }), tf.O.announce(e));
}
var tg = s(226451);
let tp = { overrideSettings: !0 };
function tN(e) {
    let t,
        {
            transitionState: s,
            analyticsLocations: n,
            guildId: I,
            isPremiumTryItOut: L = !1,
            onClose: P,
            returnRef: z,
            tryOnDisplayNameStyles: K,
            tryOnStyleOwner: W,
        } = e,
        J = (0, c.bG)([E.default], () => E.default.getCurrentUser()),
        $ =
            ((t = U.Ay.useName(J)),
            (0, c.bG)(
                [G.A, H.Ay],
                () => {
                    let e = G.A.getPendingChanges(I);
                    if (null == I) return e.pendingGlobalName;
                    let { pendingNickname: t } = e;
                    return "" === t ? null : (t ?? H.Ay.getNick(I, J?.id));
                },
                [I, J],
            ) ??
                t ??
                ""),
        q = (0, c.bG)([S.A], () => S.A.getGuild(I)),
        {
            userDisplayNameStyles: Q,
            guildDisplayNameStyles: Z,
            pendingDisplayNameStyles: ee,
            tryItOutDisplayNameStyles: et,
        } = (0, N.B0)(J, I),
        es = L ? et : ee,
        el = void 0 !== es ? es : (Z ?? Q),
        ea = (0, D.A)(),
        en = a.useMemo(() => (0, _.A5)(K, ea), [K, ea]),
        ei = null != en,
        er = en ?? el,
        eo = ei ? "try_this_style" : "profile_editor",
        ed = a.useMemo(() => (0, _.A5)(Q, ea), [Q, ea]),
        [ec, eu] = a.useState(er?.fontId ?? d.x.DEFAULT),
        [em, ef] = a.useState(er?.effectId ?? o.z.SOLID),
        eh = (0, _.as)(em) > 1,
        eg = (0, j._)(em),
        ep = er?.colors ?? [],
        eN = ep.length > 0 && !eh,
        eS = ep.length > 0 && eh,
        [eE, ex] = a.useState(() => (eN ? { [em]: ep[0] } : {})),
        [eA, eI] = a.useState(() => (eS ? { [em]: ep } : {})),
        ev = a.useMemo(() => eA[em] ?? ea[em], [eA, em, ea]),
        eC = eE[em] ?? ea[em][0];
    (0, p.A)(
        {
            type: r.ImpressionTypes.POPOUT,
            name: r.ImpressionNames.DISPLAY_NAME_STYLES_MODAL,
            properties: { entry_point: eo },
        },
        { trackOnInitialLoad: !0 },
    );
    let { analyticsLocations: ey } = (0, g.Ay)(n, h.A.EDIT_DISPLAY_NAME_STYLES_MODAL),
        e_ = a.useMemo(() => (eh ? ev : [eC]), [eh, ev, eC]),
        eD = a.useMemo(() => ({ fontId: ec, effectId: em, colors: e_ }), [ec, em, e_]),
        eb = a.useMemo(
            () => ec !== el?.fontId || em !== el?.effectId || !(0, u.v)(e_, el?.colors ?? []),
            [ec, em, e_, el],
        ),
        eT = a.useMemo(() => !(0, _.kv)(eD, ed), [eD, ed]),
        ek = ei ? eT : eb,
        eL = ei && (0, _.kv)(eD, en) && null != W && null != en,
        eP = y(),
        { handleApply: eM } = (function (e) {
            let {
                    hasChanges: t,
                    entryPoint: s,
                    selectedFontId: l,
                    selectedEffectId: n,
                    selectedColors: i,
                    defaultColor: r,
                    guildId: c,
                    isTryItOut: u,
                    onClose: m,
                    onEnrollmentError: f,
                    shouldSaveWithoutPendingChanges: h = !1,
                    onSaveError: g,
                } = e,
                p = a.useRef(!1),
                [N, S] = a.useState(!1);
            return {
                handleApply: a.useCallback(async () => {
                    if (!(t || h) || p.current) return;
                    let e = (0, _.eT)({ fontId: l, effectId: n, colors: i }, r),
                        a = !0 !== u && e.fontId === C.vl;
                    async function N() {
                        var t;
                        if (
                            (a &&
                                (function () {
                                    let e = E.default.getCurrentUser()?.displayNameStyles ?? null;
                                    !(0, M.Jy)(e) &&
                                        k.h.dispatch({
                                            type: "HEXAGON_CAMPAIGN_PREVIOUS_PERK_VALUES_SAVED",
                                            previousPerkValues: { displayNameStyles: e },
                                        });
                                })(),
                            h)
                        ) {
                            p.current = !0;
                            try {
                                let t = await (0, b._L)({ displayNameStyles: e });
                                if (t?.ok !== !0) return void g?.();
                            } catch {
                                g?.();
                                return;
                            } finally {
                                p.current = !1;
                            }
                        } else u ? (0, F.EW)(e) : (0, Y.p)({ guildId: c, displayNameStyles: e });
                        (x.default.track(B.HAw.DISPLAY_NAME_STYLES_APPLIED, {
                            font_name: d.x[l],
                            effect_name: o.z[n],
                            colors: i,
                            entry_point: s,
                        }),
                            a &&
                                ((t = C.vB.DISPLAY_NAME_STYLE),
                                k.h.dispatch({ type: "HEXAGON_CAMPAIGN_PERK_APPLIED", perk: t })),
                            m?.());
                    }
                    if (!a || (0, M.Rd)(E.default.getCurrentUser(), C.vB.DISPLAY_NAME_STYLE)) return void (await N());
                    ((p.current = !0), S(!0));
                    let A = !1;
                    try {
                        var I;
                        A = await ((I = C.vB.DISPLAY_NAME_STYLE),
                        (0, M.Rd)(E.default.getCurrentUser(), I)
                            ? Promise.resolve(!0)
                            : (null == O &&
                                  (O = (async function (e) {
                                      try {
                                          return await (async function (e) {
                                              try {
                                                  await (async function () {
                                                      await T.Bo.post({ url: C.tK, rejectWithError: !0 });
                                                  })();
                                              } catch (e) {
                                                  return (w.warn(`Failed to enroll in the Hexagon campaign: ${e}`), !1);
                                              }
                                              return (
                                                  (await (function (e) {
                                                      function t() {
                                                          return (0, M.Rd)(E.default.getCurrentUser(), e);
                                                      }
                                                      return t()
                                                          ? Promise.resolve(!0)
                                                          : new Promise((e) => {
                                                                function s() {
                                                                    t() &&
                                                                        (clearTimeout(l),
                                                                        E.default.removeChangeListener(s),
                                                                        e(!0));
                                                                }
                                                                let l = setTimeout(() => {
                                                                    (E.default.removeChangeListener(s), e(!1));
                                                                }, R);
                                                                E.default.addChangeListener(s);
                                                            });
                                                  })(e)) ||
                                                      w.warn(
                                                          `Timed out waiting for the Hexagon campaign ${e} perk to sync`,
                                                      ),
                                                  !0
                                              );
                                          })(e);
                                      } finally {
                                          O = null;
                                      }
                                  })(I)),
                              O));
                    } catch {
                        A = !1;
                    }
                    ((p.current = !1), S(!1), A) ? await N() : f?.();
                }, [t, s, l, n, i, r, m, f, c, u, h, g]),
                isApplying: N,
            };
        })({
            hasChanges: ek,
            entryPoint: eo,
            selectedFontId: ec,
            selectedEffectId: em,
            selectedColors: e_,
            defaultColor: eg.defaultColors[0],
            guildId: I,
            isTryItOut: L,
            onClose: P,
            shouldSaveWithoutPendingChanges: ei,
            onSaveError: th,
        }),
        eR = a.useCallback(() => (ek ? eM() : void P()), [ek, eM, P]),
        eO = a.useCallback(() => {
            (x.default.track(B.HAw.DISPLAY_NAME_STYLES_CLOSED), P());
        }, [P]),
        eF = a.useCallback(() => {
            let { fontId: e, effectId: t, colors: s } = (0, _.gN)(eP, v.re);
            (eu(e),
                ef(t),
                (0, _.as)(t) > 1 ? eI((e) => ({ ...e, [t]: s })) : ex((e) => ({ ...e, [t]: s[0] })),
                x.default.track(B.HAw.DISPLAY_NAME_STYLES_SURPRISE_ME));
        }, [eP, eu, ef, eI, ex]),
        eY = a.useCallback(
            (e) => {
                eh
                    ? eI((t) => {
                          let s = t[em];
                          return null != s && (0, u.v)(s, e) ? t : { ...t, [em]: e };
                      })
                    : ex((t) => (t[em] === e[0] ? t : { ...t, [em]: e[0] }));
            },
            [eh, em, eI, ex],
        );
    return null == J
        ? null
        : (0, l.jsx)(g.f5, {
              value: ey,
              children: (0, l.jsx)(A.l.Provider, {
                  value: tp,
                  children: (0, l.jsxs)(m.EO, {
                      "data-migration-pending": !0,
                      transitionState: s,
                      size: m.rI.LARGE,
                      parentComponent: "DisplayNameStylesModal",
                      className: i()(tg.CR, tg.st),
                      returnRef: z,
                      children: [
                          (0, l.jsx)(m.s_, { "data-migration-pending": !0, onClick: eO, className: tg.b }),
                          (0, l.jsxs)(m.$m, {
                              "data-migration-pending": !0,
                              className: i()(tg.jE, tg.st),
                              style: { overflow: "hidden auto" },
                              scrollbarGutter: !1,
                              children: [
                                  (0, l.jsxs)("div", {
                                      className: tg.w1,
                                      children: [
                                          (0, l.jsx)(m.rQ, {
                                              "data-migration-pending": !0,
                                              separator: !1,
                                              className: tg.bV,
                                              children: (0, l.jsx)(f.D, {
                                                  variant: "heading-lg/semibold",
                                                  children: X.intl.string(V.default.ZPMAlX),
                                              }),
                                          }),
                                          (0, l.jsx)(eB, {
                                              selectedFontId: ec,
                                              setSelectedFontId: eu,
                                              displayName: $,
                                              className: tg._,
                                          }),
                                          (0, l.jsx)(ew, {
                                              selectedEffectId: em,
                                              setSelectedEffectId: ef,
                                              className: tg._,
                                          }),
                                          (0, l.jsx)(
                                              ej,
                                              {
                                                  selectedColors: e_,
                                                  setSelectedColors: eY,
                                                  selectedEffectId: em,
                                                  className: tg._,
                                                  defaultColor: eg.defaultColors[0],
                                              },
                                              em,
                                          ),
                                      ],
                                  }),
                                  (0, l.jsx)(tn, {
                                      user: J,
                                      guild: q,
                                      displayName: $,
                                      selectedFontId: ec,
                                      selectedEffectId: em,
                                      selectedColors: em === o.z.SOLID && (0, u.v)(e_, eg.defaultColors) ? [] : e_,
                                      isPremiumTryItOut: L,
                                  }),
                              ],
                          }),
                          (0, l.jsx)(eV, {
                              onApply: ei ? eR : eM,
                              onSurpriseMe: eF,
                              onClose: P,
                              canApply: ek || ei,
                              analyticsLocations: ey,
                              entryPoint: eo,
                              isPremiumTryItOut: L,
                              banner: eL ? (0, l.jsx)(tu, { owner: W, displayNameStyles: en }) : void 0,
                          }),
                      ],
                  }),
              }),
          });
}
