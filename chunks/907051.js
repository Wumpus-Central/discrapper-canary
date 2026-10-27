(n.r(t), n.d(t, { QuestBarBountyContent: () => tJ, QuestBarQuestContent: () => tY, default: () => t1 }));
var s = n(477900),
    r = n(582128),
    i = n(323889),
    l = n(17928),
    a = n(840251),
    o = n(688151);
let u = new a.E([], o.$G.QUEST_BAR_RENDERED, { location: "quest bar rendered" });
var c = n(186111),
    d = n(738822),
    x = n(77870),
    C = n(466242),
    m = n(561844),
    E = n(792620),
    p = n(557637),
    f = n(657792),
    h = n(201805),
    g = n(617986),
    A = n(628088),
    S = n(968039),
    _ = n(503698),
    j = n.n(_),
    T = n(399513),
    R = n(475743),
    v = n(494280),
    y = n(859703),
    Q = n(971276),
    N = n(851936),
    U = n(568329),
    B = n(717421),
    F = n(765671),
    V = n(775602);
let b = r.createContext({ springConfig: {}, isExpanded: !1 });
function I(e) {
    let t = r.useMemo(
        () => ({ springConfig: e.springConfig, isExpanded: e.isExpanded }),
        [e.springConfig, e.isExpanded],
    );
    return (0, s.jsx)(b.Provider, { value: t, children: e.children });
}
function O(e) {
    let { children: t } = e,
        { springConfig: n, isExpanded: i } = r.useContext(b),
        a = (0, l.bG)([V.Ay], () => V.Ay.useReducedMotion),
        { ref: o, height: u = null } = (0, F.Ay)(),
        c = (0, R.Ay)(u) ?? null,
        [{ height: d }, x] = (0, B.z)(() => ({ from: { height: 0 }, config: n }));
    return (
        r.useLayoutEffect(() => {
            null !== u && x({ height: u, immediate: !i || a || null === c });
        }, [u, x, i, a, c]),
        (0, s.jsx)(T.animated.div, {
            style: { height: null === c ? "auto" : d, overflow: "hidden" },
            children: (0, s.jsx)("div", { style: { overflow: "hidden" }, ref: o, children: t }),
        })
    );
}
var q = n(241762),
    L = n(717695),
    k = n(272111),
    P = n(621466),
    M = n(192308),
    w = n(590202),
    D = n(652215),
    $ = n(190107),
    H = n(920690);
function W(e) {
    let {
            creative: t,
            collapsedContent: n,
            expandedContent: a,
            ImpressionTracker: o,
            ModeChangeTracker: u,
            StateTracker: x,
            renderCreativeContext: C,
        } = e,
        {
            collapsedHeight: E,
            canExpand: f,
            canCollapse: g,
            isEnrolled: A,
            springConfig: S,
        } = (function (e) {
            switch (e.type) {
                case i.p.QUEST: {
                    let t = e.quest.userStatus?.enrolledAt != null,
                        n = e.quest.userStatus?.completedAt != null;
                    return {
                        collapsedHeight: 70 + 78 * !!n,
                        canExpand: !n,
                        canCollapse: !n,
                        isEnrolled: t,
                        springConfig: t ? $.ZV : $.Ko,
                    };
                }
                case i.p.BOUNTY:
                case i.p.PLAYABLE:
                    return { collapsedHeight: 70, canExpand: !0, canCollapse: !0, isEnrolled: !1, springConfig: $.Ko };
            }
        })(t),
        _ = (0, h.gJ)(t),
        F = (0, v.Yh)(t),
        b = (0, N.L)({ quest: (0, v.Ys)(t), location: $.rE.QUESTS_BAR }),
        O = (0, Q.s)(),
        k = (0, l.bG)([y.A], () => null != y.A.questEnrollmentBlockedUntil),
        W = (0, l.bG)([c.A], () => c.A.hasLayers()),
        G = r.useRef(null),
        { hasError: z, isLoading: Y } = (0, p.zT)(),
        K = r.useContext(L.Z),
        X = K || (O && _ && !Y && !k),
        {
            isExpanded: Z,
            setIsExpanded: J,
            expandQuestBar: ee,
            isExpansionAnimationComplete: et,
            isVisibilityAnimationAtRest: en,
            expansionSpring: es,
            visibilitySpring: er,
        } = (function (e) {
            let { canExpand: t, isQuestBarVisible: n, springConfig: s } = e,
                i = (0, l.bG)([V.Ay], () => V.Ay.useReducedMotion),
                [a, o] = r.useState(!1),
                [u, c] = r.useState(!0),
                [d, x] = r.useState(!0),
                C = r.useRef(n),
                m = r.useCallback(
                    (e) => {
                        (!t && e) || (a !== e && (c(!1), o(e)));
                    },
                    [t, a],
                ),
                E = r.useCallback(() => {
                    m(!0);
                }, [m]),
                [{ expansionSpring: p }, f] = (0, B.z)(() => ({
                    from: { expansionSpring: 0 },
                    config: s,
                    onRest: () => {
                        c(!0);
                    },
                    onStart: () => {
                        c(!1);
                    },
                }));
            r.useEffect(() => {
                f({ expansionSpring: +!!a, immediate: i });
            }, [a, f, i]);
            let { visibilitySpring: h } = (0, B.z)({
                from: { visibilitySpring: 0 },
                to: { visibilitySpring: +!!n },
                config: { tension: 250, friction: 10, clamp: !0 },
                onRest: () => {
                    x(!0);
                },
                onStart: () => {
                    x(!1);
                },
            });
            return (
                r.useLayoutEffect(() => {
                    (n !== C.current && x(!1), (C.current = n));
                }, [n]),
                {
                    isExpanded: a,
                    setIsExpanded: m,
                    expandQuestBar: E,
                    isExpansionAnimationComplete: u,
                    isVisibilityAnimationAtRest: d,
                    expansionSpring: p,
                    visibilitySpring: h,
                    springConfig: s,
                }
            );
        })({ canExpand: f, isQuestBarVisible: X, springConfig: S }),
        ei = (0, R.Ay)(A),
        {
            handleCtxMenuOpened: el,
            handleCtxMenuClosed: ea,
            handleCtxMenuSelection: eo,
            handleGameSheetOpened: eu,
            handleGameSheetClosed: ec,
            handleFocusWithoutDelay: ed,
            handleBlur: ex,
            handleMouseEnter: eC,
            handleMouseLeave: em,
        } = (function (e) {
            let {
                    adCreativeId: t,
                    adCreativeType: n,
                    isExpanded: s,
                    setIsExpanded: l,
                    expandQuestBar: a,
                    canCollapse: o,
                    didEnroll: u,
                    impressionRef: c,
                } = e,
                x = r.useRef(-1),
                C = r.useRef(!1),
                [E, p] = r.useState(!1),
                [f, h] = r.useState(!1),
                g = r.useCallback(() => {
                    p(!0);
                }, []),
                A = r.useCallback(() => {
                    (p(!1), !C.current && o && l(!1));
                }, [o, l]),
                S = r.useCallback(() => {
                    (p(!1), o && l(!1), (C.current = !1));
                }, [o, l]),
                _ = r.useCallback(() => {
                    h(!0);
                }, []),
                j = r.useCallback(() => {
                    (h(!1), l(!1));
                }, [l]),
                T = r.useCallback(
                    function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (s) return;
                        let { withDelay: t = !1 } = e;
                        t ? (x.current = window.setTimeout(a, 75)) : a();
                    },
                    [a, s],
                ),
                R = r.useCallback(() => {
                    T();
                }, [T]),
                v = r.useCallback(
                    (e) => {
                        (window.clearTimeout(x.current),
                            ((0, P.vq)(e?.relatedTarget, Node) && e.currentTarget.contains(e.relatedTarget)) ||
                                E ||
                                f ||
                                C.current ||
                                l(!1));
                    },
                    [E, f, l],
                ),
                y = r.useCallback(() => {
                    (n === i.p.QUEST &&
                        (0, m.av)({
                            questId: t,
                            event: D.HAw.QUEST_HOVER,
                            properties: {
                                content_id: d.uF.QUEST_BAR,
                                content_name: (0, w.jO)(d.uF.QUEST_BAR),
                                impression_id: c.current?.getId(),
                            },
                            shouldExtendSession: !0,
                            sourceQuestContent: d.uF.QUEST_BAR_V2,
                        }),
                        (C.current = !0),
                        T({ withDelay: !0 }));
                }, [t, n, T, c]),
                Q = r.useCallback(() => {
                    (n === i.p.QUEST &&
                        (0, m.av)({
                            questId: t,
                            event: D.HAw.QUEST_HOVER_OFF,
                            properties: {
                                content_id: d.uF.QUEST_BAR,
                                content_name: (0, w.jO)(d.uF.QUEST_BAR),
                                impression_id: c.current?.getId(),
                            },
                            sourceQuestContent: d.uF.QUEST_BAR_V2,
                        }),
                        (C.current = !1),
                        v());
                }, [t, n, v, c]);
            (r.useEffect(() => {
                f && C.current && Q();
            }, [f, Q]),
                r.useLayoutEffect(() => {
                    u && C.current && a();
                }, [a, u]),
                r.useLayoutEffect(() => {
                    o && u && !C.current && l(!1);
                }, [o, u, l]));
            let N = (0, M.useHasAnyModalOpen)();
            return (
                r.useEffect(() => {
                    N && C.current && Q();
                }, [Q, N]),
                {
                    ctxMenuOpen: E,
                    gameSheetOpen: f,
                    handleCtxMenuOpened: g,
                    handleCtxMenuClosed: A,
                    handleCtxMenuSelection: S,
                    handleGameSheetOpened: _,
                    handleGameSheetClosed: j,
                    handleFocus: T,
                    handleFocusWithoutDelay: R,
                    handleBlur: v,
                    handleMouseEnter: y,
                    handleMouseLeave: Q,
                }
            );
        })({
            ...F,
            isExpanded: Z,
            setIsExpanded: J,
            expandQuestBar: ee,
            canCollapse: g,
            didEnroll: A && !0 !== ei,
            impressionRef: G,
        }),
        eE = r.useRef(null),
        ep = r.useRef(null),
        ef = r.useRef(null),
        eh = {
            hasAssetsError: z,
            isEligibleForQuests: O,
            isQuestBarVisible: X,
            isVisibilityAnimationAtRest: en,
            isLoadingAssets: Y,
            isQuestEnrollmentBlocked: k,
            impressionRef: G,
            ...F,
        },
        eg = !(!O || (!X && en && !Y) || (z && !K));
    return (
        !eg && (z && !K ? b.log("Not rendered due to asset error") : O || b.log("Not rendered due to ineligibility")),
        (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(x, { ...eh }),
                eg &&
                    (0, s.jsx)(o, {
                        overrideVisibility: !W && X,
                        children: (e, t) => (
                            (G.current = t.current),
                            (0, s.jsxs)("div", {
                                className: H.dK,
                                children: [
                                    X && (0, s.jsx)(u, { isExpanded: Z }),
                                    (0, s.jsx)(T.animated.div, {
                                        "data-testid": "quest-bar-container",
                                        "aria-hidden": !X,
                                        onMouseLeave: em,
                                        onMouseEnter: eC,
                                        onFocus: ed,
                                        onBlur: ex,
                                        className: j()(H.iE, { [H.Xc]: !X, [H.uv]: X && en }),
                                        style: { height: er.to({ range: [0, 1], output: [0, E] }) },
                                        children: (0, s.jsx)(T.animated.div, {
                                            className: j()(H.FG, { [H.E$]: Z }),
                                            children: (0, s.jsx)(I, {
                                                springConfig: S,
                                                isExpanded: Z,
                                                children: (0, s.jsx)(U.oK, {
                                                    expandedContentRef: eE,
                                                    collapsedContentRef: ep,
                                                    overlayRef: ef,
                                                    expansionSpring: es,
                                                    children: (0, s.jsx)(q.R, {
                                                        isExpanded: Z,
                                                        isExpansionAnimationComplete: et,
                                                        onCtxMenuClose: ea,
                                                        onCtxMenuOpen: el,
                                                        onCtxMenuSelect: eo,
                                                        onGameSheetOpen: eu,
                                                        onGameSheetClose: ec,
                                                        collapsedHeight: E,
                                                        children: (C ?? ((e) => e))(
                                                            (0, s.jsxs)(s.Fragment, {
                                                                children: [
                                                                    n,
                                                                    a,
                                                                    (0, s.jsx)("div", { ref: ef, className: H.Lw }),
                                                                ],
                                                            }),
                                                        ),
                                                    }),
                                                }),
                                            }),
                                        }),
                                    }),
                                ],
                            })
                        ),
                    }),
            ],
        })
    );
}
var G = n(818276),
    z = n(963713),
    Y = n(776310),
    K = n(333007),
    X = n(398025);
