n.d(t, { A: () => w });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(311907),
    o = n(397927),
    d = n(409626),
    c = n(544028),
    u = n(829219),
    A = n(859703),
    h = n(341915),
    _ = n(112142),
    m = n(714510),
    p = n(890687),
    g = n(579473),
    E = n(18437),
    I = n(590202),
    f = n(710969),
    C = n(814793),
    T = n(73473),
    N = n(270045),
    S = n(201805),
    x = n(212614),
    v = n(79545),
    y = n(847641),
    b = n(311243),
    O = n(545986),
    L = n(654487),
    R = n(652215),
    P = n(985018),
    D = n(122530);
function M(e) {
    let { quest: t } = e,
        n = (0, p.S5)(t.config.expiresAt),
        l = (0, p.S5)(t.config.rewardsConfig.rewardsExpireAt),
        a = (0, s.bG)([c.A], () => c.A.getState().theme),
        r = (0, o.Mwr)(a) ? R.NJ8.DARK : R.NJ8.LIGHT,
        d = t.userStatus?.completedAt != null;
    return (0, i.jsxs)("div", {
        className: D.R_,
        children: [
            (0, i.jsx)("img", { className: D.tb, alt: "", src: (0, g.tW)(t, g.fY.GAME_TILE, r).url }),
            (0, i.jsxs)("div", {
                className: D.UD,
                children: [
                    (0, i.jsx)(o.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: d
                            ? P.intl.string(P.t.XBboAK)
                            : P.intl.formatToPlainString(P.t.EQa7os, { questName: t.config.messages.questName }),
                    }),
                    (0, i.jsx)(o.Text, {
                        variant: "text-xs/normal",
                        color: "text-default",
                        children: d
                            ? P.intl.formatToPlainString(P.t.APddvF, { expirationDate: l })
                            : P.intl.formatToPlainString(P.t["pX+fmn"], { expirationDate: n }),
                    }),
                ],
            }),
        ],
    });
}
function j(e) {
    let { nodeRef: t, quest: n } = e,
        a = (0, E.Ut)(),
        c = (0, s.bG)([A.A], () => A.A.isEnrolling(n.id), [n]),
        [g, T] = l.useState(!1),
        R = l.useCallback(() => T(!0), []),
        j = l.useCallback(() => T(!1), []),
        { launchInGameActivity: w } = (0, p.zW)(n),
        U = _.t.useConfig({ location: L.rE.ACTIVITY_PANEL }),
        G = (0, v.Pd)(n),
        k = l.useCallback((e) => {
            e.stopPropagation();
        }, []),
        V = l.useCallback(() => {
            (0, u.Oy)(n.id, {
                questContent: h.uF.ACTIVITY_PANEL,
                questContentCTA: I.Cy.ACCEPT_QUEST,
                sourceQuestContent: h.uF.ACTIVITY_PANEL,
            }),
                (0, C.vA)(n) && w();
        }, [n, w]),
        B = l.useCallback(() => {
            null != n &&
                (a({
                    questId: n.id,
                    questContent: h.uF.ACTIVITY_PANEL,
                    questContentCTA: I.Cy.TRACK_PROGRESS,
                    sourceQuestContent: h.uF.ACTIVITY_PANEL,
                }),
                (0, O.navigateToQuestHome)({ fromContent: h.uF.ACTIVITY_PANEL, questId: n.id }));
        }, [n, a]),
        H = l.useCallback(() => {
            a({
                questId: n.id,
                questContent: h.uF.ACTIVITY_PANEL,
                questContentCTA: I.Cy.LEARN_MORE,
                sourceQuestContent: h.uF.ACTIVITY_PANEL,
            }),
                (0, O.navigateToQuestHome)({ fromContent: h.uF.ACTIVITY_PANEL, questId: n.id });
        }, [n.id, a]),
        F = (0, S.ix)({ quest: n, questContent: h.uF.ACTIVITY_PANEL, sourceQuestContent: h.uF.ACTIVITY_PANEL }),
        Y = n.userStatus?.enrolledAt != null,
        W = n.userStatus?.completedAt != null,
        K = (0, p.fc)(n),
        q = (0, m.mU)({
            quest: n,
            taskDetails: K,
            location: L.rE.ACTIVITY_PANEL,
            questContent: h.uF.ACTIVITY_PANEL,
            sourceQuestContent: h.uF.ACTIVITY_PANEL,
            gameProfileSource: d.Ob.QuestActivityPanel,
        }),
        z = (0, C.vA)(n),
        $ = (0, m.NA)({ quest: n }),
        Q = z ? $ : P.intl.string(P.t.l7E81v);
    return (0, i.jsxs)("div", {
        ref: (e) => {
            t.current = e;
        },
        className: r()(D.iE, { [D.tJ]: Y }),
        onClick: k,
        onKeyPress: k,
        onFocus: R,
        onMouseEnter: R,
        onBlur: j,
        onMouseLeave: j,
        children: [
            (0, i.jsxs)("div", {
                className: D.Wp,
                children: [
                    Y ? (0, i.jsx)(M, { quest: n }) : (0, i.jsx)(y.A, {}),
                    (0, i.jsx)(N.C, {
                        quest: n,
                        questContent: h.uF.ACTIVITY_PANEL,
                        shouldShowDisclosure: n.userStatus?.enrolledAt == null,
                        showShareLink: !0,
                        sourceQuestContent: h.uF.ACTIVITY_PANEL,
                        children: (e) =>
                            (0, i.jsx)(o.DUT, {
                                ...e,
                                "aria-label": P.intl.string(P.t.DEoVWZ),
                                children: (0, i.jsx)(o.jNK, { size: "md", color: "currentColor", className: D.Bx }),
                            }),
                    }),
                ],
            }),
            !Y &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(M, { quest: n }),
                        (0, i.jsx)("div", {
                            className: D.GA,
                            children: (0, i.jsx)(o.Text, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: q,
                            }),
                        }),
                    ],
                }),
            Y &&
                !W &&
                (0, i.jsx)(b.A, {
                    autoplay: g,
                    className: D.t3,
                    quest: n,
                    questContent: h.uF.ACTIVITY_PANEL,
                    location: L.rE.ACTIVITY_PANEL,
                    taskDetails: K,
                    sourceQuestContent: h.uF.ACTIVITY_PANEL,
                    gameProfileSource: d.Ob.QuestActivityPanel,
                }),
            (0, i.jsxs)("div", {
                className: D.uz,
                children: [
                    !Y &&
                        (0, i.jsxs)(o.ButtonGroup, {
                            size: "sm",
                            direction: z ? "vertical" : "horizontal",
                            fullWidth: !0,
                            children: [
                                (0, i.jsx)(o.Button, {
                                    variant: "secondary",
                                    text: P.intl.string(P.t.LLLLPD),
                                    onClick: H,
                                }),
                                U.enabled &&
                                G === v.UA.UNENROLLED &&
                                U.enabledQuestStates.has(v.UA.UNENROLLED) &&
                                !(0, f.Ic)(n)
                                    ? (0, i.jsx)(x.A, {
                                          quest: n,
                                          surface: v.V3.ACTIVITY_PANEL,
                                          size: "md",
                                          analyticsCtxQuestContent: h.uF.ACTIVITY_PANEL,
                                          analyticsCtxSourceQuestContent: h.uF.ACTIVITY_PANEL,
                                      })
                                    : (0, i.jsx)(o.Button, {
                                          variant: "primary",
                                          text: Q,
                                          onClick: V,
                                          loading: c,
                                          icon: (0, O.Oz)(n),
                                      }),
                            ],
                        }),
                    Y &&
                        !W &&
                        (0, i.jsx)(o.Button, {
                            variant: "primary",
                            size: "sm",
                            fullWidth: !0,
                            text: P.intl.string(P.t.VN1Ajl),
                            onClick: B,
                        }),
                    W &&
                        (0, i.jsx)(o.Button, {
                            variant: "primary",
                            size: "sm",
                            fullWidth: !0,
                            text: P.intl.string(P.t.cfY4PE),
                            onClick: F,
                        }),
                ],
            }),
        ],
    });
}
let w = function (e) {
    return (0, i.jsx)(T.R, {
        questOrQuests: e.quest,
        questContent: h.uF.ACTIVITY_PANEL,
        sourceQuestContent: h.uF.ACTIVITY_PANEL,
        children: (t) => (0, i.jsx)(j, { nodeRef: t, ...e }),
    });
};
