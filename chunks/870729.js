let s;
(n.r(t), n.d(t, { default: () => lW }), n(323874), n(14289), n(35956));
var l,
    r = n(477900),
    i = n(582128),
    a = n(503698),
    o = n.n(a),
    u = n(806163),
    c = n(562708),
    d = n(607399),
    m = n(323889),
    E = n(17928),
    h = n(554146),
    x = n(577473),
    f = n(825484),
    g = n(821609),
    v = n(509434),
    j = n(331322),
    S = n(683438),
    C = n(944791),
    _ = n(775602),
    N = n(793574),
    p = n(139286),
    A = n(197111),
    O = n(10088),
    T = n(815996),
    I = n(726249),
    b = n(607470),
    R = n(826673),
    M = n(840251),
    L = n(688151);
let y = new M.E([], L.$G.QUEST_HOME_OPEN, { location: "open quest home" });
var Q = n(711111),
    H = n(979590),
    U = n(749638),
    D = n(783531),
    F = n(318346),
    P = n(70926),
    q = n(531685),
    k = n(676279),
    w = n(975571),
    B = n(240248),
    V = n(87549),
    W = n(192444),
    G = n(945810);
let K = (0, G.mj)({
    name: "2026-06-orbs-holdout",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var z = n(860996),
    $ = n(77870),
    Y = n(557637),
    X = n(834730),
    J = n(939249),
    Z = n(289873),
    ee = n(507395),
    et = n(144779),
    en = n(859703),
    es = n(738822),
    el = n(291749),
    er = n(18437),
    ei = n(590202),
    ea = n(620954),
    eo = n(415441),
    eu = n(657792),
    ec = n(139384),
    ed = n(43990),
    em = n(297264),
    eE = n(770178),
    eh = n(561844),
    ex = n(652215),
    ef = n(691388);
function eg(e, t) {
    let { row_index: n, ...s } = (0, ei.fF)(es.uF.QUEST_HOME_HERO);
    (0, eh.Qg)({
        adContentId: e,
        adCreativeType: m.p.QUEST_HOME_HERO,
        event: t,
        properties: s,
        sourceQuestContent: es.uF.QUEST_HOME_HERO,
    });
}
let ev = function (e) {
    let {
            adContentId: t,
            topContent: n,
            title: s,
            subtitle: l,
            buttons: a,
            background: u,
            className: c,
            overlay: d,
            ref: m,
        } = e,
        [E, h] = i.useState("display-lg"),
        x = i.useCallback((e) => {
            h(e.contentRect.width < 500 ? "display-md" : "display-lg");
        }, []),
        f = (0, eE.w)(x, [], { fireOnMount: !0 }),
        g = i.useCallback(() => eg(t, ex.HAw.QUEST_HOVER), [t]),
        v = i.useCallback(() => eg(t, ex.HAw.QUEST_HOVER_OFF), [t]);
    return (0, r.jsx)(ed.N, {
        theme: ex.NJ8.ONYX,
        disableAdaptiveTheme: !0,
        children: (e) =>
            (0, r.jsx)("div", {
                "data-testid": "quest-home-hero-banner",
                className: o()(ef.iE, e, c),
                onMouseEnter: g,
                onMouseLeave: v,
                ref: (e) => {
                    ((f.current = e), "function" == typeof m ? m(e) : null != m && (m.current = e));
                },
                children: (0, r.jsxs)("div", {
                    className: ef.FG,
                    children: [
                        d,
                        (0, r.jsxs)(j.B, {
                            className: o()(ef.Qs, { [ef.X]: null != d && !1 !== d }),
                            direction: "vertical",
                            justify: null != n ? "space-between" : "end",
                            children: [
                                n,
                                (0, r.jsxs)(j.B, {
                                    className: ef.yp,
                                    gap: 16,
                                    children: [
                                        (0, r.jsxs)(j.B, {
                                            gap: 8,
                                            children: [
                                                (0, r.jsx)(em.D, {
                                                    color: "text-strong",
                                                    variant: E,
                                                    className: ef.DD,
                                                    children: s,
                                                }),
                                                (0, r.jsx)(X.E, {
                                                    color: "text-strong",
                                                    variant: "text-md/normal",
                                                    className: ef.VA,
                                                    children: l,
                                                }),
                                            ],
                                        }),
                                        a,
                                    ],
                                }),
                            ],
                        }),
                        u,
                    ],
                }),
            }),
    });
};
var ej = n(339889);
(n(134528), n(947204));
var eS = n(749401),
    eC = n(635377),
    e_ = n.n(eC),
    eN = n(998304),
    ep = n(515718);
let eA = new (e_())({ max: 50 });
async function eO(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
        n = eA.get(`${e}-${t}`);
    if (null != n) return n;
    let s = (
        await new Promise((n, s) => {
            let l = new Image();
            ((l.crossOrigin = "Anonymous"),
                (l.onerror = (e) => {
                    (s(e), null != l && ((l.onerror = null), (l.onload = null)), (l = null));
                }),
                (l.onload = () => {
                    null != l
                        ? (n((0, ep.Sf)(l, t, 10)), (l.onerror = null), (l.onload = null), (l = null))
                        : s("image is null");
                }),
                (l.src = e));
        })
    ).map((e) => {
        let [t, n, s] = e;
        return (0, eN.Ob)(t, n, s);
    });
    return (eA.set(`${e}-${t}`, s), s);
}
var eT = n(49491),
    eI = n(454908),
    eb = n(418842),
    eR = n(174459),
    eM = n(403362),
    eL = n(38405);
let ey = (0, G.mj)({
    name: "2026-06-hero-shelf-ad-tile",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var eQ = n(792620);
n(321073);
var eH = n(535185),
    eU = n(408278),
    eD = n(548411),
    eF = n(554830),
    eP = n(689175),
    eq = n(321503),
    ek = n(661531),
    ew = n(105292),
    eB =
        (((l = {}).FEATURED = "featured"),
        (l.IN_PROGRESS = "in-progress"),
        (l.ENDING_SOON = "ending-soon"),
        (l.ORB = "orb"),
        (l.DISCOVERED = "discovered"),
        (l.EXPIRED = "expired"),
        (l.PREVIEW = "preview"),
        (l.SPECIAL_QUESTS = "special-quests"),
        l);
let eV = [
    { type: "featured-quests", identifier: "featured", title: ew.t["ih/OtS"], maxItems: 4 },
    { type: "quests", identifier: "ending-soon", title: ew.t.PRg3qh },
    { type: "quests", identifier: "special-quests", title: ew.t.P0lmqC },
    { type: "quests", identifier: "orb", title: ew.t["0Uc94A"] },
    { type: "quests", identifier: "in-progress", title: ew.t.CHJy6z },
    { type: "quests", identifier: "discovered", title: ew.t["u9Ug++"] },
    { type: "quests", identifier: "preview", title: ew.t["1gfA/U"], shouldShowFn: (e, t) => t },
    { type: "quests", identifier: "expired", title: ew.t.Q8nVIj, shouldShowFn: (e, t) => e },
];
function eW(e) {
    return ek.A.space.SPACE_XL.resolve({ density: e });
}
function eG(e, t) {
    return (1220 - 2 * eW(e) * (t ? 2 : 0.75)) / 3;
}
function eK(e, t, n) {
    return e.scrollLeft + (t.getBoundingClientRect().left - (n.getBoundingClientRect().left + 2));
}
var ez = n(915850);
let e$ = "data-scroll-target",
    eY = `[${e$}]`,
    eX = { anchors: [], windowSizes: [] },
    eJ = '[role="button"]:not([tabindex="-1"]):not([aria-disabled="true"])',
    eZ = { overflowX: "hidden" };
function e0(e, t, n) {
    let s = t.length - 1,
        l = Math.max(0, e.scrollWidth - e.clientWidth),
        r = n
            ? t.map((e) => Math.min(l, Math.max(0, e)))
            : t.map((t, n) => (0 === n ? 0 : n === s ? l : t - e.clientWidth / 2));
    function i(t) {
        return Math.abs(t - e.scrollLeft);
    }
    return { currentIndex: r.reduce((e, t, n) => (i(t) < i(r[e]) ? n : e), 0), scrollLefts: r };
}
let e1 = i.memo(function (e) {
    let {
            children: t,
            className: n,
            itemSelector: s = eY,
            maskWidth: l = 24,
            overflowAmount: a = 0,
            maskMarginMultiplier: u = 1,
            disableUserScroll: c = !1,
            groupedArrows: d = !1,
            scrollerRef: m,
            controlRef: h,
            onScrollStart: x,
            onScrollEnd: f,
            singleStep: g = !1,
            autoCycle: v = !1,
        } = e,
        j = i.useRef(null),
        S = i.useCallback(
            (e) => {
                ((j.current = e), null != m && (m.current = e));
            },
            [m],
        ),
        C = i.useRef(null),
        N = i.useRef(0),
        p = i.useRef(null),
        [A, O] = i.useState(!1),
        [T, I] = i.useState(!1),
        [b, R] = i.useState(!0),
        [M, L] = i.useState([]),
        [y, Q] = i.useState([]),
        H = (0, E.bG)([_.Ay], () => _.Ay.useReducedMotion) ? "auto" : "smooth",
        U = i.useCallback(() => {
            let e = j.current?.getScrollerNode();
            null == e ||
                (0 !== e.clientWidth && (O(e.scrollLeft > 0), I(e.scrollLeft + e.clientWidth < e.scrollWidth - 1)));
        }, []),
        D = i.useCallback(() => {
            let { anchors: e, windowSizes: t } = (function (e) {
                let {
                        scrollerRef: t,
                        containerRef: n,
                        itemSelector: s,
                        maskMarginMultiplier: l,
                        maskWidth: r,
                        singleStep: i,
                    } = e,
                    a = t.current?.getScrollerNode(),
                    o = n.current;
                if (null == a || null == o || a.scrollWidth <= a.clientWidth) return eX;
                let u = Array.from(a.querySelectorAll(s));
                if (0 === u.length) return eX;
                let c = a.clientWidth - 2 * r * l;
                function d(e) {
                    return e.offsetLeft + e.offsetWidth;
                }
                let m = i ? [] : [0],
                    E = [],
                    h = 0;
                for (let e = 0; e < u.length; e++) {
                    h < e && (h = e);
                    let t = u[e].offsetLeft;
                    for (; h + 1 < u.length && d(u[h + 1]) - t <= c;) h++;
                    let n = h - e + 1;
                    if ((E.push(n), i)) {
                        m.push(eK(a, u[e], o));
                        continue;
                    }
                    if (h === u.length - 1) break;
                    e > 0 && m.push((t + d(u[h])) / 2);
                }
                return E.length < 2 ? eX : (i || m.push(a.scrollWidth), { anchors: m, windowSizes: E });
            })({
                scrollerRef: j,
                containerRef: p,
                itemSelector: s,
                maskWidth: l,
                maskMarginMultiplier: u,
                singleStep: g,
            });
            (Q(t), L((t) => (t.length === e.length && t.every((t, n) => t === e[n]) ? t : e)));
        }, [l, s, u, g, L]),
        F = i.useCallback(() => {
            if (null == p.current || p.current?.clientWidth === 0) return R(!0);
            R(p.current?.clientWidth >= 1260);
        }, [p]),
        P = i.useCallback(
            function (e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                    s = j.current?.getScrollerNode();
                if (null == s || M.length < 2 || (null != x && !x(e * n))) return !1;
                let { currentIndex: l, scrollLefts: r } = e0(s, M, g),
                    i = g ? n : (y[l] ?? 1),
                    a = Math.max(0, Math.min(M.length - 1, l + e * i));
                return ((C.current = t), s.scrollTo({ left: r[a], behavior: H }), !0);
            },
            [H, M, y, g, x],
        ),
        q = (function (e) {
            let { isEnabled: t, advance: n } = e,
                s = i.useRef(null),
                l = i.useCallback(() => {
                    t && n(1, ei.pk.AUTO);
                }, [t, n]),
                r = i.useCallback(() => {
                    t &&
                        null != s.current &&
                        (window.clearInterval(s.current), (s.current = window.setInterval(l, 3500)));
                }, [t, l]);
            return (
                i.useEffect(
                    () => (
                        t && (s.current = window.setInterval(l, 3500)),
                        () => {
                            null != s.current && window.clearInterval(s.current);
                        }
                    ),
                    [t, l],
                ),
                r
            );
        })({ isEnabled: v, advance: P }),
        k = i.useCallback(
            function (e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
                P(e, t, n) && q();
            },
            [P, q],
        ),
        w = i.useCallback(
            (e) => {
                0 !== e && k(e > 0 ? 1 : -1, ei.pk.AUTO, Math.abs(e));
            },
            [k],
        );
    i.useImperativeHandle(h, () => ({ scrollBySteps: w }), [w]);
    let B = i.useCallback(
            (e, t) => {
                let n = j.current?.getScrollerNode();
                if (null == n || null == e || !n.contains(e)) return;
                let s = n.getBoundingClientRect(),
                    r = e.getBoundingClientRect(),
                    i = s.left + l - r.left,
                    a = r.right - (s.right - l);
                (i <= 0 && a <= 0) ||
                    ((C.current = ei.pk.MANUAL),
                    i > 0
                        ? n.scrollTo({ left: n.scrollLeft - i, behavior: t })
                        : a > 0 && n.scrollTo({ left: n.scrollLeft + a, behavior: t }));
            },
            [l],
        ),
        V = i.useCallback(
            (e) => {
                let t = e.target.closest(s);
                null != t && B(t, H);
            },
            [s, B, H],
        ),
        W = i.useCallback(() => {
            let e = j.current?.getScrollerNode();
            if (null == e) return;
            let { currentIndex: t } = e0(e, M, g),
                n = C.current ?? ei.pk.MANUAL;
            C.current = null;
            let s = N.current;
            N.current = e.scrollLeft;
            let l = e.scrollLeft > s ? ei.VU.RIGHT : ei.VU.LEFT,
                r = y[t] ?? 1;
            f?.({
                scrollingType: n,
                scrollWindowStartIndex: t,
                scrollWindowEndIndex: t + r - 1,
                scrollWindowSize: r,
                scrollingDirection: l,
            });
        }, [f, M, y, g]),
        G = i.useCallback(
            (e) => {
                let t = "ArrowLeft" === e.key ? -1 : +("ArrowRight" === e.key);
                if (0 === t) return;
                e.preventDefault();
                let n = j.current?.getScrollerNode();
                if (null == n) return;
                let l = Array.from(n.querySelectorAll(s)),
                    r = e.target.closest(s),
                    i = null == r ? -1 : l.indexOf(r),
                    a = l[i + t],
                    o = null == a ? null : a.matches(eJ) ? a : a.querySelector(eJ);
                null != o && (o.focus({ preventScroll: !0 }), e.repeat && B(a, "instant"));
            },
            [s, B],
        ),
        K = i.useCallback(() => {
            (U(), D(), F());
        }, [U, D, F]);
    (0, eH.g)(p, K, [], { fireOnMount: !0 });
    let z = a > 0,
        $ = i.useMemo(
            () => ({
                "--custom-scroller-mask-width": `${l}px`,
                "--custom-scroller-overflow-amount": `${a}px`,
                "--custom-scroller-scroll-behavior": H,
            }),
            [l, a, H],
        );
    return (0, r.jsxs)("div", {
        className: o()(n, ez.m7),
        ref: p,
        style: $,
        children: [
            d &&
                (0, r.jsxs)("div", {
                    className: ez.rU,
                    children: [
                        (0, r.jsx)(eU.K, {
                            icon: eD.Z,
                            variant: "overlay-secondary",
                            onClick: () => k(-1, ei.pk.ARROW),
                            disabled: !A,
                            "aria-label": ew.intl.string(ew.t.vgfxaA),
                            tabIndex: -1,
                        }),
                        (0, r.jsx)(eU.K, {
                            icon: eF.K,
                            variant: "overlay-secondary",
                            onClick: () => k(1, ei.pk.ARROW),
                            disabled: !T,
                            "aria-label": ew.intl.string(ew.t.XiOHRX),
                            tabIndex: -1,
                        }),
                    ],
                }),
            !d &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)("div", {
                            className: o()(ez.k9, ez.RW, { [ez.Q2]: A }),
                            "aria-hidden": !0,
                            children: (0, r.jsx)(eU.K, {
                                icon: eD.Z,
                                variant: "overlay-secondary",
                                onClick: () => k(-1, ei.pk.ARROW),
                                disabled: !A,
                                "aria-label": ew.intl.string(ew.t.vgfxaA),
                                tabIndex: -1,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: o()(ez.k9, ez.K3, { [ez.Q2]: T }),
                            "aria-hidden": !0,
                            children: (0, r.jsx)(eU.K, {
                                icon: eF.K,
                                variant: "overlay-secondary",
                                onClick: () => k(1, ei.pk.ARROW),
                                disabled: !T,
                                tabIndex: -1,
                                "aria-label": ew.intl.string(ew.t.XiOHRX),
                            }),
                        }),
                    ],
                }),
            (0, r.jsx)("div", {
                className: o()({ [ez.sF]: A && b, [ez.RC]: T && b, [ez.Ni]: z && !A, [ez.GA]: z && !T }),
                children: (0, r.jsx)(eP.zC, {
                    ref: S,
                    orientation: "horizontal",
                    onScroll: U,
                    onScrollEnd: W,
                    onFocusCapture: V,
                    onKeyDown: G,
                    style: c ? eZ : void 0,
                    className: o()({ [ez.x2]: z, [ez.$o]: g }, ez.XG),
                    children: (0, r.jsxs)(eq.X.Provider, {
                        value: j,
                        children: [
                            t,
                            !g &&
                                M.map((e, t) =>
                                    (0, r.jsx)(
                                        "div",
                                        { "aria-hidden": !0, className: ez.fw, style: { insetInlineStart: `${e}px` } },
                                        t,
                                    ),
                                ),
                        ],
                    }),
                }),
            }),
        ],
    });
});
var e8 = n(399513);
function e2(e, t, n) {
    if (null != n) {
        if (e) {
            let e = n.to({ range: [0, 0.25, 0.75, 1], output: [0, 1, 1, 0] });
            return {
                "--custom-quest-highlight-blur": (0, e8.to)([e], (e) => `${25 * e}px`),
                "--custom-quest-highlight-alpha": (0, e8.to)([e], (e) => `${e}`),
            };
        }
        if (t)
            return { opacity: (0, e8.to)([n.to({ range: [0, 0.25, 0.75, 1], output: [1, 0.4, 0.4, 1] })], (e) => e) };
    }
}
var e4 = n(440703),
    e5 = n(731355),
    e3 = n(621466),
    e7 = n(717421),
    e6 = n(559106),
    e9 = n(62010),
    te = n(406810),
    tt = n(628284),
    tn = n(65154),
    ts = n(687966),
    tl = n(155718),
    tr = n(496431),
    ti = n(640708),
    ta = n(287809),
    to = n(58703),
    tu = n(927813),
    tc = n(541830),
    td = n(971649),
    tm = n(651892),
    tE = n(801365),
    th = n(814793),
    tx = n(453384),
    tf = n(62405),
    tg = n(398025),
    tv = n(190107),
    tj = n(818348),
    tS = n(499621);
function tC(e) {
    let [t, n] = i.useState(!1),
        s = i.useCallback(() => {
            t || (n(!0), e?.(!0));
        }, [t, e]),
        l = i.useCallback(() => {
            t && (n(!1), e?.(!1));
        }, [t, e]);
    return { isHovering: t, hoverProps: { onMouseEnter: s, onMouseLeave: l, onFocus: s, onBlur: l } };
}
function t_(e) {
    let { hero: t, contentPosition: n, impressionRef: s } = e,
        l = i.useRef(null),
        { isHovering: a, hoverProps: u } = tC(
            i.useCallback(
                (e) => {
                    (0, eh.Qg)({
                        adContentId: t.id,
                        adCreativeType: m.p.QUEST_HOME_HERO,
                        event: e ? ex.HAw.QUEST_HOVER : ex.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: es.uF.QUEST_HOME_HERO_SHELF,
                            content_name: (0, ei.jO)(es.uF.QUEST_HOME_HERO_SHELF),
                            content_position: n,
                        },
                        sourceQuestContent: es.uF.QUEST_HOME_HERO_SHELF,
                    });
                },
                [t.id, n],
            ),
        );
    i.useEffect(() => {
        let e = l.current;
        (0, e3.vq)(e, HTMLVideoElement) && (a ? ((e.currentTime = 0), e.play().catch(tj.tE)) : e.pause());
    }, [a]);
    let { hoverSpring: c } = (0, e7.z)({ hoverSpring: +!!a, config: e8.config.gentle }),
        d = i.useCallback(() => {
            (0, ea._Q)(
                { adContentId: t.id, adCreativeType: m.p.QUEST_HOME_HERO, cta: t.cta },
                {
                    content: es.uF.QUEST_HOME_HERO_SHELF,
                    ctaContent: ei.Cy.OPEN_GAME_LINK,
                    position: n,
                    impressionId: s.current?.getId(),
                    sourceQuestContent: es.uF.QUEST_HOME_HERO_SHELF,
                },
            );
        }, [t.cta, t.id, n, s]);
    return (0, r.jsxs)(J.D, {
        tag: "div",
        className: o()(tS.FW, tS.Bm),
        onClick: d,
        "aria-label": t.cta.buttonLabel,
        [e$]: !0,
        ...u,
        children: [
            (0, r.jsx)("div", {
                className: tS.Ve,
                children: (0, r.jsx)(eo.N, {
                    showVideo: !0,
                    assetRef: l,
                    imageAsset:
                        null != t.shelfImage
                            ? {
                                  asset: { url: t.shelfImage, mimetype: null, isAnimated: !1 },
                                  assetId: "intro-image",
                                  className: o()(tS.pv, tS.gI),
                              }
                            : void 0,
                    videoAsset:
                        null != t.shelfVideo
                            ? {
                                  asset: { url: t.shelfVideo, mimetype: null, isAnimated: !0 },
                                  assetId: "intro-video",
                                  className: o()(tS.pv, tS.Wq),
                              }
                            : void 0,
                }),
            }),
            (0, r.jsx)(e8.animated.div, {
                className: tS.hn,
                style: { transform: c.to([0, 1], [100, 0]).to((e) => `translateY(${e}%)`) },
                children: (0, r.jsx)(g.$, {
                    fullWidth: !0,
                    onClick: (e) => {
                        (e.stopPropagation(), d());
                    },
                    text: t.cta.buttonLabel,
                }),
            }),
        ],
    });
}
function tN(e) {
    let { hero: t, game: n, contentPosition: s, shelfImage: l, impressionRef: a } = e,
        u = i.useRef(null),
        { isHovering: c, hoverProps: d } = tC(
            i.useCallback(
                (e) => {
                    (0, eh.Qg)({
                        adContentId: t.id,
                        adCreativeType: m.p.QUEST_HOME_HERO,
                        event: e ? ex.HAw.QUEST_HOVER : ex.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: es.uF.QUEST_HOME_HERO_SHELF,
                            content_name: (0, ei.jO)(es.uF.QUEST_HOME_HERO_SHELF),
                            content_position: s,
                        },
                        sourceQuestContent: es.uF.QUEST_HOME_HERO_SHELF,
                    });
                },
                [t.id, s],
            ),
        );
    i.useEffect(() => {
        let e = u.current;
        (0, e3.vq)(e, HTMLVideoElement) && (c ? ((e.currentTime = 0), e.play().catch(tj.tE)) : e.pause());
    }, [c]);
    let E = i.useCallback(() => {
            (0, ea._Q)(
                { adContentId: t.id, adCreativeType: m.p.QUEST_HOME_HERO, cta: t.cta },
                {
                    content: es.uF.QUEST_HOME_HERO_SHELF,
                    ctaContent: ei.Cy.OPEN_GAME_LINK,
                    position: s,
                    impressionId: a.current?.getId(),
                    sourceQuestContent: es.uF.QUEST_HOME_HERO_SHELF,
                },
            );
        }, [t.cta, t.id, s, a]),
        h = i.useRef(null),
        [x, f] = i.useState({ top: !1, bottom: !1 }),
        v = i.useCallback(() => {
            let e = h.current;
            if (null == e) return;
            let t = e.getDistanceFromTop() > 4,
                n = e.getDistanceFromBottom() > 4;
            f((e) => (e.top === t && e.bottom === n ? e : { top: t, bottom: n }));
        }, []);
    i.useLayoutEffect(() => {
        v();
    }, [v]);
    let { topFade: j, bottomFade: S } = (0, e7.z)({
            topFade: +!!x.top,
            bottomFade: +!!x.bottom,
            config: { ...e8.config.gentle, duration: 100 },
        }),
        C = i.useMemo(() => {
            let e = null != n.firstReleaseDate ? new Date(n.firstReleaseDate).getFullYear() : NaN,
                t = isNaN(e) ? null : e,
                s = n.genres.at(0);
            return [
                t,
                null != s ? (0, tc.du)(s) : null,
                n.getCompanyByRole(tl.wk.DEVELOPER).at(0)?.name ?? null,
            ].filter((e) => null != e);
        }, [n]),
        _ = i.useMemo(() => C.length > 0, [C]);
    return (0, r.jsxs)(J.D, {
        tag: "div",
        className: o()(tS.FW, tS.n7),
        onClick: E,
        [e$]: !0,
        ...d,
        children: [
            (0, r.jsx)("div", { className: tS.hu }),
            (0, r.jsx)("div", {
                className: tS.fQ,
                children: (0, r.jsx)(eo.N, {
                    showVideo: !0,
                    assetRef: u,
                    imageAsset:
                        null != l
                            ? {
                                  asset: { url: l, mimetype: null, isAnimated: !1 },
                                  assetId: "intro-image",
                                  className: o()(tS.pv, tS.gI),
                              }
                            : void 0,
                    videoAsset:
                        null != t.shelfVideo
                            ? {
                                  asset: { url: t.shelfVideo, mimetype: null, isAnimated: !0 },
                                  assetId: "intro-video",
                                  className: o()(tS.pv, tS.Wq),
                              }
                            : void 0,
                }),
            }),
            (0, r.jsxs)("div", {
                className: tS.iq,
                children: [
                    (0, r.jsxs)("div", {
                        className: tS.o7,
                        children: [
                            (0, r.jsx)(em.D, {
                                variant: "heading-xl/semibold",
                                color: "text-strong",
                                children: n.name,
                            }),
                            _ &&
                                (0, r.jsx)("p", {
                                    className: tS.c9,
                                    children: C.map((e, t) =>
                                        (0, r.jsxs)(
                                            i.Fragment,
                                            {
                                                children: [
                                                    (0, r.jsx)(X.E, {
                                                        variant: "text-sm/medium",
                                                        color: "text-muted",
                                                        tag: "span",
                                                        children: e,
                                                    }),
                                                    t < C.length - 1 && (0, r.jsx)(ti.A, { width: 3, height: 3 }),
                                                ],
                                            },
                                            t,
                                        ),
                                    ),
                                }),
                        ],
                    }),
                    (0, r.jsx)(e8.animated.div, {
                        className: tS.hX,
                        style: {
                            maskImage: (0, e8.to)(
                                [j, S],
                                (e, t) =>
                                    `linear-gradient(to bottom, rgba(0,0,0,${1 - e}), #000 48px, #000 calc(100% - 48px), rgba(0,0,0,${1 - t}))`,
                            ),
                        },
                        children: (0, r.jsx)(e6.vN, {
                            children: (0, r.jsx)(eP.Ch, {
                                ref: h,
                                className: tS.hw,
                                onScroll: v,
                                fade: !c,
                                children: (0, r.jsx)(X.E, {
                                    variant: "text-md/normal",
                                    color: "text-muted",
                                    className: tS.W1,
                                    children: n.description,
                                }),
                            }),
                        }),
                    }),
                    (0, r.jsx)(g.$, {
                        fullWidth: !0,
                        variant: "secondary",
                        onClick: (e) => {
                            (e.stopPropagation(), E());
                        },
                        text: t.cta.buttonLabel,
                    }),
                ],
            }),
        ],
    });
}
function tp(e) {
    let { heroId: t, quest: n, onQuestCtaClick: s, contentPosition: l } = e,
        a = i.useMemo(() => new Date(n.config.expiresAt), [n.config.expiresAt]),
        { days: u, hours: c, minutes: d, seconds: h } = (0, tr.A)(a, tu.A.Millis.MINUTE),
        x = i.useMemo(
            () =>
                (0, to.uN)(
                    { days: u, hours: c, minutes: d, seconds: h },
                    { days: ew.t["Ux/De1"], hours: ew.t.Lzd5Ie, minutes: ew.t.odmpbP },
                ),
            [u, c, d, h],
        ),
        f = (0, E.bG)([ta.default], () => ta.default.getCurrentUser()),
        v = i.useMemo(() => (0, tE.mq)(n.config, f), [n.config, f]),
        S = i.useMemo(
            () =>
                (function (e, t) {
                    switch ((0, tm.xv)(e).type) {
                        case e4.l.IN_GAME:
                            return ew.intl.string(ew.t["O/J2kr"]);
                        case e4.l.COLLECTIBLE:
                            return ew.intl.string(ew.t.Jg17Ut);
                        case e4.l.VIRTUAL_CURRENCY:
                            return ew.intl.string(ew.t.ElYQFS);
                        default:
                            return (0, tE.mq)(e, t);
                    }
                })(n.config, f),
            [n.config, f],
        ),
        { completedRatio: C, completedRatioDisplay: _ } = (0, $.O9)(n),
        N = i.useMemo(() => (0, tE.wo)(n.config, f), [n.config, f]),
        p = (0, er.WS)(),
        A = (0, td.wW)(),
        { isHovering: O, hoverProps: T } = tC(
            i.useCallback(
                (e) => {
                    p({
                        adContentId: t,
                        relatedQuestId: n.id,
                        adCreativeType: m.p.QUEST_HOME_HERO,
                        event: e ? ex.HAw.QUEST_HOVER : ex.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: es.uF.QUEST_HOME_HERO_SHELF,
                            content_name: (0, ei.jO)(es.uF.QUEST_HOME_HERO_SHELF),
                            content_position: l,
                        },
                        sourceQuestContent: es.uF.QUEST_HOME_HERO_SHELF,
                    });
                },
                [t, p, l, n.id],
            ),
        ),
        { hoverSpring: I } = (0, e7.z)({ hoverSpring: +!!O, config: e8.config.gentle }),
        b = i.useCallback(() => {
            (s(n.id),
                (0, ee.r)({
                    type: et.F.CLICK_INTERNAL,
                    adCreativeType: m.p.QUEST_HOME_HERO,
                    adCreativeId: t,
                    relatedQuestId: n.id,
                    questContentCTA: ei.Cy.VIEW_QUESTS,
                    surfaceId: es.uF.QUEST_HOME_HERO_SHELF,
                    sourceQuestContent: es.uF.QUEST_HOME_HERO_SHELF,
                    questContentPosition: l,
                    impressionId: A(),
                }));
        }, [s, t, n.id, l, A]);
    return (0, r.jsxs)(J.D, {
        tag: "div",
        className: o()(tS.FW, tS.$R),
        onClick: b,
        "aria-label": ew.intl.string(ew.t["th2+0j"]),
        [e$]: !0,
        ...T,
        children: [
            (0, r.jsx)("div", { className: tS.hu }),
            (0, r.jsxs)(j.B, {
                direction: "horizontal",
                gap: 4,
                children: [
                    (0, r.jsx)(e9.E, { type: { text: S } }),
                    (0, r.jsx)(e8.animated.div, {
                        style: { opacity: (0, tg.a)(I.to([0, 1], [1, 0])) },
                        children: (0, r.jsx)(e9.E, { type: { text: x }, icon: te.ClockIcon }),
                    }),
                ],
            }),
            (0, r.jsx)(e8.animated.div, {
                className: tS.Tr,
                style: { transform: I.to([0, 1], [1, 1.1]).to((e) => `scale(${e})`) },
                children: (0, r.jsx)(tx.A, {
                    percentComplete: C,
                    overlayText: O && null != N ? `${N}` : void 0,
                    size: 120,
                    children: (0, r.jsx)(tf.A, {
                        quest: n,
                        location: tv.rE.QUEST_HOME_HERO_SHELF_DESKTOP,
                        questContent: es.uF.QUEST_HOME_HERO_SHELF,
                        sourceQuestContent: es.uF.QUEST_HOME_HERO_SHELF,
                        autoplay: O,
                        fullWidth: !0,
                    }),
                }),
            }),
            (0, r.jsx)(e8.animated.div, {
                className: tS.tw,
                style: {
                    opacity: (0, tg.a)(I.to([0, 1], [1, 0])),
                    transform: I.to([0, 1], [1, 0.9]).to((e) => `scale(${e})`),
                    transformOrigin: "bottom left",
                },
                children: (0, r.jsxs)(j.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)(X.E, {
                            variant: "text-md/semibold",
                            color: "text-strong",
                            className: tS.Ht,
                            children: v,
                        }),
                        (0, r.jsxs)(j.B, {
                            align: "start",
                            direction: "horizontal",
                            gap: 8,
                            children: [
                                (0, r.jsxs)(j.B, {
                                    direction: "horizontal",
                                    gap: 4,
                                    fullWidth: !1,
                                    children: [
                                        (0, r.jsx)(tt.y, { size: "xs", color: ek.A.colors.ICON_MUTED.css }),
                                        (0, r.jsx)(X.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children: n.config.messages.gamePublisher,
                                        }),
                                    ],
                                }),
                                (0, r.jsxs)(j.B, {
                                    direction: "horizontal",
                                    gap: 4,
                                    fullWidth: !1,
                                    children: [
                                        (0, th.pv)(n.config) === e5.Z.VIDEO
                                            ? (0, r.jsx)(tn.S, { size: "xs", color: ek.A.colors.ICON_MUTED.css })
                                            : (0, r.jsx)(ts.GameControllerIcon, {
                                                  size: "xs",
                                                  color: ek.A.colors.ICON_MUTED.css,
                                              }),
                                        (0, r.jsx)(X.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children: _,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            }),
            (0, r.jsx)(e8.animated.div, {
                className: tS.um,
                style: { transform: I.to([0, 1], [100, 0]).to((e) => `translateY(${e}%)`) },
                children: (0, r.jsx)(g.$, {
                    fullWidth: !0,
                    onClick: (e) => {
                        (e.stopPropagation(), b());
                    },
                    text: ew.intl.string(ew.t["th2+0j"]),
                }),
            }),
        ],
    });
}
var tA = n(531525),
    tO = n(726356);
function tT(e) {
    let { hero: t, shelfQuests: n, isBannerLoading: s, onQuestCtaClick: l } = e,
        a = (0, eb.C)(),
        { enabled: o } = ey.useConfig({ location: tv.rE.QUEST_HOME_DESKTOP }),
        u = i.useMemo(
            () =>
                o
                    ? (n
                          .map((e) => (0, eQ.xc)(e) ?? (0, eQ._3)(e)?.at(0) ?? null)
                          .filter(eM.Vq)
                          .at(0) ?? null)
                    : null,
            [n, o],
        ),
        { isLoading: c, data: d, error: E } = (0, eI.I)(u),
        h = (0, eT.A)(d),
        x = o && null != d && !h;
    i.useEffect(() => {
        o &&
            null != u &&
            null != E &&
            (eR.default.track(ex.HAw.AD_ASSET_LOADING_FAILURE, {
                source: tv.rE.QUEST_HOME_HERO_SHELF_DESKTOP,
                ad_creative_id: t.id,
                ad_creative_type: m.p.QUEST_HOME_HERO,
                application_ids: [u],
            }),
            eL.A.captureException(E, { tags: { source: tv.rE.QUEST_HOME_HERO_SHELF_DESKTOP } }));
    }, [o, E, t.id, u]);
    let f = i.useMemo(
            () => (x ? (null != t.shelfImage ? t.shelfImage : (d?.getCoverURL(512) ?? null)) : null),
            [x, t, d],
        ),
        g = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
                [n, s] = i.useState(void 0);
            return (
                i.useEffect(() => {
                    let n = !1;
                    return (
                        (null != e ? eO(e, t) : Promise.resolve(void 0))
                            .then((e) => {
                                n || s(e);
                            })
                            .catch(() => {}),
                        () => {
                            n = !0;
                        }
                    );
                }, [e, t]),
                n
            );
        })(
            i.useMemo(() => (null != f ? (0, el.UX)(f, { format: "webp", width: 400, height: 600 }) : null), [f]),
            8,
        ),
        v = i.useMemo(() => (null == g ? null : (0, eS.Z)(g)), [g]),
        S = i.useMemo(() => {
            if (null != v)
                return {
                    "--custom-hero-shelf-scrim-gradient-start": v[0],
                    "--custom-hero-shelf-scrim-gradient-end": v[1],
                };
        }, [v]);
    return s || c
        ? (0, r.jsx)(tI, { numShelfCards: n.length + 1 })
        : (0, r.jsx)(e1, {
              className: tO.vo,
              overflowAmount: 25,
              maskWidth: eW(a),
              maskMarginMultiplier: 0.75,
              children: (0, r.jsxs)(j.B, {
                  className: tO.I2,
                  direction: "horizontal",
                  fullWidth: !1,
                  gap: 20,
                  style: S,
                  children: [
                      !o &&
                          (0, r.jsx)(eu.Z, {
                              adContentId: t.id,
                              adCreativeType: m.p.QUEST_HOME_HERO,
                              questContent: es.uF.QUEST_HOME_HERO_SHELF,
                              questContentPosition: 0,
                              sourceQuestContent: es.uF.QUEST_HOME_HERO_SHELF,
                              children: (e, n) =>
                                  (0, r.jsx)("div", {
                                      ref: (t) => {
                                          e.current = t;
                                      },
                                      children: (0, r.jsx)(t_, { hero: t, contentPosition: 0, impressionRef: n }),
                                  }),
                          }),
                      x &&
                          (0, r.jsx)(eu.Z, {
                              adContentId: t.id,
                              adCreativeType: m.p.QUEST_HOME_HERO,
                              questContent: es.uF.QUEST_HOME_HERO_SHELF,
                              questContentPosition: 0,
                              sourceQuestContent: es.uF.QUEST_HOME_HERO_SHELF,
                              children: (e, n) =>
                                  (0, r.jsx)("div", {
                                      ref: (t) => {
                                          e.current = t;
                                      },
                                      children: (0, r.jsx)(tN, {
                                          hero: t,
                                          game: d,
                                          shelfImage: f,
                                          contentPosition: 0,
                                          impressionRef: n,
                                      }),
                                  }),
                          }),
                      n.map((e, n) =>
                          (0, r.jsx)(
                              eu.Z,
                              {
                                  adContentId: t.id,
                                  adCreativeType: m.p.QUEST_HOME_HERO,
                                  relatedQuestId: e.id,
                                  questContent: es.uF.QUEST_HOME_HERO_SHELF,
                                  questContentPosition: n + 1,
                                  sourceQuestContent: es.uF.QUEST_HOME_HERO_SHELF,
                                  children: (s) =>
                                      (0, r.jsx)("div", {
                                          ref: (e) => {
                                              s.current = e;
                                          },
                                          children: (0, r.jsx)(tp, {
                                              heroId: t.id,
                                              quest: e,
                                              onQuestCtaClick: l,
                                              contentPosition: n + 1,
                                          }),
                                      }),
                              },
                              e.id,
                          ),
                      ),
                  ],
              }),
          });
}
function tI(e) {
    let { className: t, numShelfCards: n } = e,
        { enabled: s } = ey.useConfig({ location: tv.rE.QUEST_HOME_DESKTOP }),
        l = (0, eb.C)(),
        i = s ? Math.max(n, 3) : Math.max(n, 4);
    return (0, r.jsx)(e1, {
        className: o()(tO.vo, t),
        overflowAmount: 25,
        maskWidth: eW(l),
        maskMarginMultiplier: 0.75,
        children: (0, r.jsx)(j.B, {
            className: tO.I2,
            direction: "horizontal",
            fullWidth: !1,
            gap: 20,
            "aria-hidden": !0,
            children: Array.from({ length: i }).map((e, t) =>
                (0, r.jsx)("div", { className: o()(tA.m, tO.W_, { [tO.E8]: s && 0 === t }) }, t),
            ),
        }),
    });
}
var tb = n(74498);
function tR() {
    return (0, r.jsx)("div", { className: tb.Np });
}
function tM(e) {
    let { heroImage: t, heroVideo: n } = e,
        s = i.useRef(null);
    (0, ec.A)(s);
    let l = i.useMemo(() => (null != n ? (0, el.WV)(n) : null) ?? t, [n, t]);
    return (0, r.jsx)(Y._M, {
        id: "QuestHomeHeroBackground_heroVideoWithImageFallback",
        children: (e) =>
            (0, r.jsx)(eo.N, {
                showVideo: !0,
                imageRef: e,
                assetRef: s,
                imageAsset: {
                    alt: "",
                    className: tb.LY,
                    asset: { url: l, mimetype: (0, el.vm)(l), isAnimated: !1 },
                    assetId: l,
                },
                videoAsset: {
                    alt: "",
                    className: tb.LY,
                    asset: { url: n, mimetype: (0, el.vm)(n), isAnimated: !0 },
                    assetId: n,
                },
            }),
    });
}
function tL(e) {
    let { heroImage: t, heroVideo: n } = e;
    return null == n
        ? (0, r.jsxs)("div", {
              className: tb.Tv,
              children: [
                  (0, r.jsx)(tR, {}),
                  (0, r.jsx)("div", {
                      className: tb.LO,
                      children: (0, r.jsx)(Y._M, {
                          id: "QuestHomeHeroBackground_heroImage",
                          children: (e) => (0, r.jsx)("img", { ref: e, className: tb.LY, src: t, alt: "" }),
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: o()(tb.LO, tb.jx, tb.hw),
                      children: (0, r.jsx)("img", { className: tb.LY, src: t, alt: "" }),
                  }),
                  (0, r.jsx)("div", {
                      className: o()(tb.LO, tb.jx, tb.Co),
                      children: (0, r.jsx)("img", { className: tb.LY, src: t, alt: "" }),
                  }),
              ],
          })
        : (0, r.jsxs)("div", {
              className: tb.Tv,
              children: [
                  (0, r.jsx)(tR, {}),
                  (0, r.jsx)("div", { className: tb.LO, children: (0, r.jsx)(tM, { heroImage: t, heroVideo: n }) }),
              ],
          });
}
function ty(e) {
    let { hero: t, hasFetchedQuests: n, hasNoAccessibleQuests: s } = e,
        l = (0, er.WS)(),
        r = i.useRef(!1);
    return (
        i.useEffect(() => {
            let e = t.questIds;
            n &&
                null != e &&
                e.length > 0 &&
                s &&
                !r.current &&
                ((r.current = !0),
                l({
                    adContentId: t.id,
                    adCreativeType: m.p.QUEST_HOME_HERO,
                    event: ex.HAw.QUEST_HOME_HERO_MISSING_QUESTS,
                    properties: { missing_quest_ids: e },
                    sourceQuestContent: es.uF.QUEST_HOME_HERO,
                }));
        }, [n, s, t.id, t.questIds, l]),
        null
    );
}
function tQ(e) {
    let { hero: t, onQuestCtaClick: n, isBannerLoading: s } = e,
        l = (0, E.bG)([en.A], () => en.A.quests),
        a = (0, E.bG)([en.A], () => en.A.lastFetchedCurrentQuests > 0),
        { shelfQuests: u, isShelfEnabled: c } = (0, $.t9)(t),
        { dismissQuestHomeHeroContent: d } = (0, ej.I)();
    i.useEffect(() => {
        d();
    }, [d]);
    let h = i.useMemo(() => t.questIds?.filter((e) => l.has(e)) ?? [], [l, t.questIds]),
        x = h[0],
        { enabled: v } = W.Ay.useConfig({ location: tv.rE.QUEST_HOME_HERO });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(eu.Z, {
                adContentId: t.id,
                adCreativeType: m.p.QUEST_HOME_HERO,
                questContent: es.uF.QUEST_HOME_HERO,
                sourceQuestContent: es.uF.QUEST_HOME_HERO,
                children: (e, l) =>
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(ty, { hero: t, hasFetchedQuests: a, hasNoAccessibleQuests: 0 === h.length }),
                            (0, r.jsx)(ev, {
                                ref: (t) => {
                                    e.current = s ? null : t;
                                },
                                adContentId: t.id,
                                className: o()({ [tb.lX]: s }),
                                topContent: (0, r.jsxs)(j.B, {
                                    direction: "horizontal",
                                    justify: "space-between",
                                    align: "start",
                                    children: [
                                        null != t.sponsorImage &&
                                            (0, r.jsx)(Y._M, {
                                                id: "QuestHomeHeroBackground_sponsorImage",
                                                children: (e) =>
                                                    (0, r.jsx)("img", {
                                                        ref: e,
                                                        src: t.sponsorImage,
                                                        alt: "",
                                                        className: tb.wm,
                                                    }),
                                            }),
                                        (0, r.jsx)(X.E, {
                                            color: "text-strong",
                                            variant: "text-sm/normal",
                                            className: tb.yu,
                                            children: ew.intl.string(ew.t.OJjFi5),
                                        }),
                                    ],
                                }),
                                title: t.labelTitle,
                                subtitle: t.labelSubtitle,
                                overlay:
                                    v &&
                                    (0, r.jsx)(J.D, {
                                        tag: "div",
                                        className: tb.fj,
                                        "aria-label": t.cta.buttonLabel,
                                        onClick: () => {
                                            (0, ea._Q)(
                                                { adContentId: t.id, adCreativeType: m.p.QUEST_HOME_HERO, cta: t.cta },
                                                {
                                                    content: es.uF.QUEST_HOME_HERO_BANNER,
                                                    ctaContent: ei.Cy.OPEN_GAME_LINK,
                                                    impressionId: l.current?.getId(),
                                                    sourceQuestContent: es.uF.QUEST_HOME_HERO,
                                                },
                                            );
                                        },
                                    }),
                                buttons: (0, r.jsxs)(f.e, {
                                    children: [
                                        (0, r.jsx)(g.$, {
                                            onClick: () => {
                                                (0, ea._Q)(
                                                    {
                                                        adContentId: t.id,
                                                        adCreativeType: m.p.QUEST_HOME_HERO,
                                                        cta: t.cta,
                                                    },
                                                    {
                                                        content: es.uF.QUEST_HOME_HERO,
                                                        ctaContent: ei.Cy.OPEN_GAME_LINK,
                                                        impressionId: l.current?.getId(),
                                                        sourceQuestContent: es.uF.QUEST_HOME_HERO,
                                                    },
                                                );
                                            },
                                            size: "md",
                                            text: t.cta.buttonLabel,
                                            variant: "overlay-primary",
                                        }),
                                        !c &&
                                            null != x &&
                                            (0, r.jsx)(g.$, {
                                                onClick: () => {
                                                    (n(x),
                                                        (0, ee.r)({
                                                            type: et.F.CLICK_INTERNAL,
                                                            adCreativeType: m.p.QUEST_HOME_HERO,
                                                            adCreativeId: t.id,
                                                            questContentCTA: ei.Cy.VIEW_QUESTS,
                                                            surfaceId: es.uF.QUEST_HOME_HERO,
                                                            sourceQuestContent: es.uF.QUEST_HOME_HERO,
                                                        }));
                                                },
                                                size: "md",
                                                text: ew.intl.string(ew.t["th2+0j"]),
                                                variant: "color-mix",
                                            }),
                                    ],
                                }),
                                background: (0, r.jsx)(tL, { heroImage: t.heroImage, heroVideo: t.heroVideo }),
                            }),
                        ],
                    }),
            }),
            c && (0, r.jsx)(tT, { hero: t, isBannerLoading: s, shelfQuests: u, onQuestCtaClick: n }),
        ],
    });
}
function tH() {
    return (0, r.jsx)("div", { className: o()(ef.iE, ef.FG, ef.B3), children: (0, r.jsx)(Z.y, {}) });
}
var tU = n(201805),
    tD = n(73153),
    tF = n(427495);
