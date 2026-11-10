a.d(t, { D: () => sd });
var r,
    i = a(477900),
    s = a(858899),
    n = a(361158),
    c = a(188567),
    d = a(796104),
    l = a(719718),
    o = a(527926),
    u = a(617390),
    h = a(582128),
    f = a(503698),
    b = a.n(f),
    _ = a(855986),
    p = a(765178),
    m = a(140735),
    x = a(43990),
    g = a(789645),
    A = a(373955),
    v = a(503235),
    w = a(201779),
    I = a(407905);
let E = [
        w.gr.HOME,
        w.gr.INTRODUCTION,
        w.gr.VOICE_GENERAL,
        w.gr.VOICE_FACE,
        w.gr.MESSAGES_GENERAL,
        w.gr.MESSAGES_OUTFIT,
        w.gr.SERVERS_GENERAL,
        w.gr.SERVERS_HEADWEAR,
        w.gr.EMOJI_GENERAL,
        w.gr.EMOJI_SHOES,
        w.gr.GAMES_GENERAL,
        w.gr.GAMES_WEARABLE,
        w.gr.GAME_TIME_GENERAL,
        w.gr.GAME_TIME_AURA,
        w.gr.FINALIZE_CHARACTER,
        w.gr.SUMMARY,
        w.gr.SHARE,
    ],
    j = [
        w.gr.HOME,
        w.gr.INTRODUCTION,
        w.gr.VOICE_INTRO,
        w.gr.VOICE_STATS,
        w.gr.VOICE_FACE,
        w.gr.MESSAGES_INTRO,
        w.gr.MESSAGES_STATS,
        w.gr.MESSAGES_OUTFIT,
        w.gr.SERVERS_INTRO,
        w.gr.SERVERS_STATS,
        w.gr.TOP_SERVER_STATS,
        w.gr.SERVERS_HEADWEAR,
        w.gr.EMOJI_INTRO,
        w.gr.EMOJI_STATS,
        w.gr.EMOJI_SHOES,
        w.gr.GAMES_INTRO,
        w.gr.GAMES_STATS,
        w.gr.GAMES_WEARABLE,
        w.gr.GAME_TIME_STATS,
        w.gr.GAME_TIME_AURA,
        w.gr.SQUAD_TRANSITION,
        w.gr.SQUAD,
        w.gr.SIDEKICK,
        w.gr.SIDEKICK_LEAVE,
        w.gr.FINALIZE_CHARACTER,
        w.gr.SUMMARY,
        w.gr.SHARE,
    ],
    S = {
        [w.gr.VOICE_INTRO]: (e) => !(0, I.Kr)(e),
        [w.gr.MESSAGES_INTRO]: (e) => !(0, I.nb)(e),
        [w.gr.SERVERS_INTRO]: (e) => !(0, I.jr)(e),
        [w.gr.EMOJI_INTRO]: (e) => !(0, I.y7)(e),
        [w.gr.GAMES_INTRO]: (e) => !(0, I.IH)(e),
    },
    N = {
        [w.gr.TOP_SERVER_STATS]: I.jr,
        [w.gr.SQUAD_TRANSITION]: I.$p,
        [w.gr.SQUAD]: I.$p,
        [w.gr.SIDEKICK]: I.oL,
        [w.gr.SIDEKICK_LEAVE]: I.oL,
    };
function C(e) {
    let { flow: t, stats: a } = e;
    return (t === w.Np.SHARED_DATA ? j : E).filter((e) => {
        let t = S[e];
        if (null != t) return null != a && t(a);
        let r = N[e];
        return null == r || void 0 === a || r(a);
    });
}
function T(e) {
    let { flow: t, stats: a, currentRoute: r, direction: i } = e,
        s = C({ flow: t, stats: a }),
        n = s.indexOf(r);
    return -1 === n ? w.gr.INTRODUCTION : (s[n + i] ?? null);
}
a(321073);
let R =
        "https://cdn.discordapp.com/assets/content/05e7df987cb6150a2d6cbfe4aca2cdacfb4188166f8ff9bbde7421afcd85b382.mp3",
    O =
        "https://cdn.discordapp.com/assets/content/7b28adce16a979de5d4f6b8331dfedca2806d1b0b15f694b7a196db7f624918c.mp3",
    y =
        "https://cdn.discordapp.com/assets/content/aada5b40828140b41a56df82e81783cd43fd60e30ac1eb3c9f93a087b95dcf03.mp3",
    M =
        "https://cdn.discordapp.com/assets/content/04536b9e5b26d0b6e85116ce546b7d5ba97da31e7de7a1e02da262bcd5249bb0.mp3",
    k =
        "https://cdn.discordapp.com/assets/content/82d771ff521a99ea8e26239d2f2e48ae847e39575bc5bce396739b430b8a6fda.mp3",
    D = [R, O, y, M, k];
function L(e) {
    return e !== w.gr.HOME && null == (0, w.UG)(e).statsScreen;
}
function P(e) {
    return null != (0, w.UG)(e).statsScreen;
}
var U = a(127639),
    G = a(287809),
    H = a(474090),
    F = a(817379);
function K() {
    return (0, _.yK)([l.A, G.default], () => {
        let { selectedCharacterTraits: e, stats: t, character: a } = l.A,
            r = (0, H.ki)(G.default.getCurrentUser());
        return Object.values(U.V).filter((i) => {
            let s = e[i];
            return null != s && (0, F.tS)(i, s, { stats: t, hasNitro: r, savedCharacter: a });
        });
    });
}
var B = a(964486),
    V = a(920495),
    z = a(532294),
    W = a(739187);
function Y(e) {
    let t = (0, v.Cz)(e);
    null != t && ((0, W.V)(), (0, s.P0)({ text: t, variant: "critical" }));
}
var X = a(299619),
    q = a(775602),
    Z = a(818348),
    Q = a(11435);
function J(e) {
    let { isVisible: t } = e,
        a = h.useRef(null),
        r = (0, _.bG)([q.Ay], () => q.Ay.useReducedMotion),
        s = t && !r;
    return (
        h.useEffect(() => {
            let e = a.current;
            null != e && (s ? e.play().catch(Z.tE) : e.pause());
        }, [s]),
        h.useEffect(() => {
            r && null != a.current && (a.current.currentTime = 1);
        }, [r]),
        (0, i.jsxs)("div", {
            className: b()(Q.Tp, { [Q.R]: !t }),
            "aria-hidden": !0,
            children: [
                (0, i.jsx)(X.A, {
                    ref: a,
                    className: Q.Ki,
                    src: "https://cdn.discordapp.com/assets/content/a7a4300630ed2733eca4a8bb584c3086a66063d78e2f829faf465d96ff388a93.webm",
                    loop: !0,
                    muted: !0,
                    playsInline: !0,
                }),
                (0, i.jsx)("div", { className: Q.D7 }),
            ],
        })
    );
}
var $ = a(885619);
function ee(e) {
    let {
        ref: t,
        onMouseEnter: a,
        onMouseLeave: r,
        onFocus: s,
        onBlur: n,
        onContextMenu: c,
        "aria-label": d,
        "aria-pressed": l,
        "aria-disabled": o,
        "aria-describedby": u,
        children: h,
        onClick: f,
        onPointerDown: _,
        onKeyDown: p,
        size: m,
        className: x,
    } = e;
    return (0, i.jsx)("button", {
        ref: t,
        onMouseEnter: a,
        onMouseLeave: r,
        onFocus: s,
        onBlur: n,
        onContextMenu: c,
        type: "button",
        className: b()($.button, "custom" !== m && $[m], x),
        onClick: f,
        onPointerDown: _,
        onKeyDown: p,
        "aria-label": d,
        "aria-pressed": l,
        "aria-disabled": o,
        "aria-describedby": u,
        children: h,
    });
}
function et(e) {
    let { className: t, ...a } = e;
    return (0, i.jsx)(ee, { ...a, className: b()($.shadow, t) });
}
function ea(e) {
    let { animatedSrc: t, staticSrc: a, className: r } = e,
        s = (0, _.bG)([q.Ay], () => q.Ay.useReducedMotion);
    return (0, i.jsx)("img", { src: s ? a : t, alt: "", className: r });
}
var er = a(740281),
    ei = a(766089),
    es = a(767988);
let en = { animatedSrc: ei.A, staticSrc: es.A };
function ec(e) {
    let { activeRoute: t } = e,
        { animatedSrc: a, staticSrc: r } = (0, _.cf)(
            [l.A],
            () => {
                switch (t) {
                    case w.gr.SUMMARY:
                    case w.gr.SHARE:
                        let e = (0, A.o)(l.A.character),
                            { clydeLogoImage: a, clydeLogoStaticImage: r } = (0, A.j)(e);
                        return { animatedSrc: a, staticSrc: r };
                    default:
                        return en;
                }
            },
            [t],
        );
    return (0, i.jsx)(ea, { animatedSrc: a, staticSrc: r, className: er.w });
}
var ed = a(756408);
function el() {
    let e = h.useRef(null);
    return (
        h.useLayoutEffect(() => {
            let t = e.current;
            null != t && ((t.tabIndex = -1), t.focus({ preventScroll: !0 }));
        }, []),
        e
    );
}
var eo = a(834730),
    eu = a(534514),
    eh = a(504736);
function ef(e) {
    let { children: t, className: a, ...r } = e;
    return (0, i.jsx)(eo.E, { ...r, className: b()(eh.Q, a), color: "none", children: t });
}
function eb(e) {
    let { children: t, className: a, ...r } = e,
        s = el();
    return (0, i.jsx)(eu.D, { ...r, ref: s, className: b()(eh.Q, a), color: "none", children: t });
}
var e_ = a(271427);
function ep(e) {
    let { children: t, className: a, style: r } = e;
    return (0, i.jsx)(ef, { tag: "span", variant: "mono-md/bold", className: b()(e_.T, a), style: r, children: t });
}
var em = a(852717),
    ex = a(792996),
    eg = a(383931);
