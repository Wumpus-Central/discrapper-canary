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
    m = n(413599),
    N = n(178540),
    S = n(506988),
    _ = n(61387),
    Q = n(760914),
    v = n(590202),
    h = n(971649),
    R = n(574112),
    P = n(792620),
    D = n(280905),
    p = n(201805),
    U = n(818348),
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
                T = (0, N.O)((t) => t.getErrorHints(e.id)),
                O = (0, i.useRef)(!1),
                D = (0, _.UX)(),
                w = (0, h.vU)()?.getId(),
                q = (0, l.bG)([L.Ay], () => L.Ay.useReducedMotion),
                k = (0, p.Xf)({ useReducedMotion: q, className: M.Zf }),
                W = T.filter((t) => ["xbox", "playstation"].includes(t.connected_account_type)),
                X = (0, P.YL)(e),
                z = (0, l.bG)([m.A], () => m.A.getState().theme),
                V = (0, u.M)(z) ? U.NJ.DARK : U.NJ.LIGHT,
                { startConsoleQuest: F, startingConsoleQuest: K } = (0, _.Wj)({
                    questId: e.id,
                    beforeRequest: () => {
                        (k.startAnimation(),
                            (0, y.r)({
                                type: g.F.CLICK_INTERNAL,
                                adCreativeType: a.p.QUEST,
                                adCreativeId: e.id,
                                questContentCTA: v.Cy.DEFIBRILLATOR,
                                surfaceId: S.uF.CONNECTIONS_MODAL,
                                sourceQuestContent: I,
                                impressionId: w,
                            }));
                    },
                    afterRequest: () => {
                        k.stopAnimation();
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
                                        content: S.uF.CONNECTIONS_MODAL,
                                        ctaContent: v.Cy.VIEW_CONSOLE_CONNECTIONS_LINK,
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
                                            k.render(),
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
                                        errors: X ? void 0 : W.map((t) => t.message),
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
                        questContent: S.uF.CONNECTIONS_MODAL,
                        sourceQuestContent: t.sourceQuestContent,
                        children: () => (0, s.jsx)(e, { ...n, ...t }),
                    });
                };
            });
        },
    },
);
