t.d(s, { default: () => so });
var a = t(477900),
    n = t(582128),
    l = t(503698),
    i = t.n(l),
    r = t(562708),
    o = t(508425),
    d = t(559949),
    c = t(17928),
    u = t(52133),
    m = t(935462),
    f = t(297264),
    h = t(793574),
    g = t(688810),
    E = t(139286),
    x = t(919395),
    S = t(71393),
    N = t(287809),
    p = t(174459),
    A = t(871162),
    I = t(248778),
    j = t(750656);
let _ = [...j.re, ...j.gz];
function C() {
    let e = (0, I.ux)("effect-order");
    return n.useMemo(() => (e ? _ : j.re), [e]);
}
let v = [
        d.x.DEFAULT,
        d.x.ZILLA_SLAB,
        d.x.CHERRY_BOMB,
        d.x.CHICLE,
        d.x.MUSEO_MODERNO,
        d.x.NEO_CASTEL,
        d.x.PIXELIFY,
        d.x.SINISTRE,
    ],
    D = [...v, ...j._k];
function y() {
    let e = (0, I.ux)("font-order");
    return n.useMemo(() => (e ? D : v), [e]);
}
var T = t(945096),
    L = t(898985),
    b = t(430571),
    k = t(631670),
    M = t(207803),
    O = t(84540),
    w = t(652215),
    P = t(836602),
    F = t(696451),
    R = t(427262),
    B = t(403581),
    Y = t(661531),
    G = t(48736),
    H = t(317097),
    z = t(701974),
    U = t(375708);
function K(e) {
    return n.useMemo(
        () =>
            (0, j.ii)(e).map((e, s) => ({
                colors: e,
                a11yLabel: U.intl.formatToPlainString(z.default.FHfTsV, {
                    number: s + 1,
                    hexList: e.map(H.Hl).join(", "),
                }),
            })),
        [e],
    );
}
var J = t(887129),
    W = t(837381),
    q = t(741918),
    X = t(922016),
    V = t(866665),
    Z = t(939249),
    $ = t(22231),
    Q = t(933832),
    ee = t(818168);
function es(e) {
    let { colors: s, selected: t, onSelect: n, listItemId: l, "aria-label": i } = e,
        r = (0, W.rm)(l);
    return (0, a.jsxs)("button", {
        type: "button",
        className: ee.nf,
        onClick: n,
        "aria-label": i,
        ...r,
        children: [
            s.map((e, s) => (0, a.jsx)("div", { className: ee._4, style: { background: (0, H.Hl)(e) } }, s)),
            t && (0, a.jsx)(Q.CheckmarkLargeIcon, { className: ee.z6, size: "md", color: "currentColor" }),
        ],
    });
}
var et = t(1986),
    ea = t(315710),
    en = t(650583),
    el = t(607570);