function eA(e) {
    let { percent: t } = e;
    return (0, i.jsx)(ep, {
        className: eg.t,
        children: ex.intl.formatToPlainString(em.default.fOGKA4, { percent: t }),
    });
}
var ev = a(646692);
function ew(e) {
    let { icon: t, value: a, topPercent: r, children: s } = e,
        n = el(),
        c =
            null != r
                ? ex.intl.formatToPlainString(em.default.USo6cU, { value: a, label: s, percent: r })
                : ex.intl.formatToPlainString(em.default["+CCx/D"], { value: a, label: s });
    return (0, i.jsxs)("div", {
        ref: n,
        role: "heading",
        "aria-level": 2,
        children: [
            (0, i.jsxs)("div", {
                className: ev.dJ,
                "aria-hidden": !0,
                children: [
                    null != r && (0, i.jsx)(eA, { percent: r }),
                    (0, i.jsxs)("div", {
                        className: ev.p,
                        children: [
                            (0, i.jsx)(ef, {
                                variant: "heading-xxl/medium",
                                className: ev.Uq,
                                children: a.toLocaleString(ex.intl.currentLocale),
                            }),
                            (0, i.jsxs)("div", {
                                className: ev.Pf,
                                children: [
                                    (0, i.jsx)(t, { size: "xs", color: "currentColor" }),
                                    (0, i.jsx)(ef, { variant: "heading-xs/semibold", className: ev.QK, children: s }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(m.A, { children: c }),
        ],
    });
}
var eI = a(303453);
let eE = {
    [v.v7.FACE]: em.default.q8GA6h,
    [v.v7.OUTFIT]: em.default["xGh/fq"],
    [v.v7.OUTFIT_COLOR]: em.default.IgiEDV,
    [v.v7.HAT]: em.default.QqeBEO,
    [v.v7.WEARABLE]: em.default.l57q3i,
    [v.v7.AURA]: em.default["fYp+yq"],
    [v.v7.SHOES]: em.default.BaI4wD,
    [v.v7.BASE]: em.default.SMXZXX,
};
function ej(e) {
    let { customizationOption: t, earnedCount: a, totalCount: r } = e;
    return (0, i.jsx)(eo.E, {
        variant: "body-md/medium",
        color: "text-subtle",
        className: eI.k,
        children: ex.intl.format(eE[t], {
            earnedCount: a,
            totalCount: r,
            countHook: (e, t) =>
                (0, i.jsx)(ef, { tag: "span", variant: "mono-md/bold", className: eI.U, children: e }, t),
        }),
    });
}
let eS =
    "https://cdn.discordapp.com/assets/content/48cbcb920dfd15e45e7fe3f297ede63a7891cb0eee9fc44f27053d05d2c6b5ca.mp3";
var eN = a(11044),
    eC = a(461872),
    eT = a(435558);
let eR = (0, a(196765).v)(() => ({ hoveredOption: void 0 })),
    eO = (0, eT.debounce)((e) => eR.setState({ hoveredOption: e }), 250);
function ey(e) {
    let { hoveredOption: t, isDelayed: a = !1 } = e;
    a ? eO(t) : (eO.cancel(), eR.setState({ hoveredOption: t }));
}
function eM(e) {
    let { isMuted: t, volume: a } = (0, _.cf)([l.A], () => ({ isMuted: l.A.isMuted, volume: l.A.volume })),
        r = h.useRef(null);
    return (
        h.useEffect(() => {
            r.current = new Audio(e);
        }, [e]),
        h.useEffect(() => {
            null != r.current && ((r.current.muted = t), (r.current.volume = a));
        }, [t, a]),
        h.useCallback(() => {
            let e = r.current;
            t || 0 === a || null == e || ((e.volume = a), (e.currentTime = 0), e.play());
        }, [t, a])
    );
}
var ek = a(28863),
    eD = a(793574),
    eL = a(778705),
    eP = a(218546),
    eU = a(647093);
let eG = `linear-gradient(to right, ${z.uz.join(", ")})`;
function eH(e) {
    let { rarity: t } = e,
        a = h.useMemo(() => ({ "--custom-checkpoint-rarity-background": t === eP.K.NITRO ? eG : z.Zy[t] }), [t]);
    return (0, i.jsx)(ep, { className: eU.q, style: a, children: ex.intl.string(z.iG[t]) });
}
var eF = a(829870);
function eK(e) {
    let { asset: t, hideRarity: a } = e,
        r =
            t.status === eC.eP.NITRO_LOCKED
                ? ex.intl.format(em.default.E6AfCb, {
                      subscribeHook: (e, t) =>
                          (0, i.jsx)(
                              ek.Anchor,
                              {
                                  onClick: () =>
                                      (0, eL.A)({ analyticsLocations: [eD.A.CHECKPOINT, eD.A.CHECKPOINT_TRAIT] }),
                                  children: e,
                              },
                              t,
                          ),
                  })
                : (0, v.Oq)(t);
    return (0, i.jsxs)("div", {
        className: eF.z,
        children: [
            (0, i.jsxs)("div", {
                className: eF.D,
                children: [
                    (0, i.jsx)(eo.E, {
                        tag: "div",
                        variant: "heading-sm/semibold",
                        color: "text-strong",
                        children: t.getName(),
                    }),
                    !a && null != t.rarity && (0, i.jsx)(eH, { rarity: t.rarity }),
                ],
            }),
            null != r && (0, i.jsx)(eo.E, { variant: "body-md/medium", color: "text-subtle", children: r }),
        ],
    });
}
var eB = a(646514),
    eV = a(403581),
    ez = a(835517),
    eW = a(559265);
function eY(e) {
    let { rarity: t } = e,
        a = h.useMemo(() => ({ "--custom-checkpoint-rarity-color": z.Zy[t] }), [t]);
    return t === eP.K.NITRO
        ? (0, i.jsx)(eV.NitroWheelIcon, { size: "custom", color: eB.A.colors.ICON_SUBTLE, className: eW.d7 })
        : (0, i.jsx)("span", { className: eW.oG, style: a });
}
function eX(e) {
    let {
            traitOption: t,
            groupName: a,
            isSelected: r,
            hideRarity: s,
            onSelectOption: n,
            onHoverOption: c,
            disabled: d = !1,
        } = e,
        { trait: l, optionId: o, rarity: u, asset: f, status: _ } = t,
        p = _ === eC.eP.LOCKED,
        x = h.useMemo(() => {
            if (null == f) return null;
            let e = Math.round(80 * (0, ez.A)());
            return `${f}?width=${e}&height=${e}`;
        }, [f]);
    return (0, i.jsxs)("label", {
        className: b()(eW.uK, { [eW.wH]: r, [eW.dv]: (0, v.C5)(t), [eW.xt]: p, [eW.Ns]: _ === eC.eP.NITRO_LOCKED }),
        onMouseEnter: () => c(t),
        onFocus: () => c(t),
        children: [
            (0, i.jsx)(m.A, {
                children: (0, i.jsx)("input", {
                    type: "radio",
                    name: a,
                    checked: r,
                    disabled: d,
                    onChange: () => n(l, o),
                    "aria-label": (0, v.v2)(t, s),
                }),
            }),
            null != x && (0, i.jsx)("img", { src: x, alt: "", draggable: !1, className: eW.Sl }),
            !s && null != u && (0, i.jsx)(eY, { rarity: u }),
        ],
    });
}
var eq = a(509063),
    eZ = a(974862),
    eQ = a(142389),
    eJ = a(211235),
    e$ = a(230532),
    e0 = a(110601),
    e1 = a(917970);
function e5(e) {
    let {
            customizationOption: t,
            traitOptions: a,
            selectedOption: r,
            onSelectOption: s,
            disabled: n = !1,
            children: c,
        } = e,
        d = h.useId(),
        l = !(0, v.Ux)(t),
        o = eR((e) => e.hoveredOption ?? r),
        u = eM(
            "https://cdn.discordapp.com/assets/content/fc5527a1a369d8982c6e6fa588f732c7c5364ff00ddd0cf51646f05ad423af36.mp3",
        ),
        f = eM(eS);
    ((0, B.Ay)(() => {
        [eZ, e1, eQ, eJ, e0, e$].forEach((e) => (0, eN.N)(e));
    }),
        h.useEffect(() => () => ey({ hoveredOption: void 0 }), [t]));
    let b = h.useCallback(
            (e, t) => {
                (ey({ hoveredOption: void 0 }), f(), s(e, t));
            },
            [s, f],
        ),
        _ = h.useCallback(
            (e) => {
                (u(), ey({ hoveredOption: e.optionId !== r?.optionId ? e : void 0, isDelayed: !0 }));
            },
            [u, r],
        );
    return (0, i.jsxs)("div", {
        className: eq.Nz,
        children: [
            (0, i.jsxs)("div", {
                className: eq.fF,
                children: [
                    c,
                    (0, i.jsx)("div", {
                        onMouseLeave: () => ey({ hoveredOption: void 0 }),
                        children: (0, i.jsx)("div", {
                            role: "radiogroup",
                            "aria-label": (0, v.cq)(t),
                            className: eq.Vg,
                            children: a.map((e) =>
                                (0, i.jsx)(
                                    eX,
                                    {
                                        traitOption: e,
                                        groupName: d,
                                        isSelected: e.optionId === r?.optionId,
                                        hideRarity: l,
                                        onSelectOption: b,
                                        onHoverOption: _,
                                        disabled: n || e.status === eC.eP.LOCKED,
                                    },
                                    e.optionId,
                                ),
                            ),
                        }),
                    }),
                ],
            }),
            null != o && (0, i.jsx)(eK, { asset: o, hideRarity: l }),
        ],
    });
}
var e6 = a(51104),
    e2 = a(67915);
function e3(e, t) {
    return e === v.v7.OUTFIT ? (null != t ? (0, F.FA)(t) : void 0) : t;
}
function e4(e) {
    let { customizationOption: t } = e,
        {
            optionIds: a,
            selectedOptionId: r,
            savedOptionId: i,
            onSelectOption: s,
        } = (function (e) {
            let { customizationOption: t, onSelectOption: a } = e,
                r = v.hw[t],
                { selectedOptionId: i, savedOptionId: s } = (0, _.cf)([l.A], () => ({
                    selectedOptionId: e3(t, l.A.selectedCharacterTraits[r]),
                    savedOptionId: e3(t, l.A.character?.[r]),
                })),
                n = h.useCallback(
                    (e, t) => {
                        t !== i && ((0, u.dw)(e, t), a(e, t));
                    },
                    [a, i],
                );
            return {
                optionIds: (function (e, t) {
                    switch (e) {
                        case v.v7.OUTFIT:
                            return F.ps;
                        case v.v7.OUTFIT_COLOR:
                            return (0, F.wD)(t ?? e2.r.NONE);
                        default:
                            return;
                    }
                })(t, i),
                selectedOptionId: i,
                savedOptionId: s,
                onSelectOption: n,
            };
        })({ customizationOption: t, onSelectOption: d.IB }),
        {
            traitOptions: n,
            availableTraitOptions: c,
            totalCount: o,
            earnedCount: f,
        } = (function (e) {
            let { customizationOption: t, savedOptionId: a, rarityOrder: r, optionIds: i } = e,
                s = (0, _.bG)([l.A], () => l.A.stats),
                n = (0, _.bG)([G.default], () => (0, H.ki)(G.default.getCurrentUser())),
                c = h.useMemo(() => (0, v.p8)(r), [r]);
            return h.useMemo(() => {
                let e = v.hw[t],
                    r = t === v.v7.OUTFIT_COLOR ? e6.x : e6.$[e],
                    d = (0, F.mf)(e, s),
                    l = [],
                    o = 0,
                    u = 0;
                for (let t of i ?? F.Rk[e]) {
                    let i = (0, F.$C)(e, t),
                        s = a === t,
                        c = eC.eP.UNLOCKED;
                    null == i || d.has(i) || s
                        ? i !== eP.K.NITRO || n || s || (c = eC.eP.NITRO_LOCKED)
                        : (c = eC.eP.LOCKED);
                    let h = c === eC.eP.UNLOCKED && (i !== eP.K.NITRO || n);
                    (null != i && o++,
                        null != i && h && u++,
                        l.push({
                            trait: e,
                            optionId: t,
                            asset: F.qM[e][t]?.thumbnail,
                            rarity: i,
                            status: c,
                            getName: () => {
                                let e = r[t];
                                return null != e ? ex.intl.string(e) : "";
                            },
                        }));
                }
                l.sort(c);
                let h = l.filter((e) => {
                    let { status: t } = e;
                    return t !== eC.eP.LOCKED;
                });
                return { traitOptions: l, availableTraitOptions: h, totalCount: o, earnedCount: u };
            }, [t, n, i, c, a, s]);
        })({ customizationOption: t, savedOptionId: i, rarityOrder: z.FG, optionIds: a }),
        b = h.useMemo(
            () =>
                c.find((e) => {
                    let { optionId: t } = e;
                    return t === r;
                }) ?? c[0],
            [r, c],
        );
    return (
        !(function (e) {
            let { availableTraitOptions: t, selectedOptionId: a, onSelectOption: r, isPaused: i = !1 } = e,
                s = t[0],
                n = t.some((e) => e.optionId === a);
            h.useEffect(() => {
                i || null == s || n || r(s.trait, s.optionId);
            }, [s, n, r, i]);
        })({ availableTraitOptions: c, selectedOptionId: r, onSelectOption: d.IB }),
        { traitOptions: n, selectedOption: b, totalCount: o, earnedCount: f, onSelectOption: s }
    );
}
function e8(e) {
    let { customizationOption: t } = e,
        {
            traitOptions: a,
            selectedOption: r,
            totalCount: s,
            earnedCount: n,
            onSelectOption: c,
        } = e4({ customizationOption: t });
    return (0, i.jsx)(e5, {
        customizationOption: t,
        traitOptions: a,
        selectedOption: r,
        onSelectOption: c,
        children: (0, i.jsx)(ej, { customizationOption: t, earnedCount: n, totalCount: s }),
    });
}
var e9 = a(71678);
function e7(e) {
    let { children: t, className: a } = e;
    return (0, i.jsx)("div", { className: b()(e9.n, a), children: t });
}
function te() {
    let e = (0, _.bG)([l.A], () => l.A.stats?.emojis);
    return (0, i.jsxs)(e7, {
        children: [
            (0, i.jsx)(ew, {
                icon: ed.EmojiSlightlySmilingFaceIcon,
                value: Math.round(e?.numEmojisSent ?? 0),
                topPercent: (0, I.bD)(e?.numEmojisSentPercentile),
                children: ex.intl.string(em.default.ZTDCIv),
            }),
            (0, i.jsx)(e8, { customizationOption: v.v7.SHOES }),
        ],
    });
}
var tt = a(265872),
    ta = a(320448);
let tr = [v.v7.BASE, v.v7.OUTFIT_COLOR];
var ti = a(315710),
    ts = a(444927);
let tn = {
        "--custom-checkpoint-game-art-width": "clamp(135px, 17.5vh, 180px)",
        "--custom-checkpoint-game-full-art-width": 180,
        "--custom-checkpoint-game-full-shell-width": 196,
        "--custom-checkpoint-game-full-shell-offset": 2,
    },
    tc = {
        "--custom-checkpoint-game-art-width": "clamp(165px, 21.5vh, 220px)",
        "--custom-checkpoint-game-full-art-width": 220,
        "--custom-checkpoint-game-full-shell-width": 235.5,
        "--custom-checkpoint-game-full-shell-offset": 2,
    },
    td = {
        "--custom-checkpoint-primary": z.Kr,
        "--custom-checkpoint-dark-cyan": z.ow,
        "--custom-checkpoint-button-border": z.ow,
        "--custom-checkpoint-button-shadow": z.zj,
        "--custom-checkpoint-white": z.Ve,
        "--custom-checkpoint-guild-card-background": z.LM,
        "--custom-checkpoint-background-gradient-start": z.bI,
    };
var tl = a(580814);
function to(e) {
    let { options: t, activeCustomizationOption: a, returnRef: r, onSelectOption: s, onClose: n } = e,
        c = h.useRef(null),
        d = h.useRef([]),
        l = (0, ts.A)(() => Math.max(t.indexOf(a), 0));
    function o(e) {
        d.current[(e + t.length) % t.length]?.focus();
    }
    return (
        (0, ti.tj)(c, { returnRef: r }),
        h.useEffect(() => {
            d.current[l]?.focus();
        }, [l]),
        (0, i.jsx)("div", {
            ref: c,
            role: "menu",
            tabIndex: -1,
            "aria-label": ex.intl.string(em.default.Zl5vPW),
            className: tl.M,
            style: td,
            onKeyDown: function (e) {
                e.stopPropagation();
                let a = d.current.indexOf(e.target);
                switch (e.key) {
                    case "ArrowDown":
                        (e.preventDefault(), o(a + 1));
                        break;
                    case "ArrowUp":
                        (e.preventDefault(), o(a - 1));
                        break;
                    case "Home":
                        (e.preventDefault(), o(0));
                        break;
                    case "End":
                        (e.preventDefault(), o(t.length - 1));
                        break;
                    case "Escape":
                    case "Tab":
                        (e.preventDefault(), n());
                }
            },
            children: t.map((e, t) =>
                (0, i.jsx)(
                    "button",
                    {
                        ref: (e) => {
                            d.current[t] = e;
                        },
                        type: "button",
                        role: "menuitemradio",
                        "aria-checked": e === a,
                        tabIndex: -1,
                        className: tl.A,
                        onClick: () => s(e),
                        onMouseEnter: (e) => e.currentTarget.focus(),
                        children: (0, i.jsx)(eo.E, {
                            tag: "span",
                            variant: "heading-sm/semibold",
                            color: "none",
                            children: (0, v.cq)(e),
                        }),
                    },
                    e,
                ),
            ),
        })
    );
}
var tu = a(769909);
let th = [v.v7.AURA, v.v7.WEARABLE, v.v7.SHOES, v.v7.HAT, v.v7.OUTFIT, v.v7.FACE];
function tf(e) {
    let {
            activeCustomizationOption: t,
            onSelectOption: a,
            blockedTrait: r,
            blockedTraitDescriptionId: s,
            disabled: n = !1,
        } = e,
        c = h.useRef(null),
        d = th.includes(t);
    return (0, i.jsx)(tt.Y, {
        targetElementRef: c,
        position: "right",
        align: "top",
        spacing: 8,
        renderPopout: (e) => {
            let { closePopout: r } = e;
            return (0, i.jsx)(to, {
                options: th,
                activeCustomizationOption: t,
                returnRef: c,
                onSelectOption: (e) => {
                    (a(e), r());
                },
                onClose: r,
            });
        },
        children: (e, a) => {
            let { isShown: l } = a;
            return (0, i.jsxs)("button", {
                ...e,
                ref: c,
                type: "button",
                disabled: n,
                "aria-disabled": null != r,
                "aria-describedby": s,
                "aria-haspopup": "menu",
                onClick: function (t) {
                    null != r ? Y(r) : e.onClick(t);
                },
                onKeyDown: (t) => {
                    (e.onKeyDown(t), ("ArrowLeft" === t.key || "ArrowRight" === t.key) && t.stopPropagation());
                },
                className: b()(tu.Mf, tu.OS, { [tu.vu]: d || l }),
                children: [
                    (0, i.jsx)(eo.E, {
                        tag: "span",
                        variant: "heading-sm/semibold",
                        color: "none",
                        children: d ? (0, v.cq)(t) : ex.intl.string(em.default["iXpQc+"]),
                    }),
                    (0, i.jsx)(ta.ChevronSmallRightIcon, { size: "refresh_sm", color: "currentColor" }),
                ],
            });
        },
    });
}
function tb(e) {
    let t,
        a,
        { activeCustomizationOption: r, onSelectOption: s, blockedTrait: n, disabled: c = !1 } = e,
        d = h.useId(),
        o =
            ((t = (0, _.yK)([l.A], () => {
                let e = l.A.selectedCharacterTraits[U.V.OUTFIT];
                return null == e || (0, F.nb)(U.V.OUTFIT, e) ? tr.filter((e) => e !== v.v7.OUTFIT_COLOR) : tr;
            })),
            (a = r === v.v7.OUTFIT_COLOR && !t.includes(v.v7.OUTFIT_COLOR)),
            h.useEffect(() => {
                a && s(v.v7.BASE);
            }, [a, s]),
            t),
        u = h.useId(),
        f = null != n ? u : void 0;
    return (0, i.jsxs)("div", {
        className: tu.vR,
        children: [
            (0, i.jsx)("div", {
                role: "radiogroup",
                "aria-label": ex.intl.string(em.default.Zl5vPW),
                className: tu.vR,
                children: o.map((e) => {
                    let t = e === r,
                        a = (0, v.cq)(e);
                    return (0, i.jsxs)(
                        "label",
                        {
                            className: b()(tu.Mf, { [tu.vu]: t }),
                            children: [
                                (0, i.jsx)(m.A, {
                                    children: (0, i.jsx)("input", {
                                        type: "radio",
                                        name: d,
                                        checked: t,
                                        disabled: c,
                                        "aria-label": a,
                                        "aria-disabled": null != n,
                                        "aria-describedby": f,
                                        onChange: () => {
                                            null != n ? Y(n) : s(e);
                                        },
                                    }),
                                }),
                                (0, i.jsx)(eo.E, {
                                    tag: "span",
                                    variant: "heading-sm/semibold",
                                    color: "none",
                                    "aria-hidden": !0,
                                    children: a,
                                }),
                            ],
                        },
                        e,
                    );
                }),
            }),
            (0, i.jsx)(tf, {
                activeCustomizationOption: r,
                onSelectOption: s,
                blockedTrait: n,
                blockedTraitDescriptionId: f,
                disabled: c,
            }),
            null != n && (0, i.jsx)(m.A, { id: u, children: (0, v.Cz)(n) }),
        ],
    });
}
var t_ = a(195464);
function tp() {
    let [e, t] = h.useState(v.v7.BASE),
        { traitOptions: a, selectedOption: r, onSelectOption: s } = e4({ customizationOption: e }),
        n = K().find((t) => t === v.hw[e]),
        c = (0, _.bG)([l.A], () => l.A.isSaving),
        d = el();
    return (0, i.jsxs)(e7, {
        className: t_.n,
        children: [
            (0, i.jsx)(eu.D, {
                ref: d,
                variant: "heading-xl/medium",
                color: "none",
                className: t_.D,
                children: ex.intl.string(em.default["q2nj/Z"]),
            }),
            (0, i.jsx)(tb, { activeCustomizationOption: e, onSelectOption: t, blockedTrait: n, disabled: c }),
            (0, i.jsx)(e5, {
                customizationOption: e,
                traitOptions: a,
                selectedOption: r,
                onSelectOption: s,
                disabled: c,
            }),
        ],
    });
}
var tm = a(81466);
function tx() {
    let e = (0, _.bG)([l.A], () => l.A.stats?.games);
    return (0, i.jsxs)(e7, {
        children: [
            (0, i.jsx)(ew, {
                icon: tm.CalendarIcon,
                value: Math.round(e?.totalDaysPlayed ?? 0),
                topPercent: (0, I.bD)(e?.totalDaysPlayedPercentile),
                children: ex.intl.string(em.default["4N5p4D"]),
            }),
            (0, i.jsx)(e8, { customizationOption: v.v7.AURA }),
        ],
    });
}
var tg = a(687966);
function tA() {
    let e = (0, _.bG)([l.A], () => l.A.stats?.games);
    return (0, i.jsxs)(e7, {
        children: [
            (0, i.jsx)(ew, {
                icon: tg.GameControllerIcon,
                value: Math.round(e?.totalGamesPlayed ?? 0),
                topPercent: (0, I.bD)(e?.totalGamesPlayedPercentile),
                children: ex.intl.string(em.default.HM2fjf),
            }),
            (0, i.jsx)(e8, { customizationOption: v.v7.WEARABLE }),
        ],
    });
}
var tv = a(534890),
    tw = a(350363);
function tI() {
    let e = (0, _.bG)([l.A], () => l.A.stats?.messages);
    return (0, i.jsxs)(e7, {
        children: [
            (0, i.jsx)(ew, {
                icon: tv.ChatIcon,
                value: Math.round(e?.numMessagesSent ?? 0),
                topPercent: (0, I.bD)(e?.numMessagesSentPercentile),
                children: ex.intl.string(tw.default.wWKySP),
            }),
            (0, i.jsx)(e8, { customizationOption: v.v7.OUTFIT }),
        ],
    });
}
var tE = a(664121);
function tj() {
    let e = (0, _.bG)([l.A], () => l.A.stats?.guilds?.guilds[0]);
    return (0, i.jsxs)(e7, {
        children: [
            (0, i.jsx)(ew, {
                icon: tE.ServerIcon,
                value: Math.round(e?.numDaysInteracted ?? 0),
                topPercent: (0, I.bD)(e?.numDaysInteractedPercentile),
                children: ex.intl.string(em.default["M+a+t1"]),
            }),
            (0, i.jsx)(e8, { customizationOption: v.v7.HAT }),
        ],
    });
}
var tS = a(831544);
function tN() {
    let e = (0, _.bG)([l.A], () => l.A.stats?.voice),
        t = Math.round(e?.totalVoiceMinutes ?? 0);
    return (0, i.jsxs)(e7, {
        children: [
            (0, i.jsx)(ew, {
                icon: tS.MicrophoneIcon,
                value: t,
                topPercent: (0, I.bD)(e?.totalVoiceMinutesPercentile),
                children: ex.intl.string(em.default["3/T12E"]),
            }),
            (0, i.jsx)(e8, { customizationOption: v.v7.FACE }),
        ],
    });
}
function tC(e) {
    let { route: t } = e;
    switch (t) {
        case w.gr.VOICE_FACE:
            return (0, i.jsx)(tN, {});
        case w.gr.MESSAGES_OUTFIT:
            return (0, i.jsx)(tI, {});
        case w.gr.SERVERS_HEADWEAR:
            return (0, i.jsx)(tj, {});
        case w.gr.EMOJI_SHOES:
            return (0, i.jsx)(te, {});
        case w.gr.GAMES_WEARABLE:
            return (0, i.jsx)(tA, {});
        case w.gr.GAME_TIME_AURA:
            return (0, i.jsx)(tx, {});
        case w.gr.FINALIZE_CHARACTER:
            return (0, i.jsx)(tp, {});
        default:
            return null;
    }
}
var tT = a(358618),
    tR = a(983851),
    tO = a(793920),
    ty = a(893007),
    tM = a(738964);
function tk(e) {
    return `${Math.round(e)}%`;
}
function tD() {
    let { volume: e, isMuted: t } = (0, _.cf)([l.A], () => ({ volume: l.A.volume, isMuted: l.A.isMuted })),
        a = h.useRef(null),
        r = h.useRef(null),
        [s, n] = h.useState(!1),
        [c, o] = h.useState(!1),
        [u, f] = h.useState(!1),
        [b, p] = h.useState(!1),
        m = h.useRef(null),
        x = h.useRef(!1),
        g = t ? 0 : Math.round(100 * e),
        A = !b && (s || c || u),
        v = 0 === g ? tT.VoiceXIcon : g > 50 ? tR.VoiceNormalIcon : tO.VoiceLowIcon;
    (h.useLayoutEffect(() => {
        null != r.current && (r.current.volume = e);
    }, [e]),
        (0, B.l0)(() => {
            null != m.current && clearTimeout(m.current);
        }));
    let w = h.useCallback((e) => {
            ((0, d.ls)(e / 100),
                f(!0),
                null != m.current && clearTimeout(m.current),
                (m.current = setTimeout(() => f(!1), 1e3)));
        }, []),
        I = h.useCallback(() => {
            (n(!0), p(!1));
        }, []),
        E = h.useCallback(() => n(!1), []),
        j = h.useCallback((e) => {
            o(!x.current && e.target.matches(":focus-visible"));
        }, []),
        S = h.useCallback(() => {
            ((x.current = !0), o(!1));
        }, []),
        N = h.useCallback(() => {
            ((x.current = !1), o(!0));
        }, []),
        C = h.useCallback(() => {
            n(a.current?.matches(":hover") ?? !1);
        }, []),
        T = h.useCallback((e) => {
            e.currentTarget.contains(e.relatedTarget) || ((x.current = !1), o(!1), p(!1));
        }, []),
        R = h.useCallback(
            (e) => {
                "Escape" === e.key &&
                    A &&
                    (e.preventDefault(),
                    e.stopPropagation(),
                    null != m.current && clearTimeout(m.current),
                    f(!1),
                    p(!0),
                    a.current?.querySelector("button")?.focus());
            },
            [A],
        );
    return (0, i.jsxs)("div", {
        ref: a,
        className: tM.kL,
        onMouseEnter: I,
        onMouseLeave: E,
        onFocus: j,
        onPointerDownCapture: S,
        onBlur: T,
        onKeyDownCapture: N,
        onKeyDown: R,
        children: [
            (0, i.jsx)(ee, {
                size: "sm",
                className: A ? tM.Gg : void 0,
                "aria-label": ex.intl.string(t ? tw.default.GN0uv6 : tw.default.pjF33X),
                onClick: d.K8,
                children: (0, i.jsx)(v, { size: "xs", color: "currentColor" }),
            }),
            A
                ? (0, i.jsx)("div", {
                      className: tM.xJ,
                      children: (0, i.jsx)(ty.A, {
                          value: g,
                          minValue: 0,
                          maxValue: 100,
                          onChange: w,
                          onChangeEnd: C,
                          formatValue: tk,
                          "aria-label": ex.intl.string(ex.t.xPHVBs),
                      }),
                  })
                : null,
            (0, i.jsx)("audio", {
                ref: r,
                autoPlay: !0,
                loop: !0,
                muted: t,
                children: (0, i.jsx)("source", {
                    src: "https://cdn.discordapp.com/assets/content/d271231f4934992caed169c11586a1da060d37b5fd8804b56666b547f03836bd.mp3",
                }),
            }),
        ],
    });
}
let tL =
        "https://cdn.discordapp.com/assets/content/914f6f5e36c680d00944ba2e6278b45f8b1da722692e101b5986cf7be56c4979.mp3",
    tP =
        "https://cdn.discordapp.com/assets/content/d1dfc8280cfbd578f18728598db893d807d9ece6b511389848b7308c399f07a0.mp3";
var tU = a(477155),
    tG = a(866665),
    tH = a(417270),
    tF = a(935286),
    tK = a(405433),
    tB = a(289873),
    tV = a(621466);
function tz(e, t) {
    let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    h.useEffect(() => {
        if (!a) return (window.addEventListener("keydown", r), () => window.removeEventListener("keydown", r));
        function r(a) {
            (0, tV.vq)(a.target, HTMLTextAreaElement) ||
                (0, tV.vq)(a.target, HTMLInputElement) ||
                (a.key === e && t(a));
        }
    }, [e, t, a]);
}
var tW = a(652215),
    tY = a(650583);
function tX(e) {
    let { source: t, onClick: a, disabled: r = !1 } = e,
        i = eM(t),
        s = h.useRef(!1);
    function n() {
        r || i();
    }
    return {
        playSound: n,
        onPointerDown: function (e) {
            e.button === tW.hE4.PRIMARY && ((s.current = !0), n());
        },
        onKeyDown: function (e) {
            (e.key === tY.dh.ENTER || e.key === tY.dh.SPACE) && ((s.current = !0), e.repeat || n());
        },
        onClickWithSound: function () {
            (s.current || n(), (s.current = !1), a());
        },
    };
}
var tq = a(753875);
function tZ(e) {
    let { "aria-label": t, "aria-describedby": a, icon: r, onClick: s, disabled: n = !1 } = e,
        {
            playSound: c,
            onPointerDown: d,
            onKeyDown: l,
            onClickWithSound: o,
        } = tX({ source: tL, onClick: s, disabled: n });
    return (
        tz(
            "ArrowLeft",
            function (e) {
                (e.repeat || c(), s());
            },
            n,
        ),
        (0, i.jsx)(ee, {
            onPointerDown: d,
            onKeyDown: l,
            onClick: o,
            size: "md",
            className: b()(tq.A4, tq.aX),
            "aria-disabled": n,
            "aria-describedby": a,
            "aria-label": t,
            children: (0, i.jsx)(r, { color: "currentColor" }),
        })
    );
}
function tQ(e) {
    let {
            "aria-label": t,
            "aria-describedby": a,
            children: r,
            onClick: s,
            size: n,
            className: c,
            disabled: d = !1,
            sound: l = tP,
        } = e,
        {
            playSound: o,
            onPointerDown: u,
            onKeyDown: h,
            onClickWithSound: f,
        } = tX({ source: l, onClick: s, disabled: d });
    return (
        tz(
            "ArrowRight",
            function (e) {
                (e.repeat || o(), s());
            },
            d,
        ),
        (0, i.jsx)(et, {
            onPointerDown: u,
            onKeyDown: h,
            onClick: f,
            size: n,
            className: b()(tq.A4, tq.K2, c),
            "aria-disabled": d,
            "aria-describedby": a,
            "aria-label": t,
            children: r,
        })
    );
}
function tJ(e) {
    let { "aria-describedby": t, onClick: a, disabled: r } = e;
    return (0, i.jsx)(tZ, {
        "aria-label": ex.intl.string(ex.t["13/7kX"]),
        "aria-describedby": t,
        icon: tU.ArrowSmallLeftIcon,
        onClick: a,
        disabled: r,
    });
}
function t$(e) {
    let { onClick: t } = e,
        { onPointerDown: a, onKeyDown: r, onClickWithSound: s } = tX({ source: tP, onClick: t });
    return (0, i.jsx)(tG.m, {
        text: ex.intl.string(em.default.cWdGf9),
        ariaHidden: !0,
        children: (0, i.jsx)(ee, {
            onPointerDown: a,
            onKeyDown: r,
            onClick: s,
            size: "md",
            className: b()(tq.A4, tq.eZ),
            "aria-label": ex.intl.string(em.default.cWdGf9),
            children: (0, i.jsx)(tH.RetryIcon, { color: "currentColor" }),
        }),
    });
}
function t0(e) {
    let { "aria-describedby": t, onClick: a, disabled: r } = e;
    return (0, i.jsx)(tQ, {
        size: "md",
        "aria-label": ex.intl.string(ex.t.PDTjLN),
        "aria-describedby": t,
        onClick: a,
        disabled: r,
        children: (0, i.jsx)(tF.ArrowSmallRightIcon, { color: "currentColor" }),
    });
}
function t1(e) {
    let { onClick: t, disabled: a } = e;
    return (0, i.jsxs)(tQ, {
        size: "custom",
        className: tq.GA,
        "aria-label": ex.intl.string(ex.t.i4jeWR),
        onClick: t,
        disabled: a,
        children: [
            (0, i.jsx)(ef, { variant: "mono-md/normal", className: tq.Pf, children: ex.intl.string(ex.t.i4jeWR) }),
            (0, i.jsx)(tF.ArrowSmallRightIcon, { size: "refresh_sm", color: "currentColor" }),
        ],
    });
}
function t5(e) {
    let { onClick: t, disabled: a } = e;
    return (0, i.jsxs)(tQ, {
        size: "custom",
        className: b()(tq.GA, tq.Bq),
        "aria-label": ex.intl.string(ex.t.RDE0Sc),
        onClick: t,
        disabled: a,
        children: [
            (0, i.jsx)(eo.E, {
                variant: "mono-md/bold",
                color: "none",
                className: tq.Pf,
                children: ex.intl.string(ex.t.RDE0Sc),
            }),
            (0, i.jsx)(tK.ShareIcon, { size: "refresh_sm", color: "currentColor" }),
        ],
    });
}
function t6(e) {
    let { onBack: t, isRouteBlocked: a, blockedTraitDescriptionId: r } = e,
        s = (0, _.bG)([l.A], () => l.A.isSaving);
    return (0, i.jsx)(tJ, {
        "aria-describedby": r,
        onClick: function () {
            s || t();
        },
        disabled: s || a,
    });
}
function t2(e) {
    let { onNext: t, navigate: a, isRouteBlocked: r, blockedTraitDescriptionId: n } = e,
        c = (0, _.bG)([l.A], () => l.A.isSaving);
    async function o() {
        if (c) return;
        let e = (0, F.XI)(l.A.selectedCharacterTraits);
        (await (0, d.yE)(e)) ? t() : (0, s.P0)({ text: ex.intl.string(ex.t.fEptJP), variant: "critical" });
    }
    return (0, i.jsxs)(tQ, {
        size: "custom",
        className: tq.GA,
        "aria-label": ex.intl.string(ex.t["R3BPH+"]),
        "aria-describedby": n,
        onClick: function () {
            a(o);
        },
        disabled: c || r,
        sound: "https://cdn.discordapp.com/assets/content/1514d999969512ff06ade75018213676ebaf3698af26c0b1b7d3243ec480f920.mp3",
        children: [
            (0, i.jsx)(ef, { variant: "mono-md/normal", className: tq.Pf, children: ex.intl.string(ex.t["R3BPH+"]) }),
            c
                ? (0, i.jsx)(tB.y, { type: tB.t.SPINNING_CIRCLE_SIMPLE, className: tq.u1, itemClassName: tq.$N })
                : (0, i.jsx)(tF.ArrowSmallRightIcon, { size: "refresh_sm", color: "currentColor" }),
        ],
    });
}
function t3(e) {
    let { activeRoute: t, blockedTrait: a, blockedTraitDescriptionId: r, onBack: s, onNext: n, onReplay: c } = e,
        d = null != a,
        l = h.useMemo(() => (0, eT.throttle)((e) => e(), 500, { trailing: !1 }), []);
    function o(e) {
        null != a ? Y(a) : l(e);
    }
    switch (t) {
        case w.gr.HOME:
            return null;
        case w.gr.FINALIZE_CHARACTER:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(t6, { onBack: () => o(s), isRouteBlocked: d, blockedTraitDescriptionId: r }),
                    (0, i.jsx)(t2, { onNext: n, navigate: o, isRouteBlocked: d, blockedTraitDescriptionId: r }),
                ],
            });
        case w.gr.SUMMARY:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(tJ, { onClick: () => l(s) }),
                    (0, i.jsx)(t$, { onClick: () => l(c) }),
                    (0, i.jsx)(t5, { onClick: () => l(n) }),
                ],
            });
        case w.gr.SHARE:
            return (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(tJ, { onClick: () => l(s) }), (0, i.jsx)(t1, { onClick: () => l(n) })],
            });
        default:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(tJ, { "aria-describedby": r, onClick: () => o(s), disabled: d }),
                    (0, i.jsx)(t0, { "aria-describedby": r, onClick: () => o(n), disabled: d }),
                ],
            });
    }
}
function t4(e) {
    let { className: t } = e;
    return (0, i.jsx)(ea, {
        animatedSrc:
            "https://cdn.discordapp.com/assets/content/02e9ae4cdbec0b2adef22c9a5659f5c7340e399cc8932e8af6d41e62a37644ae.png",
        staticSrc:
            "https://cdn.discordapp.com/assets/content/f08be0abd0d224b5f7e1e5d6c1ef8e4d24cddcb712e2c624dcc6ea3d136818d5.png",
        className: t,
    });
}
var t8 = a(771639);
let t9 = { "--custom-checkpoint-screen-vertical-inset": "88px" };
function t7(e) {
    let { children: t } = e;
    return (0, i.jsx)("div", { className: t8.n, style: t9, children: t });
}
var ae = a(639331);
function at() {
    let e = (0, _.bG)([l.A], () => l.A.fetchState !== l.T.SUCCESS || null != l.A.stats),
        t = el();
    return (0, i.jsx)(t7, {
        children: (0, i.jsxs)("div", {
            className: ae.Qs,
            children: [
                (0, i.jsxs)("div", {
                    ref: t,
                    className: ae.Ok,
                    role: "heading",
                    "aria-level": 2,
                    children: ["2026", !e && (0, i.jsx)(t4, { className: ae.gi })],
                }),
                (0, i.jsxs)("div", {
                    className: ae.eH,
                    children: [
                        (0, i.jsx)(ef, {
                            tag: "p",
                            variant: "heading-xl/medium",
                            children: ex.intl.string(e ? em.default["7YmUVu"] : em.default["Fyr+NW"]),
                        }),
                        !e &&
                            (0, i.jsx)(ef, {
                                tag: "p",
                                variant: "heading-xl/medium",
                                children: ex.intl.string(em.default["2GRr6H"]),
                            }),
                    ],
                }),
            ],
        }),
    });
}
(a(134528), a(947204));
var aa = a(675970),
    ar = a(559106),
    ai = a(366056),
    as = a(292801),
    an = a(155718),
    ac = a(294454),
    ad = a(489414),
    al = a(878358),
    ao = a(383233),
    au = a(819648),
    ah = a(677059);
