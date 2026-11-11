let s;
(n.r(t), n.d(t, { default: () => l9 }), n(323874), n(14289), n(35956));
var l,
    r = n(477900),
    i = n(582128),
    a = n(503698),
    o = n.n(a),
    u = n(806163),
    c = n(613412),
    d = n(607399),
    m = n(323889),
    E = n(855986),
    h = n(554146),
    f = n(577473),
    g = n(825484),
    x = n(821609),
    v = n(509434),
    j = n(331322),
    C = n(683438),
    _ = n(944791),
    S = n(775602),
    p = n(793574),
    N = n(139286),
    A = n(197111),
    O = n(10088),
    T = n(969935),
    b = n(726249),
    I = n(607470),
    R = n(826673),
    y = n(840251),
    M = n(688151);
let L = new y.E([], M.$G.QUEST_HOME_OPEN, { location: "open quest home" });
var H = n(899647),
    Q = n(979590),
    U = n(651266),
    D = n(783531),
    F = n(201805),
    P = n(855531),
    k = n(76229);
function q() {
    let e = (0, F.T2)();
    return (0, P.kV)(e)
        ? (0, r.jsx)("div", {
              className: k.q,
              children: (0, r.jsx)("img", { className: k.w, src: "/assets/c52c36cb76d57790.png", alt: "" }),
          })
        : null;
}
var w = n(318346),
    B = n(863705),
    V = n(531685),
    W = n(676279),
    G = n(975571),
    K = n(240248),
    z = n(87549),
    $ = n(945810);
