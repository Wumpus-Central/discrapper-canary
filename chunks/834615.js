s.r(e), s.d(e, { default: () => Q });
var n = s(477900),
    i = s(582128),
    l = s(17928),
    r = s(366010),
    a = s(821609),
    o = s(408278),
    c = s(509434),
    u = s(939249),
    d = s(365199),
    A = s(297264),
    C = s(834730),
    m = s(157559),
    I = s(409626),
    T = s(363195),
    h = s(106799),
    x = s(287809),
    N = s(352774),
    E = s(859703),
    g = s(24001),
    j = s(3738),
    _ = s(514547),
    f = s(291749),
    P = s(590202),
    F = s(651892),
    L = s(801365),
    v = s(814793),
    Y = s(73473),
    k = s(270045),
    V = s(617986),
    b = s(630037),
    p = s(190107),
    S = s(652215),
    w = s(375708),
    y = s(422170);
function W(t) {
    let { nodeRef: e, quest: s, onQuestDismiss: Y, isStaffPreview: W = !1 } = t,
        Q = (0, l.bG)([E.A], () => E.A.isEnrolling(s.id), [s]),
        R = i.useCallback((t) => {
            t.stopPropagation();
        }, []),
        U = (0, b.D)({ quest: s, questContent: g.uF.ACTIVITY_PANEL, sourceQuestContent: g.uF.ACTIVITY_PANEL }),
        q = s.userStatus?.enrolledAt != null,
        z = s.userStatus?.completedAt != null,
        D = (0, _.fc)(s),
        H = i.useCallback(async () => {
            let { type: t } = await (0, N.Oy)(s.id, {
                questContent: g.uF.ACTIVITY_PANEL,
                questContentCTA: P.Cy.ACCEPT_QUEST,
                sourceQuestContent: g.uF.ACTIVITY_PANEL,
            });
            switch (t) {
                case N.WM.SUCCESS:
                    (0, N.g5)(s.id, g.uF.ACTIVITY_PANEL),
                        W ? (0, N.L4)(g.uF.ACTIVITY_PANEL, s.id) : Y?.(),
                        (0, V.mA)({ fromContent: g.uF.ACTIVITY_PANEL, questId: s.id });
                    break;
                case N.WM.CAPTCHA_FAILED:
                    m.A.show({ title: w.intl.string(w.t["/CidxO"]), body: w.intl.string(w.t.HQdHg6) });
                    break;
                case N.WM.UNKNOWN_ERROR:
                    m.A.show({ title: w.intl.string(w.t.R0RpRX), body: w.intl.string(w.t.OXD41D) });
                case N.WM.PREVIOUS_IN_FLIGHT_REQUEST:
            }
        }, [s, W, Y]),
        O = (0, l.bG)([T.A], () => T.A.getState().theme),
        G = (0, r.M)(O) ? S.NJ8.DARK : S.NJ8.LIGHT,
        M = (0, l.bG)([x.default], () => x.default.getCurrentUser()),
        K = (0, L.ks)(s.config),
        X = (0, L.wo)(s.config, M),
        J = (0, L.mH)(s.config, M),
        $ = (0, j.mU)({
            quest: s,
            taskDetails: D,
            location: p.rE.ACTIVITY_PANEL,
            sourceQuestContent: g.uF.ACTIVITY_PANEL,
            gameProfileSource: I.GameProfileSources.QuestActivityPanel,
        }),
        B = (0, f.tW)(s, f.fY.GAME_TILE, G).url,
        Z = null != s.config.ctaConfig ? (0, F.Jx)(s.config) : "",
        tt = (0, _.do)({
            quest: s,
            content: g.uF.ACTIVITY_PANEL,
            ctaContent: P.Cy.OPEN_GAME_LINK,
            sourceQuestContent: g.uF.ACTIVITY_PANEL,
        }),
        te = (0, v.vA)(s),
        ts = (0, j.NA)({ quest: s }),
        tn = te ? ts : w.intl.string(w.t.l7E81v),
        ti = (0, n.jsx)(a.$, {
            variant: "primary",
            size: "sm",
            fullWidth: !0,
            text: tn,
            onClick: H,
            loading: Q,
            icon: (0, V.Oz)(s),
        }),
        tl =
            null != ("" !== Z ? Z : null)
                ? (0, n.jsx)(o.K, {
                      variant: "secondary",
                      size: "sm",
                      icon: c.I,
                      "aria-label": (0, F.wr)(s),
                      onClick: tt,
                  })
                : null,
        tr = (0, n.jsx)(k.C, {
            quest: s,
            questContent: g.uF.ACTIVITY_PANEL,
            shouldShowDisclosure: s.userStatus?.enrolledAt == null,
            showShareLink: !0,
            sourceQuestContent: g.uF.ACTIVITY_PANEL,
            children: (t) =>
                (0, n.jsx)(u.D, {
                    ...t,
                    "aria-label": w.intl.string(w.t.DEoVWZ),
                    children: (0, n.jsx)(d.j, { size: "md", color: "currentColor", className: y.Bx }),
                }),
        });
    return (0, n.jsx)("div", {
        ref: (t) => {
            e.current = t;
        },
        className: y.iE,
        onClick: R,
        onKeyPress: R,
        children: (0, n.jsxs)("div", {
            className: y.CU,
            children: [
                (0, n.jsx)("div", { className: y.He, children: tr }),
                (0, n.jsxs)("div", {
                    className: y.wx,
                    children: [
                        (0, n.jsx)("img", { className: y.rC, alt: "", src: B }),
                        (0, n.jsxs)("div", {
                            className: y.Xj,
                            children: [
                                (0, n.jsx)(A.D, {
                                    variant: "heading-sm/semibold",
                                    color: "text-strong",
                                    children: K
                                        ? w.intl.format(w.t["0IUT4Y"], {
                                              rewardWithArticleHook: () =>
                                                  (0, n.jsxs)(n.Fragment, {
                                                      children: [
                                                          (0, n.jsx)(h.A, {
                                                              shouldUseThemeColor: !0,
                                                              customSize: 14,
                                                              className: y.tz,
                                                          }),
                                                          w.intl.format(w.t["nLXlh+"], { orbAmount: X ?? 0 }),
                                                      ],
                                                  }),
                                          })
                                        : w.intl.format(w.t["0IUT4Y"], { rewardWithArticleHook: () => J }),
                                }),
                                (0, n.jsx)(C.E, { variant: "text-xs/medium", color: "text-muted", children: $ }),
                            ],
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: y.uz,
                    children: [
                        !q &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [tl, (0, n.jsx)("div", { className: y.AF, children: ti })],
                            }),
                        q &&
                            !z &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    tl,
                                    (0, n.jsx)("div", {
                                        className: y.AF,
                                        children: (0, n.jsx)(a.$, {
                                            variant: "primary",
                                            size: "sm",
                                            fullWidth: !0,
                                            text: tn,
                                            onClick: H,
                                            loading: Q,
                                        }),
                                    }),
                                ],
                            }),
                        z &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    tl,
                                    (0, n.jsx)("div", {
                                        className: y.AF,
                                        children: (0, n.jsx)(a.$, {
                                            variant: "primary",
                                            size: "sm",
                                            fullWidth: !0,
                                            text: w.intl.string(w.t.cfY4PE),
                                            onClick: U,
                                        }),
                                    }),
                                ],
                            }),
                    ],
                }),
            ],
        }),
    });
}
let Q = function (t) {
    return (0, n.jsx)(Y.R, {
        questOrQuests: t.quest,
        questContent: g.uF.ACTIVITY_PANEL,
        sourceQuestContent: g.uF.ACTIVITY_PANEL,
        children: (e) => (0, n.jsx)(W, { nodeRef: e, ...t }),
    });
};
