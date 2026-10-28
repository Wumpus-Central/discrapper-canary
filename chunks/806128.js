(s.r(t), s.d(t, { default: () => tC }));
var l = s(477900),
    n = s(582128),
    a = s(503698),
    i = s.n(a),
    r = s(562708),
    o = s(508425),
    d = s(559949),
    c = s(17928),
    u = s(52133),
    m = s(935462),
    f = s(297264),
    h = s(793574),
    g = s(688810),
    N = s(139286),
    E = s(919395),
    S = s(71393),
    x = s(287809),
    p = s(174459),
    A = s(871162),
    I = s(248778),
    v = s(750656);
let C = [...v.re, ...v.gz];
function _() {
    let e = (0, I.u)("effect-order");
    return n.useMemo(() => (e ? C : v.re), [e]);
}
var y = s(88858),
    j = s(652329);
let D = [
        d.x.DEFAULT,
        d.x.ZILLA_SLAB,
        d.x.CHERRY_BOMB,
        d.x.CHICLE,
        d.x.MUSEO_MODERNO,
        d.x.NEO_CASTEL,
        d.x.PIXELIFY,
        d.x.SINISTRE,
    ],
    T = [...D, ...v._k];
function L() {
    let { includeCampaignFonts: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = (0, I.u)("font-order"),
        s = (0, y.Lz)(j.vB.DISPLAY_NAME_STYLE, "font-order"),
        l = e && s !== j.S9.HIDDEN;
    return n.useMemo(() => {
        let e = t ? T : D;
        return l ? [...e, ...v.fY] : e;
    }, [t, l]);
}
var b = s(723694),
    k = s(898985),
    P = s(430571),
    M = s(631670),
    w = s(636537),
    O = s(73153),
    R = s(626584),
    F = s(927813),
    Y = s(189916);
let B = new R.A("HexagonActionCreators"),
    G = 5 * F.A.Millis.SECOND;
async function H() {
    await w.Bo.post({ url: j.tK, rejectWithError: !0 });
}
let U = null;
async function z(e) {
    try {
        await H();
    } catch (e) {
        return (B.warn(`Failed to enroll in the Hexagon campaign: ${e}`), !1);
    }
    return (
        (await (function (e) {
            function t() {
                return (0, Y.Rd)(x.default.getCurrentUser(), e);
            }
            return t()
                ? Promise.resolve(!0)
                : new Promise((e) => {
                      function s() {
                          t() && (clearTimeout(l), x.default.removeChangeListener(s), e(!0));
                      }
                      let l = setTimeout(() => {
                          (x.default.removeChangeListener(s), e(!1));
                      }, G);
                      x.default.addChangeListener(s);
                  });
        })(e)) || B.warn(`Timed out waiting for the Hexagon campaign ${e} perk to sync`),
        !0
    );
}
async function K(e) {
    try {
        return await z(e);
    } finally {
        U = null;
    }
}
var J = s(207803),
    W = s(84540),
    V = s(652215),
    X = s(836602),
    $ = s(696451),
    q = s(427262),
    Z = s(403581),
    Q = s(661531),
    ee = s(48736),
    et = s(317097),
    es = s(701974),
    el = s(105292);
function en(e, t) {
    return n.useMemo(
        () =>
            (t ?? (0, b.Fj)(e, null)).map((e, t) => {
                let { colors: s } = e;
                return {
                    colors: s,
                    a11yLabel: el.intl.formatToPlainString(es.default.FHfTsV, {
                        number: t + 1,
                        hexList: s.map(et.Hl).join(", "),
                    }),
                };
            }),
        [e, t],
    );
}
var ea = s(887129),
    ei = s(837381),
    er = s(741918),
    eo = s(265872),
    ed = s(866665),
    ec = s(939249),
    eu = s(22231),
    em = s(933832),
    ef = s(818168);
function eh(e) {
    let { colors: t, selected: s, onSelect: n, listItemId: a, "aria-label": i } = e,
        r = (0, ei.rm)(a);
    return (0, l.jsxs)("button", {
        type: "button",
        className: ef.nf,
        onClick: n,
        "aria-label": i,
        ...r,
        children: [
            t.map((e, t) => (0, l.jsx)("div", { className: ef._4, style: { background: (0, et.Hl)(e) } }, t)),
            s && (0, l.jsx)(em.CheckmarkLargeIcon, { className: ef.z6, size: "md", color: "currentColor" }),
        ],
    });
}
var eg = s(1986),
    eN = s(315710),
    eE = s(650583),
    eS = s(607570);
let ex = [0, 60, 120, 180, 240, 300, 360];
function ep(e) {
    let { value: t, onChange: s, hueToColor: a, onConfirm: r, "aria-label": o, className: d } = e,
        c = (0, b.xo)((0, et.tf)(t).h),
        u = n.useRef(null);
    (0, eN.tj)(u);
    let m = n.useCallback((e) => s(a((0, b.xo)(e))), [s, a]),
        f = n.useCallback((e) => m(e.h), [m]),
        h = n.useMemo(() => `linear-gradient(to right, ${ex.map((e) => (0, et.Hl)(a(e))).join(", ")})`, [a]),
        g = n.useMemo(
            () =>
                function (e) {
                    let { hsl: t } = e;
                    return (0, l.jsx)("div", { className: eS.Wn, style: { background: (0, et.Hl)(a(t.h)) } });
                },
            [a],
        ),
        N = n.useCallback(
            (e) => {
                switch (e.key) {
                    case eE.dh.ARROW_LEFT:
                    case eE.dh.ARROW_DOWN:
                        m(c - 5);
                        break;
                    case eE.dh.ARROW_RIGHT:
                    case eE.dh.ARROW_UP:
                        m(c + 5);
                        break;
                    case eE.dh.HOME:
                        m(0);
                        break;
                    case eE.dh.END:
                        m(359);
                        break;
                    case eE.dh.ENTER:
                    case eE.dh.SPACE:
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
        className: i()(eS.kL, d),
        children: (0, l.jsx)("div", {
            className: eS.SP,
            style: { "--custom-hue-track": h },
            role: "slider",
            tabIndex: 0,
            "aria-label": o,
            "aria-valuemin": 0,
            "aria-valuemax": 360,
            "aria-valuenow": Math.round(c),
            onKeyDown: N,
            children: (0, l.jsx)(eg.Hue, {
                hsl: { h: c, s: 1, l: 0.5 },
                direction: "horizontal",
                pointer: g,
                onChange: f,
            }),
        }),
    });
}
var eA = s(420080);
let eI = () => Promise.resolve();
function ev(e) {
    let { selectedColors: t, setSelectedColors: s, colorOptions: a, onCustomPalettePicked: r, className: d } = e,
        [c, m] = n.useState(!1),
        f = n.useRef(null),
        [h, g] = n.useState(V.TGz),
        N = n.useRef(null),
        E = n.useCallback(() => {
            (g(t.length > 0 ? (0, b.nO)(t) : V.TGz), m(!0));
        }, [t]),
        S = n.useCallback(
            (e) => {
                let t = (0, b.cf)(e);
                (g(e), (N.current = t), s(t, !0));
            },
            [s],
        ),
        x = n.useCallback(() => {
            let e = N.current;
            ((N.current = null), m(!1), null != e && r(e.slice()));
        }, [r]),
        p = en(o.z.GUMMY, a),
        A = p.findIndex((e) => {
            let { colors: s } = e;
            return (0, u.v)(s, t);
        }),
        I = A >= 0,
        v = t.length > 0 ? t : (0, b.cf)(V.TGz),
        C = el.intl.string(el.t["FHBa/1"]),
        _ = (0, ea.Ay)({
            id: "gummy-color-picker",
            isEnabled: !0,
            orientation: er.Gl.HORIZONTAL,
            scrollToStart: eI,
            scrollToEnd: eI,
        });
    return (0, l.jsx)(ei.hD, {
        navigator: _,
        children: (0, l.jsx)(ei.PR, {
            children: (e) => {
                let { ref: t, ...n } = e;
                return (0, l.jsxs)("div", {
                    className: i()(eA.kL, d),
                    ref: t,
                    ...n,
                    children: [
                        (0, l.jsxs)("div", {
                            className: eA.Ix,
                            children: [
                                (0, l.jsx)("div", {
                                    className: i()(eA.yB, { [eA.EI]: I }),
                                    children:
                                        !I &&
                                        v.map((e, t) =>
                                            (0, l.jsx)(
                                                "div",
                                                { className: eA._4, style: { background: (0, et.Hl)(e) } },
                                                t,
                                            ),
                                        ),
                                }),
                                (0, l.jsx)("div", {
                                    className: eA.fX,
                                    children: (0, l.jsx)(eo.Y, {
                                        targetElementRef: f,
                                        position: "top",
                                        align: "left",
                                        shouldShow: c,
                                        onRequestOpen: E,
                                        onRequestClose: x,
                                        renderPopout: () =>
                                            (0, l.jsx)(ep, {
                                                value: h,
                                                onChange: S,
                                                hueToColor: b.UZ,
                                                onConfirm: x,
                                                "aria-label": C,
                                            }),
                                        children: (e) =>
                                            (0, l.jsx)(ed.m, {
                                                text: C,
                                                position: "top",
                                                ariaHidden: !0,
                                                children: (0, l.jsx)("div", {
                                                    ...e,
                                                    ref: f,
                                                    className: eA.r9,
                                                    children: (0, l.jsx)(ei.tG, {
                                                        id: "custom",
                                                        children: (e) =>
                                                            (0, l.jsx)(ec.D, {
                                                                ...e,
                                                                className: eA.Vz,
                                                                "aria-label": C,
                                                                children: (0, l.jsx)(eu.PencilIcon, {
                                                                    size: "custom",
                                                                    width: 18,
                                                                    height: 18,
                                                                    color: "currentColor",
                                                                    className: eA.IZ,
                                                                }),
                                                            }),
                                                    }),
                                                }),
                                            }),
                                    }),
                                }),
                            ],
                        }),
                        p.map((e, t) => {
                            let { colors: n, a11yLabel: a } = e;
                            return (0, l.jsx)(
                                eh,
                                {
                                    listItemId: `gummy-preset-${t}`,
                                    colors: n,
                                    selected: A === t,
                                    onSelect: () => s([...n]),
                                    "aria-label": a,
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
var eC = s(559106),
    e_ = s(508274),
    ey = s(300158);
let ej = () => Promise.resolve();
function eD() {
    return (0, l.jsx)(em.CheckmarkLargeIcon, {
        className: ey.q3,
        size: "custom",
        width: 20,
        height: 20,
        color: "currentColor",
    });
}
let eT = n.memo(function (e) {
    let { color: t, isSelected: s, onSelect: a, listItemId: r, "aria-label": o } = e,
        d = (0, ei.rm)(r),
        c = n.useCallback(() => a(t), [a, t]);
    return (0, l.jsx)(eC.vN, {
        offset: -2,
        children: (0, l.jsx)("button", {
            type: "button",
            className: i()(ey.nf, (0, et.OK)(t) > 0.2 ? ey.o7 : ey.eE, { [ey.wH]: s }),
            style: { backgroundColor: (0, et.Hl)(t) },
            onClick: c,
            "aria-label": o,
            ...d,
            "aria-current": !!s || void 0,
            children: s && (0, l.jsx)(eD, {}),
        }),
    });
});
function eL(e) {
    let { value: t, onChange: s, onCustomColorPicked: a } = e,
        [i, r] = n.useState(!1),
        o = n.useRef(null),
        d = n.useRef(null),
        c = el.intl.string(el.t["FHBa/1"]),
        u = n.useCallback(
            (e) => {
                ((d.current = e), s(e));
            },
            [s],
        ),
        m = n.useCallback(() => {
            let e = d.current;
            ((d.current = null), r(!1), null != e && a(e));
        }, [a]);
    return (0, l.jsx)(eo.Y, {
        targetElementRef: o,
        position: "top",
        align: "left",
        shouldShow: i,
        onRequestOpen: () => r(!0),
        onRequestClose: m,
        renderPopout: () => (0, l.jsx)(e_.VN, { onChange: u, value: t, eagerUpdate: !0 }),
        children: (e) =>
            (0, l.jsx)(ed.m, {
                text: c,
                position: "top",
                ariaHidden: !0,
                children: (0, l.jsx)("div", {
                    ...e,
                    ref: o,
                    className: ey.OF,
                    children: (0, l.jsx)(ei.tG, {
                        id: "custom",
                        children: (e) =>
                            (0, l.jsx)(ec.D, {
                                ...e,
                                className: ey.Kd,
                                "aria-label": c,
                                children: (0, l.jsx)(eu.PencilIcon, {
                                    className: ey.EY,
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
function eb(e) {
    let {
            selectedColor: t,
            setSelectedColor: s,
            colorOptions: a,
            onCustomColorPicked: r,
            defaultColor: o,
            selectedEffectId: d,
            className: c,
        } = e,
        u = en(d, a),
        m = n.useCallback((e) => s(e), [s]),
        f = n.useCallback((e) => s(e, !0), [s]),
        h = a[0]?.isCustom === !0,
        g = h ? u[0] : null,
        N = h ? u.slice(1) : u;
    function E(e) {
        let { colors: s, a11yLabel: n } = e;
        return (0, l.jsx)(
            eT,
            { color: s[0], isSelected: s[0] === t, onSelect: m, listItemId: `preset-${s[0]}`, "aria-label": n },
            s[0],
        );
    }
    let S = (0, ea.Ay)({
        id: "display-name-styles-solid-color-picker",
        isEnabled: !0,
        orientation: er.Gl.HORIZONTAL,
        scrollToStart: ej,
        scrollToEnd: ej,
    });
    return (0, l.jsx)(ei.hD, {
        navigator: S,
        children: (0, l.jsx)(ei.PR, {
            children: (e) => {
                let { ref: s, ...n } = e;
                return (0, l.jsxs)("div", {
                    className: i()(ey.kL, c),
                    ref: s,
                    ...n,
                    "aria-label": el.intl.string(es.default.JOpi7z),
                    children: [
                        (0, l.jsx)(eL, { value: t, onChange: f, onCustomColorPicked: r }),
                        null != g && E(g),
                        (0, l.jsx)(eT, {
                            color: o,
                            isSelected: t === o,
                            onSelect: m,
                            listItemId: "default",
                            "aria-label": el.intl.string(el.t.bBvAEH),
                        }),
                        N.map(E),
                    ],
                });
            },
        }),
    });
}
var ek = s(143660),
    eP = s(454137);
function eM(e) {
    var t;
    let s,
        {
            selectedColors: a,
            setSelectedColors: i,
            colorOptions: r,
            onCustomPalettePicked: d,
            defaultColor: c,
            selectedEffectId: m,
            className: h,
        } = e,
        g = (0, b.as)(m),
        N =
            ((t = en(m, r)),
            n.useMemo(
                () =>
                    t.map((e) => {
                        let { colors: t, a11yLabel: s } = e;
                        return { colors: t, name: s };
                    }),
                [t],
            )),
        E =
            ((s = n.useRef(null)),
            n.useCallback(
                (e) => {
                    (null != s.current && (0, u.v)(s.current, e)) ||
                        ((s.current = e.slice()),
                        p.default.track(V.HAw.DISPLAY_NAME_STYLES_COLOR_SELECTED, {
                            default: 1 === e.length && e[0] === c,
                            colors: e,
                        }));
                },
                [c],
            )),
        S = (0, n.useCallback)(
            (e, t) => {
                (i([e]), !0 !== t && E([e]));
            },
            [i, E],
        ),
        x = (0, n.useCallback)(
            (e, t) => {
                (i(e), !0 !== t && E(e));
            },
            [i, E],
        ),
        A = (0, n.useCallback)(
            (e) => {
                (E([e]), e !== c && d([e]));
            },
            [d, c, E],
        ),
        I = (0, n.useCallback)(
            (e) => {
                (E(e), d(e));
            },
            [d, E],
        );
    return (0, l.jsxs)("div", {
        className: h,
        children: [
            (0, l.jsxs)(f.D, {
                variant: "heading-md/semibold",
                className: eP.sU,
                children: [
                    el.intl.string(es.default.JOpi7z),
                    (0, l.jsx)(Z.t, { size: "xs", color: Q.A.colors.TEXT_DEFAULT }),
                ],
            }),
            m === o.z.GUMMY
                ? (0, l.jsx)(ev, { selectedColors: a, setSelectedColors: x, colorOptions: r, onCustomPalettePicked: I })
                : g > 1
                  ? (0, l.jsx)(ee.default, {
                        className: ek.Ei,
                        colorContainerClassName: ek.rx,
                        defaultColor: c,
                        colors: N,
                        value: a[0],
                        gradientColors: a,
                        onChange: S,
                        onChangeGradientColors: x,
                        isGradient: !0,
                        gradientWidth: "231px",
                        gradientDegrees: 90,
                        allowBlackCustomColor: !0,
                        customPickerPosition: "top",
                        onCustomPalettePicked: I,
                    })
                  : (0, l.jsx)(eb, {
                        className: ek.Ei,
                        selectedColor: a[0],
                        setSelectedColor: S,
                        colorOptions: r,
                        onCustomColorPicked: A,
                        defaultColor: c,
                        selectedEffectId: m,
                    }),
        ],
    });
}
let ew = { seenFontIds: new Set(), seenEffectIds: new Set(), newFontsBadgeDismissed: !1, newEffectsBadgeDismissed: !1 };
class eO extends c.Ay.PersistedStore {
    static displayName = "DisplayNameStylesSeenStore";
    static persistKey = "DisplayNameStylesSeenStore";
    static migrations = [(e) => ({ ...e, newFontsBadgeDismissed: !1, newEffectsBadgeDismissed: !1 })];
    initialize(e) {
        ew = {
            seenFontIds: new Set(e?.seenFontIds ?? []),
            seenEffectIds: new Set(e?.seenEffectIds ?? []),
            newFontsBadgeDismissed: e?.newFontsBadgeDismissed ?? !1,
            newEffectsBadgeDismissed: e?.newEffectsBadgeDismissed ?? !1,
        };
    }
    getState() {
        return {
            seenFontIds: Array.from(ew.seenFontIds),
            seenEffectIds: Array.from(ew.seenEffectIds),
            newFontsBadgeDismissed: ew.newFontsBadgeDismissed,
            newEffectsBadgeDismissed: ew.newEffectsBadgeDismissed,
        };
    }
    getSeenFonts() {
        return ew.seenFontIds;
    }
    getSeenEffects() {
        return ew.seenEffectIds;
    }
    getNewFontsBadgeDismissed() {
        return ew.newFontsBadgeDismissed;
    }
    getNewEffectsBadgeDismissed() {
        return ew.newEffectsBadgeDismissed;
    }
}
let eR = new eO(O.h, {
    DISPLAY_NAME_STYLES_MARK_FONT_SEEN: function (e) {
        let { fontId: t } = e;
        if (ew.seenFontIds.has(t)) return !1;
        ew = { ...ew, seenFontIds: new Set([...ew.seenFontIds, t]) };
    },
    DISPLAY_NAME_STYLES_MARK_EFFECT_SEEN: function (e) {
        let { effectId: t } = e;
        if (ew.seenEffectIds.has(t)) return !1;
        ew = { ...ew, seenEffectIds: new Set([...ew.seenEffectIds, t]) };
    },
    DISPLAY_NAME_STYLES_MARK_NEW_FONTS_BADGE_DISMISSED: function () {
        if (ew.newFontsBadgeDismissed) return !1;
        ew = { ...ew, newFontsBadgeDismissed: !0 };
    },
    DISPLAY_NAME_STYLES_MARK_NEW_EFFECTS_BADGE_DISMISSED: function () {
        if (ew.newEffectsBadgeDismissed) return !1;
        ew = { ...ew, newEffectsBadgeDismissed: !0 };
    },
});
var eF = s(922301),
    eY = s(660184),
    eB = s(742191);
function eG(e) {
    let { effectId: t, selected: s, showNewDot: n, isFlywheelEnabled: a, onClick: r } = e,
        o = (0, k._)(t);
    return (0, l.jsxs)(ec.D, {
        className: i()(eB.Tw, { [eB.wH]: s, [eB.uT]: a }),
        onClick: r,
        children: [
            (0, l.jsx)(eY.A, {
                userName: o.name,
                effectDisplayType: eF.G.ANIMATED,
                displayNameStyles: o.previewStyles,
                textClassName: eB.tr,
                loop: !0,
                inProfile: !0,
            }),
            n && (0, l.jsx)("div", { className: eP.s1, "aria-hidden": !0 }),
        ],
    });
}
let eH = n.memo(function (e) {
    let t,
        { selectedEffectId: s, setSelectedEffectId: a, className: r } = e,
        o = _(),
        { dotEffectIds: d, dismissEffectDot: u } =
            ((t = (0, c.bG)([eR], () => eR.getSeenEffects())),
            {
                dotEffectIds: n.useMemo(() => new Set(o.filter((e) => v.gz.includes(e) && !t.has(e))), [o, t]),
                dismissEffectDot: n.useCallback((e) => {
                    O.h.dispatch({ type: "DISPLAY_NAME_STYLES_MARK_EFFECT_SEEN", effectId: e });
                }, []),
            }),
        m = (0, I.u)("DisplayNameStylesEffectSelection"),
        h = Math.ceil(o.length / 2);
    return (0, l.jsxs)("div", {
        className: r,
        children: [
            (0, l.jsxs)(f.D, {
                variant: "heading-md/semibold",
                className: eP.sU,
                children: [
                    el.intl.string(es.default["1wilM1"]),
                    (0, l.jsx)(Z.t, { size: "xs", color: Q.A.colors.TEXT_DEFAULT }),
                ],
            }),
            (0, l.jsx)("div", {
                className: i()(eP.fh, { [eB.KS]: m }),
                style: { "--custom-dns-tile-columns": h },
                children: o.map((e) => {
                    let t = d.has(e);
                    return (0, l.jsx)(
                        eG,
                        {
                            effectId: e,
                            selected: e === s,
                            showNewDot: t,
                            isFlywheelEnabled: m,
                            onClick: () => {
                                (a(e), t && u(e));
                            },
                        },
                        e,
                    );
                }),
            }),
        ],
    });
});
var eU = s(834730),
    ez = s(885574),
    eK = s(73392),
    eJ = s(599715);
let eW = n.memo(function (e) {
    let t,
        { selectedFontId: s, setSelectedFontId: a, displayName: r, className: o } = e,
        u = L(),
        { dotFontIds: m, dismissFontDot: h } =
            ((t = (0, c.bG)([eR], () => eR.getSeenFonts())),
            {
                dotFontIds: n.useMemo(() => new Set(u.filter((e) => v._k.includes(e) && !t.has(e))), [u, t]),
                dismissFontDot: n.useCallback((e) => {
                    O.h.dispatch({ type: "DISPLAY_NAME_STYLES_MARK_FONT_SEEN", fontId: e });
                }, []),
            }),
        g = s !== d.x.DEFAULT,
        N = (0, b.Xr)(r),
        E = (0, I.u)("DisplayNameStylesFontSelection"),
        S = Math.ceil(u.length / (E ? 3 : 2));
    return (0, l.jsxs)("div", {
        className: o,
        children: [
            (0, l.jsxs)(f.D, {
                variant: "heading-md/semibold",
                className: eP.sU,
                children: [
                    el.intl.string(es.default.nP0ngb),
                    (0, l.jsx)(Z.t, { size: "xs", color: Q.A.colors.TEXT_DEFAULT }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: i()(eP.fh, { [eJ.qW]: E }),
                style: { "--custom-dns-tile-columns": S },
                children: [
                    u.map((e) => {
                        let t = (0, eK.p)(e),
                            n = e === s,
                            r = m.has(e),
                            o = el.intl.string(t.name);
                        return (0, l.jsx)(
                            ed.m,
                            {
                                text: o,
                                asContainer: !0,
                                children: (0, l.jsxs)(ec.D, {
                                    className: i()(eJ.SO, { [eJ.wH]: n, [eJ.j4]: E }),
                                    onClick: () => {
                                        (a(e), r && h(e));
                                    },
                                    "aria-label": o,
                                    children: [
                                        (0, l.jsx)(eU.E, {
                                            variant: "text-lg/semibold",
                                            color: n ? "text-strong" : "text-default",
                                            className: i()(eJ.FH, t.className),
                                            children: "Gg",
                                        }),
                                        r && (0, l.jsx)("div", { className: eP.s1, "aria-hidden": !0 }),
                                    ],
                                }),
                            },
                            e,
                        );
                    }),
                    g &&
                        N &&
                        (0, l.jsxs)("div", {
                            className: eJ.Lb,
                            children: [
                                (0, l.jsx)(ez.CircleInformationIcon, { size: "lg" }),
                                (0, l.jsx)(eU.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: el.intl.string(es.default["+O1xL2"]),
                                }),
                            ],
                        }),
                ],
            }),
        ],
    });
});
var eV = s(821609),
    eX = s(908803),
    e$ = s(87719),
    eq = s(465794),
    eZ = s(757036),
    eQ = s(202541),
    e0 = s(7212);
function e1(e) {
    let { onApply: t, onSurpriseMe: s, onClose: n, canApply: a, isPremiumTryItOut: i = !1, banner: r } = e,
        o = (0, eZ.L)(eQ.PremiumTypes.TIER_2),
        d = (0, l.jsx)(eV.$, {
            variant: "secondary",
            size: "md",
            onClick: s,
            icon: { type: "rive", asset: eX.m, riveProps: { dataBinding: { fill: Q.A.colors.ICON_STRONG } } },
            text: el.intl.string(es.default.NOGFds),
        }),
        c = (0, l.jsxs)("div", {
            className: e0.k0,
            children: [
                d,
                (0, l.jsx)(ed.m, {
                    text: el.intl.string(es.default.cVTpnj),
                    shouldShow: !a,
                    children: (0, l.jsx)(eV.$, {
                        onClick: t,
                        disabled: !a,
                        text: el.intl.string(el.t["1Qm822"]),
                        variant: "primary",
                        size: "md",
                        fullWidth: !0,
                    }),
                }),
            ],
        }),
        u = null != r ? (0, l.jsxs)("div", { className: e0.f4, children: [r, c] }) : c,
        f = (0, l.jsxs)("div", {
            className: e0.UD,
            children: [
                d,
                (0, l.jsx)(eq.A, {
                    premiumModalAnalyticsLocation: {
                        section: V.JJy.DISPLAY_NAME_STYLES_MODAL_FOOTER,
                        object: V.ZSU.PREMIUM_UPSELL_BUTTON,
                    },
                    subscriptionTier: eQ.pe.TIER_2,
                }),
            ],
        }),
        h = (0, l.jsxs)("div", {
            className: e0.UX,
            children: [
                (0, l.jsxs)("div", {
                    className: e0.iQ,
                    children: [
                        (0, l.jsx)(ed.m, {
                            text: el.intl.string(el.t["5AFxuK"]),
                            children: (0, l.jsx)(Z.t, { size: "md", color: Q.A.colors.ICON_STRONG }),
                        }),
                        (0, l.jsx)(eU.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            className: e0.h_,
                            children: el.intl.format(es.default.PWf0xS, {
                                onClickNitro: () => {
                                    (p.default.track(V.HAw.DISPLAY_NAME_STYLES_NITRO_CLICKED), (0, e$.x)(n));
                                },
                            }),
                        }),
                    ],
                }),
                f,
            ],
        }),
        g = (0, l.jsxs)("div", { className: e0.UX, children: [r, f] }),
        N = null != r ? g : h;
    return (0, l.jsx)(m.jl, { "data-migration-pending": !0, className: e0.qr, children: i || o ? u : N });
}
var e8 = s(366010),
    e2 = s(43990),
    e5 = s(629584),
    e3 = s(943255),
    e9 = s(575181),
    e7 = s(736653),
    e6 = s(780898),
    e4 = s(344346),
    te = s(320095),
    tt = s(963852),
    ts = s(763754),
    tl = s(20851),
    tn = s(986687),
    ta = s(101058),
    ti = s(999291),
    tr = s(686189),
    to = s(946356),
    td = s(975571),
    tc = s(996988),
    tu = s(228839);
function tm(e) {
    let {
            user: t,
            guild: s,
            displayName: a,
            selectedFontId: r,
            selectedEffectId: o,
            selectedColors: d,
            isPremiumTryItOut: u = !1,
        } = e,
        m = (0, e7.Ay)(),
        f = (0, e8.M)(m),
        [h, g] = (0, n.useState)(f),
        N = (0, ti.Ay)(t.id, null),
        { pendingChanges: S, tryItOutChanges: x } = (0, c.cf)([X.A], () => ({
            pendingChanges: X.A.getPendingChanges(s?.id),
            tryItOutChanges: X.A.getTryItOutChanges(),
        })),
        {
            pendingAvatar: A,
            pendingAvatarDecoration: I,
            pendingPrimaryGuildId: v,
            pendingBanner: C,
            pendingThemeColors: _,
            pendingNickname: y,
            pendingPronouns: j,
            pendingProfileEffect: D,
            pendingProfileFrame: T,
            pendingAccentColor: L,
            pendingBio: b,
            pendingLegacyUsernameDisabled: k,
        } = S,
        P = u ? x.tryItOutAvatar : A,
        M = (0, ta.V7)({ userId: t.id, image: P }),
        w = u ? void 0 : I,
        O = u ? x.tryItOutBanner : C,
        R = u ? x.tryItOutThemeColors : _,
        { bannerSrc: F } = (0, tr.A)({ displayProfile: N, size: 413, canAnimate: !1, pendingBanner: O }),
        { userNameplate: Y, guildNameplate: B, pendingNameplate: G } = (0, E.rv)(t, s?.id),
        H = (0, e6.WK)(B);
    h && !f ? (m = V.NJ8.DARK) : !h && f && (m = V.NJ8.LIGHT);
    let U = (0, n.useCallback)((e) => {
            (g(e === V.NJ8.DARK), p.default.track(V.HAw.DISPLAY_NAME_STYLES_THEME_TOGGLE, { dark: e === V.NJ8.DARK }));
        }, []),
        z = (0, n.useMemo)(
            () => ({ ...(0, ts.FT)(t, null), nick: a, displayNameStyles: { fontId: r, effectId: o, colors: d } }),
            [t, r, o, d, a],
        );
    return (0, l.jsxs)("div", {
        className: tu._l,
        children: [
            null != F &&
                (0, l.jsx)(to.A, {
                    user: t,
                    displayProfile: N,
                    themeType: tc.d.MODAL_V2,
                    className: tu.LX,
                    pendingThemeColors: R,
                    forceUserTheme: !0,
                    children: (0, l.jsx)("div", { className: tu.b8, style: { backgroundImage: `url(${F})` } }),
                }),
            (0, l.jsx)(e2.N, {
                theme: m,
                children: (e) =>
                    (0, l.jsxs)("div", {
                        className: i()(tu.cq, e),
                        inert: !0,
                        children: [
                            (0, l.jsx)(tn.A, {
                                user: t,
                                guild: s,
                                pendingGlobalName: a,
                                pendingNickname: y,
                                pendingPronouns: j,
                                pendingAvatar: M,
                                pendingAvatarDecoration: w,
                                pendingPrimaryGuildId: v,
                                pendingBanner: O,
                                pendingThemeColors: R,
                                pendingAccentColor: L,
                                pendingBio: b,
                                pendingProfileEffect: D,
                                pendingProfileFrame: T,
                                pendingLegacyUsernameDisabled: k,
                                pendingDisplayNameStyles: z.displayNameStyles,
                                canUsePremiumCustomization: !0,
                                disabledInputs: !0,
                                hideCustomStatus: !0,
                                hideBioSection: !0,
                                containerClassName: tu.ME,
                                interactive: !1,
                                hideExampleButton: !0,
                                hideProfileFrame: !0,
                            }),
                            (0, l.jsx)(tl.A, {
                                author: z,
                                message: (0, te.rh)({
                                    ...(0, tt.Ay)({ channelId: "1337", content: el.intl.string(es.default.h5Cuej) }),
                                    state: V.cmJ.SENT,
                                    id: "0",
                                }),
                                isGroupStart: !0,
                                hideSimpleEmbedContent: !0,
                                hideGuildTag: !0,
                                className: tu.OT,
                                previewGuildId: s?.id,
                                avatarDecorationOverride: w,
                                avatarOverride: M,
                            }),
                            (0, l.jsx)(e4.A, {
                                user: t,
                                guildId: s?.id,
                                nameplate: G,
                                nameplateData: null == G ? (H ?? Y) : void 0,
                                pendingGlobalName: a,
                                pendingAvatarDecoration: w,
                                pendingPrimaryGuildId: v,
                                pendingDisplayNameStyles: z.displayNameStyles,
                                pendingAvatar: P,
                                isHighlighted: !0,
                                className: tu.qF,
                            }),
                        ],
                    }),
            }),
            (0, l.jsxs)("div", {
                className: tu.dI,
                children: [
                    (0, l.jsx)(eU.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: el.intl.format(es.default.prQba8, {
                            helpArticleLink: td.A.getArticleURL(V.MVz.DISPLAY_NAME_STYLES),
                        }),
                    }),
                    (0, l.jsx)(tf, { darkPreview: h, onToggleTheme: U }),
                ],
            }),
        ],
    });
}
function tf(e) {
    let { darkPreview: t, onToggleTheme: s } = e,
        n = t ? V.NJ8.DARK : V.NJ8.LIGHT;
    return (0, l.jsx)(e5.I, {
        className: tu.xr,
        optionClassName: tu.$C,
        options: [
            {
                name: "",
                tooltip: el.intl.string(el.t.b8Cei3),
                value: V.NJ8.DARK,
                icon: e3.Z,
                className: n === V.NJ8.DARK ? tu.iB : void 0,
            },
            {
                name: "",
                tooltip: el.intl.string(el.t.K2sFfo),
                value: V.NJ8.LIGHT,
                icon: e9.F,
                className: n === V.NJ8.LIGHT ? tu.iB : void 0,
            },
        ],
        value: n,
        onChange: (e) => {
            let { value: t } = e;
            return s(t);
        },
        look: "pill",
    });
}
var th = s(97808),
    tg = s(778712),
    tN = s(913563),
    tE = s(497082);
function tS(e) {
    let { owner: t, displayNameStyles: s } = e,
        n = el.intl.string((0, tN.A)(s.fontId)),
        { name: a } = (0, k._)(s.effectId),
        i = t.globalName ?? t.username;
    return (0, l.jsxs)("div", {
        className: tE.v,
        children: [
            (0, l.jsx)(th.eu, { size: tg._3.SIZE_32, src: t.getAvatarURL(void 0, 32), "aria-hidden": !0 }),
            (0, l.jsxs)("div", {
                className: tE.C,
                children: [
                    (0, l.jsx)(eU.E, {
                        variant: "text-md/medium",
                        color: "text-default",
                        children: el.intl.format(es.default.gYzaCr, {
                            displayNameHook: () =>
                                (0, l.jsx)(eY.A, {
                                    userName: i,
                                    displayNameStyles: s,
                                    effectDisplayType: eF.G.ANIMATED,
                                    loop: !0,
                                }),
                        }),
                    }),
                    (0, l.jsx)(eU.E, {
                        variant: "text-xs/normal",
                        color: "text-subtle",
                        children: el.intl.format(es.default.DC7gJB, { fontName: n, effectName: a }),
                    }),
                ],
            }),
        ],
    });
}
var tx = s(858899),
    tp = s(765178);
function tA() {
    let e = el.intl.string(el.t.iufib1);
    ((0, tx.P0)({ text: e, variant: "critical" }), tp.O.announce(e));
}
var tI = s(226451);
let tv = { overrideSettings: !0 };
function tC(e) {
    let t,
        {
            transitionState: s,
            analyticsLocations: a,
            guildId: v,
            isPremiumTryItOut: C = !1,
            onClose: y,
            returnRef: D,
            tryOnDisplayNameStyles: T,
            tryOnStyleOwner: w,
        } = e,
        R = (0, c.bG)([x.default], () => x.default.getCurrentUser()),
        F =
            ((t = q.Ay.useName(R)),
            (0, c.bG)(
                [X.A, $.Ay],
                () => {
                    let e = X.A.getPendingChanges(v);
                    return null != v ? (e.pendingNickname ?? $.Ay.getNick(v, R?.id)) : e.pendingGlobalName;
                },
                [v, R],
            ) ??
                t ??
                ""),
        B = (0, c.bG)([S.A], () => S.A.getGuild(v)),
        {
            userDisplayNameStyles: G,
            guildDisplayNameStyles: H,
            pendingDisplayNameStyles: z,
            tryItOutDisplayNameStyles: Z,
        } = (0, E.B0)(R, v),
        Q = C ? Z : z,
        ee = void 0 !== Q ? Q : (H ?? G),
        et = (0, P.A)(),
        en = n.useMemo(() => (0, b.A5)(T, et), [T, et]),
        ea = null != en,
        ei = en ?? ee,
        er = ea ? "try_this_style" : "profile_editor",
        eo = n.useMemo(() => (0, b.A5)(G, et), [G, et]),
        [ed, ec] = n.useState(ei?.fontId ?? d.x.DEFAULT),
        [eu, em] = n.useState(ei?.effectId ?? o.z.SOLID),
        ef = (0, b.as)(eu) > 1,
        eh = (0, k._)(eu),
        eg = ei?.colors ?? [],
        eN = eg.length > 0 && !ef,
        eE = eg.length > 0 && ef,
        [eS, ex] = n.useState(() => (eN ? { [eu]: eg[0] } : {})),
        [ep, eA] = n.useState(() => (eE ? { [eu]: eg } : {})),
        eI = n.useMemo(() => ep[eu] ?? et[eu], [ep, eu, et]),
        ev = eS[eu] ?? et[eu][0],
        [eC, e_] = n.useState(() => {
            let e = !ef && 1 === eg.length && eg[0] === et[eu][0],
                t = eg.length > 0 && !e ? eg : null,
                s = {};
            for (let e of Object.keys(et)) {
                let l = Number(e);
                s[l] = (0, b.Fj)(l, l === eu ? t : null);
            }
            return s;
        }),
        ey = n.useCallback(
            (e) => {
                e_((t) => {
                    let s = (0, b.fO)(t[eu], eu, e);
                    return s === t[eu] ? t : { ...t, [eu]: s };
                });
            },
            [eu],
        );
    (0, N.A)(
        {
            type: r.ImpressionTypes.POPOUT,
            name: r.ImpressionNames.DISPLAY_NAME_STYLES_MODAL,
            properties: { entry_point: er },
        },
        { trackOnInitialLoad: !0 },
    );
    let { analyticsLocations: ej } = (0, g.Ay)(a, h.A.EDIT_DISPLAY_NAME_STYLES_MODAL),
        eD = n.useMemo(() => (ef ? eI : [ev]), [ef, eI, ev]),
        eT = n.useMemo(() => ({ fontId: ed, effectId: eu, colors: eD }), [ed, eu, eD]),
        eL = n.useMemo(
            () => ed !== ee?.fontId || eu !== ee?.effectId || !(0, u.v)(eD, ee?.colors ?? []),
            [ed, eu, eD, ee],
        ),
        eb = n.useMemo(() => !(0, b.kv)(eT, eo), [eT, eo]),
        ek = ea ? eb : eL,
        eP = ea && (0, b.kv)(eT, en) && null != w && null != en,
        ew = (0, I.u)("DisplayNameStylesModal"),
        eO = L(),
        eR = _(),
        { handleApply: eF } = (function (e) {
            let {
                    hasChanges: t,
                    entryPoint: s,
                    selectedFontId: l,
                    selectedEffectId: a,
                    selectedColors: i,
                    defaultColor: r,
                    guildId: c,
                    isTryItOut: u,
                    onClose: m,
                    onEnrollmentError: f,
                    shouldSaveWithoutPendingChanges: h = !1,
                    onSaveError: g,
                } = e,
                N = n.useRef(!1),
                [E, S] = n.useState(!1);
            return {
                handleApply: n.useCallback(async () => {
                    if (!(t || h) || N.current) return;
                    let e = (0, b.eT)({ fontId: l, effectId: a, colors: i }, r),
                        n = !0 !== u && e.fontId === j.vl;
                    async function E() {
                        var t;
                        if (
                            (n &&
                                (function () {
                                    let e = x.default.getCurrentUser()?.displayNameStyles ?? null;
                                    !(0, Y.Jy)(e) &&
                                        O.h.dispatch({
                                            type: "HEXAGON_CAMPAIGN_PREVIOUS_PERK_VALUES_SAVED",
                                            previousPerkValues: { displayNameStyles: e },
                                        });
                                })(),
                            h)
                        ) {
                            N.current = !0;
                            try {
                                let t = await (0, M._L)({ displayNameStyles: e });
                                if (t?.ok !== !0) return void g?.();
                            } catch {
                                g?.();
                                return;
                            } finally {
                                N.current = !1;
                            }
                        } else u ? (0, J.EW)(e) : (0, W.p)({ guildId: c, displayNameStyles: e });
                        (p.default.track(V.HAw.DISPLAY_NAME_STYLES_APPLIED, {
                            font_name: d.x[l],
                            effect_name: o.z[a],
                            colors: i,
                            entry_point: s,
                        }),
                            n &&
                                ((t = j.vB.DISPLAY_NAME_STYLE),
                                O.h.dispatch({ type: "HEXAGON_CAMPAIGN_PERK_APPLIED", perk: t })),
                            m?.());
                    }
                    if (!n || (0, Y.Rd)(x.default.getCurrentUser(), j.vB.DISPLAY_NAME_STYLE)) return void (await E());
                    ((N.current = !0), S(!0));
                    let A = !1;
                    try {
                        var I;
                        A = await ((I = j.vB.DISPLAY_NAME_STYLE),
                        (0, Y.Rd)(x.default.getCurrentUser(), I) ? Promise.resolve(!0) : (null == U && (U = K(I)), U));
                    } catch {
                        A = !1;
                    }
                    ((N.current = !1), S(!1), A) ? await E() : f?.();
                }, [t, s, l, a, i, r, m, f, c, u, h, g]),
                isApplying: E,
            };
        })({
            hasChanges: ek,
            entryPoint: er,
            selectedFontId: ed,
            selectedEffectId: eu,
            selectedColors: eD,
            defaultColor: eh.defaultColors[0],
            guildId: v,
            isTryItOut: C,
            onClose: y,
            shouldSaveWithoutPendingChanges: ea,
            onSaveError: tA,
        }),
        eY = n.useCallback(() => (ek ? eF() : void y()), [ek, eF, y]),
        eB = n.useCallback(() => {
            (p.default.track(V.HAw.DISPLAY_NAME_STYLES_CLOSED), y());
        }, [y]),
        eG = n.useCallback(() => {
            let { fontId: e, effectId: t, colors: s } = (0, b.gN)(eO, eR);
            (ec(e),
                em(t),
                (0, b.as)(t) > 1 ? eA((e) => ({ ...e, [t]: s })) : ex((e) => ({ ...e, [t]: s[0] })),
                p.default.track(V.HAw.DISPLAY_NAME_STYLES_SURPRISE_ME));
        }, [eO, eR, ec, em, eA, ex]),
        eU = n.useCallback(
            (e) => {
                ef
                    ? eA((t) => {
                          let s = t[eu];
                          return null != s && (0, u.v)(s, e) ? t : { ...t, [eu]: e };
                      })
                    : ex((t) => (t[eu] === e[0] ? t : { ...t, [eu]: e[0] }));
            },
            [ef, eu, eA, ex],
        );
    return null == R
        ? null
        : (0, l.jsx)(g.f5, {
              value: ej,
              children: (0, l.jsx)(A.l.Provider, {
                  value: tv,
                  children: (0, l.jsxs)(m.EO, {
                      "data-migration-pending": !0,
                      transitionState: s,
                      size: m.rI.LARGE,
                      parentComponent: "DisplayNameStylesModal",
                      className: i()(tI.CR, { [tI.st]: ew }),
                      returnRef: D,
                      children: [
                          (0, l.jsx)(m.s_, { "data-migration-pending": !0, onClick: eB, className: tI.b }),
                          (0, l.jsxs)(m.$m, {
                              "data-migration-pending": !0,
                              className: i()(tI.jE, { [tI.st]: ew }),
                              style: { overflow: "hidden auto" },
                              scrollbarGutter: !1,
                              children: [
                                  (0, l.jsxs)("div", {
                                      className: tI.w1,
                                      children: [
                                          (0, l.jsx)(m.rQ, {
                                              "data-migration-pending": !0,
                                              separator: !1,
                                              className: tI.bV,
                                              children: (0, l.jsx)(f.D, {
                                                  variant: "heading-lg/semibold",
                                                  children: el.intl.string(es.default.ZPMAlX),
                                              }),
                                          }),
                                          (0, l.jsx)(eW, {
                                              selectedFontId: ed,
                                              setSelectedFontId: ec,
                                              displayName: F,
                                              className: tI._,
                                          }),
                                          (0, l.jsx)(eH, {
                                              selectedEffectId: eu,
                                              setSelectedEffectId: em,
                                              className: tI._,
                                          }),
                                          (0, l.jsx)(
                                              eM,
                                              {
                                                  selectedColors: eD,
                                                  setSelectedColors: eU,
                                                  colorOptions: eC[eu],
                                                  onCustomPalettePicked: ey,
                                                  selectedEffectId: eu,
                                                  className: tI._,
                                                  defaultColor: eh.defaultColors[0],
                                              },
                                              eu,
                                          ),
                                      ],
                                  }),
                                  (0, l.jsx)(tm, {
                                      user: R,
                                      guild: B,
                                      displayName: F,
                                      selectedFontId: ed,
                                      selectedEffectId: eu,
                                      selectedColors: eu === o.z.SOLID && (0, u.v)(eD, eh.defaultColors) ? [] : eD,
                                      isPremiumTryItOut: C,
                                  }),
                              ],
                          }),
                          (0, l.jsx)(e1, {
                              onApply: ea ? eY : eF,
                              onSurpriseMe: eG,
                              onClose: y,
                              canApply: ek || ea,
                              analyticsLocations: ej,
                              isPremiumTryItOut: C,
                              banner: eP ? (0, l.jsx)(tS, { owner: w, displayNameStyles: en }) : void 0,
                          }),
                      ],
                  }),
              }),
          });
}