function Z() {
    let e = document.body.style.getPropertyValue("--custom-guild-sidebar-width").slice(0, -2);
    return parseInt("" !== e ? e : "375");
}
var J = n(536283),
    ee = n(489811);
let et = (e) => {
    let { progressBarRef: t, isHovered: n } = e,
        { quest: i } = r.useContext(z.$0),
        { isExpanded: a } = (0, q.H)(),
        { expansionSpring: o, overlayRef: u } = r.useContext(U.PW),
        { completionSpring: d, startCompletionAnimation: x } = (function () {
            let [{ spring: e }, t] = (0, B.z)(() => ({ spring: 0 }), "animate-always");
            return {
                completionSpring: e,
                startCompletionAnimation: r.useCallback(() => {
                    (t({ spring: 1 }), t({ spring: 0, delay: 2e3 }));
                }, [t]),
            };
        })(),
        C = i.userStatus?.completedAt != null,
        m = r.useRef(!1),
        E = (0, l.bG)([V.Ay], () => V.Ay.useReducedMotion),
        p = r.useRef(null),
        f = (0, l.bG)([c.A], () => c.A.hasLayers()),
        h = (0, R.Ay)(f),
        [g, A] = r.useState(null),
        [S, _] = r.useState(null),
        v = r.useRef(new Y.OH({ gravity: 0, wind: 0 })),
        y = (0, Y.f9)(g, S),
        Q = r.useMemo(() => [k.r3], []),
        N = r.useCallback(() => {
            if (E) return;
            let e = t.current,
                n = p.current;
            if (null != n && null != e && y.isReady) {
                var s, r, i, l;
                let { x: t, y: a } = e.getBoundingClientRect(),
                    { x: o, y: u } = n.getBoundingClientRect();
                y.createMultipleConfetti(
                    ((s = t - o),
                    (r = a - u),
                    (i = e.clientHeight),
                    (l = e.clientWidth),
                    {
                        ...J.Mw,
                        position: { type: "static-random", minValue: { x: s, y: r }, maxValue: { x: s + i, y: r + l } },
                        velocity: { type: "static-random", minValue: { x: -20, y: -20 }, maxValue: { x: 20, y: 20 } },
                        opacity: { type: "linear", value: 2, addValue: -0.1 },
                        dragCoefficient: { type: "static", value: 0.166 },
                        size: { type: "static-random", minValue: 2, maxValue: 3 },
                    }),
                    100,
                );
            }
        }, [t, p, y, E]),
        F = (0, R.Ay)(a);
    return (r.useEffect(() => {
        C && a && !F && (x(), N());
    }, [a, C, x, N, F]),
    r.useEffect(() => {
        C &&
            !f &&
            h &&
            setTimeout(() => {
                (x(), N());
            }, 200);
    }, [C, h, f, x, N]),
    r.useEffect(() => {
        y.isReady && (!m.current && C && (x(), N()), (m.current = C));
    }, [C, m, N, x, y]),
    r.useEffect(() => {
        n && C && (x(), N());
    }, [n, C, x, N]),
    E)
        ? null
        : (0, s.jsxs)("div", {
              className: ee.iE,
              "aria-hidden": "true",
              ref: p,
              children: [
                  (0, s.jsx)(T.animated.div, { className: ee.Tp, style: { opacity: (0, X.a)(d) } }),
                  (0, s.jsx)(T.animated.div, { className: j()(ee.sJ, ee.ix), style: { opacity: (0, X.a)(d) } }),
                  (0, s.jsxs)(T.animated.div, {
                      className: ee.KG,
                      style: { transform: o.to({ range: [0, 1], output: [-35, 0] }).to((e) => `translateY(${e}px)`) },
                      children: [
                          (0, s.jsx)(Y.Fk, { ref: A, className: ee.t_, environment: v.current }),
                          (0, s.jsx)(Y.K_, {
                              ref: _,
                              sprites: ["/assets/b909790cf1d80597.svg"],
                              colors: Q,
                              spriteWidth: J.wn,
                              spriteHeight: J.wn,
                          }),
                          null != u.current &&
                              (0, K.createPortal)(
                                  (0, s.jsx)(T.animated.div, {
                                      className: j()(ee.sJ, ee.d7),
                                      style: { opacity: (0, X.a)(d) },
                                  }),
                                  u.current,
                              ),
                      ],
                  }),
              ],
          });
};
var en = n(821609),
    es = n(3738),
    er = n(971649),
    ei = n(651892),
    el = n(620954),
    ea = n(814793),
    eo = n(753386),
    eu = n(608935),
    ec = n(887899),
    ed = n(79545),
    ex = n(862611),
    eC = n(630037),
    em = n(105292),
    eE = n(191559);
