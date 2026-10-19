(n.r(t), n.d(t, { QuestBarQuestContent: () => t5, default: () => ne }));
var s = n(477900),
    r = n(582128),
    l = n(323889),
    i = n(17928),
    o = n(840251),
    a = n(688151);
let u = new o.E([], a.$G.QUEST_BAR_RENDERED, { location: "quest bar rendered" });
var c = n(186111),
    d = n(738822),
    x = n(77870),
    C = n(466242),
    m = n(792620),
    p = n(557637),
    E = n(657792),
    f = n(201805),
    h = n(617986),
    _ = n(503698),
    g = n.n(_),
    S = n(941143),
    A = n(475743),
    j = n(494280),
    R = n(859703),
    T = n(971276),
    v = n(851936);
n(321073);
var y = n(333007),
    Q = n(765671),
    N = n(398025);
let U = "#00000000",
    F = "#CDD8FF1A",
    B = r.createContext({
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
function I(e) {
    let { children: t, id: n, inState: l, isTextTransition: i = !1, ref: o } = e,
        {
            recalculateAnimationPositions: a,
            registerComponent: u,
            unregisterComponent: c,
            expansionSpring: d,
            mountPoints: x,
        } = r.useContext(B),
        C = r.useRef(null),
        m = r.useRef(null),
        p = r.useRef(void 0);
    (r.useEffect(() => {
        a();
    }, [a]),
        r.useLayoutEffect(() => {
            let e = C.current;
            return (
                null != e && u(e, n, l),
                () => {
                    null != e && c(n, l);
                }
            );
        }, [n, l, u, c]));
    let E = r.useCallback(
        (e) => {
            let { height: t } = e;
            p.current !== t && (a(), (p.current = t));
        },
        [a],
    );
    (0, Q.i4)(C, E);
    let f = x.get(n)?.current,
        h = null;
    return (
        null == f
            ? (h = null)
            : i && null != d
              ? (h = (0, s.jsxs)(s.Fragment, {
                    children: [
                        "collapsed" === l &&
                            (0, y.createPortal)(
                                (0, s.jsx)(S.animated.div, {
                                    style: {
                                        position: "absolute",
                                        opacity: (0, N.a)(d.to({ range: [0, 1], output: [1, 0] })),
                                    },
                                    children: t(m),
                                }),
                                f,
                            ),
                        "expanded" === l &&
                            (0, y.createPortal)(
                                (0, s.jsx)(S.animated.div, {
                                    style: {
                                        position: "absolute",
                                        opacity: (0, N.a)(d.to({ range: [0, 1], output: [0, 1] })),
                                    },
                                    children: t(m),
                                }),
                                f,
                            ),
                    ],
                }))
              : "collapsed" === l && (h = (0, y.createPortal)(t(m), f)),
        (0, s.jsxs)("div", {
            style: { opacity: +((null == h && "collapsed" === l) || null == f) },
            ref: o,
            children: [t(C), h],
        })
    );
}
let b = (e) => {
    let { children: t, expandedContentRef: n, collapsedContentRef: l, overlayRef: i, expansionSpring: o } = e,
        [a, u] = r.useState({}),
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
        E = r.useCallback(() => {
            let e = [];
            for (let t in a) {
                if (null == a[t] || null == n.current || null == l.current) continue;
                let s = a[t].collapsed,
                    r = a[t].expanded;
                if (null == s || null == r) continue;
                let i = r.getBoundingClientRect(),
                    o = n.current.getBoundingClientRect(),
                    u = s.getBoundingClientRect(),
                    c = l.current.getBoundingClientRect(),
                    d = i.top - o.top + 12,
                    x = u.top - c.top,
                    C = i.left - o.left + 12,
                    m = u.left - c.left,
                    p = -i.right + o.right + 12,
                    E = -u.right + c.right;
                e.push({
                    id: t,
                    collapsedLeft: m,
                    expandedLeft: C,
                    collapsedRight: E,
                    expandedRight: p,
                    collapsedTop: x,
                    expandedTop: d,
                    width: i.width,
                });
            }
            d(e);
        }, [a, n, l, d]),
        f = r.useMemo(
            () => ({
                registerComponent: m,
                unregisterComponent: p,
                animatedComponents: a,
                expandedContentRef: n,
                collapsedContentRef: l,
                overlayRef: i,
                recalculateAnimationPositions: E,
                animatedComponentProps: c,
                expansionSpring: o,
                mountPoints: x,
            }),
            [m, p, a, n, l, i, E, c, o, x],
        );
    return (0, s.jsx)(B.Provider, { value: f, children: t });
};
var O = n(717421),
    V = n(775602);
let q = r.createContext({ springConfig: {}, isExpanded: !1 });
function L(e) {
    let t = r.useMemo(
        () => ({ springConfig: e.springConfig, isExpanded: e.isExpanded }),
        [e.springConfig, e.isExpanded],
    );
    return (0, s.jsx)(q.Provider, { value: t, children: e.children });
}
function k(e) {
    let { children: t } = e,
        { springConfig: n, isExpanded: l } = r.useContext(q),
        o = (0, i.bG)([V.Ay], () => V.Ay.useReducedMotion),
        { ref: a, height: u = null } = (0, Q.Ay)(),
        c = (0, A.Ay)(u) ?? null,
        [{ height: d }, x] = (0, O.z)(() => ({ from: { height: 0 }, config: n }));
    return (
        r.useLayoutEffect(() => {
            null !== u && x({ height: u, immediate: !l || o || null === c });
        }, [u, x, l, o, c]),
        (0, s.jsx)(S.animated.div, {
            style: { height: null === c ? "auto" : d, overflow: "hidden" },
            children: (0, s.jsx)("div", { style: { overflow: "hidden" }, ref: a, children: t }),
        })
    );
}
let w = r.createContext(null);
function M() {
    let e = r.useContext(w);
    if (null == e) throw Error("useQuestBarExpansionContext requires a QuestBarExpansionContextProvider ancestor");
    return e;
}
function P(e) {
    let {
            children: t,
            isExpanded: n,
            isExpansionAnimationComplete: l,
            collapsedHeight: i,
            onCtxMenuClose: o,
            onCtxMenuOpen: a,
            onCtxMenuSelect: u,
            onGameSheetOpen: c,
            onGameSheetClose: d,
        } = e,
        x = r.useMemo(
            () => ({
                isExpanded: n,
                isExpansionAnimationComplete: l,
                collapsedHeight: i,
                onCtxMenuClose: o,
                onCtxMenuOpen: a,
                onCtxMenuSelect: u,
                onGameSheetOpen: c,
                onGameSheetClose: d,
            }),
            [n, l, i, o, a, u, c, d],
        );
    return (0, s.jsx)(w.Provider, { value: x, children: t });
}
var D = n(717695),
    G = n(621466),
    H = n(192308),
    W = n(561844),
    z = n(590202),
    $ = n(652215),
    K = n(190107),
    Y = n(920690);
function X(e) {
    let {
            creative: t,
            collapsedContent: n,
            expandedContent: o,
            ImpressionTracker: a,
            ModeChangeTracker: u,
            StateTrackers: x,
            renderCreativeContext: C,
        } = e,
        {
            collapsedHeight: m,
            canExpand: E,
            canCollapse: h,
            isEnrolled: _,
            springConfig: y,
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
        Q = (0, f.gJ)(t),
        N = (0, v.L)({ quest: (0, j.Ys)(t), location: K.rE.QUESTS_BAR }),
        U = (0, T.s)(),
        F = (0, i.bG)([R.A], () => null != R.A.questEnrollmentBlockedUntil),
        B = (0, i.bG)([c.A], () => c.A.hasLayers()),
        I = r.useRef(null),
        { hasError: q, isLoading: k } = (0, p.zT)(),
        w = r.useContext(D.Z),
        M = w || (U && Q && !k && !F),
        {
            isExpanded: X,
            setIsExpanded: Z,
            expandQuestBar: J,
            isExpansionAnimationComplete: ee,
            isVisibilityAnimationAtRest: et,
            expansionSpring: en,
            visibilitySpring: es,
        } = (function (e) {
            let { canExpand: t, isQuestBarVisible: n, springConfig: s } = e,
                l = (0, i.bG)([V.Ay], () => V.Ay.useReducedMotion),
                [o, a] = r.useState(!1),
                [u, c] = r.useState(!0),
                [d, x] = r.useState(!0),
                C = r.useRef(n),
                m = r.useCallback(
                    (e) => {
                        (!t && e) || (o !== e && (c(!1), a(e)));
                    },
                    [t, o],
                ),
                p = r.useCallback(() => {
                    m(!0);
                }, [m]),
                [{ expansionSpring: E }, f] = (0, O.z)(() => ({
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
                f({ expansionSpring: +!!o, immediate: l });
            }, [o, f, l]);
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
                    isExpanded: o,
                    setIsExpanded: m,
                    expandQuestBar: p,
                    isExpansionAnimationComplete: u,
                    isVisibilityAnimationAtRest: d,
                    expansionSpring: E,
                    visibilitySpring: h,
                    springConfig: s,
                }
            );
        })({ canExpand: E, isQuestBarVisible: M, springConfig: y }),
        er = (0, A.Ay)(_),
        {
            handleCtxMenuOpened: el,
            handleCtxMenuClosed: ei,
            handleCtxMenuSelection: eo,
            handleGameSheetOpened: ea,
            handleGameSheetClosed: eu,
            handleFocusWithoutDelay: ec,
            handleBlur: ed,
            handleMouseEnter: ex,
            handleMouseLeave: eC,
        } = (function (e) {
            let {
                    adCreativeId: t,
                    adCreativeType: n,
                    isExpanded: s,
                    setIsExpanded: i,
                    expandQuestBar: o,
                    canCollapse: a,
                    didEnroll: u,
                    impressionRef: c,
                } = e,
                x = r.useRef(-1),
                C = r.useRef(!1),
                [m, p] = r.useState(!1),
                [E, f] = r.useState(!1),
                h = r.useCallback(() => {
                    p(!0);
                }, []),
                _ = r.useCallback(() => {
                    (p(!1), !C.current && a && i(!1));
                }, [a, i]),
                g = r.useCallback(() => {
                    (p(!1), a && i(!1), (C.current = !1));
                }, [a, i]),
                S = r.useCallback(() => {
                    f(!0);
                }, []),
                A = r.useCallback(() => {
                    (f(!1), i(!1));
                }, [i]),
                j = r.useCallback(
                    function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (s) return;
                        let { withDelay: t = !1 } = e;
                        t ? (x.current = window.setTimeout(o, 75)) : o();
                    },
                    [o, s],
                ),
                R = r.useCallback(() => {
                    j();
                }, [j]),
                T = r.useCallback(
                    (e) => {
                        (window.clearTimeout(x.current),
                            ((0, G.vq)(e?.relatedTarget, Node) && e.currentTarget.contains(e.relatedTarget)) ||
                                m ||
                                E ||
                                C.current ||
                                i(!1));
                    },
                    [m, E, i],
                ),
                v = r.useCallback(() => {
                    (n === l.p.QUEST &&
                        (0, W.av)({
                            questId: t,
                            event: $.HAw.QUEST_HOVER,
                            properties: {
                                content_id: d.uF.QUEST_BAR,
                                content_name: (0, z.jO)(d.uF.QUEST_BAR),
                                impression_id: c.current?.getId(),
                            },
                            shouldExtendSession: !0,
                            sourceQuestContent: d.uF.QUEST_BAR_V2,
                        }),
                        (C.current = !0),
                        j({ withDelay: !0 }));
                }, [t, n, j, c]),
                y = r.useCallback(() => {
                    (n === l.p.QUEST &&
                        (0, W.av)({
                            questId: t,
                            event: $.HAw.QUEST_HOVER_OFF,
                            properties: {
                                content_id: d.uF.QUEST_BAR,
                                content_name: (0, z.jO)(d.uF.QUEST_BAR),
                                impression_id: c.current?.getId(),
                            },
                            sourceQuestContent: d.uF.QUEST_BAR_V2,
                        }),
                        (C.current = !1),
                        T());
                }, [t, n, T, c]);
            (r.useEffect(() => {
                E && C.current && y();
            }, [E, y]),
                r.useLayoutEffect(() => {
                    u && C.current && o();
                }, [o, u]),
                r.useLayoutEffect(() => {
                    a && u && !C.current && i(!1);
                }, [a, u, i]));
            let Q = (0, H.useHasAnyModalOpen)();
            return (
                r.useEffect(() => {
                    Q && C.current && y();
                }, [y, Q]),
                {
                    ctxMenuOpen: m,
                    gameSheetOpen: E,
                    handleCtxMenuOpened: h,
                    handleCtxMenuClosed: _,
                    handleCtxMenuSelection: g,
                    handleGameSheetOpened: S,
                    handleGameSheetClosed: A,
                    handleFocus: j,
                    handleFocusWithoutDelay: R,
                    handleBlur: T,
                    handleMouseEnter: v,
                    handleMouseLeave: y,
                }
            );
        })({
            ...(0, j.Yh)(t),
            isExpanded: X,
            setIsExpanded: Z,
            expandQuestBar: J,
            canCollapse: h,
            didEnroll: _ && !0 !== er,
            impressionRef: I,
        }),
        em = r.useRef(null),
        ep = r.useRef(null),
        eE = r.useRef(null),
        ef = !(!U || (!M && et && !k) || (q && !w));
    return (
        !ef && (q && !w ? N.log("Not rendered due to asset error") : U || N.log("Not rendered due to ineligibility")),
        (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(x, {
                    hasAssetsError: q,
                    isEligibleForQuests: U,
                    isQuestBarVisible: M,
                    isVisibilityAnimationAtRest: et,
                    isLoadingAssets: k,
                    isQuestEnrollmentBlocked: F,
                    impressionRef: I,
                }),
                ef &&
                    (0, s.jsx)(a, {
                        overrideVisibility: !B && M,
                        children: (e, t) => (
                            (I.current = t.current),
                            (0, s.jsxs)("div", {
                                className: Y.dK,
                                children: [
                                    M && (0, s.jsx)(u, { isExpanded: X }),
                                    (0, s.jsx)(S.animated.div, {
                                        "data-testid": "quest-bar-container",
                                        "aria-hidden": !M,
                                        onMouseLeave: eC,
                                        onMouseEnter: ex,
                                        onFocus: ec,
                                        onBlur: ed,
                                        className: g()(Y.iE, { [Y.Xc]: !M, [Y.uv]: M && et }),
                                        style: { height: es.to({ range: [0, 1], output: [0, m] }) },
                                        children: (0, s.jsx)(S.animated.div, {
                                            className: g()(Y.FG, { [Y.E$]: X }),
                                            children: (0, s.jsx)(L, {
                                                springConfig: y,
                                                isExpanded: X,
                                                children: (0, s.jsx)(b, {
                                                    expandedContentRef: em,
                                                    collapsedContentRef: ep,
                                                    overlayRef: eE,
                                                    expansionSpring: en,
                                                    children: (0, s.jsx)(P, {
                                                        isExpanded: X,
                                                        isExpansionAnimationComplete: ee,
                                                        onCtxMenuClose: ei,
                                                        onCtxMenuOpen: el,
                                                        onCtxMenuSelect: eo,
                                                        onGameSheetOpen: ea,
                                                        onGameSheetClose: eu,
                                                        collapsedHeight: m,
                                                        children: (C ?? ((e) => e))(
                                                            (0, s.jsxs)(s.Fragment, {
                                                                children: [
                                                                    n,
                                                                    o,
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
            applicationId: (0, m.xc)(n),
            location: K.rE.QUEST_INSTRUCTIONS,
            source: Z.GameProfileSources.QuestBar,
        }),
        o = r.useMemo(() => ({ hasAlreadyLinked: l, onClickGameTitle: i }), [l, i]);
    return (0, s.jsx)(en.Provider, { value: o, children: t });
}
function er(e) {
    let { children: t, quest: n, taskDetails: l } = e,
        i = r.useMemo(() => ({ quest: n, taskDetails: l }), [n, l]);
    return (0, s.jsx)(et.Provider, { value: i, children: t });
}
function el(e) {
    let { children: t, quest: n } = e;
    return (0, m.I6)(n) ? (0, s.jsx)(es, { quest: n, children: t }) : t;
}
var ei = n(776310);
function eo() {
    let e = document.body.style.getPropertyValue("--custom-guild-sidebar-width").slice(0, -2);
    return parseInt("" !== e ? e : "375");
}
var ea = n(536283),
    eu = n(489811);
let ec = (e) => {
    let { progressBarRef: t, isHovered: n } = e,
        { quest: l } = r.useContext(et),
        { isExpanded: o } = M(),
        { expansionSpring: a, overlayRef: u } = r.useContext(B),
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
        p = (0, i.bG)([V.Ay], () => V.Ay.useReducedMotion),
        E = r.useRef(null),
        f = (0, i.bG)([c.A], () => c.A.hasLayers()),
        h = (0, A.Ay)(f),
        [_, j] = r.useState(null),
        [R, T] = r.useState(null),
        v = r.useRef(new ei.OH({ gravity: 0, wind: 0 })),
        Q = (0, ei.f9)(_, R),
        U = r.useMemo(() => ["#51BC9D"], []),
        F = r.useCallback(() => {
            if (p) return;
            let e = t.current,
                n = E.current;
            if (null != n && null != e && Q.isReady) {
                var s, r, l, i;
                let { x: t, y: o } = e.getBoundingClientRect(),
                    { x: a, y: u } = n.getBoundingClientRect();
                Q.createMultipleConfetti(
                    ((s = t - a),
                    (r = o - u),
                    (l = e.clientHeight),
                    (i = e.clientWidth),
                    {
                        ...ea.Mw,
                        position: { type: "static-random", minValue: { x: s, y: r }, maxValue: { x: s + l, y: r + i } },
                        velocity: { type: "static-random", minValue: { x: -20, y: -20 }, maxValue: { x: 20, y: 20 } },
                        opacity: { type: "linear", value: 2, addValue: -0.1 },
                        dragCoefficient: { type: "static", value: 0.166 },
                        size: { type: "static-random", minValue: 2, maxValue: 3 },
                    }),
                    100,
                );
            }
        }, [t, E, Q, p]),
        I = (0, A.Ay)(o);
    return (r.useEffect(() => {
        C && o && !I && (x(), F());
    }, [o, C, x, F, I]),
    r.useEffect(() => {
        C &&
            !f &&
            h &&
            setTimeout(() => {
                (x(), F());
            }, 200);
    }, [C, h, f, x, F]),
    r.useEffect(() => {
        Q.isReady && (!m.current && C && (x(), F()), (m.current = C));
    }, [C, m, F, x, Q]),
    r.useEffect(() => {
        n && C && (x(), F());
    }, [n, C, x, F]),
    p)
        ? null
        : (0, s.jsxs)("div", {
              className: eu.iE,
              "aria-hidden": "true",
              ref: E,
              children: [
                  (0, s.jsx)(S.animated.div, { className: eu.Tp, style: { opacity: (0, N.a)(d) } }),
                  (0, s.jsx)(S.animated.div, { className: g()(eu.sJ, eu.ix), style: { opacity: (0, N.a)(d) } }),
                  (0, s.jsxs)(S.animated.div, {
                      className: eu.KG,
                      style: { transform: a.to({ range: [0, 1], output: [-35, 0] }).to((e) => `translateY(${e}px)`) },
                      children: [
                          (0, s.jsx)(ei.Fk, { ref: j, className: eu.t_, environment: v.current }),
                          (0, s.jsx)(ei.K_, {
                              ref: T,
                              sprites: ["/assets/b909790cf1d80597.svg"],
                              colors: U,
                              spriteWidth: ea.wn,
                              spriteHeight: ea.wn,
                          }),
                          null != u.current &&
                              (0, y.createPortal)(
                                  (0, s.jsx)(S.animated.div, {
                                      className: g()(eu.sJ, eu.d7),
                                      style: { opacity: (0, N.a)(d) },
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
    let { children: t, layoutVariant: n, backgroundImage: l, onMouseEnter: i, onMouseLeave: o } = e,
        { expansionSpring: a, collapsedContentRef: u } = r.useContext(B),
        { isExpanded: c } = M();
    return (0, s.jsx)(S.animated.div, {
        ref: u,
        "aria-hidden": c,
        className: g()(ed.hR, { [ed.Ag]: c, [ed.MN]: "inset" === n }),
        style: { opacity: (0, N.a)(a.to({ range: [0, 1], output: [1, 0] })), backgroundImage: l },
        onMouseEnter: i,
        onMouseLeave: o,
        children: (0, s.jsx)("div", { className: ed.o8, children: t }),
    });
};
var eC = n(821609),
    em = n(3738),
    ep = n(971649),
    eE = n(651892),
    ef = n(620954),
    eh = n(814793),
    e_ = n(753386),
    eg = n(608935),
    eS = n(887899),
    eA = n(79545),
    ej = n(862611),
    eR = n(630037),
    eT = n(105292),
    ev = n(191559);
function ey(e) {
    let { quest: t, sourceQuestContent: n, taskDetails: r } = e,
        l = (0, x.Hv)(),
        i = (0, s.jsx)(eC.$, {
            variant: "primary",
            fullWidth: !0,
            onClick: function () {
                if (l) {
                    ((0, W.Y5)({
                        questId: t.id,
                        questContent: d.uF.QUEST_BAR_V2,
                        questContentCTA: z.Cy.QUEST_ACCESS_SUSPENDED,
                        sourceQuestContent: n,
                    }),
                        (0, h.FS)());
                    return;
                }
                let e = t.userStatus?.enrolledAt == null ? z.Cy.ACCEPT_QUEST : z.Cy.WATCH_VIDEO;
                (0, h.d5)({
                    quest: t,
                    questContent: d.uF.QUEST_BAR_V2,
                    sourceQuestContent: n,
                    sourceQuestContentCTA: e,
                });
            },
            size: "sm",
            text: (0, e_.WM)(r),
            "aria-disabled": l || void 0,
        });
    return l ? (0, s.jsx)(eg.A, { children: i }) : i;
}
function eQ(e) {
    let { quest: t, sourceQuestContent: n } = e,
        r = (0, ep.wW)(),
        l = (0, eE.wr)(t);
    return (0, s.jsx)(eC.$, {
        size: "sm",
        fullWidth: !0,
        onClick: () =>
            (0, ef.pu)(t, {
                content: d.uF.QUEST_BAR_V2,
                ctaContent: z.Cy.OPEN_GAME_LINK,
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
            (0, ef.se)(
                { quest: t },
                {
                    content: d.uF.QUEST_BAR_V2,
                    ctaContent: z.Cy.CONNECT_CONSOLE,
                    impressionId: r(),
                    sourceQuestContent: n,
                },
            ),
        size: "sm",
        text: eT.intl.string(eT.t.csptqV),
    });
}
function eU(e) {
    let { quest: t } = e,
        n = (0, em.NA)({ quest: t }),
        { launchInGameActivity: r } = (0, x.zW)(t);
    return (0, eh.vA)(t)
        ? (0, s.jsx)(eC.$, { fullWidth: !0, variant: "primary", icon: (0, h.Oz)(t), onClick: r, size: "sm", text: n })
        : null;
}
function eF(e) {
    let {
            quest: t,
            sourceQuestContent: n,
            taskDetails: r,
            popoutTargetElementRef: l,
            onGameSheetOpened: i,
            onGameSheetClosed: o,
        } = e,
        { applications: a } = r;
    return (0, s.jsx)(ej.A, {
        quest: t,
        sourceQuestContent: n,
        applications: a ?? [],
        targetElementRef: l,
        onGameSheetOpened: i,
        onGameSheetClosed: o,
        children: (e) =>
            (0, s.jsx)(eC.$, {
                variant: "secondary",
                fullWidth: !0,
                size: "sm",
                text: eT.intl.string(eT.t["93PTEs"]),
                ...e,
            }),
    });
}
function eB(e) {
    let { quest: t, ctaLabel: n, onClick: r, questContent: l = d.uF.QUEST_BAR_V2, sourceQuestContent: i } = e,
        o = (0, eR.D)({ quest: t, questContent: l, sourceQuestContent: i, onBeforeClaim: r });
    return (0, s.jsx)(eC.$, {
        fullWidth: !0,
        onClick: o,
        text: n ?? eT.intl.string(eT.t.cfY4PE),
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
            popoutTargetElementRef: o,
        } = e,
        { quest: a, taskDetails: u } = r.useContext(et),
        { onGameSheetOpen: c, onGameSheetClose: C } = M(),
        [p] = (0, x.Qo)(a, u),
        E = a.userStatus?.completedAt != null,
        f = (0, m.vv)(a),
        h = (0, m.I6)(a),
        _ = p !== d.X0.SELECT && !l && !i,
        g = null;
    return (
        E
            ? (g = (0, s.jsx)(eB, { quest: a, sourceQuestContent: t }))
            : h
              ? (g = (0, s.jsx)(eS.A, {
                    quest: a,
                    surface: eA.V3.QUEST_BAR_FOOTER,
                    size: "sm",
                    analyticsCtxQuestContent: d.uF.QUEST_BAR_V2,
                    analyticsCtxSourceQuestContent: t,
                }))
              : f
                ? (g = (0, s.jsx)(ey, { quest: a, sourceQuestContent: t, taskDetails: u }))
                : (0, eh.vA)(a)
                  ? (g = (0, s.jsx)(eU, { quest: a }))
                  : p === d.X0.CONSOLE && n
                    ? (g = (0, s.jsx)(eN, { quest: a, sourceQuestContent: t }))
                    : _ && (0, eh.ui)(a)
                      ? (g = (0, s.jsx)(eF, {
                            quest: a,
                            sourceQuestContent: t,
                            taskDetails: u,
                            popoutTargetElementRef: o,
                            onGameSheetOpened: c,
                            onGameSheetClosed: C,
                        }))
                      : _ && (g = (0, s.jsx)(eQ, { quest: a, sourceQuestContent: t })),
        null == g ? null : (0, s.jsx)("div", { className: ev.lO, children: g })
    );
}
function eb(e) {
    return (0, s.jsx)(eI, { ...e, popoutTargetElementRef: e.parentContainerRef });
}
var eO = n(834730),
    eV = n(62405),
    eq = n(453384),
    eL = n(649480);
let ek = function (e) {
    let { isExpanded: t, contentLocation: n, progressBarRef: l, percentComplete: i, popoutTargetElementRef: o } = e,
        { quest: a, taskDetails: u } = r.useContext(et),
        { onGameSheetOpen: c, onGameSheetClose: C } = M(),
        { hasAlreadyLinked: m, onClickGameTitle: p } = r.useContext(en),
        [E] = (0, x.Qo)(a, u),
        f = (0, em.VX)(a, m),
        h = (0, em.tH)({
            quest: a,
            isExpanded: t,
            activeScreen: E,
            sourceQuestContent: d.uF.QUEST_BAR_V2,
            popoutTargetElementRef: o,
            onGameSheetOpened: c,
            onGameSheetClosed: C,
            hasAlreadyLinked: m,
            onClickGameTitle: p,
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
                        children: (0, s.jsx)(eV.A, {
                            fullWidth: !0,
                            quest: a,
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
                            (0, s.jsx)(eO.E, {
                                ref: e,
                                className: eL.FZ,
                                color: "text-strong",
                                variant: "text-sm/semibold",
                                children: f,
                            }),
                    }),
                    (0, s.jsx)(I, {
                        inState: n,
                        id: "progress-subtitle",
                        isTextTransition: !0,
                        children: (e) =>
                            (0, s.jsx)(eO.E, {
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
var ew = n(939249),
    eM = n(365199),
    eP = n(270045),
    eD = n(316878);
function eG() {
    let { quest: e } = r.useContext(et),
        { onCtxMenuOpen: t, onCtxMenuClose: n, onCtxMenuSelect: l } = M(),
        i = (0, x.S5)(e.config.expiresAt);
    return (0, s.jsxs)("div", {
        className: eD.pS,
        children: [
            (0, s.jsx)(eO.E, {
                variant: "text-xxs/medium",
                className: g()(eD.Uu, eD.TK),
                children: eT.intl.format(eT.t["pX+fmn"], { expirationDate: i }),
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
                    (0, s.jsx)(ew.D, {
                        ...e,
                        className: eD.rb,
                        "aria-label": eT.intl.string(eT.t.DEoVWZ),
                        children: (0, s.jsx)(eM.MoreHorizontalIcon, {
                            size: "md",
                            color: "currentColor",
                            className: g()(eD.Bx, eD.U9),
                        }),
                    }),
            }),
        ],
    });
}
var eH = n(379073);
function eW(e) {
    let { progressBarRef: t } = e,
        { quest: n, taskDetails: l } = r.useContext(et),
        i = n.userStatus?.completedAt != null,
        o = n.userStatus?.enrolledAt != null,
        a = (0, x.I3)(n),
        u = null != a ? a.percentComplete : l.percentComplete,
        c = r.useRef(null);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            i && (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(eG, {}), (0, s.jsx)("div", { className: eH.y })] }),
            o
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
function ez() {
    let { quest: e } = r.useContext(et),
        t = e.userStatus?.completedAt != null,
        n = e.userStatus?.enrolledAt != null,
        l = r.useRef(null),
        [i, o] = r.useState(!1);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            t && (0, s.jsx)(ec, { progressBarRef: l, isHovered: i }),
            (0, s.jsx)(ex, {
                layoutVariant: n ? "inset" : "flush",
                backgroundImage: t ? `linear-gradient(90deg, ${U}, ${F})` : void 0,
                onMouseEnter: () => o(!0),
                onMouseLeave: () => o(!1),
                children: (0, s.jsx)(eW, { progressBarRef: l }),
            }),
        ],
    });
}
var e$ = n(290136),
    eK = n(661531),
    eY = n(57718),
    eX = n(393824);
let eZ = function (e) {
    let { isFullyExpanded: t, partnerBranding: n } = e,
        l = {
            label: !(function () {
                let [e, t] = r.useState(() => 270 > eo());
                return (
                    r.useEffect(() => {
                        let e = new MutationObserver(() => {
                            t(270 > eo());
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
        o = (0, i.bG)([V.Ay], () => V.Ay.useReducedMotion),
        { quest: a } = r.useContext(et),
        { expansionSpring: u } = r.useContext(B),
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
                children: (0, s.jsx)(eV.A, {
                    learnMoreStyle: "text",
                    learnMoreFontSize: t ? 9 : void 0,
                    quest: a,
                    location: K.rE.QUESTS_BAR,
                    questContent: d.uF.QUEST_BAR_V2,
                    autoplay: t && !o,
                    sourceQuestContent: d.uF.QUEST_BAR_V2,
                    style: { width: 48, height: 48, marginRight: 8, borderRadius: 6 },
                }),
            }),
            (0, s.jsxs)(S.animated.div, {
                className: g()(eX.pm, { [eX.nd]: l }),
                style: {
                    transform: (0, S.to)(
                        [u.to({ range: [0, 1], output: [0, -48] }), u.to({ range: [0, 1], output: [0, c] })],
                        (e, t) => `translate(${e}px, ${t}px)`,
                    ),
                },
                children: [
                    (0, s.jsx)("div", { className: g()({ [eX.Iu]: !l }), children: n }),
                    (0, s.jsx)(S.animated.div, {
                        className: g()(eX.ol, { [eX.yZ]: l }),
                        style: { opacity: (0, N.a)(u.to({ range: [0, 1], output: [l ? 1 : 0.7, 0] })) },
                        children: (0, s.jsx)(eO.E, {
                            color: "text-overlay-light",
                            lineClamp: 1,
                            variant: "text-xs/medium",
                            children: eT.intl.string(eT.t["3mgEQf"]),
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
            { expansionSpring: t } = r.useContext(B),
            { quest: n } = r.useContext(et),
            {
                onCtxMenuOpen: l,
                onCtxMenuClose: i,
                onCtxMenuSelect: o,
                isExpanded: a,
                isExpansionAnimationComplete: u,
            } = M(),
            c = r.useCallback(() => {
                (0, h.Zc)(n, {
                    content: d.uF.QUEST_BAR_V2,
                    ctaContent: z.Cy.OPEN_DISCLOSURE,
                    sourceQuestContent: d.uF.QUEST_BAR_V2,
                });
            }, [n]),
            x = r.useCallback(() => {
                (0, ef.pu)(n, {
                    content: d.uF.QUEST_BAR_HEADER,
                    ctaContent: z.Cy.OPEN_GAME_LINK,
                    impressionId: e(),
                    sourceQuestContent: d.uF.QUEST_BAR_V2,
                });
            }, [e, n]),
            C = a && u,
            m = (0, s.jsx)(ew.D, {
                onClick: x,
                className: g()(eJ.vk, { [eJ.wm]: C }),
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
            className: g()(eJ.iE, eJ.Ht, { [eJ.tT]: C }),
            style: { transform: (0, S.to)([t.to({ range: [0, 1], output: [6, 0] })], (e) => `translateY(${e}px)`) },
            children: [
                (0, s.jsx)(S.animated.div, {
                    className: eJ.Tu,
                    style: { opacity: (0, N.a)(t.to({ range: [0, 1], output: [0, 1] })) },
                }),
                (0, s.jsx)(eZ, { isFullyExpanded: C, partnerBranding: m }),
                (0, s.jsxs)(S.animated.div, {
                    className: eJ.P0,
                    style: { opacity: (0, N.a)(t.to({ range: [0, 1], output: [0, 1] })) },
                    children: [
                        (0, s.jsxs)(ew.D, {
                            className: eJ.y8,
                            onClick: c,
                            children: [
                                (0, s.jsx)(eO.E, {
                                    color: "text-overlay-light",
                                    variant: "text-xs/normal",
                                    children: eT.intl.string(eT.t.o6FLcF),
                                }),
                                (0, s.jsx)(e$.CircleQuestionIcon, { color: eK.A.colors.WHITE, className: eJ.P$ }),
                            ],
                        }),
                        (0, s.jsx)(eP.C, {
                            onOpen: l,
                            onClose: i,
                            onSelect: o,
                            questContent: d.uF.QUEST_BAR_V2,
                            quest: n,
                            shouldShowDisclosure: !0,
                            showShareLink: !0,
                            sourceQuestContent: d.uF.QUEST_BAR_V2,
                            children: (e) =>
                                (0, s.jsx)(ew.D, {
                                    ...e,
                                    className: g()(eJ.uJ, eJ.rb),
                                    "aria-label": eT.intl.string(eT.t.DEoVWZ),
                                    children: (0, s.jsx)(eM.MoreHorizontalIcon, {
                                        size: "md",
                                        color: "currentColor",
                                        className: g()(eJ.Bx, eJ.ON),
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
        { collapsedHeight: i, isExpanded: o } = M(),
        { expansionSpring: a } = r.useContext(B);
    return (0, s.jsxs)(S.animated.div, {
        "aria-hidden": !o,
        className: g()(e2.R, { [e2.w]: "inset" === l }),
        style: {
            transform: (0, S.to)(
                [a.to({ range: [0, 1], output: [0, -100] }), a.to({ range: [0, 1], output: [0, i] })],
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
    to = n(576761),
    ta = n(895253),
    tu = n(976019),
    tc = n(442734),
    td = n(139384),
    tx = n(114046),
    tC = n(695366),
    tm = n(274670),
    tp = n(144779),
    tE = n(30370),
    tf = n(178540),
    th = n(104886),
    t_ = n(18437),
    tg = n(780964),
    tS = n(766075),
    tA = n(52093),
    tj = n(575630);
function tR(e) {
    let { text: t, quest: n, sourceQuestContent: r } = e,
        i = (0, t_.Ut)(),
        o = (0, ep.wW)();
    return (0, s.jsx)(ew.D, {
        className: tj.Z0,
        onClick: () => {
            ((0, th.E5)(th.kI.STEP_2_CLICKED_INTERNAL, "console_connection_step")
                ? (0, tm.r)({
                      type: tp.F.CLICK_INTERNAL,
                      adCreativeType: l.p.QUEST,
                      adCreativeId: n.id,
                      questContentCTA: z.Cy.VIEW_CONSOLE_CONNECTIONS_LINK,
                      surfaceId: d.uF.QUEST_BAR_V2,
                      sourceQuestContent: r,
                      impressionId: o(),
                  })
                : i({
                      questId: n.id,
                      questContent: d.uF.QUEST_BAR_V2,
                      questContentCTA: z.Cy.VIEW_CONSOLE_CONNECTIONS_LINK,
                      sourceQuestContent: r,
                  }),
                (0, tS.openUserSettings)(tg.X.CONNECTIONS_CATEGORY));
        },
        children: (0, s.jsx)(eO.E, { "aria-label": t, color: "none", variant: "text-xxs/normal", children: t }),
    });
}
function tT(e) {
    let { xboxAndPlaystationAccounts: t, quest: n, sourceQuestContent: r } = e;
    return t.length > 0
        ? (0, s.jsx)(tR, { text: eT.intl.string(eT.t["qiS+xj"]), quest: n, sourceQuestContent: r })
        : null;
}
function tv(e) {
    return (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(tA.L5, { children: eT.intl.string(eT.t.EJFSvD) }), (0, s.jsx)(tT, { ...e })],
    });
}
var ty = n(607886);
function tQ(e) {
    return (0, s.jsx)(eO.E, {
        className: ty.eW,
        color: "text-muted",
        variant: "text-xxs/normal",
        children: e.children,
    });
}
function tN(e) {
    let { quest: t, useReducedMotion: n } = e,
        i = (0, f.H1)(t.id, d.uF.QUEST_BAR_V2, d.uF.QUEST_BAR_V2),
        o = (0, f.Xf)({ useReducedMotion: n }),
        a = (0, t_.Ut)(),
        u = (0, ep.wW)(),
        c = (0, tf.O)((e) => e.getErrorHints(t.id)),
        { startingConsoleQuest: C, startConsoleQuest: m } = (0, x.Wj)({
            questId: t.id,
            beforeRequest: () => {
                ((0, th.E5)(th.kI.STEP_2_CLICKED_INTERNAL, "quest_bar_console_task_checklist")
                    ? (0, tm.r)({
                          type: tp.F.CLICK_INTERNAL,
                          adCreativeType: l.p.QUEST,
                          adCreativeId: t.id,
                          questContentCTA: z.Cy.DEFIBRILLATOR,
                          surfaceId: d.uF.QUEST_BAR_V2,
                          sourceQuestContent: d.uF.QUEST_BAR_V2,
                          impressionId: u(),
                      })
                    : a({
                          questId: t.id,
                          questContent: d.uF.QUEST_BAR_V2,
                          questContentCTA: z.Cy.DEFIBRILLATOR,
                          sourceQuestContent: d.uF.QUEST_BAR_V2,
                      }),
                    o.startAnimation());
            },
            afterRequest: o.stopAnimation,
        }),
        { header: p, renderBody: E } = r.useMemo(() => {
            let e = c.length > 0,
                n = t.config.messages.gameTitle;
            return {
                header: e
                    ? (0, eh.ui)(t)
                        ? eT.intl.string(eT.t.N33EuL)
                        : eT.intl.formatToPlainString(eT.t["28Ql27"], { gameTitle: n })
                    : (0, eh.ui)(t)
                      ? eT.intl.string(eT.t.YstzGO)
                      : eT.intl.formatToPlainString(eT.t.gX0Qcx, { gameTitle: n }),
                renderBody: e
                    ? function () {
                          return (0, s.jsx)(s.Fragment, {
                              children: c.map((e, n) => {
                                  if (e.type === tx._.EXPIRED_CREDENTIAL) {
                                      let r = tE.A.getAccount(e.connected_account_id, e.connected_account_type),
                                          l = (0, ef.IG)(e),
                                          i = (0, ef.$J)(e);
                                      return (0, s.jsx)(
                                          tQ,
                                          {
                                              children: eT.intl.format(l, {
                                                  account_name: r?.name,
                                                  onClick: () => {
                                                      (0, ef.v0)(
                                                          { quest: t, platformType: i },
                                                          {
                                                              content: d.uF.QUEST_BAR,
                                                              ctaContent: z.Cy.DEFIBRILLATOR_RECONNECT_CONSOLE,
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
                          (0, s.jsx)(eO.E, {
                              className: ty.eW,
                              color: "text-muted",
                              variant: "text-xxs/normal",
                              children: (0, eh.ui)(t)
                                  ? eT.intl.string(eT.t.bUyEZZ)
                                  : eT.intl.format(eT.t.GXqvC1, { gameTitle: n }),
                          }),
            };
        }, [c, t, u]);
    return (0, s.jsxs)("div", {
        className: ty.XK,
        children: [
            (0, s.jsxs)("div", {
                className: ty.oK,
                children: [
                    (0, s.jsx)(tC.E, {
                        size: "custom",
                        color: "currentColor",
                        className: 0 === c.length ? ty.pH : ty.JA,
                        width: 16,
                        height: 16,
                    }),
                    (0, s.jsx)(eO.E, { variant: "text-xs/medium", children: p }),
                    (0, s.jsx)(ew.D, {
                        className: g()(ty.w, { [ty.r9]: C }),
                        onClick: () => m(),
                        children: o.render(),
                    }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: g()({ [ty.Iu]: C }),
                children: [E(), 0 === c.length ? null : (0, s.jsx)(tQ, { children: i })],
            }),
        ],
    });
}
let tU = function (e) {
    let { quest: t, taskDetails: n } = e,
        l = (0, i.bG)([V.Ay], () => V.Ay.useReducedMotion),
        o = (0, x.Du)(),
        a = r.useMemo(
            () => (0, ef.bg)(t).filter((e) => null != o.xboxAndPlaystationAccounts.find((t) => t.type === e)),
            [o.xboxAndPlaystationAccounts, t],
        ),
        {
            steps: u,
            hasConnectedAccounts: c,
            isProgressingQuestForLaunchedGame: C,
            isQuestComplete: p,
        } = r.useMemo(() => {
            let e = a.length > 0,
                r = e && (0, m.YL)(t),
                l = t.config.messages.gameTitle,
                i = t.userStatus?.completedAt != null;
            return {
                steps: [
                    {
                        renderContent: () => (0, s.jsx)(tv, { ...o, quest: t, sourceQuestContent: d.uF.QUEST_BAR_V2 }),
                        isComplete: e || r || i,
                    },
                    {
                        renderContent: () =>
                            (0, s.jsx)(tA.L5, {
                                children: (0, eh.ui)(t)
                                    ? eT.intl.string(eT.t["5tXqFe"])
                                    : eT.intl.formatToPlainString(eT.t["+8JB6Y"], { gameTitle: l }),
                            }),
                        isComplete: r || i,
                    },
                    {
                        renderContent: () =>
                            (0, s.jsx)(tA.L5, {
                                children: eT.intl.formatToPlainString(eT.t.HhfrYS, { numMinutes: n.targetMinutes }),
                            }),
                        isComplete: i,
                    },
                ],
                hasConnectedAccounts: e,
                isProgressingQuestForLaunchedGame: r,
                isQuestComplete: i,
            };
        }, [o, a.length, t, n.targetMinutes]);
    return (0, s.jsx)(tA.Ay, {
        heading: eT.intl.string(eT.t.UPWlJu),
        steps: u,
        children: c && !C && !p && (0, s.jsx)(tN, { useReducedMotion: l, quest: t }),
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
            (0, s.jsx)(eO.E, { color: "text-muted", variant: "text-xs/normal", className: tF.r2, children: n }),
        ],
    });
}
let tI = function (e) {
    let { quest: t } = e,
        n = (0, x.aC)(t);
    if (0 === n.length) return null;
    let r = n.at(0);
    return r === eT.intl.string(eT.t.BV6xDm)
        ? (0, s.jsx)(tB, { header: eT.intl.string(eT.t.onh6ct), children: eT.intl.string(eT.t.arVHRA) })
        : r === eT.intl.string(eT.t.MFGxFM)
          ? (0, s.jsx)(tB, { header: eT.intl.string(eT.t.JPihZA), children: eT.intl.string(eT.t.MFGxFM) })
          : null;
};
var tb = n(31300),
    tO = n(687966),
    tV = n(35558);
let tq = function (e) {
    let { onDesktop: t, onConsole: n } = e;
    return (0, s.jsxs)(e5.e, {
        direction: "vertical",
        fullWidth: !0,
        className: tV.G,
        size: "sm",
        children: [
            (0, s.jsx)(eC.$, {
                onClick: t,
                text: eT.intl.string(eT.t["QXc01+"]),
                variant: "secondary",
                icon: tb.k,
                iconPosition: "end",
            }),
            (0, s.jsx)(eC.$, {
                onClick: n,
                text: eT.intl.string(eT.t["8lAfuB"]),
                variant: "secondary",
                icon: tO.GameControllerIcon,
                iconPosition: "end",
            }),
        ],
    });
};
var tL = n(158247);
function tk(e) {
    let { isHovered: t, asset: n, poster: l, className: o, autoPlay: a = !1, ref: u } = e,
        { isExpanded: c } = M(),
        d = (0, i.bG)([V.Ay], () => V.Ay.useReducedMotion),
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
            autoPlay: a,
            poster: l,
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: o,
            controls: !1,
            children: (0, s.jsx)("source", { src: n.url, type: n.mimetype ?? void 0 }),
        })
    );
}
function tw(e) {
    let { onClick: t } = e,
        { quest: n } = r.useContext(et),
        l = (0, i.bG)([V.Ay], () => V.Ay.useReducedMotion),
        [o, a] = r.useState(!1),
        u = (0, ti.tW)(n, ti.fY.QUEST_BAR_HERO_VIDEO, void 0, !1),
        c = (0, ti.tW)(n, ti.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1),
        d = (0, ts.Kr)((e) => e.getVideoProgressState)(n.id),
        x = n.userStatus?.completedAt != null && d === ts.K2.COMPLETED,
        C = !x && (!l || o);
    return (0, s.jsxs)(ew.D, {
        className: tL.QO,
        onClick: t,
        onMouseEnter: function () {
            l && !o && a(!0);
        },
        onMouseLeave: function () {
            l && o && a(!1);
        },
        children: [
            null != c &&
                (0, s.jsx)(p._M, {
                    id: "QuestBarContentExpanded_videoThumbnail",
                    children: (e) => (0, s.jsx)("img", { ref: e, alt: "", src: c.url, className: tL.Ue }),
                }),
            null != u
                ? (0, s.jsx)(p._M, {
                      id: "QuestBarContentExpanded_video",
                      children: (e) =>
                          (0, s.jsx)(tk, {
                              ref: e,
                              isHovered: o,
                              autoPlay: !1,
                              asset: u,
                              poster: c?.url,
                              className: g()(tL.NM, { [tL.Gc]: C }),
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
function tM(e) {
    let { quest: t } = e;
    return (0, s.jsx)(eV.A, {
        className: g()(tL.Qq, tL.wq),
        learnMoreStyle: "text",
        quest: t,
        location: K.rE.QUESTS_BAR,
        questContent: d.uF.QUEST_BAR_V2,
        sourceQuestContent: d.uF.QUEST_BAR_V2,
    });
}
function tP(e) {
    let { isCtaInteractable: t, containerRef: n, onAcceptQuest: l } = e,
        { quest: o, taskDetails: a } = r.useContext(et),
        { onGameSheetOpen: u, onGameSheetClose: c } = M(),
        { expansionSpring: C } = r.useContext(B),
        m = r.useRef(null),
        E = (0, i.bG)([R.A], () => R.A.isEnrolling(o.id), [o]),
        f = r.useMemo(() => (0, ti.tW)(o, ti.fY.QUEST_BAR_HERO), [o]),
        _ = (0, em.NA)({ quest: o }),
        A = r.useMemo(() => (0, ti.tW)(o, ti.fY.HERO_IMAGE), [o]),
        j = r.useMemo(() => (null == A ? {} : { backgroundImage: `url(${A.url})` }), [A]),
        T = tr.t.useConfig({ location: K.rE.QUESTS_BAR }),
        v = (0, em.mU)({
            quest: o,
            location: K.rE.QUESTS_BAR,
            taskDetails: a,
            sourceQuestContent: d.uF.QUEST_BAR_V2,
            popoutTargetElementRef: m,
            onGameSheetOpened: u,
            onGameSheetClosed: c,
            gameProfileSource: Z.GameProfileSources.QuestBar,
        }),
        y = (0, eA.Pd)(o),
        Q = (0, tl.z)(),
        U = (0, x.SD)(o, Q),
        F = Q === to.MA.NITRO && U;
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
                                (0, s.jsx)(tM, { quest: o }),
                                (0, s.jsx)(e9.D, {
                                    className: tL.DD,
                                    color: "text-strong",
                                    variant: "heading-md/medium",
                                    children: eT.intl.format(eT.t.EQa7os, { questName: o.config.messages.questName }),
                                }),
                                (0, s.jsxs)("div", {
                                    className: tL.zf,
                                    children: [
                                        (0, s.jsx)(eO.E, { className: tL.h_, variant: "text-xs/normal", children: v }),
                                        U && (0, s.jsx)(tc.e, { questId: o.id, orbMultiplierEligibility: Q }),
                                    ],
                                }),
                            ],
                        }),
                        (0, s.jsx)("div", {
                            className: g()(tL.lO, { [tL._o]: !t }),
                            "data-testid": "quest-bar-enroll-cta",
                            children: (0, s.jsx)(e5.e, {
                                direction: "horizontal",
                                fullWidth: !0,
                                wrap: !1,
                                children:
                                    T.enabled && y === eA.UA.UNENROLLED && T.enabledQuestStates.has(eA.UA.UNENROLLED)
                                        ? (0, s.jsx)(eS.A, {
                                              quest: o,
                                              surface: eA.V3.QUEST_BAR_FOOTER,
                                              size: "sm",
                                              analyticsCtxQuestContent: d.uF.QUEST_BAR_V2,
                                              analyticsCtxSourceQuestContent: d.uF.QUEST_BAR_V2,
                                          })
                                        : (0, s.jsx)(eC.$, {
                                              onClick: l,
                                              variant: "primary",
                                              loading: E,
                                              text: _,
                                              size: "sm",
                                              icon: (0, h.Oz)(o),
                                              fullWidth: !0,
                                          }),
                            }),
                        }),
                    ],
                }),
            }),
            (0, s.jsx)(ta.A, { visible: F, glow: !0, className: tL.Ph }),
            null != A &&
                (0, s.jsx)(S.animated.div, {
                    className: tL.AK,
                    style: { opacity: (0, N.a)(C.to([0, 1], [1, 0])) },
                    children: (0, s.jsx)("div", { className: g()(tL.LC, tL.Ge), style: j }),
                }),
            (0, s.jsxs)(S.animated.div, {
                className: tL.IC,
                style: {
                    backdropFilter: (0, N.Q)(C.to([0, 1], [5, 0]).to((e) => `blur(${e}px)`)),
                    filter: (0, N.Q)(C.to([0, 1], [0.8, 1]).to((e) => `brightness(${e})`)),
                },
                children: [
                    f.isAnimated
                        ? (0, s.jsx)(p._M, {
                              id: "QuestBarContentExpanded_heroAnimated",
                              children: (e) => (0, s.jsx)(tk, { ref: e, autoPlay: !0, asset: f, className: tL.LO }),
                          })
                        : (0, s.jsx)(p._M, {
                              id: "QuestBarContentExpanded_heroStatic",
                              children: (e) => (0, s.jsx)("img", { ref: e, alt: "", className: tL.LO, src: f.url }),
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
        .with(d.X0.DESKTOP, () => ((0, m.I6)(l) ? (0, s.jsx)(tD, { quest: l }) : (0, s.jsx)(tI, { quest: l })))
        .with(d.X0.CONSOLE, () => (0, s.jsx)(tU, { quest: l, taskDetails: i }))
        .exhaustive();
}
function tH(e) {
    let { parentContainerRef: t } = e,
        { quest: n, taskDetails: l } = r.useContext(et),
        [i, o, a] = (0, x.Qo)(n, l),
        u = l.percentComplete > 0,
        c = (0, x.Vn)(n),
        C = (0, x.RR)({ quest: n }),
        m = o.length > 1 && !u && !c;
    return (0, s.jsxs)(k, {
        children: [
            (0, s.jsx)(tG, { activeScreen: i, selectPlatform: a }),
            i !== d.X0.SELECT &&
                (0, s.jsxs)("div", {
                    className: tL.oG,
                    children: [
                        m &&
                            (0, s.jsx)(e4.K, {
                                size: "sm",
                                "aria-label": eT.intl.string(eT.t["13/7kX"]),
                                onClick: () => a(null),
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
function tW(e) {
    let { parentContainerRef: t } = e,
        { quest: n, taskDetails: l } = r.useContext(et),
        i = l.percentComplete > 0,
        o = (0, x.Vn)(n),
        a = (0, x.Hv)() && n.userStatus?.completedAt == null,
        u = r.useCallback(() => {
            if (a) {
                ((0, W.Y5)({
                    questId: n.id,
                    questContent: d.uF.QUEST_BAR_V2,
                    questContentCTA: z.Cy.QUEST_ACCESS_SUSPENDED,
                    sourceQuestContent: d.uF.QUEST_BAR_V2,
                }),
                    (0, h.FS)());
                return;
            }
            (0, h.d5)({
                quest: n,
                questContent: d.uF.QUEST_BAR_V2,
                sourceQuestContent: d.uF.QUEST_BAR_V2,
                sourceQuestContentCTA: z.Cy.QUEST_BAR_VIDEO_QUEST_PREVIEW,
            });
        }, [n, a]);
    return (0, s.jsxs)(k, {
        children: [
            (0, s.jsx)(tw, { onClick: u }),
            (0, s.jsx)(eb, {
                parentContainerRef: t,
                awaitingConsoleConnections: !1,
                hasMadeProgress: i,
                isProgressing: o,
                sourceQuestContent: d.uF.QUEST_BAR_V2,
            }),
        ],
    });
}
function tz(e) {
    let { parentContainerRef: t } = e,
        { quest: n, taskDetails: l } = r.useContext(et),
        i = l.percentComplete > 0,
        o = (0, x.Vn)(n);
    return (0, s.jsx)(k, {
        children: (0, s.jsx)(eb, {
            parentContainerRef: t,
            awaitingConsoleConnections: !1,
            hasMadeProgress: i,
            isProgressing: o,
            sourceQuestContent: d.uF.QUEST_BAR_V2,
        }),
    });
}
function t$(e) {
    let { parentContainerRef: t } = e,
        { quest: n } = r.useContext(et);
    return (0, m.t)({ quest: n }) || (0, m.g5)(n) || (0, m.fE)({ quest: n }) || (0, m.I6)(n)
        ? (0, s.jsx)(tH, { parentContainerRef: t })
        : (0, m.vv)(n)
          ? (0, s.jsx)(tW, { parentContainerRef: t })
          : (0, s.jsx)(tz, { parentContainerRef: t });
}
function tK(e) {
    let { containerRef: t } = e,
        { quest: n, taskDetails: l } = r.useContext(et),
        { expansionSpring: i } = r.useContext(B),
        o = r.useRef(null),
        a = r.useRef(null),
        u = (0, x.I3)(n),
        c = null != u ? u.percentComplete : l.percentComplete;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(S.animated.div, {
                className: g()(tL.tv, tL.ag),
                style: {
                    backgroundImage: `linear-gradient(90deg, ${U}, ${F})`,
                    opacity: (0, N.a)(i.to({ range: [0, 1], output: [1, 0] })),
                },
            }),
            (0, s.jsxs)("div", {
                className: tL.Fe,
                ref: (e) => {
                    ("function" == typeof t ? t(e) : null != t && (t.current = e), null != e && (a.current = e));
                },
                children: [
                    (0, s.jsx)(eG, {}),
                    (0, s.jsx)("div", { className: tL.yF }),
                    (0, s.jsx)(ec, { progressBarRef: o, isHovered: !1 }),
                    (0, s.jsx)(ek, {
                        contentLocation: "expanded",
                        progressBarRef: o,
                        isExpanded: !0,
                        percentComplete: c,
                        popoutTargetElementRef: a,
                    }),
                    (0, s.jsx)(t$, { parentContainerRef: a }),
                ],
            }),
            (0, s.jsx)("div", {
                className: g()(tL.tv, tL.Sx),
                style: { backgroundImage: `linear-gradient(90deg, ${U}, ${F})` },
            }),
        ],
    });
}
async function tY(e, t, n, s) {
    (0, m.vv)(e)
        ? await (0, h.e0)(e, { questContent: t, questContentCTA: n, sourceQuestContent: s, sourceQuestContentCTA: n })
        : (0, eh.vA)(e)
          ? await (0, tn.Oy)(e.id, { questContent: t, questContentCTA: n, sourceQuestContent: s })
          : (0, tn.Oy)(e.id, { questContent: t, questContentCTA: n, sourceQuestContent: s });
}
function tX() {
    let { quest: e } = r.useContext(et),
        { isExpanded: t, isExpansionAnimationComplete: n } = M(),
        { expandedContentRef: l } = r.useContext(B),
        { launchInGameActivity: i } = (0, x.zW)(e),
        o = (0, eh.vA)(e),
        a = r.useCallback(async () => {
            let t = o ? z.Cy.START_QUEST : z.Cy.ACCEPT_QUEST;
            (await tY(e, d.uF.QUEST_BAR_V2, t, d.uF.QUEST_BAR_V2), o && i());
        }, [e, i, o]);
    return e.userStatus?.enrolledAt != null
        ? (0, s.jsx)(tK, { containerRef: l })
        : (0, s.jsx)(tP, { isCtaInteractable: !t || n, containerRef: l, onAcceptQuest: a });
}
function tZ() {
    let {
            expansionSpring: e,
            animatedComponentProps: t,
            recalculateAnimationPositions: n,
            mountPoints: l,
        } = r.useContext(B),
        { isExpanded: i } = M();
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
                let { id: n, collapsedLeft: r, expandedLeft: i, collapsedTop: o, expandedTop: a, width: u } = t,
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
                                [e.to({ range: [0, 1], output: [r, i] }), e.to({ range: [0, 1], output: [o, a] })],
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
        { isQuestBarVisible: n, reason: s } = (0, f.TQ)({ quest: t });
    return (
        !(function (e) {
            let {
                quest: t,
                hasAssetsError: n,
                isEligibleForQuests: s,
                isQuestBarVisible: l,
                isVisibilityAnimationAtRest: i,
                isLoadingAssets: o,
                currentQuestVisibleReason: a,
                shouldShowQuestBar: u,
                isQuestEnrollmentBlocked: c,
                impressionRef: x,
            } = e;
            (r.useEffect(() => {
                n &&
                    ((0, W.av)({
                        questId: t.id,
                        event: $.HAw.QUEST_CONTENT_RENDERING_FAILURE,
                        properties: {
                            content_id: d.uF.QUEST_BAR,
                            content_name: (0, z.jO)(d.uF.QUEST_BAR),
                            reason: "asset_loading_error",
                            impression_id: x.current?.getId(),
                        },
                        sourceQuestContent: d.uF.QUEST_BAR_V2,
                    }),
                    t1.A.increment({
                        name: t0.K.QUEST_CONTENT_RENDERING_FAILURE,
                        tags: [
                            `quest_id:${t.id}`,
                            `quest_content:${(0, z.jO)(d.uF.QUEST_BAR)}`,
                            "reason:asset_loading_error",
                        ],
                    }));
            }, [n, x, t.id]),
                r.useEffect(() => {
                    s ||
                        (0, W.av)({
                            questId: t.id,
                            event: $.HAw.QUEST_CONTENT_RENDERING_FAILURE,
                            properties: {
                                content_id: d.uF.QUEST_BAR,
                                content_name: (0, z.jO)(d.uF.QUEST_BAR),
                                reason: "not_eligible_for_quest",
                                impression_id: x.current?.getId(),
                            },
                            sourceQuestContent: d.uF.QUEST_BAR_V2,
                        });
                }, [s, x, t.id]),
                r.useEffect(() => {
                    l ||
                        !i ||
                        o ||
                        (0, W.av)({
                            questId: t.id,
                            event: $.HAw.QUEST_CONTENT_RENDERING_FAILURE,
                            properties: {
                                content_id: d.uF.QUEST_BAR,
                                content_name: (0, z.jO)(d.uF.QUEST_BAR),
                                reason: a,
                                impression_id: x.current?.getId(),
                            },
                            sourceQuestContent: d.uF.QUEST_BAR_V2,
                        });
                }, [l, i, o, t.id, a, x]),
                r.useEffect(() => {
                    ((!u || c) && t2.A.clearTracking(), l && i && !o && !n && s && t2.A.stopTracking(t.id));
                }, [u, c, l, i, o, n, s, t.id]));
        })({ quest: t, currentQuestVisibleReason: s, shouldShowQuestBar: n, ...e }),
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
        n = r.useMemo(() => (0, m.vv)(t), [t]),
        i = t.userStatus?.completedAt != null,
        o = (0, x.fc)(t),
        a = r.useMemo(() => ({ type: l.p.QUEST, quest: t }), [t]);
    return (
        r.useEffect(() => {
            n && (0, h.l9)();
        }, [n]),
        (0, s.jsx)(er, {
            quest: t,
            taskDetails: o,
            children: (0, s.jsx)(X, {
                creative: a,
                collapsedContent: (0, s.jsx)(ez, {}, i ? "collapsed-with-rewards" : "collapsed-without-rewards"),
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
              let e = (0, f.wo)(),
                  t = (0, C.A)(d.p9.DESKTOP_ACCOUNT_PANEL_AREA, "useNoFillAd");
              switch (e.type) {
                  case l.p.QUEST: {
                      let { quest: t } = e;
                      return (0, s.jsx)(
                          p.y5,
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
