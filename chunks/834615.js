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
    h = n(825484),
    f = n(821609),
    p = n(409626),
    E = n(363195),
    m = n(340124),
    g = n(859703),
    A = n(507107),
    I = n(112142),
    T = n(629455),
    S = n(31587),
    y = n(551875),
    N = n(18437),
    v = n(590202),
    C = n(710969),
    R = n(814793),
    O = n(73473),
    b = n(270045),
    D = n(192551),
    L = n(79545),
    w = n(847641),
    M = n(311243),
    P = n(617986),
    x = n(795965),
    k = n(190107),
    U = n(652215),
    G = n(375708),
    F = n(383218);
function V(e) {
    let { quest: t } = e,
        n = (0, S.S5)(t.config.expiresAt),
        r = (0, S.S5)(t.config.rewardsConfig.rewardsExpireAt),
        s = (0, o.bG)([E.A], () => E.A.getState().theme),
        a = (0, l.M)(s) ? U.NJ8.DARK : U.NJ8.LIGHT,
        d = t.userStatus?.completedAt != null;
    return (0, i.jsxs)("div", {
        className: F.R_,
        children: [
            (0, i.jsx)("img", { className: F.tb, alt: "", src: (0, y.tW)(t, y.fY.GAME_TILE, a).url }),
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
        s = (0, N.Ut)(),
        l = (0, o.bG)([g.A], () => g.A.isEnrolling(n.id), [n]),
        [u, c] = r.useState(!1),
        E = r.useCallback(() => c(!0), []),
        y = r.useCallback(() => c(!1), []),
        { launchInGameActivity: O } = (0, S.zW)(n),
        U = I.t.useConfig({ location: k.rE.ACTIVITY_PANEL }),
        B = (0, L.Pd)(n),
        H = r.useCallback((e) => {
            e.stopPropagation();
        }, []),
        j = r.useCallback(() => {
            (0, m.Oy)(n.id, {
                questContent: A.uF.ACTIVITY_PANEL,
                questContentCTA: v.Cy.ACCEPT_QUEST,
                sourceQuestContent: A.uF.ACTIVITY_PANEL,
            }),
                (0, R.vA)(n) && O();
        }, [n, O]),
        Y = r.useCallback(() => {
            null != n &&
                (s({
                    questId: n.id,
                    questContent: A.uF.ACTIVITY_PANEL,
                    questContentCTA: v.Cy.TRACK_PROGRESS,
                    sourceQuestContent: A.uF.ACTIVITY_PANEL,
                }),
                (0, P.navigateToQuestHome)({ fromContent: A.uF.ACTIVITY_PANEL, questId: n.id }));
        }, [n, s]),
        W = r.useCallback(() => {
            s({
                questId: n.id,
                questContent: A.uF.ACTIVITY_PANEL,
                questContentCTA: v.Cy.LEARN_MORE,
                sourceQuestContent: A.uF.ACTIVITY_PANEL,
            }),
                (0, P.navigateToQuestHome)({ fromContent: A.uF.ACTIVITY_PANEL, questId: n.id });
        }, [n.id, s]),
        K = (0, x.D)({
            quest: n,
            questContent: A.uF.ACTIVITY_PANEL,
            sourceQuestContent: A.uF.ACTIVITY_PANEL,
            experimentLocation: k.rE.ACTIVITY_PANEL,
        }),
        $ = n.userStatus?.enrolledAt != null,
        z = n.userStatus?.completedAt != null,
        q = (0, S.fc)(n),
        X = (0, R.vA)(n),
        Z = (0, T.NA)({ quest: n }),
        Q = X ? Z : G.intl.string(G.t.l7E81v);
    return (0, i.jsxs)("div", {
        ref: (e) => {
            t.current = e;
        },
        className: a()(F.iE, { [F.tJ]: $ }),
        onClick: H,
        onKeyPress: H,
        onFocus: E,
        onMouseEnter: E,
        onBlur: y,
        onMouseLeave: y,
        children: [
            (0, i.jsxs)("div", {
                className: F.Wp,
                children: [
                    $ ? (0, i.jsx)(V, { quest: n }) : (0, i.jsx)(w.A, {}),
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
            !$ &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(V, { quest: n }),
                        (0, i.jsx)(M.A, {
                            autoplay: u,
                            className: F.t3,
                            quest: n,
                            questContent: A.uF.ACTIVITY_PANEL,
                            location: k.rE.ACTIVITY_PANEL,
                            taskDetails: q,
                            sourceQuestContent: A.uF.ACTIVITY_PANEL,
                            gameProfileSource: p.Ob.QuestActivityPanel,
                        }),
                    ],
                }),
            $ &&
                !z &&
                (0, i.jsx)(M.A, {
                    autoplay: u,
                    className: F.t3,
                    quest: n,
                    questContent: A.uF.ACTIVITY_PANEL,
                    location: k.rE.ACTIVITY_PANEL,
                    taskDetails: q,
                    sourceQuestContent: A.uF.ACTIVITY_PANEL,
                    gameProfileSource: p.Ob.QuestActivityPanel,
                }),
            (0, i.jsxs)("div", {
                className: F.uz,
                children: [
                    !$ &&
                        (0, i.jsxs)(h.e, {
                            size: "sm",
                            direction: X ? "vertical" : "horizontal",
                            fullWidth: !0,
                            children: [
                                (0, i.jsx)(f.$, { variant: "secondary", text: G.intl.string(G.t.LLLLPD), onClick: W }),
                                U.enabled &&
                                B === L.UA.UNENROLLED &&
                                U.enabledQuestStates.has(L.UA.UNENROLLED) &&
                                !(0, C.Ic)(n)
                                    ? (0, i.jsx)(D.A, {
                                          quest: n,
                                          surface: L.V3.ACTIVITY_PANEL,
                                          size: "md",
                                          analyticsCtxQuestContent: A.uF.ACTIVITY_PANEL,
                                          analyticsCtxSourceQuestContent: A.uF.ACTIVITY_PANEL,
                                      })
                                    : (0, i.jsx)(f.$, {
                                          variant: "primary",
                                          text: Q,
                                          onClick: j,
                                          loading: l,
                                          icon: (0, P.Oz)(n),
                                      }),
                            ],
                        }),
                    $ &&
                        !z &&
                        (0, i.jsx)(f.$, {
                            variant: "primary",
                            size: "sm",
                            fullWidth: !0,
                            text: G.intl.string(G.t.VN1Ajl),
                            onClick: Y,
                        }),
                    z &&
                        (0, i.jsx)(f.$, {
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
    return (0, i.jsx)(O.R, {
        questOrQuests: e.quest,
        questContent: A.uF.ACTIVITY_PANEL,
        sourceQuestContent: A.uF.ACTIVITY_PANEL,
        children: (t) => (0, i.jsx)(B, { nodeRef: t, ...e }),
    });
};
