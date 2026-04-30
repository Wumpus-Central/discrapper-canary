"use strict";
n.d(t, { A: () => H });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(17928),
    l = n(366010),
    u = n(534514),
    c = n(834730),
    d = n(939249),
    _ = n(365199),
    f = n(825484),
    h = n(821609),
    p = n(409626),
    E = n(363195),
    m = n(340124),
    g = n(859703),
    A = n(507107),
    I = n(112142),
    T = n(838077),
    S = n(31587),
    N = n(859387),
    y = n(18437),
    C = n(590202),
    v = n(710969),
    O = n(814793),
    R = n(73473),
    b = n(270045),
    D = n(371912),
    L = n(368715),
    w = n(79545),
    M = n(847641),
    P = n(311243),
    x = n(617986),
    U = n(190107),
    k = n(652215),
    G = n(375708),
    F = n(383218);
function V(e) {
    let { quest: t } = e,
        n = (0, S.S5)(t.config.expiresAt),
        r = (0, S.S5)(t.config.rewardsConfig.rewardsExpireAt),
        s = (0, o.bG)([E.A], () => E.A.getState().theme),
        a = (0, l.M)(s) ? k.NJ8.DARK : k.NJ8.LIGHT,
        d = t.userStatus?.completedAt != null;
    return (0, i.jsxs)("div", {
        className: F.R_,
        children: [
            (0, i.jsx)("img", { className: F.tb, alt: "", src: (0, N.tW)(t, N.fY.GAME_TILE, a).url }),
            (0, i.jsxs)("div", {
                className: F.UD,
                children: [
                    (0, i.jsx)(u.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: d
                            ? G.intl.string(G.t.XBboAK)
                            : G.intl.formatToPlainString(G.t.EQa7os, { questName: t.config.messages.questName }),
                    }),
                    (0, i.jsx)(c.E, {
                        variant: "text-xs/normal",
                        color: "text-default",
                        children: d
                            ? G.intl.formatToPlainString(G.t.APddvF, { expirationDate: r })
                            : G.intl.formatToPlainString(G.t["pX+fmn"], { expirationDate: n }),
                    }),
                ],
            }),
        ],
    });
}
function B(e) {
    let { nodeRef: t, quest: n } = e,
        s = (0, y.Ut)(),
        l = (0, o.bG)([g.A], () => g.A.isEnrolling(n.id), [n]),
        [u, c] = r.useState(!1),
        E = r.useCallback(() => c(!0), []),
        N = r.useCallback(() => c(!1), []),
        { launchInGameActivity: R } = (0, S.zW)(n),
        k = I.t.useConfig({ location: U.rE.ACTIVITY_PANEL }),
        B = (0, w.Pd)(n),
        H = r.useCallback((e) => {
            e.stopPropagation();
        }, []),
        j = r.useCallback(() => {
            (0, m.Oy)(n.id, {
                questContent: A.uF.ACTIVITY_PANEL,
                questContentCTA: C.Cy.ACCEPT_QUEST,
                sourceQuestContent: A.uF.ACTIVITY_PANEL,
            }),
                (0, O.vA)(n) && R();
        }, [n, R]),
        Y = r.useCallback(() => {
            null != n &&
                (s({
                    questId: n.id,
                    questContent: A.uF.ACTIVITY_PANEL,
                    questContentCTA: C.Cy.TRACK_PROGRESS,
                    sourceQuestContent: A.uF.ACTIVITY_PANEL,
                }),
                (0, x.navigateToQuestHome)({ fromContent: A.uF.ACTIVITY_PANEL, questId: n.id }));
        }, [n, s]),
        W = r.useCallback(() => {
            s({
                questId: n.id,
                questContent: A.uF.ACTIVITY_PANEL,
                questContentCTA: C.Cy.LEARN_MORE,
                sourceQuestContent: A.uF.ACTIVITY_PANEL,
            }),
                (0, x.navigateToQuestHome)({ fromContent: A.uF.ACTIVITY_PANEL, questId: n.id });
        }, [n.id, s]),
        K = (0, D.ix)({ quest: n, questContent: A.uF.ACTIVITY_PANEL, sourceQuestContent: A.uF.ACTIVITY_PANEL }),
        z = n.userStatus?.enrolledAt != null,
        $ = n.userStatus?.completedAt != null,
        q = (0, S.fc)(n),
        Z = (0, O.vA)(n),
        X = (0, T.NA)({ quest: n }),
        Q = Z ? X : G.intl.string(G.t.l7E81v);
    return (0, i.jsxs)("div", {
        ref: (e) => {
            t.current = e;
        },
        className: a()(F.iE, { [F.tJ]: z }),
        onClick: H,
        onKeyPress: H,
        onFocus: E,
        onMouseEnter: E,
        onBlur: N,
        onMouseLeave: N,
        children: [
            (0, i.jsxs)("div", {
                className: F.Wp,
                children: [
                    z ? (0, i.jsx)(V, { quest: n }) : (0, i.jsx)(M.A, {}),
                    (0, i.jsx)(b.C, {
                        quest: n,
                        questContent: A.uF.ACTIVITY_PANEL,
                        shouldShowDisclosure: n.userStatus?.enrolledAt == null,
                        showShareLink: !0,
                        sourceQuestContent: A.uF.ACTIVITY_PANEL,
                        children: (e) =>
                            (0, i.jsx)(d.D, {
                                ...e,
                                "aria-label": G.intl.string(G.t.DEoVWZ),
                                children: (0, i.jsx)(_.j, { size: "md", color: "currentColor", className: F.Bx }),
                            }),
                    }),
                ],
            }),
            !z &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(V, { quest: n }),
                        (0, i.jsx)(P.A, {
                            autoplay: u,
                            className: F.t3,
                            quest: n,
                            questContent: A.uF.ACTIVITY_PANEL,
                            location: U.rE.ACTIVITY_PANEL,
                            taskDetails: q,
                            sourceQuestContent: A.uF.ACTIVITY_PANEL,
                            gameProfileSource: p.Ob.QuestActivityPanel,
                        }),
                    ],
                }),
            z &&
                !$ &&
                (0, i.jsx)(P.A, {
                    autoplay: u,
                    className: F.t3,
                    quest: n,
                    questContent: A.uF.ACTIVITY_PANEL,
                    location: U.rE.ACTIVITY_PANEL,
                    taskDetails: q,
                    sourceQuestContent: A.uF.ACTIVITY_PANEL,
                    gameProfileSource: p.Ob.QuestActivityPanel,
                }),
            (0, i.jsxs)("div", {
                className: F.uz,
                children: [
                    !z &&
                        (0, i.jsxs)(f.e, {
                            size: "sm",
                            direction: Z ? "vertical" : "horizontal",
                            fullWidth: !0,
                            children: [
                                (0, i.jsx)(h.$, { variant: "secondary", text: G.intl.string(G.t.LLLLPD), onClick: W }),
                                k.enabled &&
                                B === w.UA.UNENROLLED &&
                                k.enabledQuestStates.has(w.UA.UNENROLLED) &&
                                !(0, v.Ic)(n)
                                    ? (0, i.jsx)(L.A, {
                                          quest: n,
                                          surface: w.V3.ACTIVITY_PANEL,
                                          size: "md",
                                          analyticsCtxQuestContent: A.uF.ACTIVITY_PANEL,
                                          analyticsCtxSourceQuestContent: A.uF.ACTIVITY_PANEL,
                                      })
                                    : (0, i.jsx)(h.$, {
                                          variant: "primary",
                                          text: Q,
                                          onClick: j,
                                          loading: l,
                                          icon: (0, x.Oz)(n),
                                      }),
                            ],
                        }),
                    z &&
                        !$ &&
                        (0, i.jsx)(h.$, {
                            variant: "primary",
                            size: "sm",
                            fullWidth: !0,
                            text: G.intl.string(G.t.VN1Ajl),
                            onClick: Y,
                        }),
                    $ &&
                        (0, i.jsx)(h.$, {
                            variant: "primary",
                            size: "sm",
                            fullWidth: !0,
                            text: G.intl.string(G.t.cfY4PE),
                            onClick: K,
                        }),
                ],
            }),
        ],
    });
}
let H = function (e) {
    return (0, i.jsx)(R.R, {
        questOrQuests: e.quest,
        questContent: A.uF.ACTIVITY_PANEL,
        sourceQuestContent: A.uF.ACTIVITY_PANEL,
        children: (t) => (0, i.jsx)(B, { nodeRef: t, ...e }),
    });
};
