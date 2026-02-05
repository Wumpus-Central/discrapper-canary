n.d(t, { A: () => M });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(311907),
    o = n(397927),
    d = n(409626),
    c = n(544028),
    u = n(829219),
    A = n(859703),
    h = n(341915),
    _ = n(33621),
    m = n(714510),
    p = n(890687),
    g = n(579473),
    E = n(18437),
    f = n(590202),
    I = n(710969),
    C = n(814793),
    N = n(73473),
    T = n(270045),
    S = n(201805),
    x = n(212614),
    v = n(79545),
    b = n(847641),
    y = n(311243),
    L = n(545986),
    O = n(654487),
    R = n(652215),
    P = n(985018),
    j = n(502511);
function D(e) {
    let { quest: t } = e,
        n = (0, p.S5)(t.config.expiresAt),
        r = (0, p.S5)(t.config.rewardsConfig.rewardsExpireAt),
        a = (0, s.bG)([c.A], () => c.A.getState().theme),
        l = (0, o.Mwr)(a) ? R.NJ8.DARK : R.NJ8.LIGHT,
        d = t.userStatus?.completedAt != null;
    return (0, i.jsxs)("div", {
        className: j.R_,
        children: [
            (0, i.jsx)("img", { className: j.tb, alt: "", src: (0, g.tW)(t, g.fY.GAME_TILE, l).url }),
            (0, i.jsxs)("div", {
                className: j.UD,
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
                            ? P.intl.formatToPlainString(P.t.APddvF, { expirationDate: r })
                            : P.intl.formatToPlainString(P.t["pX+fmn"], { expirationDate: n }),
                    }),
                ],
            }),
        ],
    });
}
function w(e) {
    let { nodeRef: t, quest: n } = e,
        a = (0, E.Ut)(),
        c = (0, s.bG)([A.A], () => A.A.isEnrolling(n.id), [n]),
        [g, N] = r.useState(!1),
        R = r.useCallback(() => N(!0), []),
        w = r.useCallback(() => N(!1), []),
        { launchInGameActivity: M } = (0, p.zW)(n),
        U = _.t.useConfig({ location: O.rE.ACTIVITY_PANEL }),
        G = (0, v.P)(n),
        k = r.useCallback((e) => {
            e.stopPropagation();
        }, []),
        V = r.useCallback(() => {
            (0, u.Oy)(n.id, {
                questContent: h.uF.ACTIVITY_PANEL,
                questContentCTA: f.Cy.ACCEPT_QUEST,
                sourceQuestContent: h.uF.ACTIVITY_PANEL,
            }),
                (0, C.vA)(n) && M();
        }, [n, M]),
        B = r.useCallback(() => {
            null != n &&
                (a({
                    questId: n.id,
                    questContent: h.uF.ACTIVITY_PANEL,
                    questContentCTA: f.Cy.TRACK_PROGRESS,
                    sourceQuestContent: h.uF.ACTIVITY_PANEL,
                }),
                (0, L.navigateToQuestHome)({ fromContent: h.uF.ACTIVITY_PANEL, questId: n.id }));
        }, [n, a]),
        H = r.useCallback(() => {
            a({
                questId: n.id,
                questContent: h.uF.ACTIVITY_PANEL,
                questContentCTA: f.Cy.LEARN_MORE,
                sourceQuestContent: h.uF.ACTIVITY_PANEL,
            }),
                (0, L.navigateToQuestHome)({ fromContent: h.uF.ACTIVITY_PANEL, questId: n.id });
        }, [n.id, a]),
        F = (0, S.ix)({ quest: n, questContent: h.uF.ACTIVITY_PANEL, sourceQuestContent: h.uF.ACTIVITY_PANEL }),
        Y = n.userStatus?.enrolledAt != null,
        W = n.userStatus?.completedAt != null,
        q = (0, p.fc)(n),
        z = (0, m.mU)({
            quest: n,
            taskDetails: q,
            location: O.rE.ACTIVITY_PANEL,
            questContent: h.uF.ACTIVITY_PANEL,
            sourceQuestContent: h.uF.ACTIVITY_PANEL,
            gameProfileSource: d.Ob.QuestActivityPanel,
        }),
        K = (0, C.vA)(n),
        $ = (0, m.NA)({ quest: n }),
        Q = K ? $ : P.intl.string(P.t.l7E81v);
    return (0, i.jsxs)("div", {
        ref: (e) => {
            t.current = e;
        },
        className: l()(j.iE, { [j.tJ]: Y }),
        onClick: k,
        onKeyPress: k,
        onFocus: R,
        onMouseEnter: R,
        onBlur: w,
        onMouseLeave: w,
        children: [
            (0, i.jsxs)("div", {
                className: j.Wp,
                children: [
                    Y ? (0, i.jsx)(D, { quest: n }) : (0, i.jsx)(b.A, {}),
                    (0, i.jsx)(T.C, {
                        quest: n,
                        questContent: h.uF.ACTIVITY_PANEL,
                        shouldShowDisclosure: n.userStatus?.enrolledAt == null,
                        showShareLink: !0,
                        sourceQuestContent: h.uF.ACTIVITY_PANEL,
                        children: (e) =>
                            (0, i.jsx)(o.DUT, {
                                ...e,
                                "aria-label": P.intl.string(P.t.DEoVWZ),
                                children: (0, i.jsx)(o.jNK, { size: "md", color: "currentColor", className: j.Bx }),
                            }),
                    }),
                ],
            }),
            !Y &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(D, { quest: n }),
                        (0, i.jsx)("div", {
                            className: j.GA,
                            children: (0, i.jsx)(o.Text, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: z,
                            }),
                        }),
                    ],
                }),
            Y &&
                !W &&
                (0, i.jsx)(y.A, {
                    autoplay: g,
                    className: j.t3,
                    quest: n,
                    questContent: h.uF.ACTIVITY_PANEL,
                    location: O.rE.ACTIVITY_PANEL,
                    taskDetails: q,
                    sourceQuestContent: h.uF.ACTIVITY_PANEL,
                    gameProfileSource: d.Ob.QuestActivityPanel,
                }),
            (0, i.jsxs)("div", {
                className: j.uz,
                children: [
                    !Y &&
                        (0, i.jsxs)(o.ButtonGroup, {
                            size: "sm",
                            direction: K ? "vertical" : "horizontal",
                            fullWidth: !0,
                            children: [
                                (0, i.jsx)(o.Button, {
                                    variant: "secondary",
                                    text: P.intl.string(P.t.LLLLPD),
                                    onClick: H,
                                }),
                                U.enabled &&
                                G === v.U.UNENROLLED &&
                                U.enabledQuestStates.has(v.U.UNENROLLED) &&
                                !(0, I.Ic)(n)
                                    ? (0, i.jsx)(x.A, {
                                          quest: n,
                                          size: "md",
                                          analyticsCtxQuestContent: h.uF.ACTIVITY_PANEL,
                                          analyticsCtxSourceQuestContent: h.uF.ACTIVITY_PANEL,
                                      })
                                    : (0, i.jsx)(o.Button, {
                                          variant: "primary",
                                          text: Q,
                                          onClick: V,
                                          loading: c,
                                          icon: (0, L.Oz)(n),
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
let M = function (e) {
    return (0, i.jsx)(N.R, {
        questOrQuests: e.quest,
        questContent: h.uF.ACTIVITY_PANEL,
        sourceQuestContent: h.uF.ACTIVITY_PANEL,
        children: (t) => (0, i.jsx)(w, { nodeRef: t, ...e }),
    });
};
