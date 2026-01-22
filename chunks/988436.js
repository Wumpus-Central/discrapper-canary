n.d(t, {
    default: () => O,
    i: () => N,
}),
    n(896048);
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(158954),
    o = n(311907),
    c = n(990078),
    d = n(582754),
    u = n(397927),
    m = n(775602),
    p = n(544028),
    h = n(216456),
    f = n(906822),
    x = n(341915),
    b = n(890687),
    g = n(579473),
    v = n(901406),
    j = n(792620),
    y = n(73473),
    _ = n(201805),
    A = n(818348),
    C = n(985018),
    S = n(868566);
function O(e) {
    var t;
    let { quest: n, errorHints: i, transitionState: y, onClose: O, sourceQuestContent: N } = e,
        [T, I] = (0, l.useState)(i),
        w = (0, b.UX)(),
        k = (0, h.Ut)(),
        P = null == (t = (0, f.vU)()) ? void 0 : t.getId(),
        R = (0, o.bG)([m.A], () => m.A.useReducedMotion),
        D = (0, _.Xf)({
            useReducedMotion: R,
            className: S.Zf,
        }),
        M = T.filter((e) => ["xbox", "playstation"].includes(e.connected_account_type)),
        L = (0, j.YL)(n),
        U = (0, o.bG)([p.A], () => p.A.getState().theme),
        B = (0, d.Mw)(U) ? A.NJ.DARK : A.NJ.LIGHT,
        { startConsoleQuest: G, startingConsoleQuest: F } = (0, b.Wj)({
            questId: n.id,
            beforeRequest: () => {
                D.startAnimation(),
                    k({
                        questId: n.id,
                        questContent: x.uF.CONNECTIONS_MODAL,
                        questContentCTA: h.Cy.DEFIBRILLATOR,
                        sourceQuestContent: N,
                    });
            },
            afterRequest: (e) => {
                D.stopAnimation(), I(e);
            },
        });
    return (0, a.jsx)(s.Modal, {
        transitionState: y,
        onClose: O,
        title: C.intl.string(C.t.W5lmKt),
        subtitle: w.message,
        actions: [
            {
                variant: "secondary",
                onClick: () =>
                    void (O(),
                    (0, v.b6)(
                        { quest: n },
                        {
                            content: x.uF.CONNECTIONS_MODAL,
                            ctaContent: h.Cy.VIEW_CONSOLE_CONNECTIONS_LINK,
                            impressionId: P,
                            sourceQuestContent: N,
                        },
                    )),
                text: C.intl.string(C.t["qiS+xj"]),
            },
            {
                variant: "primary",
                onClick: () => O(),
                text: C.intl.string(C.t.cpT0Cq),
            },
        ],
        children: (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsxs)("div", {
                    className: S.$Q,
                    children: [
                        (0, a.jsx)(u.Text, {
                            variant: "eyebrow",
                            color: "text-default",
                            children: C.intl.string(C.t["+/hZM/"]),
                        }),
                        (0, a.jsxs)(u.DUT, {
                            className: r()(S.Tm, { [S.r9]: F }),
                            onClick: G,
                            children: [
                                D.render(),
                                (0, a.jsx)(u.Text, {
                                    variant: "text-sm/medium",
                                    color: "currentColor",
                                    className: S.Zf,
                                    children: C.intl.string(C.t.wzzjk9),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: S.ei,
                    children: [
                        (0, a.jsx)(E, {
                            icon: (0, a.jsx)(u.kN9, { size: "sm" }),
                            text: C.intl.string(C.t.br3uIi),
                        }),
                        (0, a.jsx)(E, {
                            icon: (0, a.jsx)(u._xR, { size: "sm" }),
                            text: C.intl.string(C.t.XF4wuA),
                            errors: L ? void 0 : M.map((e) => e.message),
                            gameTile: L
                                ? (0, a.jsx)(c.m, {
                                      "aria-label": n.config.messages.gameTitle,
                                      __unsupportedReactNodeAsText: (0, a.jsxs)("div", {
                                          className: S.YL,
                                          children: [
                                              (0, a.jsx)(u.Text, {
                                                  variant: "text-sm/medium",
                                                  children: n.config.messages.gameTitle,
                                              }),
                                              (0, a.jsx)(u.Text, {
                                                  variant: "text-xs/normal",
                                                  color: "text-muted",
                                                  children: C.intl.string(C.t.STpNEC),
                                              }),
                                          ],
                                      }),
                                      children: (0, a.jsx)("img", {
                                          className: S.rC,
                                          alt: n.config.messages.gameTitle,
                                          src: (0, g.tW)(n, g.fY.GAME_TILE, B).url,
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
    let { icon: t, text: n, errors: l = [], gameTile: i } = e,
        s = l.length > 0,
        o = s ? u.esW : u.QtE;
    return (0, a.jsxs)("div", {
        className: S.dJ,
        children: [
            (0, a.jsxs)("div", {
                className: r()(S.w_, { [S.qu]: s }),
                children: [
                    (0, a.jsxs)("div", {
                        className: S.d3,
                        children: [
                            t,
                            (0, a.jsx)(u.Text, {
                                variant: "text-sm/medium",
                                color: "text-default",
                                children: n,
                            }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: S.d3,
                        children: [
                            i,
                            (0, a.jsx)(o, {
                                color: "currentColor",
                                size: "sm",
                                className: r()({
                                    [S.kX]: !s,
                                    [S.z3]: s,
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: S.Tt,
                children: l.map((e) =>
                    (0, a.jsxs)(
                        "div",
                        {
                            className: S.Ff,
                            children: [
                                (0, a.jsx)(u.id, {
                                    size: "sm",
                                    color: "currentColor",
                                    className: S.z3,
                                }),
                                (0, a.jsx)(u.Text, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    children: e,
                                }),
                            ],
                        },
                        e,
                    ),
                ),
            }),
        ],
    });
}
function N(e) {
    (0, u.mMO)(async () => {
        let { default: t } = await Promise.resolve().then(n.bind(n, 988436));
        return function (n) {
            return (0, a.jsx)(y.R, {
                overrideVisibility: !0,
                questOrQuests: e.quest,
                questContent: x.uF.CONNECTIONS_MODAL,
                sourceQuestContent: e.sourceQuestContent,
                children: () =>
                    (0, a.jsx)(
                        t,
                        (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    a = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (a = a.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        }),
                                    )),
                                    a.forEach(function (t) {
                                        var a;
                                        (a = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: a,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = a);
                                    });
                            }
                            return e;
                        })({}, n, e),
                    ),
            });
        };
    });
}
