n.d(t, {
    A: () => F,
    Y: () => B,
});
var a = n(627968),
    l = n(64700),
    r = n(503698),
    i = n.n(r),
    s = n(353709),
    o = n(311907),
    c = n(475743),
    d = n(676594),
    u = n(186111),
    m = n(859703),
    p = n(341915),
    h = n(245853),
    x = n(921517),
    g = n(677402),
    f = n(943849),
    b = n(890687),
    v = n(792620),
    j = n(241124),
    _ = n(73473),
    y = n(201805),
    A = n(545986),
    C = n(139210),
    S = n(568329),
    O = n(818276),
    T = n(742860),
    E = n(783569),
    N = n(963713),
    w = n(717695),
    I = n(899592),
    k = n(546350),
    P = n(922532),
    R = n(20732),
    D = n(654487),
    M = n(419548);

function L(e) {
    let { isExpanded: t, questId: n } = e;
    return (
        (0, b.H6)({
            mode: t ? D.fP.EXPANDED : D.fP.COLLAPSED,
            questContent: p.uF.QUEST_BAR_V2,
            questId: n,
            sourceQuestContent: p.uF.QUEST_BAR_V2,
        }),
        null
    );
}

function U() {
    return (
        l.useEffect(() => {
            d.l.trigger();
        }, []),
        null
    );
}

