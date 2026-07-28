n.d(e, { default: () => w, i: () => V });
var s = n(477900),
    i = n(582128),
    o = n(503698),
    r = n.n(o),
    u = n(323889),
    a = n(189213),
    l = n(17928),
    c = n(462887),
    C = n(866665),
    d = n(834730),
    E = n(939249),
    x = n(31300),
    A = n(687966),
    T = n(653766),
    I = n(200192),
    _ = n(738188),
    O = n(192308),
    f = n(775602),
    N = n(274670),
    y = n(144779),
    L = n(363195),
    g = n(178540),
    q = n(24001),
    m = n(104886),
    Q = n(201274),
    R = n(291749),
    S = n(18437),
    P = n(590202),
    h = n(971649),
    p = n(901406),
    v = n(792620),
    D = n(73473),
    j = n(764336),
    U = n(818348),
    b = n(375708),
    M = n(831709);
function w(t) {
    let { quest: e, transitionState: n, onClose: o, sourceQuestContent: T, refreshOnOpen: I = !1 } = t,
        _ = (0, g.O)((t) => t.getErrorHints(e.id)),
        O = (0, i.useRef)(!1),
        D = (0, Q.UX)(),
        w = (0, S.Ut)(),
        V = (0, h.vU)()?.getId(),
        X = (0, l.bG)([f.Ay], () => f.Ay.useReducedMotion),
        W = (0, j.Xf)({ useReducedMotion: X, className: M.Zf }),
        K = _.filter((t) => ["xbox", "playstation"].includes(t.connected_account_type)),
        z = (0, v.YL)(e),
        F = (0, l.bG)([L.A], () => L.A.getState().theme),
        B = (0, c.M)(F) ? U.NJ.DARK : U.NJ.LIGHT,
        { startConsoleQuest: Y, startingConsoleQuest: G } = (0, Q.Wj)({
            questId: e.id,
            beforeRequest: () => {
                W.startAnimation(),
                    (0, m.E5)(m.kI.STEP_2_CLICKED_INTERNAL, "quest_console_connection_errors_modal")
                        ? (0, N.r)({
                              type: y.F.CLICK_INTERNAL,
                              adCreativeType: u.p.QUEST,
                              adCreativeId: e.id,
                              questContentCTA: P.Cy.DEFIBRILLATOR,
                              surfaceId: q.uF.CONNECTIONS_MODAL,
                              sourceQuestContent: T,
                              impressionId: V,
                          })
                        : w({
                              questId: e.id,
                              questContent: q.uF.CONNECTIONS_MODAL,
                              questContentCTA: P.Cy.DEFIBRILLATOR,
                              sourceQuestContent: T,
                          });
            },
            afterRequest: () => {
                W.stopAnimation();
            },
        });
    return (
        (0, i.useEffect)(() => {
            I && !O.current && (Y(), (O.current = !0));
        }, [I, Y]),
        (0, s.jsx)(a.Modal, {
            transitionState: n,
            onClose: o,
            title: b.intl.string(b.t.W5lmKt),
            subtitle: D.message,
            actions: [
                {
                    variant: "secondary",
                    onClick: () =>
                        void (o(),
                        (0, p.b6)(
                            { quest: e },
                            {
                                content: q.uF.CONNECTIONS_MODAL,
                                ctaContent: P.Cy.VIEW_CONSOLE_CONNECTIONS_LINK,
                                impressionId: V,
                                sourceQuestContent: T,
                            },
                        )),
                    text: b.intl.string(b.t["qiS+xj"]),
                },
                { variant: "primary", onClick: () => o(), text: b.intl.string(b.t.cpT0Cq) },
            ],
            children: (0, s.jsxs)(s.Fragment, {
                children: [
                    (0, s.jsxs)("div", {
                        className: M.$Q,
                        children: [
                            (0, s.jsx)(d.E, {
                                variant: "eyebrow",
                                color: "text-default",
                                children: b.intl.string(b.t["+/hZM/"]),
                            }),
                            (0, s.jsxs)(E.D, {
                                className: r()(M.Tm, { [M.r9]: G }),
                                onClick: Y,
                                children: [
                                    W.render(),
                                    (0, s.jsx)(d.E, {
                                        variant: "text-sm/medium",
                                        color: "currentColor",
                                        className: M.Zf,
                                        children: b.intl.string(b.t.wzzjk9),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: M.ei,
                        children: [
                            (0, s.jsx)(k, { icon: (0, s.jsx)(x.k, { size: "sm" }), text: b.intl.string(b.t.br3uIi) }),
                            (0, s.jsx)(k, {
                                icon: (0, s.jsx)(A._, { size: "sm" }),
                                text: b.intl.string(b.t.XF4wuA),
                                errors: z ? void 0 : K.map((t) => t.message),
                                gameTile: z
                                    ? (0, s.jsx)(C.m, {
                                          "aria-label": e.config.messages.gameTitle,
                                          __unsupportedReactNodeAsText: (0, s.jsxs)("div", {
                                              className: M.YL,
                                              children: [
                                                  (0, s.jsx)(d.E, {
                                                      variant: "text-sm/medium",
                                                      children: e.config.messages.gameTitle,
                                                  }),
                                                  (0, s.jsx)(d.E, {
                                                      variant: "text-xs/normal",
                                                      color: "text-muted",
                                                      children: b.intl.string(b.t.STpNEC),
                                                  }),
                                              ],
                                          }),
                                          children: (0, s.jsx)("img", {
                                              className: M.rC,
                                              alt: e.config.messages.gameTitle,
                                              src: (0, R.tW)(e, R.fY.GAME_TILE, B).url,
                                          }),
                                      })
                                    : null,
                            }),
                        ],
                    }),
                ],
            }),
        })
    );
}
function k(t) {
    let { icon: e, text: n, errors: i = [], gameTile: o } = t,
        u = i.length > 0,
        a = u ? T.e : I.Q;
    return (0, s.jsxs)("div", {
        className: M.dJ,
        children: [
            (0, s.jsxs)("div", {
                className: r()(M.w_, { [M.qu]: u }),
                children: [
                    (0, s.jsxs)("div", {
                        className: M.d3,
                        children: [
                            e,
                            (0, s.jsx)(d.E, { variant: "text-sm/medium", color: "text-default", children: n }),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: M.d3,
                        children: [
                            o,
                            (0, s.jsx)(a, {
                                color: "currentColor",
                                size: "sm",
                                className: r()({ [M.kX]: !u, [M.z3]: u }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, s.jsx)("div", {
                className: M.Tt,
                children: i.map((t) =>
                    (0, s.jsxs)(
                        "div",
                        {
                            className: M.Ff,
                            children: [
                                (0, s.jsx)(_.i, { size: "sm", color: "currentColor", className: M.z3 }),
                                (0, s.jsx)(d.E, { variant: "text-xs/medium", color: "text-muted", children: t }),
                            ],
                        },
                        t,
                    ),
                ),
            }),
        ],
    });
}
function V(t) {
    (0, O.openModalLazy)(async () => {
        let { default: e } = await Promise.resolve().then(n.bind(n, 988436));
        return function (n) {
            return (0, s.jsx)(D.R, {
                overrideVisibility: !0,
                questOrQuests: t.quest,
                questContent: q.uF.CONNECTIONS_MODAL,
                sourceQuestContent: t.sourceQuestContent,
                children: () => (0, s.jsx)(e, { ...n, ...t }),
            });
        };
    });
}
