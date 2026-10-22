(n.r(t), n.d(t, { QuestBarQuestContent: () => t5, default: () => ne }));
var s = n(477900),
    r = n(582128),
    l = n(323889),
    i = n(17928),
    a = n(840251),
    o = n(688151);
let u = new a.E([], o.$G.QUEST_BAR_RENDERED, { location: "quest bar rendered" });
var c = n(186111),
    d = n(738822),
    x = n(77870),
    C = n(466242),
    m = n(561844),
    p = n(792620),
    f = n(557637),
    E = n(657792),
    h = n(201805),
    g = n(617986),
    _ = n(503698),
    j = n.n(_),
    S = n(941143),
    A = n(475743),
    v = n(494280),
    R = n(859703),
    y = n(971276),
    T = n(851936);
n(321073);
var Q = n(333007),
    N = n(765671),
    U = n(398025);
let F = "#00000000",
    B = "#CDD8FF1A",
    I = r.createContext({
        registerComponent: () => {},
        unregisterComponent: () => {},
        animatedComponents: {},
        expandedContentRef: r.createRef(),
        collapsedContentRef: r.createRef(),
        overlayRef: r.createRef(),
        recalculateAnimationPositions: () => {},
        animatedComponentProps: [],
        expansionSpring: new S.SpringValue(0),
        mountPoints: new Map(),
    });
function b(e) {
    let { children: t, id: n, inState: l, isTextTransition: i = !1, ref: a } = e,
        {
            recalculateAnimationPositions: o,
            registerComponent: u,
            unregisterComponent: c,
            expansionSpring: d,
            mountPoints: x,
        } = r.useContext(I),
        C = r.useRef(null),
        m = r.useRef(null),
        p = r.useRef(void 0);
    (r.useEffect(() => {
        o();
    }, [o]),
        r.useLayoutEffect(() => {
            let e = C.current;
            return (
                null != e && u(e, n, l),
                () => {
                    null != e && c(n, l);
                }
            );
        }, [n, l, u, c]));
    let f = r.useCallback(
        (e) => {
            let { height: t } = e;
            p.current !== t && (o(), (p.current = t));
        },
        [o],
    );
    (0, N.i4)(C, f);
    let E = x.get(n)?.current,
        h = null;
    return (
        null == E
            ? (h = null)
            : i && null != d
              ? (h = (0, s.jsxs)(s.Fragment, {
                    children: [
                        "collapsed" === l &&
                            (0, Q.createPortal)(
                                (0, s.jsx)(S.animated.div, {
                                    style: {
                                        position: "absolute",
                                        opacity: (0, U.a)(d.to({ range: [0, 1], output: [1, 0] })),
                                    },
                                    children: t(m),
                                }),
                                E,
                            ),
                        "expanded" === l &&
                            (0, Q.createPortal)(
                                (0, s.jsx)(S.animated.div, {
                                    style: {
                                        position: "absolute",
                                        opacity: (0, U.a)(d.to({ range: [0, 1], output: [0, 1] })),
                                    },
                                    children: t(m),
                                }),
                                E,
                            ),
                    ],
                }))
              : "collapsed" === l && (h = (0, Q.createPortal)(t(m), E)),
        (0, s.jsxs)("div", {
            style: { opacity: +((null == h && "collapsed" === l) || null == E) },
            ref: a,
            children: [t(C), h],
        })
    );
}
let V = (e) => {
    let { children: t, expandedContentRef: n, collapsedContentRef: l, overlayRef: i, expansionSpring: a } = e,
        [o, u] = r.useState({}),
        [c, d] = r.useState([]),
        [x, C] = r.useState(() => new Map()),
        m = r.useCallback((e, t, n) => {
            (u((s) => {
                let r = s[t] ?? { expanded: null, collapsed: null };
                return { ...s, [t]: { ...r, [n]: e } };
            }),
                C((e) => {
                    let n = new Map(e);
                    return (n.set(t, r.createRef()), n);
                }));
        }, []),
        p = r.useCallback((e, t) => {
            let n = !1;
            (u((s) => {
                let r = s[e] ?? { expanded: null, collapsed: null };
                return ((r[t] = null), (n = null == r.expanded && null == r.collapsed), { ...s, [e]: r });
            }),
                n &&
                    C((t) => {
                        let n = new Map(t);
                        return (n.delete(e), n);
                    }));
        }, []),
        f = r.useCallback(() => {
            let e = [];
            for (let t in o) {
                if (null == o[t] || null == n.current || null == l.current) continue;
                let s = o[t].collapsed,
                    r = o[t].expanded;
                if (null == s || null == r) continue;
                let i = r.getBoundingClientRect(),
                    a = n.current.getBoundingClientRect(),
                    u = s.getBoundingClientRect(),
                    c = l.current.getBoundingClientRect(),
                    d = i.top - a.top + 12,
                    x = u.top - c.top,
                    C = i.left - a.left + 12,
                    m = u.left - c.left,
                    p = -i.right + a.right + 12,
                    f = -u.right + c.right;
                e.push({
                    id: t,
                    collapsedLeft: m,
                    expandedLeft: C,
                    collapsedRight: f,
                    expandedRight: p,
                    collapsedTop: x,
                    expandedTop: d,
                    width: i.width,
                });
            }
            d(e);
        }, [o, n, l, d]),
        E = r.useMemo(
            () => ({
                registerComponent: m,
                unregisterComponent: p,
                animatedComponents: o,
                expandedContentRef: n,
                collapsedContentRef: l,
                overlayRef: i,
                recalculateAnimationPositions: f,
                animatedComponentProps: c,
                expansionSpring: a,
                mountPoints: x,
            }),
            [m, p, o, n, l, i, f, c, a, x],
        );
    return (0, s.jsx)(I.Provider, { value: E, children: t });
};
var O = n(717421),
    q = n(775602);
let L = r.createContext({ springConfig: {}, isExpanded: !1 });
function k(e) {
    let t = r.useMemo(
        () => ({ springConfig: e.springConfig, isExpanded: e.isExpanded }),
        [e.springConfig, e.isExpanded],
    );
    return (0, s.jsx)(L.Provider, { value: t, children: e.children });
}
function M(e) {
    let { children: t } = e,
        { springConfig: n, isExpanded: l } = r.useContext(L),
        a = (0, i.bG)([q.Ay], () => q.Ay.useReducedMotion),
        { ref: o, height: u = null } = (0, N.Ay)(),
        c = (0, A.Ay)(u) ?? null,
        [{ height: d }, x] = (0, O.z)(() => ({ from: { height: 0 }, config: n }));
    return (
        r.useLayoutEffect(() => {
            null !== u && x({ height: u, immediate: !l || a || null === c });
        }, [u, x, l, a, c]),
        (0, s.jsx)(S.animated.div, {
            style: { height: null === c ? "auto" : d, overflow: "hidden" },
            children: (0, s.jsx)("div", { style: { overflow: "hidden" }, ref: o, children: t }),
        })
    );
}
let w = r.createContext(null);
function P() {
    let e = r.useContext(w);
    if (null == e) throw Error("useQuestBarExpansionContext requires a QuestBarExpansionContextProvider ancestor");
    return e;
}
function D(e) {
    let {
            children: t,
            isExpanded: n,
            isExpansionAnimationComplete: l,
            collapsedHeight: i,
            onCtxMenuClose: a,
            onCtxMenuOpen: o,
            onCtxMenuSelect: u,
            onGameSheetOpen: c,
            onGameSheetClose: d,
        } = e,
        x = r.useMemo(
            () => ({
                isExpanded: n,
                isExpansionAnimationComplete: l,
                collapsedHeight: i,
                onCtxMenuClose: a,
                onCtxMenuOpen: o,
                onCtxMenuSelect: u,
                onGameSheetOpen: c,
                onGameSheetClose: d,
            }),
            [n, l, i, a, o, u, c, d],
        );
    return (0, s.jsx)(w.Provider, { value: x, children: t });
}
var G = n(717695),
    W = n(621466),
    H = n(192308),
    $ = n(590202),
    z = n(652215),
    K = n(190107),
    Y = n(920690);
