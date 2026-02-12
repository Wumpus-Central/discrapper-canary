n.d(t, { A: () => p });
var i = n(627968),
    l = n(64700),
    a = n(397927),
    r = n(341915),
    s = n(890687),
    o = n(710969),
    d = n(814793),
    c = n(338404),
    u = n(127219),
    m = n(636658),
    _ = n(438038),
    h = n(986588);
function p(e) {
    let { questId: t } = e,
        {
            quests: n,
            excludedQuests: p,
            isFetchingCurrentQuests: g,
        } = (0, s.mL)({ fetchPolicy: "cache-or-network", callerSource: "embed" }),
        A = l.useMemo(() => (0, o.vc)(t, n, p), [t, n, p]),
        f = l.useMemo(() => p.find((e) => e.id === t), [t, p]);
    return g
        ? (0, i.jsx)(a.y$y, { className: h.u })
        : null == A
          ? null != f
              ? (0, i.jsx)(c.g, { questId: t })
              : (0, i.jsx)(u.l, { questId: t, reason: u.o.NOT_FOUND })
          : (0, d.E0)(A.config)
            ? (0, i.jsx)(_.R, { quest: A, location: r.uF.QUESTS_EMBED, sourceQuestContent: r.uF.QUESTS_EMBED }, A.id)
            : (0, i.jsx)(m.S, { questId: t });
}
