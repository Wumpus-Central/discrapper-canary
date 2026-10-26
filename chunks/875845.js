(n.r(t), n.d(t, { QuestBarQuestContent: () => t9, default: () => t8 }));
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
    m = n(466242),
    p = n(561844),
    C = n(792620),
    f = n(557637),
    E = n(657792),
    h = n(201805),
    g = n(617986),
    j = n(503698),
    S = n.n(j),
    A = n(941143),
    _ = n(475743),
    v = n(494280),
    R = n(859703),
    y = n(971276),
    T = n(851936);
n(321073);
var Q = n(333007),
    N = n(765671),
    U = n(398025);
let B = "#00000000",
    F = "#CDD8FF1A",
    b = r.createContext({
        registerComponent: () => {},
        unregisterComponent: () => {},
        animatedComponents: {},
        expandedContentRef: r.createRef(),
        collapsedContentRef: r.createRef(),
        overlayRef: r.createRef(),
        recalculateAnimationPositions: () => {},
        animatedComponentProps: [],
        expansionSpring: new A.SpringValue(0),
        mountPoints: new Map(),
    });
function I(e) {
    let { children: t, id: n, inState: l, isTextTransition: i = !1, ref: a } = e,
        {
            recalculateAnimationPositions: o,
            registerComponent: u,
            unregisterComponent: c,
            expansionSpring: d,
            mountPoints: x,
        } = r.useContext(b),
        m = r.useRef(null),
        p = r.useRef(null),
        C = r.useRef(void 0);
    (r.useEffect(() => {
        o();
    }, [o]),
        r.useLayoutEffect(() => {
            let e = m.current;
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
            C.current !== t && (o(), (C.current = t));
        },
        [o],
    );
    (0, N.i4)(m, f);
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
                                (0, s.jsx)(A.animated.div, {
                                    style: {
                                        position: "absolute",
                                        opacity: (0, U.a)(d.to({ range: [0, 1], output: [1, 0] })),
                                    },
                                    children: t(p),
                                }),
                                E,
                            ),
                        "expanded" === l &&
                            (0, Q.createPortal)(
                                (0, s.jsx)(A.animated.div, {
                                    style: {
                                        position: "absolute",
                                        opacity: (0, U.a)(d.to({ range: [0, 1], output: [0, 1] })),
                                    },
                                    children: t(p),
                                }),
                                E,
                            ),
                    ],
                }))
              : "collapsed" === l && (h = (0, Q.createPortal)(t(p), E)),
        (0, s.jsxs)("div", {
            style: { opacity: +((null == h && "collapsed" === l) || null == E) },
            ref: a,
            children: [t(m), h],
        })
    );
}
let V = (e) => {
    let { children: t, expandedContentRef: n, collapsedContentRef: l, overlayRef: i, expansionSpring: a } = e,
        [o, u] = r.useState({}),
        [c, d] = r.useState([]),
        [x, m] = r.useState(() => new Map()),
        p = r.useCallback((e, t, n) => {
            (u((s) => {
                let r = s[t] ?? { expanded: null, collapsed: null };
                return { ...s, [t]: { ...r, [n]: e } };
            }),
                m((e) => {
                    let n = new Map(e);
                    return (n.set(t, r.createRef()), n);
                }));
        }, []),
        C = r.useCallback((e, t) => {
            let n = !1;
            (u((s) => {
                let r = s[e] ?? { expanded: null, collapsed: null };
                return ((r[t] = null), (n = null == r.expanded && null == r.collapsed), { ...s, [e]: r });
            }),
                n &&
                    m((t) => {
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
                    m = i.left - a.left + 12,
                    p = u.left - c.left,
                    C = -i.right + a.right + 12,
                    f = -u.right + c.right;
                e.push({
                    id: t,
                    collapsedLeft: p,
                    expandedLeft: m,
                    collapsedRight: f,
                    expandedRight: C,
                    collapsedTop: x,
                    expandedTop: d,
                    width: i.width,
                });
            }
            d(e);
        }, [o, n, l, d]),
        E = r.useMemo(
            () => ({
                registerComponent: p,
                unregisterComponent: C,
                animatedComponents: o,
                expandedContentRef: n,
                collapsedContentRef: l,
                overlayRef: i,
                recalculateAnimationPositions: f,
                animatedComponentProps: c,
                expansionSpring: a,
                mountPoints: x,
            }),
            [p, C, o, n, l, i, f, c, a, x],
        );
    return (0, s.jsx)(b.Provider, { value: E, children: t });
};
var O = n(717421),
    q = n(775602);
let L = r.createContext({ springConfig: {}, isExpanded: !1 });
function M(e) {
    let t = r.useMemo(
        () => ({ springConfig: e.springConfig, isExpanded: e.isExpanded }),
        [e.springConfig, e.isExpanded],
    );
    return (0, s.jsx)(L.Provider, { value: t, children: e.children });
}
function k(e) {
    let { children: t } = e,
        { springConfig: n, isExpanded: l } = r.useContext(L),
        a = (0, i.bG)([q.Ay], () => q.Ay.useReducedMotion),
        { ref: o, height: u = null } = (0, N.Ay)(),
        c = (0, _.Ay)(u) ?? null,
        [{ height: d }, x] = (0, O.z)(() => ({ from: { height: 0 }, config: n }));
    return (
        r.useLayoutEffect(() => {
            null !== u && x({ height: u, immediate: !l || a || null === c });
        }, [u, x, l, a, c]),
        (0, s.jsx)(A.animated.div, {
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
            renderCreativeContext: m,
        } = e,
        {
            collapsedHeight: C,
            canExpand: E,
            canCollapse: g,
            isEnrolled: j,
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
                case l.p.PLAYABLE:
                    return { collapsedHeight: 70, canExpand: !0, canCollapse: !0, isEnrolled: !1, springConfig: K.Ko };
            }
        })(t),
        N = (0, h.gJ)(t),
        U = (0, v.Yh)(t),
        B = (0, T.L)({ quest: (0, v.Ys)(t), location: K.rE.QUESTS_BAR }),
        F = (0, y.s)(),
        b = (0, i.bG)([R.A], () => null != R.A.questEnrollmentBlockedUntil),
        I = (0, i.bG)([c.A], () => c.A.hasLayers()),
        L = r.useRef(null),
        { hasError: k, isLoading: w } = (0, f.zT)(),
        P = r.useContext(G.Z),
        X = P || (F && N && !w && !b),
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
                m = r.useRef(n),
                p = r.useCallback(
                    (e) => {
                        (!t && e) || (a !== e && (c(!1), o(e)));
                    },
                    [t, a],
                ),
                C = r.useCallback(() => {
                    p(!0);
                }, [p]),
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
                    (n !== m.current && x(!1), (m.current = n));
                }, [n]),
                {
                    isExpanded: a,
                    setIsExpanded: p,
                    expandQuestBar: C,
                    isExpansionAnimationComplete: u,
                    isVisibilityAnimationAtRest: d,
                    expansionSpring: f,
                    visibilitySpring: h,
                    springConfig: s,
                }
            );
        })({ canExpand: E, isQuestBarVisible: X, springConfig: Q }),
        el = (0, _.Ay)(j),
        {
            handleCtxMenuOpened: ei,
            handleCtxMenuClosed: ea,
            handleCtxMenuSelection: eo,
            handleGameSheetOpened: eu,
            handleGameSheetClosed: ec,
            handleFocusWithoutDelay: ed,
            handleBlur: ex,
            handleMouseEnter: em,
            handleMouseLeave: ep,
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
                m = r.useRef(!1),
                [C, f] = r.useState(!1),
                [E, h] = r.useState(!1),
                g = r.useCallback(() => {
                    f(!0);
                }, []),
                j = r.useCallback(() => {
                    (f(!1), !m.current && o && i(!1));
                }, [o, i]),
                S = r.useCallback(() => {
                    (f(!1), o && i(!1), (m.current = !1));
                }, [o, i]),
                A = r.useCallback(() => {
                    h(!0);
                }, []),
                _ = r.useCallback(() => {
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
                                C ||
                                E ||
                                m.current ||
                                i(!1));
                    },
                    [C, E, i],
                ),
                T = r.useCallback(() => {
                    (n === l.p.QUEST &&
                        (0, p.av)({
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
                        (m.current = !0),
                        v({ withDelay: !0 }));
                }, [t, n, v, c]),
                Q = r.useCallback(() => {
                    (n === l.p.QUEST &&
                        (0, p.av)({
                            questId: t,
                            event: z.HAw.QUEST_HOVER_OFF,
                            properties: {
                                content_id: d.uF.QUEST_BAR,
                                content_name: (0, $.jO)(d.uF.QUEST_BAR),
                                impression_id: c.current?.getId(),
                            },
                            sourceQuestContent: d.uF.QUEST_BAR_V2,
                        }),
                        (m.current = !1),
                        y());
                }, [t, n, y, c]);
            (r.useEffect(() => {
                E && m.current && Q();
            }, [E, Q]),
                r.useLayoutEffect(() => {
                    u && m.current && a();
                }, [a, u]),
                r.useLayoutEffect(() => {
                    o && u && !m.current && i(!1);
                }, [o, u, i]));
            let N = (0, H.useHasAnyModalOpen)();
            return (
                r.useEffect(() => {
                    N && m.current && Q();
                }, [Q, N]),
                {
                    ctxMenuOpen: C,
                    gameSheetOpen: E,
                    handleCtxMenuOpened: g,
                    handleCtxMenuClosed: j,
                    handleCtxMenuSelection: S,
                    handleGameSheetOpened: A,
                    handleGameSheetClosed: _,
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
            didEnroll: j && !0 !== el,
            impressionRef: L,
        }),
        eC = r.useRef(null),
        ef = r.useRef(null),
        eE = r.useRef(null),
        eh = {
            hasAssetsError: k,
            isEligibleForQuests: F,
            isQuestBarVisible: X,
            isVisibilityAnimationAtRest: en,
            isLoadingAssets: w,
            isQuestEnrollmentBlocked: b,
            impressionRef: L,
            ...U,
        },
        eg = !(!F || (!X && en && !w) || (k && !P));
    return (
        !eg && (k && !P ? B.log("Not rendered due to asset error") : F || B.log("Not rendered due to ineligibility")),
        (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(x, { ...eh }),
                eg &&
                    (0, s.jsx)(o, {
                        overrideVisibility: !I && X,
                        children: (e, t) => (
                            (L.current = t.current),
                            (0, s.jsxs)("div", {
                                className: Y.dK,
                                children: [
                                    X && (0, s.jsx)(u, { isExpanded: Z }),
                                    (0, s.jsx)(A.animated.div, {
                                        "data-testid": "quest-bar-container",
                                        "aria-hidden": !X,
                                        onMouseLeave: ep,
                                        onMouseEnter: em,
                                        onFocus: ed,
                                        onBlur: ex,
                                        className: S()(Y.iE, { [Y.Xc]: !X, [Y.uv]: X && en }),
                                        style: { height: er.to({ range: [0, 1], output: [0, C] }) },
                                        children: (0, s.jsx)(A.animated.div, {
                                            className: S()(Y.FG, { [Y.E$]: Z }),
                                            children: (0, s.jsx)(M, {
                                                springConfig: Q,
                                                isExpanded: Z,
                                                children: (0, s.jsx)(V, {
                                                    expandedContentRef: eC,
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
                                                        collapsedHeight: C,
                                                        children: (m ?? ((e) => e))(
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
            applicationId: (0, C.xc)(n),
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
    return (0, C.I6)(n) ? (0, s.jsx)(es, { quest: n, children: t }) : t;
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
        { expansionSpring: o, overlayRef: u } = r.useContext(b),
        { completionSpring: d, startCompletionAnimation: x } = (function () {
            let [{ spring: e }, t] = (0, O.z)(() => ({ spring: 0 }), "animate-always");
            return {
                completionSpring: e,
                startCompletionAnimation: r.useCallback(() => {
                    (t({ spring: 1 }), t({ spring: 0, delay: 2e3 }));
                }, [t]),
            };
        })(),
        m = l.userStatus?.completedAt != null,
        p = r.useRef(!1),
        C = (0, i.bG)([q.Ay], () => q.Ay.useReducedMotion),
        f = r.useRef(null),
        E = (0, i.bG)([c.A], () => c.A.hasLayers()),
        h = (0, _.Ay)(E),
        [g, j] = r.useState(null),
        [v, R] = r.useState(null),
        y = r.useRef(new ei.OH({ gravity: 0, wind: 0 })),
        T = (0, ei.f9)(g, v),
        N = r.useMemo(() => ["#51BC9D"], []),
        B = r.useCallback(() => {
            if (C) return;
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
        }, [t, f, T, C]),
        F = (0, _.Ay)(a);
    return (r.useEffect(() => {
        m && a && !F && (x(), B());
    }, [a, m, x, B, F]),
    r.useEffect(() => {
        m &&
            !E &&
            h &&
            setTimeout(() => {
                (x(), B());
            }, 200);
    }, [m, h, E, x, B]),
    r.useEffect(() => {
        T.isReady && (!p.current && m && (x(), B()), (p.current = m));
    }, [m, p, B, x, T]),
    r.useEffect(() => {
        n && m && (x(), B());
    }, [n, m, x, B]),
    C)
        ? null
        : (0, s.jsxs)("div", {
              className: eu.iE,
              "aria-hidden": "true",
              ref: f,
              children: [
                  (0, s.jsx)(A.animated.div, { className: eu.Tp, style: { opacity: (0, U.a)(d) } }),
                  (0, s.jsx)(A.animated.div, { className: S()(eu.sJ, eu.ix), style: { opacity: (0, U.a)(d) } }),
                  (0, s.jsxs)(A.animated.div, {
                      className: eu.KG,
                      style: { transform: o.to({ range: [0, 1], output: [-35, 0] }).to((e) => `translateY(${e}px)`) },
                      children: [
                          (0, s.jsx)(ei.Fk, { ref: j, className: eu.t_, environment: y.current }),
                          (0, s.jsx)(ei.K_, {
                              ref: R,
                              sprites: ["/assets/b909790cf1d80597.svg"],
                              colors: N,
                              spriteWidth: eo.wn,
                              spriteHeight: eo.wn,
                          }),
                          null != u.current &&
                              (0, Q.createPortal)(
                                  (0, s.jsx)(A.animated.div, {
                                      className: S()(eu.sJ, eu.d7),
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
        { expansionSpring: o, collapsedContentRef: u } = r.useContext(b),
        { isExpanded: c } = P();
    return (0, s.jsx)(A.animated.div, {
        ref: u,
        "aria-hidden": c,
        className: S()(ed.hR, { [ed.Ag]: c, [ed.MN]: "inset" === n }),
        style: { opacity: (0, U.a)(o.to({ range: [0, 1], output: [1, 0] })), backgroundImage: l },
        onMouseEnter: i,
        onMouseLeave: a,
        children: (0, s.jsx)("div", { className: ed.o8, children: t }),
    });
};
var em = n(821609),
    ep = n(3738),
    eC = n(971649),
    ef = n(651892),
    eE = n(620954),
    eh = n(814793),
    eg = n(753386),
    ej = n(608935),
    eS = n(887899),
    eA = n(79545),
    e_ = n(862611),
    ev = n(630037),
    eR = n(105292),
    ey = n(191559);
function eT(e) {
    let { quest: t, sourceQuestContent: n, taskDetails: r } = e,
        l = (0, x.Hv)(),
        i = (0, s.jsx)(em.$, {
            variant: "primary",
            fullWidth: !0,
            onClick: function () {
                if (l) {
                    ((0, p.Y5)({
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
    return l ? (0, s.jsx)(ej.A, { children: i }) : i;
}
function eQ(e) {
    let { quest: t, sourceQuestContent: n } = e,
        r = (0, eC.wW)(),
        l = (0, ef.wr)(t);
    return (0, s.jsx)(em.$, {
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
        r = (0, eC.wW)();
    return (0, s.jsx)(em.$, {
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
        n = (0, ep.NA)({ quest: t }),
        { launchInGameActivity: r } = (0, x.zW)(t);
    return (0, eh.vA)(t)
        ? (0, s.jsx)(em.$, { fullWidth: !0, variant: "primary", icon: (0, g.Oz)(t), onClick: r, size: "sm", text: n })
        : null;
}
function eB(e) {
    let {
            quest: t,
            sourceQuestContent: n,
            taskDetails: r,
            popoutTargetElementRef: l,
            onGameSheetOpened: i,
            onGameSheetClosed: a,
        } = e,
        { applications: o } = r;
    return (0, s.jsx)(e_.A, {
        quest: t,
        sourceQuestContent: n,
        applications: o ?? [],
        targetElementRef: l,
        onGameSheetOpened: i,
        onGameSheetClosed: a,
        children: (e) =>
            (0, s.jsx)(em.$, {
                variant: "secondary",
                fullWidth: !0,
                size: "sm",
                text: eR.intl.string(eR.t["93PTEs"]),
                ...e,
            }),
    });
}
function eF(e) {
    let { quest: t, ctaLabel: n, onClick: r, questContent: l = d.uF.QUEST_BAR_V2, sourceQuestContent: i } = e,
        a = (0, ev.D)({ quest: t, questContent: l, sourceQuestContent: i, onBeforeClaim: r });
    return (0, s.jsx)(em.$, {
        fullWidth: !0,
        onClick: a,
        text: n ?? eR.intl.string(eR.t.cfY4PE),
        "data-testid": "quest-bar-claim-reward-button",
        variant: "primary",
        size: "sm",
    });
}
function eb(e) {
    let {
            sourceQuestContent: t,
            awaitingConsoleConnections: n,
            hasMadeProgress: l,
            isProgressing: i,
            popoutTargetElementRef: a,
        } = e,
        { quest: o, taskDetails: u } = r.useContext(et),
        { onGameSheetOpen: c, onGameSheetClose: m } = P(),
        [p] = (0, x.Qo)(o, u),
        f = o.userStatus?.completedAt != null,
        E = (0, C.vv)(o),
        h = (0, C.I6)(o),
        g = p !== d.X0.SELECT && !l && !i,
        j = null;
    return (
        f
            ? (j = (0, s.jsx)(eF, { quest: o, sourceQuestContent: t }))
            : h
              ? (j = (0, s.jsx)(eS.A, {
                    quest: o,
                    surface: eA.V3.QUEST_BAR_FOOTER,
                    size: "sm",
                    analyticsCtxQuestContent: d.uF.QUEST_BAR_V2,
                    analyticsCtxSourceQuestContent: t,
                }))
              : E
                ? (j = (0, s.jsx)(eT, { quest: o, sourceQuestContent: t, taskDetails: u }))
                : (0, eh.vA)(o)
                  ? (j = (0, s.jsx)(eU, { quest: o }))
                  : p === d.X0.CONSOLE && n
                    ? (j = (0, s.jsx)(eN, { quest: o, sourceQuestContent: t }))
                    : g && (0, eh.ui)(o)
                      ? (j = (0, s.jsx)(eB, {
                            quest: o,
                            sourceQuestContent: t,
                            taskDetails: u,
                            popoutTargetElementRef: a,
                            onGameSheetOpened: c,
                            onGameSheetClosed: m,
                        }))
                      : g && (j = (0, s.jsx)(eQ, { quest: o, sourceQuestContent: t })),
        null == j ? null : (0, s.jsx)("div", { className: ey.lO, children: j })
    );
}
function eI(e) {
    return (0, s.jsx)(eb, { ...e, popoutTargetElementRef: e.parentContainerRef });
}
var eV = n(834730),
    eO = n(62405),
    eq = n(453384),
    eL = n(649480);
let eM = function (e) {
    let { isExpanded: t, contentLocation: n, progressBarRef: l, percentComplete: i, popoutTargetElementRef: a } = e,
        { quest: o, taskDetails: u } = r.useContext(et),
        { onGameSheetOpen: c, onGameSheetClose: m } = P(),
        { hasAlreadyLinked: p, onClickGameTitle: C } = r.useContext(en),
        [f] = (0, x.Qo)(o, u),
        E = (0, ep.VX)(o, p),
        h = (0, ep.tH)({
            quest: o,
            isExpanded: t,
            activeScreen: f,
            sourceQuestContent: d.uF.QUEST_BAR_V2,
            popoutTargetElementRef: a,
            onGameSheetOpened: c,
            onGameSheetClosed: m,
            hasAlreadyLinked: p,
            onClickGameTitle: C,
        });
    return (0, s.jsxs)("div", {
        className: eL.Z0,
        children: [
            (0, s.jsx)(I, {
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
                    (0, s.jsx)(I, {
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
                    (0, s.jsx)(I, {
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
var ek = n(939249),
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
                className: S()(eD.Uu, eD.TK),
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
                    (0, s.jsx)(ek.D, {
                        ...e,
                        className: eD.rb,
                        "aria-label": eR.intl.string(eR.t.DEoVWZ),
                        children: (0, s.jsx)(ew.MoreHorizontalIcon, {
                            size: "md",
                            color: "currentColor",
                            className: S()(eD.Bx, eD.U9),
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
                ? (0, s.jsx)(eM, {
                      contentLocation: "collapsed",
                      progressBarRef: t,
                      isExpanded: !1,
                      percentComplete: u,
                  })
                : null,
            i &&
                (0, s.jsx)("div", {
                    ref: c,
                    children: (0, s.jsx)(eI, {
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
                backgroundImage: t ? `linear-gradient(90deg, ${B}, ${F})` : void 0,
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
        { expansionSpring: u } = r.useContext(b),
        c = l ? -4 : 6;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(A.animated.div, {
                className: eX.tE,
                style: {
                    transform: (0, A.to)(
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
            (0, s.jsxs)(A.animated.div, {
                className: S()(eX.pm, { [eX.nd]: l }),
                style: {
                    transform: (0, A.to)(
                        [u.to({ range: [0, 1], output: [0, -48] }), u.to({ range: [0, 1], output: [0, c] })],
                        (e, t) => `translate(${e}px, ${t}px)`,
                    ),
                },
                children: [
                    (0, s.jsx)("div", { className: S()({ [eX.Iu]: !l }), children: n }),
                    (0, s.jsx)(A.animated.div, {
                        className: S()(eX.ol, { [eX.yZ]: l }),
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
let e0 = (0, A.animated)(eY.Ay),
    e1 = function () {
        let e = (0, eC.wW)(),
            { expansionSpring: t } = r.useContext(b),
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
            m = o && u,
            p = (0, s.jsx)(ek.D, {
                onClick: x,
                className: S()(eJ.vk, { [eJ.wm]: m }),
                children: (0, s.jsx)(e0, {
                    quest: n,
                    withGameTile: !1,
                    logotypeClassName: eJ.Iu,
                    logotypeStyle: {
                        height: 24,
                        maxWidth: 92,
                        transform: (0, A.to)([t.to({ range: [0, 1], output: [1, 1] })], (e) => `scale(${e})`),
                    },
                }),
            });
        return (0, s.jsxs)(A.animated.div, {
            className: S()(eJ.iE, eJ.Ht, { [eJ.tT]: m }),
            style: { transform: (0, A.to)([t.to({ range: [0, 1], output: [6, 0] })], (e) => `translateY(${e}px)`) },
            children: [
                (0, s.jsx)(A.animated.div, {
                    className: eJ.Tu,
                    style: { opacity: (0, U.a)(t.to({ range: [0, 1], output: [0, 1] })) },
                }),
                (0, s.jsx)(eZ, { isFullyExpanded: m, partnerBranding: p }),
                (0, s.jsxs)(A.animated.div, {
                    className: eJ.P0,
                    style: { opacity: (0, U.a)(t.to({ range: [0, 1], output: [0, 1] })) },
                    children: [
                        (0, s.jsxs)(ek.D, {
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
                                (0, s.jsx)(ek.D, {
                                    ...e,
                                    className: S()(eJ.uJ, eJ.rb),
                                    "aria-label": eR.intl.string(eR.t.DEoVWZ),
                                    children: (0, s.jsx)(ew.MoreHorizontalIcon, {
                                        size: "md",
                                        color: "currentColor",
                                        className: S()(eJ.Bx, eJ.ON),
                                    }),
                                }),
                        }),
                    ],
                }),
            ],
        });
    };
var e2 = n(506500);
let e7 = function (e) {
    let { children: t, header: n, layoutVariant: l } = e,
        { collapsedHeight: i, isExpanded: a } = P(),
        { expansionSpring: o } = r.useContext(b);
    return (0, s.jsxs)(A.animated.div, {
        "aria-hidden": !a,
        className: S()(e2.R, { [e2.w]: "inset" === l }),
        style: {
            transform: (0, A.to)(
                [o.to({ range: [0, 1], output: [0, -100] }), o.to({ range: [0, 1], output: [0, i] })],
                (e, t) => `translateY(calc(${e}% + ${t}px))`,
            ),
        },
        children: [n, (0, s.jsx)(A.animated.div, { style: { opacity: 1 }, children: t })],
    });
};
n(801541);
var e3 = n(889137),
    e6 = n(417270),
    e9 = n(782134),
    e5 = n(297264),
    e8 = n(825484),
    e4 = n(408278),
    te = n(921853),
    tt = n(607470),
    tn = n(427495),
    ts = n(405670),
    tr = n(112142),
    tl = n(646917),
    ti = n(291749),
    ta = n(576761),
    to = n(117634),
    tu = n(976019),
    tc = n(442734),
    td = n(139384),
    tx = n(114046),
    tm = n(695366),
    tp = n(507395),
    tC = n(144779),
    tf = n(30370),
    tE = n(178540),
    th = n(780964),
    tg = n(766075),
    tj = n(52093),
    tS = n(575630);
function tA(e) {
    let { text: t, quest: n, sourceQuestContent: r } = e,
        i = (0, eC.wW)();
    return (0, s.jsx)(ek.D, {
        className: tS.Z0,
        onClick: () => {
            ((0, tp.r)({
                type: tC.F.CLICK_INTERNAL,
                adCreativeType: l.p.QUEST,
                adCreativeId: n.id,
                questContentCTA: $.Cy.VIEW_CONSOLE_CONNECTIONS_LINK,
                surfaceId: d.uF.QUEST_BAR_V2,
                sourceQuestContent: r,
                impressionId: i(),
            }),
                (0, tg.openUserSettings)(th.X.CONNECTIONS_CATEGORY));
        },
        children: (0, s.jsx)(eV.E, { "aria-label": t, color: "none", variant: "text-xxs/normal", children: t }),
    });
}
function t_(e) {
    let { xboxAndPlaystationAccounts: t, quest: n, sourceQuestContent: r } = e;
    return t.length > 0
        ? (0, s.jsx)(tA, { text: eR.intl.string(eR.t["qiS+xj"]), quest: n, sourceQuestContent: r })
        : null;
}
function tv(e) {
    return (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(tj.L5, { children: eR.intl.string(eR.t.EJFSvD) }), (0, s.jsx)(t_, { ...e })],
    });
}
var tR = n(607886);
function ty(e) {
    return (0, s.jsx)(eV.E, {
        className: tR.eW,
        color: "text-muted",
        variant: "text-xxs/normal",
        children: e.children,
    });
}
function tT(e) {
    let { quest: t, useReducedMotion: n } = e,
        i = (0, h.H1)(t.id, d.uF.QUEST_BAR_V2, d.uF.QUEST_BAR_V2),
        a = (0, h.Xf)({ useReducedMotion: n }),
        o = (0, eC.wW)(),
        u = (0, tE.O)((e) => e.getErrorHints(t.id)),
        { startingConsoleQuest: c, startConsoleQuest: m } = (0, x.Wj)({
            questId: t.id,
            beforeRequest: () => {
                ((0, tp.r)({
                    type: tC.F.CLICK_INTERNAL,
                    adCreativeType: l.p.QUEST,
                    adCreativeId: t.id,
                    questContentCTA: $.Cy.DEFIBRILLATOR,
                    surfaceId: d.uF.QUEST_BAR_V2,
                    sourceQuestContent: d.uF.QUEST_BAR_V2,
                    impressionId: o(),
                }),
                    a.startAnimation());
            },
            afterRequest: a.stopAnimation,
        }),
        { header: p, renderBody: C } = r.useMemo(() => {
            let e = u.length > 0,
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
                              children: u.map((e, n) => {
                                  if (e.type === tx._.EXPIRED_CREDENTIAL) {
                                      let r = tf.A.getAccount(e.connected_account_id, e.connected_account_type),
                                          l = (0, eE.IG)(e),
                                          i = (0, eE.$J)(e);
                                      return (0, s.jsx)(
                                          ty,
                                          {
                                              children: eR.intl.format(l, {
                                                  account_name: r?.name,
                                                  onClick: () => {
                                                      (0, eE.v0)(
                                                          { quest: t, platformType: i },
                                                          {
                                                              content: d.uF.QUEST_BAR,
                                                              ctaContent: $.Cy.DEFIBRILLATOR_RECONNECT_CONSOLE,
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
                                  return (0, s.jsx)(ty, { children: e.message }, n);
                              }),
                          });
                      }
                    : () =>
                          (0, s.jsx)(eV.E, {
                              className: tR.eW,
                              color: "text-muted",
                              variant: "text-xxs/normal",
                              children: (0, eh.ui)(t)
                                  ? eR.intl.string(eR.t.bUyEZZ)
                                  : eR.intl.format(eR.t.GXqvC1, { gameTitle: n }),
                          }),
            };
        }, [u, t, o]);
    return (0, s.jsxs)("div", {
        className: tR.XK,
        children: [
            (0, s.jsxs)("div", {
                className: tR.oK,
                children: [
                    (0, s.jsx)(tm.E, {
                        size: "custom",
                        color: "currentColor",
                        className: 0 === u.length ? tR.pH : tR.JA,
                        width: 16,
                        height: 16,
                    }),
                    (0, s.jsx)(eV.E, { variant: "text-xs/medium", children: p }),
                    (0, s.jsx)(ek.D, {
                        className: S()(tR.w, { [tR.r9]: c }),
                        onClick: () => m(),
                        children: a.render(),
                    }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: S()({ [tR.Iu]: c }),
                children: [C(), 0 === u.length ? null : (0, s.jsx)(ty, { children: i })],
            }),
        ],
    });
}
let tQ = function (e) {
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
            isProgressingQuestForLaunchedGame: m,
            isQuestComplete: p,
        } = r.useMemo(() => {
            let e = o.length > 0,
                r = e && (0, C.YL)(t),
                l = t.config.messages.gameTitle,
                i = t.userStatus?.completedAt != null;
            return {
                steps: [
                    {
                        renderContent: () => (0, s.jsx)(tv, { ...a, quest: t, sourceQuestContent: d.uF.QUEST_BAR_V2 }),
                        isComplete: e || r || i,
                    },
                    {
                        renderContent: () =>
                            (0, s.jsx)(tj.L5, {
                                children: (0, eh.ui)(t)
                                    ? eR.intl.string(eR.t["5tXqFe"])
                                    : eR.intl.formatToPlainString(eR.t["+8JB6Y"], { gameTitle: l }),
                            }),
                        isComplete: r || i,
                    },
                    {
                        renderContent: () =>
                            (0, s.jsx)(tj.L5, {
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
    return (0, s.jsx)(tj.Ay, {
        heading: eR.intl.string(eR.t.UPWlJu),
        steps: u,
        children: c && !m && !p && (0, s.jsx)(tT, { useReducedMotion: l, quest: t }),
    });
};
(n(134528), n(947204));
var tN = n(934225);
function tU(e) {
    let { header: t, children: n } = e;
    return (0, s.jsxs)("div", {
        className: tN.Nr,
        children: [
            (0, s.jsxs)("div", {
                className: tN.wx,
                children: [
                    (0, s.jsx)(tm.E, {
                        size: "custom",
                        color: "currentColor",
                        className: tN.Kk,
                        width: 16,
                        height: 16,
                    }),
                    (0, s.jsx)(e5.D, { color: "text-default", variant: "heading-sm/medium", children: t }),
                ],
            }),
            (0, s.jsx)(eV.E, { color: "text-muted", variant: "text-xs/normal", className: tN.r2, children: n }),
        ],
    });
}
let tB = function (e) {
    let { quest: t } = e,
        n = (0, x.aC)(t);
    if (0 === n.length) return null;
    let r = n.at(0);
    return r === eR.intl.string(eR.t.BV6xDm)
        ? (0, s.jsx)(tU, { header: eR.intl.string(eR.t.onh6ct), children: eR.intl.string(eR.t.arVHRA) })
        : r === eR.intl.string(eR.t.MFGxFM)
          ? (0, s.jsx)(tU, { header: eR.intl.string(eR.t.JPihZA), children: eR.intl.string(eR.t.MFGxFM) })
          : null;
};
var tF = n(31300),
    tb = n(687966),
    tI = n(35558);
let tV = function (e) {
    let { onDesktop: t, onConsole: n } = e;
    return (0, s.jsxs)(e8.e, {
        direction: "vertical",
        fullWidth: !0,
        className: tI.G,
        size: "sm",
        children: [
            (0, s.jsx)(em.$, {
                onClick: t,
                text: eR.intl.string(eR.t["QXc01+"]),
                variant: "secondary",
                icon: tF.k,
                iconPosition: "end",
            }),
            (0, s.jsx)(em.$, {
                onClick: n,
                text: eR.intl.string(eR.t["8lAfuB"]),
                variant: "secondary",
                icon: tb.GameControllerIcon,
                iconPosition: "end",
            }),
        ],
    });
};
var tO = n(158247);
function tq(e) {
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
function tL(e) {
    let { onClick: t } = e,
        { quest: n } = r.useContext(et),
        l = (0, i.bG)([q.Ay], () => q.Ay.useReducedMotion),
        [a, o] = r.useState(!1),
        u = (0, ti.tW)(n, ti.fY.QUEST_BAR_HERO_VIDEO, void 0, !1),
        c = (0, ti.tW)(n, ti.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1),
        d = (0, ts.Kr)((e) => e.getVideoProgressState)(n.id),
        x = n.userStatus?.completedAt != null && d === ts.K2.COMPLETED,
        m = !x && (!l || a);
    return (0, s.jsxs)(ek.D, {
        className: tO.QO,
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
                    children: (e) => (0, s.jsx)("img", { ref: e, alt: "", src: c.url, className: tO.Ue }),
                }),
            null != u
                ? (0, s.jsx)(f._M, {
                      id: "QuestBarContentExpanded_video",
                      children: (e) =>
                          (0, s.jsx)(tq, {
                              ref: e,
                              isHovered: a,
                              autoPlay: !1,
                              asset: u,
                              poster: c?.url,
                              className: S()(tO.NM, { [tO.Gc]: m }),
                          }),
                  })
                : null,
            (0, s.jsx)("div", {
                className: tO.LT,
                children: x
                    ? (0, s.jsx)(e6.RetryIcon, { color: eK.A.colors.WHITE, className: tO.t })
                    : (0, s.jsx)(e9.PlayIcon, { color: eK.A.colors.WHITE, className: tO.t }),
            }),
        ],
    });
}
function tM(e) {
    let { quest: t } = e;
    return (0, s.jsx)(eO.A, {
        className: S()(tO.Qq, tO.wq),
        learnMoreStyle: "text",
        quest: t,
        location: K.rE.QUESTS_BAR,
        questContent: d.uF.QUEST_BAR_V2,
        sourceQuestContent: d.uF.QUEST_BAR_V2,
    });
}
function tk(e) {
    let { isCtaInteractable: t, containerRef: n, onAcceptQuest: l } = e,
        { quest: a, taskDetails: o } = r.useContext(et),
        { onGameSheetOpen: u, onGameSheetClose: c } = P(),
        { expansionSpring: m } = r.useContext(b),
        p = r.useRef(null),
        C = (0, i.bG)([R.A], () => R.A.isEnrolling(a.id), [a]),
        E = r.useMemo(() => (0, ti.tW)(a, ti.fY.QUEST_BAR_HERO), [a]),
        h = (0, ep.NA)({ quest: a }),
        j = r.useMemo(() => (0, ti.tW)(a, ti.fY.HERO_IMAGE), [a]),
        _ = r.useMemo(() => (null == j ? {} : { backgroundImage: `url(${j.url})` }), [j]),
        v = tr.t.useConfig({ location: K.rE.QUESTS_BAR }),
        y = (0, ep.mU)({
            quest: a,
            location: K.rE.QUESTS_BAR,
            taskDetails: o,
            sourceQuestContent: d.uF.QUEST_BAR_V2,
            popoutTargetElementRef: p,
            onGameSheetOpened: u,
            onGameSheetClosed: c,
            gameProfileSource: Z.GameProfileSources.QuestBar,
        }),
        T = (0, eA.Pd)(a),
        Q = (0, tl.z)(),
        N = (0, x.SD)(a, Q),
        B = Q === ta.MA.NITRO && N;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)("div", {
                ref: p,
                children: (0, s.jsxs)("div", {
                    className: tO.do,
                    ref: n,
                    children: [
                        (0, s.jsxs)("div", {
                            className: tO.zH,
                            children: [
                                (0, s.jsx)(tM, { quest: a }),
                                (0, s.jsx)(e5.D, {
                                    className: tO.DD,
                                    color: "text-strong",
                                    variant: "heading-md/medium",
                                    children: eR.intl.format(eR.t.EQa7os, { questName: a.config.messages.questName }),
                                }),
                                (0, s.jsxs)("div", {
                                    className: tO.zf,
                                    children: [
                                        (0, s.jsx)(eV.E, { className: tO.h_, variant: "text-xs/normal", children: y }),
                                        N && (0, s.jsx)(tc.e, { questId: a.id, orbMultiplierEligibility: Q }),
                                    ],
                                }),
                            ],
                        }),
                        (0, s.jsx)("div", {
                            className: S()(tO.lO, { [tO._o]: !t }),
                            "data-testid": "quest-bar-enroll-cta",
                            children: (0, s.jsx)(e8.e, {
                                direction: "horizontal",
                                fullWidth: !0,
                                wrap: !1,
                                children:
                                    v.enabled && T === eA.UA.UNENROLLED && v.enabledQuestStates.has(eA.UA.UNENROLLED)
                                        ? (0, s.jsx)(eS.A, {
                                              quest: a,
                                              surface: eA.V3.QUEST_BAR_FOOTER,
                                              size: "sm",
                                              analyticsCtxQuestContent: d.uF.QUEST_BAR_V2,
                                              analyticsCtxSourceQuestContent: d.uF.QUEST_BAR_V2,
                                          })
                                        : (0, s.jsx)(em.$, {
                                              onClick: l,
                                              variant: "primary",
                                              loading: C,
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
            (0, s.jsx)(to.A, { visible: B, glow: !0, className: tO.Ph }),
            null != j &&
                (0, s.jsx)(A.animated.div, {
                    className: tO.AK,
                    style: { opacity: (0, U.a)(m.to([0, 1], [1, 0])) },
                    children: (0, s.jsx)("div", { className: S()(tO.LC, tO.Ge), style: _ }),
                }),
            (0, s.jsxs)(A.animated.div, {
                className: tO.IC,
                style: {
                    backdropFilter: (0, U.Q)(m.to([0, 1], [5, 0]).to((e) => `blur(${e}px)`)),
                    filter: (0, U.Q)(m.to([0, 1], [0.8, 1]).to((e) => `brightness(${e})`)),
                },
                children: [
                    E.isAnimated
                        ? (0, s.jsx)(f._M, {
                              id: "QuestBarContentExpanded_heroAnimated",
                              children: (e) => (0, s.jsx)(tq, { ref: e, autoPlay: !0, asset: E, className: tO.LO }),
                          })
                        : (0, s.jsx)(f._M, {
                              id: "QuestBarContentExpanded_heroStatic",
                              children: (e) => (0, s.jsx)("img", { ref: e, alt: "", className: tO.LO, src: E.url }),
                          }),
                    (0, s.jsx)("div", { className: tO.tV }),
                ],
            }),
        ],
    });
}
function tw(e) {
    let { quest: t } = e,
        { hasAlreadyLinked: n, onClickGameTitle: l } = r.useContext(en);
    return !0 !== n ? null : (0, s.jsx)(tu.A, { quest: t, hasAlreadyLinked: n, onClickGameTitle: l });
}
function tP(e) {
    let { activeScreen: t, selectPlatform: n } = e,
        { quest: l, taskDetails: i } = r.useContext(et);
    return (0, e3.YW)(t)
        .with(d.X0.SELECT, () => (0, s.jsx)(tV, { onConsole: () => n(K.fO.CONSOLE), onDesktop: () => n(K.fO.DESKTOP) }))
        .with(d.X0.DESKTOP, () => ((0, C.I6)(l) ? (0, s.jsx)(tw, { quest: l }) : (0, s.jsx)(tB, { quest: l })))
        .with(d.X0.CONSOLE, () => (0, s.jsx)(tQ, { quest: l, taskDetails: i }))
        .exhaustive();
}
function tD(e) {
    let { parentContainerRef: t } = e,
        { quest: n, taskDetails: l } = r.useContext(et),
        [i, a, o] = (0, x.Qo)(n, l),
        u = l.percentComplete > 0,
        c = (0, x.Vn)(n),
        m = (0, x.RR)({ quest: n }),
        p = a.length > 1 && !u && !c;
    return (0, s.jsxs)(k, {
        children: [
            (0, s.jsx)(tP, { activeScreen: i, selectPlatform: o }),
            i !== d.X0.SELECT &&
                (0, s.jsxs)("div", {
                    className: tO.oG,
                    children: [
                        p &&
                            (0, s.jsx)(e4.K, {
                                size: "sm",
                                "aria-label": eR.intl.string(eR.t["13/7kX"]),
                                onClick: () => o(null),
                                icon: te.n,
                                variant: "secondary",
                            }),
                        (0, s.jsx)(eI, {
                            awaitingConsoleConnections: m,
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
function tG(e) {
    let { parentContainerRef: t } = e,
        { quest: n, taskDetails: l } = r.useContext(et),
        i = l.percentComplete > 0,
        a = (0, x.Vn)(n),
        o = (0, x.Hv)() && n.userStatus?.completedAt == null,
        u = r.useCallback(() => {
            if (o) {
                ((0, p.Y5)({
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
    return (0, s.jsxs)(k, {
        children: [
            (0, s.jsx)(tL, { onClick: u }),
            (0, s.jsx)(eI, {
                parentContainerRef: t,
                awaitingConsoleConnections: !1,
                hasMadeProgress: i,
                isProgressing: a,
                sourceQuestContent: d.uF.QUEST_BAR_V2,
            }),
        ],
    });
}
function tW(e) {
    let { parentContainerRef: t } = e,
        { quest: n, taskDetails: l } = r.useContext(et),
        i = l.percentComplete > 0,
        a = (0, x.Vn)(n);
    return (0, s.jsx)(k, {
        children: (0, s.jsx)(eI, {
            parentContainerRef: t,
            awaitingConsoleConnections: !1,
            hasMadeProgress: i,
            isProgressing: a,
            sourceQuestContent: d.uF.QUEST_BAR_V2,
        }),
    });
}
function tH(e) {
    let { parentContainerRef: t } = e,
        { quest: n } = r.useContext(et);
    return (0, C.t)({ quest: n }) || (0, C.g5)(n) || (0, C.fE)({ quest: n }) || (0, C.I6)(n)
        ? (0, s.jsx)(tD, { parentContainerRef: t })
        : (0, C.vv)(n)
          ? (0, s.jsx)(tG, { parentContainerRef: t })
          : (0, s.jsx)(tW, { parentContainerRef: t });
}
function t$(e) {
    let { containerRef: t } = e,
        { quest: n, taskDetails: l } = r.useContext(et),
        { expansionSpring: i } = r.useContext(b),
        a = r.useRef(null),
        o = r.useRef(null),
        u = (0, x.I3)(n),
        c = null != u ? u.percentComplete : l.percentComplete;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(A.animated.div, {
                className: S()(tO.tv, tO.ag),
                style: {
                    backgroundImage: `linear-gradient(90deg, ${B}, ${F})`,
                    opacity: (0, U.a)(i.to({ range: [0, 1], output: [1, 0] })),
                },
            }),
            (0, s.jsxs)("div", {
                className: tO.Fe,
                ref: (e) => {
                    ("function" == typeof t ? t(e) : null != t && (t.current = e), null != e && (o.current = e));
                },
                children: [
                    (0, s.jsx)(eG, {}),
                    (0, s.jsx)("div", { className: tO.yF }),
                    (0, s.jsx)(ec, { progressBarRef: a, isHovered: !1 }),
                    (0, s.jsx)(eM, {
                        contentLocation: "expanded",
                        progressBarRef: a,
                        isExpanded: !0,
                        percentComplete: c,
                        popoutTargetElementRef: o,
                    }),
                    (0, s.jsx)(tH, { parentContainerRef: o }),
                ],
            }),
            (0, s.jsx)("div", {
                className: S()(tO.tv, tO.Sx),
                style: { backgroundImage: `linear-gradient(90deg, ${B}, ${F})` },
            }),
        ],
    });
}
async function tz(e, t, n, s) {
    (0, C.vv)(e)
        ? await (0, g.e0)(e, { questContent: t, questContentCTA: n, sourceQuestContent: s, sourceQuestContentCTA: n })
        : (0, eh.vA)(e)
          ? await (0, tn.Oy)(e.id, { questContent: t, questContentCTA: n, sourceQuestContent: s })
          : (0, tn.Oy)(e.id, { questContent: t, questContentCTA: n, sourceQuestContent: s });
}
function tK() {
    let { quest: e } = r.useContext(et),
        { isExpanded: t, isExpansionAnimationComplete: n } = P(),
        { expandedContentRef: l } = r.useContext(b),
        { launchInGameActivity: i } = (0, x.zW)(e),
        a = (0, eh.vA)(e),
        o = r.useCallback(async () => {
            let t = a ? $.Cy.START_QUEST : $.Cy.ACCEPT_QUEST;
            (await tz(e, d.uF.QUEST_BAR_V2, t, d.uF.QUEST_BAR_V2), a && i());
        }, [e, i, a]);
    return e.userStatus?.enrolledAt != null
        ? (0, s.jsx)(t$, { containerRef: l })
        : (0, s.jsx)(tk, { isCtaInteractable: !t || n, containerRef: l, onAcceptQuest: o });
}
function tY() {
    let {
            expansionSpring: e,
            animatedComponentProps: t,
            recalculateAnimationPositions: n,
            mountPoints: l,
        } = r.useContext(b),
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
                    A.animated.div,
                    {
                        ref: c,
                        style: {
                            zIndex: 2,
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: u,
                            transform: (0, A.to)(
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
function tX() {
    let { quest: e } = r.useContext(et),
        t = e.userStatus?.enrolledAt != null;
    return (0, s.jsx)(e7, {
        layoutVariant: t ? "inset" : "flush",
        header: (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(tY, {}), !t && (0, s.jsx)(e1, {})] }),
        children: (0, s.jsx)(tK, {}),
    });
}
var tZ = n(731738),
    tJ = n(807393),
    t0 = n(260364);
function t1(e) {
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
function t2() {
    return (
        r.useEffect(() => {
            u.trigger();
        }, []),
        null
    );
}
function t7(e) {
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
                shouldShowQuestBar: m,
                isQuestEnrollmentBlocked: p,
            } = e;
            (r.useEffect(() => {
                i &&
                    (s("asset_loading_error"),
                    tJ.A.increment({
                        name: tZ.K.QUEST_CONTENT_RENDERING_FAILURE,
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
                    ((!m || p) && t0.A.clearTracking(), o && u && !c && !i && a && t0.A.stopTracking(t));
                }, [m, p, o, u, c, i, a, t]));
        })({
            reportRenderingFailure: r.useCallback(
                (e) => {
                    (0, p.DX)({
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
function t3(e) {
    let { isExpanded: t } = e,
        { quest: n } = r.useContext(et);
    return (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(t1, { questId: n.id, isExpanded: t }), (0, s.jsx)(t2, {})],
    });
}
function t6(e) {
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
function t9(e) {
    let { quest: t } = e,
        n = r.useMemo(() => (0, C.vv)(t), [t]),
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
                expandedContent: (0, s.jsx)(tX, {}),
                renderCreativeContext: (e) => (0, s.jsx)(el, { quest: t, children: e }),
                StateTrackers: t7,
                ModeChangeTracker: t3,
                ImpressionTracker: t6,
            }),
        })
    );
}
function t5(e) {
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
let t8 =
    221552 == n.j
        ? function () {
              let e = (0, h.wo)(),
                  t = (0, m.A)(d.p9.DESKTOP_ACCOUNT_PANEL_AREA, "useNoFillAd");
              switch (e.type) {
                  case l.p.QUEST: {
                      let { quest: t } = e;
                      return (0, s.jsx)(
                          f.y5,
                          {
                              source: K.rE.QUESTS_BAR,
                              adCreativeId: t.id,
                              adCreativeType: l.p.QUEST,
                              children: (0, s.jsx)(t9, { quest: t }),
                          },
                          t.id,
                      );
                  }
                  case l.p.BOUNTY:
                      return null;
                  case l.p.NO_FILL:
                      return null != t ? (0, s.jsx)(t5, { noFillDecision: t }, t.decisionId) : null;
              }
          }
        : null;
