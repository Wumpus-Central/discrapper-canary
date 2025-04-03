n.d(t, { Z: () => d }), n(47120), n(773603), n(230036);
var r = n(200651),
    i = n(192379),
    s = n(481060),
    a = n(279881),
    l = n(383124),
    o = n(388032),
    c = n(955373);
function d(e) {
    let { guildId: t, selectedGameApplicationIds: n, onUpdateGames: d, disabled: u } = e,
        { topGames: m, tryFetchTopGames: g } = (0, a.I)(),
        p = m.get(t),
        [h, f] = i.useState(!1);
    i.useEffect(() => {
        f(!0),
            g(t).finally(() => {
                f(!1);
            });
    }, [t, g]);
    let b = i.useMemo(
            () =>
                null == p
                    ? []
                    : Object.keys(p)
                          .filter((e) => !n.includes(e))
                          .sort((e, t) => p[t].score - p[e].score),
            [p, n]
        ),
        x = i.useCallback(
            (e) => {
                n.includes(e) ? d(n.filter((t) => t !== e)) : d([...n, e]);
            },
            [d, n]
        );
    return h && null == p
        ? (0, r.jsx)(s.$jN, {})
        : null == b || 0 === b.length
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
                                children: b.map((e) =>
                                    (0, r.jsx)(
                                        l.Z,
                                        {
                                            applicationId: e,
                                            selected: !1,
                                            onClick: x,
                                            disabled: u
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
