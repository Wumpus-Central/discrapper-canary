n.d(t, {
    A: () => E,
});
var a = n(627968),
    l = n(64700),
    r = n(503698),
    i = n.n(r),
    s = n(114046),
    o = n(311907),
    c = n(397927),
    d = n(775602),
    u = n(962173),
    m = n(733788),
    p = n(341915),
    h = n(890687),
    x = n(18437),
    g = n(590202),
    f = n(971649),
    b = n(901406),
    v = n(792620),
    j = n(814793),
    _ = n(201805),
    y = n(495242),
    A = n(52093),
    C = n(985018),
    S = n(883476);

function O(e) {
    return (0, a.jsx)(c.Text, {
        className: S.eW,
        color: "text-muted",
        variant: "text-xxs/normal",
        children: e.children,
    });
}

function T(e) {
    let { quest: t, useReducedMotion: n } = e,
        r = (0, m.J)(),
        o = (0, _.H1)(t.id, p.uF.QUEST_BAR_V2, p.uF.QUEST_BAR_V2),
        d = (0, _.Xf)({
            useReducedMotion: n,
        }),
        v = (0, x.Ut)(),
        y = (0, f.go)(),
        {
            errorHints: A,
            startingConsoleQuest: T,
            startConsoleQuest: E,
        } = (0, h.Wj)({
            questId: t.id,
            beforeRequest: () => {
                v({
                    questId: t.id,
                    questContent: p.uF.QUEST_BAR_V2,
                    questContentCTA: g.Cy.DEFIBRILLATOR,
                    sourceQuestContent: p.uF.QUEST_BAR_V2,
                }),
                    d.startAnimation();
            },
            afterRequest: d.stopAnimation,
        }),
        { header: N, renderBody: w } = l.useMemo(() => {
            let e = A.length > 0,
                n = t.config.messages.gameTitle;
            return {
                header: e
                    ? (0, j.ui)(t)
                        ? C.intl.string(C.t.N33EuL)
                        : C.intl.formatToPlainString(C.t["28Ql27"], {
                              gameTitle: n,
                          })
                    : (0, j.ui)(t)
                      ? C.intl.string(C.t.YstzGO)
                      : C.intl.formatToPlainString(C.t.gX0Qcx, {
                            gameTitle: n,
                        }),
                renderBody: e
                    ? () =>
                          (0, a.jsx)(a.Fragment, {
                              children: A.map((e, n) => {
                                  if (e.type === s._.EXPIRED_CREDENTIAL && r) {
                                      let l = u.A.getAccount(e.connected_account_id, e.connected_account_type),
                                          r = (0, b.IG)(e),
                                          i = (0, b.$J)(e);
                                      return (0, a.jsx)(
                                          O,
                                          {
                                              children: C.intl.format(r, {
                                                  account_name: null == l ? void 0 : l.name,
                                                  onClick: () => {
                                                      (0, b.v0)(
                                                          {
                                                              quest: t,
                                                              platformType: i,
                                                          },
                                                          {
                                                              content: p.uF.QUEST_BAR,
                                                              ctaContent: g.Cy.DEFIBRILLATOR_RECONNECT_CONSOLE,
                                                              impressionId: y,
                                                              sourceQuestContent: p.uF.QUEST_BAR_V2,
                                                          },
                                                      );
                                                  },
                                              }),
                                          },
                                          n,
                                      );
                                  }
                                  return (0, a.jsx)(
                                      O,
                                      {
                                          children: e.message,
                                      },
                                      n,
                                  );
                              }),
                          })
                    : () =>
                          (0, a.jsx)(c.Text, {
                              className: S.eW,
                              color: "text-muted",
                              variant: "text-xxs/normal",
                              children: (0, j.ui)(t)
                                  ? C.intl.string(C.t.bUyEZZ)
                                  : C.intl.format(C.t.GXqvC1, {
                                        gameTitle: n,
                                    }),
                          }),
            };
        }, [A, t, r, y]);
    return (0, a.jsxs)("div", {
        className: S.XK,
        children: [
            (0, a.jsxs)("div", {
                className: S.oK,
                children: [
                    (0, a.jsx)(c.EpV, {
                        size: "custom",
                        color: "currentColor",
                        className: 0 === A.length ? S.pH : S.JA,
                        width: 16,
                        height: 16,
                    }),
                    (0, a.jsx)(c.Text, {
                        variant: "text-xs/medium",
                        children: N,
                    }),
                    (0, a.jsx)(c.DUT, {
                        className: i()(S.w, {
                            [S.r9]: T,
                        }),
                        onClick: () => E(),
                        children: d.render(),
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: i()({
                    [S.Iu]: T,
                }),
                children: [
                    w(),
                    0 === A.length
                        ? null
                        : (0, a.jsx)(O, {
                              children: o,
                          }),
                ],
            }),
        ],
    });
}
let E = function (e) {
    let { quest: t, taskDetails: n } = e,
        r = (0, o.bG)([d.A], () => d.A.useReducedMotion),
        i = (0, h.Du)(),
        s = l.useMemo(
            () => (0, b.bg)(t).filter((e) => i.xboxAndPlaystationAccounts.find((t) => t.type === e)),
            [i.xboxAndPlaystationAccounts, t],
        ),
        {
            steps: c,
            hasConnectedAccounts: u,
            isProgressingQuestForLaunchedGame: m,
            isQuestComplete: x,
        } = l.useMemo(() => {
            var e;
            let l = s.length > 0,
                r = l && (0, v.YL)(t),
                o = t.config.messages.gameTitle,
                c = (null == (e = t.userStatus) ? void 0 : e.completedAt) != null;
            return {
                steps: [
                    {
                        renderContent: () => {
                            var e, n;
                            return (0, a.jsx)(
                                y.Z,
                                ((e = (function (e) {
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
                                })({}, i)),
                                (n = n =
                                    {
                                        quest: t,
                                        sourceQuestContent: p.uF.QUEST_BAR_V2,
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var a = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, a);
                                          }
                                          return n;
                                      })(Object(n)).forEach(function (t) {
                                          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                                      }),
                                e),
                            );
                        },
                        isComplete: l || r || c,
                    },
                    {
                        renderContent: () =>
                            (0, a.jsx)(A.L5, {
                                children: (0, j.ui)(t)
                                    ? C.intl.string(C.t["5tXqFe"])
                                    : C.intl.formatToPlainString(C.t["+8JB6Y"], {
                                          gameTitle: o,
                                      }),
                            }),
                        isComplete: r || c,
                    },
                    {
                        renderContent: () =>
                            (0, a.jsx)(A.L5, {
                                children: C.intl.formatToPlainString(C.t.HhfrYS, {
                                    numMinutes: n.targetMinutes,
                                }),
                            }),
                        isComplete: c,
                    },
                ],
                hasConnectedAccounts: l,
                isProgressingQuestForLaunchedGame: r,
                isQuestComplete: c,
            };
        }, [i, s.length, t, n.targetMinutes]);
    return (0, a.jsx)(A.Ay, {
        heading: C.intl.string(C.t.UPWlJu),
        steps: c,
        children:
            u &&
            !m &&
            !x &&
            (0, a.jsx)(T, {
                useReducedMotion: r,
                quest: t,
            }),
    });
};
