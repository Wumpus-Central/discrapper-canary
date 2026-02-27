n.d(t, { A: () => p });
var i = n(627968),
    l = n(64700),
    r = n(397927),
    a = n(341915),
    s = n(890687),
    o = n(710969),
    d = n(814793),
    c = n(338404),
    u = n(127219),
    _ = n(636658),
    m = n(438038),
    h = n(986588);
function p(e) {
    let { questId: t } = e,
        {
            quests: n,
            excludedQuests: p,
            isFetchingCurrentQuests: g,
        } = (0, s.mL)({ fetchPolicy: "cache-or-network", callerSource: "embed" }),
        A = l.useMemo(() => (0, o.vc)(t, n, p), [t, n, p]),
        x = l.useMemo(() => p.find((e) => e.id === t), [t, p]);
    return g
        ? (0, i.jsx)(r.y$y, { className: h.u })
        : null == A
          ? null != x
              ? (0, i.jsx)(c.g, { questId: t })
              : (0, i.jsx)(u.l, { questId: t, reason: u.o.NOT_FOUND })
          : (0, d.E0)(A.config)
            ? (0, i.jsx)(m.R, { quest: A, location: a.uF.QUESTS_EMBED, sourceQuestContent: a.uF.QUESTS_EMBED }, A.id)
            : (0, i.jsx)(_.S, { questId: t });
}
