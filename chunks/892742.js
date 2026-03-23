n.d(t, { A: () => x });
var i = n(627968),
    r = n(64700),
    a = n(397927),
    l = n(341915),
    s = n(570852),
    o = n(890687),
    d = n(710969),
    c = n(814793),
    u = n(338404),
    _ = n(127219),
    m = n(636658),
    h = n(438038),
    p = n(295194),
    g = n(654487),
    A = n(986588);
function x(e) {
    let { questId: t } = e,
        {
            quests: n,
            excludedQuests: x,
            isFetchingCurrentQuests: f,
        } = (0, o.mL)({ fetchPolicy: "cache-or-network", callerSource: "embed" }),
        C = r.useMemo(() => (0, d.vc)(t, n, x), [t, n, x]),
        E = r.useMemo(() => x.find((e) => e.id === t), [t, x]),
        { enabled: I } = s.S.useConfig({ location: g.rE.EMBED_DESKTOP });
    return f
        ? (0, i.jsx)(a.y$y, { className: A.u })
        : null == C
          ? null != E
              ? (0, i.jsx)(u.g, { questId: t })
              : (0, i.jsx)(_.l, { questId: t, reason: _.o.NOT_FOUND })
          : (0, c.E0)(C.config)
            ? I
                ? (0, i.jsx)(
                      p.M,
                      { quest: C, location: l.uF.QUESTS_EMBED, sourceQuestContent: l.uF.QUESTS_EMBED },
                      C.id,
                  )
                : (0, i.jsx)(
                      h.R,
                      { quest: C, location: l.uF.QUESTS_EMBED, sourceQuestContent: l.uF.QUESTS_EMBED },
                      C.id,
                  )
            : (0, i.jsx)(m.S, { questId: t });
}
