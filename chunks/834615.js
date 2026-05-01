n.d(t, { A: () => H });
var i = n(627968),
    a = n(64700),
    r = n(503698),
    s = n.n(r),
    l = n(17928),
    o = n(366010),
    d = n(534514),
    c = n(834730),
    _ = n(939249),
    E = n(365199),
    u = n(825484),
    A = n(821609),
    I = n(409626),
    T = n(363195),
    h = n(829219),
    S = n(859703),
    N = n(507107),
    f = n(112142),
    p = n(838077),
    m = n(890687),
    O = n(859387),
    C = n(18437),
    R = n(590202),
    g = n(710969),
    L = n(814793),
    D = n(73473),
    b = n(270045),
    M = n(201805),
    P = n(212614),
    U = n(79545),
    v = n(847641),
    y = n(311243),
    G = n(545986),
    w = n(654487),
    x = n(652215),
    V = n(985018),
    B = n(383218);
function F(e) {
    let { quest: t } = e,
        n = (0, m.S5)(t.config.expiresAt),
        a = (0, m.S5)(t.config.rewardsConfig.rewardsExpireAt),
        r = (0, l.bG)([T.A], () => T.A.getState().theme),
        s = (0, o.M)(r) ? x.NJ8.DARK : x.NJ8.LIGHT,
        _ = t.userStatus?.completedAt != null;
    return (0, i.jsxs)("div", {
        className: B.R_,
        children: [
            (0, i.jsx)("img", { className: B.tb, alt: "", src: (0, O.tW)(t, O.fY.GAME_TILE, s).url }),
            (0, i.jsxs)("div", {
                className: B.UD,
                children: [
                    (0, i.jsx)(d.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: _
                            ? V.intl.string(V.t.XBboAK)
                            : V.intl.formatToPlainString(V.t.EQa7os, { questName: t.config.messages.questName }),
                    }),
                    (0, i.jsx)(c.E, {
                        variant: "text-xs/normal",
                        color: "text-default",
                        children: _
                            ? V.intl.formatToPlainString(V.t.APddvF, { expirationDate: a })
                            : V.intl.formatToPlainString(V.t["pX+fmn"], { expirationDate: n }),
                    }),
                ],
            }),
        ],
    });
}
function k(e) {
    let { nodeRef: t, quest: n } = e,
        r = (0, C.Ut)(),
        o = (0, l.bG)([S.A], () => S.A.isEnrolling(n.id), [n]),
        [d, c] = a.useState(!1),
        T = a.useCallback(() => c(!0), []),
        O = a.useCallback(() => c(!1), []),
        { launchInGameActivity: D } = (0, m.zW)(n),
        x = f.t.useConfig({ location: w.rE.ACTIVITY_PANEL }),
        k = (0, U.Pd)(n),
        H = a.useCallback((e) => {
            e.stopPropagation();
        }, []),
        j = a.useCallback(() => {
            (0, h.Oy)(n.id, {
                questContent: N.uF.ACTIVITY_PANEL,
                questContentCTA: R.Cy.ACCEPT_QUEST,
                sourceQuestContent: N.uF.ACTIVITY_PANEL,
            }),
                (0, L.vA)(n) && D();
        }, [n, D]),
        Y = a.useCallback(() => {
            null != n &&
                (r({
                    questId: n.id,
                    questContent: N.uF.ACTIVITY_PANEL,
                    questContentCTA: R.Cy.TRACK_PROGRESS,
                    sourceQuestContent: N.uF.ACTIVITY_PANEL,
                }),
                (0, G.navigateToQuestHome)({ fromContent: N.uF.ACTIVITY_PANEL, questId: n.id }));
        }, [n, r]),
        W = a.useCallback(() => {
            r({
                questId: n.id,
                questContent: N.uF.ACTIVITY_PANEL,
                questContentCTA: R.Cy.LEARN_MORE,
                sourceQuestContent: N.uF.ACTIVITY_PANEL,
            }),
                (0, G.navigateToQuestHome)({ fromContent: N.uF.ACTIVITY_PANEL, questId: n.id });
        }, [n.id, r]),
        K = (0, M.ix)({ quest: n, questContent: N.uF.ACTIVITY_PANEL, sourceQuestContent: N.uF.ACTIVITY_PANEL }),
        $ = n.userStatus?.enrolledAt != null,
        Z = n.userStatus?.completedAt != null,
        q = (0, m.fc)(n),
        Q = (0, L.vA)(n),
        z = (0, p.NA)({ quest: n }),
        X = Q ? z : V.intl.string(V.t.l7E81v);
    return (0, i.jsxs)("div", {
        ref: (e) => {
            t.current = e;
        },
        className: s()(B.iE, { [B.tJ]: $ }),
        onClick: H,
        onKeyPress: H,
        onFocus: T,
        onMouseEnter: T,
        onBlur: O,
        onMouseLeave: O,
        children: [
            (0, i.jsxs)("div", {
                className: B.Wp,
                children: [
                    $ ? (0, i.jsx)(F, { quest: n }) : (0, i.jsx)(v.A, {}),
                    (0, i.jsx)(b.C, {
                        quest: n,
                        questContent: N.uF.ACTIVITY_PANEL,
                        shouldShowDisclosure: n.userStatus?.enrolledAt == null,
                        showShareLink: !0,
                        sourceQuestContent: N.uF.ACTIVITY_PANEL,
                        children: (e) =>
                            (0, i.jsx)(_.D, {
                                ...e,
                                "aria-label": V.intl.string(V.t.DEoVWZ),
                                children: (0, i.jsx)(E.j, { size: "md", color: "currentColor", className: B.Bx }),
                            }),
                    }),
                ],
            }),
            !$ &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(F, { quest: n }),
                        (0, i.jsx)(y.A, {
                            autoplay: d,
                            className: B.t3,
                            quest: n,
                            questContent: N.uF.ACTIVITY_PANEL,
                            location: w.rE.ACTIVITY_PANEL,
                            taskDetails: q,
                            sourceQuestContent: N.uF.ACTIVITY_PANEL,
                            gameProfileSource: I.Ob.QuestActivityPanel,
                        }),
                    ],
                }),
            $ &&
                !Z &&
                (0, i.jsx)(y.A, {
                    autoplay: d,
                    className: B.t3,
                    quest: n,
                    questContent: N.uF.ACTIVITY_PANEL,
                    location: w.rE.ACTIVITY_PANEL,
                    taskDetails: q,
                    sourceQuestContent: N.uF.ACTIVITY_PANEL,
                    gameProfileSource: I.Ob.QuestActivityPanel,
                }),
            (0, i.jsxs)("div", {
                className: B.uz,
                children: [
                    !$ &&
                        (0, i.jsxs)(u.e, {
                            size: "sm",
                            direction: Q ? "vertical" : "horizontal",
                            fullWidth: !0,
                            children: [
                                (0, i.jsx)(A.$, { variant: "secondary", text: V.intl.string(V.t.LLLLPD), onClick: W }),
                                x.enabled &&
                                k === U.UA.UNENROLLED &&
                                x.enabledQuestStates.has(U.UA.UNENROLLED) &&
                                !(0, g.Ic)(n)
                                    ? (0, i.jsx)(P.A, {
                                          quest: n,
                                          surface: U.V3.ACTIVITY_PANEL,
                                          size: "md",
                                          analyticsCtxQuestContent: N.uF.ACTIVITY_PANEL,
                                          analyticsCtxSourceQuestContent: N.uF.ACTIVITY_PANEL,
                                      })
                                    : (0, i.jsx)(A.$, {
                                          variant: "primary",
                                          text: X,
                                          onClick: j,
                                          loading: o,
                                          icon: (0, G.Oz)(n),
                                      }),
                            ],
                        }),
                    $ &&
                        !Z &&
                        (0, i.jsx)(A.$, {
                            variant: "primary",
                            size: "sm",
                            fullWidth: !0,
                            text: V.intl.string(V.t.VN1Ajl),
                            onClick: Y,
                        }),
                    Z &&
                        (0, i.jsx)(A.$, {
                            variant: "primary",
                            size: "sm",
                            fullWidth: !0,
                            text: V.intl.string(V.t.cfY4PE),
                            onClick: K,
                        }),
                ],
            }),
        ],
    });
}
let H = function (e) {
    return (0, i.jsx)(D.R, {
        questOrQuests: e.quest,
        questContent: N.uF.ACTIVITY_PANEL,
        sourceQuestContent: N.uF.ACTIVITY_PANEL,
        children: (t) => (0, i.jsx)(k, { nodeRef: t, ...e }),
    });
};
