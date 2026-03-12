n.d(t, { A: () => H, Y: () => V });
var a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(490249),
    o = n(517846),
    d = n(311907),
    c = n(475743),
    u = n(676594),
    m = n(236698),
    h = n(253932),
    p = n(186111),
    x = n(859703),
    g = n(341915),
    _ = n(921517),
    f = n(677402),
    v = n(943849),
    b = n(890687),
    j = n(792620),
    A = n(241124),
    C = n(73473),
    T = n(201805),
    y = n(545986),
    S = n(139210),
    E = n(568329),
    N = n(818276),
    I = n(742860),
    k = n(783569),
    R = n(963713),
    O = n(717695),
    w = n(899592),
    D = n(546350),
    M = n(922532),
    P = n(20732),
    U = n(147150),
    L = n(654487);
n(272111);
var B = n(346774);
function G(e) {
    let { isExpanded: t, questId: n } = e;
    return (
        (0, b.H6)({
            mode: t ? L.fP.EXPANDED : L.fP.COLLAPSED,
            questContent: g.uF.QUEST_BAR_V2,
            questId: n,
            sourceQuestContent: g.uF.QUEST_BAR_V2,
        }),
        null
    );
}
function F() {
    return (
        i.useEffect(() => {
            u.l.trigger();
        }, []),
        null
    );
}
function V(e) {
    let { quest: t, unfurlEnabled: n = !1, unfurlDurationInMilliseconds: s } = e,
        u = (0, v.L)({ quest: t, location: L.rE.QUESTS_BAR }),
        _ = (0, f.H)({ location: L.rE.QUESTS_BAR }),
        V = (0, d.bG)([x.A], () => null != x.A.questEnrollmentBlockedUntil),
        { isQuestBarVisible: W, reason: H } = (0, T.TQ)({ quest: t, location: L.rE.QUESTS_BAR }),
        K = (0, d.bG)([p.A], () => p.A.hasLayers()),
        z = i.useRef(null),
        $ = i.useMemo(() => (0, j.vv)(t), [t]),
        q = t.id,
        Q = t.userStatus?.enrolledAt != null,
        Y = (0, c.A)(Q),
        J = t.userStatus?.completedAt != null,
        { hasError: X, isLoading: Z } = (0, A.Gk)(),
        ee = i.useContext(O.Z) || (_ && W && !Z && !V),
        { hasSeenUnfurl: et, handleUnfurlDismissed: en } = (0, U.a)(q),
        {
            isExpanded: ea,
            setIsExpanded: ei,
            expandQuestBar: es,
            isExpansionAnimationComplete: el,
            isVisibilityAnimationAtRest: er,
            expansionSpring: eo,
            visibilitySpring: ed,
            springConfig: ec,
            onQuestBarFocus: eu,
            isUnfurl: em,
            isUnfurlTimeoutActive: eh,
            onUnfurlTimeoutComplete: ep,
        } = (0, D.w)({
            isQuestAccepted: Q,
            isQuestCompleted: J,
            isQuestBarVisible: ee,
            unfurlEnabled: n,
            hasSeenUnfurl: et,
            onUnfurlDismissed: en,
        }),
        {
            handleCtxMenuOpened: ex,
            handleCtxMenuClosed: eg,
            handleCtxMenuSelection: e_,
            handleGameSheetOpened: ef,
            handleGameSheetClosed: ev,
            handleFocusWithoutDelay: eb,
            handleBlur: ej,
            handleMouseEnter: eA,
            handleMouseLeave: eC,
        } = (0, M.m)({
            quest: t,
            isExpanded: ea,
            setIsExpanded: ei,
            expandQuestBar: es,
            isQuestCompleted: J,
            isQuestAccepted: Q,
            prevIsQuestAccepted: Y,
            impressionRef: z,
            onQuestBarFocus: eu,
        });
    (0, P.S)({
        quest: t,
        hasAssetsError: X,
        isEligibleForQuests: _,
        isQuestBarVisible: ee,
        isVisibilityAnimationAtRest: er,
        isLoadingAssets: Z,
        currentQuestVisibleReason: H,
        shouldShowQuestBar: W,
        isQuestEnrollmentBlocked: V,
        impressionRef: z,
    });
    let eT = i.useRef(null),
        ey = i.useRef(null),
        eS = i.useRef(null),
        eE = (0, b.fc)(t),
        eN = h.H1.useSetting();
    if (
        (i.useEffect(() => {
            if (ee) {
                let e = eN ? o.w.AD_IMPRESSION_QUEST_BAR_OPT_OUT : o.w.AD_IMPRESSION_QUEST_BAR_OPT_IN;
                (0, m.hs)(e, { quest_id: q });
            }
        }, [ee, eN, q]),
        i.useEffect(() => {
            $ && (0, y.l9)();
        }, [$]),
        !_ || (!ee && er && !Z) || X)
    )
        return X ? u.log("Not rendered due to asset error") : _ || u.log("Not rendered due to ineligibility"), null;
    let eI = 70 + 78 * !!J;
    return (0, a.jsx)(C.R, {
        questOrQuests: t,
        questContent: g.uF.QUEST_BAR_V2,
        overrideVisibility: !K && ee,
        sourceQuestContent: g.uF.QUEST_BAR_V2,
        children: (e, n) => (
            (z.current = n.current),
            (0, a.jsxs)("div", {
                className: B.dK,
                children: [
                    ee &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(G, { questId: q, isExpanded: ea }), (0, a.jsx)(F, {})],
                        }),
                    (0, a.jsx)(r.animated.div, {
                        "aria-hidden": !ee,
                        onMouseLeave: eC,
                        onMouseEnter: eA,
                        onFocus: eb,
                        onBlur: ej,
                        className: l()(B.iE, { [B.Xc]: !ee, [B.uv]: ee && er }),
                        style: { height: ed.to({ range: [0, 1], output: [0, eI] }) },
                        children: (0, a.jsx)(r.animated.div, {
                            className: l()(B.FG, { [B.E$]: ea, [B.KA]: Q }),
                            children: (0, a.jsx)(k.R, {
                                springConfig: ec,
                                isExpanded: ea,
                                children: (0, a.jsx)(E.oK, {
                                    expandedContentRef: eT,
                                    collapsedContentRef: ey,
                                    expansionSpring: eo,
                                    children: (0, a.jsxs)(R.C, {
                                        quest: t,
                                        taskDetails: eE,
                                        isExpanded: ea,
                                        isExpansionAnimationComplete: el,
                                        onCtxMenuClose: eg,
                                        onCtxMenuOpen: ex,
                                        onCtxMenuSelect: e_,
                                        onGameSheetOpen: ef,
                                        onGameSheetClose: ev,
                                        collapsedHeight: eI,
                                        children: [
                                            (0, a.jsx)(
                                                N.A,
                                                { ref: ey, className: B.Qs, overlayRef: eS },
                                                J ? "collapsed-with-rewards" : "collapsed-without-rewards",
                                            ),
                                            (0, a.jsx)(I.A, {
                                                className: B.Qs,
                                                overlayRef: eS,
                                                ref: eT,
                                                isUnfurl: em,
                                                children: (0, a.jsxs)(a.Fragment, {
                                                    children: [
                                                        (0, a.jsx)(w.A, {}),
                                                        !Q &&
                                                            (0, a.jsx)(S.A, {
                                                                unfurlTimeoutDurationInMilliseconds: s,
                                                                withUnfurlTimeout: eh,
                                                                onUnfurlTimeoutComplete: ep,
                                                            }),
                                                    ],
                                                }),
                                            }),
                                            (0, a.jsx)("div", { ref: eS, className: B.Lw }),
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
function W(e) {
    let { quest: t } = e,
        { unfurlEnabled: n, unfurlDurationInMilliseconds: i } = (0, _.sH)();
    return (0, a.jsx)(V, { quest: t, unfurlEnabled: n, unfurlDurationInMilliseconds: i });
}
let H =
    21552 == n.j
        ? function () {
              let e = (0, T.dN)();
              if (null == e) return null;
              let t = (0, _.RL)(e.config) ? (0, a.jsx)(W, { quest: e }) : (0, a.jsx)(V, { quest: e });
              return (0, a.jsx)(A.jY, { source: L.rE.QUESTS_BAR, questId: e.id, children: t }, e.id);
          }
        : null;
