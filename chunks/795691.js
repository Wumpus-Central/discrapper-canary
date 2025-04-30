n.d(t, { Z: () => u }), n(388685), n(457542), n(642613);
var r = n(200651),
    i = n(192379),
    l = n(481060),
    s = n(279881),
    a = n(383124),
    o = n(388032),
    c = n(955373);
function u(e) {
    let { guildId: t, selectedGameApplicationIds: n, onUpdateGames: u, disabled: d } = e,
        { topGames: m, tryFetchTopGames: g } = (0, s.I)(),
        p = m.get(t),
        [h, f] = i.useState(!1);
    i.useEffect(() => {
        f(!0),
            g(t).finally(() => {
                f(!1);
            });
    }, [t, g]);
    let x = i.useMemo(
            () =>
                null == p
                    ? []
                    : Object.keys(p)
                          .filter((e) => !n.includes(e))
                          .sort((e, t) => p[t].score - p[e].score),
            [p, n]
        ),
        b = i.useCallback(
            (e) => {
                n.includes(e) ? u(n.filter((t) => t !== e)) : u([...n, e]);
            },
            [u, n]
        );
    return h && null == p
        ? (0, r.jsx)(l.$jN, {})
        : null == x || 0 === x.length
          ? null
          : (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)('div', { className: c.separator }),
                    (0, r.jsxs)('div', {
                        className: c.gamesContainer,
                        children: [
                            (0, r.jsx)(l.Text, {
                                variant: 'text-xs/semibold',
                                color: 'text-muted',
                                children: o.intl.string(o.t.bFGpub)
                            }),
                            (0, r.jsx)('div', {
                                className: c.gamesList,
                                children: x.map((e) =>
                                    (0, r.jsx)(
                                        a.Z,
                                        {
                                            applicationId: e,
                                            selected: !1,
                                            onClick: b,
                                            disabled: d
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
