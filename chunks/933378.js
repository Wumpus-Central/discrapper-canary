n.d(t, { A: () => N });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(114046),
    o = n(311907),
    d = n(834730),
    c = n(695366),
    u = n(939249),
    p = n(775602),
    h = n(962173),
    m = n(341915),
    _ = n(890687),
    A = n(18437),
    f = n(590202),
    g = n(971649),
    x = n(901406),
    E = n(792620),
    C = n(814793),
    T = n(201805),
    v = n(495242),
    S = n(52093),
    b = n(985018),
    j = n(256023);
function I(e) {
    return (0, i.jsx)(d.E, { className: j.eW, color: "text-muted", variant: "text-xxs/normal", children: e.children });
}
function R(e) {
    let { quest: t, useReducedMotion: n } = e,
        l = (0, T.H1)(t.id, m.uF.QUEST_BAR_V2, m.uF.QUEST_BAR_V2),
        o = (0, T.Xf)({ useReducedMotion: n }),
        p = (0, A.Ut)(),
        E = (0, g.go)(),
        {
            errorHints: v,
            startingConsoleQuest: S,
            startConsoleQuest: R,
        } = (0, _.Wj)({
            questId: t.id,
            beforeRequest: () => {
                p({
                    questId: t.id,
                    questContent: m.uF.QUEST_BAR_V2,
                    questContentCTA: f.Cy.DEFIBRILLATOR,
                    sourceQuestContent: m.uF.QUEST_BAR_V2,
                }),
                    o.startAnimation();
            },
            afterRequest: o.stopAnimation,
        }),
        { header: N, renderBody: y } = s.useMemo(() => {
            let e = v.length > 0,
                n = t.config.messages.gameTitle;
            return {
                header: e
                    ? (0, C.ui)(t)
                        ? b.intl.string(b.t.N33EuL)
                        : b.intl.formatToPlainString(b.t["28Ql27"], { gameTitle: n })
                    : (0, C.ui)(t)
                      ? b.intl.string(b.t.YstzGO)
                      : b.intl.formatToPlainString(b.t.gX0Qcx, { gameTitle: n }),
                renderBody: e
                    ? () =>
                          (0, i.jsx)(i.Fragment, {
                              children: v.map((e, n) => {
                                  if (e.type === r._.EXPIRED_CREDENTIAL) {
                                      let s = h.A.getAccount(e.connected_account_id, e.connected_account_type),
                                          l = (0, x.IG)(e),
                                          a = (0, x.$J)(e);
                                      return (0, i.jsx)(
                                          I,
                                          {
                                              children: b.intl.format(l, {
                                                  account_name: s?.name,
                                                  onClick: () => {
                                                      (0, x.v0)(
                                                          { quest: t, platformType: a },
                                                          {
                                                              content: m.uF.QUEST_BAR,
                                                              ctaContent: f.Cy.DEFIBRILLATOR_RECONNECT_CONSOLE,
                                                              impressionId: E,
                                                              sourceQuestContent: m.uF.QUEST_BAR_V2,
                                                          },
                                                      );
                                                  },
                                              }),
                                          },
                                          n,
                                      );
                                  }
                                  return (0, i.jsx)(I, { children: e.message }, n);
                              }),
                          })
                    : () =>
                          (0, i.jsx)(d.E, {
                              className: j.eW,
                              color: "text-muted",
                              variant: "text-xxs/normal",
                              children: (0, C.ui)(t)
                                  ? b.intl.string(b.t.bUyEZZ)
                                  : b.intl.format(b.t.GXqvC1, { gameTitle: n }),
                          }),
            };
        }, [v, t, E]);
    return (0, i.jsxs)("div", {
        className: j.XK,
        children: [
            (0, i.jsxs)("div", {
                className: j.oK,
                children: [
                    (0, i.jsx)(c.E, {
                        size: "custom",
                        color: "currentColor",
                        className: 0 === v.length ? j.pH : j.JA,
                        width: 16,
                        height: 16,
                    }),
                    (0, i.jsx)(d.E, { variant: "text-xs/medium", children: N }),
                    (0, i.jsx)(u.D, { className: a()(j.w, { [j.r9]: S }), onClick: () => R(), children: o.render() }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: a()({ [j.Iu]: S }),
                children: [y(), 0 === v.length ? null : (0, i.jsx)(I, { children: l })],
            }),
        ],
    });
}
let N = function (e) {
    let { quest: t, taskDetails: n } = e,
        l = (0, o.bG)([p.A], () => p.A.useReducedMotion),
        a = (0, _.Du)(),
        r = s.useMemo(
            () => (0, x.bg)(t).filter((e) => a.xboxAndPlaystationAccounts.find((t) => t.type === e)),
            [a.xboxAndPlaystationAccounts, t],
        ),
        {
            steps: d,
            hasConnectedAccounts: c,
            isProgressingQuestForLaunchedGame: u,
            isQuestComplete: h,
        } = s.useMemo(() => {
            let e = r.length > 0,
                s = e && (0, E.YL)(t),
                l = t.config.messages.gameTitle,
                o = t.userStatus?.completedAt != null;
            return {
                steps: [
                    {
                        renderContent: () => (0, i.jsx)(v.Z, { ...a, quest: t, sourceQuestContent: m.uF.QUEST_BAR_V2 }),
                        isComplete: e || s || o,
                    },
                    {
                        renderContent: () =>
                            (0, i.jsx)(S.L5, {
                                children: (0, C.ui)(t)
                                    ? b.intl.string(b.t["5tXqFe"])
                                    : b.intl.formatToPlainString(b.t["+8JB6Y"], { gameTitle: l }),
                            }),
                        isComplete: s || o,
                    },
                    {
                        renderContent: () =>
                            (0, i.jsx)(S.L5, {
                                children: b.intl.formatToPlainString(b.t.HhfrYS, { numMinutes: n.targetMinutes }),
                            }),
                        isComplete: o,
                    },
                ],
                hasConnectedAccounts: e,
                isProgressingQuestForLaunchedGame: s,
                isQuestComplete: o,
            };
        }, [a, r.length, t, n.targetMinutes]);
    return (0, i.jsx)(S.Ay, {
        heading: b.intl.string(b.t.UPWlJu),
        steps: d,
        children: c && !u && !h && (0, i.jsx)(R, { useReducedMotion: l, quest: t }),
    });
};
