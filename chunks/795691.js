n.d(t, { Z: () => d }), n(388685), n(457542), n(642613);
var r = n(54381),
    i = n(473749),
    l = n(481060),
    a = n(279881),
    s = n(383124),
    o = n(388032),
    c = n(772201);
function d(e) {
    let { guildId: t, selectedGameApplicationIds: n, onUpdateGames: d, disabled: u } = e,
        { topGames: g, tryFetchTopGames: f } = (0, a.I)(),
        m = g.get(t),
        [b, p] = i.useState(!1);
    i.useEffect(() => {
        p(!0),
            f(t).finally(() => {
                p(!1);
            });
    }, [t, f]);
    let h = i.useMemo(
            () =>
                null == m
                    ? []
                    : Object.keys(m)
                          .filter((e) => !n.includes(e))
                          .sort((e, t) => m[t].score - m[e].score),
            [m, n],
        ),
        x = i.useCallback(
            (e) => {
                n.includes(e) ? d(n.filter((t) => t !== e)) : d([...n, e]);
            },
            [d, n],
        );
    return b && null == m
        ? (0, r.jsx)(l.$jN, {})
        : null == h || 0 === h.length
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
                                children: h.map((e) =>
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