function af(e) {
    let { children: t } = e;
    return (0, i.jsx)(ef, { variant: "heading-xxl/medium", className: ah.h, children: t });
}
function ab(e) {
    let { accessibilityLabel: t, className: a, children: r, ref: s } = e;
    return (0, i.jsxs)("div", {
        ref: s,
        role: "heading",
        "aria-level": 2,
        children: [
            (0, i.jsx)("div", { className: a, "aria-hidden": !0, children: r }),
            (0, i.jsx)(m.A, { children: t }),
        ],
    });
}
var a_ = a(100391);
function ap(e) {
    let { icon: t, children: a } = e;
    return (0, i.jsxs)("div", {
        className: a_.D,
        children: [
            (0, i.jsx)(t, { size: "md", color: "currentColor" }),
            (0, i.jsx)(ef, { variant: "heading-lg/semibold", className: a_.Q, children: a }),
        ],
    });
}
function am(e) {
    let { icon: t, children: a } = e;
    return (0, i.jsxs)("div", {
        className: a_.D,
        children: [
            (0, i.jsx)(t, { size: "md", color: "currentColor" }),
            (0, i.jsx)(eb, { variant: "heading-lg/semibold", className: a_.Q, children: a }),
        ],
    });
}
var ax = a(456410);
function ag(e) {
    let { name: t, label: a, checked: r, onSelect: s, children: n } = e;
    return (0, i.jsx)(ar.vN, {
        within: !0,
        children: (0, i.jsxs)("label", {
            className: b()(ax.uK, { [ax.KD]: r }),
            children: [
                (0, i.jsx)(m.A, {
                    children: (0, i.jsx)("input", { type: "radio", name: t, checked: r, onChange: s, "aria-label": a }),
                }),
                r ? (0, i.jsx)("div", { className: ax.Gt, "aria-hidden": !0 }) : null,
                (0, i.jsx)("div", { className: ax.Nr, "aria-hidden": !0, children: n }),
            ],
        }),
    });
}
function aA() {
    let e = (0, _.bG)([l.A], () => l.A.character),
        t = (0, _.bG)([l.A], () => l.A.stats),
        a = h.useId(),
        r = el(),
        n = h.useMemo(() => {
            var a, r;
            return ((a = e),
            (r = t),
            null != a && null != r
                ? [aa.Q.CHARACTER_ONLY, aa.Q.DEFAULT, aa.Q.STATS_ONLY]
                : null != a
                  ? [aa.Q.CHARACTER_ONLY]
                  : null != r
                    ? [aa.Q.STATS_ONLY]
                    : []).map((a) => ({ cardType: a, checkpointData: (0, au.Go)(a, e, t) }));
        }, [e, t]),
        [c, o] = h.useState(
            () =>
                (
                    n.find((e) => {
                        let { cardType: t } = e;
                        return t === aa.Q.DEFAULT;
                    }) ?? n.at(0)
                )?.cardType,
        ),
        f = n.find((e) => {
            let { cardType: t } = e;
            return t === c;
        }),
        b = eM(eS),
        {
            onPointerDown: p,
            onKeyDown: m,
            onClickWithSound: x,
        } = tX({
            source: tP,
            onClick: function () {
                if (null == f) return;
                let { cardType: e, checkpointData: t } = f;
                (0, ac.fO)({
                    message: new ao.Ay({
                        content: "",
                        components: [{ type: an.I5.CHECKPOINT_CARD, id: (0, ad.X1)("0"), checkpointData: t }],
                    }),
                    source: "checkpoint",
                    customSendHandler: async (t, a, r) => {
                        let { withMessage: i } = a;
                        r(!0);
                        try {
                            (await (0, d.jA)(t, i ?? "", e),
                                (0, u.Pe)(e),
                                (0, ac.Be)(),
                                (0, s.P0)({ text: ex.intl.string(ex.t.kwmYkt), variant: "success" }));
                        } catch {
                            (0, s.P0)({ text: ex.intl.string(ex.t.iufib1), variant: "critical" });
                        } finally {
                            r(!1);
                        }
                    },
                });
            },
        });
    return null == f
        ? null
        : (0, i.jsx)(t7, {
              children: (0, i.jsxs)("div", {
                  className: ax.uM,
                  children: [
                      (0, i.jsxs)("div", {
                          className: ax.wx,
                          children: [
                              (0, i.jsxs)(ab, {
                                  ref: r,
                                  className: ax.R_,
                                  accessibilityLabel: ex.intl.string(em.default.P5zyko),
                                  children: [
                                      (0, i.jsx)(ap, {
                                          icon: ai.ExperimentalCheckpointIcon,
                                          children: ex.intl.string(tw.default.ir6nEQ),
                                      }),
                                      (0, i.jsx)(ef, {
                                          variant: "display-lg",
                                          className: ax.Vy,
                                          children: ex.intl.string(ex.t.RDE0Sc),
                                      }),
                                  ],
                              }),
                              (0, i.jsx)("div", {
                                  className: ax.h_,
                                  children: (0, i.jsx)(af, { children: ex.intl.string(em.default.KXDPot) }),
                              }),
                          ],
                      }),
                      (0, i.jsx)("div", {
                          role: "radiogroup",
                          "aria-label": ex.intl.string(em.default.KXDPot),
                          className: ax.kR,
                          children: n.map((e) => {
                              let { cardType: t, checkpointData: r } = e;
                              return (0, i.jsx)(
                                  ag,
                                  {
                                      name: a,
                                      label: (function (e) {
                                          switch (e) {
                                              case aa.Q.CHARACTER_ONLY:
                                                  return ex.intl.string(em.default.tUU3fe);
                                              case aa.Q.DEFAULT:
                                                  return ex.intl.string(em.default.DZQzJn);
                                              case aa.Q.STATS_ONLY:
                                                  return ex.intl.string(em.default.e2UHGT);
                                          }
                                      })(t),
                                      checked: t === f.cardType,
                                      onSelect: () => {
                                          (b(), o(t));
                                      },
                                      children: (0, i.jsx)(al.A, { checkpointData: r }),
                                  },
                                  t,
                              );
                          }),
                      }),
                      (0, i.jsxs)(et, {
                          onPointerDown: p,
                          onKeyDown: m,
                          onClick: x,
                          size: "custom",
                          className: ax.sY,
                          "aria-label": ex.intl.string(ex.t.I3ltXO),
                          children: [
                              (0, i.jsx)(eo.E, {
                                  variant: "mono-md/bold",
                                  color: "none",
                                  className: ax.RC,
                                  children: ex.intl.string(ex.t.I3ltXO),
                              }),
                              (0, i.jsx)(as.ArrowAngleRightUpIcon, { size: "refresh_sm", color: "currentColor" }),
                          ],
                      }),
                  ],
              }),
          });
}
var av = a(206701),
    aw = a(782134),
    aI = a(998304),
    aE = a(975571),
    aj = a(427262),
    aS = a(438389);
let aN = (0, aI.j5)(z.Kr);
function aC(e) {
    let { onStart: t } = e,
        a = (0, _.bG)([G.default], () => G.default.getCurrentUser()),
        r = (0, aj.tx)(a),
        s = (0, _.bG)([q.Ay], () => q.Ay.useReducedMotion),
        { playSound: n, onPointerDown: c, onKeyDown: d, onClickWithSound: l } = tX({ source: tP, onClick: t });
    return (
        tz("ArrowRight", function (e) {
            (e.repeat || n(), t());
        }),
        (0, i.jsxs)(t7, {
            children: [
                (0, i.jsxs)("div", {
                    className: aS.Qs,
                    children: [
                        (0, i.jsxs)("div", {
                            className: aS.wx,
                            children: [
                                (0, i.jsxs)("div", {
                                    className: aS.Qq,
                                    children: [
                                        (0, i.jsx)(eb, {
                                            variant: "display-lg",
                                            className: aS.DD,
                                            children: ex.intl.string(tw.default["CdU/PF"]),
                                        }),
                                        (0, i.jsx)(ef, {
                                            variant: "heading-xxl/medium",
                                            children: ex.intl.formatToPlainString(em.default.xhZ23b, { username: r }),
                                        }),
                                    ],
                                }),
                                (0, i.jsx)("div", {
                                    className: aS.CB,
                                    children: (0, i.jsx)(av.U, {
                                        artboard: "Entry",
                                        className: aS.lW,
                                        fit: "contain",
                                        withReducedMotion: "short-loop",
                                        dataBinding: { iconColor: aN, reducedMotion: s },
                                    }),
                                }),
                            ],
                        }),
                        (0, i.jsxs)(et, {
                            onPointerDown: c,
                            onKeyDown: d,
                            onClick: l,
                            size: "custom",
                            className: aS.ni,
                            "aria-label": ex.intl.string(ex.t.I0v0Qv),
                            children: [
                                (0, i.jsx)(aw.PlayIcon, { size: "refresh_sm", color: "currentColor" }),
                                (0, i.jsx)(ef, {
                                    variant: "mono-md/normal",
                                    className: aS.qK,
                                    children: ex.intl.string(ex.t.I0v0Qv),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: aS.qr,
                    children: [
                        (0, i.jsx)(ef, {
                            variant: "body-sm/medium",
                            className: aS.ed,
                            children: ex.intl.format(em.default.hcNhyq, {
                                learnMoreHook: (e, t) =>
                                    (0, i.jsx)(
                                        ek.Anchor,
                                        {
                                            className: aS.nf,
                                            href: aE.A.getArticleURL(tW.MVz.CHECKPOINT),
                                            useDefaultUnderlineStyles: !1,
                                            children: e,
                                        },
                                        t,
                                    ),
                            }),
                        }),
                        (0, i.jsx)(ef, {
                            variant: "body-md/medium",
                            className: aS.al,
                            children: ex.intl.format(tw.default.g476ZL, { name: "Exyl" }),
                        }),
                    ],
                }),
            ],
        })
    );
}
var aT = a(565645),
    aR = a(141881);
function aO(e) {
    let { children: t } = e;
    return (0, i.jsx)(ep, { className: aR.l, children: t });
}
var ay = a(765671),
    aM = a(663385),
    ak = a(469228),
    aD = a(406956);
let aL = (0, aI.j5)(z.Kr);
function aP(e) {
    let { value: t, alignment: a = "left", className: r } = e,
        s = (0, _.bG)([q.Ay], () => q.Ay.useReducedMotion),
        [n, c] = h.useState(0),
        d = s ? t : n;
    h.useEffect(() => {
        if (s) return;
        let e = performance.now(),
            a = requestAnimationFrame(function r(i) {
                let s = Math.min((i - e) / 500, 1);
                (c(Math.round(t * s)), s < 1 && (a = requestAnimationFrame(r)));
            });
        return () => cancelAnimationFrame(a);
    }, [t, s]);
    let l = "center" === a ? aM.m : ak.w;
    return (0, i.jsxs)("div", {
        className: b()(aD.lY, r),
        children: [
            (0, i.jsx)("div", { className: aD.VL, children: t }),
            (0, i.jsx)(l, {
                className: aD.lW,
                fit: "layout",
                withReducedMotion: "short-loop",
                dataBinding: { DisplayValue: d, TextColor: aL },
            }),
            (0, i.jsx)(m.A, { children: t.toLocaleString(ex.intl.currentLocale) }),
        ],
    });
}
var aU = a(434911);
function aG(e) {
    let { value: t } = e,
        { ref: a, width: r } = (0, ay.Ay)(),
        { ref: s, width: n } = (0, ay.Ay)(),
        c = null != r && null != n ? Math.min(1, r / n) : 1;
    return (0, i.jsxs)("div", {
        ref: a,
        className: aU.ai,
        style: { height: 200 * c },
        children: [
            (0, i.jsx)("span", { ref: s, className: b()(aU.Qq, aU.xP), children: t }),
            (0, i.jsx)(aP, { value: t }),
        ],
    });
}
function aH(e) {
    let { value: t } = e;
    return (0, i.jsxs)("div", {
        className: aU.dJ,
        children: [
            "number" == typeof t
                ? (0, i.jsx)(aG, { value: t })
                : (0, i.jsx)(ef, { variant: "heading-xxl/medium", className: aU.Qq, children: t }),
            (0, i.jsx)(t4, { className: aU.gi }),
        ],
    });
}
(a(393431), a(532706), a(42231), a(232424), a(949626), a(767709), a(65162));
var aF = a(445199),
    aK = a(205524),
    aB = a(690521),
    aV = a(152321);
let az = [0, 0, 2],
    aW = [0, 1, 0],
    aY = [0, 0, 0],
    aX = `
attribute vec4 a_position;
attribute vec2 a_texcoord;
uniform mat4 u_normalMatrix;
attribute vec3 a_vertexNormal;

uniform mat4 u_matrix;

varying vec2 v_texcoord;
varying highp vec3 v_lighting;

void main() {
  // Multiply the position by the matrix.
  gl_Position = u_matrix * a_position;

  // Pass the texcoord to the fragment shader.
  v_texcoord = a_texcoord;

  highp vec3 ambientLight = vec3(0.4, 0.4, 0.4);
  highp vec3 directionalLightColor = vec3(0.6, 0.6, 0.6);
  highp vec3 directionalVector = normalize(vec3(0.0, 0.0, 1.0));

  highp vec4 transformedNormal = u_normalMatrix * vec4(a_vertexNormal, 0.0);

  highp float directional = max(dot(transformedNormal.xyz, directionalVector), 0.0);
  v_lighting = ambientLight + (directionalLightColor * directional);
}
`,
    aq = `
precision mediump float;

varying vec2 v_texcoord;
varying highp vec3 v_lighting;

uniform sampler2D u_texture;

void main() {
  highp vec4 texelColor = texture2D(u_texture, v_texcoord);
  gl_FragColor = vec4(texelColor.rgb * v_lighting, texelColor.a);
}
`,
    aZ = [
        -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5,
        -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5,
        0.5, 0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, -0.5,
        -0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5,
        -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, 0.5, 0.5,
        -0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5,
    ],
    aQ = [
        0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0,
        1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0,
    ],
    aJ = [
        0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
        1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0,
        -1, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
        1, 0, 0,
    ];
function a$(e) {
    let t,
        { emoji: a } = e,
        [r, s] = h.useState(null),
        [n, c] = h.useState(null),
        d = h.useRef(new Image()),
        [l, o] = h.useState(null),
        [u, f] = h.useState(!1),
        p = h.useRef(0),
        m = h.useRef(0),
        x = h.useRef(45),
        g = h.useRef(45),
        A = (0, _.bG)([q.Ay], () => q.Ay.useReducedMotion),
        v = 70 * !A,
        w = 40 * !A,
        I = h.useRef(v),
        E = h.useRef(w),
        j = h.useRef(!1),
        S = h.useRef(0),
        N = h.useRef(0);
    ((t = h.useRef(null)),
        h.useEffect(() => {
            if (null == t.current || null == n) return;
            let e = t.current,
                a = e.createTexture();
            return (
                e.bindTexture(e.TEXTURE_2D, a),
                e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, n),
                e.generateMipmap(e.TEXTURE_2D),
                () => e.deleteTexture(a)
            );
        }, [n, l]),
        h.useEffect(() => {
            let e,
                a = 0,
                i = r?.getContext("webgl");
            if (null == i || null == r || null == n) return;
            t.current = i;
            let s = i.createShader(i.VERTEX_SHADER),
                c = i.createShader(i.FRAGMENT_SHADER);
            if (null == s || null == c) return;
            if (
                (i.shaderSource(s, aX),
                i.shaderSource(c, aq),
                i.compileShader(s),
                !i.getShaderParameter(s, i.COMPILE_STATUS))
            )
                return void console.error("ERROR compiling vertex shader!", i.getShaderInfoLog(s));
            if ((i.compileShader(c), !i.getShaderParameter(c, i.COMPILE_STATUS)))
                return void console.error("ERROR compiling fragment shader!", i.getShaderInfoLog(c));
            let d = i.createProgram();
            if (
                (i.attachShader(d, s), i.attachShader(d, c), i.linkProgram(d), !i.getProgramParameter(d, i.LINK_STATUS))
            )
                return void console.error("ERROR linking program!", i.getProgramInfoLog(d));
            if ((i.validateProgram(d), !i.getProgramParameter(d, i.VALIDATE_STATUS)))
                return void console.error("ERROR validating program!", i.getProgramInfoLog(d));
            let l = i.getAttribLocation(d, "a_position"),
                o = i.getAttribLocation(d, "a_texcoord"),
                u = i.getUniformLocation(d, "u_matrix"),
                h = i.getUniformLocation(d, "u_texture"),
                f = i.getAttribLocation(d, "a_vertexNormal"),
                b = i.getUniformLocation(d, "u_normalMatrix"),
                _ = i.createBuffer();
            (i.bindBuffer(i.ARRAY_BUFFER, _),
                i.bufferData(i.ARRAY_BUFFER, new Float32Array(aJ), i.STATIC_DRAW),
                i.vertexAttribPointer(f, 3, i.FLOAT, !1, 0, 0),
                i.enableVertexAttribArray(f));
            let p = i.createBuffer();
            (i.bindBuffer(i.ARRAY_BUFFER, p),
                (e = new Float32Array(aZ)),
                i.bufferData(i.ARRAY_BUFFER, e, i.STATIC_DRAW));
            let m = i.createBuffer();
            (i.bindBuffer(i.ARRAY_BUFFER, m), i.bufferData(i.ARRAY_BUFFER, new Float32Array(aQ), i.STATIC_DRAW));
            let A = aF.DF(60);
            return (
                (a = requestAnimationFrame(function e() {
                    if (null == i || null == r) return;
                    (i.viewport(0, 0, i.canvas.width, i.canvas.height), i.enable(i.CULL_FACE), i.enable(i.DEPTH_TEST));
                    let t = aF.DF(x.current),
                        s = aF.DF(g.current);
                    (i.clear(i.COLOR_BUFFER_BIT | i.DEPTH_BUFFER_BIT),
                        i.useProgram(d),
                        i.enableVertexAttribArray(l),
                        i.bindBuffer(i.ARRAY_BUFFER, p),
                        i.vertexAttribPointer(l, 3, i.FLOAT, !1, 0, 0),
                        i.enableVertexAttribArray(o),
                        i.bindBuffer(i.ARRAY_BUFFER, m),
                        i.vertexAttribPointer(o, 2, i.FLOAT, !1, 0, 0));
                    let n = r.clientWidth / r.clientHeight,
                        c = aK.fN(aK.vt(), A, n, 1, 2e3),
                        f = aK.t5(aK.vt(), az, aY, aW),
                        _ = aK.lw(aK.vt(), c, f),
                        v = aK.vt();
                    (aK.eL(v, v, t), aK.Z8(v, v, s));
                    let w = aK.lw(aK.vt(), _, v),
                        I = aK.vt();
                    (aK.B8(I, v),
                        aK.mg(I, I),
                        i.uniformMatrix4fv(b, !1, I),
                        i.uniformMatrix4fv(u, !1, w),
                        i.uniform1i(h, 0),
                        i.drawArrays(i.TRIANGLES, 0, 36),
                        (a = requestAnimationFrame(e)));
                })),
                () => cancelAnimationFrame(a)
            );
        }, [x, g, r, n]));
    let C = h.useCallback(() => {
        let e = n?.getContext("2d");
        null != n &&
            null != e &&
            ((e.fillStyle = "black"),
            e.fillRect(0, 0, n.width, n.height),
            e.drawImage(d.current, 0, 0, n.width, n.height),
            (e.fillStyle = z.Kr),
            e.fillRect(0, 0, n.width, 1),
            e.fillRect(0, 0, 1, n.height),
            e.fillRect(0, n.height - 1, n.width, 1),
            e.fillRect(n.width - 1, 0, 1, n.height),
            o(a),
            f(!0));
    }, [a, d, n]);
    (h.useEffect(() => {
        null != n &&
            ((d.current.crossOrigin = "anonymous"), (d.current.src = (0, aB.Ez)(a, 256)), (d.current.onload = C));
    }, [a, C, d, n]),
        h.useEffect(
            () => (
                !(function e(t) {
                    let a = 0.001 * t,
                        r = Math.min(a - m.current, 0.1);
                    if (((g.current += -E.current * r), (x.current += -I.current * r), !j.current)) {
                        if (Math.abs(I.current) > v) {
                            let e = I.current > 0 ? 1 : -1;
                            I.current -= 2 * e * window.devicePixelRatio;
                        }
                        if (Math.abs(E.current) > w) {
                            let e = E.current > 0 ? 1 : -1;
                            E.current -= 2 * e * window.devicePixelRatio;
                        }
                    }
                    ((m.current = a), (p.current = requestAnimationFrame(e)));
                })(0),
                () => cancelAnimationFrame(p.current)
            ),
            [v, w],
        ));
    let T = h.useCallback((e) => {
            ((j.current = !0), (I.current = 0), (E.current = 0), (S.current = e.clientX), (N.current = e.clientY));
        }, []),
        R = h.useCallback((e) => {
            if (j.current) {
                let t = (e.clientX - S.current) / window.devicePixelRatio;
                ((I.current = -((e.clientY - N.current) / window.devicePixelRatio) * (100 / window.devicePixelRatio)),
                    (E.current = -t * (100 / window.devicePixelRatio)),
                    (S.current = e.clientX),
                    (N.current = e.clientY));
            }
        }, []),
        O = h.useCallback(() => {
            j.current = !1;
        }, []);
    return (
        h.useEffect(
            () => (
                window.addEventListener("mouseup", O),
                window.addEventListener("mousemove", R),
                () => {
                    (window.removeEventListener("mouseup", O), window.removeEventListener("mousemove", R));
                }
            ),
            [R, O],
        ),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("canvas", {
                    className: b()(aV.Ji, { [aV.q4]: !u }),
                    ref: s,
                    height: 512,
                    width: 512,
                    onMouseDown: T,
                }),
                (0, i.jsx)("canvas", { className: aV.R, ref: c, height: 256, width: 256 }),
            ],
        })
    );
}
var a0 = a(826820);
let a1 = [];
function a5(e) {
    let { emojiStats: t } = e,
        a = Math.round(t?.numEmojisSent ?? 0),
        r = (0, I.bD)(t?.numEmojisSentPercentile);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: a0.dJ,
                children: [
                    (0, i.jsx)(am, {
                        icon: ed.EmojiSlightlySmilingFaceIcon,
                        children: ex.intl.string(em.default.ZTDCIv),
                    }),
                    (0, i.jsx)(aP, { value: a }),
                ],
            }),
            (0, i.jsx)(af, {
                children:
                    null != r
                        ? ex.intl.format(em.default.o7vDrk, {
                              percent: r,
                              percentHook: (e, t) => (0, i.jsx)(aO, { children: e }, t),
                          })
                        : ex.intl.format(em.default.NFptic, { numEmojis: a }),
            }),
        ],
    });
}
function a6(e) {
    let { numEmojisSent: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: a0.dJ,
                children: [
                    (0, i.jsx)(am, {
                        icon: ed.EmojiSlightlySmilingFaceIcon,
                        children: ex.intl.string(em.default.ZTDCIv),
                    }),
                    (0, i.jsx)(aH, { value: t }),
                ],
            }),
            (0, i.jsx)(af, { children: ex.intl.format(em.default["660/Rr"], { numEmojis: (0, I.wj)(t) }) }),
        ],
    });
}
function a2() {
    let e = (0, _.bG)([l.A], () => l.A.stats?.emojis),
        t = (0, _.bG)([l.A], () => (0, I.y7)(l.A.stats)),
        a = (0, _.bG)([l.A], () => l.A.globalStats?.emojis),
        r = !t && null != a,
        s = (r ? a.emojis : e?.emojis) ?? a1,
        [n, c] = h.useState(0),
        d = s[n],
        o = eM(eS);
    return (0, i.jsx)(t7, {
        children: (0, i.jsxs)("div", {
            className: a0.kL,
            children: [
                (0, i.jsx)("div", { className: a0.KY, children: null != d && (0, i.jsx)(a$, { emoji: d }) }),
                (0, i.jsxs)("div", {
                    className: a0.C,
                    children: [
                        r ? (0, i.jsx)(a6, { numEmojisSent: a.numEmojisSent }) : (0, i.jsx)(a5, { emojiStats: e }),
                        (0, i.jsx)("div", {
                            className: a0.gm,
                            children: s.map((e, t) =>
                                (0, i.jsx)(
                                    a3,
                                    {
                                        emoji: e,
                                        rank: t + 1,
                                        isActive: t === n,
                                        onClick: () => {
                                            (o(), c(t));
                                        },
                                    },
                                    e.id ?? e.name,
                                ),
                            ),
                        }),
                    ],
                }),
            ],
        }),
    });
}
function a3(e) {
    let { emoji: t, rank: a, isActive: r, onClick: s } = e,
        n = !(0, _.bG)([q.Ay], () => q.Ay.useReducedMotion) && !0 === t.animated;
    return (0, i.jsxs)(ee, {
        size: "custom",
        className: a0._X,
        onClick: s,
        "aria-label": ex.intl.formatToPlainString(em.default["S5+pRg"], { emojiName: t.name, rank: a }),
        "aria-pressed": r,
        children: [
            (0, i.jsx)(aT.A, { className: a0.Zg, emojiId: t.id, emojiName: t.name, animated: n }),
            (0, i.jsx)(ef, { variant: "mono-md/bold", className: a0.Tm, children: a }),
        ],
    });
}
var a4 = a(360450),
    a8 = a(214947),
    a9 = a(939249),
    a7 = a(597770),
    re = a(559647),
    rt = a(95369),
    ra = a(570287),
    rr = a(486020),
    ri = a(801305);
let rs = [],
    rn = (0, aI.j5)(z.Kr),
    rc = { r: 0, g: 0, b: 0, a: 1 },
    rd = {
        "Avatar01/Stroke": rc,
        "Avatar01/Fill": rn,
        "Avatar02/Stroke": rc,
        "Avatar02/Fill": rn,
        "Avatar03/Stroke": rc,
        "Avatar03/Fill": rn,
        "Avatar04/Stroke": rc,
        "Avatar04/Fill": rn,
        "Avatar05/Stroke": rc,
        "Avatar05/Fill": rn,
        ConnectorColor: rn,
    };
