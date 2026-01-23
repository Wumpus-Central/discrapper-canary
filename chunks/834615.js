n.d(t, {
    A: () => M,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(311907),
    o = n(397927),
    c = n(409626),
    u = n(544028),
    d = n(829219),
    p = n(859703),
    h = n(341915),
    g = n(245853),
    f = n(714510),
    m = n(890687),
    A = n(579473),
    _ = n(18437),
    b = n(590202),
    E = n(710969),
    O = n(814793),
    y = n(73473),
    I = n(270045),
    v = n(201805),
    S = n(212614),
    C = n(847641),
    N = n(311243),
    T = n(545986),
    j = n(654487),
    x = n(652215),
    P = n(985018),
    w = n(502511);

function L(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function R(e) {
    var t;
    let { quest: n } = e,
        i = (0, m.S5)(n.config.expiresAt),
        l = (0, m.S5)(n.config.rewardsConfig.rewardsExpireAt),
        a = (0, s.bG)([u.A], () => u.A.getState().theme),
        c = (0, o.Mwr)(a) ? x.NJ8.DARK : x.NJ8.LIGHT,
        d = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null;
    return (0, r.jsxs)("div", {
        className: w.R_,
        children: [
            (0, r.jsx)("img", {
                className: w.tb,
                alt: "",
                src: (0, A.tW)(n, A.fY.GAME_TILE, c).url,
            }),
            (0, r.jsxs)("div", {
                className: w.UD,
                children: [
                    (0, r.jsx)(o.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: d
                            ? P.intl.string(P.t.XBboAK)
                            : P.intl.formatToPlainString(P.t.EQa7os, {
                                  questName: n.config.messages.questName,
                              }),
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: "text-xs/normal",
                        color: "text-default",
                        children: d
                            ? P.intl.formatToPlainString(P.t.APddvF, {
                                  expirationDate: l,
                              })
                            : P.intl.formatToPlainString(P.t["pX+fmn"], {
                                  expirationDate: i,
                              }),
                    }),
                ],
            }),
        ],
    });
}

function D(e) {
    var t, n, l;
    let { nodeRef: u, quest: A } = e,
        y = (0, _.Ut)(),
        x = (0, s.bG)([p.A], () => p.A.isEnrolling(A.id), [A]),
        [D, M] = i.useState(!1),
        k = i.useCallback(() => M(!0), []),
        U = i.useCallback(() => M(!1), []),
        { launchInGameActivity: G } = (0, m.zW)(A),
        V = g.t$.useConfig({
            location: j.rE.ACTIVITY_PANEL,
        }).enabled,
        B = i.useCallback((e) => {
            e.stopPropagation();
        }, []),
        H = i.useCallback(() => {
            (0, d.Oy)(A.id, {
                questContent: h.uF.ACTIVITY_PANEL,
                questContentCTA: b.Cy.ACCEPT_QUEST,
                sourceQuestContent: h.uF.ACTIVITY_PANEL,
            }),
                (0, O.vA)(A) && G();
        }, [A, G]),
        F = i.useCallback(() => {
            null != A &&
                (y({
                    questId: A.id,
                    questContent: h.uF.ACTIVITY_PANEL,
                    questContentCTA: b.Cy.TRACK_PROGRESS,
                    sourceQuestContent: h.uF.ACTIVITY_PANEL,
                }),
                (0, T.navigateToQuestHome)({
                    fromContent: h.uF.ACTIVITY_PANEL,
                    questId: A.id,
                }));
        }, [A, y]),
        Y = i.useCallback(() => {
            y({
                questId: A.id,
                questContent: h.uF.ACTIVITY_PANEL,
                questContentCTA: b.Cy.LEARN_MORE,
                sourceQuestContent: h.uF.ACTIVITY_PANEL,
            }),
                (0, T.navigateToQuestHome)({
                    fromContent: h.uF.ACTIVITY_PANEL,
                    questId: A.id,
                });
        }, [A.id, y]),
        K = (0, v.ix)({
            quest: A,
            questContent: h.uF.ACTIVITY_PANEL,
            sourceQuestContent: h.uF.ACTIVITY_PANEL,
        }),
        W = (null == (t = A.userStatus) ? void 0 : t.enrolledAt) != null,
        q = (null == (n = A.userStatus) ? void 0 : n.completedAt) != null,
        z = (0, m.fc)(A),
        Q = (0, f.mU)({
            quest: A,
            taskDetails: z,
            location: j.rE.ACTIVITY_PANEL,
            questContent: h.uF.ACTIVITY_PANEL,
            sourceQuestContent: h.uF.ACTIVITY_PANEL,
            gameProfileSource: c.Ob.QuestActivityPanel,
        }),
        X = (0, O.vA)(A),
        Z = (0, f.NA)({
            quest: A,
        }),
        J = X ? Z : P.intl.string(P.t.l7E81v);
    return (0, r.jsxs)("div", {
        ref: (e) => {
            u.current = e;
        },
        className: a()(w.iE, {
            [w.tJ]: W,
        }),
        onClick: B,
        onKeyPress: B,
        onFocus: k,
        onMouseEnter: k,
        onBlur: U,
        onMouseLeave: U,
        children: [
            (0, r.jsxs)("div", {
                className: w.Wp,
                children: [
                    W
                        ? (0, r.jsx)(R, {
                              quest: A,
                          })
                        : (0, r.jsx)(C.A, {}),
                    (0, r.jsx)(I.C, {
                        quest: A,
                        questContent: h.uF.ACTIVITY_PANEL,
                        shouldShowDisclosure: (null == (l = A.userStatus) ? void 0 : l.enrolledAt) == null,
                        showShareLink: !0,
                        sourceQuestContent: h.uF.ACTIVITY_PANEL,
                        children: (e) => {
                            var t, n;
                            return (0, r.jsx)(
                                o.DUT,
                                ((t = L({}, e)),
                                (n = n =
                                    {
                                        "aria-label": P.intl.string(P.t.DEoVWZ),
                                        children: (0, r.jsx)(o.jNK, {
                                            size: "md",
                                            color: "currentColor",
                                            className: w.Bx,
                                        }),
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, r);
                                          }
                                          return n;
                                      })(Object(n)).forEach(function (e) {
                                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                      }),
                                t),
                            );
                        },
                    }),
                ],
            }),
            !W &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(R, {
                            quest: A,
                        }),
                        (0, r.jsx)("div", {
                            className: w.GA,
                            children: (0, r.jsx)(o.Text, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: Q,
                            }),
                        }),
                    ],
                }),
            W &&
                !q &&
                (0, r.jsx)(N.A, {
                    autoplay: D,
                    className: w.t3,
                    quest: A,
                    questContent: h.uF.ACTIVITY_PANEL,
                    location: j.rE.ACTIVITY_PANEL,
                    taskDetails: z,
                    sourceQuestContent: h.uF.ACTIVITY_PANEL,
                    gameProfileSource: c.Ob.QuestActivityPanel,
                }),
            (0, r.jsxs)("div", {
                className: w.uz,
                children: [
                    !W &&
                        (0, r.jsxs)(o.ButtonGroup, {
                            size: "sm",
                            direction: X ? "vertical" : "horizontal",
                            fullWidth: !0,
                            children: [
                                (0, r.jsx)(o.Button, {
                                    variant: "secondary",
                                    text: P.intl.string(P.t.LLLLPD),
                                    onClick: Y,
                                }),
                                V && !(0, E.Ic)(A)
                                    ? (0, r.jsx)(S.A, {
                                          quest: A,
                                          size: "md",
                                          analyticsCtxQuestContent: h.uF.ACTIVITY_PANEL,
                                          analyticsCtxSourceQuestContent: h.uF.ACTIVITY_PANEL,
                                      })
                                    : (0, r.jsx)(o.Button, {
                                          variant: "primary",
                                          text: J,
                                          onClick: H,
                                          loading: x,
                                          icon: (0, T.Oz)(A),
                                      }),
                            ],
                        }),
                    W &&
                        !q &&
                        (0, r.jsx)(o.Button, {
                            variant: "primary",
                            size: "sm",
                            fullWidth: !0,
                            text: P.intl.string(P.t.VN1Ajl),
                            onClick: F,
                        }),
                    q &&
                        (0, r.jsx)(o.Button, {
                            variant: "primary",
                            size: "sm",
                            fullWidth: !0,
                            text: P.intl.string(P.t.cfY4PE),
                            onClick: K,
                        }),
                ],
            }),
        ],
    });
}
let M = function (e) {
    return (0, r.jsx)(y.R, {
        questOrQuests: e.quest,
        questContent: h.uF.ACTIVITY_PANEL,
        sourceQuestContent: h.uF.ACTIVITY_PANEL,
        children: (t) =>
            (0, r.jsx)(
                D,
                L(
                    {
                        nodeRef: t,
                    },
                    e,
                ),
            ),
    });
};