let Y = (0, $.mj)({
    name: "2026-06-orbs-holdout",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var X = n(860996),
    J = n(61387),
    Z = n(557637),
    ee = n(834730),
    et = n(939249),
    en = n(289873),
    es = n(438457),
    el = n(144779),
    er = n(122760),
    ei = n(506988),
    ea = n(914313),
    eo = n(760914),
    eu = n(18437),
    ec = n(590202),
    ed = n(574112),
    em = n(415441),
    eE = n(280905),
    eh = n(139384),
    ef = n(43990),
    eg = n(534514),
    ex = n(770178),
    ev = n(561844),
    ej = n(652215),
    eC = n(691388);
function e_(e, t) {
    let { row_index: n, ...s } = (0, ec.fF)(ei.uF.QUEST_HOME_HERO);
    (0, ev.Qg)({
        adContentId: e,
        adCreativeType: m.p.QUEST_HOME_HERO,
        event: t,
        properties: s,
        sourceQuestContent: ei.uF.QUEST_HOME_HERO,
    });
}
let eS = function (e) {
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
        f = i.useCallback((e) => {
            h(e.contentRect.width < 500 ? "display-md" : "display-lg");
        }, []),
        g = (0, ex.w)(f, [], { fireOnMount: !0 }),
        x = i.useCallback(() => e_(t, ej.HAw.QUEST_HOVER), [t]),
        v = i.useCallback(() => e_(t, ej.HAw.QUEST_HOVER_OFF), [t]);
    return (0, r.jsx)(ef.N, {
        theme: ej.NJ8.ONYX,
        disableAdaptiveTheme: !0,
        children: (e) =>
            (0, r.jsx)("div", {
                "data-testid": "quest-home-hero-banner",
                className: o()(eC.iE, e, c),
                onMouseEnter: x,
                onMouseLeave: v,
                ref: (e) => {
                    ((g.current = e), "function" == typeof m ? m(e) : null != m && (m.current = e));
                },
                children: (0, r.jsxs)("div", {
                    className: eC.FG,
                    children: [
                        d,
                        (0, r.jsxs)(j.B, {
                            className: o()(eC.Qs, { [eC.X]: null != d && !1 !== d }),
                            direction: "vertical",
                            justify: null != n ? "space-between" : "end",
                            children: [
                                n,
                                (0, r.jsxs)(j.B, {
                                    className: eC.yp,
                                    gap: 16,
                                    children: [
                                        (0, r.jsxs)(j.B, {
                                            gap: 8,
                                            children: [
                                                (0, r.jsx)(eg.D, {
                                                    color: "text-strong",
                                                    variant: E,
                                                    className: eC.DD,
                                                    children: s,
                                                }),
                                                (0, r.jsx)(ee.E, {
                                                    color: "text-strong",
                                                    variant: "body-md/normal",
                                                    className: eC.VA,
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
var ep = n(113597);
(n(134528), n(947204));
var eN = n(749401),
    eA = n(635377),
    eO = n.n(eA),
    eT = n(998304),
    eb = n(515718);
let eI = new (eO())({ max: 50 });
var eR = n(49491),
    ey = n(454908),
    eM = n(120692),
    eL = n(646514),
    eH = n(62617);
function eQ(e) {
    let { alt: t, ariaLabel: n, ariaHidden: s, role: l, width: a, height: o, className: u, style: c } = e,
        d = i.useMemo(
            () => (0, eH.H)({ width: a, height: o, intrinsicWidth: 288, intrinsicHeight: 162, style: c }),
            [a, o, c],
        );
    return (0, r.jsx)("img", {
        style: d,
        src: "https://cdn.discordapp.com/assets/content/f7e273b7dc25e6660e31315b01153be32ddbbb5d2934b9021b70aff085d022b2.svg",
        className: (0, eH.Z)(u),
        alt: t,
        "aria-label": n,
        "aria-hidden": s,
        role: l ?? "img",
    });
}
var eU = n(650809),
    eD = n(48507),
    eF = n(111159),
    eP = n(717421),
    ek = n(559106),
    eq = n(516521);
n(321073);
var ew = n(535185),
    eB = n(408278),
    eV = n(548411),
    eW = n(554830),
    eG = n(321503),
    eK = n(792996),
    ez =
        (((l = {}).FEATURED = "featured"),
        (l.IN_PROGRESS = "in-progress"),
        (l.ENDING_SOON = "ending-soon"),
        (l.ORB = "orb"),
        (l.DISCOVERED = "discovered"),
        (l.EXPIRED = "expired"),
        (l.PREVIEW = "preview"),
        (l.SPECIAL_QUESTS = "special-quests"),
        l);
let e$ = [
    { type: "featured-quests", identifier: "featured", title: eK.t["ih/OtS"], maxItems: 4 },
    { type: "quests", identifier: "ending-soon", title: eK.t.PRg3qh },
    { type: "quests", identifier: "special-quests", title: eK.t.P0lmqC },
    { type: "quests", identifier: "orb", title: eK.t["0Uc94A"] },
    { type: "quests", identifier: "in-progress", title: eK.t.CHJy6z },
    { type: "quests", identifier: "discovered", title: eK.t["u9Ug++"] },
    { type: "quests", identifier: "preview", title: eK.t["1gfA/U"], shouldShowFn: (e, t) => t },
    { type: "quests", identifier: "expired", title: eK.t.Q8nVIj, shouldShowFn: (e, t) => e },
];
function eY(e) {
    return eL.A.space.SPACE_XL.resolve({ density: e });
}
function eX(e, t) {
    return (1220 - 2 * eY(e) * (t ? 2 : 0.75)) / 3;
}
function eJ(e, t, n) {
    return e.scrollLeft + (t.getBoundingClientRect().left - (n.getBoundingClientRect().left + 2));
}
var eZ = n(915850);
let e0 = "data-scroll-target",
    e1 = `[${e0}]`,
    e3 = { anchors: [], windowSizes: [] },
    e7 = '[role="button"]:not([tabindex="-1"]):not([aria-disabled="true"])',
    e2 = { overflowX: "hidden" };
function e5(e, t, n) {
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
let e6 = i.memo(function (e) {
    let {
            children: t,
            className: n,
            itemSelector: s = e1,
            maskWidth: l = 24,
            overflowAmount: a = 0,
            maskMarginMultiplier: u = 1,
            disableUserScroll: c = !1,
            groupedArrows: d = !1,
            scrollerRef: m,
            controlRef: h,
            onScrollStart: f,
            onScrollEnd: g,
            singleStep: x = !1,
            autoCycle: v = !1,
        } = e,
        j = i.useRef(null),
        C = i.useCallback(
            (e) => {
                ((j.current = e), null != m && (m.current = e));
            },
            [m],
        ),
        _ = i.useRef(null),
        p = i.useRef(0),
        N = i.useRef(null),
        [A, O] = i.useState(!1),
        [T, b] = i.useState(!1),
        [I, R] = i.useState(!0),
        [y, M] = i.useState([]),
        [L, H] = i.useState([]),
        Q = (0, E.bG)([S.Ay], () => S.Ay.useReducedMotion) ? "auto" : "smooth",
        U = i.useCallback(() => {
            let e = j.current?.getScrollerNode();
            null == e ||
                (0 !== e.clientWidth && (O(e.scrollLeft > 0), b(e.scrollLeft + e.clientWidth < e.scrollWidth - 1)));
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
                if (null == a || null == o || a.scrollWidth <= a.clientWidth) return e3;
                let u = Array.from(a.querySelectorAll(s));
                if (0 === u.length) return e3;
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
                        m.push(eJ(a, u[e], o));
                        continue;
                    }
                    if (h === u.length - 1) break;
                    e > 0 && m.push((t + d(u[h])) / 2);
                }
                return E.length < 2 ? e3 : (i || m.push(a.scrollWidth), { anchors: m, windowSizes: E });
            })({
                scrollerRef: j,
                containerRef: N,
                itemSelector: s,
                maskWidth: l,
                maskMarginMultiplier: u,
                singleStep: x,
            });
            (H(t), M((t) => (t.length === e.length && t.every((t, n) => t === e[n]) ? t : e)));
        }, [l, s, u, x, M]),
        F = i.useCallback(() => {
            if (null == N.current || N.current?.clientWidth === 0) return R(!0);
            R(N.current?.clientWidth >= 1260);
        }, [N]),
        P = i.useCallback(
            function (e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                    s = j.current?.getScrollerNode();
                if (null == s || y.length < 2 || (null != f && !f(e * n))) return !1;
                let { currentIndex: l, scrollLefts: r } = e5(s, y, x),
                    i = x ? n : (L[l] ?? 1),
                    a = Math.max(0, Math.min(y.length - 1, l + e * i));
                return ((_.current = t), s.scrollTo({ left: r[a], behavior: Q }), !0);
            },
            [Q, y, L, x, f],
        ),
        k = (function (e) {
            let { isEnabled: t, advance: n } = e,
                s = i.useRef(null),
                l = i.useCallback(() => {
                    t && n(1, ec.pk.AUTO);
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
        q = i.useCallback(
            function (e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
                P(e, t, n) && k();
            },
            [P, k],
        ),
        w = i.useCallback(
            (e) => {
                0 !== e && q(e > 0 ? 1 : -1, ec.pk.AUTO, Math.abs(e));
            },
            [q],
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
                    ((_.current = ec.pk.MANUAL),
                    i > 0
                        ? n.scrollTo({ left: n.scrollLeft - i, behavior: t })
                        : a > 0 && n.scrollTo({ left: n.scrollLeft + a, behavior: t }));
            },
            [l],
        ),
        V = i.useCallback(
            (e) => {
                let t = e.target;
                if (!t.matches(":focus-visible")) return;
                let n = t.closest(s);
                null != n && B(n, Q);
            },
            [s, B, Q],
        ),
        W = i.useCallback(() => {
            let e = j.current?.getScrollerNode();
            if (null == e) return;
            let { currentIndex: t } = e5(e, y, x),
                n = _.current ?? ec.pk.MANUAL;
            _.current = null;
            let s = p.current;
            p.current = e.scrollLeft;
            let l = e.scrollLeft > s ? ec.VU.RIGHT : ec.VU.LEFT,
                r = L[t] ?? 1;
            g?.({
                scrollingType: n,
                scrollWindowStartIndex: t,
                scrollWindowEndIndex: t + r - 1,
                scrollWindowSize: r,
                scrollingDirection: l,
            });
        }, [g, y, L, x]),
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
                    o = null == a ? null : a.matches(e7) ? a : a.querySelector(e7);
                null != o && (o.focus({ preventScroll: !0 }), e.repeat && B(a, "instant"));
            },
            [s, B],
        ),
        K = i.useCallback(() => {
            (U(), D(), F());
        }, [U, D, F]);
    (0, ew.g)(N, K, [], { fireOnMount: !0 });
    let z = a > 0,
        $ = i.useMemo(
            () => ({
                "--custom-scroller-mask-width": `${l}px`,
                "--custom-scroller-overflow-amount": `${a}px`,
                "--custom-scroller-scroll-behavior": Q,
            }),
            [l, a, Q],
        );
    return (0, r.jsxs)("div", {
        className: o()(n, eZ.m7),
        ref: N,
        style: $,
        children: [
            d &&
                (0, r.jsxs)("div", {
                    className: eZ.rU,
                    children: [
                        (0, r.jsx)(eB.K, {
                            icon: eV.ArrowLargeLeftIcon,
                            variant: "overlay-secondary",
                            onClick: () => q(-1, ec.pk.ARROW),
                            disabled: !A,
                            "aria-label": eK.intl.string(eK.t.vgfxaA),
                            tabIndex: -1,
                        }),
                        (0, r.jsx)(eB.K, {
                            icon: eW.ArrowLargeRightIcon,
                            variant: "overlay-secondary",
                            onClick: () => q(1, ec.pk.ARROW),
                            disabled: !T,
                            "aria-label": eK.intl.string(eK.t.XiOHRX),
                            tabIndex: -1,
                        }),
                    ],
                }),
            !d &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)("div", {
                            className: o()(eZ.k9, eZ.RW, { [eZ.Q2]: A }),
                            "aria-hidden": !0,
                            children: (0, r.jsx)(eB.K, {
                                icon: eV.ArrowLargeLeftIcon,
                                variant: "overlay-secondary",
                                onClick: () => q(-1, ec.pk.ARROW),
                                disabled: !A,
                                "aria-label": eK.intl.string(eK.t.vgfxaA),
                                tabIndex: -1,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: o()(eZ.k9, eZ.K3, { [eZ.Q2]: T }),
                            "aria-hidden": !0,
                            children: (0, r.jsx)(eB.K, {
                                icon: eW.ArrowLargeRightIcon,
                                variant: "overlay-secondary",
                                onClick: () => q(1, ec.pk.ARROW),
                                disabled: !T,
                                tabIndex: -1,
                                "aria-label": eK.intl.string(eK.t.XiOHRX),
                            }),
                        }),
                    ],
                }),
            (0, r.jsx)("div", {
                className: o()({ [eZ.sF]: A && I, [eZ.RC]: T && I, [eZ.Ni]: z && !A, [eZ.GA]: z && !T }),
                children: (0, r.jsx)(eq.zC, {
                    ref: C,
                    orientation: "horizontal",
                    onScroll: U,
                    onScrollEnd: W,
                    onFocusCapture: V,
                    onKeyDown: G,
                    style: c ? e2 : void 0,
                    className: o()({ [eZ.x2]: z, [eZ.$o]: x }, eZ.XG),
                    children: (0, r.jsxs)(eG.X.Provider, {
                        value: j,
                        children: [
                            t,
                            !x &&
                                y.map((e, t) =>
                                    (0, r.jsx)(
                                        "div",
                                        { "aria-hidden": !0, className: eZ.fw, style: { insetInlineStart: `${e}px` } },
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
var e8 = n(440703),
    e4 = n(731355),
    e9 = n(621466),
    te = n(805251),
    tt = n(406810),
    tn = n(628284),
    ts = n(65154),
    tl = n(687966),
    tr = n(155718),
    ti = n(496431),
    ta = n(640708),
    to = n(287809),
    tu = n(5377),
    tc = n(927813),
    td = n(541830),
    tm = n(971649),
    tE = n(651892),
    th = n(417404),
    tf = n(814793),
    tg = n(453384),
    tx = n(639701),
    tv = n(398025),
    tj = n(221596),
    tC = n(818348),
    t_ = n(499621);
function tS(e) {
    let [t, n] = i.useState(!1),
        s = i.useCallback(() => {
            t || (n(!0), e?.(!0));
        }, [t, e]),
        l = i.useCallback(() => {
            t && (n(!1), e?.(!1));
        }, [t, e]);
    return { isHovering: t, hoverProps: { onMouseEnter: s, onMouseLeave: l, onFocus: s, onBlur: l } };
}
function tp(e) {
    let { hero: t, contentPosition: n, impressionRef: s } = e,
        l = i.useRef(null),
        { isHovering: a, hoverProps: u } = tS(
            i.useCallback(
                (e) => {
                    (0, ev.Qg)({
                        adContentId: t.id,
                        adCreativeType: m.p.QUEST_HOME_HERO,
                        event: e ? ej.HAw.QUEST_HOVER : ej.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: ei.uF.QUEST_HOME_HERO_SHELF,
                            content_name: (0, ec.jO)(ei.uF.QUEST_HOME_HERO_SHELF),
                            content_position: n,
                        },
                        sourceQuestContent: ei.uF.QUEST_HOME_HERO_SHELF,
                    });
                },
                [t.id, n],
            ),
        );
    i.useEffect(() => {
        let e = l.current;
        (0, e9.vq)(e, HTMLVideoElement) && (a ? ((e.currentTime = 0), e.play().catch(tC.tE)) : e.pause());
    }, [a]);
    let { hoverSpring: c } = (0, eP.z)({ hoverSpring: +!!a, config: eM.config.gentle }),
        d = i.useCallback(() => {
            (0, ed._Q)(
                { adContentId: t.id, adCreativeType: m.p.QUEST_HOME_HERO, cta: t.cta },
                {
                    content: ei.uF.QUEST_HOME_HERO_SHELF,
                    ctaContent: ec.Cy.OPEN_GAME_LINK,
                    position: n,
                    impressionId: s.current?.getId(),
                    sourceQuestContent: ei.uF.QUEST_HOME_HERO_SHELF,
                },
            );
        }, [t.cta, t.id, n, s]);
    return (0, r.jsxs)(et.D, {
        tag: "div",
        className: o()(t_.FW, t_.Bm),
        onClick: d,
        "aria-label": t.cta.buttonLabel,
        [e0]: !0,
        ...u,
        children: [
            (0, r.jsx)("div", {
                className: t_.Ve,
                children: (0, r.jsx)(em.N, {
                    showVideo: !0,
                    assetRef: l,
                    imageAsset:
                        null != t.shelfImage
                            ? {
                                  asset: { url: t.shelfImage, mimetype: null, isAnimated: !1 },
                                  assetId: "intro-image",
                                  className: o()(t_.pv, t_.gI),
                              }
                            : void 0,
                    videoAsset:
                        null != t.shelfVideo
                            ? {
                                  asset: { url: t.shelfVideo, mimetype: null, isAnimated: !0 },
                                  assetId: "intro-video",
                                  className: o()(t_.pv, t_.Wq),
                              }
                            : void 0,
                }),
            }),
            (0, r.jsx)(eM.animated.div, {
                className: t_.hn,
                style: { transform: c.to([0, 1], [100, 0]).to((e) => `translateY(${e}%)`) },
                children: (0, r.jsx)(x.$, {
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
        { isHovering: c, hoverProps: d } = tS(
            i.useCallback(
                (e) => {
                    (0, ev.Qg)({
                        adContentId: t.id,
                        adCreativeType: m.p.QUEST_HOME_HERO,
                        event: e ? ej.HAw.QUEST_HOVER : ej.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: ei.uF.QUEST_HOME_HERO_SHELF,
                            content_name: (0, ec.jO)(ei.uF.QUEST_HOME_HERO_SHELF),
                            content_position: s,
                        },
                        sourceQuestContent: ei.uF.QUEST_HOME_HERO_SHELF,
                    });
                },
                [t.id, s],
            ),
        );
    i.useEffect(() => {
        let e = u.current;
        (0, e9.vq)(e, HTMLVideoElement) && (c ? ((e.currentTime = 0), e.play().catch(tC.tE)) : e.pause());
    }, [c]);
    let E = i.useCallback(() => {
            (0, ed._Q)(
                { adContentId: t.id, adCreativeType: m.p.QUEST_HOME_HERO, cta: t.cta },
                {
                    content: ei.uF.QUEST_HOME_HERO_SHELF,
                    ctaContent: ec.Cy.OPEN_GAME_LINK,
                    position: s,
                    impressionId: a.current?.getId(),
                    sourceQuestContent: ei.uF.QUEST_HOME_HERO_SHELF,
                },
            );
        }, [t.cta, t.id, s, a]),
        h = i.useRef(null),
        [f, g] = i.useState({ top: !1, bottom: !1 }),
        v = i.useCallback(() => {
            let e = h.current;
            if (null == e) return;
            let t = e.getDistanceFromTop() > 4,
                n = e.getDistanceFromBottom() > 4;
            g((e) => (e.top === t && e.bottom === n ? e : { top: t, bottom: n }));
        }, []);
    i.useLayoutEffect(() => {
        v();
    }, [v]);
    let { topFade: j, bottomFade: C } = (0, eP.z)({
            topFade: +!!f.top,
            bottomFade: +!!f.bottom,
            config: { ...eM.config.gentle, duration: 100 },
        }),
        _ = i.useMemo(() => {
            let e = null != n.firstReleaseDate ? new Date(n.firstReleaseDate).getFullYear() : 0 / 0,
                t = isNaN(e) ? null : e,
                s = n.genres.at(0);
            return [
                t,
                null != s ? (0, td.du)(s) : null,
                n.getCompanyByRole(tr.wk.DEVELOPER).at(0)?.name ?? null,
            ].filter((e) => null != e);
        }, [n]),
        S = i.useMemo(() => _.length > 0, [_]);
    return (0, r.jsxs)(et.D, {
        tag: "div",
        className: o()(t_.FW, t_.n7),
        onClick: E,
        [e0]: !0,
        ...d,
        children: [
            (0, r.jsx)("div", { className: t_.hu }),
            (0, r.jsx)("div", {
                className: t_.fQ,
                children: (0, r.jsx)(em.N, {
                    showVideo: !0,
                    assetRef: u,
                    imageAsset:
                        null != l
                            ? {
                                  asset: { url: l, mimetype: null, isAnimated: !1 },
                                  assetId: "intro-image",
                                  className: o()(t_.pv, t_.gI),
                              }
                            : void 0,
                    videoAsset:
                        null != t.shelfVideo
                            ? {
                                  asset: { url: t.shelfVideo, mimetype: null, isAnimated: !0 },
                                  assetId: "intro-video",
                                  className: o()(t_.pv, t_.Wq),
                              }
                            : void 0,
                }),
            }),
            (0, r.jsxs)("div", {
                className: t_.iq,
                children: [
                    (0, r.jsxs)("div", {
                        className: t_.o7,
                        children: [
                            (0, r.jsx)(eg.D, {
                                variant: "heading-xl/semibold",
                                color: "text-strong",
                                children: n.name,
                            }),
                            S &&
                                (0, r.jsx)("p", {
                                    className: t_.c9,
                                    children: _.map((e, t) =>
                                        (0, r.jsxs)(
                                            i.Fragment,
                                            {
                                                children: [
                                                    (0, r.jsx)(ee.E, {
                                                        variant: "body-sm/medium",
                                                        color: "text-muted",
                                                        tag: "span",
                                                        children: e,
                                                    }),
                                                    t < _.length - 1 && (0, r.jsx)(ta.A, { width: 3, height: 3 }),
                                                ],
                                            },
                                            t,
                                        ),
                                    ),
                                }),
                        ],
                    }),
                    (0, r.jsx)(eM.animated.div, {
                        className: t_.hX,
                        style: {
                            maskImage: (0, eM.to)(
                                [j, C],
                                (e, t) =>
                                    `linear-gradient(to bottom, rgba(0,0,0,${1 - e}), #000 48px, #000 calc(100% - 48px), rgba(0,0,0,${1 - t}))`,
                            ),
                        },
                        children: (0, r.jsx)(ek.vN, {
                            children: (0, r.jsx)(eq.Ch, {
                                ref: h,
                                className: t_.hw,
                                onScroll: v,
                                fade: !c,
                                children: (0, r.jsx)(ee.E, {
                                    variant: "body-md/normal",
                                    color: "text-muted",
                                    className: t_.W1,
                                    children: n.description,
                                }),
                            }),
                        }),
                    }),
                    (0, r.jsx)(x.$, {
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
function tA(e) {
    let { heroId: t, quest: n, onQuestCtaClick: s, contentPosition: l, className: a } = e,
        u = i.useMemo(() => new Date(n.config.expiresAt), [n.config.expiresAt]),
        { days: c, hours: d, minutes: h, seconds: f } = (0, ti.A)(u, tc.A.Millis.MINUTE),
        g = i.useMemo(
            () =>
                (0, tu.uN)(
                    { days: c, hours: d, minutes: h, seconds: f },
                    { days: eK.t["Ux/De1"], hours: eK.t.Lzd5Ie, minutes: eK.t.odmpbP },
                ),
            [c, d, h, f],
        ),
        v = (0, E.bG)([to.default], () => to.default.getCurrentUser()),
        C = i.useMemo(() => (0, th.mq)(n.config, v), [n.config, v]),
        _ = i.useMemo(
            () =>
                (function (e, t) {
                    switch ((0, tE.xv)(e).type) {
                        case e8.l.IN_GAME:
                            return eK.intl.string(eK.t["O/J2kr"]);
                        case e8.l.COLLECTIBLE:
                            return eK.intl.string(eK.t.Jg17Ut);
                        case e8.l.VIRTUAL_CURRENCY:
                            return eK.intl.string(eK.t.ElYQFS);
                        default:
                            return (0, th.mq)(e, t);
                    }
                })(n.config, v),
            [n.config, v],
        ),
        { completedRatio: S, completedRatioDisplay: p } = (0, J.O9)(n),
        N = i.useMemo(() => (0, th.wo)(n.config, v), [n.config, v]),
        A = (0, eu.WS)(),
        O = (0, tm.wW)(),
        { isHovering: T, hoverProps: b } = tS(
            i.useCallback(
                (e) => {
                    A({
                        adContentId: t,
                        relatedQuestId: n.id,
                        adCreativeType: m.p.QUEST_HOME_HERO,
                        event: e ? ej.HAw.QUEST_HOVER : ej.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: ei.uF.QUEST_HOME_HERO_SHELF,
                            content_name: (0, ec.jO)(ei.uF.QUEST_HOME_HERO_SHELF),
                            content_position: l,
                        },
                        sourceQuestContent: ei.uF.QUEST_HOME_HERO_SHELF,
                    });
                },
                [t, A, l, n.id],
            ),
        ),
        { hoverSpring: I } = (0, eP.z)({ hoverSpring: +!!T, config: eM.config.gentle }),
        R = i.useCallback(() => {
            (s(n.id),
                (0, es.r)({
                    type: el.F.CLICK_INTERNAL,
                    adCreativeType: m.p.QUEST_HOME_HERO,
                    adCreativeId: t,
                    relatedQuestId: n.id,
                    questContentCTA: ec.Cy.VIEW_QUESTS,
                    surfaceId: ei.uF.QUEST_HOME_HERO_SHELF,
                    sourceQuestContent: ei.uF.QUEST_HOME_HERO_SHELF,
                    questContentPosition: l,
                    impressionId: O(),
                }));
        }, [s, t, n.id, l, O]);
    return (0, r.jsxs)(et.D, {
        tag: "div",
        className: o()(t_.FW, t_.$R, a),
        onClick: R,
        "aria-label": eK.intl.string(eK.t["th2+0j"]),
        [e0]: !0,
        ...b,
        children: [
            (0, r.jsx)("div", { className: t_.hu }),
            (0, r.jsxs)(j.B, {
                direction: "horizontal",
                gap: 4,
                children: [
                    (0, r.jsx)(te.E, { type: { text: _ } }),
                    (0, r.jsx)(eM.animated.div, {
                        style: { opacity: (0, tv.a)(I.to([0, 1], [1, 0])) },
                        children: (0, r.jsx)(te.E, { type: { text: g }, icon: tt.ClockIcon }),
                    }),
                ],
            }),
            (0, r.jsx)(eM.animated.div, {
                className: t_.Tr,
                style: { transform: I.to([0, 1], [1, 1.1]).to((e) => `scale(${e})`) },
                children: (0, r.jsx)(tg.A, {
                    percentComplete: S,
                    overlayText: T && null != N ? `${N}` : void 0,
                    size: 120,
                    children: (0, r.jsx)(tx.A, {
                        quest: n,
                        location: tj.rE.QUEST_HOME_HERO_SHELF_DESKTOP,
                        questContent: ei.uF.QUEST_HOME_HERO_SHELF,
                        sourceQuestContent: ei.uF.QUEST_HOME_HERO_SHELF,
                        autoplay: T,
                        fullWidth: !0,
                    }),
                }),
            }),
            (0, r.jsx)(eM.animated.div, {
                className: t_.tw,
                style: {
                    opacity: (0, tv.a)(I.to([0, 1], [1, 0])),
                    transform: I.to([0, 1], [1, 0.9]).to((e) => `scale(${e})`),
                    transformOrigin: "bottom left",
                },
                children: (0, r.jsxs)(j.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)(ee.E, {
                            variant: "body-md/semibold",
                            color: "text-strong",
                            className: t_.Ht,
                            children: C,
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
                                        (0, r.jsx)(tn.CircleCheckIcon, {
                                            size: "xs",
                                            color: eL.A.colors.ICON_MUTED.css,
                                        }),
                                        (0, r.jsx)(ee.E, {
                                            variant: "body-sm/normal",
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
                                        (0, tf.pv)(n.config) === e4.Z.VIDEO
                                            ? (0, r.jsx)(ts.CirclePlayIcon, {
                                                  size: "xs",
                                                  color: eL.A.colors.ICON_MUTED.css,
                                              })
                                            : (0, r.jsx)(tl.GameControllerIcon, {
                                                  size: "xs",
                                                  color: eL.A.colors.ICON_MUTED.css,
                                              }),
                                        (0, r.jsx)(ee.E, {
                                            variant: "body-sm/normal",
                                            color: "text-muted",
                                            children: p,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            }),
            (0, r.jsx)(eM.animated.div, {
                className: t_.um,
                style: { transform: I.to([0, 1], [100, 0]).to((e) => `translateY(${e}%)`) },
                children: (0, r.jsx)(x.$, {
                    fullWidth: !0,
                    onClick: (e) => {
                        (e.stopPropagation(), R());
                    },
                    text: eK.intl.string(eK.t["th2+0j"]),
                }),
            }),
        ],
    });
}
var tO = n(192308);
let tT = "hexagon-campaign-perks-modal";
var tb = n(47671),
    tI = n(644235),
    tR = n(253932);
function ty() {
    let e = (0, E.bG)([tb.A], () => null != tb.A.gradientPreset),
        t = (0, tI.lo)(tR.eh.useSetting().customUserThemeSettings);
    return e || t;
}
var tM = n(211824),
    tL = n(701256),
    tH = n(164900),
    tQ = n(161005);
let tU = [
    { key: "client-theme", icon: eU.PaintPaletteIcon, label: tL.default.TTUKuI },
    { key: "display-name-style", icon: eD.LettersIcon, label: eK.t.NEzEws },
    { key: "app-icon", icon: eF.ClydeIcon, label: eK.t.RPh2ou },
];
function tD(e) {
    let { hero: t, contentPosition: s, impressionRef: l } = e,
        a = ty(),
        { hoverProps: u } = tS(
            i.useCallback(
                (e) => {
                    (0, ev.Qg)({
                        adContentId: t.id,
                        adCreativeType: m.p.QUEST_HOME_HERO,
                        event: e ? ej.HAw.QUEST_HOVER : ej.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: ei.uF.QUEST_HOME_HERO_SHELF,
                            content_name: (0, ec.jO)(ei.uF.QUEST_HOME_HERO_SHELF),
                            content_position: s,
                        },
                        sourceQuestContent: ei.uF.QUEST_HOME_HERO_SHELF,
                    });
                },
                [t.id, s],
            ),
        ),
        c = i.useRef(null),
        [d, E] = i.useState({ top: !1, bottom: !1 }),
        h = i.useCallback(() => {
            let e = c.current;
            if (null == e) return;
            let t = e.getDistanceFromTop() > 4,
                n = e.getDistanceFromBottom() > 4;
            E((e) => (e.top === t && e.bottom === n ? e : { top: t, bottom: n }));
        }, []);
    i.useLayoutEffect(() => {
        h();
    }, [h]);
    let { topFade: f, bottomFade: g } = (0, eP.z)({
            topFade: +!!d.top,
            bottomFade: +!!d.bottom,
            config: { ...eM.config.gentle, duration: 100 },
        }),
        v = i.useCallback(() => {
            ((0, es.r)({
                type: el.F.CLICK_INTERNAL,
                adCreativeType: m.p.QUEST_HOME_HERO,
                adCreativeId: t.id,
                questContentCTA: ec.Cy.OPEN_AD_PERK_MODAL,
                surfaceId: ei.uF.QUEST_HOME_HERO_SHELF,
                sourceQuestContent: ei.uF.QUEST_HOME_HERO_SHELF,
                questContentPosition: s,
                impressionId: l.current?.getId(),
            }),
                (function (e) {
                    let { sourceQuestContent: t } = e,
                        s = (0, tO.lx)(),
                        l = { current: !1 };
                    (0, tO.mM)(
                        async () => {
                            let { default: e } = await Promise.all([
                                n.e(578667),
                                n.e(71866),
                                n.e(891473),
                                n.e(412117),
                                n.e(263406),
                                n.e(1955),
                                n.e(341161),
                                n.e(410526),
                                n.e(202985),
                                n.e(603619),
                                n.e(175927),
                                n.e(470126),
                                n.e(149697),
                                n.e(128804),
                                n.e(60882),
                                n.e(71151),
                                n.e(227853),
                                n.e(286615),
                                n.e(735042),
                                n.e(311541),
                                n.e(274227),
                                n.e(870088),
                                n.e(300641),
                                n.e(571163),
                                n.e(586662),
                                n.e(831377),
                                n.e(709976),
                                n.e(860596),
                                n.e(279774),
                                n.e(763945),
                                n.e(261204),
                                n.e(686731),
                                n.e(807432),
                                n.e(873532),
                                n.e(590088),
                                n.e(807003),
                                n.e(46083),
                                n.e(152133),
                                n.e(747802),
                                n.e(626353),
                                n.e(71169),
                                n.e(906470),
                                n.e(736663),
                                n.e(419121),
                                n.e(489020),
                                n.e(919789),
                                n.e(669130),
                                n.e(802890),
                                n.e(82937),
                                n.e(987221),
                                n.e(157064),
                                n.e(156957),
                                n.e(918786),
                                n.e(701335),
                                n.e(257935),
                                n.e(724086),
                                n.e(358937),
                                n.e(448738),
                                n.e(206189),
                                n.e(804439),
                                n.e(795345),
                                n.e(894292),
                                n.e(153302),
                                n.e(88683),
                                n.e(239204),
                                n.e(923981),
                                n.e(750370),
                                n.e(972281),
                                n.e(307107),
                                n.e(896622),
                                n.e(466592),
                                n.e(73946),
                                n.e(228271),
                                n.e(387970),
                                n.e(847445),
                                n.e(547510),
                                n.e(966366),
                                n.e(983513),
                                n.e(76928),
                                n.e(699250),
                                n.e(528311),
                                n.e(411938),
                                n.e(653383),
                                n.e(217991),
                                n.e(9796),
                                n.e(952068),
                                n.e(768289),
                                n.e(772565),
                                n.e(195707),
                                n.e(533781),
                                n.e(328276),
                                n.e(592e3),
                                n.e(524434),
                                n.e(882304),
                                n.e(984),
                                n.e(226229),
                                n.e(118994),
                                n.e(516497),
                                n.e(24774),
                                n.e(326794),
                                n.e(670870),
                                n.e(684231),
                                n.e(570690),
                                n.e(886631),
                                n.e(435860),
                                n.e(426782),
                                n.e(406322),
                                n.e(942571),
                                n.e(464759),
                                n.e(763343),
                                n.e(194704),
                                n.e(274461),
                                n.e(830560),
                                n.e(384054),
                                n.e(847131),
                                n.e(572430),
                                n.e(816348),
                                n.e(165291),
                                n.e(109383),
                                n.e(818291),
                                n.e(243794),
                                n.e(519435),
                                n.e(990185),
                                n.e(752924),
                                n.e(849162),
                                n.e(660201),
                                n.e(770925),
                                n.e(179301),
                                n.e(918347),
                                n.e(689521),
                                n.e(237403),
                                n.e(10886),
                                n.e(84993),
                                n.e(592268),
                                n.e(374962),
                                n.e(553627),
                                n.e(887141),
                                n.e(736919),
                                n.e(440636),
                                n.e(568960),
                                n.e(459257),
                                n.e(924697),
                                n.e(549009),
                                n.e(339715),
                                n.e(985301),
                                n.e(981059),
                                n.e(631323),
                                n.e(464452),
                                n.e(243852),
                                n.e(714144),
                                n.e(816027),
                                n.e(458855),
                                n.e(305161),
                                n.e(845486),
                                n.e(401425),
                                n.e(120561),
                                n.e(880186),
                                n.e(58353),
                                n.e(17256),
                                n.e(377016),
                                n.e(433665),
                                n.e(324469),
                                n.e(70379),
                                n.e(417333),
                                n.e(905581),
                                n.e(834552),
                                n.e(993103),
                                n.e(863232),
                                n.e(708757),
                                n.e(295507),
                                n.e(332447),
                                n.e(959880),
                                n.e(174016),
                                n.e(22921),
                                n.e(910471),
                                n.e(11301),
                                n.e(430858),
                                n.e(861060),
                                n.e(364827),
                                n.e(77333),
                                n.e(626565),
                                n.e(257980),
                                n.e(960235),
                                n.e(585968),
                                n.e(486137),
                                n.e(80421),
                                n.e(206027),
                                n.e(393471),
                                n.e(177641),
                                n.e(198329),
                                n.e(678157),
                                n.e(942374),
                                n.e(223219),
                                n.e(130795),
                                n.e(10866),
                                n.e(313537),
                                n.e(40291),
                                n.e(733115),
                                n.e(397270),
                                n.e(406222),
                                n.e(393336),
                                n.e(761597),
                                n.e(373122),
                                n.e(649408),
                                n.e(221856),
                                n.e(186212),
                                n.e(755936),
                                n.e(147662),
                                n.e(316344),
                                n.e(973973),
                                n.e(274501),
                                n.e(544571),
                                n.e(692990),
                                n.e(714496),
                                n.e(305834),
                                n.e(745959),
                                n.e(858529),
                                n.e(481987),
                                n.e(595653),
                                n.e(958038),
                                n.e(532039),
                                n.e(719466),
                                n.e(14234),
                                n.e(576909),
                                n.e(830228),
                                n.e(27355),
                                n.e(953665),
                                n.e(406174),
                                n.e(126437),
                                n.e(481647),
                                n.e(713708),
                                n.e(776273),
                                n.e(749248),
                                n.e(704434),
                                n.e(900361),
                                n.e(21921),
                                n.e(885533),
                                n.e(282833),
                                n.e(393766),
                                n.e(258398),
                                n.e(676418),
                                n.e(572963),
                                n.e(70833),
                                n.e(897073),
                                n.e(161275),
                                n.e(761253),
                                n.e(401518),
                                n.e(166495),
                                n.e(362274),
                                n.e(570849),
                                n.e(45072),
                                n.e(139970),
                                n.e(173764),
                                n.e(188689),
                                n.e(830221),
                                n.e(858164),
                                n.e(521930),
                                n.e(357688),
                                n.e(308555),
                                n.e(977547),
                                n.e(508371),
                                n.e(554241),
                                n.e(41250),
                                n.e(724303),
                                n.e(179049),
                                n.e(132737),
                                n.e(53102),
                                n.e(146070),
                                n.e(538733),
                                n.e(658216),
                                n.e(854622),
                                n.e(629482),
                                n.e(590365),
                                n.e(989088),
                                n.e(37977),
                                n.e(136149),
                                n.e(470068),
                                n.e(817989),
                                n.e(88599),
                                n.e(780262),
                                n.e(720590),
                                n.e(147626),
                                n.e(870663),
                                n.e(727779),
                                n.e(412743),
                                n.e(585503),
                                n.e(437065),
                                n.e(203589),
                                n.e(709640),
                                n.e(382465),
                                n.e(294857),
                                n.e(15481),
                                n.e(179745),
                                n.e(952548),
                                n.e(893917),
                                n.e(668802),
                                n.e(631358),
                                n.e(459414),
                                n.e(335395),
                                n.e(636373),
                                n.e(19220),
                                n.e(945413),
                                n.e(402026),
                                n.e(163235),
                                n.e(230664),
                                n.e(655708),
                                n.e(632756),
                                n.e(564850),
                                n.e(941040),
                                n.e(124791),
                                n.e(35771),
                                n.e(648344),
                                n.e(170104),
                                n.e(491793),
                                n.e(889638),
                                n.e(256769),
                                n.e(553984),
                                n.e(902564),
                                n.e(142867),
                                n.e(884601),
                                n.e(782969),
                                n.e(30441),
                                n.e(704727),
                                n.e(214285),
                                n.e(248330),
                                n.e(255580),
                                n.e(373004),
                                n.e(803332),
                                n.e(776766),
                                n.e(938149),
                                n.e(408362),
                                n.e(741678),
                                n.e(504370),
                                n.e(96539),
                                n.e(474610),
                                n.e(852617),
                                n.e(102698),
                                n.e(125964),
                                n.e(415266),
                                n.e(787139),
                                n.e(608557),
                                n.e(737021),
                                n.e(775951),
                                n.e(495786),
                                n.e(428967),
                                n.e(254506),
                                n.e(447937),
                                n.e(874342),
                                n.e(138830),
                                n.e(258033),
                                n.e(757901),
                                n.e(976516),
                                n.e(400501),
                                n.e(985794),
                                n.e(770182),
                                n.e(695358),
                                n.e(767837),
                                n.e(473384),
                                n.e(129080),
                                n.e(432209),
                                n.e(996868),
                                n.e(506620),
                                n.e(238232),
                                n.e(368062),
                                n.e(859991),
                                n.e(667092),
                                n.e(225575),
                                n.e(608032),
                                n.e(477970),
                                n.e(709371),
                                n.e(466718),
                                n.e(330724),
                                n.e(599719),
                                n.e(318939),
                                n.e(178048),
                                n.e(556868),
                                n.e(823300),
                                n.e(987478),
                                n.e(961508),
                                n.e(67422),
                                n.e(726511),
                                n.e(140667),
                                n.e(713567),
                                n.e(444567),
                                n.e(695170),
                                n.e(606949),
                                n.e(540715),
                                n.e(506045),
                                n.e(147540),
                                n.e(294607),
                                n.e(618706),
                                n.e(363430),
                                n.e(708536),
                                n.e(25572),
                                n.e(215920),
                                n.e(439089),
                                n.e(982730),
                                n.e(800872),
                                n.e(452531),
                                n.e(573330),
                                n.e(65393),
                                n.e(275859),
                                n.e(257113),
                                n.e(416236),
                            ]).then(n.bind(n, 74314));
                            return (n) => (0, r.jsx)(e, { ...n, sourceQuestContent: t, savingRef: l });
                        },
                        {
                            modalKey: tT,
                            contextKey: s,
                            onCloseRequest: () => {
                                l.current || (0, tO.Oo)(tT, s);
                            },
                        },
                    );
                })({ sourceQuestContent: ei.uF.QUEST_HOME_HERO_SHELF }));
        }, [t.id, s, l]);
    return (0, r.jsxs)("div", {
        className: o()(tH.Nr, tQ.Tp, { [tQ.D7]: !a }),
        [e0]: !0,
        ...u,
        children: [
            (0, r.jsxs)("div", {
                className: tH.$_,
                children: [
                    (0, r.jsx)("div", { className: tH.qx }),
                    (0, r.jsx)(eQ, { alt: "", ariaHidden: !0, width: 244, className: tH.yr }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: tH.Qs,
                children: [
                    (0, r.jsx)(eM.animated.div, {
                        className: tH.ns,
                        style: {
                            maskImage: (0, eM.to)(
                                [f, g],
                                (e, t) =>
                                    `linear-gradient(to bottom, rgba(0,0,0,${1 - e}), #000 48px, #000 calc(100% - 48px), rgba(0,0,0,${1 - t}))`,
                            ),
                        },
                        children: (0, r.jsx)(ek.vN, {
                            children: (0, r.jsx)(eq.zC, {
                                ref: c,
                                className: tH.zH,
                                onScroll: h,
                                children: (0, r.jsxs)(j.B, {
                                    gap: 20,
                                    children: [
                                        (0, r.jsxs)(j.B, {
                                            gap: 12,
                                            children: [
                                                (0, r.jsx)(eg.D, {
                                                    variant: "heading-xl/semibold",
                                                    color: "text-strong",
                                                    children: eK.intl.string(tL.default["fShp/D"]),
                                                }),
                                                (0, r.jsx)(ee.E, {
                                                    variant: "body-sm/medium",
                                                    color: "text-default",
                                                    children: eK.intl.format(tL.default.lCtBoO, {
                                                        nonPremiumEndDate: tM.Fg,
                                                        premiumEndDate: tM.zv,
                                                    }),
                                                }),
                                            ],
                                        }),
                                        (0, r.jsx)(j.B, {
                                            gap: 8,
                                            children: tU.map((e) => {
                                                let { key: t, icon: n, label: s } = e;
                                                return (0, r.jsxs)(
                                                    j.B,
                                                    {
                                                        direction: "horizontal",
                                                        align: "center",
                                                        gap: 8,
                                                        children: [
                                                            (0, r.jsx)(n, {
                                                                size: "refresh_sm",
                                                                color: eL.A.colors.ICON_DEFAULT.css,
                                                            }),
                                                            (0, r.jsx)(ee.E, {
                                                                variant: "body-sm/medium",
                                                                color: "text-default",
                                                                children: eK.intl.string(s),
                                                            }),
                                                        ],
                                                    },
                                                    t,
                                                );
                                            }),
                                        }),
                                    ],
                                }),
                            }),
                        }),
                    }),
                    (0, r.jsx)("div", {
                        children: (0, r.jsx)(x.$, {
                            variant: "primary",
                            fullWidth: !0,
                            text: eK.intl.string(tL.default["KX1/jp"]),
                            onClick: v,
                        }),
                    }),
                ],
            }),
        ],
    });
}
var tF = n(418842),
    tP = n(129230),
    tk = n(403362),
    tq = n(856383);
let tw = (0, $.mj)({
    name: "2026-06-hero-shelf-ad-tile",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var tB = n(792620);
function tV(e, t, n) {
    if (null != n) {
        if (e) {
            let e = n.to({ range: [0, 0.25, 0.75, 1], output: [0, 1, 1, 0] });
            return {
                "--custom-quest-highlight-blur": (0, eM.to)([e], (e) => `${25 * e}px`),
                "--custom-quest-highlight-alpha": (0, eM.to)([e], (e) => `${e}`),
            };
        }
        if (t)
            return { opacity: (0, eM.to)([n.to({ range: [0, 0.25, 0.75, 1], output: [1, 0.4, 0.4, 1] })], (e) => e) };
    }
}
var tW = n(531525),
    tG = n(726356);
function tK(e) {
    let { hero: t, shelfQuests: n, isBannerLoading: s, onQuestCtaClick: l } = e,
        a = (0, tF.C)(),
        { enabled: u } = tw.useConfig({ location: tj.rE.QUEST_HOME_DESKTOP }),
        c = (0, P.kV)(t),
        d = ty(),
        E = u && !c,
        h = i.useMemo(
            () =>
                E
                    ? (n
                          .map((e) => (0, tB.xc)(e) ?? (0, tB._3)(e)?.at(0) ?? null)
                          .filter(tk.Vq)
                          .at(0) ?? null)
                    : null,
            [n, E],
        ),
        { isLoading: f, data: g, error: x } = (0, ey.I)(h),
        v = (0, eR.A)(g),
        C = E && null != g && !v;
    i.useEffect(() => {
        E &&
            null != h &&
            null != x &&
            (tP.default.track(ej.HAw.AD_ASSET_LOADING_FAILURE, {
                source: tj.rE.QUEST_HOME_HERO_SHELF_DESKTOP,
                ad_creative_id: t.id,
                ad_creative_type: m.p.QUEST_HOME_HERO,
                application_ids: [h],
            }),
            tq.A.captureException(x, { tags: { source: tj.rE.QUEST_HOME_HERO_SHELF_DESKTOP } }));
    }, [E, x, t.id, h]);
    let _ = i.useMemo(
            () => (C ? (null != t.shelfImage ? t.shelfImage : (g?.getCoverURL(512) ?? null)) : null),
            [C, t, g],
        ),
        S = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
                [n, s] = i.useState(void 0);
            return (
                i.useEffect(() => {
                    let n = !1;
                    return (
                        (null != e
                            ? (async function (e) {
                                  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
                                      n = eI.get(`${e}-${t}`);
                                  if (null != n) return n;
                                  let s = (
                                      await new Promise((n, s) => {
                                          let l = new Image();
                                          ((l.crossOrigin = "Anonymous"),
                                              (l.onerror = (e) => {
                                                  (s(e),
                                                      null != l && ((l.onerror = null), (l.onload = null)),
                                                      (l = null));
                                              }),
                                              (l.onload = () => {
                                                  null != l
                                                      ? (n((0, eb.Sf)(l, t, 10)),
                                                        (l.onerror = null),
                                                        (l.onload = null),
                                                        (l = null))
                                                      : s("image is null");
                                              }),
                                              (l.src = e));
                                      })
                                  ).map((e) => {
                                      let [t, n, s] = e;
                                      return (0, eT.Ob)(t, n, s);
                                  });
                                  return (eI.set(`${e}-${t}`, s), s);
                              })(e, t)
                            : Promise.resolve(void 0)
                        )
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
            i.useMemo(() => (null != _ ? (0, eo.UX)(_, { format: "webp", width: 400, height: 600 }) : null), [_]),
            8,
        ),
        p = i.useMemo(() => (null == S ? null : (0, eN.Z)(S)), [S]),
        N = i.useMemo(() => {
            if (null != p)
                return {
                    "--custom-hero-shelf-scrim-gradient-start": p[0],
                    "--custom-hero-shelf-scrim-gradient-end": p[1],
                };
        }, [p]);
    return s || f
        ? (0, r.jsx)(tz, { numShelfCards: n.length + 1, hasWideLeadingTile: u || c })
        : (0, r.jsx)(e6, {
              className: o()(tG.vo, { [tQ.vo]: c }),
              overflowAmount: 25,
              maskWidth: eY(a),
              maskMarginMultiplier: 0.75,
              children: (0, r.jsxs)(j.B, {
                  className: tG.I2,
                  direction: "horizontal",
                  fullWidth: !1,
                  gap: 20,
                  style: N,
                  children: [
                      c &&
                          (0, r.jsx)(eE.Z, {
                              adContentId: t.id,
                              adCreativeType: m.p.QUEST_HOME_HERO,
                              questContent: ei.uF.QUEST_HOME_HERO_SHELF,
                              questContentPosition: 0,
                              sourceQuestContent: ei.uF.QUEST_HOME_HERO_SHELF,
                              children: (e, n) =>
                                  (0, r.jsx)("div", {
                                      ref: (t) => {
                                          e.current = t;
                                      },
                                      children: (0, r.jsx)(tD, { hero: t, contentPosition: 0, impressionRef: n }),
                                  }),
                          }),
                      !u &&
                          !c &&
                          (0, r.jsx)(eE.Z, {
                              adContentId: t.id,
                              adCreativeType: m.p.QUEST_HOME_HERO,
                              questContent: ei.uF.QUEST_HOME_HERO_SHELF,
                              questContentPosition: 0,
                              sourceQuestContent: ei.uF.QUEST_HOME_HERO_SHELF,
                              children: (e, n) =>
                                  (0, r.jsx)("div", {
                                      ref: (t) => {
                                          e.current = t;
                                      },
                                      children: (0, r.jsx)(tp, { hero: t, contentPosition: 0, impressionRef: n }),
                                  }),
                          }),
                      C &&
                          (0, r.jsx)(eE.Z, {
                              adContentId: t.id,
                              adCreativeType: m.p.QUEST_HOME_HERO,
                              questContent: ei.uF.QUEST_HOME_HERO_SHELF,
                              questContentPosition: 0,
                              sourceQuestContent: ei.uF.QUEST_HOME_HERO_SHELF,
                              children: (e, n) =>
                                  (0, r.jsx)("div", {
                                      ref: (t) => {
                                          e.current = t;
                                      },
                                      children: (0, r.jsx)(tN, {
                                          hero: t,
                                          game: g,
                                          shelfImage: _,
                                          contentPosition: 0,
                                          impressionRef: n,
                                      }),
                                  }),
                          }),
                      n.map((e, n) =>
                          (0, r.jsx)(
                              eE.Z,
                              {
                                  adContentId: t.id,
                                  adCreativeType: m.p.QUEST_HOME_HERO,
                                  relatedQuestId: e.id,
                                  questContent: ei.uF.QUEST_HOME_HERO_SHELF,
                                  questContentPosition: n + 1,
                                  sourceQuestContent: ei.uF.QUEST_HOME_HERO_SHELF,
                                  children: (s) =>
                                      (0, r.jsx)("div", {
                                          ref: (e) => {
                                              s.current = e;
                                          },
                                          children: (0, r.jsx)(tA, {
                                              heroId: t.id,
                                              quest: e,
                                              onQuestCtaClick: l,
                                              contentPosition: n + 1,
                                              className: c ? o()(tQ.Tp, { [tQ.D7]: !d }) : void 0,
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
function tz(e) {
    let { className: t, numShelfCards: n, hasWideLeadingTile: s } = e,
        l = (0, tF.C)(),
        i = s ? Math.max(n, 3) : Math.max(n, 4);
    return (0, r.jsx)(e6, {
        className: o()(tG.vo, t),
        overflowAmount: 25,
        maskWidth: eY(l),
        maskMarginMultiplier: 0.75,
        children: (0, r.jsx)(j.B, {
            className: tG.I2,
            direction: "horizontal",
            fullWidth: !1,
            gap: 20,
            "aria-hidden": !0,
            children: Array.from({ length: i }).map((e, t) =>
                (0, r.jsx)("div", { className: o()(tW.m, tG.W_, { [tG.E8]: s && 0 === t }) }, t),
            ),
        }),
    });
}
var t$ = n(74498);
function tY() {
    return (0, r.jsx)("div", { className: t$.Np });
}
function tX(e) {
    let { heroImage: t, heroVideo: n } = e,
        s = i.useRef(null);
    (0, eh.A)(s);
    let l = i.useMemo(() => (null != n ? (0, eo.WV)(n) : null) ?? t, [n, t]);
    return (0, r.jsx)(Z._M, {
        id: "QuestHomeHeroBackground_heroVideoWithImageFallback",
        children: (e) =>
            (0, r.jsx)(em.N, {
                showVideo: !0,
                imageRef: e,
                assetRef: s,
                imageAsset: {
                    alt: "",
                    className: t$.LY,
                    asset: { url: l, mimetype: (0, eo.vm)(l), isAnimated: !1 },
                    assetId: l,
                },
                videoAsset: {
                    alt: "",
                    className: t$.LY,
                    asset: { url: n, mimetype: (0, eo.vm)(n), isAnimated: !0 },
                    assetId: n,
                },
            }),
    });
}
function tJ(e) {
    let { heroImage: t, heroVideo: n } = e;
    return null == n
        ? (0, r.jsxs)("div", {
              className: t$.Tv,
              children: [
                  (0, r.jsx)(tY, {}),
                  (0, r.jsx)("div", {
                      className: t$.LO,
                      children: (0, r.jsx)(Z._M, {
                          id: "QuestHomeHeroBackground_heroImage",
                          children: (e) => (0, r.jsx)("img", { ref: e, className: t$.LY, src: t, alt: "" }),
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: o()(t$.LO, t$.jx, t$.hw),
                      children: (0, r.jsx)("img", { className: t$.LY, src: t, alt: "" }),
                  }),
                  (0, r.jsx)("div", {
                      className: o()(t$.LO, t$.jx, t$.Co),
                      children: (0, r.jsx)("img", { className: t$.LY, src: t, alt: "" }),
                  }),
              ],
          })
        : (0, r.jsxs)("div", {
              className: t$.Tv,
              children: [
                  (0, r.jsx)(tY, {}),
                  (0, r.jsx)("div", { className: t$.LO, children: (0, r.jsx)(tX, { heroImage: t, heroVideo: n }) }),
              ],
          });
}
function tZ(e) {
    let { hero: t, hasFetchedQuests: n, hasNoAccessibleQuests: s } = e,
        l = (0, eu.WS)(),
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
                    event: ej.HAw.QUEST_HOME_HERO_MISSING_QUESTS,
                    properties: { missing_quest_ids: e },
                    sourceQuestContent: ei.uF.QUEST_HOME_HERO,
                }));
        }, [n, s, t.id, t.questIds, l]),
        null
    );
}
function t0(e) {
    let { hero: t, onQuestCtaClick: n, isBannerLoading: s } = e,
        l = (0, E.bG)([er.A], () => er.A.quests),
        a = (0, E.bG)([er.A], () => er.A.lastFetchedCurrentQuests > 0),
        { shelfQuests: u, isShelfEnabled: c } = (0, J.t9)(t),
        { dismissQuestHomeHeroContent: d } = (0, ep.I)();
    i.useEffect(() => {
        d();
    }, [d]);
    let h = i.useMemo(() => t.questIds?.filter((e) => l.has(e)) ?? [], [l, t.questIds]),
        f = h[0],
        { enabled: v } = ea.Ay.useConfig({ location: tj.rE.QUEST_HOME_HERO });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(eE.Z, {
                adContentId: t.id,
                adCreativeType: m.p.QUEST_HOME_HERO,
                questContent: ei.uF.QUEST_HOME_HERO,
                sourceQuestContent: ei.uF.QUEST_HOME_HERO,
                children: (e, l) =>
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(tZ, { hero: t, hasFetchedQuests: a, hasNoAccessibleQuests: 0 === h.length }),
                            (0, r.jsx)(eS, {
                                ref: (t) => {
                                    e.current = s ? null : t;
                                },
                                adContentId: t.id,
                                className: o()({ [t$.lX]: s }),
                                topContent: (0, r.jsxs)(j.B, {
                                    direction: "horizontal",
                                    justify: "space-between",
                                    align: "start",
                                    children: [
                                        null != t.sponsorImage &&
                                            (0, r.jsx)(Z._M, {
                                                id: "QuestHomeHeroBackground_sponsorImage",
                                                children: (e) =>
                                                    (0, r.jsx)("img", {
                                                        ref: e,
                                                        src: t.sponsorImage,
                                                        alt: "",
                                                        className: t$.wm,
                                                    }),
                                            }),
                                        (0, r.jsx)(ee.E, {
                                            color: "text-strong",
                                            variant: "body-sm/normal",
                                            className: t$.yu,
                                            children: eK.intl.string(eK.t.OJjFi5),
                                        }),
                                    ],
                                }),
                                title: t.labelTitle,
                                subtitle: t.labelSubtitle,
                                overlay:
                                    v &&
                                    (0, r.jsx)(et.D, {
                                        tag: "div",
                                        className: t$.fj,
                                        "aria-label": t.cta.buttonLabel,
                                        onClick: () => {
                                            (0, ed._Q)(
                                                { adContentId: t.id, adCreativeType: m.p.QUEST_HOME_HERO, cta: t.cta },
                                                {
                                                    content: ei.uF.QUEST_HOME_HERO_BANNER,
                                                    ctaContent: ec.Cy.OPEN_GAME_LINK,
                                                    impressionId: l.current?.getId(),
                                                    sourceQuestContent: ei.uF.QUEST_HOME_HERO,
                                                },
                                            );
                                        },
                                    }),
                                buttons: (0, r.jsxs)(g.e, {
                                    children: [
                                        (0, r.jsx)(x.$, {
                                            onClick: () => {
                                                (0, ed._Q)(
                                                    {
                                                        adContentId: t.id,
                                                        adCreativeType: m.p.QUEST_HOME_HERO,
                                                        cta: t.cta,
                                                    },
                                                    {
                                                        content: ei.uF.QUEST_HOME_HERO,
                                                        ctaContent: ec.Cy.OPEN_GAME_LINK,
                                                        impressionId: l.current?.getId(),
                                                        sourceQuestContent: ei.uF.QUEST_HOME_HERO,
                                                    },
                                                );
                                            },
                                            size: "md",
                                            text: t.cta.buttonLabel,
                                            variant: "overlay-primary",
                                        }),
                                        !c &&
                                            null != f &&
                                            (0, r.jsx)(x.$, {
                                                onClick: () => {
                                                    (n(f),
                                                        (0, es.r)({
                                                            type: el.F.CLICK_INTERNAL,
                                                            adCreativeType: m.p.QUEST_HOME_HERO,
                                                            adCreativeId: t.id,
                                                            questContentCTA: ec.Cy.VIEW_QUESTS,
                                                            surfaceId: ei.uF.QUEST_HOME_HERO,
                                                            sourceQuestContent: ei.uF.QUEST_HOME_HERO,
                                                        }));
                                                },
                                                size: "md",
                                                text: eK.intl.string(eK.t["th2+0j"]),
                                                variant: "color-mix",
                                            }),
                                    ],
                                }),
                                background: (0, r.jsx)(tJ, { heroImage: t.heroImage, heroVideo: t.heroVideo }),
                            }),
                        ],
                    }),
            }),
            c && (0, r.jsx)(tK, { hero: t, isBannerLoading: s, shelfQuests: u, onQuestCtaClick: n }),
        ],
    });
}
function t1() {
    return (0, r.jsx)("div", { className: o()(eC.iE, eC.FG, eC.B3), children: (0, r.jsx)(en.y, {}) });
}
var t3 = n(73153),
    t7 = n(343559);
n(667532);
var t2 = n(890497),
    t5 = n(663417),
    t6 = n(265872),
    t8 = n(624479),
    t4 = n(416052),
    t9 = n(417098);
function ne(e) {
    let { error: t } = e,
        n = t.getAnyErrorMessage();
    return (0, r.jsx)(t9.$T, {
        color: t9.Hv.DANGER,
        children: (0, r.jsx)("div", { children: null != n ? n : eK.intl.string(eK.t.ZErSg5) }),
    });
}
var nt = n(602853),
    nn = n(817281),
    ns = n(688810),
    nl = n(270746),
    nr = n(413599),
    ni = n(912875);
let na = function () {
    let { analyticsLocations: e } = (0, ns.Ay)(),
        t = (0, E.bG)([nr.A], () => nr.A.theme),
        n = i.useRef(null);
    i.useEffect(() => {
        null == n.current && (n.current = t);
    }, [t]);
    let s = (0, nt.r)(eL.A.colors.BACKGROUND_BASE_LOW, ej.NJ8.LIGHT),
        l = (0, nt.r)(eL.A.colors.BACKGROUND_BASE_LOW, ej.NJ8.DARK),
        a = (0, nt.r)(eL.A.colors.BACKGROUND_BASE_LOW, ej.NJ8.ONYX),
        o = i.useMemo(
            () => [
                { theme: ej.NJ8.LIGHT, label: eK.t.K2sFfo, color: s.hex() },
                { theme: ej.NJ8.DARK, label: eK.t.b8Cei3, color: l.hex() },
                { theme: ej.NJ8.ONYX, label: eK.t.Do4ZJx, color: a.hex() },
            ],
            [s, l, a],
        ),
        u = i.useCallback(
            (t) => {
                ((0, nl.X8)({ isPersisted: !0, analyticsLocations: e, themeName: `default ${t}` }),
                    (0, nn.u_)({ theme: t }));
            },
            [e],
        ),
        c = i.useCallback(() => {
            null != n.current && u(n.current);
        }, [u]);
    return (0, r.jsx)("div", {
        className: ni.N,
        children: (0, r.jsxs)("div", {
            className: ni.t7,
            children: [
                o.map((e) =>
                    (0, r.jsxs)(
                        et.D,
                        {
                            tag: "div",
                            className: ni.Du,
                            onClick: () => u(e.theme),
                            "aria-label": eK.intl.string(e.label),
                            "aria-pressed": t === e.theme,
                            children: [
                                (0, r.jsx)("div", {
                                    className: `${ni.WT} ${t === e.theme ? ni.TA : ""}`,
                                    style: { backgroundColor: e.color },
                                }),
                                (0, r.jsx)("span", { className: ni.i, children: eK.intl.string(e.label) }),
                            ],
                        },
                        e.theme,
                    ),
                ),
                (0, r.jsx)(eB.K, {
                    onClick: c,
                    "aria-label": eK.intl.string(eK.t.yBZMsQ),
                    icon: t5.RefreshIcon,
                    variant: "secondary",
                }),
            ],
        }),
    });
};
var no = n(219354);
let nu = function (e) {
    let { questId: t, setQuestId: n, quest: s, refreshQuest: l } = e,
        [a, o] = i.useState(!1),
        [u, c] = i.useState(!1),
        d = i.useRef(null),
        m = (0, J.pT)(),
        h = (0, E.bG)([er.A], () => (null != t ? er.A.getFetchQuestPreviewError(t) : null), [t]),
        f = (0, E.bG)([er.A], () => null != t && er.A.isFetchingQuestPreview(t), [t]),
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
                    await (0, t7.Yb)(t, 1);
                } finally {
                    o(!1);
                }
            }
        }, [t, o]),
        C = i.useCallback(async () => {
            if (null != t) {
                o(!0);
                try {
                    await (0, t7.UZ)(t);
                } finally {
                    o(!1);
                }
            }
        }, [t, o]),
        _ = i.useCallback(async () => {
            if (null != t) {
                o(!0);
                try {
                    let e = Math.random();
                    await (0, t7.Yb)(t, e);
                } finally {
                    o(!1);
                }
            }
        }, [t, o]),
        S = i.useCallback(
            (e) => {
                (0, K.uJ)(e) || null == n || n(e);
            },
            [n],
        );
    return (0, r.jsxs)("div", {
        className: no.Fr,
        children: [
            (0, r.jsx)("div", {
                children: (0, r.jsx)("div", {
                    className: no.Br,
                    children: (0, r.jsxs)("div", {
                        className: no.bo,
                        children: [
                            (0, r.jsx)(na, {}),
                            (0, r.jsxs)("div", {
                                className: no.b8,
                                children: [
                                    (0, r.jsx)(
                                        t2.Z,
                                        {
                                            selectionMode: "single",
                                            label: "Quest ID",
                                            hideLabel: !0,
                                            options: v,
                                            value: t,
                                            onSelectionChange: S,
                                            placeholder: eK.intl.string(eK.t.Zw8jxn),
                                            clearable: !0,
                                            customMatchSorter: (e, t) => {
                                                if ((0, K.uJ)(t?.trim())) return e;
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
                                    (0, r.jsx)(eB.K, {
                                        onClick: l,
                                        "aria-label": eK.intl.string(eK.t.wzzjk9),
                                        icon: t5.RefreshIcon,
                                        loading: f,
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
                    className: no.in,
                    children: (0, r.jsxs)(g.e, {
                        className: no.xv,
                        children: [
                            (0, r.jsx)(x.$, {
                                onClick: j,
                                disabled: a,
                                loading: a,
                                variant: "secondary",
                                text: eK.intl.string(eK.t.jQEfRT),
                            }),
                            (0, r.jsx)(x.$, {
                                onClick: C,
                                disabled: a,
                                loading: a,
                                variant: "secondary",
                                text: eK.intl.string(eK.t.taqkwK),
                            }),
                            (0, r.jsx)(x.$, {
                                onClick: _,
                                disabled: a,
                                loading: a,
                                variant: "secondary",
                                text: eK.intl.string(eK.t.cKSLr4),
                            }),
                            (0, r.jsx)(t6.Y, {
                                targetElementRef: d,
                                shouldShow: u,
                                onRequestClose: () => c(!1),
                                position: "bottom",
                                align: "center",
                                renderPopout: () =>
                                    (0, r.jsx)("div", {
                                        className: no.PP,
                                        children: (0, r.jsx)("div", {
                                            className: no.sH,
                                            children: (0, r.jsx)(t4.A, {
                                                value: tC.Sb.QUEST_PREVIEW_TOOL_2(t),
                                                text: eK.intl.string(eK.t.WqhZss),
                                                autoFocus: !0,
                                            }),
                                        }),
                                    }),
                                children: (e) =>
                                    (0, r.jsx)(eB.K, {
                                        ...e,
                                        buttonRef: d,
                                        onClick: () => c(!u),
                                        "aria-label": eK.intl.string(eK.t.rNGQfD),
                                        icon: t8.CopyIcon,
                                        variant: "secondary",
                                    }),
                            }),
                        ],
                    }),
                }),
            null != h ? (0, r.jsx)(ne, { error: h }) : null,
            f ? (0, r.jsx)(en.y, {}) : null,
        ],
    });
};
var nc = n(95362),
    nd = n(761508),
    nm = n(425069);
function nE() {
    return (0, r.jsx)("div", { className: nm.y });
}
var nh = n(834615),
    nf = n(34665);
let ng = function (e) {
    let { quest: t } = e;
    return (0, r.jsx)("div", {
        className: nf.x3,
        children: (0, r.jsxs)("div", {
            className: nf.B0,
            children: [
                (0, r.jsx)(eg.D, {
                    className: nf.R_,
                    variant: "heading-sm/semibold",
                    children: eK.intl.string(eK.t.L2mlUb),
                }),
                (0, r.jsx)(eE.R, {
                    questOrQuests: t,
                    questContent: ei.uF.ACTIVITY_PANEL,
                    sourceQuestContent: ei.uF.ACTIVITY_PANEL,
                    children: (e) =>
                        (0, r.jsx)("div", {
                            ref: (t) => {
                                e.current = t;
                            },
                            children: (0, r.jsx)(nh.default, { quest: t }),
                        }),
                }),
            ],
        }),
    });
};
var nx = n(66246),
    nv = n(717695),
    nj = n(466209),
    nC = n(83978);
let n_ = function (e) {
    let { quest: t } = e;
    return (0, r.jsx)("div", {
        className: nf.x3,
        children: (0, r.jsxs)("div", {
            className: nj.wp,
            children: [
                (0, r.jsx)(eg.D, {
                    className: nj.Oo,
                    variant: "heading-sm/semibold",
                    children: eK.intl.string(eK.t.rjVPdM),
                }),
                (0, r.jsx)("div", {
                    className: nj.RE,
                    children: (0, r.jsx)("div", {
                        className: nj.Z,
                        children: (0, r.jsx)("div", {
                            className: nC.C3,
                            children: (0, r.jsx)(nv.A, {
                                children: (0, r.jsx)(Z.y5, {
                                    source: "preview",
                                    adCreativeId: t.id,
                                    adCreativeType: m.p.QUEST,
                                    children: (0, r.jsx)(nx.QuestBarQuestContent, { quest: t }),
                                }),
                            }),
                        }),
                    }),
                }),
            ],
        }),
    });
};
var nS = n(10394);
function np(e) {
    let { quest: t } = e;
    return (0, r.jsx)("div", {
        className: nf.x3,
        children: (0, r.jsxs)("div", {
            className: nf.B0,
            children: [
                (0, r.jsx)(eg.D, {
                    className: nf.R_,
                    variant: "heading-sm/semibold",
                    children: eK.intl.string(eK.t.gWinpQ),
                }),
                (0, r.jsx)("div", {
                    className: nf.YT,
                    children: (0, r.jsx)(nS.A, {
                        channelId: "preview-channel-id",
                        previewQuest: t,
                        isParticipatingOverride: !1,
                    }),
                }),
            ],
        }),
    });
}
var nN = n(632623),
    nA = n(622409);
let nO = function (e) {
    let { questId: t } = e;
    return (0, r.jsx)("div", {
        className: nf.x3,
        children: (0, r.jsxs)("div", {
            className: nf.B0,
            children: [
                (0, r.jsx)(eg.D, { variant: "heading-sm/semibold", children: eK.intl.string(eK.t.IcljUu) }),
                (0, r.jsx)("div", {
                    className: nA.wu,
                    children: (0, r.jsx)("span", { className: nA.cy, children: eK.intl.string(eK.t.q97mEu) }),
                }),
                (0, r.jsx)("div", {
                    className: nA.oU,
                    children: (0, r.jsx)("div", {
                        className: nA.zx,
                        children: (0, r.jsx)("div", {
                            className: nA.Lj,
                            children: (0, r.jsx)("div", {
                                className: nA.n0,
                                children: (0, r.jsx)(nN.A, { questId: t }),
                            }),
                        }),
                    }),
                }),
            ],
        }),
    });
};
var nT = n(731388),
    nb = n(484810);
function nI(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", { className: nb.y, children: t });
}
var nR = n(612324),
    ny = n(365199),
    nM = n(270045),
    nL = n(79545),
    nH = n(173936),
    nQ = n(914410),
    nU = n(426110),
    nD = n(339350),
    nF = n(782134),
    nP = n(271536),
    nk = n(768622),
    nq = n(793934),
    nw = n(662940),
    nB = n(977416);
let nV = 2 * tc.A.Millis.DAY,
    nW = 3 * tc.A.Millis.DAY,
    nG = new Map(e$.map((e) => [e.identifier, e])),
    nK = {
        [ez.DISCOVERED]: function (e, t) {
            let { discoveredAtByQuestId: n } = t;
            return e.slice().sort((e, t) => {
                var s, l;
                return ((s = n.get(e)), (l = n.get(t)), null == s || null == l ? 0 : l.localeCompare(s));
            });
        },
    };
function nz(e) {
    return e.features.includes(tj.Li.EXCLUDE_FROM_FEATURED);
}
function n$(e, t) {
    let n = nG.get(e)?.maxItems,
        s = t.get(e)?.length ?? 0;
    return null == n || s < n;
}
var nY = n(853978);
function nX(e) {
    let { quest: t, isHovering: n = !1 } = e,
        s = (0, nL.Pd)(t),
        l = (0, E.bG)([er.A], () => s === nL.UA.UNENROLLED && null != er.A.questEnrollmentBlockedUntil, [s]),
        a = (0, J.fc)(t),
        u = (0, J.I3)(t),
        c = i.useMemo(() => (0, nw.Dd)(t.config, s, l), [t.config, s, l]),
        d = i.useMemo(() => (0, nw.CK)(s, a, u, l), [s, a, u, l]),
        m = (function (e) {
            let t = (0, nL.Pd)(e),
                [n] = i.useState(() => Date.now()),
                s = i.useMemo(() => new Date(e.config.expiresAt), [e.config.expiresAt]),
                l = s.getTime() - n,
                r =
                    (function (e) {
                        switch (e) {
                            case nL.UA.UNENROLLED:
                            case nL.UA.ENROLLED:
                            case nL.UA.INCOMPLETE:
                                return !0;
                            case nL.UA.COMPLETED:
                            case nL.UA.CLAIMED:
                            case nL.UA.EXPIRED:
                            case nL.UA.EXPIRED_CLAIMABLE:
                            case nL.UA.EXPIRED_CLAIMED:
                                return !1;
                        }
                    })(t) &&
                    l < nW &&
                    l > 0,
                { days: a, hours: o, minutes: u, seconds: c } = (0, ti.A)(s, tc.A.Millis.SECOND, void 0, !r);
            return r && (0 !== a || 0 !== o || 0 !== u || 0 !== c)
                ? `${String(24 * a + o).padStart(2, "0")}:${String(u).padStart(2, "0")}:${String(c).padStart(2, "0")}`
                : null;
        })(t),
        h = null != m ? m : c;
    return (0, r.jsxs)("div", {
        className: o()(nY.fC, { [nY.R]: n }),
        children: [
            (0, r.jsxs)("div", {
                className: nY.qS,
                children: [
                    null != h &&
                        (0, r.jsx)(ee.E, {
                            variant: "body-xs/semibold",
                            className: nY.SJ,
                            color: "text-overlay-light",
                            children: h,
                        }),
                    null != h &&
                        null != d &&
                        (0, r.jsx)(ee.E, {
                            variant: "body-xs/semibold",
                            color: "text-overlay-light",
                            className: nY.If,
                            children: "\u2022",
                        }),
                    null != d &&
                        (0, r.jsxs)("span", {
                            className: nY.BA,
                            children: [
                                (function (e, t) {
                                    let n = { size: "xxs", className: nY.rF, color: "currentColor" };
                                    if (t) return (0, r.jsx)(nD.HourglassIcon, { ...n });
                                    switch ((0, nw.pv)(e)) {
                                        case nw.UK.PLAY:
                                            return (0, r.jsx)(tl.GameControllerIcon, { ...n });
                                        case nw.UK.WATCH:
                                            return (0, r.jsx)(nF.PlayIcon, { ...n });
                                        case nw.UK.ACTIVITY:
                                            return (0, r.jsx)(nP.QuestsMissionsIcon, { ...n });
                                        case nw.UK.INSTANT_PLAY:
                                            return (0, r.jsx)(nk.FlashIcon, { ...n });
                                        case nw.UK.ARENA:
                                            return (0, r.jsx)(nq.QuestsArenaIcon, { ...n });
                                    }
                                })(t, l),
                                (0, r.jsx)(ee.E, {
                                    variant: "body-xs/semibold",
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
                    className: o()(nY.qS, nY.WZ),
                    children: (0, r.jsx)(ee.E, {
                        variant: "body-xs/semibold",
                        color: "currentColor",
                        children: eK.intl.string(eK.t.SKNnqq),
                    }),
                }),
        ],
    });
}
var nJ = n(409626),
    nZ = n(870273),
    n0 = n(646917),
    n1 = n(866665),
    n3 = n(743368),
    n7 = n(452411),
    n2 = n(321538),
    n5 = n(964051);
function n6(e) {
    let { quest: t, questContent: n, sourceQuestContent: s, isHovering: l, contentPosition: i, rowIndex: a } = e,
        u = (0, nL.Pd)(t),
        { ctaOnHover: c } = ea.aD.useConfig({ location: tj.rE.QUEST_HOME_DESKTOP }),
        d = (0, E.bG)([er.A], () => u === nL.UA.UNENROLLED && null != er.A.questEnrollmentBlockedUntil, [u]),
        m = !(0, tB.no)(t) || ![nL.UA.ENROLLED, nL.UA.UNENROLLED, nL.UA.INCOMPLETE].includes(u),
        h = u === nL.UA.EXPIRED || u === nL.UA.EXPIRED_CLAIMED || (u === nL.UA.CLAIMED && (0, tB.GL)(t)),
        f = (0, J.do)({ quest: t, content: n, ctaContent: ec.Cy.OPEN_GAME_LINK, sourceQuestContent: s });
    return (0, r.jsxs)("div", {
        className: o()(n5.lO, { [n5.Fq]: l || !c }),
        onClick: (e) => e.stopPropagation(),
        children: [
            (0, r.jsx)("div", { className: n5.Cj }),
            (0, r.jsx)(ef.N, {
                theme: ej.NJ8.DARK,
                disableAdaptiveTheme: !0,
                children: (e) =>
                    (0, r.jsx)("div", {
                        className: o()(e, n5.tn),
                        children: (0, r.jsxs)(g.e, {
                            direction: "horizontal",
                            fullWidth: !0,
                            wrap: !1,
                            size: "md",
                            children: [
                                m &&
                                    (h
                                        ? (0, r.jsx)(x.$, {
                                              variant: "secondary",
                                              text: t.config.ctaConfig.buttonLabel,
                                              onClick: f,
                                          })
                                        : (0, r.jsx)(n1.m, {
                                              text: eK.intl.string(eK.t.LLLLPD),
                                              position: "top",
                                              align: "center",
                                              ariaHidden: !0,
                                              children: (0, r.jsx)(eB.K, {
                                                  variant: "secondary",
                                                  icon: n3.LinkExternalMediumIcon,
                                                  "aria-label": eK.intl.string(eK.t.LLLLPD),
                                                  onClick: f,
                                              }),
                                          })),
                                !h &&
                                    !d &&
                                    (0, r.jsx)(n7.A, {
                                        quest: t,
                                        surface: nL.V3.QUEST_HOME_TILE_V2_FOOTER,
                                        analyticsCtxQuestContent: n,
                                        analyticsCtxSourceQuestContent: s,
                                        analyticsCtxQuestContentPosition: i,
                                        analyticsCtxQuestContentRowIndex: a,
                                    }),
                                d &&
                                    (0, r.jsx)(x.$, {
                                        variant: "overlay-primary",
                                        text: eK.intl.string(eK.t.vY9GgG),
                                        onClick: () => (0, n2.m6)(t, n, s),
                                    }),
                            ],
                        }),
                    }),
            }),
        ],
    });
}
var n8 = n(403581),
    n4 = n(576761),
    n9 = n(41327);
function se(e) {
    let { onClick: t, questId: n, orbMultiplierEligibility: s } = e,
        l = (0, J.ZP)(n),
        i = (0, n4.B9)(s);
    if (null == l) return null;
    let a = i
        ? eK.intl.formatToPlainString(eK.t.l2UfLG, { bonusOrbMultiplier: l })
        : eK.intl.formatToPlainString(eK.t["G+mKoo"], { bonusOrbMultiplier: l });
    return (0, r.jsx)(et.D, {
        onClick: function (e) {
            null != l && (e.stopPropagation(), (0, n2.gC)(l, s), t?.());
        },
        "aria-label": a,
        children: (0, r.jsxs)("div", {
            className: n9.k,
            children: [
                (0, r.jsx)(n8.NitroWheelIcon, { size: "xs", color: "currentColor" }),
                (0, r.jsx)(ee.E, { variant: "body-sm/normal", color: "currentColor", className: n9.Q, children: a }),
            ],
        }),
    });
}
var st = n(947641),
    sn = n(194261),
    ss = n(106799),
    sl = n(476334);
function sr(e) {
    let { quest: t, questContent: n, sourceQuestContent: s, isHovering: l } = e,
        a = (0, E.bG)([to.default], () => to.default.getCurrentUser()),
        u = (0, th.mq)(t.config, a),
        c = (0, th.ks)(t.config),
        d = (0, th.wo)(t.config, a),
        { completedRatio: m } = (0, J.O9)(t),
        h = (0, nL.Pd)(t),
        f = (0, J.Hv)(),
        g = h === nL.UA.CLAIMED || h === nL.UA.EXPIRED_CLAIMED,
        x = g || h === nL.UA.COMPLETED || h === nL.UA.EXPIRED_CLAIMABLE,
        v = (0, F.ix)({ quest: t, questContent: n, sourceQuestContent: s }),
        j = i.useCallback(
            (e) => {
                if ((e.stopPropagation(), f && !g)) {
                    ((0, ev.Y5)({
                        questId: t.id,
                        questContent: n,
                        questContentCTA: ec.Cy.QUEST_ACCESS_SUSPENDED,
                        sourceQuestContent: s,
                    }),
                        (0, n2.FS)());
                    return;
                }
                v();
            },
            [v, f, g, t.id, n, s],
        ),
        C = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(tx.A, {
                    quest: t,
                    location: tj.rE.QUEST_HOME_DESKTOP,
                    questContent: n,
                    autoplay: l,
                    lazyLoad: !0,
                    className: sl.al,
                    fullWidth: !0,
                    sourceQuestContent: s,
                }),
                g &&
                    (0, r.jsx)("div", {
                        className: sl.EY,
                        children: (0, r.jsx)(st.CheckmarkLargeBoldIcon, {
                            className: sl.AM,
                            size: "sm",
                            color: "currentColor",
                        }),
                    }),
                h === nL.UA.EXPIRED &&
                    (0, r.jsx)("div", {
                        className: sl.EY,
                        children: (0, r.jsx)(sn.LockIcon, { size: "sm", className: sl.Sz, color: "currentColor" }),
                    }),
            ],
        }),
        _ = (0, r.jsx)("div", { className: h === nL.UA.UNENROLLED ? sl.fm : sl.n5, children: C }),
        S = (0, r.jsx)(tg.A, { size: 66, percentComplete: m, useAltStyle: !0, children: _ }),
        p = x
            ? (0, r.jsx)(et.D, {
                  className: sl.q9,
                  onClick: j,
                  "aria-label": g
                      ? (0, th.r7)(t.config)
                          ? eK.intl.string(eK.t.bAGFz3)
                          : eK.intl.string(eK.t.vTgCWx)
                      : eK.intl.string(eK.t.cfY4PE),
                  children: S,
              })
            : S;
    return (0, r.jsxs)("div", {
        className: o()(sl.CZ, { [sl.Pv]: l }),
        children: [
            (0, r.jsx)(ef.N, {
                theme: ej.NJ8.DARK,
                disableAdaptiveTheme: !0,
                children: (e) =>
                    (0, r.jsx)("div", {
                        className: o()(e, sl.tE, { [sl.cB]: l }),
                        children: h === nL.UA.UNENROLLED ? _ : p,
                    }),
            }),
            (0, r.jsxs)("div", {
                className: o()(sl.FS, { [sl.IR]: l }),
                children: [
                    (0, r.jsx)(ee.E, {
                        variant: "body-sm/medium",
                        className: sl.$K,
                        children: t.config.cosponsorMetadata?.name ?? t.config.messages.gamePublisher,
                    }),
                    (0, r.jsxs)("div", {
                        className: o()(sl.oV, { [sl.FJ]: l }),
                        children: [
                            c && (0, r.jsx)(ss.A, { className: sl.Kq, customSize: 14 }),
                            (0, r.jsx)(
                                ee.E,
                                {
                                    variant: "body-md/medium",
                                    className: sl.zN,
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
var si = n(604970);
function sa(e) {
    let { quest: t, questContent: n, isHovering: s, sourceQuestContent: l, contentPosition: a, rowIndex: u } = e,
        c = i.useRef(null),
        d = (0, nZ.A9)(t, l, tj.rE.QUEST_HOME_DESKTOP, nJ.GameProfileSources.QuestHome, c),
        m = (0, n0.z)(),
        E = (0, J.SD)(t, m);
    return (0, r.jsxs)("div", {
        ref: c,
        className: si.qr,
        children: [
            (0, r.jsx)(sr, { quest: t, questContent: n, sourceQuestContent: l, isHovering: s }),
            (0, r.jsxs)("div", {
                className: si.yM,
                children: [
                    (0, r.jsxs)("div", {
                        className: si.Wi,
                        children: [
                            (0, r.jsx)(ee.E, {
                                variant: "body-sm/normal",
                                className: o()(si.Wj, si.h_, { [si.C4]: s }),
                                children: d,
                            }),
                            (0, r.jsx)(ee.E, {
                                "aria-hidden": !0,
                                variant: "body-sm/normal",
                                lineClamp: 1,
                                className: o()(si.Wj, si.XV, { [si.Hz]: s }),
                                children: d,
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: si.Gv,
                        children: [
                            (0, r.jsx)(ee.E, {
                                variant: "body-sm/normal",
                                className: si.I4,
                                children: eK.intl.string(eK.t.o6FLcF),
                            }),
                            E &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(ee.E, {
                                            variant: "body-xs/normal",
                                            color: "text-muted",
                                            children: "\u2022",
                                        }),
                                        (0, r.jsx)(se, { questId: t.id, orbMultiplierEligibility: m }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(n6, {
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
var so = n(434295);
let su = { [eo.i2.TIER_2]: so.qt, [eo.i2.TIER_3]: so.jR, [eo.i2.TIER_4]: so.cd };
function sc(e) {
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
        { completedRatio: h, completedRatioDisplay: f } = (0, J.O9)(t, !0),
        g = (0, eo.tW)(t, eo.fY.LOGO_TYPE, ej.NJ8.DARK).url,
        x = (0, E.bG)([nr.A], () => nr.A.theme) === ej.NJ8.LIGHT,
        v = (0, nU.Qn)(t.config),
        j = null != v ? su[v] : void 0;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            x
                ? (0, r.jsx)(ef.N, {
                      theme: ej.NJ8.DARK,
                      disableAdaptiveTheme: !0,
                      children: (e) => (0, r.jsx)("div", { className: o()(e, so.f5, j), "aria-hidden": !0 }),
                  })
                : (0, r.jsx)("div", { className: o()(so.f5, j), "aria-hidden": !0 }),
            (0, r.jsx)("div", { className: o()(so.ZF, j, { [so.SP]: l }), "aria-hidden": !0 }),
            (0, r.jsx)("div", { className: so.ZH, children: (0, r.jsx)(nX, { quest: t, isHovering: l }) }),
            (0, r.jsxs)("div", {
                className: o()(so.o1, { [so.SP]: l }),
                children: [
                    i &&
                        (0, r.jsx)(et.D, {
                            tag: "div",
                            className: so.hP,
                            onClick: a,
                            "aria-label": eK.intl.string(eK.t.WqhZss),
                            children: (0, r.jsx)(nH.LinkIcon, { size: "sm", color: "currentColor" }),
                        }),
                    (0, r.jsx)(nM.C, {
                        questContent: n,
                        quest: t,
                        hideLearnMore: !0,
                        shouldShowDisclosure: !0,
                        showShareLink: !0,
                        sourceQuestContent: s,
                        onOpen: u,
                        onClose: c,
                        children: (e) =>
                            (0, r.jsx)(et.D, {
                                ...e,
                                tag: "div",
                                className: so.hP,
                                "aria-label": eK.intl.string(eK.t.DEoVWZ),
                                children: (0, r.jsx)(ny.MoreHorizontalIcon, { size: "sm", color: "currentColor" }),
                            }),
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: o()(so.KJ, { [so.R]: l }),
                children: [
                    (0, r.jsx)("div", {
                        className: so.Ez,
                        children: (0, r.jsx)("img", { className: so.dK, src: g, alt: t.config.messages.gameTitle }),
                    }),
                    (0, r.jsxs)("div", {
                        className: so.Cd,
                        children: [
                            (0, r.jsx)(ee.E, {
                                variant: "body-sm/semibold",
                                color: "text-overlay-light",
                                className: so.ZV,
                                children: f,
                            }),
                            (0, r.jsx)("div", {
                                className: so.oU,
                                children: (0, r.jsx)(nQ.Ay, {
                                    variant: nQ.qP.UNSET,
                                    override: { default: { gradientStart: "#189E4E", gradientEnd: "#44FC7E" } },
                                    weight: nQ.fh.LIGHT,
                                    progress: Math.round(100 * h),
                                    glowing: !0,
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: o()(so.SJ, { [so.SP]: l }),
                children: (0, r.jsx)(sa, {
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
var sd = n(720875),
    sm = n(614972),
    sE = n(688755),
    sh = n(831368),
    sf = n(704289);
function sg(e) {
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
            onMenuOpenChange: f,
            sourceQuestContent: g,
        } = e,
        x = i.useMemo(() => (0, eo.tW)(n, eo.fY.QUEST_BAR_HERO_IMAGE), [n]),
        v = i.useMemo(() => (0, eo.tW)(n, eo.fY.QUEST_BAR_HERO_VIDEO), [n]),
        {
            isActive: j,
            shouldRender: C,
            hoverHandlers: _,
            handleMenuOpen: S,
            handleMenuClose: p,
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
            let f = i.useCallback(() => {
                    (h(),
                        r(!0),
                        E(),
                        (d.current = requestAnimationFrame(() => {
                            d.current = requestAnimationFrame(() => {
                                ((d.current = null), s(!0));
                            });
                        })));
                }, []),
                g = i.useCallback(() => {
                    (E(),
                        s(!1),
                        h(),
                        (m.current = setTimeout(() => {
                            ((m.current = null), r(!1));
                        }, e)));
                }, [e]),
                x = i.useCallback(() => {
                    a.current || o.current || u.current || g();
                }, [g]),
                v = i.useCallback(() => {
                    u.current || ((u.current = !0), c.current?.(!0));
                }, []),
                j = i.useCallback(() => {
                    (u.current && ((u.current = !1), c.current?.(!1)), x());
                }, [x]),
                C = i.useMemo(
                    () => ({
                        onMouseEnter: () => {
                            ((a.current = !0), f());
                        },
                        onMouseLeave: () => {
                            ((a.current = !1), x());
                        },
                        onFocus: () => {
                            ((o.current = !0), f());
                        },
                        onBlur: () => {
                            ((o.current = !1), x());
                        },
                    }),
                    [f, x],
                );
            return (
                i.useEffect(
                    () => () => {
                        (E(), h(), u.current && ((u.current = !1), c.current?.(!1)));
                    },
                    [],
                ),
                { isActive: n, shouldRender: l, deactivate: g, hoverHandlers: C, handleMenuOpen: v, handleMenuClose: j }
            );
        })({ onMenuOpenChange: f }),
        N = j || !0 === a,
        A = !0 === l,
        O = (0, sm.c)({ onMenuOpen: S, onMenuClose: p }),
        T = (0, nL.Pd)(n),
        b = T === nL.UA.EXPIRED || T === nL.UA.EXPIRED_CLAIMED,
        I = (0, tf.E0)(n.config),
        R = (0, E.bG)([nr.A], () => nr.A.theme),
        y = R === ej.NJ8.ASH || R === ej.NJ8.DARK,
        M = R === ej.NJ8.LIGHT,
        L = i.useContext(eG.X),
        { visibilityElementRef: H, almostVisibleInViewport: Q } = (0, sh.I)(
            L?.current?.getScrollerNode() ?? null,
            m ?? !1,
        ),
        {
            handleHoverStart: U,
            handleHoverEnd: D,
            isEventWithinParent: P,
        } = (0, sE.B)({ quest: n, questContent: s, contentPosition: c, rowIndex: d, sourceQuestContent: g }),
        k = (0, F.Lk)({
            isShareable: I,
            questId: n.id,
            trackingCtx: i.useMemo(
                () => ({ content: s, ctaContent: ec.Cy.CONTEXT_MENU_COPY_LINK, sourceQuestContent: g }),
                [s, g],
            ),
        }),
        q = (0, nR.A)(h, H),
        w = eK.intl.formatToPlainString(eK.t.EAYZAr, { questName: n.config.messages.questName }),
        B = o()(sf.kL, { [sf.Cn]: A, [sf.DM]: N }, u),
        V = (0, r.jsx)(sd.A, {
            showPlaceholder: !Q,
            width: 800,
            height: 450,
            className: sf.Tv,
            children: (0, r.jsx)(em.N, {
                imageAsset:
                    null != x
                        ? { asset: x, assetId: "QuestTileV2", alt: eK.intl.string(eK.t.jnijWz), className: sf.Tv }
                        : void 0,
                videoAsset:
                    null != v
                        ? {
                              asset: v,
                              assetId: "QuestTileV2_heroAnimated",
                              className: o()(sf.Tv, sf.gJ, { [sf.C7]: N }),
                          }
                        : void 0,
                imageSize: { width: 800, height: 450 },
                showVideo: C || !0 === a,
            }),
        }),
        W = A
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      V,
                      (0, r.jsx)(sm.q.Provider, {
                          value: O,
                          children: (0, r.jsx)(sc, {
                              quest: n,
                              questContent: s,
                              sourceQuestContent: g,
                              isHovering: N,
                              isShareable: I,
                              onCopyShareLink: k,
                              onMenuOpen: S,
                              onMenuClose: p,
                              contentPosition: c,
                              rowIndex: d,
                          }),
                      }),
                  ],
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      V,
                      (0, r.jsx)("div", { className: o()(sf.sL, { [sf.Mq]: b }) }),
                      M
                          ? (0, r.jsx)(ef.N, {
                                theme: ej.NJ8.ONYX,
                                disableAdaptiveTheme: !0,
                                children: (e) => (0, r.jsx)("div", { className: o()(e, sf.f5) }),
                            })
                          : (0, r.jsx)("div", { className: o()(sf.f5, { [sf.kg]: y }) }),
                      (0, r.jsxs)("div", {
                          className: sf.qy,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: sf.wx,
                                  children: [
                                      (0, r.jsx)(nX, { quest: n, isHovering: N }),
                                      (0, r.jsx)("div", {
                                          className: o()(sf.$s, { [sf.rk]: N }),
                                          onClick: (e) => e.stopPropagation(),
                                          children: (0, r.jsx)(nM.C, {
                                              questContent: s,
                                              quest: n,
                                              hideLearnMore: !0,
                                              shouldShowDisclosure: !0,
                                              showShareLink: !0,
                                              sourceQuestContent: g,
                                              onOpen: S,
                                              onClose: p,
                                              children: (e) =>
                                                  (0, r.jsx)(et.D, {
                                                      ...e,
                                                      tag: "div",
                                                      className: sf.E9,
                                                      "aria-label": eK.intl.string(eK.t.DEoVWZ),
                                                      children: (0, r.jsx)(ny.MoreHorizontalIcon, {
                                                          size: "sm",
                                                          color: "currentColor",
                                                      }),
                                                  }),
                                          }),
                                      }),
                                  ],
                              }),
                              (0, r.jsx)(sm.q.Provider, {
                                  value: O,
                                  children: (0, r.jsx)(sa, {
                                      quest: n,
                                      questContent: s,
                                      isHovering: N,
                                      sourceQuestContent: g,
                                      contentPosition: c,
                                      rowIndex: d,
                                  }),
                              }),
                          ],
                      }),
                  ],
              });
    return (0, r.jsx)("div", {
        id: (0, nT.sT)(n.id, t),
        className: sf.uW,
        "data-quest-tile": A ? "featured-v2" : "standard",
        "data-quest-tile-hovered": N ? "" : void 0,
        onMouseEnter: () => {
            (_.onMouseEnter(), U());
        },
        onMouseLeave: () => {
            (_.onMouseLeave(), D());
        },
        onFocus: (e) => {
            P(e) || (_.onFocus(), U());
        },
        onBlur: (e) => {
            P(e) || (_.onBlur(), D());
        },
        children: (0, r.jsx)("article", {
            ref: q,
            "aria-label": w,
            style: { "--custom-featured-tile-width": "291px" },
            className: B,
            children: W,
        }),
    });
}
let sx = i.memo(function (e) {
    let t = (0, E.bG)([er.A], () => (null != e.questId ? er.A.getQuest(e.questId) : void 0), [e.questId]),
        n = i.useMemo(() => (null != e.quest ? e.quest : t), [t, e.quest]);
    return null == n
        ? null
        : (0, r.jsx)(eE.R, {
              questOrQuests: n,
              questContent: e.questContent,
              questContentPosition: e.contentPosition,
              questContentRowIndex: e.rowIndex,
              trackGuildAndChannelMetadata: e.questContent === ei.uF.QUESTS_EMBED,
              overrideVisibility: e.overrideVisibility,
              onImpression: e.onImpression,
              sourceQuestContent: e.sourceQuestContent,
              children: (t) => (0, r.jsx)(sg, { ...e, quest: n, impressionRef: t }),
          });
});
function sv(e) {
    let { quest: t, isFeatured: n } = e,
        { useNewTile: s } = ea.aD.useConfig({ location: tj.rE.QUEST_HOME_DESKTOP });
    return (0, r.jsx)("div", {
        className: nf.x3,
        children: (0, r.jsxs)("div", {
            className: nf.B0,
            children: [
                (0, r.jsx)(eg.D, {
                    className: nf.R_,
                    variant: "heading-sm/semibold",
                    children: n ? eK.intl.string(eK.t.AzkvWe) : eK.intl.string(eK.t["5wnpF3"]),
                }),
                s
                    ? (0, r.jsx)(nI, {
                          children: (0, r.jsx)(sx, {
                              className: nf.d,
                              quest: t,
                              questContent: ei.uF.QUEST_HOME_DESKTOP,
                              contentPosition: 0,
                              rowIndex: 0,
                              isInFeaturedSection: n,
                              sourceQuestContent: ei.uF.INTERNAL_PREVIEW_TOOL,
                          }),
                      })
                    : (0, r.jsx)(nT.Ay, {
                          className: nf.d,
                          quest: t,
                          questContent: ei.uF.QUEST_HOME_DESKTOP,
                          contentPosition: 0,
                          rowIndex: 0,
                          sourceQuestContent: ei.uF.INTERNAL_PREVIEW_TOOL,
                      }),
            ],
        }),
    });
}
var sj = n(97808),
    sC = n(778712),
    s_ = n(87664),
    sS = n(427262),
    sp = n(198525),
    sN = n(381351);
let sA = function (e) {
    let { quest: t } = e,
        [n, s] = i.useState(!1),
        l = i.useRef(null),
        a = (0, E.bG)([to.default], () => to.default.getCurrentUser()),
        u = sS.Ay.useName(a),
        c = (0, s_.A)(a?.id),
        d = i.useCallback(
            (e) =>
                (0, r.jsx)(sp.default, {
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
        className: nf.x3,
        children: (0, r.jsxs)("div", {
            className: nf.B0,
            children: [
                (0, r.jsx)(eg.D, {
                    className: sN.R_,
                    variant: "heading-sm/semibold",
                    children: eK.intl.string(eK.t.jY7Zxg),
                }),
                (0, r.jsx)("div", { className: sN.$Q, children: eK.intl.string(eK.t.q3hbne) }),
                (0, r.jsx)("div", {
                    className: sN.k0,
                    children: (0, r.jsx)(t6.Y, {
                        targetElementRef: l,
                        renderPopout: d,
                        position: "bottom",
                        shouldShow: n,
                        onRequestClose: () => s(!1),
                        nudgeAlignIntoViewport: !1,
                        useRawTargetDimensions: !0,
                        animation: t6.Y.Animation.NONE,
                        spacing: -3,
                        fixed: !0,
                        scrollBehavior: "close",
                        children: () =>
                            (0, r.jsx)("div", {
                                ref: l,
                                className: o()(sN.Tn, { [sN.wH]: n }),
                                children: (0, r.jsx)(et.D, {
                                    onClick: () => s(!n),
                                    tabIndex: 0,
                                    children: (0, r.jsxs)("div", {
                                        className: sN.lm,
                                        children: [
                                            (0, r.jsx)(sj.eu, {
                                                size: sC._3.SIZE_32,
                                                src: a?.getAvatarURL(void 0, 32),
                                                status: ej.clD.ONLINE,
                                                "aria-label": a?.username,
                                            }),
                                            (0, r.jsxs)("div", {
                                                className: sN.Fj,
                                                children: [
                                                    (0, r.jsx)(ee.E, {
                                                        variant: "body-md/semibold",
                                                        color: "text-strong",
                                                        children: u,
                                                    }),
                                                    (0, r.jsx)(ee.E, {
                                                        variant: "body-sm/normal",
                                                        color: "text-muted",
                                                        children: eK.intl.string(eK.t.b9w3bO),
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
function sO(e) {
    let { questId: t, selectedSections: n } = e,
        s = (0, E.bG)([er.A], () => er.A.getQuest(t)),
        l = (0, E.bG)([er.A], () => er.A.getFetchQuestPreviewError(t)),
        { useNewTile: i } = ea.aD.useConfig({ location: tj.rE.QUEST_HOME_DESKTOP });
    if (null != l || null == s) return null;
    function a(e) {
        return null == n || 0 === n.length || n.includes(e);
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            a("quest_bar") && (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(n_, { quest: s }), (0, r.jsx)(nE, {})] }),
            a("home_card") && (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(sv, { quest: s }), (0, r.jsx)(nE, {})] }),
            a("featured_tile") &&
                i &&
                (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(sv, { quest: s, isFeatured: !0 }), (0, r.jsx)(nE, {})],
                }),
            a("share_embed") &&
                (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(nO, { questId: s.id }), (0, r.jsx)(nE, {})] }),
            a("channel_call_header") &&
                (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(np, { quest: s }), (0, r.jsx)(nE, {})] }),
            a("members_list") &&
                (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(sA, { quest: s }), (0, r.jsx)(nE, {})] }),
            a("activity_panel") &&
                (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(ng, { quest: s }), (0, r.jsx)(nE, {})] }),
        ],
    });
}
var sT = n(875696);
function sb(e) {
    let { children: t, selectedSections: n = [], onSectionSelect: s, controls: l, className: a } = e,
        u = (function () {
            let { useNewTile: e } = ea.aD.useConfig({ location: tj.rE.QUEST_HOME_DESKTOP });
            return [
                { value: "quest_bar", label: eK.intl.string(eK.t.rjVPdM) },
                { value: "home_card", label: eK.intl.string(eK.t["5wnpF3"]) },
                ...(e ? [{ value: "featured_tile", label: eK.intl.string(eK.t.AzkvWe) }] : []),
                { value: "share_embed", label: eK.intl.string(eK.t["D/gSWS"]) },
                { value: "channel_call_header", label: eK.intl.string(eK.t.gWinpQ) },
                { value: "members_list", label: eK.intl.string(eK.t.wpYima) },
                { value: "activity_panel", label: eK.intl.string(eK.t.L2mlUb) },
            ];
        })(),
        c = 0 === n.length || n.length === u.length,
        d = i.useMemo(() => (c ? "all" : 1 === n.length ? n[0] : "all"), [n, c]);
    return (0, r.jsx)(nc.Ip, {
        className: o()(sT.kL, a),
        orientation: "auto",
        children: (0, r.jsxs)("div", {
            className: sT.qE,
            children: [
                (0, r.jsx)(eg.D, {
                    variant: "heading-xl/semibold",
                    color: "text-strong",
                    children: eK.intl.string(eK.t.BDUDau),
                }),
                (0, r.jsx)("div", { className: sT.pf, children: l }),
                (0, r.jsxs)(nd.V, {
                    type: "top",
                    look: "brand",
                    selectedItem: d,
                    onItemSelect: function (e) {
                        s?.(e);
                    },
                    children: [
                        (0, r.jsx)(nd.V.Item, { id: "all", children: eK.intl.string(eK.t.Y9DnPa) }),
                        u.map((e) => (0, r.jsx)(nd.V.Item, { id: e.value, children: e.label }, e.value)),
                    ],
                }),
                (0, r.jsx)("div", { className: sT.tZ, children: (0, r.jsx)("div", { className: sT.Qs, children: t }) }),
            ],
        }),
    });
}
let sI = function (e) {
    let { questId: t, className: n } = e,
        { questId: s, setQuestId: l } = (function (e) {
            let t = (0, u.W6)(),
                { search: n } = (0, u.zy)(),
                s = i.useMemo(() => new URLSearchParams(n).get(J.L1.QUEST_ID) ?? e, [n, e]),
                l = i.useCallback(
                    (e) => {
                        if (e === s) return;
                        let n = new URLSearchParams();
                        (n.set(J.L1.TAB, J.NC.PREVIEW_TOOL),
                            n.set(J.L1.QUEST_ID, e),
                            t.push(`${ej.BVt.QUEST_HOME}?${n.toString()}`));
                    },
                    [t, s],
                );
            return { questId: s, setQuestId: l };
        })(t),
        a = (0, E.bG)([er.A], () => (null != s ? er.A.getQuest(s) : void 0), [s]),
        o = (0, E.bG)([er.A], () => (null != s ? er.A.getQuestLoadedViaPreview(s) : null), [s]);
    (i.useEffect(() => {
        null != s &&
            (0, t7.dQ)(s).then(() => {
                (0, t7.Gt)(s);
            });
    }, [s]),
        i.useEffect(() => {
            function e(e) {
                let { quest_id: t } = e;
                t === s && (0, t7.dQ)(s);
            }
            return (
                t3.h.subscribe("QUEST_PREVIEW_UPDATE", e),
                () => {
                    t3.h.unsubscribe("QUEST_PREVIEW_UPDATE", e);
                }
            );
        }, [s]));
    let [c, d] = i.useState([]);
    return (0, r.jsx)(sb, {
        className: n,
        controls: (0, r.jsx)(nu, {
            questId: s,
            setQuestId: l,
            quest: a,
            refreshQuest: function () {
                null != s && (0, t7.dQ)(s);
            },
        }),
        selectedSections: c,
        onSectionSelect: (e) => {
            "all" === e ? d([]) : d([e]);
        },
        children: o?.id != null ? (0, r.jsx)(sO, { questId: o?.id, selectedSections: c }) : null,
    });
};
var sR = n(203879),
    sy = n(167417),
    sM = n(783977),
    sL = n(305866),
    sH = n(915089),
    sQ = n(255604);
function sU(e) {
    let { children: t, id: n } = e;
    return (0, r.jsx)(ee.E, { className: sQ.g, color: "text-subtle", id: n, variant: "body-sm/semibold", children: t });
}
let sD = function (e) {
    let { children: t, renderPopout: n } = e,
        s = (0, sH.GV)(),
        l = i.useRef(null);
    return (0, r.jsx)(t6.Y, {
        align: "right",
        position: "bottom",
        renderPopout: (e) => (0, r.jsx)(sL.l, { className: sQ.S, "aria-labelledby": s, children: n(e, s) }),
        scrollBehavior: "close",
        targetElementRef: l,
        children: (e) => t(e, l),
    });
};
var sF = n(368884);
let sP = function (e) {
    let { onChange: t, selectedFilters: n } = e,
        s = (0, J.Nb)(),
        l = i.useCallback(
            (e) => (s) => {
                let l = e.filter((e) => s.includes(e.filter));
                t([...n.filter((t) => !e.some((e) => e.filter === t.filter)), ...l]);
            },
            [n, t],
        );
    return (0, r.jsx)(sD, {
        renderPopout: (e, a) => {
            let { closePopout: o } = e;
            return (0, r.jsxs)("div", {
                children: [
                    s.map((e, t) => {
                        let s = e.options.map((e) => ({ label: (0, tE.up)(e.filter), value: e.filter })),
                            o = n.filter((t) => e.options.some((e) => e.filter === t.filter)).map((e) => e.filter),
                            u = 0 === t ? a : `${a}-${t}`;
                        return (0, r.jsxs)(
                            i.Fragment,
                            {
                                children: [
                                    t > 0 && (0, r.jsx)("hr", { className: sF.B }),
                                    (0, r.jsx)(sU, { id: u, children: e.heading }),
                                    (0, r.jsx)(sy.$, {
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
                    (0, r.jsx)("hr", { className: sF.B }),
                    (0, r.jsx)("div", {
                        className: sF.W,
                        children: (0, r.jsx)(x.$, {
                            fullWidth: !0,
                            onClick: () => {
                                (t([]), o());
                            },
                            size: "sm",
                            text: eK.intl.string(eK.t.VkKicb),
                            variant: "secondary",
                        }),
                    }),
                ],
            });
        },
        children: (e, t) =>
            (0, r.jsx)(x.$, {
                ...e,
                buttonRef: t,
                size: "sm",
                text: eK.intl.formatToPlainString(eK.t.CEfkXl, { numSelectedFilters: n.length }),
                icon: sM.FiltersHorizontalIcon,
                iconPosition: "end",
                variant: "secondary",
            }),
    });
};
var sk = n(771871),
    sq = n(715482);
let sw = function (e) {
    let { onChange: t, optionClassName: n, selectedSortMethod: s } = e,
        l = i.useCallback(
            (e) => {
                t(e);
            },
            [t],
        ),
        a = (0, E.bG)([S.Ay], () => S.Ay.keyboardModeEnabled),
        o = (0, J.XD)(),
        u = i.useMemo(() => o.map((e) => ({ name: e.label, value: e.value, radioBarClassName: n })), [o, n]);
    return (0, r.jsx)(sD, {
        renderPopout: (e, t) => {
            let { closePopout: n } = e;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(sU, { id: t, children: eK.intl.string(eK.t.tZXJIS) }),
                    (0, r.jsx)(sk.z, {
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
            (0, r.jsx)(x.$, {
                ...e,
                "aria-label": eK.intl.formatToPlainString(eK.t.lPlIMo, { selected: (0, tE.Js)(s) }),
                buttonRef: t,
                size: "sm",
                text: (0, tE.Js)(s),
                icon: sq.ChevronLargeDownIcon,
                iconPosition: "end",
                variant: "secondary",
            }),
    });
};
var sB = n(710969),
    sV = n(858899);
function sW() {
    let e = i.useRef(null);
    return {
        showToast: i.useCallback((t) => {
            e.current !== t &&
                ((0, sV.P0)({ text: eK.intl.string(eK.t["5ABf1w"]), variant: "critical" }),
                tP.default.track(ej.HAw.QUEST_HOME_MOBILE_DEEP_LINK_MISSING_QUEST, { quest_id: t }),
                (e.current = t));
        }, []),
    };
}
function sG(e, t, n) {
    let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
        [l, r] = i.useState(null),
        a = i.useCallback(() => {
            var l;
            r(((l = e.current?.clientWidth), null == l ? 1 : Math.max(1, Math.min(s, Math.floor((l + n) / (t + n))))));
        }, [r, t, n, s, e]);
    return ((0, ew.g)(e, a, [t, n], { fireOnMount: !0 }), l);
}
var sK = n(768497),
    sz = n(288613);
let s$ = 4 * tc.A.Millis.SECOND;
function sY(e) {
    let { children: t, tileMinWidth: n, gridGap: s } = e,
        l = i.useRef(null),
        a = sG(l, n, s);
    return (0, r.jsx)("div", {
        className: sK.kL,
        ref: l,
        style: { "--custom-min-quest-tile-width": `${n}px`, "--custom-quest-grid-gap": `${s}px` },
        children: null !== a && t(a),
    });
}
function sX(e) {
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
        { showToast: E } = sW(),
        h = i.useRef(null),
        [f, g] = i.useState(null),
        [x, v] = i.useState(0),
        { useNewTile: j } = ea.aD.useConfig({ location: tj.rE.QUEST_HOME_DESKTOP }),
        [{ highlightAnimationProgress: C }, _] = (0, eP.z)(() => ({
            highlightAnimationProgress: 1,
            config: { duration: s$ },
        })),
        S = i.useCallback(
            (e) => {
                if ((s && 0 === t.length) || !l) return !1;
                let r = (0, sB.vc)(e, t, n);
                return null == r ? (E(e), !1) : (g(r.id), v((e) => e + 1), !0);
            },
            [t, n, s, E, l],
        );
    return (i.useImperativeHandle(d, () => ({ scrollToQuest: S }), [S]),
    i.useLayoutEffect(() => {
        if (0 === m.hash.length) {
            h.current = null;
            return;
        }
        !s && l && m !== h.current && S(m.hash.slice(1)) && (h.current = m);
    }, [m, s, l, S]),
    i.useLayoutEffect(() => {
        if (null == f) return;
        let e = document.getElementById(`quest-tile-${f}`);
        null != e &&
            (e.scrollIntoView({ behavior: "smooth", block: "center" }),
            _({
                from: { highlightAnimationProgress: 0 },
                to: { highlightAnimationProgress: 1 },
                reset: !0,
                onRest: (e) => {
                    e.cancelled || g(null);
                },
            }));
    }, [f, x, _]),
    s && 0 === t.length)
        ? (0, r.jsx)(en.y, { className: sK.u1 })
        : 0 === t.length
          ? (0, r.jsxs)("div", {
                className: sK.y7,
                children: [
                    (0, r.jsx)(eg.D, {
                        variant: "heading-xl/semibold",
                        children: eK.intl.string(a ? eK.t.PBfFnx : eK.t.NqFP6z),
                    }),
                    (0, r.jsx)(ee.E, {
                        variant: "body-md/normal",
                        color: "text-subtle",
                        children: a ? eK.intl.format(eK.t.LdYS1H, { onClick: c }) : eK.intl.string(eK.t.LhD4yH),
                    }),
                ],
            })
          : (0, r.jsx)(sY, {
                tileMinWidth: 336,
                gridGap: 24,
                children: (e) =>
                    t.map((t, n) => {
                        let s = Math.floor(n / e),
                            l = f === t.id,
                            i = null != f && !l;
                        return (0, r.jsxs)(
                            eM.animated.div,
                            {
                                className: o()({ [sz.XB]: l, [nb.y]: j }),
                                style: tV(l, i, C),
                                children: [
                                    l &&
                                        (0, r.jsx)("div", {
                                            className: sz.OA,
                                            "aria-hidden": !0,
                                            children: (0, r.jsx)("div", { className: sz.E4 }, x),
                                        }),
                                    j
                                        ? (0, r.jsx)(sx, {
                                              quest: t,
                                              questContent: ei.uF.QUEST_HOME_DESKTOP,
                                              contentPosition: n,
                                              rowIndex: s,
                                              className: sK.d,
                                              sourceQuestContent: ei.uF.QUEST_HOME_DESKTOP,
                                          })
                                        : (0, r.jsx)(nT.Ay, {
                                              quest: t,
                                              questContent: ei.uF.QUEST_HOME_DESKTOP,
                                              contentPosition: n,
                                              rowIndex: s,
                                              className: sK.d,
                                              sourceQuestContent: ei.uF.QUEST_HOME_DESKTOP,
                                          }),
                                ],
                            },
                            t.id,
                        );
                    }),
            });
}
var sJ = n(458518),
    sZ = n(349095);
let s0 = [],
    s1 = J.L1.SORT,
    s3 = J.L1.FILTER;
function s7(e) {
    let t,
        n,
        s,
        l,
        { ref: a, ...o } = e,
        c = i.useRef(null),
        [d, m] =
            ((t = (0, sJ.o)()),
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
                (e = d.get(s1)),
                ((0, K.uJ)(e) ? null : (Object.values(tj.kL).find((t) => t === e) ?? null)) ?? tj.kL.SUGGESTED
            );
        }, [d]),
        h = i.useMemo(
            () =>
                (function (e) {
                    if ((0, K.uJ)(e)) return null;
                    let t = e
                        .split(",")
                        .map((e) => (0, tj.WQ)(e))
                        .filter(tk.Vq);
                    return t.length > 0 ? t : null;
                })(d.get(s3)) ?? s0,
            [d],
        ),
        f = i.useCallback(
            (e) => {
                m({ [s1]: e });
            },
            [m],
        ),
        g = i.useCallback(
            (e) => {
                m({
                    [s3]:
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
            quests: x,
            excludedQuests: v,
            isFetchingCurrentQuests: j,
            hasFetched: C,
        } = (0, J.Qh)(
            J.NC.ALL,
            i.useMemo(() => ({ sortMethod: E, filters: h, removeExpiredQuests: !0 }), [E, h]),
        ),
        _ = i.useCallback(() => {
            g(s0);
        }, [g]),
        S = i.useRef(null),
        p = i.useRef(null),
        N = (0, u.zy)(),
        A = (0, u.W6)();
    return (
        i.useEffect(() => {
            "" !== N.hash &&
                null != S.current &&
                null != p.current &&
                (E !== S.current || h !== p.current) &&
                A.replace({ ...N, hash: void 0 });
        }, [E, h, N, A]),
        i.useEffect(() => {
            S.current = E;
        }, [E]),
        i.useEffect(() => {
            p.current = h;
        }, [h]),
        (0, J.$P)({ selectedSortMethod: E, selectedFilters: h, numQuestsVisible: x.length }),
        i.useImperativeHandle(
            a,
            () => ({
                scrollToQuest: (e) => {
                    (_(),
                        f(tj.kL.SUGGESTED),
                        requestAnimationFrame(() => {
                            c.current?.scrollToQuest(e);
                        }));
                },
            }),
            [_, f],
        ),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    className: sZ.Mj,
                    children: [
                        (0, r.jsx)(eg.D, { variant: "heading-lg/medium", children: eK.intl.string(eK.t.giYD00) }),
                        (0, r.jsxs)("div", {
                            className: sZ.Nf,
                            children: [
                                (0, r.jsx)(sw, { onChange: f, optionClassName: sZ.Uq, selectedSortMethod: E }),
                                (0, r.jsx)(sP, { onChange: g, selectedFilters: h }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(sX, {
                    ref: c,
                    quests: x,
                    excludedQuests: v,
                    isFetching: j,
                    hasFetched: C,
                    hasFiltersApplied: h.length > 0,
                    onClearFilters: _,
                }),
            ],
        })
    );
}
var s2 = n(575593),
    s5 = n(462887),
    s6 = n(765671),
    s8 = n(736653),
    s4 = n(162232),
    s9 = n(734736),
    le = n(303136),
    lt = n(842245);
let ln = function (e) {
    let { assetUrl: t, className: n, isAnimated: s = !1, questName: l } = e,
        i = t + "?format=webp";
    return (0, r.jsx)("div", {
        className: o()(lt.k, n),
        children: s
            ? (0, r.jsx)(le.A, {
                  preload: "auto",
                  className: lt.L,
                  fallbackImage: i,
                  children: (0, r.jsx)("source", { src: t, type: "video/webm" }),
              })
            : (0, r.jsx)("img", { className: lt.L, src: i, alt: l }),
    });
};
var ls = n(57718),
    ll = n(966354);
let lr = (0, i.memo)(function (e) {
    let { quest: t } = e,
        [n, s] = (0, i.useState)(!1),
        [l, a] = (0, i.useState)(24),
        [u, c] = (0, i.useState)(!1),
        d = (0, i.useRef)(null),
        m = (0, i.useRef)(null),
        h = (0, i.useRef)(null),
        f = (0, E.bG)([to.default], () => to.default.getCurrentUser()),
        { ref: g, height: x = 0 } = (0, s6.Ay)(),
        v = (0, s8.Ay)(),
        j = (0, J.S5)(t.userStatus?.claimedAt, { month: "numeric", day: "numeric" }),
        C = t.userStatus?.claimedTier ?? 0,
        _ = t.config.rewards[C],
        S = _?.type === e8.l.FRACTIONAL_PREMIUM,
        p = _?.type === e8.l.COLLECTIBLE,
        N = _?.type === e8.l.VIRTUAL_CURRENCY,
        A = (0, nU.Pk)(t),
        O = _?.collectibleProduct?.items?.[0],
        T = O?.type === s2.R.AVATAR_DECORATION ? O : null,
        b = i.useMemo(
            () =>
                null == _
                    ? null
                    : !0 === N && t.userStatus?.orbQuantityClaimed != null
                      ? eK.intl.format(eK.t["nLXlh+"], { orbAmount: t.userStatus.orbQuantityClaimed })
                      : _.name,
            [_, N, t],
        );
    (0, s6.i4)(d, (e) => {
        let { height: t } = e;
        if (!p || null == t || null == m.current || null == d.current || null == h.current) return;
        let n = d.current.getBoundingClientRect(),
            s = m.current.getBoundingClientRect(),
            l = h.current.getBoundingClientRect();
        a((s.top - n.top - l.height) / 2);
    });
    let R = (0, s5.M)(v),
        y = i.useMemo(() => null != t.config.cosponsorMetadata, [t]),
        M = i.useMemo(() => (0, eo.tW)(t, eo.fY.REWARD, void 0, void 0, A), [t, A]),
        L = n ? x + 8 : 0,
        { content_position: H, row_index: Q, ...U } = (0, ec.fF)(ei.uF.TROPHY_CASE_CARD);
    function D() {
        (s(!0), tP.default.track(ej.HAw.QUEST_HOVER, { quest_id: t.id, ...U }));
    }
    function F() {
        s(!1);
    }
    function P(e) {
        (c(!0), tP.default.track(ej.HAw.QUEST_ASSET_LOADING_FAILURE, { source: e, asset_id: e, quest_id: t.id }));
    }
    return null == _ || u
        ? null
        : (0, r.jsx)(ek.vN, {
              children: (0, r.jsxs)("div", {
                  ref: d,
                  tabIndex: 0,
                  onFocus: D,
                  onBlur: F,
                  onMouseEnter: D,
                  onMouseLeave: F,
                  className: o()(ll.kL, { [ll.yo]: n }),
                  children: [
                      null != f &&
                          p &&
                          null != T &&
                          (0, r.jsx)("div", {
                              ref: h,
                              className: ll.FX,
                              style: { top: l },
                              children: (0, r.jsx)(s4.A, {
                                  avatarDecorationOverride: T,
                                  user: f,
                                  guildId: null,
                                  animateOnHover: !n,
                              }),
                          }),
                      S
                          ? (0, r.jsx)(s9.A, { className: ll.Sl })
                          : N
                            ? (0, r.jsx)(ln, {
                                  className: ll.Sl,
                                  isAnimated: n,
                                  questName: t.config.messages.questName,
                                  assetUrl: M.url,
                              })
                            : M.isAnimated
                              ? (0, r.jsx)(I.A, {
                                    className: ll.JU,
                                    autoPlay: !1,
                                    children: (0, r.jsx)("source", {
                                        src: M.url,
                                        type: M.mimetype ?? void 0,
                                        onError: () => P(M.url),
                                    }),
                                })
                              : (0, r.jsx)("img", {
                                    className: ll.Sl,
                                    src: M.url,
                                    alt: t.config.messages.questName,
                                    onError: () => P(M.url),
                                }),
                      (0, r.jsx)("div", { className: o()(ll.Lw, { [ll.en]: R, [ll.So]: !R }) }),
                      (0, r.jsx)("div", {
                          ref: m,
                          className: ll.r$,
                          style: { transform: `translateY(-${L}px)` },
                          children: (0, r.jsx)(ls.Ay, {
                              logotypeClassName: o()(ll.wm, { [ll.A0]: y }),
                              quest: t,
                              withGameTile: !1,
                          }),
                      }),
                      (0, r.jsxs)("div", {
                          ref: g,
                          className: ll.zH,
                          children: [
                              (0, r.jsx)(eg.D, {
                                  className: ll.DD,
                                  variant: "heading-sm/semibold",
                                  color: "text-overlay-light",
                                  children: eK.intl.format(eK.t.EAYZAr, { questName: t.config.messages.questName }),
                              }),
                              (0, r.jsx)(ee.E, {
                                  variant: "body-sm/medium",
                                  color: R ? "text-muted" : "text-overlay-light",
                                  style: { opacity: R ? 1 : 0.75 },
                                  children: eK.intl.format(eK.t["kXVcV+"], { reward: b, claimedDate: j }),
                              }),
                          ],
                      }),
                  ],
              }),
          });
});
var li = n(396478);
function la(e) {
    let { onClick: t } = e,
        s = (0, s8.Ay)();
    return (0, r.jsxs)(li.pp, {
        theme: s,
        children: [
            (0, r.jsx)(li.G8, { lightSrc: n(826223), darkSrc: n(317017), width: 415, height: 200 }),
            (0, r.jsx)(li.SG, { note: eK.intl.format(eK.t.Pv8u2u, { onClick: t }) }),
        ],
    });
}
var lo = n(178093);
function lu(e) {
    let { onSelectTab: t, className: n } = e,
        { claimedQuests: s, isFetchingClaimedQuests: l } = (0, J.Iq)();
    return l && 0 === s.length
        ? (0, r.jsx)(en.y, { className: lo.u })
        : 0 === s.length
          ? (0, r.jsx)(la, { onClick: () => t(J.NC.ALL) })
          : (0, r.jsx)("div", {
                className: o()(lo.U, n),
                children: [...s]
                    .sort((e, t) => (t.userStatus?.claimedAt ?? "").localeCompare(e.userStatus?.claimedAt ?? ""))
                    .map((e) => (0, r.jsx)(lr, { quest: e }, e.id)),
            });
}
let lc = i.createContext({
    targetQuestId: null,
    targetSectionIdentifier: null,
    highlightCount: null,
    highlightAnimationProgress: null,
});
function ld(e) {
    let { children: t, sectionIdentifier: n, questId: s, duplicate: l } = e,
        {
            targetQuestId: a,
            targetSectionIdentifier: u,
            highlightCount: c,
            highlightAnimationProgress: d,
        } = i.useContext(lc),
        m = a === s && u === n && !l,
        E = l || (null != a && (a !== s || u !== n)),
        { useNewTile: h } = ea.aD.useConfig({ location: tj.rE.QUEST_HOME_DESKTOP }),
        f = i.useMemo(() => tV(m, E, d), [m, E, d]);
    return (0, r.jsxs)(eM.animated.div, {
        [e0]: "",
        className: o()({ [sz.XB]: m, [sz.FR]: h, [nb.y]: h }),
        style: f,
        children: [
            m &&
                (0, r.jsx)("div", {
                    className: sz.OA,
                    "aria-hidden": !0,
                    children: (0, r.jsx)("div", { className: sz.E4 }, c),
                }),
            t,
        ],
    });
}
var lm = n(333007),
    lE = n(765548),
    lh = n(897833);
function lf(e) {
    var t, n;
    let { containerWidth: s, questIds: l, sectionIdentifier: a, ref: o } = e,
        u = (0, tF.C)(),
        { variant: c } = ea.Mk.useConfig({ location: tj.rE.QUEST_HOME_DESKTOP }),
        d = c === ea.d.LARGE_MASK_MARGIN,
        m = l.length >= 2,
        E = i.useRef(null),
        h = i.useRef(null),
        f = i.useRef(null),
        g = (0, tO.Rv)(),
        { targetQuestId: x, targetSectionIdentifier: v } = i.useContext(lc),
        j = null != x && v === a,
        [C, _] = i.useState(!1),
        [S, p] = i.useState(!1),
        N = i.useCallback((e) => {
            p(e);
        }, []),
        {
            rotation: A,
            activeSlotIndex: O,
            scrollStart: T,
            isRepositionScroll: b,
            hasFocusWithin: I,
        } = (function (e) {
            let { numQuests: t, ready: n, rootRef: s, scrollerRef: l } = e,
                [r, a] = i.useState(-2),
                [o, u] = i.useState(0),
                [c, d] = i.useState(!1),
                m = i.useRef(!1),
                E = i.useRef(0),
                h = i.useRef(null),
                f = (0, lE.A)(() => {
                    let e = l.current?.getScrollerNode(),
                        t = s.current;
                    if (null == e || null == t) return null;
                    let n = Array.from(e.querySelectorAll(e1));
                    if (n.length < 4) return null;
                    let r = n[1].offsetLeft - n[0].offsetLeft;
                    return r <= 0 ? null : { node: e, stride: r, rest: eJ(e, n[2], t) };
                }),
                g = (0, lE.A)(() => {
                    let e = h.current;
                    h.current = null;
                    let t = l.current?.getScrollerNode()?.scrollLeft;
                    return null != e && null != t && 1 > Math.abs(t - e);
                }),
                x = (0, lE.A)(() => {
                    ((m.current = !1), 0 !== E.current && window.clearTimeout(E.current), (E.current = 0));
                }),
                v = (0, lE.A)(() => {
                    if (m.current) return;
                    let e = f();
                    if (null == e) return;
                    let t = e.node.scrollLeft - e.rest;
                    if (!(1 > Math.abs(t))) {
                        var n, s, l;
                        ((n = e.node),
                            (s = Math.round(t / e.stride)),
                            (l = e.rest),
                            (0, lm.flushSync)(() => {
                                (0 !== s && a((e) => e + s), 0 !== o && u(0));
                            }),
                            (h.current = l),
                            n.scrollTo({ left: l, behavior: "instant" }));
                    }
                }),
                j = (0, lE.A)(() => {
                    m.current && (x(), v());
                }),
                C = (0, lE.A)(
                    (e) =>
                        !!n &&
                        !m.current &&
                        ((0, lm.flushSync)(() => {
                            u(e);
                        }),
                        (m.current = !0),
                        (E.current = window.setTimeout(j, 1500)),
                        !0),
                );
            return (
                i.useLayoutEffect(() => {
                    if (!n) return;
                    let e = f();
                    null != e && ((h.current = e.rest), e.node.scrollTo({ left: e.rest, behavior: "instant" }));
                }, [f, t, n]),
                i.useEffect(() => {
                    let e = l.current?.getScrollerNode();
                    if (null == e || !n) return;
                    function t() {
                        d(!0);
                    }
                    function s(t) {
                        ((0, e9.vq)(t.relatedTarget, Node) && e.contains(t.relatedTarget)) || (d(!1), v());
                    }
                    function r() {
                        if (m.current) return void j();
                        let t = e.ownerDocument.activeElement;
                        ((0, e9.vq)(t) && e.contains(t) && t.matches(":focus-visible")) || v();
                    }
                    let i = new ResizeObserver(() => {
                        x();
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
                                x());
                        }
                    );
                }, [x, j, t, n, l, v]),
                {
                    rotation: r,
                    activeSlotIndex: t > 1 ? 2 + o : 0,
                    scrollStart: C,
                    isRepositionScroll: g,
                    hasFocusWithin: c,
                }
            );
        })({ numQuests: l.length, ready: null != s && m, rootRef: E, scrollerRef: h }),
        R = C || I || S,
        y = null == s ? 0 : ((t = s + 50), (n = l.length) < 2 ? n : Math.ceil(t / 295) + 2 + 1),
        M = i.useMemo(() => {
            let e = [],
                t = new Set();
            for (let n = 0; n < y; n++) {
                let s = A + n,
                    r = ((s % l.length) + l.length) % l.length;
                (e.push({ questId: l[r], questIndex: r, key: `${l[r]}-${s}`, isDuplicate: t.has(l[r]) }), t.add(l[r]));
            }
            return e;
        }, [l, A, y]),
        L = i.useCallback(
            (e) => {
                let t = M.findIndex((t) => t.questId === e);
                -1 !== t &&
                    (E.current?.scrollIntoView({ block: "center", behavior: "smooth" }),
                    f.current?.scrollBySteps(t - 2));
            },
            [M],
        ),
        H = i.useCallback(
            (e) => {
                let {
                    scrollingType: t,
                    scrollWindowStartIndex: n,
                    scrollWindowEndIndex: s,
                    scrollWindowSize: r,
                    scrollingDirection: i,
                } = e;
                b() ||
                    (0, ev.kO)({
                        scrollingType: t,
                        scrollingDirection: i,
                        scrollWindowStartIndex: n,
                        scrollWindowEndIndex: s,
                        scrollWindowSize: r,
                        questContent: ei.uF.QUEST_HOME_FEATURED_SECTION,
                        carouselSize: l.length,
                    });
            },
            [b, l.length],
        );
    return (
        i.useImperativeHandle(o, () => ({ scrollToQuest: L }), [L]),
        (0, r.jsxs)("div", {
            ref: E,
            className: lh.I6,
            children: [
                (0, r.jsx)("div", { className: lh.Cz, "aria-hidden": !0 }),
                (0, r.jsx)(e6, {
                    maskWidth: eY(u),
                    overflowAmount: 25,
                    disableUserScroll: m,
                    groupedArrows: m,
                    onScrollStart: T,
                    onScrollEnd: H,
                    autoCycle: m && !(C || S || I || g || j),
                    singleStep: !0,
                    scrollerRef: h,
                    controlRef: f,
                    maskMarginMultiplier: d ? 2 : 0.75,
                    children: (0, r.jsx)("div", {
                        className: lh.FO,
                        style: { "--custom-featured-tile-gap": "4px" },
                        onPointerEnter: () => _(!0),
                        onPointerLeave: () => _(!1),
                        children: M.map((e, t) =>
                            (0, r.jsx)(
                                ld,
                                {
                                    questId: e.questId,
                                    duplicate: e.isDuplicate,
                                    sectionIdentifier: a,
                                    children: (0, r.jsx)(sx, {
                                        isInFeaturedSection: !0,
                                        isActive: t === O && !R,
                                        onMenuOpenChange: N,
                                        questId: e.questId,
                                        questContent: ei.uF.QUEST_HOME_FEATURED_SECTION,
                                        contentPosition: e.questIndex,
                                        rowIndex: 0,
                                        sourceQuestContent: ei.uF.QUEST_HOME_FEATURED_SECTION,
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
var lg = n(915655);
function lx(e) {
    let { className: t, ...n } = e;
    return (0, r.jsxs)("div", {
        className: o()(lg.kL, t),
        ...n,
        children: [
            (0, r.jsx)("div", { className: o()(tW.m, lg.Gf), "aria-hidden": !0 }),
            (0, r.jsx)("div", {
                className: lg.Jm,
                "aria-hidden": !0,
                children: Array.from({ length: 6 }).map((e, t) =>
                    (0, r.jsx)("div", { className: o()(tW.m, lg.Vr) }, t),
                ),
            }),
        ],
    });
}
var lv = n(384343);
function lj(e) {
    let { questContent: t, questIds: n, rowIndex: s, sectionIdentifier: l } = e,
        { targetSectionIdentifier: a } = i.useContext(lc),
        { useNewTile: o } = ea.aD.useConfig({ location: tj.rE.QUEST_HOME_DESKTOP }),
        { variant: u } = ea.Mk.useConfig({ location: tj.rE.QUEST_HOME_DESKTOP }),
        c = (0, tF.C)(),
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
                (0, ev.kO)({
                    scrollingType: d ? ec.pk.AUTO : s,
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
        E = u === ea.d.LARGE_MASK_MARGIN;
    return (0, r.jsx)(e6, {
        maskWidth: eY(c),
        overflowAmount: 25,
        maskMarginMultiplier: E ? 2 : 0.75,
        onScrollEnd: m,
        children: (0, r.jsxs)("div", {
            style: {
                "--custom-min-quest-tile-width": `${eX(c, E)}px`,
                "--custom-extra-spacing-placeholder-size": "5px",
                "--custom-quest-tile-border-radius": `${o ? "var(--radius-xl)" : "10px"}`,
            },
            className: lv.FO,
            children: [
                n.map((e, n) =>
                    (0, r.jsx)(
                        ld,
                        {
                            questId: e,
                            sectionIdentifier: l,
                            children: o
                                ? (0, r.jsx)(sx, {
                                      questId: e,
                                      questContent: t,
                                      contentPosition: n,
                                      rowIndex: s,
                                      className: lv.d,
                                      sourceQuestContent: t,
                                      sectionIdentifier: l,
                                  })
                                : (0, r.jsx)(nT.Ay, {
                                      questId: e,
                                      isInFeaturedSection: l === ez.FEATURED,
                                      questContent: t,
                                      contentPosition: n,
                                      rowIndex: s,
                                      className: lv.d,
                                      sourceQuestContent: t,
                                      sectionIdentifier: l,
                                  }),
                        },
                        `animated-wrapper-${e}-${l}`,
                    ),
                ),
                (0, r.jsx)("div", { className: lv.fu }),
            ],
        }),
    });
}
var lC = n(125822);
let l_ = tc.A.Millis.WEEK;
function lS() {
    let e = er.A.quests;
    if (0 === er.A.lastFetchedCurrentQuests || 0 === e.size) return !1;
    let t = null;
    for (let n of s.keys()) {
        let l = e.get(n);
        (null == l || (0, nB.Ic)(l)) && (null == t && (t = new Map(s)), t.delete(n));
    }
    return null != t && ((s = t), !0);
}
class lp extends E.Ay.PersistedStore {
    static displayName = "DiscoveredQuestStore";
    static persistKey = "DiscoveredQuestStore";
    initialize(e) {
        (this.waitFor(er.A), (s = new Map()));
        let t = !1;
        if (null != e) {
            let n = Date.now() - l_;
            for (let [l, r] of Object.entries(e.discoveredAtByQuestId)) {
                if (null == r || null == l || new Date(r).getTime() < n) {
                    t = !0;
                    continue;
                }
                s.set(l, r);
            }
        }
        return (this.syncWith([er.A], lS), t);
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
let lN = new lp(t3.h, {
    QUESTS_MARK_DISCOVERED: function (e) {
        if (null == er.A.getQuest(e.questId)) return !1;
        let t = new Map(s);
        (t.set(e.questId, new Date().toISOString()), (s = t));
    },
});
function lA(e, t) {
    if (e === t) return !0;
    let n = new Set(e),
        s = new Set(t);
    return n.size === s.size && [...n].every((e) => s.has(e));
}
let lO = function () {
    let e = (0, sS.Gn)(),
        t = (0, J.Cv)(),
        n = (0, E.bG)([er.A], () => er.A.lastFetchedCurrentQuests > 0),
        { quests: s, isFetchingCurrentQuests: l } = (0, J.Qh)(J.NC.ALL, {
            sortMethod: tj.kL.SUGGESTED,
            filters: [],
            removeExpiredQuests: !e,
        }),
        r = (0, lC.A)(
            () =>
                s.map((e) => {
                    let { id: t } = e;
                    return t;
                }),
            s.map((e) => {
                let { id: t } = e;
                return t;
            }),
            lA,
        ),
        a = (0, F.T2)(),
        o = (0, E.bG)([lN], () => lN.getDiscoveredAtByQuestId(), []),
        u = i.useMemo(() => (l || !n) && 0 === r.length, [l, n, r.length]),
        { useNewTile: c } = ea.aD.useConfig({ location: tj.rE.QUEST_HOME_DESKTOP }),
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
                              let t = er.A.getQuestConfig(e);
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
                                      { userStatus: o, preview: u } = er.A.getQuest(t.id) ?? {},
                                      c = [],
                                      d =
                                          null != o &&
                                          null != o.enrolledAt &&
                                          null != o.completedAt &&
                                          null == o.claimedAt;
                                  if ((0, nB.kd)(t) && !d) return r ? [ez.EXPIRED] : null;
                                  if (
                                      (s.has(t.id) && c.push(ez.DISCOVERED),
                                      i && !0 === u && c.push(ez.PREVIEW),
                                      null != o && null != o.enrolledAt && null == o.claimedAt)
                                  )
                                      return [...c, ez.IN_PROGRESS];
                                  let m = !nz(t);
                                  return m && null != n && (0, tf.I0)(n, t.id) && n$(ez.FEATURED, l)
                                      ? [...c, ez.FEATURED]
                                      : new Date(t.expiresAt).valueOf() <= Date.now() + (a ? nW : nV)
                                        ? [...c, ez.ENDING_SOON]
                                        : m && n$(ez.FEATURED, l)
                                          ? [...c, ez.FEATURED]
                                          : (0, th.ks)(t)
                                            ? [...c, ez.ORB]
                                            : [...c, ez.SPECIAL_QUESTS];
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
                                  let t = er.A.getQuestConfig(e);
                                  null == t || nz(t) || u(e);
                              }),
                              t.forEach((e) => u(e)),
                              e$
                                  .map((e) => {
                                      let t = nK?.[e.identifier];
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
var lT = n(113775);
let lb = {
        [ez.FEATURED]: ei.uF.QUEST_HOME_FEATURED_SECTION,
        [ez.IN_PROGRESS]: ei.uF.QUEST_HOME_IN_PROGRESS_SECTION,
        [ez.ENDING_SOON]: ei.uF.QUEST_HOME_ENDING_SOON_SECTION,
        [ez.ORB]: ei.uF.QUEST_HOME_ORB_SECTION,
        [ez.DISCOVERED]: ei.uF.QUEST_HOME_DISCOVERED_SECTION,
        [ez.EXPIRED]: ei.uF.QUEST_HOME_EXPIRED_SECTION,
        [ez.PREVIEW]: ei.uF.QUEST_HOME_PREVIEW_SECTION,
        [ez.SPECIAL_QUESTS]: ei.uF.QUEST_HOME_SPECIAL_QUESTS_SECTION,
    },
    lI = 4 * tc.A.Millis.SECOND;
function lR(e) {
    let { deepLinkedQuestId: t, isLoadingQuestHomeHero: n, className: s, ref: l } = e,
        a = (0, u.zy)(),
        { useNewTile: c, useNewFeaturedTiles: d } = ea.aD.useConfig({ location: tj.rE.QUEST_HOME_DESKTOP }),
        { sections: m, isFetchingCurrentQuests: E, getSectionIdentifierForTargetedQuest: h } = lO(),
        f = i.useRef(null),
        g = i.useRef(null),
        { showToast: x } = sW(),
        [v, j] = i.useState(null),
        [C, _] = i.useState(null),
        [S, p] = i.useState(0),
        [N, A] = i.useState(null),
        O = i.useRef(null),
        T = i.useCallback(
            (e) => {
                A(e.contentRect.width);
            },
            [A],
        );
    (0, ew.g)(f, T, [T], { fireOnMount: !0 });
    let [{ highlightAnimationProgress: b }, I] = (0, eP.z)(() => ({
            highlightAnimationProgress: 1,
            config: { duration: lI },
        })),
        R = i.useCallback(
            (e, t) => {
                if (null == e || null == N || E || n) return !1;
                t && (0, t7.sB)(e);
                let s = h(e),
                    l = !0 === t && s !== ez.FEATURED ? ez.DISCOVERED : s;
                if (null == s) return (x(e), !1);
                let r = document.getElementById((0, nT.sT)(e, l ?? void 0));
                return (
                    null != r &&
                    (j(e),
                    _(l),
                    p((e) => e + 1),
                    l === ez.FEATURED && c && d
                        ? g.current?.scrollToQuest(e)
                        : r.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" }),
                    I({
                        from: { highlightAnimationProgress: 0 },
                        to: { highlightAnimationProgress: 1 },
                        reset: !0,
                        onRest: (e) => {
                            e.cancelled || (j(null), _(null));
                        },
                    }),
                    !0)
                );
            },
            [c, d, j, p, I, E, n, x, N, h],
        );
    (i.useImperativeHandle(l, () => ({ scrollToQuest: R }), [R]),
        i.useLayoutEffect(() => {
            if (null == t) {
                O.current = null;
                return;
            }
            O.current !== a && R(t, !0) && (O.current = a);
        }, [a, t, R]));
    let y = i.useMemo(
        () => ({ targetQuestId: v, targetSectionIdentifier: C, highlightCount: S, highlightAnimationProgress: b }),
        [v, C, S, b],
    );
    return (0, r.jsx)(lc.Provider, {
        value: y,
        children: (0, r.jsx)("div", {
            className: o()(lT.kL, s),
            ref: f,
            children: E
                ? (0, r.jsx)(lx, { role: "status", "aria-label": eK.intl.string(eK.t.ZTNur7) })
                : m.length > 0
                  ? m.map((e, t) => {
                        let { identifier: n, questIds: s, title: l } = e;
                        return (0, r.jsxs)(
                            "div",
                            {
                                className: lT.p9,
                                children: [
                                    (0, r.jsx)(eg.D, {
                                        variant: "heading-lg/semibold",
                                        style: { "--custom-section-title-inset": "2px" },
                                        className: lT.Gf,
                                        children: eK.intl.string(l),
                                    }),
                                    n === ez.FEATURED && c && d
                                        ? (0, r.jsx)(lf, {
                                              ref: g,
                                              questIds: s,
                                              containerWidth: N,
                                              sectionIdentifier: n,
                                          })
                                        : (0, r.jsx)(lj, {
                                              questIds: s,
                                              rowIndex: t,
                                              sectionIdentifier: n,
                                              questContent: lb[n],
                                          }),
                                ],
                            },
                            n,
                        );
                    })
                  : (0, r.jsxs)("div", {
                        className: lT.y7,
                        children: [
                            (0, r.jsx)(eg.D, { variant: "heading-xl/semibold", children: eK.intl.string(eK.t.NqFP6z) }),
                            (0, r.jsx)(ee.E, {
                                variant: "body-md/normal",
                                color: "text-subtle",
                                children: eK.intl.string(eK.t.LhD4yH),
                            }),
                        ],
                    }),
        }),
    });
}
var ly = n(196765),
    lM = n(121894),
    lL = n(851936);
let lH = (0, ly.v)((e, t) => ({
    startTime: performance.now(),
    elapsed: 0,
    lastOutputLogTime: -5e3,
    logger: null,
    registerAssetLoad: () => {
        let n = t().logger ?? (0, lL.L)({ location: tj.rE.QUEST_HOME_DESKTOP });
        if (n.info === tC.tE || t().elapsed >= 6e4) return;
        let s = performance.now() - t().startTime;
        s > 6e4 && (s = 6e4);
        let l = { elapsed: s };
        (s - t().lastOutputLogTime > 1e3 &&
            (n.info(`QuestHome asset loading duration so far: ${s}ms`), (l.lastOutputLogTime = s)),
            null == t().logger && (l.logger = n),
            (0, lM.r)(() => e(l)));
    },
}));
var lQ = n(516226),
    lU = n(620241);
function lD(e) {
    let { children: t, hasSearchResults: n } = e,
        { showDefaultBanner: s } = X.C.useConfig({ location: tj.rE.QUEST_HOME_DEFAULT_BANNER });
    return s ? (0, r.jsx)("div", { className: o()(lU.iS, { [lU.R]: n }), children: t }) : null;
}
function lF(e) {
    let { children: t, onQuestCtaClick: n, questHomeHero: s, isLoadingQuestHomeHero: l, hasSearchResults: i } = e,
        { hasError: a, isLoading: u } = (0, Z.zT)(),
        c = null != s && !a,
        d = l || (c && u);
    return (0, r.jsxs)("div", {
        className: o()(lU.iS, { [lU.R]: i }),
        children: [
            d && (0, r.jsx)(t1, {}),
            !l && (c ? (0, r.jsx)(t0, { hero: s, isBannerLoading: u, onQuestCtaClick: n }) : t),
        ],
    });
}
var lP = n(613956),
    lk = n(604880),
    lq = n(318808);
function lw(e) {
    let { adCreativeIds: t } = e,
        n = i.useCallback(() => (0, n2.zg)(t), [t]);
    return (0, r.jsxs)("div", {
        className: lP.MY,
        children: [
            (0, r.jsx)("img", { className: lP.Bg, src: lq.Ay, alt: "" }),
            (0, r.jsx)("div", { className: lP.r$, children: (0, r.jsx)("img", { src: lk, alt: "" }) }),
            (0, r.jsxs)("div", {
                className: lP.Nr,
                children: [
                    (0, r.jsx)(eg.D, {
                        variant: "heading-lg/semibold",
                        color: "text-default",
                        className: lP.ky,
                        children: eK.intl.string(eK.t.GXmn57),
                    }),
                    (0, r.jsx)(ee.E, {
                        variant: "body-md/normal",
                        className: lP.G3,
                        children: eK.intl.string(eK.t.bWuKqh),
                    }),
                    (0, r.jsx)(x.$, {
                        variant: "primary",
                        text: eK.intl.string(eK.t.UQvCf7),
                        fullWidth: !0,
                        onClick: n,
                    }),
                ],
            }),
        ],
    });
}
var lB = n(143592),
    lV = n(215130);
let lW = function (e) {
    let { matchingQuestIds: t } = e,
        n = (0, tF.C)(),
        { useNewTile: s } = ea.aD.useConfig({ location: tj.rE.QUEST_HOME_DESKTOP }),
        { variant: l } = ea.Mk.useConfig({ location: tj.rE.QUEST_HOME_DESKTOP }),
        a = i.useRef(null),
        u = l === ea.d.LARGE_MASK_MARGIN,
        c = s ? 12 : 20,
        d = sG(a, eX(n, u), c, 3);
    return (0, r.jsxs)(j.B, {
        gap: 16,
        direction: "vertical",
        align: "start",
        className: lV.kL,
        ref: a,
        children: [
            (0, r.jsxs)(eg.D, {
                variant: "heading-lg/medium",
                children: [eK.intl.string(eK.t.giYD00), " (", t.length, ")"],
            }),
            0 === t.length
                ? (0, r.jsxs)(j.B, {
                      gap: 16,
                      direction: "vertical",
                      align: "center",
                      className: lV.y7,
                      children: [
                          (0, r.jsx)(lB.e, { alt: eK.intl.string(eK.t["Xe+fJM"]) }),
                          (0, r.jsxs)(j.B, {
                              direction: "vertical",
                              align: "center",
                              children: [
                                  (0, r.jsx)(eg.D, {
                                      variant: "heading-lg/medium",
                                      children: eK.intl.string(eK.t["Xe+fJM"]),
                                  }),
                                  (0, r.jsx)(eg.D, {
                                      variant: "heading-xs/medium",
                                      children: eK.intl.string(eK.t["Tc/Ndl"]),
                                  }),
                              ],
                          }),
                      ],
                  })
                : (0, r.jsx)("div", {
                      className: lV.Vg,
                      style: {
                          "--custom-quest-search-tile-min-width": `${eX(n, u)}px`,
                          "--custom-quest-grid-gap": `${c}px`,
                      },
                      children:
                          null !== d &&
                          t.map((e, t) =>
                              s
                                  ? (0, r.jsx)(
                                        nI,
                                        {
                                            children: (0, r.jsx)(sx, {
                                                eagerLoadAssets: !0,
                                                questId: e,
                                                questContent: ei.uF.QUEST_HOME_SEARCH_RESULT,
                                                contentPosition: t,
                                                rowIndex: Math.floor(t / d),
                                                className: o()(lV.d, lV.hS),
                                                sourceQuestContent: ei.uF.QUEST_HOME_SEARCH_RESULT,
                                            }),
                                        },
                                        e,
                                    )
                                  : (0, r.jsx)(
                                        nT.Ay,
                                        {
                                            eagerLoadAssets: !0,
                                            questId: e,
                                            questContent: ei.uF.QUEST_HOME_SEARCH_RESULT,
                                            contentPosition: t,
                                            rowIndex: Math.floor(t / d),
                                            className: lV.d,
                                            sourceQuestContent: ei.uF.QUEST_HOME_SEARCH_RESULT,
                                        },
                                        e,
                                    ),
                          ),
                  }),
        ],
    });
};
function lG() {
    let { enabled: e } = ea.Mk.useConfig({ location: tj.rE.QUEST_HOME_DESKTOP }),
        { useNewLayoutWithSearch: t } = ea.aD.useConfig({ location: tj.rE.QUEST_HOME_DESKTOP }),
        { newLayoutWithSearch: n } = ea.s9.useConfig({ location: tj.rE.QUEST_HOME_DESKTOP });
    return e || t || n;
}
var lK = n(649852),
    lz = n.n(lK),
    l$ = n(379078),
    lY = n(704554),
    lX = n(823784);
let lJ = {
        searchType: l$.n.FUZZY,
        searchStringGenerator: function (e) {
            return [
                e.messages.questName.toLowerCase(),
                e.messages.gameTitle.toLowerCase(),
                e.messages.gamePublisher.toLowerCase(),
            ].filter(tk.Vq);
        },
        sortType: l$.r.JARO_WINKLER,
        throttleMs: 200,
    },
    lZ = function () {
        let [e, t] = i.useState(""),
            [n, s] = i.useState(null),
            l = (0, E.yK)([er.A], () =>
                (0, J.mn)(Array.from(er.A.quests.values()), { sortMethod: tj.kL.SUGGESTED }).map((e) => e.config),
            ),
            r = e.trim().toLowerCase(),
            a = "" !== r,
            o = i.useMemo(() => lz()(ev.gr, 1e3), []),
            u = i.useCallback(() => {
                o.cancel();
                let e = (0, lX.tv)();
                (null != e &&
                    (0, ev.XH)({ searchSessionId: e.uuid, searchSessionDurationMs: Date.now() - e.createdAtTimestamp }),
                    (0, lX.l6)());
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
                                  .filter(tk.Vq)
                            : null,
                    ),
                    a)
                ) {
                    let { searchSession: t, isNew: n } = (0, lX.$N)();
                    (n && (0, ev.OQ)({ searchSessionId: t.uuid }),
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
        return ((0, lY.RT)(r, l, d, lJ), { matchingQuestIds: n, query: e, setQuery: t, onSearchClose: c });
    };
var l0 = n(631001),
    l1 = n(758836),
    l3 = n(613057);
let l7 = i.createContext({});
function l2(e) {
    let { banner: t, children: n, header: s, withFullBleedBanner: l = !1 } = e,
        { onScroll: a, scrollerRef: o } = i.useContext(l7);
    return (0, r.jsxs)(eG.X.Provider, {
        value: o,
        children: [
            s,
            (0, r.jsxs)(D.A, {
                onScroll: a,
                ref: o,
                children: [
                    l && t,
                    (0, r.jsxs)(Q.A, { className: lU.Jo, innerClassName: lU.FG, children: [!l && t, n] }),
                ],
            }),
        ],
    });
}
function l5(e) {
    let { selectedTab: t, onSelectTab: n, tabs: s, endContent: l } = e;
    return (0, r.jsx)(U.S, {
        selectedTabId: t,
        handleTransition: n,
        tabs: s,
        endContent: l,
        icon: f.QuestsIcon,
        keepToastsBelow: !0,
    });
}
function l6(e) {
    let { onLoadComplete: t, className: n, isVirtualCurrencyEnabled: s } = e,
        l = (0, E.bG)([S.Ay], () => S.Ay.useReducedMotion),
        a = (0, E.bG)([V.A], () => V.A.isFocused()),
        { ref: o, inViewport: u } = (0, sR.p)(),
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
        let e = (0, W.TM)();
        return (0, r.jsx)(Z._M, {
            id: "QuestHomeHeroBackground_bannerVideo",
            children: (s) =>
                (0, r.jsx)(I.A, {
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
    return (0, r.jsx)(Z._M, {
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
function l8(e) {
    let { onAssetLoad: t, isVirtualCurrencyEnabled: n } = e;
    return (0, r.jsxs)("div", {
        className: o()(lU.Tv, { [lU.lJ]: n }),
        children: [
            (0, r.jsx)(tY, {}),
            (0, r.jsx)("div", { className: o()(lU.nz, { [lU.ZZ]: n }) }),
            (0, r.jsx)(l6, {
                onLoadComplete: t,
                className: o()(lU.Fe, { [lU.H4]: n, [lU.Q8]: !n }),
                isVirtualCurrencyEnabled: n,
            }),
        ],
    });
}
function l4(e) {
    let { onAssetLoad: t } = e,
        { enabled: n } = Y.useConfig({ location: tj.rE.QUEST_HOME_DESKTOP }),
        s = !n,
        l = i.useCallback(() => {
            s ? window.open(ej.X7G.PAID_TERMS_ORBS) : window.open(G.A.getArticleURL(ej.MVz.QUESTS_LEARN_MORE));
        }, [s]);
    return (0, r.jsx)(eS, {
        adContentId: s ? tj.yr : tj.uz,
        title: s ? eK.intl.format(eK.t.BCBIlp, {}) : eK.intl.format(eK.t.lmMBfy, {}),
        subtitle: s ? eK.intl.format(eK.t.U9FY0J, {}) : eK.intl.string(eK.t.oWCrBq),
        buttons: s
            ? (0, r.jsxs)(g.e, {
                  children: [
                      (0, r.jsx)(x.$, {
                          variant: "overlay-primary",
                          text: eK.intl.string(eK.t["3bdWzt"]),
                          onClick: () =>
                              (0, T.Cz)({
                                  tab: l1.G2.ORBS,
                                  analyticsLocations: [],
                                  analyticsSource: p.A.INTRO_TO_ORBS_QUEST_BANNER,
                              }),
                      }),
                      (0, r.jsx)(x.$, {
                          variant: "overlay-secondary",
                          text: eK.intl.string(eK.t["7kTAgJ"]),
                          onClick: l,
                      }),
                  ],
              })
            : (0, r.jsx)(x.$, {
                  variant: "overlay-primary",
                  text: eK.intl.string(eK.t.hvVgAZ),
                  onClick: l,
                  icon: v.LinkExternalSmallIcon,
                  iconPosition: "end",
              }),
        background: (0, r.jsx)(l8, { onAssetLoad: t, isVirtualCurrencyEnabled: s }),
    });
}
let l9 = function (e) {
    let { topLevelRoute: t } = e,
        n = (0, u.zy)(),
        s = (0, u.W6)(),
        l = i.useMemo(() => new URLSearchParams(n.search).getAll(J.L1.AD_CREATIVE_IDS), [n.search]),
        a = (d.Fr || d.v1) && l.length > 0,
        f = (0, E.bG)([O.A], () => O.A.getState("quests")),
        {
            selectedTab: g,
            onSelectTab: x,
            tabs: v,
        } = (function (e) {
            let { withClaimedQuestsTab: t = !0 } = e,
                n = l0.A.useField("tab"),
                s = (0, u.zy)(),
                l = (0, J.p5)(),
                r = lG();
            i.useEffect(() => {
                l0.A.getState().initializeFromUrl(s.search, l);
            }, [s.search, l]);
            let a = i.useCallback((e) => {
                l0.A.getState().setTab(e);
            }, []);
            return {
                tabs: i.useMemo(
                    () =>
                        [
                            { id: J.NC.ALL, label: r ? eK.intl.string(eK.t.Jt6u7B) : eK.intl.string(eK.t["0SzXmi"]) },
                            t
                                ? {
                                      id: J.NC.CLAIMED,
                                      label: r ? eK.intl.string(eK.t["3TVY/R"]) : eK.intl.string(eK.t.zyNYNB),
                                  }
                                : null,
                            t && l ? { id: J.NC.PREVIEW_TOOL, label: eK.intl.string(eK.t.BDUDau) } : null,
                        ].filter(tk.Vq),
                    [t, l, r],
                ),
                selectedTab: n,
                onSelectTab: a,
            };
        })({ withClaimedQuestsTab: !0 }),
        { query: S, setQuery: I, matchingQuestIds: y, onSearchClose: M } = lZ(),
        { onScroll: Q } = (0, H.G)(),
        U = z.A.getState().getUtmCurrentContext(),
        D = lH((e) => e.registerAssetLoad),
        P = i.useRef(U);
    (i.useEffect(() => {
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
        (0, b.HU)({ location: eK.intl.string(eK.t.JALI2K) }));
    let k = i.useRef(null),
        V = lG(),
        W = i.useRef(null),
        G = i.useCallback((e) => {
            W.current?.scrollToQuest(e);
        }, []),
        $ = i.useMemo(() => ((0, K.uJ)(n.hash) ? null : n.hash.substring(1)), [n.hash]),
        { questHomeHero: Y, isLoading: ee, confirmedEmpty: et } = (0, F.lg)(l[0] ?? null),
        { showHeroPlaceholder: en } = (0, X.x)(),
        es = i.useCallback(() => {
            ((0, w.Y)({
                pageType: ej.liQ.GLOBAL_DISCOVERY_QUESTS,
                sectionType: ej.JJy.ORBS_BALANCE_MENU,
                ctaObject: ej.ZSU.CTA_TO_ORBS_SHOP,
            }),
                (0, T.Cz)({ tab: l1.G2.ORBS, analyticsLocations: [], analyticsSource: p.A.ORBS_BALANCE_MENU }));
        }, []);
    (i.useEffect(() => {
        (0, _.I)(ej.BVt.QUEST_HOME);
    }, []),
        i.useEffect(() => {
            L.trigger();
        }, []),
        i.useEffect(() => {
            if (a || null != f) return;
            let e = new URLSearchParams(n.search),
                l = e.get(J.L1.TAB);
            if (l === J.NC.PREVIEW_TOOL) {
                let t = e.get(J.L1.QUEST_ID);
                A.A.openNativeAppModal("quests", ej.e$_.DEEP_LINK, {
                    type: l3.XK.QUEST_PREVIEW_TOOL,
                    params: { questId: t, tab: l },
                });
                return;
            }
            let r = performance.getEntriesByType("navigation")[0];
            if ("POP" === s.action && r?.type === "navigate" && t && l !== J.NC.PREVIEW_TOOL) {
                let t = (0, K.uJ)(n.hash) ? null : n.hash.substring(1),
                    s = e.get(J.L1.SORT),
                    r = e.get(J.L1.FILTER),
                    i = e.get(J.L1.AD_CREATIVE_IDS);
                A.A.openNativeAppModal("quests", ej.e$_.DEEP_LINK, {
                    type: l3.XK.QUEST_HOME,
                    params: { questId: (0, K.uJ)(t) ? void 0 : t, sort: s, filter: r, tab: l, adCreativeIds: i },
                });
            }
        }, [n.search, f, s.action, n.hash, t, a]),
        i.useEffect(() => {
            t && (0, R.Dr)(h.M.QUEST_HOME_ENTRYPOINT_ONBOARDING);
        }, [t]));
    let el = i.useCallback(
            (e) => {
                (s.replace({ ...s.location, hash: void 0 }), k.current?.scrollToTop({ animate: !1 }), x(e), M());
            },
            [s, x, M],
        ),
        er = i.useMemo(() => null != y && V, [y, V]),
        ei = i.useMemo(() => ({ onAssetLoadComplete: D }), [D]),
        ea = i.useMemo(() => ({ onScroll: Q, scrollerRef: k }), [Q, k]),
        eo = ee && !en;
    return a
        ? (0, r.jsx)(lw, { adCreativeIds: l })
        : (0, r.jsx)(lQ.M.Provider, {
              value: ei,
              children: (0, r.jsx)(l7.Provider, {
                  value: ea,
                  children: (0, r.jsx)("div", {
                      className: o()(lU.kL, { [lU.KY]: !t }),
                      children: (0, r.jsxs)(l2, {
                          header: (0, r.jsx)(l5, {
                              selectedTab: g,
                              onSelectTab: el,
                              tabs: v,
                              endContent: (0, r.jsxs)(j.B, {
                                  gap: 8,
                                  direction: "horizontal",
                                  align: "center",
                                  justify: "end",
                                  children: [
                                      V &&
                                          (0, r.jsx)(C.I, {
                                              query: S,
                                              onChange: I,
                                              placeholder: eK.intl.string(eK.t.y10TI2),
                                              onClear: M,
                                              size: "sm",
                                          }),
                                      (0, r.jsx)(B.SS, {
                                          analyticsPage: ej.liQ.GLOBAL_DISCOVERY_QUESTS,
                                          cardAlignment: B.cP.END,
                                          ctaText: eK.intl.string(eK.t["J+vlIR"]),
                                          ctaOnClick: es,
                                      }),
                                  ],
                              }),
                          }),
                          banner:
                              g === J.NC.ALL &&
                              !eo &&
                              (0, r.jsx)(
                                  Z.y5,
                                  {
                                      source: tj.rE.QUEST_HOME_DESKTOP,
                                      adCreativeId: Y?.id ?? null,
                                      adCreativeType: m.p.QUEST_HOME_HERO,
                                      children: et
                                          ? (0, r.jsx)(lD, {
                                                hasSearchResults: er,
                                                children: (0, r.jsx)(l4, { onAssetLoad: D }),
                                            })
                                          : (0, r.jsx)(lF, {
                                                onQuestCtaClick: G,
                                                hasSearchResults: er,
                                                questHomeHero: Y,
                                                isLoadingQuestHomeHero: ee,
                                                children: (0, r.jsx)(l4, { onAssetLoad: D }),
                                            }),
                                  },
                                  Y?.id,
                              ),
                          children: [
                              er && null != y && (0, r.jsx)(lW, { matchingQuestIds: y }),
                              g === J.NC.CLAIMED
                                  ? (0, r.jsx)(lu, { onSelectTab: el, className: er ? lU.R : void 0 })
                                  : g === J.NC.PREVIEW_TOOL
                                    ? (0, r.jsx)(sI, { className: er ? lU.R : void 0 })
                                    : V
                                      ? (0, r.jsx)(lR, {
                                            className: er ? lU.R : void 0,
                                            ref: W,
                                            deepLinkedQuestId: $,
                                            isLoadingQuestHomeHero: ee,
                                        })
                                      : (0, r.jsxs)(r.Fragment, {
                                            children: [(0, r.jsx)(s7, { ref: W }), !er && (0, r.jsx)(q, {})],
                                        }),
                          ],
                      }),
                  }),
              }),
          });
};
