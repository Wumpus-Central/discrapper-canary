t.d(s, { default: () => st });
var a = t(477900),
    l = t(582128),
    n = t(503698),
    i = t.n(n),
    r = t(562708),
    d = t(508425),
    o = t(559949),
    c = t(17928),
    u = t(52133),
    m = t(935462),
    f = t(297264),
    h = t(793574),
    g = t(688810),
    x = t(139286),
    E = t(919395),
    N = t(71393),
    S = t(287809),
    p = t(174459),
    A = t(871162),
    I = t(248778),
    j = t(750656);
let _ = [...j.re, ...j.gz];
function C() {
    let e = (0, I.ux)("effect-order");
    return l.useMemo(() => (e ? _ : j.re), [e]);
}
let D = [
        o.x.DEFAULT,
        o.x.ZILLA_SLAB,
        o.x.CHERRY_BOMB,
        o.x.CHICLE,
        o.x.MUSEO_MODERNO,
        o.x.NEO_CASTEL,
        o.x.PIXELIFY,
        o.x.SINISTRE,
    ],
    v = [...D, ...j._k];
function y() {
    let e = (0, I.ux)("font-order");
    return l.useMemo(() => (e ? v : D), [e]);
}
var T = t(945096),
    L = t(898985),
    b = t(430571),
    k = t(207803),
    M = t(84540),
    O = t(652215),
    w = t(836602),
    P = t(696451),
    F = t(427262),
    R = t(403581),
    B = t(661531),
    Y = t(48736),
    G = t(317097),
    H = t(701974),
    z = t(375708);
function U(e) {
    return l.useMemo(
        () =>
            (0, j.ii)(e).map((e, s) => ({
                colors: e,
                a11yLabel: z.intl.formatToPlainString(H.default.FHfTsV, {
                    number: s + 1,
                    hexList: e.map(G.Hl).join(", "),
                }),
            })),
        [e],
    );
}
var K = t(887129),
    J = t(837381),
    W = t(741918),
    q = t(922016),
    X = t(866665),
    V = t(939249),
    Z = t(22231),
    $ = t(933832),
    Q = t(818168);
function ee(e) {
    let { colors: s, selected: t, onSelect: l, listItemId: n, "aria-label": i } = e,
        r = (0, J.rm)(n);
    return (0, a.jsxs)("button", {
        type: "button",
        className: Q.nf,
        onClick: l,
        "aria-label": i,
        ...r,
        children: [
            s.map((e, s) => (0, a.jsx)("div", { className: Q._4, style: { background: (0, G.Hl)(e) } }, s)),
            t && (0, a.jsx)($.CheckmarkLargeIcon, { className: Q.z6, size: "md", color: "currentColor" }),
        ],
    });
}
var es = t(1986),
    et = t(315710),
    ea = t(650583),
    el = t(607570);
