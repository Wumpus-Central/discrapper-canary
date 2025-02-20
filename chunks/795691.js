n.d(t, { Z: () => d }), n(47120), n(773603), n(230036);
var r = n(200651),
    i = n(192379),
    s = n(481060),
    a = n(279881),
    l = n(383124),
    o = n(388032),
    c = n(430045);
function d(e) {
    let { guildId: t, selectedGameApplicationIds: n, onUpdateGames: d } = e,
        { topGames: u, tryFetchTopGames: m } = (0, a.I)(),
        p = u.get(t),
        [g, h] = i.useState(!1);
    i.useEffect(() => {
        h(!0),
            m(t).finally(() => {
                h(!1);
            });
    }, [t, m]);
    let f = i.useMemo(() => (null == p ? [] : Object.keys(p).sort((e, t) => p[t].score - p[e].score)), [p]),
        b = i.useCallback(
            (e) => {
                n.includes(e) ? d(n.filter((t) => t !== e)) : d([...n, e]);
            },
            [d, n]
        );
    return g && null == p
        ? (0, r.jsx)(s.$jN, {})
        : null == f || 0 === f.length
          ? null
          : (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)('div', { className: c.separator }),
                    (0, r.jsxs)('div', {
                        className: c.gamesContainer,
                        children: [
                            (0, r.jsx)(s.Text, {
                                variant: 'text-xs/semibold',
                                color: 'text-muted',
                                children: o.NW.string(o.t.bFGpub)
                            }),
                            (0, r.jsx)('div', {
                                className: c.gamesList,
                                children: f.map((e) =>
                                    (0, r.jsx)(
                                        l.Z,
                                        {
                                            applicationId: e,
                                            selected: n.includes(e),
                                            onClick: b
                                        },
                                        e
                                    )
                                )
                            })
                        ]
                    })
                ]
            });
}
