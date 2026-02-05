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
    let { quest: t, unfurlEnabled: n = !1, unfurlDurationInMilliseconds: i } = e,
        c = (0, _.L)({ quest: t, location: M.rE.QUESTS_BAR }),
        x = (0, g.H)({ location: M.rE.QUESTS_BAR }),
        p = (0, o.bG)([m.A], () => null != m.A.questEnrollmentBlockedUntil),
        { isQuestBarVisible: B, reason: G } = (0, A.TQ)({ quest: t, location: M.rE.QUESTS_BAR }),
        F = (0, o.bG)([u.A], () => u.A.hasLayers()),
        V = s.useRef(null),
        W = s.useMemo(() => (0, v.vv)(t), [t]),
        H = t.userStatus?.enrolledAt != null,
        K = (0, d.A)(H),
        z = t.userStatus?.completedAt != null,
        { hasError: $, isLoading: q } = (0, b.Gk)(),
        Q = s.useContext(k.Z) || (x && B && !q && !p),
        {
            isExpanded: Y,
            setIsExpanded: J,
            expandQuestBar: X,
            isExpansionAnimationComplete: Z,
            isVisibilityAnimationAtRest: ee,
            expansionSpring: et,
            visibilitySpring: en,
            springConfig: ea,
            onQuestBarFocus: es,
            isUnfurl: ei,
            isUnfurlTimeoutActive: el,
            onUnfurlTimeoutComplete: er,
        } = (0, O.w)({ isQuestAccepted: H, isQuestCompleted: z, isQuestBarVisible: Q, unfurlEnabled: n }),
        {
            handleCtxMenuOpened: eo,
            handleCtxMenuClosed: ed,
            handleCtxMenuSelection: ec,
            handleGameSheetOpened: eu,
            handleGameSheetClosed: em,
            handleFocusWithoutDelay: eh,
            handleBlur: ex,
            handleMouseEnter: ep,
            handleMouseLeave: eg,
        } = (0, w.m)({
            quest: t,
            isExpanded: Y,
            setIsExpanded: J,
            expandQuestBar: X,
            isQuestCompleted: z,
            isQuestAccepted: H,
            prevIsQuestAccepted: K,
            impressionRef: V,
            onQuestBarFocus: es,
        });
    (0, D.S)({
        quest: t,
        hasAssetsError: $,
        isEligibleForQuests: x,
        isQuestBarVisible: Q,
        isVisibilityAnimationAtRest: ee,
        isLoadingAssets: q,
        currentQuestVisibleReason: G,
        shouldShowQuestBar: B,
        isQuestEnrollmentBlocked: p,
        impressionRef: V,
    });
    let e_ = s.useRef(null),
        ef = s.useRef(null),
        ev = s.useRef(null),
        eb = (0, f.fc)(t);
    if (
        (s.useEffect(() => {
            W && (0, C.l9)();
        }, [W]),
        !x || (!Q && ee && !q) || $)
    )
        return $ ? c.log("Not rendered due to asset error") : x || c.log("Not rendered due to ineligibility"), null;
    let ej = 70 + 78 * !!z;
    return (0, a.jsx)(j.R, {
        questOrQuests: t,
        questContent: h.uF.QUEST_BAR_V2,
        overrideVisibility: !F && Q,
        sourceQuestContent: h.uF.QUEST_BAR_V2,
        children: (e, n) => (
            (V.current = n.current),
            (0, a.jsxs)("div", {
                className: P.dK,
                children: [
                    Q &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(L, { questId: t.id, isExpanded: Y }), (0, a.jsx)(U, {})],
                        }),
                    (0, a.jsx)(r.animated.div, {
                        "aria-hidden": !Q,
                        onMouseLeave: eg,
                        onMouseEnter: ep,
                        onFocus: eh,
                        onBlur: ex,
                        className: l()(P.iE, { [P.Xc]: !Q, [P.uv]: Q && ee }),
                        style: { height: en.to({ range: [0, 1], output: [0, ej] }) },
                        children: (0, a.jsx)(r.animated.div, {
                            className: l()(P.FG, { [P.E$]: Y, [P.KA]: H }),
                            children: (0, a.jsx)(E.R, {
                                springConfig: ea,
                                isExpanded: Y,
                                children: (0, a.jsx)(T.oK, {
                                    expandedContentRef: e_,
                                    collapsedContentRef: ef,
                                    expansionSpring: et,
                                    children: (0, a.jsxs)(I.C, {
                                        quest: t,
                                        taskDetails: eb,
                                        isExpanded: Y,
                                        isExpansionAnimationComplete: Z,
                                        onCtxMenuClose: ed,
                                        onCtxMenuOpen: eo,
                                        onCtxMenuSelect: ec,
                                        onGameSheetOpen: eu,
                                        onGameSheetClose: em,
                                        collapsedHeight: ej,
                                        children: [
                                            (0, a.jsx)(
                                                y.A,
                                                { ref: ef, className: P.Qs, overlayRef: ev },
                                                z ? "collapsed-with-rewards" : "collapsed-without-rewards",
                                            ),
                                            (0, a.jsx)(N.A, {
                                                className: P.Qs,
                                                overlayRef: ev,
                                                ref: e_,
                                                isUnfurl: ei,
                                                children: (0, a.jsxs)(a.Fragment, {
                                                    children: [
                                                        (0, a.jsx)(R.A, {}),
                                                        !H &&
                                                            (0, a.jsx)(S.A, {
                                                                unfurlTimeoutDurationInMilliseconds: i,
                                                                withUnfurlTimeout: el,
                                                                onUnfurlTimeoutComplete: er,
                                                            }),
                                                    ],
                                                }),
                                            }),
                                            (0, a.jsx)("div", { ref: ev, className: P.Lw }),
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
