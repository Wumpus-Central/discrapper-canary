n.d(e, { default: () => w, i: () => W });
var s = n(477900),
    i = n(582128),
    o = n(503698),
    r = n.n(o),
    a = n(323889),
    l = n(189213),
    u = n(17928),
    c = n(462887),
    C = n(866665),
    d = n(834730),
    E = n(939249),
    x = n(31300),
    A = n(687966),
    I = n(653766),
    T = n(200192),
    f = n(738188),
    O = n(192308),
    _ = n(775602),
    L = n(274670),
    y = n(144779),
    N = n(363195),
    g = n(178540),
    S = n(738822),
    m = n(104886),
    Q = n(866157),
    R = n(291749),
    P = n(18437),
    D = n(590202),
    p = n(971649),
    v = n(901406),
    h = n(792620),
    U = n(73473),
    j = n(130490),
    M = n(818348),
    q = n(375708),
    b = n(175276);
function w(t) {
    let { quest: e, transitionState: n, onClose: o, sourceQuestContent: I, refreshOnOpen: T = !1 } = t,
        f = (0, g.O)((t) => t.getErrorHints(e.id)),
        O = (0, i.useRef)(!1),
        U = (0, Q.UX)(),
        w = (0, P.Ut)(),
        W = (0, p.vU)()?.getId(),
        X = (0, u.bG)([_.Ay], () => _.Ay.useReducedMotion),
        z = (0, j.Xf)({ useReducedMotion: X, className: b.Zf }),
        V = f.filter((t) => ["xbox", "playstation"].includes(t.connected_account_type)),
        F = (0, h.YL)(e),
        K = (0, u.bG)([N.A], () => N.A.getState().theme),
        B = (0, c.M)(K) ? M.NJ.DARK : M.NJ.LIGHT,
        { startConsoleQuest: Y, startingConsoleQuest: G } = (0, Q.Wj)({
            questId: e.id,
            beforeRequest: () => {
                (z.startAnimation(),
                    (0, m.E5)(m.kI.STEP_2_CLICKED_INTERNAL, "quest_console_connection_errors_modal")
                        ? (0, L.r)({
                              type: y.F.CLICK_INTERNAL,
                              adCreativeType: a.p.QUEST,
                              adCreativeId: e.id,
                              questContentCTA: D.Cy.DEFIBRILLATOR,
                              surfaceId: S.uF.CONNECTIONS_MODAL,
                              sourceQuestContent: I,
                              impressionId: W,
                          })
                        : w({
                              questId: e.id,
                              questContent: S.uF.CONNECTIONS_MODAL,
                              questContentCTA: D.Cy.DEFIBRILLATOR,
                              sourceQuestContent: I,
                          }));
            },
            afterRequest: () => {
                z.stopAnimation();
            },
        });
    return (
        (0, i.useEffect)(() => {
            T && !O.current && (Y(), (O.current = !0));
        }, [T, Y]),
        (0, s.jsx)(l.Modal, {
            transitionState: n,
            onClose: o,
            title: q.intl.string(q.t.W5lmKt),
            subtitle: U.message,
            actions: [
                {
                    variant: "secondary",
                    onClick: () =>
                        void (o(),
                        (0, v.b6)(
                            { quest: e },
                            {
                                content: S.uF.CONNECTIONS_MODAL,
                                ctaContent: D.Cy.VIEW_CONSOLE_CONNECTIONS_LINK,
                                impressionId: W,
                                sourceQuestContent: I,
                            },
                        )),
                    text: q.intl.string(q.t["qiS+xj"]),
                },
                { variant: "primary", onClick: () => o(), text: q.intl.string(q.t.cpT0Cq) },
            ],
            children: (0, s.jsxs)(s.Fragment, {
                children: [
                    (0, s.jsxs)("div", {
                        className: b.$Q,
                        children: [
                            (0, s.jsx)(d.E, {
                                variant: "eyebrow",
                                color: "text-default",
                                children: q.intl.string(q.t["+/hZM/"]),
                            }),
                            (0, s.jsxs)(E.D, {
                                className: r()(b.Tm, { [b.r9]: G }),
                                onClick: Y,
                                children: [
                                    z.render(),
                                    (0, s.jsx)(d.E, {
                                        variant: "text-sm/medium",
                                        color: "currentColor",
                                        className: b.Zf,
                                        children: q.intl.string(q.t.wzzjk9),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: b.ei,
                        children: [
                            (0, s.jsx)(k, { icon: (0, s.jsx)(x.k, { size: "sm" }), text: q.intl.string(q.t.br3uIi) }),
                            (0, s.jsx)(k, {
                                icon: (0, s.jsx)(A.GameControllerIcon, { size: "sm" }),
                                text: q.intl.string(q.t.XF4wuA),
                                errors: F ? void 0 : V.map((t) => t.message),
                                gameTile: F
                                    ? (0, s.jsx)(C.m, {
                                          "aria-label": e.config.messages.gameTitle,
                                          __unsupportedReactNodeAsText: (0, s.jsxs)("div", {
                                              className: b.YL,
                                              children: [
                                                  (0, s.jsx)(d.E, {
                                                      variant: "text-sm/medium",
                                                      children: e.config.messages.gameTitle,
                                                  }),
                                                  (0, s.jsx)(d.E, {
                                                      variant: "text-xs/normal",
                                                      color: "text-muted",
                                                      children: q.intl.string(q.t.STpNEC),
                                                  }),
                                              ],
                                          }),
                                          children: (0, s.jsx)("img", {
                                              className: b.rC,
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
        a = i.length > 0,
        l = a ? I.e : T.Q;
    return (0, s.jsxs)("div", {
        className: b.dJ,
        children: [
            (0, s.jsxs)("div", {
                className: r()(b.w_, { [b.qu]: a }),
                children: [
                    (0, s.jsxs)("div", {
                        className: b.d3,
                        children: [
                            e,
                            (0, s.jsx)(d.E, { variant: "text-sm/medium", color: "text-default", children: n }),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: b.d3,
                        children: [
                            o,
                            (0, s.jsx)(l, {
                                color: "currentColor",
                                size: "sm",
                                className: r()({ [b.kX]: !a, [b.z3]: a }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, s.jsx)("div", {
                className: b.Tt,
                children: i.map((t) =>
                    (0, s.jsxs)(
                        "div",
                        {
                            className: b.Ff,
                            children: [
                                (0, s.jsx)(f.WarningIcon, { size: "sm", color: "currentColor", className: b.z3 }),
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
function W(t) {
    (0, O.openModalLazy)(async () => {
        let { default: e } = await Promise.resolve().then(n.bind(n, 988436));
        return function (n) {
            return (0, s.jsx)(U.R, {
                overrideVisibility: !0,
                questOrQuests: t.quest,
                questContent: S.uF.CONNECTIONS_MODAL,
                sourceQuestContent: t.sourceQuestContent,
                children: () => (0, s.jsx)(e, { ...n, ...t }),
            });
        };
    });
}
