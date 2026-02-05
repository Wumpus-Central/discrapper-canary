n.d(t, { A: () => E });
var a = n(627968),
    s = n(64700),
    i = n(503698),
    l = n.n(i),
    r = n(114046),
    o = n(311907),
    d = n(397927),
    c = n(775602),
    u = n(962173),
    m = n(733788),
    h = n(341915),
    x = n(890687),
    p = n(18437),
    g = n(590202),
    _ = n(971649),
    f = n(901406),
    v = n(792620),
    b = n(814793),
    j = n(201805),
    A = n(495242),
    C = n(52093),
    S = n(985018),
    T = n(883476);
function y(e) {
    return (0, a.jsx)(d.Text, {
        className: T.eW,
        color: "text-muted",
        variant: "text-xxs/normal",
        children: e.children,
    });
}
function N(e) {
    let { quest: t, useReducedMotion: n } = e,
        i = (0, m.J)(),
        o = (0, j.H1)(t.id, h.uF.QUEST_BAR_V2, h.uF.QUEST_BAR_V2),
        c = (0, j.Xf)({ useReducedMotion: n }),
        v = (0, p.Ut)(),
        A = (0, _.go)(),
        {
            errorHints: C,
            startingConsoleQuest: N,
            startConsoleQuest: E,
        } = (0, x.Wj)({
            questId: t.id,
            beforeRequest: () => {
                v({
                    questId: t.id,
                    questContent: h.uF.QUEST_BAR_V2,
                    questContentCTA: g.Cy.DEFIBRILLATOR,
                    sourceQuestContent: h.uF.QUEST_BAR_V2,
                }),
                    c.startAnimation();
            },
            afterRequest: c.stopAnimation,
        }),
        { header: I, renderBody: k } = s.useMemo(() => {
            let e = C.length > 0,
                n = t.config.messages.gameTitle;
            return {
                header: e
                    ? (0, b.ui)(t)
                        ? S.intl.string(S.t.N33EuL)
                        : S.intl.formatToPlainString(S.t["28Ql27"], { gameTitle: n })
                    : (0, b.ui)(t)
                      ? S.intl.string(S.t.YstzGO)
                      : S.intl.formatToPlainString(S.t.gX0Qcx, { gameTitle: n }),
                renderBody: e
                    ? () =>
                          (0, a.jsx)(a.Fragment, {
                              children: C.map((e, n) => {
                                  if (e.type === r._.EXPIRED_CREDENTIAL && i) {
                                      let s = u.A.getAccount(e.connected_account_id, e.connected_account_type),
                                          i = (0, f.IG)(e),
                                          l = (0, f.$J)(e);
                                      return (0, a.jsx)(
                                          y,
                                          {
                                              children: S.intl.format(i, {
                                                  account_name: s?.name,
                                                  onClick: () => {
                                                      (0, f.v0)(
                                                          { quest: t, platformType: l },
                                                          {
                                                              content: h.uF.QUEST_BAR,
                                                              ctaContent: g.Cy.DEFIBRILLATOR_RECONNECT_CONSOLE,
                                                              impressionId: A,
                                                              sourceQuestContent: h.uF.QUEST_BAR_V2,
                                                          },
                                                      );
                                                  },
                                              }),
                                          },
                                          n,
                                      );
                                  }
                                  return (0, a.jsx)(y, { children: e.message }, n);
                              }),
                          })
                    : () =>
                          (0, a.jsx)(d.Text, {
                              className: T.eW,
                              color: "text-muted",
                              variant: "text-xxs/normal",
                              children: (0, b.ui)(t)
                                  ? S.intl.string(S.t.bUyEZZ)
                                  : S.intl.format(S.t.GXqvC1, { gameTitle: n }),
                          }),
            };
        }, [C, t, i, A]);
    return (0, a.jsxs)("div", {
        className: T.XK,
        children: [
            (0, a.jsxs)("div", {
                className: T.oK,
                children: [
                    (0, a.jsx)(d.EpV, {
                        size: "custom",
                        color: "currentColor",
                        className: 0 === C.length ? T.pH : T.JA,
                        width: 16,
                        height: 16,
                    }),
                    (0, a.jsx)(d.Text, { variant: "text-xs/medium", children: I }),
                    (0, a.jsx)(d.DUT, { className: l()(T.w, { [T.r9]: N }), onClick: () => E(), children: c.render() }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: l()({ [T.Iu]: N }),
                children: [k(), 0 === C.length ? null : (0, a.jsx)(y, { children: o })],
            }),
        ],
    });
}
let E = function (e) {
    let { quest: t, taskDetails: n } = e,
        i = (0, o.bG)([c.A], () => c.A.useReducedMotion),
        l = (0, x.Du)(),
        r = s.useMemo(
            () => (0, f.bg)(t).filter((e) => l.xboxAndPlaystationAccounts.find((t) => t.type === e)),
            [l.xboxAndPlaystationAccounts, t],
        ),
        {
            steps: d,
            hasConnectedAccounts: u,
            isProgressingQuestForLaunchedGame: m,
            isQuestComplete: p,
        } = s.useMemo(() => {
            let e = r.length > 0,
                s = e && (0, v.YL)(t),
                i = t.config.messages.gameTitle,
                o = t.userStatus?.completedAt != null;
            return {
                steps: [
                    {
                        renderContent: () => (0, a.jsx)(A.Z, { ...l, quest: t, sourceQuestContent: h.uF.QUEST_BAR_V2 }),
                        isComplete: e || s || o,
                    },
                    {
                        renderContent: () =>
                            (0, a.jsx)(C.L5, {
                                children: (0, b.ui)(t)
                                    ? S.intl.string(S.t["5tXqFe"])
                                    : S.intl.formatToPlainString(S.t["+8JB6Y"], { gameTitle: i }),
                            }),
                        isComplete: s || o,
                    },
                    {
                        renderContent: () =>
                            (0, a.jsx)(C.L5, {
                                children: S.intl.formatToPlainString(S.t.HhfrYS, { numMinutes: n.targetMinutes }),
                            }),
                        isComplete: o,
                    },
                ],
                hasConnectedAccounts: e,
                isProgressingQuestForLaunchedGame: s,
                isQuestComplete: o,
            };
        }, [l, r.length, t, n.targetMinutes]);
    return (0, a.jsx)(C.Ay, {
        heading: S.intl.string(S.t.UPWlJu),
        steps: d,
        children: u && !m && !p && (0, a.jsx)(N, { useReducedMotion: i, quest: t }),
    });
};