function B(e) {
    var t, n;
    let { quest: r } = e,
        d = (0, f.L)({
            quest: r,
            location: D.rE.QUESTS_BAR,
        }),
        h = (0, g.H)({
            location: D.rE.QUESTS_BAR,
        }),
        x = (0, o.bG)([m.A], () => null != m.A.questEnrollmentBlockedUntil),
        { isQuestBarVisible: B, reason: G } = (0, y.TQ)({
            quest: r,
            location: D.rE.QUESTS_BAR,
        }),
        F = (0, o.bG)([u.A], () => u.A.hasLayers()),
        V = l.useRef(null),
        W = l.useMemo(() => (0, v.vv)(r), [r]),
        H = (null == (t = r.userStatus) ? void 0 : t.enrolledAt) != null,
        K = (0, c.A)(H),
        z = (null == (n = r.userStatus) ? void 0 : n.completedAt) != null,
        { hasError: q, isLoading: Q } = (0, j.Gk)(),
        Y = l.useContext(w.Z) || (h && B && !Q && !x),
        {
            isExpanded: J,
            setIsExpanded: X,
            expandQuestBar: $,
            isExpansionAnimationComplete: Z,
            isVisibilityAnimationAtRest: ee,
            expansionSpring: et,
            visibilitySpring: en,
            springConfig: ea,
        } = (0, k.w)({
            isQuestAccepted: H,
            isQuestCompleted: z,
            isQuestBarVisible: Y,
        }),
        {
            handleCtxMenuOpened: el,
            handleCtxMenuClosed: er,
            handleCtxMenuSelection: ei,
            handleGameSheetOpened: es,
            handleGameSheetClosed: eo,
            handleFocusWithoutDelay: ec,
            handleBlur: ed,
            handleMouseEnter: eu,
            handleMouseLeave: em,
        } = (0, P.m)({
            quest: r,
            isExpanded: J,
            setIsExpanded: X,
            expandQuestBar: $,
            isQuestCompleted: z,
            isQuestAccepted: H,
            prevIsQuestAccepted: K,
            impressionRef: V,
        });
    (0, R.S)({
        quest: r,
        hasAssetsError: q,
        isEligibleForQuests: h,
        isQuestBarVisible: Y,
        isVisibilityAnimationAtRest: ee,
        isLoadingAssets: Q,
        currentQuestVisibleReason: G,
        shouldShowQuestBar: B,
        isQuestEnrollmentBlocked: x,
        impressionRef: V,
    });
    let ep = l.useRef(null),
        eh = l.useRef(null),
        ex = l.useRef(null),
        eg = (0, b.fc)(r);
    if (
        (l.useEffect(() => {
            W && (0, A.l9)();
        }, [W]),
        !h || (!Y && ee && !Q) || q)
    )
        return q ? d.log("Not rendered due to asset error") : h || d.log("Not rendered due to ineligibility"), null;
    let ef = 70 + 78 * !!z;
    return (0, a.jsx)(_.R, {
        questOrQuests: r,
        questContent: p.uF.QUEST_BAR_V2,
        overrideVisibility: !F && Y,
        sourceQuestContent: p.uF.QUEST_BAR_V2,
        children: (e, t) => (
            (V.current = t.current),
            (0, a.jsxs)("div", {
                className: M.dK,
                children: [
                    Y &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(L, {
                                    questId: r.id,
                                    isExpanded: J,
                                }),
                                (0, a.jsx)(U, {}),
                            ],
                        }),
                    (0, a.jsx)(s.animated.div, {
                        "aria-hidden": !Y,
                        onMouseLeave: em,
                        onMouseEnter: eu,
                        onFocus: ec,
                        onBlur: ed,
                        className: i()(M.iE, {
                            [M.Xc]: !Y,
                            [M.uv]: Y && ee,
                        }),
                        style: {
                            height: en.to({
                                range: [0, 1],
                                output: [0, ef],
                            }),
                        },
                        children: (0, a.jsx)(s.animated.div, {
                            className: i()(M.FG, {
                                [M.E$]: J,
                                [M.KA]: H,
                            }),
                            children: (0, a.jsx)(E.R, {
                                springConfig: ea,
                                isExpanded: J,
                                children: (0, a.jsx)(S.oK, {
                                    expandedContentRef: ep,
                                    collapsedContentRef: eh,
                                    expansionSpring: et,
                                    children: (0, a.jsxs)(N.C, {
                                        quest: r,
                                        taskDetails: eg,
                                        isExpanded: J,
                                        isExpansionAnimationComplete: Z,
                                        onCtxMenuClose: er,
                                        onCtxMenuOpen: el,
                                        onCtxMenuSelect: ei,
                                        onGameSheetOpen: es,
                                        onGameSheetClose: eo,
                                        collapsedHeight: ef,
                                        children: [
                                            (0, a.jsx)(
                                                O.A,
                                                {
                                                    ref: eh,
                                                    className: M.Qs,
                                                    overlayRef: ex,
                                                },
                                                z ? "collapsed-with-rewards" : "collapsed-without-rewards",
                                            ),
                                            (0, a.jsx)(T.A, {
                                                className: M.Qs,
                                                overlayRef: ex,
                                                ref: ep,
                                                children: (0, a.jsxs)(a.Fragment, {
                                                    children: [(0, a.jsx)(I.A, {}), !H && (0, a.jsx)(C.A, {})],
                                                }),
                                            }),
                                            (0, a.jsx)("div", {
                                                ref: ex,
                                                className: M.Lw,
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

function G(e) {
    let { quest: t } = e,
        { unfurlEnabled: n, unfurlDurationInMilliseconds: l } = (0, x.sH)();
    return (0, a.jsx)(B, {
        quest: t,
        unfurlEnabled: n,
        unfurlDurationInMilliseconds: l,
    });
}
let F =
    21552 == n.j
        ? function () {
              let e = (0, y.dN)(),
                  { enabled: t, variant: n } = h.qd.getConfig({
                      location: D.rE.QUESTS_BAR,
                  });
              if (null == e) return null;
              let l = (0, x.RL)(e.config)
                  ? (0, a.jsx)(G, {
                        quest: e,
                    })
                  : (0, a.jsx)(B, {
                        quest: e,
                    });
              return (0, a.jsx)(
                  j.jY,
                  {
                      source: D.rE.QUESTS_BAR,
                      questId: e.id,
                      listenForSourceError: t,
                      retrySourceLoadOnError: n === h.LO.LISTEN_AND_RETRY_LOADING,
                      children: l,
                  },
                  e.id,
              );
          }
        : null;
