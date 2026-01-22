n.d(t, { A: () => h });
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(341915),
    o = n(890687),
    l = n(710969),
    c = n(814793),
    u = n(338404),
    d = n(127219),
    f = n(636658),
    p = n(438038),
    _ = n(986588);
function h(e) {
    let { questId: t } = e,
        {
            quests: n,
            excludedQuests: h,
            isFetchingCurrentQuests: m,
        } = (0, o.mL)({
            fetchPolicy: "cache-or-network",
            callerSource: "embed",
        }),
        g = i.useMemo(() => (0, l.vc)(t, n, h), [t, n, h]),
        E = i.useMemo(() => h.find((e) => e.id === t), [t, h]);
    return m
        ? (0, r.jsx)(a.y$y, { className: _.u })
        : null == g
          ? null != E
              ? (0, r.jsx)(u.g, { questId: t })
              : (0, r.jsx)(d.l, {
                    questId: t,
                    reason: d.o.NOT_FOUND,
                })
          : (0, c.E0)(g.config)
            ? (0, r.jsx)(
                  p.R,
                  {
                      quest: g,
                      location: s.uF.QUESTS_EMBED,
                      sourceQuestContent: s.uF.QUESTS_EMBED,
                  },
                  g.id,
              )
            : (0, r.jsx)(f.S, { questId: t });
}
