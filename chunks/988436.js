n.d(t, { default: () => N, i: () => I });
var a = n(627968),
    s = n(64700),
    i = n(503698),
    l = n.n(i),
    r = n(158954),
    o = n(311907),
    d = n(990078),
    c = n(582754),
    u = n(397927),
    m = n(775602),
    h = n(544028),
    x = n(341915),
    p = n(890687),
    g = n(579473),
    _ = n(18437),
    f = n(590202),
    v = n(971649),
    b = n(901406),
    j = n(792620),
    A = n(73473),
    C = n(201805),
    S = n(818348),
    T = n(985018),
    y = n(868566);
function N(e) {
    let { quest: t, errorHints: n, transitionState: i, onClose: A, sourceQuestContent: N } = e,
        [I, k] = (0, s.useState)(n),
        R = (0, p.UX)(),
        O = (0, _.Ut)(),
        w = (0, v.vU)()?.getId(),
        D = (0, o.bG)([m.A], () => m.A.useReducedMotion),
        M = (0, C.Xf)({ useReducedMotion: D, className: y.Zf }),
        P = I.filter((e) => ["xbox", "playstation"].includes(e.connected_account_type)),
        L = (0, j.YL)(t),
        U = (0, o.bG)([h.A], () => h.A.getState().theme),
        B = (0, c.Mw)(U) ? S.NJ.DARK : S.NJ.LIGHT,
        { startConsoleQuest: G, startingConsoleQuest: F } = (0, p.Wj)({
            questId: t.id,
            beforeRequest: () => {
                M.startAnimation(),
                    O({
                        questId: t.id,
                        questContent: x.uF.CONNECTIONS_MODAL,
                        questContentCTA: f.Cy.DEFIBRILLATOR,
                        sourceQuestContent: N,
                    });
            },
            afterRequest: (e) => {
                M.stopAnimation(), k(e);
            },
        });
    return (0, a.jsx)(r.Modal, {
        transitionState: i,
        onClose: A,
        title: T.intl.string(T.t.W5lmKt),
        subtitle: R.message,
        actions: [
            {
                variant: "secondary",
                onClick: () =>
                    void (A(),
                    (0, b.b6)(
                        { quest: t },
                        {
                            content: x.uF.CONNECTIONS_MODAL,
                            ctaContent: f.Cy.VIEW_CONSOLE_CONNECTIONS_LINK,
                            impressionId: w,
                            sourceQuestContent: N,
                        },
                    )),
                text: T.intl.string(T.t["qiS+xj"]),
            },
            { variant: "primary", onClick: () => A(), text: T.intl.string(T.t.cpT0Cq) },
        ],
        children: (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsxs)("div", {
                    className: y.$Q,
                    children: [
                        (0, a.jsx)(u.Text, {
                            variant: "eyebrow",
                            color: "text-default",
                            children: T.intl.string(T.t["+/hZM/"]),
                        }),
                        (0, a.jsxs)(u.DUT, {
                            className: l()(y.Tm, { [y.r9]: F }),
                            onClick: G,
                            children: [
                                M.render(),
                                (0, a.jsx)(u.Text, {
                                    variant: "text-sm/medium",
                                    color: "currentColor",
                                    className: y.Zf,
                                    children: T.intl.string(T.t.wzzjk9),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: y.ei,
                    children: [
                        (0, a.jsx)(E, { icon: (0, a.jsx)(u.kN9, { size: "sm" }), text: T.intl.string(T.t.br3uIi) }),
                        (0, a.jsx)(E, {
                            icon: (0, a.jsx)(u._xR, { size: "sm" }),
                            text: T.intl.string(T.t.XF4wuA),
                            errors: L ? void 0 : P.map((e) => e.message),
                            gameTile: L
                                ? (0, a.jsx)(d.m, {
                                      "aria-label": t.config.messages.gameTitle,
                                      __unsupportedReactNodeAsText: (0, a.jsxs)("div", {
                                          className: y.YL,
                                          children: [
                                              (0, a.jsx)(u.Text, {
                                                  variant: "text-sm/medium",
                                                  children: t.config.messages.gameTitle,
                                              }),
                                              (0, a.jsx)(u.Text, {
                                                  variant: "text-xs/normal",
                                                  color: "text-muted",
                                                  children: T.intl.string(T.t.STpNEC),
                                              }),
                                          ],
                                      }),
                                      children: (0, a.jsx)("img", {
                                          className: y.rC,
                                          alt: t.config.messages.gameTitle,
                                          src: (0, g.tW)(t, g.fY.GAME_TILE, B).url,
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
function E(e) {
    let { icon: t, text: n, errors: s = [], gameTile: i } = e,
        r = s.length > 0,
        o = r ? u.esW : u.QtE;
    return (0, a.jsxs)("div", {
        className: y.dJ,
        children: [
            (0, a.jsxs)("div", {
                className: l()(y.w_, { [y.qu]: r }),
                children: [
                    (0, a.jsxs)("div", {
                        className: y.d3,
                        children: [
                            t,
                            (0, a.jsx)(u.Text, { variant: "text-sm/medium", color: "text-default", children: n }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: y.d3,
                        children: [
                            i,
                            (0, a.jsx)(o, {
                                color: "currentColor",
                                size: "sm",
                                className: l()({ [y.kX]: !r, [y.z3]: r }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: y.Tt,
                children: s.map((e) =>
                    (0, a.jsxs)(
                        "div",
                        {
                            className: y.Ff,
                            children: [
                                (0, a.jsx)(u.id, { size: "sm", color: "currentColor", className: y.z3 }),
                                (0, a.jsx)(u.Text, { variant: "text-xs/medium", color: "text-muted", children: e }),
                            ],
                        },
                        e,
                    ),
                ),
            }),
        ],
    });
}
function I(e) {
    (0, u.mMO)(async () => {
        let { default: t } = await Promise.resolve().then(n.bind(n, 988436));
        return function (n) {
            return (0, a.jsx)(A.R, {
                overrideVisibility: !0,
                questOrQuests: e.quest,
                questContent: x.uF.CONNECTIONS_MODAL,
                sourceQuestContent: e.sourceQuestContent,
                children: () => (0, a.jsx)(t, { ...n, ...e }),
            });
        };
    });
}