let ei = [0, 60, 120, 180, 240, 300, 360];
function er(e) {
    let { value: s, onChange: t, hueToColor: l, onConfirm: r, "aria-label": o, className: d } = e,
        c = (0, T.xo)((0, H.tf)(s).h),
        u = n.useRef(null);
    (0, ea.tj)(u);
    let m = n.useCallback((e) => t(l((0, T.xo)(e))), [t, l]),
        f = n.useCallback((e) => m(e.h), [m]),
        h = n.useMemo(() => `linear-gradient(to right, ${ei.map((e) => (0, H.Hl)(l(e))).join(", ")})`, [l]),
        g = n.useMemo(
            () =>
                function (e) {
                    let { hsl: s } = e;
                    return (0, a.jsx)("div", { className: el.Wn, style: { background: (0, H.Hl)(l(s.h)) } });
                },
            [l],
        ),
        E = n.useCallback(
            (e) => {
                switch (e.key) {
                    case en.dh.ARROW_LEFT:
                    case en.dh.ARROW_DOWN:
                        m(c - 5);
                        break;
                    case en.dh.ARROW_RIGHT:
                    case en.dh.ARROW_UP:
                        m(c + 5);
                        break;
                    case en.dh.HOME:
                        m(0);
                        break;
                    case en.dh.END:
                        m(359);
                        break;
                    case en.dh.ENTER:
                    case en.dh.SPACE:
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
        className: i()(el.kL, d),
        children: (0, a.jsx)("div", {
            className: el.SP,
            style: { "--custom-hue-track": h },
            role: "slider",
            tabIndex: 0,
            "aria-label": o,
            "aria-valuemin": 0,
            "aria-valuemax": 360,
            "aria-valuenow": Math.round(c),
            onKeyDown: E,
            children: (0, a.jsx)(et.Hue, {
                hsl: { h: c, s: 1, l: 0.5 },
                direction: "horizontal",
                pointer: g,
                onChange: f,
            }),
        }),
    });
}
var eo = t(420080);
let ed = () => Promise.resolve();
function ec(e) {
    let { selectedColors: s, setSelectedColors: t, className: l } = e,
        [r, d] = n.useState(!1),
        c = n.useRef(null),
        m = s.length > 0 ? (0, T.nO)(s) : w.TGz,
        f = n.useCallback((e) => t((0, T.cf)(e)), [t]),
        h = K(o.z.GUMMY),
        g = h.findIndex((e) => {
            let { colors: t } = e;
            return (0, u.v)(t, s);
        }),
        E = g >= 0,
        x = s.length > 0 ? s : (0, T.cf)(m),
        S = U.intl.string(U.t["FHBa/1"]),
        N = (0, J.Ay)({
            id: "gummy-color-picker",
            isEnabled: !0,
            orientation: q.Gl.HORIZONTAL,
            scrollToStart: ed,
            scrollToEnd: ed,
        });
    return (0, a.jsx)(W.hD, {
        navigator: N,
        children: (0, a.jsx)(W.PR, {
            children: (e) => {
                let { ref: s, ...n } = e;
                return (0, a.jsxs)("div", {
                    className: i()(eo.kL, l),
                    ref: s,
                    ...n,
                    children: [
                        (0, a.jsxs)("div", {
                            className: eo.Ix,
                            children: [
                                (0, a.jsx)("div", {
                                    className: i()(eo.yB, { [eo.EI]: E }),
                                    children:
                                        !E &&
                                        x.map((e, s) =>
                                            (0, a.jsx)(
                                                "div",
                                                { className: eo._4, style: { background: (0, H.Hl)(e) } },
                                                s,
                                            ),
                                        ),
                                }),
                                (0, a.jsx)("div", {
                                    className: eo.fX,
                                    children: (0, a.jsx)(X.Y, {
                                        targetElementRef: c,
                                        position: "top",
                                        align: "left",
                                        shouldShow: r,
                                        onRequestOpen: () => d(!0),
                                        onRequestClose: () => d(!1),
                                        renderPopout: () =>
                                            (0, a.jsx)(er, {
                                                value: E ? w.TGz : m,
                                                onChange: f,
                                                hueToColor: T.UZ,
                                                onConfirm: () => d(!1),
                                                "aria-label": S,
                                            }),
                                        children: (e) =>
                                            (0, a.jsx)(V.m, {
                                                text: S,
                                                position: "top",
                                                ariaHidden: !0,
                                                children: (0, a.jsx)("div", {
                                                    ...e,
                                                    ref: c,
                                                    className: eo.r9,
                                                    children: (0, a.jsx)(W.tG, {
                                                        id: "custom",
                                                        children: (e) =>
                                                            (0, a.jsx)(Z.D, {
                                                                ...e,
                                                                className: eo.Vz,
                                                                "aria-label": S,
                                                                children: (0, a.jsx)($.PencilIcon, {
                                                                    size: "custom",
                                                                    width: 18,
                                                                    height: 18,
                                                                    color: "currentColor",
                                                                    className: eo.IZ,
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
                            let { colors: n, a11yLabel: l } = e;
                            return (0, a.jsx)(
                                es,
                                {
                                    listItemId: `gummy-preset-${s}`,
                                    colors: n,
                                    selected: g === s,
                                    onSelect: () => t([...n]),
                                    "aria-label": l,
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
var eu = t(559106),
    em = t(508274),
    ef = t(300158);
let eh = () => Promise.resolve();
function eg() {
    return (0, a.jsx)(Q.CheckmarkLargeIcon, {
        className: ef.q3,
        size: "custom",
        width: 20,
        height: 20,
        color: "currentColor",
    });
}
function eE(e) {
    let { color: s, isSelected: t, onSelect: n, listItemId: l, "aria-label": r } = e,
        o = (0, W.rm)(l);
    return (0, a.jsx)(eu.vN, {
        offset: -2,
        children: (0, a.jsx)("button", {
            type: "button",
            className: i()(ef.nf, (0, H.OK)(s) > 0.2 ? ef.o7 : ef.eE, { [ef.wH]: t }),
            style: { backgroundColor: (0, H.Hl)(s) },
            onClick: n,
            "aria-label": r,
            ...o,
            "aria-current": !!t || void 0,
            children: t && (0, a.jsx)(eg, {}),
        }),
    });
}
function ex(e) {
    let { value: s, isSelected: t, onChange: l } = e,
        [r, o] = n.useState(!1),
        d = n.useRef(null),
        c = U.intl.string(U.t["FHBa/1"]);
    return (0, a.jsx)(X.Y, {
        targetElementRef: d,
        position: "top",
        align: "left",
        shouldShow: r,
        onRequestOpen: () => o(!0),
        onRequestClose: () => o(!1),
        renderPopout: () => (0, a.jsx)(em.VN, { onChange: l, value: s }),
        children: (e) =>
            (0, a.jsx)(V.m, {
                text: c,
                position: "top",
                ariaHidden: !0,
                children: (0, a.jsx)("div", {
                    ...e,
                    ref: d,
                    className: i()(ef.OF, { [ef.wH]: t }),
                    children: (0, a.jsx)(W.tG, {
                        id: "custom",
                        children: (e) =>
                            (0, a.jsx)(Z.D, {
                                ...e,
                                className: ef.Kd,
                                "aria-label": c,
                                "aria-current": !!t || void 0,
                                children: (0, a.jsx)($.PencilIcon, {
                                    className: ef.EY,
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
function eS(e) {
    let { selectedColor: s, setSelectedColor: t, defaultColor: n, selectedEffectId: l, className: r } = e,
        o = K(l),
        d =
            null != s &&
            s !== n &&
            !o.some((e) => {
                let { colors: t } = e;
                return t[0] === s;
            }),
        c = (0, J.Ay)({
            id: "display-name-styles-solid-color-picker",
            isEnabled: !0,
            orientation: q.Gl.HORIZONTAL,
            scrollToStart: eh,
            scrollToEnd: eh,
        });
    return (0, a.jsx)(W.hD, {
        navigator: c,
        children: (0, a.jsx)(W.PR, {
            children: (e) => {
                let { ref: l, ...c } = e;
                return (0, a.jsxs)("div", {
                    className: i()(ef.kL, r),
                    ref: l,
                    ...c,
                    "aria-label": U.intl.string(z.default.JOpi7z),
                    children: [
                        (0, a.jsx)(ex, { value: s, isSelected: d, onChange: t }),
                        (0, a.jsx)(eE, {
                            color: n,
                            isSelected: s === n,
                            onSelect: () => t(n),
                            listItemId: "default",
                            "aria-label": U.intl.string(U.t.bBvAEH),
                        }),
                        o.map((e) => {
                            let { colors: n, a11yLabel: l } = e;
                            return (0, a.jsx)(
                                eE,
                                {
                                    color: n[0],
                                    isSelected: n[0] === s,
                                    onSelect: () => t(n[0]),
                                    listItemId: `preset-${n[0]}`,
                                    "aria-label": l,
                                },
                                n[0],
                            );
                        }),
                    ],
                });
            },
        }),
    });
}
var eN = t(143660),
    ep = t(454137);
function eA(e) {
    let { selectedColors: s, setSelectedColors: t, defaultColor: l, selectedEffectId: i, className: r } = e,
        d = (0, T.as)(i),
        c = K(i).map((e) => {
            let { colors: s, a11yLabel: t } = e;
            return { colors: s, name: t };
        }),
        u = (0, n.useCallback)(
            (e) => {
                (t([e]), p.default.track(w.HAw.DISPLAY_NAME_STYLES_COLOR_SELECTED, { default: e === l, colors: [e] }));
            },
            [t, l],
        ),
        m = (0, n.useCallback)(
            (e) => {
                (t(e), p.default.track(w.HAw.DISPLAY_NAME_STYLES_COLOR_SELECTED, { default: !1, colors: e }));
            },
            [t],
        );
    return (0, a.jsxs)("div", {
        className: r,
        children: [
            (0, a.jsxs)(f.D, {
                variant: "heading-md/semibold",
                className: ep.sU,
                children: [
                    U.intl.string(z.default.JOpi7z),
                    (0, a.jsx)(B.t, { size: "xs", color: Y.A.colors.TEXT_DEFAULT }),
                ],
            }),
            i === o.z.GUMMY
                ? (0, a.jsx)(ec, { selectedColors: s, setSelectedColors: m })
                : d > 1
                  ? (0, a.jsx)(G.default, {
                        className: eN.Ei,
                        colorContainerClassName: eN.rx,
                        defaultColor: l,
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
                  : (0, a.jsx)(eS, {
                        className: eN.Ei,
                        selectedColor: s[0],
                        setSelectedColor: u,
                        defaultColor: l,
                        selectedEffectId: i,
                    }),
        ],
    });
}
var eI = t(73153);
let ej = { seenFontIds: new Set(), seenEffectIds: new Set(), newFontsBadgeDismissed: !1, newEffectsBadgeDismissed: !1 };
class e_ extends c.Ay.PersistedStore {
    static displayName = "DisplayNameStylesSeenStore";
    static persistKey = "DisplayNameStylesSeenStore";
    static migrations = [(e) => ({ ...e, newFontsBadgeDismissed: !1, newEffectsBadgeDismissed: !1 })];
    initialize(e) {
        ej = {
            seenFontIds: new Set(e?.seenFontIds ?? []),
            seenEffectIds: new Set(e?.seenEffectIds ?? []),
            newFontsBadgeDismissed: e?.newFontsBadgeDismissed ?? !1,
            newEffectsBadgeDismissed: e?.newEffectsBadgeDismissed ?? !1,
        };
    }
    getState() {
        return {
            seenFontIds: Array.from(ej.seenFontIds),
            seenEffectIds: Array.from(ej.seenEffectIds),
            newFontsBadgeDismissed: ej.newFontsBadgeDismissed,
            newEffectsBadgeDismissed: ej.newEffectsBadgeDismissed,
        };
    }
    getSeenFonts() {
        return ej.seenFontIds;
    }
    getSeenEffects() {
        return ej.seenEffectIds;
    }
    getNewFontsBadgeDismissed() {
        return ej.newFontsBadgeDismissed;
    }
    getNewEffectsBadgeDismissed() {
        return ej.newEffectsBadgeDismissed;
    }
}
let eC = new e_(eI.h, {
    DISPLAY_NAME_STYLES_MARK_FONT_SEEN: function (e) {
        let { fontId: s } = e;
        if (ej.seenFontIds.has(s)) return !1;
        ej = { ...ej, seenFontIds: new Set([...ej.seenFontIds, s]) };
    },
    DISPLAY_NAME_STYLES_MARK_EFFECT_SEEN: function (e) {
        let { effectId: s } = e;
        if (ej.seenEffectIds.has(s)) return !1;
        ej = { ...ej, seenEffectIds: new Set([...ej.seenEffectIds, s]) };
    },
    DISPLAY_NAME_STYLES_MARK_NEW_FONTS_BADGE_DISMISSED: function () {
        if (ej.newFontsBadgeDismissed) return !1;
        ej = { ...ej, newFontsBadgeDismissed: !0 };
    },
    DISPLAY_NAME_STYLES_MARK_NEW_EFFECTS_BADGE_DISMISSED: function () {
        if (ej.newEffectsBadgeDismissed) return !1;
        ej = { ...ej, newEffectsBadgeDismissed: !0 };
    },
});
var ev = t(922301),
    eD = t(660184),
    ey = t(742191);
function eT(e) {
    let s,
        { selectedEffectId: t, setSelectedEffectId: l, className: r } = e,
        o = C(),
        { dotEffectIds: d, dismissEffectDot: u } =
            ((s = (0, c.bG)([eC], () => eC.getSeenEffects())),
            {
                dotEffectIds: n.useMemo(() => new Set(o.filter((e) => j.gz.includes(e) && !s.has(e))), [o, s]),
                dismissEffectDot: n.useCallback((e) => {
                    eI.h.dispatch({ type: "DISPLAY_NAME_STYLES_MARK_EFFECT_SEEN", effectId: e });
                }, []),
            }),
        m = (0, I.ux)("DisplayNameStylesEffectSelection"),
        h = Math.ceil(o.length / 2);
    return (0, a.jsxs)("div", {
        className: r,
        children: [
            (0, a.jsxs)(f.D, {
                variant: "heading-md/semibold",
                className: ep.sU,
                children: [
                    U.intl.string(z.default["1wilM1"]),
                    (0, a.jsx)(B.t, { size: "xs", color: Y.A.colors.TEXT_DEFAULT }),
                ],
            }),
            (0, a.jsx)("div", {
                className: i()(ep.fh, { [ey.KS]: m }),
                style: { "--custom-dns-tile-columns": h },
                children: o.map((e) => {
                    let s = d.has(e);
                    return (0, a.jsx)(
                        eL,
                        {
                            effectId: e,
                            selected: e === t,
                            showNewDot: s,
                            isFlywheelEnabled: m,
                            onClick: () => {
                                (l(e), s && u(e));
                            },
                        },
                        e,
                    );
                }),
            }),
        ],
    });
}
function eL(e) {
    let { effectId: s, selected: t, showNewDot: n, isFlywheelEnabled: l, onClick: r } = e,
        o = (0, L._)(s);
    return (0, a.jsxs)(Z.D, {
        className: i()(ey.Tw, { [ey.wH]: t, [ey.uT]: l }),
        onClick: r,
        children: [
            (0, a.jsx)(eD.A, {
                userName: o.name,
                effectDisplayType: ev.G.ANIMATED,
                displayNameStyles: o.previewStyles,
                textClassName: ey.tr,
                loop: !0,
                inProfile: !0,
            }),
            n && (0, a.jsx)("div", { className: ep.s1, "aria-hidden": !0 }),
        ],
    });
}
var eb = t(834730),
    ek = t(885574),
    eM = t(73392),
    eO = t(599715);
function ew(e) {
    let s,
        { selectedFontId: t, setSelectedFontId: l, displayName: r, className: o } = e,
        u = y(),
        { dotFontIds: m, dismissFontDot: h } =
            ((s = (0, c.bG)([eC], () => eC.getSeenFonts())),
            {
                dotFontIds: n.useMemo(() => new Set(u.filter((e) => j._k.includes(e) && !s.has(e))), [u, s]),
                dismissFontDot: n.useCallback((e) => {
                    eI.h.dispatch({ type: "DISPLAY_NAME_STYLES_MARK_FONT_SEEN", fontId: e });
                }, []),
            }),
        g = t !== d.x.DEFAULT,
        E = (0, T.Xr)(r),
        x = (0, I.ux)("DisplayNameStylesFontSelection"),
        S = Math.ceil(u.length / (x ? 3 : 2));
    return (0, a.jsxs)("div", {
        className: o,
        children: [
            (0, a.jsxs)(f.D, {
                variant: "heading-md/semibold",
                className: ep.sU,
                children: [
                    U.intl.string(z.default.nP0ngb),
                    (0, a.jsx)(B.t, { size: "xs", color: Y.A.colors.TEXT_DEFAULT }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: i()(ep.fh, { [eO.qW]: x }),
                style: { "--custom-dns-tile-columns": S },
                children: [
                    u.map((e) => {
                        let s = (0, eM.p)(e),
                            n = e === t,
                            r = m.has(e),
                            o = U.intl.string(s.name);
                        return (0, a.jsx)(
                            V.m,
                            {
                                text: o,
                                asContainer: !0,
                                children: (0, a.jsxs)(Z.D, {
                                    className: i()(eO.SO, { [eO.wH]: n, [eO.j4]: x }),
                                    onClick: () => {
                                        (l(e), r && h(e));
                                    },
                                    "aria-label": o,
                                    children: [
                                        (0, a.jsx)(eb.E, {
                                            variant: "text-lg/semibold",
                                            color: n ? "text-strong" : "text-default",
                                            className: i()(eO.FH, s.className),
                                            children: "Gg",
                                        }),
                                        r && (0, a.jsx)("div", { className: ep.s1, "aria-hidden": !0 }),
                                    ],
                                }),
                            },
                            e,
                        );
                    }),
                    g &&
                        E &&
                        (0, a.jsxs)("div", {
                            className: eO.Lb,
                            children: [
                                (0, a.jsx)(ek.CircleInformationIcon, { size: "lg" }),
                                (0, a.jsx)(eb.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: U.intl.string(z.default["+O1xL2"]),
                                }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
var eP = t(821609),
    eF = t(908803),
    eR = t(87719),
    eB = t(465794),
    eY = t(757036),
    eG = t(202541),
    eH = t(7212);
function ez(e) {
    let { onApply: s, onSurpriseMe: t, onClose: n, canApply: l, isPremiumTryItOut: i = !1 } = e,
        r = (0, eY.L)(eG.PremiumTypes.TIER_2),
        o = (0, a.jsx)(eP.$, {
            variant: "secondary",
            size: "md",
            onClick: t,
            icon: { type: "rive", asset: eF.m, riveProps: { dataBinding: { fill: Y.A.colors.ICON_STRONG } } },
            text: U.intl.string(z.default.NOGFds),
        }),
        d = (0, a.jsxs)("div", {
            className: eH.k0,
            children: [
                o,
                (0, a.jsx)(V.m, {
                    text: U.intl.string(z.default.cVTpnj),
                    shouldShow: !l,
                    children: (0, a.jsx)(eP.$, {
                        onClick: s,
                        disabled: !l,
                        text: U.intl.string(U.t["1Qm822"]),
                        variant: "primary",
                        size: "md",
                        fullWidth: !0,
                    }),
                }),
            ],
        }),
        c = (0, a.jsxs)("div", {
            className: eH.UX,
            children: [
                (0, a.jsxs)("div", {
                    className: eH.iQ,
                    children: [
                        (0, a.jsx)(V.m, {
                            text: U.intl.string(U.t["5AFxuK"]),
                            children: (0, a.jsx)(B.t, { size: "md", color: Y.A.colors.ICON_STRONG }),
                        }),
                        (0, a.jsx)(eb.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            className: eH.h_,
                            children: U.intl.format(z.default.PWf0xS, {
                                onClickNitro: () => {
                                    (p.default.track(w.HAw.DISPLAY_NAME_STYLES_NITRO_CLICKED), (0, eR.x)(n));
                                },
                            }),
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: eH.UD,
                    children: [
                        o,
                        (0, a.jsx)(eB.A, {
                            premiumModalAnalyticsLocation: {
                                section: w.JJy.DISPLAY_NAME_STYLES_MODAL_FOOTER,
                                object: w.ZSU.PREMIUM_UPSELL_BUTTON,
                            },
                            subscriptionTier: eG.pe.TIER_2,
                        }),
                    ],
                }),
            ],
        });
    return (0, a.jsx)(m.jl, { "data-migration-pending": !0, className: eH.qr, children: i || r ? d : c });
}
var eU = t(366010),
    eK = t(43990),
    eJ = t(629584),
    eW = t(943255),
    eq = t(575181),
    eX = t(736653),
    eV = t(780898),
    eZ = t(344346),
    e$ = t(320095),
    eQ = t(963852),
    e0 = t(763754),
    e1 = t(20851),
    e8 = t(986687),
    e2 = t(101058),
    e5 = t(999291),
    e9 = t(686189),
    e3 = t(946356),
    e7 = t(975571),
    e6 = t(996988),
    e4 = t(228839);
function se(e) {
    let {
            user: s,
            guild: t,
            displayName: l,
            selectedFontId: r,
            selectedEffectId: o,
            selectedColors: d,
            isPremiumTryItOut: u = !1,
        } = e,
        m = (0, eX.Ay)(),
        f = (0, eU.M)(m),
        [h, g] = (0, n.useState)(f),
        E = (0, e5.Ay)(s.id, null),
        { pendingChanges: S, tryItOutChanges: N } = (0, c.cf)([P.A], () => ({
            pendingChanges: P.A.getPendingChanges(t?.id),
            tryItOutChanges: P.A.getTryItOutChanges(),
        })),
        {
            pendingAvatar: A,
            pendingAvatarDecoration: I,
            pendingPrimaryGuildId: j,
            pendingBanner: _,
            pendingThemeColors: C,
            pendingNickname: v,
            pendingPronouns: D,
            pendingProfileEffect: y,
            pendingProfileFrame: T,
            pendingAccentColor: L,
            pendingBio: b,
            pendingLegacyUsernameDisabled: k,
        } = S,
        M = u ? N.tryItOutAvatar : A,
        O = (0, e2.V7)({ userId: s.id, image: M }),
        F = u ? void 0 : I,
        R = u ? N.tryItOutBanner : _,
        B = u ? N.tryItOutThemeColors : C,
        { bannerSrc: Y } = (0, e9.A)({ displayProfile: E, size: 413, canAnimate: !1, pendingBanner: R }),
        { userNameplate: G, guildNameplate: H, pendingNameplate: K } = (0, x.rv)(s, t?.id),
        J = (0, eV.WK)(H);
    h && !f ? (m = w.NJ8.DARK) : !h && f && (m = w.NJ8.LIGHT);
    let W = (0, n.useCallback)((e) => {
            (g(e === w.NJ8.DARK), p.default.track(w.HAw.DISPLAY_NAME_STYLES_THEME_TOGGLE, { dark: e === w.NJ8.DARK }));
        }, []),
        q = (0, n.useMemo)(
            () => ({ ...(0, e0.FT)(s, null), nick: l, displayNameStyles: { fontId: r, effectId: o, colors: d } }),
            [s, r, o, d, l],
        );
    return (0, a.jsxs)("div", {
        className: e4._l,
        children: [
            null != Y &&
                (0, a.jsx)(e3.A, {
                    user: s,
                    displayProfile: E,
                    themeType: e6.d.MODAL_V2,
                    className: e4.LX,
                    pendingThemeColors: B,
                    forceUserTheme: !0,
                    children: (0, a.jsx)("div", { className: e4.b8, style: { backgroundImage: `url(${Y})` } }),
                }),
            (0, a.jsx)(eK.N, {
                theme: m,
                children: (e) =>
                    (0, a.jsxs)("div", {
                        className: i()(e4.cq, e),
                        inert: !0,
                        children: [
                            (0, a.jsx)(e8.A, {
                                user: s,
                                guild: t,
                                pendingGlobalName: l,
                                pendingNickname: v,
                                pendingPronouns: D,
                                pendingAvatar: O,
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
                                containerClassName: e4.ME,
                                interactive: !1,
                                hideExampleButton: !0,
                                hideProfileFrame: !0,
                            }),
                            (0, a.jsx)(e1.A, {
                                author: q,
                                message: (0, e$.rh)({
                                    ...(0, eQ.Ay)({ channelId: "1337", content: U.intl.string(z.default.h5Cuej) }),
                                    state: w.cmJ.SENT,
                                    id: "0",
                                }),
                                isGroupStart: !0,
                                hideSimpleEmbedContent: !0,
                                hideGuildTag: !0,
                                className: e4.OT,
                                previewGuildId: t?.id,
                                avatarDecorationOverride: F,
                                avatarOverride: O,
                            }),
                            (0, a.jsx)(eZ.A, {
                                user: s,
                                guildId: t?.id,
                                nameplate: K,
                                nameplateData: null == K ? (J ?? G) : void 0,
                                pendingGlobalName: l,
                                pendingAvatarDecoration: F,
                                pendingPrimaryGuildId: j,
                                pendingDisplayNameStyles: q.displayNameStyles,
                                pendingAvatar: M,
                                isHighlighted: !0,
                                className: e4.qF,
                            }),
                        ],
                    }),
            }),
            (0, a.jsxs)("div", {
                className: e4.dI,
                children: [
                    (0, a.jsx)(eb.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: U.intl.format(z.default.prQba8, {
                            helpArticleLink: e7.A.getArticleURL(w.MVz.DISPLAY_NAME_STYLES),
                        }),
                    }),
                    (0, a.jsx)(ss, { darkPreview: h, onToggleTheme: W }),
                ],
            }),
        ],
    });
}
function ss(e) {
    let { darkPreview: s, onToggleTheme: t } = e,
        n = s ? w.NJ8.DARK : w.NJ8.LIGHT;
    return (0, a.jsx)(eJ.I, {
        className: e4.xr,
        optionClassName: e4.$C,
        options: [
            {
                name: "",
                tooltip: U.intl.string(U.t.b8Cei3),
                value: w.NJ8.DARK,
                icon: eW.Z,
                className: n === w.NJ8.DARK ? e4.iB : void 0,
            },
            {
                name: "",
                tooltip: U.intl.string(U.t.K2sFfo),
                value: w.NJ8.LIGHT,
                icon: eq.F,
                className: n === w.NJ8.LIGHT ? e4.iB : void 0,
            },
        ],
        value: n,
        onChange: (e) => {
            let { value: s } = e;
            return t(s);
        },
        look: "pill",
    });
}
var st = t(739187),
    sa = t(857250),
    sn = t(97483),
    sl = t(765178);
function si() {
    let e = U.intl.string(U.t.iufib1);
    ((0, st.P)((0, sa.o)(e, sn.Ck.FAILURE)), sl.O.announce(e));
}
var sr = t(226451);
function so(e) {
    let s,
        {
            transitionState: t,
            analyticsLocations: l,
            guildId: j,
            isPremiumTryItOut: _ = !1,
            onClose: v,
            returnRef: D,
            tryOnDisplayNameStyles: B,
        } = e,
        Y = (0, c.bG)([N.default], () => N.default.getCurrentUser()),
        G =
            ((s = R.Ay.useName(Y)),
            (0, c.bG)(
                [P.A, F.Ay],
                () => {
                    let e = P.A.getPendingChanges(j);
                    return null != j ? (e.pendingNickname ?? F.Ay.getNick(j, Y?.id)) : e.pendingGlobalName;
                },
                [j, Y],
            ) ??
                s ??
                ""),
        H = (0, c.bG)([S.A], () => S.A.getGuild(j)),
        {
            userDisplayNameStyles: K,
            guildDisplayNameStyles: J,
            pendingDisplayNameStyles: W,
            tryItOutDisplayNameStyles: q,
        } = (0, x.B0)(Y, j),
        X = _ ? q : W,
        V = void 0 !== X ? X : (J ?? K),
        Z = (0, b.A)(),
        $ = (0, T.A5)(B, Z),
        Q = null != $,
        ee = $ ?? V,
        [es, et] = n.useState(ee?.fontId ?? d.x.DEFAULT),
        [ea, en] = n.useState(ee?.effectId ?? o.z.SOLID),
        el = (0, T.as)(ea) > 1,
        ei = (0, L._)(ea),
        er = ee?.colors ?? [],
        [eo, ed] = n.useState(() =>
            er.length > 0 && !el ? { [ea]: Q ? er[0] : (0, T.Jq)(er[0], ei.defaultColors[0], ea) } : {},
        ),
        [ec, eu] = n.useState(() => (er.length > 0 && el ? { [ea]: er } : {})),
        em = n.useMemo(() => ec[ea] ?? Z[ea], [ec, ea, Z]),
        ef = eo[ea] ?? Z[ea][0];
    (0, E.A)(
        { type: r.ImpressionTypes.POPOUT, name: r.ImpressionNames.DISPLAY_NAME_STYLES_MODAL },
        { trackOnInitialLoad: !0 },
    );
    let { analyticsLocations: eh } = (0, g.Ay)(l, h.A.EDIT_DISPLAY_NAME_STYLES_MODAL),
        eg = n.useMemo(() => (el ? em : [ef]), [el, em, ef]),
        eE = n.useMemo(() => es !== V?.fontId || ea !== V?.effectId || !(0, u.v)(eg, V?.colors ?? []), [V, es, ea, eg]),
        ex = eE || Q,
        eS = (0, I.ux)("DisplayNameStylesModal"),
        eN = y(),
        ep = C(),
        eI = (function (e) {
            let {
                    hasChanges: s,
                    selectedFontId: t,
                    selectedEffectId: a,
                    selectedColors: l,
                    defaultColor: i,
                    guildId: r,
                    isTryItOut: c,
                    onClose: u,
                    shouldSaveWithoutPendingChanges: m = !1,
                    onSaveError: f,
                } = e,
                h = n.useRef(!1);
            return n.useCallback(async () => {
                if ((s || m) && !h.current) {
                    let e = l;
                    a === o.z.SOLID && l.length > 0 && l[0] === i && (e = []);
                    let s = { fontId: t, effectId: a, colors: e };
                    if (m) {
                        h.current = !0;
                        try {
                            let e = await (0, k._L)({ displayNameStyles: s });
                            if (e?.ok !== !0) return void f?.();
                        } catch {
                            f?.();
                            return;
                        } finally {
                            h.current = !1;
                        }
                    } else c ? (0, M.EW)(s) : (0, O.p)({ guildId: r, displayNameStyles: s });
                    (p.default.track(w.HAw.DISPLAY_NAME_STYLES_APPLIED, {
                        font_name: d.x[t],
                        effect_name: o.z[a],
                        colors: l,
                    }),
                        u?.());
                }
            }, [s, t, a, l, i, u, r, c, m, f]);
        })({
            hasChanges: eE,
            selectedFontId: es,
            selectedEffectId: ea,
            selectedColors: eg,
            defaultColor: ei.defaultColors[0],
            guildId: j,
            isTryItOut: _,
            onClose: v,
            shouldSaveWithoutPendingChanges: Q,
            onSaveError: si,
        }),
        ej = n.useCallback(() => {
            (p.default.track(w.HAw.DISPLAY_NAME_STYLES_CLOSED), v());
        }, [v]),
        e_ = n.useCallback(() => {
            let { fontId: e, effectId: s, colors: t } = (0, T.gN)(eN, ep);
            (et(e),
                en(s),
                (0, T.as)(s) > 1 ? eu((e) => ({ ...e, [s]: t })) : ed((e) => ({ ...e, [s]: t[0] })),
                p.default.track(w.HAw.DISPLAY_NAME_STYLES_SURPRISE_ME));
        }, [eN, ep, et, en, eu, ed]),
        eC = n.useCallback(
            (e) => {
                el ? eu((s) => ({ ...s, [ea]: e })) : ed((s) => ({ ...s, [ea]: e[0] }));
            },
            [el, ea, eu, ed],
        );
    return null == Y
        ? null
        : (0, a.jsx)(g.f5, {
              value: eh,
              children: (0, a.jsx)(A.l.Provider, {
                  value: { overrideSettings: !0 },
                  children: (0, a.jsxs)(m.EO, {
                      "data-migration-pending": !0,
                      transitionState: t,
                      size: m.rI.LARGE,
                      parentComponent: "DisplayNameStylesModal",
                      className: i()(sr.CR, { [sr.st]: eS }),
                      returnRef: D,
                      children: [
                          (0, a.jsx)(m.s_, { "data-migration-pending": !0, onClick: ej, className: sr.b }),
                          (0, a.jsxs)(m.$m, {
                              "data-migration-pending": !0,
                              className: i()(sr.jE, { [sr.st]: eS }),
                              style: { overflow: "hidden auto" },
                              scrollbarGutter: !1,
                              children: [
                                  (0, a.jsxs)("div", {
                                      className: sr.w1,
                                      children: [
                                          (0, a.jsx)(m.rQ, {
                                              "data-migration-pending": !0,
                                              separator: !1,
                                              className: sr.bV,
                                              children: (0, a.jsx)(f.D, {
                                                  variant: "heading-lg/semibold",
                                                  children: U.intl.string(z.default.ZPMAlX),
                                              }),
                                          }),
                                          (0, a.jsx)(ew, {
                                              selectedFontId: es,
                                              setSelectedFontId: et,
                                              displayName: G,
                                              className: sr._,
                                          }),
                                          (0, a.jsx)(eT, {
                                              selectedEffectId: ea,
                                              setSelectedEffectId: en,
                                              className: sr._,
                                          }),
                                          (0, a.jsx)(eA, {
                                              selectedColors: eg,
                                              setSelectedColors: eC,
                                              selectedEffectId: ea,
                                              className: sr._,
                                              defaultColor: ei.defaultColors[0],
                                          }),
                                      ],
                                  }),
                                  (0, a.jsx)(se, {
                                      user: Y,
                                      guild: H,
                                      displayName: G,
                                      selectedFontId: es,
                                      selectedEffectId: ea,
                                      selectedColors: ea === o.z.SOLID && (0, u.v)(eg, ei.defaultColors) ? [] : eg,
                                      isPremiumTryItOut: _,
                                  }),
                              ],
                          }),
                          (0, a.jsx)(ez, {
                              onApply: eI,
                              onSurpriseMe: e_,
                              onClose: v,
                              canApply: ex,
                              analyticsLocations: eh,
                              isPremiumTryItOut: _,
                          }),
                      ],
                  }),
              }),
          });
}
