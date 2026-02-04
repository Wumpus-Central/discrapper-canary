n.d(t, {
    A: () => k,
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
    f = n(33621),
    g = n(714510),
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
    C = n(79545),
    N = n(847641),
    T = n(311243),
    j = n(545986),
    x = n(654487),
    P = n(652215),
    w = n(985018),
    L = n(502511);

function R(e) {
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

function D(e) {
    var t;
    let { quest: n } = e,
        i = (0, m.S5)(n.config.expiresAt),
        l = (0, m.S5)(n.config.rewardsConfig.rewardsExpireAt),
        a = (0, s.bG)([u.A], () => u.A.getState().theme),
        c = (0, o.Mwr)(a) ? P.NJ8.DARK : P.NJ8.LIGHT,
        d = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null;
    return (0, r.jsxs)("div", {
        className: L.R_,
        children: [
            (0, r.jsx)("img", {
                className: L.tb,
                alt: "",
                src: (0, A.tW)(n, A.fY.GAME_TILE, c).url,
            }),
            (0, r.jsxs)("div", {
                className: L.UD,
                children: [
                    (0, r.jsx)(o.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: d
                            ? w.intl.string(w.t.XBboAK)
                            : w.intl.formatToPlainString(w.t.EQa7os, {
                                  questName: n.config.messages.questName,
                              }),
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: "text-xs/normal",
                        color: "text-default",
                        children: d
                            ? w.intl.formatToPlainString(w.t.APddvF, {
                                  expirationDate: l,
                              })
                            : w.intl.formatToPlainString(w.t["pX+fmn"], {
                                  expirationDate: i,
                              }),
                    }),
                ],
            }),
        ],
    });
}

function M(e) {
    var t, n, l;
    let { nodeRef: u, quest: A } = e,
        y = (0, _.Ut)(),
        P = (0, s.bG)([p.A], () => p.A.isEnrolling(A.id), [A]),
        [M, k] = i.useState(!1),
        U = i.useCallback(() => k(!0), []),
        G = i.useCallback(() => k(!1), []),
        { launchInGameActivity: V } = (0, m.zW)(A),
        B = f.t.useConfig({
            location: x.rE.ACTIVITY_PANEL,
        }),
        H = (0, C.P)(A),
        F = i.useCallback((e) => {
            e.stopPropagation();
        }, []),
        Y = i.useCallback(() => {
            (0, d.Oy)(A.id, {
                questContent: h.uF.ACTIVITY_PANEL,
                questContentCTA: b.Cy.ACCEPT_QUEST,
                sourceQuestContent: h.uF.ACTIVITY_PANEL,
            }),
                (0, O.vA)(A) && V();
        }, [A, V]),
        K = i.useCallback(() => {
            null != A &&
                (y({
                    questId: A.id,
                    questContent: h.uF.ACTIVITY_PANEL,
                    questContentCTA: b.Cy.TRACK_PROGRESS,
                    sourceQuestContent: h.uF.ACTIVITY_PANEL,
                }),
                (0, j.navigateToQuestHome)({
                    fromContent: h.uF.ACTIVITY_PANEL,
                    questId: A.id,
                }));
        }, [A, y]),
        W = i.useCallback(() => {
            y({
                questId: A.id,
                questContent: h.uF.ACTIVITY_PANEL,
                questContentCTA: b.Cy.LEARN_MORE,
                sourceQuestContent: h.uF.ACTIVITY_PANEL,
            }),
                (0, j.navigateToQuestHome)({
                    fromContent: h.uF.ACTIVITY_PANEL,
                    questId: A.id,
                });
        }, [A.id, y]),
        q = (0, v.ix)({
            quest: A,
            questContent: h.uF.ACTIVITY_PANEL,
            sourceQuestContent: h.uF.ACTIVITY_PANEL,
        }),
        z = (null == (t = A.userStatus) ? void 0 : t.enrolledAt) != null,
        Q = (null == (n = A.userStatus) ? void 0 : n.completedAt) != null,
        X = (0, m.fc)(A),
        Z = (0, g.mU)({
            quest: A,
            taskDetails: X,
            location: x.rE.ACTIVITY_PANEL,
            questContent: h.uF.ACTIVITY_PANEL,
            sourceQuestContent: h.uF.ACTIVITY_PANEL,
            gameProfileSource: c.Ob.QuestActivityPanel,
        }),
        J = (0, O.vA)(A),
        $ = (0, g.NA)({
            quest: A,
        }),
        ee = J ? $ : w.intl.string(w.t.l7E81v);
    return (0, r.jsxs)("div", {
        ref: (e) => {
            u.current = e;
        },
        className: a()(L.iE, {
            [L.tJ]: z,
        }),
        onClick: F,
        onKeyPress: F,
        onFocus: U,
        onMouseEnter: U,
        onBlur: G,
        onMouseLeave: G,
        children: [
            (0, r.jsxs)("div", {
                className: L.Wp,
                children: [
                    z
                        ? (0, r.jsx)(D, {
                              quest: A,
                          })
                        : (0, r.jsx)(N.A, {}),
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
                                ((t = R({}, e)),
                                (n = n =
                                    {
                                        "aria-label": w.intl.string(w.t.DEoVWZ),
                                        children: (0, r.jsx)(o.jNK, {
                                            size: "md",
                                            color: "currentColor",
                                            className: L.Bx,
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
            !z &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(D, {
                            quest: A,
                        }),
                        (0, r.jsx)("div", {
                            className: L.GA,
                            children: (0, r.jsx)(o.Text, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: Z,
                            }),
                        }),
                    ],
                }),
            z &&
                !Q &&
                (0, r.jsx)(T.A, {
                    autoplay: M,
                    className: L.t3,
                    quest: A,
                    questContent: h.uF.ACTIVITY_PANEL,
                    location: x.rE.ACTIVITY_PANEL,
                    taskDetails: X,
                    sourceQuestContent: h.uF.ACTIVITY_PANEL,
                    gameProfileSource: c.Ob.QuestActivityPanel,
                }),
            (0, r.jsxs)("div", {
                className: L.uz,
                children: [
                    !z &&
                        (0, r.jsxs)(o.ButtonGroup, {
                            size: "sm",
                            direction: J ? "vertical" : "horizontal",
                            fullWidth: !0,
                            children: [
                                (0, r.jsx)(o.Button, {
                                    variant: "secondary",
                                    text: w.intl.string(w.t.LLLLPD),
                                    onClick: W,
                                }),
                                B.enabled &&
                                H === C.U.UNENROLLED &&
                                B.enabledQuestStates.has(C.U.UNENROLLED) &&
                                !(0, E.Ic)(A)
                                    ? (0, r.jsx)(S.A, {
                                          quest: A,
                                          size: "md",
                                          analyticsCtxQuestContent: h.uF.ACTIVITY_PANEL,
                                          analyticsCtxSourceQuestContent: h.uF.ACTIVITY_PANEL,
                                      })
                                    : (0, r.jsx)(o.Button, {
                                          variant: "primary",
                                          text: ee,
                                          onClick: Y,
                                          loading: P,
                                          icon: (0, j.Oz)(A),
                                      }),
                            ],
                        }),
                    z &&
                        !Q &&
                        (0, r.jsx)(o.Button, {
                            variant: "primary",
                            size: "sm",
                            fullWidth: !0,
                            text: w.intl.string(w.t.VN1Ajl),
                            onClick: K,
                        }),
                    Q &&
                        (0, r.jsx)(o.Button, {
                            variant: "primary",
                            size: "sm",
                            fullWidth: !0,
                            text: w.intl.string(w.t.cfY4PE),
                            onClick: q,
                        }),
                ],
            }),
        ],
    });
}
let k = function (e) {
    return (0, r.jsx)(y.R, {
        questOrQuests: e.quest,
        questContent: h.uF.ACTIVITY_PANEL,
        sourceQuestContent: h.uF.ACTIVITY_PANEL,
        children: (t) =>
            (0, r.jsx)(
                M,
                R(
                    {
                        nodeRef: t,
                    },
                    e,
                ),
            ),
    });
};
