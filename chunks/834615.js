(s.r(e), s.d(e, { default: () => w }));
var i = s(477900),
    n = s(582128),
    a = s(17928),
    l = s(366010),
    r = s(408278),
    o = s(509434),
    c = s(821609),
    u = s(939249),
    d = s(297264),
    A = s(834730),
    m = s(157559),
    C = s(409626),
    T = s(692969),
    g = s(363195),
    I = s(106799),
    N = s(287809),
    h = s(396813),
    x = s(859703),
    E = s(738822),
    P = s(3738),
    f = s(866157),
    _ = s(291749),
    j = s(590202),
    p = s(651892),
    v = s(801365),
    F = s(792620),
    L = s(814793),
    k = s(617986),
    y = s(630037),
    b = s(190107),
    S = s(652215),
    Y = s(375708),
    U = s(376229);
let w = function (t) {
    let { quest: e, onQuestDismiss: s, isStaffPreview: w = !1 } = t,
        Q = (0, a.bG)([x.A], () => x.A.isEnrolling(e.id), [e]),
        V = n.useCallback((t) => {
            t.stopPropagation();
        }, []),
        W = (0, y.D)({ quest: e, questContent: E.uF.ACTIVITY_PANEL, sourceQuestContent: E.uF.ACTIVITY_PANEL }),
        R = e.userStatus?.enrolledAt != null,
        G = e.userStatus?.completedAt != null,
        O = (0, f.fc)(e),
        z = n.useCallback(async () => {
            let { type: t } = await (0, h.Oy)(e.id, {
                questContent: E.uF.ACTIVITY_PANEL,
                questContentCTA: j.Cy.ACCEPT_QUEST,
                sourceQuestContent: E.uF.ACTIVITY_PANEL,
            });
            switch (t) {
                case h.WM.SUCCESS:
                    ((0, h.g5)(e.id, E.uF.ACTIVITY_PANEL),
                        w ? (0, h.L4)(E.uF.ACTIVITY_PANEL, e.id) : s?.(),
                        (0, k.mA)({ fromContent: E.uF.ACTIVITY_PANEL, questId: e.id }));
                    break;
                case h.WM.CAPTCHA_FAILED:
                    m.A.show({ title: Y.intl.string(Y.t["/CidxO"]), body: Y.intl.string(Y.t.HQdHg6) });
                    break;
                case h.WM.UNKNOWN_ERROR:
                    m.A.show({ title: Y.intl.string(Y.t.R0RpRX), body: Y.intl.string(Y.t.OXD41D) });
                case h.WM.PREVIOUS_IN_FLIGHT_REQUEST:
            }
        }, [e, w, s]),
        H = (0, a.bG)([g.A], () => g.A.getState().theme),
        K = (0, l.M)(H) ? S.NJ8.DARK : S.NJ8.LIGHT,
        D = (0, a.bG)([N.default], () => N.default.getCurrentUser()),
        M = (0, v.ks)(e.config),
        q = (0, v.wo)(e.config, D),
        X = (0, v.mH)(e.config, D),
        J = (0, P.mU)({
            quest: e,
            taskDetails: O,
            location: b.rE.ACTIVITY_PANEL,
            sourceQuestContent: E.uF.ACTIVITY_PANEL,
            gameProfileSource: C.GameProfileSources.QuestActivityPanel,
        }),
        $ = (0, _.tW)(e, _.fY.GAME_TILE, K).url,
        B = (0, F.I6)(e) ? (0, F.xc)(e) : (0, F._3)(e)?.[0],
        Z = (0, T.A)({
            applicationId: B,
            location: b.rE.QUEST_INSTRUCTIONS,
            source: C.GameProfileSources.QuestActivityPanel,
        }),
        tt = null != e.config.ctaConfig ? (0, p.Jx)(e.config) : "",
        te = (0, f.do)({
            quest: e,
            content: E.uF.ACTIVITY_PANEL,
            ctaContent: j.Cy.OPEN_GAME_LINK,
            sourceQuestContent: E.uF.ACTIVITY_PANEL,
        }),
        ts = (0, L.vA)(e),
        ti = (0, P.NA)({ quest: e }),
        tn = ts ? ti : Y.intl.string(Y.t.l7E81v),
        ta =
            null != ("" !== tt ? tt : null)
                ? (0, i.jsx)(r.K, {
                      variant: "secondary",
                      size: "sm",
                      icon: o.I,
                      "aria-label": (0, p.wr)(e),
                      onClick: (t) => {
                          (t.stopPropagation(), te());
                      },
                      onKeyPress: V,
                  })
                : null,
        tl = n.useCallback(
            async (t) => {
                (t.stopPropagation(), await z());
            },
            [z],
        ),
        tr = n.useCallback(
            (t) => {
                (t.stopPropagation(), W(t));
            },
            [W],
        ),
        to = (0, i.jsx)(c.$, {
            variant: "primary",
            size: "sm",
            fullWidth: !0,
            text: tn,
            onClick: tl,
            onKeyPress: V,
            loading: Q,
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
                                    children: M
                                        ? Y.intl.format(Y.t["0IUT4Y"], {
                                              rewardWithArticleHook: () =>
                                                  (0, i.jsxs)(i.Fragment, {
                                                      children: [
                                                          (0, i.jsx)(I.A, {
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
                                (0, i.jsx)(A.E, { variant: "text-xs/medium", color: "text-muted", children: J }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: U.uz,
                    children: [
                        !R &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [ta, (0, i.jsx)("div", { className: U.AF, children: to })],
                            }),
                        R &&
                            !G &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    ta,
                                    (0, i.jsx)("div", {
                                        className: U.AF,
                                        children: (0, i.jsx)(c.$, {
                                            variant: "primary",
                                            size: "sm",
                                            fullWidth: !0,
                                            text: tn,
                                            onClick: tl,
                                            onKeyPress: V,
                                            loading: Q,
                                        }),
                                    }),
                                ],
                            }),
                        G &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    ta,
                                    (0, i.jsx)("div", {
                                        className: U.AF,
                                        children: (0, i.jsx)(c.$, {
                                            variant: "primary",
                                            size: "sm",
                                            fullWidth: !0,
                                            text: Y.intl.string(Y.t.cfY4PE),
                                            onClick: tr,
                                            onKeyPress: V,
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
