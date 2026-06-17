s.d(e, { default: () => M, i: () => P });
var n = s(627968),
    i = s(64700),
    a = s(503698),
    l = s.n(a),
    r = s(323889),
    o = s(189213),
    c = s(17928),
    u = s(990078),
    d = s(462887),
    x = s(834730),
    m = s(939249),
    C = s(31300),
    h = s(687966),
    E = s(653766),
    j = s(200192),
    f = s(738188),
    v = s(192308),
    N = s(775602),
    g = s(274670),
    O = s(144779),
    A = s(363195),
    p = s(507107),
    y = s(104886),
    T = s(347135),
    I = s(551875),
    S = s(18437),
    _ = s(590202),
    Q = s(971649),
    w = s(901406),
    L = s(792620),
    q = s(73473),
    b = s(371912),
    R = s(818348),
    k = s(375708),
    D = s(212885);
function M(t) {
    let { quest: e, errorHints: s, transitionState: a, onClose: E, sourceQuestContent: j } = t,
        [f, v] = (0, i.useState)(s),
        q = (0, T.UX)(),
        M = (0, S.Ut)(),
        P = (0, Q.vU)()?.getId(),
        z = (0, c.bG)([N.Ay], () => N.Ay.useReducedMotion),
        H = (0, b.Xf)({ useReducedMotion: z, className: D.Zf }),
        F = f.filter((t) => ["xbox", "playstation"].includes(t.connected_account_type)),
        W = (0, L.YL)(e),
        K = (0, c.bG)([A.A], () => A.A.getState().theme),
        V = (0, d.M)(K) ? R.NJ.DARK : R.NJ.LIGHT,
        { startConsoleQuest: $, startingConsoleQuest: B } = (0, T.Wj)({
            questId: e.id,
            beforeRequest: () => {
                H.startAnimation(),
                    (0, y.E5)(y.kI.STEP_2_CLICKED_INTERNAL, "quest_console_connection_errors_modal")
                        ? (0, g.r)({
                              type: O.F.CLICK_INTERNAL,
                              adCreativeType: r.p.QUEST,
                              adCreativeId: e.id,
                              questContentCTA: _.Cy.DEFIBRILLATOR,
                              surfaceId: p.uF.CONNECTIONS_MODAL,
                              sourceQuestContent: j,
                              impressionId: P,
                          })
                        : M({
                              questId: e.id,
                              questContent: p.uF.CONNECTIONS_MODAL,
                              questContentCTA: _.Cy.DEFIBRILLATOR,
                              sourceQuestContent: j,
                          });
            },
            afterRequest: (t) => {
                H.stopAnimation(), v(t);
            },
        });
    return (0, n.jsx)(o.Modal, {
        transitionState: a,
        onClose: E,
        title: k.intl.string(k.t.W5lmKt),
        subtitle: q.message,
        actions: [
            {
                variant: "secondary",
                onClick: () =>
                    void (E(),
                    (0, w.b6)(
                        { quest: e },
                        {
                            content: p.uF.CONNECTIONS_MODAL,
                            ctaContent: _.Cy.VIEW_CONSOLE_CONNECTIONS_LINK,
                            impressionId: P,
                            sourceQuestContent: j,
                        },
                    )),
                text: k.intl.string(k.t["qiS+xj"]),
            },
            { variant: "primary", onClick: () => E(), text: k.intl.string(k.t.cpT0Cq) },
        ],
        children: (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)("div", {
                    className: D.$Q,
                    children: [
                        (0, n.jsx)(x.E, {
                            variant: "eyebrow",
                            color: "text-default",
                            children: k.intl.string(k.t["+/hZM/"]),
                        }),
                        (0, n.jsxs)(m.D, {
                            className: l()(D.Tm, { [D.r9]: B }),
                            onClick: $,
                            children: [
                                H.render(),
                                (0, n.jsx)(x.E, {
                                    variant: "text-sm/medium",
                                    color: "currentColor",
                                    className: D.Zf,
                                    children: k.intl.string(k.t.wzzjk9),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: D.ei,
                    children: [
                        (0, n.jsx)(U, { icon: (0, n.jsx)(C.k, { size: "sm" }), text: k.intl.string(k.t.br3uIi) }),
                        (0, n.jsx)(U, {
                            icon: (0, n.jsx)(h._, { size: "sm" }),
                            text: k.intl.string(k.t.XF4wuA),
                            errors: W ? void 0 : F.map((t) => t.message),
                            gameTile: W
                                ? (0, n.jsx)(u.m, {
                                      "aria-label": e.config.messages.gameTitle,
                                      __unsupportedReactNodeAsText: (0, n.jsxs)("div", {
                                          className: D.YL,
                                          children: [
                                              (0, n.jsx)(x.E, {
                                                  variant: "text-sm/medium",
                                                  children: e.config.messages.gameTitle,
                                              }),
                                              (0, n.jsx)(x.E, {
                                                  variant: "text-xs/normal",
                                                  color: "text-muted",
                                                  children: k.intl.string(k.t.STpNEC),
                                              }),
                                          ],
                                      }),
                                      children: (0, n.jsx)("img", {
                                          className: D.rC,
                                          alt: e.config.messages.gameTitle,
                                          src: (0, I.tW)(e, I.fY.GAME_TILE, V).url,
                                      }),
                                  })
                                : null,
                        }),
                    ],
                }),
            ],
        }),
    });
}
function U(t) {
    let { icon: e, text: s, errors: i = [], gameTile: a } = t,
        r = i.length > 0,
        o = r ? E.e : j.Q;
    return (0, n.jsxs)("div", {
        className: D.dJ,
        children: [
            (0, n.jsxs)("div", {
                className: l()(D.w_, { [D.qu]: r }),
                children: [
                    (0, n.jsxs)("div", {
                        className: D.d3,
                        children: [
                            e,
                            (0, n.jsx)(x.E, { variant: "text-sm/medium", color: "text-default", children: s }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: D.d3,
                        children: [
                            a,
                            (0, n.jsx)(o, {
                                color: "currentColor",
                                size: "sm",
                                className: l()({ [D.kX]: !r, [D.z3]: r }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, n.jsx)("div", {
                className: D.Tt,
                children: i.map((t) =>
                    (0, n.jsxs)(
                        "div",
                        {
                            className: D.Ff,
                            children: [
                                (0, n.jsx)(f.i, { size: "sm", color: "currentColor", className: D.z3 }),
                                (0, n.jsx)(x.E, { variant: "text-xs/medium", color: "text-muted", children: t }),
                            ],
                        },
                        t,
                    ),
                ),
            }),
        ],
    });
}
function P(t) {
    (0, v.openModalLazy)(async () => {
        let { default: e } = await Promise.resolve().then(s.bind(s, 988436));
        return function (s) {
            return (0, n.jsx)(q.R, {
                overrideVisibility: !0,
                questOrQuests: t.quest,
                questContent: p.uF.CONNECTIONS_MODAL,
                sourceQuestContent: t.sourceQuestContent,
                children: () => (0, n.jsx)(e, { ...s, ...t }),
            });
        };
    });
}
