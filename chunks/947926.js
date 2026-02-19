n.d(t, { A: () => V, Y: () => G });
var a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(475539),
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
    b = n(792620),
    v = n(241124),
    j = n(73473),
    C = n(201805),
    A = n(545986),
    T = n(139210),
    y = n(568329),
    S = n(818276),
    E = n(742860),
    N = n(783569),
    I = n(963713),
    k = n(717695),
    R = n(899592),
    O = n(546350),
    w = n(922532),
    D = n(20732),
    M = n(147150),
    P = n(654487);
n(272111);
var L = n(419548);
function U(e) {
    let { isExpanded: t, questId: n } = e;
    return (
        (0, f.H6)({
            mode: t ? P.fP.EXPANDED : P.fP.COLLAPSED,
            questContent: h.uF.QUEST_BAR_V2,
            questId: n,
            sourceQuestContent: h.uF.QUEST_BAR_V2,
        }),
        null
    );
}
function B() {
    return (
        i.useEffect(() => {
            c.l.trigger();
        }, []),
        null
    );
}
function G(e) {
    let { quest: t, unfurlEnabled: n = !1, unfurlDurationInMilliseconds: s } = e,
        c = (0, _.L)({ quest: t, location: P.rE.QUESTS_BAR }),
        x = (0, g.H)({ location: P.rE.QUESTS_BAR }),
        p = (0, o.bG)([m.A], () => null != m.A.questEnrollmentBlockedUntil),
        { isQuestBarVisible: G, reason: F } = (0, C.TQ)({ quest: t, location: P.rE.QUESTS_BAR }),
        V = (0, o.bG)([u.A], () => u.A.hasLayers()),
        W = i.useRef(null),
        H = i.useMemo(() => (0, b.vv)(t), [t]),
        K = t.id,
        z = t.userStatus?.enrolledAt != null,
        $ = (0, d.A)(z),
        q = t.userStatus?.completedAt != null,
        { hasError: Q, isLoading: Y } = (0, v.Gk)(),
        J = i.useContext(k.Z) || (x && G && !Y && !p),
        { hasSeenUnfurl: X, handleUnfurlDismissed: Z } = (0, M.a)(K),
        {
            isExpanded: ee,
            setIsExpanded: et,
            expandQuestBar: en,
            isExpansionAnimationComplete: ea,
            isVisibilityAnimationAtRest: ei,
            expansionSpring: es,
            visibilitySpring: el,
            springConfig: er,
            onQuestBarFocus: eo,
            isUnfurl: ed,
            isUnfurlTimeoutActive: ec,
            onUnfurlTimeoutComplete: eu,
        } = (0, O.w)({
            isQuestAccepted: z,
            isQuestCompleted: q,
            isQuestBarVisible: J,
            unfurlEnabled: n,
            hasSeenUnfurl: X,
            onUnfurlDismissed: Z,
        }),
        {
            handleCtxMenuOpened: em,
            handleCtxMenuClosed: eh,
            handleCtxMenuSelection: ex,
            handleGameSheetOpened: ep,
            handleGameSheetClosed: eg,
            handleFocusWithoutDelay: e_,
            handleBlur: ef,
            handleMouseEnter: eb,
            handleMouseLeave: ev,
        } = (0, w.m)({
            quest: t,
            isExpanded: ee,
            setIsExpanded: et,
            expandQuestBar: en,
            isQuestCompleted: q,
            isQuestAccepted: z,
            prevIsQuestAccepted: $,
            impressionRef: W,
            onQuestBarFocus: eo,
        });
    (0, D.S)({
        quest: t,
        hasAssetsError: Q,
        isEligibleForQuests: x,
        isQuestBarVisible: J,
        isVisibilityAnimationAtRest: ei,
        isLoadingAssets: Y,
        currentQuestVisibleReason: F,
        shouldShowQuestBar: G,
        isQuestEnrollmentBlocked: p,
        impressionRef: W,
    });
    let ej = i.useRef(null),
        eC = i.useRef(null),
        eA = i.useRef(null),
        eT = (0, f.fc)(t);
    if (
        (i.useEffect(() => {
            H && (0, A.l9)();
        }, [H]),
        !x || (!J && ei && !Y) || Q)
    )
        return Q ? c.log("Not rendered due to asset error") : x || c.log("Not rendered due to ineligibility"), null;
    let ey = 70 + 78 * !!q;
    return (0, a.jsx)(j.R, {
        questOrQuests: t,
        questContent: h.uF.QUEST_BAR_V2,
        overrideVisibility: !V && J,
        sourceQuestContent: h.uF.QUEST_BAR_V2,
        children: (e, n) => (
            (W.current = n.current),
            (0, a.jsxs)("div", {
                className: L.dK,
                children: [
                    J &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(U, { questId: K, isExpanded: ee }), (0, a.jsx)(B, {})],
                        }),
                    (0, a.jsx)(r.animated.div, {
                        "aria-hidden": !J,
                        onMouseLeave: ev,
                        onMouseEnter: eb,
                        onFocus: e_,
                        onBlur: ef,
                        className: l()(L.iE, { [L.Xc]: !J, [L.uv]: J && ei }),
                        style: { height: el.to({ range: [0, 1], output: [0, ey] }) },
                        children: (0, a.jsx)(r.animated.div, {
                            className: l()(L.FG, { [L.E$]: ee, [L.KA]: z }),
                            children: (0, a.jsx)(N.R, {
                                springConfig: er,
                                isExpanded: ee,
                                children: (0, a.jsx)(y.oK, {
                                    expandedContentRef: ej,
                                    collapsedContentRef: eC,
                                    expansionSpring: es,
                                    children: (0, a.jsxs)(I.C, {
                                        quest: t,
                                        taskDetails: eT,
                                        isExpanded: ee,
                                        isExpansionAnimationComplete: ea,
                                        onCtxMenuClose: eh,
                                        onCtxMenuOpen: em,
                                        onCtxMenuSelect: ex,
                                        onGameSheetOpen: ep,
                                        onGameSheetClose: eg,
                                        collapsedHeight: ey,
                                        children: [
                                            (0, a.jsx)(
                                                S.A,
                                                { ref: eC, className: L.Qs, overlayRef: eA },
                                                q ? "collapsed-with-rewards" : "collapsed-without-rewards",
                                            ),
                                            (0, a.jsx)(E.A, {
                                                className: L.Qs,
                                                overlayRef: eA,
                                                ref: ej,
                                                isUnfurl: ed,
                                                children: (0, a.jsxs)(a.Fragment, {
                                                    children: [
                                                        (0, a.jsx)(R.A, {}),
                                                        !z &&
                                                            (0, a.jsx)(T.A, {
                                                                unfurlTimeoutDurationInMilliseconds: s,
                                                                withUnfurlTimeout: ec,
                                                                onUnfurlTimeoutComplete: eu,
                                                            }),
                                                    ],
                                                }),
                                            }),
                                            (0, a.jsx)("div", { ref: eA, className: L.Lw }),
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
function F(e) {
    let { quest: t } = e,
        { unfurlEnabled: n, unfurlDurationInMilliseconds: i } = (0, p.sH)();
    return (0, a.jsx)(G, { quest: t, unfurlEnabled: n, unfurlDurationInMilliseconds: i });
}
let V =
    21552 == n.j
        ? function () {
              let e = (0, C.dN)(),
                  { enabled: t, variant: n } = x.qd.getConfig({ location: P.rE.QUESTS_BAR });
              if (null == e) return null;
              let i = (0, p.RL)(e.config) ? (0, a.jsx)(F, { quest: e }) : (0, a.jsx)(G, { quest: e });
              return (0, a.jsx)(
                  v.jY,
                  {
                      source: P.rE.QUESTS_BAR,
                      questId: e.id,
                      listenForSourceError: t,
                      retrySourceLoadOnError: n === x.LO.LISTEN_AND_RETRY_LOADING,
                      children: i,
                  },
                  e.id,
              );
          }
        : null;
