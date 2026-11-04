a.d(t, { D: () => rO });
var i,
    r = a(477900),
    s = a(858899),
    n = a(361158),
    c = a(188567),
    d = a(796104),
    l = a(719718),
    o = a(527926),
    u = a(617390),
    h = a(582128),
    f = a(503698),
    b = a.n(f);
let _ =
    "https://cdn.discordapp.com/assets/content/ca0ec81d050b27537618a0563ff926476bc53f331bae7af46595969995dea5fb.mp3";
var p = a(855986),
    x = a(43990),
    m = a(789645),
    g = a(140735),
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
    N = {
        [w.gr.VOICE_INTRO]: (e) => !(0, I.Kr)(e),
        [w.gr.MESSAGES_INTRO]: (e) => !(0, I.nb)(e),
        [w.gr.SERVERS_INTRO]: (e) => !(0, I.jr)(e),
        [w.gr.EMOJI_INTRO]: (e) => !(0, I.y7)(e),
        [w.gr.GAMES_INTRO]: (e) => !(0, I.IH)(e),
    },
    S = {
        [w.gr.TOP_SERVER_STATS]: I.jr,
        [w.gr.SQUAD_TRANSITION]: I.$p,
        [w.gr.SQUAD]: I.$p,
        [w.gr.SIDEKICK]: I.oL,
        [w.gr.SIDEKICK_LEAVE]: I.oL,
    };
function C(e) {
    let { flow: t, stats: a } = e;
    return (t === w.Np.SHARED_DATA ? j : E).filter((e) => {
        let t = N[e];
        if (null != t) return null != a && t(a);
        let i = S[e];
        return null == i || void 0 === a || i(a);
    });
}
var T = a(127639),
    R = a(287809),
    O = a(474090),
    y = a(817379);
function M() {
    return (0, p.yK)([l.A, R.default], () => {
        let { selectedCharacterTraits: e, stats: t, character: a } = l.A,
            i = (0, O.ki)(R.default.getCurrentUser());
        return Object.values(T.V).filter((r) => {
            let s = e[r];
            return null != s && (0, y.tS)(r, s, { stats: t, hasNitro: i, savedCharacter: a });
        });
    });
}
var D = a(964486),
    k = a(920495),
    L = a(739187);
function P(e) {
    let t = (0, v.Cz)(e);
    null != t && ((0, L.V)(), (0, s.P0)({ text: t, variant: "critical" }));
}
function G(e) {
    let t = (0, p.bG)([l.A], () => l.A.isMuted),
        a = h.useRef(null);
    return (
        h.useEffect(() => {
            let t = new Audio(e);
            return ((a.current = t), () => t.pause());
        }, [e]),
        h.useCallback(() => {
            let e = a.current;
            t || null == e || ((e.currentTime = 0), e.play());
        }, [t])
    );
}
var H = a(299619),
    U = a(775602),
    F = a(818348),
    K = a(11435);
function B(e) {
    let { isVisible: t } = e,
        a = h.useRef(null),
        i = (0, p.bG)([U.Ay], () => U.Ay.useReducedMotion),
        s = t && !i;
    return (
        h.useEffect(() => {
            let e = a.current;
            null != e && (s ? e.play().catch(F.tE) : e.pause());
        }, [s]),
        h.useEffect(() => {
            i && null != a.current && (a.current.currentTime = 1);
        }, [i]),
        (0, r.jsxs)("div", {
            className: b()(K.Tp, { [K.R]: !t }),
            "aria-hidden": !0,
            children: [
                (0, r.jsx)(H.A, {
                    ref: a,
                    className: K.Ki,
                    src: "https://cdn.discordapp.com/assets/content/a7a4300630ed2733eca4a8bb584c3086a66063d78e2f829faf465d96ff388a93.webm",
                    loop: !0,
                    muted: !0,
                    playsInline: !0,
                }),
                (0, r.jsx)("div", { className: K.D7 }),
            ],
        })
    );
}
var z = a(885619);
function V(e) {
    let {
        "aria-label": t,
        "aria-pressed": a,
        "aria-disabled": i,
        "aria-describedby": s,
        children: n,
        onClick: c,
        size: d,
        className: l,
    } = e;
    return (0, r.jsx)("button", {
        type: "button",
        className: b()(z.button, "custom" !== d && z[d], l),
        onClick: c,
        "aria-label": t,
        "aria-pressed": a,
        "aria-disabled": i,
        "aria-describedby": s,
        children: n,
    });
}
function W(e) {
    let { className: t, ...a } = e;
    return (0, r.jsx)(V, { ...a, className: b()(z.shadow, t) });
}
function Y(e) {
    let { animatedSrc: t, staticSrc: a, className: i } = e,
        s = (0, p.bG)([U.Ay], () => U.Ay.useReducedMotion);
    return (0, r.jsx)("img", { src: s ? a : t, alt: "", className: i });
}
var Z = a(740281),
    q = a(766089),
    X = a(767988);
let J = { animatedSrc: q.A, staticSrc: X.A };
function Q(e) {
    let { activeRoute: t } = e,
        { animatedSrc: a, staticSrc: i } = (0, p.cf)(
            [l.A],
            () => {
                switch (t) {
                    case w.gr.SUMMARY:
                    case w.gr.SHARE:
                        let e = (0, A.o)(l.A.character),
                            { clydeLogoImage: a, clydeLogoStaticImage: i } = (0, A.j)(e);
                        return { animatedSrc: a, staticSrc: i };
                    default:
                        return J;
                }
            },
            [t],
        );
    return (0, r.jsx)(Y, { animatedSrc: a, staticSrc: i, className: Z.w });
}
var $ = a(756408),
    ee = a(834730),
    et = a(504736);
function ea(e) {
    let { children: t, className: a, ...i } = e;
    return (0, r.jsx)(ee.E, { ...i, className: b()(et.Q, a), color: "none", children: t });
}
var ei = a(271427);
function er(e) {
    let { children: t, className: a, style: i } = e;
    return (0, r.jsx)(ea, { tag: "span", variant: "mono-md/bold", className: b()(ei.T, a), style: i, children: t });
}
var es = a(852717),
    en = a(792996),
    ec = a(383931);
