let n;
s.r(t), s.d(t, { default: () => lD }), s(323874), s(14289), s(35956);
var l,
    r = s(627968),
    i = s(64700),
    a = s(503698),
    o = s.n(a),
    u = s(873263),
    c = s(562708),
    d = s(607399),
    m = s(323889),
    E = s(17928),
    h = s(554146),
    x = s(577473),
    g = s(825484),
    f = s(821609),
    v = s(509434),
    _ = s(331322),
    j = s(892547),
    S = s(944791),
    C = s(775602),
    p = s(793574),
    N = s(139286),
    T = s(197111),
    O = s(10088),
    A = s(34332),
    I = s(726249),
    b = s(607470),
    R = s(826673),
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
var z = s(201274),
    $ = s(557637),
    Y = s(834730),
    J = s(289873),
    X = s(274670),
    Z = s(144779),
    ee = s(859703),
    et = s(24001),
    es = s(104886),
    en = s(291749),
    el = s(561844),
    er = s(18437),
    ei = s(590202),
    ea = s(901406),
    eo = s(415441),
    eu = s(73473),
    ec = s(139384),
    ed = s(43990),
    em = s(297264),
    eE = s(770178),
    eh = s(652215),
    ex = s(915121);
function eg(e, t) {
    let { row_index: s, ...n } = (0, ei.fF)(et.uF.QUEST_HOME_HERO);
    (0, el.Qg)({
        adContentId: e,
        adCreativeType: m.p.QUEST_HOME_HERO,
        event: t,
        properties: n,
        sourceQuestContent: et.uF.QUEST_HOME_HERO,
    });
}
let ef = i.forwardRef(function (e, t) {
    let { adContentId: s, topContent: n, title: l, subtitle: a, buttons: u, background: c, className: d } = e,
        [m, E] = i.useState("display-lg"),
        h = i.useCallback((e) => {
            E(e.contentRect.width < 500 ? "display-md" : "display-lg");
        }, []),
        x = (0, eE.w)(h, [], { fireOnMount: !0 }),
        g = i.useCallback(() => eg(s, eh.HAw.QUEST_HOVER), [s]),
        f = i.useCallback(() => eg(s, eh.HAw.QUEST_HOVER_OFF), [s]);
    return (0, r.jsx)(ed.N, {
        theme: eh.NJ8.MIDNIGHT,
        disableAdaptiveTheme: !0,
        children: (e) =>
            (0, r.jsx)("div", {
                "data-testid": "quest-home-hero-banner",
                className: o()(ex.iE, e, d),
                onMouseEnter: g,
                onMouseLeave: f,
                ref: (e) => {
                    (x.current = e), "function" == typeof t ? t(e) : null != t && (t.current = e);
                },
                children: (0, r.jsxs)("div", {
                    className: ex.FG,
                    children: [
                        (0, r.jsxs)(_.B, {
                            className: ex.Qs,
                            direction: "vertical",
                            justify: null != n ? "space-between" : "end",
                            children: [
                                n,
                                (0, r.jsxs)(_.B, {
                                    className: ex.yp,
                                    gap: 16,
                                    children: [
                                        (0, r.jsxs)(_.B, {
                                            gap: 8,
                                            children: [
                                                (0, r.jsx)(em.D, {
                                                    color: "text-strong",
                                                    variant: m,
                                                    className: ex.DD,
                                                    children: l,
                                                }),
                                                (0, r.jsx)(Y.E, {
                                                    color: "text-strong",
                                                    variant: "text-md/normal",
                                                    className: ex.VA,
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
var ev = s(339889);
s(134528), s(947204);
var e_ = s(749401),
    ej = s(635377),
    eS = s.n(ej),
    eC = s(998304),
    ep = s(515718);
let eN = new (eS())({ max: 50 });
async function eT(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
        s = eN.get(`${e}-${t}`);
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
        return (0, eC.Ob)(t, s, n);
    });
    return eN.set(`${e}-${t}`, n), n;
}
var eO = s(49491),
    eA = s(569926),
    eI = s(418842),
    eb = s(174459),
    eR = s(403362),
    eM = s(38405);
let eQ = (0, W.mj)({
    name: "2026-06-hero-shelf-ad-tile",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var eH = s(792620);
s(321073);
var eL = s(535185),
    ey = s(408278),
    eU = s(548411),
    eD = s(554830),
    eF = s(689175),
    eq = s(321503),
    eP = s(661531),
    ek = s(375708),
    ew =
        (((l = {}).FEATURED = "featured"),
        (l.IN_PROGRESS = "in-progress"),
        (l.ENDING_SOON = "ending-soon"),
        (l.ORB = "orb"),
        (l.DISCOVERED = "discovered"),
        (l.EXPIRED = "expired"),
        (l.PREVIEW = "preview"),
        (l.SPECIAL_QUESTS = "special-quests"),
        l);
let eB = [
    { type: "featured-quests", identifier: "featured", title: ek.t["ih/OtS"], maxItems: 4 },
    { type: "quests", identifier: "ending-soon", title: ek.t.PRg3qh },
    { type: "quests", identifier: "special-quests", title: ek.t.P0lmqC },
    { type: "quests", identifier: "orb", title: ek.t["0Uc94A"] },
    { type: "quests", identifier: "in-progress", title: ek.t.CHJy6z },
    { type: "quests", identifier: "discovered", title: ek.t["u9Ug++"] },
    { type: "quests", identifier: "preview", title: ek.t["1gfA/U"], shouldShowFn: (e, t) => t },
    { type: "quests", identifier: "expired", title: ek.t.Q8nVIj, shouldShowFn: (e, t) => e },
];
function eV(e) {
    return eP.A.space.SPACE_XL.resolve({ density: e });
}
function eG(e, t) {
    return (1220 - 2 * eV(e) * (t ? 2 : 0.75)) / 3;
}
var eW = s(631499);
let eK = "data-scroll-target",
    ez = `[${eK}]`,
    e$ = { anchors: [], windowSizes: [] },
    eY = '[role="button"]:not([tabindex="-1"]):not([aria-disabled="true"])';
function eJ(e, t) {
    let s = t.length - 1,
        n = Math.max(0, e.scrollWidth - e.clientWidth),
        l = t.map((t, l) => (0 === l ? 0 : l === s ? n : t - e.clientWidth / 2));
    function r(t) {
        return Math.abs(t - e.scrollLeft);
    }
    return { currentIndex: l.reduce((e, t, s) => (r(t) < r(l[e]) ? s : e), 0), scrollLefts: l };
}
let eX = i.memo(function (e) {
    let {
            children: t,
            className: s,
            itemSelector: n = ez,
            maskWidth: l = 24,
            overflowAmount: a = 0,
            maskMarginMultiplier: u = 1,
            onScrollEnd: c,
        } = e,
        d = i.useRef(null),
        m = i.useRef(null),
        h = i.useRef(0),
        x = i.useRef(null),
        [g, f] = i.useState(!1),
        [v, _] = i.useState(!1),
        [j, S] = i.useState(!0),
        [p, N] = i.useState([]),
        [T, O] = i.useState([]),
        A = (0, E.bG)([C.Ay], () => C.Ay.useReducedMotion) ? "auto" : "smooth",
        I = i.useCallback(() => {
            let e = d.current?.getScrollerNode();
            null == e ||
                (0 !== e.clientWidth && (f(e.scrollLeft > 0), _(e.scrollLeft + e.clientWidth < e.scrollWidth - 1)));
        }, []),
        b = i.useCallback(() => {
            let { anchors: e, windowSizes: t } = (function (e) {
                let { scrollerRef: t, itemSelector: s, maskMarginMultiplier: n, maskWidth: l } = e,
                    r = t.current?.getScrollerNode();
                if (null == r || r.scrollWidth <= r.clientWidth) return e$;
                let i = Array.from(r.querySelectorAll(s));
                if (0 === i.length) return e$;
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
                return c.length < 2 ? e$ : (u.push(r.scrollWidth), { anchors: u, windowSizes: c });
            })({ scrollerRef: d, itemSelector: n, maskWidth: l, maskMarginMultiplier: u });
            O(t), N((t) => (t.length === e.length && t.every((t, s) => t === e[s]) ? t : e));
        }, [l, n, u, N]),
        R = i.useCallback(() => {
            if (null == x.current || x.current?.clientWidth === 0) return S(!0);
            S(x.current?.clientWidth >= 1260);
        }, [x]),
        M = i.useCallback(
            (e) => {
                let t = d.current?.getScrollerNode();
                if (null == t || p.length < 2) return;
                let { currentIndex: s, scrollLefts: n } = eJ(t, p),
                    l = T[s] ?? 1,
                    r = Math.max(0, Math.min(p.length - 1, s + e * l));
                (m.current = ei.pk.ARROW), t.scrollTo({ left: n[r], behavior: A });
            },
            [A, p, T],
        ),
        Q = i.useCallback((e, t) => {
            let s = d.current?.getScrollerNode();
            if (null == s || null == e || !s.contains(e)) return;
            let n = s.getBoundingClientRect(),
                l = e.getBoundingClientRect(),
                r = n.left - l.left,
                i = l.right - n.right;
            (0 !== r || 0 !== i) &&
                ((m.current = ei.pk.MANUAL),
                r > 0
                    ? s.scrollTo({ left: s.scrollLeft - r, behavior: t })
                    : i > 0 && s.scrollTo({ left: s.scrollLeft + i, behavior: t }));
        }, []),
        H = i.useCallback(
            (e) => {
                let t = e.target.closest(n);
                null != t && Q(t, A);
            },
            [n, Q, A],
        ),
        L = i.useCallback(() => {
            let e = d.current?.getScrollerNode();
            if (null == e) return;
            let { currentIndex: t } = eJ(e, p),
                s = m.current ?? ei.pk.MANUAL;
            m.current = null;
            let n = h.current;
            h.current = e.scrollLeft;
            let l = e.scrollLeft > n ? ei.VU.RIGHT : ei.VU.LEFT,
                r = T[t] ?? 1;
            c?.({
                scrollingType: s,
                scrollWindowStartIndex: t,
                scrollWindowEndIndex: t + r - 1,
                scrollWindowSize: r,
                scrollingDirection: l,
            });
        }, [c, p, T]),
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
                    o = null == a ? null : a.matches(eY) ? a : a.querySelector(eY);
                null != o && (o.focus({ preventScroll: !0 }), e.repeat && Q(a, "instant"));
            },
            [n, Q],
        ),
        U = i.useCallback(() => {
            I(), b(), R();
        }, [I, b, R]);
    (0, eL.g)(x, U, [], { fireOnMount: !0 });
    let D = a > 0,
        F = i.useMemo(
            () => ({
                "--custom-scroller-mask-width": `${l}px`,
                "--custom-scroller-overflow-amount": `${a}px`,
                "--custom-scroller-scroll-behavior": A,
            }),
            [l, a, A],
        );
    return (0, r.jsxs)("div", {
        className: o()(s, eW.m7),
        ref: x,
        style: F,
        children: [
            (0, r.jsx)("div", {
                className: o()(eW.k9, eW.RW, { [eW.Q2]: g }),
                "aria-hidden": !0,
                children: (0, r.jsx)(ey.K, {
                    icon: eU.Z,
                    variant: "overlay-secondary",
                    onClick: () => M(-1),
                    disabled: !g,
                    "aria-label": ek.intl.string(ek.t.vgfxaA),
                    tabIndex: -1,
                }),
            }),
            (0, r.jsx)("div", {
                className: o()(eW.k9, eW.K3, { [eW.Q2]: v }),
                "aria-hidden": !0,
                children: (0, r.jsx)(ey.K, {
                    icon: eD.K,
                    variant: "overlay-secondary",
                    onClick: () => M(1),
                    disabled: !v,
                    tabIndex: -1,
                    "aria-label": ek.intl.string(ek.t.XiOHRX),
                }),
            }),
            (0, r.jsx)("div", {
                className: o()({ [eW.sF]: g && j, [eW.RC]: v && j, [eW.Ni]: D && !g, [eW.GA]: D && !v }),
                children: (0, r.jsx)(eF.zC, {
                    ref: d,
                    orientation: "horizontal",
                    onScroll: I,
                    onScrollEnd: L,
                    onFocusCapture: H,
                    onKeyDown: y,
                    className: o()({ [eW.x2]: D }, eW.XG),
                    children: (0, r.jsxs)(eq.X.Provider, {
                        value: d,
                        children: [
                            t,
                            p.map((e, t) =>
                                (0, r.jsx)(
                                    "div",
                                    { "aria-hidden": !0, className: eW.fw, style: { insetInlineStart: `${e}px` } },
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
var eZ = s(4798);
function e0(e, t, s) {
    if (null != s) {
        if (e)
            return {
                boxShadow: (0, eZ.to)(
                    [s.to({ range: [0, 0.25, 0.75, 1], output: [0, 1, 1, 0] })],
                    (e) => `0 0 ${25 * e}px 0 rgba(88, 101, 242, ${e})`,
                ),
            };
        if (t)
            return { opacity: (0, eZ.to)([s.to({ range: [0, 0.25, 0.75, 1], output: [1, 0.4, 0.4, 1] })], (e) => e) };
    }
}
var e1 = s(440703),
    e2 = s(731355),
    e7 = s(621466),
    e8 = s(717421),
    e4 = s(939249),
    e3 = s(187322),
    e6 = s(508770),
    e5 = s(406810),
    e9 = s(628284),
    te = s(65154),
    tt = s(687966),
    ts = s(155718),
    tn = s(496431),
    tl = s(640708),
    tr = s(287809),
    ti = s(58703),
    ta = s(927813),
    to = s(541830),
    tu = s(971649),
    tc = s(651892),
    td = s(801365),
    tm = s(814793),
    tE = s(453384),
    th = s(646764),
    tx = s(398025),
    tg = s(818348),
    tf = s(815872);
function tv(e) {
    let [t, s] = i.useState(!1),
        n = i.useCallback(() => {
            t || (s(!0), e?.(!0));
        }, [t, e]),
        l = i.useCallback(() => {
            t && (s(!1), e?.(!1));
        }, [t, e]);
    return { isHovering: t, hoverProps: { onMouseEnter: n, onMouseLeave: l, onFocus: n, onBlur: l } };
}
function t_(e) {
    let { hero: t, contentPosition: s, impressionRef: n } = e,
        l = i.useRef(null),
        { isHovering: a, hoverProps: u } = tv(
            i.useCallback(
                (e) => {
                    (0, el.Qg)({
                        adContentId: t.id,
                        adCreativeType: m.p.QUEST_HOME_HERO,
                        event: e ? eh.HAw.QUEST_HOVER : eh.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: et.uF.QUEST_HOME_HERO_SHELF,
                            content_name: (0, ei.jO)(et.uF.QUEST_HOME_HERO_SHELF),
                            content_position: s,
                        },
                        sourceQuestContent: et.uF.QUEST_HOME_HERO_SHELF,
                    });
                },
                [t.id, s],
            ),
        );
    i.useEffect(() => {
        let e = l.current;
        (0, e7.vq)(e, HTMLVideoElement) && (a ? ((e.currentTime = 0), e.play().catch(tg.tE)) : e.pause());
    }, [a]);
    let { hoverSpring: c } = (0, e8.z)({ hoverSpring: +!!a, config: eZ.config.gentle }),
        d = i.useCallback(() => {
            (0, ea._Q)(
                { adContentId: t.id, adCreativeType: m.p.QUEST_HOME_HERO, cta: t.cta },
                {
                    content: et.uF.QUEST_HOME_HERO_SHELF,
                    ctaContent: ei.Cy.OPEN_GAME_LINK,
                    position: s,
                    impressionId: n.current?.getId(),
                    sourceQuestContent: et.uF.QUEST_HOME_HERO_SHELF,
                },
            );
        }, [t.cta, t.id, s, n]);
    return (0, r.jsxs)(e4.D, {
        tag: "div",
        className: o()(tf.FW, tf.Bm),
        onClick: d,
        "aria-label": t.cta.buttonLabel,
        [eK]: !0,
        ...u,
        children: [
            (0, r.jsx)("div", {
                className: tf.Ve,
                children: (0, r.jsx)(eo.N, {
                    showVideo: !0,
                    assetRef: l,
                    imageAsset:
                        null != t.shelfImage
                            ? {
                                  asset: { url: t.shelfImage, mimetype: null, isAnimated: !1 },
                                  assetId: "intro-image",
                                  className: o()(tf.pv, tf.gI),
                              }
                            : void 0,
                    videoAsset:
                        null != t.shelfVideo
                            ? {
                                  asset: { url: t.shelfVideo, mimetype: null, isAnimated: !0 },
                                  assetId: "intro-video",
                                  className: o()(tf.pv, tf.Wq),
                              }
                            : void 0,
                }),
            }),
            (0, r.jsx)(eZ.animated.div, {
                className: tf.hn,
                style: { transform: c.to([0, 1], [100, 0]).to((e) => `translateY(${e}%)`) },
                children: (0, r.jsx)(f.$, {
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
function tj(e) {
    let { hero: t, game: s, contentPosition: n, shelfImage: l, impressionRef: a } = e,
        u = i.useRef(null),
        { isHovering: c, hoverProps: d } = tv(
            i.useCallback(
                (e) => {
                    (0, el.Qg)({
                        adContentId: t.id,
                        adCreativeType: m.p.QUEST_HOME_HERO,
                        event: e ? eh.HAw.QUEST_HOVER : eh.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: et.uF.QUEST_HOME_HERO_SHELF,
                            content_name: (0, ei.jO)(et.uF.QUEST_HOME_HERO_SHELF),
                            content_position: n,
                        },
                        sourceQuestContent: et.uF.QUEST_HOME_HERO_SHELF,
                    });
                },
                [t.id, n],
            ),
        );
    i.useEffect(() => {
        let e = u.current;
        (0, e7.vq)(e, HTMLVideoElement) && (c ? ((e.currentTime = 0), e.play().catch(tg.tE)) : e.pause());
    }, [c]);
    let E = i.useCallback(() => {
            (0, ea._Q)(
                { adContentId: t.id, adCreativeType: m.p.QUEST_HOME_HERO, cta: t.cta },
                {
                    content: et.uF.QUEST_HOME_HERO_SHELF,
                    ctaContent: ei.Cy.OPEN_GAME_LINK,
                    position: n,
                    impressionId: a.current?.getId(),
                    sourceQuestContent: et.uF.QUEST_HOME_HERO_SHELF,
                },
            );
        }, [t.cta, t.id, n, a]),
        h = i.useRef(null),
        [x, g] = i.useState({ top: !1, bottom: !1 }),
        v = i.useCallback(() => {
            let e = h.current;
            if (null == e) return;
            let t = e.getDistanceFromTop() > 4,
                s = e.getDistanceFromBottom() > 4;
            g((e) => (e.top === t && e.bottom === s ? e : { top: t, bottom: s }));
        }, []);
    i.useLayoutEffect(() => {
        v();
    }, [v]);
    let { topFade: _, bottomFade: j } = (0, e8.z)({
            topFade: +!!x.top,
            bottomFade: +!!x.bottom,
            config: { ...eZ.config.gentle, duration: 100 },
        }),
        S = i.useMemo(() => {
            let e = null != s.firstReleaseDate ? new Date(s.firstReleaseDate).getFullYear() : NaN,
                t = isNaN(e) ? null : e,
                n = s.genres.at(0);
            return [
                t,
                null != n ? (0, to.du)(n) : null,
                s.getCompanyByRole(ts.wk.DEVELOPER).at(0)?.name ?? null,
            ].filter((e) => null != e);
        }, [s]),
        C = i.useMemo(() => S.length > 0, [S]);
    return (0, r.jsxs)(e4.D, {
        tag: "div",
        className: o()(tf.FW, tf.n7),
        onClick: E,
        [eK]: !0,
        ...d,
        children: [
            (0, r.jsx)("div", { className: tf.hu }),
            (0, r.jsx)("div", {
                className: tf.fQ,
                children: (0, r.jsx)(eo.N, {
                    showVideo: !0,
                    assetRef: u,
                    imageAsset:
                        null != l
                            ? {
                                  asset: { url: l, mimetype: null, isAnimated: !1 },
                                  assetId: "intro-image",
                                  className: o()(tf.pv, tf.gI),
                              }
                            : void 0,
                    videoAsset:
                        null != t.shelfVideo
                            ? {
                                  asset: { url: t.shelfVideo, mimetype: null, isAnimated: !0 },
                                  assetId: "intro-video",
                                  className: o()(tf.pv, tf.Wq),
                              }
                            : void 0,
                }),
            }),
            (0, r.jsxs)("div", {
                className: tf.iq,
                children: [
                    (0, r.jsxs)("div", {
                        className: tf.o7,
                        children: [
                            (0, r.jsx)(em.D, {
                                variant: "heading-xl/semibold",
                                color: "text-strong",
                                children: s.name,
                            }),
                            C &&
                                (0, r.jsx)("p", {
                                    className: tf.c9,
                                    children: S.map((e, t) =>
                                        (0, r.jsxs)(
                                            i.Fragment,
                                            {
                                                children: [
                                                    (0, r.jsx)(Y.E, {
                                                        variant: "text-sm/medium",
                                                        color: "text-muted",
                                                        tag: "span",
                                                        children: e,
                                                    }),
                                                    t < S.length - 1 && (0, r.jsx)(tl.A, { width: 3, height: 3 }),
                                                ],
                                            },
                                            t,
                                        ),
                                    ),
                                }),
                        ],
                    }),
                    (0, r.jsx)(eZ.animated.div, {
                        className: tf.hX,
                        style: {
                            maskImage: (0, eZ.to)(
                                [_, j],
                                (e, t) =>
                                    `linear-gradient(to bottom, rgba(0,0,0,${1 - e}), #000 48px, #000 calc(100% - 48px), rgba(0,0,0,${1 - t}))`,
                            ),
                        },
                        children: (0, r.jsx)(e3.vN, {
                            children: (0, r.jsx)(eF.Ch, {
                                ref: h,
                                className: tf.hw,
                                onScroll: v,
                                fade: !c,
                                children: (0, r.jsx)(Y.E, {
                                    variant: "text-md/normal",
                                    color: "text-muted",
                                    className: tf.W1,
                                    children: s.description,
                                }),
                            }),
                        }),
                    }),
                    (0, r.jsx)(f.$, {
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
function tS(e) {
    let { heroId: t, quest: s, onQuestCtaClick: n, contentPosition: l } = e,
        a = i.useMemo(() => new Date(s.config.expiresAt), [s.config.expiresAt]),
        { days: u, hours: c, minutes: d, seconds: h } = (0, tn.A)(a, ta.A.Millis.MINUTE),
        x = i.useMemo(
            () =>
                (0, ti.uN)(
                    { days: u, hours: c, minutes: d, seconds: h },
                    { days: ek.t["Ux/De1"], hours: ek.t.Lzd5Ie, minutes: ek.t.odmpbP },
                ),
            [u, c, d, h],
        ),
        g = (0, E.bG)([tr.default], () => tr.default.getCurrentUser()),
        v = i.useMemo(() => (0, td.mq)(s.config, g), [s.config, g]),
        j = i.useMemo(
            () =>
                (function (e, t) {
                    switch ((0, tc.xv)(e).type) {
                        case e1.l.IN_GAME:
                            return ek.intl.string(ek.t["O/J2kr"]);
                        case e1.l.COLLECTIBLE:
                            return ek.intl.string(ek.t.Jg17Ut);
                        case e1.l.VIRTUAL_CURRENCY:
                            return ek.intl.string(ek.t.ElYQFS);
                        default:
                            return (0, td.mq)(e, t);
                    }
                })(s.config, g),
            [s.config, g],
        ),
        { completedRatio: S, completedRatioDisplay: C } = (0, z.O9)(s),
        p = i.useMemo(() => (0, td.wo)(s.config, g), [s.config, g]),
        N = (0, er.tG)(),
        T = (0, er.WS)(),
        O = (0, tu.wW)(),
        { isHovering: A, hoverProps: I } = tv(
            i.useCallback(
                (e) => {
                    T({
                        adContentId: t,
                        relatedQuestId: s.id,
                        adCreativeType: m.p.QUEST_HOME_HERO,
                        event: e ? eh.HAw.QUEST_HOVER : eh.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: et.uF.QUEST_HOME_HERO_SHELF,
                            content_name: (0, ei.jO)(et.uF.QUEST_HOME_HERO_SHELF),
                            content_position: l,
                        },
                        sourceQuestContent: et.uF.QUEST_HOME_HERO_SHELF,
                    });
                },
                [t, T, l, s.id],
            ),
        ),
        { hoverSpring: b } = (0, e8.z)({ hoverSpring: +!!A, config: eZ.config.gentle }),
        R = i.useCallback(() => {
            n(s.id),
                (0, es.E5)(es.kI.STEP_2_CLICKED_INTERNAL, "quest_home_hero_shelf_cards")
                    ? (0, X.r)({
                          type: Z.F.CLICK_INTERNAL,
                          adCreativeType: m.p.QUEST_HOME_HERO,
                          adCreativeId: t,
                          relatedQuestId: s.id,
                          questContentCTA: ei.Cy.VIEW_QUESTS,
                          surfaceId: et.uF.QUEST_HOME_HERO_SHELF,
                          sourceQuestContent: et.uF.QUEST_HOME_HERO_SHELF,
                          questContentPosition: l,
                          impressionId: O(),
                      })
                    : N({
                          adContentId: t,
                          relatedQuestId: s.id,
                          adCreativeType: m.p.QUEST_HOME_HERO,
                          questContent: et.uF.QUEST_HOME_HERO_SHELF,
                          questContentCTA: ei.Cy.VIEW_QUESTS,
                          questContentPosition: l,
                          sourceQuestContent: et.uF.QUEST_HOME_HERO_SHELF,
                      });
        }, [n, t, s.id, N, l, O]);
    return (0, r.jsxs)(e4.D, {
        tag: "div",
        className: o()(tf.FW, tf.$R),
        onClick: R,
        "aria-label": ek.intl.string(ek.t["th2+0j"]),
        [eK]: !0,
        ...I,
        children: [
            (0, r.jsx)("div", { className: tf.hu }),
            (0, r.jsxs)(_.B, {
                direction: "horizontal",
                gap: 4,
                children: [
                    (0, r.jsx)(e6.E, { type: { text: j } }),
                    (0, r.jsx)(eZ.animated.div, {
                        style: { opacity: (0, tx.a)(b.to([0, 1], [1, 0])) },
                        children: (0, r.jsx)(e6.E, { type: { text: x }, icon: e5.O }),
                    }),
                ],
            }),
            (0, r.jsx)(eZ.animated.div, {
                className: tf.Tr,
                style: { transform: b.to([0, 1], [1, 1.1]).to((e) => `scale(${e})`) },
                children: (0, r.jsx)(tE.A, {
                    percentComplete: S,
                    overlayText: A && null != p ? `${p}` : void 0,
                    size: 120,
                    children: (0, r.jsx)(th.A, {
                        quest: s,
                        questContent: et.uF.QUEST_HOME_HERO_SHELF,
                        sourceQuestContent: et.uF.QUEST_HOME_HERO_SHELF,
                        autoplay: A,
                        fullWidth: !0,
                    }),
                }),
            }),
            (0, r.jsx)(eZ.animated.div, {
                className: tf.tw,
                style: {
                    opacity: (0, tx.a)(b.to([0, 1], [1, 0])),
                    transform: b.to([0, 1], [1, 0.9]).to((e) => `scale(${e})`),
                    transformOrigin: "bottom left",
                },
                children: (0, r.jsxs)(_.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)(Y.E, {
                            variant: "text-md/semibold",
                            color: "text-strong",
                            className: tf.Ht,
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
                                        (0, r.jsx)(e9.y, { size: "xs", color: eP.A.colors.ICON_MUTED.css }),
                                        (0, r.jsx)(Y.E, {
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
                                        (0, tm.pv)(s.config) === e2.Z.VIDEO
                                            ? (0, r.jsx)(te.S, { size: "xs", color: eP.A.colors.ICON_MUTED.css })
                                            : (0, r.jsx)(tt._, { size: "xs", color: eP.A.colors.ICON_MUTED.css }),
                                        (0, r.jsx)(Y.E, {
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
            (0, r.jsx)(eZ.animated.div, {
                className: tf.um,
                style: { transform: b.to([0, 1], [100, 0]).to((e) => `translateY(${e}%)`) },
                children: (0, r.jsx)(f.$, {
                    fullWidth: !0,
                    onClick: (e) => {
                        e.stopPropagation(), R();
                    },
                    text: ek.intl.string(ek.t["th2+0j"]),
                }),
            }),
        ],
    });
}
var tC = s(190107),
    tp = s(627568),
    tN = s(168291);
function tT(e) {
    let { hero: t, shelfQuests: s, isBannerLoading: n, onQuestCtaClick: l } = e,
        a = (0, eI.C)(),
        { enabled: o } = eQ.useConfig({ location: tC.rE.QUEST_HOME_DESKTOP }),
        u = i.useMemo(
            () =>
                o
                    ? (s
                          .map((e) => (0, eH.xc)(e) ?? (0, eH._3)(e)?.at(0) ?? null)
                          .filter(eR.Vq)
                          .at(0) ?? null)
                    : null,
            [s, o],
        ),
        { isLoading: c, data: d, error: E } = (0, eA.I)(u),
        h = (0, eO.A)(d),
        x = o && null != d && !h;
    i.useEffect(() => {
        o &&
            null != u &&
            null != E &&
            (eb.default.track(eh.HAw.AD_ASSET_LOADING_FAILURE, {
                source: tC.rE.QUEST_HOME_HERO_SHELF_DESKTOP,
                ad_creative_id: t.id,
                ad_creative_type: m.p.QUEST_HOME_HERO,
                application_ids: [u],
            }),
            eM.A.captureException(E, { tags: { source: tC.rE.QUEST_HOME_HERO_SHELF_DESKTOP } }));
    }, [o, E, t.id, u]);
    let g = i.useMemo(
            () => (x ? (null != t.shelfImage ? t.shelfImage : (d?.getCoverURL(512) ?? null)) : null),
            [x, t, d],
        ),
        f = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
                [s, n] = i.useState(void 0);
            return (
                i.useEffect(() => {
                    let s = !1;
                    return (
                        (null != e ? eT(e, t) : Promise.resolve(void 0))
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
            i.useMemo(() => (null != g ? (0, en.UX)(g, { format: "webp", width: 400, height: 600 }) : null), [g]),
            8,
        ),
        v = i.useMemo(() => (null == f ? null : (0, e_.Z)(f)), [f]),
        j = i.useMemo(() => {
            if (null != v)
                return {
                    "--custom-hero-shelf-scrim-gradient-start": v[0],
                    "--custom-hero-shelf-scrim-gradient-end": v[1],
                };
        }, [v]);
    return n || c
        ? (0, r.jsx)(tO, { numShelfCards: s.length + 1 })
        : (0, r.jsx)(eX, {
              className: tN.vo,
              overflowAmount: 25,
              maskWidth: eV(a),
              maskMarginMultiplier: 0.75,
              children: (0, r.jsxs)(_.B, {
                  className: tN.I2,
                  direction: "horizontal",
                  fullWidth: !1,
                  gap: 20,
                  style: j,
                  children: [
                      !o &&
                          (0, r.jsx)(eu.Z, {
                              adContentId: t.id,
                              adCreativeType: m.p.QUEST_HOME_HERO,
                              questContent: et.uF.QUEST_HOME_HERO_SHELF,
                              questContentPosition: 0,
                              sourceQuestContent: et.uF.QUEST_HOME_HERO_SHELF,
                              children: (e, s) =>
                                  (0, r.jsx)("div", {
                                      ref: (t) => {
                                          e.current = t;
                                      },
                                      children: (0, r.jsx)(t_, { hero: t, contentPosition: 0, impressionRef: s }),
                                  }),
                          }),
                      x &&
                          (0, r.jsx)(eu.Z, {
                              adContentId: t.id,
                              adCreativeType: m.p.QUEST_HOME_HERO,
                              questContent: et.uF.QUEST_HOME_HERO_SHELF,
                              questContentPosition: 0,
                              sourceQuestContent: et.uF.QUEST_HOME_HERO_SHELF,
                              children: (e, s) =>
                                  (0, r.jsx)("div", {
                                      ref: (t) => {
                                          e.current = t;
                                      },
                                      children: (0, r.jsx)(tj, {
                                          hero: t,
                                          game: d,
                                          shelfImage: g,
                                          contentPosition: 0,
                                          impressionRef: s,
                                      }),
                                  }),
                          }),
                      s.map((e, s) =>
                          (0, r.jsx)(
                              eu.Z,
                              {
                                  adContentId: t.id,
                                  adCreativeType: m.p.QUEST_HOME_HERO,
                                  questContent: et.uF.QUEST_HOME_HERO_SHELF,
                                  questContentPosition: s + 1,
                                  sourceQuestContent: et.uF.QUEST_HOME_HERO_SHELF,
                                  children: (n) =>
                                      (0, r.jsx)("div", {
                                          ref: (e) => {
                                              n.current = e;
                                          },
                                          children: (0, r.jsx)(tS, {
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
        { enabled: n } = eQ.useConfig({ location: tC.rE.QUEST_HOME_DESKTOP }),
        l = (0, eI.C)(),
        i = n ? Math.max(s, 3) : Math.max(s, 4);
    return (0, r.jsx)(eX, {
        className: o()(tN.vo, t),
        overflowAmount: 25,
        maskWidth: eV(l),
        maskMarginMultiplier: 0.75,
        children: (0, r.jsx)(_.B, {
            className: tN.I2,
            direction: "horizontal",
            fullWidth: !1,
            gap: 20,
            "aria-hidden": !0,
            children: Array.from({ length: i }).map((e, t) =>
                (0, r.jsx)("div", { className: o()(tp.m, tN.W_, { [tN.E8]: n && 0 === t }) }, t),
            ),
        }),
    });
}
var tA = s(632099);
function tI() {
    return (0, r.jsx)("div", { className: tA.Np });
}
function tb(e) {
    let { heroImage: t, heroVideo: s } = e,
        n = i.useRef(null);
    (0, ec.A)(n, tC.rE.QUEST_HOME_DESKTOP);
    let l = i.useMemo(() => (null != s ? (0, en.WV)(s) : null) ?? t, [s, t]);
    return (0, r.jsx)($._M, {
        id: "QuestHomeHeroBackground_heroVideoWithImageFallback",
        children: (e) =>
            (0, r.jsx)(eo.N, {
                showVideo: !0,
                imageRef: e,
                assetRef: n,
                imageAsset: {
                    alt: "",
                    className: tA.LY,
                    asset: { url: l, mimetype: (0, en.vm)(l), isAnimated: !1 },
                    assetId: l,
                },
                videoAsset: {
                    alt: "",
                    className: tA.LY,
                    asset: { url: s, mimetype: (0, en.vm)(s), isAnimated: !0 },
                    assetId: s,
                },
            }),
    });
}
function tR(e) {
    let { heroImage: t, heroVideo: s } = e;
    return null == s
        ? (0, r.jsxs)("div", {
              className: tA.Tv,
              children: [
                  (0, r.jsx)(tI, {}),
                  (0, r.jsx)("div", {
                      className: tA.LO,
                      children: (0, r.jsx)($._M, {
                          id: "QuestHomeHeroBackground_heroImage",
                          children: (e) => (0, r.jsx)("img", { ref: e, className: tA.LY, src: t, alt: "" }),
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: o()(tA.LO, tA.jx, tA.hw),
                      children: (0, r.jsx)("img", { className: tA.LY, src: t, alt: "" }),
                  }),
                  (0, r.jsx)("div", {
                      className: o()(tA.LO, tA.jx, tA.Co),
                      children: (0, r.jsx)("img", { className: tA.LY, src: t, alt: "" }),
                  }),
              ],
          })
        : (0, r.jsxs)("div", {
              className: tA.Tv,
              children: [
                  (0, r.jsx)(tI, {}),
                  (0, r.jsx)("div", { className: tA.LO, children: (0, r.jsx)(tb, { heroImage: t, heroVideo: s }) }),
              ],
          });
}
function tM(e) {
    let { hero: t, hasFetchedQuests: s, hasNoAccessibleQuests: n } = e,
        l = (0, er.WS)(),
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
                    event: eh.HAw.QUEST_HOME_HERO_MISSING_QUESTS,
                    properties: { missing_quest_ids: e },
                    sourceQuestContent: et.uF.QUEST_HOME_HERO,
                }));
        }, [s, n, t.id, t.questIds, l]),
        null
    );
}
function tQ(e) {
    let { hero: t, onQuestCtaClick: s, isBannerLoading: n } = e,
        l = (0, E.bG)([ee.A], () => ee.A.quests),
        a = (0, E.bG)([ee.A], () => ee.A.lastFetchedCurrentQuests > 0),
        { shelfQuests: u, isShelfEnabled: c } = (0, z.t9)(t),
        { dismissQuestHomeHeroContent: d } = (0, ev.I)();
    i.useEffect(() => {
        d();
    }, [d]);
    let h = i.useMemo(() => t.questIds?.filter((e) => l.has(e)) ?? [], [l, t.questIds]),
        x = h[0];
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(eu.Z, {
                adContentId: t.id,
                adCreativeType: m.p.QUEST_HOME_HERO,
                questContent: et.uF.QUEST_HOME_HERO,
                sourceQuestContent: et.uF.QUEST_HOME_HERO,
                children: (e, l) =>
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(tM, { hero: t, hasFetchedQuests: a, hasNoAccessibleQuests: 0 === h.length }),
                            (0, r.jsx)(ef, {
                                ref: (t) => {
                                    e.current = n ? null : t;
                                },
                                adContentId: t.id,
                                className: o()({ [tA.lX]: n }),
                                topContent: (0, r.jsxs)(_.B, {
                                    direction: "horizontal",
                                    justify: "space-between",
                                    align: "start",
                                    children: [
                                        null != t.sponsorImage &&
                                            (0, r.jsx)($._M, {
                                                id: "QuestHomeHeroBackground_sponsorImage",
                                                children: (e) =>
                                                    (0, r.jsx)("img", {
                                                        ref: e,
                                                        src: t.sponsorImage,
                                                        alt: "",
                                                        className: tA.wm,
                                                    }),
                                            }),
                                        (0, r.jsx)(Y.E, {
                                            color: "text-strong",
                                            variant: "text-sm/normal",
                                            className: tA.yu,
                                            children: ek.intl.string(ek.t.OJjFi5),
                                        }),
                                    ],
                                }),
                                title: t.labelTitle,
                                subtitle: t.labelSubtitle,
                                buttons: (0, r.jsxs)(g.e, {
                                    children: [
                                        (0, r.jsx)(f.$, {
                                            onClick: () => {
                                                (0, ea._Q)(
                                                    {
                                                        adContentId: t.id,
                                                        adCreativeType: m.p.QUEST_HOME_HERO,
                                                        cta: t.cta,
                                                    },
                                                    {
                                                        content: et.uF.QUEST_HOME_HERO,
                                                        ctaContent: ei.Cy.OPEN_GAME_LINK,
                                                        impressionId: l.current?.getId(),
                                                        sourceQuestContent: et.uF.QUEST_HOME_HERO,
                                                    },
                                                );
                                            },
                                            size: "md",
                                            text: t.cta.buttonLabel,
                                            variant: "overlay-primary",
                                        }),
                                        !c &&
                                            null != x &&
                                            (0, r.jsx)(f.$, {
                                                onClick: () => {
                                                    s(x),
                                                        (0, es.E5)(es.kI.STEP_2_CLICKED_INTERNAL, "quest_home_hero")
                                                            ? (0, X.r)({
                                                                  type: Z.F.CLICK_INTERNAL,
                                                                  adCreativeType: m.p.QUEST_HOME_HERO,
                                                                  adCreativeId: t.id,
                                                                  questContentCTA: ei.Cy.VIEW_QUESTS,
                                                                  surfaceId: et.uF.QUEST_HOME_HERO,
                                                                  sourceQuestContent: et.uF.QUEST_HOME_HERO,
                                                              })
                                                            : (0, el.vK)({
                                                                  adContentId: t.id,
                                                                  adCreativeType: m.p.QUEST_HOME_HERO,
                                                                  questContent: et.uF.QUEST_HOME_HERO,
                                                                  questContentCTA: ei.Cy.VIEW_QUESTS,
                                                                  sourceQuestContent: et.uF.QUEST_HOME_HERO,
                                                              });
                                                },
                                                size: "md",
                                                text: ek.intl.string(ek.t["th2+0j"]),
                                                variant: "color-mix",
                                            }),
                                    ],
                                }),
                                background: (0, r.jsx)(tR, { heroImage: t.heroImage, heroVideo: t.heroVideo }),
                            }),
                        ],
                    }),
            }),
            c && (0, r.jsx)(tT, { hero: t, isBannerLoading: n, shelfQuests: u, onQuestCtaClick: s }),
        ],
    });
}
function tH() {
    return (0, r.jsx)("div", { className: o()(ex.iE, ex.FG, ex.B3), children: (0, r.jsx)(J.y, {}) });
}
var tL = s(764336),
    ty = s(228366),
    tU = s(352774);
s(667532);
var tD = s(783878),
    tF = s(663417),
    tq = s(922016),
    tP = s(624479),
    tk = s(416052),
    tw = s(417098);
function tB(e) {
    let { error: t } = e,
        s = t.getAnyErrorMessage();
    return (0, r.jsx)(tw.$T, {
        color: tw.Hv.DANGER,
        children: (0, r.jsx)("div", { children: null != s ? s : ek.intl.string(ek.t.ZErSg5) }),
    });
}
var tV = s(602853),
    tG = s(817281),
    tW = s(688810),
    tK = s(487245),
    tz = s(363195),
    t$ = s(907236);
let tY = function () {
    let { analyticsLocations: e } = (0, tW.Ay)(),
        t = (0, E.bG)([tz.A], () => tz.A.theme),
        s = i.useRef(null);
    i.useEffect(() => {
        null == s.current && (s.current = t);
    }, [t]);
    let n = (0, tV.r)(eP.A.colors.BACKGROUND_BASE_LOW, eh.NJ8.LIGHT),
        l = (0, tV.r)(eP.A.colors.BACKGROUND_BASE_LOW, eh.NJ8.DARKER),
        a = (0, tV.r)(eP.A.colors.BACKGROUND_BASE_LOW, eh.NJ8.MIDNIGHT),
        o = i.useMemo(
            () => [
                { theme: eh.NJ8.LIGHT, label: ek.t.K2sFfo, color: n.hex() },
                { theme: eh.NJ8.DARKER, label: ek.t.b8Cei3, color: l.hex() },
                { theme: eh.NJ8.MIDNIGHT, label: ek.t.Do4ZJx, color: a.hex() },
            ],
            [n, l, a],
        ),
        u = i.useCallback(
            (t) => {
                (0, tK.X8)({ isPersisted: !0, analyticsLocations: e, themeName: `default ${t}` }),
                    (0, tG.u_)({ theme: t });
            },
            [e],
        ),
        c = i.useCallback(() => {
            null != s.current && u(s.current);
        }, [u]);
    return (0, r.jsx)("div", {
        className: t$.N,
        children: (0, r.jsxs)("div", {
            className: t$.t7,
            children: [
                o.map((e) =>
                    (0, r.jsxs)(
                        e4.D,
                        {
                            tag: "div",
                            className: t$.Du,
                            onClick: () => u(e.theme),
                            "aria-label": ek.intl.string(e.label),
                            "aria-pressed": t === e.theme,
                            children: [
                                (0, r.jsx)("div", {
                                    className: `${t$.WT} ${t === e.theme ? t$.TA : ""}`,
                                    style: { backgroundColor: e.color },
                                }),
                                (0, r.jsx)("span", { className: t$.i, children: ek.intl.string(e.label) }),
                            ],
                        },
                        e.theme,
                    ),
                ),
                (0, r.jsx)(ey.K, {
                    onClick: c,
                    "aria-label": ek.intl.string(ek.t.yBZMsQ),
                    icon: tF.f,
                    variant: "secondary",
                }),
            ],
        }),
    });
};
var tJ = s(340369);
let tX = function (e) {
    let { questId: t, setQuestId: s, quest: n, refreshQuest: l } = e,
        [a, o] = i.useState(!1),
        [u, c] = i.useState(!1),
        d = i.useRef(null),
        m = (0, z.pT)(),
        h = (0, E.bG)([ee.A], () => (null != t ? ee.A.getFetchQuestPreviewError(t) : null), [t]),
        x = (0, E.bG)([ee.A], () => null != t && ee.A.isFetchingQuestPreview(t), [t]),
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
                    await (0, tU.Yb)(t, 1);
                } finally {
                    o(!1);
                }
            }
        }, [t, o]),
        j = i.useCallback(async () => {
            if (null != t) {
                o(!0);
                try {
                    await (0, tU.UZ)(t);
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
                    await (0, tU.Yb)(t, e);
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
        className: tJ.Fr,
        children: [
            (0, r.jsx)("div", {
                children: (0, r.jsx)("div", {
                    className: tJ.Br,
                    children: (0, r.jsxs)("div", {
                        className: tJ.bo,
                        children: [
                            (0, r.jsx)(tY, {}),
                            (0, r.jsxs)("div", {
                                className: tJ.b8,
                                children: [
                                    (0, r.jsx)(
                                        tD.Z,
                                        {
                                            selectionMode: "single",
                                            label: "Quest ID",
                                            hideLabel: !0,
                                            options: v,
                                            value: t,
                                            onSelectionChange: C,
                                            placeholder: ek.intl.string(ek.t.Zw8jxn),
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
                                    (0, r.jsx)(ey.K, {
                                        onClick: l,
                                        "aria-label": ek.intl.string(ek.t.wzzjk9),
                                        icon: tF.f,
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
                    className: tJ.in,
                    children: (0, r.jsxs)(g.e, {
                        className: tJ.xv,
                        children: [
                            (0, r.jsx)(f.$, {
                                onClick: _,
                                disabled: a,
                                loading: a,
                                variant: "secondary",
                                text: ek.intl.string(ek.t.jQEfRT),
                            }),
                            (0, r.jsx)(f.$, {
                                onClick: j,
                                disabled: a,
                                loading: a,
                                variant: "secondary",
                                text: ek.intl.string(ek.t.taqkwK),
                            }),
                            (0, r.jsx)(f.$, {
                                onClick: S,
                                disabled: a,
                                loading: a,
                                variant: "secondary",
                                text: ek.intl.string(ek.t.cKSLr4),
                            }),
                            (0, r.jsx)(tq.Y, {
                                targetElementRef: d,
                                shouldShow: u,
                                onRequestClose: () => c(!1),
                                position: "bottom",
                                align: "center",
                                renderPopout: () =>
                                    (0, r.jsx)("div", {
                                        className: tJ.PP,
                                        children: (0, r.jsx)("div", {
                                            className: tJ.sH,
                                            children: (0, r.jsx)(tk.A, {
                                                value: tg.Sb.QUEST_PREVIEW_TOOL_2(t),
                                                text: ek.intl.string(ek.t.WqhZss),
                                                autoFocus: !0,
                                            }),
                                        }),
                                    }),
                                children: (e) =>
                                    (0, r.jsx)(ey.K, {
                                        ...e,
                                        buttonRef: d,
                                        onClick: () => c(!u),
                                        "aria-label": ek.intl.string(ek.t.rNGQfD),
                                        icon: tP.T,
                                        variant: "secondary",
                                    }),
                            }),
                        ],
                    }),
                }),
            null != h ? (0, r.jsx)(tB, { error: h }) : null,
            x ? (0, r.jsx)(J.y, {}) : null,
        ],
    });
};
var tZ = s(364522),
    t0 = s(761508),
    t1 = s(70676);
function t2() {
    return (0, r.jsx)("div", { className: t1.y });
}
var t7 = s(684603),
    t8 = s(371960);
let t4 = function (e) {
    let { quest: t } = e;
    return (0, r.jsx)("div", {
        className: t8.x3,
        children: (0, r.jsxs)("div", {
            className: t8.B0,
            children: [
                (0, r.jsx)(em.D, {
                    className: t8.R_,
                    variant: "heading-md/semibold",
                    children: ek.intl.string(ek.t.L2mlUb),
                }),
                (0, r.jsx)(t7.default, { quest: t }),
            ],
        }),
    });
};
var t3 = s(242939),
    t6 = s(717695),
    t5 = s(928050),
    t9 = s(152049);
let se = function (e) {
    let { quest: t } = e;
    return (0, r.jsx)("div", {
        className: t8.x3,
        children: (0, r.jsxs)("div", {
            className: t5.wp,
            children: [
                (0, r.jsx)(em.D, {
                    className: t5.Oo,
                    variant: "heading-md/semibold",
                    children: ek.intl.string(ek.t.rjVPdM),
                }),
                (0, r.jsx)("div", {
                    className: t5.RE,
                    children: (0, r.jsx)("div", {
                        className: t5.Z,
                        children: (0, r.jsx)("div", {
                            className: t9.C3,
                            children: (0, r.jsx)(t6.A, {
                                children: (0, r.jsx)($.y5, {
                                    source: "preview",
                                    adCreativeId: t.id,
                                    adCreativeType: m.p.QUEST,
                                    children: (0, r.jsx)(t3.QuestBar, { quest: t }),
                                }),
                            }),
                        }),
                    }),
                }),
            ],
        }),
    });
};
var st = s(527549),
    ss = s(442444);
function sn(e) {
    let { quest: t } = e;
    return (0, r.jsx)("div", {
        className: t8.x3,
        children: (0, r.jsxs)("div", {
            className: t8.B0,
            children: [
                (0, r.jsx)(em.D, {
                    className: t8.R_,
                    variant: "heading-md/semibold",
                    children: ek.intl.string(ek.t.gWinpQ),
                }),
                (0, r.jsx)(Y.E, {
                    variant: "text-sm/semibold",
                    color: "text-muted",
                    children:
                        "QuestChannelCallHeader (live \u2014 branches on your experiment assignment: control = legacy UI, T1 = bar below)",
                }),
                (0, r.jsx)("div", {
                    className: t8.YT,
                    children: (0, r.jsx)(st.A, {
                        channelId: "preview-channel-id",
                        previewQuest: t,
                        isParticipatingOverride: !1,
                    }),
                }),
                (0, r.jsx)(Y.E, {
                    variant: "text-sm/semibold",
                    color: "text-muted",
                    children: "T1 \u2014 horizontal bar (unenrolled)",
                }),
                (0, r.jsx)("div", {
                    className: t8.YT,
                    children: (0, r.jsx)(ss.A, { quest: t, isFocused: !1, onAcceptQuest: () => {}, isEnrolling: !1 }),
                }),
            ],
        }),
    });
}
var sl = s(711038),
    sr = s(660794);
let si = function (e) {
    let { questId: t } = e;
    return (0, r.jsx)("div", {
        className: t8.x3,
        children: (0, r.jsxs)("div", {
            className: t8.B0,
            children: [
                (0, r.jsx)(em.D, { variant: "heading-md/semibold", children: ek.intl.string(ek.t.IcljUu) }),
                (0, r.jsx)("div", {
                    className: sr.wu,
                    children: (0, r.jsx)("span", { className: sr.cy, children: ek.intl.string(ek.t.q97mEu) }),
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
    so = s(876741);
function su(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", { className: so.y, children: t });
}
var sc = s(612324),
    sd = s(173936),
    sm = s(365199),
    sE = s(890856),
    sh = s(270045),
    sx = s(79545),
    sg = s(720875),
    sf = s(614972),
    sv = s(339350),
    s_ = s(782134),
    sj = s(271536),
    sS = s(768622),
    sC = s(793934),
    sp = s(662940);
let sN = 2 * ta.A.Millis.DAY;
var sT = s(927013);
function sO(e) {
    let { quest: t, isHovering: s = !1 } = e,
        n = (0, sx.Pd)(t),
        l = (0, E.bG)([ee.A], () => n === sx.UA.UNENROLLED && null != ee.A.questEnrollmentBlockedUntil, [n]),
        a = (0, z.fc)(t),
        u = (0, z.I3)(t),
        c = i.useMemo(() => (0, sp.Dd)(t.config, n, l), [t.config, n, l]),
        d = i.useMemo(() => (0, sp.CK)(n, a, u, l), [n, a, u, l]),
        m = (function (e) {
            let t = (0, sx.Pd)(e),
                [s] = i.useState(() => Date.now()),
                n = i.useMemo(() => new Date(e.config.expiresAt), [e.config.expiresAt]),
                l = n.getTime() - s,
                r =
                    (function (e) {
                        switch (e) {
                            case sx.UA.UNENROLLED:
                            case sx.UA.ENROLLED:
                            case sx.UA.INCOMPLETE:
                                return !0;
                            case sx.UA.COMPLETED:
                            case sx.UA.CLAIMED:
                            case sx.UA.EXPIRED:
                            case sx.UA.EXPIRED_CLAIMABLE:
                                return !1;
                        }
                    })(t) &&
                    l < sN &&
                    l > 0,
                { days: a, hours: o, minutes: u, seconds: c } = (0, tn.A)(n, ta.A.Millis.SECOND, void 0, !r);
            return r && (0 !== a || 0 !== o || 0 !== u || 0 !== c)
                ? `${String(24 * a + o).padStart(2, "0")}:${String(u).padStart(2, "0")}:${String(c).padStart(2, "0")}`
                : null;
        })(t),
        h = null != m ? m : c;
    return (0, r.jsxs)("div", {
        className: o()(sT.fC, { [sT.R]: s }),
        children: [
            (0, r.jsxs)("div", {
                className: sT.qS,
                children: [
                    null != h &&
                        (0, r.jsx)(Y.E, {
                            variant: "text-xs/semibold",
                            className: sT.SJ,
                            color: "text-overlay-light",
                            children: h,
                        }),
                    null != h &&
                        null != d &&
                        (0, r.jsx)(Y.E, {
                            variant: "text-xs/semibold",
                            color: "text-overlay-light",
                            className: sT.If,
                            children: "\u2022",
                        }),
                    null != d &&
                        (0, r.jsxs)("span", {
                            className: sT.BA,
                            children: [
                                (function (e, t) {
                                    let s = { size: "xxs", className: sT.rF, color: "currentColor" };
                                    if (t) return (0, r.jsx)(sv.Q, { ...s });
                                    switch ((0, sp.pv)(e)) {
                                        case sp.UK.PLAY:
                                            return (0, r.jsx)(tt._, { ...s });
                                        case sp.UK.WATCH:
                                            return (0, r.jsx)(s_.u, { ...s });
                                        case sp.UK.ACTIVITY:
                                            return (0, r.jsx)(sj.q, { ...s });
                                        case sp.UK.INSTANT_PLAY:
                                            return (0, r.jsx)(sS.g, { ...s });
                                        case sp.UK.ARENA:
                                            return (0, r.jsx)(sC.q, { ...s });
                                    }
                                })(t, l),
                                (0, r.jsx)(Y.E, {
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
                    className: o()(sT.qS, sT.WZ),
                    children: (0, r.jsx)(Y.E, {
                        variant: "text-xs/bold",
                        color: "currentColor",
                        children: ek.intl.string(ek.t.SKNnqq),
                    }),
                }),
        ],
    });
}
var sA = s(409626),
    sI = s(3738),
    sb = s(646917),
    sR = s(866665),
    sM = s(743368),
    sQ = s(657113),
    sH = s(617986),
    sL = s(936516);
function sy(e) {
    let { quest: t, questContent: s, sourceQuestContent: n, isHovering: l, isInFeaturedSection: i } = e,
        a = (0, sx.Pd)(t),
        { ctaOnHover: u } = G.aD.useConfig({ location: tC.rE.QUEST_HOME_DESKTOP }),
        c = (0, E.bG)([ee.A], () => a === sx.UA.UNENROLLED && null != ee.A.questEnrollmentBlockedUntil, [a]),
        d = !(0, eH.no)(t) || ![sx.UA.ENROLLED, sx.UA.UNENROLLED, sx.UA.INCOMPLETE].includes(a),
        m = a === sx.UA.EXPIRED || (a === sx.UA.CLAIMED && (0, eH.GL)(t)),
        h = (0, z.do)({ quest: t, content: s, ctaContent: ei.Cy.OPEN_GAME_LINK, sourceQuestContent: n });
    return (0, r.jsxs)("div", {
        className: o()(sL.lO, { [sL.Fq]: l || !u }),
        onClick: (e) => e.stopPropagation(),
        children: [
            (0, r.jsx)("div", { className: sL.Cj }),
            (0, r.jsx)(ed.N, {
                theme: eh.NJ8.DARKER,
                disableAdaptiveTheme: !0,
                children: (e) =>
                    (0, r.jsx)("div", {
                        className: o()(e, sL.tn),
                        children: (0, r.jsxs)(g.e, {
                            direction: "horizontal",
                            fullWidth: !0,
                            wrap: !1,
                            size: "md",
                            children: [
                                d &&
                                    (m || i
                                        ? (0, r.jsx)(f.$, {
                                              variant: "secondary",
                                              text: t.config.ctaConfig.buttonLabel,
                                              onClick: h,
                                          })
                                        : (0, r.jsx)(sR.m, {
                                              text: ek.intl.string(ek.t.LLLLPD),
                                              position: "top",
                                              align: "center",
                                              ariaHidden: !0,
                                              children: (0, r.jsx)(ey.K, {
                                                  variant: "secondary",
                                                  icon: sM.W,
                                                  "aria-label": ek.intl.string(ek.t.LLLLPD),
                                                  onClick: h,
                                              }),
                                          })),
                                !m &&
                                    !c &&
                                    (0, r.jsx)(sQ.A, {
                                        quest: t,
                                        surface: sx.V3.QUEST_HOME_TILE_V2_FOOTER,
                                        analyticsCtxQuestContent: s,
                                        analyticsCtxSourceQuestContent: n,
                                    }),
                                c &&
                                    (0, r.jsx)(f.$, {
                                        variant: "overlay-primary",
                                        text: ek.intl.string(ek.t.vY9GgG),
                                        onClick: () => (0, sH.m6)(t, s, n),
                                    }),
                            ],
                        }),
                    }),
            }),
        ],
    });
}
var sU = s(403581),
    sD = s(576761),
    sF = s(473056);
function sq(e) {
    let { onClick: t, questId: s, orbMultiplierEligibility: n } = e,
        l = (0, z.ZP)(s),
        i = (0, sD.B9)(n);
    if (null == l) return null;
    let a = i
        ? ek.intl.formatToPlainString(ek.t.l2UfLG, { bonusOrbMultiplier: l })
        : ek.intl.formatToPlainString(ek.t["G+mKoo"], { bonusOrbMultiplier: l });
    return (0, r.jsx)(e4.D, {
        onClick: function (e) {
            null != l && (e.stopPropagation(), (0, sH.gC)(l, n), t?.());
        },
        "aria-label": a,
        children: (0, r.jsxs)("div", {
            className: sF.k,
            children: [
                (0, r.jsx)(sU.t, { size: "xs", color: "currentColor" }),
                (0, r.jsx)(Y.E, { variant: "text-sm/normal", color: "currentColor", className: sF.Q, children: a }),
            ],
        }),
    });
}
var sP = s(947641),
    sk = s(194261),
    sw = s(106799),
    sB = s(710969),
    sV = s(719095);
function sG(e) {
    let { quest: t, questContent: s, sourceQuestContent: n, isHovering: l } = e,
        i = (0, E.bG)([tr.default], () => tr.default.getCurrentUser()),
        a = (0, td.mq)(t.config, i),
        u = (0, td.ks)(t.config),
        c = (0, td.wo)(t.config, i),
        d = (0, td.l0)(t.config, i),
        m =
            null != c
                ? c > 700 * d
                    ? en.i2.TIER_4
                    : c > 200 * d
                      ? en.i2.TIER_3
                      : c > 100 * d
                        ? en.i2.TIER_2
                        : en.i2.TIER_1
                : void 0,
        { completedRatio: h } = (0, z.O9)(t),
        x = t.userStatus?.claimedAt != null,
        g = (0, sB.Ic)(t),
        f = t.userStatus?.enrolledAt == null,
        v = x ? "completed" : g ? "expired" : null,
        _ = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(th.A, {
                    quest: t,
                    orbTier: m,
                    questContent: s,
                    autoplay: l,
                    lazyLoad: !0,
                    className: sV.al,
                    fullWidth: !0,
                    sourceQuestContent: n,
                }),
                "completed" === v &&
                    (0, r.jsx)("div", {
                        className: sV.EY,
                        children: (0, r.jsx)(sP.r, { className: sV.AM, size: "sm", color: "currentColor" }),
                    }),
                "expired" === v &&
                    (0, r.jsx)("div", {
                        className: sV.EY,
                        children: (0, r.jsx)(sk.X, { size: "sm", className: sV.Sz, color: "currentColor" }),
                    }),
            ],
        });
    return (0, r.jsxs)("div", {
        className: o()(sV.CZ, { [sV.Pv]: l }),
        children: [
            (0, r.jsx)("div", {
                className: o()(sV.tE, { [sV.cB]: l }),
                children: f
                    ? (0, r.jsx)("div", { className: sV.fm, children: _ })
                    : (0, r.jsx)(tE.A, {
                          size: 66,
                          percentComplete: h,
                          useAltStyle: !0,
                          children: (0, r.jsx)("div", { className: sV.n5, children: _ }),
                      }),
            }),
            (0, r.jsxs)("div", {
                className: o()(sV.FS, { [sV.IR]: l }),
                children: [
                    (0, r.jsx)(Y.E, {
                        variant: "text-sm/medium",
                        className: sV.$K,
                        children: t.config.cosponsorMetadata?.name ?? t.config.messages.gamePublisher,
                    }),
                    (0, r.jsxs)("div", {
                        className: o()(sV.oV, { [sV.FJ]: l }),
                        children: [
                            u && (0, r.jsx)(sw.A, { className: sV.Kq, customSize: 14 }),
                            (0, r.jsx)(
                                Y.E,
                                {
                                    variant: "text-md/medium",
                                    className: sV.zN,
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
var sW = s(758175);
function sK(e) {
    let { quest: t, questContent: s, isHovering: n, isInFeaturedSection: l, sourceQuestContent: a } = e,
        u = i.useRef(null),
        c = (0, sI.A9)(t, a, tC.rE.QUEST_HOME_DESKTOP, sA.GameProfileSources.QuestHome, u),
        d = (0, sb.z)(),
        m = (0, z.SD)(t, d);
    return (0, r.jsxs)("div", {
        ref: u,
        className: sW.qr,
        children: [
            (0, r.jsx)(sG, { quest: t, questContent: s, sourceQuestContent: a, isHovering: n }),
            (0, r.jsxs)("div", {
                className: sW.yM,
                children: [
                    (0, r.jsxs)("div", {
                        className: sW.Wi,
                        children: [
                            (0, r.jsx)(Y.E, {
                                variant: "text-sm/normal",
                                className: o()(sW.Wj, sW.h_, { [sW.C4]: n }),
                                children: c,
                            }),
                            (0, r.jsx)(Y.E, {
                                "aria-hidden": !0,
                                variant: "text-sm/normal",
                                lineClamp: 1,
                                className: o()(sW.Wj, sW.XV, { [sW.Hz]: n }),
                                children: c,
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: sW.Gv,
                        children: [
                            (0, r.jsx)(Y.E, {
                                variant: "text-sm/normal",
                                className: sW.I4,
                                children: ek.intl.string(ek.t.o6FLcF),
                            }),
                            m &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(Y.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: "\u2022",
                                        }),
                                        (0, r.jsx)(sq, { questId: t.id, orbMultiplierEligibility: d }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(sy, { quest: t, questContent: s, sourceQuestContent: a, isHovering: n, isInFeaturedSection: l }),
        ],
    });
}
var sz = s(688755),
    s$ = s(831368),
    sY = s(343360);
function sJ(e) {
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
        x = i.useMemo(() => (0, en.tW)(s, en.fY.QUEST_BAR_HERO_IMAGE), [s]),
        g = i.useMemo(() => (0, en.tW)(s, en.fY.QUEST_BAR_HERO_VIDEO), [s]),
        {
            isActive: f,
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
                g = i.useCallback(() => a(!0), []),
                f = i.useCallback(() => {
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
                { isActive: t, shouldRender: n, deactivate: x, hoverHandlers: v, handleMenuOpen: g, handleMenuClose: f }
            );
        })(),
        C = (0, sf.c)({ onMenuOpen: j, onMenuClose: S }),
        p = (0, sx.Pd)(s),
        N = (0, tu.go)(),
        T = (0, tm.E0)(s.config),
        { clickableTile: O } = G.aD.useConfig({ location: tC.rE.QUEST_HOME_DESKTOP }),
        A = (0, E.bG)([tz.A], () => tz.A.theme),
        I = A === eh.NJ8.DARK || A === eh.NJ8.DARKER,
        b = A === eh.NJ8.LIGHT,
        R = i.useContext(eq.X),
        { visibilityElementRef: M, almostVisibleInViewport: Q } = (0, s$.I)(
            R?.current?.getScrollerNode() ?? null,
            d ?? !1,
        ),
        {
            handleHoverStart: H,
            handleHoverEnd: L,
            isEventWithinParent: y,
        } = (0, sz.B)({ quest: s, questContent: n, contentPosition: u, rowIndex: c, sourceQuestContent: h }),
        U = (0, tL.Lk)({
            isShareable: T,
            questId: s.id,
            trackingCtx: i.useMemo(
                () => ({
                    content: n,
                    ctaContent: ei.Cy.CONTEXT_MENU_COPY_LINK,
                    impressionId: N,
                    sourceQuestContent: h,
                }),
                [n, h, N],
            ),
        }),
        D = (0, z.do)({ quest: s, content: n, ctaContent: ei.Cy.OPEN_GAME_LINK, sourceQuestContent: h }),
        F = (0, sc.A)(m, M),
        q = ek.intl.formatToPlainString(ek.t.EAYZAr, { questName: s.config.messages.questName }),
        P = o()(sY.kL, { [sY.F1]: O, [sY.iR]: l }, a),
        k = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(sg.A, {
                    showPlaceholder: !Q,
                    width: 600,
                    height: 450,
                    className: sY.Tv,
                    children: (0, r.jsx)(eo.N, {
                        imageAsset:
                            null != x
                                ? {
                                      asset: x,
                                      assetId: "QuestTileV2",
                                      alt: ek.intl.string(ek.t.jnijWz),
                                      className: sY.Tv,
                                  }
                                : void 0,
                        videoAsset:
                            null != g
                                ? {
                                      asset: g,
                                      assetId: "QuestTileV2_heroAnimated",
                                      className: o()(sY.Tv, sY.gJ, { [sY.C7]: f }),
                                  }
                                : void 0,
                        imageSize: { width: 600, height: 450 },
                        showVideo: v,
                    }),
                }),
                (0, r.jsx)("div", { className: o()(sY.sL, { [sY.Mq]: p === sx.UA.EXPIRED }) }),
                b
                    ? (0, r.jsx)(ed.N, {
                          theme: eh.NJ8.MIDNIGHT,
                          disableAdaptiveTheme: !0,
                          children: (e) => (0, r.jsx)("div", { className: o()(e, sY.f5) }),
                      })
                    : (0, r.jsx)("div", { className: o()(sY.f5, { [sY.kg]: I }) }),
                (0, r.jsxs)("div", {
                    className: sY.qy,
                    children: [
                        (0, r.jsxs)("div", {
                            className: sY.wx,
                            children: [
                                (0, r.jsx)(sO, { quest: s, isHovering: f }),
                                (0, r.jsxs)("div", {
                                    className: o()(sY.$s, { [sY.rk]: f }),
                                    onClick: (e) => e.stopPropagation(),
                                    children: [
                                        l &&
                                            T &&
                                            (0, r.jsx)(e4.D, {
                                                tag: "div",
                                                className: sY.E9,
                                                onClick: U,
                                                "aria-label": ek.intl.string(ek.t.WqhZss),
                                                children: (0, r.jsx)(sd.q, { size: "sm", color: "currentColor" }),
                                            }),
                                        (0, r.jsx)(sh.C, {
                                            questContent: n,
                                            quest: s,
                                            hideLearnMore: !0,
                                            shouldShowDisclosure: !0,
                                            showShareLink: !0,
                                            sourceQuestContent: h,
                                            onOpen: j,
                                            onClose: S,
                                            children: (e) =>
                                                (0, r.jsx)(e4.D, {
                                                    ...e,
                                                    tag: "div",
                                                    className: sY.E9,
                                                    "aria-label": ek.intl.string(ek.t.DEoVWZ),
                                                    children: (0, r.jsx)(sm.j, { size: "sm", color: "currentColor" }),
                                                }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsx)(sf.q.Provider, {
                            value: C,
                            children: (0, r.jsx)(sK, {
                                quest: s,
                                questContent: n,
                                isInFeaturedSection: l,
                                isHovering: f,
                                sourceQuestContent: h,
                            }),
                        }),
                    ],
                }),
            ],
        });
    return (0, r.jsx)("div", {
        id: (0, sa.sT)(s.id, t),
        className: sY.uW,
        "data-quest-tile-hovered": f ? "" : void 0,
        onMouseEnter: () => {
            _.onMouseEnter(), H();
        },
        onMouseLeave: () => {
            _.onMouseLeave(), L();
        },
        onFocus: (e) => {
            y(e) || (_.onFocus(), H());
        },
        onBlur: (e) => {
            y(e) || (_.onBlur(), L());
        },
        children: O
            ? (0, r.jsx)(sE.s, { tag: "article", ref: F, onClick: D, "aria-label": q, className: P, children: k })
            : (0, r.jsx)("article", { ref: F, "aria-label": q, className: P, children: k }),
    });
}
let sX = i.memo(function (e) {
    let t = (0, E.bG)([ee.A], () => (null != e.questId ? ee.A.getQuest(e.questId) : void 0), [e.questId]),
        s = i.useMemo(() => (null != e.quest ? e.quest : t), [t, e.quest]);
    return null == s
        ? null
        : (0, r.jsx)(eu.R, {
              questOrQuests: s,
              questContent: e.questContent,
              questContentPosition: e.contentPosition,
              questContentRowIndex: e.rowIndex,
              trackGuildAndChannelMetadata: e.questContent === et.uF.QUESTS_EMBED,
              sourceQuestContent: e.sourceQuestContent,
              children: (t) => (0, r.jsx)(sJ, { ...e, quest: s, impressionRef: t }),
          });
});
function sZ(e) {
    let { quest: t } = e,
        { useNewTile: s } = G.aD.useConfig({ location: tC.rE.QUEST_HOME_DESKTOP });
    return (0, r.jsx)("div", {
        className: t8.x3,
        children: (0, r.jsxs)("div", {
            className: t8.B0,
            children: [
                (0, r.jsx)(em.D, {
                    className: t8.R_,
                    variant: "heading-md/semibold",
                    children: ek.intl.string(ek.t["5wnpF3"]),
                }),
                s
                    ? (0, r.jsx)(su, {
                          children: (0, r.jsx)(sX, {
                              className: t8.d,
                              quest: t,
                              questContent: et.uF.QUEST_HOME_DESKTOP,
                              contentPosition: 0,
                              rowIndex: 0,
                              sourceQuestContent: et.uF.INTERNAL_PREVIEW_TOOL,
                          }),
                      })
                    : (0, r.jsx)(sa.Ay, {
                          className: t8.d,
                          quest: t,
                          questContent: et.uF.QUEST_HOME_DESKTOP,
                          contentPosition: 0,
                          rowIndex: 0,
                          sourceQuestContent: et.uF.INTERNAL_PREVIEW_TOOL,
                      }),
            ],
        }),
    });
}
var s0 = s(97808),
    s1 = s(778712),
    s2 = s(87664),
    s7 = s(427262),
    s8 = s(198525),
    s4 = s(715672);
let s3 = function (e) {
    let { quest: t } = e,
        [s, n] = i.useState(!1),
        l = i.useRef(null),
        a = (0, E.bG)([tr.default], () => tr.default.getCurrentUser()),
        u = s7.Ay.useName(a),
        c = (0, s2.A)(a?.id),
        d = i.useCallback(
            (e) =>
                (0, r.jsx)(s8.default, {
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
        className: t8.x3,
        children: (0, r.jsxs)("div", {
            className: t8.B0,
            children: [
                (0, r.jsx)(em.D, {
                    className: s4.R_,
                    variant: "heading-md/semibold",
                    children: ek.intl.string(ek.t.jY7Zxg),
                }),
                (0, r.jsx)("div", { className: s4.$Q, children: ek.intl.string(ek.t.q3hbne) }),
                (0, r.jsx)("div", {
                    className: s4.k0,
                    children: (0, r.jsx)(tq.Y, {
                        targetElementRef: l,
                        renderPopout: d,
                        position: "bottom",
                        shouldShow: s,
                        onRequestClose: () => n(!1),
                        nudgeAlignIntoViewport: !1,
                        useRawTargetDimensions: !0,
                        animation: tq.Y.Animation.NONE,
                        spacing: -3,
                        fixed: !0,
                        scrollBehavior: "close",
                        children: () =>
                            (0, r.jsx)("div", {
                                ref: l,
                                className: o()(s4.Tn, { [s4.wH]: s }),
                                children: (0, r.jsx)(e4.D, {
                                    onClick: () => n(!s),
                                    tabIndex: 0,
                                    children: (0, r.jsxs)("div", {
                                        className: s4.lm,
                                        children: [
                                            (0, r.jsx)(s0.eu, {
                                                size: s1._3.SIZE_32,
                                                src: a?.getAvatarURL(void 0, 32),
                                                status: eh.clD.ONLINE,
                                                "aria-label": a?.username,
                                            }),
                                            (0, r.jsxs)("div", {
                                                className: s4.Fj,
                                                children: [
                                                    (0, r.jsx)(Y.E, {
                                                        variant: "text-md/semibold",
                                                        color: "text-strong",
                                                        children: u,
                                                    }),
                                                    (0, r.jsx)(Y.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-muted",
                                                        children: ek.intl.string(ek.t.b9w3bO),
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
function s6(e) {
    let { questId: t, selectedSections: s } = e,
        n = (0, E.bG)([ee.A], () => ee.A.getQuest(t));
    if (null != (0, E.bG)([ee.A], () => ee.A.getFetchQuestPreviewError(t)) || null == n) return null;
    function l(e) {
        return null == s || 0 === s.length || s.includes(e);
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            l("quest_bar") && (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(se, { quest: n }), (0, r.jsx)(t2, {})] }),
            l("home_card") && (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(sZ, { quest: n }), (0, r.jsx)(t2, {})] }),
            l("share_embed") &&
                (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(si, { questId: n.id }), (0, r.jsx)(t2, {})] }),
            l("channel_call_header") &&
                (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(sn, { quest: n }), (0, r.jsx)(t2, {})] }),
            l("members_list") &&
                (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(s3, { quest: n }), (0, r.jsx)(t2, {})] }),
            l("activity_panel") &&
                (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(t4, { quest: n }), (0, r.jsx)(t2, {})] }),
        ],
    });
}
var s5 = s(711731);
function s9(e) {
    let { children: t, selectedSections: s = [], onSectionSelect: n, controls: l, className: a } = e,
        u = [
            { value: "quest_bar", label: ek.intl.string(ek.t.rjVPdM) },
            { value: "share_embed", label: ek.intl.string(ek.t["D/gSWS"]) },
            { value: "home_card", label: ek.intl.string(ek.t["5wnpF3"]) },
            { value: "channel_call_header", label: ek.intl.string(ek.t.gWinpQ) },
            { value: "members_list", label: ek.intl.string(ek.t.wpYima) },
            { value: "activity_panel", label: ek.intl.string(ek.t.L2mlUb) },
        ],
        c = 0 === s.length || s.length === u.length,
        d = i.useMemo(() => (c ? "all" : 1 === s.length ? s[0] : "all"), [s, c]);
    return (0, r.jsx)(tZ.Ip, {
        className: o()(s5.kL, a),
        orientation: "auto",
        children: (0, r.jsxs)("div", {
            className: s5.qE,
            children: [
                (0, r.jsx)(em.D, {
                    variant: "heading-xl/semibold",
                    color: "text-strong",
                    children: ek.intl.string(ek.t.BDUDau),
                }),
                (0, r.jsx)("div", { className: s5.pf, children: l }),
                (0, r.jsxs)(t0.V, {
                    type: "top",
                    look: "brand",
                    selectedItem: d,
                    onItemSelect: function (e) {
                        n?.(e);
                    },
                    children: [
                        (0, r.jsx)(t0.V.Item, { id: "all", children: ek.intl.string(ek.t.Y9DnPa) }),
                        u.map((e) => (0, r.jsx)(t0.V.Item, { id: e.value, children: e.label }, e.value)),
                    ],
                }),
                (0, r.jsx)("div", { className: s5.tZ, children: (0, r.jsx)("div", { className: s5.Qs, children: t }) }),
            ],
        }),
    });
}
let ne = function (e) {
    let { questId: t, className: s } = e,
        { questId: n, setQuestId: l } = (function (e) {
            let t = (0, u.W6)(),
                { search: s } = (0, u.zy)(),
                n = i.useMemo(() => new URLSearchParams(s).get(z.L1.QUEST_ID) ?? e, [s, e]),
                l = i.useCallback(
                    (e) => {
                        if (e === n) return;
                        let s = new URLSearchParams();
                        s.set(z.L1.TAB, z.NC.PREVIEW_TOOL),
                            s.set(z.L1.QUEST_ID, e),
                            t.push(`${eh.BVt.QUEST_HOME}?${s.toString()}`);
                    },
                    [t, n],
                );
            return { questId: n, setQuestId: l };
        })(t),
        a = (0, E.bG)([ee.A], () => (null != n ? ee.A.getQuest(n) : void 0), [n]),
        o = (0, E.bG)([ee.A], () => (null != n ? ee.A.getQuestLoadedViaPreview(n) : null), [n]);
    i.useEffect(() => {
        null != n &&
            (0, tU.dQ)(n).then(() => {
                (0, tU.Gt)(n);
            });
    }, [n]),
        i.useEffect(() => {
            function e(e) {
                let { quest_id: t } = e;
                t === n && (0, tU.dQ)(n);
            }
            return (
                ty.h.subscribe("QUEST_PREVIEW_UPDATE", e),
                () => {
                    ty.h.unsubscribe("QUEST_PREVIEW_UPDATE", e);
                }
            );
        }, [n]);
    let [c, d] = i.useState([]);
    return (0, r.jsx)(s9, {
        className: s,
        controls: (0, r.jsx)(tX, {
            questId: n,
            setQuestId: l,
            quest: a,
            refreshQuest: function () {
                null != n && (0, tU.dQ)(n);
            },
        }),
        selectedSections: c,
        onSectionSelect: (e) => {
            "all" === e ? d([]) : d([e]);
        },
        children: o?.id != null ? (0, r.jsx)(s6, { questId: o?.id, selectedSections: c }) : null,
    });
};
var nt = s(203879),
    ns = s(167417),
    nn = s(783977),
    nl = s(305866),
    nr = s(915089),
    ni = s(192229);
function na(e) {
    let { children: t, id: s } = e;
    return (0, r.jsx)(Y.E, { className: ni.g, color: "text-subtle", id: s, variant: "text-sm/semibold", children: t });
}
let no = function (e) {
    let { children: t, renderPopout: s } = e,
        n = (0, nr.GV)(),
        l = i.useRef(null);
    return (0, r.jsx)(tq.Y, {
        align: "right",
        position: "bottom",
        renderPopout: (e) => (0, r.jsx)(nl.l, { className: ni.S, "aria-labelledby": n, children: s(e, n) }),
        scrollBehavior: "close",
        targetElementRef: l,
        children: (e) => t(e, l),
    });
};
var nu = s(605123);
let nc = function (e) {
    let { onChange: t, selectedFilters: s } = e,
        n = (0, z.Nb)(),
        l = i.useCallback(
            (e) => (n) => {
                let l = e.filter((e) => n.includes(e.filter));
                t([...s.filter((t) => !e.some((e) => e.filter === t.filter)), ...l]);
            },
            [s, t],
        );
    return (0, r.jsx)(no, {
        renderPopout: (e, a) => {
            let { closePopout: o } = e;
            return (0, r.jsxs)("div", {
                children: [
                    n.map((e, t) => {
                        let n = e.options.map((e) => ({ label: (0, tc.up)(e.filter), value: e.filter })),
                            o = s.filter((t) => e.options.some((e) => e.filter === t.filter)).map((e) => e.filter);
                        return (0, r.jsxs)(
                            i.Fragment,
                            {
                                children: [
                                    t > 0 && (0, r.jsx)("hr", { className: nu.B }),
                                    (0, r.jsx)(na, { id: a, children: e.heading }),
                                    (0, r.jsx)(ns.$, {
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
                    (0, r.jsx)("hr", { className: nu.B }),
                    (0, r.jsx)("div", {
                        className: nu.W,
                        children: (0, r.jsx)(f.$, {
                            fullWidth: !0,
                            onClick: () => {
                                t([]), o();
                            },
                            size: "sm",
                            text: ek.intl.string(ek.t.VkKicb),
                            variant: "secondary",
                        }),
                    }),
                ],
            });
        },
        children: (e, t) =>
            (0, r.jsx)(f.$, {
                ...e,
                buttonRef: t,
                size: "sm",
                text: ek.intl.formatToPlainString(ek.t.CEfkXl, { numSelectedFilters: s.length }),
                icon: nn.R,
                iconPosition: "end",
                variant: "secondary",
            }),
    });
};
var nd = s(144228),
    nm = s(715482);
let nE = function (e) {
    let { onChange: t, optionClassName: s, selectedSortMethod: n } = e,
        l = i.useCallback(
            (e) => {
                t(e);
            },
            [t],
        ),
        a = (0, E.bG)([C.Ay], () => C.Ay.keyboardModeEnabled),
        o = (0, z.XD)(),
        u = i.useMemo(() => o.map((e) => ({ name: e.label, value: e.value, radioBarClassName: s })), [o, s]);
    return (0, r.jsx)(no, {
        renderPopout: (e, t) => {
            let { closePopout: s } = e;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(na, { id: t, children: ek.intl.string(ek.t.tZXJIS) }),
                    (0, r.jsx)(nd.z, {
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
            (0, r.jsx)(f.$, {
                ...e,
                "aria-label": ek.intl.formatToPlainString(ek.t.lPlIMo, { selected: (0, tc.Js)(n) }),
                buttonRef: t,
                size: "sm",
                text: (0, tc.Js)(n),
                icon: nm.g,
                iconPosition: "end",
                variant: "secondary",
            }),
    });
};
var nh = s(691540),
    nx = s(857250),
    ng = s(97483);
function nf() {
    let e = i.useRef(null);
    return {
        showToast: i.useCallback((t) => {
            e.current !== t &&
                ((0, nh.P0)((0, nx.o)(ek.intl.string(ek.t["5ABf1w"]), ng.Ck.FAILURE)),
                eb.default.track(eh.HAw.QUEST_HOME_MOBILE_DEEP_LINK_MISSING_QUEST, { quest_id: t }),
                (e.current = t));
        }, []),
    };
}
function nv(e, t, s, n) {
    return null == e ? 1 : Math.max(1, Math.min(n, Math.floor((e + s) / (t + s))));
}
function n_(e, t, s) {
    let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
        [l, r] = i.useState(null),
        a = i.useCallback(() => {
            r(nv(e.current?.clientWidth, t, s, n));
        }, [r, t, s, n, e]);
    return (0, eL.g)(e, a, [t, s], { fireOnMount: !0 }), l;
}
var nj = s(904080);
let nS = 4 * ta.A.Millis.SECOND;
function nC(e) {
    let { children: t, tileMinWidth: s, gridGap: n } = e,
        l = i.useRef(null),
        a = n_(l, s, n);
    return (0, r.jsx)("div", {
        className: nj.kL,
        ref: l,
        style: { "--custom-min-quest-tile-width": `${s}px`, "--custom-quest-grid-gap": `${n}px` },
        children: null !== a && t(a),
    });
}
let np = i.forwardRef(function (e, t) {
    let {
            quests: s,
            excludedQuests: n,
            isFetching: l,
            hasFetched: a,
            hasFiltersApplied: c = !1,
            onClearFilters: d,
        } = e,
        m = (0, u.zy)(),
        { showToast: E } = nf(),
        h = i.useRef(""),
        [x, g] = i.useState(null),
        [f, v] = i.useState(0),
        { useNewTile: _ } = G.aD.useConfig({ location: tC.rE.QUEST_HOME_DESKTOP }),
        [{ highlightAnimationProgress: j }, S] = (0, e8.z)(() => ({
            highlightAnimationProgress: 1,
            config: { duration: nS },
        })),
        C = i.useCallback(
            (e) => {
                if ((l && 0 === s.length) || !a) return !1;
                let t = (0, sB.vc)(e, s, n);
                return null == t ? (E(e), !1) : (g(t.id), v((e) => e + 1), !0);
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
                    e.cancelled || g(null);
                },
            }));
    }, [x, f, S]),
    l && 0 === s.length)
        ? (0, r.jsx)(J.y, { className: nj.u1 })
        : 0 === s.length
          ? (0, r.jsxs)("div", {
                className: nj.y7,
                children: [
                    (0, r.jsx)(em.D, {
                        variant: "heading-xl/semibold",
                        children: ek.intl.string(c ? ek.t.PBfFnx : ek.t.NqFP6z),
                    }),
                    (0, r.jsx)(Y.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: c ? ek.intl.format(ek.t.LdYS1H, { onClick: d }) : ek.intl.string(ek.t.LhD4yH),
                    }),
                ],
            })
          : (0, r.jsx)(nC, {
                tileMinWidth: 336,
                gridGap: 24,
                children: (e) =>
                    s.map((t, s) => {
                        let n = Math.floor(s / e),
                            l = x === t.id,
                            i = null != x && !l;
                        return (0, r.jsxs)(
                            eZ.animated.div,
                            {
                                className: o()({ [nj.XB]: l, [so.y]: _ }),
                                style: e0(l, i, j),
                                children: [
                                    l && (0, r.jsx)("div", { className: nj.E4 }, f),
                                    _
                                        ? (0, r.jsx)(sX, {
                                              quest: t,
                                              questContent: et.uF.QUEST_HOME_DESKTOP,
                                              contentPosition: s,
                                              rowIndex: n,
                                              className: nj.d,
                                              sourceQuestContent: et.uF.QUEST_HOME_DESKTOP,
                                          })
                                        : (0, r.jsx)(sa.Ay, {
                                              quest: t,
                                              questContent: et.uF.QUEST_HOME_DESKTOP,
                                              contentPosition: s,
                                              rowIndex: n,
                                              className: nj.d,
                                              sourceQuestContent: et.uF.QUEST_HOME_DESKTOP,
                                          }),
                                ],
                            },
                            t.id,
                        );
                    }),
            });
});
var nN = s(458518),
    nT = s(367518);
let nO = [],
    nA = z.L1.SORT,
    nI = z.L1.FILTER,
    nb = i.forwardRef(function (e, t) {
        let s,
            n,
            l,
            a,
            o = i.useRef(null),
            [c, d] =
                ((s = (0, nN.o)()),
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
                    (e = c.get(nA)),
                    ((0, B.uJ)(e) ? null : (Object.values(tC.kL).find((t) => t === e) ?? null)) ?? tC.kL.SUGGESTED
                );
            }, [c]),
            E = i.useMemo(
                () =>
                    (function (e) {
                        if ((0, B.uJ)(e)) return null;
                        let t = e
                            .split(",")
                            .map((e) => (0, tC.WQ)(e))
                            .filter(eR.Vq);
                        return t.length > 0 ? t : null;
                    })(c.get(nI)) ?? nO,
                [c],
            ),
            h = i.useCallback(
                (e) => {
                    d({ [nA]: e });
                },
                [d],
            ),
            x = i.useCallback(
                (e) => {
                    d({
                        [nI]:
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
                quests: g,
                excludedQuests: f,
                isFetchingCurrentQuests: v,
                hasFetched: _,
            } = (0, z.Qh)(
                z.NC.ALL,
                i.useMemo(() => ({ sortMethod: m, filters: E, removeExpiredQuests: !0 }), [m, E]),
            ),
            j = i.useCallback(() => {
                x(nO);
            }, [x]),
            S = i.useRef(null),
            C = i.useRef(null),
            p = (0, u.zy)(),
            N = (0, u.W6)();
        return (
            i.useEffect(() => {
                "" !== p.hash &&
                    null != S.current &&
                    null != C.current &&
                    (m !== S.current || E !== C.current) &&
                    N.replace({ ...p, hash: void 0 });
            }, [m, E, p, N]),
            i.useEffect(() => {
                S.current = m;
            }, [m]),
            i.useEffect(() => {
                C.current = E;
            }, [E]),
            (0, z.$P)({ selectedSortMethod: m, selectedFilters: E, numQuestsVisible: g.length }),
            i.useImperativeHandle(
                t,
                () => ({
                    scrollToQuest: (e) => {
                        j(),
                            h(tC.kL.SUGGESTED),
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
                        className: nT.Mj,
                        children: [
                            (0, r.jsx)(em.D, { variant: "heading-lg/medium", children: ek.intl.string(ek.t.giYD00) }),
                            (0, r.jsxs)("div", {
                                className: nT.Nf,
                                children: [
                                    (0, r.jsx)(nE, { onChange: h, optionClassName: nT.Uq, selectedSortMethod: m }),
                                    (0, r.jsx)(nc, { onChange: x, selectedFilters: E }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsx)(np, {
                        ref: o,
                        quests: g,
                        excludedQuests: f,
                        isFetching: v,
                        hasFetched: _,
                        hasFiltersApplied: E.length > 0,
                        onClearFilters: j,
                    }),
                ],
            })
        );
    });
var nR = s(575593),
    nM = s(462887),
    nQ = s(765671),
    nH = s(736653),
    nL = s(162232),
    ny = s(734736),
    nU = s(303136),
    nD = s(696698),
    nF = s(181713);
let nq = function (e) {
    let { className: t, isAnimated: s = !1, questName: n } = e,
        l = s ? nF.A : nF.A + "?format=webp";
    return (0, r.jsx)("div", {
        className: o()(nD.k, t),
        children: s
            ? (0, r.jsx)(nU.A, {
                  preload: "auto",
                  className: nD.L,
                  children: (0, r.jsx)("source", { src: l, type: "video/webm" }),
              })
            : (0, r.jsx)("img", { className: nD.L, src: l, alt: n }),
    });
};
var nP = s(57718),
    nk = s(417817);
let nw = (0, i.memo)(function (e) {
    let { quest: t } = e,
        [s, n] = (0, i.useState)(!1),
        [l, a] = (0, i.useState)(24),
        [u, c] = (0, i.useState)(!1),
        d = (0, i.useRef)(null),
        m = (0, i.useRef)(null),
        h = (0, i.useRef)(null),
        x = (0, E.bG)([tr.default], () => tr.default.getCurrentUser()),
        { ref: g, height: f = 0 } = (0, nQ.Ay)(),
        v = (0, nH.Ay)(),
        _ = (0, z.S5)(t.userStatus?.claimedAt, { month: "numeric", day: "numeric" }),
        j = t.userStatus?.claimedTier ?? 0,
        S = t.config.rewards[j],
        C = S?.type === e1.l.FRACTIONAL_PREMIUM,
        p = S?.type === e1.l.COLLECTIBLE,
        N = S?.type === e1.l.VIRTUAL_CURRENCY,
        T = S?.collectibleProduct?.items?.[0],
        O = T?.type === nR.R.AVATAR_DECORATION ? T : null,
        A = i.useMemo(
            () =>
                null == S
                    ? null
                    : !0 === N && t.userStatus?.orbQuantityClaimed != null
                      ? ek.intl.format(ek.t["nLXlh+"], { orbAmount: t.userStatus.orbQuantityClaimed })
                      : S.name,
            [S, N, t],
        );
    (0, nQ.i4)(d, (e) => {
        let { height: t } = e;
        if (!p || null == t || null == m.current || null == d.current || null == h.current) return;
        let s = d.current.getBoundingClientRect(),
            n = m.current.getBoundingClientRect(),
            l = h.current.getBoundingClientRect();
        a((n.top - s.top - l.height) / 2);
    });
    let I = (0, nM.M)(v),
        R = i.useMemo(() => null != t.config.cosponsorMetadata, [t]),
        M = i.useMemo(() => (0, en.tW)(t, en.fY.REWARD), [t]),
        Q = s ? f + 8 : 0,
        { content_position: H, row_index: L, ...y } = (0, ei.fF)(et.uF.TROPHY_CASE_CARD);
    function U() {
        n(!0), eb.default.track(eh.HAw.QUEST_HOVER, { quest_id: t.id, ...y });
    }
    function D() {
        n(!1);
    }
    function F(e) {
        c(!0), eb.default.track(eh.HAw.QUEST_ASSET_LOADING_FAILURE, { source: e, asset_id: e, quest_id: t.id });
    }
    return null == S || u
        ? null
        : (0, r.jsx)(e3.vN, {
              children: (0, r.jsxs)("div", {
                  ref: d,
                  tabIndex: 0,
                  onFocus: U,
                  onBlur: D,
                  onMouseEnter: U,
                  onMouseLeave: D,
                  className: o()(nk.kL, { [nk.yo]: s }),
                  children: [
                      null != x &&
                          p &&
                          null != O &&
                          (0, r.jsx)("div", {
                              ref: h,
                              className: nk.FX,
                              style: { top: l },
                              children: (0, r.jsx)(nL.A, {
                                  avatarDecorationOverride: O,
                                  user: x,
                                  guildId: null,
                                  animateOnHover: !s,
                              }),
                          }),
                      C
                          ? (0, r.jsx)(ny.A, { className: nk.Sl })
                          : N
                            ? (0, r.jsx)(nq, {
                                  className: nk.Sl,
                                  isAnimated: s,
                                  questName: t.config.messages.questName,
                              })
                            : M.isAnimated
                              ? (0, r.jsx)(b.A, {
                                    className: nk.JU,
                                    autoPlay: !1,
                                    children: (0, r.jsx)("source", {
                                        src: M.url,
                                        type: M.mimetype ?? void 0,
                                        onError: () => F(M.url),
                                    }),
                                })
                              : (0, r.jsx)("img", {
                                    className: nk.Sl,
                                    src: M.url,
                                    alt: t.config.messages.questName,
                                    onError: () => F(M.url),
                                }),
                      (0, r.jsx)("div", { className: o()(nk.Lw, { [nk.en]: I, [nk.So]: !I }) }),
                      (0, r.jsx)("div", {
                          ref: m,
                          className: nk.r$,
                          style: { transform: `translateY(-${Q}px)` },
                          children: (0, r.jsx)(nP.Ay, {
                              logotypeClassName: o()(nk.wm, { [nk.A0]: R }),
                              quest: t,
                              withGameTile: !1,
                          }),
                      }),
                      (0, r.jsxs)("div", {
                          ref: g,
                          className: nk.zH,
                          children: [
                              (0, r.jsx)(em.D, {
                                  className: nk.DD,
                                  variant: "heading-md/semibold",
                                  color: "text-overlay-light",
                                  children: ek.intl.format(ek.t.EAYZAr, { questName: t.config.messages.questName }),
                              }),
                              (0, r.jsx)(Y.E, {
                                  variant: "text-sm/medium",
                                  color: I ? "text-muted" : "text-overlay-light",
                                  style: { opacity: I ? 1 : 0.75 },
                                  children: ek.intl.format(ek.t["kXVcV+"], { reward: A, claimedDate: _ }),
                              }),
                          ],
                      }),
                  ],
              }),
          });
});
var nB = s(396478);
function nV(e) {
    let { onClick: t } = e,
        n = (0, nH.Ay)();
    return (0, r.jsxs)(nB.pp, {
        theme: n,
        children: [
            (0, r.jsx)(nB.G8, { lightSrc: s(826223), darkSrc: s(317017), width: 415, height: 200 }),
            (0, r.jsx)(nB.SG, { note: ek.intl.format(ek.t.Pv8u2u, { onClick: t }) }),
        ],
    });
}
var nG = s(839944);
function nW(e) {
    let { onSelectTab: t, className: s } = e,
        { claimedQuests: n, isFetchingClaimedQuests: l } = (0, z.Iq)();
    return l && 0 === n.length
        ? (0, r.jsx)(J.y, { className: nG.u })
        : 0 === n.length
          ? (0, r.jsx)(nV, { onClick: () => t(z.NC.ALL) })
          : (0, r.jsx)("div", {
                className: o()(nG.U, s),
                children: [...n]
                    .sort((e, t) => (t.userStatus?.claimedAt ?? "").localeCompare(e.userStatus?.claimedAt ?? ""))
                    .map((e) => (0, r.jsx)(nw, { quest: e }, e.id)),
            });
}
let nK = i.createContext({
    targetQuestId: null,
    targetSectionIdentifier: null,
    highlightCount: null,
    highlightAnimationProgress: null,
});
var nz = s(912532);
function n$(e) {
    let { children: t, sectionIdentifier: s, questId: n } = e,
        {
            targetQuestId: l,
            targetSectionIdentifier: a,
            highlightCount: u,
            highlightAnimationProgress: c,
        } = i.useContext(nK),
        d = l === n && a === s,
        m = null != l && (l !== n || a !== s),
        { useNewTile: E } = G.aD.useConfig({ location: tC.rE.QUEST_HOME_DESKTOP }),
        h = i.useMemo(() => ({ ...e0(d, m, c), borderRadius: E ? "var(--radius-lg)" : "10px" }), [d, m, c, E]);
    return (0, r.jsxs)(eZ.animated.div, {
        [eK]: "",
        className: o()({ [nz.X]: d, [so.y]: E }),
        style: h,
        children: [d && (0, r.jsx)("div", { className: nz.E }, u), t],
    });
}
var nY = s(359246);
function nJ(e) {
    let { containerWidth: t, questIds: s, sectionIdentifier: n, setMaxRowIndex: l } = e,
        { useNewTile: a } = G.aD.useConfig({ location: tC.rE.QUEST_HOME_DESKTOP }),
        o = i.useMemo(() => (null == t ? null : nv(t, 345, 20, 2)), [t]);
    return (
        i.useEffect(() => {
            null !== o && l(Math.ceil(s.length / o) - 1);
        }, [s.length, o, l]),
        (0, r.jsx)("div", {
            className: nY.k,
            style: {
                "--custom-min-quest-tile-width": "345px",
                "--custom-quest-grid-gap": "20px",
                "--custom-tiles-per-row": 2,
            },
            children:
                null != o &&
                s.map((e, t) =>
                    (0, r.jsx)(
                        n$,
                        {
                            questId: e,
                            sectionIdentifier: n,
                            children: a
                                ? (0, r.jsx)(
                                      sX,
                                      {
                                          isInFeaturedSection: !0,
                                          questId: e,
                                          questContent: et.uF.QUEST_HOME_FEATURED_SECTION,
                                          contentPosition: t,
                                          rowIndex: Math.floor(t / o),
                                          sourceQuestContent: et.uF.QUEST_HOME_FEATURED_SECTION,
                                          sectionIdentifier: n,
                                      },
                                      e,
                                  )
                                : (0, r.jsx)(
                                      sa.Ay,
                                      {
                                          questId: e,
                                          isInFeaturedSection: !0,
                                          questContent: et.uF.QUEST_HOME_FEATURED_SECTION,
                                          contentPosition: t,
                                          rowIndex: Math.floor(t / o),
                                          sourceQuestContent: et.uF.QUEST_HOME_FEATURED_SECTION,
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
var nX = s(948884);
function nZ(e) {
    let { className: t, ...s } = e;
    return (0, r.jsxs)("div", {
        className: o()(nX.kL, t),
        ...s,
        children: [
            (0, r.jsx)("div", { className: o()(tp.m, nX.Gf), "aria-hidden": !0 }),
            (0, r.jsx)("div", {
                className: nX.Jm,
                "aria-hidden": !0,
                children: Array.from({ length: 6 }).map((e, t) =>
                    (0, r.jsx)("div", { className: o()(tp.m, nX.Vr) }, t),
                ),
            }),
        ],
    });
}
var n0 = s(412372);
function n1(e) {
    let { questContent: t, questIds: s, rowIndex: n, sectionIdentifier: l } = e,
        { targetSectionIdentifier: a } = i.useContext(nK),
        { useNewTile: o } = G.aD.useConfig({ location: tC.rE.QUEST_HOME_DESKTOP }),
        { variant: u } = G.Mk.useConfig({ location: tC.rE.QUEST_HOME_DESKTOP }),
        c = (0, eI.C)(),
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
                (0, el.kO)({
                    scrollingType: d ? ei.pk.AUTO : n,
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
    return (0, r.jsx)(eX, {
        maskWidth: eV(c),
        overflowAmount: 25,
        maskMarginMultiplier: E ? 2 : 0.75,
        onScrollEnd: m,
        children: (0, r.jsxs)("div", {
            style: {
                "--custom-min-quest-tile-width": `${eG(c, E)}px`,
                "--custom-extra-spacing-placeholder-size": "5px",
                "--custom-quest-tile-border-radius": `${o ? "var(--radius-xl)" : "10px"}`,
            },
            className: n0.FO,
            children: [
                s.map((e, s) =>
                    (0, r.jsx)(
                        n$,
                        {
                            questId: e,
                            sectionIdentifier: l,
                            children: o
                                ? (0, r.jsx)(sX, {
                                      questId: e,
                                      questContent: t,
                                      contentPosition: s,
                                      rowIndex: n,
                                      className: n0.d,
                                      sourceQuestContent: t,
                                      sectionIdentifier: l,
                                  })
                                : (0, r.jsx)(sa.Ay, {
                                      questId: e,
                                      isInFeaturedSection: l === ew.FEATURED,
                                      questContent: t,
                                      contentPosition: s,
                                      rowIndex: n,
                                      className: n0.d,
                                      sourceQuestContent: t,
                                      sectionIdentifier: l,
                                  }),
                        },
                        `animated-wrapper-${e}-${l}`,
                    ),
                ),
                (0, r.jsx)("div", { className: n0.fu }),
            ],
        }),
    });
}
var n2 = s(958538);
let n7 = ta.A.Millis.WEEK;
function n8() {
    let e = ee.A.quests;
    if (0 === ee.A.lastFetchedCurrentQuests || 0 === e.size) return !1;
    let t = null;
    for (let s of n.keys()) {
        let l = e.get(s);
        (null == l || (0, sB.Ic)(l)) && (null == t && (t = new Map(n)), t.delete(s));
    }
    return null != t && ((n = t), !0);
}
class n4 extends E.Ay.PersistedStore {
    static displayName = "DiscoveredQuestStore";
    static persistKey = "DiscoveredQuestStore";
    initialize(e) {
        this.waitFor(ee.A), (n = new Map());
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
        return this.syncWith([ee.A], n8), t;
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
let n3 = new n4(ty.h, {
        QUESTS_MARK_DISCOVERED: function (e) {
            if (null == ee.A.getQuest(e.questId)) return !1;
            let t = new Map(n);
            t.set(e.questId, new Date().toISOString()), (n = t);
        },
    }),
    n6 = 2 * ta.A.Millis.DAY,
    n5 = new Map(eB.map((e) => [e.identifier, e])),
    n9 = {
        [ew.DISCOVERED]: function (e, t) {
            let { discoveredAtByQuestId: s } = t;
            return e.slice().sort((e, t) => {
                var n, l;
                return (n = s.get(e)), (l = s.get(t)), null == n || null == l ? 0 : l.localeCompare(n);
            });
        },
    };
function le(e, t) {
    let s = n5.get(e)?.maxItems,
        n = t.get(e)?.length ?? 0;
    return null == s || n < s;
}
function lt(e, t) {
    if (e === t) return !0;
    let s = new Set(e),
        n = new Set(t);
    return s.size === n.size && [...s].every((e) => n.has(e));
}
let ls = function () {
    let e = (0, s7.Gn)(),
        t = (0, z.Cv)(),
        s = (0, E.bG)([ee.A], () => ee.A.lastFetchedCurrentQuests > 0),
        { quests: n, isFetchingCurrentQuests: l } = (0, z.Qh)(z.NC.ALL, {
            sortMethod: tC.kL.SUGGESTED,
            filters: [],
            removeExpiredQuests: !e,
        }),
        r = (0, n2.A)(
            () =>
                n.map((e) => {
                    let { id: t } = e;
                    return t;
                }),
            n.map((e) => {
                let { id: t } = e;
                return t;
            }),
            lt,
        ),
        a = (0, tL.T2)(),
        o = (0, E.bG)([n3], () => n3.getDiscoveredAtByQuestId(), []),
        u = i.useMemo(() => (l || !s) && 0 === r.length, [l, s, r.length]),
        c = i.useMemo(
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
                              } = e,
                              i = new Map(),
                              a = new Set();
                          function o(e) {
                              if (a.has(e)) return;
                              let t = ee.A.getQuestConfig(e);
                              if (null == t) return;
                              let o = (function (e) {
                                  let {
                                          quest: t,
                                          hero: s,
                                          discoveredAtByQuestId: n,
                                          questIdsBySectionIdentifier: l,
                                          isStaff: r,
                                          isPreviewerOnAnyQuest: i,
                                      } = e,
                                      { userStatus: a, preview: o } = ee.A.getQuest(t.id) ?? {},
                                      u = [],
                                      c =
                                          null != a &&
                                          null != a.enrolledAt &&
                                          null != a.completedAt &&
                                          null == a.claimedAt;
                                  return (0, sB.kd)(t) && !c
                                      ? r
                                          ? [ew.EXPIRED]
                                          : null
                                      : (n.has(t.id) && u.push(ew.DISCOVERED),
                                          i && !0 === o && u.push(ew.PREVIEW),
                                          null != a && null != a.enrolledAt && null == a.claimedAt)
                                        ? [...u, ew.IN_PROGRESS]
                                        : null != s && (0, tm.I0)(s, t.id) && le(ew.FEATURED, l)
                                          ? [...u, ew.FEATURED]
                                          : new Date(t.expiresAt).valueOf() <= Date.now() + n6
                                            ? [...u, ew.ENDING_SOON]
                                            : le(ew.FEATURED, l)
                                              ? [...u, ew.FEATURED]
                                              : (0, td.ks)(t)
                                                ? [...u, ew.ORB]
                                                : [...u, ew.SPECIAL_QUESTS];
                              })({
                                  quest: t,
                                  hero: s,
                                  discoveredAtByQuestId: n,
                                  questIdsBySectionIdentifier: i,
                                  isStaff: l,
                                  isPreviewerOnAnyQuest: r,
                              });
                              null != o &&
                                  (o.forEach((t) => {
                                      i.set(t, [...(i.get(t) ?? []), e]);
                                  }),
                                  a.add(e));
                          }
                          return (
                              s?.questIds?.forEach((e) => o(e)),
                              t.forEach((e) => o(e)),
                              eB
                                  .map((e) => {
                                      let t = n9?.[e.identifier];
                                      if (null != e.shouldShowFn && !e.shouldShowFn(l, r))
                                          return { ...e, questIds: [] };
                                      let s =
                                          null != t
                                              ? t(i.get(e.identifier) ?? [], { discoveredAtByQuestId: n })
                                              : (i.get(e.identifier) ?? []);
                                      return { ...e, questIds: s };
                                  })
                                  .filter((e) => {
                                      let { questIds: t } = e;
                                      return t.length > 0;
                                  })
                          );
                      })({ allQuestIds: r, hero: a, discoveredAtByQuestId: o, isStaff: e, isPreviewerOnAnyQuest: t }),
            [r, a, o, u, e, t],
        ),
        d = i.useCallback((e) => c.find((t) => t.questIds.includes(e))?.identifier ?? null, [c]);
    return { sections: c, isFetchingCurrentQuests: u, getSectionIdentifierForTargetedQuest: d };
};
var ln = s(673672);
let ll = {
        [ew.FEATURED]: et.uF.QUEST_HOME_FEATURED_SECTION,
        [ew.IN_PROGRESS]: et.uF.QUEST_HOME_IN_PROGRESS_SECTION,
        [ew.ENDING_SOON]: et.uF.QUEST_HOME_ENDING_SOON_SECTION,
        [ew.ORB]: et.uF.QUEST_HOME_ORB_SECTION,
        [ew.DISCOVERED]: et.uF.QUEST_HOME_DISCOVERED_SECTION,
        [ew.EXPIRED]: et.uF.QUEST_HOME_EXPIRED_SECTION,
        [ew.PREVIEW]: et.uF.QUEST_HOME_PREVIEW_SECTION,
        [ew.SPECIAL_QUESTS]: et.uF.QUEST_HOME_SPECIAL_QUESTS_SECTION,
    },
    lr = 4 * ta.A.Millis.SECOND,
    li = i.forwardRef(function (e, t) {
        let { deepLinkedQuestId: s, isLoadingQuestHomeHero: n, className: l, withQuestHomeHero: a = !0 } = e,
            { useNewTile: u, useLargeFeaturedTiles: c } = G.aD.useConfig({ location: tC.rE.QUEST_HOME_DESKTOP }),
            { sections: d, isFetchingCurrentQuests: m, getSectionIdentifierForTargetedQuest: E } = ls(),
            h = i.useRef(null),
            { showToast: x } = nf(),
            [g, f] = i.useState(null),
            [v, _] = i.useState(null),
            [j, S] = i.useState(0),
            [C, p] = i.useState(null),
            [N, T] = i.useState(0),
            O = i.useRef(null),
            A = i.useCallback(
                (e) => {
                    p(e.contentRect.width);
                },
                [p],
            );
        (0, eL.g)(h, A, [A], { fireOnMount: !0 });
        let [{ highlightAnimationProgress: I }, b] = (0, e8.z)(() => ({
                highlightAnimationProgress: 1,
                config: { duration: lr },
            })),
            R = i.useCallback(
                (e, t) => {
                    if (null == e || null == C || m || n) return !1;
                    t && (0, tU.sB)(e);
                    let s = E(e),
                        l = !0 === t && s !== ew.FEATURED ? ew.DISCOVERED : s;
                    if (null == s) return x(e), !1;
                    let r = document.getElementById((0, sa.sT)(e, l ?? void 0));
                    return (
                        null != r &&
                        (f(e),
                        _(l),
                        S((e) => e + 1),
                        r.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" }),
                        b({
                            from: { highlightAnimationProgress: 0 },
                            to: { highlightAnimationProgress: 1 },
                            reset: !0,
                            onRest: (e) => {
                                e.cancelled || (f(null), _(null));
                            },
                        }),
                        !0)
                    );
                },
                [f, S, b, m, n, x, C, E],
            );
        i.useImperativeHandle(t, () => ({ scrollToQuest: R }), [R]),
            i.useLayoutEffect(() => {
                if (null == s) {
                    O.current = null;
                    return;
                }
                O.current !== s && R(s, !0) && (O.current = s);
            }, [s, R]);
        let M = i.useMemo(
                () => ({
                    targetQuestId: g,
                    targetSectionIdentifier: v,
                    highlightCount: j,
                    highlightAnimationProgress: I,
                }),
                [g, v, j, I],
            ),
            Q = i.useMemo(
                () =>
                    d.findIndex((e) => {
                        let { identifier: t } = e;
                        return t === ew.FEATURED;
                    }),
                [d],
            );
        return (0, r.jsx)(nK.Provider, {
            value: M,
            children: (0, r.jsx)("div", {
                className: o()(ln.kL, l, { [ln.Sy]: !a }),
                ref: h,
                children: m
                    ? (0, r.jsx)(nZ, { role: "status", "aria-label": ek.intl.string(ek.t.ZTNur7) })
                    : d.length > 0
                      ? d.map((e, t) => {
                            let { identifier: s, questIds: n, title: l } = e;
                            return (0, r.jsxs)(
                                "div",
                                {
                                    className: ln.p9,
                                    children: [
                                        (0, r.jsx)(em.D, {
                                            variant: "heading-lg/semibold",
                                            className: ln.Gf,
                                            children: ek.intl.string(l),
                                        }),
                                        s === ew.FEATURED && u && c
                                            ? (0, r.jsx)(nJ, {
                                                  questIds: n,
                                                  setMaxRowIndex: T,
                                                  containerWidth: C,
                                                  sectionIdentifier: s,
                                              })
                                            : (0, r.jsx)(n1, {
                                                  questIds: n,
                                                  rowIndex: t < Q ? t : t + N,
                                                  sectionIdentifier: s,
                                                  questContent: ll[s],
                                              }),
                                    ],
                                },
                                s,
                            );
                        })
                      : (0, r.jsxs)("div", {
                            className: ln.y7,
                            children: [
                                (0, r.jsx)(em.D, {
                                    variant: "heading-xl/semibold",
                                    children: ek.intl.string(ek.t.NqFP6z),
                                }),
                                (0, r.jsx)(Y.E, {
                                    variant: "text-md/normal",
                                    color: "text-subtle",
                                    children: ek.intl.string(ek.t.LhD4yH),
                                }),
                            ],
                        }),
            }),
        });
    });
var la = s(353640),
    lo = s(121894),
    lu = s(851936);
let lc = (0, la.v)((e, t) => ({
    startTime: performance.now(),
    elapsed: 0,
    lastOutputLogTime: -5e3,
    logger: null,
    registerAssetLoad: () => {
        let s = t().logger ?? (0, lu.L)({ location: tC.rE.QUEST_HOME_DESKTOP });
        if (s.info === tg.tE || t().elapsed >= 6e4) return;
        let n = performance.now() - t().startTime;
        n > 6e4 && (n = 6e4);
        let l = { elapsed: n };
        n - t().lastOutputLogTime > 1e3 &&
            (s.info(`QuestHome asset loading duration so far: ${n}ms`), (l.lastOutputLogTime = n)),
            null == t().logger && (l.logger = s),
            (0, lo.r)(() => e(l));
    },
}));
var ld = s(516226),
    lm = s(14311),
    lE = s(604880),
    lh = s(318808);
function lx(e) {
    let { adCreativeIds: t } = e,
        s = i.useCallback(() => (0, sH.zg)(t), [t]);
    return (0, r.jsxs)("div", {
        className: lm.MY,
        children: [
            (0, r.jsx)("img", { className: lm.Bg, src: lh.Ay, alt: "" }),
            (0, r.jsx)("div", { className: lm.r$, children: (0, r.jsx)("img", { src: lE, alt: "" }) }),
            (0, r.jsxs)("div", {
                className: lm.Nr,
                children: [
                    (0, r.jsx)(em.D, {
                        variant: "heading-lg/semibold",
                        color: "text-default",
                        className: lm.ky,
                        children: ek.intl.string(ek.t.GXmn57),
                    }),
                    (0, r.jsx)(Y.E, {
                        variant: "text-md/normal",
                        className: lm.G3,
                        children: ek.intl.string(ek.t.bWuKqh),
                    }),
                    (0, r.jsx)(f.$, {
                        variant: "primary",
                        text: ek.intl.string(ek.t.UQvCf7),
                        fullWidth: !0,
                        onClick: s,
                    }),
                ],
            }),
        ],
    });
}
function lg(e) {
    let { alt: t, ariaLabel: s, ariaHidden: n, role: l, width: i = 288, height: a = 192 } = e;
    return (0, r.jsx)("img", {
        style: { width: i, height: a },
        src: "https://cdn.discordapp.com/assets/content/bcf3b3d09bc5184860051e378d0e0d815edeaffb108593db1d2bb64ae405927f.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": n,
        role: l ?? "img",
    });
}
var lf = s(843121);
let lv = function (e) {
    let { matchingQuestIds: t } = e,
        s = (0, eI.C)(),
        { useNewTile: n } = G.aD.useConfig({ location: tC.rE.QUEST_HOME_DESKTOP }),
        { variant: l } = G.Mk.useConfig({ location: tC.rE.QUEST_HOME_DESKTOP }),
        a = i.useRef(null),
        o = l === G.d.LARGE_MASK_MARGIN,
        u = n_(a, eG(s, o), 20, 3);
    return (0, r.jsxs)(_.B, {
        gap: 16,
        direction: "vertical",
        align: "start",
        className: lf.kL,
        ref: a,
        children: [
            (0, r.jsxs)(em.D, {
                variant: "heading-lg/medium",
                children: [ek.intl.string(ek.t.giYD00), " (", t.length, ")"],
            }),
            0 === t.length
                ? (0, r.jsxs)(_.B, {
                      gap: 16,
                      direction: "vertical",
                      align: "center",
                      className: lf.y7,
                      children: [
                          (0, r.jsx)(lg, { alt: ek.intl.string(ek.t["Xe+fJM"]) }),
                          (0, r.jsxs)(_.B, {
                              direction: "vertical",
                              align: "center",
                              children: [
                                  (0, r.jsx)(em.D, {
                                      variant: "heading-lg/medium",
                                      children: ek.intl.string(ek.t["Xe+fJM"]),
                                  }),
                                  (0, r.jsx)(em.D, {
                                      variant: "heading-sm/medium",
                                      children: ek.intl.string(ek.t["Tc/Ndl"]),
                                  }),
                              ],
                          }),
                      ],
                  })
                : (0, r.jsx)("div", {
                      className: lf.Vg,
                      style: {
                          "--custom-quest-search-tile-min-width": `${eG(s, o)}px`,
                          "--custom-quest-grid-gap": "20px",
                      },
                      children:
                          null !== u &&
                          t.map((e, t) =>
                              n
                                  ? (0, r.jsx)(
                                        su,
                                        {
                                            children: (0, r.jsx)(sX, {
                                                eagerLoadAssets: !0,
                                                questId: e,
                                                questContent: et.uF.QUEST_HOME_SEARCH_RESULT,
                                                contentPosition: t,
                                                rowIndex: Math.floor(t / u),
                                                className: lf.d,
                                                sourceQuestContent: et.uF.QUEST_HOME_SEARCH_RESULT,
                                            }),
                                        },
                                        e,
                                    )
                                  : (0, r.jsx)(
                                        sa.Ay,
                                        {
                                            eagerLoadAssets: !0,
                                            questId: e,
                                            questContent: et.uF.QUEST_HOME_SEARCH_RESULT,
                                            contentPosition: t,
                                            rowIndex: Math.floor(t / u),
                                            className: lf.d,
                                            sourceQuestContent: et.uF.QUEST_HOME_SEARCH_RESULT,
                                        },
                                        e,
                                    ),
                          ),
                  }),
        ],
    });
};
var l_ = s(649852),
    lj = s.n(l_),
    lS = s(379078),
    lC = s(704554),
    lp = s(823784);
let lN = {
        searchType: lS.n.FUZZY,
        searchStringGenerator: function (e) {
            return [
                e.messages.questName.toLowerCase(),
                e.messages.gameTitle.toLowerCase(),
                e.messages.gamePublisher.toLowerCase(),
            ].filter(eR.Vq);
        },
        sortType: lS.r.JARO_WINKLER,
        throttleMs: 200,
    },
    lT = function () {
        let [e, t] = i.useState(""),
            [s, n] = i.useState(null),
            l = (0, E.yK)([ee.A], () =>
                (0, z.mn)(Array.from(ee.A.quests.values()), { sortMethod: tC.kL.SUGGESTED }).map((e) => e.config),
            ),
            r = e.trim().toLowerCase(),
            a = "" !== r,
            o = i.useMemo(() => lj()(el.gr, 1e3), []),
            u = i.useCallback(() => {
                o.cancel();
                let e = (0, lp.tv)();
                null != e &&
                    (0, el.XH)({ searchSessionId: e.uuid, searchSessionDurationMs: Date.now() - e.createdAtTimestamp }),
                    (0, lp.l6)();
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
                                  .filter(eR.Vq)
                            : null,
                    ),
                    a)
                ) {
                    let { searchSession: t, isNew: s } = (0, lp.$N)();
                    s && (0, el.OQ)({ searchSessionId: t.uuid }),
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
        return (0, lC.RT)(r, l, d, lN), { matchingQuestIds: s, query: e, setQuery: t, onSearchClose: c };
    };
var lO = s(631001),
    lA = s(758836),
    lI = s(613057),
    lb = s(553576);
let lR = i.createContext({});
function lM(e) {
    let { banner: t, children: s, header: n, withFullBleedBanner: l = !1 } = e,
        { onScroll: a, scrollerRef: o } = i.useContext(lR);
    return (0, r.jsxs)(eq.X.Provider, {
        value: o,
        children: [
            n,
            (0, r.jsxs)(D.A, {
                onScroll: a,
                ref: o,
                children: [
                    l && t,
                    (0, r.jsxs)(y.A, { className: lb.Jo, innerClassName: lb.FG, children: [!l && t, s] }),
                ],
            }),
        ],
    });
}
function lQ(e) {
    let { selectedTab: t, onSelectTab: s, tabs: n, endContent: l } = e;
    return (0, r.jsx)(U.S, { selectedTabId: t, handleTransition: s, tabs: n, endContent: l, icon: x.r });
}
function lH(e) {
    let { onLoadComplete: t, className: s, isVirtualCurrencyEnabled: n } = e,
        l = (0, E.bG)([C.Ay], () => C.Ay.useReducedMotion),
        a = (0, E.bG)([P.A], () => P.A.isFocused()),
        { ref: o, inViewport: u } = (0, nt.p)(),
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
        return (0, r.jsx)($._M, {
            id: "QuestHomeHeroBackground_bannerVideo",
            children: (n) =>
                (0, r.jsx)(b.A, {
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
    return (0, r.jsx)($._M, {
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
function lL(e) {
    let { onAssetLoad: t, isVirtualCurrencyEnabled: s } = e;
    return (0, r.jsxs)("div", {
        className: o()(lb.Tv, { [lb.lJ]: s }),
        children: [
            (0, r.jsx)(tI, {}),
            (0, r.jsx)("div", { className: o()(lb.nz, { [lb.ZZ]: s }) }),
            (0, r.jsx)(lH, {
                onLoadComplete: t,
                className: o()(lb.Fe, { [lb.H4]: s, [lb.Q8]: !s }),
                isVirtualCurrencyEnabled: s,
            }),
        ],
    });
}
function ly(e) {
    let { className: t, onAssetLoad: s } = e,
        { enabled: n } = K.useConfig({ location: tC.rE.QUEST_HOME_DESKTOP }),
        l = !n,
        a = i.useCallback(() => {
            l ? window.open(eh.X7G.PAID_TERMS_ORBS) : window.open(w.A.getArticleURL(eh.MVz.QUESTS_LEARN_MORE));
        }, [l]);
    return (0, r.jsx)(ef, {
        className: t,
        adContentId: l ? tC.yr : tC.uz,
        title: l ? ek.intl.format(ek.t.BCBIlp, {}) : ek.intl.format(ek.t.lmMBfy, {}),
        subtitle: l ? ek.intl.format(ek.t.U9FY0J, {}) : ek.intl.string(ek.t.oWCrBq),
        buttons: l
            ? (0, r.jsxs)(g.e, {
                  children: [
                      (0, r.jsx)(f.$, {
                          variant: "overlay-primary",
                          text: ek.intl.string(ek.t["1Wm127"]),
                          onClick: () =>
                              (0, A.Cz)({
                                  tab: lA.G2.ORBS,
                                  analyticsLocations: [],
                                  analyticsSource: p.A.INTRO_TO_ORBS_QUEST_BANNER,
                              }),
                      }),
                      (0, r.jsx)(f.$, {
                          variant: "overlay-secondary",
                          text: ek.intl.string(ek.t["7kTAgJ"]),
                          onClick: a,
                      }),
                  ],
              })
            : (0, r.jsx)(f.$, {
                  variant: "overlay-primary",
                  text: ek.intl.string(ek.t.hvVgAZ),
                  onClick: a,
                  icon: v.I,
                  iconPosition: "end",
              }),
        background: (0, r.jsx)(lL, { onAssetLoad: s, isVirtualCurrencyEnabled: l }),
    });
}
function lU(e) {
    let { onAssetLoad: t, onQuestCtaClick: s, questHomeHero: n, isLoadingQuestHomeHero: l, hasSearchResults: i } = e,
        { hasError: a, isLoading: u } = (0, $.zT)(),
        c = l || u;
    return (0, r.jsxs)("div", {
        className: o()(lb.iS, { [lb.R]: i }),
        children: [
            c && (0, r.jsx)(tH, {}),
            !l &&
                (null == n || a
                    ? (0, r.jsx)(ly, { className: o()({ [lb.lX]: u }), onAssetLoad: t })
                    : (0, r.jsx)(tQ, { hero: n, isBannerLoading: u, onQuestCtaClick: s })),
        ],
    });
}
let lD = function (e) {
    let { topLevelRoute: t } = e,
        s = (0, u.zy)(),
        n = (0, u.W6)(),
        l = i.useMemo(() => new URLSearchParams(s.search).getAll(z.L1.AD_CREATIVE_IDS), [s.search]),
        a = (d.Fr || d.v1) && l.length > 0,
        x = (0, E.bG)([O.A], () => O.A.getState("quests")),
        {
            selectedTab: g,
            onSelectTab: f,
            tabs: v,
        } = (function (e) {
            let { withClaimedQuestsTab: t = !0 } = e,
                s = lO.A.useField("tab"),
                n = (0, u.zy)(),
                l = (0, z.p5)(),
                { enabled: r } = G.Mk.useConfig({ location: tC.rE.QUEST_HOME_DESKTOP }),
                { useNewLayoutWithSearch: a } = G.aD.useConfig({ location: tC.rE.QUEST_HOME_DESKTOP }),
                o = r || a;
            i.useEffect(() => {
                lO.A.getState().initializeFromUrl(n.search, l);
            }, [n.search, l]);
            let c = i.useCallback((e) => {
                lO.A.getState().setTab(e);
            }, []);
            return {
                tabs: i.useMemo(
                    () =>
                        [
                            { id: z.NC.ALL, label: o ? ek.intl.string(ek.t.Jt6u7B) : ek.intl.string(ek.t["0SzXmi"]) },
                            t
                                ? {
                                      id: z.NC.CLAIMED,
                                      label: o ? ek.intl.string(ek.t["3TVY/R"]) : ek.intl.string(ek.t.zyNYNB),
                                  }
                                : null,
                            t && l ? { id: z.NC.PREVIEW_TOOL, label: ek.intl.string(ek.t.BDUDau) } : null,
                        ].filter(eR.Vq),
                    [t, l, o],
                ),
                selectedTab: s,
                onSelectTab: c,
            };
        })({ withClaimedQuestsTab: !0 }),
        { query: C, setQuery: b, matchingQuestIds: M, onSearchClose: Q } = lT(),
        { onScroll: y } = (0, L.G)(),
        U = V.A.getState().getUtmCurrentContext(),
        D = lc((e) => e.registerAssetLoad),
        P = i.useRef(U);
    i.useEffect(() => {
        P.current = U;
    }),
        i.useEffect(() => {
            let { current: e } = P;
            (0, N.x)({
                name: c.ImpressionNames.QUEST_HOME,
                type: c.ImpressionTypes.VIEW,
                properties: {
                    utm_source_current: e.utmSourceCurrent,
                    utm_medium_current: e.utmMediumCurrent,
                    utm_campaign_current: e.utmCampaignCurrent,
                    utm_content_current: e.utmContentCurrent,
                    tab: g,
                },
            });
        }, [g]),
        (0, I.HU)({ location: ek.intl.string(ek.t.JALI2K) });
    let k = i.useRef(null),
        { enabled: w } = G.Mk.useConfig({ location: tC.rE.QUEST_HOME_DESKTOP }),
        { useNewLayoutWithSearch: W } = G.aD.useConfig({ location: tC.rE.QUEST_HOME_DESKTOP }),
        K = w || W,
        Y = i.useRef(null),
        J = i.useCallback((e) => {
            Y.current?.scrollToQuest(e);
        }, []),
        X = i.useMemo(() => ((0, B.uJ)(s.hash) ? null : s.hash.substring(1)), [s.hash]),
        { questHomeHero: Z, isLoading: ee } = (0, tL.lg)(l[0] ?? null),
        et = i.useCallback(() => {
            (0, F.Y)({
                pageType: eh.liQ.GLOBAL_DISCOVERY_QUESTS,
                sectionType: eh.JJy.ORBS_BALANCE_MENU,
                ctaObject: eh.ZSU.CTA_TO_ORBS_SHOP,
            }),
                (0, A.Cz)({ tab: lA.G2.ORBS, analyticsLocations: [], analyticsSource: p.A.ORBS_BALANCE_MENU });
        }, []);
    i.useEffect(() => {
        (0, S.I)(eh.BVt.QUEST_HOME);
    }, []),
        i.useEffect(() => {
            H.trigger();
        }, []),
        i.useEffect(() => {
            if (a || null != x) return;
            let e = new URLSearchParams(s.search),
                l = e.get(z.L1.TAB);
            if (l === z.NC.PREVIEW_TOOL) {
                let t = e.get(z.L1.QUEST_ID);
                T.A.openNativeAppModal("quests", eh.e$_.DEEP_LINK, {
                    type: lI.XK.QUEST_PREVIEW_TOOL,
                    params: { questId: t, tab: l },
                });
                return;
            }
            let r = performance.getEntriesByType("navigation")[0];
            if ("POP" === n.action && r?.type === "navigate" && t && l !== z.NC.PREVIEW_TOOL) {
                let t = (0, B.uJ)(s.hash) ? null : s.hash.substring(1),
                    n = e.get(z.L1.SORT),
                    r = e.get(z.L1.FILTER),
                    i = e.get(z.L1.AD_CREATIVE_IDS);
                T.A.openNativeAppModal("quests", eh.e$_.DEEP_LINK, {
                    type: lI.XK.QUEST_HOME,
                    params: { questId: (0, B.uJ)(t) ? void 0 : t, sort: n, filter: r, tab: l, adCreativeIds: i },
                });
            }
        }, [s.search, x, n.action, s.hash, t, a]),
        i.useEffect(() => {
            t && (0, R.Dr)(h.M.QUEST_HOME_ENTRYPOINT_ONBOARDING);
        }, [t]);
    let es = i.useCallback(
            (e) => {
                n.replace({ ...n.location, hash: void 0 }), k.current?.scrollToTop({ animate: !1 }), f(e), Q();
            },
            [n, f, Q],
        ),
        en = i.useMemo(() => null != M && K, [M, K]),
        el = i.useMemo(() => ({ onAssetLoadComplete: D }), [D]),
        er = i.useMemo(() => ({ onScroll: y, scrollerRef: k }), [y, k]),
        ei = (0, G.Qj)() && 0 === l.length;
    return a
        ? (0, r.jsx)(lx, { adCreativeIds: l })
        : (0, r.jsx)(ld.M.Provider, {
              value: el,
              children: (0, r.jsx)(lR.Provider, {
                  value: er,
                  children: (0, r.jsx)("div", {
                      className: o()(lb.kL, { [lb.KY]: !t }),
                      children: (0, r.jsxs)(lM, {
                          header: (0, r.jsx)(lQ, {
                              selectedTab: g,
                              onSelectTab: es,
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
                                              onChange: b,
                                              placeholder: ek.intl.string(ek.t.y10TI2),
                                              onClear: Q,
                                              size: "sm",
                                          }),
                                      (0, r.jsx)(q.SS, {
                                          analyticsPage: eh.liQ.GLOBAL_DISCOVERY_QUESTS,
                                          cardAlignment: q.cP.END,
                                          ctaText: ek.intl.string(ek.t["J+vlIR"]),
                                          ctaOnClick: et,
                                      }),
                                  ],
                              }),
                          }),
                          banner:
                              g === z.NC.ALL &&
                              !ei &&
                              (0, r.jsx)(
                                  $.y5,
                                  {
                                      source: tC.rE.QUEST_HOME_DESKTOP,
                                      adCreativeId: Z?.id ?? null,
                                      adCreativeType: m.p.QUEST_HOME_HERO,
                                      children: (0, r.jsx)(lU, {
                                          onAssetLoad: D,
                                          onQuestCtaClick: J,
                                          hasSearchResults: en,
                                          questHomeHero: Z,
                                          isLoadingQuestHomeHero: ee,
                                      }),
                                  },
                                  Z?.id,
                              ),
                          children: [
                              en && null != M && (0, r.jsx)(lv, { matchingQuestIds: M }),
                              g === z.NC.CLAIMED
                                  ? (0, r.jsx)(nW, { onSelectTab: es, className: en ? lb.R : void 0 })
                                  : g === z.NC.PREVIEW_TOOL
                                    ? (0, r.jsx)(ne, { className: en ? lb.R : void 0 })
                                    : K
                                      ? (0, r.jsx)(li, {
                                            className: en ? lb.R : void 0,
                                            ref: Y,
                                            deepLinkedQuestId: X,
                                            isLoadingQuestHomeHero: !ei && ee,
                                            withQuestHomeHero: !ei,
                                        })
                                      : (0, r.jsx)(nb, { ref: Y }),
                          ],
                      }),
                  }),
              }),
          });
};
