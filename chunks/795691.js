n.d(t, { Z: () => d }), n(47120), n(773603);
var i = n(200651),
    r = n(192379),
    l = n(481060),
    s = n(279881),
    a = n(383124),
    o = n(388032),
    c = n(237376);
function d(e) {
    let { guildId: t, selectedGameApplicationIds: n, onUpdateGames: d } = e,
        { topGames: u, tryFetchTopGames: m } = (0, s.I)(),
        h = u.get(t),
        [g, x] = r.useState(!1);
    r.useEffect(() => {
        x(!0),
            m(t).finally(() => {
                x(!1);
            });
    }, [t, m]);
    let p = r.useMemo(() => (null == h ? [] : Object.keys(h).sort((e, t) => h[t].score - h[e].score)), [h]),
        _ = r.useCallback(
            (e) => {
                n.includes(e) ? d(n.filter((t) => t !== e)) : d([...n, e]);
            },
            [d, n]
        );
    return g && null == h
        ? (0, i.jsx)(l.$jN, {})
        : null == p || 0 === p.length
          ? null
          : (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)('div', { className: c.separator }),
                    (0, i.jsxs)('div', {
                        className: c.gamesContainer,
                        children: [
                            (0, i.jsx)(l.Text, {
                                variant: 'text-xs/semibold',
                                color: 'text-muted',
                                children: o.intl.string(o.t.bFGpub)
                            }),
                            (0, i.jsx)('div', {
                                className: c.gamesList,
                                children: p.map((e) =>
                                    (0, i.jsx)(
                                        a.Z,
                                        {
                                            applicationId: e,
                                            selected: n.includes(e),
                                            onClick: _
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