function ep(e) {
    let { quest: t, sourceQuestContent: n, taskDetails: r } = e,
        i = (0, x.Hv)(),
        l = (0, s.jsx)(en.$, {
            variant: "primary",
            fullWidth: !0,
            onClick: function () {
                if (i) {
                    ((0, m.Y5)({
                        questId: t.id,
                        questContent: d.uF.QUEST_BAR_V2,
                        questContentCTA: w.Cy.QUEST_ACCESS_SUSPENDED,
                        sourceQuestContent: n,
                    }),
                        (0, g.FS)());
                    return;
                }
                let e = t.userStatus?.enrolledAt == null ? w.Cy.ACCEPT_QUEST : w.Cy.WATCH_VIDEO;
                (0, g.d5)({
                    quest: t,
                    questContent: d.uF.QUEST_BAR_V2,
                    sourceQuestContent: n,
                    sourceQuestContentCTA: e,
                });
            },
            size: "sm",
            text: (0, eo.WM)(r),
            "aria-disabled": i || void 0,
        });
    return i ? (0, s.jsx)(eu.A, { children: l }) : l;
}
function ef(e) {
    let { quest: t, sourceQuestContent: n } = e,
        r = (0, er.wW)(),
        i = (0, ei.wr)(t);
    return (0, s.jsx)(en.$, {
        size: "sm",
        fullWidth: !0,
        onClick: () =>
            (0, el.pu)(t, {
                content: d.uF.QUEST_BAR_V2,
                ctaContent: w.Cy.OPEN_GAME_LINK,
                impressionId: r(),
                sourceQuestContent: n,
            }),
        text: i,
    });
}
function eh(e) {
    let { quest: t, sourceQuestContent: n } = e,
        r = (0, er.wW)();
    return (0, s.jsx)(en.$, {
        fullWidth: !0,
        onClick: () =>
            (0, el.se)(
                { quest: t },
                {
                    content: d.uF.QUEST_BAR_V2,
                    ctaContent: w.Cy.CONNECT_CONSOLE,
                    impressionId: r(),
                    sourceQuestContent: n,
                },
            ),
        size: "sm",
        text: em.intl.string(em.t.csptqV),
    });
}
function eg(e) {
    let { quest: t } = e,
        n = (0, es.NA)({ quest: t }),
        { launchInGameActivity: r } = (0, x.zW)(t);
    return (0, ea.vA)(t)
        ? (0, s.jsx)(en.$, { fullWidth: !0, variant: "primary", icon: (0, g.Oz)(t), onClick: r, size: "sm", text: n })
        : null;
}
function eA(e) {
    let {
            quest: t,
            sourceQuestContent: n,
            taskDetails: r,
            popoutTargetElementRef: i,
            onGameSheetOpened: l,
            onGameSheetClosed: a,
        } = e,
        { applications: o } = r;
    return (0, s.jsx)(ex.A, {
        quest: t,
        sourceQuestContent: n,
        applications: o ?? [],
        targetElementRef: i,
        onGameSheetOpened: l,
        onGameSheetClosed: a,
        children: (e) =>
            (0, s.jsx)(en.$, {
                variant: "secondary",
                fullWidth: !0,
                size: "sm",
                text: em.intl.string(em.t["93PTEs"]),
                ...e,
            }),
    });
}
function eS(e) {
    let { quest: t, ctaLabel: n, onClick: r, questContent: i = d.uF.QUEST_BAR_V2, sourceQuestContent: l } = e,
        a = (0, eC.D)({ quest: t, questContent: i, sourceQuestContent: l, onBeforeClaim: r });
    return (0, s.jsx)(en.$, {
        fullWidth: !0,
        onClick: a,
        text: n ?? em.intl.string(em.t.cfY4PE),
        "data-testid": "quest-bar-claim-reward-button",
        variant: "primary",
        size: "sm",
    });
}
function e_(e) {
    let {
            sourceQuestContent: t,
            awaitingConsoleConnections: n,
            hasMadeProgress: i,
            isProgressing: l,
            popoutTargetElementRef: a,
        } = e,
        { quest: o, taskDetails: u } = r.useContext(z.$0),
        { onGameSheetOpen: c, onGameSheetClose: C } = (0, q.H)(),
        [m] = (0, x.Qo)(o, u),
        p = o.userStatus?.completedAt != null,
        f = (0, E.vv)(o),
        h = (0, E.I6)(o),
        g = m !== d.X0.SELECT && !i && !l,
        A = null;
    return (
        p
            ? (A = (0, s.jsx)(eS, { quest: o, sourceQuestContent: t }))
            : h
              ? (A = (0, s.jsx)(ec.A, {
                    quest: o,
                    surface: ed.V3.QUEST_BAR_FOOTER,
                    size: "sm",
                    analyticsCtxQuestContent: d.uF.QUEST_BAR_V2,
                    analyticsCtxSourceQuestContent: t,
                }))
              : f
                ? (A = (0, s.jsx)(ep, { quest: o, sourceQuestContent: t, taskDetails: u }))
                : (0, ea.vA)(o)
                  ? (A = (0, s.jsx)(eg, { quest: o }))
                  : m === d.X0.CONSOLE && n
                    ? (A = (0, s.jsx)(eh, { quest: o, sourceQuestContent: t }))
                    : g && (0, ea.ui)(o)
                      ? (A = (0, s.jsx)(eA, {
                            quest: o,
                            sourceQuestContent: t,
                            taskDetails: u,
                            popoutTargetElementRef: a,
                            onGameSheetOpened: c,
                            onGameSheetClosed: C,
                        }))
                      : g && (A = (0, s.jsx)(ef, { quest: o, sourceQuestContent: t })),
        null == A ? null : (0, s.jsx)("div", { className: eE.lO, children: A })
    );
}
function ej(e) {
    return (0, s.jsx)(e_, { ...e, popoutTargetElementRef: e.parentContainerRef });
}
var eT = n(834730),
    eR = n(62405),
    ev = n(453384),
    ey = n(649480);
let eQ = function (e) {
    let { isExpanded: t, contentLocation: n, progressBarRef: i, percentComplete: l, popoutTargetElementRef: a } = e,
        { quest: o, taskDetails: u } = r.useContext(z.$0),
        { onGameSheetOpen: c, onGameSheetClose: C } = (0, q.H)(),
        { hasAlreadyLinked: m, onClickGameTitle: E } = r.useContext(z.SH),
        [p] = (0, x.Qo)(o, u),
        f = (0, es.VX)(o, m),
        h = (0, es.tH)({
            quest: o,
            isExpanded: t,
            activeScreen: p,
            sourceQuestContent: d.uF.QUEST_BAR_V2,
            popoutTargetElementRef: a,
            onGameSheetOpened: c,
            onGameSheetClosed: C,
            hasAlreadyLinked: m,
            onClickGameTitle: E,
        });
    return (0, s.jsxs)("div", {
        className: ey.Z0,
        children: [
            (0, s.jsx)(U.dN, {
                inState: n,
                id: "progress-bar",
                ref: i,
                children: (e) =>
                    (0, s.jsx)(ev.A, {
                        ref: e,
                        style: "small",
                        percentComplete: l,
                        size: 42,
                        children: (0, s.jsx)(eR.A, {
                            fullWidth: !0,
                            quest: o,
                            location: $.rE.QUESTS_BAR,
                            questContent: d.uF.QUEST_BAR_V2,
                            autoplay: !1,
                            sourceQuestContent: d.uF.QUEST_BAR_V2,
                        }),
                    }),
            }),
            (0, s.jsxs)("div", {
                className: ey.NZ,
                children: [
                    (0, s.jsx)(U.dN, {
                        inState: n,
                        id: "progress-title",
                        children: (e) =>
                            (0, s.jsx)(eT.E, {
                                ref: e,
                                className: ey.FZ,
                                color: "text-strong",
                                variant: "text-sm/semibold",
                                children: f,
                            }),
                    }),
                    (0, s.jsx)(U.dN, {
                        inState: n,
                        id: "progress-subtitle",
                        isTextTransition: !0,
                        children: (e) =>
                            (0, s.jsx)(eT.E, {
                                ref: e,
                                className: ey.FZ,
                                color: "text-subtle",
                                variant: "text-xs/normal",
                                children: h,
                            }),
                    }),
                ],
            }),
        ],
    });
};
var eN = n(939249),
    eU = n(365199),
    eB = n(270045),
    eF = n(316878);
