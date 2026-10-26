(s.r(e), s.d(e, { default: () => V }));
var i = s(477900),
    a = s(582128),
    n = s(17928),
    l = s(366010),
    r = s(408278),
    o = s(509434),
    c = s(821609),
    u = s(939249),
    d = s(297264),
    m = s(834730),
    A = s(157559),
    C = s(409626),
    T = s(692969),
    I = s(363195),
    g = s(106799),
    N = s(287809),
    h = s(427495),
    x = s(859703),
    E = s(738822),
    P = s(3738),
    f = s(77870),
    j = s(291749),
    p = s(590202),
    _ = s(651892),
    v = s(801365),
    F = s(792620),
    L = s(814793),
    k = s(617986),
    y = s(630037),
    S = s(190107),
    b = s(652215),
    Y = s(105292),
    U = s(376229);
let V = function (t) {
    let { quest: e, onQuestDismiss: s, isStaffPreview: V = !1 } = t,
        w = (0, n.bG)([x.A], () => x.A.isEnrolling(e.id), [e]),
        Q = a.useCallback((t) => {
            t.stopPropagation();
        }, []),
        R = (0, y.D)({ quest: e, questContent: E.uF.ACTIVITY_PANEL, sourceQuestContent: E.uF.ACTIVITY_PANEL }),
        W = e.userStatus?.enrolledAt != null,
        G = e.userStatus?.completedAt != null,
        z = (0, f.fc)(e),
        K = a.useCallback(async () => {
            let { type: t } = await (0, h.Oy)(e.id, {
                questContent: E.uF.ACTIVITY_PANEL,
                questContentCTA: p.Cy.ACCEPT_QUEST,
                sourceQuestContent: E.uF.ACTIVITY_PANEL,
            });
            switch (t) {
                case h.WM.SUCCESS:
                    ((0, h.g5)(e.id, E.uF.ACTIVITY_PANEL),
                        V ? (0, h.L4)(E.uF.ACTIVITY_PANEL, e.id) : s?.(),
                        (0, k.mA)({ fromContent: E.uF.ACTIVITY_PANEL, questId: e.id }));
                    break;
                case h.WM.UNKNOWN_ERROR:
                    A.A.show({ title: Y.intl.string(Y.t.R0RpRX), body: Y.intl.string(Y.t.OXD41D) });
                case h.WM.PREVIOUS_IN_FLIGHT_REQUEST:
            }
        }, [e, V, s]),
        O = (0, n.bG)([I.A], () => I.A.getState().theme),
        D = (0, l.M)(O) ? b.NJ8.DARK : b.NJ8.LIGHT,
        M = (0, n.bG)([N.default], () => N.default.getCurrentUser()),
        H = (0, v.ks)(e.config),
        q = (0, v.wo)(e.config, M),
        X = (0, v.mH)(e.config, M),
        J = (0, P.mU)({
            quest: e,
            taskDetails: z,
            location: S.rE.ACTIVITY_PANEL,
            sourceQuestContent: E.uF.ACTIVITY_PANEL,
            gameProfileSource: C.GameProfileSources.QuestActivityPanel,
        }),
        $ = (0, j.tW)(e, j.fY.GAME_TILE, D).url,
        B = (0, F.I6)(e) ? (0, F.xc)(e) : (0, F._3)(e)?.[0],
        Z = (0, T.A)({
            applicationId: B,
            location: S.rE.QUEST_INSTRUCTIONS,
            source: C.GameProfileSources.QuestActivityPanel,
        }),
        tt = null != e.config.ctaConfig ? (0, _.Jx)(e.config) : "",
        te = (0, f.do)({
            quest: e,
            content: E.uF.ACTIVITY_PANEL,
            ctaContent: p.Cy.OPEN_GAME_LINK,
            sourceQuestContent: E.uF.ACTIVITY_PANEL,
        }),
        ts = (0, L.vA)(e),
        ti = (0, P.NA)({ quest: e }),
        ta = ts ? ti : Y.intl.string(Y.t.l7E81v),
        tn =
            null != ("" !== tt ? tt : null)
                ? (0, i.jsx)(r.K, {
                      variant: "secondary",
                      size: "sm",
                      icon: o.I,
                      "aria-label": (0, _.wr)(e),
                      onClick: (t) => {
                          (t.stopPropagation(), te());
                      },
                      onKeyPress: Q,
                  })
                : null,
        tl = a.useCallback(
            async (t) => {
                (t.stopPropagation(), await K());
            },
            [K],
        ),
        tr = a.useCallback(
            (t) => {
                (t.stopPropagation(), R(t));
            },
            [R],
        ),
        to = (0, i.jsx)(c.$, {
            variant: "primary",
            size: "sm",
            fullWidth: !0,
            text: ta,
            onClick: tl,
            onKeyPress: Q,
            loading: w,
            icon: (0, k.Oz)(e),
        });
    return (0, i.jsx)("div", {
        className: U.iE,
        children: (0, i.jsxs)("div", {
            className: U.CU,
            children: [
                (0, i.jsxs)("div", {
                    className: U.wx,
                    children: [
                        null != Z
                            ? (0, i.jsx)(u.D, {
                                  onClick: Z,
                                  className: U.rC,
                                  "aria-label": Y.intl.formatToPlainString(Y.t["8QLQB+"], {
                                      gameName: e.config.messages.gameTitle,
                                  }),
                                  children: (0, i.jsx)("img", { alt: "", src: $ }),
                              })
                            : (0, i.jsx)("img", { className: U.rC, alt: "", src: $ }),
                        (0, i.jsxs)("div", {
                            className: U.Xj,
                            children: [
                                (0, i.jsx)(d.D, {
                                    variant: "heading-sm/semibold",
                                    color: "text-strong",
                                    children: H
                                        ? Y.intl.format(Y.t["0IUT4Y"], {
                                              rewardWithArticleHook: () =>
                                                  (0, i.jsxs)(i.Fragment, {
                                                      children: [
                                                          (0, i.jsx)(g.A, {
                                                              shouldUseThemeColor: !0,
                                                              customSize: 14,
                                                              className: U.tz,
                                                          }),
                                                          Y.intl.format(Y.t["nLXlh+"], { orbAmount: q ?? 0 }),
                                                      ],
                                                  }),
                                          })
                                        : Y.intl.format(Y.t["0IUT4Y"], { rewardWithArticleHook: () => X }),
                                }),
                                (0, i.jsx)(m.E, { variant: "text-xs/medium", color: "text-muted", children: J }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: U.uz,
                    children: [
                        !W &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [tn, (0, i.jsx)("div", { className: U.AF, children: to })],
                            }),
                        W &&
                            !G &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    tn,
                                    (0, i.jsx)("div", {
                                        className: U.AF,
                                        children: (0, i.jsx)(c.$, {
                                            variant: "primary",
                                            size: "sm",
                                            fullWidth: !0,
                                            text: ta,
                                            onClick: tl,
                                            onKeyPress: Q,
                                            loading: w,
                                        }),
                                    }),
                                ],
                            }),
                        G &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    tn,
                                    (0, i.jsx)("div", {
                                        className: U.AF,
                                        children: (0, i.jsx)(c.$, {
                                            variant: "primary",
                                            size: "sm",
                                            fullWidth: !0,
                                            text: Y.intl.string(Y.t.cfY4PE),
                                            onClick: tr,
                                            onKeyPress: Q,
                                        }),
                                    }),
                                ],
                            }),
                    ],
                }),
            ],
        }),
    });
};
