s.d(t, { default: () => b, i: () => R });
var n = s(627968),
    i = s(64700),
    a = s(503698),
    l = s.n(a),
    r = s(189213),
    o = s(311907),
    c = s(990078),
    u = s(462887),
    d = s(834730),
    x = s(939249),
    m = s(31300),
    h = s(687966),
    C = s(653766),
    j = s(200192),
    E = s(738188),
    f = s(192308),
    v = s(775602),
    N = s(544028),
    g = s(341915),
    A = s(890687),
    O = s(579473),
    p = s(18437),
    y = s(590202),
    S = s(971649),
    T = s(901406),
    I = s(792620),
    _ = s(73473),
    w = s(201805),
    Q = s(818348),
    q = s(985018),
    L = s(212885);
function b(e) {
    let { quest: t, errorHints: s, transitionState: a, onClose: C, sourceQuestContent: j } = e,
        [E, f] = (0, i.useState)(s),
        _ = (0, A.UX)(),
        b = (0, p.Ut)(),
        R = (0, S.vU)()?.getId(),
        D = (0, o.bG)([v.A], () => v.A.useReducedMotion),
        M = (0, w.Xf)({ useReducedMotion: D, className: L.Zf }),
        z = E.filter((e) => ["xbox", "playstation"].includes(e.connected_account_type)),
        P = (0, I.YL)(t),
        U = (0, o.bG)([N.A], () => N.A.getState().theme),
        H = (0, u.M)(U) ? Q.NJ.DARK : Q.NJ.LIGHT,
        { startConsoleQuest: W, startingConsoleQuest: F } = (0, A.Wj)({
            questId: t.id,
            beforeRequest: () => {
                M.startAnimation(),
                    b({
                        questId: t.id,
                        questContent: g.uF.CONNECTIONS_MODAL,
                        questContentCTA: y.Cy.DEFIBRILLATOR,
                        sourceQuestContent: j,
                    });
            },
            afterRequest: (e) => {
                M.stopAnimation(), f(e);
            },
        });
    return (0, n.jsx)(r.Modal, {
        transitionState: a,
        onClose: C,
        title: q.intl.string(q.t.W5lmKt),
        subtitle: _.message,
        actions: [
            {
                variant: "secondary",
                onClick: () =>
                    void (C(),
                    (0, T.b6)(
                        { quest: t },
                        {
                            content: g.uF.CONNECTIONS_MODAL,
                            ctaContent: y.Cy.VIEW_CONSOLE_CONNECTIONS_LINK,
                            impressionId: R,
                            sourceQuestContent: j,
                        },
                    )),
                text: q.intl.string(q.t["qiS+xj"]),
            },
            { variant: "primary", onClick: () => C(), text: q.intl.string(q.t.cpT0Cq) },
        ],
        children: (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)("div", {
                    className: L.$Q,
                    children: [
                        (0, n.jsx)(d.E, {
                            variant: "eyebrow",
                            color: "text-default",
                            children: q.intl.string(q.t["+/hZM/"]),
                        }),
                        (0, n.jsxs)(x.D, {
                            className: l()(L.Tm, { [L.r9]: F }),
                            onClick: W,
                            children: [
                                M.render(),
                                (0, n.jsx)(d.E, {
                                    variant: "text-sm/medium",
                                    color: "currentColor",
                                    className: L.Zf,
                                    children: q.intl.string(q.t.wzzjk9),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: L.ei,
                    children: [
                        (0, n.jsx)(k, { icon: (0, n.jsx)(m.k, { size: "sm" }), text: q.intl.string(q.t.br3uIi) }),
                        (0, n.jsx)(k, {
                            icon: (0, n.jsx)(h._, { size: "sm" }),
                            text: q.intl.string(q.t.XF4wuA),
                            errors: P ? void 0 : z.map((e) => e.message),
                            gameTile: P
                                ? (0, n.jsx)(c.m, {
                                      "aria-label": t.config.messages.gameTitle,
                                      __unsupportedReactNodeAsText: (0, n.jsxs)("div", {
                                          className: L.YL,
                                          children: [
                                              (0, n.jsx)(d.E, {
                                                  variant: "text-sm/medium",
                                                  children: t.config.messages.gameTitle,
                                              }),
                                              (0, n.jsx)(d.E, {
                                                  variant: "text-xs/normal",
                                                  color: "text-muted",
                                                  children: q.intl.string(q.t.STpNEC),
                                              }),
                                          ],
                                      }),
                                      children: (0, n.jsx)("img", {
                                          className: L.rC,
                                          alt: t.config.messages.gameTitle,
                                          src: (0, O.tW)(t, O.fY.GAME_TILE, H).url,
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
function k(e) {
    let { icon: t, text: s, errors: i = [], gameTile: a } = e,
        r = i.length > 0,
        o = r ? C.e : j.Q;
    return (0, n.jsxs)("div", {
        className: L.dJ,
        children: [
            (0, n.jsxs)("div", {
                className: l()(L.w_, { [L.qu]: r }),
                children: [
                    (0, n.jsxs)("div", {
                        className: L.d3,
                        children: [
                            t,
                            (0, n.jsx)(d.E, { variant: "text-sm/medium", color: "text-default", children: s }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: L.d3,
                        children: [
                            a,
                            (0, n.jsx)(o, {
                                color: "currentColor",
                                size: "sm",
                                className: l()({ [L.kX]: !r, [L.z3]: r }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, n.jsx)("div", {
                className: L.Tt,
                children: i.map((e) =>
                    (0, n.jsxs)(
                        "div",
                        {
                            className: L.Ff,
                            children: [
                                (0, n.jsx)(E.i, { size: "sm", color: "currentColor", className: L.z3 }),
                                (0, n.jsx)(d.E, { variant: "text-xs/medium", color: "text-muted", children: e }),
                            ],
                        },
                        e,
                    ),
                ),
            }),
        ],
    });
}
function R(e) {
    (0, f.openModalLazy)(async () => {
        let { default: t } = await Promise.resolve().then(s.bind(s, 988436));
        return function (s) {
            return (0, n.jsx)(_.R, {
                overrideVisibility: !0,
                questOrQuests: e.quest,
                questContent: g.uF.CONNECTIONS_MODAL,
                sourceQuestContent: e.sourceQuestContent,
                children: () => (0, n.jsx)(t, { ...s, ...e }),
            });
        };
    });
}
