let n;
s.r(t), s.d(t, { default: () => lD }), s(323874), s(14289), s(35956);
var l,
    r = s(477900),
    i = s(582128),
    a = s(503698),
    o = s.n(a),
    u = s(806163),
    c = s(562708),
    d = s(607399),
    m = s(323889),
    E = s(17928),
    h = s(554146),
    x = s(577473),
    f = s(825484),
    g = s(821609),
    v = s(509434),
    _ = s(331322),
    j = s(683438),
    S = s(944791),
    C = s(775602),
    N = s(793574),
    p = s(139286),
    T = s(197111),
    A = s(10088),
    O = s(839534),
    I = s(726249),
    R = s(607470),
    b = s(826673),
    M = s(840251),
    Q = s(688151);
let H = new M.E([], Q.$G.QUEST_HOME_OPEN, { location: "open quest home" });
var L = s(711111),
    y = s(979590),
    U = s(749638),
    D = s(783531),
    F = s(318346),
    q = s(70926),
    P = s(531685),
    k = s(676279),
    w = s(975571),
    B = s(240248),
    V = s(87549),
    G = s(192444),
    W = s(945810);
let K = (0, W.mj)({
    name: "2026-06-orbs-holdout",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var z = s(860996),
    $ = s(309593),
    Y = s(557637),
    J = s(834730),
    X = s(289873),
    Z = s(274670),
    ee = s(144779),
    et = s(859703),
    es = s(738822),
    en = s(104886),
    el = s(291749),
    er = s(561844),
    ei = s(18437),
    ea = s(590202),
    eo = s(901406),
    eu = s(415441),
    ec = s(73473),
    ed = s(139384),
    em = s(43990),
    eE = s(297264),
    eh = s(770178),
    ex = s(652215),
    ef = s(691388);
function eg(e, t) {
    let { row_index: s, ...n } = (0, ea.fF)(es.uF.QUEST_HOME_HERO);
    (0, er.Qg)({
        adContentId: e,
        adCreativeType: m.p.QUEST_HOME_HERO,
        event: t,
        properties: n,
        sourceQuestContent: es.uF.QUEST_HOME_HERO,
    });
}
let ev = i.forwardRef(function (e, t) {
    let { adContentId: s, topContent: n, title: l, subtitle: a, buttons: u, background: c, className: d } = e,
        [m, E] = i.useState("display-lg"),
        h = i.useCallback((e) => {
            E(e.contentRect.width < 500 ? "display-md" : "display-lg");
        }, []),
        x = (0, eh.w)(h, [], { fireOnMount: !0 }),
        f = i.useCallback(() => eg(s, ex.HAw.QUEST_HOVER), [s]),
        g = i.useCallback(() => eg(s, ex.HAw.QUEST_HOVER_OFF), [s]);
    return (0, r.jsx)(em.N, {
        theme: ex.NJ8.MIDNIGHT,
        disableAdaptiveTheme: !0,
        children: (e) =>
            (0, r.jsx)("div", {
                "data-testid": "quest-home-hero-banner",
                className: o()(ef.iE, e, d),
                onMouseEnter: f,
                onMouseLeave: g,
                ref: (e) => {
                    (x.current = e), "function" == typeof t ? t(e) : null != t && (t.current = e);
                },
                children: (0, r.jsxs)("div", {
                    className: ef.FG,
                    children: [
                        (0, r.jsxs)(_.B, {
                            className: ef.Qs,
                            direction: "vertical",
                            justify: null != n ? "space-between" : "end",
                            children: [
                                n,
                                (0, r.jsxs)(_.B, {
                                    className: ef.yp,
                                    gap: 16,
                                    children: [
                                        (0, r.jsxs)(_.B, {
                                            gap: 8,
                                            children: [
                                                (0, r.jsx)(eE.D, {
                                                    color: "text-strong",
                                                    variant: m,
                                                    className: ef.DD,
                                                    children: l,
                                                }),
                                                (0, r.jsx)(J.E, {
                                                    color: "text-strong",
                                                    variant: "text-md/normal",
                                                    className: ef.VA,
                                                    children: a,
                                                }),
                                            ],
                                        }),
                                        u,
                                    ],
                                }),
                            ],
                        }),
                        c,
                    ],
                }),
            }),
    });
});
var e_ = s(339889);
s(134528), s(947204);
var ej = s(749401),
    eS = s(635377),
    eC = s.n(eS),
    eN = s(998304),
    ep = s(515718);
let eT = new (eC())({ max: 50 });
async function eA(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
        s = eT.get(`${e}-${t}`);
    if (null != s) return s;
    let n = (
        await new Promise((s, n) => {
            let l = new Image();
            (l.crossOrigin = "Anonymous"),
                (l.onerror = (e) => {
                    n(e), null != l && ((l.onerror = null), (l.onload = null)), (l = null);
                }),
                (l.onload = () => {
                    null != l
                        ? (s((0, ep.Sf)(l, t, 10)), (l.onerror = null), (l.onload = null), (l = null))
                        : n("image is null");
                }),
                (l.src = e);
        })
    ).map((e) => {
        let [t, s, n] = e;
        return (0, eN.Ob)(t, s, n);
    });
    return eT.set(`${e}-${t}`, n), n;
}
var eO = s(49491),
    eI = s(569926),
    eR = s(418842),
    eb = s(174459),
    eM = s(403362),
    eQ = s(38405);
let eH = (0, W.mj)({
    name: "2026-06-hero-shelf-ad-tile",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var eL = s(792620);
s(321073);
var ey = s(535185),
    eU = s(408278),
    eD = s(548411),
    eF = s(554830),
    eq = s(689175),
    eP = s(321503),
    ek = s(661531),
    ew = s(375708),
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
function eG(e) {
    return ek.A.space.SPACE_XL.resolve({ density: e });
}
function eW(e, t) {
    return (1220 - 2 * eG(e) * (t ? 2 : 0.75)) / 3;
}
var eK = s(915850);
let ez = "data-scroll-target",
    e$ = `[${ez}]`,
    eY = { anchors: [], windowSizes: [] },
    eJ = '[role="button"]:not([tabindex="-1"]):not([aria-disabled="true"])';
function eX(e, t) {
    let s = t.length - 1,
        n = Math.max(0, e.scrollWidth - e.clientWidth),
        l = t.map((t, l) => (0 === l ? 0 : l === s ? n : t - e.clientWidth / 2));
    function r(t) {
        return Math.abs(t - e.scrollLeft);
    }
    return { currentIndex: l.reduce((e, t, s) => (r(t) < r(l[e]) ? s : e), 0), scrollLefts: l };
}
let eZ = i.memo(function (e) {
    let {
            children: t,
            className: s,
            itemSelector: n = e$,
            maskWidth: l = 24,
            overflowAmount: a = 0,
            maskMarginMultiplier: u = 1,
            onScrollEnd: c,
        } = e,
        d = i.useRef(null),
        m = i.useRef(null),
        h = i.useRef(0),
        x = i.useRef(null),
        [f, g] = i.useState(!1),
        [v, _] = i.useState(!1),
        [j, S] = i.useState(!0),
        [N, p] = i.useState([]),
        [T, A] = i.useState([]),
        O = (0, E.bG)([C.Ay], () => C.Ay.useReducedMotion) ? "auto" : "smooth",
        I = i.useCallback(() => {
            let e = d.current?.getScrollerNode();
            null == e ||
                (0 !== e.clientWidth && (g(e.scrollLeft > 0), _(e.scrollLeft + e.clientWidth < e.scrollWidth - 1)));
        }, []),
        R = i.useCallback(() => {
            let { anchors: e, windowSizes: t } = (function (e) {
                let { scrollerRef: t, itemSelector: s, maskMarginMultiplier: n, maskWidth: l } = e,
                    r = t.current?.getScrollerNode();
                if (null == r || r.scrollWidth <= r.clientWidth) return eY;
                let i = Array.from(r.querySelectorAll(s));
                if (0 === i.length) return eY;
                let a = r.clientWidth - 2 * l * n;
                function o(e) {
                    return e.offsetLeft + e.offsetWidth;
                }
                let u = [0],
                    c = [],
                    d = 0;
                for (let e = 0; e < i.length; e++) {
                    d < e && (d = e);
                    let t = i[e].offsetLeft;
                    for (; d + 1 < i.length && o(i[d + 1]) - t <= a; ) d++;
                    let s = d - e + 1;
                    if ((c.push(s), d === i.length - 1)) break;
                    e > 0 && u.push((t + o(i[d])) / 2);
                }
                return c.length < 2 ? eY : (u.push(r.scrollWidth), { anchors: u, windowSizes: c });
            })({ scrollerRef: d, itemSelector: n, maskWidth: l, maskMarginMultiplier: u });
            A(t), p((t) => (t.length === e.length && t.every((t, s) => t === e[s]) ? t : e));
        }, [l, n, u, p]),
        b = i.useCallback(() => {
            if (null == x.current || x.current?.clientWidth === 0) return S(!0);
            S(x.current?.clientWidth >= 1260);
        }, [x]),
        M = i.useCallback(
            (e) => {
                let t = d.current?.getScrollerNode();
                if (null == t || N.length < 2) return;
                let { currentIndex: s, scrollLefts: n } = eX(t, N),
                    l = T[s] ?? 1,
                    r = Math.max(0, Math.min(N.length - 1, s + e * l));
                (m.current = ea.pk.ARROW), t.scrollTo({ left: n[r], behavior: O });
            },
            [O, N, T],
        ),
        Q = i.useCallback((e, t) => {
            let s = d.current?.getScrollerNode();
            if (null == s || null == e || !s.contains(e)) return;
            let n = s.getBoundingClientRect(),
                l = e.getBoundingClientRect(),
                r = n.left - l.left,
                i = l.right - n.right;
            (0 !== r || 0 !== i) &&
                ((m.current = ea.pk.MANUAL),
                r > 0
                    ? s.scrollTo({ left: s.scrollLeft - r, behavior: t })
                    : i > 0 && s.scrollTo({ left: s.scrollLeft + i, behavior: t }));
        }, []),
        H = i.useCallback(
            (e) => {
                let t = e.target.closest(n);
                null != t && Q(t, O);
            },
            [n, Q, O],
        ),
        L = i.useCallback(() => {
            let e = d.current?.getScrollerNode();
            if (null == e) return;
            let { currentIndex: t } = eX(e, N),
                s = m.current ?? ea.pk.MANUAL;
            m.current = null;
            let n = h.current;
            h.current = e.scrollLeft;
            let l = e.scrollLeft > n ? ea.VU.RIGHT : ea.VU.LEFT,
                r = T[t] ?? 1;
            c?.({
                scrollingType: s,
                scrollWindowStartIndex: t,
                scrollWindowEndIndex: t + r - 1,
                scrollWindowSize: r,
                scrollingDirection: l,
            });
        }, [c, N, T]),
        y = i.useCallback(
            (e) => {
                let t = "ArrowLeft" === e.key ? -1 : +("ArrowRight" === e.key);
                if (0 === t) return;
                e.preventDefault();
                let s = d.current?.getScrollerNode();
                if (null == s) return;
                let l = Array.from(s.querySelectorAll(n)),
                    r = e.target.closest(n),
                    i = null == r ? -1 : l.indexOf(r),
                    a = l[i + t],
                    o = null == a ? null : a.matches(eJ) ? a : a.querySelector(eJ);
                null != o && (o.focus({ preventScroll: !0 }), e.repeat && Q(a, "instant"));
            },
            [n, Q],
        ),
        U = i.useCallback(() => {
            I(), R(), b();
        }, [I, R, b]);
    (0, ey.g)(x, U, [], { fireOnMount: !0 });
    let D = a > 0,
        F = i.useMemo(
            () => ({
                "--custom-scroller-mask-width": `${l}px`,
                "--custom-scroller-overflow-amount": `${a}px`,
                "--custom-scroller-scroll-behavior": O,
            }),
            [l, a, O],
        );
    return (0, r.jsxs)("div", {
        className: o()(s, eK.m7),
        ref: x,
        style: F,
        children: [
            (0, r.jsx)("div", {
                className: o()(eK.k9, eK.RW, { [eK.Q2]: f }),
                "aria-hidden": !0,
                children: (0, r.jsx)(eU.K, {
                    icon: eD.Z,
                    variant: "overlay-secondary",
                    onClick: () => M(-1),
                    disabled: !f,
                    "aria-label": ew.intl.string(ew.t.vgfxaA),
                    tabIndex: -1,
                }),
            }),
            (0, r.jsx)("div", {
                className: o()(eK.k9, eK.K3, { [eK.Q2]: v }),
                "aria-hidden": !0,
                children: (0, r.jsx)(eU.K, {
                    icon: eF.K,
                    variant: "overlay-secondary",
                    onClick: () => M(1),
                    disabled: !v,
                    tabIndex: -1,
                    "aria-label": ew.intl.string(ew.t.XiOHRX),
                }),
            }),
            (0, r.jsx)("div", {
                className: o()({ [eK.sF]: f && j, [eK.RC]: v && j, [eK.Ni]: D && !f, [eK.GA]: D && !v }),
                children: (0, r.jsx)(eq.zC, {
                    ref: d,
                    orientation: "horizontal",
                    onScroll: I,
                    onScrollEnd: L,
                    onFocusCapture: H,
                    onKeyDown: y,
                    className: o()({ [eK.x2]: D }, eK.XG),
                    children: (0, r.jsxs)(eP.X.Provider, {
                        value: d,
                        children: [
                            t,
                            N.map((e, t) =>
                                (0, r.jsx)(
                                    "div",
                                    { "aria-hidden": !0, className: eK.fw, style: { insetInlineStart: `${e}px` } },
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
var e0 = s(221877);
function e1(e, t, s) {
    if (null != s) {
        if (e) {
            let e = s.to({ range: [0, 0.25, 0.75, 1], output: [0, 1, 1, 0] });
            return {
                "--custom-quest-highlight-blur": (0, e0.to)([e], (e) => `${25 * e}px`),
                "--custom-quest-highlight-alpha": (0, e0.to)([e], (e) => `${e}`),
            };
        }
        if (t)
            return { opacity: (0, e0.to)([s.to({ range: [0, 0.25, 0.75, 1], output: [1, 0.4, 0.4, 1] })], (e) => e) };
    }
}
var e8 = s(440703),
    e2 = s(731355),
    e3 = s(621466),
    e4 = s(717421),
    e7 = s(939249),
    e6 = s(259678),
    e5 = s(508770),
    e9 = s(406810),
    te = s(628284),
    tt = s(65154),
    ts = s(687966),
    tn = s(155718),
    tl = s(496431),
    tr = s(640708),
    ti = s(287809),
    ta = s(58703),
    to = s(927813),
    tu = s(541830),
    tc = s(971649),
    td = s(651892),
    tm = s(801365),
    tE = s(814793),
    th = s(453384),
    tx = s(646764),
    tf = s(398025),
    tg = s(818348),
    tv = s(499621);
function t_(e) {
    let [t, s] = i.useState(!1),
        n = i.useCallback(() => {
            t || (s(!0), e?.(!0));
        }, [t, e]),
        l = i.useCallback(() => {
            t && (s(!1), e?.(!1));
        }, [t, e]);
    return { isHovering: t, hoverProps: { onMouseEnter: n, onMouseLeave: l, onFocus: n, onBlur: l } };
}
function tj(e) {
    let { hero: t, contentPosition: s, impressionRef: n } = e,
        l = i.useRef(null),
        { isHovering: a, hoverProps: u } = t_(
            i.useCallback(
                (e) => {
                    (0, er.Qg)({
                        adContentId: t.id,
                        adCreativeType: m.p.QUEST_HOME_HERO,
                        event: e ? ex.HAw.QUEST_HOVER : ex.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: es.uF.QUEST_HOME_HERO_SHELF,
                            content_name: (0, ea.jO)(es.uF.QUEST_HOME_HERO_SHELF),
                            content_position: s,
                        },
                        sourceQuestContent: es.uF.QUEST_HOME_HERO_SHELF,
                    });
                },
                [t.id, s],
            ),
        );
    i.useEffect(() => {
        let e = l.current;
        (0, e3.vq)(e, HTMLVideoElement) && (a ? ((e.currentTime = 0), e.play().catch(tg.tE)) : e.pause());
    }, [a]);
    let { hoverSpring: c } = (0, e4.z)({ hoverSpring: +!!a, config: e0.config.gentle }),
        d = i.useCallback(() => {
            (0, eo._Q)(
                { adContentId: t.id, adCreativeType: m.p.QUEST_HOME_HERO, cta: t.cta },
                {
                    content: es.uF.QUEST_HOME_HERO_SHELF,
                    ctaContent: ea.Cy.OPEN_GAME_LINK,
                    position: s,
                    impressionId: n.current?.getId(),
                    sourceQuestContent: es.uF.QUEST_HOME_HERO_SHELF,
                },
            );
        }, [t.cta, t.id, s, n]);
    return (0, r.jsxs)(e7.D, {
        tag: "div",
        className: o()(tv.FW, tv.Bm),
        onClick: d,
        "aria-label": t.cta.buttonLabel,
        [ez]: !0,
        ...u,
        children: [
            (0, r.jsx)("div", {
                className: tv.Ve,
                children: (0, r.jsx)(eu.N, {
                    showVideo: !0,
                    assetRef: l,
                    imageAsset:
                        null != t.shelfImage
                            ? {
                                  asset: { url: t.shelfImage, mimetype: null, isAnimated: !1 },
                                  assetId: "intro-image",
                                  className: o()(tv.pv, tv.gI),
                              }
                            : void 0,
                    videoAsset:
                        null != t.shelfVideo
                            ? {
                                  asset: { url: t.shelfVideo, mimetype: null, isAnimated: !0 },
                                  assetId: "intro-video",
                                  className: o()(tv.pv, tv.Wq),
                              }
                            : void 0,
                }),
            }),
            (0, r.jsx)(e0.animated.div, {
                className: tv.hn,
                style: { transform: c.to([0, 1], [100, 0]).to((e) => `translateY(${e}%)`) },
                children: (0, r.jsx)(g.$, {
                    fullWidth: !0,
                    onClick: (e) => {
                        e.stopPropagation(), d();
                    },
                    text: t.cta.buttonLabel,
                }),
            }),
        ],
    });
}
function tS(e) {
    let { hero: t, game: s, contentPosition: n, shelfImage: l, impressionRef: a } = e,
        u = i.useRef(null),
        { isHovering: c, hoverProps: d } = t_(
            i.useCallback(
                (e) => {
                    (0, er.Qg)({
                        adContentId: t.id,
                        adCreativeType: m.p.QUEST_HOME_HERO,
                        event: e ? ex.HAw.QUEST_HOVER : ex.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: es.uF.QUEST_HOME_HERO_SHELF,
                            content_name: (0, ea.jO)(es.uF.QUEST_HOME_HERO_SHELF),
                            content_position: n,
                        },
                        sourceQuestContent: es.uF.QUEST_HOME_HERO_SHELF,
                    });
                },
                [t.id, n],
            ),
        );
    i.useEffect(() => {
        let e = u.current;
        (0, e3.vq)(e, HTMLVideoElement) && (c ? ((e.currentTime = 0), e.play().catch(tg.tE)) : e.pause());
    }, [c]);
    let E = i.useCallback(() => {
            (0, eo._Q)(
                { adContentId: t.id, adCreativeType: m.p.QUEST_HOME_HERO, cta: t.cta },
                {
                    content: es.uF.QUEST_HOME_HERO_SHELF,
                    ctaContent: ea.Cy.OPEN_GAME_LINK,
                    position: n,
                    impressionId: a.current?.getId(),
                    sourceQuestContent: es.uF.QUEST_HOME_HERO_SHELF,
                },
            );
        }, [t.cta, t.id, n, a]),
        h = i.useRef(null),
        [x, f] = i.useState({ top: !1, bottom: !1 }),
        v = i.useCallback(() => {
            let e = h.current;
            if (null == e) return;
            let t = e.getDistanceFromTop() > 4,
                s = e.getDistanceFromBottom() > 4;
            f((e) => (e.top === t && e.bottom === s ? e : { top: t, bottom: s }));
        }, []);
    i.useLayoutEffect(() => {
        v();
    }, [v]);
    let { topFade: _, bottomFade: j } = (0, e4.z)({
            topFade: +!!x.top,
            bottomFade: +!!x.bottom,
            config: { ...e0.config.gentle, duration: 100 },
        }),
        S = i.useMemo(() => {
            let e = null != s.firstReleaseDate ? new Date(s.firstReleaseDate).getFullYear() : NaN,
                t = isNaN(e) ? null : e,
                n = s.genres.at(0);
            return [
                t,
                null != n ? (0, tu.du)(n) : null,
                s.getCompanyByRole(tn.wk.DEVELOPER).at(0)?.name ?? null,
            ].filter((e) => null != e);
        }, [s]),
        C = i.useMemo(() => S.length > 0, [S]);
    return (0, r.jsxs)(e7.D, {
        tag: "div",
        className: o()(tv.FW, tv.n7),
        onClick: E,
        [ez]: !0,
        ...d,
        children: [
            (0, r.jsx)("div", { className: tv.hu }),
            (0, r.jsx)("div", {
                className: tv.fQ,
                children: (0, r.jsx)(eu.N, {
                    showVideo: !0,
                    assetRef: u,
                    imageAsset:
                        null != l
                            ? {
                                  asset: { url: l, mimetype: null, isAnimated: !1 },
                                  assetId: "intro-image",
                                  className: o()(tv.pv, tv.gI),
                              }
                            : void 0,
                    videoAsset:
                        null != t.shelfVideo
                            ? {
                                  asset: { url: t.shelfVideo, mimetype: null, isAnimated: !0 },
                                  assetId: "intro-video",
                                  className: o()(tv.pv, tv.Wq),
                              }
                            : void 0,
                }),
            }),
            (0, r.jsxs)("div", {
                className: tv.iq,
                children: [
                    (0, r.jsxs)("div", {
                        className: tv.o7,
                        children: [
                            (0, r.jsx)(eE.D, {
                                variant: "heading-xl/semibold",
                                color: "text-strong",
                                children: s.name,
                            }),
                            C &&
                                (0, r.jsx)("p", {
                                    className: tv.c9,
                                    children: S.map((e, t) =>
                                        (0, r.jsxs)(
                                            i.Fragment,
                                            {
                                                children: [
                                                    (0, r.jsx)(J.E, {
                                                        variant: "text-sm/medium",
                                                        color: "text-muted",
                                                        tag: "span",
                                                        children: e,
                                                    }),
                                                    t < S.length - 1 && (0, r.jsx)(tr.A, { width: 3, height: 3 }),
                                                ],
                                            },
                                            t,
                                        ),
                                    ),
                                }),
                        ],
                    }),
                    (0, r.jsx)(e0.animated.div, {
                        className: tv.hX,
                        style: {
                            maskImage: (0, e0.to)(
                                [_, j],
                                (e, t) =>
                                    `linear-gradient(to bottom, rgba(0,0,0,${1 - e}), #000 48px, #000 calc(100% - 48px), rgba(0,0,0,${1 - t}))`,
                            ),
                        },
                        children: (0, r.jsx)(e6.vN, {
                            children: (0, r.jsx)(eq.Ch, {
                                ref: h,
                                className: tv.hw,
                                onScroll: v,
                                fade: !c,
                                children: (0, r.jsx)(J.E, {
                                    variant: "text-md/normal",
                                    color: "text-muted",
                                    className: tv.W1,
                                    children: s.description,
                                }),
                            }),
                        }),
                    }),
                    (0, r.jsx)(g.$, {
                        fullWidth: !0,
                        variant: "secondary",
                        onClick: (e) => {
                            e.stopPropagation(), E();
                        },
                        text: t.cta.buttonLabel,
                    }),
                ],
            }),
        ],
    });
}
function tC(e) {
    let { heroId: t, quest: s, onQuestCtaClick: n, contentPosition: l } = e,
        a = i.useMemo(() => new Date(s.config.expiresAt), [s.config.expiresAt]),
        { days: u, hours: c, minutes: d, seconds: h } = (0, tl.A)(a, to.A.Millis.MINUTE),
        x = i.useMemo(
            () =>
                (0, ta.uN)(
                    { days: u, hours: c, minutes: d, seconds: h },
                    { days: ew.t["Ux/De1"], hours: ew.t.Lzd5Ie, minutes: ew.t.odmpbP },
                ),
            [u, c, d, h],
        ),
        f = (0, E.bG)([ti.default], () => ti.default.getCurrentUser()),
        v = i.useMemo(() => (0, tm.mq)(s.config, f), [s.config, f]),
        j = i.useMemo(
            () =>
                (function (e, t) {
                    switch ((0, td.xv)(e).type) {
                        case e8.l.IN_GAME:
                            return ew.intl.string(ew.t["O/J2kr"]);
                        case e8.l.COLLECTIBLE:
                            return ew.intl.string(ew.t.Jg17Ut);
                        case e8.l.VIRTUAL_CURRENCY:
                            return ew.intl.string(ew.t.ElYQFS);
                        default:
                            return (0, tm.mq)(e, t);
                    }
                })(s.config, f),
            [s.config, f],
        ),
        { completedRatio: S, completedRatioDisplay: C } = (0, $.O9)(s),
        N = i.useMemo(() => (0, tm.wo)(s.config, f), [s.config, f]),
        p = (0, ei.tG)(),
        T = (0, ei.WS)(),
        A = (0, tc.wW)(),
        { isHovering: O, hoverProps: I } = t_(
            i.useCallback(
                (e) => {
                    T({
                        adContentId: t,
                        relatedQuestId: s.id,
                        adCreativeType: m.p.QUEST_HOME_HERO,
                        event: e ? ex.HAw.QUEST_HOVER : ex.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: es.uF.QUEST_HOME_HERO_SHELF,
                            content_name: (0, ea.jO)(es.uF.QUEST_HOME_HERO_SHELF),
                            content_position: l,
                        },
                        sourceQuestContent: es.uF.QUEST_HOME_HERO_SHELF,
                    });
                },
                [t, T, l, s.id],
            ),
        ),
        { hoverSpring: R } = (0, e4.z)({ hoverSpring: +!!O, config: e0.config.gentle }),
        b = i.useCallback(() => {
            n(s.id),
                (0, en.E5)(en.kI.STEP_2_CLICKED_INTERNAL, "quest_home_hero_shelf_cards")
                    ? (0, Z.r)({
                          type: ee.F.CLICK_INTERNAL,
                          adCreativeType: m.p.QUEST_HOME_HERO,
                          adCreativeId: t,
                          relatedQuestId: s.id,
                          questContentCTA: ea.Cy.VIEW_QUESTS,
                          surfaceId: es.uF.QUEST_HOME_HERO_SHELF,
                          sourceQuestContent: es.uF.QUEST_HOME_HERO_SHELF,
                          questContentPosition: l,
                          impressionId: A(),
                      })
                    : p({
                          adContentId: t,
                          relatedQuestId: s.id,
                          adCreativeType: m.p.QUEST_HOME_HERO,
                          questContent: es.uF.QUEST_HOME_HERO_SHELF,
                          questContentCTA: ea.Cy.VIEW_QUESTS,
                          questContentPosition: l,
                          sourceQuestContent: es.uF.QUEST_HOME_HERO_SHELF,
                      });
        }, [n, t, s.id, p, l, A]);
    return (0, r.jsxs)(e7.D, {
        tag: "div",
        className: o()(tv.FW, tv.$R),
        onClick: b,
        "aria-label": ew.intl.string(ew.t["th2+0j"]),
        [ez]: !0,
        ...I,
        children: [
            (0, r.jsx)("div", { className: tv.hu }),
            (0, r.jsxs)(_.B, {
                direction: "horizontal",
                gap: 4,
                children: [
                    (0, r.jsx)(e5.E, { type: { text: j } }),
                    (0, r.jsx)(e0.animated.div, {
                        style: { opacity: (0, tf.a)(R.to([0, 1], [1, 0])) },
                        children: (0, r.jsx)(e5.E, { type: { text: x }, icon: e9.ClockIcon }),
                    }),
                ],
            }),
            (0, r.jsx)(e0.animated.div, {
                className: tv.Tr,
                style: { transform: R.to([0, 1], [1, 1.1]).to((e) => `scale(${e})`) },
                children: (0, r.jsx)(th.A, {
                    percentComplete: S,
                    overlayText: O && null != N ? `${N}` : void 0,
                    size: 120,
                    children: (0, r.jsx)(tx.A, {
                        quest: s,
                        questContent: es.uF.QUEST_HOME_HERO_SHELF,
                        sourceQuestContent: es.uF.QUEST_HOME_HERO_SHELF,
                        autoplay: O,
                        fullWidth: !0,
                    }),
                }),
            }),
            (0, r.jsx)(e0.animated.div, {
                className: tv.tw,
                style: {
                    opacity: (0, tf.a)(R.to([0, 1], [1, 0])),
                    transform: R.to([0, 1], [1, 0.9]).to((e) => `scale(${e})`),
                    transformOrigin: "bottom left",
                },
                children: (0, r.jsxs)(_.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)(J.E, {
                            variant: "text-md/semibold",
                            color: "text-strong",
                            className: tv.Ht,
                            children: v,
                        }),
                        (0, r.jsxs)(_.B, {
                            align: "start",
                            direction: "horizontal",
                            gap: 8,
                            children: [
                                (0, r.jsxs)(_.B, {
                                    direction: "horizontal",
                                    gap: 4,
                                    fullWidth: !1,
                                    children: [
                                        (0, r.jsx)(te.y, { size: "xs", color: ek.A.colors.ICON_MUTED.css }),
                                        (0, r.jsx)(J.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children: s.config.messages.gamePublisher,
                                        }),
                                    ],
                                }),
                                (0, r.jsxs)(_.B, {
                                    direction: "horizontal",
                                    gap: 4,
                                    fullWidth: !1,
                                    children: [
                                        (0, tE.pv)(s.config) === e2.Z.VIDEO
                                            ? (0, r.jsx)(tt.S, { size: "xs", color: ek.A.colors.ICON_MUTED.css })
                                            : (0, r.jsx)(ts.GameControllerIcon, {
                                                  size: "xs",
                                                  color: ek.A.colors.ICON_MUTED.css,
                                              }),
                                        (0, r.jsx)(J.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children: C,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            }),
            (0, r.jsx)(e0.animated.div, {
                className: tv.um,
                style: { transform: R.to([0, 1], [100, 0]).to((e) => `translateY(${e}%)`) },
                children: (0, r.jsx)(g.$, {
                    fullWidth: !0,
                    onClick: (e) => {
                        e.stopPropagation(), b();
                    },
                    text: ew.intl.string(ew.t["th2+0j"]),
                }),
            }),
        ],
    });
}
var tN = s(190107),
    tp = s(531525),
    tT = s(726356);
function tA(e) {
    let { hero: t, shelfQuests: s, isBannerLoading: n, onQuestCtaClick: l } = e,
        a = (0, eR.C)(),
        { enabled: o } = eH.useConfig({ location: tN.rE.QUEST_HOME_DESKTOP }),
        u = i.useMemo(
            () =>
                o
                    ? (s
                          .map((e) => (0, eL.xc)(e) ?? (0, eL._3)(e)?.at(0) ?? null)
                          .filter(eM.Vq)
                          .at(0) ?? null)
                    : null,
            [s, o],
        ),
        { isLoading: c, data: d, error: E } = (0, eI.I)(u),
        h = (0, eO.A)(d),
        x = o && null != d && !h;
    i.useEffect(() => {
        o &&
            null != u &&
            null != E &&
            (eb.default.track(ex.HAw.AD_ASSET_LOADING_FAILURE, {
                source: tN.rE.QUEST_HOME_HERO_SHELF_DESKTOP,
                ad_creative_id: t.id,
                ad_creative_type: m.p.QUEST_HOME_HERO,
                application_ids: [u],
            }),
            eQ.A.captureException(E, { tags: { source: tN.rE.QUEST_HOME_HERO_SHELF_DESKTOP } }));
    }, [o, E, t.id, u]);
    let f = i.useMemo(
            () => (x ? (null != t.shelfImage ? t.shelfImage : (d?.getCoverURL(512) ?? null)) : null),
            [x, t, d],
        ),
        g = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
                [s, n] = i.useState(void 0);
            return (
                i.useEffect(() => {
                    let s = !1;
                    return (
                        (null != e ? eA(e, t) : Promise.resolve(void 0))
                            .then((e) => {
                                s || n(e);
                            })
                            .catch(() => {}),
                        () => {
                            s = !0;
                        }
                    );
                }, [e, t]),
                s
            );
        })(
            i.useMemo(() => (null != f ? (0, el.UX)(f, { format: "webp", width: 400, height: 600 }) : null), [f]),
            8,
        ),
        v = i.useMemo(() => (null == g ? null : (0, ej.Z)(g)), [g]),
        j = i.useMemo(() => {
            if (null != v)
                return {
                    "--custom-hero-shelf-scrim-gradient-start": v[0],
                    "--custom-hero-shelf-scrim-gradient-end": v[1],
                };
        }, [v]);
    return n || c
        ? (0, r.jsx)(tO, { numShelfCards: s.length + 1 })
        : (0, r.jsx)(eZ, {
              className: tT.vo,
              overflowAmount: 25,
              maskWidth: eG(a),
              maskMarginMultiplier: 0.75,
              children: (0, r.jsxs)(_.B, {
                  className: tT.I2,
                  direction: "horizontal",
                  fullWidth: !1,
                  gap: 20,
                  style: j,
                  children: [
                      !o &&
                          (0, r.jsx)(ec.Z, {
                              adContentId: t.id,
                              adCreativeType: m.p.QUEST_HOME_HERO,
                              questContent: es.uF.QUEST_HOME_HERO_SHELF,
                              questContentPosition: 0,
                              sourceQuestContent: es.uF.QUEST_HOME_HERO_SHELF,
                              children: (e, s) =>
                                  (0, r.jsx)("div", {
                                      ref: (t) => {
                                          e.current = t;
                                      },
                                      children: (0, r.jsx)(tj, { hero: t, contentPosition: 0, impressionRef: s }),
                                  }),
                          }),
                      x &&
                          (0, r.jsx)(ec.Z, {
                              adContentId: t.id,
                              adCreativeType: m.p.QUEST_HOME_HERO,
                              questContent: es.uF.QUEST_HOME_HERO_SHELF,
                              questContentPosition: 0,
                              sourceQuestContent: es.uF.QUEST_HOME_HERO_SHELF,
                              children: (e, s) =>
                                  (0, r.jsx)("div", {
                                      ref: (t) => {
                                          e.current = t;
                                      },
                                      children: (0, r.jsx)(tS, {
                                          hero: t,
                                          game: d,
                                          shelfImage: f,
                                          contentPosition: 0,
                                          impressionRef: s,
                                      }),
                                  }),
                          }),
                      s.map((e, s) =>
                          (0, r.jsx)(
                              ec.Z,
                              {
                                  adContentId: t.id,
                                  adCreativeType: m.p.QUEST_HOME_HERO,
                                  relatedQuestId: e.id,
                                  questContent: es.uF.QUEST_HOME_HERO_SHELF,
                                  questContentPosition: s + 1,
                                  sourceQuestContent: es.uF.QUEST_HOME_HERO_SHELF,
                                  children: (n) =>
                                      (0, r.jsx)("div", {
                                          ref: (e) => {
                                              n.current = e;
                                          },
                                          children: (0, r.jsx)(tC, {
                                              heroId: t.id,
                                              quest: e,
                                              onQuestCtaClick: l,
                                              contentPosition: s + 1,
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
function tO(e) {
    let { className: t, numShelfCards: s } = e,
        { enabled: n } = eH.useConfig({ location: tN.rE.QUEST_HOME_DESKTOP }),
        l = (0, eR.C)(),
        i = n ? Math.max(s, 3) : Math.max(s, 4);
    return (0, r.jsx)(eZ, {
        className: o()(tT.vo, t),
        overflowAmount: 25,
        maskWidth: eG(l),
        maskMarginMultiplier: 0.75,
        children: (0, r.jsx)(_.B, {
            className: tT.I2,
            direction: "horizontal",
            fullWidth: !1,
            gap: 20,
            "aria-hidden": !0,
            children: Array.from({ length: i }).map((e, t) =>
                (0, r.jsx)("div", { className: o()(tp.m, tT.W_, { [tT.E8]: n && 0 === t }) }, t),
            ),
        }),
    });
}
var tI = s(74498);
function tR() {
    return (0, r.jsx)("div", { className: tI.Np });
}
function tb(e) {
    let { heroImage: t, heroVideo: s } = e,
        n = i.useRef(null);
    (0, ed.A)(n);
    let l = i.useMemo(() => (null != s ? (0, el.WV)(s) : null) ?? t, [s, t]);
    return (0, r.jsx)(Y._M, {
        id: "QuestHomeHeroBackground_heroVideoWithImageFallback",
        children: (e) =>
            (0, r.jsx)(eu.N, {
                showVideo: !0,
                imageRef: e,
                assetRef: n,
                imageAsset: {
                    alt: "",
                    className: tI.LY,
                    asset: { url: l, mimetype: (0, el.vm)(l), isAnimated: !1 },
                    assetId: l,
                },
                videoAsset: {
                    alt: "",
                    className: tI.LY,
                    asset: { url: s, mimetype: (0, el.vm)(s), isAnimated: !0 },
                    assetId: s,
                },
            }),
    });
}
function tM(e) {
    let { heroImage: t, heroVideo: s } = e;
    return null == s
        ? (0, r.jsxs)("div", {
              className: tI.Tv,
              children: [
                  (0, r.jsx)(tR, {}),
                  (0, r.jsx)("div", {
                      className: tI.LO,
                      children: (0, r.jsx)(Y._M, {
                          id: "QuestHomeHeroBackground_heroImage",
                          children: (e) => (0, r.jsx)("img", { ref: e, className: tI.LY, src: t, alt: "" }),
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: o()(tI.LO, tI.jx, tI.hw),
                      children: (0, r.jsx)("img", { className: tI.LY, src: t, alt: "" }),
                  }),
                  (0, r.jsx)("div", {
                      className: o()(tI.LO, tI.jx, tI.Co),
                      children: (0, r.jsx)("img", { className: tI.LY, src: t, alt: "" }),
                  }),
              ],
          })
        : (0, r.jsxs)("div", {
              className: tI.Tv,
              children: [
                  (0, r.jsx)(tR, {}),
                  (0, r.jsx)("div", { className: tI.LO, children: (0, r.jsx)(tb, { heroImage: t, heroVideo: s }) }),
              ],
          });
}
function tQ(e) {
    let { hero: t, hasFetchedQuests: s, hasNoAccessibleQuests: n } = e,
        l = (0, ei.WS)(),
        r = i.useRef(!1);
    return (
        i.useEffect(() => {
            let e = t.questIds;
            s &&
                null != e &&
                e.length > 0 &&
                n &&
                !r.current &&
                ((r.current = !0),
                l({
                    adContentId: t.id,
                    adCreativeType: m.p.QUEST_HOME_HERO,
                    event: ex.HAw.QUEST_HOME_HERO_MISSING_QUESTS,
                    properties: { missing_quest_ids: e },
                    sourceQuestContent: es.uF.QUEST_HOME_HERO,
                }));
        }, [s, n, t.id, t.questIds, l]),
        null
    );
}
function tH(e) {
    let { hero: t, onQuestCtaClick: s, isBannerLoading: n } = e,
        l = (0, E.bG)([et.A], () => et.A.quests),
        a = (0, E.bG)([et.A], () => et.A.lastFetchedCurrentQuests > 0),
        { shelfQuests: u, isShelfEnabled: c } = (0, $.t9)(t),
        { dismissQuestHomeHeroContent: d } = (0, e_.I)();
    i.useEffect(() => {
        d();
    }, [d]);
    let h = i.useMemo(() => t.questIds?.filter((e) => l.has(e)) ?? [], [l, t.questIds]),
        x = h[0];
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(ec.Z, {
                adContentId: t.id,
                adCreativeType: m.p.QUEST_HOME_HERO,
                questContent: es.uF.QUEST_HOME_HERO,
                sourceQuestContent: es.uF.QUEST_HOME_HERO,
                children: (e, l) =>
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(tQ, { hero: t, hasFetchedQuests: a, hasNoAccessibleQuests: 0 === h.length }),
                            (0, r.jsx)(ev, {
                                ref: (t) => {
                                    e.current = n ? null : t;
                                },
                                adContentId: t.id,
                                className: o()({ [tI.lX]: n }),
                                topContent: (0, r.jsxs)(_.B, {
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
                                                        className: tI.wm,
                                                    }),
                                            }),
                                        (0, r.jsx)(J.E, {
                                            color: "text-strong",
                                            variant: "text-sm/normal",
                                            className: tI.yu,
                                            children: ew.intl.string(ew.t.OJjFi5),
                                        }),
                                    ],
                                }),
                                title: t.labelTitle,
                                subtitle: t.labelSubtitle,
                                buttons: (0, r.jsxs)(f.e, {
                                    children: [
                                        (0, r.jsx)(g.$, {
                                            onClick: () => {
                                                (0, eo._Q)(
                                                    {
                                                        adContentId: t.id,
                                                        adCreativeType: m.p.QUEST_HOME_HERO,
                                                        cta: t.cta,
                                                    },
                                                    {
                                                        content: es.uF.QUEST_HOME_HERO,
                                                        ctaContent: ea.Cy.OPEN_GAME_LINK,
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
                                                    s(x),
                                                        (0, en.E5)(en.kI.STEP_2_CLICKED_INTERNAL, "quest_home_hero")
                                                            ? (0, Z.r)({
                                                                  type: ee.F.CLICK_INTERNAL,
                                                                  adCreativeType: m.p.QUEST_HOME_HERO,
                                                                  adCreativeId: t.id,
                                                                  questContentCTA: ea.Cy.VIEW_QUESTS,
                                                                  surfaceId: es.uF.QUEST_HOME_HERO,
                                                                  sourceQuestContent: es.uF.QUEST_HOME_HERO,
                                                              })
                                                            : (0, er.vK)({
                                                                  adContentId: t.id,
                                                                  adCreativeType: m.p.QUEST_HOME_HERO,
                                                                  questContent: es.uF.QUEST_HOME_HERO,
                                                                  questContentCTA: ea.Cy.VIEW_QUESTS,
                                                                  sourceQuestContent: es.uF.QUEST_HOME_HERO,
                                                              });
                                                },
                                                size: "md",
                                                text: ew.intl.string(ew.t["th2+0j"]),
                                                variant: "color-mix",
                                            }),
                                    ],
                                }),
                                background: (0, r.jsx)(tM, { heroImage: t.heroImage, heroVideo: t.heroVideo }),
                            }),
                        ],
                    }),
            }),
            c && (0, r.jsx)(tA, { hero: t, isBannerLoading: n, shelfQuests: u, onQuestCtaClick: s }),
        ],
    });
}
function tL() {
    return (0, r.jsx)("div", { className: o()(ef.iE, ef.FG, ef.B3), children: (0, r.jsx)(X.y, {}) });
}
var ty = s(201805),
    tU = s(228366),
    tD = s(396813);
s(667532);
var tF = s(890497),
    tq = s(663417),
    tP = s(922016),
    tk = s(624479),
    tw = s(416052),
    tB = s(417098);
function tV(e) {
    let { error: t } = e,
        s = t.getAnyErrorMessage();
    return (0, r.jsx)(tB.$T, {
        color: tB.Hv.DANGER,
        children: (0, r.jsx)("div", { children: null != s ? s : ew.intl.string(ew.t.ZErSg5) }),
    });
}
var tG = s(602853),
    tW = s(817281),
    tK = s(688810),
    tz = s(487245),
    t$ = s(363195),
    tY = s(912875);
let tJ = function () {
    let { analyticsLocations: e } = (0, tK.Ay)(),
        t = (0, E.bG)([t$.A], () => t$.A.theme),
        s = i.useRef(null);
    i.useEffect(() => {
        null == s.current && (s.current = t);
    }, [t]);
    let n = (0, tG.r)(ek.A.colors.BACKGROUND_BASE_LOW, ex.NJ8.LIGHT),
        l = (0, tG.r)(ek.A.colors.BACKGROUND_BASE_LOW, ex.NJ8.DARKER),
        a = (0, tG.r)(ek.A.colors.BACKGROUND_BASE_LOW, ex.NJ8.MIDNIGHT),
        o = i.useMemo(
            () => [
                { theme: ex.NJ8.LIGHT, label: ew.t.K2sFfo, color: n.hex() },
                { theme: ex.NJ8.DARKER, label: ew.t.b8Cei3, color: l.hex() },
                { theme: ex.NJ8.MIDNIGHT, label: ew.t.Do4ZJx, color: a.hex() },
            ],
            [n, l, a],
        ),
        u = i.useCallback(
            (t) => {
                (0, tz.X8)({ isPersisted: !0, analyticsLocations: e, themeName: `default ${t}` }),
                    (0, tW.u_)({ theme: t });
            },
            [e],
        ),
        c = i.useCallback(() => {
            null != s.current && u(s.current);
        }, [u]);
    return (0, r.jsx)("div", {
        className: tY.N,
        children: (0, r.jsxs)("div", {
            className: tY.t7,
            children: [
                o.map((e) =>
                    (0, r.jsxs)(
                        e7.D,
                        {
                            tag: "div",
                            className: tY.Du,
                            onClick: () => u(e.theme),
                            "aria-label": ew.intl.string(e.label),
                            "aria-pressed": t === e.theme,
                            children: [
                                (0, r.jsx)("div", {
                                    className: `${tY.WT} ${t === e.theme ? tY.TA : ""}`,
                                    style: { backgroundColor: e.color },
                                }),
                                (0, r.jsx)("span", { className: tY.i, children: ew.intl.string(e.label) }),
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
var tX = s(219354);
let tZ = function (e) {
    let { questId: t, setQuestId: s, quest: n, refreshQuest: l } = e,
        [a, o] = i.useState(!1),
        [u, c] = i.useState(!1),
        d = i.useRef(null),
        m = (0, $.pT)(),
        h = (0, E.bG)([et.A], () => (null != t ? et.A.getFetchQuestPreviewError(t) : null), [t]),
        x = (0, E.bG)([et.A], () => null != t && et.A.isFetchingQuestPreview(t), [t]),
        v = i.useMemo(() => {
            let e = m.map((e) => ({
                id: e.id,
                label: `${e.config?.messages?.questName ?? e.id} (${e.id})`,
                value: e.id,
            }));
            return null == t || e.some((e) => e.value === t) || e.unshift({ id: t, label: t, value: t }), e;
        }, [m, t]),
        _ = i.useCallback(async () => {
            if (null != t) {
                o(!0);
                try {
                    await (0, tD.Yb)(t, 1);
                } finally {
                    o(!1);
                }
            }
        }, [t, o]),
        j = i.useCallback(async () => {
            if (null != t) {
                o(!0);
                try {
                    await (0, tD.UZ)(t);
                } finally {
                    o(!1);
                }
            }
        }, [t, o]),
        S = i.useCallback(async () => {
            if (null != t) {
                o(!0);
                try {
                    let e = Math.random();
                    await (0, tD.Yb)(t, e);
                } finally {
                    o(!1);
                }
            }
        }, [t, o]),
        C = i.useCallback(
            (e) => {
                (0, B.uJ)(e) || null == s || s(e);
            },
            [s],
        );
    return (0, r.jsxs)("div", {
        className: tX.Fr,
        children: [
            (0, r.jsx)("div", {
                children: (0, r.jsx)("div", {
                    className: tX.Br,
                    children: (0, r.jsxs)("div", {
                        className: tX.bo,
                        children: [
                            (0, r.jsx)(tJ, {}),
                            (0, r.jsxs)("div", {
                                className: tX.b8,
                                children: [
                                    (0, r.jsx)(
                                        tF.Z,
                                        {
                                            selectionMode: "single",
                                            label: "Quest ID",
                                            hideLabel: !0,
                                            options: v,
                                            value: t,
                                            onSelectionChange: C,
                                            placeholder: ew.intl.string(ew.t.Zw8jxn),
                                            clearable: !0,
                                            customMatchSorter: (e, t) => {
                                                if ((0, B.uJ)(t?.trim())) return e;
                                                let s = e.filter(
                                                    (e) =>
                                                        e.label.toLowerCase().includes(t.toLowerCase()) ||
                                                        e.value.toLowerCase().includes(t.toLowerCase()),
                                                );
                                                return 0 === s.length && "" !== t.trim()
                                                    ? [{ label: t.trim(), value: t.trim() }]
                                                    : s;
                                            },
                                        },
                                        `${t}-${n?.config?.messages?.questName ?? ""}`,
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
                null != n &&
                (0, r.jsx)("div", {
                    className: tX.in,
                    children: (0, r.jsxs)(f.e, {
                        className: tX.xv,
                        children: [
                            (0, r.jsx)(g.$, {
                                onClick: _,
                                disabled: a,
                                loading: a,
                                variant: "secondary",
                                text: ew.intl.string(ew.t.jQEfRT),
                            }),
                            (0, r.jsx)(g.$, {
                                onClick: j,
                                disabled: a,
                                loading: a,
                                variant: "secondary",
                                text: ew.intl.string(ew.t.taqkwK),
                            }),
                            (0, r.jsx)(g.$, {
                                onClick: S,
                                disabled: a,
                                loading: a,
                                variant: "secondary",
                                text: ew.intl.string(ew.t.cKSLr4),
                            }),
                            (0, r.jsx)(tP.Y, {
                                targetElementRef: d,
                                shouldShow: u,
                                onRequestClose: () => c(!1),
                                position: "bottom",
                                align: "center",
                                renderPopout: () =>
                                    (0, r.jsx)("div", {
                                        className: tX.PP,
                                        children: (0, r.jsx)("div", {
                                            className: tX.sH,
                                            children: (0, r.jsx)(tw.A, {
                                                value: tg.Sb.QUEST_PREVIEW_TOOL_2(t),
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
                                        icon: tk.CopyIcon,
                                        variant: "secondary",
                                    }),
                            }),
                        ],
                    }),
                }),
            null != h ? (0, r.jsx)(tV, { error: h }) : null,
            x ? (0, r.jsx)(X.y, {}) : null,
        ],
    });
};
var t0 = s(364522),
    t1 = s(761508),
    t8 = s(425069);
function t2() {
    return (0, r.jsx)("div", { className: t8.y });
}
var t3 = s(834615),
    t4 = s(34665);
let t7 = function (e) {
    let { quest: t } = e;
    return (0, r.jsx)("div", {
        className: t4.x3,
        children: (0, r.jsxs)("div", {
            className: t4.B0,
            children: [
                (0, r.jsx)(eE.D, {
                    className: t4.R_,
                    variant: "heading-md/semibold",
                    children: ew.intl.string(ew.t.L2mlUb),
                }),
                (0, r.jsx)(ec.R, {
                    questOrQuests: t,
                    questContent: es.uF.ACTIVITY_PANEL,
                    sourceQuestContent: es.uF.ACTIVITY_PANEL,
                    children: (e) =>
                        (0, r.jsx)("div", {
                            ref: (t) => {
                                e.current = t;
                            },
                            children: (0, r.jsx)(t3.default, { quest: t }),
                        }),
                }),
            ],
        }),
    });
};
var t6 = s(242939),
    t5 = s(717695),
    t9 = s(466209),
    se = s(83978);
let st = function (e) {
    let { quest: t } = e;
    return (0, r.jsx)("div", {
        className: t4.x3,
        children: (0, r.jsxs)("div", {
            className: t9.wp,
            children: [
                (0, r.jsx)(eE.D, {
                    className: t9.Oo,
                    variant: "heading-md/semibold",
                    children: ew.intl.string(ew.t.rjVPdM),
                }),
                (0, r.jsx)("div", {
                    className: t9.RE,
                    children: (0, r.jsx)("div", {
                        className: t9.Z,
                        children: (0, r.jsx)("div", {
                            className: se.C3,
                            children: (0, r.jsx)(t5.A, {
                                children: (0, r.jsx)(Y.y5, {
                                    source: "preview",
                                    adCreativeId: t.id,
                                    adCreativeType: m.p.QUEST,
                                    children: (0, r.jsx)(t6.QuestBar, { quest: t }),
                                }),
                            }),
                        }),
                    }),
                }),
            ],
        }),
    });
};
var ss = s(322338);
function sn(e) {
    let { quest: t } = e;
    return (0, r.jsx)("div", {
        className: t4.x3,
        children: (0, r.jsxs)("div", {
            className: t4.B0,
            children: [
                (0, r.jsx)(eE.D, {
                    className: t4.R_,
                    variant: "heading-md/semibold",
                    children: ew.intl.string(ew.t.gWinpQ),
                }),
                (0, r.jsx)("div", {
                    className: t4.YT,
                    children: (0, r.jsx)(ss.A, {
                        channelId: "preview-channel-id",
                        previewQuest: t,
                        isParticipatingOverride: !1,
                    }),
                }),
            ],
        }),
    });
}
var sl = s(711038),
    sr = s(622409);
let si = function (e) {
    let { questId: t } = e;
    return (0, r.jsx)("div", {
        className: t4.x3,
        children: (0, r.jsxs)("div", {
            className: t4.B0,
            children: [
                (0, r.jsx)(eE.D, { variant: "heading-md/semibold", children: ew.intl.string(ew.t.IcljUu) }),
                (0, r.jsx)("div", {
                    className: sr.wu,
                    children: (0, r.jsx)("span", { className: sr.cy, children: ew.intl.string(ew.t.q97mEu) }),
                }),
                (0, r.jsx)("div", {
                    className: sr.oU,
                    children: (0, r.jsx)("div", {
                        className: sr.zx,
                        children: (0, r.jsx)("div", {
                            className: sr.Lj,
                            children: (0, r.jsx)("div", {
                                className: sr.n0,
                                children: (0, r.jsx)(sl.A, { questId: t }),
                            }),
                        }),
                    }),
                }),
            ],
        }),
    });
};
var sa = s(976014),
    so = s(484810);
function su(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", { className: so.y, children: t });
}
var sc = s(612324),
    sd = s(173936),
    sm = s(365199),
    sE = s(270045),
    sh = s(79545),
    sx = s(720875),
    sf = s(614972),
    sg = s(339350),
    sv = s(782134),
    s_ = s(271536),
    sj = s(768622),
    sS = s(793934),
    sC = s(662940),
    sN = s(710969);
let sp = 2 * to.A.Millis.DAY,
    sT = 3 * to.A.Millis.DAY,
    sA = new Map(eV.map((e) => [e.identifier, e])),
    sO = {
        [eB.DISCOVERED]: function (e, t) {
            let { discoveredAtByQuestId: s } = t;
            return e.slice().sort((e, t) => {
                var n, l;
                return (n = s.get(e)), (l = s.get(t)), null == n || null == l ? 0 : l.localeCompare(n);
            });
        },
    };
function sI(e, t) {
    let s = sA.get(e)?.maxItems,
        n = t.get(e)?.length ?? 0;
    return null == s || n < s;
}
var sR = s(853978);
function sb(e) {
    let { quest: t, isHovering: s = !1 } = e,
        n = (0, sh.Pd)(t),
        l = (0, E.bG)([et.A], () => n === sh.UA.UNENROLLED && null != et.A.questEnrollmentBlockedUntil, [n]),
        a = (0, $.fc)(t),
        u = (0, $.I3)(t),
        c = i.useMemo(() => (0, sC.Dd)(t.config, n, l), [t.config, n, l]),
        d = i.useMemo(() => (0, sC.CK)(n, a, u, l), [n, a, u, l]),
        m = (function (e) {
            let t = (0, sh.Pd)(e),
                [s] = i.useState(() => Date.now()),
                n = i.useMemo(() => new Date(e.config.expiresAt), [e.config.expiresAt]),
                l = n.getTime() - s,
                r =
                    (function (e) {
                        switch (e) {
                            case sh.UA.UNENROLLED:
                            case sh.UA.ENROLLED:
                            case sh.UA.INCOMPLETE:
                                return !0;
                            case sh.UA.COMPLETED:
                            case sh.UA.CLAIMED:
                            case sh.UA.EXPIRED:
                            case sh.UA.EXPIRED_CLAIMABLE:
                                return !1;
                        }
                    })(t) &&
                    l < sT &&
                    l > 0,
                { days: a, hours: o, minutes: u, seconds: c } = (0, tl.A)(n, to.A.Millis.SECOND, void 0, !r);
            return r && (0 !== a || 0 !== o || 0 !== u || 0 !== c)
                ? `${String(24 * a + o).padStart(2, "0")}:${String(u).padStart(2, "0")}:${String(c).padStart(2, "0")}`
                : null;
        })(t),
        h = null != m ? m : c;
    return (0, r.jsxs)("div", {
        className: o()(sR.fC, { [sR.R]: s }),
        children: [
            (0, r.jsxs)("div", {
                className: sR.qS,
                children: [
                    null != h &&
                        (0, r.jsx)(J.E, {
                            variant: "text-xs/semibold",
                            className: sR.SJ,
                            color: "text-overlay-light",
                            children: h,
                        }),
                    null != h &&
                        null != d &&
                        (0, r.jsx)(J.E, {
                            variant: "text-xs/semibold",
                            color: "text-overlay-light",
                            className: sR.If,
                            children: "\u2022",
                        }),
                    null != d &&
                        (0, r.jsxs)("span", {
                            className: sR.BA,
                            children: [
                                (function (e, t) {
                                    let s = { size: "xxs", className: sR.rF, color: "currentColor" };
                                    if (t) return (0, r.jsx)(sg.Q, { ...s });
                                    switch ((0, sC.pv)(e)) {
                                        case sC.UK.PLAY:
                                            return (0, r.jsx)(ts.GameControllerIcon, { ...s });
                                        case sC.UK.WATCH:
                                            return (0, r.jsx)(sv.PlayIcon, { ...s });
                                        case sC.UK.ACTIVITY:
                                            return (0, r.jsx)(s_.q, { ...s });
                                        case sC.UK.INSTANT_PLAY:
                                            return (0, r.jsx)(sj.g, { ...s });
                                        case sC.UK.ARENA:
                                            return (0, r.jsx)(sS.q, { ...s });
                                    }
                                })(t, l),
                                (0, r.jsx)(J.E, {
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
                    className: o()(sR.qS, sR.WZ),
                    children: (0, r.jsx)(J.E, {
                        variant: "text-xs/bold",
                        color: "currentColor",
                        children: ew.intl.string(ew.t.SKNnqq),
                    }),
                }),
        ],
    });
}
var sM = s(409626),
    sQ = s(3738),
    sH = s(646917),
    sL = s(866665),
    sy = s(743368),
    sU = s(657113),
    sD = s(617986),
    sF = s(964051);
function sq(e) {
    let { quest: t, questContent: s, sourceQuestContent: n, isHovering: l, isInFeaturedSection: i } = e,
        a = (0, sh.Pd)(t),
        { ctaOnHover: u } = G.aD.useConfig({ location: tN.rE.QUEST_HOME_DESKTOP }),
        c = (0, E.bG)([et.A], () => a === sh.UA.UNENROLLED && null != et.A.questEnrollmentBlockedUntil, [a]),
        d = !(0, eL.no)(t) || ![sh.UA.ENROLLED, sh.UA.UNENROLLED, sh.UA.INCOMPLETE].includes(a),
        m = a === sh.UA.EXPIRED || (a === sh.UA.CLAIMED && (0, eL.GL)(t)),
        h = (0, $.do)({ quest: t, content: s, ctaContent: ea.Cy.OPEN_GAME_LINK, sourceQuestContent: n });
    return (0, r.jsxs)("div", {
        className: o()(sF.lO, { [sF.Fq]: l || !u }),
        onClick: (e) => e.stopPropagation(),
        children: [
            (0, r.jsx)("div", { className: sF.Cj }),
            (0, r.jsx)(em.N, {
                theme: ex.NJ8.DARKER,
                disableAdaptiveTheme: !0,
                children: (e) =>
                    (0, r.jsx)("div", {
                        className: o()(e, sF.tn),
                        children: (0, r.jsxs)(f.e, {
                            direction: "horizontal",
                            fullWidth: !0,
                            wrap: !1,
                            size: "md",
                            children: [
                                d &&
                                    (m || i
                                        ? (0, r.jsx)(g.$, {
                                              variant: "secondary",
                                              text: t.config.ctaConfig.buttonLabel,
                                              onClick: h,
                                          })
                                        : (0, r.jsx)(sL.m, {
                                              text: ew.intl.string(ew.t.LLLLPD),
                                              position: "top",
                                              align: "center",
                                              ariaHidden: !0,
                                              children: (0, r.jsx)(eU.K, {
                                                  variant: "secondary",
                                                  icon: sy.W,
                                                  "aria-label": ew.intl.string(ew.t.LLLLPD),
                                                  onClick: h,
                                              }),
                                          })),
                                !m &&
                                    !c &&
                                    (0, r.jsx)(sU.A, {
                                        quest: t,
                                        surface: sh.V3.QUEST_HOME_TILE_V2_FOOTER,
                                        analyticsCtxQuestContent: s,
                                        analyticsCtxSourceQuestContent: n,
                                    }),
                                c &&
                                    (0, r.jsx)(g.$, {
                                        variant: "overlay-primary",
                                        text: ew.intl.string(ew.t.vY9GgG),
                                        onClick: () => (0, sD.m6)(t, s, n),
                                    }),
                            ],
                        }),
                    }),
            }),
        ],
    });
}
var sP = s(403581),
    sk = s(576761),
    sw = s(41327);
function sB(e) {
    let { onClick: t, questId: s, orbMultiplierEligibility: n } = e,
        l = (0, $.ZP)(s),
        i = (0, sk.B9)(n);
    if (null == l) return null;
    let a = i
        ? ew.intl.formatToPlainString(ew.t.l2UfLG, { bonusOrbMultiplier: l })
        : ew.intl.formatToPlainString(ew.t["G+mKoo"], { bonusOrbMultiplier: l });
    return (0, r.jsx)(e7.D, {
        onClick: function (e) {
            null != l && (e.stopPropagation(), (0, sD.gC)(l, n), t?.());
        },
        "aria-label": a,
        children: (0, r.jsxs)("div", {
            className: sw.k,
            children: [
                (0, r.jsx)(sP.t, { size: "xs", color: "currentColor" }),
                (0, r.jsx)(J.E, { variant: "text-sm/normal", color: "currentColor", className: sw.Q, children: a }),
            ],
        }),
    });
}
var sV = s(947641),
    sG = s(194261),
    sW = s(106799),
    sK = s(476334);
function sz(e) {
    let { quest: t, questContent: s, sourceQuestContent: n, isHovering: l } = e,
        i = (0, E.bG)([ti.default], () => ti.default.getCurrentUser()),
        a = (0, tm.mq)(t.config, i),
        u = (0, tm.ks)(t.config),
        c = (0, tm.wo)(t.config, i),
        d = (0, tm.l0)(t.config, i),
        m =
            null != c
                ? c > 700 * d
                    ? el.i2.TIER_4
                    : c > 200 * d
                      ? el.i2.TIER_3
                      : c > 100 * d
                        ? el.i2.TIER_2
                        : el.i2.TIER_1
                : void 0,
        { completedRatio: h } = (0, $.O9)(t),
        x = t.userStatus?.claimedAt != null,
        f = (0, sN.Ic)(t),
        g = t.userStatus?.enrolledAt == null,
        v = x ? "completed" : f ? "expired" : null,
        _ = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(tx.A, {
                    quest: t,
                    orbTier: m,
                    questContent: s,
                    autoplay: l,
                    lazyLoad: !0,
                    className: sK.al,
                    fullWidth: !0,
                    sourceQuestContent: n,
                }),
                "completed" === v &&
                    (0, r.jsx)("div", {
                        className: sK.EY,
                        children: (0, r.jsx)(sV.r, { className: sK.AM, size: "sm", color: "currentColor" }),
                    }),
                "expired" === v &&
                    (0, r.jsx)("div", {
                        className: sK.EY,
                        children: (0, r.jsx)(sG.LockIcon, { size: "sm", className: sK.Sz, color: "currentColor" }),
                    }),
            ],
        });
    return (0, r.jsxs)("div", {
        className: o()(sK.CZ, { [sK.Pv]: l }),
        children: [
            (0, r.jsx)(em.N, {
                theme: ex.NJ8.DARK,
                disableAdaptiveTheme: !0,
                children: (e) =>
                    (0, r.jsx)("div", {
                        className: o()(e, sK.tE, { [sK.cB]: l }),
                        children: g
                            ? (0, r.jsx)("div", { className: sK.fm, children: _ })
                            : (0, r.jsx)(th.A, {
                                  size: 66,
                                  percentComplete: h,
                                  useAltStyle: !0,
                                  children: (0, r.jsx)("div", { className: sK.n5, children: _ }),
                              }),
                    }),
            }),
            (0, r.jsxs)("div", {
                className: o()(sK.FS, { [sK.IR]: l }),
                children: [
                    (0, r.jsx)(J.E, {
                        variant: "text-sm/medium",
                        className: sK.$K,
                        children: t.config.cosponsorMetadata?.name ?? t.config.messages.gamePublisher,
                    }),
                    (0, r.jsxs)("div", {
                        className: o()(sK.oV, { [sK.FJ]: l }),
                        children: [
                            u && (0, r.jsx)(sW.A, { className: sK.Kq, customSize: 14 }),
                            (0, r.jsx)(
                                J.E,
                                {
                                    variant: "text-md/medium",
                                    className: sK.zN,
                                    color: "text-overlay-light",
                                    lineClamp: 1,
                                    tag: "span",
                                    children: u ? c : a,
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
var s$ = s(604970);
function sY(e) {
    let { quest: t, questContent: s, isHovering: n, isInFeaturedSection: l, sourceQuestContent: a } = e,
        u = i.useRef(null),
        c = (0, sQ.A9)(t, a, tN.rE.QUEST_HOME_DESKTOP, sM.GameProfileSources.QuestHome, u),
        d = (0, sH.z)(),
        m = (0, $.SD)(t, d);
    return (0, r.jsxs)("div", {
        ref: u,
        className: s$.qr,
        children: [
            (0, r.jsx)(sz, { quest: t, questContent: s, sourceQuestContent: a, isHovering: n }),
            (0, r.jsxs)("div", {
                className: s$.yM,
                children: [
                    (0, r.jsxs)("div", {
                        className: s$.Wi,
                        children: [
                            (0, r.jsx)(J.E, {
                                variant: "text-sm/normal",
                                className: o()(s$.Wj, s$.h_, { [s$.C4]: n }),
                                children: c,
                            }),
                            (0, r.jsx)(J.E, {
                                "aria-hidden": !0,
                                variant: "text-sm/normal",
                                lineClamp: 1,
                                className: o()(s$.Wj, s$.XV, { [s$.Hz]: n }),
                                children: c,
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: s$.Gv,
                        children: [
                            (0, r.jsx)(J.E, {
                                variant: "text-sm/normal",
                                className: s$.I4,
                                children: ew.intl.string(ew.t.o6FLcF),
                            }),
                            m &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(J.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: "\u2022",
                                        }),
                                        (0, r.jsx)(sB, { questId: t.id, orbMultiplierEligibility: d }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(sq, { quest: t, questContent: s, sourceQuestContent: a, isHovering: n, isInFeaturedSection: l }),
        ],
    });
}
var sJ = s(688755),
    sX = s(831368),
    sZ = s(704289);
function s0(e) {
    let {
            sectionIdentifier: t,
            quest: s,
            questContent: n,
            isInFeaturedSection: l,
            className: a,
            contentPosition: u,
            rowIndex: c,
            eagerLoadAssets: d,
            impressionRef: m,
            sourceQuestContent: h,
        } = e,
        x = i.useMemo(() => (0, el.tW)(s, el.fY.QUEST_BAR_HERO_IMAGE), [s]),
        f = i.useMemo(() => (0, el.tW)(s, el.fY.QUEST_BAR_HERO_VIDEO), [s]),
        {
            isActive: g,
            shouldRender: v,
            hoverHandlers: _,
            handleMenuOpen: j,
            handleMenuClose: S,
        } = (function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 400,
                [t, s] = i.useState(!1),
                [n, l] = i.useState(!1),
                [r, a] = i.useState(!1),
                o = i.useRef(!1),
                u = i.useRef(!1),
                c = i.useRef(null),
                d = i.useRef(null);
            function m() {
                null != c.current && (cancelAnimationFrame(c.current), (c.current = null));
            }
            function E() {
                null != d.current && (clearTimeout(d.current), (d.current = null));
            }
            let h = i.useCallback(() => {
                    E(),
                        l(!0),
                        m(),
                        (c.current = requestAnimationFrame(() => {
                            c.current = requestAnimationFrame(() => {
                                (c.current = null), s(!0);
                            });
                        }));
                }, []),
                x = i.useCallback(() => {
                    m(),
                        s(!1),
                        E(),
                        (d.current = setTimeout(() => {
                            (d.current = null), l(!1);
                        }, e));
                }, [e]),
                f = i.useCallback(() => a(!0), []),
                g = i.useCallback(() => {
                    a(!1), o.current || u.current || x();
                }, [x]),
                v = i.useMemo(
                    () => ({
                        onMouseEnter: () => {
                            (o.current = !0), h();
                        },
                        onMouseLeave: () => {
                            (o.current = !1), r || x();
                        },
                        onFocus: () => {
                            (u.current = !0), h();
                        },
                        onBlur: () => {
                            (u.current = !1), r || x();
                        },
                    }),
                    [h, x, r],
                );
            return (
                i.useEffect(
                    () => () => {
                        m(), E();
                    },
                    [],
                ),
                { isActive: t, shouldRender: n, deactivate: x, hoverHandlers: v, handleMenuOpen: f, handleMenuClose: g }
            );
        })(),
        C = (0, sf.c)({ onMenuOpen: j, onMenuClose: S }),
        N = (0, sh.Pd)(s),
        p = (0, tc.go)(),
        T = (0, tE.E0)(s.config),
        A = (0, E.bG)([t$.A], () => t$.A.theme),
        O = A === ex.NJ8.DARK || A === ex.NJ8.DARKER,
        I = A === ex.NJ8.LIGHT,
        R = i.useContext(eP.X),
        { visibilityElementRef: b, almostVisibleInViewport: M } = (0, sX.I)(
            R?.current?.getScrollerNode() ?? null,
            d ?? !1,
        ),
        {
            handleHoverStart: Q,
            handleHoverEnd: H,
            isEventWithinParent: L,
        } = (0, sJ.B)({ quest: s, questContent: n, contentPosition: u, rowIndex: c, sourceQuestContent: h }),
        y = (0, ty.Lk)({
            isShareable: T,
            questId: s.id,
            trackingCtx: i.useMemo(
                () => ({
                    content: n,
                    ctaContent: ea.Cy.CONTEXT_MENU_COPY_LINK,
                    impressionId: p,
                    sourceQuestContent: h,
                }),
                [n, h, p],
            ),
        }),
        U = (0, sc.A)(m, b),
        D = ew.intl.formatToPlainString(ew.t.EAYZAr, { questName: s.config.messages.questName }),
        F = o()(sZ.kL, { [sZ.iR]: l }, a),
        q = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(sx.A, {
                    showPlaceholder: !M,
                    width: 800,
                    height: 450,
                    className: sZ.Tv,
                    children: (0, r.jsx)(eu.N, {
                        imageAsset:
                            null != x
                                ? {
                                      asset: x,
                                      assetId: "QuestTileV2",
                                      alt: ew.intl.string(ew.t.jnijWz),
                                      className: sZ.Tv,
                                  }
                                : void 0,
                        videoAsset:
                            null != f
                                ? {
                                      asset: f,
                                      assetId: "QuestTileV2_heroAnimated",
                                      className: o()(sZ.Tv, sZ.gJ, { [sZ.C7]: g }),
                                  }
                                : void 0,
                        imageSize: { width: 800, height: 450 },
                        showVideo: v,
                    }),
                }),
                (0, r.jsx)("div", { className: o()(sZ.sL, { [sZ.Mq]: N === sh.UA.EXPIRED }) }),
                I
                    ? (0, r.jsx)(em.N, {
                          theme: ex.NJ8.MIDNIGHT,
                          disableAdaptiveTheme: !0,
                          children: (e) => (0, r.jsx)("div", { className: o()(e, sZ.f5) }),
                      })
                    : (0, r.jsx)("div", { className: o()(sZ.f5, { [sZ.kg]: O }) }),
                (0, r.jsxs)("div", {
                    className: sZ.qy,
                    children: [
                        (0, r.jsxs)("div", {
                            className: sZ.wx,
                            children: [
                                (0, r.jsx)(sb, { quest: s, isHovering: g }),
                                (0, r.jsxs)("div", {
                                    className: o()(sZ.$s, { [sZ.rk]: g }),
                                    onClick: (e) => e.stopPropagation(),
                                    children: [
                                        l &&
                                            T &&
                                            (0, r.jsx)(e7.D, {
                                                tag: "div",
                                                className: sZ.E9,
                                                onClick: y,
                                                "aria-label": ew.intl.string(ew.t.WqhZss),
                                                children: (0, r.jsx)(sd.LinkIcon, {
                                                    size: "sm",
                                                    color: "currentColor",
                                                }),
                                            }),
                                        (0, r.jsx)(sE.C, {
                                            questContent: n,
                                            quest: s,
                                            hideLearnMore: !0,
                                            shouldShowDisclosure: !0,
                                            showShareLink: !0,
                                            sourceQuestContent: h,
                                            onOpen: j,
                                            onClose: S,
                                            children: (e) =>
                                                (0, r.jsx)(e7.D, {
                                                    ...e,
                                                    tag: "div",
                                                    className: sZ.E9,
                                                    "aria-label": ew.intl.string(ew.t.DEoVWZ),
                                                    children: (0, r.jsx)(sm.MoreHorizontalIcon, {
                                                        size: "sm",
                                                        color: "currentColor",
                                                    }),
                                                }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsx)(sf.q.Provider, {
                            value: C,
                            children: (0, r.jsx)(sY, {
                                quest: s,
                                questContent: n,
                                isInFeaturedSection: l,
                                isHovering: g,
                                sourceQuestContent: h,
                            }),
                        }),
                    ],
                }),
            ],
        });
    return (0, r.jsx)("div", {
        id: (0, sa.sT)(s.id, t),
        className: sZ.uW,
        "data-quest-tile-hovered": g ? "" : void 0,
        onMouseEnter: () => {
            _.onMouseEnter(), Q();
        },
        onMouseLeave: () => {
            _.onMouseLeave(), H();
        },
        onFocus: (e) => {
            L(e) || (_.onFocus(), Q());
        },
        onBlur: (e) => {
            L(e) || (_.onBlur(), H());
        },
        children: (0, r.jsx)("article", { ref: U, "aria-label": D, className: F, children: q }),
    });
}
let s1 = i.memo(function (e) {
    let t = (0, E.bG)([et.A], () => (null != e.questId ? et.A.getQuest(e.questId) : void 0), [e.questId]),
        s = i.useMemo(() => (null != e.quest ? e.quest : t), [t, e.quest]);
    return null == s
        ? null
        : (0, r.jsx)(ec.R, {
              questOrQuests: s,
              questContent: e.questContent,
              questContentPosition: e.contentPosition,
              questContentRowIndex: e.rowIndex,
              trackGuildAndChannelMetadata: e.questContent === es.uF.QUESTS_EMBED,
              sourceQuestContent: e.sourceQuestContent,
              children: (t) => (0, r.jsx)(s0, { ...e, quest: s, impressionRef: t }),
          });
});
function s8(e) {
    let { quest: t } = e,
        { useNewTile: s } = G.aD.useConfig({ location: tN.rE.QUEST_HOME_DESKTOP });
    return (0, r.jsx)("div", {
        className: t4.x3,
        children: (0, r.jsxs)("div", {
            className: t4.B0,
            children: [
                (0, r.jsx)(eE.D, {
                    className: t4.R_,
                    variant: "heading-md/semibold",
                    children: ew.intl.string(ew.t["5wnpF3"]),
                }),
                s
                    ? (0, r.jsx)(su, {
                          children: (0, r.jsx)(s1, {
                              className: t4.d,
                              quest: t,
                              questContent: es.uF.QUEST_HOME_DESKTOP,
                              contentPosition: 0,
                              rowIndex: 0,
                              sourceQuestContent: es.uF.INTERNAL_PREVIEW_TOOL,
                          }),
                      })
                    : (0, r.jsx)(sa.Ay, {
                          className: t4.d,
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
var s2 = s(97808),
    s3 = s(778712),
    s4 = s(87664),
    s7 = s(427262),
    s6 = s(198525),
    s5 = s(381351);
let s9 = function (e) {
    let { quest: t } = e,
        [s, n] = i.useState(!1),
        l = i.useRef(null),
        a = (0, E.bG)([ti.default], () => ti.default.getCurrentUser()),
        u = s7.Ay.useName(a),
        c = (0, s4.A)(a?.id),
        d = i.useCallback(
            (e) =>
                (0, r.jsx)(s6.default, {
                    name: u,
                    quest: t,
                    memberListItemRef: l,
                    applicationStream: c,
                    ...e,
                    closePopout: () => {
                        n(!1);
                    },
                }),
            [t, c, u],
        );
    return (0, r.jsx)("div", {
        className: t4.x3,
        children: (0, r.jsxs)("div", {
            className: t4.B0,
            children: [
                (0, r.jsx)(eE.D, {
                    className: s5.R_,
                    variant: "heading-md/semibold",
                    children: ew.intl.string(ew.t.jY7Zxg),
                }),
                (0, r.jsx)("div", { className: s5.$Q, children: ew.intl.string(ew.t.q3hbne) }),
                (0, r.jsx)("div", {
                    className: s5.k0,
                    children: (0, r.jsx)(tP.Y, {
                        targetElementRef: l,
                        renderPopout: d,
                        position: "bottom",
                        shouldShow: s,
                        onRequestClose: () => n(!1),
                        nudgeAlignIntoViewport: !1,
                        useRawTargetDimensions: !0,
                        animation: tP.Y.Animation.NONE,
                        spacing: -3,
                        fixed: !0,
                        scrollBehavior: "close",
                        children: () =>
                            (0, r.jsx)("div", {
                                ref: l,
                                className: o()(s5.Tn, { [s5.wH]: s }),
                                children: (0, r.jsx)(e7.D, {
                                    onClick: () => n(!s),
                                    tabIndex: 0,
                                    children: (0, r.jsxs)("div", {
                                        className: s5.lm,
                                        children: [
                                            (0, r.jsx)(s2.eu, {
                                                size: s3._3.SIZE_32,
                                                src: a?.getAvatarURL(void 0, 32),
                                                status: ex.clD.ONLINE,
                                                "aria-label": a?.username,
                                            }),
                                            (0, r.jsxs)("div", {
                                                className: s5.Fj,
                                                children: [
                                                    (0, r.jsx)(J.E, {
                                                        variant: "text-md/semibold",
                                                        color: "text-strong",
                                                        children: u,
                                                    }),
                                                    (0, r.jsx)(J.E, {
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
function ne(e) {
    let { questId: t, selectedSections: s } = e,
        n = (0, E.bG)([et.A], () => et.A.getQuest(t));
    if (null != (0, E.bG)([et.A], () => et.A.getFetchQuestPreviewError(t)) || null == n) return null;
    function l(e) {
        return null == s || 0 === s.length || s.includes(e);
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            l("quest_bar") && (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(st, { quest: n }), (0, r.jsx)(t2, {})] }),
            l("home_card") && (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(s8, { quest: n }), (0, r.jsx)(t2, {})] }),
            l("share_embed") &&
                (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(si, { questId: n.id }), (0, r.jsx)(t2, {})] }),
            l("channel_call_header") &&
                (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(sn, { quest: n }), (0, r.jsx)(t2, {})] }),
            l("members_list") &&
                (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(s9, { quest: n }), (0, r.jsx)(t2, {})] }),
            l("activity_panel") &&
                (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(t7, { quest: n }), (0, r.jsx)(t2, {})] }),
        ],
    });
}
var nt = s(875696);
function ns(e) {
    let { children: t, selectedSections: s = [], onSectionSelect: n, controls: l, className: a } = e,
        u = [
            { value: "quest_bar", label: ew.intl.string(ew.t.rjVPdM) },
            { value: "share_embed", label: ew.intl.string(ew.t["D/gSWS"]) },
            { value: "home_card", label: ew.intl.string(ew.t["5wnpF3"]) },
            { value: "channel_call_header", label: ew.intl.string(ew.t.gWinpQ) },
            { value: "members_list", label: ew.intl.string(ew.t.wpYima) },
            { value: "activity_panel", label: ew.intl.string(ew.t.L2mlUb) },
        ],
        c = 0 === s.length || s.length === u.length,
        d = i.useMemo(() => (c ? "all" : 1 === s.length ? s[0] : "all"), [s, c]);
    return (0, r.jsx)(t0.Ip, {
        className: o()(nt.kL, a),
        orientation: "auto",
        children: (0, r.jsxs)("div", {
            className: nt.qE,
            children: [
                (0, r.jsx)(eE.D, {
                    variant: "heading-xl/semibold",
                    color: "text-strong",
                    children: ew.intl.string(ew.t.BDUDau),
                }),
                (0, r.jsx)("div", { className: nt.pf, children: l }),
                (0, r.jsxs)(t1.V, {
                    type: "top",
                    look: "brand",
                    selectedItem: d,
                    onItemSelect: function (e) {
                        n?.(e);
                    },
                    children: [
                        (0, r.jsx)(t1.V.Item, { id: "all", children: ew.intl.string(ew.t.Y9DnPa) }),
                        u.map((e) => (0, r.jsx)(t1.V.Item, { id: e.value, children: e.label }, e.value)),
                    ],
                }),
                (0, r.jsx)("div", { className: nt.tZ, children: (0, r.jsx)("div", { className: nt.Qs, children: t }) }),
            ],
        }),
    });
}
let nn = function (e) {
    let { questId: t, className: s } = e,
        { questId: n, setQuestId: l } = (function (e) {
            let t = (0, u.W6)(),
                { search: s } = (0, u.zy)(),
                n = i.useMemo(() => new URLSearchParams(s).get($.L1.QUEST_ID) ?? e, [s, e]),
                l = i.useCallback(
                    (e) => {
                        if (e === n) return;
                        let s = new URLSearchParams();
                        s.set($.L1.TAB, $.NC.PREVIEW_TOOL),
                            s.set($.L1.QUEST_ID, e),
                            t.push(`${ex.BVt.QUEST_HOME}?${s.toString()}`);
                    },
                    [t, n],
                );
            return { questId: n, setQuestId: l };
        })(t),
        a = (0, E.bG)([et.A], () => (null != n ? et.A.getQuest(n) : void 0), [n]),
        o = (0, E.bG)([et.A], () => (null != n ? et.A.getQuestLoadedViaPreview(n) : null), [n]);
    i.useEffect(() => {
        null != n &&
            (0, tD.dQ)(n).then(() => {
                (0, tD.Gt)(n);
            });
    }, [n]),
        i.useEffect(() => {
            function e(e) {
                let { quest_id: t } = e;
                t === n && (0, tD.dQ)(n);
            }
            return (
                tU.h.subscribe("QUEST_PREVIEW_UPDATE", e),
                () => {
                    tU.h.unsubscribe("QUEST_PREVIEW_UPDATE", e);
                }
            );
        }, [n]);
    let [c, d] = i.useState([]);
    return (0, r.jsx)(ns, {
        className: s,
        controls: (0, r.jsx)(tZ, {
            questId: n,
            setQuestId: l,
            quest: a,
            refreshQuest: function () {
                null != n && (0, tD.dQ)(n);
            },
        }),
        selectedSections: c,
        onSectionSelect: (e) => {
            "all" === e ? d([]) : d([e]);
        },
        children: o?.id != null ? (0, r.jsx)(ne, { questId: o?.id, selectedSections: c }) : null,
    });
};
var nl = s(203879),
    nr = s(167417),
    ni = s(783977),
    na = s(305866),
    no = s(915089),
    nu = s(255604);
function nc(e) {
    let { children: t, id: s } = e;
    return (0, r.jsx)(J.E, { className: nu.g, color: "text-subtle", id: s, variant: "text-sm/semibold", children: t });
}
let nd = function (e) {
    let { children: t, renderPopout: s } = e,
        n = (0, no.GV)(),
        l = i.useRef(null);
    return (0, r.jsx)(tP.Y, {
        align: "right",
        position: "bottom",
        renderPopout: (e) => (0, r.jsx)(na.l, { className: nu.S, "aria-labelledby": n, children: s(e, n) }),
        scrollBehavior: "close",
        targetElementRef: l,
        children: (e) => t(e, l),
    });
};
var nm = s(368884);
let nE = function (e) {
    let { onChange: t, selectedFilters: s } = e,
        n = (0, $.Nb)(),
        l = i.useCallback(
            (e) => (n) => {
                let l = e.filter((e) => n.includes(e.filter));
                t([...s.filter((t) => !e.some((e) => e.filter === t.filter)), ...l]);
            },
            [s, t],
        );
    return (0, r.jsx)(nd, {
        renderPopout: (e, a) => {
            let { closePopout: o } = e;
            return (0, r.jsxs)("div", {
                children: [
                    n.map((e, t) => {
                        let n = e.options.map((e) => ({ label: (0, td.up)(e.filter), value: e.filter })),
                            o = s.filter((t) => e.options.some((e) => e.filter === t.filter)).map((e) => e.filter);
                        return (0, r.jsxs)(
                            i.Fragment,
                            {
                                children: [
                                    t > 0 && (0, r.jsx)("hr", { className: nm.B }),
                                    (0, r.jsx)(nc, { id: a, children: e.heading }),
                                    (0, r.jsx)(nr.$, {
                                        "aria-labelledby": a,
                                        options: n,
                                        selectedValues: o,
                                        onChange: l(e.options),
                                    }),
                                ],
                            },
                            t,
                        );
                    }),
                    (0, r.jsx)("hr", { className: nm.B }),
                    (0, r.jsx)("div", {
                        className: nm.W,
                        children: (0, r.jsx)(g.$, {
                            fullWidth: !0,
                            onClick: () => {
                                t([]), o();
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
                text: ew.intl.formatToPlainString(ew.t.CEfkXl, { numSelectedFilters: s.length }),
                icon: ni.R,
                iconPosition: "end",
                variant: "secondary",
            }),
    });
};
var nh = s(144228),
    nx = s(715482);
let nf = function (e) {
    let { onChange: t, optionClassName: s, selectedSortMethod: n } = e,
        l = i.useCallback(
            (e) => {
                t(e);
            },
            [t],
        ),
        a = (0, E.bG)([C.Ay], () => C.Ay.keyboardModeEnabled),
        o = (0, $.XD)(),
        u = i.useMemo(() => o.map((e) => ({ name: e.label, value: e.value, radioBarClassName: s })), [o, s]);
    return (0, r.jsx)(nd, {
        renderPopout: (e, t) => {
            let { closePopout: s } = e;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(nc, { id: t, children: ew.intl.string(ew.t.tZXJIS) }),
                    (0, r.jsx)(nh.z, {
                        options: u,
                        onChange: (e) => {
                            l(e), a || s();
                        },
                        value: n,
                    }),
                ],
            });
        },
        children: (e, t) =>
            (0, r.jsx)(g.$, {
                ...e,
                "aria-label": ew.intl.formatToPlainString(ew.t.lPlIMo, { selected: (0, td.Js)(n) }),
                buttonRef: t,
                size: "sm",
                text: (0, td.Js)(n),
                icon: nx.g,
                iconPosition: "end",
                variant: "secondary",
            }),
    });
};
var ng = s(691540),
    nv = s(857250),
    n_ = s(97483);
function nj() {
    let e = i.useRef(null);
    return {
        showToast: i.useCallback((t) => {
            e.current !== t &&
                ((0, ng.P0)((0, nv.o)(ew.intl.string(ew.t["5ABf1w"]), n_.Ck.FAILURE)),
                eb.default.track(ex.HAw.QUEST_HOME_MOBILE_DEEP_LINK_MISSING_QUEST, { quest_id: t }),
                (e.current = t));
        }, []),
    };
}
function nS(e, t, s, n) {
    return null == e ? 1 : Math.max(1, Math.min(n, Math.floor((e + s) / (t + s))));
}
function nC(e, t, s) {
    let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
        [l, r] = i.useState(null),
        a = i.useCallback(() => {
            r(nS(e.current?.clientWidth, t, s, n));
        }, [r, t, s, n, e]);
    return (0, ey.g)(e, a, [t, s], { fireOnMount: !0 }), l;
}
var nN = s(768497),
    np = s(288613);
let nT = 4 * to.A.Millis.SECOND;
function nA(e) {
    let { children: t, tileMinWidth: s, gridGap: n } = e,
        l = i.useRef(null),
        a = nC(l, s, n);
    return (0, r.jsx)("div", {
        className: nN.kL,
        ref: l,
        style: { "--custom-min-quest-tile-width": `${s}px`, "--custom-quest-grid-gap": `${n}px` },
        children: null !== a && t(a),
    });
}
let nO = i.forwardRef(function (e, t) {
    let {
            quests: s,
            excludedQuests: n,
            isFetching: l,
            hasFetched: a,
            hasFiltersApplied: c = !1,
            onClearFilters: d,
        } = e,
        m = (0, u.zy)(),
        { showToast: E } = nj(),
        h = i.useRef(""),
        [x, f] = i.useState(null),
        [g, v] = i.useState(0),
        { useNewTile: _ } = G.aD.useConfig({ location: tN.rE.QUEST_HOME_DESKTOP }),
        [{ highlightAnimationProgress: j }, S] = (0, e4.z)(() => ({
            highlightAnimationProgress: 1,
            config: { duration: nT },
        })),
        C = i.useCallback(
            (e) => {
                if ((l && 0 === s.length) || !a) return !1;
                let t = (0, sN.vc)(e, s, n);
                return null == t ? (E(e), !1) : (f(t.id), v((e) => e + 1), !0);
            },
            [s, n, l, E, a],
        );
    return (i.useImperativeHandle(t, () => ({ scrollToQuest: C }), [C]),
    i.useLayoutEffect(() => {
        if (0 === m.hash.length) {
            h.current = "";
            return;
        }
        l || !a || (m.hash !== h.current && C(m.hash.slice(1)) && (h.current = m.hash));
    }, [m.hash, l, a, C]),
    i.useLayoutEffect(() => {
        if (null == x) return;
        let e = document.getElementById(`quest-tile-${x}`);
        null != e &&
            (e.scrollIntoView({ behavior: "smooth", block: "center" }),
            S({
                from: { highlightAnimationProgress: 0 },
                to: { highlightAnimationProgress: 1 },
                reset: !0,
                onRest: (e) => {
                    e.cancelled || f(null);
                },
            }));
    }, [x, g, S]),
    l && 0 === s.length)
        ? (0, r.jsx)(X.y, { className: nN.u1 })
        : 0 === s.length
          ? (0, r.jsxs)("div", {
                className: nN.y7,
                children: [
                    (0, r.jsx)(eE.D, {
                        variant: "heading-xl/semibold",
                        children: ew.intl.string(c ? ew.t.PBfFnx : ew.t.NqFP6z),
                    }),
                    (0, r.jsx)(J.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: c ? ew.intl.format(ew.t.LdYS1H, { onClick: d }) : ew.intl.string(ew.t.LhD4yH),
                    }),
                ],
            })
          : (0, r.jsx)(nA, {
                tileMinWidth: 336,
                gridGap: 24,
                children: (e) =>
                    s.map((t, s) => {
                        let n = Math.floor(s / e),
                            l = x === t.id,
                            i = null != x && !l;
                        return (0, r.jsxs)(
                            e0.animated.div,
                            {
                                className: o()({ [np.XB]: l, [so.y]: _ }),
                                style: e1(l, i, j),
                                children: [
                                    l &&
                                        (0, r.jsx)("div", {
                                            className: np.OA,
                                            "aria-hidden": !0,
                                            children: (0, r.jsx)("div", { className: np.E4 }, g),
                                        }),
                                    _
                                        ? (0, r.jsx)(s1, {
                                              quest: t,
                                              questContent: es.uF.QUEST_HOME_DESKTOP,
                                              contentPosition: s,
                                              rowIndex: n,
                                              className: nN.d,
                                              sourceQuestContent: es.uF.QUEST_HOME_DESKTOP,
                                          })
                                        : (0, r.jsx)(sa.Ay, {
                                              quest: t,
                                              questContent: es.uF.QUEST_HOME_DESKTOP,
                                              contentPosition: s,
                                              rowIndex: n,
                                              className: nN.d,
                                              sourceQuestContent: es.uF.QUEST_HOME_DESKTOP,
                                          }),
                                ],
                            },
                            t.id,
                        );
                    }),
            });
});
var nI = s(458518),
    nR = s(349095);
let nb = [],
    nM = $.L1.SORT,
    nQ = $.L1.FILTER,
    nH = i.forwardRef(function (e, t) {
        let s,
            n,
            l,
            a,
            o = i.useRef(null),
            [c, d] =
                ((s = (0, nI.o)()),
                (n = (0, u.W6)()),
                (l = i.useRef(null)),
                (a = i.useCallback(
                    (e) => {
                        let t = new URLSearchParams(l.current ?? s);
                        for (let [s, n] of Object.entries(e)) null == n ? t.delete(s) : t.set(s, n);
                        (l.current = t),
                            n.replace({ search: t.toString() }),
                            Promise.resolve().then(() => {
                                l.current = null;
                            });
                    },
                    [s, n],
                )),
                [s, a]),
            m = i.useMemo(() => {
                var e;
                return (
                    (e = c.get(nM)),
                    ((0, B.uJ)(e) ? null : (Object.values(tN.kL).find((t) => t === e) ?? null)) ?? tN.kL.SUGGESTED
                );
            }, [c]),
            E = i.useMemo(
                () =>
                    (function (e) {
                        if ((0, B.uJ)(e)) return null;
                        let t = e
                            .split(",")
                            .map((e) => (0, tN.WQ)(e))
                            .filter(eM.Vq);
                        return t.length > 0 ? t : null;
                    })(c.get(nQ)) ?? nb,
                [c],
            ),
            h = i.useCallback(
                (e) => {
                    d({ [nM]: e });
                },
                [d],
            ),
            x = i.useCallback(
                (e) => {
                    d({
                        [nQ]:
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
                [d],
            ),
            {
                quests: f,
                excludedQuests: g,
                isFetchingCurrentQuests: v,
                hasFetched: _,
            } = (0, $.Qh)(
                $.NC.ALL,
                i.useMemo(() => ({ sortMethod: m, filters: E, removeExpiredQuests: !0 }), [m, E]),
            ),
            j = i.useCallback(() => {
                x(nb);
            }, [x]),
            S = i.useRef(null),
            C = i.useRef(null),
            N = (0, u.zy)(),
            p = (0, u.W6)();
        return (
            i.useEffect(() => {
                "" !== N.hash &&
                    null != S.current &&
                    null != C.current &&
                    (m !== S.current || E !== C.current) &&
                    p.replace({ ...N, hash: void 0 });
            }, [m, E, N, p]),
            i.useEffect(() => {
                S.current = m;
            }, [m]),
            i.useEffect(() => {
                C.current = E;
            }, [E]),
            (0, $.$P)({ selectedSortMethod: m, selectedFilters: E, numQuestsVisible: f.length }),
            i.useImperativeHandle(
                t,
                () => ({
                    scrollToQuest: (e) => {
                        j(),
                            h(tN.kL.SUGGESTED),
                            requestAnimationFrame(() => {
                                o.current?.scrollToQuest(e);
                            });
                    },
                }),
                [j, h],
            ),
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)("div", {
                        className: nR.Mj,
                        children: [
                            (0, r.jsx)(eE.D, { variant: "heading-lg/medium", children: ew.intl.string(ew.t.giYD00) }),
                            (0, r.jsxs)("div", {
                                className: nR.Nf,
                                children: [
                                    (0, r.jsx)(nf, { onChange: h, optionClassName: nR.Uq, selectedSortMethod: m }),
                                    (0, r.jsx)(nE, { onChange: x, selectedFilters: E }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsx)(nO, {
                        ref: o,
                        quests: f,
                        excludedQuests: g,
                        isFetching: v,
                        hasFetched: _,
                        hasFiltersApplied: E.length > 0,
                        onClearFilters: j,
                    }),
                ],
            })
        );
    });
var nL = s(575593),
    ny = s(462887),
    nU = s(765671),
    nD = s(736653),
    nF = s(162232),
    nq = s(734736),
    nP = s(303136),
    nk = s(842245),
    nw = s(181713);
let nB = function (e) {
    let { className: t, isAnimated: s = !1, questName: n } = e,
        l = s ? nw.A : nw.A + "?format=webp";
    return (0, r.jsx)("div", {
        className: o()(nk.k, t),
        children: s
            ? (0, r.jsx)(nP.A, {
                  preload: "auto",
                  className: nk.L,
                  children: (0, r.jsx)("source", { src: l, type: "video/webm" }),
              })
            : (0, r.jsx)("img", { className: nk.L, src: l, alt: n }),
    });
};
var nV = s(57718),
    nG = s(966354);
let nW = (0, i.memo)(function (e) {
    let { quest: t } = e,
        [s, n] = (0, i.useState)(!1),
        [l, a] = (0, i.useState)(24),
        [u, c] = (0, i.useState)(!1),
        d = (0, i.useRef)(null),
        m = (0, i.useRef)(null),
        h = (0, i.useRef)(null),
        x = (0, E.bG)([ti.default], () => ti.default.getCurrentUser()),
        { ref: f, height: g = 0 } = (0, nU.Ay)(),
        v = (0, nD.Ay)(),
        _ = (0, $.S5)(t.userStatus?.claimedAt, { month: "numeric", day: "numeric" }),
        j = t.userStatus?.claimedTier ?? 0,
        S = t.config.rewards[j],
        C = S?.type === e8.l.FRACTIONAL_PREMIUM,
        N = S?.type === e8.l.COLLECTIBLE,
        p = S?.type === e8.l.VIRTUAL_CURRENCY,
        T = S?.collectibleProduct?.items?.[0],
        A = T?.type === nL.R.AVATAR_DECORATION ? T : null,
        O = i.useMemo(
            () =>
                null == S
                    ? null
                    : !0 === p && t.userStatus?.orbQuantityClaimed != null
                      ? ew.intl.format(ew.t["nLXlh+"], { orbAmount: t.userStatus.orbQuantityClaimed })
                      : S.name,
            [S, p, t],
        );
    (0, nU.i4)(d, (e) => {
        let { height: t } = e;
        if (!N || null == t || null == m.current || null == d.current || null == h.current) return;
        let s = d.current.getBoundingClientRect(),
            n = m.current.getBoundingClientRect(),
            l = h.current.getBoundingClientRect();
        a((n.top - s.top - l.height) / 2);
    });
    let I = (0, ny.M)(v),
        b = i.useMemo(() => null != t.config.cosponsorMetadata, [t]),
        M = i.useMemo(() => (0, el.tW)(t, el.fY.REWARD), [t]),
        Q = s ? g + 8 : 0,
        { content_position: H, row_index: L, ...y } = (0, ea.fF)(es.uF.TROPHY_CASE_CARD);
    function U() {
        n(!0), eb.default.track(ex.HAw.QUEST_HOVER, { quest_id: t.id, ...y });
    }
    function D() {
        n(!1);
    }
    function F(e) {
        c(!0), eb.default.track(ex.HAw.QUEST_ASSET_LOADING_FAILURE, { source: e, asset_id: e, quest_id: t.id });
    }
    return null == S || u
        ? null
        : (0, r.jsx)(e6.vN, {
              children: (0, r.jsxs)("div", {
                  ref: d,
                  tabIndex: 0,
                  onFocus: U,
                  onBlur: D,
                  onMouseEnter: U,
                  onMouseLeave: D,
                  className: o()(nG.kL, { [nG.yo]: s }),
                  children: [
                      null != x &&
                          N &&
                          null != A &&
                          (0, r.jsx)("div", {
                              ref: h,
                              className: nG.FX,
                              style: { top: l },
                              children: (0, r.jsx)(nF.A, {
                                  avatarDecorationOverride: A,
                                  user: x,
                                  guildId: null,
                                  animateOnHover: !s,
                              }),
                          }),
                      C
                          ? (0, r.jsx)(nq.A, { className: nG.Sl })
                          : p
                            ? (0, r.jsx)(nB, {
                                  className: nG.Sl,
                                  isAnimated: s,
                                  questName: t.config.messages.questName,
                              })
                            : M.isAnimated
                              ? (0, r.jsx)(R.A, {
                                    className: nG.JU,
                                    autoPlay: !1,
                                    children: (0, r.jsx)("source", {
                                        src: M.url,
                                        type: M.mimetype ?? void 0,
                                        onError: () => F(M.url),
                                    }),
                                })
                              : (0, r.jsx)("img", {
                                    className: nG.Sl,
                                    src: M.url,
                                    alt: t.config.messages.questName,
                                    onError: () => F(M.url),
                                }),
                      (0, r.jsx)("div", { className: o()(nG.Lw, { [nG.en]: I, [nG.So]: !I }) }),
                      (0, r.jsx)("div", {
                          ref: m,
                          className: nG.r$,
                          style: { transform: `translateY(-${Q}px)` },
                          children: (0, r.jsx)(nV.Ay, {
                              logotypeClassName: o()(nG.wm, { [nG.A0]: b }),
                              quest: t,
                              withGameTile: !1,
                          }),
                      }),
                      (0, r.jsxs)("div", {
                          ref: f,
                          className: nG.zH,
                          children: [
                              (0, r.jsx)(eE.D, {
                                  className: nG.DD,
                                  variant: "heading-md/semibold",
                                  color: "text-overlay-light",
                                  children: ew.intl.format(ew.t.EAYZAr, { questName: t.config.messages.questName }),
                              }),
                              (0, r.jsx)(J.E, {
                                  variant: "text-sm/medium",
                                  color: I ? "text-muted" : "text-overlay-light",
                                  style: { opacity: I ? 1 : 0.75 },
                                  children: ew.intl.format(ew.t["kXVcV+"], { reward: O, claimedDate: _ }),
                              }),
                          ],
                      }),
                  ],
              }),
          });
});
var nK = s(396478);
function nz(e) {
    let { onClick: t } = e,
        n = (0, nD.Ay)();
    return (0, r.jsxs)(nK.pp, {
        theme: n,
        children: [
            (0, r.jsx)(nK.G8, { lightSrc: s(826223), darkSrc: s(317017), width: 415, height: 200 }),
            (0, r.jsx)(nK.SG, { note: ew.intl.format(ew.t.Pv8u2u, { onClick: t }) }),
        ],
    });
}
var n$ = s(178093);
function nY(e) {
    let { onSelectTab: t, className: s } = e,
        { claimedQuests: n, isFetchingClaimedQuests: l } = (0, $.Iq)();
    return l && 0 === n.length
        ? (0, r.jsx)(X.y, { className: n$.u })
        : 0 === n.length
          ? (0, r.jsx)(nz, { onClick: () => t($.NC.ALL) })
          : (0, r.jsx)("div", {
                className: o()(n$.U, s),
                children: [...n]
                    .sort((e, t) => (t.userStatus?.claimedAt ?? "").localeCompare(e.userStatus?.claimedAt ?? ""))
                    .map((e) => (0, r.jsx)(nW, { quest: e }, e.id)),
            });
}
let nJ = i.createContext({
    targetQuestId: null,
    targetSectionIdentifier: null,
    highlightCount: null,
    highlightAnimationProgress: null,
});
function nX(e) {
    let { children: t, sectionIdentifier: s, questId: n } = e,
        {
            targetQuestId: l,
            targetSectionIdentifier: a,
            highlightCount: u,
            highlightAnimationProgress: c,
        } = i.useContext(nJ),
        d = l === n && a === s,
        m = null != l && (l !== n || a !== s),
        { useNewTile: E } = G.aD.useConfig({ location: tN.rE.QUEST_HOME_DESKTOP }),
        h = i.useMemo(() => e1(d, m, c), [d, m, c]);
    return (0, r.jsxs)(e0.animated.div, {
        [ez]: "",
        className: o()({ [np.XB]: d, [np.FR]: E, [so.y]: E }),
        style: h,
        children: [
            d &&
                (0, r.jsx)("div", {
                    className: np.OA,
                    "aria-hidden": !0,
                    children: (0, r.jsx)("div", { className: np.E4 }, u),
                }),
            t,
        ],
    });
}
var nZ = s(897833);
function n0(e) {
    let { containerWidth: t, questIds: s, sectionIdentifier: n, setMaxRowIndex: l } = e,
        { useNewTile: a } = G.aD.useConfig({ location: tN.rE.QUEST_HOME_DESKTOP }),
        o = i.useMemo(() => (null == t ? null : nS(t, 345, 20, 2)), [t]);
    return (
        i.useEffect(() => {
            null !== o && l(Math.ceil(s.length / o) - 1);
        }, [s.length, o, l]),
        (0, r.jsx)("div", {
            className: nZ.k,
            style: {
                "--custom-min-quest-tile-width": "345px",
                "--custom-quest-grid-gap": "20px",
                "--custom-tiles-per-row": 2,
            },
            children:
                null != o &&
                s.map((e, t) =>
                    (0, r.jsx)(
                        nX,
                        {
                            questId: e,
                            sectionIdentifier: n,
                            children: a
                                ? (0, r.jsx)(
                                      s1,
                                      {
                                          isInFeaturedSection: !0,
                                          questId: e,
                                          questContent: es.uF.QUEST_HOME_FEATURED_SECTION,
                                          contentPosition: t,
                                          rowIndex: Math.floor(t / o),
                                          sourceQuestContent: es.uF.QUEST_HOME_FEATURED_SECTION,
                                          sectionIdentifier: n,
                                      },
                                      e,
                                  )
                                : (0, r.jsx)(
                                      sa.Ay,
                                      {
                                          questId: e,
                                          isInFeaturedSection: !0,
                                          questContent: es.uF.QUEST_HOME_FEATURED_SECTION,
                                          contentPosition: t,
                                          rowIndex: Math.floor(t / o),
                                          sourceQuestContent: es.uF.QUEST_HOME_FEATURED_SECTION,
                                          sectionIdentifier: n,
                                      },
                                      e,
                                  ),
                        },
                        `animated-wrapper-${e}-${n}`,
                    ),
                ),
        })
    );
}
var n1 = s(915655);
function n8(e) {
    let { className: t, ...s } = e;
    return (0, r.jsxs)("div", {
        className: o()(n1.kL, t),
        ...s,
        children: [
            (0, r.jsx)("div", { className: o()(tp.m, n1.Gf), "aria-hidden": !0 }),
            (0, r.jsx)("div", {
                className: n1.Jm,
                "aria-hidden": !0,
                children: Array.from({ length: 6 }).map((e, t) =>
                    (0, r.jsx)("div", { className: o()(tp.m, n1.Vr) }, t),
                ),
            }),
        ],
    });
}
var n2 = s(384343);
function n3(e) {
    let { questContent: t, questIds: s, rowIndex: n, sectionIdentifier: l } = e,
        { targetSectionIdentifier: a } = i.useContext(nJ),
        { useNewTile: o } = G.aD.useConfig({ location: tN.rE.QUEST_HOME_DESKTOP }),
        { variant: u } = G.Mk.useConfig({ location: tN.rE.QUEST_HOME_DESKTOP }),
        c = (0, eR.C)(),
        d = a === l,
        m = i.useCallback(
            (e) => {
                let {
                    scrollingType: n,
                    scrollWindowStartIndex: l,
                    scrollWindowEndIndex: r,
                    scrollWindowSize: i,
                    scrollingDirection: a,
                } = e;
                (0, er.kO)({
                    scrollingType: d ? ea.pk.AUTO : n,
                    scrollingDirection: a,
                    scrollWindowStartIndex: l,
                    scrollWindowEndIndex: r,
                    scrollWindowSize: i,
                    questContent: t,
                    carouselSize: s.length,
                });
            },
            [t, s.length, d],
        ),
        E = u === G.d.LARGE_MASK_MARGIN;
    return (0, r.jsx)(eZ, {
        maskWidth: eG(c),
        overflowAmount: 25,
        maskMarginMultiplier: E ? 2 : 0.75,
        onScrollEnd: m,
        children: (0, r.jsxs)("div", {
            style: {
                "--custom-min-quest-tile-width": `${eW(c, E)}px`,
                "--custom-extra-spacing-placeholder-size": "5px",
                "--custom-quest-tile-border-radius": `${o ? "var(--radius-xl)" : "10px"}`,
            },
            className: n2.FO,
            children: [
                s.map((e, s) =>
                    (0, r.jsx)(
                        nX,
                        {
                            questId: e,
                            sectionIdentifier: l,
                            children: o
                                ? (0, r.jsx)(s1, {
                                      questId: e,
                                      questContent: t,
                                      contentPosition: s,
                                      rowIndex: n,
                                      className: n2.d,
                                      sourceQuestContent: t,
                                      sectionIdentifier: l,
                                  })
                                : (0, r.jsx)(sa.Ay, {
                                      questId: e,
                                      isInFeaturedSection: l === eB.FEATURED,
                                      questContent: t,
                                      contentPosition: s,
                                      rowIndex: n,
                                      className: n2.d,
                                      sourceQuestContent: t,
                                      sectionIdentifier: l,
                                  }),
                        },
                        `animated-wrapper-${e}-${l}`,
                    ),
                ),
                (0, r.jsx)("div", { className: n2.fu }),
            ],
        }),
    });
}
var n4 = s(958538);
let n7 = to.A.Millis.WEEK;
function n6() {
    let e = et.A.quests;
    if (0 === et.A.lastFetchedCurrentQuests || 0 === e.size) return !1;
    let t = null;
    for (let s of n.keys()) {
        let l = e.get(s);
        (null == l || (0, sN.Ic)(l)) && (null == t && (t = new Map(n)), t.delete(s));
    }
    return null != t && ((n = t), !0);
}
class n5 extends E.Ay.PersistedStore {
    static displayName = "DiscoveredQuestStore";
    static persistKey = "DiscoveredQuestStore";
    initialize(e) {
        this.waitFor(et.A), (n = new Map());
        let t = !1;
        if (null != e) {
            let s = Date.now() - n7;
            for (let [l, r] of Object.entries(e.discoveredAtByQuestId)) {
                if (null == r || null == l || new Date(r).getTime() < s) {
                    t = !0;
                    continue;
                }
                n.set(l, r);
            }
        }
        return this.syncWith([et.A], n6), t;
    }
    getState() {
        let e = {};
        for (let [t, s] of n) e[t] = s;
        return { discoveredAtByQuestId: e };
    }
    getDiscoveredAtByQuestId() {
        return n;
    }
}
let n9 = new n5(tU.h, {
    QUESTS_MARK_DISCOVERED: function (e) {
        if (null == et.A.getQuest(e.questId)) return !1;
        let t = new Map(n);
        t.set(e.questId, new Date().toISOString()), (n = t);
    },
});
function le(e, t) {
    if (e === t) return !0;
    let s = new Set(e),
        n = new Set(t);
    return s.size === n.size && [...s].every((e) => n.has(e));
}
let lt = function () {
    let e = (0, s7.Gn)(),
        t = (0, $.Cv)(),
        s = (0, E.bG)([et.A], () => et.A.lastFetchedCurrentQuests > 0),
        { quests: n, isFetchingCurrentQuests: l } = (0, $.Qh)($.NC.ALL, {
            sortMethod: tN.kL.SUGGESTED,
            filters: [],
            removeExpiredQuests: !e,
        }),
        r = (0, n4.A)(
            () =>
                n.map((e) => {
                    let { id: t } = e;
                    return t;
                }),
            n.map((e) => {
                let { id: t } = e;
                return t;
            }),
            le,
        ),
        a = (0, ty.T2)(),
        o = (0, E.bG)([n9], () => n9.getDiscoveredAtByQuestId(), []),
        u = i.useMemo(() => (l || !s) && 0 === r.length, [l, s, r.length]),
        { useNewTile: c } = G.aD.useConfig({ location: tN.rE.QUEST_HOME_DESKTOP }),
        d = i.useMemo(
            () =>
                u
                    ? []
                    : (function (e) {
                          let {
                                  allQuestIds: t,
                                  hero: s,
                                  discoveredAtByQuestId: n,
                                  isStaff: l,
                                  isPreviewerOnAnyQuest: r,
                                  useNewTile: i = !1,
                              } = e,
                              a = new Map(),
                              o = new Set();
                          function u(e) {
                              if (o.has(e)) return;
                              let t = et.A.getQuestConfig(e);
                              if (null == t) return;
                              let u = (function (e) {
                                  let {
                                          quest: t,
                                          hero: s,
                                          discoveredAtByQuestId: n,
                                          questIdsBySectionIdentifier: l,
                                          isStaff: r,
                                          isPreviewerOnAnyQuest: i,
                                          useNewTile: a = !1,
                                      } = e,
                                      { userStatus: o, preview: u } = et.A.getQuest(t.id) ?? {},
                                      c = [],
                                      d =
                                          null != o &&
                                          null != o.enrolledAt &&
                                          null != o.completedAt &&
                                          null == o.claimedAt;
                                  return (0, sN.kd)(t) && !d
                                      ? r
                                          ? [eB.EXPIRED]
                                          : null
                                      : (n.has(t.id) && c.push(eB.DISCOVERED),
                                          i && !0 === u && c.push(eB.PREVIEW),
                                          null != o && null != o.enrolledAt && null == o.claimedAt)
                                        ? [...c, eB.IN_PROGRESS]
                                        : null != s && (0, tE.I0)(s, t.id) && sI(eB.FEATURED, l)
                                          ? [...c, eB.FEATURED]
                                          : new Date(t.expiresAt).valueOf() <= Date.now() + (a ? sT : sp)
                                            ? [...c, eB.ENDING_SOON]
                                            : sI(eB.FEATURED, l)
                                              ? [...c, eB.FEATURED]
                                              : (0, tm.ks)(t)
                                                ? [...c, eB.ORB]
                                                : [...c, eB.SPECIAL_QUESTS];
                              })({
                                  quest: t,
                                  hero: s,
                                  discoveredAtByQuestId: n,
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
                              s?.questIds?.forEach((e) => u(e)),
                              t.forEach((e) => u(e)),
                              eV
                                  .map((e) => {
                                      let t = sO?.[e.identifier];
                                      if (null != e.shouldShowFn && !e.shouldShowFn(l, r))
                                          return { ...e, questIds: [] };
                                      let s =
                                          null != t
                                              ? t(a.get(e.identifier) ?? [], { discoveredAtByQuestId: n })
                                              : (a.get(e.identifier) ?? []);
                                      return { ...e, questIds: s };
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
var ls = s(113775);
let ln = {
        [eB.FEATURED]: es.uF.QUEST_HOME_FEATURED_SECTION,
        [eB.IN_PROGRESS]: es.uF.QUEST_HOME_IN_PROGRESS_SECTION,
        [eB.ENDING_SOON]: es.uF.QUEST_HOME_ENDING_SOON_SECTION,
        [eB.ORB]: es.uF.QUEST_HOME_ORB_SECTION,
        [eB.DISCOVERED]: es.uF.QUEST_HOME_DISCOVERED_SECTION,
        [eB.EXPIRED]: es.uF.QUEST_HOME_EXPIRED_SECTION,
        [eB.PREVIEW]: es.uF.QUEST_HOME_PREVIEW_SECTION,
        [eB.SPECIAL_QUESTS]: es.uF.QUEST_HOME_SPECIAL_QUESTS_SECTION,
    },
    ll = 4 * to.A.Millis.SECOND,
    lr = i.forwardRef(function (e, t) {
        let { deepLinkedQuestId: s, isLoadingQuestHomeHero: n, className: l } = e,
            { useNewTile: a, useLargeFeaturedTiles: u } = G.aD.useConfig({ location: tN.rE.QUEST_HOME_DESKTOP }),
            { sections: c, isFetchingCurrentQuests: d, getSectionIdentifierForTargetedQuest: m } = lt(),
            E = i.useRef(null),
            { showToast: h } = nj(),
            [x, f] = i.useState(null),
            [g, v] = i.useState(null),
            [_, j] = i.useState(0),
            [S, C] = i.useState(null),
            [N, p] = i.useState(0),
            T = i.useRef(null),
            A = i.useCallback(
                (e) => {
                    C(e.contentRect.width);
                },
                [C],
            );
        (0, ey.g)(E, A, [A], { fireOnMount: !0 });
        let [{ highlightAnimationProgress: O }, I] = (0, e4.z)(() => ({
                highlightAnimationProgress: 1,
                config: { duration: ll },
            })),
            R = i.useCallback(
                (e, t) => {
                    if (null == e || null == S || d || n) return !1;
                    t && (0, tD.sB)(e);
                    let s = m(e),
                        l = !0 === t && s !== eB.FEATURED ? eB.DISCOVERED : s;
                    if (null == s) return h(e), !1;
                    let r = document.getElementById((0, sa.sT)(e, l ?? void 0));
                    return (
                        null != r &&
                        (f(e),
                        v(l),
                        j((e) => e + 1),
                        r.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" }),
                        I({
                            from: { highlightAnimationProgress: 0 },
                            to: { highlightAnimationProgress: 1 },
                            reset: !0,
                            onRest: (e) => {
                                e.cancelled || (f(null), v(null));
                            },
                        }),
                        !0)
                    );
                },
                [f, j, I, d, n, h, S, m],
            );
        i.useImperativeHandle(t, () => ({ scrollToQuest: R }), [R]),
            i.useLayoutEffect(() => {
                if (null == s) {
                    T.current = null;
                    return;
                }
                T.current !== s && R(s, !0) && (T.current = s);
            }, [s, R]);
        let b = i.useMemo(
                () => ({
                    targetQuestId: x,
                    targetSectionIdentifier: g,
                    highlightCount: _,
                    highlightAnimationProgress: O,
                }),
                [x, g, _, O],
            ),
            M = i.useMemo(
                () =>
                    c.findIndex((e) => {
                        let { identifier: t } = e;
                        return t === eB.FEATURED;
                    }),
                [c],
            );
        return (0, r.jsx)(nJ.Provider, {
            value: b,
            children: (0, r.jsx)("div", {
                className: o()(ls.kL, l),
                ref: E,
                children: d
                    ? (0, r.jsx)(n8, { role: "status", "aria-label": ew.intl.string(ew.t.ZTNur7) })
                    : c.length > 0
                      ? c.map((e, t) => {
                            let { identifier: s, questIds: n, title: l } = e;
                            return (0, r.jsxs)(
                                "div",
                                {
                                    className: ls.p9,
                                    children: [
                                        (0, r.jsx)(eE.D, {
                                            variant: "heading-lg/semibold",
                                            className: ls.Gf,
                                            children: ew.intl.string(l),
                                        }),
                                        s === eB.FEATURED && a && u
                                            ? (0, r.jsx)(n0, {
                                                  questIds: n,
                                                  setMaxRowIndex: p,
                                                  containerWidth: S,
                                                  sectionIdentifier: s,
                                              })
                                            : (0, r.jsx)(n3, {
                                                  questIds: n,
                                                  rowIndex: t < M ? t : t + N,
                                                  sectionIdentifier: s,
                                                  questContent: ln[s],
                                              }),
                                    ],
                                },
                                s,
                            );
                        })
                      : (0, r.jsxs)("div", {
                            className: ls.y7,
                            children: [
                                (0, r.jsx)(eE.D, {
                                    variant: "heading-xl/semibold",
                                    children: ew.intl.string(ew.t.NqFP6z),
                                }),
                                (0, r.jsx)(J.E, {
                                    variant: "text-md/normal",
                                    color: "text-subtle",
                                    children: ew.intl.string(ew.t.LhD4yH),
                                }),
                            ],
                        }),
            }),
        });
    });
var li = s(196765),
    la = s(121894),
    lo = s(851936);
let lu = (0, li.v)((e, t) => ({
    startTime: performance.now(),
    elapsed: 0,
    lastOutputLogTime: -5e3,
    logger: null,
    registerAssetLoad: () => {
        let s = t().logger ?? (0, lo.L)({ location: tN.rE.QUEST_HOME_DESKTOP });
        if (s.info === tg.tE || t().elapsed >= 6e4) return;
        let n = performance.now() - t().startTime;
        n > 6e4 && (n = 6e4);
        let l = { elapsed: n };
        n - t().lastOutputLogTime > 1e3 &&
            (s.info(`QuestHome asset loading duration so far: ${n}ms`), (l.lastOutputLogTime = n)),
            null == t().logger && (l.logger = s),
            (0, la.r)(() => e(l));
    },
}));
var lc = s(516226),
    ld = s(613956),
    lm = s(604880),
    lE = s(318808);
function lh(e) {
    let { adCreativeIds: t } = e,
        s = i.useCallback(() => (0, sD.zg)(t), [t]);
    return (0, r.jsxs)("div", {
        className: ld.MY,
        children: [
            (0, r.jsx)("img", { className: ld.Bg, src: lE.Ay, alt: "" }),
            (0, r.jsx)("div", { className: ld.r$, children: (0, r.jsx)("img", { src: lm, alt: "" }) }),
            (0, r.jsxs)("div", {
                className: ld.Nr,
                children: [
                    (0, r.jsx)(eE.D, {
                        variant: "heading-lg/semibold",
                        color: "text-default",
                        className: ld.ky,
                        children: ew.intl.string(ew.t.GXmn57),
                    }),
                    (0, r.jsx)(J.E, {
                        variant: "text-md/normal",
                        className: ld.G3,
                        children: ew.intl.string(ew.t.bWuKqh),
                    }),
                    (0, r.jsx)(g.$, {
                        variant: "primary",
                        text: ew.intl.string(ew.t.UQvCf7),
                        fullWidth: !0,
                        onClick: s,
                    }),
                ],
            }),
        ],
    });
}
function lx(e) {
    let { alt: t, ariaLabel: s, ariaHidden: n, role: l, width: i = 288, height: a = 192 } = e;
    return (0, r.jsx)("img", {
        style: { width: i, height: a },
        src: "https://cdn.discordapp.com/assets/content/964e407bb0ca2d2738cb00779040e7aaf668b99fdbbe776e69247d582cfcb230.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": n,
        role: l ?? "img",
    });
}
var lf = s(215130);
let lg = function (e) {
    let { matchingQuestIds: t } = e,
        s = (0, eR.C)(),
        { useNewTile: n } = G.aD.useConfig({ location: tN.rE.QUEST_HOME_DESKTOP }),
        { variant: l } = G.Mk.useConfig({ location: tN.rE.QUEST_HOME_DESKTOP }),
        a = i.useRef(null),
        u = l === G.d.LARGE_MASK_MARGIN,
        c = n ? 12 : 20,
        d = nC(a, eW(s, u), c, 3);
    return (0, r.jsxs)(_.B, {
        gap: 16,
        direction: "vertical",
        align: "start",
        className: lf.kL,
        ref: a,
        children: [
            (0, r.jsxs)(eE.D, {
                variant: "heading-lg/medium",
                children: [ew.intl.string(ew.t.giYD00), " (", t.length, ")"],
            }),
            0 === t.length
                ? (0, r.jsxs)(_.B, {
                      gap: 16,
                      direction: "vertical",
                      align: "center",
                      className: lf.y7,
                      children: [
                          (0, r.jsx)(lx, { alt: ew.intl.string(ew.t["Xe+fJM"]) }),
                          (0, r.jsxs)(_.B, {
                              direction: "vertical",
                              align: "center",
                              children: [
                                  (0, r.jsx)(eE.D, {
                                      variant: "heading-lg/medium",
                                      children: ew.intl.string(ew.t["Xe+fJM"]),
                                  }),
                                  (0, r.jsx)(eE.D, {
                                      variant: "heading-sm/medium",
                                      children: ew.intl.string(ew.t["Tc/Ndl"]),
                                  }),
                              ],
                          }),
                      ],
                  })
                : (0, r.jsx)("div", {
                      className: lf.Vg,
                      style: {
                          "--custom-quest-search-tile-min-width": `${eW(s, u)}px`,
                          "--custom-quest-grid-gap": `${c}px`,
                      },
                      children:
                          null !== d &&
                          t.map((e, t) =>
                              n
                                  ? (0, r.jsx)(
                                        su,
                                        {
                                            children: (0, r.jsx)(s1, {
                                                eagerLoadAssets: !0,
                                                questId: e,
                                                questContent: es.uF.QUEST_HOME_SEARCH_RESULT,
                                                contentPosition: t,
                                                rowIndex: Math.floor(t / d),
                                                className: o()(lf.d, lf.hS),
                                                sourceQuestContent: es.uF.QUEST_HOME_SEARCH_RESULT,
                                            }),
                                        },
                                        e,
                                    )
                                  : (0, r.jsx)(
                                        sa.Ay,
                                        {
                                            eagerLoadAssets: !0,
                                            questId: e,
                                            questContent: es.uF.QUEST_HOME_SEARCH_RESULT,
                                            contentPosition: t,
                                            rowIndex: Math.floor(t / d),
                                            className: lf.d,
                                            sourceQuestContent: es.uF.QUEST_HOME_SEARCH_RESULT,
                                        },
                                        e,
                                    ),
                          ),
                  }),
        ],
    });
};
var lv = s(649852),
    l_ = s.n(lv),
    lj = s(379078),
    lS = s(704554),
    lC = s(823784);
let lN = {
        searchType: lj.n.FUZZY,
        searchStringGenerator: function (e) {
            return [
                e.messages.questName.toLowerCase(),
                e.messages.gameTitle.toLowerCase(),
                e.messages.gamePublisher.toLowerCase(),
            ].filter(eM.Vq);
        },
        sortType: lj.r.JARO_WINKLER,
        throttleMs: 200,
    },
    lp = function () {
        let [e, t] = i.useState(""),
            [s, n] = i.useState(null),
            l = (0, E.yK)([et.A], () =>
                (0, $.mn)(Array.from(et.A.quests.values()), { sortMethod: tN.kL.SUGGESTED }).map((e) => e.config),
            ),
            r = e.trim().toLowerCase(),
            a = "" !== r,
            o = i.useMemo(() => l_()(er.gr, 1e3), []),
            u = i.useCallback(() => {
                o.cancel();
                let e = (0, lC.tv)();
                null != e &&
                    (0, er.XH)({ searchSessionId: e.uuid, searchSessionDurationMs: Date.now() - e.createdAtTimestamp }),
                    (0, lC.l6)();
            }, [o]),
            c = i.useCallback(() => {
                u(), t("");
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
                    (n(
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
                    let { searchSession: t, isNew: s } = (0, lC.$N)();
                    s && (0, er.OQ)({ searchSessionId: t.uuid }),
                        o({
                            searchSessionId: t.uuid,
                            searchQuery: r,
                            searchQueryLength: r.length,
                            resultsCount: e.length,
                            hasResults: e.length > 0,
                        });
                } else c();
            },
            [a, r, o, c],
        );
        return (0, lS.RT)(r, l, d, lN), { matchingQuestIds: s, query: e, setQuery: t, onSearchClose: c };
    };
var lT = s(631001),
    lA = s(758836),
    lO = s(613057),
    lI = s(620241);
let lR = i.createContext({});
function lb(e) {
    let { banner: t, children: s, header: n, withFullBleedBanner: l = !1 } = e,
        { onScroll: a, scrollerRef: o } = i.useContext(lR);
    return (0, r.jsxs)(eP.X.Provider, {
        value: o,
        children: [
            n,
            (0, r.jsxs)(D.A, {
                onScroll: a,
                ref: o,
                children: [
                    l && t,
                    (0, r.jsxs)(y.A, { className: lI.Jo, innerClassName: lI.FG, children: [!l && t, s] }),
                ],
            }),
        ],
    });
}
function lM(e) {
    let { selectedTab: t, onSelectTab: s, tabs: n, endContent: l } = e;
    return (0, r.jsx)(U.S, { selectedTabId: t, handleTransition: s, tabs: n, endContent: l, icon: x.r });
}
function lQ(e) {
    let { onLoadComplete: t, className: s, isVirtualCurrencyEnabled: n } = e,
        l = (0, E.bG)([C.Ay], () => C.Ay.useReducedMotion),
        a = (0, E.bG)([P.A], () => P.A.isFocused()),
        { ref: o, inViewport: u } = (0, nl.p)(),
        c = i.useRef(null);
    if (
        (i.useEffect(() => {
            c?.current != null &&
                (c.current.paused || (a && u && !l)
                    ? c.current.paused && !l && u && a && c.current.play()
                    : c.current.pause());
        }, [l, u, a]),
        n)
    ) {
        let e = (0, k.TM)();
        return (0, r.jsx)(Y._M, {
            id: "QuestHomeHeroBackground_bannerVideo",
            children: (n) =>
                (0, r.jsx)(R.A, {
                    ref: (e) => {
                        (c.current = e), (o.current = e), (n.current = e);
                    },
                    loop: !0,
                    muted: !0,
                    playsInline: !0,
                    className: s,
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
                className: s,
                alt: "",
                onLoad: t,
                ref: e,
            }),
    });
}
function lH(e) {
    let { onAssetLoad: t, isVirtualCurrencyEnabled: s } = e;
    return (0, r.jsxs)("div", {
        className: o()(lI.Tv, { [lI.lJ]: s }),
        children: [
            (0, r.jsx)(tR, {}),
            (0, r.jsx)("div", { className: o()(lI.nz, { [lI.ZZ]: s }) }),
            (0, r.jsx)(lQ, {
                onLoadComplete: t,
                className: o()(lI.Fe, { [lI.H4]: s, [lI.Q8]: !s }),
                isVirtualCurrencyEnabled: s,
            }),
        ],
    });
}
function lL(e) {
    let { className: t, onAssetLoad: s } = e,
        { enabled: n } = K.useConfig({ location: tN.rE.QUEST_HOME_DESKTOP }),
        l = !n,
        a = i.useCallback(() => {
            l ? window.open(ex.X7G.PAID_TERMS_ORBS) : window.open(w.A.getArticleURL(ex.MVz.QUESTS_LEARN_MORE));
        }, [l]);
    return (0, r.jsx)(ev, {
        className: t,
        adContentId: l ? tN.yr : tN.uz,
        title: l ? ew.intl.format(ew.t.BCBIlp, {}) : ew.intl.format(ew.t.lmMBfy, {}),
        subtitle: l ? ew.intl.format(ew.t.U9FY0J, {}) : ew.intl.string(ew.t.oWCrBq),
        buttons: l
            ? (0, r.jsxs)(f.e, {
                  children: [
                      (0, r.jsx)(g.$, {
                          variant: "overlay-primary",
                          text: ew.intl.string(ew.t["1Wm127"]),
                          onClick: () =>
                              (0, O.Cz)({
                                  tab: lA.G2.ORBS,
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
        background: (0, r.jsx)(lH, { onAssetLoad: s, isVirtualCurrencyEnabled: l }),
    });
}
function ly(e) {
    let { onAssetLoad: t, hasSearchResults: s } = e,
        { isLoading: n } = (0, Y.zT)(),
        { showDefaultBanner: l } = z.C.useConfig({ location: tN.rE.QUEST_HOME_DEFAULT_BANNER });
    return l
        ? (0, r.jsxs)("div", {
              className: o()(lI.iS, { [lI.R]: s }),
              children: [n && (0, r.jsx)(tL, {}), (0, r.jsx)(lL, { className: o()({ [lI.lX]: n }), onAssetLoad: t })],
          })
        : null;
}
function lU(e) {
    let { onAssetLoad: t, onQuestCtaClick: s, questHomeHero: n, isLoadingQuestHomeHero: l, hasSearchResults: i } = e,
        { hasError: a, isLoading: u } = (0, Y.zT)(),
        c = l || u;
    return (0, r.jsxs)("div", {
        className: o()(lI.iS, { [lI.R]: i }),
        children: [
            c && (0, r.jsx)(tL, {}),
            !l &&
                (null == n || a
                    ? (0, r.jsx)(lL, { className: o()({ [lI.lX]: u }), onAssetLoad: t })
                    : (0, r.jsx)(tH, { hero: n, isBannerLoading: u, onQuestCtaClick: s })),
        ],
    });
}
let lD = function (e) {
    let { topLevelRoute: t } = e,
        s = (0, u.zy)(),
        n = (0, u.W6)(),
        l = i.useMemo(() => new URLSearchParams(s.search).getAll($.L1.AD_CREATIVE_IDS), [s.search]),
        a = (d.Fr || d.v1) && l.length > 0,
        x = (0, E.bG)([A.A], () => A.A.getState("quests")),
        {
            selectedTab: f,
            onSelectTab: g,
            tabs: v,
        } = (function (e) {
            let { withClaimedQuestsTab: t = !0 } = e,
                s = lT.A.useField("tab"),
                n = (0, u.zy)(),
                l = (0, $.p5)(),
                { enabled: r } = G.Mk.useConfig({ location: tN.rE.QUEST_HOME_DESKTOP }),
                { useNewLayoutWithSearch: a } = G.aD.useConfig({ location: tN.rE.QUEST_HOME_DESKTOP }),
                o = r || a;
            i.useEffect(() => {
                lT.A.getState().initializeFromUrl(n.search, l);
            }, [n.search, l]);
            let c = i.useCallback((e) => {
                lT.A.getState().setTab(e);
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
                selectedTab: s,
                onSelectTab: c,
            };
        })({ withClaimedQuestsTab: !0 }),
        { query: C, setQuery: R, matchingQuestIds: M, onSearchClose: Q } = lp(),
        { onScroll: y } = (0, L.G)(),
        U = V.A.getState().getUtmCurrentContext(),
        D = lu((e) => e.registerAssetLoad),
        P = i.useRef(U);
    i.useEffect(() => {
        P.current = U;
    }),
        i.useEffect(() => {
            let { current: e } = P;
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
        (0, I.HU)({ location: ew.intl.string(ew.t.JALI2K) });
    let k = i.useRef(null),
        { enabled: w } = G.Mk.useConfig({ location: tN.rE.QUEST_HOME_DESKTOP }),
        { useNewLayoutWithSearch: W } = G.aD.useConfig({ location: tN.rE.QUEST_HOME_DESKTOP }),
        K = w || W,
        J = i.useRef(null),
        X = i.useCallback((e) => {
            J.current?.scrollToQuest(e);
        }, []),
        Z = i.useMemo(() => ((0, B.uJ)(s.hash) ? null : s.hash.substring(1)), [s.hash]),
        { questHomeHero: ee, isLoading: et, confirmedEmpty: es } = (0, ty.lg)(l[0] ?? null),
        { showHeroPlaceholder: en } = (0, z.x)(),
        el = i.useCallback(() => {
            (0, F.Y)({
                pageType: ex.liQ.GLOBAL_DISCOVERY_QUESTS,
                sectionType: ex.JJy.ORBS_BALANCE_MENU,
                ctaObject: ex.ZSU.CTA_TO_ORBS_SHOP,
            }),
                (0, O.Cz)({ tab: lA.G2.ORBS, analyticsLocations: [], analyticsSource: N.A.ORBS_BALANCE_MENU });
        }, []);
    i.useEffect(() => {
        (0, S.I)(ex.BVt.QUEST_HOME);
    }, []),
        i.useEffect(() => {
            H.trigger();
        }, []),
        i.useEffect(() => {
            if (a || null != x) return;
            let e = new URLSearchParams(s.search),
                l = e.get($.L1.TAB);
            if (l === $.NC.PREVIEW_TOOL) {
                let t = e.get($.L1.QUEST_ID);
                T.A.openNativeAppModal("quests", ex.e$_.DEEP_LINK, {
                    type: lO.XK.QUEST_PREVIEW_TOOL,
                    params: { questId: t, tab: l },
                });
                return;
            }
            let r = performance.getEntriesByType("navigation")[0];
            if ("POP" === n.action && r?.type === "navigate" && t && l !== $.NC.PREVIEW_TOOL) {
                let t = (0, B.uJ)(s.hash) ? null : s.hash.substring(1),
                    n = e.get($.L1.SORT),
                    r = e.get($.L1.FILTER),
                    i = e.get($.L1.AD_CREATIVE_IDS);
                T.A.openNativeAppModal("quests", ex.e$_.DEEP_LINK, {
                    type: lO.XK.QUEST_HOME,
                    params: { questId: (0, B.uJ)(t) ? void 0 : t, sort: n, filter: r, tab: l, adCreativeIds: i },
                });
            }
        }, [s.search, x, n.action, s.hash, t, a]),
        i.useEffect(() => {
            t && (0, b.Dr)(h.M.QUEST_HOME_ENTRYPOINT_ONBOARDING);
        }, [t]);
    let er = i.useCallback(
            (e) => {
                n.replace({ ...n.location, hash: void 0 }), k.current?.scrollToTop({ animate: !1 }), g(e), Q();
            },
            [n, g, Q],
        ),
        ei = i.useMemo(() => null != M && K, [M, K]),
        ea = i.useMemo(() => ({ onAssetLoadComplete: D }), [D]),
        eo = i.useMemo(() => ({ onScroll: y, scrollerRef: k }), [y, k]),
        eu = et && !en;
    return a
        ? (0, r.jsx)(lh, { adCreativeIds: l })
        : (0, r.jsx)(lc.M.Provider, {
              value: ea,
              children: (0, r.jsx)(lR.Provider, {
                  value: eo,
                  children: (0, r.jsx)("div", {
                      className: o()(lI.kL, { [lI.KY]: !t }),
                      children: (0, r.jsxs)(lb, {
                          header: (0, r.jsx)(lM, {
                              selectedTab: f,
                              onSelectTab: er,
                              tabs: v,
                              endContent: (0, r.jsxs)(_.B, {
                                  gap: 8,
                                  direction: "horizontal",
                                  align: "center",
                                  justify: "end",
                                  children: [
                                      K &&
                                          (0, r.jsx)(j.I, {
                                              query: C,
                                              onChange: R,
                                              placeholder: ew.intl.string(ew.t.y10TI2),
                                              onClear: Q,
                                              size: "sm",
                                          }),
                                      (0, r.jsx)(q.SS, {
                                          analyticsPage: ex.liQ.GLOBAL_DISCOVERY_QUESTS,
                                          cardAlignment: q.cP.END,
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
                                      source: tN.rE.QUEST_HOME_DESKTOP,
                                      adCreativeId: ee?.id ?? null,
                                      adCreativeType: m.p.QUEST_HOME_HERO,
                                      children: es
                                          ? (0, r.jsx)(ly, { onAssetLoad: D, hasSearchResults: ei })
                                          : (0, r.jsx)(lU, {
                                                onAssetLoad: D,
                                                onQuestCtaClick: X,
                                                hasSearchResults: ei,
                                                questHomeHero: ee,
                                                isLoadingQuestHomeHero: et,
                                            }),
                                  },
                                  ee?.id,
                              ),
                          children: [
                              ei && null != M && (0, r.jsx)(lg, { matchingQuestIds: M }),
                              f === $.NC.CLAIMED
                                  ? (0, r.jsx)(nY, { onSelectTab: er, className: ei ? lI.R : void 0 })
                                  : f === $.NC.PREVIEW_TOOL
                                    ? (0, r.jsx)(nn, { className: ei ? lI.R : void 0 })
                                    : K
                                      ? (0, r.jsx)(lr, {
                                            className: ei ? lI.R : void 0,
                                            ref: J,
                                            deepLinkedQuestId: Z,
                                            isLoadingQuestHomeHero: et,
                                        })
                                      : (0, r.jsx)(nH, { ref: J }),
                          ],
                      }),
                  }),
              }),
          });
};