function eV() {
    let { quest: e } = r.useContext(z.$0),
        { onCtxMenuOpen: t, onCtxMenuClose: n, onCtxMenuSelect: i } = (0, q.H)(),
        l = (0, x.S5)(e.config.expiresAt);
    return (0, s.jsxs)("div", {
        className: eF.pS,
        children: [
            (0, s.jsx)(eT.E, {
                variant: "text-xxs/medium",
                className: j()(eF.Uu, eF.TK),
                children: em.intl.format(em.t["pX+fmn"], { expirationDate: l }),
            }),
            (0, s.jsx)(eB.C, {
                onOpen: t,
                onClose: n,
                onSelect: i,
                questContent: d.uF.QUEST_BAR_V2,
                quest: e,
                shouldShowDisclosure: !1,
                showShareLink: !0,
                sourceQuestContent: d.uF.QUEST_BAR_V2,
                children: (e) =>
                    (0, s.jsx)(eN.D, {
                        ...e,
                        className: eF.rb,
                        "aria-label": em.intl.string(em.t.DEoVWZ),
                        children: (0, s.jsx)(eU.MoreHorizontalIcon, {
                            size: "md",
                            color: "currentColor",
                            className: j()(eF.Bx, eF.U9),
                        }),
                    }),
            }),
        ],
    });
}
var eb = n(379073);
function eI(e) {
    let { progressBarRef: t } = e,
        { quest: n, taskDetails: i } = r.useContext(z.$0),
        l = n.userStatus?.completedAt != null,
        a = n.userStatus?.enrolledAt != null,
        o = (0, x.I3)(n),
        u = null != o ? o.percentComplete : i.percentComplete,
        c = r.useRef(null);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            l && (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(eV, {}), (0, s.jsx)("div", { className: eb.y })] }),
            a
                ? (0, s.jsx)(eQ, {
                      contentLocation: "collapsed",
                      progressBarRef: t,
                      isExpanded: !1,
                      percentComplete: u,
                  })
                : null,
            l &&
                (0, s.jsx)("div", {
                    ref: c,
                    children: (0, s.jsx)(ej, {
                        parentContainerRef: c,
                        awaitingConsoleConnections: !1,
                        hasMadeProgress: !0,
                        isProgressing: !1,
                        sourceQuestContent: d.uF.QUEST_BAR_V2,
                    }),
                }),
        ],
    });
}
function eO() {
    let { quest: e } = r.useContext(z.$0),
        t = e.userStatus?.completedAt != null,
        n = e.userStatus?.enrolledAt != null,
        i = r.useRef(null),
        [l, a] = r.useState(!1);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            t && (0, s.jsx)(et, { progressBarRef: i, isHovered: l }),
            (0, s.jsx)(G.A, {
                layoutVariant: n ? "inset" : "flush",
                backgroundImage: t ? `linear-gradient(90deg, ${k.V1}, ${k.us})` : void 0,
                onMouseEnter: () => a(!0),
                onMouseLeave: () => a(!1),
                children: (0, s.jsx)(eI, { progressBarRef: i }),
            }),
        ],
    });
}
var eq = n(742860),
    eL = n(290136),
    ek = n(661531),
    eP = n(57718),
    eM = n(139210),
    ew = n(393824);
let eD = function (e) {
    let { isFullyExpanded: t, partnerBranding: n } = e,
        i = {
            label: !(function () {
                let [e, t] = r.useState(() => 270 > Z());
                return (
                    r.useEffect(() => {
                        let e = new MutationObserver(() => {
                            t(270 > Z());
                        });
                        return (
                            e.observe(document.body, { attributes: !0, attributeFilter: ["style"] }),
                            () => e.disconnect()
                        );
                    }, []),
                    e
                );
            })(),
        }.label,
        a = (0, l.bG)([V.Ay], () => V.Ay.useReducedMotion),
        { quest: o } = r.useContext(z.$0),
        { expansionSpring: u } = r.useContext(U.PW),
        c = i ? -4 : 6;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(T.animated.div, {
                className: ew.tE,
                style: {
                    transform: (0, T.to)(
                        [
                            u.to({ range: [0, 1], output: [0, 0] }),
                            u.to({ range: [0, 1], output: [0, 82] }),
                            u.to({ range: [0, 1], output: [1, 1.3333333333333333] }),
                        ],
                        (e, t, n) => `translate(${e}px, ${t}px) scale(${n})`,
                    ),
                },
                children: (0, s.jsx)(eR.A, {
                    learnMoreStyle: "text",
                    learnMoreFontSize: t ? 9 : void 0,
                    quest: o,
                    location: $.rE.QUESTS_BAR,
                    questContent: d.uF.QUEST_BAR_V2,
                    autoplay: t && !a,
                    sourceQuestContent: d.uF.QUEST_BAR_V2,
                    style: { width: 48, height: 48, marginRight: 8, borderRadius: 6 },
                }),
            }),
            (0, s.jsxs)(T.animated.div, {
                className: j()(ew.pm, { [ew.nd]: i }),
                style: {
                    transform: (0, T.to)(
                        [u.to({ range: [0, 1], output: [0, -48] }), u.to({ range: [0, 1], output: [0, c] })],
                        (e, t) => `translate(${e}px, ${t}px)`,
                    ),
                },
                children: [
                    (0, s.jsx)("div", { className: j()({ [ew.Iu]: !i }), children: n }),
                    (0, s.jsx)(T.animated.div, {
                        className: j()(ew.ol, { [ew.yZ]: i }),
                        style: { opacity: (0, X.a)(u.to({ range: [0, 1], output: [i ? 1 : 0.7, 0] })) },
                        children: (0, s.jsx)(eT.E, {
                            color: "text-overlay-light",
                            lineClamp: 1,
                            variant: "text-xs/medium",
                            children: em.intl.string(em.t["3mgEQf"]),
                        }),
                    }),
                ],
            }),
        ],
    });
};
var e$ = n(886030);
let eH = (0, T.animated)(eP.Ay);
function eW() {
    let e = (0, er.wW)(),
        { expansionSpring: t } = r.useContext(U.PW),
        { quest: n } = r.useContext(z.$0),
        {
            onCtxMenuOpen: l,
            onCtxMenuClose: a,
            onCtxMenuSelect: o,
            isExpanded: u,
            isExpansionAnimationComplete: c,
        } = (0, q.H)(),
        x = r.useMemo(() => ({ type: i.p.QUEST, quest: n }), [n]),
        C = r.useCallback(() => {
            (0, g.Zc)(x, {
                content: d.uF.QUEST_BAR_V2,
                ctaContent: w.Cy.OPEN_DISCLOSURE,
                sourceQuestContent: d.uF.QUEST_BAR_V2,
            });
        }, [x]),
        m = r.useCallback(() => {
            (0, el.pu)(n, {
                content: d.uF.QUEST_BAR_HEADER,
                ctaContent: w.Cy.OPEN_GAME_LINK,
                impressionId: e(),
                sourceQuestContent: d.uF.QUEST_BAR_V2,
            });
        }, [e, n]),
        E = u && c,
        p = (0, s.jsx)(eN.D, {
            onClick: m,
            className: j()(e$.vk, { [e$.wm]: E }),
            children: (0, s.jsx)(eH, {
                quest: n,
                withGameTile: !1,
                logotypeClassName: e$.Iu,
                logotypeStyle: {
                    height: 24,
                    maxWidth: 92,
                    transform: (0, T.to)([t.to({ range: [0, 1], output: [1, 1] })], (e) => `scale(${e})`),
                },
            }),
        });
    return (0, s.jsxs)(eM.A, {
        className: e$.Ht,
        children: [
            (0, s.jsx)(eM.h, { className: e$.Tu }),
            (0, s.jsx)(eD, { isFullyExpanded: E, partnerBranding: p }),
            (0, s.jsxs)(eM.h, {
                className: e$.P0,
                children: [
                    (0, s.jsxs)(eN.D, {
                        className: e$.y8,
                        onClick: C,
                        children: [
                            (0, s.jsx)(eT.E, {
                                color: "text-overlay-light",
                                variant: "text-xs/normal",
                                children: em.intl.string(em.t.o6FLcF),
                            }),
                            (0, s.jsx)(eL.CircleQuestionIcon, { color: ek.A.colors.WHITE, className: e$.P$ }),
                        ],
                    }),
                    (0, s.jsx)(eB.C, {
                        onOpen: l,
                        onClose: a,
                        onSelect: o,
                        questContent: d.uF.QUEST_BAR_V2,
                        quest: n,
                        shouldShowDisclosure: !0,
                        showShareLink: !0,
                        sourceQuestContent: d.uF.QUEST_BAR_V2,
                        children: (e) =>
                            (0, s.jsx)(eN.D, {
                                ...e,
                                className: j()(e$.uJ, e$.rb),
                                "aria-label": em.intl.string(em.t.DEoVWZ),
                                children: (0, s.jsx)(eU.MoreHorizontalIcon, {
                                    size: "md",
                                    color: "currentColor",
                                    className: j()(e$.Bx, e$.ON),
                                }),
                            }),
                    }),
                ],
            }),
        ],
    });
}
n(801541);
var eG = n(889137),
    ez = n(417270),
    eY = n(782134),
    eK = n(297264),
    eX = n(825484),
    eZ = n(408278),
    eJ = n(921853),
    e0 = n(409626),
    e1 = n(427495),
    e2 = n(405670),
    e7 = n(112142),
    e3 = n(646917),
    e6 = n(291749),
    e8 = n(576761),
    e9 = n(117634),
    e5 = n(976019),
    e4 = n(442734),
    te = n(114046),
    tt = n(695366),
    tn = n(507395),
    ts = n(144779),
    tr = n(30370),
    ti = n(178540),
    tl = n(780964),
    ta = n(766075),
    to = n(52093),
    tu = n(575630);
