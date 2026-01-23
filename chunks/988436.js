n.d(t, {
    default: () => T,
    i: () => N,
}),
    n(896048);
var a = n(627968),
    l = n(64700),
    r = n(503698),
    i = n.n(r),
    s = n(158954),
    o = n(311907),
    c = n(990078),
    d = n(582754),
    u = n(397927),
    m = n(775602),
    p = n(544028),
    h = n(341915),
    x = n(890687),
    g = n(579473),
    f = n(18437),
    b = n(590202),
    v = n(971649),
    j = n(901406),
    _ = n(792620),
    y = n(73473),
    A = n(201805),
    C = n(818348),
    S = n(985018),
    O = n(868566);

function T(e) {
    var t;
    let { quest: n, errorHints: r, transitionState: y, onClose: T, sourceQuestContent: N } = e,
        [w, I] = (0, l.useState)(r),
        k = (0, x.UX)(),
        P = (0, f.Ut)(),
        R = null == (t = (0, v.vU)()) ? void 0 : t.getId(),
        D = (0, o.bG)([m.A], () => m.A.useReducedMotion),
        M = (0, A.Xf)({
            useReducedMotion: D,
            className: O.Zf,
        }),
        L = w.filter((e) => ["xbox", "playstation"].includes(e.connected_account_type)),
        U = (0, _.YL)(n),
        B = (0, o.bG)([p.A], () => p.A.getState().theme),
        G = (0, d.Mw)(B) ? C.NJ.DARK : C.NJ.LIGHT,
        { startConsoleQuest: F, startingConsoleQuest: V } = (0, x.Wj)({
            questId: n.id,
            beforeRequest: () => {
                M.startAnimation(),
                    P({
                        questId: n.id,
                        questContent: h.uF.CONNECTIONS_MODAL,
                        questContentCTA: b.Cy.DEFIBRILLATOR,
                        sourceQuestContent: N,
                    });
            },
            afterRequest: (e) => {
                M.stopAnimation(), I(e);
            },
        });
    return (0, a.jsx)(s.Modal, {
        transitionState: y,
        onClose: T,
        title: S.intl.string(S.t.W5lmKt),
        subtitle: k.message,
        actions: [
            {
                variant: "secondary",
                onClick: () =>
                    void (T(),
                    (0, j.b6)(
                        {
                            quest: n,
                        },
                        {
                            content: h.uF.CONNECTIONS_MODAL,
                            ctaContent: b.Cy.VIEW_CONSOLE_CONNECTIONS_LINK,
                            impressionId: R,
                            sourceQuestContent: N,
                        },
                    )),
                text: S.intl.string(S.t["qiS+xj"]),
            },
            {
                variant: "primary",
                onClick: () => T(),
                text: S.intl.string(S.t.cpT0Cq),
            },
        ],
        children: (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsxs)("div", {
                    className: O.$Q,
                    children: [
                        (0, a.jsx)(u.Text, {
                            variant: "eyebrow",
                            color: "text-default",
                            children: S.intl.string(S.t["+/hZM/"]),
                        }),
                        (0, a.jsxs)(u.DUT, {
                            className: i()(O.Tm, {
                                [O.r9]: V,
                            }),
                            onClick: F,
                            children: [
                                M.render(),
                                (0, a.jsx)(u.Text, {
                                    variant: "text-sm/medium",
                                    color: "currentColor",
                                    className: O.Zf,
                                    children: S.intl.string(S.t.wzzjk9),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: O.ei,
                    children: [
                        (0, a.jsx)(E, {
                            icon: (0, a.jsx)(u.kN9, {
                                size: "sm",
                            }),
                            text: S.intl.string(S.t.br3uIi),
                        }),
                        (0, a.jsx)(E, {
                            icon: (0, a.jsx)(u._xR, {
                                size: "sm",
                            }),
                            text: S.intl.string(S.t.XF4wuA),
                            errors: U ? void 0 : L.map((e) => e.message),
                            gameTile: U
                                ? (0, a.jsx)(c.m, {
                                      "aria-label": n.config.messages.gameTitle,
                                      __unsupportedReactNodeAsText: (0, a.jsxs)("div", {
                                          className: O.YL,
                                          children: [
                                              (0, a.jsx)(u.Text, {
                                                  variant: "text-sm/medium",
                                                  children: n.config.messages.gameTitle,
                                              }),
                                              (0, a.jsx)(u.Text, {
                                                  variant: "text-xs/normal",
                                                  color: "text-muted",
                                                  children: S.intl.string(S.t.STpNEC),
                                              }),
                                          ],
                                      }),
                                      children: (0, a.jsx)("img", {
                                          className: O.rC,
                                          alt: n.config.messages.gameTitle,
                                          src: (0, g.tW)(n, g.fY.GAME_TILE, G).url,
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
    let { icon: t, text: n, errors: l = [], gameTile: r } = e,
        s = l.length > 0,
        o = s ? u.esW : u.QtE;
    return (0, a.jsxs)("div", {
        className: O.dJ,
        children: [
            (0, a.jsxs)("div", {
                className: i()(O.w_, {
                    [O.qu]: s,
                }),
                children: [
                    (0, a.jsxs)("div", {
                        className: O.d3,
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
                        className: O.d3,
                        children: [
                            r,
                            (0, a.jsx)(o, {
                                color: "currentColor",
                                size: "sm",
                                className: i()({
                                    [O.kX]: !s,
                                    [O.z3]: s,
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: O.Tt,
                children: l.map((e) =>
                    (0, a.jsxs)(
                        "div",
                        {
                            className: O.Ff,
                            children: [
                                (0, a.jsx)(u.id, {
                                    size: "sm",
                                    color: "currentColor",
                                    className: O.z3,
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
                questContent: h.uF.CONNECTIONS_MODAL,
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
