var s = n(477900),
    i = n(582128),
    o = n(503698),
    r = n.n(o),
    a = n(323889),
    l = n(855986),
    c = n(189213),
    u = n(462887),
    C = n(866665),
    d = n(834730),
    E = n(939249),
    x = n(31300),
    A = n(687966),
    I = n(653766),
    f = n(200192),
    T = n(738188),
    O = n(192308),
    L = n(775602),
    y = n(438457),
    g = n(144779),
    S = n(413599),
    _ = n(178540),
    m = n(506988),
    N = n(61387),
    Q = n(760914),
    h = n(590202),
    v = n(971649),
    R = n(574112),
    P = n(792620),
    D = n(280905),
    U = n(201805),
    p = n(818348),
    j = n(792996),
    M = n(175276);
function b(t) {
    let { icon: e, text: n, errors: i = [], gameTile: o } = t,
        a = i.length > 0,
        l = a ? I.ConnectionUnknownIcon : f.ConnectionFineIcon;
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
                            (0, s.jsx)(d.E, { variant: "body-sm/medium", color: "text-default", children: n }),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: M.d3,
                        children: [
                            o,
                            (0, s.jsx)(l, {
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
                                (0, s.jsx)(T.WarningIcon, { size: "sm", color: "currentColor", className: M.z3 }),
                                (0, s.jsx)(d.E, { variant: "body-xs/medium", color: "text-muted", children: t }),
                            ],
                        },
                        t,
                    ),
                ),
            }),
        ],
    });
}
n.d(
    e,
    {},
    {
        default: function (t) {
            let { quest: e, transitionState: n, onClose: o, sourceQuestContent: I, refreshOnOpen: f = !1 } = t,
                T = (0, _.O)((t) => t.getErrorHints(e.id)),
                O = (0, i.useRef)(!1),
                D = (0, N.UX)(),
                w = (0, v.vU)()?.getId(),
                q = (0, l.bG)([L.Ay], () => L.Ay.useReducedMotion),
                W = (0, U.Xf)({ useReducedMotion: q, className: M.Zf }),
                k = T.filter((t) => ["xbox", "playstation"].includes(t.connected_account_type)),
                X = (0, P.YL)(e),
                z = (0, l.bG)([S.A], () => S.A.getState().theme),
                V = (0, u.M)(z) ? p.NJ.DARK : p.NJ.LIGHT,
                { startConsoleQuest: F, startingConsoleQuest: K } = (0, N.Wj)({
                    questId: e.id,
                    beforeRequest: () => {
                        (W.startAnimation(),
                            (0, y.r)({
                                type: g.F.CLICK_INTERNAL,
                                adCreativeType: a.p.QUEST,
                                adCreativeId: e.id,
                                questContentCTA: h.Cy.DEFIBRILLATOR,
                                surfaceId: m.uF.CONNECTIONS_MODAL,
                                sourceQuestContent: I,
                                impressionId: w,
                            }));
                    },
                    afterRequest: () => {
                        W.stopAnimation();
                    },
                });
            return (
                (0, i.useEffect)(() => {
                    f && !O.current && (F(), (O.current = !0));
                }, [f, F]),
                (0, s.jsx)(c.a, {
                    transitionState: n,
                    onClose: o,
                    title: j.intl.string(j.t.W5lmKt),
                    subtitle: D.message,
                    actions: [
                        {
                            variant: "secondary",
                            onClick: () =>
                                void (o(),
                                (0, R.b6)(
                                    { quest: e },
                                    {
                                        content: m.uF.CONNECTIONS_MODAL,
                                        ctaContent: h.Cy.VIEW_CONSOLE_CONNECTIONS_LINK,
                                        impressionId: w,
                                        sourceQuestContent: I,
                                    },
                                )),
                            text: j.intl.string(j.t["qiS+xj"]),
                        },
                        { variant: "primary", onClick: () => o(), text: j.intl.string(j.t.cpT0Cq) },
                    ],
                    children: (0, s.jsxs)(s.Fragment, {
                        children: [
                            (0, s.jsxs)("div", {
                                className: M.$Q,
                                children: [
                                    (0, s.jsx)(d.E, {
                                        variant: "body-sm/medium",
                                        color: "text-default",
                                        children: j.intl.string(j.t["+/hZM/"]),
                                    }),
                                    (0, s.jsxs)(E.D, {
                                        className: r()(M.Tm, { [M.r9]: K }),
                                        onClick: F,
                                        children: [
                                            W.render(),
                                            (0, s.jsx)(d.E, {
                                                variant: "body-sm/medium",
                                                color: "currentColor",
                                                className: M.Zf,
                                                children: j.intl.string(j.t.wzzjk9),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, s.jsxs)("div", {
                                className: M.ei,
                                children: [
                                    (0, s.jsx)(b, {
                                        icon: (0, s.jsx)(x.ScreenIcon, { size: "sm" }),
                                        text: j.intl.string(j.t.br3uIi),
                                    }),
                                    (0, s.jsx)(b, {
                                        icon: (0, s.jsx)(A.GameControllerIcon, { size: "sm" }),
                                        text: j.intl.string(j.t.XF4wuA),
                                        errors: X ? void 0 : k.map((t) => t.message),
                                        gameTile: X
                                            ? (0, s.jsx)(C.m, {
                                                  "aria-label": e.config.messages.gameTitle,
                                                  __unsupportedReactNodeAsText: (0, s.jsxs)("div", {
                                                      className: M.YL,
                                                      children: [
                                                          (0, s.jsx)(d.E, {
                                                              variant: "body-sm/medium",
                                                              children: e.config.messages.gameTitle,
                                                          }),
                                                          (0, s.jsx)(d.E, {
                                                              variant: "body-xs/normal",
                                                              color: "text-muted",
                                                              children: j.intl.string(j.t.STpNEC),
                                                          }),
                                                      ],
                                                  }),
                                                  children: (0, s.jsx)("img", {
                                                      className: M.rC,
                                                      alt: e.config.messages.gameTitle,
                                                      src: (0, Q.tW)(e, Q.fY.GAME_TILE, V).url,
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
        },
        i: function (t) {
            (0, O.mM)(async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 988436));
                return function (n) {
                    return (0, s.jsx)(D.R, {
                        overrideVisibility: !0,
                        questOrQuests: t.quest,
                        questContent: m.uF.CONNECTIONS_MODAL,
                        sourceQuestContent: t.sourceQuestContent,
                        children: () => (0, s.jsx)(e, { ...n, ...t }),
                    });
                };
            });
        },
    },
);
