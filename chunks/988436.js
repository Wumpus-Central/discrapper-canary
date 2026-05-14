s.d(t, { default: () => L, i: () => R });
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
    p = s(859387),
    A = s(18437),
    y = s(590202),
    S = s(971649),
    T = s(901406),
    I = s(792620),
    _ = s(73473),
    w = s(371912),
    Q = s(818348),
    q = s(375708),
    b = s(212885);
function L(e) {
    let { quest: t, errorHints: s, transitionState: a, onClose: C, sourceQuestContent: j } = e,
        [E, f] = (0, i.useState)(s),
        _ = (0, O.UX)(),
        L = (0, A.Ut)(),
        R = (0, S.vU)()?.getId(),
        D = (0, o.bG)([v.A], () => v.A.useReducedMotion),
        M = (0, w.Xf)({ useReducedMotion: D, className: b.Zf }),
        z = E.filter((e) => ["xbox", "playstation"].includes(e.connected_account_type)),
        P = (0, I.YL)(t),
        U = (0, o.bG)([N.A], () => N.A.getState().theme),
        H = (0, u.M)(U) ? Q.NJ.DARK : Q.NJ.LIGHT,
        { startConsoleQuest: F, startingConsoleQuest: W } = (0, O.Wj)({
            questId: t.id,
            beforeRequest: () => {
                M.startAnimation(),
                    L({
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
                    className: b.$Q,
                    children: [
                        (0, n.jsx)(d.E, {
                            variant: "eyebrow",
                            color: "text-default",
                            children: q.intl.string(q.t["+/hZM/"]),
                        }),
                        (0, n.jsxs)(x.D, {
                            className: l()(b.Tm, { [b.r9]: W }),
                            onClick: F,
                            children: [
                                M.render(),
                                (0, n.jsx)(d.E, {
                                    variant: "text-sm/medium",
                                    color: "currentColor",
                                    className: b.Zf,
                                    children: q.intl.string(q.t.wzzjk9),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: b.ei,
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
                                          className: b.YL,
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
                                          className: b.rC,
                                          alt: t.config.messages.gameTitle,
                                          src: (0, p.tW)(t, p.fY.GAME_TILE, H).url,
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
        className: b.dJ,
        children: [
            (0, n.jsxs)("div", {
                className: l()(b.w_, { [b.qu]: r }),
                children: [
                    (0, n.jsxs)("div", {
                        className: b.d3,
                        children: [
                            t,
                            (0, n.jsx)(d.E, { variant: "text-sm/medium", color: "text-default", children: s }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: b.d3,
                        children: [
                            a,
                            (0, n.jsx)(o, {
                                color: "currentColor",
                                size: "sm",
                                className: l()({ [b.kX]: !r, [b.z3]: r }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, n.jsx)("div", {
                className: b.Tt,
                children: i.map((e) =>
                    (0, n.jsxs)(
                        "div",
                        {
                            className: b.Ff,
                            children: [
                                (0, n.jsx)(E.i, { size: "sm", color: "currentColor", className: b.z3 }),
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
