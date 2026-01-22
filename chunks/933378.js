n.d(t, { A: () => E });
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(114046),
    o = n(311907),
    c = n(397927),
    d = n(775602),
    u = n(962173),
    m = n(216456),
    p = n(906822),
    h = n(733788),
    f = n(341915),
    x = n(890687),
    b = n(901406),
    g = n(792620),
    v = n(814793),
    j = n(201805),
    y = n(495242),
    _ = n(52093),
    A = n(985018),
    C = n(883476);
function S(e) {
    return (0, a.jsx)(c.Text, {
        className: C.eW,
        color: "text-muted",
        variant: "text-xxs/normal",
        children: e.children,
    });
}
function O(e) {
    let { quest: t, useReducedMotion: n } = e,
        i = (0, h.J)(),
        o = (0, j.H1)(t.id, f.uF.QUEST_BAR_V2, f.uF.QUEST_BAR_V2),
        d = (0, j.Xf)({ useReducedMotion: n }),
        g = (0, m.Ut)(),
        y = (0, p.go)(),
        {
            errorHints: _,
            startingConsoleQuest: O,
            startConsoleQuest: E,
        } = (0, x.Wj)({
            questId: t.id,
            beforeRequest: () => {
                g({
                    questId: t.id,
                    questContent: f.uF.QUEST_BAR_V2,
                    questContentCTA: m.Cy.DEFIBRILLATOR,
                    sourceQuestContent: f.uF.QUEST_BAR_V2,
                }),
                    d.startAnimation();
            },
            afterRequest: d.stopAnimation,
        }),
        { header: N, renderBody: T } = l.useMemo(() => {
            let e = _.length > 0,
                n = t.config.messages.gameTitle;
            return {
                header: e
                    ? (0, v.ui)(t)
                        ? A.intl.string(A.t.N33EuL)
                        : A.intl.formatToPlainString(A.t["28Ql27"], { gameTitle: n })
                    : (0, v.ui)(t)
                      ? A.intl.string(A.t.YstzGO)
                      : A.intl.formatToPlainString(A.t.gX0Qcx, { gameTitle: n }),
                renderBody: e
                    ? () =>
                          (0, a.jsx)(a.Fragment, {
                              children: _.map((e, n) => {
                                  if (e.type === s._.EXPIRED_CREDENTIAL && i) {
                                      let l = u.A.getAccount(e.connected_account_id, e.connected_account_type),
                                          i = (0, b.IG)(e),
                                          r = (0, b.$J)(e);
                                      return (0, a.jsx)(
                                          S,
                                          {
                                              children: A.intl.format(i, {
                                                  account_name: null == l ? void 0 : l.name,
                                                  onClick: () => {
                                                      (0, b.v0)(
                                                          {
                                                              quest: t,
                                                              platformType: r,
                                                          },
                                                          {
                                                              content: f.uF.QUEST_BAR,
                                                              ctaContent: m.Cy.DEFIBRILLATOR_RECONNECT_CONSOLE,
                                                              impressionId: y,
                                                              sourceQuestContent: f.uF.QUEST_BAR_V2,
                                                          },
                                                      );
                                                  },
                                              }),
                                          },
                                          n,
                                      );
                                  }
                                  return (0, a.jsx)(S, { children: e.message }, n);
                              }),
                          })
                    : () =>
                          (0, a.jsx)(c.Text, {
                              className: C.eW,
                              color: "text-muted",
                              variant: "text-xxs/normal",
                              children: (0, v.ui)(t)
                                  ? A.intl.string(A.t.bUyEZZ)
                                  : A.intl.format(A.t.GXqvC1, { gameTitle: n }),
                          }),
            };
        }, [_, t, i, y]);
    return (0, a.jsxs)("div", {
        className: C.XK,
        children: [
            (0, a.jsxs)("div", {
                className: C.oK,
                children: [
                    (0, a.jsx)(c.EpV, {
                        size: "custom",
                        color: "currentColor",
                        className: 0 === _.length ? C.pH : C.JA,
                        width: 16,
                        height: 16,
                    }),
                    (0, a.jsx)(c.Text, {
                        variant: "text-xs/medium",
                        children: N,
                    }),
                    (0, a.jsx)(c.DUT, {
                        className: r()(C.w, { [C.r9]: O }),
                        onClick: () => E(),
                        children: d.render(),
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: r()({ [C.Iu]: O }),
                children: [T(), 0 === _.length ? null : (0, a.jsx)(S, { children: o })],
            }),
        ],
    });
}
let E = function (e) {
    let { quest: t, taskDetails: n } = e,
        i = (0, o.bG)([d.A], () => d.A.useReducedMotion),
        r = (0, x.Du)(),
        s = l.useMemo(
            () => (0, b.bg)(t).filter((e) => r.xboxAndPlaystationAccounts.find((t) => t.type === e)),
            [r.xboxAndPlaystationAccounts, t],
        ),
        {
            steps: c,
            hasConnectedAccounts: u,
            isProgressingQuestForLaunchedGame: m,
            isQuestComplete: p,
        } = l.useMemo(() => {
            var e;
            let l = s.length > 0,
                i = l && (0, g.YL)(t),
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
                                })({}, r)),
                                (n = n =
                                    {
                                        quest: t,
                                        sourceQuestContent: f.uF.QUEST_BAR_V2,
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
                        isComplete: l || i || c,
                    },
                    {
                        renderContent: () =>
                            (0, a.jsx)(_.L5, {
                                children: (0, v.ui)(t)
                                    ? A.intl.string(A.t["5tXqFe"])
                                    : A.intl.formatToPlainString(A.t["+8JB6Y"], { gameTitle: o }),
                            }),
                        isComplete: i || c,
                    },
                    {
                        renderContent: () =>
                            (0, a.jsx)(_.L5, {
                                children: A.intl.formatToPlainString(A.t.HhfrYS, { numMinutes: n.targetMinutes }),
                            }),
                        isComplete: c,
                    },
                ],
                hasConnectedAccounts: l,
                isProgressingQuestForLaunchedGame: i,
                isQuestComplete: c,
            };
        }, [r, s.length, t, n.targetMinutes]);
    return (0, a.jsx)(_.Ay, {
        heading: A.intl.string(A.t.UPWlJu),
        steps: c,
        children:
            u &&
            !m &&
            !p &&
            (0, a.jsx)(O, {
                useReducedMotion: i,
                quest: t,
            }),
    });
};