n(667532);
var tP = n(890497),
    tq = n(663417),
    tk = n(265872),
    tw = n(624479),
    tB = n(416052),
    tV = n(417098);
function tW(e) {
    let { error: t } = e,
        n = t.getAnyErrorMessage();
    return (0, r.jsx)(tV.$T, {
        color: tV.Hv.DANGER,
        children: (0, r.jsx)("div", { children: null != n ? n : ew.intl.string(ew.t.ZErSg5) }),
    });
}
var tG = n(602853),
    tK = n(817281),
    tz = n(688810),
    t$ = n(487245),
    tY = n(363195),
    tX = n(912875);
let tJ = function () {
    let { analyticsLocations: e } = (0, tz.Ay)(),
        t = (0, E.bG)([tY.A], () => tY.A.theme),
        n = i.useRef(null);
    i.useEffect(() => {
        null == n.current && (n.current = t);
    }, [t]);
    let s = (0, tG.r)(ek.A.colors.BACKGROUND_BASE_LOW, ex.NJ8.LIGHT),
        l = (0, tG.r)(ek.A.colors.BACKGROUND_BASE_LOW, ex.NJ8.DARK),
        a = (0, tG.r)(ek.A.colors.BACKGROUND_BASE_LOW, ex.NJ8.ONYX),
        o = i.useMemo(
            () => [
                { theme: ex.NJ8.LIGHT, label: ew.t.K2sFfo, color: s.hex() },
                { theme: ex.NJ8.DARK, label: ew.t.b8Cei3, color: l.hex() },
                { theme: ex.NJ8.ONYX, label: ew.t.Do4ZJx, color: a.hex() },
            ],
            [s, l, a],
        ),
        u = i.useCallback(
            (t) => {
                ((0, t$.X8)({ isPersisted: !0, analyticsLocations: e, themeName: `default ${t}` }),
                    (0, tK.u_)({ theme: t }));
            },
            [e],
        ),
        c = i.useCallback(() => {
            null != n.current && u(n.current);
        }, [u]);
    return (0, r.jsx)("div", {
        className: tX.N,
        children: (0, r.jsxs)("div", {
            className: tX.t7,
            children: [
                o.map((e) =>
                    (0, r.jsxs)(
                        J.D,
                        {
                            tag: "div",
                            className: tX.Du,
                            onClick: () => u(e.theme),
                            "aria-label": ew.intl.string(e.label),
                            "aria-pressed": t === e.theme,
                            children: [
                                (0, r.jsx)("div", {
                                    className: `${tX.WT} ${t === e.theme ? tX.TA : ""}`,
                                    style: { backgroundColor: e.color },
                                }),
                                (0, r.jsx)("span", { className: tX.i, children: ew.intl.string(e.label) }),
                            ],
                        },
                        e.theme,
                    ),
                ),
                (0, r.jsx)(eU.K, {
                    onClick: c,
                    "aria-label": ew.intl.string(ew.t.yBZMsQ),
                    icon: tq.RefreshIcon,
                    variant: "secondary",
                }),
            ],
        }),
    });
};
var tZ = n(219354);
let t0 = function (e) {
    let { questId: t, setQuestId: n, quest: s, refreshQuest: l } = e,
        [a, o] = i.useState(!1),
        [u, c] = i.useState(!1),
        d = i.useRef(null),
        m = (0, $.pT)(),
        h = (0, E.bG)([en.A], () => (null != t ? en.A.getFetchQuestPreviewError(t) : null), [t]),
        x = (0, E.bG)([en.A], () => null != t && en.A.isFetchingQuestPreview(t), [t]),
        v = i.useMemo(() => {
            let e = m.map((e) => ({
                id: e.id,
                label: `${e.config?.messages?.questName ?? e.id} (${e.id})`,
                value: e.id,
            }));
            return (null == t || e.some((e) => e.value === t) || e.unshift({ id: t, label: t, value: t }), e);
        }, [m, t]),
        j = i.useCallback(async () => {
            if (null != t) {
                o(!0);
                try {
                    await (0, tF.Yb)(t, 1);
                } finally {
                    o(!1);
                }
            }
        }, [t, o]),
        S = i.useCallback(async () => {
            if (null != t) {
                o(!0);
                try {
                    await (0, tF.UZ)(t);
                } finally {
                    o(!1);
                }
            }
        }, [t, o]),
        C = i.useCallback(async () => {
            if (null != t) {
                o(!0);
                try {
                    let e = Math.random();
                    await (0, tF.Yb)(t, e);
                } finally {
                    o(!1);
                }
            }
        }, [t, o]),
        _ = i.useCallback(
            (e) => {
                (0, B.uJ)(e) || null == n || n(e);
            },
            [n],
        );
    return (0, r.jsxs)("div", {
        className: tZ.Fr,
        children: [
            (0, r.jsx)("div", {
                children: (0, r.jsx)("div", {
                    className: tZ.Br,
                    children: (0, r.jsxs)("div", {
                        className: tZ.bo,
                        children: [
                            (0, r.jsx)(tJ, {}),
                            (0, r.jsxs)("div", {
                                className: tZ.b8,
                                children: [
                                    (0, r.jsx)(
                                        tP.Z,
                                        {
                                            selectionMode: "single",
                                            label: "Quest ID",
                                            hideLabel: !0,
                                            options: v,
                                            value: t,
                                            onSelectionChange: _,
                                            placeholder: ew.intl.string(ew.t.Zw8jxn),
                                            clearable: !0,
                                            customMatchSorter: (e, t) => {
                                                if ((0, B.uJ)(t?.trim())) return e;
                                                let n = e.filter(
                                                    (e) =>
                                                        e.label.toLowerCase().includes(t.toLowerCase()) ||
                                                        e.value.toLowerCase().includes(t.toLowerCase()),
                                                );
                                                return 0 === n.length && "" !== t.trim()
                                                    ? [{ label: t.trim(), value: t.trim() }]
                                                    : n;
                                            },
                                        },
                                        `${t}-${s?.config?.messages?.questName ?? ""}`,
                                    ),
                                    (0, r.jsx)(eU.K, {
                                        onClick: l,
                                        "aria-label": ew.intl.string(ew.t.wzzjk9),
                                        icon: tq.RefreshIcon,
                                        loading: x,
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
            }),
            null != t &&
                null != s &&
                (0, r.jsx)("div", {
                    className: tZ.in,
                    children: (0, r.jsxs)(f.e, {
                        className: tZ.xv,
                        children: [
                            (0, r.jsx)(g.$, {
                                onClick: j,
                                disabled: a,
                                loading: a,
                                variant: "secondary",
                                text: ew.intl.string(ew.t.jQEfRT),
                            }),
                            (0, r.jsx)(g.$, {
                                onClick: S,
                                disabled: a,
                                loading: a,
                                variant: "secondary",
                                text: ew.intl.string(ew.t.taqkwK),
                            }),
                            (0, r.jsx)(g.$, {
                                onClick: C,
                                disabled: a,
                                loading: a,
                                variant: "secondary",
                                text: ew.intl.string(ew.t.cKSLr4),
                            }),
                            (0, r.jsx)(tk.Y, {
                                targetElementRef: d,
                                shouldShow: u,
                                onRequestClose: () => c(!1),
                                position: "bottom",
                                align: "center",
                                renderPopout: () =>
                                    (0, r.jsx)("div", {
                                        className: tZ.PP,
                                        children: (0, r.jsx)("div", {
                                            className: tZ.sH,
                                            children: (0, r.jsx)(tB.A, {
                                                value: tj.Sb.QUEST_PREVIEW_TOOL_2(t),
                                                text: ew.intl.string(ew.t.WqhZss),
                                                autoFocus: !0,
                                            }),
                                        }),
                                    }),
                                children: (e) =>
                                    (0, r.jsx)(eU.K, {
                                        ...e,
                                        buttonRef: d,
                                        onClick: () => c(!u),
                                        "aria-label": ew.intl.string(ew.t.rNGQfD),
                                        icon: tw.CopyIcon,
                                        variant: "secondary",
                                    }),
                            }),
                        ],
                    }),
                }),
            null != h ? (0, r.jsx)(tW, { error: h }) : null,
            x ? (0, r.jsx)(Z.y, {}) : null,
        ],
    });
};
var t1 = n(364522),
    t8 = n(761508),
    t2 = n(425069);
function t4() {
    return (0, r.jsx)("div", { className: t2.y });
}
var t5 = n(834615),
    t3 = n(34665);
let t7 = function (e) {
    let { quest: t } = e;
    return (0, r.jsx)("div", {
        className: t3.x3,
        children: (0, r.jsxs)("div", {
            className: t3.B0,
            children: [
                (0, r.jsx)(em.D, {
                    className: t3.R_,
                    variant: "heading-md/semibold",
                    children: ew.intl.string(ew.t.L2mlUb),
                }),
                (0, r.jsx)(eu.R, {
                    questOrQuests: t,
                    questContent: es.uF.ACTIVITY_PANEL,
                    sourceQuestContent: es.uF.ACTIVITY_PANEL,
                    children: (e) =>
                        (0, r.jsx)("div", {
                            ref: (t) => {
                                e.current = t;
                            },
                            children: (0, r.jsx)(t5.default, { quest: t }),
                        }),
                }),
            ],
        }),
    });
};
var t6 = n(875845),
    t9 = n(717695),
    ne = n(466209),
    nt = n(83978);
let nn = function (e) {
    let { quest: t } = e;
    return (0, r.jsx)("div", {
        className: t3.x3,
        children: (0, r.jsxs)("div", {
            className: ne.wp,
            children: [
                (0, r.jsx)(em.D, {
                    className: ne.Oo,
                    variant: "heading-md/semibold",
                    children: ew.intl.string(ew.t.rjVPdM),
                }),
                (0, r.jsx)("div", {
                    className: ne.RE,
                    children: (0, r.jsx)("div", {
                        className: ne.Z,
                        children: (0, r.jsx)("div", {
                            className: nt.C3,
                            children: (0, r.jsx)(t9.A, {
                                children: (0, r.jsx)(Y.y5, {
                                    source: "preview",
                                    adCreativeId: t.id,
                                    adCreativeType: m.p.QUEST,
                                    children: (0, r.jsx)(t6.QuestBarQuestContent, { quest: t }),
                                }),
                            }),
                        }),
                    }),
                }),
            ],
        }),
    });
};
var ns = n(322338);
function nl(e) {
    let { quest: t } = e;
    return (0, r.jsx)("div", {
        className: t3.x3,
        children: (0, r.jsxs)("div", {
            className: t3.B0,
            children: [
                (0, r.jsx)(em.D, {
                    className: t3.R_,
                    variant: "heading-md/semibold",
                    children: ew.intl.string(ew.t.gWinpQ),
                }),
                (0, r.jsx)("div", {
                    className: t3.YT,
                    children: (0, r.jsx)(ns.A, {
                        channelId: "preview-channel-id",
                        previewQuest: t,
                        isParticipatingOverride: !1,
                    }),
                }),
            ],
        }),
    });
}
var nr = n(711038),
    ni = n(622409);
let na = function (e) {
    let { questId: t } = e;
    return (0, r.jsx)("div", {
        className: t3.x3,
        children: (0, r.jsxs)("div", {
            className: t3.B0,
            children: [
                (0, r.jsx)(em.D, { variant: "heading-md/semibold", children: ew.intl.string(ew.t.IcljUu) }),
                (0, r.jsx)("div", {
                    className: ni.wu,
                    children: (0, r.jsx)("span", { className: ni.cy, children: ew.intl.string(ew.t.q97mEu) }),
                }),
                (0, r.jsx)("div", {
                    className: ni.oU,
                    children: (0, r.jsx)("div", {
                        className: ni.zx,
                        children: (0, r.jsx)("div", {
                            className: ni.Lj,
                            children: (0, r.jsx)("div", {
                                className: ni.n0,
                                children: (0, r.jsx)(nr.A, { questId: t }),
                            }),
                        }),
                    }),
                }),
            ],
        }),
    });
};
var no = n(976014),
    nu = n(484810);
function nc(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", { className: nu.y, children: t });
}
var nd = n(612324),
    nm = n(365199),
    nE = n(270045),
    nh = n(79545),
    nx = n(173936),
    nf = n(914410),
    ng = n(426110),
    nv = n(339350),
    nj = n(782134),
    nS = n(271536),
    nC = n(768622),
    n_ = n(793934),
    nN = n(662940),
    np = n(977416);
let nA = 2 * tu.A.Millis.DAY,
    nO = 3 * tu.A.Millis.DAY,
    nT = new Map(eV.map((e) => [e.identifier, e])),
    nI = {
        [eB.DISCOVERED]: function (e, t) {
            let { discoveredAtByQuestId: n } = t;
            return e.slice().sort((e, t) => {
                var s, l;
                return ((s = n.get(e)), (l = n.get(t)), null == s || null == l ? 0 : l.localeCompare(s));
            });
        },
    };
function nb(e) {
    return e.features.includes(tv.Li.EXCLUDE_FROM_FEATURED);
}
function nR(e, t) {
    let n = nT.get(e)?.maxItems,
        s = t.get(e)?.length ?? 0;
    return null == n || s < n;
}
var nM = n(853978);
function nL(e) {
    let { quest: t, isHovering: n = !1 } = e,
        s = (0, nh.Pd)(t),
        l = (0, E.bG)([en.A], () => s === nh.UA.UNENROLLED && null != en.A.questEnrollmentBlockedUntil, [s]),
        a = (0, $.fc)(t),
        u = (0, $.I3)(t),
        c = i.useMemo(() => (0, nN.Dd)(t.config, s, l), [t.config, s, l]),
        d = i.useMemo(() => (0, nN.CK)(s, a, u, l), [s, a, u, l]),
        m = (function (e) {
            let t = (0, nh.Pd)(e),
                [n] = i.useState(() => Date.now()),
                s = i.useMemo(() => new Date(e.config.expiresAt), [e.config.expiresAt]),
                l = s.getTime() - n,
                r =
                    (function (e) {
                        switch (e) {
                            case nh.UA.UNENROLLED:
                            case nh.UA.ENROLLED:
                            case nh.UA.INCOMPLETE:
                                return !0;
                            case nh.UA.COMPLETED:
                            case nh.UA.CLAIMED:
                            case nh.UA.EXPIRED:
                            case nh.UA.EXPIRED_CLAIMABLE:
                            case nh.UA.EXPIRED_CLAIMED:
                                return !1;
                        }
                    })(t) &&
                    l < nO &&
                    l > 0,
                { days: a, hours: o, minutes: u, seconds: c } = (0, tr.A)(s, tu.A.Millis.SECOND, void 0, !r);
            return r && (0 !== a || 0 !== o || 0 !== u || 0 !== c)
                ? `${String(24 * a + o).padStart(2, "0")}:${String(u).padStart(2, "0")}:${String(c).padStart(2, "0")}`
                : null;
        })(t),
        h = null != m ? m : c;
    return (0, r.jsxs)("div", {
        className: o()(nM.fC, { [nM.R]: n }),
        children: [
            (0, r.jsxs)("div", {
                className: nM.qS,
                children: [
                    null != h &&
                        (0, r.jsx)(X.E, {
                            variant: "text-xs/semibold",
                            className: nM.SJ,
                            color: "text-overlay-light",
                            children: h,
                        }),
                    null != h &&
                        null != d &&
                        (0, r.jsx)(X.E, {
                            variant: "text-xs/semibold",
                            color: "text-overlay-light",
                            className: nM.If,
                            children: "\u2022",
                        }),
                    null != d &&
                        (0, r.jsxs)("span", {
                            className: nM.BA,
                            children: [
                                (function (e, t) {
                                    let n = { size: "xxs", className: nM.rF, color: "currentColor" };
                                    if (t) return (0, r.jsx)(nv.Q, { ...n });
                                    switch ((0, nN.pv)(e)) {
                                        case nN.UK.PLAY:
                                            return (0, r.jsx)(ts.GameControllerIcon, { ...n });
                                        case nN.UK.WATCH:
                                            return (0, r.jsx)(nj.PlayIcon, { ...n });
                                        case nN.UK.ACTIVITY:
                                            return (0, r.jsx)(nS.q, { ...n });
                                        case nN.UK.INSTANT_PLAY:
                                            return (0, r.jsx)(nC.g, { ...n });
                                        case nN.UK.ARENA:
                                            return (0, r.jsx)(n_.q, { ...n });
                                    }
                                })(t, l),
                                (0, r.jsx)(X.E, {
                                    variant: "text-xs/semibold",
                                    tag: "span",
                                    color: "text-overlay-light",
                                    children: d,
                                }),
                            ],
                        }),
                ],
            }),
            t.preview &&
                (0, r.jsx)("div", {
                    className: o()(nM.qS, nM.WZ),
                    children: (0, r.jsx)(X.E, {
                        variant: "text-xs/bold",
                        color: "currentColor",
                        children: ew.intl.string(ew.t.SKNnqq),
                    }),
                }),
        ],
    });
}
var ny = n(409626),
    nQ = n(3738),
    nH = n(646917),
    nU = n(866665),
    nD = n(743368),
    nF = n(887899),
    nP = n(617986),
    nq = n(964051);
function nk(e) {
    let { quest: t, questContent: n, sourceQuestContent: s, isHovering: l, contentPosition: i, rowIndex: a } = e,
        u = (0, nh.Pd)(t),
        { ctaOnHover: c } = W.aD.useConfig({ location: tv.rE.QUEST_HOME_DESKTOP }),
        d = (0, E.bG)([en.A], () => u === nh.UA.UNENROLLED && null != en.A.questEnrollmentBlockedUntil, [u]),
        m = !(0, eQ.no)(t) || ![nh.UA.ENROLLED, nh.UA.UNENROLLED, nh.UA.INCOMPLETE].includes(u),
        h = u === nh.UA.EXPIRED || u === nh.UA.EXPIRED_CLAIMED || (u === nh.UA.CLAIMED && (0, eQ.GL)(t)),
        x = (0, $.do)({ quest: t, content: n, ctaContent: ei.Cy.OPEN_GAME_LINK, sourceQuestContent: s });
    return (0, r.jsxs)("div", {
        className: o()(nq.lO, { [nq.Fq]: l || !c }),
        onClick: (e) => e.stopPropagation(),
        children: [
            (0, r.jsx)("div", { className: nq.Cj }),
            (0, r.jsx)(ed.N, {
                theme: ex.NJ8.DARK,
                disableAdaptiveTheme: !0,
                children: (e) =>
                    (0, r.jsx)("div", {
                        className: o()(e, nq.tn),
                        children: (0, r.jsxs)(f.e, {
                            direction: "horizontal",
                            fullWidth: !0,
                            wrap: !1,
                            size: "md",
                            children: [
                                m &&
                                    (h
                                        ? (0, r.jsx)(g.$, {
                                              variant: "secondary",
                                              text: t.config.ctaConfig.buttonLabel,
                                              onClick: x,
                                          })
                                        : (0, r.jsx)(nU.m, {
                                              text: ew.intl.string(ew.t.LLLLPD),
                                              position: "top",
                                              align: "center",
                                              ariaHidden: !0,
                                              children: (0, r.jsx)(eU.K, {
                                                  variant: "secondary",
                                                  icon: nD.W,
                                                  "aria-label": ew.intl.string(ew.t.LLLLPD),
                                                  onClick: x,
                                              }),
                                          })),
                                !h &&
                                    !d &&
                                    (0, r.jsx)(nF.A, {
                                        quest: t,
                                        surface: nh.V3.QUEST_HOME_TILE_V2_FOOTER,
                                        analyticsCtxQuestContent: n,
                                        analyticsCtxSourceQuestContent: s,
                                        analyticsCtxQuestContentPosition: i,
                                        analyticsCtxQuestContentRowIndex: a,
                                    }),
                                d &&
                                    (0, r.jsx)(g.$, {
                                        variant: "overlay-primary",
                                        text: ew.intl.string(ew.t.vY9GgG),
                                        onClick: () => (0, nP.m6)(t, n, s),
                                    }),
                            ],
                        }),
                    }),
            }),
        ],
    });
}
var nw = n(403581),
    nB = n(576761),
    nV = n(41327);
function nW(e) {
    let { onClick: t, questId: n, orbMultiplierEligibility: s } = e,
        l = (0, $.ZP)(n),
        i = (0, nB.B9)(s);
    if (null == l) return null;
    let a = i
        ? ew.intl.formatToPlainString(ew.t.l2UfLG, { bonusOrbMultiplier: l })
        : ew.intl.formatToPlainString(ew.t["G+mKoo"], { bonusOrbMultiplier: l });
    return (0, r.jsx)(J.D, {
        onClick: function (e) {
            null != l && (e.stopPropagation(), (0, nP.gC)(l, s), t?.());
        },
        "aria-label": a,
        children: (0, r.jsxs)("div", {
            className: nV.k,
            children: [
                (0, r.jsx)(nw.t, { size: "xs", color: "currentColor" }),
                (0, r.jsx)(X.E, { variant: "text-sm/normal", color: "currentColor", className: nV.Q, children: a }),
            ],
        }),
    });
}
var nG = n(947641),
    nK = n(194261),
    nz = n(106799),
    n$ = n(476334);
function nY(e) {
    let { quest: t, questContent: n, sourceQuestContent: s, isHovering: l } = e,
        a = (0, E.bG)([ta.default], () => ta.default.getCurrentUser()),
        u = (0, tE.mq)(t.config, a),
        c = (0, tE.ks)(t.config),
        d = (0, tE.wo)(t.config, a),
        { completedRatio: m } = (0, $.O9)(t),
        h = (0, nh.Pd)(t),
        x = (0, $.Hv)(),
        f = h === nh.UA.CLAIMED || h === nh.UA.EXPIRED_CLAIMED,
        g = f || h === nh.UA.COMPLETED || h === nh.UA.EXPIRED_CLAIMABLE,
        v = (0, tU.ix)({ quest: t, questContent: n, sourceQuestContent: s }),
        j = i.useCallback(
            (e) => {
                if ((e.stopPropagation(), x && !f)) {
                    ((0, eh.Y5)({
                        questId: t.id,
                        questContent: n,
                        questContentCTA: ei.Cy.QUEST_ACCESS_SUSPENDED,
                        sourceQuestContent: s,
                    }),
                        (0, nP.FS)());
                    return;
                }
                v();
            },
            [v, x, f, t.id, n, s],
        ),
        S = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(tf.A, {
                    quest: t,
                    location: tv.rE.QUEST_HOME_DESKTOP,
                    questContent: n,
                    autoplay: l,
                    lazyLoad: !0,
                    className: n$.al,
                    fullWidth: !0,
                    sourceQuestContent: s,
                }),
                f &&
                    (0, r.jsx)("div", {
                        className: n$.EY,
                        children: (0, r.jsx)(nG.r, { className: n$.AM, size: "sm", color: "currentColor" }),
                    }),
                h === nh.UA.EXPIRED &&
                    (0, r.jsx)("div", {
                        className: n$.EY,
                        children: (0, r.jsx)(nK.LockIcon, { size: "sm", className: n$.Sz, color: "currentColor" }),
                    }),
            ],
        }),
        C = (0, r.jsx)("div", { className: h === nh.UA.UNENROLLED ? n$.fm : n$.n5, children: S }),
        _ = (0, r.jsx)(tx.A, { size: 66, percentComplete: m, useAltStyle: !0, children: C }),
        N = g
            ? (0, r.jsx)(J.D, {
                  className: n$.q9,
                  onClick: j,
                  "aria-label": f
                      ? (0, tE.r7)(t.config)
                          ? ew.intl.string(ew.t.bAGFz3)
                          : ew.intl.string(ew.t.vTgCWx)
                      : ew.intl.string(ew.t.cfY4PE),
                  children: _,
              })
            : _;
    return (0, r.jsxs)("div", {
        className: o()(n$.CZ, { [n$.Pv]: l }),
        children: [
            (0, r.jsx)(ed.N, {
                theme: ex.NJ8.DARK,
                disableAdaptiveTheme: !0,
                children: (e) =>
                    (0, r.jsx)("div", {
                        className: o()(e, n$.tE, { [n$.cB]: l }),
                        children: h === nh.UA.UNENROLLED ? C : N,
                    }),
            }),
            (0, r.jsxs)("div", {
                className: o()(n$.FS, { [n$.IR]: l }),
                children: [
                    (0, r.jsx)(X.E, {
                        variant: "text-sm/medium",
                        className: n$.$K,
                        children: t.config.cosponsorMetadata?.name ?? t.config.messages.gamePublisher,
                    }),
                    (0, r.jsxs)("div", {
                        className: o()(n$.oV, { [n$.FJ]: l }),
                        children: [
                            c && (0, r.jsx)(nz.A, { className: n$.Kq, customSize: 14 }),
                            (0, r.jsx)(
                                X.E,
                                {
                                    variant: "text-md/medium",
                                    className: n$.zN,
                                    color: "text-overlay-light",
                                    lineClamp: 1,
                                    tag: "span",
                                    children: c ? d : u,
                                },
                                `${t.id}_reward`,
                            ),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var nX = n(604970);
function nJ(e) {
    let { quest: t, questContent: n, isHovering: s, sourceQuestContent: l, contentPosition: a, rowIndex: u } = e,
        c = i.useRef(null),
        d = (0, nQ.A9)(t, l, tv.rE.QUEST_HOME_DESKTOP, ny.GameProfileSources.QuestHome, c),
        m = (0, nH.z)(),
        E = (0, $.SD)(t, m);
    return (0, r.jsxs)("div", {
        ref: c,
        className: nX.qr,
        children: [
            (0, r.jsx)(nY, { quest: t, questContent: n, sourceQuestContent: l, isHovering: s }),
            (0, r.jsxs)("div", {
                className: nX.yM,
                children: [
                    (0, r.jsxs)("div", {
                        className: nX.Wi,
                        children: [
                            (0, r.jsx)(X.E, {
                                variant: "text-sm/normal",
                                className: o()(nX.Wj, nX.h_, { [nX.C4]: s }),
                                children: d,
                            }),
                            (0, r.jsx)(X.E, {
                                "aria-hidden": !0,
                                variant: "text-sm/normal",
                                lineClamp: 1,
                                className: o()(nX.Wj, nX.XV, { [nX.Hz]: s }),
                                children: d,
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: nX.Gv,
                        children: [
                            (0, r.jsx)(X.E, {
                                variant: "text-sm/normal",
                                className: nX.I4,
                                children: ew.intl.string(ew.t.o6FLcF),
                            }),
                            E &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(X.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: "\u2022",
                                        }),
                                        (0, r.jsx)(nW, { questId: t.id, orbMultiplierEligibility: m }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(nk, {
                quest: t,
                questContent: n,
                sourceQuestContent: l,
                isHovering: s,
                contentPosition: a,
                rowIndex: u,
            }),
        ],
    });
}
var nZ = n(434295);
let n0 = { [el.i2.TIER_2]: nZ.qt, [el.i2.TIER_3]: nZ.jR, [el.i2.TIER_4]: nZ.cd };
function n1(e) {
    let {
            quest: t,
            questContent: n,
            sourceQuestContent: s,
            isHovering: l,
            isShareable: i,
            onCopyShareLink: a,
            onMenuOpen: u,
            onMenuClose: c,
            contentPosition: d,
            rowIndex: m,
        } = e,
        { completedRatio: h, completedRatioDisplay: x } = (0, $.O9)(t, !0),
        f = (0, el.tW)(t, el.fY.LOGO_TYPE, ex.NJ8.DARK).url,
        g = (0, E.bG)([tY.A], () => tY.A.theme) === ex.NJ8.LIGHT,
        v = (0, E.bG)([ta.default], () => ta.default.getCurrentUser()),
        j = (0, ng.Q)(t.config, v),
        S = null != j ? n0[j] : void 0;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            g
                ? (0, r.jsx)(ed.N, {
                      theme: ex.NJ8.DARK,
                      disableAdaptiveTheme: !0,
                      children: (e) => (0, r.jsx)("div", { className: o()(e, nZ.f5, S), "aria-hidden": !0 }),
                  })
                : (0, r.jsx)("div", { className: o()(nZ.f5, S), "aria-hidden": !0 }),
            (0, r.jsx)("div", { className: o()(nZ.ZF, S, { [nZ.SP]: l }), "aria-hidden": !0 }),
            (0, r.jsx)("div", { className: nZ.ZH, children: (0, r.jsx)(nL, { quest: t, isHovering: l }) }),
            (0, r.jsxs)("div", {
                className: o()(nZ.o1, { [nZ.SP]: l }),
                children: [
                    i &&
                        (0, r.jsx)(J.D, {
                            tag: "div",
                            className: nZ.hP,
                            onClick: a,
                            "aria-label": ew.intl.string(ew.t.WqhZss),
                            children: (0, r.jsx)(nx.LinkIcon, { size: "sm", color: "currentColor" }),
                        }),
                    (0, r.jsx)(nE.C, {
                        questContent: n,
                        quest: t,
                        hideLearnMore: !0,
                        shouldShowDisclosure: !0,
                        showShareLink: !0,
                        sourceQuestContent: s,
                        onOpen: u,
                        onClose: c,
                        children: (e) =>
                            (0, r.jsx)(J.D, {
                                ...e,
                                tag: "div",
                                className: nZ.hP,
                                "aria-label": ew.intl.string(ew.t.DEoVWZ),
                                children: (0, r.jsx)(nm.MoreHorizontalIcon, { size: "sm", color: "currentColor" }),
                            }),
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: o()(nZ.KJ, { [nZ.R]: l }),
                children: [
                    (0, r.jsx)("div", {
                        className: nZ.Ez,
                        children: (0, r.jsx)("img", { className: nZ.dK, src: f, alt: t.config.messages.gameTitle }),
                    }),
                    (0, r.jsxs)("div", {
                        className: nZ.Cd,
                        children: [
                            (0, r.jsx)(X.E, {
                                variant: "text-sm/semibold",
                                color: "text-overlay-light",
                                className: nZ.ZV,
                                children: x,
                            }),
                            (0, r.jsx)("div", {
                                className: nZ.oU,
                                children: (0, r.jsx)(nf.Ay, {
                                    variant: nf.qP.UNSET,
                                    override: { default: { gradientStart: "#189E4E", gradientEnd: "#44FC7E" } },
                                    weight: nf.fh.LIGHT,
                                    progress: Math.round(100 * h),
                                    glowing: !0,
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: o()(nZ.SJ, { [nZ.SP]: l }),
                children: (0, r.jsx)(nJ, {
                    quest: t,
                    questContent: n,
                    isHovering: l,
                    sourceQuestContent: s,
                    contentPosition: d,
                    rowIndex: m,
                }),
            }),
        ],
    });
}
var n8 = n(720875),
    n2 = n(614972),
    n4 = n(688755),
    n5 = n(831368),
    n3 = n(704289);
function n7(e) {
    let {
            sectionIdentifier: t,
            quest: n,
            questContent: s,
            isInFeaturedSection: l,
            isActive: a,
            className: u,
            contentPosition: c,
            rowIndex: d,
            eagerLoadAssets: m,
            impressionRef: h,
            onMenuOpenChange: x,
            sourceQuestContent: f,
        } = e,
        g = i.useMemo(() => (0, el.tW)(n, el.fY.QUEST_BAR_HERO_IMAGE), [n]),
        v = i.useMemo(() => (0, el.tW)(n, el.fY.QUEST_BAR_HERO_VIDEO), [n]),
        {
            isActive: j,
            shouldRender: S,
            hoverHandlers: C,
            handleMenuOpen: _,
            handleMenuClose: N,
        } = (function () {
            let { fadeDurationMs: e = 400, onMenuOpenChange: t } =
                    arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                [n, s] = i.useState(!1),
                [l, r] = i.useState(!1),
                a = i.useRef(!1),
                o = i.useRef(!1),
                u = i.useRef(!1),
                c = i.useRef(t);
            i.useEffect(() => {
                c.current = t;
            }, [t]);
            let d = i.useRef(null),
                m = i.useRef(null);
            function E() {
                null != d.current && (cancelAnimationFrame(d.current), (d.current = null));
            }
            function h() {
                null != m.current && (clearTimeout(m.current), (m.current = null));
            }
            let x = i.useCallback(() => {
                    (h(),
                        r(!0),
                        E(),
                        (d.current = requestAnimationFrame(() => {
                            d.current = requestAnimationFrame(() => {
                                ((d.current = null), s(!0));
                            });
                        })));
                }, []),
                f = i.useCallback(() => {
                    (E(),
                        s(!1),
                        h(),
                        (m.current = setTimeout(() => {
                            ((m.current = null), r(!1));
                        }, e)));
                }, [e]),
                g = i.useCallback(() => {
                    a.current || o.current || u.current || f();
                }, [f]),
                v = i.useCallback(() => {
                    u.current || ((u.current = !0), c.current?.(!0));
                }, []),
                j = i.useCallback(() => {
                    (u.current && ((u.current = !1), c.current?.(!1)), g());
                }, [g]),
                S = i.useMemo(
                    () => ({
                        onMouseEnter: () => {
                            ((a.current = !0), x());
                        },
                        onMouseLeave: () => {
                            ((a.current = !1), g());
                        },
                        onFocus: () => {
                            ((o.current = !0), x());
                        },
                        onBlur: () => {
                            ((o.current = !1), g());
                        },
                    }),
                    [x, g],
                );
            return (
                i.useEffect(
                    () => () => {
                        (E(), h(), u.current && ((u.current = !1), c.current?.(!1)));
                    },
                    [],
                ),
                { isActive: n, shouldRender: l, deactivate: f, hoverHandlers: S, handleMenuOpen: v, handleMenuClose: j }
            );
        })({ onMenuOpenChange: x }),
        p = j || !0 === a,
        A = !0 === l,
        O = (0, n2.c)({ onMenuOpen: _, onMenuClose: N }),
        T = (0, nh.Pd)(n),
        I = T === nh.UA.EXPIRED || T === nh.UA.EXPIRED_CLAIMED,
        b = (0, th.E0)(n.config),
        R = (0, E.bG)([tY.A], () => tY.A.theme),
        M = R === ex.NJ8.ASH || R === ex.NJ8.DARK,
        L = R === ex.NJ8.LIGHT,
        y = i.useContext(eq.X),
        { visibilityElementRef: Q, almostVisibleInViewport: H } = (0, n5.I)(
            y?.current?.getScrollerNode() ?? null,
            m ?? !1,
        ),
        {
            handleHoverStart: U,
            handleHoverEnd: D,
            isEventWithinParent: F,
        } = (0, n4.B)({ quest: n, questContent: s, contentPosition: c, rowIndex: d, sourceQuestContent: f }),
        P = (0, tU.Lk)({
            isShareable: b,
            questId: n.id,
            trackingCtx: i.useMemo(
                () => ({ content: s, ctaContent: ei.Cy.CONTEXT_MENU_COPY_LINK, sourceQuestContent: f }),
                [s, f],
            ),
        }),
        q = (0, nd.A)(h, Q),
        k = ew.intl.formatToPlainString(ew.t.EAYZAr, { questName: n.config.messages.questName }),
        w = o()(n3.kL, { [n3.Cn]: A, [n3.DM]: p }, u),
        B = (0, r.jsx)(n8.A, {
            showPlaceholder: !H,
            width: 800,
            height: 450,
            className: n3.Tv,
            children: (0, r.jsx)(eo.N, {
                imageAsset:
                    null != g
                        ? { asset: g, assetId: "QuestTileV2", alt: ew.intl.string(ew.t.jnijWz), className: n3.Tv }
                        : void 0,
                videoAsset:
                    null != v
                        ? {
                              asset: v,
                              assetId: "QuestTileV2_heroAnimated",
                              className: o()(n3.Tv, n3.gJ, { [n3.C7]: p }),
                          }
                        : void 0,
                imageSize: { width: 800, height: 450 },
                showVideo: S || !0 === a,
            }),
        }),
        V = A
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      B,
                      (0, r.jsx)(n2.q.Provider, {
                          value: O,
                          children: (0, r.jsx)(n1, {
                              quest: n,
                              questContent: s,
                              sourceQuestContent: f,
                              isHovering: p,
                              isShareable: b,
                              onCopyShareLink: P,
                              onMenuOpen: _,
                              onMenuClose: N,
                              contentPosition: c,
                              rowIndex: d,
                          }),
                      }),
                  ],
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      B,
                      (0, r.jsx)("div", { className: o()(n3.sL, { [n3.Mq]: I }) }),
                      L
                          ? (0, r.jsx)(ed.N, {
                                theme: ex.NJ8.ONYX,
                                disableAdaptiveTheme: !0,
                                children: (e) => (0, r.jsx)("div", { className: o()(e, n3.f5) }),
                            })
                          : (0, r.jsx)("div", { className: o()(n3.f5, { [n3.kg]: M }) }),
                      (0, r.jsxs)("div", {
                          className: n3.qy,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: n3.wx,
                                  children: [
                                      (0, r.jsx)(nL, { quest: n, isHovering: p }),
                                      (0, r.jsx)("div", {
                                          className: o()(n3.$s, { [n3.rk]: p }),
                                          onClick: (e) => e.stopPropagation(),
                                          children: (0, r.jsx)(nE.C, {
                                              questContent: s,
                                              quest: n,
                                              hideLearnMore: !0,
                                              shouldShowDisclosure: !0,
                                              showShareLink: !0,
                                              sourceQuestContent: f,
                                              onOpen: _,
                                              onClose: N,
                                              children: (e) =>
                                                  (0, r.jsx)(J.D, {
                                                      ...e,
                                                      tag: "div",
                                                      className: n3.E9,
                                                      "aria-label": ew.intl.string(ew.t.DEoVWZ),
                                                      children: (0, r.jsx)(nm.MoreHorizontalIcon, {
                                                          size: "sm",
                                                          color: "currentColor",
                                                      }),
                                                  }),
                                          }),
                                      }),
                                  ],
                              }),
                              (0, r.jsx)(n2.q.Provider, {
                                  value: O,
                                  children: (0, r.jsx)(nJ, {
                                      quest: n,
                                      questContent: s,
                                      isHovering: p,
                                      sourceQuestContent: f,
                                      contentPosition: c,
                                      rowIndex: d,
                                  }),
                              }),
                          ],
                      }),
                  ],
              });
    return (0, r.jsx)("div", {
        id: (0, no.sT)(n.id, t),
        className: n3.uW,
        "data-quest-tile": A ? "featured-v2" : "standard",
        "data-quest-tile-hovered": p ? "" : void 0,
        onMouseEnter: () => {
            (C.onMouseEnter(), U());
        },
        onMouseLeave: () => {
            (C.onMouseLeave(), D());
        },
        onFocus: (e) => {
            F(e) || (C.onFocus(), U());
        },
        onBlur: (e) => {
            F(e) || (C.onBlur(), D());
        },
        children: (0, r.jsx)("article", {
            ref: q,
            "aria-label": k,
            style: { "--custom-featured-tile-width": "291px" },
            className: w,
            children: V,
        }),
    });
}
let n6 = i.memo(function (e) {
    let t = (0, E.bG)([en.A], () => (null != e.questId ? en.A.getQuest(e.questId) : void 0), [e.questId]),
        n = i.useMemo(() => (null != e.quest ? e.quest : t), [t, e.quest]);
    return null == n
        ? null
        : (0, r.jsx)(eu.R, {
              questOrQuests: n,
              questContent: e.questContent,
              questContentPosition: e.contentPosition,
              questContentRowIndex: e.rowIndex,
              trackGuildAndChannelMetadata: e.questContent === es.uF.QUESTS_EMBED,
              overrideVisibility: e.overrideVisibility,
              onImpression: e.onImpression,
              sourceQuestContent: e.sourceQuestContent,
              children: (t) => (0, r.jsx)(n7, { ...e, quest: n, impressionRef: t }),
          });
});
function n9(e) {
    let { quest: t, isFeatured: n } = e,
        { useNewTile: s } = W.aD.useConfig({ location: tv.rE.QUEST_HOME_DESKTOP });
    return (0, r.jsx)("div", {
        className: t3.x3,
        children: (0, r.jsxs)("div", {
            className: t3.B0,
            children: [
                (0, r.jsx)(em.D, {
                    className: t3.R_,
                    variant: "heading-md/semibold",
                    children: n ? ew.intl.string(ew.t.AzkvWe) : ew.intl.string(ew.t["5wnpF3"]),
                }),
                s
                    ? (0, r.jsx)(nc, {
                          children: (0, r.jsx)(n6, {
                              className: t3.d,
                              quest: t,
                              questContent: es.uF.QUEST_HOME_DESKTOP,
                              contentPosition: 0,
                              rowIndex: 0,
                              isInFeaturedSection: n,
                              sourceQuestContent: es.uF.INTERNAL_PREVIEW_TOOL,
                          }),
                      })
                    : (0, r.jsx)(no.Ay, {
                          className: t3.d,
                          quest: t,
                          questContent: es.uF.QUEST_HOME_DESKTOP,
                          contentPosition: 0,
                          rowIndex: 0,
                          sourceQuestContent: es.uF.INTERNAL_PREVIEW_TOOL,
                      }),
            ],
        }),
    });
}
var se = n(97808),
    st = n(778712),
    sn = n(87664),
    ss = n(427262),
    sl = n(198525),
    sr = n(381351);
let si = function (e) {
    let { quest: t } = e,
        [n, s] = i.useState(!1),
        l = i.useRef(null),
        a = (0, E.bG)([ta.default], () => ta.default.getCurrentUser()),
        u = ss.Ay.useName(a),
        c = (0, sn.A)(a?.id),
        d = i.useCallback(
            (e) =>
                (0, r.jsx)(sl.default, {
                    name: u,
                    quest: t,
                    memberListItemRef: l,
                    applicationStream: c,
                    ...e,
                    closePopout: () => {
                        s(!1);
                    },
                }),
            [t, c, u],
        );
    return (0, r.jsx)("div", {
        className: t3.x3,
        children: (0, r.jsxs)("div", {
            className: t3.B0,
            children: [
                (0, r.jsx)(em.D, {
                    className: sr.R_,
                    variant: "heading-md/semibold",
                    children: ew.intl.string(ew.t.jY7Zxg),
                }),
                (0, r.jsx)("div", { className: sr.$Q, children: ew.intl.string(ew.t.q3hbne) }),
                (0, r.jsx)("div", {
                    className: sr.k0,
                    children: (0, r.jsx)(tk.Y, {
                        targetElementRef: l,
                        renderPopout: d,
                        position: "bottom",
                        shouldShow: n,
                        onRequestClose: () => s(!1),
                        nudgeAlignIntoViewport: !1,
                        useRawTargetDimensions: !0,
                        animation: tk.Y.Animation.NONE,
                        spacing: -3,
                        fixed: !0,
                        scrollBehavior: "close",
                        children: () =>
                            (0, r.jsx)("div", {
                                ref: l,
                                className: o()(sr.Tn, { [sr.wH]: n }),
                                children: (0, r.jsx)(J.D, {
                                    onClick: () => s(!n),
                                    tabIndex: 0,
                                    children: (0, r.jsxs)("div", {
                                        className: sr.lm,
                                        children: [
                                            (0, r.jsx)(se.eu, {
                                                size: st._3.SIZE_32,
                                                src: a?.getAvatarURL(void 0, 32),
                                                status: ex.clD.ONLINE,
                                                "aria-label": a?.username,
                                            }),
                                            (0, r.jsxs)("div", {
                                                className: sr.Fj,
                                                children: [
                                                    (0, r.jsx)(X.E, {
                                                        variant: "text-md/semibold",
                                                        color: "text-strong",
                                                        children: u,
                                                    }),
                                                    (0, r.jsx)(X.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-muted",
                                                        children: ew.intl.string(ew.t.b9w3bO),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                }),
                            }),
                    }),
                }),
            ],
        }),
    });
};
function sa(e) {
    let { questId: t, selectedSections: n } = e,
        s = (0, E.bG)([en.A], () => en.A.getQuest(t)),
        l = (0, E.bG)([en.A], () => en.A.getFetchQuestPreviewError(t)),
        { useNewTile: i } = W.aD.useConfig({ location: tv.rE.QUEST_HOME_DESKTOP });
    if (null != l || null == s) return null;
    function a(e) {
        return null == n || 0 === n.length || n.includes(e);
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            a("quest_bar") && (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(nn, { quest: s }), (0, r.jsx)(t4, {})] }),
            a("home_card") && (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n9, { quest: s }), (0, r.jsx)(t4, {})] }),
            a("featured_tile") &&
                i &&
                (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(n9, { quest: s, isFeatured: !0 }), (0, r.jsx)(t4, {})],
                }),
            a("share_embed") &&
                (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(na, { questId: s.id }), (0, r.jsx)(t4, {})] }),
            a("channel_call_header") &&
                (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(nl, { quest: s }), (0, r.jsx)(t4, {})] }),
            a("members_list") &&
                (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(si, { quest: s }), (0, r.jsx)(t4, {})] }),
            a("activity_panel") &&
                (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(t7, { quest: s }), (0, r.jsx)(t4, {})] }),
        ],
    });
}
var so = n(875696);
function su(e) {
    let { children: t, selectedSections: n = [], onSectionSelect: s, controls: l, className: a } = e,
        u = (function () {
            let { useNewTile: e } = W.aD.useConfig({ location: tv.rE.QUEST_HOME_DESKTOP });
            return [
                { value: "quest_bar", label: ew.intl.string(ew.t.rjVPdM) },
                { value: "home_card", label: ew.intl.string(ew.t["5wnpF3"]) },
                ...(e ? [{ value: "featured_tile", label: ew.intl.string(ew.t.AzkvWe) }] : []),
                { value: "share_embed", label: ew.intl.string(ew.t["D/gSWS"]) },
                { value: "channel_call_header", label: ew.intl.string(ew.t.gWinpQ) },
                { value: "members_list", label: ew.intl.string(ew.t.wpYima) },
                { value: "activity_panel", label: ew.intl.string(ew.t.L2mlUb) },
            ];
        })(),
        c = 0 === n.length || n.length === u.length,
        d = i.useMemo(() => (c ? "all" : 1 === n.length ? n[0] : "all"), [n, c]);
    return (0, r.jsx)(t1.Ip, {
        className: o()(so.kL, a),
        orientation: "auto",
        children: (0, r.jsxs)("div", {
            className: so.qE,
            children: [
                (0, r.jsx)(em.D, {
                    variant: "heading-xl/semibold",
                    color: "text-strong",
                    children: ew.intl.string(ew.t.BDUDau),
                }),
                (0, r.jsx)("div", { className: so.pf, children: l }),
                (0, r.jsxs)(t8.V, {
                    type: "top",
                    look: "brand",
                    selectedItem: d,
                    onItemSelect: function (e) {
                        s?.(e);
                    },
                    children: [
                        (0, r.jsx)(t8.V.Item, { id: "all", children: ew.intl.string(ew.t.Y9DnPa) }),
                        u.map((e) => (0, r.jsx)(t8.V.Item, { id: e.value, children: e.label }, e.value)),
                    ],
                }),
                (0, r.jsx)("div", { className: so.tZ, children: (0, r.jsx)("div", { className: so.Qs, children: t }) }),
            ],
        }),
    });
}
let sc = function (e) {
    let { questId: t, className: n } = e,
        { questId: s, setQuestId: l } = (function (e) {
            let t = (0, u.W6)(),
                { search: n } = (0, u.zy)(),
                s = i.useMemo(() => new URLSearchParams(n).get($.L1.QUEST_ID) ?? e, [n, e]),
                l = i.useCallback(
                    (e) => {
                        if (e === s) return;
                        let n = new URLSearchParams();
                        (n.set($.L1.TAB, $.NC.PREVIEW_TOOL),
                            n.set($.L1.QUEST_ID, e),
                            t.push(`${ex.BVt.QUEST_HOME}?${n.toString()}`));
                    },
                    [t, s],
                );
            return { questId: s, setQuestId: l };
        })(t),
        a = (0, E.bG)([en.A], () => (null != s ? en.A.getQuest(s) : void 0), [s]),
        o = (0, E.bG)([en.A], () => (null != s ? en.A.getQuestLoadedViaPreview(s) : null), [s]);
    (i.useEffect(() => {
        null != s &&
            (0, tF.dQ)(s).then(() => {
                (0, tF.Gt)(s);
            });
    }, [s]),
        i.useEffect(() => {
            function e(e) {
                let { quest_id: t } = e;
                t === s && (0, tF.dQ)(s);
            }
            return (
                tD.h.subscribe("QUEST_PREVIEW_UPDATE", e),
                () => {
                    tD.h.unsubscribe("QUEST_PREVIEW_UPDATE", e);
                }
            );
        }, [s]));
    let [c, d] = i.useState([]);
    return (0, r.jsx)(su, {
        className: n,
        controls: (0, r.jsx)(t0, {
            questId: s,
            setQuestId: l,
            quest: a,
            refreshQuest: function () {
                null != s && (0, tF.dQ)(s);
            },
        }),
        selectedSections: c,
        onSectionSelect: (e) => {
            "all" === e ? d([]) : d([e]);
        },
        children: o?.id != null ? (0, r.jsx)(sa, { questId: o?.id, selectedSections: c }) : null,
    });
};
var sd = n(203879),
    sm = n(167417),
    sE = n(783977),
    sh = n(305866),
    sx = n(915089),
    sf = n(255604);
function sg(e) {
    let { children: t, id: n } = e;
    return (0, r.jsx)(X.E, { className: sf.g, color: "text-subtle", id: n, variant: "text-sm/semibold", children: t });
}
let sv = function (e) {
    let { children: t, renderPopout: n } = e,
        s = (0, sx.GV)(),
        l = i.useRef(null);
    return (0, r.jsx)(tk.Y, {
        align: "right",
        position: "bottom",
        renderPopout: (e) => (0, r.jsx)(sh.l, { className: sf.S, "aria-labelledby": s, children: n(e, s) }),
        scrollBehavior: "close",
        targetElementRef: l,
        children: (e) => t(e, l),
    });
};
var sj = n(368884);
let sS = function (e) {
    let { onChange: t, selectedFilters: n } = e,
        s = (0, $.Nb)(),
        l = i.useCallback(
            (e) => (s) => {
                let l = e.filter((e) => s.includes(e.filter));
                t([...n.filter((t) => !e.some((e) => e.filter === t.filter)), ...l]);
            },
            [n, t],
        );
    return (0, r.jsx)(sv, {
        renderPopout: (e, a) => {
            let { closePopout: o } = e;
            return (0, r.jsxs)("div", {
                children: [
                    s.map((e, t) => {
                        let s = e.options.map((e) => ({ label: (0, tm.up)(e.filter), value: e.filter })),
                            o = n.filter((t) => e.options.some((e) => e.filter === t.filter)).map((e) => e.filter),
                            u = 0 === t ? a : `${a}-${t}`;
                        return (0, r.jsxs)(
                            i.Fragment,
                            {
                                children: [
                                    t > 0 && (0, r.jsx)("hr", { className: sj.B }),
                                    (0, r.jsx)(sg, { id: u, children: e.heading }),
                                    (0, r.jsx)(sm.$, {
                                        "aria-labelledby": u,
                                        options: s,
                                        selectedValues: o,
                                        onChange: l(e.options),
                                    }),
                                ],
                            },
                            t,
                        );
                    }),
                    (0, r.jsx)("hr", { className: sj.B }),
                    (0, r.jsx)("div", {
                        className: sj.W,
                        children: (0, r.jsx)(g.$, {
                            fullWidth: !0,
                            onClick: () => {
                                (t([]), o());
                            },
                            size: "sm",
                            text: ew.intl.string(ew.t.VkKicb),
                            variant: "secondary",
                        }),
                    }),
                ],
            });
        },
        children: (e, t) =>
            (0, r.jsx)(g.$, {
                ...e,
                buttonRef: t,
                size: "sm",
                text: ew.intl.formatToPlainString(ew.t.CEfkXl, { numSelectedFilters: n.length }),
                icon: sE.R,
                iconPosition: "end",
                variant: "secondary",
            }),
    });
};
var sC = n(144228),
    s_ = n(715482);
let sN = function (e) {
    let { onChange: t, optionClassName: n, selectedSortMethod: s } = e,
        l = i.useCallback(
            (e) => {
                t(e);
            },
            [t],
        ),
        a = (0, E.bG)([_.Ay], () => _.Ay.keyboardModeEnabled),
        o = (0, $.XD)(),
        u = i.useMemo(() => o.map((e) => ({ name: e.label, value: e.value, radioBarClassName: n })), [o, n]);
    return (0, r.jsx)(sv, {
        renderPopout: (e, t) => {
            let { closePopout: n } = e;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(sg, { id: t, children: ew.intl.string(ew.t.tZXJIS) }),
                    (0, r.jsx)(sC.z, {
                        "aria-labelledby": t,
                        options: u,
                        onChange: (e) => {
                            (l(e), a || n());
                        },
                        value: s,
                    }),
                ],
            });
        },
        children: (e, t) =>
            (0, r.jsx)(g.$, {
                ...e,
                "aria-label": ew.intl.formatToPlainString(ew.t.lPlIMo, { selected: (0, tm.Js)(s) }),
                buttonRef: t,
                size: "sm",
                text: (0, tm.Js)(s),
                icon: s_.g,
                iconPosition: "end",
                variant: "secondary",
            }),
    });
};
var sp = n(710969),
    sA = n(858899);
function sO() {
    let e = i.useRef(null);
    return {
        showToast: i.useCallback((t) => {
            e.current !== t &&
                ((0, sA.P0)({ text: ew.intl.string(ew.t["5ABf1w"]), variant: "critical" }),
                eR.default.track(ex.HAw.QUEST_HOME_MOBILE_DEEP_LINK_MISSING_QUEST, { quest_id: t }),
                (e.current = t));
        }, []),
    };
}
function sT(e, t, n) {
    let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
        [l, r] = i.useState(null),
        a = i.useCallback(() => {
            var l;
            r(((l = e.current?.clientWidth), null == l ? 1 : Math.max(1, Math.min(s, Math.floor((l + n) / (t + n))))));
        }, [r, t, n, s, e]);
    return ((0, eH.g)(e, a, [t, n], { fireOnMount: !0 }), l);
}
var sI = n(768497),
    sb = n(288613);
let sR = 4 * tu.A.Millis.SECOND;
function sM(e) {
    let { children: t, tileMinWidth: n, gridGap: s } = e,
        l = i.useRef(null),
        a = sT(l, n, s);
    return (0, r.jsx)("div", {
        className: sI.kL,
        ref: l,
        style: { "--custom-min-quest-tile-width": `${n}px`, "--custom-quest-grid-gap": `${s}px` },
        children: null !== a && t(a),
    });
}
function sL(e) {
    let {
            quests: t,
            excludedQuests: n,
            isFetching: s,
            hasFetched: l,
            hasFiltersApplied: a = !1,
            onClearFilters: c,
            ref: d,
        } = e,
        m = (0, u.zy)(),
        { showToast: E } = sO(),
        h = i.useRef(null),
        [x, f] = i.useState(null),
        [g, v] = i.useState(0),
        { useNewTile: j } = W.aD.useConfig({ location: tv.rE.QUEST_HOME_DESKTOP }),
        [{ highlightAnimationProgress: S }, C] = (0, e7.z)(() => ({
            highlightAnimationProgress: 1,
            config: { duration: sR },
        })),
        _ = i.useCallback(
            (e) => {
                if ((s && 0 === t.length) || !l) return !1;
                let r = (0, sp.vc)(e, t, n);
                return null == r ? (E(e), !1) : (f(r.id), v((e) => e + 1), !0);
            },
            [t, n, s, E, l],
        );
    return (i.useImperativeHandle(d, () => ({ scrollToQuest: _ }), [_]),
    i.useLayoutEffect(() => {
        if (0 === m.hash.length) {
            h.current = null;
            return;
        }
        !s && l && m !== h.current && _(m.hash.slice(1)) && (h.current = m);
    }, [m, s, l, _]),
    i.useLayoutEffect(() => {
        if (null == x) return;
        let e = document.getElementById(`quest-tile-${x}`);
        null != e &&
            (e.scrollIntoView({ behavior: "smooth", block: "center" }),
            C({
                from: { highlightAnimationProgress: 0 },
                to: { highlightAnimationProgress: 1 },
                reset: !0,
                onRest: (e) => {
                    e.cancelled || f(null);
                },
            }));
    }, [x, g, C]),
    s && 0 === t.length)
        ? (0, r.jsx)(Z.y, { className: sI.u1 })
        : 0 === t.length
          ? (0, r.jsxs)("div", {
                className: sI.y7,
                children: [
                    (0, r.jsx)(em.D, {
                        variant: "heading-xl/semibold",
                        children: ew.intl.string(a ? ew.t.PBfFnx : ew.t.NqFP6z),
                    }),
                    (0, r.jsx)(X.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: a ? ew.intl.format(ew.t.LdYS1H, { onClick: c }) : ew.intl.string(ew.t.LhD4yH),
                    }),
                ],
            })
          : (0, r.jsx)(sM, {
                tileMinWidth: 336,
                gridGap: 24,
                children: (e) =>
                    t.map((t, n) => {
                        let s = Math.floor(n / e),
                            l = x === t.id,
                            i = null != x && !l;
                        return (0, r.jsxs)(
                            e8.animated.div,
                            {
                                className: o()({ [sb.XB]: l, [nu.y]: j }),
                                style: e2(l, i, S),
                                children: [
                                    l &&
                                        (0, r.jsx)("div", {
                                            className: sb.OA,
                                            "aria-hidden": !0,
                                            children: (0, r.jsx)("div", { className: sb.E4 }, g),
                                        }),
                                    j
                                        ? (0, r.jsx)(n6, {
                                              quest: t,
                                              questContent: es.uF.QUEST_HOME_DESKTOP,
                                              contentPosition: n,
                                              rowIndex: s,
                                              className: sI.d,
                                              sourceQuestContent: es.uF.QUEST_HOME_DESKTOP,
                                          })
                                        : (0, r.jsx)(no.Ay, {
                                              quest: t,
                                              questContent: es.uF.QUEST_HOME_DESKTOP,
                                              contentPosition: n,
                                              rowIndex: s,
                                              className: sI.d,
                                              sourceQuestContent: es.uF.QUEST_HOME_DESKTOP,
                                          }),
                                ],
                            },
                            t.id,
                        );
                    }),
            });
}
var sy = n(458518),
    sQ = n(349095);
let sH = [],
    sU = $.L1.SORT,
    sD = $.L1.FILTER;
function sF(e) {
    let t,
        n,
        s,
        l,
        { ref: a, ...o } = e,
        c = i.useRef(null),
        [d, m] =
            ((t = (0, sy.o)()),
            (n = (0, u.W6)()),
            (s = i.useRef(null)),
            (l = i.useCallback(
                (e) => {
                    let l = new URLSearchParams(s.current ?? t);
                    for (let [t, n] of Object.entries(e)) null == n ? l.delete(t) : l.set(t, n);
                    ((s.current = l),
                        n.replace({ search: l.toString() }),
                        Promise.resolve().then(() => {
                            s.current = null;
                        }));
                },
                [t, n],
            )),
            [t, l]),
        E = i.useMemo(() => {
            var e;
            return (
                (e = d.get(sU)),
                ((0, B.uJ)(e) ? null : (Object.values(tv.kL).find((t) => t === e) ?? null)) ?? tv.kL.SUGGESTED
            );
        }, [d]),
        h = i.useMemo(
            () =>
                (function (e) {
                    if ((0, B.uJ)(e)) return null;
                    let t = e
                        .split(",")
                        .map((e) => (0, tv.WQ)(e))
                        .filter(eM.Vq);
                    return t.length > 0 ? t : null;
                })(d.get(sD)) ?? sH,
            [d],
        ),
        x = i.useCallback(
            (e) => {
                m({ [sU]: e });
            },
            [m],
        ),
        f = i.useCallback(
            (e) => {
                m({
                    [sD]:
                        0 === e.length
                            ? null
                            : e
                                  .map((e) => {
                                      let { filter: t } = e;
                                      return t;
                                  })
                                  .join(","),
                });
            },
            [m],
        ),
        {
            quests: g,
            excludedQuests: v,
            isFetchingCurrentQuests: j,
            hasFetched: S,
        } = (0, $.Qh)(
            $.NC.ALL,
            i.useMemo(() => ({ sortMethod: E, filters: h, removeExpiredQuests: !0 }), [E, h]),
        ),
        C = i.useCallback(() => {
            f(sH);
        }, [f]),
        _ = i.useRef(null),
        N = i.useRef(null),
        p = (0, u.zy)(),
        A = (0, u.W6)();
    return (
        i.useEffect(() => {
            "" !== p.hash &&
                null != _.current &&
                null != N.current &&
                (E !== _.current || h !== N.current) &&
                A.replace({ ...p, hash: void 0 });
        }, [E, h, p, A]),
        i.useEffect(() => {
            _.current = E;
        }, [E]),
        i.useEffect(() => {
            N.current = h;
        }, [h]),
        (0, $.$P)({ selectedSortMethod: E, selectedFilters: h, numQuestsVisible: g.length }),
        i.useImperativeHandle(
            a,
            () => ({
                scrollToQuest: (e) => {
                    (C(),
                        x(tv.kL.SUGGESTED),
                        requestAnimationFrame(() => {
                            c.current?.scrollToQuest(e);
                        }));
                },
            }),
            [C, x],
        ),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    className: sQ.Mj,
                    children: [
                        (0, r.jsx)(em.D, { variant: "heading-lg/medium", children: ew.intl.string(ew.t.giYD00) }),
                        (0, r.jsxs)("div", {
                            className: sQ.Nf,
                            children: [
                                (0, r.jsx)(sN, { onChange: x, optionClassName: sQ.Uq, selectedSortMethod: E }),
                                (0, r.jsx)(sS, { onChange: f, selectedFilters: h }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(sL, {
                    ref: c,
                    quests: g,
                    excludedQuests: v,
                    isFetching: j,
                    hasFetched: S,
                    hasFiltersApplied: h.length > 0,
                    onClearFilters: C,
                }),
            ],
        })
    );
}
var sP = n(575593),
    sq = n(462887),
    sk = n(765671),
    sw = n(736653),
    sB = n(162232),
    sV = n(734736),
    sW = n(303136),
    sG = n(842245),
    sK = n(181713);
let sz = function (e) {
    let { className: t, isAnimated: n = !1, questName: s } = e,
        l = n ? sK.A : sK.A + "?format=webp";
    return (0, r.jsx)("div", {
        className: o()(sG.k, t),
        children: n
            ? (0, r.jsx)(sW.A, {
                  preload: "auto",
                  className: sG.L,
                  children: (0, r.jsx)("source", { src: l, type: "video/webm" }),
              })
            : (0, r.jsx)("img", { className: sG.L, src: l, alt: s }),
    });
};
var s$ = n(57718),
    sY = n(966354);
let sX = (0, i.memo)(function (e) {
    let { quest: t } = e,
        [n, s] = (0, i.useState)(!1),
        [l, a] = (0, i.useState)(24),
        [u, c] = (0, i.useState)(!1),
        d = (0, i.useRef)(null),
        m = (0, i.useRef)(null),
        h = (0, i.useRef)(null),
        x = (0, E.bG)([ta.default], () => ta.default.getCurrentUser()),
        { ref: f, height: g = 0 } = (0, sk.Ay)(),
        v = (0, sw.Ay)(),
        j = (0, $.S5)(t.userStatus?.claimedAt, { month: "numeric", day: "numeric" }),
        S = t.userStatus?.claimedTier ?? 0,
        C = t.config.rewards[S],
        _ = C?.type === e4.l.FRACTIONAL_PREMIUM,
        N = C?.type === e4.l.COLLECTIBLE,
        p = C?.type === e4.l.VIRTUAL_CURRENCY,
        A = C?.collectibleProduct?.items?.[0],
        O = A?.type === sP.R.AVATAR_DECORATION ? A : null,
        T = i.useMemo(
            () =>
                null == C
                    ? null
                    : !0 === p && t.userStatus?.orbQuantityClaimed != null
                      ? ew.intl.format(ew.t["nLXlh+"], { orbAmount: t.userStatus.orbQuantityClaimed })
                      : C.name,
            [C, p, t],
        );
    (0, sk.i4)(d, (e) => {
        let { height: t } = e;
        if (!N || null == t || null == m.current || null == d.current || null == h.current) return;
        let n = d.current.getBoundingClientRect(),
            s = m.current.getBoundingClientRect(),
            l = h.current.getBoundingClientRect();
        a((s.top - n.top - l.height) / 2);
    });
    let I = (0, sq.M)(v),
        R = i.useMemo(() => null != t.config.cosponsorMetadata, [t]),
        M = i.useMemo(() => (0, el.tW)(t, el.fY.REWARD), [t]),
        L = n ? g + 8 : 0,
        { content_position: y, row_index: Q, ...H } = (0, ei.fF)(es.uF.TROPHY_CASE_CARD);
    function U() {
        (s(!0), eR.default.track(ex.HAw.QUEST_HOVER, { quest_id: t.id, ...H }));
    }
    function D() {
        s(!1);
    }
    function F(e) {
        (c(!0), eR.default.track(ex.HAw.QUEST_ASSET_LOADING_FAILURE, { source: e, asset_id: e, quest_id: t.id }));
    }
    return null == C || u
        ? null
        : (0, r.jsx)(e6.vN, {
              children: (0, r.jsxs)("div", {
                  ref: d,
                  tabIndex: 0,
                  onFocus: U,
                  onBlur: D,
                  onMouseEnter: U,
                  onMouseLeave: D,
                  className: o()(sY.kL, { [sY.yo]: n }),
                  children: [
                      null != x &&
                          N &&
                          null != O &&
                          (0, r.jsx)("div", {
                              ref: h,
                              className: sY.FX,
                              style: { top: l },
                              children: (0, r.jsx)(sB.A, {
                                  avatarDecorationOverride: O,
                                  user: x,
                                  guildId: null,
                                  animateOnHover: !n,
                              }),
                          }),
                      _
                          ? (0, r.jsx)(sV.A, { className: sY.Sl })
                          : p
                            ? (0, r.jsx)(sz, {
                                  className: sY.Sl,
                                  isAnimated: n,
                                  questName: t.config.messages.questName,
                              })
                            : M.isAnimated
                              ? (0, r.jsx)(b.A, {
                                    className: sY.JU,
                                    autoPlay: !1,
                                    children: (0, r.jsx)("source", {
                                        src: M.url,
                                        type: M.mimetype ?? void 0,
                                        onError: () => F(M.url),
                                    }),
                                })
                              : (0, r.jsx)("img", {
                                    className: sY.Sl,
                                    src: M.url,
                                    alt: t.config.messages.questName,
                                    onError: () => F(M.url),
                                }),
                      (0, r.jsx)("div", { className: o()(sY.Lw, { [sY.en]: I, [sY.So]: !I }) }),
                      (0, r.jsx)("div", {
                          ref: m,
                          className: sY.r$,
                          style: { transform: `translateY(-${L}px)` },
                          children: (0, r.jsx)(s$.Ay, {
                              logotypeClassName: o()(sY.wm, { [sY.A0]: R }),
                              quest: t,
                              withGameTile: !1,
                          }),
                      }),
                      (0, r.jsxs)("div", {
                          ref: f,
                          className: sY.zH,
                          children: [
                              (0, r.jsx)(em.D, {
                                  className: sY.DD,
                                  variant: "heading-md/semibold",
                                  color: "text-overlay-light",
                                  children: ew.intl.format(ew.t.EAYZAr, { questName: t.config.messages.questName }),
                              }),
                              (0, r.jsx)(X.E, {
                                  variant: "text-sm/medium",
                                  color: I ? "text-muted" : "text-overlay-light",
                                  style: { opacity: I ? 1 : 0.75 },
                                  children: ew.intl.format(ew.t["kXVcV+"], { reward: T, claimedDate: j }),
                              }),
                          ],
                      }),
                  ],
              }),
          });
});
var sJ = n(396478);
function sZ(e) {
    let { onClick: t } = e,
        s = (0, sw.Ay)();
    return (0, r.jsxs)(sJ.pp, {
        theme: s,
        children: [
            (0, r.jsx)(sJ.G8, { lightSrc: n(826223), darkSrc: n(317017), width: 415, height: 200 }),
            (0, r.jsx)(sJ.SG, { note: ew.intl.format(ew.t.Pv8u2u, { onClick: t }) }),
        ],
    });
}
var s0 = n(178093);
function s1(e) {
    let { onSelectTab: t, className: n } = e,
        { claimedQuests: s, isFetchingClaimedQuests: l } = (0, $.Iq)();
    return l && 0 === s.length
        ? (0, r.jsx)(Z.y, { className: s0.u })
        : 0 === s.length
          ? (0, r.jsx)(sZ, { onClick: () => t($.NC.ALL) })
          : (0, r.jsx)("div", {
                className: o()(s0.U, n),
                children: [...s]
                    .sort((e, t) => (t.userStatus?.claimedAt ?? "").localeCompare(e.userStatus?.claimedAt ?? ""))
                    .map((e) => (0, r.jsx)(sX, { quest: e }, e.id)),
            });
}
var s8 = n(192308);
let s2 = i.createContext({
    targetQuestId: null,
    targetSectionIdentifier: null,
    highlightCount: null,
    highlightAnimationProgress: null,
});
function s4(e) {
    let { children: t, sectionIdentifier: n, questId: s, duplicate: l } = e,
        {
            targetQuestId: a,
            targetSectionIdentifier: u,
            highlightCount: c,
            highlightAnimationProgress: d,
        } = i.useContext(s2),
        m = a === s && u === n && !l,
        E = l || (null != a && (a !== s || u !== n)),
        { useNewTile: h } = W.aD.useConfig({ location: tv.rE.QUEST_HOME_DESKTOP }),
        x = i.useMemo(() => e2(m, E, d), [m, E, d]);
    return (0, r.jsxs)(e8.animated.div, {
        [e$]: "",
        className: o()({ [sb.XB]: m, [sb.FR]: h, [nu.y]: h }),
        style: x,
        children: [
            m &&
                (0, r.jsx)("div", {
                    className: sb.OA,
                    "aria-hidden": !0,
                    children: (0, r.jsx)("div", { className: sb.E4 }, c),
                }),
            t,
        ],
    });
}
var s5 = n(333007),
    s3 = n(765548),
    s7 = n(897833);
function s6(e) {
    var t, n;
    let { containerWidth: s, questIds: l, sectionIdentifier: a, ref: o } = e,
        u = (0, eb.C)(),
        { variant: c } = W.Mk.useConfig({ location: tv.rE.QUEST_HOME_DESKTOP }),
        d = c === W.d.LARGE_MASK_MARGIN,
        m = l.length >= 2,
        E = i.useRef(null),
        h = i.useRef(null),
        x = i.useRef(null),
        f = (0, s8.useHasAnyModalOpen)(),
        { targetQuestId: g, targetSectionIdentifier: v } = i.useContext(s2),
        j = null != g && v === a,
        [S, C] = i.useState(!1),
        [_, N] = i.useState(!1),
        p = i.useCallback((e) => {
            N(e);
        }, []),
        {
            rotation: A,
            activeSlotIndex: O,
            scrollStart: T,
            isRepositionScroll: I,
            hasFocusWithin: b,
        } = (function (e) {
            let { numQuests: t, ready: n, rootRef: s, scrollerRef: l } = e,
                [r, a] = i.useState(-2),
                [o, u] = i.useState(0),
                [c, d] = i.useState(!1),
                m = i.useRef(!1),
                E = i.useRef(0),
                h = i.useRef(null),
                x = (0, s3.A)(() => {
                    let e = l.current?.getScrollerNode(),
                        t = s.current;
                    if (null == e || null == t) return null;
                    let n = Array.from(e.querySelectorAll(eY));
                    if (n.length < 4) return null;
                    let r = n[1].offsetLeft - n[0].offsetLeft;
                    return r <= 0 ? null : { node: e, stride: r, rest: eK(e, n[2], t) };
                }),
                f = (0, s3.A)(() => {
                    let e = h.current;
                    h.current = null;
                    let t = l.current?.getScrollerNode()?.scrollLeft;
                    return null != e && null != t && 1 > Math.abs(t - e);
                }),
                g = (0, s3.A)(() => {
                    ((m.current = !1), 0 !== E.current && window.clearTimeout(E.current), (E.current = 0));
                }),
                v = (0, s3.A)(() => {
                    if (m.current) return;
                    let e = x();
                    if (null == e) return;
                    let t = e.node.scrollLeft - e.rest;
                    if (!(1 > Math.abs(t))) {
                        var n, s, l;
                        ((n = e.node),
                            (s = Math.round(t / e.stride)),
                            (l = e.rest),
                            (0, s5.flushSync)(() => {
                                (0 !== s && a((e) => e + s), 0 !== o && u(0));
                            }),
                            (h.current = l),
                            n.scrollTo({ left: l, behavior: "instant" }));
                    }
                }),
                j = (0, s3.A)(() => {
                    m.current && (g(), v());
                }),
                S = (0, s3.A)(
                    (e) =>
                        !!n &&
                        !m.current &&
                        ((0, s5.flushSync)(() => {
                            u(e);
                        }),
                        (m.current = !0),
                        (E.current = window.setTimeout(j, 1500)),
                        !0),
                );
            return (
                i.useLayoutEffect(() => {
                    if (!n) return;
                    let e = x();
                    null != e && ((h.current = e.rest), e.node.scrollTo({ left: e.rest, behavior: "instant" }));
                }, [x, t, n]),
                i.useEffect(() => {
                    let e = l.current?.getScrollerNode();
                    if (null == e || !n) return;
                    function t() {
                        d(!0);
                    }
                    function s(t) {
                        ((0, e3.vq)(t.relatedTarget, Node) && e.contains(t.relatedTarget)) || (d(!1), v());
                    }
                    function r() {
                        if (m.current) return void j();
                        let t = e.ownerDocument.activeElement;
                        ((0, e3.vq)(t) && e.contains(t) && t.matches(":focus-visible")) || v();
                    }
                    let i = new ResizeObserver(() => {
                        g();
                    });
                    return (
                        e.addEventListener("focusin", t),
                        e.addEventListener("focusout", s),
                        e.addEventListener("scrollend", r),
                        i.observe(e),
                        () => {
                            (i.disconnect(),
                                e.removeEventListener("scrollend", r),
                                e.removeEventListener("focusin", t),
                                e.removeEventListener("focusout", s),
                                g());
                        }
                    );
                }, [g, j, t, n, l, v]),
                {
                    rotation: r,
                    activeSlotIndex: t > 1 ? 2 + o : 0,
                    scrollStart: S,
                    isRepositionScroll: f,
                    hasFocusWithin: c,
                }
            );
        })({ numQuests: l.length, ready: null != s && m, rootRef: E, scrollerRef: h }),
        R = S || b || _,
        M = null == s ? 0 : ((t = s + 50), (n = l.length) < 2 ? n : Math.ceil(t / 295) + 2 + 1),
        L = i.useMemo(() => {
            let e = [],
                t = new Set();
            for (let n = 0; n < M; n++) {
                let s = A + n,
                    r = ((s % l.length) + l.length) % l.length;
                (e.push({ questId: l[r], questIndex: r, key: `${l[r]}-${s}`, isDuplicate: t.has(l[r]) }), t.add(l[r]));
            }
            return e;
        }, [l, A, M]),
        y = i.useCallback(
            (e) => {
                let t = L.findIndex((t) => t.questId === e);
                -1 !== t &&
                    (E.current?.scrollIntoView({ block: "center", behavior: "smooth" }),
                    x.current?.scrollBySteps(t - 2));
            },
            [L],
        ),
        Q = i.useCallback(
            (e) => {
                let {
                    scrollingType: t,
                    scrollWindowStartIndex: n,
                    scrollWindowEndIndex: s,
                    scrollWindowSize: r,
                    scrollingDirection: i,
                } = e;
                I() ||
                    (0, eh.kO)({
                        scrollingType: t,
                        scrollingDirection: i,
                        scrollWindowStartIndex: n,
                        scrollWindowEndIndex: s,
                        scrollWindowSize: r,
                        questContent: es.uF.QUEST_HOME_FEATURED_SECTION,
                        carouselSize: l.length,
                    });
            },
            [I, l.length],
        );
    return (
        i.useImperativeHandle(o, () => ({ scrollToQuest: y }), [y]),
        (0, r.jsxs)("div", {
            ref: E,
            className: s7.I6,
            children: [
                (0, r.jsx)("div", { className: s7.Cz, "aria-hidden": !0 }),
                (0, r.jsx)(e1, {
                    maskWidth: eW(u),
                    overflowAmount: 25,
                    disableUserScroll: m,
                    groupedArrows: m,
                    onScrollStart: T,
                    onScrollEnd: Q,
                    autoCycle: m && !(S || _ || b || f || j),
                    singleStep: !0,
                    scrollerRef: h,
                    controlRef: x,
                    maskMarginMultiplier: d ? 2 : 0.75,
                    children: (0, r.jsx)("div", {
                        className: s7.FO,
                        style: { "--custom-featured-tile-gap": "4px" },
                        onPointerEnter: () => C(!0),
                        onPointerLeave: () => C(!1),
                        children: L.map((e, t) =>
                            (0, r.jsx)(
                                s4,
                                {
                                    questId: e.questId,
                                    duplicate: e.isDuplicate,
                                    sectionIdentifier: a,
                                    children: (0, r.jsx)(n6, {
                                        isInFeaturedSection: !0,
                                        isActive: t === O && !R,
                                        onMenuOpenChange: p,
                                        questId: e.questId,
                                        questContent: es.uF.QUEST_HOME_FEATURED_SECTION,
                                        contentPosition: e.questIndex,
                                        rowIndex: 0,
                                        sourceQuestContent: es.uF.QUEST_HOME_FEATURED_SECTION,
                                        sectionIdentifier: a,
                                    }),
                                },
                                e.key,
                            ),
                        ),
                    }),
                }),
            ],
        })
    );
}
var s9 = n(915655);
function le(e) {
    let { className: t, ...n } = e;
    return (0, r.jsxs)("div", {
        className: o()(s9.kL, t),
        ...n,
        children: [
            (0, r.jsx)("div", { className: o()(tA.m, s9.Gf), "aria-hidden": !0 }),
            (0, r.jsx)("div", {
                className: s9.Jm,
                "aria-hidden": !0,
                children: Array.from({ length: 6 }).map((e, t) =>
                    (0, r.jsx)("div", { className: o()(tA.m, s9.Vr) }, t),
                ),
            }),
        ],
    });
}
var lt = n(384343);
function ln(e) {
    let { questContent: t, questIds: n, rowIndex: s, sectionIdentifier: l } = e,
        { targetSectionIdentifier: a } = i.useContext(s2),
        { useNewTile: o } = W.aD.useConfig({ location: tv.rE.QUEST_HOME_DESKTOP }),
        { variant: u } = W.Mk.useConfig({ location: tv.rE.QUEST_HOME_DESKTOP }),
        c = (0, eb.C)(),
        d = a === l,
        m = i.useCallback(
            (e) => {
                let {
                    scrollingType: s,
                    scrollWindowStartIndex: l,
                    scrollWindowEndIndex: r,
                    scrollWindowSize: i,
                    scrollingDirection: a,
                } = e;
                (0, eh.kO)({
                    scrollingType: d ? ei.pk.AUTO : s,
                    scrollingDirection: a,
                    scrollWindowStartIndex: l,
                    scrollWindowEndIndex: r,
                    scrollWindowSize: i,
                    questContent: t,
                    carouselSize: n.length,
                });
            },
            [t, n.length, d],
        ),
        E = u === W.d.LARGE_MASK_MARGIN;
    return (0, r.jsx)(e1, {
        maskWidth: eW(c),
        overflowAmount: 25,
        maskMarginMultiplier: E ? 2 : 0.75,
        onScrollEnd: m,
        children: (0, r.jsxs)("div", {
            style: {
                "--custom-min-quest-tile-width": `${eG(c, E)}px`,
                "--custom-extra-spacing-placeholder-size": "5px",
                "--custom-quest-tile-border-radius": `${o ? "var(--radius-xl)" : "10px"}`,
            },
            className: lt.FO,
            children: [
                n.map((e, n) =>
                    (0, r.jsx)(
                        s4,
                        {
                            questId: e,
                            sectionIdentifier: l,
                            children: o
                                ? (0, r.jsx)(n6, {
                                      questId: e,
                                      questContent: t,
                                      contentPosition: n,
                                      rowIndex: s,
                                      className: lt.d,
                                      sourceQuestContent: t,
                                      sectionIdentifier: l,
                                  })
                                : (0, r.jsx)(no.Ay, {
                                      questId: e,
                                      isInFeaturedSection: l === eB.FEATURED,
                                      questContent: t,
                                      contentPosition: n,
                                      rowIndex: s,
                                      className: lt.d,
                                      sourceQuestContent: t,
                                      sectionIdentifier: l,
                                  }),
                        },
                        `animated-wrapper-${e}-${l}`,
                    ),
                ),
                (0, r.jsx)("div", { className: lt.fu }),
            ],
        }),
    });
}
var ls = n(958538);
let ll = tu.A.Millis.WEEK;
function lr() {
    let e = en.A.quests;
    if (0 === en.A.lastFetchedCurrentQuests || 0 === e.size) return !1;
    let t = null;
    for (let n of s.keys()) {
        let l = e.get(n);
        (null == l || (0, np.Ic)(l)) && (null == t && (t = new Map(s)), t.delete(n));
    }
    return null != t && ((s = t), !0);
}
class li extends E.Ay.PersistedStore {
    static displayName = "DiscoveredQuestStore";
    static persistKey = "DiscoveredQuestStore";
    initialize(e) {
        (this.waitFor(en.A), (s = new Map()));
        let t = !1;
        if (null != e) {
            let n = Date.now() - ll;
            for (let [l, r] of Object.entries(e.discoveredAtByQuestId)) {
                if (null == r || null == l || new Date(r).getTime() < n) {
                    t = !0;
                    continue;
                }
                s.set(l, r);
            }
        }
        return (this.syncWith([en.A], lr), t);
    }
    getState() {
        let e = {};
        for (let [t, n] of s) e[t] = n;
        return { discoveredAtByQuestId: e };
    }
    getDiscoveredAtByQuestId() {
        return s;
    }
}
let la = new li(tD.h, {
    QUESTS_MARK_DISCOVERED: function (e) {
        if (null == en.A.getQuest(e.questId)) return !1;
        let t = new Map(s);
        (t.set(e.questId, new Date().toISOString()), (s = t));
    },
});
function lo(e, t) {
    if (e === t) return !0;
    let n = new Set(e),
        s = new Set(t);
    return n.size === s.size && [...n].every((e) => s.has(e));
}
let lu = function () {
    let e = (0, ss.Gn)(),
        t = (0, $.Cv)(),
        n = (0, E.bG)([en.A], () => en.A.lastFetchedCurrentQuests > 0),
        { quests: s, isFetchingCurrentQuests: l } = (0, $.Qh)($.NC.ALL, {
            sortMethod: tv.kL.SUGGESTED,
            filters: [],
            removeExpiredQuests: !e,
        }),
        r = (0, ls.A)(
            () =>
                s.map((e) => {
                    let { id: t } = e;
                    return t;
                }),
            s.map((e) => {
                let { id: t } = e;
                return t;
            }),
            lo,
        ),
        a = (0, tU.T2)(),
        o = (0, E.bG)([la], () => la.getDiscoveredAtByQuestId(), []),
        u = i.useMemo(() => (l || !n) && 0 === r.length, [l, n, r.length]),
        { useNewTile: c } = W.aD.useConfig({ location: tv.rE.QUEST_HOME_DESKTOP }),
        d = i.useMemo(
            () =>
                u
                    ? []
                    : (function (e) {
                          let {
                                  allQuestIds: t,
                                  hero: n,
                                  discoveredAtByQuestId: s,
                                  isStaff: l,
                                  isPreviewerOnAnyQuest: r,
                                  useNewTile: i = !1,
                              } = e,
                              a = new Map(),
                              o = new Set();
                          function u(e) {
                              if (o.has(e)) return;
                              let t = en.A.getQuestConfig(e);
                              if (null == t) return;
                              let u = (function (e) {
                                  let {
                                          quest: t,
                                          hero: n,
                                          discoveredAtByQuestId: s,
                                          questIdsBySectionIdentifier: l,
                                          isStaff: r,
                                          isPreviewerOnAnyQuest: i,
                                          useNewTile: a = !1,
                                      } = e,
                                      { userStatus: o, preview: u } = en.A.getQuest(t.id) ?? {},
                                      c = [],
                                      d =
                                          null != o &&
                                          null != o.enrolledAt &&
                                          null != o.completedAt &&
                                          null == o.claimedAt;
                                  if ((0, np.kd)(t) && !d) return r ? [eB.EXPIRED] : null;
                                  if (
                                      (s.has(t.id) && c.push(eB.DISCOVERED),
                                      i && !0 === u && c.push(eB.PREVIEW),
                                      null != o && null != o.enrolledAt && null == o.claimedAt)
                                  )
                                      return [...c, eB.IN_PROGRESS];
                                  let m = !nb(t);
                                  return m && null != n && (0, th.I0)(n, t.id) && nR(eB.FEATURED, l)
                                      ? [...c, eB.FEATURED]
                                      : new Date(t.expiresAt).valueOf() <= Date.now() + (a ? nO : nA)
                                        ? [...c, eB.ENDING_SOON]
                                        : m && nR(eB.FEATURED, l)
                                          ? [...c, eB.FEATURED]
                                          : (0, tE.ks)(t)
                                            ? [...c, eB.ORB]
                                            : [...c, eB.SPECIAL_QUESTS];
                              })({
                                  quest: t,
                                  hero: n,
                                  discoveredAtByQuestId: s,
                                  questIdsBySectionIdentifier: a,
                                  isStaff: l,
                                  isPreviewerOnAnyQuest: r,
                                  useNewTile: i,
                              });
                              null != u &&
                                  (u.forEach((t) => {
                                      a.set(t, [...(a.get(t) ?? []), e]);
                                  }),
                                  o.add(e));
                          }
                          return (
                              n?.questIds?.forEach((e) => {
                                  let t = en.A.getQuestConfig(e);
                                  null == t || nb(t) || u(e);
                              }),
                              t.forEach((e) => u(e)),
                              eV
                                  .map((e) => {
                                      let t = nI?.[e.identifier];
                                      if (null != e.shouldShowFn && !e.shouldShowFn(l, r))
                                          return { ...e, questIds: [] };
                                      let n =
                                          null != t
                                              ? t(a.get(e.identifier) ?? [], { discoveredAtByQuestId: s })
                                              : (a.get(e.identifier) ?? []);
                                      return { ...e, questIds: n };
                                  })
                                  .filter((e) => {
                                      let { questIds: t } = e;
                                      return t.length > 0;
                                  })
                          );
                      })({
                          allQuestIds: r,
                          hero: a,
                          discoveredAtByQuestId: o,
                          isStaff: e,
                          isPreviewerOnAnyQuest: t,
                          useNewTile: c,
                      }),
            [r, a, o, u, e, t, c],
        ),
        m = i.useCallback((e) => d.find((t) => t.questIds.includes(e))?.identifier ?? null, [d]);
    return { sections: d, isFetchingCurrentQuests: u, getSectionIdentifierForTargetedQuest: m };
};
var lc = n(113775);
let ld = {
        [eB.FEATURED]: es.uF.QUEST_HOME_FEATURED_SECTION,
        [eB.IN_PROGRESS]: es.uF.QUEST_HOME_IN_PROGRESS_SECTION,
        [eB.ENDING_SOON]: es.uF.QUEST_HOME_ENDING_SOON_SECTION,
        [eB.ORB]: es.uF.QUEST_HOME_ORB_SECTION,
        [eB.DISCOVERED]: es.uF.QUEST_HOME_DISCOVERED_SECTION,
        [eB.EXPIRED]: es.uF.QUEST_HOME_EXPIRED_SECTION,
        [eB.PREVIEW]: es.uF.QUEST_HOME_PREVIEW_SECTION,
        [eB.SPECIAL_QUESTS]: es.uF.QUEST_HOME_SPECIAL_QUESTS_SECTION,
    },
    lm = 4 * tu.A.Millis.SECOND;
function lE(e) {
    let { deepLinkedQuestId: t, isLoadingQuestHomeHero: n, className: s, ref: l } = e,
        a = (0, u.zy)(),
        { useNewTile: c, useNewFeaturedTiles: d } = W.aD.useConfig({ location: tv.rE.QUEST_HOME_DESKTOP }),
        { sections: m, isFetchingCurrentQuests: E, getSectionIdentifierForTargetedQuest: h } = lu(),
        x = i.useRef(null),
        f = i.useRef(null),
        { showToast: g } = sO(),
        [v, j] = i.useState(null),
        [S, C] = i.useState(null),
        [_, N] = i.useState(0),
        [p, A] = i.useState(null),
        O = i.useRef(null),
        T = i.useCallback(
            (e) => {
                A(e.contentRect.width);
            },
            [A],
        );
    (0, eH.g)(x, T, [T], { fireOnMount: !0 });
    let [{ highlightAnimationProgress: I }, b] = (0, e7.z)(() => ({
            highlightAnimationProgress: 1,
            config: { duration: lm },
        })),
        R = i.useCallback(
            (e, t) => {
                if (null == e || null == p || E || n) return !1;
                t && (0, tF.sB)(e);
                let s = h(e),
                    l = !0 === t && s !== eB.FEATURED ? eB.DISCOVERED : s;
                if (null == s) return (g(e), !1);
                let r = document.getElementById((0, no.sT)(e, l ?? void 0));
                return (
                    null != r &&
                    (j(e),
                    C(l),
                    N((e) => e + 1),
                    l === eB.FEATURED && c && d
                        ? f.current?.scrollToQuest(e)
                        : r.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" }),
                    b({
                        from: { highlightAnimationProgress: 0 },
                        to: { highlightAnimationProgress: 1 },
                        reset: !0,
                        onRest: (e) => {
                            e.cancelled || (j(null), C(null));
                        },
                    }),
                    !0)
                );
            },
            [c, d, j, N, b, E, n, g, p, h],
        );
    (i.useImperativeHandle(l, () => ({ scrollToQuest: R }), [R]),
        i.useLayoutEffect(() => {
            if (null == t) {
                O.current = null;
                return;
            }
            O.current !== a && R(t, !0) && (O.current = a);
        }, [a, t, R]));
    let M = i.useMemo(
        () => ({ targetQuestId: v, targetSectionIdentifier: S, highlightCount: _, highlightAnimationProgress: I }),
        [v, S, _, I],
    );
    return (0, r.jsx)(s2.Provider, {
        value: M,
        children: (0, r.jsx)("div", {
            className: o()(lc.kL, s),
            ref: x,
            children: E
                ? (0, r.jsx)(le, { role: "status", "aria-label": ew.intl.string(ew.t.ZTNur7) })
                : m.length > 0
                  ? m.map((e, t) => {
                        let { identifier: n, questIds: s, title: l } = e;
                        return (0, r.jsxs)(
                            "div",
                            {
                                className: lc.p9,
                                children: [
                                    (0, r.jsx)(em.D, {
                                        variant: "heading-lg/semibold",
                                        style: { "--custom-section-title-inset": "2px" },
                                        className: lc.Gf,
                                        children: ew.intl.string(l),
                                    }),
                                    n === eB.FEATURED && c && d
                                        ? (0, r.jsx)(s6, {
                                              ref: f,
                                              questIds: s,
                                              containerWidth: p,
                                              sectionIdentifier: n,
                                          })
                                        : (0, r.jsx)(ln, {
                                              questIds: s,
                                              rowIndex: t,
                                              sectionIdentifier: n,
                                              questContent: ld[n],
                                          }),
                                ],
                            },
                            n,
                        );
                    })
                  : (0, r.jsxs)("div", {
                        className: lc.y7,
                        children: [
                            (0, r.jsx)(em.D, { variant: "heading-xl/semibold", children: ew.intl.string(ew.t.NqFP6z) }),
                            (0, r.jsx)(X.E, {
                                variant: "text-md/normal",
                                color: "text-subtle",
                                children: ew.intl.string(ew.t.LhD4yH),
                            }),
                        ],
                    }),
        }),
    });
}
var lh = n(196765),
    lx = n(121894),
    lf = n(851936);
let lg = (0, lh.v)((e, t) => ({
    startTime: performance.now(),
    elapsed: 0,
    lastOutputLogTime: -5e3,
    logger: null,
    registerAssetLoad: () => {
        let n = t().logger ?? (0, lf.L)({ location: tv.rE.QUEST_HOME_DESKTOP });
        if (n.info === tj.tE || t().elapsed >= 6e4) return;
        let s = performance.now() - t().startTime;
        s > 6e4 && (s = 6e4);
        let l = { elapsed: s };
        (s - t().lastOutputLogTime > 1e3 &&
            (n.info(`QuestHome asset loading duration so far: ${s}ms`), (l.lastOutputLogTime = s)),
            null == t().logger && (l.logger = n),
            (0, lx.r)(() => e(l)));
    },
}));
var lv = n(516226),
    lj = n(613956),
    lS = n(604880),
    lC = n(318808);
function l_(e) {
    let { adCreativeIds: t } = e,
        n = i.useCallback(() => (0, nP.zg)(t), [t]);
    return (0, r.jsxs)("div", {
        className: lj.MY,
        children: [
            (0, r.jsx)("img", { className: lj.Bg, src: lC.Ay, alt: "" }),
            (0, r.jsx)("div", { className: lj.r$, children: (0, r.jsx)("img", { src: lS, alt: "" }) }),
            (0, r.jsxs)("div", {
                className: lj.Nr,
                children: [
                    (0, r.jsx)(em.D, {
                        variant: "heading-lg/semibold",
                        color: "text-default",
                        className: lj.ky,
                        children: ew.intl.string(ew.t.GXmn57),
                    }),
                    (0, r.jsx)(X.E, {
                        variant: "text-md/normal",
                        className: lj.G3,
                        children: ew.intl.string(ew.t.bWuKqh),
                    }),
                    (0, r.jsx)(g.$, {
                        variant: "primary",
                        text: ew.intl.string(ew.t.UQvCf7),
                        fullWidth: !0,
                        onClick: n,
                    }),
                ],
            }),
        ],
    });
}
var lN = n(397613),
    lp = n(215130);
let lA = function (e) {
    let { matchingQuestIds: t } = e,
        n = (0, eb.C)(),
        { useNewTile: s } = W.aD.useConfig({ location: tv.rE.QUEST_HOME_DESKTOP }),
        { variant: l } = W.Mk.useConfig({ location: tv.rE.QUEST_HOME_DESKTOP }),
        a = i.useRef(null),
        u = l === W.d.LARGE_MASK_MARGIN,
        c = s ? 12 : 20,
        d = sT(a, eG(n, u), c, 3);
    return (0, r.jsxs)(j.B, {
        gap: 16,
        direction: "vertical",
        align: "start",
        className: lp.kL,
        ref: a,
        children: [
            (0, r.jsxs)(em.D, {
                variant: "heading-lg/medium",
                children: [ew.intl.string(ew.t.giYD00), " (", t.length, ")"],
            }),
            0 === t.length
                ? (0, r.jsxs)(j.B, {
                      gap: 16,
                      direction: "vertical",
                      align: "center",
                      className: lp.y7,
                      children: [
                          (0, r.jsx)(lN.e, { alt: ew.intl.string(ew.t["Xe+fJM"]) }),
                          (0, r.jsxs)(j.B, {
                              direction: "vertical",
                              align: "center",
                              children: [
                                  (0, r.jsx)(em.D, {
                                      variant: "heading-lg/medium",
                                      children: ew.intl.string(ew.t["Xe+fJM"]),
                                  }),
                                  (0, r.jsx)(em.D, {
                                      variant: "heading-sm/medium",
                                      children: ew.intl.string(ew.t["Tc/Ndl"]),
                                  }),
                              ],
                          }),
                      ],
                  })
                : (0, r.jsx)("div", {
                      className: lp.Vg,
                      style: {
                          "--custom-quest-search-tile-min-width": `${eG(n, u)}px`,
                          "--custom-quest-grid-gap": `${c}px`,
                      },
                      children:
                          null !== d &&
                          t.map((e, t) =>
                              s
                                  ? (0, r.jsx)(
                                        nc,
                                        {
                                            children: (0, r.jsx)(n6, {
                                                eagerLoadAssets: !0,
                                                questId: e,
                                                questContent: es.uF.QUEST_HOME_SEARCH_RESULT,
                                                contentPosition: t,
                                                rowIndex: Math.floor(t / d),
                                                className: o()(lp.d, lp.hS),
                                                sourceQuestContent: es.uF.QUEST_HOME_SEARCH_RESULT,
                                            }),
                                        },
                                        e,
                                    )
                                  : (0, r.jsx)(
                                        no.Ay,
                                        {
                                            eagerLoadAssets: !0,
                                            questId: e,
                                            questContent: es.uF.QUEST_HOME_SEARCH_RESULT,
                                            contentPosition: t,
                                            rowIndex: Math.floor(t / d),
                                            className: lp.d,
                                            sourceQuestContent: es.uF.QUEST_HOME_SEARCH_RESULT,
                                        },
                                        e,
                                    ),
                          ),
                  }),
        ],
    });
};
var lO = n(649852),
    lT = n.n(lO),
    lI = n(379078),
    lb = n(704554),
    lR = n(823784);
let lM = {
        searchType: lI.n.FUZZY,
        searchStringGenerator: function (e) {
            return [
                e.messages.questName.toLowerCase(),
                e.messages.gameTitle.toLowerCase(),
                e.messages.gamePublisher.toLowerCase(),
            ].filter(eM.Vq);
        },
        sortType: lI.r.JARO_WINKLER,
        throttleMs: 200,
    },
    lL = function () {
        let [e, t] = i.useState(""),
            [n, s] = i.useState(null),
            l = (0, E.yK)([en.A], () =>
                (0, $.mn)(Array.from(en.A.quests.values()), { sortMethod: tv.kL.SUGGESTED }).map((e) => e.config),
            ),
            r = e.trim().toLowerCase(),
            a = "" !== r,
            o = i.useMemo(() => lT()(eh.gr, 1e3), []),
            u = i.useCallback(() => {
                o.cancel();
                let e = (0, lR.tv)();
                (null != e &&
                    (0, eh.XH)({ searchSessionId: e.uuid, searchSessionDurationMs: Date.now() - e.createdAtTimestamp }),
                    (0, lR.l6)());
            }, [o]),
            c = i.useCallback(() => {
                (u(), t(""));
            }, [u]);
        i.useEffect(
            () => () => {
                u();
            },
            [u],
        );
        let d = i.useCallback(
            (e) => {
                if (
                    (s(
                        a
                            ? e
                                  .map((e) => {
                                      let { id: t } = e;
                                      return t;
                                  })
                                  .filter(eM.Vq)
                            : null,
                    ),
                    a)
                ) {
                    let { searchSession: t, isNew: n } = (0, lR.$N)();
                    (n && (0, eh.OQ)({ searchSessionId: t.uuid }),
                        o({
                            searchSessionId: t.uuid,
                            searchQuery: r,
                            searchQueryLength: r.length,
                            resultsCount: e.length,
                            hasResults: e.length > 0,
                        }));
                } else c();
            },
            [a, r, o, c],
        );
        return ((0, lb.RT)(r, l, d, lM), { matchingQuestIds: n, query: e, setQuery: t, onSearchClose: c });
    };
var ly = n(631001),
    lQ = n(758836),
    lH = n(613057),
    lU = n(620241);
let lD = i.createContext({});
function lF(e) {
    let { banner: t, children: n, header: s, withFullBleedBanner: l = !1 } = e,
        { onScroll: a, scrollerRef: o } = i.useContext(lD);
    return (0, r.jsxs)(eq.X.Provider, {
        value: o,
        children: [
            s,
            (0, r.jsxs)(D.A, {
                onScroll: a,
                ref: o,
                children: [
                    l && t,
                    (0, r.jsxs)(H.A, { className: lU.Jo, innerClassName: lU.FG, children: [!l && t, n] }),
                ],
            }),
        ],
    });
}
function lP(e) {
    let { selectedTab: t, onSelectTab: n, tabs: s, endContent: l } = e;
    return (0, r.jsx)(U.S, {
        selectedTabId: t,
        handleTransition: n,
        tabs: s,
        endContent: l,
        icon: x.r,
        keepToastsBelow: !0,
    });
}
function lq(e) {
    let { onLoadComplete: t, className: n, isVirtualCurrencyEnabled: s } = e,
        l = (0, E.bG)([_.Ay], () => _.Ay.useReducedMotion),
        a = (0, E.bG)([q.A], () => q.A.isFocused()),
        { ref: o, inViewport: u } = (0, sd.p)(),
        c = i.useRef(null);
    if (
        (i.useEffect(() => {
            c?.current != null &&
                (c.current.paused || (a && u && !l)
                    ? c.current.paused && !l && u && a && c.current.play()
                    : c.current.pause());
        }, [l, u, a]),
        s)
    ) {
        let e = (0, k.TM)();
        return (0, r.jsx)(Y._M, {
            id: "QuestHomeHeroBackground_bannerVideo",
            children: (s) =>
                (0, r.jsx)(b.A, {
                    ref: (e) => {
                        ((c.current = e), (o.current = e), (s.current = e));
                    },
                    loop: !0,
                    muted: !0,
                    playsInline: !0,
                    className: n,
                    onProgress: t,
                    "data-mtctest-ignore": "true",
                    controls: !1,
                    children: (0, r.jsx)("source", {
                        src: e
                            ? "https://cdn.discordapp.com/assets/content/529e0aea2b87be4a587568435eaac176bf71b8dd46035db9c88acdee11187eb8.mp4"
                            : "https://cdn.discordapp.com/assets/content/fbd6cf99b9be35ba1d953fd30b81a35c9bd8edf7808b576ef6fc7c65cbc1d9a6.webm",
                        type: e ? "video/mp4" : "video/webm",
                    }),
                }),
        });
    }
    return (0, r.jsx)(Y._M, {
        id: "QuestHomeHeroBackground_bannerImage",
        children: (e) =>
            (0, r.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/fff9144c814ffc3126fdcaf5ec5bc68eff6d09e23ac8af5a3fbe61b05970cda0.png",
                className: n,
                alt: "",
                onLoad: t,
                ref: e,
            }),
    });
}
function lk(e) {
    let { onAssetLoad: t, isVirtualCurrencyEnabled: n } = e;
    return (0, r.jsxs)("div", {
        className: o()(lU.Tv, { [lU.lJ]: n }),
        children: [
            (0, r.jsx)(tR, {}),
            (0, r.jsx)("div", { className: o()(lU.nz, { [lU.ZZ]: n }) }),
            (0, r.jsx)(lq, {
                onLoadComplete: t,
                className: o()(lU.Fe, { [lU.H4]: n, [lU.Q8]: !n }),
                isVirtualCurrencyEnabled: n,
            }),
        ],
    });
}
function lw(e) {
    let { className: t, onAssetLoad: n } = e,
        { enabled: s } = K.useConfig({ location: tv.rE.QUEST_HOME_DESKTOP }),
        l = !s,
        a = i.useCallback(() => {
            l ? window.open(ex.X7G.PAID_TERMS_ORBS) : window.open(w.A.getArticleURL(ex.MVz.QUESTS_LEARN_MORE));
        }, [l]);
    return (0, r.jsx)(ev, {
        className: t,
        adContentId: l ? tv.yr : tv.uz,
        title: l ? ew.intl.format(ew.t.BCBIlp, {}) : ew.intl.format(ew.t.lmMBfy, {}),
        subtitle: l ? ew.intl.format(ew.t.U9FY0J, {}) : ew.intl.string(ew.t.oWCrBq),
        buttons: l
            ? (0, r.jsxs)(f.e, {
                  children: [
                      (0, r.jsx)(g.$, {
                          variant: "overlay-primary",
                          text: ew.intl.string(ew.t["1Wm127"]),
                          onClick: () =>
                              (0, T.Cz)({
                                  tab: lQ.G2.ORBS,
                                  analyticsLocations: [],
                                  analyticsSource: N.A.INTRO_TO_ORBS_QUEST_BANNER,
                              }),
                      }),
                      (0, r.jsx)(g.$, {
                          variant: "overlay-secondary",
                          text: ew.intl.string(ew.t["7kTAgJ"]),
                          onClick: a,
                      }),
                  ],
              })
            : (0, r.jsx)(g.$, {
                  variant: "overlay-primary",
                  text: ew.intl.string(ew.t.hvVgAZ),
                  onClick: a,
                  icon: v.I,
                  iconPosition: "end",
              }),
        background: (0, r.jsx)(lk, { onAssetLoad: n, isVirtualCurrencyEnabled: l }),
    });
}
function lB(e) {
    let { onAssetLoad: t, hasSearchResults: n } = e,
        { isLoading: s } = (0, Y.zT)(),
        { showDefaultBanner: l } = z.C.useConfig({ location: tv.rE.QUEST_HOME_DEFAULT_BANNER });
    return l
        ? (0, r.jsxs)("div", {
              className: o()(lU.iS, { [lU.R]: n }),
              children: [s && (0, r.jsx)(tH, {}), (0, r.jsx)(lw, { className: o()({ [lU.lX]: s }), onAssetLoad: t })],
          })
        : null;
}
function lV(e) {
    let { onAssetLoad: t, onQuestCtaClick: n, questHomeHero: s, isLoadingQuestHomeHero: l, hasSearchResults: i } = e,
        { hasError: a, isLoading: u } = (0, Y.zT)(),
        c = l || u;
    return (0, r.jsxs)("div", {
        className: o()(lU.iS, { [lU.R]: i }),
        children: [
            c && (0, r.jsx)(tH, {}),
            !l &&
                (null == s || a
                    ? (0, r.jsx)(lw, { className: o()({ [lU.lX]: u }), onAssetLoad: t })
                    : (0, r.jsx)(tQ, { hero: s, isBannerLoading: u, onQuestCtaClick: n })),
        ],
    });
}
let lW = function (e) {
    let { topLevelRoute: t } = e,
        n = (0, u.zy)(),
        s = (0, u.W6)(),
        l = i.useMemo(() => new URLSearchParams(n.search).getAll($.L1.AD_CREATIVE_IDS), [n.search]),
        a = (d.Fr || d.v1) && l.length > 0,
        x = (0, E.bG)([O.A], () => O.A.getState("quests")),
        {
            selectedTab: f,
            onSelectTab: g,
            tabs: v,
        } = (function (e) {
            let { withClaimedQuestsTab: t = !0 } = e,
                n = ly.A.useField("tab"),
                s = (0, u.zy)(),
                l = (0, $.p5)(),
                { enabled: r } = W.Mk.useConfig({ location: tv.rE.QUEST_HOME_DESKTOP }),
                { useNewLayoutWithSearch: a } = W.aD.useConfig({ location: tv.rE.QUEST_HOME_DESKTOP }),
                o = r || a;
            i.useEffect(() => {
                ly.A.getState().initializeFromUrl(s.search, l);
            }, [s.search, l]);
            let c = i.useCallback((e) => {
                ly.A.getState().setTab(e);
            }, []);
            return {
                tabs: i.useMemo(
                    () =>
                        [
                            { id: $.NC.ALL, label: o ? ew.intl.string(ew.t.Jt6u7B) : ew.intl.string(ew.t["0SzXmi"]) },
                            t
                                ? {
                                      id: $.NC.CLAIMED,
                                      label: o ? ew.intl.string(ew.t["3TVY/R"]) : ew.intl.string(ew.t.zyNYNB),
                                  }
                                : null,
                            t && l ? { id: $.NC.PREVIEW_TOOL, label: ew.intl.string(ew.t.BDUDau) } : null,
                        ].filter(eM.Vq),
                    [t, l, o],
                ),
                selectedTab: n,
                onSelectTab: c,
            };
        })({ withClaimedQuestsTab: !0 }),
        { query: _, setQuery: b, matchingQuestIds: M, onSearchClose: L } = lL(),
        { onScroll: H } = (0, Q.G)(),
        U = V.A.getState().getUtmCurrentContext(),
        D = lg((e) => e.registerAssetLoad),
        q = i.useRef(U);
    (i.useEffect(() => {
        q.current = U;
    }),
        i.useEffect(() => {
            let { current: e } = q;
            (0, p.x)({
                name: c.ImpressionNames.QUEST_HOME,
                type: c.ImpressionTypes.VIEW,
                properties: {
                    utm_source_current: e.utmSourceCurrent,
                    utm_medium_current: e.utmMediumCurrent,
                    utm_campaign_current: e.utmCampaignCurrent,
                    utm_content_current: e.utmContentCurrent,
                    tab: f,
                },
            });
        }, [f]),
        (0, I.HU)({ location: ew.intl.string(ew.t.JALI2K) }));
    let k = i.useRef(null),
        { enabled: w } = W.Mk.useConfig({ location: tv.rE.QUEST_HOME_DESKTOP }),
        { useNewLayoutWithSearch: G } = W.aD.useConfig({ location: tv.rE.QUEST_HOME_DESKTOP }),
        K = w || G,
        X = i.useRef(null),
        J = i.useCallback((e) => {
            X.current?.scrollToQuest(e);
        }, []),
        Z = i.useMemo(() => ((0, B.uJ)(n.hash) ? null : n.hash.substring(1)), [n.hash]),
        { questHomeHero: ee, isLoading: et, confirmedEmpty: en } = (0, tU.lg)(l[0] ?? null),
        { showHeroPlaceholder: es } = (0, z.x)(),
        el = i.useCallback(() => {
            ((0, F.Y)({
                pageType: ex.liQ.GLOBAL_DISCOVERY_QUESTS,
                sectionType: ex.JJy.ORBS_BALANCE_MENU,
                ctaObject: ex.ZSU.CTA_TO_ORBS_SHOP,
            }),
                (0, T.Cz)({ tab: lQ.G2.ORBS, analyticsLocations: [], analyticsSource: N.A.ORBS_BALANCE_MENU }));
        }, []);
    (i.useEffect(() => {
        (0, C.I)(ex.BVt.QUEST_HOME);
    }, []),
        i.useEffect(() => {
            y.trigger();
        }, []),
        i.useEffect(() => {
            if (a || null != x) return;
            let e = new URLSearchParams(n.search),
                l = e.get($.L1.TAB);
            if (l === $.NC.PREVIEW_TOOL) {
                let t = e.get($.L1.QUEST_ID);
                A.A.openNativeAppModal("quests", ex.e$_.DEEP_LINK, {
                    type: lH.XK.QUEST_PREVIEW_TOOL,
                    params: { questId: t, tab: l },
                });
                return;
            }
            let r = performance.getEntriesByType("navigation")[0];
            if ("POP" === s.action && r?.type === "navigate" && t && l !== $.NC.PREVIEW_TOOL) {
                let t = (0, B.uJ)(n.hash) ? null : n.hash.substring(1),
                    s = e.get($.L1.SORT),
                    r = e.get($.L1.FILTER),
                    i = e.get($.L1.AD_CREATIVE_IDS);
                A.A.openNativeAppModal("quests", ex.e$_.DEEP_LINK, {
                    type: lH.XK.QUEST_HOME,
                    params: { questId: (0, B.uJ)(t) ? void 0 : t, sort: s, filter: r, tab: l, adCreativeIds: i },
                });
            }
        }, [n.search, x, s.action, n.hash, t, a]),
        i.useEffect(() => {
            t && (0, R.Dr)(h.M.QUEST_HOME_ENTRYPOINT_ONBOARDING);
        }, [t]));
    let er = i.useCallback(
            (e) => {
                (s.replace({ ...s.location, hash: void 0 }), k.current?.scrollToTop({ animate: !1 }), g(e), L());
            },
            [s, g, L],
        ),
        ei = i.useMemo(() => null != M && K, [M, K]),
        ea = i.useMemo(() => ({ onAssetLoadComplete: D }), [D]),
        eo = i.useMemo(() => ({ onScroll: H, scrollerRef: k }), [H, k]),
        eu = et && !es;
    return a
        ? (0, r.jsx)(l_, { adCreativeIds: l })
        : (0, r.jsx)(lv.M.Provider, {
              value: ea,
              children: (0, r.jsx)(lD.Provider, {
                  value: eo,
                  children: (0, r.jsx)("div", {
                      className: o()(lU.kL, { [lU.KY]: !t }),
                      children: (0, r.jsxs)(lF, {
                          header: (0, r.jsx)(lP, {
                              selectedTab: f,
                              onSelectTab: er,
                              tabs: v,
                              endContent: (0, r.jsxs)(j.B, {
                                  gap: 8,
                                  direction: "horizontal",
                                  align: "center",
                                  justify: "end",
                                  children: [
                                      K &&
                                          (0, r.jsx)(S.I, {
                                              query: _,
                                              onChange: b,
                                              placeholder: ew.intl.string(ew.t.y10TI2),
                                              onClear: L,
                                              size: "sm",
                                          }),
                                      (0, r.jsx)(P.SS, {
                                          analyticsPage: ex.liQ.GLOBAL_DISCOVERY_QUESTS,
                                          cardAlignment: P.cP.END,
                                          ctaText: ew.intl.string(ew.t["J+vlIR"]),
                                          ctaOnClick: el,
                                      }),
                                  ],
                              }),
                          }),
                          banner:
                              f === $.NC.ALL &&
                              !eu &&
                              (0, r.jsx)(
                                  Y.y5,
                                  {
                                      source: tv.rE.QUEST_HOME_DESKTOP,
                                      adCreativeId: ee?.id ?? null,
                                      adCreativeType: m.p.QUEST_HOME_HERO,
                                      children: en
                                          ? (0, r.jsx)(lB, { onAssetLoad: D, hasSearchResults: ei })
                                          : (0, r.jsx)(lV, {
                                                onAssetLoad: D,
                                                onQuestCtaClick: J,
                                                hasSearchResults: ei,
                                                questHomeHero: ee,
                                                isLoadingQuestHomeHero: et,
                                            }),
                                  },
                                  ee?.id,
                              ),
                          children: [
                              ei && null != M && (0, r.jsx)(lA, { matchingQuestIds: M }),
                              f === $.NC.CLAIMED
                                  ? (0, r.jsx)(s1, { onSelectTab: er, className: ei ? lU.R : void 0 })
                                  : f === $.NC.PREVIEW_TOOL
                                    ? (0, r.jsx)(sc, { className: ei ? lU.R : void 0 })
                                    : K
                                      ? (0, r.jsx)(lE, {
                                            className: ei ? lU.R : void 0,
                                            ref: X,
                                            deepLinkedQuestId: Z,
                                            isLoadingQuestHomeHero: et,
                                        })
                                      : (0, r.jsx)(sF, { ref: X }),
                          ],
                      }),
                  }),
              }),
          });
};