function X(e) {
    let {
            creative: t,
            collapsedContent: n,
            expandedContent: a,
            ImpressionTracker: o,
            ModeChangeTracker: u,
            StateTrackers: x,
            renderCreativeContext: C,
        } = e,
        {
            collapsedHeight: p,
            canExpand: E,
            canCollapse: g,
            isEnrolled: _,
            springConfig: Q,
        } = (function (e) {
            switch (e.type) {
                case l.p.QUEST: {
                    let t = e.quest.userStatus?.enrolledAt != null,
                        n = e.quest.userStatus?.completedAt != null;
                    return {
                        collapsedHeight: 70 + 78 * !!n,
                        canExpand: !n,
                        canCollapse: !n,
                        isEnrolled: t,
                        springConfig: t ? K.ZV : K.Ko,
                    };
                }
                case l.p.BOUNTY:
                    return { collapsedHeight: 70, canExpand: !0, canCollapse: !0, isEnrolled: !1, springConfig: K.Ko };
            }
        })(t),
        N = (0, h.gJ)(t),
        U = (0, v.Yh)(t),
        F = (0, T.L)({ quest: (0, v.Ys)(t), location: K.rE.QUESTS_BAR }),
        B = (0, y.s)(),
        I = (0, i.bG)([R.A], () => null != R.A.questEnrollmentBlockedUntil),
        b = (0, i.bG)([c.A], () => c.A.hasLayers()),
        L = r.useRef(null),
        { hasError: M, isLoading: w } = (0, f.zT)(),
        P = r.useContext(G.Z),
        X = P || (B && N && !w && !I),
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
                l = (0, i.bG)([q.Ay], () => q.Ay.useReducedMotion),
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
                p = r.useCallback(() => {
                    m(!0);
                }, [m]),
                [{ expansionSpring: f }, E] = (0, O.z)(() => ({
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
                E({ expansionSpring: +!!a, immediate: l });
            }, [a, E, l]);
            let { visibilitySpring: h } = (0, O.z)({
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
                    expandQuestBar: p,
                    isExpansionAnimationComplete: u,
                    isVisibilityAnimationAtRest: d,
                    expansionSpring: f,
                    visibilitySpring: h,
                    springConfig: s,
                }
            );
        })({ canExpand: E, isQuestBarVisible: X, springConfig: Q }),
        el = (0, A.Ay)(_),
        {
            handleCtxMenuOpened: ei,
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
                    setIsExpanded: i,
                    expandQuestBar: a,
                    canCollapse: o,
                    didEnroll: u,
                    impressionRef: c,
                } = e,
                x = r.useRef(-1),
                C = r.useRef(!1),
                [p, f] = r.useState(!1),
                [E, h] = r.useState(!1),
                g = r.useCallback(() => {
                    f(!0);
                }, []),
                _ = r.useCallback(() => {
                    (f(!1), !C.current && o && i(!1));
                }, [o, i]),
                j = r.useCallback(() => {
                    (f(!1), o && i(!1), (C.current = !1));
                }, [o, i]),
                S = r.useCallback(() => {
                    h(!0);
                }, []),
                A = r.useCallback(() => {
                    (h(!1), i(!1));
                }, [i]),
                v = r.useCallback(
                    function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (s) return;
                        let { withDelay: t = !1 } = e;
                        t ? (x.current = window.setTimeout(a, 75)) : a();
                    },
                    [a, s],
                ),
                R = r.useCallback(() => {
                    v();
                }, [v]),
                y = r.useCallback(
                    (e) => {
                        (window.clearTimeout(x.current),
                            ((0, W.vq)(e?.relatedTarget, Node) && e.currentTarget.contains(e.relatedTarget)) ||
                                p ||
                                E ||
                                C.current ||
                                i(!1));
                    },
                    [p, E, i],
                ),
                T = r.useCallback(() => {
                    (n === l.p.QUEST &&
                        (0, m.av)({
                            questId: t,
                            event: z.HAw.QUEST_HOVER,
                            properties: {
                                content_id: d.uF.QUEST_BAR,
                                content_name: (0, $.jO)(d.uF.QUEST_BAR),
                                impression_id: c.current?.getId(),
                            },
                            shouldExtendSession: !0,
                            sourceQuestContent: d.uF.QUEST_BAR_V2,
                        }),
                        (C.current = !0),
                        v({ withDelay: !0 }));
                }, [t, n, v, c]),
                Q = r.useCallback(() => {
                    (n === l.p.QUEST &&
                        (0, m.av)({
                            questId: t,
                            event: z.HAw.QUEST_HOVER_OFF,
                            properties: {
                                content_id: d.uF.QUEST_BAR,
                                content_name: (0, $.jO)(d.uF.QUEST_BAR),
                                impression_id: c.current?.getId(),
                            },
                            sourceQuestContent: d.uF.QUEST_BAR_V2,
                        }),
                        (C.current = !1),
                        y());
                }, [t, n, y, c]);
            (r.useEffect(() => {
                E && C.current && Q();
            }, [E, Q]),
                r.useLayoutEffect(() => {
                    u && C.current && a();
                }, [a, u]),
                r.useLayoutEffect(() => {
                    o && u && !C.current && i(!1);
                }, [o, u, i]));
            let N = (0, H.useHasAnyModalOpen)();
            return (
                r.useEffect(() => {
                    N && C.current && Q();
                }, [Q, N]),
                {
                    ctxMenuOpen: p,
                    gameSheetOpen: E,
                    handleCtxMenuOpened: g,
                    handleCtxMenuClosed: _,
                    handleCtxMenuSelection: j,
                    handleGameSheetOpened: S,
                    handleGameSheetClosed: A,
                    handleFocus: v,
                    handleFocusWithoutDelay: R,
                    handleBlur: y,
                    handleMouseEnter: T,
                    handleMouseLeave: Q,
                }
            );
        })({
            ...U,
            isExpanded: Z,
            setIsExpanded: J,
            expandQuestBar: ee,
            canCollapse: g,
            didEnroll: _ && !0 !== el,
            impressionRef: L,
        }),
        ep = r.useRef(null),
        ef = r.useRef(null),
        eE = r.useRef(null),
        eh = {
            hasAssetsError: M,
            isEligibleForQuests: B,
            isQuestBarVisible: X,
            isVisibilityAnimationAtRest: en,
            isLoadingAssets: w,
            isQuestEnrollmentBlocked: I,
            impressionRef: L,
            ...U,
        },
        eg = !(!B || (!X && en && !w) || (M && !P));
    return (
        !eg && (M && !P ? F.log("Not rendered due to asset error") : B || F.log("Not rendered due to ineligibility")),
        (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(x, { ...eh }),
                eg &&
                    (0, s.jsx)(o, {
                        overrideVisibility: !b && X,
                        children: (e, t) => (
                            (L.current = t.current),
                            (0, s.jsxs)("div", {
                                className: Y.dK,
                                children: [
                                    X && (0, s.jsx)(u, { isExpanded: Z }),
                                    (0, s.jsx)(S.animated.div, {
                                        "data-testid": "quest-bar-container",
                                        "aria-hidden": !X,
                                        onMouseLeave: em,
                                        onMouseEnter: eC,
                                        onFocus: ed,
                                        onBlur: ex,
                                        className: j()(Y.iE, { [Y.Xc]: !X, [Y.uv]: X && en }),
                                        style: { height: er.to({ range: [0, 1], output: [0, p] }) },
                                        children: (0, s.jsx)(S.animated.div, {
                                            className: j()(Y.FG, { [Y.E$]: Z }),
                                            children: (0, s.jsx)(k, {
                                                springConfig: Q,
                                                isExpanded: Z,
                                                children: (0, s.jsx)(V, {
                                                    expandedContentRef: ep,
                                                    collapsedContentRef: ef,
                                                    overlayRef: eE,
                                                    expansionSpring: es,
                                                    children: (0, s.jsx)(D, {
                                                        isExpanded: Z,
                                                        isExpansionAnimationComplete: et,
                                                        onCtxMenuClose: ea,
                                                        onCtxMenuOpen: ei,
                                                        onCtxMenuSelect: eo,
                                                        onGameSheetOpen: eu,
                                                        onGameSheetClose: ec,
                                                        collapsedHeight: p,
                                                        children: (C ?? ((e) => e))(
                                                            (0, s.jsxs)(s.Fragment, {
                                                                children: [
                                                                    n,
                                                                    a,
                                                                    (0, s.jsx)("div", { ref: eE, className: Y.Lw }),
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
var Z = n(409626),
    J = n(692969),
    ee = n(284846);
let et = r.createContext({ quest: null, taskDetails: null }),
    en = r.createContext({ hasAlreadyLinked: void 0, onClickGameTitle: void 0 });
function es(e) {
    let { children: t, quest: n } = e,
        { hasAlreadyLinked: l } = (0, ee.U)(n),
        i = (0, J.A)({
            applicationId: (0, p.xc)(n),
            location: K.rE.QUEST_INSTRUCTIONS,
            source: Z.GameProfileSources.QuestBar,
        }),
        a = r.useMemo(() => ({ hasAlreadyLinked: l, onClickGameTitle: i }), [l, i]);
    return (0, s.jsx)(en.Provider, { value: a, children: t });
}
function er(e) {
    let { children: t, quest: n, taskDetails: l } = e,
        i = r.useMemo(() => ({ quest: n, taskDetails: l }), [n, l]);
    return (0, s.jsx)(et.Provider, { value: i, children: t });
}
function el(e) {
    let { children: t, quest: n } = e;
    return (0, p.I6)(n) ? (0, s.jsx)(es, { quest: n, children: t }) : t;
}
var ei = n(776310);
function ea() {
    let e = document.body.style.getPropertyValue("--custom-guild-sidebar-width").slice(0, -2);
    return parseInt("" !== e ? e : "375");
}
var eo = n(536283),
    eu = n(489811);
let ec = (e) => {
    let { progressBarRef: t, isHovered: n } = e,
        { quest: l } = r.useContext(et),
        { isExpanded: a } = P(),
        { expansionSpring: o, overlayRef: u } = r.useContext(I),
        { completionSpring: d, startCompletionAnimation: x } = (function () {
            let [{ spring: e }, t] = (0, O.z)(() => ({ spring: 0 }), "animate-always");
            return {
                completionSpring: e,
                startCompletionAnimation: r.useCallback(() => {
                    (t({ spring: 1 }), t({ spring: 0, delay: 2e3 }));
                }, [t]),
            };
        })(),
        C = l.userStatus?.completedAt != null,
        m = r.useRef(!1),
        p = (0, i.bG)([q.Ay], () => q.Ay.useReducedMotion),
        f = r.useRef(null),
        E = (0, i.bG)([c.A], () => c.A.hasLayers()),
        h = (0, A.Ay)(E),
        [g, _] = r.useState(null),
        [v, R] = r.useState(null),
        y = r.useRef(new ei.OH({ gravity: 0, wind: 0 })),
        T = (0, ei.f9)(g, v),
        N = r.useMemo(() => ["#51BC9D"], []),
        F = r.useCallback(() => {
            if (p) return;
            let e = t.current,
                n = f.current;
            if (null != n && null != e && T.isReady) {
                var s, r, l, i;
                let { x: t, y: a } = e.getBoundingClientRect(),
                    { x: o, y: u } = n.getBoundingClientRect();
                T.createMultipleConfetti(
                    ((s = t - o),
                    (r = a - u),
                    (l = e.clientHeight),
                    (i = e.clientWidth),
                    {
                        ...eo.Mw,
                        position: { type: "static-random", minValue: { x: s, y: r }, maxValue: { x: s + l, y: r + i } },
                        velocity: { type: "static-random", minValue: { x: -20, y: -20 }, maxValue: { x: 20, y: 20 } },
                        opacity: { type: "linear", value: 2, addValue: -0.1 },
                        dragCoefficient: { type: "static", value: 0.166 },
                        size: { type: "static-random", minValue: 2, maxValue: 3 },
                    }),
                    100,
                );
            }
        }, [t, f, T, p]),
        B = (0, A.Ay)(a);
    return (r.useEffect(() => {
        C && a && !B && (x(), F());
    }, [a, C, x, F, B]),
    r.useEffect(() => {
        C &&
            !E &&
            h &&
            setTimeout(() => {
                (x(), F());
            }, 200);
    }, [C, h, E, x, F]),
    r.useEffect(() => {
        T.isReady && (!m.current && C && (x(), F()), (m.current = C));
    }, [C, m, F, x, T]),
    r.useEffect(() => {
        n && C && (x(), F());
    }, [n, C, x, F]),
    p)
        ? null
        : (0, s.jsxs)("div", {
              className: eu.iE,
              "aria-hidden": "true",
              ref: f,
              children: [
                  (0, s.jsx)(S.animated.div, { className: eu.Tp, style: { opacity: (0, U.a)(d) } }),
                  (0, s.jsx)(S.animated.div, { className: j()(eu.sJ, eu.ix), style: { opacity: (0, U.a)(d) } }),
                  (0, s.jsxs)(S.animated.div, {
                      className: eu.KG,
                      style: { transform: o.to({ range: [0, 1], output: [-35, 0] }).to((e) => `translateY(${e}px)`) },
                      children: [
                          (0, s.jsx)(ei.Fk, { ref: _, className: eu.t_, environment: y.current }),
                          (0, s.jsx)(ei.K_, {
                              ref: R,
                              sprites: ["/assets/b909790cf1d80597.svg"],
                              colors: N,
                              spriteWidth: eo.wn,
                              spriteHeight: eo.wn,
                          }),
                          null != u.current &&
                              (0, Q.createPortal)(
                                  (0, s.jsx)(S.animated.div, {
                                      className: j()(eu.sJ, eu.d7),
                                      style: { opacity: (0, U.a)(d) },
                                  }),
                                  u.current,
                              ),
                      ],
                  }),
              ],
          });
};
var ed = n(331940);
let ex = function (e) {
    let { children: t, layoutVariant: n, backgroundImage: l, onMouseEnter: i, onMouseLeave: a } = e,
        { expansionSpring: o, collapsedContentRef: u } = r.useContext(I),
        { isExpanded: c } = P();
    return (0, s.jsx)(S.animated.div, {
        ref: u,
        "aria-hidden": c,
        className: j()(ed.hR, { [ed.Ag]: c, [ed.MN]: "inset" === n }),
        style: { opacity: (0, U.a)(o.to({ range: [0, 1], output: [1, 0] })), backgroundImage: l },
        onMouseEnter: i,
        onMouseLeave: a,
        children: (0, s.jsx)("div", { className: ed.o8, children: t }),
    });
};
var eC = n(821609),
    em = n(3738),
    ep = n(971649),
    ef = n(651892),
    eE = n(620954),
    eh = n(814793),
    eg = n(753386),
    e_ = n(608935),
    ej = n(887899),
    eS = n(79545),
    eA = n(862611),
    ev = n(630037),
    eR = n(105292),
    ey = n(191559);
function eT(e) {
    let { quest: t, sourceQuestContent: n, taskDetails: r } = e,
        l = (0, x.Hv)(),
        i = (0, s.jsx)(eC.$, {
            variant: "primary",
            fullWidth: !0,
            onClick: function () {
                if (l) {
                    ((0, m.Y5)({
                        questId: t.id,
                        questContent: d.uF.QUEST_BAR_V2,
                        questContentCTA: $.Cy.QUEST_ACCESS_SUSPENDED,
                        sourceQuestContent: n,
                    }),
                        (0, g.FS)());
                    return;
                }
                let e = t.userStatus?.enrolledAt == null ? $.Cy.ACCEPT_QUEST : $.Cy.WATCH_VIDEO;
                (0, g.d5)({
                    quest: t,
                    questContent: d.uF.QUEST_BAR_V2,
                    sourceQuestContent: n,
                    sourceQuestContentCTA: e,
                });
            },
            size: "sm",
            text: (0, eg.WM)(r),
            "aria-disabled": l || void 0,
        });
    return l ? (0, s.jsx)(e_.A, { children: i }) : i;
}
function eQ(e) {
    let { quest: t, sourceQuestContent: n } = e,
        r = (0, ep.wW)(),
        l = (0, ef.wr)(t);
    return (0, s.jsx)(eC.$, {
        size: "sm",
        fullWidth: !0,
        onClick: () =>
            (0, eE.pu)(t, {
                content: d.uF.QUEST_BAR_V2,
                ctaContent: $.Cy.OPEN_GAME_LINK,
                impressionId: r(),
                sourceQuestContent: n,
            }),
        text: l,
    });
}
function eN(e) {
    let { quest: t, sourceQuestContent: n } = e,
        r = (0, ep.wW)();
    return (0, s.jsx)(eC.$, {
        fullWidth: !0,
        onClick: () =>
            (0, eE.se)(
                { quest: t },
                {
                    content: d.uF.QUEST_BAR_V2,
                    ctaContent: $.Cy.CONNECT_CONSOLE,
                    impressionId: r(),
                    sourceQuestContent: n,
                },
            ),
        size: "sm",
        text: eR.intl.string(eR.t.csptqV),
    });
}
function eU(e) {
    let { quest: t } = e,
        n = (0, em.NA)({ quest: t }),
        { launchInGameActivity: r } = (0, x.zW)(t);
    return (0, eh.vA)(t)
        ? (0, s.jsx)(eC.$, { fullWidth: !0, variant: "primary", icon: (0, g.Oz)(t), onClick: r, size: "sm", text: n })
        : null;
}
function eF(e) {
    let {
            quest: t,
            sourceQuestContent: n,
            taskDetails: r,
            popoutTargetElementRef: l,
            onGameSheetOpened: i,
            onGameSheetClosed: a,
        } = e,
        { applications: o } = r;
    return (0, s.jsx)(eA.A, {
        quest: t,
        sourceQuestContent: n,
        applications: o ?? [],
        targetElementRef: l,
        onGameSheetOpened: i,
        onGameSheetClosed: a,
        children: (e) =>
            (0, s.jsx)(eC.$, {
                variant: "secondary",
                fullWidth: !0,
                size: "sm",
                text: eR.intl.string(eR.t["93PTEs"]),
                ...e,
            }),
    });
}
function eB(e) {
    let { quest: t, ctaLabel: n, onClick: r, questContent: l = d.uF.QUEST_BAR_V2, sourceQuestContent: i } = e,
        a = (0, ev.D)({ quest: t, questContent: l, sourceQuestContent: i, onBeforeClaim: r });
    return (0, s.jsx)(eC.$, {
        fullWidth: !0,
        onClick: a,
        text: n ?? eR.intl.string(eR.t.cfY4PE),
        "data-testid": "quest-bar-claim-reward-button",
        variant: "primary",
        size: "sm",
    });
}
function eI(e) {
    let {
            sourceQuestContent: t,
            awaitingConsoleConnections: n,
            hasMadeProgress: l,
            isProgressing: i,
            popoutTargetElementRef: a,
        } = e,
        { quest: o, taskDetails: u } = r.useContext(et),
        { onGameSheetOpen: c, onGameSheetClose: C } = P(),
        [m] = (0, x.Qo)(o, u),
        f = o.userStatus?.completedAt != null,
        E = (0, p.vv)(o),
        h = (0, p.I6)(o),
        g = m !== d.X0.SELECT && !l && !i,
        _ = null;
    return (
        f
            ? (_ = (0, s.jsx)(eB, { quest: o, sourceQuestContent: t }))
            : h
              ? (_ = (0, s.jsx)(ej.A, {
                    quest: o,
                    surface: eS.V3.QUEST_BAR_FOOTER,
                    size: "sm",
                    analyticsCtxQuestContent: d.uF.QUEST_BAR_V2,
                    analyticsCtxSourceQuestContent: t,
                }))
              : E
                ? (_ = (0, s.jsx)(eT, { quest: o, sourceQuestContent: t, taskDetails: u }))
                : (0, eh.vA)(o)
                  ? (_ = (0, s.jsx)(eU, { quest: o }))
                  : m === d.X0.CONSOLE && n
                    ? (_ = (0, s.jsx)(eN, { quest: o, sourceQuestContent: t }))
                    : g && (0, eh.ui)(o)
                      ? (_ = (0, s.jsx)(eF, {
                            quest: o,
                            sourceQuestContent: t,
                            taskDetails: u,
                            popoutTargetElementRef: a,
                            onGameSheetOpened: c,
                            onGameSheetClosed: C,
                        }))
                      : g && (_ = (0, s.jsx)(eQ, { quest: o, sourceQuestContent: t })),
        null == _ ? null : (0, s.jsx)("div", { className: ey.lO, children: _ })
    );
}
function eb(e) {
    return (0, s.jsx)(eI, { ...e, popoutTargetElementRef: e.parentContainerRef });
}
var eV = n(834730),
    eO = n(62405),
    eq = n(453384),
    eL = n(649480);
let ek = function (e) {
    let { isExpanded: t, contentLocation: n, progressBarRef: l, percentComplete: i, popoutTargetElementRef: a } = e,
        { quest: o, taskDetails: u } = r.useContext(et),
        { onGameSheetOpen: c, onGameSheetClose: C } = P(),
        { hasAlreadyLinked: m, onClickGameTitle: p } = r.useContext(en),
        [f] = (0, x.Qo)(o, u),
        E = (0, em.VX)(o, m),
        h = (0, em.tH)({
            quest: o,
            isExpanded: t,
            activeScreen: f,
            sourceQuestContent: d.uF.QUEST_BAR_V2,
            popoutTargetElementRef: a,
            onGameSheetOpened: c,
            onGameSheetClosed: C,
            hasAlreadyLinked: m,
            onClickGameTitle: p,
        });
    return (0, s.jsxs)("div", {
        className: eL.Z0,
        children: [
            (0, s.jsx)(b, {
                inState: n,
                id: "progress-bar",
                ref: l,
                children: (e) =>
                    (0, s.jsx)(eq.A, {
                        ref: e,
                        style: "small",
                        percentComplete: i,
                        size: 42,
                        children: (0, s.jsx)(eO.A, {
                            fullWidth: !0,
                            quest: o,
                            location: K.rE.QUESTS_BAR,
                            questContent: d.uF.QUEST_BAR_V2,
                            autoplay: !1,
                            sourceQuestContent: d.uF.QUEST_BAR_V2,
                        }),
                    }),
            }),
            (0, s.jsxs)("div", {
                className: eL.NZ,
                children: [
                    (0, s.jsx)(b, {
                        inState: n,
                        id: "progress-title",
                        children: (e) =>
                            (0, s.jsx)(eV.E, {
                                ref: e,
                                className: eL.FZ,
                                color: "text-strong",
                                variant: "text-sm/semibold",
                                children: E,
                            }),
                    }),
                    (0, s.jsx)(b, {
                        inState: n,
                        id: "progress-subtitle",
                        isTextTransition: !0,
                        children: (e) =>
                            (0, s.jsx)(eV.E, {
                                ref: e,
                                className: eL.FZ,
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
var eM = n(939249),
    ew = n(365199),
    eP = n(270045),
    eD = n(316878);
function eG() {
    let { quest: e } = r.useContext(et),
        { onCtxMenuOpen: t, onCtxMenuClose: n, onCtxMenuSelect: l } = P(),
        i = (0, x.S5)(e.config.expiresAt);
    return (0, s.jsxs)("div", {
        className: eD.pS,
        children: [
            (0, s.jsx)(eV.E, {
                variant: "text-xxs/medium",
                className: j()(eD.Uu, eD.TK),
                children: eR.intl.format(eR.t["pX+fmn"], { expirationDate: i }),
            }),
            (0, s.jsx)(eP.C, {
                onOpen: t,
                onClose: n,
                onSelect: l,
                questContent: d.uF.QUEST_BAR_V2,
                quest: e,
                shouldShowDisclosure: !1,
                showShareLink: !0,
                sourceQuestContent: d.uF.QUEST_BAR_V2,
                children: (e) =>
                    (0, s.jsx)(eM.D, {
                        ...e,
                        className: eD.rb,
                        "aria-label": eR.intl.string(eR.t.DEoVWZ),
                        children: (0, s.jsx)(ew.MoreHorizontalIcon, {
                            size: "md",
                            color: "currentColor",
                            className: j()(eD.Bx, eD.U9),
                        }),
                    }),
            }),
        ],
    });
}
var eW = n(379073);
function eH(e) {
    let { progressBarRef: t } = e,
        { quest: n, taskDetails: l } = r.useContext(et),
        i = n.userStatus?.completedAt != null,
        a = n.userStatus?.enrolledAt != null,
        o = (0, x.I3)(n),
        u = null != o ? o.percentComplete : l.percentComplete,
        c = r.useRef(null);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            i && (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(eG, {}), (0, s.jsx)("div", { className: eW.y })] }),
            a
                ? (0, s.jsx)(ek, {
                      contentLocation: "collapsed",
                      progressBarRef: t,
                      isExpanded: !1,
                      percentComplete: u,
                  })
                : null,
            i &&
                (0, s.jsx)("div", {
                    ref: c,
                    children: (0, s.jsx)(eb, {
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
function e$() {
    let { quest: e } = r.useContext(et),
        t = e.userStatus?.completedAt != null,
        n = e.userStatus?.enrolledAt != null,
        l = r.useRef(null),
        [i, a] = r.useState(!1);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            t && (0, s.jsx)(ec, { progressBarRef: l, isHovered: i }),
            (0, s.jsx)(ex, {
                layoutVariant: n ? "inset" : "flush",
                backgroundImage: t ? `linear-gradient(90deg, ${F}, ${B})` : void 0,
                onMouseEnter: () => a(!0),
                onMouseLeave: () => a(!1),
                children: (0, s.jsx)(eH, { progressBarRef: l }),
            }),
        ],
    });
}
var ez = n(290136),
    eK = n(661531),
    eY = n(57718),
    eX = n(393824);
let eZ = function (e) {
    let { isFullyExpanded: t, partnerBranding: n } = e,
        l = {
            label: !(function () {
                let [e, t] = r.useState(() => 270 > ea());
                return (
                    r.useEffect(() => {
                        let e = new MutationObserver(() => {
                            t(270 > ea());
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
        a = (0, i.bG)([q.Ay], () => q.Ay.useReducedMotion),
        { quest: o } = r.useContext(et),
        { expansionSpring: u } = r.useContext(I),
        c = l ? -4 : 6;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(S.animated.div, {
                className: eX.tE,
                style: {
                    transform: (0, S.to)(
                        [
                            u.to({ range: [0, 1], output: [0, 0] }),
                            u.to({ range: [0, 1], output: [0, 82] }),
                            u.to({ range: [0, 1], output: [1, 1.3333333333333333] }),
                        ],
                        (e, t, n) => `translate(${e}px, ${t}px) scale(${n})`,
                    ),
                },
                children: (0, s.jsx)(eO.A, {
                    learnMoreStyle: "text",
                    learnMoreFontSize: t ? 9 : void 0,
                    quest: o,
                    location: K.rE.QUESTS_BAR,
                    questContent: d.uF.QUEST_BAR_V2,
                    autoplay: t && !a,
                    sourceQuestContent: d.uF.QUEST_BAR_V2,
                    style: { width: 48, height: 48, marginRight: 8, borderRadius: 6 },
                }),
            }),
            (0, s.jsxs)(S.animated.div, {
                className: j()(eX.pm, { [eX.nd]: l }),
                style: {
                    transform: (0, S.to)(
                        [u.to({ range: [0, 1], output: [0, -48] }), u.to({ range: [0, 1], output: [0, c] })],
                        (e, t) => `translate(${e}px, ${t}px)`,
                    ),
                },
                children: [
                    (0, s.jsx)("div", { className: j()({ [eX.Iu]: !l }), children: n }),
                    (0, s.jsx)(S.animated.div, {
                        className: j()(eX.ol, { [eX.yZ]: l }),
                        style: { opacity: (0, U.a)(u.to({ range: [0, 1], output: [l ? 1 : 0.7, 0] })) },
                        children: (0, s.jsx)(eV.E, {
                            color: "text-overlay-light",
                            lineClamp: 1,
                            variant: "text-xs/medium",
                            children: eR.intl.string(eR.t["3mgEQf"]),
                        }),
                    }),
                ],
            }),
        ],
    });
};
var eJ = n(886030);
let e0 = (0, S.animated)(eY.Ay),
    e1 = function () {
        let e = (0, ep.wW)(),
            { expansionSpring: t } = r.useContext(I),
            { quest: n } = r.useContext(et),
            {
                onCtxMenuOpen: l,
                onCtxMenuClose: i,
                onCtxMenuSelect: a,
                isExpanded: o,
                isExpansionAnimationComplete: u,
            } = P(),
            c = r.useCallback(() => {
                (0, g.Zc)(n, {
                    content: d.uF.QUEST_BAR_V2,
                    ctaContent: $.Cy.OPEN_DISCLOSURE,
                    sourceQuestContent: d.uF.QUEST_BAR_V2,
                });
            }, [n]),
            x = r.useCallback(() => {
                (0, eE.pu)(n, {
                    content: d.uF.QUEST_BAR_HEADER,
                    ctaContent: $.Cy.OPEN_GAME_LINK,
                    impressionId: e(),
                    sourceQuestContent: d.uF.QUEST_BAR_V2,
                });
            }, [e, n]),
            C = o && u,
            m = (0, s.jsx)(eM.D, {
                onClick: x,
                className: j()(eJ.vk, { [eJ.wm]: C }),
                children: (0, s.jsx)(e0, {
                    quest: n,
                    withGameTile: !1,
                    logotypeClassName: eJ.Iu,
                    logotypeStyle: {
                        height: 24,
                        maxWidth: 92,
                        transform: (0, S.to)([t.to({ range: [0, 1], output: [1, 1] })], (e) => `scale(${e})`),
                    },
                }),
            });
        return (0, s.jsxs)(S.animated.div, {
            className: j()(eJ.iE, eJ.Ht, { [eJ.tT]: C }),
            style: { transform: (0, S.to)([t.to({ range: [0, 1], output: [6, 0] })], (e) => `translateY(${e}px)`) },
            children: [
                (0, s.jsx)(S.animated.div, {
                    className: eJ.Tu,
                    style: { opacity: (0, U.a)(t.to({ range: [0, 1], output: [0, 1] })) },
                }),
                (0, s.jsx)(eZ, { isFullyExpanded: C, partnerBranding: m }),
                (0, s.jsxs)(S.animated.div, {
                    className: eJ.P0,
                    style: { opacity: (0, U.a)(t.to({ range: [0, 1], output: [0, 1] })) },
                    children: [
                        (0, s.jsxs)(eM.D, {
                            className: eJ.y8,
                            onClick: c,
                            children: [
                                (0, s.jsx)(eV.E, {
                                    color: "text-overlay-light",
                                    variant: "text-xs/normal",
                                    children: eR.intl.string(eR.t.o6FLcF),
                                }),
                                (0, s.jsx)(ez.CircleQuestionIcon, { color: eK.A.colors.WHITE, className: eJ.P$ }),
                            ],
                        }),
                        (0, s.jsx)(eP.C, {
                            onOpen: l,
                            onClose: i,
                            onSelect: a,
                            questContent: d.uF.QUEST_BAR_V2,
                            quest: n,
                            shouldShowDisclosure: !0,
                            showShareLink: !0,
                            sourceQuestContent: d.uF.QUEST_BAR_V2,
                            children: (e) =>
                                (0, s.jsx)(eM.D, {
                                    ...e,
                                    className: j()(eJ.uJ, eJ.rb),
                                    "aria-label": eR.intl.string(eR.t.DEoVWZ),
                                    children: (0, s.jsx)(ew.MoreHorizontalIcon, {
                                        size: "md",
                                        color: "currentColor",
                                        className: j()(eJ.Bx, eJ.ON),
                                    }),
                                }),
                        }),
                    ],
                }),
            ],
        });
    };
var e2 = n(506500);
let e3 = function (e) {
    let { children: t, header: n, layoutVariant: l } = e,
        { collapsedHeight: i, isExpanded: a } = P(),
        { expansionSpring: o } = r.useContext(I);
    return (0, s.jsxs)(S.animated.div, {
        "aria-hidden": !a,
        className: j()(e2.R, { [e2.w]: "inset" === l }),
        style: {
            transform: (0, S.to)(
                [o.to({ range: [0, 1], output: [0, -100] }), o.to({ range: [0, 1], output: [0, i] })],
                (e, t) => `translateY(calc(${e}% + ${t}px))`,
            ),
        },
        children: [n, (0, s.jsx)(S.animated.div, { style: { opacity: 1 }, children: t })],
    });
};
n(801541);
var e7 = n(889137),
    e6 = n(417270),
    e8 = n(782134),
    e9 = n(297264),
    e5 = n(825484),
    e4 = n(408278),
    te = n(921853),
    tt = n(607470),
    tn = n(396813),
    ts = n(405670),
    tr = n(112142),
    tl = n(646917),
    ti = n(291749),
    ta = n(576761),
    to = n(895253),
    tu = n(976019),
    tc = n(442734),
    td = n(139384),
    tx = n(114046),
    tC = n(695366),
    tm = n(274670),
    tp = n(144779),
    tf = n(30370),
    tE = n(178540),
    th = n(104886),
    tg = n(18437),
    t_ = n(780964),
    tj = n(766075),
    tS = n(52093),
    tA = n(575630);
function tv(e) {
    let { text: t, quest: n, sourceQuestContent: r } = e,
        i = (0, tg.Ut)(),
        a = (0, ep.wW)();
    return (0, s.jsx)(eM.D, {
        className: tA.Z0,
        onClick: () => {
            ((0, th.E5)(th.kI.STEP_2_CLICKED_INTERNAL, "console_connection_step")
                ? (0, tm.r)({
                      type: tp.F.CLICK_INTERNAL,
                      adCreativeType: l.p.QUEST,
                      adCreativeId: n.id,
                      questContentCTA: $.Cy.VIEW_CONSOLE_CONNECTIONS_LINK,
                      surfaceId: d.uF.QUEST_BAR_V2,
                      sourceQuestContent: r,
                      impressionId: a(),
                  })
                : i({
                      questId: n.id,
                      questContent: d.uF.QUEST_BAR_V2,
                      questContentCTA: $.Cy.VIEW_CONSOLE_CONNECTIONS_LINK,
                      sourceQuestContent: r,
                  }),
                (0, tj.openUserSettings)(t_.X.CONNECTIONS_CATEGORY));
        },
        children: (0, s.jsx)(eV.E, { "aria-label": t, color: "none", variant: "text-xxs/normal", children: t }),
    });
}
function tR(e) {
    let { xboxAndPlaystationAccounts: t, quest: n, sourceQuestContent: r } = e;
    return t.length > 0
        ? (0, s.jsx)(tv, { text: eR.intl.string(eR.t["qiS+xj"]), quest: n, sourceQuestContent: r })
        : null;
}
function ty(e) {
    return (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(tS.L5, { children: eR.intl.string(eR.t.EJFSvD) }), (0, s.jsx)(tR, { ...e })],
    });
}
var tT = n(607886);
function tQ(e) {
    return (0, s.jsx)(eV.E, {
        className: tT.eW,
        color: "text-muted",
        variant: "text-xxs/normal",
        children: e.children,
    });
}
function tN(e) {
    let { quest: t, useReducedMotion: n } = e,
        i = (0, h.H1)(t.id, d.uF.QUEST_BAR_V2, d.uF.QUEST_BAR_V2),
        a = (0, h.Xf)({ useReducedMotion: n }),
        o = (0, tg.Ut)(),
        u = (0, ep.wW)(),
        c = (0, tE.O)((e) => e.getErrorHints(t.id)),
        { startingConsoleQuest: C, startConsoleQuest: m } = (0, x.Wj)({
            questId: t.id,
            beforeRequest: () => {
                ((0, th.E5)(th.kI.STEP_2_CLICKED_INTERNAL, "quest_bar_console_task_checklist")
                    ? (0, tm.r)({
                          type: tp.F.CLICK_INTERNAL,
                          adCreativeType: l.p.QUEST,
                          adCreativeId: t.id,
                          questContentCTA: $.Cy.DEFIBRILLATOR,
                          surfaceId: d.uF.QUEST_BAR_V2,
                          sourceQuestContent: d.uF.QUEST_BAR_V2,
                          impressionId: u(),
                      })
                    : o({
                          questId: t.id,
                          questContent: d.uF.QUEST_BAR_V2,
                          questContentCTA: $.Cy.DEFIBRILLATOR,
                          sourceQuestContent: d.uF.QUEST_BAR_V2,
                      }),
                    a.startAnimation());
            },
            afterRequest: a.stopAnimation,
        }),
        { header: p, renderBody: f } = r.useMemo(() => {
            let e = c.length > 0,
                n = t.config.messages.gameTitle;
            return {
                header: e
                    ? (0, eh.ui)(t)
                        ? eR.intl.string(eR.t.N33EuL)
                        : eR.intl.formatToPlainString(eR.t["28Ql27"], { gameTitle: n })
                    : (0, eh.ui)(t)
                      ? eR.intl.string(eR.t.YstzGO)
                      : eR.intl.formatToPlainString(eR.t.gX0Qcx, { gameTitle: n }),
                renderBody: e
                    ? function () {
                          return (0, s.jsx)(s.Fragment, {
                              children: c.map((e, n) => {
                                  if (e.type === tx._.EXPIRED_CREDENTIAL) {
                                      let r = tf.A.getAccount(e.connected_account_id, e.connected_account_type),
                                          l = (0, eE.IG)(e),
                                          i = (0, eE.$J)(e);
                                      return (0, s.jsx)(
                                          tQ,
                                          {
                                              children: eR.intl.format(l, {
                                                  account_name: r?.name,
                                                  onClick: () => {
                                                      (0, eE.v0)(
                                                          { quest: t, platformType: i },
                                                          {
                                                              content: d.uF.QUEST_BAR,
                                                              ctaContent: $.Cy.DEFIBRILLATOR_RECONNECT_CONSOLE,
                                                              impressionId: u(),
                                                              sourceQuestContent: d.uF.QUEST_BAR_V2,
                                                          },
                                                      );
                                                  },
                                              }),
                                          },
                                          n,
                                      );
                                  }
                                  return (0, s.jsx)(tQ, { children: e.message }, n);
                              }),
                          });
                      }
                    : () =>
                          (0, s.jsx)(eV.E, {
                              className: tT.eW,
                              color: "text-muted",
                              variant: "text-xxs/normal",
                              children: (0, eh.ui)(t)
                                  ? eR.intl.string(eR.t.bUyEZZ)
                                  : eR.intl.format(eR.t.GXqvC1, { gameTitle: n }),
                          }),
            };
        }, [c, t, u]);
    return (0, s.jsxs)("div", {
        className: tT.XK,
        children: [
            (0, s.jsxs)("div", {
                className: tT.oK,
                children: [
                    (0, s.jsx)(tC.E, {
                        size: "custom",
                        color: "currentColor",
                        className: 0 === c.length ? tT.pH : tT.JA,
                        width: 16,
                        height: 16,
                    }),
                    (0, s.jsx)(eV.E, { variant: "text-xs/medium", children: p }),
                    (0, s.jsx)(eM.D, {
                        className: j()(tT.w, { [tT.r9]: C }),
                        onClick: () => m(),
                        children: a.render(),
                    }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: j()({ [tT.Iu]: C }),
                children: [f(), 0 === c.length ? null : (0, s.jsx)(tQ, { children: i })],
            }),
        ],
    });
}
let tU = function (e) {
    let { quest: t, taskDetails: n } = e,
        l = (0, i.bG)([q.Ay], () => q.Ay.useReducedMotion),
        a = (0, x.Du)(),
        o = r.useMemo(
            () => (0, eE.bg)(t).filter((e) => null != a.xboxAndPlaystationAccounts.find((t) => t.type === e)),
            [a.xboxAndPlaystationAccounts, t],
        ),
        {
            steps: u,
            hasConnectedAccounts: c,
            isProgressingQuestForLaunchedGame: C,
            isQuestComplete: m,
        } = r.useMemo(() => {
            let e = o.length > 0,
                r = e && (0, p.YL)(t),
                l = t.config.messages.gameTitle,
                i = t.userStatus?.completedAt != null;
            return {
                steps: [
                    {
                        renderContent: () => (0, s.jsx)(ty, { ...a, quest: t, sourceQuestContent: d.uF.QUEST_BAR_V2 }),
                        isComplete: e || r || i,
                    },
                    {
                        renderContent: () =>
                            (0, s.jsx)(tS.L5, {
                                children: (0, eh.ui)(t)
                                    ? eR.intl.string(eR.t["5tXqFe"])
                                    : eR.intl.formatToPlainString(eR.t["+8JB6Y"], { gameTitle: l }),
                            }),
                        isComplete: r || i,
                    },
                    {
                        renderContent: () =>
                            (0, s.jsx)(tS.L5, {
                                children: eR.intl.formatToPlainString(eR.t.HhfrYS, { numMinutes: n.targetMinutes }),
                            }),
                        isComplete: i,
                    },
                ],
                hasConnectedAccounts: e,
                isProgressingQuestForLaunchedGame: r,
                isQuestComplete: i,
            };
        }, [a, o.length, t, n.targetMinutes]);
    return (0, s.jsx)(tS.Ay, {
        heading: eR.intl.string(eR.t.UPWlJu),
        steps: u,
        children: c && !C && !m && (0, s.jsx)(tN, { useReducedMotion: l, quest: t }),
    });
};
(n(134528), n(947204));
var tF = n(934225);
function tB(e) {
    let { header: t, children: n } = e;
    return (0, s.jsxs)("div", {
        className: tF.Nr,
        children: [
            (0, s.jsxs)("div", {
                className: tF.wx,
                children: [
                    (0, s.jsx)(tC.E, {
                        size: "custom",
                        color: "currentColor",
                        className: tF.Kk,
                        width: 16,
                        height: 16,
                    }),
                    (0, s.jsx)(e9.D, { color: "text-default", variant: "heading-sm/medium", children: t }),
                ],
            }),
            (0, s.jsx)(eV.E, { color: "text-muted", variant: "text-xs/normal", className: tF.r2, children: n }),
        ],
    });
}
let tI = function (e) {
    let { quest: t } = e,
        n = (0, x.aC)(t);
    if (0 === n.length) return null;
    let r = n.at(0);
    return r === eR.intl.string(eR.t.BV6xDm)
        ? (0, s.jsx)(tB, { header: eR.intl.string(eR.t.onh6ct), children: eR.intl.string(eR.t.arVHRA) })
        : r === eR.intl.string(eR.t.MFGxFM)
          ? (0, s.jsx)(tB, { header: eR.intl.string(eR.t.JPihZA), children: eR.intl.string(eR.t.MFGxFM) })
          : null;
};
var tb = n(31300),
    tV = n(687966),
    tO = n(35558);
let tq = function (e) {
    let { onDesktop: t, onConsole: n } = e;
    return (0, s.jsxs)(e5.e, {
        direction: "vertical",
        fullWidth: !0,
        className: tO.G,
        size: "sm",
        children: [
            (0, s.jsx)(eC.$, {
                onClick: t,
                text: eR.intl.string(eR.t["QXc01+"]),
                variant: "secondary",
                icon: tb.k,
                iconPosition: "end",
            }),
            (0, s.jsx)(eC.$, {
                onClick: n,
                text: eR.intl.string(eR.t["8lAfuB"]),
                variant: "secondary",
                icon: tV.GameControllerIcon,
                iconPosition: "end",
            }),
        ],
    });
};
var tL = n(158247);
function tk(e) {
    let { isHovered: t, asset: n, poster: l, className: a, autoPlay: o = !1, ref: u } = e,
        { isExpanded: c } = P(),
        d = (0, i.bG)([q.Ay], () => q.Ay.useReducedMotion),
        x = r.useRef(null);
    return (
        r.useEffect(() => {
            null != x.current && (c && (!d || t) ? ((x.current.currentTime = 0), x.current.play()) : x.current.pause());
        }, [x, c, t, d]),
        (0, td.A)(x),
        (0, s.jsx)(tt.A, {
            ref: (e) => {
                ((x.current = e), null != u && ("function" == typeof u ? u(e) : (u.current = e)));
            },
            autoPlay: o,
            poster: l,
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: a,
            controls: !1,
            children: (0, s.jsx)("source", { src: n.url, type: n.mimetype ?? void 0 }),
        })
    );
}
function tM(e) {
    let { onClick: t } = e,
        { quest: n } = r.useContext(et),
        l = (0, i.bG)([q.Ay], () => q.Ay.useReducedMotion),
        [a, o] = r.useState(!1),
        u = (0, ti.tW)(n, ti.fY.QUEST_BAR_HERO_VIDEO, void 0, !1),
        c = (0, ti.tW)(n, ti.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1),
        d = (0, ts.Kr)((e) => e.getVideoProgressState)(n.id),
        x = n.userStatus?.completedAt != null && d === ts.K2.COMPLETED,
        C = !x && (!l || a);
    return (0, s.jsxs)(eM.D, {
        className: tL.QO,
        onClick: t,
        onMouseEnter: function () {
            l && !a && o(!0);
        },
        onMouseLeave: function () {
            l && a && o(!1);
        },
        children: [
            null != c &&
                (0, s.jsx)(f._M, {
                    id: "QuestBarContentExpanded_videoThumbnail",
                    children: (e) => (0, s.jsx)("img", { ref: e, alt: "", src: c.url, className: tL.Ue }),
                }),
            null != u
                ? (0, s.jsx)(f._M, {
                      id: "QuestBarContentExpanded_video",
                      children: (e) =>
                          (0, s.jsx)(tk, {
                              ref: e,
                              isHovered: a,
                              autoPlay: !1,
                              asset: u,
                              poster: c?.url,
                              className: j()(tL.NM, { [tL.Gc]: C }),
                          }),
                  })
                : null,
            (0, s.jsx)("div", {
                className: tL.LT,
                children: x
                    ? (0, s.jsx)(e6.RetryIcon, { color: eK.A.colors.WHITE, className: tL.t })
                    : (0, s.jsx)(e8.PlayIcon, { color: eK.A.colors.WHITE, className: tL.t }),
            }),
        ],
    });
}
function tw(e) {
    let { quest: t } = e;
    return (0, s.jsx)(eO.A, {
        className: j()(tL.Qq, tL.wq),
        learnMoreStyle: "text",
        quest: t,
        location: K.rE.QUESTS_BAR,
        questContent: d.uF.QUEST_BAR_V2,
        sourceQuestContent: d.uF.QUEST_BAR_V2,
    });
}
function tP(e) {
    let { isCtaInteractable: t, containerRef: n, onAcceptQuest: l } = e,
        { quest: a, taskDetails: o } = r.useContext(et),
        { onGameSheetOpen: u, onGameSheetClose: c } = P(),
        { expansionSpring: C } = r.useContext(I),
        m = r.useRef(null),
        p = (0, i.bG)([R.A], () => R.A.isEnrolling(a.id), [a]),
        E = r.useMemo(() => (0, ti.tW)(a, ti.fY.QUEST_BAR_HERO), [a]),
        h = (0, em.NA)({ quest: a }),
        _ = r.useMemo(() => (0, ti.tW)(a, ti.fY.HERO_IMAGE), [a]),
        A = r.useMemo(() => (null == _ ? {} : { backgroundImage: `url(${_.url})` }), [_]),
        v = tr.t.useConfig({ location: K.rE.QUESTS_BAR }),
        y = (0, em.mU)({
            quest: a,
            location: K.rE.QUESTS_BAR,
            taskDetails: o,
            sourceQuestContent: d.uF.QUEST_BAR_V2,
            popoutTargetElementRef: m,
            onGameSheetOpened: u,
            onGameSheetClosed: c,
            gameProfileSource: Z.GameProfileSources.QuestBar,
        }),
        T = (0, eS.Pd)(a),
        Q = (0, tl.z)(),
        N = (0, x.SD)(a, Q),
        F = Q === ta.MA.NITRO && N;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)("div", {
                ref: m,
                children: (0, s.jsxs)("div", {
                    className: tL.do,
                    ref: n,
                    children: [
                        (0, s.jsxs)("div", {
                            className: tL.zH,
                            children: [
                                (0, s.jsx)(tw, { quest: a }),
                                (0, s.jsx)(e9.D, {
                                    className: tL.DD,
                                    color: "text-strong",
                                    variant: "heading-md/medium",
                                    children: eR.intl.format(eR.t.EQa7os, { questName: a.config.messages.questName }),
                                }),
                                (0, s.jsxs)("div", {
                                    className: tL.zf,
                                    children: [
                                        (0, s.jsx)(eV.E, { className: tL.h_, variant: "text-xs/normal", children: y }),
                                        N && (0, s.jsx)(tc.e, { questId: a.id, orbMultiplierEligibility: Q }),
                                    ],
                                }),
                            ],
                        }),
                        (0, s.jsx)("div", {
                            className: j()(tL.lO, { [tL._o]: !t }),
                            "data-testid": "quest-bar-enroll-cta",
                            children: (0, s.jsx)(e5.e, {
                                direction: "horizontal",
                                fullWidth: !0,
                                wrap: !1,
                                children:
                                    v.enabled && T === eS.UA.UNENROLLED && v.enabledQuestStates.has(eS.UA.UNENROLLED)
                                        ? (0, s.jsx)(ej.A, {
                                              quest: a,
                                              surface: eS.V3.QUEST_BAR_FOOTER,
                                              size: "sm",
                                              analyticsCtxQuestContent: d.uF.QUEST_BAR_V2,
                                              analyticsCtxSourceQuestContent: d.uF.QUEST_BAR_V2,
                                          })
                                        : (0, s.jsx)(eC.$, {
                                              onClick: l,
                                              variant: "primary",
                                              loading: p,
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
            (0, s.jsx)(to.A, { visible: F, glow: !0, className: tL.Ph }),
            null != _ &&
                (0, s.jsx)(S.animated.div, {
                    className: tL.AK,
                    style: { opacity: (0, U.a)(C.to([0, 1], [1, 0])) },
                    children: (0, s.jsx)("div", { className: j()(tL.LC, tL.Ge), style: A }),
                }),
            (0, s.jsxs)(S.animated.div, {
                className: tL.IC,
                style: {
                    backdropFilter: (0, U.Q)(C.to([0, 1], [5, 0]).to((e) => `blur(${e}px)`)),
                    filter: (0, U.Q)(C.to([0, 1], [0.8, 1]).to((e) => `brightness(${e})`)),
                },
                children: [
                    E.isAnimated
                        ? (0, s.jsx)(f._M, {
                              id: "QuestBarContentExpanded_heroAnimated",
                              children: (e) => (0, s.jsx)(tk, { ref: e, autoPlay: !0, asset: E, className: tL.LO }),
                          })
                        : (0, s.jsx)(f._M, {
                              id: "QuestBarContentExpanded_heroStatic",
                              children: (e) => (0, s.jsx)("img", { ref: e, alt: "", className: tL.LO, src: E.url }),
                          }),
                    (0, s.jsx)("div", { className: tL.tV }),
                ],
            }),
        ],
    });
}
function tD(e) {
    let { quest: t } = e,
        { hasAlreadyLinked: n, onClickGameTitle: l } = r.useContext(en);
    return !0 !== n ? null : (0, s.jsx)(tu.A, { quest: t, hasAlreadyLinked: n, onClickGameTitle: l });
}
function tG(e) {
    let { activeScreen: t, selectPlatform: n } = e,
        { quest: l, taskDetails: i } = r.useContext(et);
    return (0, e7.YW)(t)
        .with(d.X0.SELECT, () => (0, s.jsx)(tq, { onConsole: () => n(K.fO.CONSOLE), onDesktop: () => n(K.fO.DESKTOP) }))
        .with(d.X0.DESKTOP, () => ((0, p.I6)(l) ? (0, s.jsx)(tD, { quest: l }) : (0, s.jsx)(tI, { quest: l })))
        .with(d.X0.CONSOLE, () => (0, s.jsx)(tU, { quest: l, taskDetails: i }))
        .exhaustive();
}
function tW(e) {
    let { parentContainerRef: t } = e,
        { quest: n, taskDetails: l } = r.useContext(et),
        [i, a, o] = (0, x.Qo)(n, l),
        u = l.percentComplete > 0,
        c = (0, x.Vn)(n),
        C = (0, x.RR)({ quest: n }),
        m = a.length > 1 && !u && !c;
    return (0, s.jsxs)(M, {
        children: [
            (0, s.jsx)(tG, { activeScreen: i, selectPlatform: o }),
            i !== d.X0.SELECT &&
                (0, s.jsxs)("div", {
                    className: tL.oG,
                    children: [
                        m &&
                            (0, s.jsx)(e4.K, {
                                size: "sm",
                                "aria-label": eR.intl.string(eR.t["13/7kX"]),
                                onClick: () => o(null),
                                icon: te.n,
                                variant: "secondary",
                            }),
                        (0, s.jsx)(eb, {
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
function tH(e) {
    let { parentContainerRef: t } = e,
        { quest: n, taskDetails: l } = r.useContext(et),
        i = l.percentComplete > 0,
        a = (0, x.Vn)(n),
        o = (0, x.Hv)() && n.userStatus?.completedAt == null,
        u = r.useCallback(() => {
            if (o) {
                ((0, m.Y5)({
                    questId: n.id,
                    questContent: d.uF.QUEST_BAR_V2,
                    questContentCTA: $.Cy.QUEST_ACCESS_SUSPENDED,
                    sourceQuestContent: d.uF.QUEST_BAR_V2,
                }),
                    (0, g.FS)());
                return;
            }
            (0, g.d5)({
                quest: n,
                questContent: d.uF.QUEST_BAR_V2,
                sourceQuestContent: d.uF.QUEST_BAR_V2,
                sourceQuestContentCTA: $.Cy.QUEST_BAR_VIDEO_QUEST_PREVIEW,
            });
        }, [n, o]);
    return (0, s.jsxs)(M, {
        children: [
            (0, s.jsx)(tM, { onClick: u }),
            (0, s.jsx)(eb, {
                parentContainerRef: t,
                awaitingConsoleConnections: !1,
                hasMadeProgress: i,
                isProgressing: a,
                sourceQuestContent: d.uF.QUEST_BAR_V2,
            }),
        ],
    });
}
function t$(e) {
    let { parentContainerRef: t } = e,
        { quest: n, taskDetails: l } = r.useContext(et),
        i = l.percentComplete > 0,
        a = (0, x.Vn)(n);
    return (0, s.jsx)(M, {
        children: (0, s.jsx)(eb, {
            parentContainerRef: t,
            awaitingConsoleConnections: !1,
            hasMadeProgress: i,
            isProgressing: a,
            sourceQuestContent: d.uF.QUEST_BAR_V2,
        }),
    });
}
function tz(e) {
    let { parentContainerRef: t } = e,
        { quest: n } = r.useContext(et);
    return (0, p.t)({ quest: n }) || (0, p.g5)(n) || (0, p.fE)({ quest: n }) || (0, p.I6)(n)
        ? (0, s.jsx)(tW, { parentContainerRef: t })
        : (0, p.vv)(n)
          ? (0, s.jsx)(tH, { parentContainerRef: t })
          : (0, s.jsx)(t$, { parentContainerRef: t });
}
function tK(e) {
    let { containerRef: t } = e,
        { quest: n, taskDetails: l } = r.useContext(et),
        { expansionSpring: i } = r.useContext(I),
        a = r.useRef(null),
        o = r.useRef(null),
        u = (0, x.I3)(n),
        c = null != u ? u.percentComplete : l.percentComplete;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(S.animated.div, {
                className: j()(tL.tv, tL.ag),
                style: {
                    backgroundImage: `linear-gradient(90deg, ${F}, ${B})`,
                    opacity: (0, U.a)(i.to({ range: [0, 1], output: [1, 0] })),
                },
            }),
            (0, s.jsxs)("div", {
                className: tL.Fe,
                ref: (e) => {
                    ("function" == typeof t ? t(e) : null != t && (t.current = e), null != e && (o.current = e));
                },
                children: [
                    (0, s.jsx)(eG, {}),
                    (0, s.jsx)("div", { className: tL.yF }),
                    (0, s.jsx)(ec, { progressBarRef: a, isHovered: !1 }),
                    (0, s.jsx)(ek, {
                        contentLocation: "expanded",
                        progressBarRef: a,
                        isExpanded: !0,
                        percentComplete: c,
                        popoutTargetElementRef: o,
                    }),
                    (0, s.jsx)(tz, { parentContainerRef: o }),
                ],
            }),
            (0, s.jsx)("div", {
                className: j()(tL.tv, tL.Sx),
                style: { backgroundImage: `linear-gradient(90deg, ${F}, ${B})` },
            }),
        ],
    });
}
async function tY(e, t, n, s) {
    (0, p.vv)(e)
        ? await (0, g.e0)(e, { questContent: t, questContentCTA: n, sourceQuestContent: s, sourceQuestContentCTA: n })
        : (0, eh.vA)(e)
          ? await (0, tn.Oy)(e.id, { questContent: t, questContentCTA: n, sourceQuestContent: s })
          : (0, tn.Oy)(e.id, { questContent: t, questContentCTA: n, sourceQuestContent: s });
}
function tX() {
    let { quest: e } = r.useContext(et),
        { isExpanded: t, isExpansionAnimationComplete: n } = P(),
        { expandedContentRef: l } = r.useContext(I),
        { launchInGameActivity: i } = (0, x.zW)(e),
        a = (0, eh.vA)(e),
        o = r.useCallback(async () => {
            let t = a ? $.Cy.START_QUEST : $.Cy.ACCEPT_QUEST;
            (await tY(e, d.uF.QUEST_BAR_V2, t, d.uF.QUEST_BAR_V2), a && i());
        }, [e, i, a]);
    return e.userStatus?.enrolledAt != null
        ? (0, s.jsx)(tK, { containerRef: l })
        : (0, s.jsx)(tP, { isCtaInteractable: !t || n, containerRef: l, onAcceptQuest: o });
}
function tZ() {
    let {
            expansionSpring: e,
            animatedComponentProps: t,
            recalculateAnimationPositions: n,
            mountPoints: l,
        } = r.useContext(I),
        { isExpanded: i } = P();
    return (
        r.useEffect(() => {
            n();
        }, [n, i]),
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
                let { id: n, collapsedLeft: r, expandedLeft: i, collapsedTop: a, expandedTop: o, width: u } = t,
                    c = l.get(n);
                return (0, s.jsx)(
                    S.animated.div,
                    {
                        ref: c,
                        style: {
                            zIndex: 2,
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: u,
                            transform: (0, S.to)(
                                [e.to({ range: [0, 1], output: [r, i] }), e.to({ range: [0, 1], output: [a, o] })],
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
function tJ() {
    let { quest: e } = r.useContext(et),
        t = e.userStatus?.enrolledAt != null;
    return (0, s.jsx)(e3, {
        layoutVariant: t ? "inset" : "flush",
        header: (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(tZ, {}), !t && (0, s.jsx)(e1, {})] }),
        children: (0, s.jsx)(tX, {}),
    });
}
var t0 = n(731738),
    t1 = n(807393),
    t2 = n(260364);
function t3(e) {
    let { isExpanded: t, questId: n } = e;
    return (
        (0, x.H6)({
            mode: t ? K.fP.EXPANDED : K.fP.COLLAPSED,
            questContent: d.uF.QUEST_BAR_V2,
            questId: n,
            sourceQuestContent: d.uF.QUEST_BAR_V2,
        }),
        null
    );
}
function t7() {
    return (
        r.useEffect(() => {
            u.trigger();
        }, []),
        null
    );
}
function t6(e) {
    let { quest: t } = r.useContext(et),
        { isQuestBarVisible: n, reason: s } = (0, h.TQ)({ quest: t }),
        { impressionRef: i } = e;
    return (
        !(function (e) {
            let {
                adCreativeId: t,
                adCreativeType: n,
                reportRenderingFailure: s,
                hasAssetsError: i,
                isEligibleForQuests: a,
                isQuestBarVisible: o,
                isVisibilityAnimationAtRest: u,
                isLoadingAssets: c,
                currentQuestVisibleReason: x,
                shouldShowQuestBar: C,
                isQuestEnrollmentBlocked: m,
            } = e;
            (r.useEffect(() => {
                i &&
                    (s("asset_loading_error"),
                    t1.A.increment({
                        name: t0.K.QUEST_CONTENT_RENDERING_FAILURE,
                        tags: [
                            `ad_creative_id:${t}`,
                            `ad_creative_type:${l.p[n]}`,
                            `quest_content:${(0, $.jO)(d.uF.QUEST_BAR)}`,
                            "reason:asset_loading_error",
                        ],
                    }));
            }, [i, t, n, s]),
                r.useEffect(() => {
                    a || s("not_eligible_for_quest");
                }, [a, s]),
                r.useEffect(() => {
                    o || !u || c || s(x);
                }, [o, u, c, x, s]),
                r.useEffect(() => {
                    ((!C || m) && t2.A.clearTracking(), o && u && !c && !i && a && t2.A.stopTracking(t));
                }, [C, m, o, u, c, i, a, t]));
        })({
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
function t8(e) {
    let { isExpanded: t } = e,
        { quest: n } = r.useContext(et);
    return (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(t3, { questId: n.id, isExpanded: t }), (0, s.jsx)(t7, {})],
    });
}
function t9(e) {
    let { children: t, overrideVisibility: n } = e,
        { quest: l } = r.useContext(et),
        i = (0, x.UH)(l);
    return (0, s.jsx)(E.Z, {
        questOrQuests: l,
        questContent: d.uF.QUEST_BAR_V2,
        overrideVisibility: n,
        onImpression: i,
        sourceQuestContent: d.uF.QUEST_BAR_V2,
        children: t,
    });
}
function t5(e) {
    let { quest: t } = e,
        n = r.useMemo(() => (0, p.vv)(t), [t]),
        i = t.userStatus?.completedAt != null,
        a = (0, x.fc)(t),
        o = r.useMemo(() => ({ type: l.p.QUEST, quest: t }), [t]);
    return (
        r.useEffect(() => {
            n && (0, g.l9)();
        }, [n]),
        (0, s.jsx)(er, {
            quest: t,
            taskDetails: a,
            children: (0, s.jsx)(X, {
                creative: o,
                collapsedContent: (0, s.jsx)(e$, {}, i ? "collapsed-with-rewards" : "collapsed-without-rewards"),
                expandedContent: (0, s.jsx)(tJ, {}),
                renderCreativeContext: (e) => (0, s.jsx)(el, { quest: t, children: e }),
                StateTrackers: t6,
                ModeChangeTracker: t8,
                ImpressionTracker: t9,
            }),
        })
    );
}
function t4(e) {
    let { noFillDecision: t } = e,
        n = (0, i.bG)([c.A], () => c.A.hasLayers());
    function r(e) {
        return (0, s.jsx)("div", { ref: e, "aria-hidden": !0, className: Y.ui });
    }
    return null == t.adContentId
        ? r()
        : (0, s.jsx)(E.Z, {
              adContentId: t.adContentId,
              adCreativeType: l.p.NO_FILL,
              noFillDecision: t,
              questContent: d.uF.QUEST_BAR_V2,
              overrideVisibility: !n,
              sourceQuestContent: d.uF.QUEST_BAR_V2,
              children: (e) => r(e),
          });
}
let ne =
    221552 == n.j
        ? function () {
              let e = (0, h.wo)(),
                  t = (0, C.A)(d.p9.DESKTOP_ACCOUNT_PANEL_AREA, "useNoFillAd");
              switch (e.type) {
                  case l.p.QUEST: {
                      let { quest: t } = e;
                      return (0, s.jsx)(
                          f.y5,
                          {
                              source: K.rE.QUESTS_BAR,
                              adCreativeId: t.id,
                              adCreativeType: l.p.QUEST,
                              children: (0, s.jsx)(t5, { quest: t }),
                          },
                          t.id,
                      );
                  }
                  case l.p.BOUNTY:
                      return null;
                  case l.p.NO_FILL:
                      return null != t ? (0, s.jsx)(t4, { noFillDecision: t }, t.decisionId) : null;
              }
          }
        : null;
