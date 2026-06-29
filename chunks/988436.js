n.d(e, { default: () => P, i: () => U });
var s = n(627968),
    i = n(64700),
    a = n(503698),
    l = n.n(a),
    r = n(323889),
    o = n(189213),
    c = n(17928),
    u = n(990078),
    d = n(462887),
    x = n(834730),
    C = n(939249),
    m = n(31300),
    E = n(687966),
    h = n(653766),
    j = n(200192),
    f = n(738188),
    O = n(192308),
    N = n(775602),
    v = n(274670),
    g = n(144779),
    A = n(363195),
    y = n(24001),
    T = n(104886),
    S = n(347135),
    I = n(46948),
    p = n(18437),
    L = n(590202),
    Q = n(971649),
    _ = n(901406),
    q = n(792620),
    w = n(73473),
    R = n(371912),
    b = n(818348),
    D = n(375708),
    k = n(212885);
function P(t) {
    let { quest: e, errorHints: n, transitionState: a, onClose: h, sourceQuestContent: j } = t,
        [f, O] = (0, i.useState)(n),
        w = (0, S.UX)(),
        P = (0, p.Ut)(),
        U = (0, Q.vU)()?.getId(),
        z = (0, c.bG)([N.Ay], () => N.Ay.useReducedMotion),
        H = (0, R.Xf)({ useReducedMotion: z, className: k.Zf }),
        F = f.filter((t) => ["xbox", "playstation"].includes(t.connected_account_type)),
        K = (0, q.YL)(e),
        W = (0, c.bG)([A.A], () => A.A.getState().theme),
        V = (0, d.M)(W) ? b.NJ.DARK : b.NJ.LIGHT,
        { startConsoleQuest: $, startingConsoleQuest: B } = (0, S.Wj)({
            questId: e.id,
            beforeRequest: () => {
                H.startAnimation(),
                    (0, T.E5)(T.kI.STEP_2_CLICKED_INTERNAL, "quest_console_connection_errors_modal")
                        ? (0, v.r)({
                              type: g.F.CLICK_INTERNAL,
                              adCreativeType: r.p.QUEST,
                              adCreativeId: e.id,
                              questContentCTA: L.Cy.DEFIBRILLATOR,
                              surfaceId: y.uF.CONNECTIONS_MODAL,
                              sourceQuestContent: j,
                              impressionId: U,
                          })
                        : P({
                              questId: e.id,
                              questContent: y.uF.CONNECTIONS_MODAL,
                              questContentCTA: L.Cy.DEFIBRILLATOR,
                              sourceQuestContent: j,
                          });
            },
            afterRequest: (t) => {
                H.stopAnimation(), O(t);
            },
        });
    return (0, s.jsx)(o.Modal, {
        transitionState: a,
        onClose: h,
        title: D.intl.string(D.t.W5lmKt),
        subtitle: w.message,
        actions: [
            {
                variant: "secondary",
                onClick: () =>
                    void (h(),
                    (0, _.b6)(
                        { quest: e },
                        {
                            content: y.uF.CONNECTIONS_MODAL,
                            ctaContent: L.Cy.VIEW_CONSOLE_CONNECTIONS_LINK,
                            impressionId: U,
                            sourceQuestContent: j,
                        },
                    )),
                text: D.intl.string(D.t["qiS+xj"]),
            },
            { variant: "primary", onClick: () => h(), text: D.intl.string(D.t.cpT0Cq) },
        ],
        children: (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsxs)("div", {
                    className: k.$Q,
                    children: [
                        (0, s.jsx)(x.E, {
                            variant: "eyebrow",
                            color: "text-default",
                            children: D.intl.string(D.t["+/hZM/"]),
                        }),
                        (0, s.jsxs)(C.D, {
                            className: l()(k.Tm, { [k.r9]: B }),
                            onClick: $,
                            children: [
                                H.render(),
                                (0, s.jsx)(x.E, {
                                    variant: "text-sm/medium",
                                    color: "currentColor",
                                    className: k.Zf,
                                    children: D.intl.string(D.t.wzzjk9),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, s.jsxs)("div", {
                    className: k.ei,
                    children: [
                        (0, s.jsx)(M, { icon: (0, s.jsx)(m.k, { size: "sm" }), text: D.intl.string(D.t.br3uIi) }),
                        (0, s.jsx)(M, {
                            icon: (0, s.jsx)(E._, { size: "sm" }),
                            text: D.intl.string(D.t.XF4wuA),
                            errors: K ? void 0 : F.map((t) => t.message),
                            gameTile: K
                                ? (0, s.jsx)(u.m, {
                                      "aria-label": e.config.messages.gameTitle,
                                      __unsupportedReactNodeAsText: (0, s.jsxs)("div", {
                                          className: k.YL,
                                          children: [
                                              (0, s.jsx)(x.E, {
                                                  variant: "text-sm/medium",
                                                  children: e.config.messages.gameTitle,
                                              }),
                                              (0, s.jsx)(x.E, {
                                                  variant: "text-xs/normal",
                                                  color: "text-muted",
                                                  children: D.intl.string(D.t.STpNEC),
                                              }),
                                          ],
                                      }),
                                      children: (0, s.jsx)("img", {
                                          className: k.rC,
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
function M(t) {
    let { icon: e, text: n, errors: i = [], gameTile: a } = t,
        r = i.length > 0,
        o = r ? h.e : j.Q;
    return (0, s.jsxs)("div", {
        className: k.dJ,
        children: [
            (0, s.jsxs)("div", {
                className: l()(k.w_, { [k.qu]: r }),
                children: [
                    (0, s.jsxs)("div", {
                        className: k.d3,
                        children: [
                            e,
                            (0, s.jsx)(x.E, { variant: "text-sm/medium", color: "text-default", children: n }),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: k.d3,
                        children: [
                            a,
                            (0, s.jsx)(o, {
                                color: "currentColor",
                                size: "sm",
                                className: l()({ [k.kX]: !r, [k.z3]: r }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, s.jsx)("div", {
                className: k.Tt,
                children: i.map((t) =>
                    (0, s.jsxs)(
                        "div",
                        {
                            className: k.Ff,
                            children: [
                                (0, s.jsx)(f.i, { size: "sm", color: "currentColor", className: k.z3 }),
                                (0, s.jsx)(x.E, { variant: "text-xs/medium", color: "text-muted", children: t }),
                            ],
                        },
                        t,
                    ),
                ),
            }),
        ],
    });
}
function U(t) {
    (0, O.openModalLazy)(async () => {
        let { default: e } = await Promise.resolve().then(n.bind(n, 988436));
        return function (n) {
            return (0, s.jsx)(w.R, {
                overrideVisibility: !0,
                questOrQuests: t.quest,
                questContent: y.uF.CONNECTIONS_MODAL,
                sourceQuestContent: t.sourceQuestContent,
                children: () => (0, s.jsx)(e, { ...n, ...t }),
            });
        };
    });
}