function rl(e) {
    return null != e ? rr.Ay.getUserAvatarURL(e, !1, 160, "png") : void 0;
}
function ro(e) {
    let t,
        { route: a, onNextStep: r, onPreviousStep: s } = e,
        n = (0, _.bG)([l.A], () => l.A.stats?.users ?? rs),
        c = (0, _.bG)([l.A], () => l.A.stats?.sidekick),
        d = (0, _.bG)([G.default], () => G.default.getCurrentUser()),
        o = (0, _.bG)([q.Ay], () => q.Ay.useReducedMotion),
        u = h.useRef(null),
        f = h.useRef(void 0),
        p = (function (e, t) {
            let [a, r] = h.useState({ route: e, hasShownSquad: e === w.gr.SQUAD, isTransitioning: !1 });
            switch (
                (a.route !== e &&
                    r({
                        route: e,
                        hasShownSquad: a.hasShownSquad || e === w.gr.SQUAD,
                        isTransitioning: !t && a.route === w.gr.SQUAD && e === w.gr.SIDEKICK,
                    }),
                h.useEffect(() => {
                    if (!a.isTransitioning) return;
                    let e = setTimeout(() => r((e) => ({ ...e, isTransitioning: !1 })), 1500);
                    return () => clearTimeout(e);
                }, [a.isTransitioning]),
                e)
            ) {
                case w.gr.SQUAD_TRANSITION:
                    return 5 * !!a.hasShownSquad;
                case w.gr.SQUAD:
                    return 1;
                case w.gr.SIDEKICK:
                    return a.isTransitioning ? 2 : 3;
                case w.gr.SIDEKICK_LEAVE:
                    return t ? 3 : 4;
                default:
                    return 0;
            }
        })(a, o);
    ((t = h.useRef(!0)),
        h.useEffect(() => {
            if (a !== w.gr.SIDEKICK_LEAVE) {
                t.current = !1;
                return;
            }
            if (t.current) return void s();
            if (o) return void r();
            let e = setTimeout(r, 1e3);
            return () => clearTimeout(e);
        }, [r, s, o, a]));
    let [x, g] = n,
        A = (0, aj.tx)(x) ?? "",
        v = (0, aj.tx)(g) ?? "",
        I = A.toLocaleUpperCase(),
        E = v.toLocaleUpperCase(),
        j = (0, aj.tx)(c?.user) ?? "",
        S = [
            { user: c?.user, name: j },
            { user: x, name: A },
            { user: g, name: v },
        ].filter((e) => null != e.user),
        N = n.length < 2,
        C = a === w.gr.SIDEKICK || a === w.gr.SIDEKICK_LEAVE;
    h.useEffect(() => () => clearInterval(f.current), []);
    let T = h.useCallback(() => {
        (clearInterval(f.current),
            (f.current = setInterval(() => {
                let e = u.current?.getProperties();
                e?.twoFriends?.value === N &&
                    e?.reducedMotion?.value === o &&
                    e?.["Avatar01/Username"]?.value === j.toLocaleUpperCase() &&
                    (u.current?.play(), clearInterval(f.current));
            }, 50)));
    }, [o, j, N]);
    return (0, i.jsxs)(t7, {
        children: [
            (0, i.jsx)(a4.m, {
                ref: u,
                className: ri.lW,
                fit: "contain",
                autoplay: !1,
                onLoad: T,
                withReducedMotion: "play",
                dataBinding: {
                    ...rd,
                    AnimationState: p,
                    "Avatar01/img": rl(c?.user),
                    "Avatar02/img": rl(g),
                    "Avatar03/img": rl(x),
                    "Avatar04/img": rl(c?.user),
                    "Avatar05/img": rl(d),
                    "Avatar01/Username": j.toLocaleUpperCase(),
                    "Avatar02/Username": E,
                    "Avatar03/Username": I,
                    "Avatar04/Username": j.toLocaleUpperCase(),
                    twoFriends: N,
                    reducedMotion: o,
                },
            }),
            a === w.gr.SQUAD_TRANSITION && (0, i.jsx)(ru, {}),
            a === w.gr.SQUAD &&
                (0, i.jsxs)("div", {
                    className: ri.Qs,
                    children: [
                        (0, i.jsx)(rh, {
                            title: ex.intl.string(tw.default.OzY5Ns),
                            accessibilityLabel: ex.intl.string(em.default.OSo1fB),
                            description: ex.intl.string(em.default.EqdLDd),
                        }),
                        (0, i.jsx)(m.A, {
                            tag: "ul",
                            children: S.map((e, t) => (0, i.jsx)("li", { children: e.name }, t)),
                        }),
                    ],
                }),
            C &&
                null != c &&
                (0, i.jsxs)("div", {
                    className: b()(ri.Qs, ri.yG),
                    children: [
                        (0, i.jsxs)("div", {
                            className: ri.Cv,
                            children: [
                                (0, i.jsx)(rh, {
                                    title: ex.intl.string(tw.default["+uwOHt"]),
                                    accessibilityLabel: ex.intl.string(em.default.X4EiRH),
                                    description: ex.intl.string(em.default["/ctmGw"]),
                                }),
                                (0, i.jsx)(m.A, { children: j }),
                                (0, i.jsx)(rf, { sidekick: c }),
                            ],
                        }),
                        (0, i.jsx)(rb, { user: c.user, username: j }),
                    ],
                }),
        ],
    });
}
function ru() {
    let e = el();
    return (0, i.jsx)("div", {
        ref: e,
        className: b()(ri.Qs, ri.kY),
        children: (0, i.jsx)(af, { children: ex.intl.string(em.default["6RSp5q"]) }),
    });
}
function rh(e) {
    let { title: t, accessibilityLabel: a, description: r } = e,
        s = el();
    return (0, i.jsxs)("div", {
        className: ri.wx,
        children: [
            (0, i.jsxs)(ab, {
                ref: s,
                className: ri.R_,
                accessibilityLabel: a,
                children: [
                    (0, i.jsx)(ap, { icon: a8.FriendsIcon, children: ex.intl.string(tw.default.ZQakPR) }),
                    (0, i.jsx)(ef, { variant: "display-lg", className: ri.Vy, children: t }),
                ],
            }),
            (0, i.jsx)(af, { children: r }),
        ],
    });
}
function rf(e) {
    let { sidekick: t } = e,
        a = Math.round(t.numMessagesSent),
        r = Math.round(t.numVoiceMinutes);
    return (0, i.jsxs)("div", {
        className: ri.M1,
        children: [
            (0, i.jsxs)("div", {
                className: ri.dJ,
                "aria-hidden": !0,
                children: [
                    (0, i.jsx)(tv.ChatIcon, { size: "md", color: "currentColor" }),
                    (0, i.jsx)(ef, { variant: "heading-xxl/medium", className: ri.wk, children: a }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: ri.dJ,
                "aria-hidden": !0,
                children: [
                    (0, i.jsx)(tS.MicrophoneIcon, { size: "md", color: "currentColor" }),
                    (0, i.jsx)(ef, { variant: "heading-xxl/medium", className: ri.wk, children: r }),
                ],
            }),
            (0, i.jsx)(m.A, {
                children: ex.intl.formatToPlainString(em.default.NafXAs, { numMessages: a, numMinutes: r }),
            }),
        ],
    });
}
function rb(e) {
    let { user: t, username: a } = e,
        [r, n] = h.useState(""),
        [c, l] = h.useState(!1),
        [o, f] = h.useState(!1),
        _ = (0, ra.A)(t.id),
        m = r.length > 0 && r.length <= 250 && !c && !o,
        x = c ? ex.intl.string(ex.t.fjcCk5) : ex.intl.formatToPlainString(ex.t["0ZQw/X"], { name: a });
    return _
        ? (0, i.jsxs)("div", {
              className: ri.OG,
              children: [
                  (0, i.jsx)("textarea", {
                      className: ri.yB,
                      value: r,
                      onChange: (e) => n(e.target.value),
                      maxLength: 250,
                      disabled: c || o,
                      placeholder: x,
                      "aria-label": x,
                  }),
                  (0, i.jsxs)("div", {
                      className: ri.n,
                      children: [
                          (0, i.jsx)(a9.D, {
                              className: ri.KD,
                              onClick: function () {
                                  ((0, u.nr)(t.id),
                                      (0, rt.A)({
                                          giftRecipient: t,
                                          analyticsLocations: [eD.A.CHECKPOINT, eD.A.CHECKPOINT_SIDEKICK],
                                      }));
                              },
                              "aria-label": ex.intl.string(ex.t.Ve9Ge6),
                              children: (0, i.jsx)(a7.GiftIcon, { size: "refresh_sm", color: "currentColor" }),
                          }),
                          (0, i.jsx)(a9.D, {
                              className: b()(ri.KD, { [ri.r9]: !m }),
                              onClick: async function () {
                                  if (m) {
                                      f(!0);
                                      try {
                                          (await (0, d.fr)(r, t.id),
                                              n(""),
                                              l(!0),
                                              p.O.announce(ex.intl.string(ex.t.fjcCk5), "polite"));
                                      } catch {
                                          (0, s.P0)({ text: ex.intl.string(ex.t.fEptJP), variant: "critical" });
                                      } finally {
                                          f(!1);
                                      }
                                  }
                              },
                              "aria-disabled": !m,
                              "aria-label": ex.intl.string(ex.t.oeb1vg),
                              children: (0, i.jsx)(re.SendMessageIcon, { size: "refresh_sm", color: "currentColor" }),
                          }),
                      ],
                  }),
              ],
          })
        : null;
}
var r_ = a(9767);
function rp(e) {
    let { games: t } = e,
        a = Math.round(t?.totalDaysPlayed ?? 0),
        r = (0, I.bD)(t?.totalDaysPlayedPercentile);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: r_.dJ,
                children: [
                    (0, i.jsx)(am, { icon: tm.CalendarIcon, children: ex.intl.string(em.default["4N5p4D"]) }),
                    (0, i.jsx)(aP, { value: a }),
                ],
            }),
            (0, i.jsx)(af, {
                children:
                    null != r
                        ? ex.intl.format(em.default["4FXB/m"], {
                              numDays: a,
                              percent: r,
                              percentHook: (e, t) => (0, i.jsx)(aO, { children: e }, t),
                          })
                        : ex.intl.format(em.default.iCKjh6, { numDays: a }),
            }),
        ],
    });
}
function rm(e) {
    let { numUsersPlayedEveryDay: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: r_.dJ,
                children: [
                    (0, i.jsx)(am, { icon: tm.CalendarIcon, children: ex.intl.string(em.default["dx4+NI"]) }),
                    (0, i.jsx)(aH, { value: t }),
                ],
            }),
            (0, i.jsx)(af, { children: ex.intl.format(em.default["N32w+2"], { numUsers: (0, I.wj)(t) }) }),
        ],
    });
}
function rx() {
    let e = (0, _.bG)([l.A], () => l.A.stats?.games),
        t = (0, _.bG)([l.A], () => (0, I.uO)(l.A.stats)),
        a = (0, _.bG)([l.A], () => l.A.globalStats?.games?.numUsersPlayedEveryDay),
        r = !t && null != a;
    return (0, i.jsx)(t7, {
        children: (0, i.jsxs)("div", {
            className: r_.kL,
            children: [
                (0, i.jsx)(ea, {
                    animatedSrc:
                        "https://cdn.discordapp.com/assets/content/e3289e9a0a7faf4db23c3fefa390126fc64a09120fdb701f9dea833dddf671ef.png",
                    staticSrc:
                        "https://cdn.discordapp.com/assets/content/312abde9b19fcf85150d507de3f33096992506459b895ab3ea8d92c8f1e04a28.png",
                    className: r_.HW,
                }),
                (0, i.jsx)("div", {
                    className: r_.C,
                    children: r ? (0, i.jsx)(rm, { numUsersPlayedEveryDay: a }) : (0, i.jsx)(rp, { games: e }),
                }),
            ],
        }),
    });
}
var rg = a(95362),
    rA = a(828062);
function rv(e) {
    let { children: t } = e;
    return (0, i.jsx)(ef, { variant: "display-lg", className: rA.V, children: t });
}
function rw(e) {
    let { children: t } = e;
    return (0, i.jsx)(eb, { variant: "display-lg", className: rA.V, children: t });
}
var rI = a(109112),
    rE = a(311043),
    rj = a(883053);
function rS(e) {
    let { rank: t, className: a } = e;
    return (0, i.jsxs)(ep, { className: b()(rj.T, a), children: ["#", t] });
}
var rN = a(770178),
    rC = a(102189);
let rT = { fireOnMount: !0, fireOnDepsChange: !0 };
function rR(e) {
    let { text: t, textRef: a, children: r } = e,
        s = (function (e, t) {
            let [a, r] = h.useState(!1),
                i = h.useCallback((e) => {
                    let { target: t } = e;
                    r(t.scrollWidth > t.clientWidth);
                }, []);
            return ((0, rN.g)(e, i, [t], rT), a);
        })(a, t);
    return (0, i.jsx)(tG.m, {
        text: t,
        position: "bottom",
        anchorRef: a,
        shouldShow: s,
        ariaHidden: !0,
        children: r({ tabIndex: s ? 0 : void 0, className: rC.Y }),
    });
}
var rO = a(497357);
let ry = "/assets/e74703a44e087adc.svg";
function rM(e) {
    let {
            game: { id: t, name: a, coverImageHash: r },
            rank: s,
            label: n,
            shellImage: c,
            style: d,
            accessibilityLabel: l,
            className: o,
            textRef: u,
            lineClamp: h,
            ...f
        } = e,
        p = (0, _.bG)(
            [rE.A],
            () =>
                rE.A.getGame(t)?.getCoverURL(300) ??
                rr.Ay.getApplicationIconURL({ id: t, icon: r, size: 300, keepAspectRatio: !0, fallbackAvatar: !1 }),
        );
    return (0, i.jsxs)("div", {
        ...f,
        role: "listitem",
        className: b()(rO.LO, o),
        style: d,
        children: [
            (0, i.jsxs)("div", {
                className: rO.Tn,
                "aria-hidden": null != l,
                children: [
                    (0, i.jsx)("img", { src: c, alt: "", className: rO.vf }),
                    null != p
                        ? (0, i.jsx)("img", { src: p, alt: "", className: rO.Qw })
                        : (0, i.jsx)("div", {
                              className: b()(rO.Qw, rO.uj),
                              children: (0, i.jsx)(rI.UnknownGameIcon, { size: "lg" }),
                          }),
                    null != s && (0, i.jsx)(rS, { rank: s, className: rO.Tm }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: rO.zH,
                "aria-hidden": null != l,
                children: [
                    (0, i.jsx)(ef, {
                        ref: u,
                        variant: "heading-xl/medium",
                        className: rO.UU,
                        lineClamp: h,
                        children: a,
                    }),
                    (0, i.jsx)(ef, { variant: "mono-md/bold", className: rO.Pf, children: n }),
                ],
            }),
            null != l && (0, i.jsx)(m.A, { children: l }),
        ],
    });
}
function rk(e) {
    let t = h.useRef(null);
    return (0, i.jsx)(rR, {
        text: e.game.name,
        textRef: t,
        children: (a) => {
            let { tabIndex: r, className: s } = a;
            return (0, i.jsx)(rM, { ...e, className: b()(e.className, s), tabIndex: r, textRef: t, lineClamp: 1 });
        },
    });
}
function rD(e, t, a) {
    return ex.intl.formatToPlainString(em.default.mqdLhl, { gameName: e.name, rank: t, numSessions: a });
}
function rL(e) {
    let { numSessions: t, ...a } = e,
        r = Math.round(t);
    return (0, i.jsx)(rk, { ...a, label: r, shellImage: ry, style: tn, accessibilityLabel: rD(a.game, a.rank, r) });
}
function rP(e) {
    let { numSessions: t, ...a } = e,
        r = Math.round(t);
    return (0, i.jsx)(rk, {
        ...a,
        rank: 1,
        label: r,
        shellImage: "/assets/fbe1ab9677ed007a.svg",
        style: tc,
        accessibilityLabel: rD(a.game, 1, r),
    });
}
function rU(e) {
    return (0, i.jsx)(rM, { ...e, shellImage: ry, style: tn, className: rO.Ku });
}
var rG = a(842807);
let rH = [];
function rF(e) {
    let { gameStats: t } = e,
        a = Math.round(t?.totalGamesPlayed ?? 0),
        r = (0, I.bD)(t?.totalGamesPlayedPercentile),
        s = t?.games ?? rH;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: rG.wx,
                children: [
                    (0, i.jsxs)("div", {
                        className: rG.dJ,
                        children: [
                            (0, i.jsx)(am, {
                                icon: tg.GameControllerIcon,
                                children: ex.intl.string(em.default.HM2fjf),
                            }),
                            (0, i.jsx)(aP, { value: a, className: rG.ai }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        className: rG.h_,
                        children: (0, i.jsx)(af, {
                            children:
                                null != r
                                    ? ex.intl.format(em.default["hc0/yJ"], {
                                          percent: r,
                                          percentHook: (e, t) => (0, i.jsx)(aO, { children: e }, t),
                                      })
                                    : ex.intl.format(em.default.aJMJ6b, { numGames: a }),
                        }),
                    }),
                ],
            }),
            (0, i.jsx)(rg.Ip, {
                orientation: "horizontal",
                scrollbarGutter: !1,
                fade: !0,
                className: rG.ag,
                role: "list",
                children: s.map((e, t) => {
                    let { game: a, numSessions: r } = e;
                    return 0 === t
                        ? (0, i.jsx)(rP, { game: a, numSessions: r }, a.id)
                        : (0, i.jsx)(rL, { game: a, rank: t + 1, numSessions: r }, a.id);
                }),
            }),
        ],
    });
}
function rK(e) {
    let { gameStats: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: b()(rG.wx, rG.l7),
                children: [
                    (0, i.jsxs)("div", {
                        className: rG.dJ,
                        children: [
                            (0, i.jsx)(t4, { className: rG.gi }),
                            (0, i.jsx)(rw, { children: ex.intl.string(em.default.qbCgI7) }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        className: rG.h_,
                        children: (0, i.jsx)(af, { children: ex.intl.string(em.default["0oDeiM"]) }),
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: b()(rG.ag, rG.Zs),
                role: "list",
                children: z.Jb.map((e) => {
                    let { list: a, label: r } = e,
                        s = t[a][0];
                    return null != s ? (0, i.jsx)(rU, { game: s, label: ex.intl.string(r) }, a) : null;
                }),
            }),
        ],
    });
}
function rB() {
    let e = (0, _.bG)([l.A], () => l.A.stats?.games),
        t = (0, _.bG)([l.A], () => (0, I.IH)(l.A.stats)),
        a = (0, _.bG)([l.A], () => l.A.globalStats?.games),
        r = !t && null != a;
    return (0, i.jsx)(t7, {
        children: (0, i.jsx)("div", {
            className: b()(rG.kL, { [rG.TF]: r }),
            children: r ? (0, i.jsx)(rK, { gameStats: a }) : (0, i.jsx)(rF, { gameStats: e }),
        }),
    });
}
var rV = a(167662);
function rz(e) {
    let { messages: t } = e,
        a = Math.round(t?.numMessagesSent ?? 0),
        r = (0, I.bD)(t?.numMessagesSentPercentile);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: rV.dJ,
                children: [
                    (0, i.jsx)(am, { icon: tv.ChatIcon, children: ex.intl.string(tw.default.wWKySP) }),
                    (0, i.jsx)(aP, { value: a }),
                ],
            }),
            (0, i.jsx)(af, {
                children:
                    null != r
                        ? ex.intl.format(em.default.TOMBAW, {
                              numMessages: a,
                              percent: r,
                              percentHook: (e, t) => (0, i.jsx)(aO, { children: e }, t),
                          })
                        : ex.intl.format(em.default.cYCqz8, { numMessages: a }),
            }),
        ],
    });
}
function rW(e) {
    let { numWordsSent: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: rV.dJ,
                children: [
                    (0, i.jsx)(am, { icon: tv.ChatIcon, children: ex.intl.string(em.default["2BuyVC"]) }),
                    (0, i.jsx)(aH, { value: t }),
                ],
            }),
            (0, i.jsx)(af, {
                children: ex.intl.format(em.default.bAxEs2, {
                    numWords: (0, I.wj)(t),
                    numCopies: (0, I.wj)((0, I.yQ)(t)),
                }),
            }),
        ],
    });
}
function rY() {
    let e = (0, _.bG)([l.A], () => l.A.stats?.messages),
        t = (0, _.bG)([l.A], () => (0, I.nb)(l.A.stats)),
        a = (0, _.bG)([l.A], () => l.A.globalStats?.messages?.numWordsSent),
        r = !t && null != a;
    return (0, i.jsx)(t7, {
        children: (0, i.jsxs)("div", {
            className: rV.kL,
            children: [
                (0, i.jsx)(ea, {
                    animatedSrc:
                        "https://cdn.discordapp.com/assets/content/d2d8036bb6a32967893421f9956b9e8ed30abde474f68c1a34e824205549c5a1.png",
                    staticSrc:
                        "https://cdn.discordapp.com/assets/content/1dfd8684180df4216b23f0a61617250be8fcc12bc1970ac259892f34fbdb836d.png",
                    className: rV.HW,
                }),
                (0, i.jsx)("div", {
                    className: rV.C,
                    children: r ? (0, i.jsx)(rW, { numWordsSent: a }) : (0, i.jsx)(rz, { messages: e }),
                }),
            ],
        }),
    });
}
var rX = a(682163),
    rq = a(224865);
let rZ = rX.iu[rX.Ay.Sizes.XLARGE];
function rQ(e) {
    let { guild: t, size: a } = e;
    return null == t.icon && a < 48
        ? (0, i.jsx)("div", {
              className: b()(rq.K, rq.J),
              style: { width: a, height: a },
              "aria-hidden": !0,
              children: (0, i.jsx)(eo.E, { variant: "body-md/medium", children: (0, I.oW)(t.name) }),
          })
        : (0, i.jsx)(rX.Ay, {
              guild: t,
              size: rX.Ay.Sizes.XLARGE,
              iconSize: a,
              textScale: a / rZ,
              className: rq.K,
              style: { width: a, height: a, borderRadius: 0 },
              "aria-hidden": !0,
          });
}
var rJ = a(140645);
function r$(e) {
    let { numVoiceMinutes: t, numMessagesSent: a } = e,
        r = Math.round(t),
        s = Math.round(a);
    return (0, i.jsxs)("div", {
        className: rJ.M1,
        children: [
            (0, i.jsxs)("div", {
                className: rJ.dJ,
                "aria-hidden": !0,
                children: [
                    (0, i.jsx)(tS.MicrophoneIcon, { size: "md", color: "currentColor" }),
                    (0, i.jsx)(ef, { variant: "mono-md/bold", className: rJ.Qq, children: r }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: rJ.dJ,
                "aria-hidden": !0,
                children: [
                    (0, i.jsx)(tv.ChatIcon, { size: "md", color: "currentColor" }),
                    (0, i.jsx)(ef, { variant: "mono-md/bold", className: rJ.Qq, children: s }),
                ],
            }),
            (0, i.jsx)(m.A, {
                children: ex.intl.formatToPlainString(em.default["OQjeY/"], { numMinutes: r, numMessages: s }),
            }),
        ],
    });
}
var r0 = a(972106);
let r1 = [];
function r5(e) {
    let { guild: t, rank: a, iconSize: r = 100, children: s } = e,
        n = h.useRef(null);
    return (0, i.jsx)(rR, {
        text: t.name,
        textRef: n,
        children: (e) => {
            let { tabIndex: c, className: d } = e;
            return (0, i.jsxs)("li", {
                className: b()(r0.w_, d),
                tabIndex: c,
                children: [
                    (0, i.jsxs)("div", {
                        className: r0.jj,
                        children: [
                            (0, i.jsx)(rS, { rank: a }),
                            (0, i.jsxs)("div", {
                                className: r0.gI,
                                children: [
                                    (0, i.jsx)(ef, {
                                        ref: n,
                                        variant: "heading-xxl/medium",
                                        className: r0.J5,
                                        lineClamp: 1,
                                        children: t.name,
                                    }),
                                    s,
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsx)(rQ, { guild: t, size: r }),
                ],
            });
        },
    });
}
function r6(e) {
    let { guild: t, numVoiceMinutes: a, numMessagesSent: r } = e;
    return (0, i.jsx)(r5, {
        guild: t,
        rank: 1,
        iconSize: 140,
        children: (0, i.jsx)(r$, { numVoiceMinutes: a, numMessagesSent: r }),
    });
}
function r2(e) {
    let { guilds: t } = e,
        a = el();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: r0.wx,
                children: [
                    (0, i.jsxs)(ab, {
                        ref: a,
                        className: r0.R_,
                        accessibilityLabel: ex.intl.string(em.default.FroqRf),
                        children: [
                            (0, i.jsx)(ap, { icon: tE.ServerIcon, children: ex.intl.string(em.default.Mb5E6r) }),
                            (0, i.jsx)(rv, { children: ex.intl.string(tw.default.F0fkrh) }),
                        ],
                    }),
                    (0, i.jsx)(af, { children: ex.intl.string(em.default.IN1DaS) }),
                ],
            }),
            (0, i.jsx)("ul", {
                className: r0.Pl,
                children: t.map((e, t) => {
                    let { guild: a, numMessagesSent: r, numVoiceMinutes: s } = e;
                    return 0 === t
                        ? (0, i.jsx)(r6, { guild: a, numMessagesSent: r ?? 0, numVoiceMinutes: s ?? 0 }, a.id)
                        : (0, i.jsx)(r5, { guild: a, rank: t + 1 }, a.id);
                }),
            }),
        ],
    });
}
function r3(e) {
    let { guilds: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: r0.wx,
                children: [
                    (0, i.jsxs)("div", {
                        className: r0.R_,
                        children: [
                            (0, i.jsx)(t4, { className: r0.gi }),
                            (0, i.jsx)(rw, { children: ex.intl.string(tw.default.F0fkrh) }),
                        ],
                    }),
                    (0, i.jsx)(af, { children: ex.intl.string(em.default.bhnqop) }),
                ],
            }),
            (0, i.jsx)("ul", {
                className: r0.Pl,
                children: t.map((e, t) => (0, i.jsx)(r5, { guild: e, rank: t + 1 }, e.id)),
            }),
        ],
    });
}
function r4() {
    let e = (0, _.bG)([l.A], () => l.A.stats?.guilds?.guilds ?? r1),
        t = (0, _.bG)([l.A], () => l.A.globalStats?.guilds?.guildsByMembers),
        a = 0 === e.length && null != t;
    return (0, i.jsx)(t7, {
        children: (0, i.jsx)("div", {
            className: r0.kL,
            children: a ? (0, i.jsx)(r3, { guilds: t }) : (0, i.jsx)(r2, { guilds: e }),
        }),
    });
}
var r8 = a(155094);
function r9(e) {
    let { icon: t, title: a, description: r } = e;
    return (0, i.jsx)(t7, {
        children: (0, i.jsxs)("div", {
            className: r8.Q,
            children: [(0, i.jsx)(am, { icon: t, children: a }), (0, i.jsx)(af, { children: r })],
        }),
    });
}
var r7 = a(7584),
    ie = a(33293),
    it = a(498137),
    ia = a(192339),
    ir = a(574414),
    ii = a(834109),
    is = a(48763);
