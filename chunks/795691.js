n.d(t, { Z: () => d }), n(388685), n(457542), n(642613);
var r = n(54381),
    i = n(473749),
    l = n(481060),
    a = n(279881),
    s = n(383124),
    o = n(388032),
    c = n(661656);
function d(e) {
    let { guildId: t, selectedGameApplicationIds: n, onUpdateGames: d, disabled: u } = e,
        { topGames: g, tryFetchTopGames: m } = (0, a.I)(),
        p = g.get(t),
        [f, h] = i.useState(!1);
    i.useEffect(() => {
        h(!0),
            m(t).finally(() => {
                h(!1);
            });
    }, [t, m]);
    let b = i.useMemo(
            () =>
                null == p
                    ? []
                    : Object.keys(p)
                          .filter((e) => !n.includes(e))
                          .sort((e, t) => p[t].score - p[e].score),
            [p, n],
        ),
        x = i.useCallback(
            (e) => {
                n.includes(e) ? d(n.filter((t) => t !== e)) : d([...n, e]);
            },
            [d, n],
        );
    return f && null == p
        ? (0, r.jsx)(l.$jN, {})
        : null == b || 0 === b.length
          ? null
          : (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)("div", { className: c.separator }),
                    (0, r.jsxs)("div", {
                        className: c.gamesContainer,
                        children: [
                            (0, r.jsx)(l.Text, {
                                variant: "text-xs/semibold",
                                color: "text-muted",
                                children: o.intl.string(o.t.bFGpua),
                            }),
                            (0, r.jsx)("div", {
                                className: c.gamesList,
                                children: b.map((e) =>
                                    (0, r.jsx)(
                                        s.Z,
                                        {
                                            applicationId: e,
                                            selected: !1,
                                            onClick: x,
                                            disabled: u,
                                        },
                                        e,
                                    ),
                                ),
                            }),
                        ],
                    }),
                ],
            });
}
