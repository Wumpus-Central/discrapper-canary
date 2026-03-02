n.d(t, { A: () => F, Y: () => B });
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
    x = n(921517),
    p = n(677402),
    g = n(943849),
    _ = n(890687),
    f = n(792620),
    b = n(241124),
    v = n(73473),
    j = n(201805),
    C = n(545986),
    A = n(139210),
    T = n(568329),
    y = n(818276),
    S = n(742860),
    E = n(783569),
    N = n(963713),
    I = n(717695),
    k = n(899592),
    R = n(546350),
    O = n(922532),
    w = n(20732),
    D = n(147150),
    M = n(654487);
n(272111);
var P = n(419548);
function L(e) {
    let { isExpanded: t, questId: n } = e;
    return (
        (0, _.H6)({
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
        i.useEffect(() => {
            c.l.trigger();
        }, []),
        null
    );
}
function B(e) {
    let { quest: t, unfurlEnabled: n = !1, unfurlDurationInMilliseconds: s } = e,
        c = (0, g.L)({ quest: t, location: M.rE.QUESTS_BAR }),
        x = (0, p.H)({ location: M.rE.QUESTS_BAR }),
        B = (0, o.bG)([m.A], () => null != m.A.questEnrollmentBlockedUntil),
        { isQuestBarVisible: G, reason: F } = (0, j.TQ)({ quest: t, location: M.rE.QUESTS_BAR }),
        V = (0, o.bG)([u.A], () => u.A.hasLayers()),
        W = i.useRef(null),
        H = i.useMemo(() => (0, f.vv)(t), [t]),
        K = t.id,
        z = t.userStatus?.enrolledAt != null,
        $ = (0, d.A)(z),
        q = t.userStatus?.completedAt != null,
        { hasError: Q, isLoading: Y } = (0, b.Gk)(),
        J = i.useContext(I.Z) || (x && G && !Y && !B),
        { hasSeenUnfurl: X, handleUnfurlDismissed: Z } = (0, D.a)(K),
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
        } = (0, R.w)({
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
        } = (0, O.m)({
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
    (0, w.S)({
        quest: t,
        hasAssetsError: Q,
        isEligibleForQuests: x,
        isQuestBarVisible: J,
        isVisibilityAnimationAtRest: ei,
        isLoadingAssets: Y,
        currentQuestVisibleReason: F,
        shouldShowQuestBar: G,
        isQuestEnrollmentBlocked: B,
        impressionRef: W,
    });
    let ej = i.useRef(null),
        eC = i.useRef(null),
        eA = i.useRef(null),
        eT = (0, _.fc)(t);
    if (
        (i.useEffect(() => {
            H && (0, C.l9)();
        }, [H]),
        !x || (!J && ei && !Y) || Q)
    )
        return Q ? c.log("Not rendered due to asset error") : x || c.log("Not rendered due to ineligibility"), null;
    let ey = 70 + 78 * !!q;
    return (0, a.jsx)(v.R, {
        questOrQuests: t,
        questContent: h.uF.QUEST_BAR_V2,
        overrideVisibility: !V && J,
        sourceQuestContent: h.uF.QUEST_BAR_V2,
        children: (e, n) => (
            (W.current = n.current),
            (0, a.jsxs)("div", {
                className: P.dK,
                children: [
                    J &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(L, { questId: K, isExpanded: ee }), (0, a.jsx)(U, {})],
                        }),
                    (0, a.jsx)(r.animated.div, {
                        "aria-hidden": !J,
                        onMouseLeave: ev,
                        onMouseEnter: eb,
                        onFocus: e_,
                        onBlur: ef,
                        className: l()(P.iE, { [P.Xc]: !J, [P.uv]: J && ei }),
                        style: { height: el.to({ range: [0, 1], output: [0, ey] }) },
                        children: (0, a.jsx)(r.animated.div, {
                            className: l()(P.FG, { [P.E$]: ee, [P.KA]: z }),
                            children: (0, a.jsx)(E.R, {
                                springConfig: er,
                                isExpanded: ee,
                                children: (0, a.jsx)(T.oK, {
                                    expandedContentRef: ej,
                                    collapsedContentRef: eC,
                                    expansionSpring: es,
                                    children: (0, a.jsxs)(N.C, {
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
                                                y.A,
                                                { ref: eC, className: P.Qs, overlayRef: eA },
                                                q ? "collapsed-with-rewards" : "collapsed-without-rewards",
                                            ),
                                            (0, a.jsx)(S.A, {
                                                className: P.Qs,
                                                overlayRef: eA,
                                                ref: ej,
                                                isUnfurl: ed,
                                                children: (0, a.jsxs)(a.Fragment, {
                                                    children: [
                                                        (0, a.jsx)(k.A, {}),
                                                        !z &&
                                                            (0, a.jsx)(A.A, {
                                                                unfurlTimeoutDurationInMilliseconds: s,
                                                                withUnfurlTimeout: ec,
                                                                onUnfurlTimeoutComplete: eu,
                                                            }),
                                                    ],
                                                }),
                                            }),
                                            (0, a.jsx)("div", { ref: eA, className: P.Lw }),
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
        { unfurlEnabled: n, unfurlDurationInMilliseconds: i } = (0, x.sH)();
    return (0, a.jsx)(B, { quest: t, unfurlEnabled: n, unfurlDurationInMilliseconds: i });
}
let F =
    21552 == n.j
        ? function () {
              let e = (0, j.dN)();
              if (null == e) return null;
              let t = (0, x.RL)(e.config) ? (0, a.jsx)(G, { quest: e }) : (0, a.jsx)(B, { quest: e });
              return (0, a.jsx)(b.jY, { source: M.rE.QUESTS_BAR, questId: e.id, children: t }, e.id);
          }
        : null;
