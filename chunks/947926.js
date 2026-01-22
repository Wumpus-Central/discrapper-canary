n.d(t, {
    A: () => B,
    Y: () => U,
});
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(432022),
    o = n(311907),
    c = n(475743),
    d = n(676594),
    u = n(186111),
    m = n(859703),
    p = n(341915),
    h = n(245853),
    f = n(677402),
    x = n(943849),
    b = n(890687),
    g = n(792620),
    v = n(241124),
    j = n(73473),
    y = n(201805),
    _ = n(545986),
    A = n(139210),
    C = n(568329),
    S = n(818276),
    O = n(742860),
    E = n(783569),
    N = n(963713),
    T = n(717695),
    I = n(899592),
    w = n(546350),
    k = n(922532),
    P = n(20732),
    R = n(654487),
    D = n(419548);
function M(e) {
    let { isExpanded: t, questId: n } = e;
    return (
        (0, b.H6)({
            mode: t ? R.fP.EXPANDED : R.fP.COLLAPSED,
            questContent: p.uF.QUEST_BAR_V2,
            questId: n,
            sourceQuestContent: p.uF.QUEST_BAR_V2,
        }),
        null
    );
}
function L() {
    return (
        l.useEffect(() => {
            d.l.trigger();
        }, []),
        null
    );
}
function U(e) {
    var t, n;
    let { quest: i } = e,
        d = (0, x.L)({
            quest: i,
            location: R.rE.QUESTS_BAR,
        }),
        h = (0, f.H)({ location: R.rE.QUESTS_BAR }),
        U = (0, o.bG)([m.A], () => null != m.A.questEnrollmentBlockedUntil),
        { isQuestBarVisible: B, reason: G } = (0, y.TQ)({
            quest: i,
            location: R.rE.QUESTS_BAR,
        }),
        F = (0, o.bG)([u.A], () => u.A.hasLayers()),
        V = l.useRef(null),
        H = l.useMemo(() => (0, g.vv)(i), [i]),
        W = (null == (t = i.userStatus) ? void 0 : t.enrolledAt) != null,
        K = (0, c.A)(W),
        z = (null == (n = i.userStatus) ? void 0 : n.completedAt) != null,
        { hasError: q, isLoading: Q } = (0, v.Gk)(),
        Y = l.useContext(T.Z) || (h && B && !Q && !U),
        {
            isExpanded: J,
            setIsExpanded: X,
            expandQuestBar: $,
            isExpansionAnimationComplete: Z,
            isVisibilityAnimationAtRest: ee,
            expansionSpring: et,
            visibilitySpring: en,
            springConfig: ea,
        } = (0, w.w)({
            isQuestAccepted: W,
            isQuestCompleted: z,
            isQuestBarVisible: Y,
        }),
        {
            handleCtxMenuOpened: el,
            handleCtxMenuClosed: ei,
            handleCtxMenuSelection: er,
            handleGameSheetOpened: es,
            handleGameSheetClosed: eo,
            handleFocusWithoutDelay: ec,
            handleBlur: ed,
            handleMouseEnter: eu,
            handleMouseLeave: em,
        } = (0, k.m)({
            quest: i,
            isExpanded: J,
            setIsExpanded: X,
            expandQuestBar: $,
            isQuestCompleted: z,
            isQuestAccepted: W,
            prevIsQuestAccepted: K,
            impressionRef: V,
        });
    (0, P.S)({
        quest: i,
        hasAssetsError: q,
        isEligibleForQuests: h,
        isQuestBarVisible: Y,
        isVisibilityAnimationAtRest: ee,
        isLoadingAssets: Q,
        currentQuestVisibleReason: G,
        shouldShowQuestBar: B,
        isQuestEnrollmentBlocked: U,
        impressionRef: V,
    });
    let ep = l.useRef(null),
        eh = l.useRef(null),
        ef = l.useRef(null),
        ex = (0, b.fc)(i);
    if (
        (l.useEffect(() => {
            H && (0, _.l9)();
        }, [H]),
        !h || (!Y && ee && !Q) || q)
    )
        return q ? d.log("Not rendered due to asset error") : h || d.log("Not rendered due to ineligibility"), null;
    let eb = 70 + 78 * !!z;
    return (0, a.jsx)(j.R, {
        questOrQuests: i,
        questContent: p.uF.QUEST_BAR_V2,
        overrideVisibility: !F && Y,
        sourceQuestContent: p.uF.QUEST_BAR_V2,
        children: (e, t) => (
            (V.current = t.current),
            (0, a.jsxs)("div", {
                className: D.dK,
                children: [
                    Y &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(M, {
                                    questId: i.id,
                                    isExpanded: J,
                                }),
                                (0, a.jsx)(L, {}),
                            ],
                        }),
                    (0, a.jsx)(s.animated.div, {
                        "aria-hidden": !Y,
                        onMouseLeave: em,
                        onMouseEnter: eu,
                        onFocus: ec,
                        onBlur: ed,
                        className: r()(D.iE, {
                            [D.Xc]: !Y,
                            [D.uv]: Y && ee,
                        }),
                        style: {
                            height: en.to({
                                range: [0, 1],
                                output: [0, eb],
                            }),
                        },
                        children: (0, a.jsx)(s.animated.div, {
                            className: r()(D.FG, {
                                [D.E$]: J,
                                [D.KA]: W,
                            }),
                            children: (0, a.jsx)(E.R, {
                                springConfig: ea,
                                isExpanded: J,
                                children: (0, a.jsx)(C.oK, {
                                    expandedContentRef: ep,
                                    collapsedContentRef: eh,
                                    expansionSpring: et,
                                    children: (0, a.jsxs)(N.C, {
                                        quest: i,
                                        taskDetails: ex,
                                        isExpanded: J,
                                        isExpansionAnimationComplete: Z,
                                        onCtxMenuClose: ei,
                                        onCtxMenuOpen: el,
                                        onCtxMenuSelect: er,
                                        onGameSheetOpen: es,
                                        onGameSheetClose: eo,
                                        collapsedHeight: eb,
                                        children: [
                                            (0, a.jsx)(
                                                S.A,
                                                {
                                                    ref: eh,
                                                    className: D.Qs,
                                                    overlayRef: ef,
                                                },
                                                z ? "collapsed-with-rewards" : "collapsed-without-rewards",
                                            ),
                                            (0, a.jsx)(O.A, {
                                                className: D.Qs,
                                                overlayRef: ef,
                                                ref: ep,
                                                children: (0, a.jsxs)(a.Fragment, {
                                                    children: [(0, a.jsx)(I.A, {}), !W && (0, a.jsx)(A.A, {})],
                                                }),
                                            }),
                                            (0, a.jsx)("div", {
                                                ref: ef,
                                                className: D.Lw,
                                            }),
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
let B =
    21552 == n.j
        ? function () {
              let e = (0, y.dN)(),
                  { enabled: t, variant: n } = h.qd.getConfig({ location: R.rE.QUESTS_BAR });
              return null == e
                  ? null
                  : (0, a.jsx)(
                        v.jY,
                        {
                            source: R.rE.QUESTS_BAR,
                            questId: e.id,
                            listenForSourceError: t,
                            retrySourceLoadOnError: n === h.LO.LISTEN_AND_RETRY_LOADING,
                            children: (0, a.jsx)(U, { quest: e }),
                        },
                        e.id,
                    );
          }
        : null;
