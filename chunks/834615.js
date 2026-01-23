n.d(t, {
    A: () => D,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(311907),
    o = n(397927),
    c = n(544028),
    u = n(829219),
    d = n(859703),
    p = n(341915),
    h = n(245853),
    g = n(714510),
    f = n(890687),
    m = n(579473),
    A = n(18437),
    _ = n(590202),
    b = n(710969),
    E = n(814793),
    O = n(73473),
    y = n(270045),
    I = n(201805),
    v = n(212614),
    S = n(847641),
    C = n(311243),
    N = n(545986),
    T = n(654487),
    j = n(652215),
    x = n(985018),
    P = n(502511);

function w(e) {
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

function L(e) {
    var t;
    let { quest: n } = e,
        i = (0, f.S5)(n.config.expiresAt),
        l = (0, f.S5)(n.config.rewardsConfig.rewardsExpireAt),
        a = (0, s.bG)([c.A], () => c.A.getState().theme),
        u = (0, o.Mwr)(a) ? j.NJ8.DARK : j.NJ8.LIGHT,
        d = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null;
    return (0, r.jsxs)("div", {
        className: P.R_,
        children: [
            (0, r.jsx)("img", {
                className: P.tb,
                alt: "",
                src: (0, m.tW)(n, m.fY.GAME_TILE, u).url,
            }),
            (0, r.jsxs)("div", {
                className: P.UD,
                children: [
                    (0, r.jsx)(o.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: d
                            ? x.intl.string(x.t.XBboAK)
                            : x.intl.formatToPlainString(x.t.EQa7os, {
                                  questName: n.config.messages.questName,
                              }),
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: "text-xs/normal",
                        color: "text-default",
                        children: d
                            ? x.intl.formatToPlainString(x.t.APddvF, {
                                  expirationDate: l,
                              })
                            : x.intl.formatToPlainString(x.t["pX+fmn"], {
                                  expirationDate: i,
                              }),
                    }),
                ],
            }),
        ],
    });
}

function R(e) {
    var t, n, l;
    let { nodeRef: c, quest: m } = e,
        O = (0, A.Ut)(),
        j = (0, s.bG)([d.A], () => d.A.isEnrolling(m.id), [m]),
        [R, D] = i.useState(!1),
        M = i.useCallback(() => D(!0), []),
        k = i.useCallback(() => D(!1), []),
        { launchInGameActivity: U } = (0, f.zW)(m),
        G = h.t$.useConfig({
            location: T.rE.ACTIVITY_PANEL,
        }).enabled,
        V = i.useCallback((e) => {
            e.stopPropagation();
        }, []),
        B = i.useCallback(() => {
            (0, u.Oy)(m.id, {
                questContent: p.uF.ACTIVITY_PANEL,
                questContentCTA: _.Cy.ACCEPT_QUEST,
                sourceQuestContent: p.uF.ACTIVITY_PANEL,
            }),
                (0, E.vA)(m) && U();
        }, [m, U]),
        H = i.useCallback(() => {
            null != m &&
                (O({
                    questId: m.id,
                    questContent: p.uF.ACTIVITY_PANEL,
                    questContentCTA: _.Cy.TRACK_PROGRESS,
                    sourceQuestContent: p.uF.ACTIVITY_PANEL,
                }),
                (0, N.navigateToQuestHome)({
                    fromContent: p.uF.ACTIVITY_PANEL,
                    questId: m.id,
                }));
        }, [m, O]),
        F = i.useCallback(() => {
            O({
                questId: m.id,
                questContent: p.uF.ACTIVITY_PANEL,
                questContentCTA: _.Cy.LEARN_MORE,
                sourceQuestContent: p.uF.ACTIVITY_PANEL,
            }),
                (0, N.navigateToQuestHome)({
                    fromContent: p.uF.ACTIVITY_PANEL,
                    questId: m.id,
                });
        }, [m.id, O]),
        Y = (0, I.ix)({
            quest: m,
            questContent: p.uF.ACTIVITY_PANEL,
            sourceQuestContent: p.uF.ACTIVITY_PANEL,
        }),
        K = (null == (t = m.userStatus) ? void 0 : t.enrolledAt) != null,
        W = (null == (n = m.userStatus) ? void 0 : n.completedAt) != null,
        q = (0, f.fc)(m),
        z = (0, g.mU)({
            quest: m,
            taskDetails: q,
            location: T.rE.ACTIVITY_PANEL,
            questContent: p.uF.ACTIVITY_PANEL,
            sourceQuestContent: p.uF.ACTIVITY_PANEL,
        }),
        Q = (0, E.vA)(m),
        X = (0, g.NA)({
            quest: m,
        }),
        Z = Q ? X : x.intl.string(x.t.l7E81v);
    return (0, r.jsxs)("div", {
        ref: (e) => {
            c.current = e;
        },
        className: a()(P.iE, {
            [P.tJ]: K,
        }),
        onClick: V,
        onKeyPress: V,
        onFocus: M,
        onMouseEnter: M,
        onBlur: k,
        onMouseLeave: k,
        children: [
            (0, r.jsxs)("div", {
                className: P.Wp,
                children: [
                    K
                        ? (0, r.jsx)(L, {
                              quest: m,
                          })
                        : (0, r.jsx)(S.A, {}),
                    (0, r.jsx)(y.C, {
                        quest: m,
                        questContent: p.uF.ACTIVITY_PANEL,
                        shouldShowDisclosure: (null == (l = m.userStatus) ? void 0 : l.enrolledAt) == null,
                        showShareLink: !0,
                        sourceQuestContent: p.uF.ACTIVITY_PANEL,
                        children: (e) => {
                            var t, n;
                            return (0, r.jsx)(
                                o.DUT,
                                ((t = w({}, e)),
                                (n = n =
                                    {
                                        "aria-label": x.intl.string(x.t.DEoVWZ),
                                        children: (0, r.jsx)(o.jNK, {
                                            size: "md",
                                            color: "currentColor",
                                            className: P.Bx,
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
            !K &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(L, {
                            quest: m,
                        }),
                        (0, r.jsx)("div", {
                            className: P.GA,
                            children: (0, r.jsx)(o.Text, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: z,
                            }),
                        }),
                    ],
                }),
            K &&
                !W &&
                (0, r.jsx)(C.A, {
                    autoplay: R,
                    className: P.t3,
                    quest: m,
                    questContent: p.uF.ACTIVITY_PANEL,
                    location: T.rE.ACTIVITY_PANEL,
                    taskDetails: q,
                    sourceQuestContent: p.uF.ACTIVITY_PANEL,
                }),
            (0, r.jsxs)("div", {
                className: P.uz,
                children: [
                    !K &&
                        (0, r.jsxs)(o.ButtonGroup, {
                            size: "sm",
                            direction: Q ? "vertical" : "horizontal",
                            fullWidth: !0,
                            children: [
                                (0, r.jsx)(o.Button, {
                                    variant: "secondary",
                                    text: x.intl.string(x.t.LLLLPD),
                                    onClick: F,
                                }),
                                G && !(0, b.Ic)(m)
                                    ? (0, r.jsx)(v.A, {
                                          quest: m,
                                          size: "md",
                                          analyticsCtxQuestContent: p.uF.ACTIVITY_PANEL,
                                          analyticsCtxSourceQuestContent: p.uF.ACTIVITY_PANEL,
                                      })
                                    : (0, r.jsx)(o.Button, {
                                          variant: "primary",
                                          text: Z,
                                          onClick: B,
                                          loading: j,
                                          icon: (0, N.Oz)(m),
                                      }),
                            ],
                        }),
                    K &&
                        !W &&
                        (0, r.jsx)(o.Button, {
                            variant: "primary",
                            size: "sm",
                            fullWidth: !0,
                            text: x.intl.string(x.t.VN1Ajl),
                            onClick: H,
                        }),
                    W &&
                        (0, r.jsx)(o.Button, {
                            variant: "primary",
                            size: "sm",
                            fullWidth: !0,
                            text: x.intl.string(x.t.cfY4PE),
                            onClick: Y,
                        }),
                ],
            }),
        ],
    });
}
let D = function (e) {
    return (0, r.jsx)(O.R, {
        questOrQuests: e.quest,
        questContent: p.uF.ACTIVITY_PANEL,
        sourceQuestContent: p.uF.ACTIVITY_PANEL,
        children: (t) =>
            (0, r.jsx)(
                R,
                w(
                    {
                        nodeRef: t,
                    },
                    e,
                ),
            ),
    });
};
