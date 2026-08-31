s.r(e), s.d(e, { default: () => Y });
var i = s(477900),
    n = s(582128),
    a = s(17928),
    l = s(366010),
    r = s(408278),
    o = s(509434),
    c = s(821609),
    u = s(297264),
    d = s(834730),
    A = s(157559),
    C = s(409626),
    m = s(363195),
    I = s(106799),
    T = s(287809),
    h = s(396813),
    g = s(859703),
    x = s(738822),
    N = s(3738),
    E = s(309593),
    P = s(291749),
    f = s(590202),
    _ = s(651892),
    j = s(801365),
    p = s(814793),
    F = s(617986),
    v = s(630037),
    L = s(190107),
    k = s(652215),
    y = s(375708),
    b = s(376229);
let Y = function (t) {
    let { quest: e, onQuestDismiss: s, isStaffPreview: Y = !1 } = t,
        w = (0, a.bG)([g.A], () => g.A.isEnrolling(e.id), [e]),
        S = n.useCallback((t) => {
            t.stopPropagation();
        }, []),
        V = (0, v.D)({ quest: e, questContent: x.uF.ACTIVITY_PANEL, sourceQuestContent: x.uF.ACTIVITY_PANEL }),
        U = e.userStatus?.enrolledAt != null,
        W = e.userStatus?.completedAt != null,
        R = (0, E.fc)(e),
        z = n.useCallback(async () => {
            let { type: t } = await (0, h.Oy)(e.id, {
                questContent: x.uF.ACTIVITY_PANEL,
                questContentCTA: f.Cy.ACCEPT_QUEST,
                sourceQuestContent: x.uF.ACTIVITY_PANEL,
            });
            switch (t) {
                case h.WM.SUCCESS:
                    (0, h.g5)(e.id, x.uF.ACTIVITY_PANEL),
                        Y ? (0, h.L4)(x.uF.ACTIVITY_PANEL, e.id) : s?.(),
                        (0, F.mA)({ fromContent: x.uF.ACTIVITY_PANEL, questId: e.id });
                    break;
                case h.WM.CAPTCHA_FAILED:
                    A.A.show({ title: y.intl.string(y.t["/CidxO"]), body: y.intl.string(y.t.HQdHg6) });
                    break;
                case h.WM.UNKNOWN_ERROR:
                    A.A.show({ title: y.intl.string(y.t.R0RpRX), body: y.intl.string(y.t.OXD41D) });
                case h.WM.PREVIOUS_IN_FLIGHT_REQUEST:
            }
        }, [e, Y, s]),
        G = (0, a.bG)([m.A], () => m.A.getState().theme),
        H = (0, l.M)(G) ? k.NJ8.DARK : k.NJ8.LIGHT,
        K = (0, a.bG)([T.default], () => T.default.getCurrentUser()),
        O = (0, j.ks)(e.config),
        Q = (0, j.wo)(e.config, K),
        M = (0, j.mH)(e.config, K),
        D = (0, N.mU)({
            quest: e,
            taskDetails: R,
            location: L.rE.ACTIVITY_PANEL,
            sourceQuestContent: x.uF.ACTIVITY_PANEL,
            gameProfileSource: C.GameProfileSources.QuestActivityPanel,
        }),
        q = (0, P.tW)(e, P.fY.GAME_TILE, H).url,
        X = null != e.config.ctaConfig ? (0, _.Jx)(e.config) : "",
        J = (0, E.do)({
            quest: e,
            content: x.uF.ACTIVITY_PANEL,
            ctaContent: f.Cy.OPEN_GAME_LINK,
            sourceQuestContent: x.uF.ACTIVITY_PANEL,
        }),
        $ = (0, p.vA)(e),
        B = (0, N.NA)({ quest: e }),
        Z = $ ? B : y.intl.string(y.t.l7E81v),
        tt =
            null != ("" !== X ? X : null)
                ? (0, i.jsx)(r.K, {
                      variant: "secondary",
                      size: "sm",
                      icon: o.I,
                      "aria-label": (0, _.wr)(e),
                      onClick: (t) => {
                          t.stopPropagation(), J();
                      },
                      onKeyPress: S,
                  })
                : null,
        te = n.useCallback(
            async (t) => {
                t.stopPropagation(), await z();
            },
            [z],
        ),
        ts = n.useCallback(
            (t) => {
                t.stopPropagation(), V(t);
            },
            [V],
        ),
        ti = (0, i.jsx)(c.$, {
            variant: "primary",
            size: "sm",
            fullWidth: !0,
            text: Z,
            onClick: te,
            onKeyPress: S,
            loading: w,
            icon: (0, F.Oz)(e),
        });
    return (0, i.jsx)("div", {
        className: b.iE,
        children: (0, i.jsxs)("div", {
            className: b.CU,
            children: [
                (0, i.jsxs)("div", {
                    className: b.wx,
                    children: [
                        (0, i.jsx)("img", { className: b.rC, alt: "", src: q }),
                        (0, i.jsxs)("div", {
                            className: b.Xj,
                            children: [
                                (0, i.jsx)(u.D, {
                                    variant: "heading-sm/semibold",
                                    color: "text-strong",
                                    children: O
                                        ? y.intl.format(y.t["0IUT4Y"], {
                                              rewardWithArticleHook: () =>
                                                  (0, i.jsxs)(i.Fragment, {
                                                      children: [
                                                          (0, i.jsx)(I.A, {
                                                              shouldUseThemeColor: !0,
                                                              customSize: 14,
                                                              className: b.tz,
                                                          }),
                                                          y.intl.format(y.t["nLXlh+"], { orbAmount: Q ?? 0 }),
                                                      ],
                                                  }),
                                          })
                                        : y.intl.format(y.t["0IUT4Y"], { rewardWithArticleHook: () => M }),
                                }),
                                (0, i.jsx)(d.E, { variant: "text-xs/medium", color: "text-muted", children: D }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: b.uz,
                    children: [
                        !U &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [tt, (0, i.jsx)("div", { className: b.AF, children: ti })],
                            }),
                        U &&
                            !W &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    tt,
                                    (0, i.jsx)("div", {
                                        className: b.AF,
                                        children: (0, i.jsx)(c.$, {
                                            variant: "primary",
                                            size: "sm",
                                            fullWidth: !0,
                                            text: Z,
                                            onClick: te,
                                            onKeyPress: S,
                                            loading: w,
                                        }),
                                    }),
                                ],
                            }),
                        W &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    tt,
                                    (0, i.jsx)("div", {
                                        className: b.AF,
                                        children: (0, i.jsx)(c.$, {
                                            variant: "primary",
                                            size: "sm",
                                            fullWidth: !0,
                                            text: y.intl.string(y.t.cfY4PE),
                                            onClick: ts,
                                            onKeyPress: S,
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
