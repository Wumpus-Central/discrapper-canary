n.d(t, { A: () => f });
var i = n(627968),
    l = n(64700),
    a = n(289873),
    s = n(341915),
    r = n(570852),
    o = n(890687),
    d = n(710969),
    c = n(814793),
    u = n(338404),
    m = n(127219),
    _ = n(636658),
    h = n(438038),
    p = n(295194),
    g = n(654487),
    A = n(822663);
function f(e) {
    let { questId: t } = e,
        {
            quests: n,
            excludedQuests: f,
            isFetchingCurrentQuests: x,
        } = (0, o.mL)({ fetchPolicy: "cache-or-network", callerSource: "embed" }),
        C = l.useMemo(() => (0, d.vc)(t, n, f), [t, n, f]),
        E = l.useMemo(() => f.find((e) => e.id === t), [t, f]),
        { enabled: I } = r.S.useConfig({ location: g.rE.EMBED_DESKTOP });
    return x
        ? (0, i.jsx)(a.y, { className: A.u })
        : null == C
          ? null != E
              ? (0, i.jsx)(u.g, { questId: t })
              : (0, i.jsx)(m.l, { questId: t, reason: m.o.NOT_FOUND })
          : (0, c.E0)(C.config)
            ? I
                ? (0, i.jsx)(
                      p.M,
                      { quest: C, location: s.uF.QUESTS_EMBED, sourceQuestContent: s.uF.QUESTS_EMBED },
                      C.id,
                  )
                : (0, i.jsx)(
                      h.R,
                      { quest: C, location: s.uF.QUESTS_EMBED, sourceQuestContent: s.uF.QUESTS_EMBED },
                      C.id,
                  )
            : (0, i.jsx)(_.S, { questId: t });
}
