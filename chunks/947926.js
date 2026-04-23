n.d(t, { A: () => D, Y: () => L });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(419354),
    o = n(311907),
    d = n(475743),
    c = n(676594),
    u = n(186111),
    p = n(859703),
    h = n(341915),
    m = n(890687),
    _ = n(971276),
    A = n(851936),
    f = n(792620),
    g = n(241124),
    x = n(73473),
    E = n(201805),
    C = n(545986),
    T = n(139210),
    v = n(568329),
    S = n(818276),
    b = n(742860),
    j = n(783569),
    I = n(963713),
    R = n(717695),
    N = n(899592),
    y = n(546350),
    M = n(922532),
    O = n(20732),
    U = n(654487);
n(272111);
var k = n(737595);
function P(e) {
    let { isExpanded: t, questId: n } = e;
    return (
        (0, m.H6)({
            mode: t ? U.fP.EXPANDED : U.fP.COLLAPSED,
            questContent: h.uF.QUEST_BAR_V2,
            questId: n,
            sourceQuestContent: h.uF.QUEST_BAR_V2,
        }),
        null
    );
}
function w() {
    return (
        s.useEffect(() => {
            c.l.trigger();
        }, []),
        null
    );
}
function L(e) {
    let { quest: t } = e,
        n = (0, A.L)({ quest: t, location: U.rE.QUESTS_BAR }),
        l = (0, _.s)(),
        c = (0, o.bG)([p.A], () => null != p.A.questEnrollmentBlockedUntil),
        { isQuestBarVisible: L, reason: D } = (0, E.TQ)({ quest: t }),
        F = (0, o.bG)([u.A], () => u.A.hasLayers()),
        B = s.useRef(null),
        G = s.useMemo(() => (0, f.vv)(t), [t]),
        V = t.id,
        W = t.userStatus?.enrolledAt != null,
        Q = (0, d.A)(W),
        H = t.userStatus?.completedAt != null,
        { hasError: q, isLoading: z } = (0, g.Gk)(),
        K = s.useContext(R.Z) || (l && L && !z && !c),
        {
            isExpanded: $,
            setIsExpanded: Y,
            expandQuestBar: X,
            isExpansionAnimationComplete: Z,
            isVisibilityAnimationAtRest: J,
            expansionSpring: ee,
            visibilitySpring: et,
            springConfig: en,
        } = (0, y.w)({ isQuestAccepted: W, isQuestCompleted: H, isQuestBarVisible: K }),
        {
            handleCtxMenuOpened: ei,
            handleCtxMenuClosed: es,
            handleCtxMenuSelection: el,
            handleGameSheetOpened: ea,
            handleGameSheetClosed: er,
            handleFocusWithoutDelay: eo,
            handleBlur: ed,
            handleMouseEnter: ec,
            handleMouseLeave: eu,
        } = (0, M.m)({
            quest: t,
            isExpanded: $,
            setIsExpanded: Y,
            expandQuestBar: X,
            isQuestCompleted: H,
            isQuestAccepted: W,
            prevIsQuestAccepted: Q,
            impressionRef: B,
        });
    (0, O.S)({
        quest: t,
        hasAssetsError: q,
        isEligibleForQuests: l,
        isQuestBarVisible: K,
        isVisibilityAnimationAtRest: J,
        isLoadingAssets: z,
        currentQuestVisibleReason: D,
        shouldShowQuestBar: L,
        isQuestEnrollmentBlocked: c,
        impressionRef: B,
    });
    let ep = s.useRef(null),
        eh = s.useRef(null),
        em = s.useRef(null),
        e_ = (0, m.fc)(t),
        eA = (0, m.UH)(t);
    if (
        (s.useEffect(() => {
            G && (0, C.l9)();
        }, [G]),
        !l || (!K && J && !z) || q)
    )
        return q ? n.log("Not rendered due to asset error") : l || n.log("Not rendered due to ineligibility"), null;
    let ef = 70 + 78 * !!H;
    return (0, i.jsx)(x.R, {
        questOrQuests: t,
        questContent: h.uF.QUEST_BAR_V2,
        overrideVisibility: !F && K,
        onImpression: eA,
        sourceQuestContent: h.uF.QUEST_BAR_V2,
        children: (e, n) => (
            (B.current = n.current),
            (0, i.jsxs)("div", {
                className: k.dK,
                children: [
                    K &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)(P, { questId: V, isExpanded: $ }), (0, i.jsx)(w, {})],
                        }),
                    (0, i.jsx)(r.animated.div, {
                        "aria-hidden": !K,
                        onMouseLeave: eu,
                        onMouseEnter: ec,
                        onFocus: eo,
                        onBlur: ed,
                        className: a()(k.iE, { [k.Xc]: !K, [k.uv]: K && J }),
                        style: { height: et.to({ range: [0, 1], output: [0, ef] }) },
                        children: (0, i.jsx)(r.animated.div, {
                            className: a()(k.FG, { [k.E$]: $, [k.KA]: W }),
                            children: (0, i.jsx)(j.R, {
                                springConfig: en,
                                isExpanded: $,
                                children: (0, i.jsx)(v.oK, {
                                    expandedContentRef: ep,
                                    collapsedContentRef: eh,
                                    expansionSpring: ee,
                                    children: (0, i.jsxs)(I.C, {
                                        quest: t,
                                        taskDetails: e_,
                                        isExpanded: $,
                                        isExpansionAnimationComplete: Z,
                                        onCtxMenuClose: es,
                                        onCtxMenuOpen: ei,
                                        onCtxMenuSelect: el,
                                        onGameSheetOpen: ea,
                                        onGameSheetClose: er,
                                        collapsedHeight: ef,
                                        children: [
                                            (0, i.jsx)(
                                                S.A,
                                                { ref: eh, className: k.Qs, overlayRef: em },
                                                H ? "collapsed-with-rewards" : "collapsed-without-rewards",
                                            ),
                                            (0, i.jsx)(b.A, {
                                                className: k.Qs,
                                                overlayRef: em,
                                                ref: ep,
                                                children: (0, i.jsxs)(i.Fragment, {
                                                    children: [(0, i.jsx)(N.A, {}), !W && (0, i.jsx)(T.A, {})],
                                                }),
                                            }),
                                            (0, i.jsx)("div", { ref: em, className: k.Lw }),
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
let D =
    21552 == n.j
        ? function () {
              let e = (0, E.dN)();
              return null == e
                  ? null
                  : (0, i.jsx)(
                        g.jY,
                        { source: U.rE.QUESTS_BAR, questId: e.id, children: (0, i.jsx)(L, { quest: e }) },
                        e.id,
                    );
          }
        : null;