function tc(e) {
    let { text: t, quest: n, sourceQuestContent: r } = e,
        l = (0, er.wW)();
    return (0, s.jsx)(eN.D, {
        className: tu.Z0,
        onClick: () => {
            ((0, tn.r)({
                type: ts.F.CLICK_INTERNAL,
                adCreativeType: i.p.QUEST,
                adCreativeId: n.id,
                questContentCTA: w.Cy.VIEW_CONSOLE_CONNECTIONS_LINK,
                surfaceId: d.uF.QUEST_BAR_V2,
                sourceQuestContent: r,
                impressionId: l(),
            }),
                (0, ta.openUserSettings)(tl.X.CONNECTIONS_CATEGORY));
        },
        children: (0, s.jsx)(eT.E, { "aria-label": t, color: "none", variant: "text-xxs/normal", children: t }),
    });
}
function td(e) {
    let { xboxAndPlaystationAccounts: t, quest: n, sourceQuestContent: r } = e;
    return t.length > 0
        ? (0, s.jsx)(tc, { text: em.intl.string(em.t["qiS+xj"]), quest: n, sourceQuestContent: r })
        : null;
}
function tx(e) {
    return (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(to.L5, { children: em.intl.string(em.t.EJFSvD) }), (0, s.jsx)(td, { ...e })],
    });
}
var tC = n(607886);
function tm(e) {
    return (0, s.jsx)(eT.E, {
        className: tC.eW,
        color: "text-muted",
        variant: "text-xxs/normal",
        children: e.children,
    });
}
function tE(e) {
    let { quest: t, useReducedMotion: n } = e,
        l = (0, h.H1)(t.id, d.uF.QUEST_BAR_V2, d.uF.QUEST_BAR_V2),
        a = (0, h.Xf)({ useReducedMotion: n }),
        o = (0, er.wW)(),
        u = (0, ti.O)((e) => e.getErrorHints(t.id)),
        { startingConsoleQuest: c, startConsoleQuest: C } = (0, x.Wj)({
            questId: t.id,
            beforeRequest: () => {
                ((0, tn.r)({
                    type: ts.F.CLICK_INTERNAL,
                    adCreativeType: i.p.QUEST,
                    adCreativeId: t.id,
                    questContentCTA: w.Cy.DEFIBRILLATOR,
                    surfaceId: d.uF.QUEST_BAR_V2,
                    sourceQuestContent: d.uF.QUEST_BAR_V2,
                    impressionId: o(),
                }),
                    a.startAnimation());
            },
            afterRequest: a.stopAnimation,
        }),
        { header: m, renderBody: E } = r.useMemo(() => {
            let e = u.length > 0,
                n = t.config.messages.gameTitle;
            return {
                header: e
                    ? (0, ea.ui)(t)
                        ? em.intl.string(em.t.N33EuL)
                        : em.intl.formatToPlainString(em.t["28Ql27"], { gameTitle: n })
                    : (0, ea.ui)(t)
                      ? em.intl.string(em.t.YstzGO)
                      : em.intl.formatToPlainString(em.t.gX0Qcx, { gameTitle: n }),
                renderBody: e
                    ? function () {
                          return (0, s.jsx)(s.Fragment, {
                              children: u.map((e, n) => {
                                  if (e.type === te._.EXPIRED_CREDENTIAL) {
                                      let r = tr.A.getAccount(e.connected_account_id, e.connected_account_type),
                                          i = (0, el.IG)(e),
                                          l = (0, el.$J)(e);
                                      return (0, s.jsx)(
                                          tm,
                                          {
                                              children: em.intl.format(i, {
                                                  account_name: r?.name,
                                                  onClick: () => {
                                                      (0, el.v0)(
                                                          { quest: t, platformType: l },
                                                          {
                                                              content: d.uF.QUEST_BAR,
                                                              ctaContent: w.Cy.DEFIBRILLATOR_RECONNECT_CONSOLE,
                                                              impressionId: o(),
                                                              sourceQuestContent: d.uF.QUEST_BAR_V2,
                                                          },
                                                      );
                                                  },
                                              }),
                                          },
                                          n,
                                      );
                                  }
                                  return (0, s.jsx)(tm, { children: e.message }, n);
                              }),
                          });
                      }
                    : () =>
                          (0, s.jsx)(eT.E, {
                              className: tC.eW,
                              color: "text-muted",
                              variant: "text-xxs/normal",
                              children: (0, ea.ui)(t)
                                  ? em.intl.string(em.t.bUyEZZ)
                                  : em.intl.format(em.t.GXqvC1, { gameTitle: n }),
                          }),
            };
        }, [u, t, o]);
    return (0, s.jsxs)("div", {
        className: tC.XK,
        children: [
            (0, s.jsxs)("div", {
                className: tC.oK,
                children: [
                    (0, s.jsx)(tt.E, {
                        size: "custom",
                        color: "currentColor",
                        className: 0 === u.length ? tC.pH : tC.JA,
                        width: 16,
                        height: 16,
                    }),
                    (0, s.jsx)(eT.E, { variant: "text-xs/medium", children: m }),
                    (0, s.jsx)(eN.D, {
                        className: j()(tC.w, { [tC.r9]: c }),
                        onClick: () => C(),
                        children: a.render(),
                    }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: j()({ [tC.Iu]: c }),
                children: [E(), 0 === u.length ? null : (0, s.jsx)(tm, { children: l })],
            }),
        ],
    });
}
let tp = function (e) {
    let { quest: t, taskDetails: n } = e,
        i = (0, l.bG)([V.Ay], () => V.Ay.useReducedMotion),
        a = (0, x.Du)(),
        o = r.useMemo(
            () => (0, el.bg)(t).filter((e) => null != a.xboxAndPlaystationAccounts.find((t) => t.type === e)),
            [a.xboxAndPlaystationAccounts, t],
        ),
        {
            steps: u,
            hasConnectedAccounts: c,
            isProgressingQuestForLaunchedGame: C,
            isQuestComplete: m,
        } = r.useMemo(() => {
            let e = o.length > 0,
                r = e && (0, E.YL)(t),
                i = t.config.messages.gameTitle,
                l = t.userStatus?.completedAt != null;
            return {
                steps: [
                    {
                        renderContent: () => (0, s.jsx)(tx, { ...a, quest: t, sourceQuestContent: d.uF.QUEST_BAR_V2 }),
                        isComplete: e || r || l,
                    },
                    {
                        renderContent: () =>
                            (0, s.jsx)(to.L5, {
                                children: (0, ea.ui)(t)
                                    ? em.intl.string(em.t["5tXqFe"])
                                    : em.intl.formatToPlainString(em.t["+8JB6Y"], { gameTitle: i }),
                            }),
                        isComplete: r || l,
                    },
                    {
                        renderContent: () =>
                            (0, s.jsx)(to.L5, {
                                children: em.intl.formatToPlainString(em.t.HhfrYS, { numMinutes: n.targetMinutes }),
                            }),
                        isComplete: l,
                    },
                ],
                hasConnectedAccounts: e,
                isProgressingQuestForLaunchedGame: r,
                isQuestComplete: l,
            };
        }, [a, o.length, t, n.targetMinutes]);
    return (0, s.jsx)(to.Ay, {
        heading: em.intl.string(em.t.UPWlJu),
        steps: u,
        children: c && !C && !m && (0, s.jsx)(tE, { useReducedMotion: i, quest: t }),
    });
};
(n(134528), n(947204));
var tf = n(934225);
function th(e) {
    let { header: t, children: n } = e;
    return (0, s.jsxs)("div", {
        className: tf.Nr,
        children: [
            (0, s.jsxs)("div", {
                className: tf.wx,
                children: [
                    (0, s.jsx)(tt.E, {
                        size: "custom",
                        color: "currentColor",
                        className: tf.Kk,
                        width: 16,
                        height: 16,
                    }),
                    (0, s.jsx)(eK.D, { color: "text-default", variant: "heading-sm/medium", children: t }),
                ],
            }),
            (0, s.jsx)(eT.E, { color: "text-muted", variant: "text-xs/normal", className: tf.r2, children: n }),
        ],
    });
}
let tg = function (e) {
    let { quest: t } = e,
        n = (0, x.aC)(t);
    if (0 === n.length) return null;
    let r = n.at(0);
    return r === em.intl.string(em.t.BV6xDm)
        ? (0, s.jsx)(th, { header: em.intl.string(em.t.onh6ct), children: em.intl.string(em.t.arVHRA) })
        : r === em.intl.string(em.t.MFGxFM)
          ? (0, s.jsx)(th, { header: em.intl.string(em.t.JPihZA), children: em.intl.string(em.t.MFGxFM) })
          : null;
};
var tA = n(31300),
    tS = n(687966),
    t_ = n(35558);
let tj = function (e) {
    let { onDesktop: t, onConsole: n } = e;
    return (0, s.jsxs)(eX.e, {
        direction: "vertical",
        fullWidth: !0,
        className: t_.G,
        size: "sm",
        children: [
            (0, s.jsx)(en.$, {
                onClick: t,
                text: em.intl.string(em.t["QXc01+"]),
                variant: "secondary",
                icon: tA.k,
                iconPosition: "end",
            }),
            (0, s.jsx)(en.$, {
                onClick: n,
                text: em.intl.string(em.t["8lAfuB"]),
                variant: "secondary",
                icon: tS.GameControllerIcon,
                iconPosition: "end",
            }),
        ],
    });
};
var tT = n(333949),
    tR = n(158247);
function tv(e) {
    let { onClick: t } = e,
        { quest: n } = r.useContext(z.$0),
        i = (0, l.bG)([V.Ay], () => V.Ay.useReducedMotion),
        [a, o] = r.useState(!1),
        u = (0, e6.tW)(n, e6.fY.QUEST_BAR_HERO_VIDEO, void 0, !1),
        c = (0, e6.tW)(n, e6.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1),
        d = (0, e2.Kr)((e) => e.getVideoProgressState)(n.id),
        x = n.userStatus?.completedAt != null && d === e2.K2.COMPLETED,
        C = !x && (!i || a);
    return (0, s.jsxs)(eN.D, {
        className: tR.QO,
        onClick: t,
        onMouseEnter: function () {
            i && !a && o(!0);
        },
        onMouseLeave: function () {
            i && a && o(!1);
        },
        children: [
            null != c &&
                (0, s.jsx)(p._M, {
                    id: "QuestBarContentExpanded_videoThumbnail",
                    children: (e) => (0, s.jsx)("img", { ref: e, alt: "", src: c.url, className: tR.Ue }),
                }),
            null != u
                ? (0, s.jsx)(p._M, {
                      id: "QuestBarContentExpanded_video",
                      children: (e) =>
                          (0, s.jsx)(tT.X, {
                              ref: e,
                              isHovered: a,
                              autoPlay: !1,
                              asset: u,
                              poster: c?.url,
                              className: j()(tR.NM, { [tR.Gc]: C }),
                          }),
                  })
                : null,
            (0, s.jsx)("div", {
                className: tR.LT,
                children: x
                    ? (0, s.jsx)(ez.RetryIcon, { color: ek.A.colors.WHITE, className: tR.t })
                    : (0, s.jsx)(eY.PlayIcon, { color: ek.A.colors.WHITE, className: tR.t }),
            }),
        ],
    });
}
function ty(e) {
    let { quest: t } = e;
    return (0, s.jsx)(eR.A, {
        className: j()(tR.Qq, tR.wq),
        learnMoreStyle: "text",
        quest: t,
        location: $.rE.QUESTS_BAR,
        questContent: d.uF.QUEST_BAR_V2,
        sourceQuestContent: d.uF.QUEST_BAR_V2,
    });
}
function tQ(e) {
    let { isCtaInteractable: t, containerRef: n, onAcceptQuest: i } = e,
        { quest: a, taskDetails: o } = r.useContext(z.$0),
        { onGameSheetOpen: u, onGameSheetClose: c } = (0, q.H)(),
        { expansionSpring: C } = r.useContext(U.PW),
        m = r.useRef(null),
        E = (0, l.bG)([y.A], () => y.A.isEnrolling(a.id), [a]),
        f = r.useMemo(() => (0, e6.tW)(a, e6.fY.QUEST_BAR_HERO), [a]),
        h = (0, es.NA)({ quest: a }),
        A = r.useMemo(() => (0, e6.tW)(a, e6.fY.HERO_IMAGE), [a]),
        S = r.useMemo(() => (null == A ? {} : { backgroundImage: `url(${A.url})` }), [A]),
        _ = e7.t.useConfig({ location: $.rE.QUESTS_BAR }),
        R = (0, es.mU)({
            quest: a,
            location: $.rE.QUESTS_BAR,
            taskDetails: o,
            sourceQuestContent: d.uF.QUEST_BAR_V2,
            popoutTargetElementRef: m,
            onGameSheetOpened: u,
            onGameSheetClosed: c,
            gameProfileSource: e0.GameProfileSources.QuestBar,
        }),
        v = (0, ed.Pd)(a),
        Q = (0, e3.z)(),
        N = (0, x.SD)(a, Q),
        B = Q === e8.MA.NITRO && N;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)("div", {
                ref: m,
                children: (0, s.jsxs)("div", {
                    className: tR.do,
                    ref: n,
                    children: [
                        (0, s.jsxs)("div", {
                            className: tR.zH,
                            children: [
                                (0, s.jsx)(ty, { quest: a }),
                                (0, s.jsx)(eK.D, {
                                    className: tR.DD,
                                    color: "text-strong",
                                    variant: "heading-md/medium",
                                    children: em.intl.format(em.t.EQa7os, { questName: a.config.messages.questName }),
                                }),
                                (0, s.jsxs)("div", {
                                    className: tR.zf,
                                    children: [
                                        (0, s.jsx)(eT.E, { className: tR.h_, variant: "text-xs/normal", children: R }),
                                        N && (0, s.jsx)(e4.e, { questId: a.id, orbMultiplierEligibility: Q }),
                                    ],
                                }),
                            ],
                        }),
                        (0, s.jsx)("div", {
                            className: j()(tR.lO, { [tR._o]: !t }),
                            "data-testid": "quest-bar-enroll-cta",
                            children: (0, s.jsx)(eX.e, {
                                direction: "horizontal",
                                fullWidth: !0,
                                wrap: !1,
                                children:
                                    _.enabled && v === ed.UA.UNENROLLED && _.enabledQuestStates.has(ed.UA.UNENROLLED)
                                        ? (0, s.jsx)(ec.A, {
                                              quest: a,
                                              surface: ed.V3.QUEST_BAR_FOOTER,
                                              size: "sm",
                                              analyticsCtxQuestContent: d.uF.QUEST_BAR_V2,
                                              analyticsCtxSourceQuestContent: d.uF.QUEST_BAR_V2,
                                          })
                                        : (0, s.jsx)(en.$, {
                                              onClick: i,
                                              variant: "primary",
                                              loading: E,
                                              text: h,
                                              size: "sm",
                                              icon: (0, g.Oz)(a),
                                              fullWidth: !0,
                                          }),
                            }),
                        }),
                    ],
                }),
            }),
            (0, s.jsx)(e9.A, { visible: B, glow: !0, className: tR.Ph }),
            null != A &&
                (0, s.jsx)(T.animated.div, {
                    className: tR.AK,
                    style: { opacity: (0, X.a)(C.to([0, 1], [1, 0])) },
                    children: (0, s.jsx)("div", { className: j()(tR.LC, tR.Ge), style: S }),
                }),
            (0, s.jsxs)(T.animated.div, {
                className: tR.IC,
                style: {
                    backdropFilter: (0, X.Q)(C.to([0, 1], [5, 0]).to((e) => `blur(${e}px)`)),
                    filter: (0, X.Q)(C.to([0, 1], [0.8, 1]).to((e) => `brightness(${e})`)),
                },
                children: [
                    f.isAnimated
                        ? (0, s.jsx)(p._M, {
                              id: "QuestBarContentExpanded_heroAnimated",
                              children: (e) => (0, s.jsx)(tT.X, { ref: e, autoPlay: !0, asset: f, className: tR.LO }),
                          })
                        : (0, s.jsx)(p._M, {
                              id: "QuestBarContentExpanded_heroStatic",
                              children: (e) => (0, s.jsx)("img", { ref: e, alt: "", className: tR.LO, src: f.url }),
                          }),
                    (0, s.jsx)("div", { className: tR.tV }),
                ],
            }),
        ],
    });
}
function tN(e) {
    let { quest: t } = e,
        { hasAlreadyLinked: n, onClickGameTitle: i } = r.useContext(z.SH);
    return !0 !== n ? null : (0, s.jsx)(e5.A, { quest: t, hasAlreadyLinked: n, onClickGameTitle: i });
}
function tU(e) {
    let { activeScreen: t, selectPlatform: n } = e,
        { quest: i, taskDetails: l } = r.useContext(z.$0);
    return (0, eG.YW)(t)
        .with(d.X0.SELECT, () => (0, s.jsx)(tj, { onConsole: () => n($.fO.CONSOLE), onDesktop: () => n($.fO.DESKTOP) }))
        .with(d.X0.DESKTOP, () => ((0, E.I6)(i) ? (0, s.jsx)(tN, { quest: i }) : (0, s.jsx)(tg, { quest: i })))
        .with(d.X0.CONSOLE, () => (0, s.jsx)(tp, { quest: i, taskDetails: l }))
        .exhaustive();
}
function tB(e) {
    let { parentContainerRef: t } = e,
        { quest: n, taskDetails: i } = r.useContext(z.$0),
        [l, a, o] = (0, x.Qo)(n, i),
        u = i.percentComplete > 0,
        c = (0, x.Vn)(n),
        C = (0, x.RR)({ quest: n }),
        m = a.length > 1 && !u && !c;
    return (0, s.jsxs)(O, {
        children: [
            (0, s.jsx)(tU, { activeScreen: l, selectPlatform: o }),
            l !== d.X0.SELECT &&
                (0, s.jsxs)("div", {
                    className: tR.oG,
                    children: [
                        m &&
                            (0, s.jsx)(eZ.K, {
                                size: "sm",
                                "aria-label": em.intl.string(em.t["13/7kX"]),
                                onClick: () => o(null),
                                icon: eJ.n,
                                variant: "secondary",
                            }),
                        (0, s.jsx)(ej, {
                            awaitingConsoleConnections: C,
                            parentContainerRef: t,
                            hasMadeProgress: u,
                            isProgressing: c,
                            sourceQuestContent: d.uF.QUEST_BAR_V2,
                        }),
                    ],
                }),
        ],
    });
}
function tF(e) {
    let { parentContainerRef: t } = e,
        { quest: n, taskDetails: i } = r.useContext(z.$0),
        l = i.percentComplete > 0,
        a = (0, x.Vn)(n),
        o = (0, x.Hv)() && n.userStatus?.completedAt == null,
        u = r.useCallback(() => {
            if (o) {
                ((0, m.Y5)({
                    questId: n.id,
                    questContent: d.uF.QUEST_BAR_V2,
                    questContentCTA: w.Cy.QUEST_ACCESS_SUSPENDED,
                    sourceQuestContent: d.uF.QUEST_BAR_V2,
                }),
                    (0, g.FS)());
                return;
            }
            (0, g.d5)({
                quest: n,
                questContent: d.uF.QUEST_BAR_V2,
                sourceQuestContent: d.uF.QUEST_BAR_V2,
                sourceQuestContentCTA: w.Cy.QUEST_BAR_VIDEO_QUEST_PREVIEW,
            });
        }, [n, o]);
    return (0, s.jsxs)(O, {
        children: [
            (0, s.jsx)(tv, { onClick: u }),
            (0, s.jsx)(ej, {
                parentContainerRef: t,
                awaitingConsoleConnections: !1,
                hasMadeProgress: l,
                isProgressing: a,
                sourceQuestContent: d.uF.QUEST_BAR_V2,
            }),
        ],
    });
}
function tV(e) {
    let { parentContainerRef: t } = e,
        { quest: n, taskDetails: i } = r.useContext(z.$0),
        l = i.percentComplete > 0,
        a = (0, x.Vn)(n);
    return (0, s.jsx)(O, {
        children: (0, s.jsx)(ej, {
            parentContainerRef: t,
            awaitingConsoleConnections: !1,
            hasMadeProgress: l,
            isProgressing: a,
            sourceQuestContent: d.uF.QUEST_BAR_V2,
        }),
    });
}
function tb(e) {
    let { parentContainerRef: t } = e,
        { quest: n } = r.useContext(z.$0);
    return (0, E.t)({ quest: n }) || (0, E.g5)(n) || (0, E.fE)({ quest: n }) || (0, E.I6)(n)
        ? (0, s.jsx)(tB, { parentContainerRef: t })
        : (0, E.vv)(n)
          ? (0, s.jsx)(tF, { parentContainerRef: t })
          : (0, s.jsx)(tV, { parentContainerRef: t });
}
function tI(e) {
    let { containerRef: t } = e,
        { quest: n, taskDetails: i } = r.useContext(z.$0),
        { expansionSpring: l } = r.useContext(U.PW),
        a = r.useRef(null),
        o = r.useRef(null),
        u = (0, x.I3)(n),
        c = null != u ? u.percentComplete : i.percentComplete;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(T.animated.div, {
                className: j()(tR.tv, tR.ag),
                style: {
                    backgroundImage: `linear-gradient(90deg, ${k.V1}, ${k.us})`,
                    opacity: (0, X.a)(l.to({ range: [0, 1], output: [1, 0] })),
                },
            }),
            (0, s.jsxs)("div", {
                className: tR.Fe,
                ref: (e) => {
                    ("function" == typeof t ? t(e) : null != t && (t.current = e), null != e && (o.current = e));
                },
                children: [
                    (0, s.jsx)(eV, {}),
                    (0, s.jsx)("div", { className: tR.yF }),
                    (0, s.jsx)(et, { progressBarRef: a, isHovered: !1 }),
                    (0, s.jsx)(eQ, {
                        contentLocation: "expanded",
                        progressBarRef: a,
                        isExpanded: !0,
                        percentComplete: c,
                        popoutTargetElementRef: o,
                    }),
                    (0, s.jsx)(tb, { parentContainerRef: o }),
                ],
            }),
            (0, s.jsx)("div", {
                className: j()(tR.tv, tR.Sx),
                style: { backgroundImage: `linear-gradient(90deg, ${k.V1}, ${k.us})` },
            }),
        ],
    });
}
async function tO(e, t, n, s) {
    (0, E.vv)(e)
        ? await (0, g.e0)(e, { questContent: t, questContentCTA: n, sourceQuestContent: s, sourceQuestContentCTA: n })
        : (0, ea.vA)(e)
          ? await (0, e1.Oy)(e.id, { questContent: t, questContentCTA: n, sourceQuestContent: s })
          : (0, e1.Oy)(e.id, { questContent: t, questContentCTA: n, sourceQuestContent: s });
}
function tq() {
    let { quest: e } = r.useContext(z.$0),
        { isExpanded: t, isExpansionAnimationComplete: n } = (0, q.H)(),
        { expandedContentRef: i } = r.useContext(U.PW),
        { launchInGameActivity: l } = (0, x.zW)(e),
        a = (0, ea.vA)(e),
        o = r.useCallback(async () => {
            let t = a ? w.Cy.START_QUEST : w.Cy.ACCEPT_QUEST;
            (await tO(e, d.uF.QUEST_BAR_V2, t, d.uF.QUEST_BAR_V2), a && l());
        }, [e, l, a]);
    return e.userStatus?.enrolledAt != null
        ? (0, s.jsx)(tI, { containerRef: i })
        : (0, s.jsx)(tQ, { isCtaInteractable: !t || n, containerRef: i, onAcceptQuest: o });
}
function tL() {
    let {
            expansionSpring: e,
            animatedComponentProps: t,
            recalculateAnimationPositions: n,
            mountPoints: i,
        } = r.useContext(U.PW),
        { isExpanded: l } = (0, q.H)();
    return (
        r.useEffect(() => {
            n();
        }, [n, l]),
        (0, s.jsx)("div", {
            style: {
                overflow: "hidden",
                pointerEvents: "none",
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 5,
            },
            children: t.map((t) => {
                let { id: n, collapsedLeft: r, expandedLeft: l, collapsedTop: a, expandedTop: o, width: u } = t,
                    c = i.get(n);
                return (0, s.jsx)(
                    T.animated.div,
                    {
                        ref: c,
                        style: {
                            zIndex: 2,
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: u,
                            transform: (0, T.to)(
                                [e.to({ range: [0, 1], output: [r, l] }), e.to({ range: [0, 1], output: [a, o] })],
                                (e, t) => `translate(${e}px, ${t}px)`,
                            ),
                        },
                    },
                    n,
                );
            }),
        })
    );
}
function tk() {
    let { quest: e } = r.useContext(z.$0),
        t = e.userStatus?.enrolledAt != null;
    return (0, s.jsx)(eq.A, {
        layoutVariant: t ? "inset" : "flush",
        header: (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(tL, {}), !t && (0, s.jsx)(eW, {})] }),
        children: (0, s.jsx)(tq, {}),
    });
}
var tP = n(731738),
    tM = n(807393),
    tw = n(260364);