function ed(e) {
    let { percent: t } = e;
    return (0, r.jsx)(er, {
        className: ec.t,
        children: en.intl.formatToPlainString(es.default.fOGKA4, { percent: t }),
    });
}
var el = a(646692);
function eo(e) {
    let { icon: t, value: a, topPercent: i, children: s } = e;
    return (0, r.jsxs)("div", {
        className: el.dJ,
        children: [
            null != i && (0, r.jsx)(ed, { percent: i }),
            (0, r.jsxs)("div", {
                className: el.p,
                children: [
                    (0, r.jsx)(ea, {
                        variant: "heading-xxl/medium",
                        className: el.Uq,
                        children: a.toLocaleString(en.intl.currentLocale),
                    }),
                    (0, r.jsxs)("div", {
                        className: el.Pf,
                        children: [
                            (0, r.jsx)(t, { size: "xs", color: "currentColor" }),
                            (0, r.jsx)(ea, { variant: "heading-xs/semibold", className: el.QK, children: s }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var eu = a(303453);
let eh = {
    [v.v7.FACE]: es.default.q8GA6h,
    [v.v7.OUTFIT]: es.default["xGh/fq"],
    [v.v7.OUTFIT_COLOR]: es.default.IgiEDV,
    [v.v7.HAT]: es.default.QqeBEO,
    [v.v7.WEARABLE]: es.default.l57q3i,
    [v.v7.AURA]: es.default["fYp+yq"],
    [v.v7.SHOES]: es.default.BaI4wD,
    [v.v7.BASE]: es.default.SMXZXX,
};
function ef(e) {
    let { customizationOption: t, earnedCount: a, totalCount: i } = e;
    return (0, r.jsx)(ee.E, {
        variant: "body-md/medium",
        color: "text-subtle",
        className: eu.k,
        children: en.intl.format(eh[t], {
            earnedCount: a,
            totalCount: i,
            countHook: (e, t) =>
                (0, r.jsx)(ea, { tag: "span", variant: "mono-md/bold", className: eu.U, children: e }, t),
        }),
    });
}
var eb = a(461872),
    e_ = a(435558);
let ep = (0, a(196765).v)(() => ({ hoveredOption: void 0 })),
    ex = (0, e_.debounce)((e) => ep.setState({ hoveredOption: e }), 250);
function em(e) {
    let { hoveredOption: t, isDelayed: a = !1 } = e;
    a ? ex(t) : (ex.cancel(), ep.setState({ hoveredOption: t }));
}
var eg = a(28863),
    eA = a(793574),
    ev = a(778705),
    ew = a(218546),
    eI = a(532294),
    eE = a(647093);
let ej = `linear-gradient(to right, ${eI.uz.join(", ")})`;
function eN(e) {
    let { rarity: t } = e,
        a = h.useMemo(() => ({ "--custom-checkpoint-rarity-background": t === ew.K.NITRO ? ej : eI.Zy[t] }), [t]);
    return (0, r.jsx)(er, { className: eE.q, style: a, children: en.intl.string(eI.iG[t]) });
}
var eS = a(829870);
function eC(e) {
    let { asset: t, hideRarity: a } = e,
        i =
            t.status === eb.eP.NITRO_LOCKED
                ? en.intl.format(es.default["3Wq/bk"], {
                      subscribeHook: (e, t) =>
                          (0, r.jsx)(
                              eg.Anchor,
                              {
                                  onClick: () =>
                                      (0, ev.A)({ analyticsLocations: [eA.A.CHECKPOINT, eA.A.CHECKPOINT_TRAIT] }),
                                  children: e,
                              },
                              t,
                          ),
                  })
                : (0, v.Oq)(t);
    return (0, r.jsxs)("div", {
        className: eS.z,
        children: [
            (0, r.jsxs)("div", {
                className: eS.D,
                children: [
                    (0, r.jsx)(ee.E, {
                        tag: "div",
                        variant: "heading-sm/semibold",
                        color: "text-strong",
                        children: t.getName(),
                    }),
                    !a && null != t.rarity && (0, r.jsx)(eN, { rarity: t.rarity }),
                ],
            }),
            null != i && (0, r.jsx)(ee.E, { variant: "body-md/medium", color: "text-subtle", children: i }),
        ],
    });
}
var eT = a(646514),
    eR = a(403581),
    eO = a(835517),
    ey = a(559265);
function eM(e) {
    let { rarity: t } = e,
        a = h.useMemo(() => ({ "--custom-checkpoint-rarity-color": eI.Zy[t] }), [t]);
    return t === ew.K.NITRO
        ? (0, r.jsx)(eR.t, { size: "custom", color: eT.A.colors.ICON_SUBTLE, className: ey.d7 })
        : (0, r.jsx)("span", { className: ey.oG, style: a });
}
function eD(e) {
    let {
            traitOption: t,
            groupName: a,
            isSelected: i,
            hideRarity: s,
            onSelectOption: n,
            onHoverOption: c,
            disabled: d = !1,
        } = e,
        { trait: l, optionId: o, rarity: u, asset: f, status: _ } = t,
        p = _ === eb.eP.LOCKED,
        x = h.useMemo(() => {
            if (null == f) return null;
            let e = Math.round(80 * (0, eO.A)());
            return `${f}?width=${e}&height=${e}`;
        }, [f]);
    return (0, r.jsxs)("label", {
        className: b()(ey.uK, { [ey.wH]: i, [ey.dv]: (0, v.C5)(t), [ey.xt]: p, [ey.Ns]: _ === eb.eP.NITRO_LOCKED }),
        onMouseEnter: () => c(t),
        children: [
            (0, r.jsx)(g.A, {
                children: (0, r.jsx)("input", {
                    type: "radio",
                    name: a,
                    checked: i,
                    disabled: d,
                    onChange: () => n(l, o),
                    "aria-label": (0, v.v2)(t, s),
                }),
            }),
            null != x && (0, r.jsx)("img", { src: x, alt: "", draggable: !1, className: ey.Sl }),
            !s && null != u && (0, r.jsx)(eM, { rarity: u }),
        ],
    });
}
var ek = a(509063);
function eL(e) {
    let {
            customizationOption: t,
            traitOptions: a,
            selectedOption: i,
            onSelectOption: s,
            disabled: n = !1,
            children: c,
        } = e,
        d = h.useId(),
        l = !(0, v.Ux)(t),
        o = ep((e) => e.hoveredOption ?? i);
    h.useEffect(() => () => em({ hoveredOption: void 0 }), [t]);
    let u = h.useCallback(
            (e, t) => {
                (em({ hoveredOption: void 0 }), s(e, t));
            },
            [s],
        ),
        f = h.useCallback((e) => em({ hoveredOption: e.optionId !== i?.optionId ? e : void 0, isDelayed: !0 }), [i]);
    return (0, r.jsxs)("div", {
        className: ek.Nz,
        children: [
            (0, r.jsxs)("div", {
                className: ek.fF,
                children: [
                    c,
                    (0, r.jsx)("div", {
                        onMouseLeave: () => em({ hoveredOption: void 0 }),
                        children: (0, r.jsx)("div", {
                            role: "radiogroup",
                            "aria-label": (0, v.cq)(t),
                            className: ek.Vg,
                            children: a.map((e) =>
                                (0, r.jsx)(
                                    eD,
                                    {
                                        traitOption: e,
                                        groupName: d,
                                        isSelected: e.optionId === i?.optionId,
                                        hideRarity: l,
                                        onSelectOption: u,
                                        onHoverOption: f,
                                        disabled: n || e.status === eb.eP.LOCKED,
                                    },
                                    e.optionId,
                                ),
                            ),
                        }),
                    }),
                ],
            }),
            null != o && (0, r.jsx)(eC, { asset: o, hideRarity: l }),
        ],
    });
}
a(321073);
var eP = a(51104),
    eG = a(67915);
function eH(e, t) {
    return e === v.v7.OUTFIT ? (null != t ? (0, y.FA)(t) : void 0) : t;
}
function eU(e) {
    let { customizationOption: t } = e,
        {
            optionIds: a,
            selectedOptionId: i,
            savedOptionId: r,
            onSelectOption: s,
        } = (function (e) {
            let { customizationOption: t, onSelectOption: a } = e,
                i = v.hw[t],
                { selectedOptionId: r, savedOptionId: s } = (0, p.cf)([l.A], () => ({
                    selectedOptionId: eH(t, l.A.selectedCharacterTraits[i]),
                    savedOptionId: eH(t, l.A.character?.[i]),
                })),
                n = h.useCallback(
                    (e, t) => {
                        t !== r && ((0, u.dw)(e, t), a(e, t));
                    },
                    [a, r],
                );
            return {
                optionIds: (function (e, t) {
                    switch (e) {
                        case v.v7.OUTFIT:
                            return y.ps;
                        case v.v7.OUTFIT_COLOR:
                            return (0, y.wD)(t ?? eG.r.NONE);
                        default:
                            return;
                    }
                })(t, r),
                selectedOptionId: r,
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
            let { customizationOption: t, savedOptionId: a, rarityOrder: i, optionIds: r } = e,
                s = (0, p.bG)([l.A], () => l.A.stats),
                n = (0, p.bG)([R.default], () => (0, O.ki)(R.default.getCurrentUser())),
                c = h.useMemo(() => (0, v.p8)(i), [i]);
            return h.useMemo(() => {
                let e = v.hw[t],
                    i = t === v.v7.OUTFIT_COLOR ? eP.x : eP.$[e],
                    d = (0, y.mf)(e, s),
                    l = [],
                    o = 0,
                    u = 0;
                for (let t of r ?? y.Rk[e]) {
                    let r = (0, y.$C)(e, t),
                        s = a === t,
                        c = eb.eP.UNLOCKED;
                    null == r || d.has(r) || s
                        ? r !== ew.K.NITRO || n || s || (c = eb.eP.NITRO_LOCKED)
                        : (c = eb.eP.LOCKED);
                    let h = c === eb.eP.UNLOCKED && (r !== ew.K.NITRO || n);
                    (null != r && o++,
                        null != r && h && u++,
                        l.push({
                            trait: e,
                            optionId: t,
                            asset: y.qM[e][t]?.thumbnail,
                            rarity: r,
                            status: c,
                            getName: () => {
                                let e = i[t];
                                return null != e ? en.intl.string(e) : "";
                            },
                        }));
                }
                l.sort(c);
                let h = l.filter((e) => {
                    let { status: t } = e;
                    return t !== eb.eP.LOCKED;
                });
                return { traitOptions: l, availableTraitOptions: h, totalCount: o, earnedCount: u };
            }, [t, n, r, c, a, s]);
        })({ customizationOption: t, savedOptionId: r, rarityOrder: eI.FG, optionIds: a }),
        b = h.useMemo(
            () =>
                c.find((e) => {
                    let { optionId: t } = e;
                    return t === i;
                }) ?? c[0],
            [i, c],
        );
    return (
        !(function (e) {
            let { availableTraitOptions: t, selectedOptionId: a, onSelectOption: i, isPaused: r = !1 } = e,
                s = t[0],
                n = t.some((e) => e.optionId === a);
            h.useEffect(() => {
                r || null == s || n || i(s.trait, s.optionId);
            }, [s, n, i, r]);
        })({ availableTraitOptions: c, selectedOptionId: i, onSelectOption: d.IB }),
        { traitOptions: n, selectedOption: b, totalCount: o, earnedCount: f, onSelectOption: s }
    );
}
function eF(e) {
    let { customizationOption: t } = e,
        {
            traitOptions: a,
            selectedOption: i,
            totalCount: s,
            earnedCount: n,
            onSelectOption: c,
        } = eU({ customizationOption: t });
    return (0, r.jsx)(eL, {
        customizationOption: t,
        traitOptions: a,
        selectedOption: i,
        onSelectOption: c,
        children: (0, r.jsx)(ef, { customizationOption: t, earnedCount: n, totalCount: s }),
    });
}
var eK = a(71678);
function eB(e) {
    let { children: t, className: a } = e;
    return (0, r.jsx)("div", { className: b()(eK.n, a), children: t });
}
function ez() {
    let e = (0, p.bG)([l.A], () => l.A.stats?.emojis);
    return (0, r.jsxs)(eB, {
        children: [
            (0, r.jsx)(eo, {
                icon: $.o,
                value: Math.round(e?.numEmojisSent ?? 0),
                topPercent: (0, I.bD)(e?.numEmojisSentPercentile),
                children: en.intl.string(es.default.ZTDCIv),
            }),
            (0, r.jsx)(eF, { customizationOption: v.v7.SHOES }),
        ],
    });
}
var eV = a(534514),
    eW = a(265872),
    eY = a(320448),
    eZ = a(315710),
    eq = a(444927);
let eX = {
    "--custom-checkpoint-primary": eI.Kr,
    "--custom-checkpoint-dark-cyan": eI.ow,
    "--custom-checkpoint-button-border": eI.ow,
    "--custom-checkpoint-button-shadow": eI.zj,
    "--custom-checkpoint-white": eI.Ve,
    "--custom-checkpoint-guild-card-background": eI.LM,
    "--custom-checkpoint-background-gradient-start": eI.bI,
};
var eJ = a(580814);
function eQ(e) {
    let { options: t, activeCustomizationOption: a, returnRef: i, onSelectOption: s, onClose: n } = e,
        c = h.useRef(null),
        d = h.useRef([]),
        l = (0, eq.A)(() => Math.max(t.indexOf(a), 0));
    function o(e) {
        d.current[(e + t.length) % t.length]?.focus();
    }
    return (
        (0, eZ.tj)(c, { returnRef: i }),
        h.useEffect(() => {
            d.current[l]?.focus();
        }, [l]),
        (0, r.jsx)("div", {
            ref: c,
            role: "menu",
            tabIndex: -1,
            "aria-label": en.intl.string(es.default.Zl5vPW),
            className: eJ.M,
            style: eX,
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
                (0, r.jsx)(
                    "button",
                    {
                        ref: (e) => {
                            d.current[t] = e;
                        },
                        type: "button",
                        role: "menuitemradio",
                        "aria-checked": e === a,
                        tabIndex: -1,
                        className: eJ.A,
                        onClick: () => s(e),
                        onMouseEnter: (e) => e.currentTarget.focus(),
                        children: (0, r.jsx)(ee.E, {
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
var e$ = a(769909);
let e0 = [v.v7.BASE, v.v7.OUTFIT_COLOR],
    e1 = [v.v7.AURA, v.v7.WEARABLE, v.v7.SHOES, v.v7.HAT, v.v7.OUTFIT, v.v7.FACE];
function e5(e) {
    let {
            activeCustomizationOption: t,
            onSelectOption: a,
            blockedTrait: i,
            blockedTraitDescriptionId: s,
            disabled: n = !1,
        } = e,
        c = h.useRef(null),
        d = e1.includes(t);
    return (0, r.jsx)(eW.Y, {
        targetElementRef: c,
        position: "right",
        align: "top",
        spacing: 8,
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, r.jsx)(eQ, {
                options: e1,
                activeCustomizationOption: t,
                returnRef: c,
                onSelectOption: (e) => {
                    (a(e), i());
                },
                onClose: i,
            });
        },
        children: (e, a) => {
            let { isShown: l } = a;
            return (0, r.jsxs)("button", {
                ...e,
                ref: c,
                type: "button",
                disabled: n,
                "aria-disabled": null != i,
                "aria-describedby": s,
                "aria-haspopup": "menu",
                onClick: function (t) {
                    null != i ? P(i) : e.onClick(t);
                },
                onKeyDown: (t) => {
                    (e.onKeyDown(t), ("ArrowLeft" === t.key || "ArrowRight" === t.key) && t.stopPropagation());
                },
                className: b()(e$.Mf, e$.OS, { [e$.vu]: d || l }),
                children: [
                    (0, r.jsx)(ee.E, {
                        tag: "span",
                        variant: "heading-sm/semibold",
                        color: "none",
                        children: d ? (0, v.cq)(t) : en.intl.string(es.default["iXpQc+"]),
                    }),
                    (0, r.jsx)(eY._, { size: "refresh_sm", color: "currentColor" }),
                ],
            });
        },
    });
}
function e6(e) {
    let { activeCustomizationOption: t, onSelectOption: a, blockedTrait: i, disabled: s = !1 } = e,
        n = h.useId(),
        c = h.useId(),
        d = null != i ? c : void 0;
    return (0, r.jsxs)("div", {
        className: e$.vR,
        children: [
            (0, r.jsx)("div", {
                role: "radiogroup",
                "aria-label": en.intl.string(es.default.Zl5vPW),
                className: e$.vR,
                children: e0.map((e) => {
                    let c = e === t;
                    return (0, r.jsxs)(
                        "label",
                        {
                            className: b()(e$.Mf, { [e$.vu]: c }),
                            children: [
                                (0, r.jsx)(g.A, {
                                    children: (0, r.jsx)("input", {
                                        type: "radio",
                                        name: n,
                                        checked: c,
                                        disabled: s,
                                        "aria-disabled": null != i,
                                        "aria-describedby": d,
                                        onChange: () => {
                                            null != i ? P(i) : a(e);
                                        },
                                    }),
                                }),
                                (0, r.jsx)(ee.E, {
                                    tag: "span",
                                    variant: "heading-sm/semibold",
                                    color: "none",
                                    children: (0, v.cq)(e),
                                }),
                            ],
                        },
                        e,
                    );
                }),
            }),
            (0, r.jsx)(e5, {
                activeCustomizationOption: t,
                onSelectOption: a,
                blockedTrait: i,
                blockedTraitDescriptionId: d,
                disabled: s,
            }),
            null != i && (0, r.jsx)(g.A, { id: c, children: (0, v.Cz)(i) }),
        ],
    });
}
var e2 = a(195464);
function e3() {
    let [e, t] = h.useState(v.v7.BASE),
        { traitOptions: a, selectedOption: i, onSelectOption: s } = eU({ customizationOption: e }),
        n = M().find((t) => t === v.hw[e]),
        c = (0, p.bG)([l.A], () => l.A.isSaving);
    return (0, r.jsxs)(eB, {
        className: e2.n,
        children: [
            (0, r.jsx)(eV.D, {
                variant: "heading-xl/medium",
                color: "none",
                className: e2.D,
                children: en.intl.string(es.default["q2nj/Z"]),
            }),
            (0, r.jsx)(e6, { activeCustomizationOption: e, onSelectOption: t, blockedTrait: n, disabled: c }),
            (0, r.jsx)(eL, {
                customizationOption: e,
                traitOptions: a,
                selectedOption: i,
                onSelectOption: s,
                disabled: c,
            }),
        ],
    });
}
var e4 = a(81466);
function e8() {
    let e = (0, p.bG)([l.A], () => l.A.stats?.games);
    return (0, r.jsxs)(eB, {
        children: [
            (0, r.jsx)(eo, {
                icon: e4.CalendarIcon,
                value: Math.round(e?.totalDaysPlayed ?? 0),
                topPercent: (0, I.bD)(e?.totalDaysPlayedPercentile),
                children: en.intl.string(es.default["4N5p4D"]),
            }),
            (0, r.jsx)(eF, { customizationOption: v.v7.AURA }),
        ],
    });
}
var e9 = a(687966);
function e7() {
    let e = (0, p.bG)([l.A], () => l.A.stats?.games);
    return (0, r.jsxs)(eB, {
        children: [
            (0, r.jsx)(eo, {
                icon: e9.GameControllerIcon,
                value: Math.round(e?.totalGamesPlayed ?? 0),
                topPercent: (0, I.bD)(e?.totalGamesPlayedPercentile),
                children: en.intl.string(es.default.HM2fjf),
            }),
            (0, r.jsx)(eF, { customizationOption: v.v7.WEARABLE }),
        ],
    });
}
var te = a(534890),
    tt = a(350363);
function ta() {
    let e = (0, p.bG)([l.A], () => l.A.stats?.messages);
    return (0, r.jsxs)(eB, {
        children: [
            (0, r.jsx)(eo, {
                icon: te.ChatIcon,
                value: Math.round(e?.numMessagesSent ?? 0),
                topPercent: (0, I.bD)(e?.numMessagesSentPercentile),
                children: en.intl.string(tt.default.wWKySP),
            }),
            (0, r.jsx)(eF, { customizationOption: v.v7.OUTFIT }),
        ],
    });
}
var ti = a(664121);
function tr() {
    let e = (0, p.bG)([l.A], () => l.A.stats?.guilds?.guilds[0]);
    return (0, r.jsxs)(eB, {
        children: [
            (0, r.jsx)(eo, {
                icon: ti.R,
                value: Math.round(e?.numDaysInteracted ?? 0),
                topPercent: (0, I.bD)(e?.numDaysInteractedPercentile),
                children: en.intl.string(es.default["M+a+t1"]),
            }),
            (0, r.jsx)(eF, { customizationOption: v.v7.HAT }),
        ],
    });
}
var ts = a(831544);
function tn() {
    let e = (0, p.bG)([l.A], () => l.A.stats?.voice),
        t = Math.round(e?.totalVoiceMinutes ?? 0);
    return (0, r.jsxs)(eB, {
        children: [
            (0, r.jsx)(eo, {
                icon: ts.MicrophoneIcon,
                value: t,
                topPercent: (0, I.bD)(e?.totalVoiceMinutesPercentile),
                children: en.intl.string(es.default["3/T12E"]),
            }),
            (0, r.jsx)(eF, { customizationOption: v.v7.FACE }),
        ],
    });
}
function tc(e) {
    let { route: t } = e;
    switch (t) {
        case w.gr.VOICE_FACE:
            return (0, r.jsx)(tn, {});
        case w.gr.MESSAGES_OUTFIT:
            return (0, r.jsx)(ta, {});
        case w.gr.SERVERS_HEADWEAR:
            return (0, r.jsx)(tr, {});
        case w.gr.EMOJI_SHOES:
            return (0, r.jsx)(ez, {});
        case w.gr.GAMES_WEARABLE:
            return (0, r.jsx)(e7, {});
        case w.gr.GAME_TIME_AURA:
            return (0, r.jsx)(e8, {});
        case w.gr.FINALIZE_CHARACTER:
            return (0, r.jsx)(e3, {});
        default:
            return null;
    }
}
var td = a(358618),
    tl = a(983851);
function to() {
    let e = (0, p.bG)([l.A], () => l.A.isMuted),
        t = e ? td._ : tl.H;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(V, {
                size: "sm",
                "aria-label": en.intl.string(e ? en.t.YqAjXy : en.t.w4m945),
                onClick: d.K8,
                children: (0, r.jsx)(t, { size: "xs", color: "currentColor" }),
            }),
            (0, r.jsx)("audio", {
                autoPlay: !0,
                loop: !0,
                muted: e,
                children: (0, r.jsx)("source", {
                    src: "https://cdn.discordapp.com/assets/content/d271231f4934992caed169c11586a1da060d37b5fd8804b56666b547f03836bd.mp3",
                }),
            }),
        ],
    });
}
var tu = a(477155),
    th = a(22231),
    tf = a(935286),
    tb = a(405433),
    t_ = a(289873),
    tp = a(621466);
function tx(e, t) {
    let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    h.useEffect(() => {
        if (!a) return (window.addEventListener("keydown", i), () => window.removeEventListener("keydown", i));
        function i(a) {
            (0, tp.vq)(a.target, HTMLTextAreaElement) || (0, tp.vq)(a.target, HTMLInputElement) || (a.key === e && t());
        }
    }, [e, t, a]);
}
var tm = a(753875);
function tg(e) {
    let { "aria-label": t, "aria-describedby": a, icon: i, onClick: s, disabled: n = !1 } = e;
    return (
        tx("ArrowLeft", s, n),
        (0, r.jsx)(V, {
            size: "md",
            className: b()(tm.A4, tm.aX),
            onClick: s,
            "aria-disabled": n,
            "aria-describedby": a,
            "aria-label": t,
            children: (0, r.jsx)(i, { color: "currentColor" }),
        })
    );
}
function tA(e) {
    let {
        "aria-label": t,
        "aria-describedby": a,
        children: i,
        onClick: s,
        size: n,
        className: c,
        disabled: d = !1,
    } = e;
    return (
        tx("ArrowRight", s, d),
        (0, r.jsx)(W, {
            size: n,
            className: b()(tm.A4, tm.K2, c),
            onClick: s,
            "aria-disabled": d,
            "aria-describedby": a,
            "aria-label": t,
            children: i,
        })
    );
}
function tv(e) {
    let { "aria-describedby": t, onClick: a, disabled: i } = e;
    return (0, r.jsx)(tg, {
        "aria-label": en.intl.string(en.t["13/7kX"]),
        "aria-describedby": t,
        icon: tu.r,
        onClick: a,
        disabled: i,
    });
}
function tw(e) {
    let { onClick: t, disabled: a } = e;
    return (0, r.jsx)(tg, {
        "aria-label": en.intl.string(es.default.Iyyy9s),
        icon: th.PencilIcon,
        onClick: t,
        disabled: a,
    });
}
function tI(e) {
    let { "aria-describedby": t, onClick: a, disabled: i } = e;
    return (0, r.jsx)(tA, {
        size: "md",
        "aria-label": en.intl.string(en.t.PDTjLN),
        "aria-describedby": t,
        onClick: a,
        disabled: i,
        children: (0, r.jsx)(tf.E, { color: "currentColor" }),
    });
}
function tE(e) {
    let { "aria-describedby": t, onClick: a, disabled: i } = e;
    return (0, r.jsxs)(tA, {
        size: "custom",
        className: tm.GA,
        "aria-label": en.intl.string(en.t.PDTjLN),
        "aria-describedby": t,
        onClick: a,
        disabled: i,
        children: [
            (0, r.jsx)(ea, { variant: "mono-md/normal", className: tm.Pf, children: en.intl.string(en.t.PDTjLN) }),
            (0, r.jsx)(tf.E, { size: "refresh_sm", color: "currentColor" }),
        ],
    });
}
function tj(e) {
    let { onClick: t, disabled: a } = e;
    return (0, r.jsxs)(tA, {
        size: "custom",
        className: tm.GA,
        "aria-label": en.intl.string(en.t.i4jeWR),
        onClick: t,
        disabled: a,
        children: [
            (0, r.jsx)(ea, { variant: "mono-md/normal", className: tm.Pf, children: en.intl.string(en.t.i4jeWR) }),
            (0, r.jsx)(tf.E, { size: "refresh_sm", color: "currentColor" }),
        ],
    });
}
function tN(e) {
    let { onClick: t, disabled: a } = e;
    return (0, r.jsxs)(tA, {
        size: "custom",
        className: b()(tm.GA, tm.Bq),
        "aria-label": en.intl.string(en.t.RDE0Sc),
        onClick: t,
        disabled: a,
        children: [
            (0, r.jsx)(ee.E, {
                variant: "mono-md/bold",
                color: "none",
                className: tm.Pf,
                children: en.intl.string(en.t.RDE0Sc),
            }),
            (0, r.jsx)(tb.ShareIcon, { size: "refresh_sm", color: "currentColor" }),
        ],
    });
}
function tS(e) {
    let { onBack: t, isRouteBlocked: a, blockedTraitDescriptionId: i } = e,
        s = (0, p.bG)([l.A], () => l.A.isSaving);
    return (0, r.jsx)(tv, {
        "aria-describedby": i,
        onClick: function () {
            s || t();
        },
        disabled: s || a,
    });
}
function tC(e) {
    let { onNext: t, navigate: a, isRouteBlocked: i, blockedTraitDescriptionId: n } = e,
        c = (0, p.bG)([l.A], () => l.A.isSaving);
    async function o() {
        if (c) return;
        let e = (0, y.XI)(l.A.selectedCharacterTraits);
        (await (0, d.yE)(e)) ? t() : (0, s.P0)({ text: en.intl.string(en.t.fEptJP), variant: "critical" });
    }
    return (0, r.jsxs)(tA, {
        size: "custom",
        className: tm.GA,
        "aria-label": en.intl.string(en.t["R3BPH+"]),
        "aria-describedby": n,
        onClick: function () {
            a(o);
        },
        disabled: c || i,
        children: [
            (0, r.jsx)(ea, { variant: "mono-md/normal", className: tm.Pf, children: en.intl.string(en.t["R3BPH+"]) }),
            c
                ? (0, r.jsx)(t_.y, { type: t_.t.SPINNING_CIRCLE_SIMPLE, className: tm.u1, itemClassName: tm.$N })
                : (0, r.jsx)(tf.E, { size: "refresh_sm", color: "currentColor" }),
        ],
    });
}
function tT(e) {
    let { activeRoute: t, blockedTrait: a, blockedTraitDescriptionId: i, onBack: s, onNext: n } = e,
        c = null != a,
        d = h.useMemo(() => (0, e_.throttle)((e) => e(), 500, { trailing: !1 }), []);
    function l(e) {
        null != a ? P(a) : d(e);
    }
    switch (t) {
        case w.gr.HOME:
            return null;
        case w.gr.FINALIZE_CHARACTER:
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(tS, { onBack: () => l(s), isRouteBlocked: c, blockedTraitDescriptionId: i }),
                    (0, r.jsx)(tC, { onNext: n, navigate: l, isRouteBlocked: c, blockedTraitDescriptionId: i }),
                ],
            });
        case w.gr.SUMMARY:
            return (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(tw, { onClick: () => d(s) }), (0, r.jsx)(tN, { onClick: () => d(n) })],
            });
        case w.gr.SHARE:
            return (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(tv, { onClick: () => d(s) }), (0, r.jsx)(tj, { onClick: () => d(n) })],
            });
        default:
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(tv, { "aria-describedby": i, onClick: () => l(s), disabled: c }),
                    (0, w.Rq)(t)
                        ? (0, r.jsx)(tE, { "aria-describedby": i, onClick: () => l(n), disabled: c })
                        : (0, r.jsx)(tI, { "aria-describedby": i, onClick: () => l(n), disabled: c }),
                ],
            });
    }
}
function tR(e) {
    let { className: t } = e;
    return (0, r.jsx)(Y, {
        animatedSrc:
            "https://cdn.discordapp.com/assets/content/02e9ae4cdbec0b2adef22c9a5659f5c7340e399cc8932e8af6d41e62a37644ae.png",
        staticSrc:
            "https://cdn.discordapp.com/assets/content/f08be0abd0d224b5f7e1e5d6c1ef8e4d24cddcb712e2c624dcc6ea3d136818d5.png",
        className: t,
    });
}
var tO = a(771639);
let ty = { "--custom-checkpoint-screen-vertical-inset": "88px" };
function tM(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", { className: tO.n, style: ty, children: t });
}
var tD = a(639331);
function tk() {
    let e = (0, p.bG)([l.A], () => l.A.fetchState !== l.T.SUCCESS || null != l.A.stats);
    return (0, r.jsx)(tM, {
        children: (0, r.jsxs)("div", {
            className: tD.Qs,
            children: [
                (0, r.jsxs)("div", {
                    className: tD.Ok,
                    children: ["2026", !e && (0, r.jsx)(tR, { className: tD.gi })],
                }),
                (0, r.jsxs)("div", {
                    className: tD.eH,
                    children: [
                        (0, r.jsx)(ea, {
                            tag: "p",
                            variant: "heading-lg/medium",
                            children: en.intl.string(e ? es.default["7YmUVu"] : es.default["Fyr+NW"]),
                        }),
                        !e &&
                            (0, r.jsx)(ea, {
                                tag: "p",
                                variant: "heading-lg/medium",
                                children: en.intl.string(es.default["2GRr6H"]),
                            }),
                    ],
                }),
            ],
        }),
    });
}
(a(134528), a(947204));
var tL = a(675970),
    tP = a(559106),
    tG = a(366056),
    tH = a(292801),
    tU = a(155718),
    tF = a(294454),
    tK = a(489414),
    tB = a(878358),
    tz = a(383233),
    tV = a(819648),
    tW = a(677059);
function tY(e) {
    let { children: t } = e;
    return (0, r.jsx)(ea, { variant: "heading-xxl/medium", className: tW.h, children: t });
}
var tZ = a(100391);
function tq(e) {
    let { icon: t, children: a } = e;
    return (0, r.jsxs)("div", {
        className: tZ.D,
        children: [
            (0, r.jsx)(t, { size: "md", color: "currentColor" }),
            (0, r.jsx)(ea, { variant: "heading-lg/semibold", className: tZ.Q, children: a }),
        ],
    });
}
var tX = a(456410);
function tJ(e) {
    let { name: t, label: a, checked: i, onSelect: s, children: n } = e;
    return (0, r.jsx)(tP.vN, {
        within: !0,
        children: (0, r.jsxs)("label", {
            className: b()(tX.uK, { [tX.KD]: i }),
            children: [
                (0, r.jsx)(g.A, {
                    children: (0, r.jsx)("input", { type: "radio", name: t, checked: i, onChange: s, "aria-label": a }),
                }),
                i ? (0, r.jsx)("div", { className: tX.Gt, "aria-hidden": !0 }) : null,
                (0, r.jsx)("div", { className: tX.Nr, "aria-hidden": !0, children: n }),
            ],
        }),
    });
}
function tQ() {
    let e = (0, p.bG)([l.A], () => l.A.character),
        t = (0, p.bG)([l.A], () => l.A.stats),
        a = h.useId(),
        i = h.useMemo(() => {
            var a, i;
            return ((a = e),
            (i = t),
            null != a && null != i
                ? [tL.Q.CHARACTER_ONLY, tL.Q.DEFAULT, tL.Q.STATS_ONLY]
                : null != a
                  ? [tL.Q.CHARACTER_ONLY]
                  : null != i
                    ? [tL.Q.STATS_ONLY]
                    : []).map((a) => ({ cardType: a, checkpointData: (0, tV.Go)(a, e, t) }));
        }, [e, t]),
        [n, c] = h.useState(
            () =>
                (
                    i.find((e) => {
                        let { cardType: t } = e;
                        return t === tL.Q.DEFAULT;
                    }) ?? i.at(0)
                )?.cardType,
        ),
        o = i.find((e) => {
            let { cardType: t } = e;
            return t === n;
        });
    return null == o
        ? null
        : (0, r.jsx)(tM, {
              children: (0, r.jsxs)("div", {
                  className: tX.uM,
                  children: [
                      (0, r.jsxs)("div", {
                          className: tX.wx,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: tX.R_,
                                  children: [
                                      (0, r.jsx)(tq, { icon: tG.M, children: en.intl.string(tt.default.ir6nEQ) }),
                                      (0, r.jsx)(ea, {
                                          variant: "display-lg",
                                          className: tX.Vy,
                                          children: en.intl.string(tt.default["T7cl+Y"]),
                                      }),
                                  ],
                              }),
                              (0, r.jsx)("div", {
                                  className: tX.h_,
                                  children: (0, r.jsx)(tY, { children: en.intl.string(es.default.KXDPot) }),
                              }),
                          ],
                      }),
                      (0, r.jsx)("div", {
                          role: "radiogroup",
                          "aria-label": en.intl.string(es.default.KXDPot),
                          className: tX.kR,
                          children: i.map((e) => {
                              let { cardType: t, checkpointData: i } = e;
                              return (0, r.jsx)(
                                  tJ,
                                  {
                                      name: a,
                                      label: (function (e) {
                                          switch (e) {
                                              case tL.Q.CHARACTER_ONLY:
                                                  return en.intl.string(es.default.tUU3fe);
                                              case tL.Q.DEFAULT:
                                                  return en.intl.string(es.default.DZQzJn);
                                              case tL.Q.STATS_ONLY:
                                                  return en.intl.string(es.default.e2UHGT);
                                          }
                                      })(t),
                                      checked: t === o.cardType,
                                      onSelect: () => c(t),
                                      children: (0, r.jsx)(tB.A, { checkpointData: i }),
                                  },
                                  t,
                              );
                          }),
                      }),
                      (0, r.jsxs)(W, {
                          size: "custom",
                          className: tX.sY,
                          "aria-label": en.intl.string(en.t.I3ltXO),
                          onClick: function () {
                              if (null == o) return;
                              let { cardType: e, checkpointData: t } = o;
                              (0, tF.fO)({
                                  message: new tz.Ay({
                                      content: "",
                                      components: [
                                          { type: tU.I5.CHECKPOINT_CARD, id: (0, tK.X1)("0"), checkpointData: t },
                                      ],
                                  }),
                                  source: "checkpoint",
                                  customSendHandler: async (t, a, i) => {
                                      let { withMessage: r } = a;
                                      i(!0);
                                      try {
                                          (await (0, d.jA)(t, r ?? "", e),
                                              (0, u.Pe)(e),
                                              (0, tF.Be)(),
                                              (0, s.P0)({ text: en.intl.string(en.t.kwmYkt), variant: "success" }));
                                      } catch {
                                          (0, s.P0)({ text: en.intl.string(en.t.iufib1), variant: "critical" });
                                      } finally {
                                          i(!1);
                                      }
                                  },
                              });
                          },
                          children: [
                              (0, r.jsx)(ee.E, {
                                  variant: "mono-md/bold",
                                  color: "none",
                                  className: tX.RC,
                                  children: en.intl.string(en.t.I3ltXO),
                              }),
                              (0, r.jsx)(tH.t, { size: "refresh_sm", color: "currentColor" }),
                          ],
                      }),
                  ],
              }),
          });
}
var t$ = a(206701),
    t0 = a(782134),
    t1 = a(998304),
    t5 = a(975571),
    t6 = a(427262),
    t2 = a(652215),
    t3 = a(438389);
let t4 = (0, t1.j5)(eI.Kr);
function t8(e) {
    let { onStart: t } = e,
        a = (0, p.bG)([R.default], () => R.default.getCurrentUser()),
        i = (0, t6.tx)(a),
        s = (0, p.bG)([U.Ay], () => U.Ay.useReducedMotion);
    return (
        tx("ArrowRight", t),
        (0, r.jsxs)(tM, {
            children: [
                (0, r.jsxs)("div", {
                    className: t3.Qs,
                    children: [
                        (0, r.jsxs)("div", {
                            className: t3.wx,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: t3.Qq,
                                    children: [
                                        (0, r.jsx)(ea, {
                                            variant: "display-lg",
                                            className: t3.DD,
                                            children: en.intl.string(tt.default["CdU/PF"]),
                                        }),
                                        (0, r.jsx)(ea, {
                                            variant: "heading-xxl/medium",
                                            children: en.intl.formatToPlainString(es.default.xhZ23b, { username: i }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)("div", {
                                    className: t3.CB,
                                    children: (0, r.jsx)(t$.U, {
                                        artboard: "Entry",
                                        className: t3.lW,
                                        fit: "contain",
                                        withReducedMotion: "short-loop",
                                        dataBinding: { iconColor: t4, reducedMotion: s },
                                    }),
                                }),
                            ],
                        }),
                        (0, r.jsxs)(W, {
                            size: "custom",
                            className: t3.ni,
                            "aria-label": en.intl.string(en.t.I0v0Qv),
                            onClick: t,
                            children: [
                                (0, r.jsx)(t0.PlayIcon, { size: "refresh_sm", color: "currentColor" }),
                                (0, r.jsx)(ea, {
                                    variant: "mono-md/normal",
                                    className: t3.qK,
                                    children: en.intl.string(en.t.I0v0Qv),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: t3.qr,
                    children: [
                        (0, r.jsx)(ea, {
                            variant: "body-sm/medium",
                            className: t3.ed,
                            children: en.intl.format(es.default.hcNhyq, {
                                learnMoreHook: (e, t) =>
                                    (0, r.jsx)(
                                        eg.Anchor,
                                        {
                                            className: t3.nf,
                                            href: t5.A.getArticleURL(t2.MVz.CHECKPOINT_2026),
                                            useDefaultUnderlineStyles: !1,
                                            children: e,
                                        },
                                        t,
                                    ),
                            }),
                        }),
                        (0, r.jsx)(ea, {
                            variant: "body-md/medium",
                            className: t3.al,
                            children: en.intl.format(tt.default.g476ZL, { name: "Exyl" }),
                        }),
                    ],
                }),
            ],
        })
    );
}
var t9 = a(565645),
    t7 = a(141881);
function ae(e) {
    let { children: t } = e;
    return (0, r.jsx)(er, { className: t7.l, children: t });
}
var at = a(765671),
    aa = a(663385),
    ai = a(469228),
    ar = a(406956);
let as = (0, t1.j5)(eI.Kr);
function an(e) {
    let { value: t, alignment: a = "left" } = e,
        i = (0, p.bG)([U.Ay], () => U.Ay.useReducedMotion),
        [s, n] = h.useState(0),
        c = i ? t : s;
    h.useEffect(() => {
        if (i) return;
        let e = performance.now(),
            a = requestAnimationFrame(function i(r) {
                let s = Math.min((r - e) / 500, 1);
                (n(Math.round(t * s)), s < 1 && (a = requestAnimationFrame(i)));
            });
        return () => cancelAnimationFrame(a);
    }, [t, i]);
    let d = "center" === a ? aa.m : ai.w;
    return (0, r.jsxs)("div", {
        className: ar.lY,
        children: [
            (0, r.jsx)("div", { className: ar.VL, children: t }),
            (0, r.jsx)(d, {
                className: ar.lW,
                fit: "layout",
                withReducedMotion: "short-loop",
                dataBinding: { DisplayValue: c, TextColor: as },
            }),
            (0, r.jsx)(g.A, { children: t.toLocaleString(en.intl.currentLocale) }),
        ],
    });
}
var ac = a(434911);
function ad(e) {
    let { value: t } = e,
        { ref: a, width: i } = (0, at.Ay)(),
        { ref: s, width: n } = (0, at.Ay)(),
        c = null != i && null != n ? Math.min(1, i / n) : 1;
    return (0, r.jsxs)("div", {
        ref: a,
        className: ac.ai,
        style: { height: 200 * c },
        children: [
            (0, r.jsx)("span", { ref: s, className: b()(ac.Qq, ac.xP), children: t }),
            (0, r.jsx)(an, { value: t }),
        ],
    });
}
function al(e) {
    let { value: t } = e;
    return (0, r.jsxs)("div", {
        className: ac.dJ,
        children: [
            "number" == typeof t
                ? (0, r.jsx)(ad, { value: t })
                : (0, r.jsx)(ea, { variant: "heading-xxl/medium", className: ac.Qq, children: t }),
            (0, r.jsx)(tR, { className: ac.gi }),
        ],
    });
}
(a(393431), a(532706), a(42231), a(232424), a(949626), a(767709), a(65162));
var ao = a(445199),
    au = a(205524),
    ah = a(690521),
    af = a(152321);
let ab = [0, 0, 2],
    a_ = [0, 1, 0],
    ap = [0, 0, 0],
    ax = `
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
    am = `
precision mediump float;

varying vec2 v_texcoord;
varying highp vec3 v_lighting;

uniform sampler2D u_texture;

void main() {
  highp vec4 texelColor = texture2D(u_texture, v_texcoord);
  gl_FragColor = vec4(texelColor.rgb * v_lighting, texelColor.a);
}
`,
    ag = [
        -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5,
        -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5,
        0.5, 0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, -0.5,
        -0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5,
        -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, 0.5, 0.5,
        -0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5,
    ],
    aA = [
        0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0,
        1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0,
    ],
    av = [
        0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
        1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0,
        -1, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
        1, 0, 0,
    ];
function aw(e) {
    let t,
        { emoji: a } = e,
        [i, s] = h.useState(null),
        [n, c] = h.useState(null),
        d = h.useRef(new Image()),
        [l, o] = h.useState(null),
        [u, f] = h.useState(!1),
        _ = h.useRef(0),
        x = h.useRef(0),
        m = h.useRef(45),
        g = h.useRef(45),
        A = (0, p.bG)([U.Ay], () => U.Ay.useReducedMotion),
        v = 70 * !A,
        w = 40 * !A,
        I = h.useRef(v),
        E = h.useRef(w),
        j = h.useRef(!1),
        N = h.useRef(0),
        S = h.useRef(0);
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
                r = i?.getContext("webgl");
            if (null == r || null == i || null == n) return;
            t.current = r;
            let s = r.createShader(r.VERTEX_SHADER),
                c = r.createShader(r.FRAGMENT_SHADER);
            if (null == s || null == c) return;
            if (
                (r.shaderSource(s, ax),
                r.shaderSource(c, am),
                r.compileShader(s),
                !r.getShaderParameter(s, r.COMPILE_STATUS))
            )
                return void console.error("ERROR compiling vertex shader!", r.getShaderInfoLog(s));
            if ((r.compileShader(c), !r.getShaderParameter(c, r.COMPILE_STATUS)))
                return void console.error("ERROR compiling fragment shader!", r.getShaderInfoLog(c));
            let d = r.createProgram();
            if (
                (r.attachShader(d, s), r.attachShader(d, c), r.linkProgram(d), !r.getProgramParameter(d, r.LINK_STATUS))
            )
                return void console.error("ERROR linking program!", r.getProgramInfoLog(d));
            if ((r.validateProgram(d), !r.getProgramParameter(d, r.VALIDATE_STATUS)))
                return void console.error("ERROR validating program!", r.getProgramInfoLog(d));
            let l = r.getAttribLocation(d, "a_position"),
                o = r.getAttribLocation(d, "a_texcoord"),
                u = r.getUniformLocation(d, "u_matrix"),
                h = r.getUniformLocation(d, "u_texture"),
                f = r.getAttribLocation(d, "a_vertexNormal"),
                b = r.getUniformLocation(d, "u_normalMatrix"),
                _ = r.createBuffer();
            (r.bindBuffer(r.ARRAY_BUFFER, _),
                r.bufferData(r.ARRAY_BUFFER, new Float32Array(av), r.STATIC_DRAW),
                r.vertexAttribPointer(f, 3, r.FLOAT, !1, 0, 0),
                r.enableVertexAttribArray(f));
            let p = r.createBuffer();
            (r.bindBuffer(r.ARRAY_BUFFER, p),
                (e = new Float32Array(ag)),
                r.bufferData(r.ARRAY_BUFFER, e, r.STATIC_DRAW));
            let x = r.createBuffer();
            (r.bindBuffer(r.ARRAY_BUFFER, x), r.bufferData(r.ARRAY_BUFFER, new Float32Array(aA), r.STATIC_DRAW));
            let A = ao.DF(60);
            return (
                (a = requestAnimationFrame(function e() {
                    if (null == r || null == i) return;
                    (r.viewport(0, 0, r.canvas.width, r.canvas.height), r.enable(r.CULL_FACE), r.enable(r.DEPTH_TEST));
                    let t = ao.DF(m.current),
                        s = ao.DF(g.current);
                    (r.clear(r.COLOR_BUFFER_BIT | r.DEPTH_BUFFER_BIT),
                        r.useProgram(d),
                        r.enableVertexAttribArray(l),
                        r.bindBuffer(r.ARRAY_BUFFER, p),
                        r.vertexAttribPointer(l, 3, r.FLOAT, !1, 0, 0),
                        r.enableVertexAttribArray(o),
                        r.bindBuffer(r.ARRAY_BUFFER, x),
                        r.vertexAttribPointer(o, 2, r.FLOAT, !1, 0, 0));
                    let n = i.clientWidth / i.clientHeight,
                        c = au.fN(au.vt(), A, n, 1, 2e3),
                        f = au.t5(au.vt(), ab, ap, a_),
                        _ = au.lw(au.vt(), c, f),
                        v = au.vt();
                    (au.eL(v, v, t), au.Z8(v, v, s));
                    let w = au.lw(au.vt(), _, v),
                        I = au.vt();
                    (au.B8(I, v),
                        au.mg(I, I),
                        r.uniformMatrix4fv(b, !1, I),
                        r.uniformMatrix4fv(u, !1, w),
                        r.uniform1i(h, 0),
                        r.drawArrays(r.TRIANGLES, 0, 36),
                        (a = requestAnimationFrame(e)));
                })),
                () => cancelAnimationFrame(a)
            );
        }, [m, g, i, n]));
    let C = h.useCallback(() => {
        let e = n?.getContext("2d");
        null != n &&
            null != e &&
            ((e.fillStyle = "black"),
            e.fillRect(0, 0, n.width, n.height),
            e.drawImage(d.current, 0, 0, n.width, n.height),
            (e.fillStyle = eI.Kr),
            e.fillRect(0, 0, n.width, 1),
            e.fillRect(0, 0, 1, n.height),
            e.fillRect(0, n.height - 1, n.width, 1),
            e.fillRect(n.width - 1, 0, 1, n.height),
            o(a),
            f(!0));
    }, [a, d, n]);
    (h.useEffect(() => {
        null != n &&
            ((d.current.crossOrigin = "anonymous"), (d.current.src = (0, ah.Ez)(a, 256)), (d.current.onload = C));
    }, [a, C, d, n]),
        h.useEffect(
            () => (
                !(function e(t) {
                    let a = 0.001 * t,
                        i = Math.min(a - x.current, 0.1);
                    if (((g.current += -E.current * i), (m.current += -I.current * i), !j.current)) {
                        if (Math.abs(I.current) > v) {
                            let e = I.current > 0 ? 1 : -1;
                            I.current -= 2 * e * window.devicePixelRatio;
                        }
                        if (Math.abs(E.current) > w) {
                            let e = E.current > 0 ? 1 : -1;
                            E.current -= 2 * e * window.devicePixelRatio;
                        }
                    }
                    ((x.current = a), (_.current = requestAnimationFrame(e)));
                })(0),
                () => cancelAnimationFrame(_.current)
            ),
            [v, w],
        ));
    let T = h.useCallback((e) => {
            ((j.current = !0), (I.current = 0), (E.current = 0), (N.current = e.clientX), (S.current = e.clientY));
        }, []),
        R = h.useCallback((e) => {
            if (j.current) {
                let t = (e.clientX - N.current) / window.devicePixelRatio;
                ((I.current = -((e.clientY - S.current) / window.devicePixelRatio) * (100 / window.devicePixelRatio)),
                    (E.current = -t * (100 / window.devicePixelRatio)),
                    (N.current = e.clientX),
                    (S.current = e.clientY));
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
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("canvas", {
                    className: b()(af.Ji, { [af.q4]: !u }),
                    ref: s,
                    height: 512,
                    width: 512,
                    onMouseDown: T,
                }),
                (0, r.jsx)("canvas", { className: af.R, ref: c, height: 256, width: 256 }),
            ],
        })
    );
}
var aI = a(826820);
let aE = [];
function aj(e) {
    let { emojiStats: t } = e,
        a = Math.round(t?.numEmojisSent ?? 0),
        i = (0, I.bD)(t?.numEmojisSentPercentile);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: aI.dJ,
                children: [
                    (0, r.jsx)(tq, { icon: $.o, children: en.intl.string(es.default.ZTDCIv) }),
                    (0, r.jsx)(an, { value: a }),
                ],
            }),
            (0, r.jsx)(tY, {
                children:
                    null != i
                        ? en.intl.format(es.default.o7vDrk, {
                              percent: i,
                              percentHook: (e, t) => (0, r.jsx)(ae, { children: e }, t),
                          })
                        : en.intl.format(es.default.NFptic, { numEmojis: a }),
            }),
        ],
    });
}
function aN(e) {
    let { numEmojisSent: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: aI.dJ,
                children: [
                    (0, r.jsx)(tq, { icon: $.o, children: en.intl.string(es.default.ZTDCIv) }),
                    (0, r.jsx)(al, { value: t }),
                ],
            }),
            (0, r.jsx)(tY, { children: en.intl.format(es.default["660/Rr"], { numEmojis: (0, I.wj)(t) }) }),
        ],
    });
}
function aS() {
    let e = (0, p.bG)([l.A], () => l.A.stats?.emojis),
        t = (0, p.bG)([l.A], () => (0, I.y7)(l.A.stats)),
        a = (0, p.bG)([l.A], () => l.A.globalStats?.emojis),
        i = !t && null != a,
        s = (i ? a.emojis : e?.emojis) ?? aE,
        [n, c] = h.useState(0),
        d = s[n],
        o = G(_);
    return (0, r.jsx)(tM, {
        children: (0, r.jsxs)("div", {
            className: aI.kL,
            children: [
                (0, r.jsx)("div", { className: aI.KY, children: null != d && (0, r.jsx)(aw, { emoji: d }) }),
                (0, r.jsxs)("div", {
                    className: aI.C,
                    children: [
                        i ? (0, r.jsx)(aN, { numEmojisSent: a.numEmojisSent }) : (0, r.jsx)(aj, { emojiStats: e }),
                        (0, r.jsx)("div", {
                            className: aI.gm,
                            children: s.map((e, t) =>
                                (0, r.jsx)(
                                    aC,
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
function aC(e) {
    let { emoji: t, rank: a, isActive: i, onClick: s } = e,
        n = !(0, p.bG)([U.Ay], () => U.Ay.useReducedMotion) && !0 === t.animated;
    return (0, r.jsxs)(V, {
        size: "custom",
        className: aI._X,
        onClick: s,
        "aria-label": en.intl.formatToPlainString(es.default["S5+pRg"], { emojiName: t.name, rank: a }),
        "aria-pressed": i,
        children: [
            (0, r.jsx)(t9.A, { className: aI.Zg, emojiId: t.id, emojiName: t.name, animated: n }),
            (0, r.jsx)(ea, { variant: "mono-md/bold", className: aI.Tm, children: a }),
        ],
    });
}
var aT = a(360450),
    aR = a(214947),
    aO = a(939249),
    ay = a(597770),
    aM = a(559647),
    aD = a(95369),
    ak = a(570287),
    aL = a(486020),
    aP = a(801305);
let aG = [],
    aH = (0, t1.j5)(eI.Kr),
    aU = { r: 0, g: 0, b: 0, a: 1 },
    aF = {
        "Avatar01/Stroke": aU,
        "Avatar01/Fill": aH,
        "Avatar02/Stroke": aU,
        "Avatar02/Fill": aH,
        "Avatar03/Stroke": aU,
        "Avatar03/Fill": aH,
        "Avatar04/Stroke": aU,
        "Avatar04/Fill": aH,
        "Avatar05/Stroke": aU,
        "Avatar05/Fill": aH,
        ConnectorColor: aH,
    };
function aK(e) {
    return null != e ? aL.Ay.getUserAvatarURL(e, !1, 160, "png") : void 0;
}
function aB(e) {
    let t,
        { route: a, onNextStep: i, onPreviousStep: s } = e,
        n = (0, p.bG)([l.A], () => l.A.stats?.users ?? aG),
        c = (0, p.bG)([l.A], () => l.A.stats?.sidekick),
        d = (0, p.bG)([R.default], () => R.default.getCurrentUser()),
        o = (0, p.bG)([U.Ay], () => U.Ay.useReducedMotion),
        u = h.useRef(null),
        f = h.useRef(void 0),
        _ = (function (e, t) {
            let [a, i] = h.useState({ route: e, hasShownSquad: e === w.gr.SQUAD, isTransitioning: !1 });
            switch (
                (a.route !== e &&
                    i({
                        route: e,
                        hasShownSquad: a.hasShownSquad || e === w.gr.SQUAD,
                        isTransitioning: !t && a.route === w.gr.SQUAD && e === w.gr.SIDEKICK,
                    }),
                h.useEffect(() => {
                    if (!a.isTransitioning) return;
                    let e = setTimeout(() => i((e) => ({ ...e, isTransitioning: !1 })), 1500);
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
            if (o) return void i();
            let e = setTimeout(i, 1e3);
            return () => clearTimeout(e);
        }, [i, s, o, a]));
    let [x, m] = n,
        g = ((0, t6.tx)(x) ?? "").toLocaleUpperCase(),
        A = ((0, t6.tx)(m) ?? "").toLocaleUpperCase(),
        v = (0, t6.tx)(c?.user) ?? "",
        I = n.length < 2,
        E = a === w.gr.SIDEKICK || a === w.gr.SIDEKICK_LEAVE;
    h.useEffect(() => () => clearInterval(f.current), []);
    let j = h.useCallback(() => {
        (clearInterval(f.current),
            (f.current = setInterval(() => {
                let e = u.current?.getProperties();
                e?.twoFriends?.value === I &&
                    e?.reducedMotion?.value === o &&
                    e?.["Avatar01/Username"]?.value === v.toLocaleUpperCase() &&
                    (u.current?.play(), clearInterval(f.current));
            }, 50)));
    }, [o, v, I]);
    return (0, r.jsxs)(tM, {
        children: [
            (0, r.jsx)(aT.m, {
                ref: u,
                className: aP.lW,
                fit: "contain",
                autoplay: !1,
                onLoad: j,
                withReducedMotion: "play",
                dataBinding: {
                    ...aF,
                    AnimationState: _,
                    "Avatar01/img": aK(c?.user),
                    "Avatar02/img": aK(m),
                    "Avatar03/img": aK(x),
                    "Avatar04/img": aK(c?.user),
                    "Avatar05/img": aK(d),
                    "Avatar01/Username": v.toLocaleUpperCase(),
                    "Avatar02/Username": A,
                    "Avatar03/Username": g,
                    "Avatar04/Username": v.toLocaleUpperCase(),
                    twoFriends: I,
                    reducedMotion: o,
                },
            }),
            a === w.gr.SQUAD_TRANSITION &&
                (0, r.jsx)("div", {
                    className: b()(aP.Qs, aP.kY),
                    children: (0, r.jsx)(tY, { children: en.intl.string(es.default["6RSp5q"]) }),
                }),
            a === w.gr.SQUAD &&
                (0, r.jsx)("div", {
                    className: aP.Qs,
                    children: (0, r.jsx)(az, {
                        title: en.intl.string(tt.default.OzY5Ns),
                        description: en.intl.string(es.default.EqdLDd),
                    }),
                }),
            E &&
                null != c &&
                (0, r.jsxs)("div", {
                    className: b()(aP.Qs, aP.yG),
                    children: [
                        (0, r.jsxs)("div", {
                            className: aP.Cv,
                            children: [
                                (0, r.jsx)(az, {
                                    title: en.intl.string(tt.default["+uwOHt"]),
                                    description: en.intl.string(es.default["/ctmGw"]),
                                }),
                                (0, r.jsx)(aV, { sidekick: c }),
                            ],
                        }),
                        (0, r.jsx)(aW, { user: c.user, username: v }),
                    ],
                }),
        ],
    });
}
function az(e) {
    let { title: t, description: a } = e;
    return (0, r.jsxs)("div", {
        className: aP.wx,
        children: [
            (0, r.jsxs)("div", {
                className: aP.R_,
                children: [
                    (0, r.jsx)(tq, { icon: aR.$, children: en.intl.string(tt.default.ZQakPR) }),
                    (0, r.jsx)(ea, { variant: "display-lg", className: aP.Vy, children: t }),
                ],
            }),
            (0, r.jsx)(tY, { children: a }),
        ],
    });
}
function aV(e) {
    let { sidekick: t } = e;
    return (0, r.jsxs)("div", {
        className: aP.M1,
        children: [
            (0, r.jsxs)("div", {
                className: aP.dJ,
                children: [
                    (0, r.jsx)(te.ChatIcon, { size: "md", color: "currentColor" }),
                    (0, r.jsx)(ea, {
                        variant: "heading-xxl/medium",
                        className: aP.wk,
                        children: Math.round(t.numMessagesSent),
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: aP.dJ,
                children: [
                    (0, r.jsx)(ts.MicrophoneIcon, { size: "md", color: "currentColor" }),
                    (0, r.jsx)(ea, {
                        variant: "heading-xxl/medium",
                        className: aP.wk,
                        children: Math.round(t.numVoiceMinutes),
                    }),
                ],
            }),
        ],
    });
}
function aW(e) {
    let { user: t, username: a } = e,
        [i, n] = h.useState(""),
        [c, l] = h.useState(!1),
        [o, f] = h.useState(!1),
        _ = (0, ak.A)(t.id),
        p = i.length > 0 && i.length <= 250 && !c && !o,
        x = c ? en.intl.string(en.t.fjcCk5) : en.intl.formatToPlainString(en.t["0ZQw/X"], { name: a });
    return _
        ? (0, r.jsxs)("div", {
              className: aP.OG,
              children: [
                  (0, r.jsx)("textarea", {
                      className: aP.yB,
                      value: i,
                      onChange: (e) => n(e.target.value),
                      disabled: c || o,
                      placeholder: x,
                      "aria-label": x,
                  }),
                  (0, r.jsxs)("div", {
                      className: aP.n,
                      children: [
                          (0, r.jsx)(aO.D, {
                              className: aP.KD,
                              onClick: function () {
                                  ((0, u.nr)(t.id),
                                      (0, aD.A)({
                                          giftRecipient: t,
                                          analyticsLocations: [eA.A.CHECKPOINT, eA.A.CHECKPOINT_SIDEKICK],
                                      }));
                              },
                              "aria-label": en.intl.string(en.t.Ve9Ge6),
                              children: (0, r.jsx)(ay.GiftIcon, { size: "refresh_sm", color: "currentColor" }),
                          }),
                          (0, r.jsx)(aO.D, {
                              className: b()(aP.KD, { [aP.r9]: !p }),
                              onClick: async function () {
                                  if (p) {
                                      f(!0);
                                      try {
                                          (await (0, d.fr)(i, t.id), n(""), l(!0));
                                      } catch {
                                          (0, s.P0)({ text: en.intl.string(en.t.fEptJP), variant: "critical" });
                                      } finally {
                                          f(!1);
                                      }
                                  }
                              },
                              "aria-disabled": !p,
                              "aria-label": en.intl.string(en.t.oeb1vg),
                              children: (0, r.jsx)(aM.SendMessageIcon, { size: "refresh_sm", color: "currentColor" }),
                          }),
                      ],
                  }),
              ],
          })
        : null;
}
var aY = a(9767);
function aZ(e) {
    let { games: t } = e,
        a = Math.round(t?.totalDaysPlayed ?? 0),
        i = (0, I.bD)(t?.totalDaysPlayedPercentile);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: aY.dJ,
                children: [
                    (0, r.jsx)(tq, { icon: e4.CalendarIcon, children: en.intl.string(es.default["4N5p4D"]) }),
                    (0, r.jsx)(an, { value: a }),
                ],
            }),
            (0, r.jsx)(tY, {
                children:
                    null != i
                        ? en.intl.format(es.default["4FXB/m"], {
                              numDays: a,
                              percent: i,
                              percentHook: (e, t) => (0, r.jsx)(ae, { children: e }, t),
                          })
                        : en.intl.format(es.default.iCKjh6, { numDays: a }),
            }),
        ],
    });
}
function aq(e) {
    let { numUsersPlayedEveryDay: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: aY.dJ,
                children: [
                    (0, r.jsx)(tq, { icon: e4.CalendarIcon, children: en.intl.string(es.default["dx4+NI"]) }),
                    (0, r.jsx)(al, { value: t }),
                ],
            }),
            (0, r.jsx)(tY, { children: en.intl.format(es.default["N32w+2"], { numUsers: (0, I.wj)(t) }) }),
        ],
    });
}
function aX() {
    let e = (0, p.bG)([l.A], () => l.A.stats?.games),
        t = (0, p.bG)([l.A], () => (0, I.uO)(l.A.stats)),
        a = (0, p.bG)([l.A], () => l.A.globalStats?.games?.numUsersPlayedEveryDay),
        i = !t && null != a;
    return (0, r.jsx)(tM, {
        children: (0, r.jsxs)("div", {
            className: aY.kL,
            children: [
                (0, r.jsx)(Y, {
                    animatedSrc:
                        "https://cdn.discordapp.com/assets/content/e3289e9a0a7faf4db23c3fefa390126fc64a09120fdb701f9dea833dddf671ef.png",
                    staticSrc:
                        "https://cdn.discordapp.com/assets/content/312abde9b19fcf85150d507de3f33096992506459b895ab3ea8d92c8f1e04a28.png",
                    className: aY.HW,
                }),
                (0, r.jsx)("div", {
                    className: aY.C,
                    children: i ? (0, r.jsx)(aq, { numUsersPlayedEveryDay: a }) : (0, r.jsx)(aZ, { games: e }),
                }),
            ],
        }),
    });
}
var aJ = a(95362),
    aQ = a(828062);
function a$(e) {
    let { children: t } = e;
    return (0, r.jsx)(ea, { variant: "display-lg", className: aQ.V, children: t });
}
var a0 = a(109112),
    a1 = a(311043),
    a5 = a(883053);
function a6(e) {
    let { rank: t, className: a } = e;
    return (0, r.jsxs)(er, { className: b()(a5.T, a), children: ["#", t] });
}
var a2 = a(497357);
let a3 = "/assets/e74703a44e087adc.svg";
function a4(e) {
    let {
            game: { id: t, name: a, coverImageHash: i },
            rank: s,
            label: n,
            shellImage: c,
            className: d,
        } = e,
        l = (0, p.bG)(
            [a1.A],
            () =>
                a1.A.getGame(t)?.getCoverURL(300) ??
                aL.Ay.getApplicationIconURL({ id: t, icon: i, size: 300, fallbackAvatar: !1 }),
        );
    return (0, r.jsxs)("div", {
        className: b()(a2.LO, d),
        children: [
            (0, r.jsxs)("div", {
                className: a2.Tn,
                children: [
                    (0, r.jsx)("img", { src: c, alt: "", className: a2.vf }),
                    null != l
                        ? (0, r.jsx)("img", { src: l, alt: "", className: a2.Qw })
                        : (0, r.jsx)("div", {
                              className: b()(a2.Qw, a2.uj),
                              children: (0, r.jsx)(a0._, { size: "lg" }),
                          }),
                    null != s && (0, r.jsx)(a6, { rank: s, className: a2.Tm }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: a2.zH,
                children: [
                    (0, r.jsx)(ea, { variant: "heading-xl/medium", className: a2.UU, lineClamp: 1, children: a }),
                    (0, r.jsx)(ea, { variant: "mono-md/bold", className: a2.Pf, children: n }),
                ],
            }),
        ],
    });
}
function a8(e) {
    let { numSessions: t, ...a } = e;
    return (0, r.jsx)(a4, { ...a, label: Math.round(t), shellImage: a3 });
}
function a9(e) {
    let { numSessions: t, ...a } = e;
    return (0, r.jsx)(a4, {
        ...a,
        rank: 1,
        label: Math.round(t),
        shellImage: "/assets/fbe1ab9677ed007a.svg",
        className: a2.Ms,
    });
}
function a7(e) {
    return (0, r.jsx)(a4, { ...e, shellImage: a3 });
}
var ie = a(842807);
let it = [];
function ia(e) {
    let { gameStats: t } = e,
        a = Math.round(t?.totalGamesPlayed ?? 0),
        i = (0, I.bD)(t?.totalGamesPlayedPercentile),
        s = t?.games ?? it;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: ie.wx,
                children: [
                    (0, r.jsxs)("div", {
                        className: ie.dJ,
                        children: [
                            (0, r.jsx)(tq, {
                                icon: e9.GameControllerIcon,
                                children: en.intl.string(es.default.HM2fjf),
                            }),
                            (0, r.jsx)(an, { value: a }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: ie.h_,
                        children: (0, r.jsx)(tY, {
                            children:
                                null != i
                                    ? en.intl.format(es.default["hc0/yJ"], {
                                          percent: i,
                                          percentHook: (e, t) => (0, r.jsx)(ae, { children: e }, t),
                                      })
                                    : en.intl.format(es.default.aJMJ6b, { numGames: a }),
                        }),
                    }),
                ],
            }),
            (0, r.jsx)(aJ.Ip, {
                orientation: "horizontal",
                scrollbarGutter: !1,
                fade: !0,
                className: ie.ag,
                children: s.map((e, t) => {
                    let { game: a, numSessions: i } = e;
                    return 0 === t
                        ? (0, r.jsx)(a9, { game: a, numSessions: i }, a.id)
                        : (0, r.jsx)(a8, { game: a, rank: t + 1, numSessions: i }, a.id);
                }),
            }),
        ],
    });
}
function ii(e) {
    let { gameStats: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: b()(ie.wx, ie.l7),
                children: [
                    (0, r.jsxs)("div", {
                        className: ie.dJ,
                        children: [
                            (0, r.jsx)(tR, { className: ie.gi }),
                            (0, r.jsx)(a$, { children: en.intl.string(es.default.qbCgI7) }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: ie.h_,
                        children: (0, r.jsx)(tY, { children: en.intl.string(es.default["0oDeiM"]) }),
                    }),
                ],
            }),
            (0, r.jsx)(aJ.Ip, {
                orientation: "horizontal",
                scrollbarGutter: !1,
                fade: !0,
                className: b()(ie.ag, ie.Zs),
                children: eI.Jb.map((e) => {
                    let { list: a, label: i } = e,
                        s = t[a][0];
                    return null != s ? (0, r.jsx)(a7, { game: s, label: en.intl.string(i) }, a) : null;
                }),
            }),
        ],
    });
}
function ir() {
    let e = (0, p.bG)([l.A], () => l.A.stats?.games),
        t = (0, p.bG)([l.A], () => (0, I.IH)(l.A.stats)),
        a = (0, p.bG)([l.A], () => l.A.globalStats?.games),
        i = !t && null != a;
    return (0, r.jsx)(tM, {
        children: (0, r.jsx)("div", {
            className: ie.kL,
            children: i ? (0, r.jsx)(ii, { gameStats: a }) : (0, r.jsx)(ia, { gameStats: e }),
        }),
    });
}
var is = a(167662);
function ic(e) {
    let { messages: t } = e,
        a = Math.round(t?.numMessagesSent ?? 0),
        i = (0, I.bD)(t?.numMessagesSentPercentile);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: is.dJ,
                children: [
                    (0, r.jsx)(tq, { icon: te.ChatIcon, children: en.intl.string(tt.default.wWKySP) }),
                    (0, r.jsx)(an, { value: a }),
                ],
            }),
            (0, r.jsx)(tY, {
                children:
                    null != i
                        ? en.intl.format(es.default.TOMBAW, {
                              numMessages: a,
                              percent: i,
                              percentHook: (e, t) => (0, r.jsx)(ae, { children: e }, t),
                          })
                        : en.intl.format(es.default.cYCqz8, { numMessages: a }),
            }),
        ],
    });
}
function id(e) {
    let { numWordsSent: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: is.dJ,
                children: [
                    (0, r.jsx)(tq, { icon: te.ChatIcon, children: en.intl.string(es.default["2BuyVC"]) }),
                    (0, r.jsx)(al, { value: t }),
                ],
            }),
            (0, r.jsx)(tY, {
                children: en.intl.format(es.default.bAxEs2, {
                    numWords: (0, I.wj)(t),
                    numCopies: (0, I.wj)((0, I.yQ)(t)),
                }),
            }),
        ],
    });
}
function il() {
    let e = (0, p.bG)([l.A], () => l.A.stats?.messages),
        t = (0, p.bG)([l.A], () => (0, I.nb)(l.A.stats)),
        a = (0, p.bG)([l.A], () => l.A.globalStats?.messages?.numWordsSent),
        i = !t && null != a;
    return (0, r.jsx)(tM, {
        children: (0, r.jsxs)("div", {
            className: is.kL,
            children: [
                (0, r.jsx)(Y, {
                    animatedSrc:
                        "https://cdn.discordapp.com/assets/content/d2d8036bb6a32967893421f9956b9e8ed30abde474f68c1a34e824205549c5a1.png",
                    staticSrc:
                        "https://cdn.discordapp.com/assets/content/1dfd8684180df4216b23f0a61617250be8fcc12bc1970ac259892f34fbdb836d.png",
                    className: is.HW,
                }),
                (0, r.jsx)("div", {
                    className: is.C,
                    children: i ? (0, r.jsx)(id, { numWordsSent: a }) : (0, r.jsx)(ic, { messages: e }),
                }),
            ],
        }),
    });
}
var io = a(682163),
    iu = a(224865);
let ih = io.iu[io.Ay.Sizes.XLARGE];
function ib(e) {
    let { guild: t, size: a } = e;
    return null == t.icon && a < 48
        ? (0, r.jsx)("div", {
              className: b()(iu.K, iu.J),
              style: { width: a, height: a },
              "aria-hidden": !0,
              children: (0, r.jsx)(ee.E, { variant: "body-md/medium", children: (0, I.oW)(t.name) }),
          })
        : (0, r.jsx)(io.Ay, {
              guild: t,
              size: io.Ay.Sizes.XLARGE,
              iconSize: a,
              textScale: a / ih,
              className: iu.K,
              style: { width: a, height: a, borderRadius: 0 },
          });
}
var i_ = a(140645);
function ip(e) {
    let { numVoiceMinutes: t, numMessagesSent: a } = e;
    return (0, r.jsxs)("div", {
        className: i_.M1,
        children: [
            (0, r.jsxs)("div", {
                className: i_.dJ,
                children: [
                    (0, r.jsx)(ts.MicrophoneIcon, { size: "md", color: "currentColor" }),
                    (0, r.jsx)(ea, { variant: "mono-md/bold", className: i_.Qq, children: Math.round(t) }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: i_.dJ,
                children: [
                    (0, r.jsx)(te.ChatIcon, { size: "md", color: "currentColor" }),
                    (0, r.jsx)(ea, { variant: "mono-md/bold", className: i_.Qq, children: Math.round(a) }),
                ],
            }),
        ],
    });
}
var ix = a(972106);
let im = [];
function ig(e) {
    let { guild: t, rank: a, iconSize: i = 100, children: s } = e;
    return (0, r.jsxs)("div", {
        className: ix.w_,
        children: [
            (0, r.jsxs)("div", {
                className: ix.jj,
                children: [
                    (0, r.jsx)(a6, { rank: a }),
                    (0, r.jsxs)("div", {
                        className: ix.gI,
                        children: [
                            (0, r.jsx)(ea, {
                                variant: "heading-xxl/medium",
                                className: ix.J5,
                                lineClamp: 1,
                                children: t.name,
                            }),
                            s,
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(ib, { guild: t, size: i }),
        ],
    });
}
function iA(e) {
    let { guild: t, numVoiceMinutes: a, numMessagesSent: i } = e;
    return (0, r.jsx)(ig, {
        guild: t,
        rank: 1,
        iconSize: 140,
        children: (0, r.jsx)(ip, { numVoiceMinutes: a, numMessagesSent: i }),
    });
}
function iv(e) {
    let { guilds: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: ix.wx,
                children: [
                    (0, r.jsxs)("div", {
                        className: ix.R_,
                        children: [
                            (0, r.jsx)(tq, { icon: ti.R, children: en.intl.string(es.default.Mb5E6r) }),
                            (0, r.jsx)(a$, { children: en.intl.string(tt.default.F0fkrh) }),
                        ],
                    }),
                    (0, r.jsx)(tY, { children: en.intl.string(es.default.IN1DaS) }),
                ],
            }),
            (0, r.jsx)("div", {
                className: ix.Pl,
                children: t.map((e, t) => {
                    let { guild: a, numMessagesSent: i, numVoiceMinutes: s } = e;
                    return 0 === t
                        ? (0, r.jsx)(iA, { guild: a, numMessagesSent: i ?? 0, numVoiceMinutes: s ?? 0 }, a.id)
                        : (0, r.jsx)(ig, { guild: a, rank: t + 1 }, a.id);
                }),
            }),
        ],
    });
}
function iw(e) {
    let { guilds: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: ix.wx,
                children: [
                    (0, r.jsxs)("div", {
                        className: ix.R_,
                        children: [
                            (0, r.jsx)(tR, { className: ix.gi }),
                            (0, r.jsx)(a$, { children: en.intl.string(tt.default.F0fkrh) }),
                        ],
                    }),
                    (0, r.jsx)(tY, { children: en.intl.string(es.default.bhnqop) }),
                ],
            }),
            (0, r.jsx)("div", {
                className: ix.Pl,
                children: t.map((e, t) => (0, r.jsx)(ig, { guild: e, rank: t + 1 }, e.id)),
            }),
        ],
    });
}
function iI() {
    let e = (0, p.bG)([l.A], () => l.A.stats?.guilds?.guilds ?? im),
        t = (0, p.bG)([l.A], () => l.A.globalStats?.guilds?.guildsByMembers),
        a = 0 === e.length && null != t;
    return (0, r.jsx)(tM, {
        children: (0, r.jsx)("div", {
            className: ix.kL,
            children: a ? (0, r.jsx)(iw, { guilds: t }) : (0, r.jsx)(iv, { guilds: e }),
        }),
    });
}
var iE = a(155094);
function ij(e) {
    let { icon: t, title: a, description: i } = e;
    return (0, r.jsx)(tM, {
        children: (0, r.jsxs)("div", {
            className: iE.Q,
            children: [(0, r.jsx)(tq, { icon: t, children: a }), (0, r.jsx)(tY, { children: i })],
        }),
    });
}
var iN = a(7584),
    iS = a(33293),
    iC = a(498137),
    iT = a(192339),
    iR = a(574414),
    iO = a(834109),
    iy = a(48763);
function iM(e) {
    let { character: t, power: a } = e,
        i = (0, A.o)(t);
    return (0, r.jsxs)(iC.A, {
        cardColorPalette: i,
        size: iy.W.LG,
        children: [
            (0, r.jsx)(iT.A, {}),
            (0, r.jsx)(iO.A, { variant: "full" }),
            null != a
                ? (0, r.jsx)(iR.A, {
                      powerLevel: (0, tV.Le)(a.powerLevel),
                      powerLevelUnits: (0, tV.sX)(a.powerLevelPercentile),
                  })
                : null,
            (0, r.jsx)(iS.A, { character: t }),
        ],
    });
}
var iD = a(58410);
function ik() {
    let e = (0, p.bG)([l.A], () => l.A.stats),
        t = (0, p.bG)([l.A], () => l.A.character),
        a = e?.guilds?.guilds[0],
        i = e?.emojis?.emojis[0],
        s = e?.games?.games[0]?.game,
        n =
            null != s
                ? aL.Ay.getApplicationIconURL({ id: s.id, icon: s.iconHash, size: 40, fallbackAvatar: !1 })
                : void 0;
    return (0, r.jsx)(tM, {
        children: (0, r.jsxs)("div", {
            className: iD.z,
            children: [
                null != t ? (0, r.jsx)(iM, { character: t, power: e?.power }) : null,
                (0, r.jsxs)("div", {
                    className: iD.zH,
                    children: [
                        (0, r.jsxs)("div", {
                            className: iD.R_,
                            children: [
                                (0, r.jsx)(tq, { icon: tG.M, children: en.intl.string(tt.default.ir6nEQ) }),
                                (0, r.jsx)(ea, {
                                    variant: "display-lg",
                                    className: iD.Vy,
                                    children: en.intl.string(tt.default.y4M1na),
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: iD.M1,
                            children: [
                                (0, r.jsx)(iL, {
                                    label: en.intl.string(es.default.MSrV9z),
                                    value: e?.voice?.totalVoiceMinutes,
                                }),
                                (0, r.jsx)(iL, {
                                    label: en.intl.string(es.default.hhh11L),
                                    value: e?.messages?.numMessagesSent,
                                }),
                                (0, r.jsx)(iL, {
                                    label: en.intl.string(es.default["f5S+pt"]),
                                    value: a?.numDaysInteracted,
                                }),
                                (0, r.jsx)(iP, {
                                    label: en.intl.string(tt.default["8XPMJj"]),
                                    icon: null != a ? (0, r.jsx)(ib, { guild: a.guild, size: 40 }) : (0, r.jsx)(iG, {}),
                                    name: null != a ? a.guild.name : en.intl.string(es.default.GultYJ),
                                }),
                                (0, r.jsx)(iL, {
                                    label: en.intl.string(es.default.xVSlv3),
                                    value: e?.emojis?.numEmojisSent,
                                }),
                                (0, r.jsx)(iP, {
                                    label: en.intl.string(tt.default["3sARW7"]),
                                    icon:
                                        null != i
                                            ? (0, r.jsx)(t9.A, {
                                                  emojiId: i.id,
                                                  emojiName: null == i.id ? i.name : void 0,
                                                  animated: i.animated,
                                                  alt: "",
                                                  className: iD.Kk,
                                              })
                                            : (0, r.jsx)(iG, {}),
                                    name:
                                        null == i
                                            ? en.intl.string(en.t.PoWNfe)
                                            : null == i.id
                                              ? iN.Ay.convertSurrogateToName(i.name)
                                              : `:${i.name}:`,
                                }),
                                (0, r.jsx)(iL, {
                                    label: en.intl.string(es.default.y2Y1DD),
                                    value: e?.games?.totalDaysPlayed,
                                }),
                                (0, r.jsx)(iP, {
                                    label: en.intl.string(tt.default.RbT4Zq),
                                    icon:
                                        null != n
                                            ? (0, r.jsx)("img", { src: n, alt: "", className: b()(iD.Kk, iD.Gt) })
                                            : (0, r.jsx)(iG, {}),
                                    name: null != s ? s.name : en.intl.string(en.t.PoWNfe),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
function iL(e) {
    let { label: t, value: a } = e;
    return (0, r.jsxs)("div", {
        className: iD.dJ,
        children: [
            (0, r.jsx)(ea, { variant: "heading-md/semibold", children: t }),
            (0, r.jsx)(ea, {
                variant: "heading-xxl/medium",
                className: iD.wk,
                children: Math.round(a ?? 0).toLocaleString(en.intl.currentLocale),
            }),
        ],
    });
}
function iP(e) {
    let { label: t, icon: a, name: i } = e;
    return (0, r.jsxs)("div", {
        className: b()(iD.dJ, iD.u4),
        children: [
            (0, r.jsx)(ea, { variant: "heading-md/semibold", children: t }),
            (0, r.jsxs)("div", {
                className: iD.AS,
                children: [
                    a,
                    (0, r.jsx)(ea, { variant: "heading-xl/medium", lineClamp: 1, className: iD.TJ, children: i }),
                ],
            }),
        ],
    });
}
function iG() {
    return (0, r.jsx)("div", {
        className: b()(iD.Kk, iD.Gc),
        children: (0, r.jsx)(a0._, { size: "md", color: "currentColor" }),
    });
}
var iH = a(651946);
function iU() {
    let e = (0, p.bG)([l.A], () => l.A.stats?.guilds?.guilds[0]),
        t = Math.round(e?.numDaysInteracted ?? 0),
        a = (0, I.bD)(e?.numDaysInteractedPercentile);
    return (0, r.jsx)(tM, {
        children: (0, r.jsxs)("div", {
            className: iH.kL,
            children: [
                (0, r.jsxs)("div", {
                    className: iH.wx,
                    children: [
                        (0, r.jsxs)("div", {
                            className: iH.R_,
                            children: [
                                (0, r.jsx)(tq, { icon: ti.R, children: en.intl.string(es.default["M+a+t1"]) }),
                                (0, r.jsx)(an, { value: t }),
                            ],
                        }),
                        (0, r.jsx)(tY, {
                            children:
                                null != a
                                    ? en.intl.format(es.default.sIDTV1, {
                                          numDays: t,
                                          percent: a,
                                          percentHook: (e, t) => (0, r.jsx)(ae, { children: e }, t),
                                      })
                                    : en.intl.format(es.default.nLCUQ4, { numDays: t }),
                        }),
                    ],
                }),
                null != e &&
                    (0, r.jsx)("div", {
                        className: iH.bU,
                        children: (0, r.jsxs)("div", {
                            className: iH.Nr,
                            style: { width: 360 },
                            children: [
                                (0, r.jsx)(ib, { guild: e.guild, size: 360 }),
                                (0, r.jsxs)("div", {
                                    className: iH.zH,
                                    children: [
                                        (0, r.jsx)(ea, {
                                            variant: "heading-xxl/medium",
                                            className: iH.J5,
                                            lineClamp: 1,
                                            children: e.guild.name,
                                        }),
                                        (0, r.jsx)(ip, {
                                            numVoiceMinutes: e.numVoiceMinutes ?? 0,
                                            numMessagesSent: e.numMessagesSent ?? 0,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
            ],
        }),
    });
}
var iF = a(270704);
function iK(e) {
    let { voice: t } = e,
        a = Math.round(t?.totalVoiceMinutes ?? 0),
        i = (0, I.bD)(t?.totalVoiceMinutesPercentile);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: iF.dJ,
                children: [
                    (0, r.jsx)(tq, { icon: ts.MicrophoneIcon, children: en.intl.string(es.default["3/T12E"]) }),
                    (0, r.jsx)(an, { value: a, alignment: "center" }),
                ],
            }),
            (0, r.jsx)(tY, {
                children:
                    null != i
                        ? en.intl.format(es.default.RqXsIs, {
                              numMinutes: a,
                              percent: i,
                              percentHook: (e, t) => (0, r.jsx)(ae, { children: e }, t),
                          })
                        : en.intl.format(es.default.Y3poDW, { numMinutes: a }),
            }),
        ],
    });
}
function iB(e) {
    let { peakHour: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: iF.dJ,
                children: [
                    (0, r.jsx)(tq, { icon: ts.MicrophoneIcon, children: en.intl.string(es.default.ZCwB8J) }),
                    (0, r.jsx)(al, { value: t }),
                ],
            }),
            (0, r.jsx)(tY, { children: en.intl.string(es.default.huiTne) }),
        ],
    });
}
function iz() {
    let e = (0, p.bG)([l.A], () => l.A.stats?.voice),
        t = (0, p.bG)([l.A], () => (0, I.Kr)(l.A.stats)),
        a = (0, p.bG)([l.A], () => l.A.globalStats?.voice?.peakHourUtc),
        i = (0, I.XF)(a)?.value,
        s = !t && null != i;
    return (0, r.jsxs)(tM, {
        children: [
            (0, r.jsx)(Y, {
                animatedSrc:
                    "https://cdn.discordapp.com/assets/content/04746dc04eab575d0168935af2b1b3f97e2e00439f84bd0f0474276e0c5a81dc.png",
                staticSrc:
                    "https://cdn.discordapp.com/assets/content/c4c2d6b631bff3da4e4bb9afffc8f89bc9fb6f76a2fcd824f8a7af83eb7f1e6b.png",
                className: iF.Tp,
            }),
            (0, r.jsx)("div", {
                className: iF.Qs,
                children: s ? (0, r.jsx)(iB, { peakHour: i }) : (0, r.jsx)(iK, { voice: e }),
            }),
        ],
    });
}
function iV(e) {
    let { route: t, onNextStep: a, onPreviousStep: i } = e;
    if (t === w.gr.HOME) return (0, r.jsx)(t8, { onStart: a });
    if (t === w.gr.INTRODUCTION) return (0, r.jsx)(tk, {});
    let { statsScreen: s } = (0, w.UG)(t);
    switch (s) {
        case w.oI.VOICE_INTRO:
            return (0, r.jsx)(ij, {
                icon: ts.MicrophoneIcon,
                title: en.intl.string(es.default["/7XYsa"]),
                description: en.intl.string(es.default["X8/G/o"]),
            });
        case w.oI.VOICE:
            return (0, r.jsx)(iz, {});
        case w.oI.MESSAGES_INTRO:
            return (0, r.jsx)(ij, {
                icon: te.ChatIcon,
                title: en.intl.string(es.default["2BuyVC"]),
                description: en.intl.string(es.default["kF+Y3a"]),
            });
        case w.oI.MESSAGES:
            return (0, r.jsx)(il, {});
        case w.oI.SERVERS_INTRO:
            return (0, r.jsx)(ij, {
                icon: ti.R,
                title: en.intl.string(tt.default.F0fkrh),
                description: en.intl.string(es.default.Xg82Gy),
            });
        case w.oI.SERVERS:
            return (0, r.jsx)(iI, {});
        case w.oI.TOP_SERVER:
            return (0, r.jsx)(iU, {});
        case w.oI.EMOJI_INTRO:
            return (0, r.jsx)(ij, {
                icon: $.o,
                title: en.intl.string(es.default.ZTDCIv),
                description: en.intl.string(es.default.y8Sr8J),
            });
        case w.oI.EMOJI:
            return (0, r.jsx)(aS, {});
        case w.oI.GAMES_INTRO:
            return (0, r.jsx)(ij, {
                icon: e9.GameControllerIcon,
                title: en.intl.string(es.default.HM2fjf),
                description: en.intl.string(es.default.LQiFqJ),
            });
        case w.oI.GAMES:
            return (0, r.jsx)(ir, {});
        case w.oI.GAME_TIME:
            return (0, r.jsx)(aX, {});
        case w.oI.SQUAD:
        case w.oI.SIDEKICK:
            return (0, r.jsx)(aB, { route: t, onNextStep: a, onPreviousStep: i });
        case w.oI.SUMMARY:
            return (0, r.jsx)(ik, {});
        case w.oI.SHARE:
            return (0, r.jsx)(tQ, {});
        default:
            return null;
    }
}
var iW = a(650809),
    iY = a(866665),
    iZ = a(428692);
let iq = {
    [w.s9.FACE]: { icon: ts.MicrophoneIcon, label: en.t.K3lovD },
    [w.s9.OUTFIT]: { icon: te.ChatIcon, label: en.t.OIgYlQ },
    [w.s9.HEADWEAR]: { icon: ti.R, label: en.t["7hB4kg"] },
    [w.s9.SHOES]: { icon: $.o, label: en.t.sMOuuS },
    [w.s9.WEARABLE]: { icon: e9.GameControllerIcon, label: en.t.URyqtP },
    [w.s9.AURA]: { icon: e4.CalendarIcon, label: es.default.y2Y1DD },
    [w.s9.ASSEMBLED]: { icon: aR.$, label: en.t.TdEu5X },
    [w.s9.FINALIZE]: { icon: iW.PaintPaletteIcon, label: es.default.gmMD2I },
    [w.s9.SUMMARY]: { icon: tG.M, label: tt.default.y4M1na },
};
function iX(e) {
    let {
            step: { icon: t, label: a, route: i },
            disabled: s,
            blockedTraitDescriptionId: n,
            onRouteClick: c,
        } = e,
        d = en.intl.string(a);
    return (0, r.jsx)(iY.m, {
        text: d,
        ariaHidden: !0,
        children: (0, r.jsxs)(aO.D, {
            className: b()(iZ.PM, iZ.CD, { [iZ.vk]: !s }),
            onClick: () => c(i),
            "aria-label": d,
            "aria-disabled": s,
            "aria-describedby": n,
            children: [
                (0, r.jsx)("div", { className: b()(iZ.Om, iZ.hZ) }),
                (0, r.jsx)(t, { size: "xs", color: "currentColor", className: iZ.RQ }),
            ],
        }),
    });
}
function iJ(e) {
    let { flow: t, stats: a, activeRoute: i, isRouteBlocked: s, blockedTraitDescriptionId: n, onRouteClick: c } = e,
        d = (function (e, t) {
            let a = [];
            for (let i of C({ flow: e, stats: t })) {
                let { characterStage: e } = (0, w.UG)(i),
                    t = iq[e];
                null != t && a.at(-1)?.stage !== e && a.push({ ...t, stage: e, route: i });
            }
            return a;
        })(t, a),
        { characterStage: o } = (0, w.UG)(i),
        u = d.findIndex((e) => {
            let { stage: t } = e;
            return t === o;
        }),
        [f, b] = h.useState(u);
    u > f && b(u);
    let _ = (0, p.bG)([l.A], () => l.A.isSaving);
    return -1 === u
        ? null
        : (0, r.jsx)("div", {
              className: iZ.qB,
              role: "group",
              "aria-label": en.intl.formatToPlainString(es.default.iyTfFt, { stepNumber: u + 1, stepCount: d.length }),
              children: d.map((e, t) => {
                  let { icon: a } = e;
                  return t === u
                      ? (0, r.jsx)(
                            iY.m,
                            {
                                text: en.intl.string(e.label),
                                children: (0, r.jsx)("div", {
                                    className: iZ.PM,
                                    children: (0, r.jsx)(a, { size: "xs", color: "currentColor" }),
                                }),
                            },
                            e.stage,
                        )
                      : t <= f
                        ? (0, r.jsx)(
                              iX,
                              { step: e, disabled: _ || s, blockedTraitDescriptionId: n, onRouteClick: c },
                              e.stage,
                          )
                        : (0, r.jsx)(
                              "div",
                              { className: iZ.PM, children: (0, r.jsx)("div", { className: iZ.Om }) },
                              e.stage,
                          );
              }),
          });
}
var iQ = a(516749),
    i$ = a(531685),
    i0 = a(399667),
    i1 = a(468311),
    i5 = a(706121),
    i6 = a(985747),
    i2 = a(118531);
let i3 = {
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
function i4(e) {
    return { name: e, url: i3[e].url };
}
let i8 = i4("tex_none"),
    i9 = {
        [i6.N.NONE]: 0,
        [i6.N.CAP]: 7,
        [i6.N.ELVEN_HEADPIECE]: 1,
        [i6.N.HEADPHONES]: 2,
        [i6.N.TEDDY_BEANIE]: 13,
        [i6.N.PIERCINGS]: 4,
        [i6.N.HEADBAND]: 5,
        [i6.N.SUNGLASSES]: 6,
        [i6.N.BANANA_PEEL]: 3,
        [i6.N.LEAF]: 8,
        [i6.N.FIRE]: 9,
        [i6.N.HALO]: 10,
        [i6.N.BRAIN]: 11,
        [i6.N.TRAFFIC_CONE]: 12,
        [i6.N.CROWN]: 14,
    },
    i7 = {
        [i2.Z.NONE]: 0,
        [i2.Z.ANGEL_WINGS]: 3,
        [i2.Z.STICKERS]: 1,
        [i2.Z.TOTE]: 2,
        [i2.Z.WIZARD_STAFF]: 8,
        [i2.Z.SKATEBOARD]: 4,
        [i2.Z.DRAGON_WINGS]: 5,
        [i2.Z.TAKE_OUT_BAG]: 6,
        [i2.Z.PIXEL_WRENCH]: 7,
        [i2.Z.MECH_WINGS]: 9,
        [i2.Z.SWORD]: 10,
        [i2.Z.DEVIANT_TAIL]: 11,
        [i2.Z.MAGICAL_STAFF]: 12,
        [i2.Z.BUTTERFLY_WINGS]: 13,
        [i2.Z.CAT_BACKPACK]: 14,
    },
    re = {
        [i1.X.NONE]: i8,
        [i1.X.BLAZE]: i4("tex_aura_04_blaze"),
        [i1.X.BLOSSOM]: i4("tex_aura_01_blossom"),
        [i1.X.PRISM]: i4("tex_aura_02_prism"),
        [i1.X.SHOCK]: i4("tex_aura_03_shock"),
        [i1.X.FATED]: i4("tex_aura_05_fated"),
        [i1.X.LUSTER]: i4("tex_aura_06_luster"),
        [i1.X.BUBBLES]: i4("tex_aura_07_bubbly"),
        [i1.X.SPOOKY]: i4("tex_aura_08_spooky"),
        [i1.X.CURSED]: i4("tex_aura_09_cursed"),
        [i1.X.MAGNETIC]: i4("tex_aura_10_magnetic"),
        [i1.X.RADIOACTIVE]: i4("tex_aura_11_radioactive"),
        [i1.X.ELEMENTAL]: i4("tex_aura_12_elemental"),
        [i1.X.SHIMMER]: i4("tex_aura_13_shimmer"),
        [i1.X.WITCHY]: i4("tex_aura_14_witchy"),
    },
    rt = {
        [i5.R.ICY]: i4("tex_base_01_icy"),
        [i5.R.CRIMSON]: i4("tex_base_02_crimson"),
        [i5.R.CHROME]: i4("tex_base_03_chrome"),
        [i5.R.GALACTIC]: i4("tex_base_04_galactic"),
        [i5.R.FOREST]: i4("tex_base_05_forrest"),
        [i5.R.MIDNIGHT]: i4("tex_base_06_mighnight"),
        [i5.R.GLACIER]: i4("tex_base_07_glacier"),
        [i5.R.ORANGE]: i4("tex_base_08_orange"),
        [i5.R.PURPLE]: i4("tex_base_09_pink"),
        [i5.R.RED]: i4("tex_base_10_red"),
        [i5.R.COBALT]: i4("tex_base_11_cobalt"),
        [i5.R.X_RAY]: i4("tex_base_12_x-ray"),
        [i5.R.LIQUID]: i4("tex_base_13_liquid"),
        [i5.R.BUTTER]: i4("tex_base_14_butter"),
        [i5.R.IRIDESCENT]: i4("tex_base_15_iridescent"),
    },
    ra = {
        [eG.r.NONE]: null,
        [eG.r.BADDIE_DEFAULT]: { riveId: 1, texture: i4("tex_outfit_01_baddie") },
        [eG.r.TRAVELER_DEFAULT]: { riveId: 10, texture: i4("tex_outfit_10_traveler") },
        [eG.r.STREAMER_DEFAULT]: { riveId: 3, texture: i4("tex_outfit_03_streamer") },
        [eG.r.CAMPER_DEFAULT]: { riveId: 4, texture: i4("tex_outfit_04_camper") },
        [eG.r.ATHLETE_DEFAULT]: { riveId: 5, texture: i4("tex_outfit_05_athlete") },
        [eG.r.COWPOKE_DEFAULT]: { riveId: 6, texture: i4("tex_outfit_06_cowpoke") },
        [eG.r.GOTH_DEFAULT]: { riveId: 7, texture: i4("tex_outfit_07_goth") },
        [eG.r.ASTRONAUT_DEFAULT]: { riveId: 8, texture: i4("tex_outfit_08_astronaut") },
        [eG.r.JESTER_DEFAULT]: { riveId: 9, texture: i4("tex_outfit_09_jester") },
        [eG.r.TRASH_CAN_DEFAULT]: { riveId: 2, texture: i4("tex_outfit_02_trash") },
        [eG.r.MAGE_DEFAULT]: { riveId: 11, texture: i4("tex_outfit_11_mage") },
        [eG.r.MECH_DEFAULT]: { riveId: 12, texture: i4("tex_outfit_12_mech") },
        [eG.r.KNIGHT_DEFAULT]: { riveId: 13, texture: i4("tex_outfit_13_knight") },
        [eG.r.MAGICAL_DEFAULT]: { riveId: 14, texture: i4("tex_outfit_14_magical") },
        [eG.r.BADDIE_MONOCHROME]: { riveId: 1, texture: i4("tex_outfit_01_baddie_monochrome") },
        [eG.r.BADDIE_VIOLET]: { riveId: 1, texture: i4("tex_outfit_01_baddie_violet") },
        [eG.r.BADDIE_PASTEL]: { riveId: 1, texture: i4("tex_outfit_01_baddie_pastel") },
        [eG.r.BADDIE_SUNSET]: { riveId: 1, texture: i4("tex_outfit_01_baddie_sunset") },
        [eG.r.TRAVELER_HAZE]: { riveId: 10, texture: i4("tex_outfit_10_traveler_haze") },
        [eG.r.TRAVELER_MOSS]: { riveId: 10, texture: i4("tex_outfit_10_traveler_moss") },
        [eG.r.TRAVELER_CHRONO]: { riveId: 10, texture: i4("tex_outfit_10_traveler_chrono") },
        [eG.r.TRAVELER_UMBER]: { riveId: 10, texture: i4("tex_outfit_10_traveler_umber") },
        [eG.r.STREAMER_FLAMES]: { riveId: 3, texture: i4("tex_outfit_03_streamer_flames") },
        [eG.r.STREAMER_STRIPES]: { riveId: 3, texture: i4("tex_outfit_03_streamer_stripes") },
        [eG.r.STREAMER_SMILEY]: { riveId: 3, texture: i4("tex_outfit_03_streamer_smiley") },
        [eG.r.STREAMER_VINTAGE]: { riveId: 3, texture: i4("tex_outfit_03_streamer_vintage") },
        [eG.r.CAMPER_PLAID]: { riveId: 4, texture: i4("tex_outfit_04_camper_plaid") },
        [eG.r.CAMPER_SWAMP]: { riveId: 4, texture: i4("tex_outfit_04_camper_swamp") },
        [eG.r.CAMPER_GLAMP]: { riveId: 4, texture: i4("tex_outfit_04_camper_glamp") },
        [eG.r.CAMPER_AMBER]: { riveId: 4, texture: i4("tex_outfit_04_camper_amber") },
        [eG.r.ATHLETE_BLOCKED]: { riveId: 5, texture: i4("tex_outfit_05_athlete_blocked") },
        [eG.r.ATHLETE_FADED]: { riveId: 5, texture: i4("tex_outfit_05_athlete_faded") },
        [eG.r.ATHLETE_CHECKERED]: { riveId: 5, texture: i4("tex_outfit_05_athlete_checkered") },
        [eG.r.ATHLETE_LINED]: { riveId: 5, texture: i4("tex_outfit_05_athlete_lined") },
        [eG.r.COWPOKE_ONYX]: { riveId: 6, texture: i4("tex_outfit_06_cowpoke_onyx") },
        [eG.r.COWPOKE_STEEL]: { riveId: 6, texture: i4("tex_outfit_06_cowpoke_steel") },
        [eG.r.COWPOKE_DENIM]: { riveId: 6, texture: i4("tex_outfit_06_cowpoke_denim") },
        [eG.r.COWPOKE_BLUSH]: { riveId: 6, texture: i4("tex_outfit_06_cowpoke_blush") },
        [eG.r.GOTH_SIREN]: { riveId: 7, texture: i4("tex_outfit_07_goth_siren") },
        [eG.r.GOTH_SERPENT]: { riveId: 7, texture: i4("tex_outfit_07_goth_serpent") },
        [eG.r.GOTH_RAVEN]: { riveId: 7, texture: i4("tex_outfit_07_goth_raven") },
        [eG.r.GOTH_VAMP]: { riveId: 7, texture: i4("tex_outfit_07_goth_vamp") },
        [eG.r.ASTRONAUT_STARDUST]: { riveId: 8, texture: i4("tex_outfit_08_astronaut_stardust") },
        [eG.r.ASTRONAUT_MARTIAN]: { riveId: 8, texture: i4("tex_outfit_08_astronaut_martian") },
        [eG.r.ASTRONAUT_SOLAR]: { riveId: 8, texture: i4("tex_outfit_08_astronaut_solar") },
        [eG.r.ASTRONAUT_COSMIC]: { riveId: 8, texture: i4("tex_outfit_08_astronaut_cosmic") },
        [eG.r.JESTER_CONFETTI]: { riveId: 9, texture: i4("tex_outfit_09_jester_confetti") },
        [eG.r.JESTER_CARNIVAL]: { riveId: 9, texture: i4("tex_outfit_09_jester_carnival") },
        [eG.r.JESTER_SUNRISE]: { riveId: 9, texture: i4("tex_outfit_09_jester_sunrise") },
        [eG.r.JESTER_NIGHTFALL]: { riveId: 9, texture: i4("tex_outfit_09_jester_nightfall") },
        [eG.r.TRASH_CAN_BLACKOUT]: { riveId: 2, texture: i4("tex_outfit_02_trash_blackout") },
        [eG.r.TRASH_CAN_CAUTION]: { riveId: 2, texture: i4("tex_outfit_02_trash_caution") },
        [eG.r.TRASH_CAN_BUBBLEGUM]: { riveId: 2, texture: i4("tex_outfit_02_trash_bubblegum") },
        [eG.r.TRASH_CAN_TOXIC]: { riveId: 2, texture: i4("tex_outfit_02_trash_toxic") },
        [eG.r.MAGE_SHADOW]: { riveId: 11, texture: i4("tex_outfit_11_mage_shadow") },
        [eG.r.MAGE_DUSK]: { riveId: 11, texture: i4("tex_outfit_11_mage_dusk") },
        [eG.r.MAGE_WILDWOOD]: { riveId: 11, texture: i4("tex_outfit_11_mage_wildwood") },
        [eG.r.MAGE_WINTER]: { riveId: 11, texture: i4("tex_outfit_11_mage_winter") },
        [eG.r.MECH_AERO]: { riveId: 12, texture: i4("tex_outfit_12_mech_aero") },
        [eG.r.MECH_VIPER]: { riveId: 12, texture: i4("tex_outfit_12_mech_viper") },
        [eG.r.MECH_ULTRAVIOLET]: { riveId: 12, texture: i4("tex_outfit_12_mech_ultraviolet") },
        [eG.r.MECH_SANDSTORM]: { riveId: 12, texture: i4("tex_outfit_12_mech_sandstorm") },
        [eG.r.KNIGHT_IRON]: { riveId: 13, texture: i4("tex_outfit_13_knight_iron") },
        [eG.r.KNIGHT_RUST]: { riveId: 13, texture: i4("tex_outfit_13_knight_rust") },
        [eG.r.KNIGHT_PETAL]: { riveId: 13, texture: i4("tex_outfit_13_knight_petal") },
        [eG.r.KNIGHT_GLACIER]: { riveId: 13, texture: i4("tex_outfit_13_knight_glacier") },
        [eG.r.MAGICAL_SAPPHIRE]: { riveId: 14, texture: i4("tex_outfit_14_magical_sapphire") },
        [eG.r.MAGICAL_AMETHYST]: { riveId: 14, texture: i4("tex_outfit_14_magical_amethyst") },
        [eG.r.MAGICAL_FROST]: { riveId: 14, texture: i4("tex_outfit_14_magical_frost") },
        [eG.r.MAGICAL_CITRINE]: { riveId: 14, texture: i4("tex_outfit_14_magical_citrine") },
    };
var ri = (((i = {}).SLOT = "slot"), (i.TRAIT = "trait"), (i.LAYOUT = "layout"), (i.ALWAYS = "always"), i);
let rr = /^tex_(aura|base_\d+|outfit)_/,
    rs = /^tex_(headwear|shoes|wearable|face)_(\d+)_/,
    rn = /^tex_face_([a-z]+)_/i,
    rc = {
        tex_env_labNight_bg: ["Desktop"],
        tex_env_labNight_bg_mobileLandscape: ["MobileLandscape"],
        tex_env_labNight_bg_mobilePortrait: ["MobilePortrait"],
        tex_env_labNight_fgLeft: ["Desktop"],
        tex_env_labNight_fgRight: ["Desktop"],
        tex_env_labNight_mgBottom: ["Desktop"],
        tex_env_labNight_mgBottomMobile: ["MobilePortrait", "MobileLandscape"],
        tex_env_labNight_sky: ["Desktop"],
    },
    rd = {
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
    rl = { columns: 1, rows: 1 },
    ro = { columns: 5, rows: 5 },
    ru = { columns: 6, rows: 8 },
    rh = {
        tex_aura_01_blossom: ro,
        tex_aura_02_prism: ro,
        tex_aura_03_shock: ro,
        tex_aura_04_blaze: ro,
        tex_aura_05_fated: ro,
        tex_aura_06_luster: ro,
        tex_aura_07_bubbly: ro,
        tex_aura_08_spooky: ro,
        tex_aura_09_cursed: ro,
        tex_aura_10_magnetic: ro,
        tex_aura_11_radioactive: ro,
        tex_aura_12_elemental: ro,
        tex_aura_13_shimmer: ro,
        tex_aura_14_witchy: ro,
        tex_wireframe_spritesheet: { columns: 12, rows: 6 },
        tex_wearable_10_sword_spritesheet: { columns: 5, rows: 4 },
        tex_wearable_11_deviantTail_smoke_active_spritesheet: ru,
        tex_wearable_11_deviantTail_smoke_idle_spritesheet: ru,
    },
    rf = [1, 1.25, 1.5, 1.75, 2, 3],
    rb = Math.max(...rf);
function r_(e, t) {
    let { url: a, width: i, height: r, widthAt1x: s } = i3[e];
    if (null == s) return a;
    let n = (t * s) / i;
    if (n >= 1) return a;
    let { columns: c, rows: d } = rh[e] ?? rl,
        l = c * Math.round((i / c) * n),
        o = d * Math.round((r / d) * n);
    return `${a}?width=${l}&height=${o}`;
}
let rp = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14"],
    rx = {
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
    rm = {
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
    rg = { ...rm.MobilePortrait, gradientTopPosition: 55, gradientBottomPosition: 90 };
var rA = a(574381);
let rv = new Set([1]),
    rw = Object.keys(i3).map((e) => ({
        name: e,
        role: (function (e) {
            if (rr.test(e)) return { type: "slot" };
            let t = rc[e];
            if (null != t) return { type: "layout", layouts: t };
            let a = rs.exec(e);
            if (null != a) return { type: "trait", path: `${a[1]}ID`, riveId: Number(a[2]) };
            let i = rn.exec(e),
                r = null != i ? rd[i[1].toLowerCase()] : void 0;
            return null != r ? { type: "trait", path: "faceID", riveId: r } : { type: "always" };
        })(e),
        swapKey: (0, rA.un)() ? `${e}-${i3[e].riveId}` : e,
    }));
function rI(e) {
    let { faceID: t, headwearID: a, shoesID: i, wearableID: r, chapterID: s, device: n } = e;
    return h.useMemo(() => {
        var e;
        let c;
        return (
            (e = { faceID: t, headwearID: a, shoesID: i, wearableID: r }),
            (c = new Set()),
            rw.forEach((t) => {
                let { name: a, role: i } = t;
                switch (i.type) {
                    case ri.SLOT:
                        break;
                    case ri.TRAIT:
                        e[i.path] === i.riveId && c.add(a);
                        break;
                    case ri.LAYOUT:
                        i.layouts.includes(n) && c.add(a);
                        break;
                    case ri.ALWAYS:
                        ("tex_wireframe_spritesheet" !== a || rv.has(s)) && c.add(a);
                }
            }),
            c
        );
    }, [t, a, i, r, s, n]);
}
var rE = a(971940);
async function rj(e) {
    try {
        let t = await fetch(e);
        if (!t.ok) return null;
        return await (0, rE.decodeImage)(new Uint8Array(await t.arrayBuffer()));
    } catch {
        return null;
    }
}
var rN = a(168862);
function rS(e) {
    let t,
        a,
        { stage: i, isHidden: s } = e,
        n = (0, p.bG)([i$.A], () => {
            var e, t;
            let a,
                i = i$.A.windowSize();
            return (
                (e = i.width),
                (t = i.height),
                (a = Math.max(e / 960, t / 540) * (0, eO.A)()),
                rf.find((e) => e >= a) ?? rb
            );
        }),
        [c, d] = h.useState(n);
    n > c && d(n);
    let o =
            ((t = (0, p.bG)([l.A], () => l.A.selectedCharacterTraits)),
            (a = ep((e) => e.hoveredOption)),
            h.useMemo(() => (null != a ? { ...t, [a.trait]: a.optionId } : t), [t, a])),
        u = (0, p.bG)([U.Ay], () => U.Ay.useReducedMotion),
        f = h.useMemo(
            () =>
                (function (e) {
                    let { stage: t, traits: a, layout: i, mobileLift: r = 0, textureScale: s } = e,
                        { base: n, shoes: c, outfit: d, face: l, hat: o, wearable: u, aura: h } = (0, y.XI)(a),
                        f = ra[d],
                        b = {};
                    return (
                        rp.forEach((e) => {
                            let t = Number(e) === f?.riveId ? f.texture : i8;
                            b[`outfit${e}Image`] = r_(t.name, s);
                        }),
                        {
                            device: i,
                            mobileLift: r,
                            chapterID: rx[t],
                            faceID: l,
                            shoesID: c,
                            headwearID: i9[o],
                            wearableID: i7[u],
                            outfitID: f?.riveId ?? 0,
                            auraImage: r_(re[h].name, s),
                            baseColorImage: r_(rt[n].name, s),
                            ...("MobilePortrait" === i && t === w.s9.INTRODUCTION ? rg : rm[i]),
                            ...b,
                        }
                    );
                })({ stage: i, traits: o, layout: "Desktop", textureScale: c }),
            [i, o, c],
        ),
        [_, x] = h.useState(null),
        m = _ ?? f,
        g = (function (e) {
            let { visibleDataBinding: t, requestedDataBinding: a, textureScale: i } = e,
                r = (function (e) {
                    let { visibleTextureNames: t, requestedTextureNames: a } = e,
                        [i, r] = h.useState(t),
                        [s, n] = h.useState(t);
                    if (t !== s) {
                        n(t);
                        let e = new Set(i);
                        (t.forEach((t) => e.add(t)), r(e));
                    }
                    return (
                        h.useEffect(() => {
                            let e = setTimeout(() => r(t), 600);
                            return () => clearTimeout(e);
                        }, [t]),
                        h.useMemo(() => new Set([...i, ...a]), [i, a])
                    );
                })({ visibleTextureNames: rI(t), requestedTextureNames: rI(a) });
            return h.useMemo(() => {
                let e;
                return (
                    (e = {}),
                    rw.forEach((t) => {
                        let { name: a, swapKey: s } = t,
                            n = r.has(a) ? r_(a, i) : i8.url;
                        e[s] = { source: { uri: n } };
                    }),
                    e
                );
            }, [r, i]);
        })({ visibleDataBinding: m, requestedDataBinding: f, textureScale: c }),
        {
            assetLoader: A,
            onLoad: v,
            textureManager: I,
        } = (function () {
            let e = h.useRef(new Map()),
                [t, a] = h.useState(null),
                i = h.useCallback((t) => !!t.isImage && t.name in i3 && (e.current.set(t.name, t), !0), []);
            return {
                assetLoader: i,
                onLoad: h.useCallback(() => {
                    (a(e.current), (e.current = new Map()));
                }, []),
                textureManager: h.useMemo(
                    () =>
                        null == t
                            ? null
                            : {
                                  load: rj,
                                  swap: (e) => e.forEach((e, a) => t.get(a)?.setRenderImage(e)),
                                  release: (e) => e.forEach((e) => e.unref()),
                              },
                    [t],
                ),
            };
        })(),
        E = h.useRef(null),
        j = h.useRef(s);
    h.useEffect(() => {
        ((j.current = s), s ? E.current?.pause() : E.current?.play());
    }, [s]);
    let N = h.useCallback(() => {
        (v(), j.current && E.current?.pause());
    }, [v]);
    (function (e) {
        let { textureManager: t, referencedAssets: a, initialReferencedAssets: i } = e,
            r = h.useRef(new Map()),
            [s, n] = h.useState(i);
        return (
            h.useEffect(() => {
                r.current = new Map(
                    Object.entries(i ?? {}).map((e) => {
                        let [t, { source: a }] = e;
                        return [t, a.uri];
                    }),
                );
            }, [t, i]),
            h.useEffect(() => {
                if (null == t) return;
                let e = !1;
                return (
                    (async () => {
                        (await (async function (e) {
                            let { textureManager: t, shownUrls: a, referencedAssets: i, isStale: r } = e,
                                s = new Map();
                            if (
                                (Object.entries(i).forEach((e) => {
                                    let [t, { source: i }] = e;
                                    a.get(t) !== i.uri && s.set(t, i.uri);
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
                                !r())
                            ) {
                                let e = new Map();
                                (s.forEach((t, i) => {
                                    let r = n.get(t);
                                    null != r && (e.set(i, r), a.set(i, t));
                                }),
                                    t.swap(e));
                            }
                            t.release(Array.from(n.values()));
                        })({ textureManager: t, shownUrls: r.current, referencedAssets: a, isStale: () => e }),
                            e || n(a));
                    })(),
                    () => {
                        e = !0;
                    }
                );
            }, [t, a]),
            s === a
        );
    })({ textureManager: I, referencedAssets: g }) &&
        _ !== f &&
        x(f);
    let S = h.useMemo(() => ({ ...m, reducedMotion: u }), [m, u]);
    return (0, r.jsx)("div", {
        role: "img",
        "aria-label": (0, i0.O)(o),
        className: b()(rN.dw, { [rN.RK]: null != _ }),
        children: (0, r.jsx)(iQ.W, {
            artboard: "AB_Master",
            stateMachine: "SM_Master",
            fit: "layout",
            alignment: "center",
            ref: E,
            assetLoader: A,
            onLoad: N,
            listenOnDocumentBody: !u,
            withReducedMotion: "play",
            dataBinding: S,
            className: rN.lW,
        }),
    });
}
var rC = a(517782);
function rT(e) {
    let t,
        a,
        { didPlayerShareDataWithDiscord: i, onClose: s } = e;
    ((0, p.bG)([l.A], () => l.A.fetchState),
        (t = (0, p.bG)([l.A], () => l.A.stats?.games?.games)),
        (a = (0, h.useMemo)(
            () =>
                t?.map((e) => {
                    let { game: t } = e;
                    return t.id;
                }) ?? [],
            [t],
        )),
        (0, h.useEffect)(() => {
            let { fetchState: e } = l.A;
            (e === l.T.INIT || e === l.T.ERROR) && (0, d.nX)();
        }, []),
        (0, h.useEffect)(() => {
            (0, k.E)(a);
        }, [a]));
    let n = i ? w.Np.SHARED_DATA : w.Np.NO_SHARED_DATA,
        [c, f] = (function (e) {
            let [t, a] = h.useState(() =>
                (function (e) {
                    let { character: t, progress: a, stats: i } = l.A,
                        r = null != t ? w.s9.SUMMARY : a?.stage;
                    return C({ flow: e, stats: i }).find((e) => (0, w.UG)(e).characterStage === r) ?? w.gr.HOME;
                })(e),
            );
            return (
                h.useEffect(() => {
                    let { characterStage: e } = (0, w.UG)(t);
                    (0, d.l4)(e);
                }, [t]),
                [t, a]
            );
        })(n);
    (h.useEffect(() => {
        (o.A.setStepName(c), (0, u.if)(c));
    }, [c]),
        (0, D.l0)(() => {
            (0, u.i)(o.A.getStepName());
        }));
    let { characterStage: I, statsScreen: E } = (0, w.UG)(c),
        j = c === w.gr.HOME || null != E,
        N = j || c === w.gr.INTRODUCTION,
        S = (0, p.bG)([l.A], () => (l.A.fetchState === l.T.SUCCESS ? l.A.stats : void 0)),
        T = (0, p.bG)([l.A], () => l.A.character),
        R = h.useMemo(
            () =>
                (function (e, t) {
                    switch (e) {
                        case w.gr.SUMMARY:
                        case w.gr.SHARE:
                            let a = (0, A.o)(t),
                                { primaryBackgroundColor: i, shadowColor: r } = (0, A.j)(a);
                            return {
                                ...eX,
                                "--custom-checkpoint-primary": i,
                                "--custom-checkpoint-button-border": i,
                                "--custom-checkpoint-button-shadow": r,
                                "--custom-checkpoint-background-gradient-start": i,
                            };
                        default:
                            return eX;
                    }
                })(c, T),
            [c, T],
        ),
        O = G(_),
        y = M(),
        L = (0, v.k0)(c, y),
        H = h.useId(),
        U = null != L ? H : void 0,
        K = h.useCallback(
            (e) => {
                let t = (function (e) {
                    let { flow: t, stats: a, currentRoute: i, direction: r } = e,
                        s = C({ flow: t, stats: a }),
                        n = s.indexOf(i);
                    return -1 === n ? w.gr.INTRODUCTION : (s[n + r] ?? null);
                })({ flow: n, stats: S, currentRoute: c, direction: e });
                if (null == t) {
                    1 === e && s();
                    return;
                }
                (w.cy.has(c) || O(), f(t));
            },
            [c, n, s, O, f, S],
        ),
        z = h.useCallback(() => K(-1), [K]),
        W = h.useCallback(() => K(1), [K]),
        Y = h.useCallback(
            (e) => {
                if (!l.A.isSaving) {
                    if (null != L) return void P(L);
                    (O(), f(e));
                }
            },
            [L, O, f],
        );
    return (0, r.jsx)(x.N, {
        theme: F.NJ.DARK,
        children: (e) =>
            (0, r.jsxs)("div", {
                className: b()(e, rC.kL),
                style: R,
                "aria-label": en.intl.string(tt.default["CdU/PF"]),
                children: [
                    (0, r.jsx)(B, { isVisible: j }),
                    (0, r.jsx)("div", {
                        className: b()(rC.qd, { [rC.R]: j }),
                        children: (0, r.jsx)(rS, { stage: I, isHidden: j }),
                    }),
                    (0, w.Rq)(c) && (0, r.jsx)("div", { className: rC.qd, children: (0, r.jsx)(tc, { route: c }) }),
                    N &&
                        (0, r.jsx)("div", {
                            className: rC.qd,
                            children: (0, r.jsx)(iV, { route: c, onNextStep: W, onPreviousStep: z }),
                        }),
                    (0, r.jsx)(Q, { activeRoute: c }),
                    (0, r.jsxs)("div", {
                        className: rC.$s,
                        children: [
                            (0, r.jsx)(to, {}),
                            (0, r.jsx)(V, {
                                size: "sm",
                                "aria-label": en.intl.string(en.t.cpT0Cq),
                                onClick: s,
                                children: (0, r.jsx)(m.P, { size: "xs", color: "currentColor" }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(iJ, {
                        flow: n,
                        stats: S,
                        activeRoute: c,
                        isRouteBlocked: null != L,
                        blockedTraitDescriptionId: U,
                        onRouteClick: Y,
                    }),
                    (0, r.jsx)(tT, {
                        activeRoute: c,
                        blockedTrait: L,
                        blockedTraitDescriptionId: U,
                        onBack: z,
                        onNext: W,
                    }),
                    null != L && (0, r.jsx)(g.A, { id: H, children: (0, v.Cz)(L) }),
                ],
            }),
    });
}
function rR() {
    return !!c._.hasSubscribers(t2.jej.MODAL_CLOSE) && (c._.dispatch(t2.jej.MODAL_CLOSE), !0);
}
async function rO(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        a = arguments.length > 2 ? arguments[2] : void 0,
        i = await (0, d.nX)(a);
    i === l.T.ERROR
        ? (0, s.P0)({ text: en.intl.string(en.t.fEptJP), variant: "critical" })
        : i !== l.T.FETCHING &&
          (o.A.initialize(t),
          (0, u.lw)(e),
          (0, n.B8)(
              (e) => {
                  let { closeLayer: a } = e;
                  return (0, r.jsx)(rT, { didPlayerShareDataWithDiscord: t, onClose: a });
              },
              { onEscape: rR },
          ));
}
