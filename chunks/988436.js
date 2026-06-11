s.d(e, { default: () => b, i: () => k });
var n = s(627968),
    i = s(64700),
    a = s(503698),
    l = s.n(a),
    r = s(189213),
    o = s(17928),
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
    N = s(363195),
    g = s(507107),
    O = s(31587),
    A = s(551875),
    p = s(18437),
    y = s(590202),
    T = s(971649),
    S = s(901406),
    I = s(792620),
    _ = s(73473),
    w = s(371912),
    Q = s(818348),
    q = s(375708),
    L = s(212885);
function b(t) {
    let { quest: e, errorHints: s, transitionState: a, onClose: C, sourceQuestContent: j } = t,
        [E, f] = (0, i.useState)(s),
        _ = (0, O.UX)(),
        b = (0, p.Ut)(),
        k = (0, T.vU)()?.getId(),
        D = (0, o.bG)([v.Ay], () => v.Ay.useReducedMotion),
        M = (0, w.Xf)({ useReducedMotion: D, className: L.Zf }),
        P = E.filter((t) => ["xbox", "playstation"].includes(t.connected_account_type)),
        U = (0, I.YL)(e),
        z = (0, o.bG)([N.A], () => N.A.getState().theme),
        H = (0, u.M)(z) ? Q.NJ.DARK : Q.NJ.LIGHT,
        { startConsoleQuest: W, startingConsoleQuest: F } = (0, O.Wj)({
            questId: e.id,
            beforeRequest: () => {
                M.startAnimation(),
                    b({
                        questId: e.id,
                        questContent: g.uF.CONNECTIONS_MODAL,
                        questContentCTA: y.Cy.DEFIBRILLATOR,
                        sourceQuestContent: j,
                    });
            },
            afterRequest: (t) => {
                M.stopAnimation(), f(t);
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
                    (0, S.b6)(
                        { quest: e },
                        {
                            content: g.uF.CONNECTIONS_MODAL,
                            ctaContent: y.Cy.VIEW_CONSOLE_CONNECTIONS_LINK,
                            impressionId: k,
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
                        (0, n.jsx)(R, { icon: (0, n.jsx)(m.k, { size: "sm" }), text: q.intl.string(q.t.br3uIi) }),
                        (0, n.jsx)(R, {
                            icon: (0, n.jsx)(h._, { size: "sm" }),
                            text: q.intl.string(q.t.XF4wuA),
                            errors: U ? void 0 : P.map((t) => t.message),
                            gameTile: U
                                ? (0, n.jsx)(c.m, {
                                      "aria-label": e.config.messages.gameTitle,
                                      __unsupportedReactNodeAsText: (0, n.jsxs)("div", {
                                          className: L.YL,
                                          children: [
                                              (0, n.jsx)(d.E, {
                                                  variant: "text-sm/medium",
                                                  children: e.config.messages.gameTitle,
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
                                          alt: e.config.messages.gameTitle,
                                          src: (0, A.tW)(e, A.fY.GAME_TILE, H).url,
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
function R(t) {
    let { icon: e, text: s, errors: i = [], gameTile: a } = t,
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
                            e,
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
                children: i.map((t) =>
                    (0, n.jsxs)(
                        "div",
                        {
                            className: L.Ff,
                            children: [
                                (0, n.jsx)(E.i, { size: "sm", color: "currentColor", className: L.z3 }),
                                (0, n.jsx)(d.E, { variant: "text-xs/medium", color: "text-muted", children: t }),
                            ],
                        },
                        t,
                    ),
                ),
            }),
        ],
    });
}
function k(t) {
    (0, f.openModalLazy)(async () => {
        let { default: e } = await Promise.resolve().then(s.bind(s, 988436));
        return function (s) {
            return (0, n.jsx)(_.R, {
                overrideVisibility: !0,
                questOrQuests: t.quest,
                questContent: g.uF.CONNECTIONS_MODAL,
                sourceQuestContent: t.sourceQuestContent,
                children: () => (0, n.jsx)(e, { ...s, ...t }),
            });
        };
    });
}
