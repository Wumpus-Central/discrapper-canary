"use strict";
n.d(t, { A: () => $ });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(323889),
    l = n(17928),
    u = n(366010),
    c = n(534514),
    d = n(834730),
    _ = n(939249),
    h = n(365199),
    f = n(825484),
    p = n(821609),
    E = n(274670),
    m = n(144779),
    g = n(409626),
    A = n(363195),
    I = n(340124),
    T = n(859703),
    S = n(507107),
    y = n(104886),
    N = n(112142),
    v = n(3738),
    C = n(31587),
    R = n(551875),
    O = n(18437),
    b = n(590202),
    D = n(971649),
    L = n(710969),
    w = n(814793),
    M = n(73473),
    P = n(270045),
    x = n(192551),
    k = n(79545),
    U = n(847641),
    G = n(311243),
    F = n(617986),
    V = n(795965),
    B = n(190107),
    H = n(652215),
    j = n(375708),
    Y = n(383218);
function W(e) {
    let { quest: t } = e,
        n = (0, C.S5)(t.config.expiresAt),
        r = (0, C.S5)(t.config.rewardsConfig.rewardsExpireAt),
        s = (0, l.bG)([A.A], () => A.A.getState().theme),
        a = (0, u.M)(s) ? H.NJ8.DARK : H.NJ8.LIGHT,
        o = t.userStatus?.completedAt != null;
    return (0, i.jsxs)("div", {
        className: Y.R_,
        children: [
            (0, i.jsx)("img", { className: Y.tb, alt: "", src: (0, R.tW)(t, R.fY.GAME_TILE, a).url }),
            (0, i.jsxs)("div", {
                className: Y.UD,
                children: [
                    (0, i.jsx)(c.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: o
                            ? j.intl.string(j.t.XBboAK)
                            : j.intl.formatToPlainString(j.t.EQa7os, { questName: t.config.messages.questName }),
                    }),
                    (0, i.jsx)(d.E, {
                        variant: "text-xs/normal",
                        color: "text-default",
                        children: o
                            ? j.intl.formatToPlainString(j.t.APddvF, { expirationDate: r })
                            : j.intl.formatToPlainString(j.t["pX+fmn"], { expirationDate: n }),
                    }),
                ],
            }),
        ],
    });
}
function K(e) {
    let { nodeRef: t, quest: n } = e,
        s = (0, O.Ut)(),
        u = (0, D.go)(),
        c = (0, l.bG)([T.A], () => T.A.isEnrolling(n.id), [n]),
        [d, A] = r.useState(!1),
        R = r.useCallback(() => A(!0), []),
        M = r.useCallback(() => A(!1), []),
        { launchInGameActivity: H } = (0, C.zW)(n),
        K = N.t.useConfig({ location: B.rE.ACTIVITY_PANEL }),
        $ = (0, k.Pd)(n),
        z = r.useCallback((e) => {
            e.stopPropagation();
        }, []),
        q = r.useCallback(() => {
            (0, I.Oy)(n.id, {
                questContent: S.uF.ACTIVITY_PANEL,
                questContentCTA: b.Cy.ACCEPT_QUEST,
                sourceQuestContent: S.uF.ACTIVITY_PANEL,
            }),
                (0, w.vA)(n) && H();
        }, [n, H]),
        X = r.useCallback(() => {
            null != n &&
                ((0, y.E5)(y.kI.STEP_2_CLICKED_INTERNAL, "quest_activity_panel_item")
                    ? (0, E.r)({
                          type: m.F.CLICK_INTERNAL,
                          adCreativeType: o.p.QUEST,
                          adCreativeId: n.id,
                          questContentCTA: b.Cy.TRACK_PROGRESS,
                          surfaceId: S.uF.ACTIVITY_PANEL,
                          sourceQuestContent: S.uF.ACTIVITY_PANEL,
                          impressionId: u,
                      })
                    : s({
                          questId: n.id,
                          questContent: S.uF.ACTIVITY_PANEL,
                          questContentCTA: b.Cy.TRACK_PROGRESS,
                          sourceQuestContent: S.uF.ACTIVITY_PANEL,
                      }),
                (0, F.navigateToQuestHome)({ fromContent: S.uF.ACTIVITY_PANEL, questId: n.id }));
        }, [n, s, u]),
        Z = r.useCallback(() => {
            (0, y.E5)(y.kI.STEP_2_CLICKED_INTERNAL, "quest_activity_panel_item")
                ? (0, E.r)({
                      type: m.F.CLICK_INTERNAL,
                      adCreativeType: o.p.QUEST,
                      adCreativeId: n.id,
                      questContentCTA: b.Cy.LEARN_MORE,
                      surfaceId: S.uF.ACTIVITY_PANEL,
                      sourceQuestContent: S.uF.ACTIVITY_PANEL,
                      impressionId: u,
                  })
                : s({
                      questId: n.id,
                      questContent: S.uF.ACTIVITY_PANEL,
                      questContentCTA: b.Cy.LEARN_MORE,
                      sourceQuestContent: S.uF.ACTIVITY_PANEL,
                  }),
                (0, F.navigateToQuestHome)({ fromContent: S.uF.ACTIVITY_PANEL, questId: n.id });
        }, [n.id, s, u]),
        Q = (0, V.D)({
            quest: n,
            questContent: S.uF.ACTIVITY_PANEL,
            sourceQuestContent: S.uF.ACTIVITY_PANEL,
            experimentLocation: B.rE.ACTIVITY_PANEL,
        }),
        J = n.userStatus?.enrolledAt != null,
        ee = n.userStatus?.completedAt != null,
        et = (0, C.fc)(n),
        en = (0, w.vA)(n),
        ei = (0, v.NA)({ quest: n }),
        er = en ? ei : j.intl.string(j.t.l7E81v);
    return (0, i.jsxs)("div", {
        ref: (e) => {
            t.current = e;
        },
        className: a()(Y.iE, { [Y.tJ]: J }),
        onClick: z,
        onKeyPress: z,
        onFocus: R,
        onMouseEnter: R,
        onBlur: M,
        onMouseLeave: M,
        children: [
            (0, i.jsxs)("div", {
                className: Y.Wp,
                children: [
                    J ? (0, i.jsx)(W, { quest: n }) : (0, i.jsx)(U.A, {}),
                    (0, i.jsx)(P.C, {
                        quest: n,
                        questContent: S.uF.ACTIVITY_PANEL,
                        shouldShowDisclosure: n.userStatus?.enrolledAt == null,
                        showShareLink: !0,
                        sourceQuestContent: S.uF.ACTIVITY_PANEL,
                        children: (e) =>
                            (0, i.jsx)(_.D, {
                                ...e,
                                "aria-label": j.intl.string(j.t.DEoVWZ),
                                children: (0, i.jsx)(h.j, { size: "md", color: "currentColor", className: Y.Bx }),
                            }),
                    }),
                ],
            }),
            !J &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(W, { quest: n }),
                        (0, i.jsx)(G.A, {
                            autoplay: d,
                            className: Y.t3,
                            quest: n,
                            questContent: S.uF.ACTIVITY_PANEL,
                            location: B.rE.ACTIVITY_PANEL,
                            taskDetails: et,
                            sourceQuestContent: S.uF.ACTIVITY_PANEL,
                            gameProfileSource: g.Ob.QuestActivityPanel,
                        }),
                    ],
                }),
            J &&
                !ee &&
                (0, i.jsx)(G.A, {
                    autoplay: d,
                    className: Y.t3,
                    quest: n,
                    questContent: S.uF.ACTIVITY_PANEL,
                    location: B.rE.ACTIVITY_PANEL,
                    taskDetails: et,
                    sourceQuestContent: S.uF.ACTIVITY_PANEL,
                    gameProfileSource: g.Ob.QuestActivityPanel,
                }),
            (0, i.jsxs)("div", {
                className: Y.uz,
                children: [
                    !J &&
                        (0, i.jsxs)(f.e, {
                            size: "sm",
                            direction: en ? "vertical" : "horizontal",
                            fullWidth: !0,
                            children: [
                                (0, i.jsx)(p.$, { variant: "secondary", text: j.intl.string(j.t.LLLLPD), onClick: Z }),
                                K.enabled &&
                                $ === k.UA.UNENROLLED &&
                                K.enabledQuestStates.has(k.UA.UNENROLLED) &&
                                !(0, L.Ic)(n)
                                    ? (0, i.jsx)(x.A, {
                                          quest: n,
                                          surface: k.V3.ACTIVITY_PANEL,
                                          size: "md",
                                          analyticsCtxQuestContent: S.uF.ACTIVITY_PANEL,
                                          analyticsCtxSourceQuestContent: S.uF.ACTIVITY_PANEL,
                                      })
                                    : (0, i.jsx)(p.$, {
                                          variant: "primary",
                                          text: er,
                                          onClick: q,
                                          loading: c,
                                          icon: (0, F.Oz)(n),
                                      }),
                            ],
                        }),
                    J &&
                        !ee &&
                        (0, i.jsx)(p.$, {
                            variant: "primary",
                            size: "sm",
                            fullWidth: !0,
                            text: j.intl.string(j.t.VN1Ajl),
                            onClick: X,
                        }),
                    ee &&
                        (0, i.jsx)(p.$, {
                            variant: "primary",
                            size: "sm",
                            fullWidth: !0,
                            text: j.intl.string(j.t.cfY4PE),
                            onClick: Q,
                        }),
                ],
            }),
        ],
    });
}
let $ = function (e) {
    return (0, i.jsx)(M.R, {
        questOrQuests: e.quest,
        questContent: S.uF.ACTIVITY_PANEL,
        sourceQuestContent: S.uF.ACTIVITY_PANEL,
        children: (t) => (0, i.jsx)(K, { nodeRef: t, ...e }),
    });
};
