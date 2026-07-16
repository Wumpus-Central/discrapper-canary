n.d(e, { default: () => w, i: () => V });
var s = n(627968),
    i = n(64700),
    o = n(503698),
    r = n.n(o),
    a = n(323889),
    u = n(189213),
    l = n(17928),
    c = n(462887),
    C = n(866665),
    d = n(834730),
    E = n(939249),
    x = n(31300),
    T = n(687966),
    A = n(653766),
    I = n(200192),
    _ = n(738188),
    f = n(192308),
    O = n(775602),
    N = n(274670),
    y = n(144779),
    L = n(363195),
    q = n(178540),
    g = n(24001),
    m = n(104886),
    R = n(574677),
    Q = n(46948),
    S = n(18437),
    P = n(590202),
    h = n(971649),
    v = n(901406),
    D = n(792620),
    j = n(73473),
    p = n(764336),
    U = n(818348),
    b = n(375708),
    M = n(212885);
function w(t) {
    let { quest: e, errorHints: n, transitionState: o, onClose: A, sourceQuestContent: I, refreshOnOpen: _ = !1 } = t,
        [f, j] = (0, i.useState)(n),
        w = (0, q.O)((t) => t.setErrorHints),
        V = (0, i.useRef)(!1),
        X = (0, R.UX)(),
        z = (0, S.Ut)(),
        W = (0, h.vU)()?.getId(),
        F = (0, l.bG)([O.Ay], () => O.Ay.useReducedMotion),
        K = (0, p.Xf)({ useReducedMotion: F, className: M.Zf }),
        B = f.filter((t) => ["xbox", "playstation"].includes(t.connected_account_type)),
        Y = (0, D.YL)(e),
        G = (0, l.bG)([L.A], () => L.A.getState().theme),
        H = (0, c.M)(G) ? U.NJ.DARK : U.NJ.LIGHT,
        { startConsoleQuest: $, startingConsoleQuest: J } = (0, R.Wj)({
            questId: e.id,
            beforeRequest: () => {
                K.startAnimation(),
                    (0, m.E5)(m.kI.STEP_2_CLICKED_INTERNAL, "quest_console_connection_errors_modal")
                        ? (0, N.r)({
                              type: y.F.CLICK_INTERNAL,
                              adCreativeType: a.p.QUEST,
                              adCreativeId: e.id,
                              questContentCTA: P.Cy.DEFIBRILLATOR,
                              surfaceId: g.uF.CONNECTIONS_MODAL,
                              sourceQuestContent: I,
                              impressionId: W,
                          })
                        : z({
                              questId: e.id,
                              questContent: g.uF.CONNECTIONS_MODAL,
                              questContentCTA: P.Cy.DEFIBRILLATOR,
                              sourceQuestContent: I,
                          });
            },
            afterRequest: (t) => {
                K.stopAnimation(), j(t), w(e.id, t);
            },
        });
    return (
        (0, i.useEffect)(() => {
            _ && !V.current && ($(), (V.current = !0));
        }, [_, $]),
        (0, s.jsx)(u.Modal, {
            transitionState: o,
            onClose: A,
            title: b.intl.string(b.t.W5lmKt),
            subtitle: X.message,
            actions: [
                {
                    variant: "secondary",
                    onClick: () =>
                        void (A(),
                        (0, v.b6)(
                            { quest: e },
                            {
                                content: g.uF.CONNECTIONS_MODAL,
                                ctaContent: P.Cy.VIEW_CONSOLE_CONNECTIONS_LINK,
                                impressionId: W,
                                sourceQuestContent: I,
                            },
                        )),
                    text: b.intl.string(b.t["qiS+xj"]),
                },
                { variant: "primary", onClick: () => A(), text: b.intl.string(b.t.cpT0Cq) },
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
                                className: r()(M.Tm, { [M.r9]: J }),
                                onClick: $,
                                children: [
                                    K.render(),
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
                                icon: (0, s.jsx)(T._, { size: "sm" }),
                                text: b.intl.string(b.t.XF4wuA),
                                errors: Y ? void 0 : B.map((t) => t.message),
                                gameTile: Y
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
                                              src: (0, Q.tW)(e, Q.fY.GAME_TILE, H).url,
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
        u = a ? A.e : I.Q;
    return (0, s.jsxs)("div", {
        className: M.dJ,
        children: [
            (0, s.jsxs)("div", {
                className: r()(M.w_, { [M.qu]: a }),
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
                            (0, s.jsx)(u, {
                                color: "currentColor",
                                size: "sm",
                                className: r()({ [M.kX]: !a, [M.z3]: a }),
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
    (0, f.openModalLazy)(async () => {
        let { default: e } = await Promise.resolve().then(n.bind(n, 988436));
        return function (n) {
            return (0, s.jsx)(j.R, {
                overrideVisibility: !0,
                questOrQuests: t.quest,
                questContent: g.uF.CONNECTIONS_MODAL,
                sourceQuestContent: t.sourceQuestContent,
                children: () => (0, s.jsx)(e, { ...n, ...t }),
            });
        };
    });
}
