n.d(t, { A: () => U, Y: () => L });
var a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(687498),
    o = n(311907),
    d = n(475743),
    c = n(676594),
    u = n(186111),
    m = n(859703),
    h = n(341915),
    x = n(890687),
    p = n(971276),
    g = n(851936),
    _ = n(792620),
    f = n(241124),
    v = n(73473),
    b = n(201805),
    j = n(545986),
    A = n(139210),
    C = n(568329),
    y = n(818276),
    S = n(742860),
    E = n(783569),
    T = n(963713),
    N = n(717695),
    I = n(899592),
    O = n(546350),
    R = n(922532),
    k = n(20732),
    w = n(654487);
n(272111);
var D = n(407974);
function M(e) {
    let { isExpanded: t, questId: n } = e;
    return (
        (0, x.H6)({
            mode: t ? w.fP.EXPANDED : w.fP.COLLAPSED,
            questContent: h.uF.QUEST_BAR_V2,
            questId: n,
            sourceQuestContent: h.uF.QUEST_BAR_V2,
        }),
        null
    );
}
function P() {
    return (
        i.useEffect(() => {
            c.l.trigger();
        }, []),
        null
    );
}
function L(e) {
    let { quest: t } = e,
        n = (0, g.L)({ quest: t, location: w.rE.QUESTS_BAR }),
        s = (0, p.s)(),
        c = (0, o.bG)([m.A], () => null != m.A.questEnrollmentBlockedUntil),
        { isQuestBarVisible: L, reason: U } = (0, b.TQ)({ quest: t }),
        B = (0, o.bG)([u.A], () => u.A.hasLayers()),
        G = i.useRef(null),
        F = i.useMemo(() => (0, _.vv)(t), [t]),
        V = t.id,
        W = t.userStatus?.enrolledAt != null,
        H = (0, d.A)(W),
        K = t.userStatus?.completedAt != null,
        { hasError: z, isLoading: $ } = (0, f.Gk)(),
        q = i.useContext(N.Z) || (s && L && !$ && !c),
        {
            isExpanded: Q,
            setIsExpanded: Y,
            expandQuestBar: J,
            isExpansionAnimationComplete: X,
            isVisibilityAnimationAtRest: Z,
            expansionSpring: ee,
            visibilitySpring: et,
            springConfig: en,
        } = (0, O.w)({ isQuestAccepted: W, isQuestCompleted: K, isQuestBarVisible: q }),
        {
            handleCtxMenuOpened: ea,
            handleCtxMenuClosed: ei,
            handleCtxMenuSelection: es,
            handleGameSheetOpened: el,
            handleGameSheetClosed: er,
            handleFocusWithoutDelay: eo,
            handleBlur: ed,
            handleMouseEnter: ec,
            handleMouseLeave: eu,
        } = (0, R.m)({
            quest: t,
            isExpanded: Q,
            setIsExpanded: Y,
            expandQuestBar: J,
            isQuestCompleted: K,
            isQuestAccepted: W,
            prevIsQuestAccepted: H,
            impressionRef: G,
        });
    (0, k.S)({
        quest: t,
        hasAssetsError: z,
        isEligibleForQuests: s,
        isQuestBarVisible: q,
        isVisibilityAnimationAtRest: Z,
        isLoadingAssets: $,
        currentQuestVisibleReason: U,
        shouldShowQuestBar: L,
        isQuestEnrollmentBlocked: c,
        impressionRef: G,
    });
    let em = i.useRef(null),
        eh = i.useRef(null),
        ex = i.useRef(null),
        ep = (0, x.fc)(t),
        eg = (0, x.UH)(V);
    if (
        (i.useEffect(() => {
            F && (0, j.l9)();
        }, [F]),
        !s || (!q && Z && !$) || z)
    )
        return z ? n.log("Not rendered due to asset error") : s || n.log("Not rendered due to ineligibility"), null;
    let e_ = 70 + 78 * !!K;
    return (0, a.jsx)(v.R, {
        questOrQuests: t,
        questContent: h.uF.QUEST_BAR_V2,
        overrideVisibility: !B && q,
        onImpression: eg,
        sourceQuestContent: h.uF.QUEST_BAR_V2,
        children: (e, n) => (
            (G.current = n.current),
            (0, a.jsxs)("div", {
                className: D.dK,
                children: [
                    q &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(M, { questId: V, isExpanded: Q }), (0, a.jsx)(P, {})],
                        }),
                    (0, a.jsx)(r.animated.div, {
                        "aria-hidden": !q,
                        onMouseLeave: eu,
                        onMouseEnter: ec,
                        onFocus: eo,
                        onBlur: ed,
                        className: l()(D.iE, { [D.Xc]: !q, [D.uv]: q && Z }),
                        style: { height: et.to({ range: [0, 1], output: [0, e_] }) },
                        children: (0, a.jsx)(r.animated.div, {
                            className: l()(D.FG, { [D.E$]: Q, [D.KA]: W }),
                            children: (0, a.jsx)(E.R, {
                                springConfig: en,
                                isExpanded: Q,
                                children: (0, a.jsx)(C.oK, {
                                    expandedContentRef: em,
                                    collapsedContentRef: eh,
                                    expansionSpring: ee,
                                    children: (0, a.jsxs)(T.C, {
                                        quest: t,
                                        taskDetails: ep,
                                        isExpanded: Q,
                                        isExpansionAnimationComplete: X,
                                        onCtxMenuClose: ei,
                                        onCtxMenuOpen: ea,
                                        onCtxMenuSelect: es,
                                        onGameSheetOpen: el,
                                        onGameSheetClose: er,
                                        collapsedHeight: e_,
                                        children: [
                                            (0, a.jsx)(
                                                y.A,
                                                { ref: eh, className: D.Qs, overlayRef: ex },
                                                K ? "collapsed-with-rewards" : "collapsed-without-rewards",
                                            ),
                                            (0, a.jsx)(S.A, {
                                                className: D.Qs,
                                                overlayRef: ex,
                                                ref: em,
                                                children: (0, a.jsxs)(a.Fragment, {
                                                    children: [(0, a.jsx)(I.A, {}), !W && (0, a.jsx)(A.A, {})],
                                                }),
                                            }),
                                            (0, a.jsx)("div", { ref: ex, className: D.Lw }),
                                        ],
                                    }),
                                }),
                            }),
                        }),
                    }),
                ],
            })
        ),
    });
}
let U =
    21552 == n.j
        ? function () {
              let e = (0, b.dN)();
              return null == e
                  ? null
                  : (0, a.jsx)(
                        f.jY,
                        { source: w.rE.QUESTS_BAR, questId: e.id, children: (0, a.jsx)(L, { quest: e }) },
                        e.id,
                    );
          }
        : null;
