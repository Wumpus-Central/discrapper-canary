n.d(e, { default: () => b, i: () => w });
var s = n(477900),
    i = n(582128),
    r = n(503698),
    a = n.n(r),
    o = n(323889),
    l = n(17928),
    u = n(189213),
    c = n(462887),
    C = n(866665),
    d = n(834730),
    E = n(939249),
    x = n(31300),
    A = n(687966),
    f = n(653766),
    I = n(200192),
    T = n(738188),
    O = n(192308),
    L = n(775602),
    g = n(274670),
    y = n(144779),
    N = n(363195),
    _ = n(178540),
    S = n(738822),
    m = n(77870),
    Q = n(291749),
    R = n(590202),
    v = n(971649),
    P = n(620954),
    h = n(792620),
    D = n(657792),
    p = n(201805),
    j = n(818348),
    U = n(105292),
    M = n(175276);
function b(t) {
    let { quest: e, transitionState: n, onClose: r, sourceQuestContent: f, refreshOnOpen: I = !1 } = t,
        T = (0, _.O)((t) => t.getErrorHints(e.id)),
        O = (0, i.useRef)(!1),
        D = (0, m.UX)(),
        b = (0, v.vU)()?.getId(),
        w = (0, l.bG)([L.Ay], () => L.Ay.useReducedMotion),
        W = (0, p.Xf)({ useReducedMotion: w, className: M.Zf }),
        X = T.filter((t) => ["xbox", "playstation"].includes(t.connected_account_type)),
        k = (0, h.YL)(e),
        z = (0, l.bG)([N.A], () => N.A.getState().theme),
        V = (0, c.M)(z) ? j.NJ.DARK : j.NJ.LIGHT,
        { startConsoleQuest: F, startingConsoleQuest: K } = (0, m.Wj)({
            questId: e.id,
            beforeRequest: () => {
                (W.startAnimation(),
                    (0, g.r)({
                        type: y.F.CLICK_INTERNAL,
                        adCreativeType: o.p.QUEST,
                        adCreativeId: e.id,
                        questContentCTA: R.Cy.DEFIBRILLATOR,
                        surfaceId: S.uF.CONNECTIONS_MODAL,
                        sourceQuestContent: f,
                        impressionId: b,
                    }));
            },
            afterRequest: () => {
                W.stopAnimation();
            },
        });
    return (
        (0, i.useEffect)(() => {
            I && !O.current && (F(), (O.current = !0));
        }, [I, F]),
        (0, s.jsx)(u.a, {
            transitionState: n,
            onClose: r,
            title: U.intl.string(U.t.W5lmKt),
            subtitle: D.message,
            actions: [
                {
                    variant: "secondary",
                    onClick: () =>
                        void (r(),
                        (0, P.b6)(
                            { quest: e },
                            {
                                content: S.uF.CONNECTIONS_MODAL,
                                ctaContent: R.Cy.VIEW_CONSOLE_CONNECTIONS_LINK,
                                impressionId: b,
                                sourceQuestContent: f,
                            },
                        )),
                    text: U.intl.string(U.t["qiS+xj"]),
                },
                { variant: "primary", onClick: () => r(), text: U.intl.string(U.t.cpT0Cq) },
            ],
            children: (0, s.jsxs)(s.Fragment, {
                children: [
                    (0, s.jsxs)("div", {
                        className: M.$Q,
                        children: [
                            (0, s.jsx)(d.E, {
                                variant: "eyebrow",
                                color: "text-default",
                                children: U.intl.string(U.t["+/hZM/"]),
                            }),
                            (0, s.jsxs)(E.D, {
                                className: a()(M.Tm, { [M.r9]: K }),
                                onClick: F,
                                children: [
                                    W.render(),
                                    (0, s.jsx)(d.E, {
                                        variant: "text-sm/medium",
                                        color: "currentColor",
                                        className: M.Zf,
                                        children: U.intl.string(U.t.wzzjk9),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: M.ei,
                        children: [
                            (0, s.jsx)(q, { icon: (0, s.jsx)(x.k, { size: "sm" }), text: U.intl.string(U.t.br3uIi) }),
                            (0, s.jsx)(q, {
                                icon: (0, s.jsx)(A.GameControllerIcon, { size: "sm" }),
                                text: U.intl.string(U.t.XF4wuA),
                                errors: k ? void 0 : X.map((t) => t.message),
                                gameTile: k
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
                                                      children: U.intl.string(U.t.STpNEC),
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
}
function q(t) {
    let { icon: e, text: n, errors: i = [], gameTile: r } = t,
        o = i.length > 0,
        l = o ? f.e : I.Q;
    return (0, s.jsxs)("div", {
        className: M.dJ,
        children: [
            (0, s.jsxs)("div", {
                className: a()(M.w_, { [M.qu]: o }),
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
                            r,
                            (0, s.jsx)(l, {
                                color: "currentColor",
                                size: "sm",
                                className: a()({ [M.kX]: !o, [M.z3]: o }),
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
function w(t) {
    (0, O.openModalLazy)(async () => {
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
}