function tD(e) {
    let {
        adCreativeId: t,
        adCreativeType: n,
        reportRenderingFailure: s,
        hasAssetsError: l,
        isEligibleForQuests: a,
        isQuestBarVisible: o,
        isVisibilityAnimationAtRest: u,
        isLoadingAssets: c,
        currentQuestVisibleReason: x,
        shouldShowQuestBar: C,
        isQuestEnrollmentBlocked: m,
    } = e;
    (r.useEffect(() => {
        l &&
            (s("asset_loading_error"),
            tM.A.increment({
                name: tP.K.QUEST_CONTENT_RENDERING_FAILURE,
                tags: [
                    `ad_creative_id:${t}`,
                    `ad_creative_type:${i.p[n]}`,
                    `quest_content:${(0, w.jO)(d.uF.QUEST_BAR)}`,
                    "reason:asset_loading_error",
                ],
            }));
    }, [l, t, n, s]),
        r.useEffect(() => {
            a || s("not_eligible_for_quest");
        }, [a, s]),
        r.useEffect(() => {
            o || !u || c || s(x);
        }, [o, u, c, x, s]),
        r.useEffect(() => {
            ((!C || m) && tw.A.clearTracking(), o && u && !c && !l && a && tw.A.stopTracking(t));
        }, [C, m, o, u, c, l, a, t]));
}
function t$(e) {
    let { isExpanded: t, questId: n } = e;
    return (
        (0, x.H6)({
            mode: t ? $.fP.EXPANDED : $.fP.COLLAPSED,
            questContent: d.uF.QUEST_BAR_V2,
            questId: n,
            sourceQuestContent: d.uF.QUEST_BAR_V2,
        }),
        null
    );
}
function tH() {
    return (
        r.useEffect(() => {
            u.trigger();
        }, []),
        null
    );
}
function tW(e) {
    let { quest: t } = r.useContext(z.$0),
        { isQuestBarVisible: n, reason: s } = (0, h.TQ)({ quest: t }),
        { impressionRef: i } = e;
    return (
        tD({
            reportRenderingFailure: r.useCallback(
                (e) => {
                    (0, m.DX)({
                        questId: t.id,
                        questContent: d.uF.QUEST_BAR,
                        sourceQuestContent: d.uF.QUEST_BAR_V2,
                        reason: e,
                        impressionId: i.current?.getId(),
                    });
                },
                [t.id, i],
            ),
            currentQuestVisibleReason: s,
            shouldShowQuestBar: n,
            ...e,
        }),
        null
    );
}
function tG(e) {
    let { isExpanded: t } = e,
        { quest: n } = r.useContext(z.$0);
    return (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(t$, { questId: n.id, isExpanded: t }), (0, s.jsx)(tH, {})],
    });
}
function tz(e) {
    let { children: t, overrideVisibility: n } = e,
        { quest: i } = r.useContext(z.$0),
        l = (0, x.UH)(i);
    return (0, s.jsx)(f.Z, {
        questOrQuests: i,
        questContent: d.uF.QUEST_BAR_V2,
        overrideVisibility: n,
        onImpression: l,
        sourceQuestContent: d.uF.QUEST_BAR_V2,
        children: t,
    });
}
function tY(e) {
    let { quest: t } = e,
        n = r.useMemo(() => (0, E.vv)(t), [t]),
        l = t.userStatus?.completedAt != null,
        a = (0, x.fc)(t),
        o = r.useMemo(() => ({ type: i.p.QUEST, quest: t }), [t]);
    return (
        r.useEffect(() => {
            n && (0, g.l9)();
        }, [n]),
        (0, s.jsx)(z.aV, {
            quest: t,
            taskDetails: a,
            children: (0, s.jsx)(W, {
                creative: o,
                collapsedContent: (0, s.jsx)(eO, {}, l ? "collapsed-with-rewards" : "collapsed-without-rewards"),
                expandedContent: (0, s.jsx)(tk, {}),
                renderCreativeContext: (e) => (0, s.jsx)(z.l, { quest: t, children: e }),
                StateTracker: tW,
                ModeChangeTracker: tG,
                ImpressionTracker: tz,
            }),
        })
    );
}
function tK(e) {
    let t = (0, z.o5)(),
        n = (0, z.Q8)(t),
        s = (0, h.gJ)(n),
        { impressionRef: l } = e;
    return (
        tD({
            reportRenderingFailure: r.useCallback(
                (e) => {
                    (0, m.iE)({
                        adContentId: t.id,
                        adCreativeType: i.p.BOUNTY,
                        questContent: d.uF.QUEST_BAR,
                        sourceQuestContent: d.uF.QUEST_BAR_V2,
                        reason: e,
                        impressionId: l.current?.getId(),
                    });
                },
                [t.id, l],
            ),
            currentQuestVisibleReason: null,
            shouldShowQuestBar: s,
            ...e,
        }),
        null
    );
}
function tX(e) {
    let { isExpanded: t } = e,
        n = (0, z.o5)();
    return (
        (0, x.H6)({
            mode: t ? $.fP.EXPANDED : $.fP.COLLAPSED,
            questContent: d.uF.QUEST_BAR_V2,
            adCreativeType: i.p.BOUNTY,
            adContentId: n.id,
            sourceQuestContent: d.uF.QUEST_BAR_V2,
        }),
        (0, s.jsx)(tH, {})
    );
}
function tZ(e) {
    let { children: t, overrideVisibility: n } = e,
        r = (0, z.o5)();
    return (0, s.jsx)(f.Z, {
        adContentId: r.id,
        adCreativeType: i.p.BOUNTY,
        questContent: d.uF.QUEST_BAR_V2,
        overrideVisibility: n,
        sourceQuestContent: d.uF.QUEST_BAR_V2,
        children: t,
    });
}
function tJ(e) {
    let { bounty: t } = e,
        n = (0, z.Q8)(t);
    return (0, s.jsx)(z.fF, {
        bounty: t,
        children: (0, s.jsx)(W, {
            creative: n,
            collapsedContent: (0, s.jsx)(G.A, { layoutVariant: "flush", children: (0, s.jsx)(A.A, {}) }),
            expandedContent: (0, s.jsx)(S.A, {}),
            StateTracker: tK,
            ModeChangeTracker: tX,
            ImpressionTracker: tZ,
        }),
    });
}
function t0(e) {
    let { noFillDecision: t } = e,
        n = (0, l.bG)([c.A], () => c.A.hasLayers());
    function r(e) {
        return (0, s.jsx)("div", { ref: e, "aria-hidden": !0, className: H.ui });
    }
    return null == t.adContentId
        ? r()
        : (0, s.jsx)(f.Z, {
              adContentId: t.adContentId,
              adCreativeType: i.p.NO_FILL,
              noFillDecision: t,
              questContent: d.uF.QUEST_BAR_V2,
              overrideVisibility: !n,
              sourceQuestContent: d.uF.QUEST_BAR_V2,
              children: (e) => r(e),
          });
}
let t1 =
    221552 == n.j
        ? function () {
              let e = (0, h.wo)(),
                  t = (0, C.A)(d.p9.DESKTOP_ACCOUNT_PANEL_AREA, "useNoFillAd");
              switch (e.type) {
                  case i.p.QUEST: {
                      let { quest: t } = e;
                      return (0, s.jsx)(
                          p.y5,
                          {
                              source: $.rE.QUESTS_BAR,
                              adCreativeId: t.id,
                              adCreativeType: i.p.QUEST,
                              children: (0, s.jsx)(tY, { quest: t }),
                          },
                          t.id,
                      );
                  }
                  case i.p.BOUNTY: {
                      let { bounty: t } = e;
                      return (0, s.jsx)(
                          p.y5,
                          {
                              source: $.rE.QUESTS_BAR,
                              adCreativeId: t.id,
                              adCreativeType: i.p.BOUNTY,
                              children: (0, s.jsx)(tJ, { bounty: t }),
                          },
                          t.id,
                      );
                  }
                  case i.p.PLAYABLE:
                      return null;
                  case i.p.NO_FILL:
                      return null != t ? (0, s.jsx)(t0, { noFillDecision: t }, t.decisionId) : null;
              }
          }
        : null;