let en = [0, 60, 120, 180, 240, 300, 360];
function ei(e) {
    let { value: s, onChange: t, hueToColor: n, onConfirm: r, "aria-label": d, className: o } = e,
        c = (0, T.xo)((0, G.tf)(s).h),
        u = l.useRef(null);
    (0, et.tj)(u);
    let m = l.useCallback((e) => t(n((0, T.xo)(e))), [t, n]),
        f = l.useCallback((e) => m(e.h), [m]),
        h = l.useMemo(() => `linear-gradient(to right, ${en.map((e) => (0, G.Hl)(n(e))).join(", ")})`, [n]),
        g = l.useMemo(
            () =>
                function (e) {
                    let { hsl: s } = e;
                    return (0, a.jsx)("div", { className: el.Wn, style: { background: (0, G.Hl)(n(s.h)) } });
                },
            [n],
        ),
        x = l.useCallback(
            (e) => {
                switch (e.key) {
                    case ea.dh.ARROW_LEFT:
                    case ea.dh.ARROW_DOWN:
                        m(c - 5);
                        break;
                    case ea.dh.ARROW_RIGHT:
                    case ea.dh.ARROW_UP:
                        m(c + 5);
                        break;
                    case ea.dh.HOME:
                        m(0);
                        break;
                    case ea.dh.END:
                        m(359);
                        break;
                    case ea.dh.ENTER:
                    case ea.dh.SPACE:
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
    return (0, a.jsx)("div", {
        ref: u,
        className: i()(el.kL, o),
        children: (0, a.jsx)("div", {
            className: el.SP,
            style: { "--custom-hue-track": h },
            role: "slider",
            tabIndex: 0,
            "aria-label": d,
            "aria-valuemin": 0,
            "aria-valuemax": 360,
            "aria-valuenow": Math.round(c),
            onKeyDown: x,
            children: (0, a.jsx)(es.Hue, {
                hsl: { h: c, s: 1, l: 0.5 },
                direction: "horizontal",
                pointer: g,
                onChange: f,
            }),
        }),
    });
}
var er = t(420080);
let ed = () => Promise.resolve();
function eo(e) {
    let { selectedColors: s, setSelectedColors: t, className: n } = e,
        [r, o] = l.useState(!1),
        c = l.useRef(null),
        m = s.length > 0 ? (0, T.nO)(s) : O.TGz,
        f = l.useCallback((e) => t((0, T.cf)(e)), [t]),
        h = U(d.z.GUMMY),
        g = h.findIndex((e) => {
            let { colors: t } = e;
            return (0, u.v)(t, s);
        }),
        x = g >= 0,
        E = s.length > 0 ? s : (0, T.cf)(m),
        N = z.intl.string(z.t["FHBa/1"]),
        S = (0, K.Ay)({
            id: "gummy-color-picker",
            isEnabled: !0,
            orientation: W.Gl.HORIZONTAL,
            scrollToStart: ed,
            scrollToEnd: ed,
        });
    return (0, a.jsx)(J.hD, {
        navigator: S,
        children: (0, a.jsx)(J.PR, {
            children: (e) => {
                let { ref: s, ...l } = e;
                return (0, a.jsxs)("div", {
                    className: i()(er.kL, n),
                    ref: s,
                    ...l,
                    children: [
                        (0, a.jsxs)("div", {
                            className: er.Ix,
                            children: [
                                (0, a.jsx)("div", {
                                    className: i()(er.yB, { [er.EI]: x }),
                                    children:
                                        !x &&
                                        E.map((e, s) =>
                                            (0, a.jsx)(
                                                "div",
                                                { className: er._4, style: { background: (0, G.Hl)(e) } },
                                                s,
                                            ),
                                        ),
                                }),
                                (0, a.jsx)("div", {
                                    className: er.fX,
                                    children: (0, a.jsx)(q.Y, {
                                        targetElementRef: c,
                                        position: "top",
                                        align: "left",
                                        shouldShow: r,
                                        onRequestOpen: () => o(!0),
                                        onRequestClose: () => o(!1),
                                        renderPopout: () =>
                                            (0, a.jsx)(ei, {
                                                value: x ? O.TGz : m,
                                                onChange: f,
                                                hueToColor: T.UZ,
                                                onConfirm: () => o(!1),
                                                "aria-label": N,
                                            }),
                                        children: (e) =>
                                            (0, a.jsx)(X.m, {
                                                text: N,
                                                position: "top",
                                                ariaHidden: !0,
                                                children: (0, a.jsx)("div", {
                                                    ...e,
                                                    ref: c,
                                                    className: er.r9,
                                                    children: (0, a.jsx)(J.tG, {
                                                        id: "custom",
                                                        children: (e) =>
                                                            (0, a.jsx)(V.D, {
                                                                ...e,
                                                                className: er.Vz,
                                                                "aria-label": N,
                                                                children: (0, a.jsx)(Z.PencilIcon, {
                                                                    size: "custom",
                                                                    width: 18,
                                                                    height: 18,
                                                                    color: "currentColor",
                                                                    className: er.IZ,
                                                                }),
                                                            }),
                                                    }),
                                                }),
                                            }),
                                    }),
                                }),
                            ],
                        }),
                        h.map((e, s) => {
                            let { colors: l, a11yLabel: n } = e;
                            return (0, a.jsx)(
                                ee,
                                {
                                    listItemId: `gummy-preset-${s}`,
                                    colors: l,
                                    selected: g === s,
                                    onSelect: () => t([...l]),
                                    "aria-label": n,
                                },
                                s,
                            );
                        }),
                    ],
                });
            },
        }),
    });
}
var ec = t(559106),
    eu = t(508274),
    em = t(300158);
let ef = () => Promise.resolve();
function eh() {
    return (0, a.jsx)($.CheckmarkLargeIcon, {
        className: em.q3,
        size: "custom",
        width: 20,
        height: 20,
        color: "currentColor",
    });
}
function eg(e) {
    let { color: s, isSelected: t, onSelect: l, listItemId: n, "aria-label": r } = e,
        d = (0, J.rm)(n);
    return (0, a.jsx)(ec.vN, {
        offset: -2,
        children: (0, a.jsx)("button", {
            type: "button",
            className: i()(em.nf, (0, G.OK)(s) > 0.2 ? em.o7 : em.eE, { [em.wH]: t }),
            style: { backgroundColor: (0, G.Hl)(s) },
            onClick: l,
            "aria-label": r,
            ...d,
            "aria-current": !!t || void 0,
            children: t && (0, a.jsx)(eh, {}),
        }),
    });
}
function ex(e) {
    let { value: s, isSelected: t, onChange: n } = e,
        [r, d] = l.useState(!1),
        o = l.useRef(null),
        c = z.intl.string(z.t["FHBa/1"]);
    return (0, a.jsx)(q.Y, {
        targetElementRef: o,
        position: "top",
        align: "left",
        shouldShow: r,
        onRequestOpen: () => d(!0),
        onRequestClose: () => d(!1),
        renderPopout: () => (0, a.jsx)(eu.VN, { onChange: n, value: s }),
        children: (e) =>
            (0, a.jsx)(X.m, {
                text: c,
                position: "top",
                ariaHidden: !0,
                children: (0, a.jsx)("div", {
                    ...e,
                    ref: o,
                    className: i()(em.OF, { [em.wH]: t }),
                    children: (0, a.jsx)(J.tG, {
                        id: "custom",
                        children: (e) =>
                            (0, a.jsx)(V.D, {
                                ...e,
                                className: em.Kd,
                                "aria-label": c,
                                "aria-current": !!t || void 0,
                                children: (0, a.jsx)(Z.PencilIcon, {
                                    className: em.EY,
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    color: "currentColor",
                                }),
                            }),
                    }),
                }),
            }),
    });
}
function eE(e) {
    let { selectedColor: s, setSelectedColor: t, defaultColor: l, selectedEffectId: n, className: r } = e,
        d = U(n),
        o =
            null != s &&
            s !== l &&
            !d.some((e) => {
                let { colors: t } = e;
                return t[0] === s;
            }),
        c = (0, K.Ay)({
            id: "display-name-styles-solid-color-picker",
            isEnabled: !0,
            orientation: W.Gl.HORIZONTAL,
            scrollToStart: ef,
            scrollToEnd: ef,
        });
    return (0, a.jsx)(J.hD, {
        navigator: c,
        children: (0, a.jsx)(J.PR, {
            children: (e) => {
                let { ref: n, ...c } = e;
                return (0, a.jsxs)("div", {
                    className: i()(em.kL, r),
                    ref: n,
                    ...c,
                    "aria-label": z.intl.string(H.default.JOpi7z),
                    children: [
                        (0, a.jsx)(ex, { value: s, isSelected: o, onChange: t }),
                        (0, a.jsx)(eg, {
                            color: l,
                            isSelected: s === l,
                            onSelect: () => t(l),
                            listItemId: "default",
                            "aria-label": z.intl.string(z.t.bBvAEH),
                        }),
                        d.map((e) => {
                            let { colors: l, a11yLabel: n } = e;
                            return (0, a.jsx)(
                                eg,
                                {
                                    color: l[0],
                                    isSelected: l[0] === s,
                                    onSelect: () => t(l[0]),
                                    listItemId: `preset-${l[0]}`,
                                    "aria-label": n,
                                },
                                l[0],
                            );
                        }),
                    ],
                });
            },
        }),
    });
}
var eN = t(143660),
    eS = t(454137);
function ep(e) {
    let { selectedColors: s, setSelectedColors: t, defaultColor: n, selectedEffectId: i, className: r } = e,
        o = (0, T.as)(i),
        c = U(i).map((e) => {
            let { colors: s, a11yLabel: t } = e;
            return { colors: s, name: t };
        }),
        u = (0, l.useCallback)(
            (e) => {
                (t([e]), p.default.track(O.HAw.DISPLAY_NAME_STYLES_COLOR_SELECTED, { default: e === n, colors: [e] }));
            },
            [t, n],
        ),
        m = (0, l.useCallback)(
            (e) => {
                (t(e), p.default.track(O.HAw.DISPLAY_NAME_STYLES_COLOR_SELECTED, { default: !1, colors: e }));
            },
            [t],
        );
    return (0, a.jsxs)("div", {
        className: r,
        children: [
            (0, a.jsxs)(f.D, {
                variant: "heading-md/semibold",
                className: eS.sU,
                children: [
                    z.intl.string(H.default.JOpi7z),
                    (0, a.jsx)(R.t, { size: "xs", color: B.A.colors.TEXT_DEFAULT }),
                ],
            }),
            i === d.z.GUMMY
                ? (0, a.jsx)(eo, { selectedColors: s, setSelectedColors: m })
                : o > 1
                  ? (0, a.jsx)(Y.default, {
                        className: eN.Ei,
                        colorContainerClassName: eN.rx,
                        defaultColor: n,
                        colors: c,
                        value: s[0],
                        gradientColors: s,
                        onChange: u,
                        onChangeGradientColors: m,
                        isGradient: !0,
                        gradientWidth: "231px",
                        gradientDegrees: 90,
                        allowBlackCustomColor: !0,
                        customPickerPosition: "top",
                    })
                  : (0, a.jsx)(eE, {
                        className: eN.Ei,
                        selectedColor: s[0],
                        setSelectedColor: u,
                        defaultColor: n,
                        selectedEffectId: i,
                    }),
        ],
    });
}
var eA = t(228366);
let eI = { seenFontIds: new Set(), seenEffectIds: new Set(), newFontsBadgeDismissed: !1, newEffectsBadgeDismissed: !1 };
class ej extends c.Ay.PersistedStore {
    static displayName = "DisplayNameStylesSeenStore";
    static persistKey = "DisplayNameStylesSeenStore";
    static migrations = [(e) => ({ ...e, newFontsBadgeDismissed: !1, newEffectsBadgeDismissed: !1 })];
    initialize(e) {
        eI = {
            seenFontIds: new Set(e?.seenFontIds ?? []),
            seenEffectIds: new Set(e?.seenEffectIds ?? []),
            newFontsBadgeDismissed: e?.newFontsBadgeDismissed ?? !1,
            newEffectsBadgeDismissed: e?.newEffectsBadgeDismissed ?? !1,
        };
    }
    getState() {
        return {
            seenFontIds: Array.from(eI.seenFontIds),
            seenEffectIds: Array.from(eI.seenEffectIds),
            newFontsBadgeDismissed: eI.newFontsBadgeDismissed,
            newEffectsBadgeDismissed: eI.newEffectsBadgeDismissed,
        };
    }
    getSeenFonts() {
        return eI.seenFontIds;
    }
    getSeenEffects() {
        return eI.seenEffectIds;
    }
    getNewFontsBadgeDismissed() {
        return eI.newFontsBadgeDismissed;
    }
    getNewEffectsBadgeDismissed() {
        return eI.newEffectsBadgeDismissed;
    }
}
let e_ = new ej(eA.h, {
    DISPLAY_NAME_STYLES_MARK_FONT_SEEN: function (e) {
        let { fontId: s } = e;
        if (eI.seenFontIds.has(s)) return !1;
        eI = { ...eI, seenFontIds: new Set([...eI.seenFontIds, s]) };
    },
    DISPLAY_NAME_STYLES_MARK_EFFECT_SEEN: function (e) {
        let { effectId: s } = e;
        if (eI.seenEffectIds.has(s)) return !1;
        eI = { ...eI, seenEffectIds: new Set([...eI.seenEffectIds, s]) };
    },
    DISPLAY_NAME_STYLES_MARK_NEW_FONTS_BADGE_DISMISSED: function () {
        if (eI.newFontsBadgeDismissed) return !1;
        eI = { ...eI, newFontsBadgeDismissed: !0 };
    },
    DISPLAY_NAME_STYLES_MARK_NEW_EFFECTS_BADGE_DISMISSED: function () {
        if (eI.newEffectsBadgeDismissed) return !1;
        eI = { ...eI, newEffectsBadgeDismissed: !0 };
    },
});
var eC = t(922301),
    eD = t(660184),
    ev = t(742191);
function ey(e) {
    let s,
        { selectedEffectId: t, setSelectedEffectId: n, className: r } = e,
        d = C(),
        { dotEffectIds: o, dismissEffectDot: u } =
            ((s = (0, c.bG)([e_], () => e_.getSeenEffects())),
            {
                dotEffectIds: l.useMemo(() => new Set(d.filter((e) => j.gz.includes(e) && !s.has(e))), [d, s]),
                dismissEffectDot: l.useCallback((e) => {
                    eA.h.dispatch({ type: "DISPLAY_NAME_STYLES_MARK_EFFECT_SEEN", effectId: e });
                }, []),
            }),
        m = (0, I.ux)("DisplayNameStylesEffectSelection"),
        h = Math.ceil(d.length / 2);
    return (0, a.jsxs)("div", {
        className: r,
        children: [
            (0, a.jsxs)(f.D, {
                variant: "heading-md/semibold",
                className: eS.sU,
                children: [
                    z.intl.string(H.default["1wilM1"]),
                    (0, a.jsx)(R.t, { size: "xs", color: B.A.colors.TEXT_DEFAULT }),
                ],
            }),
            (0, a.jsx)("div", {
                className: i()(eS.fh, { [ev.KS]: m }),
                style: { "--custom-dns-tile-columns": h },
                children: d.map((e) => {
                    let s = o.has(e);
                    return (0, a.jsx)(
                        eT,
                        {
                            effectId: e,
                            selected: e === t,
                            showNewDot: s,
                            isFlywheelEnabled: m,
                            onClick: () => {
                                (n(e), s && u(e));
                            },
                        },
                        e,
                    );
                }),
            }),
        ],
    });
}
function eT(e) {
    let { effectId: s, selected: t, showNewDot: l, isFlywheelEnabled: n, onClick: r } = e,
        d = (0, L._)(s);
    return (0, a.jsxs)(V.D, {
        className: i()(ev.Tw, { [ev.wH]: t, [ev.uT]: n }),
        onClick: r,
        children: [
            (0, a.jsx)(eD.A, {
                userName: d.name,
                effectDisplayType: eC.G.ANIMATED,
                displayNameStyles: d.previewStyles,
                textClassName: ev.tr,
                loop: !0,
                inProfile: !0,
            }),
            l && (0, a.jsx)("div", { className: eS.s1, "aria-hidden": !0 }),
        ],
    });
}
var eL = t(834730),
    eb = t(885574),
    ek = t(73392),
    eM = t(599715);
function eO(e) {
    let s,
        { selectedFontId: t, setSelectedFontId: n, displayName: r, className: d } = e,
        u = y(),
        { dotFontIds: m, dismissFontDot: h } =
            ((s = (0, c.bG)([e_], () => e_.getSeenFonts())),
            {
                dotFontIds: l.useMemo(() => new Set(u.filter((e) => j._k.includes(e) && !s.has(e))), [u, s]),
                dismissFontDot: l.useCallback((e) => {
                    eA.h.dispatch({ type: "DISPLAY_NAME_STYLES_MARK_FONT_SEEN", fontId: e });
                }, []),
            }),
        g = t !== o.x.DEFAULT,
        x = (0, T.Xr)(r),
        E = (0, I.ux)("DisplayNameStylesFontSelection"),
        N = Math.ceil(u.length / (E ? 3 : 2));
    return (0, a.jsxs)("div", {
        className: d,
        children: [
            (0, a.jsxs)(f.D, {
                variant: "heading-md/semibold",
                className: eS.sU,
                children: [
                    z.intl.string(H.default.nP0ngb),
                    (0, a.jsx)(R.t, { size: "xs", color: B.A.colors.TEXT_DEFAULT }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: i()(eS.fh, { [eM.qW]: E }),
                style: { "--custom-dns-tile-columns": N },
                children: [
                    u.map((e) => {
                        let s = (0, ek.p)(e),
                            l = e === t,
                            r = m.has(e),
                            d = z.intl.string(s.name);
                        return (0, a.jsx)(
                            X.m,
                            {
                                text: d,
                                asContainer: !0,
                                children: (0, a.jsxs)(V.D, {
                                    className: i()(eM.SO, { [eM.wH]: l, [eM.j4]: E }),
                                    onClick: () => {
                                        (n(e), r && h(e));
                                    },
                                    "aria-label": d,
                                    children: [
                                        (0, a.jsx)(eL.E, {
                                            variant: "text-lg/semibold",
                                            color: l ? "text-strong" : "text-default",
                                            className: i()(eM.FH, s.className),
                                            children: "Gg",
                                        }),
                                        r && (0, a.jsx)("div", { className: eS.s1, "aria-hidden": !0 }),
                                    ],
                                }),
                            },
                            e,
                        );
                    }),
                    g &&
                        x &&
                        (0, a.jsxs)("div", {
                            className: eM.Lb,
                            children: [
                                (0, a.jsx)(eb.CircleInformationIcon, { size: "lg" }),
                                (0, a.jsx)(eL.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: z.intl.string(H.default["+O1xL2"]),
                                }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
var ew = t(821609),
    eP = t(908803),
    eF = t(87719),
    eR = t(465794),
    eB = t(757036),
    eY = t(202541),
    eG = t(7212);
function eH(e) {
    let { onApply: s, onSurpriseMe: t, onClose: l, canApply: n, isPremiumTryItOut: i = !1 } = e,
        r = (0, eB.L)(eY.PremiumTypes.TIER_2),
        d = (0, a.jsx)(ew.$, {
            variant: "secondary",
            size: "md",
            onClick: t,
            icon: { type: "rive", asset: eP.m, riveProps: { dataBinding: { fill: B.A.colors.ICON_STRONG } } },
            text: z.intl.string(H.default.NOGFds),
        }),
        o = (0, a.jsxs)("div", {
            className: eG.k0,
            children: [
                d,
                (0, a.jsx)(X.m, {
                    text: z.intl.string(H.default.cVTpnj),
                    shouldShow: !n,
                    children: (0, a.jsx)(ew.$, {
                        onClick: s,
                        disabled: !n,
                        text: z.intl.string(z.t["1Qm822"]),
                        variant: "primary",
                        size: "md",
                        fullWidth: !0,
                    }),
                }),
            ],
        }),
        c = (0, a.jsxs)("div", {
            className: eG.UX,
            children: [
                (0, a.jsxs)("div", {
                    className: eG.iQ,
                    children: [
                        (0, a.jsx)(X.m, {
                            text: z.intl.string(z.t["5AFxuK"]),
                            children: (0, a.jsx)(R.t, { size: "md", color: B.A.colors.ICON_STRONG }),
                        }),
                        (0, a.jsx)(eL.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            className: eG.h_,
                            children: z.intl.format(H.default.PWf0xS, {
                                onClickNitro: () => {
                                    (p.default.track(O.HAw.DISPLAY_NAME_STYLES_NITRO_CLICKED), (0, eF.x)(l));
                                },
                            }),
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: eG.UD,
                    children: [
                        d,
                        (0, a.jsx)(eR.A, {
                            premiumModalAnalyticsLocation: {
                                section: O.JJy.DISPLAY_NAME_STYLES_MODAL_FOOTER,
                                object: O.ZSU.PREMIUM_UPSELL_BUTTON,
                            },
                            subscriptionTier: eY.pe.TIER_2,
                        }),
                    ],
                }),
            ],
        });
    return (0, a.jsx)(m.jl, { "data-migration-pending": !0, className: eG.qr, children: i || r ? o : c });
}
var ez = t(366010),
    eU = t(43990),
    eK = t(629584),
    eJ = t(943255),
    eW = t(575181),
    eq = t(736653),
    eX = t(780898),
    eV = t(344346),
    eZ = t(320095),
    e$ = t(963852),
    eQ = t(763754),
    e0 = t(20851),
    e1 = t(986687),
    e8 = t(101058),
    e2 = t(999291),
    e5 = t(686189),
    e9 = t(946356),
    e3 = t(975571),
    e6 = t(996988),
    e7 = t(228839);
function e4(e) {
    let {
            user: s,
            guild: t,
            displayName: n,
            selectedFontId: r,
            selectedEffectId: d,
            selectedColors: o,
            isPremiumTryItOut: u = !1,
        } = e,
        m = (0, eq.Ay)(),
        f = (0, ez.M)(m),
        [h, g] = (0, l.useState)(f),
        x = (0, e2.Ay)(s.id, null),
        { pendingChanges: N, tryItOutChanges: S } = (0, c.cf)([w.A], () => ({
            pendingChanges: w.A.getPendingChanges(t?.id),
            tryItOutChanges: w.A.getTryItOutChanges(),
        })),
        {
            pendingAvatar: A,
            pendingAvatarDecoration: I,
            pendingPrimaryGuildId: j,
            pendingBanner: _,
            pendingThemeColors: C,
            pendingNickname: D,
            pendingPronouns: v,
            pendingProfileEffect: y,
            pendingProfileFrame: T,
            pendingAccentColor: L,
            pendingBio: b,
            pendingLegacyUsernameDisabled: k,
        } = N,
        M = u ? S.tryItOutAvatar : A,
        P = (0, e8.V7)({ userId: s.id, image: M }),
        F = u ? void 0 : I,
        R = u ? S.tryItOutBanner : _,
        B = u ? S.tryItOutThemeColors : C,
        { bannerSrc: Y } = (0, e5.A)({ displayProfile: x, size: 413, canAnimate: !1, pendingBanner: R }),
        { userNameplate: G, guildNameplate: U, pendingNameplate: K } = (0, E.rv)(s, t?.id),
        J = (0, eX.WK)(U);
    h && !f ? (m = O.NJ8.DARK) : !h && f && (m = O.NJ8.LIGHT);
    let W = (0, l.useCallback)((e) => {
            (g(e === O.NJ8.DARK), p.default.track(O.HAw.DISPLAY_NAME_STYLES_THEME_TOGGLE, { dark: e === O.NJ8.DARK }));
        }, []),
        q = (0, l.useMemo)(
            () => ({ ...(0, eQ.FT)(s, null), nick: n, displayNameStyles: { fontId: r, effectId: d, colors: o } }),
            [s, r, d, o, n],
        );
    return (0, a.jsxs)("div", {
        className: e7._l,
        children: [
            null != Y &&
                (0, a.jsx)(e9.A, {
                    user: s,
                    displayProfile: x,
                    themeType: e6.d.MODAL_V2,
                    className: e7.LX,
                    pendingThemeColors: B,
                    forceUserTheme: !0,
                    children: (0, a.jsx)("div", { className: e7.b8, style: { backgroundImage: `url(${Y})` } }),
                }),
            (0, a.jsx)(eU.N, {
                theme: m,
                children: (e) =>
                    (0, a.jsxs)("div", {
                        className: i()(e7.cq, e),
                        inert: !0,
                        children: [
                            (0, a.jsx)(e1.A, {
                                user: s,
                                guild: t,
                                pendingGlobalName: n,
                                pendingNickname: D,
                                pendingPronouns: v,
                                pendingAvatar: P,
                                pendingAvatarDecoration: F,
                                pendingPrimaryGuildId: j,
                                pendingBanner: R,
                                pendingThemeColors: B,
                                pendingAccentColor: L,
                                pendingBio: b,
                                pendingProfileEffect: y,
                                pendingProfileFrame: T,
                                pendingLegacyUsernameDisabled: k,
                                pendingDisplayNameStyles: q.displayNameStyles,
                                canUsePremiumCustomization: !0,
                                disabledInputs: !0,
                                hideCustomStatus: !0,
                                hideBioSection: !0,
                                containerClassName: e7.ME,
                                interactive: !1,
                                hideExampleButton: !0,
                                hideProfileFrame: !0,
                            }),
                            (0, a.jsx)(e0.A, {
                                author: q,
                                message: (0, eZ.rh)({
                                    ...(0, e$.Ay)({ channelId: "1337", content: z.intl.string(H.default.h5Cuej) }),
                                    state: O.cmJ.SENT,
                                    id: "0",
                                }),
                                isGroupStart: !0,
                                hideSimpleEmbedContent: !0,
                                hideGuildTag: !0,
                                className: e7.OT,
                                previewGuildId: t?.id,
                                avatarDecorationOverride: F,
                                avatarOverride: P,
                            }),
                            (0, a.jsx)(eV.A, {
                                user: s,
                                guildId: t?.id,
                                nameplate: K,
                                nameplateData: null == K ? (J ?? G) : void 0,
                                pendingGlobalName: n,
                                pendingAvatarDecoration: F,
                                pendingPrimaryGuildId: j,
                                pendingDisplayNameStyles: q.displayNameStyles,
                                pendingAvatar: M,
                                isHighlighted: !0,
                                className: e7.qF,
                            }),
                        ],
                    }),
            }),
            (0, a.jsxs)("div", {
                className: e7.dI,
                children: [
                    (0, a.jsx)(eL.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: z.intl.format(H.default.prQba8, {
                            helpArticleLink: e3.A.getArticleURL(O.MVz.DISPLAY_NAME_STYLES),
                        }),
                    }),
                    (0, a.jsx)(se, { darkPreview: h, onToggleTheme: W }),
                ],
            }),
        ],
    });
}
function se(e) {
    let { darkPreview: s, onToggleTheme: t } = e,
        l = s ? O.NJ8.DARK : O.NJ8.LIGHT;
    return (0, a.jsx)(eK.I, {
        className: e7.xr,
        optionClassName: e7.$C,
        options: [
            {
                name: "",
                tooltip: z.intl.string(z.t.b8Cei3),
                value: O.NJ8.DARK,
                icon: eJ.Z,
                className: l === O.NJ8.DARK ? e7.iB : void 0,
            },
            {
                name: "",
                tooltip: z.intl.string(z.t.K2sFfo),
                value: O.NJ8.LIGHT,
                icon: eW.F,
                className: l === O.NJ8.LIGHT ? e7.iB : void 0,
            },
        ],
        value: l,
        onChange: (e) => {
            let { value: s } = e;
            return t(s);
        },
        look: "pill",
    });
}
var ss = t(226451);
function st(e) {
    let s,
        {
            transitionState: t,
            analyticsLocations: n,
            guildId: j,
            isPremiumTryItOut: _ = !1,
            onClose: D,
            returnRef: v,
        } = e,
        R = (0, c.bG)([S.default], () => S.default.getCurrentUser()),
        B =
            ((s = F.Ay.useName(R)),
            (0, c.bG)(
                [w.A, P.Ay],
                () => {
                    let e = w.A.getPendingChanges(j);
                    return null != j ? (e.pendingNickname ?? P.Ay.getNick(j, R?.id)) : e.pendingGlobalName;
                },
                [j, R],
            ) ??
                s ??
                ""),
        Y = (0, c.bG)([N.A], () => N.A.getGuild(j)),
        {
            userDisplayNameStyles: G,
            guildDisplayNameStyles: U,
            pendingDisplayNameStyles: K,
            tryItOutDisplayNameStyles: J,
        } = (0, E.B0)(R, j),
        W = _ ? J : K,
        q = void 0 !== W ? W : (U ?? G),
        [X, V] = l.useState(q?.fontId ?? o.x.DEFAULT),
        [Z, $] = l.useState(q?.effectId ?? d.z.SOLID),
        Q = (0, T.as)(Z) > 1,
        ee = (0, L._)(Z),
        es = (0, b.A)(),
        et = q?.colors ?? [],
        [ea, el] = l.useState(() => (et.length > 0 && !Q ? { [Z]: (0, T.Jq)(et[0], ee.defaultColors[0], Z) } : {})),
        [en, ei] = l.useState(() => (et.length > 0 && Q ? { [Z]: et } : {})),
        er = l.useMemo(() => en[Z] ?? es[Z], [en, Z, es]),
        ed = ea[Z] ?? es[Z][0];
    (0, x.A)(
        { type: r.ImpressionTypes.POPOUT, name: r.ImpressionNames.DISPLAY_NAME_STYLES_MODAL },
        { trackOnInitialLoad: !0 },
    );
    let { analyticsLocations: eo } = (0, g.Ay)(n, h.A.EDIT_DISPLAY_NAME_STYLES_MODAL),
        ec = l.useMemo(() => (Q ? er : [ed]), [Q, er, ed]),
        eu = l.useMemo(() => X !== q?.fontId || Z !== q?.effectId || !(0, u.v)(ec, q?.colors ?? []), [q, X, Z, ec]),
        em = (0, I.ux)("DisplayNameStylesModal"),
        ef = y(),
        eh = C(),
        eg = (function (e) {
            let {
                hasChanges: s,
                selectedFontId: t,
                selectedEffectId: a,
                selectedColors: n,
                defaultColor: i,
                guildId: r,
                isTryItOut: c,
                onClose: u,
            } = e;
            return l.useCallback(() => {
                if (s) {
                    let e = n;
                    a === d.z.SOLID && n.length > 0 && n[0] === i && (e = []);
                    let s = { fontId: t, effectId: a, colors: e };
                    (c ? (0, k.EW)(s) : (0, M.p)({ guildId: r, displayNameStyles: s }),
                        p.default.track(O.HAw.DISPLAY_NAME_STYLES_APPLIED, {
                            font_name: o.x[t],
                            effect_name: d.z[a],
                            colors: n,
                        }),
                        u?.());
                }
            }, [s, t, a, n, i, u, r, c]);
        })({
            hasChanges: eu,
            selectedFontId: X,
            selectedEffectId: Z,
            selectedColors: ec,
            defaultColor: ee.defaultColors[0],
            guildId: j,
            isTryItOut: _,
            onClose: D,
        }),
        ex = l.useCallback(() => {
            (p.default.track(O.HAw.DISPLAY_NAME_STYLES_CLOSED), D());
        }, [D]),
        eE = l.useCallback(() => {
            let { fontId: e, effectId: s, colors: t } = (0, T.gN)(ef, eh);
            (V(e),
                $(s),
                (0, T.as)(s) > 1 ? ei((e) => ({ ...e, [s]: t })) : el((e) => ({ ...e, [s]: t[0] })),
                p.default.track(O.HAw.DISPLAY_NAME_STYLES_SURPRISE_ME));
        }, [ef, eh, ei, el]),
        eN = l.useCallback(
            (e) => {
                Q ? ei((s) => ({ ...s, [Z]: e })) : el((s) => ({ ...s, [Z]: e[0] }));
            },
            [Q, Z, ei, el],
        );
    return null == R
        ? null
        : (0, a.jsx)(g.f5, {
              value: eo,
              children: (0, a.jsx)(A.l.Provider, {
                  value: { overrideSettings: !0 },
                  children: (0, a.jsxs)(m.EO, {
                      "data-migration-pending": !0,
                      transitionState: t,
                      size: m.rI.LARGE,
                      parentComponent: "DisplayNameStylesModal",
                      className: i()(ss.CR, { [ss.st]: em }),
                      returnRef: v,
                      children: [
                          (0, a.jsx)(m.s_, { "data-migration-pending": !0, onClick: ex, className: ss.b }),
                          (0, a.jsxs)(m.$m, {
                              "data-migration-pending": !0,
                              className: i()(ss.jE, { [ss.st]: em }),
                              style: { overflow: "hidden auto" },
                              scrollbarGutter: !1,
                              children: [
                                  (0, a.jsxs)("div", {
                                      className: ss.w1,
                                      children: [
                                          (0, a.jsx)(m.rQ, {
                                              "data-migration-pending": !0,
                                              separator: !1,
                                              className: ss.bV,
                                              children: (0, a.jsx)(f.D, {
                                                  variant: "heading-lg/semibold",
                                                  children: z.intl.string(H.default.ZPMAlX),
                                              }),
                                          }),
                                          (0, a.jsx)(eO, {
                                              selectedFontId: X,
                                              setSelectedFontId: V,
                                              displayName: B,
                                              className: ss._,
                                          }),
                                          (0, a.jsx)(ey, {
                                              selectedEffectId: Z,
                                              setSelectedEffectId: $,
                                              className: ss._,
                                          }),
                                          (0, a.jsx)(ep, {
                                              selectedColors: ec,
                                              setSelectedColors: eN,
                                              selectedEffectId: Z,
                                              className: ss._,
                                              defaultColor: ee.defaultColors[0],
                                          }),
                                      ],
                                  }),
                                  (0, a.jsx)(e4, {
                                      user: R,
                                      guild: Y,
                                      displayName: B,
                                      selectedFontId: X,
                                      selectedEffectId: Z,
                                      selectedColors: Z === d.z.SOLID && (0, u.v)(ec, ee.defaultColors) ? [] : ec,
                                      isPremiumTryItOut: _,
                                  }),
                              ],
                          }),
                          (0, a.jsx)(eH, {
                              onApply: eg,
                              onSurpriseMe: eE,
                              onClose: D,
                              canApply: eu,
                              analyticsLocations: eo,
                              isPremiumTryItOut: _,
                          }),
                      ],
                  }),
              }),
          });
}
