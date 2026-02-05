n.d(t, { A: () => F, Y: () => B });
var a = n(627968),
    s = n(64700),
    i = n(503698),
    l = n.n(i),
    r = n(92674),
    o = n(311907),
    d = n(475743),
    c = n(676594),
    u = n(186111),
    m = n(859703),
    h = n(341915),
    x = n(245853),
    p = n(921517),
    g = n(677402),
    _ = n(943849),
    f = n(890687),
    v = n(792620),
    b = n(241124),
    j = n(73473),
    A = n(201805),
    C = n(545986),
    S = n(139210),
    T = n(568329),
    y = n(818276),
    N = n(742860),
    E = n(783569),
    I = n(963713),
    k = n(717695),
    R = n(899592),
    O = n(546350),
    w = n(922532),
    D = n(20732),
    M = n(654487),
    P = n(419548);
function L(e) {
    let { isExpanded: t, questId: n } = e;
    return (
        (0, f.H6)({
            mode: t ? M.fP.EXPANDED : M.fP.COLLAPSED,
            questContent: h.uF.QUEST_BAR_V2,
            questId: n,
            sourceQuestContent: h.uF.QUEST_BAR_V2,
        }),
        null
    );
}
function U() {
    return (
        s.useEffect(() => {
            c.l.trigger();
        }, []),
        null
    );
}
function B(e) {
    let { quest: t } = e,
        n = (0, _.L)({ quest: t, location: M.rE.QUESTS_BAR }),
        i = (0, g.H)({ location: M.rE.QUESTS_BAR }),
        c = (0, o.bG)([m.A], () => null != m.A.questEnrollmentBlockedUntil),
        { isQuestBarVisible: x, reason: p } = (0, A.TQ)({ quest: t, location: M.rE.QUESTS_BAR }),
        B = (0, o.bG)([u.A], () => u.A.hasLayers()),
        G = s.useRef(null),
        F = s.useMemo(() => (0, v.vv)(t), [t]),
        V = t.userStatus?.enrolledAt != null,
        W = (0, d.A)(V),
        H = t.userStatus?.completedAt != null,
        { hasError: K, isLoading: z } = (0, b.Gk)(),
        $ = s.useContext(k.Z) || (i && x && !z && !c),
        {
            isExpanded: q,
            setIsExpanded: Q,
            expandQuestBar: Y,
            isExpansionAnimationComplete: J,
            isVisibilityAnimationAtRest: X,
            expansionSpring: Z,
            visibilitySpring: ee,
            springConfig: et,
        } = (0, O.w)({ isQuestAccepted: V, isQuestCompleted: H, isQuestBarVisible: $ }),
        {
            handleCtxMenuOpened: en,
            handleCtxMenuClosed: ea,
            handleCtxMenuSelection: es,
            handleGameSheetOpened: ei,
            handleGameSheetClosed: el,
            handleFocusWithoutDelay: er,
            handleBlur: eo,
            handleMouseEnter: ed,
            handleMouseLeave: ec,
        } = (0, w.m)({
            quest: t,
            isExpanded: q,
            setIsExpanded: Q,
            expandQuestBar: Y,
            isQuestCompleted: H,
            isQuestAccepted: V,
            prevIsQuestAccepted: W,
            impressionRef: G,
        });
    (0, D.S)({
        quest: t,
        hasAssetsError: K,
        isEligibleForQuests: i,
        isQuestBarVisible: $,
        isVisibilityAnimationAtRest: X,
        isLoadingAssets: z,
        currentQuestVisibleReason: p,
        shouldShowQuestBar: x,
        isQuestEnrollmentBlocked: c,
        impressionRef: G,
    });
    let eu = s.useRef(null),
        em = s.useRef(null),
        eh = s.useRef(null),
        ex = (0, f.fc)(t);
    if (
        (s.useEffect(() => {
            F && (0, C.l9)();
        }, [F]),
        !i || (!$ && X && !z) || K)
    )
        return K ? n.log("Not rendered due to asset error") : i || n.log("Not rendered due to ineligibility"), null;
    let ep = 70 + 78 * !!H;
    return (0, a.jsx)(j.R, {
        questOrQuests: t,
        questContent: h.uF.QUEST_BAR_V2,
        overrideVisibility: !B && $,
        sourceQuestContent: h.uF.QUEST_BAR_V2,
        children: (e, n) => (
            (G.current = n.current),
            (0, a.jsxs)("div", {
                className: P.dK,
                children: [
                    $ &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(L, { questId: t.id, isExpanded: q }), (0, a.jsx)(U, {})],
                        }),
                    (0, a.jsx)(r.animated.div, {
                        "aria-hidden": !$,
                        onMouseLeave: ec,
                        onMouseEnter: ed,
                        onFocus: er,
                        onBlur: eo,
                        className: l()(P.iE, { [P.Xc]: !$, [P.uv]: $ && X }),
                        style: { height: ee.to({ range: [0, 1], output: [0, ep] }) },
                        children: (0, a.jsx)(r.animated.div, {
                            className: l()(P.FG, { [P.E$]: q, [P.KA]: V }),
                            children: (0, a.jsx)(E.R, {
                                springConfig: et,
                                isExpanded: q,
                                children: (0, a.jsx)(T.oK, {
                                    expandedContentRef: eu,
                                    collapsedContentRef: em,
                                    expansionSpring: Z,
                                    children: (0, a.jsxs)(I.C, {
                                        quest: t,
                                        taskDetails: ex,
                                        isExpanded: q,
                                        isExpansionAnimationComplete: J,
                                        onCtxMenuClose: ea,
                                        onCtxMenuOpen: en,
                                        onCtxMenuSelect: es,
                                        onGameSheetOpen: ei,
                                        onGameSheetClose: el,
                                        collapsedHeight: ep,
                                        children: [
                                            (0, a.jsx)(
                                                y.A,
                                                { ref: em, className: P.Qs, overlayRef: eh },
                                                H ? "collapsed-with-rewards" : "collapsed-without-rewards",
                                            ),
                                            (0, a.jsx)(N.A, {
                                                className: P.Qs,
                                                overlayRef: eh,
                                                ref: eu,
                                                children: (0, a.jsxs)(a.Fragment, {
                                                    children: [(0, a.jsx)(R.A, {}), !V && (0, a.jsx)(S.A, {})],
                                                }),
                                            }),
                                            (0, a.jsx)("div", { ref: eh, className: P.Lw }),
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
function G(e) {
    let { quest: t } = e,
        { unfurlEnabled: n, unfurlDurationInMilliseconds: s } = (0, p.sH)();
    return (0, a.jsx)(B, { quest: t, unfurlEnabled: n, unfurlDurationInMilliseconds: s });
}
let F =
    21552 == n.j
        ? function () {
              let e = (0, A.dN)(),
                  { enabled: t, variant: n } = x.qd.getConfig({ location: M.rE.QUESTS_BAR });
              if (null == e) return null;
              let s = (0, p.RL)(e.config) ? (0, a.jsx)(G, { quest: e }) : (0, a.jsx)(B, { quest: e });
              return (0, a.jsx)(
                  b.jY,
                  {
                      source: M.rE.QUESTS_BAR,
                      questId: e.id,
                      listenForSourceError: t,
                      retrySourceLoadOnError: n === x.LO.LISTEN_AND_RETRY_LOADING,
                      children: s,
                  },
                  e.id,
              );
          }
        : null;