function ic(e) {
    let { character: t, power: a } = e,
        r = (0, A.o)(t);
    return (0, i.jsxs)(it.A, {
        cardColorPalette: r,
        size: is.W.LG,
        children: [
            (0, i.jsx)(ia.A, {}),
            (0, i.jsx)(ii.A, { variant: "full" }),
            null != a
                ? (0, i.jsx)(ir.A, {
                      powerLevel: (0, au.Le)(a.powerLevel),
                      powerLevelUnits: (0, au.sX)(a.powerLevelPercentile),
                  })
                : null,
            (0, i.jsx)(ie.A, { character: t }),
        ],
    });
}
var id = a(58410);
function il() {
    let e = (0, _.bG)([l.A], () => l.A.stats),
        t = (0, _.bG)([l.A], () => l.A.character),
        a = el(),
        r = e?.guilds?.guilds[0],
        s = e?.emojis?.emojis[0],
        n = e?.games?.games[0]?.game,
        c =
            null != n
                ? rr.Ay.getApplicationIconURL({ id: n.id, icon: n.iconHash, size: 40, fallbackAvatar: !1 })
                : void 0;
    return (0, i.jsx)(t7, {
        children: (0, i.jsxs)("div", {
            className: id.z,
            children: [
                null != t ? (0, i.jsx)(ic, { character: t, power: e?.power }) : null,
                (0, i.jsxs)("div", {
                    className: id.zH,
                    children: [
                        (0, i.jsxs)(ab, {
                            ref: a,
                            className: id.R_,
                            accessibilityLabel: ex.intl.string(em.default.ASrTAc),
                            children: [
                                (0, i.jsx)(ap, {
                                    icon: ai.ExperimentalCheckpointIcon,
                                    children: ex.intl.string(tw.default.ir6nEQ),
                                }),
                                (0, i.jsx)(ef, {
                                    variant: "display-lg",
                                    className: id.Vy,
                                    children: ex.intl.string(tw.default.y4M1na),
                                }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: id.M1,
                            children: [
                                (0, i.jsx)(io, {
                                    label: ex.intl.string(em.default.MSrV9z),
                                    value: e?.voice?.totalVoiceMinutes,
                                }),
                                (0, i.jsx)(io, {
                                    label: ex.intl.string(em.default.hhh11L),
                                    value: e?.messages?.numMessagesSent,
                                }),
                                (0, i.jsx)(io, {
                                    label: ex.intl.string(em.default["f5S+pt"]),
                                    value: r?.numDaysInteracted,
                                }),
                                (0, i.jsx)(iu, {
                                    label: ex.intl.string(tw.default["8XPMJj"]),
                                    icon: null != r ? (0, i.jsx)(rQ, { guild: r.guild, size: 40 }) : (0, i.jsx)(ih, {}),
                                    name: null != r ? r.guild.name : ex.intl.string(ex.t.PoWNfe),
                                }),
                                (0, i.jsx)(io, {
                                    label: ex.intl.string(em.default.xVSlv3),
                                    value: e?.emojis?.numEmojisSent,
                                }),
                                (0, i.jsx)(iu, {
                                    label: ex.intl.string(tw.default["3sARW7"]),
                                    icon:
                                        null != s
                                            ? (0, i.jsx)(aT.A, {
                                                  emojiId: s.id,
                                                  emojiName: null == s.id ? s.name : void 0,
                                                  animated: s.animated,
                                                  alt: "",
                                                  className: id.Kk,
                                              })
                                            : (0, i.jsx)(ih, {}),
                                    name:
                                        null == s
                                            ? ex.intl.string(ex.t.PoWNfe)
                                            : null == s.id
                                              ? r7.Ay.convertSurrogateToName(s.name)
                                              : `:${s.name}:`,
                                }),
                                (0, i.jsx)(io, {
                                    label: ex.intl.string(em.default.y2Y1DD),
                                    value: e?.games?.totalDaysPlayed,
                                }),
                                (0, i.jsx)(iu, {
                                    label: ex.intl.string(tw.default.RbT4Zq),
                                    icon:
                                        null != c
                                            ? (0, i.jsx)("img", { src: c, alt: "", className: b()(id.Kk, id.Gt) })
                                            : null == n
                                              ? (0, i.jsx)(ih, {})
                                              : (0, i.jsx)("div", {
                                                    className: b()(id.Kk, id.Gc),
                                                    children: (0, i.jsx)(rI.UnknownGameIcon, {
                                                        size: "md",
                                                        color: "currentColor",
                                                    }),
                                                }),
                                    name: null != n ? n.name : ex.intl.string(ex.t.PoWNfe),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
function io(e) {
    let { label: t, value: a } = e;
    return (0, i.jsxs)("div", {
        className: id.dJ,
        children: [
            (0, i.jsx)(ef, { variant: "heading-md/semibold", children: t }),
            (0, i.jsx)(ef, {
                variant: "heading-xxl/medium",
                className: id.wk,
                children: Math.round(a ?? 0).toLocaleString(ex.intl.currentLocale),
            }),
        ],
    });
}
function iu(e) {
    let { label: t, icon: a, name: r } = e,
        s = h.useRef(null);
    return (0, i.jsx)(rR, {
        text: r,
        textRef: s,
        children: (e) => {
            let { tabIndex: n, className: c } = e;
            return (0, i.jsxs)("div", {
                className: b()(id.dJ, id.u4, c),
                tabIndex: n,
                children: [
                    (0, i.jsx)(ef, { variant: "heading-md/semibold", children: t }),
                    (0, i.jsxs)("div", {
                        className: id.AS,
                        children: [
                            a,
                            (0, i.jsx)(ef, {
                                ref: s,
                                variant: "heading-xl/medium",
                                lineClamp: 1,
                                className: id.TJ,
                                children: r,
                            }),
                        ],
                    }),
                ],
            });
        },
    });
}
function ih() {
    return (0, i.jsx)("div", {
        className: b()(id.Kk, id.Gc, id.Wn),
        children: (0, i.jsx)(rI.UnknownGameIcon, { size: "lg", color: "currentColor" }),
    });
}
var ib = a(651946);
function i_() {
    let e = (0, _.bG)([l.A], () => l.A.stats?.guilds?.guilds[0]),
        t = Math.round(e?.numDaysInteracted ?? 0),
        a = (0, I.bD)(e?.numDaysInteractedPercentile),
        r = h.useRef(null);
    return (0, i.jsx)(t7, {
        children: (0, i.jsxs)("div", {
            className: ib.kL,
            children: [
                (0, i.jsxs)("div", {
                    className: ib.wx,
                    children: [
                        (0, i.jsxs)("div", {
                            className: ib.R_,
                            children: [
                                (0, i.jsx)(am, { icon: tE.ServerIcon, children: ex.intl.string(em.default["M+a+t1"]) }),
                                (0, i.jsx)(aP, { value: t }),
                            ],
                        }),
                        (0, i.jsx)(af, {
                            children:
                                null != a
                                    ? ex.intl.format(em.default.sIDTV1, {
                                          numDays: t,
                                          percent: a,
                                          percentHook: (e, t) => (0, i.jsx)(aO, { children: e }, t),
                                      })
                                    : ex.intl.format(em.default.nLCUQ4, { numDays: t }),
                        }),
                    ],
                }),
                null != e &&
                    (0, i.jsx)("div", {
                        className: ib.bU,
                        children: (0, i.jsx)(rR, {
                            text: e.guild.name,
                            textRef: r,
                            children: (t) => {
                                let { tabIndex: a, className: s } = t;
                                return (0, i.jsxs)("div", {
                                    className: b()(ib.Nr, s),
                                    style: { width: 360 },
                                    tabIndex: a,
                                    children: [
                                        (0, i.jsx)(rQ, { guild: e.guild, size: 360 }),
                                        (0, i.jsxs)("div", {
                                            className: ib.zH,
                                            children: [
                                                (0, i.jsx)(ef, {
                                                    ref: r,
                                                    variant: "heading-xxl/medium",
                                                    className: ib.J5,
                                                    lineClamp: 1,
                                                    children: e.guild.name,
                                                }),
                                                (0, i.jsx)(r$, {
                                                    numVoiceMinutes: e.numVoiceMinutes ?? 0,
                                                    numMessagesSent: e.numMessagesSent ?? 0,
                                                }),
                                            ],
                                        }),
                                    ],
                                });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var ip = a(270704);
function im(e) {
    let { voice: t } = e,
        a = Math.round(t?.totalVoiceMinutes ?? 0),
        r = (0, I.bD)(t?.totalVoiceMinutesPercentile);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: ip.dJ,
                children: [
                    (0, i.jsx)(am, { icon: tS.MicrophoneIcon, children: ex.intl.string(em.default["3/T12E"]) }),
                    (0, i.jsx)(aP, { value: a, alignment: "center" }),
                ],
            }),
            (0, i.jsx)(af, {
                children:
                    null != r
                        ? ex.intl.format(em.default.RqXsIs, {
                              numMinutes: a,
                              percent: r,
                              percentHook: (e, t) => (0, i.jsx)(aO, { children: e }, t),
                          })
                        : ex.intl.format(em.default.Y3poDW, { numMinutes: a }),
            }),
        ],
    });
}
function ix(e) {
    let { peakHour: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: ip.dJ,
                children: [
                    (0, i.jsx)(am, { icon: tS.MicrophoneIcon, children: ex.intl.string(em.default.ZCwB8J) }),
                    (0, i.jsx)(aH, { value: t }),
                ],
            }),
            (0, i.jsx)(af, { children: ex.intl.string(em.default.huiTne) }),
        ],
    });
}
function ig() {
    let e = (0, _.bG)([l.A], () => l.A.stats?.voice),
        t = (0, _.bG)([l.A], () => (0, I.Kr)(l.A.stats)),
        a = (0, _.bG)([l.A], () => l.A.globalStats?.voice?.peakHourUtc),
        r = (0, I.XF)(a)?.value,
        s = !t && null != r;
    return (0, i.jsxs)(t7, {
        children: [
            (0, i.jsx)(ea, {
                animatedSrc:
                    "https://cdn.discordapp.com/assets/content/04746dc04eab575d0168935af2b1b3f97e2e00439f84bd0f0474276e0c5a81dc.png",
                staticSrc:
                    "https://cdn.discordapp.com/assets/content/c4c2d6b631bff3da4e4bb9afffc8f89bc9fb6f76a2fcd824f8a7af83eb7f1e6b.png",
                className: ip.Tp,
            }),
            (0, i.jsx)("div", {
                className: ip.Qs,
                children: s ? (0, i.jsx)(ix, { peakHour: r }) : (0, i.jsx)(im, { voice: e }),
            }),
        ],
    });
}
function iA(e) {
    let { route: t, onNextStep: a, onPreviousStep: r } = e;
    if (t === w.gr.HOME) return (0, i.jsx)(aC, { onStart: a });
    if (t === w.gr.INTRODUCTION) return (0, i.jsx)(at, {});
    let { statsScreen: s } = (0, w.UG)(t);
    switch (s) {
        case w.oI.VOICE_INTRO:
            return (0, i.jsx)(r9, {
                icon: tS.MicrophoneIcon,
                title: ex.intl.string(em.default["/7XYsa"]),
                description: ex.intl.string(em.default["X8/G/o"]),
            });
        case w.oI.VOICE:
            return (0, i.jsx)(ig, {});
        case w.oI.MESSAGES_INTRO:
            return (0, i.jsx)(r9, {
                icon: tv.ChatIcon,
                title: ex.intl.string(em.default["2BuyVC"]),
                description: ex.intl.string(em.default["kF+Y3a"]),
            });
        case w.oI.MESSAGES:
            return (0, i.jsx)(rY, {});
        case w.oI.SERVERS_INTRO:
            return (0, i.jsx)(r9, {
                icon: tE.ServerIcon,
                title: ex.intl.string(tw.default.F0fkrh),
                description: ex.intl.string(em.default.Xg82Gy),
            });
        case w.oI.SERVERS:
            return (0, i.jsx)(r4, {});
        case w.oI.TOP_SERVER:
            return (0, i.jsx)(i_, {});
        case w.oI.EMOJI_INTRO:
            return (0, i.jsx)(r9, {
                icon: ed.EmojiSlightlySmilingFaceIcon,
                title: ex.intl.string(em.default.ZTDCIv),
                description: ex.intl.string(em.default.y8Sr8J),
            });
        case w.oI.EMOJI:
            return (0, i.jsx)(a2, {});
        case w.oI.GAMES_INTRO:
            return (0, i.jsx)(r9, {
                icon: tg.GameControllerIcon,
                title: ex.intl.string(em.default.HM2fjf),
                description: ex.intl.string(em.default.LQiFqJ),
            });
        case w.oI.GAMES:
            return (0, i.jsx)(rB, {});
        case w.oI.GAME_TIME:
            return (0, i.jsx)(rx, {});
        case w.oI.SQUAD:
        case w.oI.SIDEKICK:
            return (0, i.jsx)(ro, { route: t, onNextStep: a, onPreviousStep: r });
        case w.oI.SUMMARY:
            return (0, i.jsx)(il, {});
        case w.oI.SHARE:
            return (0, i.jsx)(aA, {});
        default:
            return null;
    }
}
var iv = a(650809),
    iw = a(428692);
let iI = {
    [w.s9.FACE]: { icon: tS.MicrophoneIcon, label: ex.t.K3lovD },
    [w.s9.OUTFIT]: { icon: tv.ChatIcon, label: ex.t.OIgYlQ },
    [w.s9.HEADWEAR]: { icon: tE.ServerIcon, label: ex.t["7hB4kg"] },
    [w.s9.SHOES]: { icon: ed.EmojiSlightlySmilingFaceIcon, label: ex.t.sMOuuS },
    [w.s9.WEARABLE]: { icon: tg.GameControllerIcon, label: ex.t.URyqtP },
    [w.s9.AURA]: { icon: tm.CalendarIcon, label: em.default.y2Y1DD },
    [w.s9.ASSEMBLED]: { icon: a8.FriendsIcon, label: ex.t.TdEu5X },
    [w.s9.FINALIZE]: { icon: iv.PaintPaletteIcon, label: em.default.gmMD2I },
    [w.s9.SUMMARY]: { icon: ai.ExperimentalCheckpointIcon, label: tw.default.y4M1na },
};
function iE(e) {
    let {
            step: { icon: t, label: a, route: r },
            disabled: s,
            blockedTraitDescriptionId: n,
            sound: c,
            onRouteClick: d,
        } = e,
        l = ex.intl.string(a),
        { onPointerDown: o, onKeyDown: u, onClickWithSound: h } = tX({ source: c, onClick: () => d(r), disabled: s });
    return (0, i.jsx)(tG.m, {
        text: l,
        ariaHidden: !0,
        children: (0, i.jsxs)(a9.D, {
            onPointerDown: o,
            onKeyDown: u,
            onClick: h,
            role: "tab",
            "aria-selected": !1,
            className: b()(iw.PM, iw.CD, { [iw.vk]: !s }),
            "aria-label": l,
            "aria-disabled": s,
            "aria-describedby": n,
            children: [
                (0, i.jsx)("div", { className: b()(iw.Om, iw.hZ) }),
                (0, i.jsx)(t, { size: "xs", color: "currentColor", className: iw.RQ }),
            ],
        }),
    });
}
function ij(e) {
    let { flow: t, stats: a, activeRoute: r, isRouteBlocked: s, blockedTraitDescriptionId: n, onRouteClick: c } = e,
        d = (function (e, t) {
            let a = [];
            for (let r of C({ flow: e, stats: t })) {
                let { characterStage: e } = (0, w.UG)(r),
                    t = iI[e];
                null != t && a.at(-1)?.stage !== e && a.push({ ...t, stage: e, route: r });
            }
            return a;
        })(t, a),
        { characterStage: o } = (0, w.UG)(r),
        u = d.findIndex((e) => {
            let { stage: t } = e;
            return t === o;
        }),
        [f, b] = h.useState(u);
    u > f && b(u);
    let p = (0, _.bG)([l.A], () => l.A.isSaving);
    return -1 === u
        ? null
        : (0, i.jsx)("div", {
              className: iw.qB,
              role: "tablist",
              "aria-label": ex.intl.string(em.default.DyMw85),
              children: d.map((e, t) => {
                  let { icon: a } = e;
                  return t === u
                      ? (0, i.jsx)(
                            tG.m,
                            {
                                text: ex.intl.string(e.label),
                                ariaHidden: !0,
                                children: (0, i.jsx)("div", {
                                    className: iw.PM,
                                    role: "tab",
                                    "aria-selected": !0,
                                    "aria-label": ex.intl.string(e.label),
                                    children: (0, i.jsx)(a, { size: "xs", color: "currentColor" }),
                                }),
                            },
                            e.stage,
                        )
                      : t <= f
                        ? (0, i.jsx)(
                              iE,
                              {
                                  step: e,
                                  disabled: p || s,
                                  blockedTraitDescriptionId: n,
                                  sound: t < u ? tL : tP,
                                  onRouteClick: c,
                              },
                              e.stage,
                          )
                        : (0, i.jsx)(
                              "div",
                              {
                                  className: iw.PM,
                                  role: "tab",
                                  "aria-selected": !1,
                                  "aria-disabled": !0,
                                  "aria-label": ex.intl.string(e.label),
                                  children: (0, i.jsx)("div", { className: iw.Om }),
                              },
                              e.stage,
                          );
              }),
          });
}
var iS = a(516749),
    iN = a(531685),
    iC = a(399667),
    iT = a(468311),
    iR = a(706121),
    iO = a(985747),
    iy = a(118531);
let iM = {
    tex_aura_01_blossom: {
        url: "https://cdn.discordapp.com/assets/content/e2b0577c5815a08ed970f8192b862231a1ffe18387dcd7dcec888e9c3027199a.webp",
        riveId: 6946196,
        width: 4080,
        height: 4080,
        widthAt1x: 2560,
    },
    tex_aura_02_prism: {
        url: "https://cdn.discordapp.com/assets/content/d689a73838fcb85906b77e916194e0c392dd3ceddcc52061e56c63a966dcf1e2.webp",
        riveId: 6946199,
        width: 4080,
        height: 4080,
        widthAt1x: 2560,
    },
    tex_aura_03_shock: {
        url: "https://cdn.discordapp.com/assets/content/0705b7642d139a6163da7e61eff087f7b6e88e6407ab86dea3d05dc4e81a6f45.webp",
        riveId: 6946202,
        width: 4080,
        height: 4080,
        widthAt1x: 2560,
    },
    tex_aura_04_blaze: {
        url: "https://cdn.discordapp.com/assets/content/2a529cf90b15974fee17885a301d3367c56b2a1962931630210bf2a5f6bddedc.webp",
        riveId: 6946204,
        width: 4080,
        height: 4080,
        widthAt1x: 2560,
    },
    tex_aura_05_fated: {
        url: "https://cdn.discordapp.com/assets/content/cb5fcd7305a8925206c759e95257fdd5ce3f2f591bb351caf0029d5064d896b9.webp",
        riveId: 6946205,
        width: 4080,
        height: 4080,
        widthAt1x: 2560,
    },
    tex_aura_06_luster: {
        url: "https://cdn.discordapp.com/assets/content/59fe644414bdaad3017ede0d6a2a7d6433824a11addaa896d436e4da0e3280c6.webp",
        riveId: 6946206,
        width: 4080,
        height: 4080,
        widthAt1x: 2560,
    },
    tex_aura_07_bubbly: {
        url: "https://cdn.discordapp.com/assets/content/19b3d871b42fdca6a5c808842e204d98aa6523a54e793f3154e8e60b96b166ce.webp",
        riveId: 6946208,
        width: 4080,
        height: 4080,
        widthAt1x: 2560,
    },
    tex_aura_08_spooky: {
        url: "https://cdn.discordapp.com/assets/content/258f8c1eefdd4a4186b6e9f85d0986813469857414b1b5502c81078d9a76e98a.webp",
        riveId: 7026924,
        width: 4080,
        height: 4080,
        widthAt1x: 2560,
    },
    tex_aura_09_cursed: {
        url: "https://cdn.discordapp.com/assets/content/bb67049ba7ae915ec7e906730567a2781dfc96f5a135afa2f6942478e9f20f2c.webp",
        riveId: 7026931,
        width: 4080,
        height: 4080,
        widthAt1x: 2560,
    },
    tex_aura_10_magnetic: {
        url: "https://cdn.discordapp.com/assets/content/c3aa3b181bde82281f302a4c7eeda0192fd7f82b2de185e82daf61e15f257ead.webp",
        riveId: 6946211,
        width: 4080,
        height: 4080,
        widthAt1x: 2560,
    },
    tex_aura_11_radioactive: {
        url: "https://cdn.discordapp.com/assets/content/2c5a6cd560dc5b1f5331a8cfdd240307ac9f2943305681fc99eba17af68d8cec.webp",
        riveId: 6946212,
        width: 4080,
        height: 4080,
        widthAt1x: 2560,
    },
    tex_aura_12_elemental: {
        url: "https://cdn.discordapp.com/assets/content/27470dbd590f675c78e45d1918951e6e1eb0d9404f17d8c829b927b97ccc0528.webp",
        riveId: 6946214,
        width: 4080,
        height: 4080,
        widthAt1x: 2560,
    },
    tex_aura_13_shimmer: {
        url: "https://cdn.discordapp.com/assets/content/41e05e6577af1a5dff29c80f78be1c628e8d6ffdba6ab769900519d6466223b3.webp",
        riveId: 6946217,
        width: 4080,
        height: 4080,
        widthAt1x: 2560,
    },
    tex_aura_14_witchy: {
        url: "https://cdn.discordapp.com/assets/content/c1d8b710eb16bc0e2723f17df37f9544c322f8b77f01c8ef416f210794896e80.webp",
        riveId: 7026932,
        width: 4080,
        height: 4080,
        widthAt1x: 2560,
    },
    tex_base_01_icy: {
        url: "https://cdn.discordapp.com/assets/content/175380cce0f63d36fa2d3fe2794a42bef264584529df6313a90fffd9f444642f.webp",
        riveId: 6945448,
        width: 833,
        height: 1316,
        widthAt1x: 273,
    },
    tex_base_02_crimson: {
        url: "https://cdn.discordapp.com/assets/content/096971854f9e84ca6d397d763d7a2df3e9a540419d68de1683e6264cf9771402.webp",
        riveId: 6945450,
        width: 833,
        height: 1316,
        widthAt1x: 273,
    },
    tex_base_03_chrome: {
        url: "https://cdn.discordapp.com/assets/content/0f3f41debc5f0a2a7ff3a90a98e80d10e384b5e8680ece83caf0af3c2e941697.webp",
        riveId: 6945451,
        width: 833,
        height: 1316,
        widthAt1x: 273,
    },
    tex_base_04_galactic: {
        url: "https://cdn.discordapp.com/assets/content/b827dc2a60147f1fa3e33073a48ad7bc120ea6f7d0770eba06971e3a81c58239.webp",
        riveId: 6945452,
        width: 833,
        height: 1316,
        widthAt1x: 273,
    },
    tex_base_05_forrest: {
        url: "https://cdn.discordapp.com/assets/content/0996433f3f8486f168b8eab8841d099ad736c5c166e2ccf669f5e18536a1cd78.webp",
        riveId: 6945454,
        width: 833,
        height: 1316,
        widthAt1x: 273,
    },
    tex_base_06_mighnight: {
        url: "https://cdn.discordapp.com/assets/content/b5437c9682f5c273d412a0d5700d18b01ce4fd8dd41b5a2eb94f1ac70def0493.webp",
        riveId: 6945456,
        width: 833,
        height: 1316,
        widthAt1x: 273,
    },
    tex_base_07_glacier: {
        url: "https://cdn.discordapp.com/assets/content/fbba0d8f4b2ead815afb45bfa3e3bc529b87f0eb9fe6f116ead8617e99f73edb.webp",
        riveId: 7026923,
        width: 833,
        height: 1316,
        widthAt1x: 273,
    },
    tex_base_08_orange: {
        url: "https://cdn.discordapp.com/assets/content/861c67a712d842a269cf386d076d73c5b82bccf22f122e2ca58eb7b2f9f4910a.webp",
        riveId: 6945457,
        width: 833,
        height: 1316,
        widthAt1x: 273,
    },
    tex_base_09_pink: {
        url: "https://cdn.discordapp.com/assets/content/fd2c2ca2b95d8332e0c6b71fcd09c01a433a3bb82e6007cde3a34f8eaf78118b.webp",
        riveId: 6945459,
        width: 833,
        height: 1316,
        widthAt1x: 273,
    },
    tex_base_10_red: {
        url: "https://cdn.discordapp.com/assets/content/6bbde6588b826c49df896ece1b5521ea3deb7693a0ab6a96414889f3cf86d214.webp",
        riveId: 6945460,
        width: 833,
        height: 1316,
        widthAt1x: 273,
    },
    tex_base_11_cobalt: {
        url: "https://cdn.discordapp.com/assets/content/54c48557922ef25abf2ae44ac30bb89fc18cf3e817a0dbb8cb999e7d4e88a25e.webp",
        riveId: 6945462,
        width: 833,
        height: 1316,
        widthAt1x: 273,
    },
    "tex_base_12_x-ray": {
        url: "https://cdn.discordapp.com/assets/content/0610ec83c1a63ee5d35bf3f33ef84e26123565100b1ebc2f7e553569f6389e21.webp",
        riveId: 6945463,
        width: 833,
        height: 1316,
        widthAt1x: 273,
    },
    tex_base_13_liquid: {
        url: "https://cdn.discordapp.com/assets/content/4a87c2dea61d07d6e560866b618d1a16741e1377cd50545e8aca5a5250657d40.webp",
        riveId: 6945465,
        width: 833,
        height: 1316,
        widthAt1x: 273,
    },
    tex_base_14_butter: {
        url: "https://cdn.discordapp.com/assets/content/56a1b0472868f73c93350c8a73127eda64771bd884c7f4b9fc7055527b07a1d4.webp",
        riveId: 6945464,
        width: 833,
        height: 1316,
        widthAt1x: 273,
    },
    tex_base_15_iridescent: {
        url: "https://cdn.discordapp.com/assets/content/4ddd69337f5f51635742e70a344805df71109ba652ce467fa01582b99cb15ca4.webp",
        riveId: 6945468,
        width: 833,
        height: 1316,
        widthAt1x: 273,
    },
    tex_base_shadow: {
        url: "https://cdn.discordapp.com/assets/content/ed8b72ee7b21e3fdfd09054e873dd9989a77d12902e5bed116dd1e5bc39b3658.webp",
        riveId: 6885304,
        width: 1008,
        height: 350,
        widthAt1x: 331,
    },
    tex_env_labNight_bg: {
        url: "https://cdn.discordapp.com/assets/content/5fcc2d762e62c2ae52c7381be2ed0f3dc816795344b9303a51024d0521447699.webp",
        riveId: 6979903,
        width: 3952,
        height: 2223,
        widthAt1x: 1968,
    },
    tex_env_labNight_bg_mobileLandscape: {
        url: "https://cdn.discordapp.com/assets/content/46cf720ddb76a5975b8705fd532e27e75f683a79f6842bb9b6cf60daa1691ce0.webp",
        riveId: 7118591,
        width: 4096,
        height: 2595,
        widthAt1x: 1470,
    },
    tex_env_labNight_bg_mobilePortrait: {
        url: "https://cdn.discordapp.com/assets/content/445d6d89646aa5eeacba5b6fe893db6ae931c1756946bee6eb026c5eb4a1f4a7.webp",
        riveId: 7088398,
        width: 2353,
        height: 3332,
        widthAt1x: 784,
    },
    tex_env_labNight_fgLeft: {
        url: "https://cdn.discordapp.com/assets/content/14b81d95ca0227535c38194f3961b6e0fb8df4d1fdbcad9133262605938e6c2a.webp",
        riveId: 6979899,
        width: 1462,
        height: 451,
        widthAt1x: 705,
    },
    tex_env_labNight_fgRight: {
        url: "https://cdn.discordapp.com/assets/content/c3b2c54e6d95d021851397aa1e6014d19759e4a13d0dfe604c912a4b030ff203.webp",
        riveId: 6979900,
        width: 1426,
        height: 2232,
        widthAt1x: 713,
    },
    tex_env_labNight_mgBottom: {
        url: "https://cdn.discordapp.com/assets/content/90c46b4aaf2be6f4539860ac7aef8b6d60ab0c4dbb42acb3755b78452a9dfa69.webp",
        riveId: 6979898,
        width: 1800,
        height: 514,
        widthAt1x: 900,
    },
    tex_env_labNight_mgBottomMobile: {
        url: "https://cdn.discordapp.com/assets/content/89370c20287193d1be0e5d7d3868d10bb6d09f35677be72957bf756da0873a4a.webp",
        riveId: 6979901,
        width: 1171,
        height: 364,
        widthAt1x: 564,
    },
    tex_env_labNight_mgLight: {
        url: "https://cdn.discordapp.com/assets/content/75888ea5b13919a455db725d7c7bff432de103b8b856333bf6293d916f42ab5e.webp",
        riveId: 6979902,
        width: 839,
        height: 1032,
        widthAt1x: 404,
    },
    tex_env_labNight_mgTop: {
        url: "https://cdn.discordapp.com/assets/content/ab91ef672e2676d9757f5a5fa465363d66024cff0c0dd9bb75cd6b355ba33d9e.webp",
        riveId: 6979904,
        width: 1162,
        height: 489,
        widthAt1x: 560,
    },
    tex_env_labNight_sky: {
        url: "https://cdn.discordapp.com/assets/content/7dde187de68290a9dfe1ff7e2521ade9682c866b64ec57e8c1d3e9278ddd73d6.webp",
        riveId: 6979905,
        width: 1919,
        height: 1426,
        widthAt1x: 925,
    },
    tex_face_06_confused_textureAtlas: {
        url: "https://cdn.discordapp.com/assets/content/5122692930f1fc219e03764c6f075d0db23f2c9b9af4630493f5535edd190d28.webp",
        riveId: 6866859,
        width: 682,
        height: 341,
    },
    tex_face_07_anxious_textureAtlas: {
        url: "https://cdn.discordapp.com/assets/content/cf1fd596a8f2180aa33d8be5f8a3e24c7e7d777e285ad9a0bd4270cdaff1a437.webp",
        riveId: 6866913,
        width: 458,
        height: 181,
    },
    tex_face_09_rage_textureAtlas: {
        url: "https://cdn.discordapp.com/assets/content/bbdc9063a3ab4a299e686fb29b9121484d83c1a92fe09c9864cfdf5189407519.webp",
        riveId: 6863487,
        width: 900,
        height: 201,
    },
    tex_face_11_spellbound_textureAtlas: {
        url: "https://cdn.discordapp.com/assets/content/30245c5db85935d260665cf86ebc95051b93f05a608bb7381b9848dacacc9d3c.webp",
        riveId: 6856738,
        width: 1106,
        height: 278,
    },
    tex_face_13_freeFall_textureAtlas: {
        url: "https://cdn.discordapp.com/assets/content/63950cbbad9db04a28aff1fb86a0fa4a152f425f98c6456307726a006dcb29da.webp",
        riveId: 6866304,
        width: 391,
        height: 203,
    },
    tex_face_14_possessed_textureAtlas: {
        url: "https://cdn.discordapp.com/assets/content/c6866d54c44f1135bc370833b8c568d176c0cf8aeec1d218c3c2c6b055634866.webp",
        riveId: 6864828,
        width: 649,
        height: 525,
    },
    tex_face_spooked_drop: {
        url: "https://cdn.discordapp.com/assets/content/c0ef1aa0fe438130e637c52d9587c2bec5c175398843c085bf63d53a1cc60a7d.webp",
        riveId: 6825665,
        width: 30,
        height: 90,
    },
    tex_face_spooked_shadow: {
        url: "https://cdn.discordapp.com/assets/content/24fac27097b1200e730a4fe48358eb4a746963b3e635ae9582872a19e8b87a18.webp",
        riveId: 7104996,
        width: 677,
        height: 236,
    },
    tex_headwear_01_elvenHeadpiece: {
        url: "https://cdn.discordapp.com/assets/content/41903840a79ad543f21fa9f40f1b7c076ac16a8f4a193f6951ce1bc8da21dbe4.webp",
        riveId: 6878398,
        width: 546,
        height: 231,
        widthAt1x: 182,
    },
    tex_headwear_02_headphones: {
        url: "https://cdn.discordapp.com/assets/content/71d94c94a82c5357529c52d33facf7361cd733be7bb1908632aa1fd375bc8678.webp",
        riveId: 7012013,
        width: 880,
        height: 495,
        widthAt1x: 288,
    },
    tex_headwear_03_bananaPeel: {
        url: "https://cdn.discordapp.com/assets/content/fe15e02141e24b2e0b3cc54e4ca967545e8737345d35f24fc843487b2f07d52f.webp",
        riveId: 6944187,
        width: 952,
        height: 567,
        widthAt1x: 312,
    },
    tex_headwear_04_piercings: {
        url: "https://cdn.discordapp.com/assets/content/cab0de0a14c34a595a7773cb81c56af3e90603b2b9760723cde97f61a161922a.webp",
        riveId: 6945559,
        width: 322,
        height: 280,
        widthAt1x: 106,
    },
    tex_headwear_05_headband: {
        url: "https://cdn.discordapp.com/assets/content/c9167315bc86f8ac43ae9777d38e8daed9a7beff8390e2b664ebf738a6982404.webp",
        riveId: 6943812,
        width: 1022,
        height: 742,
        widthAt1x: 335,
    },
    tex_headwear_06_sunGlasses: {
        url: "https://cdn.discordapp.com/assets/content/0a1c73f81e29ad53e8889ae38ba6b3a5a16e4d7dda9eb4b0e070f6dc562e593f.webp",
        riveId: 6878347,
        width: 819,
        height: 350,
        widthAt1x: 269,
    },
    tex_headwear_07_backwardHat: {
        url: "https://cdn.discordapp.com/assets/content/0f6576c50446353959d6063ce87a702b12e6983e4e2d4abbe1382e4e7d79dd9b.webp",
        riveId: 6878399,
        width: 861,
        height: 420,
        widthAt1x: 287,
    },
    tex_headwear_08_leaf: {
        url: "https://cdn.discordapp.com/assets/content/ab8aa59e898f3a281f81a8d6703355c32debba8a5879719121141baa3dc8aca9.webp",
        riveId: 6943794,
        width: 681,
        height: 227,
        widthAt1x: 228,
    },
    tex_headwear_09_fire: {
        url: "https://cdn.discordapp.com/assets/content/52c3472e9e5c5d0923e77b50358d3e71ab1e40aab8df78dba73163d2c3dea572.webp",
        riveId: 6878288,
        width: 910,
        height: 574,
        widthAt1x: 298,
    },
    tex_headwear_10_halo: {
        url: "https://cdn.discordapp.com/assets/content/d7a51adc59b09eb652d8dd473804dd9e369966eeeb694abae3d801215d8d4f93.webp",
        riveId: 6878456,
        width: 714,
        height: 322,
        widthAt1x: 234,
    },
    tex_headwear_11_brain: {
        url: "https://cdn.discordapp.com/assets/content/cf6a8c75cfbaa0bf81ea0cce2a932dbc265916d6f0f572b3e8c63b4093778bf4.webp",
        riveId: 6878244,
        width: 414,
        height: 276,
        widthAt1x: 138,
    },
    tex_headwear_12_trafficCone: {
        url: "https://cdn.discordapp.com/assets/content/9d7f0fa78ba9217409be309c1b7fddd20503251292aaa58c06fecc3b68741abb.webp",
        riveId: 6878330,
        width: 420,
        height: 399,
        widthAt1x: 140,
    },
    tex_headwear_13_teddyBeanie: {
        url: "https://cdn.discordapp.com/assets/content/2bc458cf90e244a2f272b41461945fde86846111276a505f56016ee058022c7d.webp",
        riveId: 6878395,
        width: 910,
        height: 532,
        widthAt1x: 298,
    },
    tex_headwear_14_crown: {
        url: "https://cdn.discordapp.com/assets/content/48d7f40db34c7c16aafa68a525df464c88a847ba757c4e720943d1de33efe210.webp",
        riveId: 6878327,
        width: 602,
        height: 455,
        widthAt1x: 197,
    },
    tex_none: {
        url: "https://cdn.discordapp.com/assets/content/a0cbeae4f229972a95fe4b0855e085d1cbeb4ce09600f340f9629824fe163fd0.webp",
        riveId: 6585260,
        width: 1,
        height: 1,
    },
    tex_outfit_01_baddie: {
        url: "https://cdn.discordapp.com/assets/content/a638356d8b217bb4c38954a53b644478006a329bf7cfbf9fb7019685e281ebab.webp",
        riveId: 6942551,
        width: 707,
        height: 532,
        widthAt1x: 232,
    },
    tex_outfit_01_baddie_monochrome: {
        url: "https://cdn.discordapp.com/assets/content/181b04511ce9a18af59375d77ae1a971c1d78d7739ad38fc9ba82b644d80bc45.webp",
        riveId: 6942552,
        width: 707,
        height: 532,
        widthAt1x: 232,
    },
    tex_outfit_01_baddie_pastel: {
        url: "https://cdn.discordapp.com/assets/content/cb13824a08fd2eb0115bf56399c4ba1ef9aaa4aaa44a3dc551270ed5e7885250.webp",
        riveId: 6942562,
        width: 707,
        height: 532,
        widthAt1x: 232,
    },
    tex_outfit_01_baddie_sunset: {
        url: "https://cdn.discordapp.com/assets/content/ec0e423280609f7f963a3ce34d8962971f4a6adee53cd95f8412d11c4f2d8603.webp",
        riveId: 6942559,
        width: 707,
        height: 532,
        widthAt1x: 232,
    },
    tex_outfit_01_baddie_violet: {
        url: "https://cdn.discordapp.com/assets/content/0f09a73bb81b7dbc72de42f2bb6e0c8a80d48cd00426636cfe55be210a87cfe1.webp",
        riveId: 6942557,
        width: 707,
        height: 532,
        widthAt1x: 232,
    },
    tex_outfit_02_trash: {
        url: "https://cdn.discordapp.com/assets/content/bfaacc2bc71388a8030b9b93dbf1aff45321010c2fcd35c89a79db4aa85cafde.webp",
        riveId: 6923673,
        width: 938,
        height: 644,
        widthAt1x: 308,
    },
    tex_outfit_02_trash_blackout: {
        url: "https://cdn.discordapp.com/assets/content/67c8fd9a93a09b7b1d3161d24bb84914ef8536c7525cdd5bbd70748e61c6fae6.webp",
        riveId: 6923652,
        width: 938,
        height: 644,
        widthAt1x: 308,
    },
    tex_outfit_02_trash_bubblegum: {
        url: "https://cdn.discordapp.com/assets/content/75e4d1da85059643f20d2c00b8e0166b1277aa6d507b3009b357f2879dba9f1c.webp",
        riveId: 6923653,
        width: 938,
        height: 644,
        widthAt1x: 308,
    },
    tex_outfit_02_trash_caution: {
        url: "https://cdn.discordapp.com/assets/content/8cb44780aa8185c4aa6d36c21c0708fda1f686e97a397d66e26dd3433f9f1d45.webp",
        riveId: 6923654,
        width: 938,
        height: 644,
        widthAt1x: 308,
    },
    tex_outfit_02_trash_toxic: {
        url: "https://cdn.discordapp.com/assets/content/f3818ad8b69a62ff626171cc359651545d0706bb460195cc4989ab38e42dc777.webp",
        riveId: 6923655,
        width: 938,
        height: 644,
        widthAt1x: 308,
    },
    tex_outfit_03_streamer: {
        url: "https://cdn.discordapp.com/assets/content/b240e82978b8b05a1d2d6f52a5357e15c06d1b47f8a3d3aa02e9a906ebabd553.webp",
        riveId: 7084204,
        width: 609,
        height: 588,
        widthAt1x: 203,
    },
    tex_outfit_03_streamer_flames: {
        url: "https://cdn.discordapp.com/assets/content/38523b655ee3b79ed747a764e14a70d9d446130a1bb5185f8010ecbe6bf4ea4a.webp",
        riveId: 7026918,
        width: 609,
        height: 588,
        widthAt1x: 203,
    },
    tex_outfit_03_streamer_smiley: {
        url: "https://cdn.discordapp.com/assets/content/ed21145fc06784143b6bba1470226b087ed720b49565abf6f25fc3d90055a6db.webp",
        riveId: 7026919,
        width: 609,
        height: 588,
        widthAt1x: 203,
    },
    tex_outfit_03_streamer_stripes: {
        url: "https://cdn.discordapp.com/assets/content/debe13ae8d3734021e6a2945d61e131ea3375f8d479611616ae71b59f2beb577.webp",
        riveId: 7026920,
        width: 609,
        height: 588,
        widthAt1x: 203,
    },
    tex_outfit_03_streamer_vintage: {
        url: "https://cdn.discordapp.com/assets/content/2c2bb5198cba26001c893681dd90280ea80a6a425b493073477cba643b9ace92.webp",
        riveId: 7026922,
        width: 609,
        height: 588,
        widthAt1x: 203,
    },
    tex_outfit_04_camper: {
        url: "https://cdn.discordapp.com/assets/content/f768da4bac88bb093b186306433d7e6b3db833612d0453a9fb68a55cfc419077.webp",
        riveId: 6879281,
        width: 588,
        height: 511,
        widthAt1x: 193,
    },
    tex_outfit_04_camper_amber: {
        url: "https://cdn.discordapp.com/assets/content/a9744591939d82efb6d53435ad0af0d93fd0bcc38db8691ae69ed7b3780d3e77.webp",
        riveId: 6945578,
        width: 588,
        height: 511,
        widthAt1x: 193,
    },
    tex_outfit_04_camper_glamp: {
        url: "https://cdn.discordapp.com/assets/content/1c63db3e687f68960444f30aa5c2bddd7a6ba467e197063e1b7506ba701ec0c7.webp",
        riveId: 6945579,
        width: 588,
        height: 511,
        widthAt1x: 193,
    },
    tex_outfit_04_camper_plaid: {
        url: "https://cdn.discordapp.com/assets/content/4c0deb2d95e0dcab1910e294456dcc62cd07be606edb90b1942b387781ee3696.webp",
        riveId: 6945580,
        width: 588,
        height: 511,
        widthAt1x: 193,
    },
    tex_outfit_04_camper_swamp: {
        url: "https://cdn.discordapp.com/assets/content/e25eb49b4710edffac760cf611a2c335df7db7ba8b6ff4db791b67353215b274.webp",
        riveId: 6945581,
        width: 588,
        height: 511,
        widthAt1x: 193,
    },
    tex_outfit_05_athlete: {
        url: "https://cdn.discordapp.com/assets/content/1b58451c4351d3ec6d4dfe2ecf65ab82983872d35f06642b126fa22aa8704674.webp",
        riveId: 7000298,
        width: 784,
        height: 532,
        widthAt1x: 252,
    },
    tex_outfit_05_athlete_blocked: {
        url: "https://cdn.discordapp.com/assets/content/a9210c5be3d3c0672856ac2d91b53bceaddcb4b30f7ba9e477ec0a941c0006e8.webp",
        riveId: 7000296,
        width: 784,
        height: 532,
        widthAt1x: 252,
    },
    tex_outfit_05_athlete_checkered: {
        url: "https://cdn.discordapp.com/assets/content/f04c24b3330c703e0f9e012ffd4e50680c8f62e0e73df713450cf3268b60bb3d.webp",
        riveId: 7000295,
        width: 784,
        height: 532,
        widthAt1x: 252,
    },
    tex_outfit_05_athlete_faded: {
        url: "https://cdn.discordapp.com/assets/content/b38e28b84e4e9b68d51837e09272135272e3dbb9ff54adedef5f646518a11a59.webp",
        riveId: 7000297,
        width: 784,
        height: 532,
        widthAt1x: 252,
    },
    tex_outfit_05_athlete_lined: {
        url: "https://cdn.discordapp.com/assets/content/a6b94af15440d8554f7a1acaffbff75a38c9ad2db2eb8197b69a972562e0b8db.webp",
        riveId: 7000294,
        width: 784,
        height: 532,
        widthAt1x: 252,
    },
    tex_outfit_06_cowpoke: {
        url: "https://cdn.discordapp.com/assets/content/5d82863d31a7e305f2fad3df4c27faf9155f851b4ca35f812c21b47a14298dda.webp",
        riveId: 6879600,
        width: 826,
        height: 532,
        widthAt1x: 271,
    },
    tex_outfit_06_cowpoke_blush: {
        url: "https://cdn.discordapp.com/assets/content/6db99f429cf7bc5dd70523fa8ca891042ffafc4455065d8a7d4865edbbe25568.webp",
        riveId: 6945584,
        width: 826,
        height: 532,
        widthAt1x: 271,
    },
    tex_outfit_06_cowpoke_denim: {
        url: "https://cdn.discordapp.com/assets/content/23c34abef900b338b47a6072454b8e02108a9a0f40835c37e01bbf0cfb12e70f.webp",
        riveId: 6945585,
        width: 826,
        height: 532,
        widthAt1x: 271,
    },
    tex_outfit_06_cowpoke_onyx: {
        url: "https://cdn.discordapp.com/assets/content/e5b483670bcb7a90f7f9deba1aed475278d29f78baf3dc6ef384082e7a643f22.webp",
        riveId: 6945586,
        width: 826,
        height: 532,
        widthAt1x: 271,
    },
    tex_outfit_06_cowpoke_steel: {
        url: "https://cdn.discordapp.com/assets/content/73abc8bb1ebe0cc1eb46c4a657995cb9075331dd454f923233ea94bd3ceeeef6.webp",
        riveId: 6945587,
        width: 826,
        height: 532,
        widthAt1x: 271,
    },
    tex_outfit_07_goth: {
        url: "https://cdn.discordapp.com/assets/content/5b1aec6182980ea56babc5ed3b360af43cda05c19b20c8cad00f19fb8216271d.webp",
        riveId: 6936838,
        width: 875,
        height: 518,
        widthAt1x: 287,
    },
    tex_outfit_07_goth_raven: {
        url: "https://cdn.discordapp.com/assets/content/cec7dc286b8b32389c941e6bcd7f267a93dcbfe6d2dc830ec6ce1ceeba33dcb7.webp",
        riveId: 6936841,
        width: 875,
        height: 518,
        widthAt1x: 287,
    },
    tex_outfit_07_goth_serpent: {
        url: "https://cdn.discordapp.com/assets/content/d79e9bed36e6765595541997b85cbe5ca0d274b23027a263b0eb51b494b1e942.webp",
        riveId: 6936840,
        width: 875,
        height: 518,
        widthAt1x: 287,
    },
    tex_outfit_07_goth_siren: {
        url: "https://cdn.discordapp.com/assets/content/d17d73be0b6ea5cb388a50a555ee4f6ccf2efc9eb9d8757225c3e28c40a82bfb.webp",
        riveId: 6936839,
        width: 875,
        height: 518,
        widthAt1x: 287,
    },
    tex_outfit_07_goth_vamp: {
        url: "https://cdn.discordapp.com/assets/content/78470b15e9af123335c2f084b6ec7a2992cf507628c3acff53abf0046791d2e5.webp",
        riveId: 6936842,
        width: 875,
        height: 518,
        widthAt1x: 287,
    },
    tex_outfit_08_astronaut: {
        url: "https://cdn.discordapp.com/assets/content/396996658c046202d66d9358672064ef2a2b2b71491e89fa41f0633a2715db53.webp",
        riveId: 6879222,
        width: 609,
        height: 546,
        widthAt1x: 203,
    },
    tex_outfit_08_astronaut_cosmic: {
        url: "https://cdn.discordapp.com/assets/content/a441fbd411bfbec0ee7cee5938ca43212d1aa3969a79c5791582b7643da077c5.webp",
        riveId: 6945588,
        width: 609,
        height: 546,
        widthAt1x: 203,
    },
    tex_outfit_08_astronaut_martian: {
        url: "https://cdn.discordapp.com/assets/content/cd6399f8dc97eacf112200bbd1bc96e6efa50b7f34ad8ba0aef4d5de90474626.webp",
        riveId: 6945589,
        width: 609,
        height: 546,
        widthAt1x: 203,
    },
    tex_outfit_08_astronaut_solar: {
        url: "https://cdn.discordapp.com/assets/content/f9cf559f0b9cfe1af9098661e2d6004099db00bd471e453a2087fba3448cbaa7.webp",
        riveId: 6945590,
        width: 609,
        height: 546,
        widthAt1x: 203,
    },
    tex_outfit_08_astronaut_stardust: {
        url: "https://cdn.discordapp.com/assets/content/5a09ce15b42a0ae2f9e0b54a341c89acc7d1ded744b656c5c8bab3c0ed1af923.webp",
        riveId: 6945591,
        width: 609,
        height: 546,
        widthAt1x: 203,
    },
    tex_outfit_09_jester: {
        url: "https://cdn.discordapp.com/assets/content/fe2f547f7f6ec7c45bcba23839b29024fdd6d698a548101431b966ad7940a69a.webp",
        riveId: 6998778,
        width: 658,
        height: 546,
        widthAt1x: 216,
    },
    tex_outfit_09_jester_carnival: {
        url: "https://cdn.discordapp.com/assets/content/c53941011e11c3b8724339b34432a6c60d6fccc955b4b5bd3944f26bc7e1f5fe.webp",
        riveId: 6998764,
        width: 658,
        height: 546,
        widthAt1x: 216,
    },
    tex_outfit_09_jester_confetti: {
        url: "https://cdn.discordapp.com/assets/content/e2d3ddef9dd87b3e3df01cf1c4d57e45cebdfbd93b2fba28f77b2b50612498d7.webp",
        riveId: 6998766,
        width: 658,
        height: 546,
        widthAt1x: 216,
    },
    tex_outfit_09_jester_nightfall: {
        url: "https://cdn.discordapp.com/assets/content/f303b179db0856f11658b6b3244d4175637248d757786e8d8917b8147ab53bb3.webp",
        riveId: 6998768,
        width: 658,
        height: 546,
        widthAt1x: 216,
    },
    tex_outfit_09_jester_sunrise: {
        url: "https://cdn.discordapp.com/assets/content/3c47f48bd62a43207b4ee2e94df00b917d303bb4159eeda7230e58f30894f918.webp",
        riveId: 6998772,
        width: 658,
        height: 546,
        widthAt1x: 216,
    },
    tex_outfit_10_traveler: {
        url: "https://cdn.discordapp.com/assets/content/65ae90f06f97ff09dda7cd3a1909388a4ad9a8b74f13f6946595026bf13c1ad1.webp",
        riveId: 6879283,
        width: 602,
        height: 525,
        widthAt1x: 197,
    },
    tex_outfit_10_traveler_chrono: {
        url: "https://cdn.discordapp.com/assets/content/145beced8bfbd0fd382954f80601143eb74673bf1670c0ff6354e67c9f113e68.webp",
        riveId: 6945598,
        width: 602,
        height: 525,
        widthAt1x: 197,
    },
    tex_outfit_10_traveler_haze: {
        url: "https://cdn.discordapp.com/assets/content/7a8e8d172fc6c799661fb9b434b66e9003fd795f7b29d46881476e6f6a5245d5.webp",
        riveId: 6945599,
        width: 602,
        height: 525,
        widthAt1x: 197,
    },
    tex_outfit_10_traveler_moss: {
        url: "https://cdn.discordapp.com/assets/content/d64d37450d7389fd3251911ac4c8e4ec073f023044cb38e8ca0811ed742c04b7.webp",
        riveId: 6945600,
        width: 602,
        height: 525,
        widthAt1x: 197,
    },
    tex_outfit_10_traveler_umber: {
        url: "https://cdn.discordapp.com/assets/content/bcecdc6f144b54dd85e5bd8178cb72efdd2d010743d562b126c08611344c894e.webp",
        riveId: 6945602,
        width: 602,
        height: 525,
        widthAt1x: 197,
    },
    tex_outfit_11_mage: {
        url: "https://cdn.discordapp.com/assets/content/8fcdb12bd45a5543e63beebc742249eef13b38e6070c8a62f65a34ba0a3d96dd.webp",
        riveId: 6879170,
        width: 714,
        height: 581,
        widthAt1x: 234,
    },
    tex_outfit_11_mage_dusk: {
        url: "https://cdn.discordapp.com/assets/content/72a6fd56a3bb2edde462ef0aa8ed197f5e4118703d7056bc967daf94cbb855a3.webp",
        riveId: 6945603,
        width: 714,
        height: 581,
        widthAt1x: 234,
    },
    tex_outfit_11_mage_shadow: {
        url: "https://cdn.discordapp.com/assets/content/739ea8b814a59fe6fb3c6db9104032d8172e45906a95e75c302f56b9e9449c98.webp",
        riveId: 6945604,
        width: 714,
        height: 581,
        widthAt1x: 234,
    },
    tex_outfit_11_mage_wildwood: {
        url: "https://cdn.discordapp.com/assets/content/06226eed0688fb73b26f0a573f6a5238a7f97ab84cf59ed0f86e953c155a0e49.webp",
        riveId: 6945606,
        width: 714,
        height: 581,
        widthAt1x: 234,
    },
    tex_outfit_11_mage_winter: {
        url: "https://cdn.discordapp.com/assets/content/c8ccb36e839423e9c76ecdfecf0bf7d41ac9ad06bf7f79638ebde449ef181f71.webp",
        riveId: 6945607,
        width: 714,
        height: 581,
        widthAt1x: 234,
    },
    tex_outfit_12_mech: {
        url: "https://cdn.discordapp.com/assets/content/285eb1fe0b9bf15ae3c9687bc769e6a53da54c14de1e59cc5c19be6e1ef5ee33.webp",
        riveId: 6879169,
        width: 651,
        height: 532,
        widthAt1x: 214,
    },
    tex_outfit_12_mech_aero: {
        url: "https://cdn.discordapp.com/assets/content/90b53362edd3a1db609acb1775a5dcc7c18db8db186881391328b217adce63e7.webp",
        riveId: 6945608,
        width: 651,
        height: 532,
        widthAt1x: 214,
    },
    tex_outfit_12_mech_sandstorm: {
        url: "https://cdn.discordapp.com/assets/content/66c6c521ebe635d15c9213cc1422cbb76f9c1bb71d7359ae397d16b86ac26168.webp",
        riveId: 6945609,
        width: 651,
        height: 532,
        widthAt1x: 214,
    },
    tex_outfit_12_mech_ultraviolet: {
        url: "https://cdn.discordapp.com/assets/content/cfb396306bc31b1ae6323aefd8763e0872e2172dde2b5017f63c61fe7342252c.webp",
        riveId: 6945612,
        width: 651,
        height: 532,
        widthAt1x: 214,
    },
    tex_outfit_12_mech_viper: {
        url: "https://cdn.discordapp.com/assets/content/e72eab13d7faad9833b1086edc90d384b9b55aa2b15a9fc48e2703d505f1c213.webp",
        riveId: 6945613,
        width: 651,
        height: 532,
        widthAt1x: 214,
    },
    tex_outfit_13_knight: {
        url: "https://cdn.discordapp.com/assets/content/20c0f50c019c0456f521399755cc9d538d2deddeafd3af777803cee3093dec61.webp",
        riveId: 7115126,
        width: 630,
        height: 532,
        widthAt1x: 207,
    },
    tex_outfit_13_knight_glacier: {
        url: "https://cdn.discordapp.com/assets/content/9fd7b1d11a9a189a75aee3b505b7232db5ef4acb0954528a1ca0e83ffbb7fe5f.webp",
        riveId: 7115195,
        width: 630,
        height: 532,
        widthAt1x: 207,
    },
    tex_outfit_13_knight_iron: {
        url: "https://cdn.discordapp.com/assets/content/df1b4521899b76d90e43283bc31686194050053504d56017e7fcc3140426e2f8.webp",
        riveId: 7115194,
        width: 630,
        height: 532,
        widthAt1x: 207,
    },
    tex_outfit_13_knight_petal: {
        url: "https://cdn.discordapp.com/assets/content/4f62ac7f293b01e4735ae8b9afd539209ea8f95a9ec80477d867fc5c451931df.webp",
        riveId: 7115193,
        width: 630,
        height: 532,
        widthAt1x: 207,
    },
    tex_outfit_13_knight_rust: {
        url: "https://cdn.discordapp.com/assets/content/8970597ae7c2a28f09498dc5883e34e490a87f8f2d1453eff165693d782cc448.webp",
        riveId: 7115186,
        width: 630,
        height: 532,
        widthAt1x: 207,
    },
    tex_outfit_14_magical: {
        url: "https://cdn.discordapp.com/assets/content/76aa1e996574709c012d7ff52df93a8c2d1e42fb39add8d34a09a170672c6796.webp",
        riveId: 6879167,
        width: 560,
        height: 497,
        widthAt1x: 184,
    },
    tex_outfit_14_magical_amethyst: {
        url: "https://cdn.discordapp.com/assets/content/273bd6cbe651b7b1c7255adbdef137d5bfff6806f52540250ea894235f1be749.webp",
        riveId: 6945731,
        width: 560,
        height: 497,
        widthAt1x: 184,
    },
    tex_outfit_14_magical_citrine: {
        url: "https://cdn.discordapp.com/assets/content/58a03fcfb57cf16e6e84490101b7ac42d59d3f943c77ebc5384767a16c3ab50c.webp",
        riveId: 6945753,
        width: 560,
        height: 497,
        widthAt1x: 184,
    },
    tex_outfit_14_magical_frost: {
        url: "https://cdn.discordapp.com/assets/content/5f0dc06798554eec4c41deb31afbf5253fac077c18a7a358583fff11591ea67b.webp",
        riveId: 6945754,
        width: 560,
        height: 497,
        widthAt1x: 184,
    },
    tex_outfit_14_magical_sapphire: {
        url: "https://cdn.discordapp.com/assets/content/4d0eca018f23d91c94d83a2c85b4e0a42606bff9f17e842cb0cf6b9d444bb56f.webp",
        riveId: 6945756,
        width: 560,
        height: 497,
        widthAt1x: 184,
    },
    tex_shoes_01_sneakers: {
        url: "https://cdn.discordapp.com/assets/content/65eac1112a7cad9ad3119662358d747610dc3aa744e2eb94b613e5aad0922e8f.webp",
        riveId: 6880490,
        width: 560,
        height: 196,
        widthAt1x: 180,
    },
    tex_shoes_02_socks: {
        url: "https://cdn.discordapp.com/assets/content/00e3887d696c3e0d5815129f2c0a4e0053ef24b68b424c07e2ec623d4eaa4379.webp",
        riveId: 6880573,
        width: 550,
        height: 165,
        widthAt1x: 180,
    },
    tex_shoes_03_wumpusSlippers: {
        url: "https://cdn.discordapp.com/assets/content/8de8639167be0de097e03690139c0033392e1119de42158cbbdfc5778dba0a4d.webp",
        riveId: 6880448,
        width: 456,
        height: 152,
        widthAt1x: 153,
    },
    tex_shoes_04_bionic: {
        url: "https://cdn.discordapp.com/assets/content/9ba048a4df654c31c5581cac9749b8773d299af66883d5fa3bbd9da0b3dd8efc.webp",
        riveId: 6880556,
        width: 504,
        height: 140,
        widthAt1x: 162,
    },
    tex_shoes_05_platforms: {
        url: "https://cdn.discordapp.com/assets/content/f4b1f3149f7d10c3beecb729985886faf43790eee4936e4d56efe820ad2a694c.webp",
        riveId: 7026898,
        width: 504,
        height: 196,
        widthAt1x: 162,
    },
    tex_shoes_06_westernboots: {
        url: "https://cdn.discordapp.com/assets/content/67f4d6b777aca5cb3c0806056a449e1946183c2ef76b607e3e2b1bd2bc1aab0c.webp",
        riveId: 7026900,
        width: 504,
        height: 133,
        widthAt1x: 165,
    },
    tex_shoes_07_kittyPaws: {
        url: "https://cdn.discordapp.com/assets/content/b648ea8ac395fa010c951c8900b88e1c0c7797fde3af1881c6d5138431a24c3a.webp",
        riveId: 7026901,
        width: 550,
        height: 165,
        widthAt1x: 180,
    },
    tex_shoes_08_rollerSkates: {
        url: "https://cdn.discordapp.com/assets/content/c2417470196be3f00f30a55a85abce59b45343e34ae9c7fcd48c70b9ac162acd.webp",
        riveId: 7026902,
        width: 483,
        height: 175,
        widthAt1x: 158,
    },
    tex_shoes_09_snowShoes: {
        url: "https://cdn.discordapp.com/assets/content/d42b4d283c7dd6fcd3a7bb76337b26ad98944c34ec43cce2f933a0e062c081ce.webp",
        riveId: 6880513,
        width: 504,
        height: 140,
        widthAt1x: 162,
    },
    tex_shoes_10_icarusSandals: {
        url: "https://cdn.discordapp.com/assets/content/766ae7f630db69ffa4eba764e4241f8580c1614fd2a335da5b9b1bb58744df29.webp",
        riveId: 7074384,
        width: 546,
        height: 196,
        widthAt1x: 179,
    },
    tex_shoes_11_clownShoes: {
        url: "https://cdn.discordapp.com/assets/content/3e3a25b167c3d501f91b0eb3fe5f0e7a8964dddee6947cd709649a2bd42fdc69.webp",
        riveId: 7026915,
        width: 602,
        height: 168,
        widthAt1x: 197,
    },
    tex_shoes_12_fancyHeel: {
        url: "https://cdn.discordapp.com/assets/content/7e67569cb0520ad297cabc5e6aa56457c23d81a6be71beac4c4bc92f5fa9a1e3.webp",
        riveId: 6880487,
        width: 550,
        height: 165,
        widthAt1x: 180,
    },
    tex_shoes_13_ballet: {
        url: "https://cdn.discordapp.com/assets/content/c28bad5caad1018cc4c21deba110fe8d76518c4f400101c9e76cc65377e618c2.webp",
        riveId: 7026916,
        width: 496,
        height: 124,
        widthAt1x: 164,
    },
    tex_shoes_14_cyberStompers: {
        url: "https://cdn.discordapp.com/assets/content/e4e99046896383e95c1dc7a76a13654ced23cb670b12019cc0c7988fac1b096a.webp",
        riveId: 7026917,
        width: 532,
        height: 140,
        widthAt1x: 171,
    },
    tex_wearable_01_stickers: {
        url: "https://cdn.discordapp.com/assets/content/e0a1a7a2429d25c4dc98167306dcc1d11982344b2f8f326d4f029860570ae8d2.webp",
        riveId: 6880478,
        width: 805,
        height: 728,
        widthAt1x: 264,
    },
    tex_wearable_02_tote: {
        url: "https://cdn.discordapp.com/assets/content/30435369290e6fa4e20a1d077cbd903c46a47777d332cb6b2c22facfdde3acac.webp",
        riveId: 6880476,
        width: 238,
        height: 308,
        widthAt1x: 78,
    },
    tex_wearable_03_angelWings: {
        url: "https://cdn.discordapp.com/assets/content/01a8ffa3c5846232c6e8758e385abdb4a1f181f337e425a82baadfc2ff59e7f4.webp",
        riveId: 6880634,
        width: 1210,
        height: 385,
        widthAt1x: 396,
    },
    tex_wearable_04_skateboard: {
        url: "https://cdn.discordapp.com/assets/content/4415af6fe2b6749df24f13c8bea4668ba4c50eecf44e4cff7a89186f5bc51353.webp",
        riveId: 6880472,
        width: 259,
        height: 385,
        widthAt1x: 85,
    },
    tex_wearable_05_dragonWings: {
        url: "https://cdn.discordapp.com/assets/content/ecdf7d0dc99d8a143f58b5321720b6692305e05355858b9dd237e6a5b3a53cdb.webp",
        riveId: 6945412,
        width: 1430,
        height: 1045,
        widthAt1x: 468,
    },
    tex_wearable_06_takeOutBag: {
        url: "https://cdn.discordapp.com/assets/content/07f5722786e32bde7a1fdaaf30bd728e67034808d2d54b25168bfa2bc6f07722.webp",
        riveId: 6880614,
        width: 210,
        height: 238,
        widthAt1x: 69,
    },
    tex_wearable_07_pixelWrench: {
        url: "https://cdn.discordapp.com/assets/content/41b921fee09a12551cb671b5c8c162abff806ebbb80dc2a03e2f4068bb7732b4.webp",
        riveId: 7058139,
        width: 406,
        height: 301,
        widthAt1x: 133,
    },
    tex_wearable_08_wizardStaff: {
        url: "https://cdn.discordapp.com/assets/content/f788dccb04b2519dbe7e8b54f5946411947c97a275c85e1618505b1ea372b6ad.webp",
        riveId: 6978663,
        width: 490,
        height: 707,
        widthAt1x: 161,
    },
    tex_wearable_09_mechWings: {
        url: "https://cdn.discordapp.com/assets/content/b671fb212481e511e935dd760a6c18c271fe0f5cc216ba06037df67d93f11c43.webp",
        riveId: 6880609,
        width: 1265,
        height: 385,
        widthAt1x: 414,
    },
    tex_wearable_10_sword_spritesheet: {
        url: "https://cdn.discordapp.com/assets/content/37b333a6ffdbf3f0d73282d262fc1ad0542b9a869edcb47fc8d4c8634177a31c.webp",
        riveId: 7026804,
        width: 2765,
        height: 2464,
        widthAt1x: 905,
    },
    tex_wearable_11_deviantTail: {
        url: "https://cdn.discordapp.com/assets/content/bc2ff8a274e216642534dd789518bc89ffbde6bd8612319ced01354bf461fe62.webp",
        riveId: 7000661,
        width: 525,
        height: 462,
        widthAt1x: 175,
    },
    tex_wearable_11_deviantTail_smoke_active_spritesheet: {
        url: "https://cdn.discordapp.com/assets/content/4af280e7a843ff71ef8ab45b54effd3d78ba74a1fac8e08de63893e9e282ff26.webp",
        riveId: 7190581,
        width: 2550,
        height: 3400,
        widthAt1x: 900,
    },
    tex_wearable_11_deviantTail_smoke_idle_spritesheet: {
        url: "https://cdn.discordapp.com/assets/content/9d45fab964812509c67b59af7ba2037146aa9feb7b10304265e8020a7e91cf75.webp",
        riveId: 7190582,
        width: 2550,
        height: 3400,
        widthAt1x: 900,
    },
    tex_wearable_12_magicalStaff: {
        url: "https://cdn.discordapp.com/assets/content/3f2089245e36fa8abca99b90cfc479420e158de8b7f7d1875a09e2da33861bcb.webp",
        riveId: 6944077,
        width: 476,
        height: 574,
        widthAt1x: 156,
    },
    tex_wearable_13_butterflyWings: {
        url: "https://cdn.discordapp.com/assets/content/d7af6b2723ed82a7263a988927781ccc240d6a770194c38e042dfcd37348403a.webp",
        riveId: 6797765,
        width: 1550,
        height: 1550,
        widthAt1x: 517,
    },
    tex_wearable_14_catBackpack: {
        url: "https://cdn.discordapp.com/assets/content/8c059e9d8030f6d97924cbefc6e2ac135dfbf4d01de1ea0b97db0d69ebb84cbc.webp",
        riveId: 6944650,
        width: 308,
        height: 322,
        widthAt1x: 101,
    },
    tex_wireframe_spritesheet: {
        url: "https://cdn.discordapp.com/assets/content/df0bc8b307f84dcb7044c1f8b571bb41716dd891da077311940d4e8003b2fb9d.webp",
        riveId: 7103978,
        width: 4032,
        height: 4080,
        widthAt1x: 2016,
    },
};
function ik(e) {
    return { name: e, url: iM[e].url };
}
let iD = ik("tex_none"),
    iL = {
        [iO.N.NONE]: 0,
        [iO.N.CAP]: 7,
        [iO.N.ELVEN_HEADPIECE]: 1,
        [iO.N.HEADPHONES]: 2,
        [iO.N.TEDDY_BEANIE]: 13,
        [iO.N.PIERCINGS]: 4,
        [iO.N.HEADBAND]: 5,
        [iO.N.SUNGLASSES]: 6,
        [iO.N.BANANA_PEEL]: 3,
        [iO.N.LEAF]: 8,
        [iO.N.FIRE]: 9,
        [iO.N.HALO]: 10,
        [iO.N.BRAIN]: 11,
        [iO.N.TRAFFIC_CONE]: 12,
        [iO.N.CROWN]: 14,
    },
    iP = {
        [iy.Z.NONE]: 0,
        [iy.Z.ANGEL_WINGS]: 3,
        [iy.Z.STICKERS]: 1,
        [iy.Z.TOTE]: 2,
        [iy.Z.WIZARD_STAFF]: 8,
        [iy.Z.SKATEBOARD]: 4,
        [iy.Z.DRAGON_WINGS]: 5,
        [iy.Z.TAKE_OUT_BAG]: 6,
        [iy.Z.PIXEL_WRENCH]: 7,
        [iy.Z.MECH_WINGS]: 9,
        [iy.Z.SWORD]: 10,
        [iy.Z.DEVIANT_TAIL]: 11,
        [iy.Z.MAGICAL_STAFF]: 12,
        [iy.Z.BUTTERFLY_WINGS]: 13,
        [iy.Z.CAT_BACKPACK]: 14,
    },
    iU = {
        [iT.X.NONE]: iD,
        [iT.X.BLAZE]: ik("tex_aura_04_blaze"),
        [iT.X.BLOSSOM]: ik("tex_aura_01_blossom"),
        [iT.X.PRISM]: ik("tex_aura_02_prism"),
        [iT.X.SHOCK]: ik("tex_aura_03_shock"),
        [iT.X.FATED]: ik("tex_aura_05_fated"),
        [iT.X.LUSTER]: ik("tex_aura_06_luster"),
        [iT.X.BUBBLES]: ik("tex_aura_07_bubbly"),
        [iT.X.SPOOKY]: ik("tex_aura_08_spooky"),
        [iT.X.CURSED]: ik("tex_aura_09_cursed"),
        [iT.X.MAGNETIC]: ik("tex_aura_10_magnetic"),
        [iT.X.RADIOACTIVE]: ik("tex_aura_11_radioactive"),
        [iT.X.ELEMENTAL]: ik("tex_aura_12_elemental"),
        [iT.X.SHIMMER]: ik("tex_aura_13_shimmer"),
        [iT.X.WITCHY]: ik("tex_aura_14_witchy"),
    },
    iG = {
        [iR.R.ICY]: ik("tex_base_01_icy"),
        [iR.R.CRIMSON]: ik("tex_base_02_crimson"),
        [iR.R.CHROME]: ik("tex_base_03_chrome"),
        [iR.R.GALACTIC]: ik("tex_base_04_galactic"),
        [iR.R.FOREST]: ik("tex_base_05_forrest"),
        [iR.R.MIDNIGHT]: ik("tex_base_06_mighnight"),
        [iR.R.GLACIER]: ik("tex_base_07_glacier"),
        [iR.R.ORANGE]: ik("tex_base_08_orange"),
        [iR.R.PURPLE]: ik("tex_base_09_pink"),
        [iR.R.RED]: ik("tex_base_10_red"),
        [iR.R.COBALT]: ik("tex_base_11_cobalt"),
        [iR.R.X_RAY]: ik("tex_base_12_x-ray"),
        [iR.R.LIQUID]: ik("tex_base_13_liquid"),
        [iR.R.BUTTER]: ik("tex_base_14_butter"),
        [iR.R.IRIDESCENT]: ik("tex_base_15_iridescent"),
    },
    iH = {
        [e2.r.NONE]: null,
        [e2.r.BADDIE_DEFAULT]: { riveId: 1, texture: ik("tex_outfit_01_baddie") },
        [e2.r.TRAVELER_DEFAULT]: { riveId: 10, texture: ik("tex_outfit_10_traveler") },
        [e2.r.STREAMER_DEFAULT]: { riveId: 3, texture: ik("tex_outfit_03_streamer") },
        [e2.r.CAMPER_DEFAULT]: { riveId: 4, texture: ik("tex_outfit_04_camper") },
        [e2.r.ATHLETE_DEFAULT]: { riveId: 5, texture: ik("tex_outfit_05_athlete") },
        [e2.r.COWPOKE_DEFAULT]: { riveId: 6, texture: ik("tex_outfit_06_cowpoke") },
        [e2.r.GOTH_DEFAULT]: { riveId: 7, texture: ik("tex_outfit_07_goth") },
        [e2.r.ASTRONAUT_DEFAULT]: { riveId: 8, texture: ik("tex_outfit_08_astronaut") },
        [e2.r.JESTER_DEFAULT]: { riveId: 9, texture: ik("tex_outfit_09_jester") },
        [e2.r.TRASH_CAN_DEFAULT]: { riveId: 2, texture: ik("tex_outfit_02_trash") },
        [e2.r.MAGE_DEFAULT]: { riveId: 11, texture: ik("tex_outfit_11_mage") },
        [e2.r.MECH_DEFAULT]: { riveId: 12, texture: ik("tex_outfit_12_mech") },
        [e2.r.KNIGHT_DEFAULT]: { riveId: 13, texture: ik("tex_outfit_13_knight") },
        [e2.r.MAGICAL_DEFAULT]: { riveId: 14, texture: ik("tex_outfit_14_magical") },
        [e2.r.BADDIE_MONOCHROME]: { riveId: 1, texture: ik("tex_outfit_01_baddie_monochrome") },
        [e2.r.BADDIE_VIOLET]: { riveId: 1, texture: ik("tex_outfit_01_baddie_violet") },
        [e2.r.BADDIE_PASTEL]: { riveId: 1, texture: ik("tex_outfit_01_baddie_pastel") },
        [e2.r.BADDIE_SUNSET]: { riveId: 1, texture: ik("tex_outfit_01_baddie_sunset") },
        [e2.r.TRAVELER_HAZE]: { riveId: 10, texture: ik("tex_outfit_10_traveler_haze") },
        [e2.r.TRAVELER_MOSS]: { riveId: 10, texture: ik("tex_outfit_10_traveler_moss") },
        [e2.r.TRAVELER_CHRONO]: { riveId: 10, texture: ik("tex_outfit_10_traveler_chrono") },
        [e2.r.TRAVELER_UMBER]: { riveId: 10, texture: ik("tex_outfit_10_traveler_umber") },
        [e2.r.STREAMER_FLAMES]: { riveId: 3, texture: ik("tex_outfit_03_streamer_flames") },
        [e2.r.STREAMER_STRIPES]: { riveId: 3, texture: ik("tex_outfit_03_streamer_stripes") },
        [e2.r.STREAMER_SMILEY]: { riveId: 3, texture: ik("tex_outfit_03_streamer_smiley") },
        [e2.r.STREAMER_VINTAGE]: { riveId: 3, texture: ik("tex_outfit_03_streamer_vintage") },
        [e2.r.CAMPER_PLAID]: { riveId: 4, texture: ik("tex_outfit_04_camper_plaid") },
        [e2.r.CAMPER_SWAMP]: { riveId: 4, texture: ik("tex_outfit_04_camper_swamp") },
        [e2.r.CAMPER_GLAMP]: { riveId: 4, texture: ik("tex_outfit_04_camper_glamp") },
        [e2.r.CAMPER_AMBER]: { riveId: 4, texture: ik("tex_outfit_04_camper_amber") },
        [e2.r.ATHLETE_BLOCKED]: { riveId: 5, texture: ik("tex_outfit_05_athlete_blocked") },
        [e2.r.ATHLETE_FADED]: { riveId: 5, texture: ik("tex_outfit_05_athlete_faded") },
        [e2.r.ATHLETE_CHECKERED]: { riveId: 5, texture: ik("tex_outfit_05_athlete_checkered") },
        [e2.r.ATHLETE_LINED]: { riveId: 5, texture: ik("tex_outfit_05_athlete_lined") },
        [e2.r.COWPOKE_ONYX]: { riveId: 6, texture: ik("tex_outfit_06_cowpoke_onyx") },
        [e2.r.COWPOKE_STEEL]: { riveId: 6, texture: ik("tex_outfit_06_cowpoke_steel") },
        [e2.r.COWPOKE_DENIM]: { riveId: 6, texture: ik("tex_outfit_06_cowpoke_denim") },
        [e2.r.COWPOKE_BLUSH]: { riveId: 6, texture: ik("tex_outfit_06_cowpoke_blush") },
        [e2.r.GOTH_SIREN]: { riveId: 7, texture: ik("tex_outfit_07_goth_siren") },
        [e2.r.GOTH_SERPENT]: { riveId: 7, texture: ik("tex_outfit_07_goth_serpent") },
        [e2.r.GOTH_RAVEN]: { riveId: 7, texture: ik("tex_outfit_07_goth_raven") },
        [e2.r.GOTH_VAMP]: { riveId: 7, texture: ik("tex_outfit_07_goth_vamp") },
        [e2.r.ASTRONAUT_STARDUST]: { riveId: 8, texture: ik("tex_outfit_08_astronaut_stardust") },
        [e2.r.ASTRONAUT_MARTIAN]: { riveId: 8, texture: ik("tex_outfit_08_astronaut_martian") },
        [e2.r.ASTRONAUT_SOLAR]: { riveId: 8, texture: ik("tex_outfit_08_astronaut_solar") },
        [e2.r.ASTRONAUT_COSMIC]: { riveId: 8, texture: ik("tex_outfit_08_astronaut_cosmic") },
        [e2.r.JESTER_CONFETTI]: { riveId: 9, texture: ik("tex_outfit_09_jester_confetti") },
        [e2.r.JESTER_CARNIVAL]: { riveId: 9, texture: ik("tex_outfit_09_jester_carnival") },
        [e2.r.JESTER_SUNRISE]: { riveId: 9, texture: ik("tex_outfit_09_jester_sunrise") },
        [e2.r.JESTER_NIGHTFALL]: { riveId: 9, texture: ik("tex_outfit_09_jester_nightfall") },
        [e2.r.TRASH_CAN_BLACKOUT]: { riveId: 2, texture: ik("tex_outfit_02_trash_blackout") },
        [e2.r.TRASH_CAN_CAUTION]: { riveId: 2, texture: ik("tex_outfit_02_trash_caution") },
        [e2.r.TRASH_CAN_BUBBLEGUM]: { riveId: 2, texture: ik("tex_outfit_02_trash_bubblegum") },
        [e2.r.TRASH_CAN_TOXIC]: { riveId: 2, texture: ik("tex_outfit_02_trash_toxic") },
        [e2.r.MAGE_SHADOW]: { riveId: 11, texture: ik("tex_outfit_11_mage_shadow") },
        [e2.r.MAGE_DUSK]: { riveId: 11, texture: ik("tex_outfit_11_mage_dusk") },
        [e2.r.MAGE_WILDWOOD]: { riveId: 11, texture: ik("tex_outfit_11_mage_wildwood") },
        [e2.r.MAGE_WINTER]: { riveId: 11, texture: ik("tex_outfit_11_mage_winter") },
        [e2.r.MECH_AERO]: { riveId: 12, texture: ik("tex_outfit_12_mech_aero") },
        [e2.r.MECH_VIPER]: { riveId: 12, texture: ik("tex_outfit_12_mech_viper") },
        [e2.r.MECH_ULTRAVIOLET]: { riveId: 12, texture: ik("tex_outfit_12_mech_ultraviolet") },
        [e2.r.MECH_SANDSTORM]: { riveId: 12, texture: ik("tex_outfit_12_mech_sandstorm") },
        [e2.r.KNIGHT_IRON]: { riveId: 13, texture: ik("tex_outfit_13_knight_iron") },
        [e2.r.KNIGHT_RUST]: { riveId: 13, texture: ik("tex_outfit_13_knight_rust") },
        [e2.r.KNIGHT_PETAL]: { riveId: 13, texture: ik("tex_outfit_13_knight_petal") },
        [e2.r.KNIGHT_GLACIER]: { riveId: 13, texture: ik("tex_outfit_13_knight_glacier") },
        [e2.r.MAGICAL_SAPPHIRE]: { riveId: 14, texture: ik("tex_outfit_14_magical_sapphire") },
        [e2.r.MAGICAL_AMETHYST]: { riveId: 14, texture: ik("tex_outfit_14_magical_amethyst") },
        [e2.r.MAGICAL_FROST]: { riveId: 14, texture: ik("tex_outfit_14_magical_frost") },
        [e2.r.MAGICAL_CITRINE]: { riveId: 14, texture: ik("tex_outfit_14_magical_citrine") },
    };
var iF = (((r = {}).SLOT = "slot"), (r.TRAIT = "trait"), (r.LAYOUT = "layout"), (r.ALWAYS = "always"), r);
let iK = /^tex_(aura|base_\d+|outfit)_/,
    iB = /^tex_(headwear|shoes|wearable|face)_(\d+)_/,
    iV = /^tex_face_([a-z]+)_/i,
    iz = {
        tex_env_labNight_bg: ["Desktop"],
        tex_env_labNight_bg_mobileLandscape: ["MobileLandscape"],
        tex_env_labNight_bg_mobilePortrait: ["MobilePortrait"],
        tex_env_labNight_fgLeft: ["Desktop"],
        tex_env_labNight_fgRight: ["Desktop"],
        tex_env_labNight_mgBottom: ["Desktop"],
        tex_env_labNight_mgBottomMobile: ["MobilePortrait", "MobileLandscape"],
        tex_env_labNight_sky: ["Desktop"],
    },
    iW = {
        chill: 1,
        crybaby: 2,
        bored: 3,
        lockedin: 4,
        smitten: 5,
        confused: 6,
        anxious: 7,
        sparkle: 8,
        rage: 9,
        sus: 10,
        spellbound: 11,
        spooked: 12,
        freefall: 13,
        possessed: 14,
        awkward: 15,
    },
    iY = { columns: 1, rows: 1 },
    iX = { columns: 5, rows: 5 },
    iq = { columns: 6, rows: 8 },
    iZ = {
        tex_aura_01_blossom: iX,
        tex_aura_02_prism: iX,
        tex_aura_03_shock: iX,
        tex_aura_04_blaze: iX,
        tex_aura_05_fated: iX,
        tex_aura_06_luster: iX,
        tex_aura_07_bubbly: iX,
        tex_aura_08_spooky: iX,
        tex_aura_09_cursed: iX,
        tex_aura_10_magnetic: iX,
        tex_aura_11_radioactive: iX,
        tex_aura_12_elemental: iX,
        tex_aura_13_shimmer: iX,
        tex_aura_14_witchy: iX,
        tex_wireframe_spritesheet: { columns: 12, rows: 6 },
        tex_wearable_10_sword_spritesheet: { columns: 5, rows: 4 },
        tex_wearable_11_deviantTail_smoke_active_spritesheet: iq,
        tex_wearable_11_deviantTail_smoke_idle_spritesheet: iq,
    },
    iQ = [1, 1.25, 1.5, 1.75, 2, 3],
    iJ = Math.min(...iQ),
    i$ = Math.max(...iQ);
function i0(e, t) {
    let { url: a, width: r, height: i, widthAt1x: s } = iM[e];
    if (null == s) return a;
    let n = (t * s) / r;
    if (n >= 1) return a;
    let { columns: c, rows: d } = iZ[e] ?? iY,
        l = c * Math.round((r / c) * n),
        o = d * Math.round((i / d) * n);
    return `${a}?width=${l}&height=${o}`;
}
let i1 = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14"],
    i5 = i1.map((e) => `outfit${e}Image`),
    i6 = {
        [w.s9.IDLE]: 0,
        [w.s9.INTRODUCTION]: 1,
        [w.s9.FACE]: 2,
        [w.s9.OUTFIT]: 3,
        [w.s9.HEADWEAR]: 4,
        [w.s9.SHOES]: 5,
        [w.s9.WEARABLE]: 6,
        [w.s9.AURA]: 7,
        [w.s9.ASSEMBLED]: 8,
        [w.s9.FINALIZE]: 8,
        [w.s9.SUMMARY]: 8,
    },
    i2 = {
        Desktop: {
            gradientTopOpacity: 0,
            gradientTopPosition: 0,
            gradientBottomOpacity: 0,
            gradientBottomPosition: 0,
            gradientLeftOpacity: 100,
            gradientLeftPosition: 100,
            gradientRightOpacity: 0,
            gradientRightPosition: 0,
        },
        MobilePortrait: {
            gradientTopOpacity: 100,
            gradientTopPosition: 45,
            gradientBottomOpacity: 100,
            gradientBottomPosition: 75,
            gradientLeftOpacity: 0,
            gradientLeftPosition: 0,
            gradientRightOpacity: 0,
            gradientRightPosition: 0,
        },
        MobileLandscape: {
            gradientTopOpacity: 100,
            gradientTopPosition: 50,
            gradientBottomOpacity: 100,
            gradientBottomPosition: 30,
            gradientLeftOpacity: 0,
            gradientLeftPosition: 0,
            gradientRightOpacity: 100,
            gradientRightPosition: 100,
        },
    },
    i3 = { ...i2.MobilePortrait, gradientTopPosition: 55, gradientBottomPosition: 90 };
var i4 = a(574381);
let i8 = new Set([1]),
    i9 = Object.keys(iM).map((e) => ({
        name: e,
        role: (function (e) {
            if (iK.test(e)) return { type: "slot" };
            let t = iz[e];
            if (null != t) return { type: "layout", layouts: t };
            let a = iB.exec(e);
            if (null != a) return { type: "trait", path: `${a[1]}ID`, riveId: Number(a[2]) };
            let r = iV.exec(e),
                i = null != r ? iW[r[1].toLowerCase()] : void 0;
            return null != i ? { type: "trait", path: "faceID", riveId: i } : { type: "always" };
        })(e),
        swapKey: (0, i4.un)() ? `${e}-${iM[e].riveId}` : e,
    }));
function i7(e) {
    let { faceID: t, headwearID: a, shoesID: r, wearableID: i, chapterID: s, device: n } = e;
    return h.useMemo(() => {
        var e;
        let c;
        return (
            (e = { faceID: t, headwearID: a, shoesID: r, wearableID: i }),
            (c = new Set()),
            i9.forEach((t) => {
                let { name: a, role: r } = t;
                switch (r.type) {
                    case iF.SLOT:
                        break;
                    case iF.TRAIT:
                        e[r.path] === r.riveId && c.add(a);
                        break;
                    case iF.LAYOUT:
                        r.layouts.includes(n) && c.add(a);
                        break;
                    case iF.ALWAYS:
                        ("tex_wireframe_spritesheet" !== a || i8.has(s)) && c.add(a);
                }
            }),
            c
        );
    }, [t, a, r, i, s, n]);
}
var se = a(971940);
async function st(e) {
    try {
        let t = await fetch(e);
        if (!t.ok) return null;
        return await (0, se.decodeImage)(new Uint8Array(await t.arrayBuffer()));
    } catch {
        return null;
    }
}
var sa = a(168862);
function sr(e) {
    let t,
        a,
        { stage: r, isHidden: s } = e,
        n = (0, _.bG)([iN.A], () => {
            let e = iN.A.windowSize();
            return (function (e, t) {
                let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (a) return iJ;
                let r = Math.max(e / 960, t / 540) * (0, ez.A)();
                return iQ.find((e) => e >= r) ?? i$;
            })(e.width, e.height);
        }),
        [c, d] = h.useState(n);
    n > c && d(n);
    let o =
            ((t = (0, _.bG)([l.A], () => l.A.selectedCharacterTraits)),
            (a = eR((e) => e.hoveredOption)),
            h.useMemo(() => (null != a ? { ...t, [a.trait]: a.optionId } : t), [t, a])),
        u = (0, _.bG)([q.Ay], () => q.Ay.useReducedMotion),
        f = h.useMemo(
            () =>
                (function (e) {
                    let { stage: t, isHidden: a, traits: r, layout: i, mobileLift: s = 0, textureScale: n } = e,
                        { base: c, shoes: d, outfit: l, face: o, hat: u, wearable: h, aura: f } = (0, F.XI)(r),
                        b = iH[l],
                        _ = {};
                    return (
                        i1.forEach((e) => {
                            let t = Number(e) === b?.riveId ? b.texture : iD;
                            _[`outfit${e}Image`] = i0(t.name, n);
                        }),
                        {
                            device: i,
                            mobileLift: s,
                            chapterID: a && t === w.s9.FACE ? i6[w.s9.IDLE] : i6[t],
                            faceID: o,
                            shoesID: d,
                            headwearID: iL[u],
                            wearableID: iP[h],
                            outfitID: b?.riveId ?? 0,
                            auraImage: i0(iU[f].name, n),
                            baseColorImage: i0(iG[c].name, n),
                            ...("MobilePortrait" === i && t === w.s9.INTRODUCTION ? i3 : i2[i]),
                            ..._,
                        }
                    );
                })({ stage: r, isHidden: s, traits: o, layout: "Desktop", textureScale: c }),
            [r, s, o, c],
        ),
        [p, m] = h.useState(null),
        x = (function (e) {
            let { visibleDataBinding: t, requestedDataBinding: a, textureScale: r } = e,
                i = (function (e) {
                    let { visibleTextureNames: t, requestedTextureNames: a } = e,
                        [r, i] = h.useState(t),
                        [s, n] = h.useState(t);
                    if (t !== s) {
                        n(t);
                        let e = new Set(r);
                        (t.forEach((t) => e.add(t)), i(e));
                    }
                    return (
                        h.useEffect(() => {
                            let e = setTimeout(() => i(t), 600);
                            return () => clearTimeout(e);
                        }, [t]),
                        h.useMemo(() => new Set([...r, ...a]), [r, a])
                    );
                })({ visibleTextureNames: i7(t), requestedTextureNames: i7(a) });
            return h.useMemo(() => {
                let e;
                return (
                    (e = {}),
                    i9.forEach((t) => {
                        let { name: a, swapKey: s } = t,
                            n = i.has(a) ? i0(a, r) : iD.url;
                        e[s] = { source: { uri: n } };
                    }),
                    e
                );
            }, [i, r]);
        })({ visibleDataBinding: p ?? f, requestedDataBinding: f, textureScale: c }),
        {
            assetLoader: g,
            onLoad: A,
            textureManager: v,
        } = (function () {
            let e = h.useRef(new Map()),
                [t, a] = h.useState(null),
                r = h.useCallback((t) => !!t.isImage && t.name in iM && (e.current.set(t.name, t), !0), []);
            return {
                assetLoader: r,
                onLoad: h.useCallback(() => {
                    (a(e.current), (e.current = new Map()));
                }, []),
                textureManager: h.useMemo(
                    () =>
                        null == t
                            ? null
                            : {
                                  load: st,
                                  swap: (e) => e.forEach((e, a) => t.get(a)?.setRenderImage(e)),
                                  release: (e) => e.forEach((e) => e.unref()),
                              },
                    [t],
                ),
            };
        })(),
        I = h.useRef(null),
        E = h.useRef(s);
    h.useEffect(() => {
        ((E.current = s), s ? I.current?.pause() : I.current?.play());
    }, [s]);
    let j = h.useCallback(() => {
            (A(), E.current && I.current?.pause());
        }, [A]),
        S = (function (e) {
            let { textureManager: t, referencedAssets: a, initialReferencedAssets: r } = e,
                i = h.useRef(new Map()),
                [s, n] = h.useState(r);
            return (
                h.useEffect(() => {
                    i.current = new Map(
                        Object.entries(r ?? {}).map((e) => {
                            let [t, { source: a }] = e;
                            return [t, a.uri];
                        }),
                    );
                }, [t, r]),
                h.useEffect(() => {
                    if (null == t) return;
                    let e = !1;
                    return (
                        (async () => {
                            (await (async function (e) {
                                let { textureManager: t, shownUrls: a, referencedAssets: r, isStale: i } = e,
                                    s = new Map();
                                if (
                                    (Object.entries(r).forEach((e) => {
                                        let [t, { source: r }] = e;
                                        a.get(t) !== r.uri && s.set(t, r.uri);
                                    }),
                                    0 === s.size)
                                )
                                    return;
                                let n = new Map();
                                if (
                                    (await Promise.all(
                                        Array.from(new Set(s.values()), async (e) => {
                                            let a = await t.load(e);
                                            null != a && n.set(e, a);
                                        }),
                                    ),
                                    !i())
                                ) {
                                    let e = new Map();
                                    (s.forEach((t, r) => {
                                        let i = n.get(t);
                                        null != i && (e.set(r, i), a.set(r, t));
                                    }),
                                        t.swap(e));
                                }
                                t.release(Array.from(n.values()));
                            })({ textureManager: t, shownUrls: i.current, referencedAssets: a, isStale: () => e }),
                                e || n(a));
                        })(),
                        () => {
                            e = !0;
                        }
                    );
                }, [t, a]),
                s === a
            );
        })({ textureManager: v, referencedAssets: x }),
        {
            dataBinding: N,
            isOutfitPreloaded: C,
            onDataBindingChange: T,
        } = (function (e) {
            var t;
            let { visibleDataBinding: a, requestedDataBinding: r } = e,
                [i, s] = h.useState({}),
                n = (t = r.outfitID) > 0 ? i5[t - 1] : null,
                c = null != n ? r[n] : void 0,
                d = null == n || a?.[n] === c || i[n] === c,
                l = a ?? r;
            return {
                dataBinding: h.useMemo(() => (null == n || l[n] === c ? l : { ...l, [n]: c }), [l, n, c]),
                isOutfitPreloaded: d,
                onDataBindingChange: h.useMemo(() => {
                    let e = {};
                    return (
                        i5.forEach((t) => {
                            e[t] = (e) => {
                                s((a) => (a[t] === e ? a : { ...a, [t]: e }));
                            };
                        }),
                        e
                    );
                }, []),
            };
        })({ visibleDataBinding: p, requestedDataBinding: f });
    S && C && p !== f && m(f);
    let R = h.useMemo(() => ({ ...N, reducedMotion: u }), [N, u]);
    return (0, i.jsx)("div", {
        role: "img",
        "aria-label": (0, iC.O)(o),
        className: b()(sa.dw, { [sa.RK]: null != p }),
        children: (0, i.jsx)(iS.W, {
            artboard: "AB_Master",
            stateMachine: "SM_Master",
            fit: "layout",
            alignment: "center",
            ref: I,
            assetLoader: g,
            onLoad: j,
            listenOnDocumentBody: !u,
            withReducedMotion: "play",
            dataBinding: R,
            onDataBindingChange: T,
            className: sa.lW,
        }),
    });
}
var si = a(517782);
function ss() {
    let e = h.useId(),
        t = h.useRef(null);
    return (h.useEffect(() => (p.O.moveTo?.(e, t.current), () => p.O.remove?.(e)), [e]), (0, i.jsx)(m.A, { ref: t }));
}
function sn(e) {
    let t,
        { didPlayerShareDataWithDiscord: a, onClose: r } = e;
    ((0, _.bG)([l.A], () => l.A.fetchState),
        (t = (0, _.yK)([l.A], () => {
            let { stats: e, globalStats: t } = l.A,
                a = t?.games;
            if ((0, I.IH)(e) || null == a)
                return (
                    e?.games?.games.map((e) => {
                        let { game: t } = e;
                        return t.id;
                    }) ?? []
                );
            let r = [];
            return (
                z.Jb.forEach((e) => {
                    let { list: t } = e,
                        i = a[t][0];
                    null != i && r.push(i.id);
                }),
                r
            );
        })),
        h.useEffect(() => {
            let { fetchState: e } = l.A;
            (e === l.T.INIT || e === l.T.ERROR) && (0, d.nX)();
        }, []),
        h.useEffect(() => {
            (0, V.E)(t);
        }, [t]));
    let s = a ? w.Np.SHARED_DATA : w.Np.NO_SHARED_DATA,
        [n, c] = (function (e) {
            let [t, a] = h.useState(() =>
                (function (e) {
                    let { character: t, progress: a, stats: r } = l.A,
                        i = null != t ? w.s9.SUMMARY : a?.stage;
                    return C({ flow: e, stats: r }).find((e) => (0, w.UG)(e).characterStage === i) ?? w.gr.HOME;
                })(e),
            );
            return (
                h.useEffect(() => {
                    let { characterStage: e } = (0, w.UG)(t);
                    (0, d.l4)(e);
                }, [t]),
                [t, a]
            );
        })(s);
    (h.useEffect(() => {
        (o.A.setStepName(n), (0, u.if)(n));
    }, [n]),
        (0, B.l0)(() => {
            (0, u.i)(o.A.getStepName());
        }));
    let { characterStage: f, statsScreen: p } = (0, w.UG)(n),
        E = n === w.gr.HOME || null != p,
        j = E || n === w.gr.INTRODUCTION,
        S = (0, _.bG)([l.A], () => (l.A.fetchState === l.T.SUCCESS ? l.A.stats : void 0)),
        N = (0, _.bG)([l.A], () => l.A.character),
        U = h.useMemo(
            () =>
                (function (e, t) {
                    switch (e) {
                        case w.gr.SUMMARY:
                        case w.gr.SHARE:
                            let a = (0, A.o)(t),
                                { primaryBackgroundColor: r, shadowColor: i } = (0, A.j)(a);
                            return {
                                ...td,
                                "--custom-checkpoint-primary": r,
                                "--custom-checkpoint-button-border": r,
                                "--custom-checkpoint-button-shadow": i,
                                "--custom-checkpoint-background-gradient-start": r,
                            };
                        default:
                            return td;
                    }
                })(n, N),
            [n, N],
        ),
        G = (function () {
            let { isMuted: e, volume: t } = (0, _.cf)([l.A], () => ({ isMuted: l.A.isMuted, volume: l.A.volume })),
                a = h.useRef(new Map()),
                r = h.useRef(null),
                i = h.useCallback(() => {
                    (r.current?.(), a.current.forEach((e) => e.pause()));
                }, []);
            return (
                h.useEffect(() => ((a.current = new Map(D.map((e) => [e, new Audio(e)]))), i), [i]),
                h.useEffect(() => {
                    a.current.forEach((a) => {
                        ((a.muted = e), (a.volume = t));
                    });
                }, [e, t]),
                h.useCallback(
                    (e) => {
                        var t;
                        let s;
                        (i(),
                            (t = (e) => {
                                let t = a.current.get(e);
                                null == t || l.A.isMuted || 0 === l.A.volume || ((t.currentTime = 0), t.play());
                            }),
                            (s = []),
                            e.forEach((e) => {
                                let { source: a, delayMs: r } = e;
                                r > 0 ? s.push(setTimeout(() => t(a), r)) : t(a);
                            }),
                            (r.current = () => s.forEach((e) => clearTimeout(e))));
                    },
                    [i],
                )
            );
        })(),
        H = K(),
        F = (0, v.k0)(n, H),
        W = h.useId(),
        X = null != F ? W : void 0,
        q = h.useCallback(
            (e) => {
                let t = (function (e) {
                    let { previousRoute: t, route: a } = e;
                    if (t === w.gr.SIDEKICK_LEAVE && a === w.gr.SIDEKICK) return null;
                    if (t === w.gr.FINALIZE_CHARACTER && a === w.gr.SUMMARY) return [];
                    let r = [];
                    return (
                        a === w.gr.INTRODUCTION
                            ? (r.push({ source: R, delayMs: 0 }),
                              r.push({ source: k, delayMs: 2500 }),
                              r.push({ source: O, delayMs: 2800 }))
                            : L(t) && P(a)
                              ? r.push({ source: y, delayMs: 0 })
                              : P(t) && L(a) && (r.push({ source: M, delayMs: 0 }), r.push({ source: k, delayMs: 0 })),
                        r
                    );
                })({ previousRoute: n, route: e });
                (null != t && G(t), c(e));
            },
            [n, G, c],
        ),
        Q = h.useCallback(
            (e) => {
                let t = T({ flow: s, stats: S, currentRoute: n, direction: e });
                if (null == t) {
                    1 === e && r();
                    return;
                }
                q(t);
            },
            [n, s, q, r, S],
        ),
        $ = h.useCallback(() => Q(-1), [Q]),
        et = h.useCallback(() => Q(1), [Q]),
        ea = h.useCallback(
            () =>
                q(T({ ...{ flow: s, stats: S }, currentRoute: w.gr.INTRODUCTION, direction: 1 }) ?? w.gr.INTRODUCTION),
            [s, q, S],
        ),
        er = h.useCallback(
            (e) => {
                if (!l.A.isSaving) {
                    if (null != F) return void Y(F);
                    q(e);
                }
            },
            [F, q],
        );
    return (0, i.jsx)(x.N, {
        theme: Z.NJ.DARK,
        children: (e) =>
            (0, i.jsxs)("div", {
                className: b()(e, si.kL),
                style: U,
                role: "dialog",
                "aria-modal": !0,
                "aria-label": ex.intl.string(tw.default["CdU/PF"]),
                children: [
                    (0, i.jsx)(ss, {}),
                    (0, i.jsx)(J, { isVisible: E }),
                    (0, i.jsxs)("div", {
                        className: si.$s,
                        children: [
                            (0, i.jsx)(tD, {}),
                            (0, i.jsx)(ee, {
                                size: "sm",
                                "aria-label": ex.intl.string(ex.t.cpT0Cq),
                                onClick: r,
                                children: (0, i.jsx)(g.XSmallIcon, { size: "xs", color: "currentColor" }),
                            }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        className: b()(si.qd, { [si.R]: E }),
                        children: (0, i.jsx)(sr, { stage: f, isHidden: E }),
                    }),
                    (0, w.Rq)(n) && (0, i.jsx)("div", { className: si.qd, children: (0, i.jsx)(tC, { route: n }) }),
                    j &&
                        (0, i.jsx)("div", {
                            className: si.qd,
                            children: (0, i.jsx)(iA, { route: n, onNextStep: et, onPreviousStep: $ }),
                        }),
                    (0, i.jsx)(t3, {
                        activeRoute: n,
                        blockedTrait: F,
                        blockedTraitDescriptionId: X,
                        onBack: $,
                        onNext: et,
                        onReplay: ea,
                    }),
                    (0, i.jsx)(ec, { activeRoute: n }),
                    (0, i.jsx)(ij, {
                        flow: s,
                        stats: S,
                        activeRoute: n,
                        isRouteBlocked: null != F,
                        blockedTraitDescriptionId: X,
                        onRouteClick: er,
                    }),
                    null != F && (0, i.jsx)(m.A, { id: W, children: (0, v.Cz)(F) }),
                ],
            }),
    });
}
function sc() {
    return !!c._.hasSubscribers(tW.jej.MODAL_CLOSE) && (c._.dispatch(tW.jej.MODAL_CLOSE), !0);
}
async function sd(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        a = arguments.length > 2 ? arguments[2] : void 0,
        r = await (0, d.nX)(a);
    r === l.T.ERROR
        ? (0, s.P0)({ text: ex.intl.string(ex.t.fEptJP), variant: "critical" })
        : r !== l.T.FETCHING &&
          (o.A.initialize(t),
          (0, u.lw)(e),
          (0, n.B8)(
              (e) => {
                  let { closeLayer: a } = e;
                  return (0, i.jsx)(sn, { didPlayerShareDataWithDiscord: t, onClose: a });
              },
              { onEscape: sc },
          ));
}
