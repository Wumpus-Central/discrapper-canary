n.d(t, { A: () => Y });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(17928),
    o = n(366010),
    c = n(534514),
    d = n(834730),
    u = n(939249),
    m = n(365199),
    h = n(825484),
    A = n(821609),
    x = n(409626),
    p = n(363195),
    g = n(829219),
    N = n(859703),
    _ = n(507107),
    f = n(112142),
    I = n(838077),
    j = n(890687),
    v = n(859387),
    C = n(18437),
    y = n(590202),
    S = n(710969),
    E = n(814793),
    T = n(73473),
    b = n(270045),
    P = n(371912),
    L = n(212614),
    R = n(79545),
    D = n(847641),
    O = n(311243),
    k = n(545986),
    F = n(654487),
    w = n(652215),
    G = n(985018),
    M = n(383218);
function U(e) {
    let { quest: t } = e,
        n = (0, j.S5)(t.config.expiresAt),
        s = (0, j.S5)(t.config.rewardsConfig.rewardsExpireAt),
        l = (0, r.bG)([p.A], () => p.A.getState().theme),
        a = (0, o.M)(l) ? w.NJ8.DARK : w.NJ8.LIGHT,
        u = t.userStatus?.completedAt != null;
    return (0, i.jsxs)("div", {
        className: M.R_,
        children: [
            (0, i.jsx)("img", { className: M.tb, alt: "", src: (0, v.tW)(t, v.fY.GAME_TILE, a).url }),
            (0, i.jsxs)("div", {
                className: M.UD,
                children: [
                    (0, i.jsx)(c.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: u
                            ? G.intl.string(G.t.XBboAK)
                            : G.intl.formatToPlainString(G.t.EQa7os, { questName: t.config.messages.questName }),
                    }),
                    (0, i.jsx)(d.E, {
                        variant: "text-xs/normal",
                        color: "text-default",
                        children: u
                            ? G.intl.formatToPlainString(G.t.APddvF, { expirationDate: s })
                            : G.intl.formatToPlainString(G.t["pX+fmn"], { expirationDate: n }),
                    }),
                ],
            }),
        ],
    });
}
function V(e) {
    let { nodeRef: t, quest: n } = e,
        l = (0, C.Ut)(),
        o = (0, r.bG)([N.A], () => N.A.isEnrolling(n.id), [n]),
        [c, d] = s.useState(!1),
        p = s.useCallback(() => d(!0), []),
        v = s.useCallback(() => d(!1), []),
        { launchInGameActivity: T } = (0, j.zW)(n),
        w = f.t.useConfig({ location: F.rE.ACTIVITY_PANEL }),
        V = (0, R.Pd)(n),
        Y = s.useCallback((e) => {
            e.stopPropagation();
        }, []),
        $ = s.useCallback(() => {
            (0, g.Oy)(n.id, {
                questContent: _.uF.ACTIVITY_PANEL,
                questContentCTA: y.Cy.ACCEPT_QUEST,
                sourceQuestContent: _.uF.ACTIVITY_PANEL,
            }),
                (0, E.vA)(n) && T();
        }, [n, T]),
        H = s.useCallback(() => {
            null != n &&
                (l({
                    questId: n.id,
                    questContent: _.uF.ACTIVITY_PANEL,
                    questContentCTA: y.Cy.TRACK_PROGRESS,
                    sourceQuestContent: _.uF.ACTIVITY_PANEL,
                }),
                (0, k.navigateToQuestHome)({ fromContent: _.uF.ACTIVITY_PANEL, questId: n.id }));
        }, [n, l]),
        W = s.useCallback(() => {
            l({
                questId: n.id,
                questContent: _.uF.ACTIVITY_PANEL,
                questContentCTA: y.Cy.LEARN_MORE,
                sourceQuestContent: _.uF.ACTIVITY_PANEL,
            }),
                (0, k.navigateToQuestHome)({ fromContent: _.uF.ACTIVITY_PANEL, questId: n.id });
        }, [n.id, l]),
        z = (0, P.ix)({ quest: n, questContent: _.uF.ACTIVITY_PANEL, sourceQuestContent: _.uF.ACTIVITY_PANEL }),
        q = n.userStatus?.enrolledAt != null,
        B = n.userStatus?.completedAt != null,
        X = (0, j.fc)(n),
        Q = (0, E.vA)(n),
        K = (0, I.NA)({ quest: n }),
        Z = Q ? K : G.intl.string(G.t.l7E81v);
    return (0, i.jsxs)("div", {
        ref: (e) => {
            t.current = e;
        },
        className: a()(M.iE, { [M.tJ]: q }),
        onClick: Y,
        onKeyPress: Y,
        onFocus: p,
        onMouseEnter: p,
        onBlur: v,
        onMouseLeave: v,
        children: [
            (0, i.jsxs)("div", {
                className: M.Wp,
                children: [
                    q ? (0, i.jsx)(U, { quest: n }) : (0, i.jsx)(D.A, {}),
                    (0, i.jsx)(b.C, {
                        quest: n,
                        questContent: _.uF.ACTIVITY_PANEL,
                        shouldShowDisclosure: n.userStatus?.enrolledAt == null,
                        showShareLink: !0,
                        sourceQuestContent: _.uF.ACTIVITY_PANEL,
                        children: (e) =>
                            (0, i.jsx)(u.D, {
                                ...e,
                                "aria-label": G.intl.string(G.t.DEoVWZ),
                                children: (0, i.jsx)(m.j, { size: "md", color: "currentColor", className: M.Bx }),
                            }),
                    }),
                ],
            }),
            !q &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(U, { quest: n }),
                        (0, i.jsx)(O.A, {
                            autoplay: c,
                            className: M.t3,
                            quest: n,
                            questContent: _.uF.ACTIVITY_PANEL,
                            location: F.rE.ACTIVITY_PANEL,
                            taskDetails: X,
                            sourceQuestContent: _.uF.ACTIVITY_PANEL,
                            gameProfileSource: x.Ob.QuestActivityPanel,
                        }),
                    ],
                }),
            q &&
                !B &&
                (0, i.jsx)(O.A, {
                    autoplay: c,
                    className: M.t3,
                    quest: n,
                    questContent: _.uF.ACTIVITY_PANEL,
                    location: F.rE.ACTIVITY_PANEL,
                    taskDetails: X,
                    sourceQuestContent: _.uF.ACTIVITY_PANEL,
                    gameProfileSource: x.Ob.QuestActivityPanel,
                }),
            (0, i.jsxs)("div", {
                className: M.uz,
                children: [
                    !q &&
                        (0, i.jsxs)(h.e, {
                            size: "sm",
                            direction: Q ? "vertical" : "horizontal",
                            fullWidth: !0,
                            children: [
                                (0, i.jsx)(A.$, { variant: "secondary", text: G.intl.string(G.t.LLLLPD), onClick: W }),
                                w.enabled &&
                                V === R.UA.UNENROLLED &&
                                w.enabledQuestStates.has(R.UA.UNENROLLED) &&
                                !(0, S.Ic)(n)
                                    ? (0, i.jsx)(L.A, {
                                          quest: n,
                                          surface: R.V3.ACTIVITY_PANEL,
                                          size: "md",
                                          analyticsCtxQuestContent: _.uF.ACTIVITY_PANEL,
                                          analyticsCtxSourceQuestContent: _.uF.ACTIVITY_PANEL,
                                      })
                                    : (0, i.jsx)(A.$, {
                                          variant: "primary",
                                          text: Z,
                                          onClick: $,
                                          loading: o,
                                          icon: (0, k.Oz)(n),
                                      }),
                            ],
                        }),
                    q &&
                        !B &&
                        (0, i.jsx)(A.$, {
                            variant: "primary",
                            size: "sm",
                            fullWidth: !0,
                            text: G.intl.string(G.t.VN1Ajl),
                            onClick: H,
                        }),
                    B &&
                        (0, i.jsx)(A.$, {
                            variant: "primary",
                            size: "sm",
                            fullWidth: !0,
                            text: G.intl.string(G.t.cfY4PE),
                            onClick: z,
                        }),
                ],
            }),
        ],
    });
}
let Y = function (e) {
    return (0, i.jsx)(T.R, {
        questOrQuests: e.quest,
        questContent: _.uF.ACTIVITY_PANEL,
        sourceQuestContent: _.uF.ACTIVITY_PANEL,
        children: (t) => (0, i.jsx)(V, { nodeRef: t, ...e }),
    });
};
