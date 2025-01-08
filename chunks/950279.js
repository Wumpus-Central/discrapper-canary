n(47120), n(773603);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(481060),
    o = n(368343),
    c = n(364083),
    d = n(92373),
    u = n(308083),
    m = n(388032),
    h = n(489364),
    g = n(240938);
function x(e) {
    let { gameApplicationIds: t, preventGameRemoval: n, onUpdateGames: l, minGames: o = 1, error: x } = e,
        { options: p, matchSorterOptions: f } = (0, c.P)(),
        C = r.useMemo(() => Array.from(t), [t]),
        v = r.useCallback(
            (e) => {
                if (!(e.length < o)) l(new Set(e));
            },
            [o, l]
        ),
        _ = r.useCallback(
            (e) => {
                if (n) return;
                let i = new Set(t);
                t.has(e) ? i.delete(e) : i.add(e), l(i);
            },
            [n, t, l]
        ),
        N = r.useCallback(() => null, []);
    return (0, i.jsx)('div', {
        className: h.inputContainer,
        children: (0, i.jsxs)(s.FormItem, {
            error: x,
            children: [
                (0, i.jsx)(s.SearchableSelect, {
                    multi: !0,
                    hidePills: !0,
                    autoFocus: !0,
                    wrapperClassName: a()(g.input, h.input),
                    options: p,
                    value: C,
                    placeholder: m.intl.string(m.t.acyezc),
                    onChange: v,
                    isDisabled: t.size === u.cm,
                    matchSorterOptions: f,
                    clearQueryOnSelect: !0,
                    customPillContainerClassName: h.pills,
                    renderCustomPill: N
                }),
                C.length > 0 &&
                    (0, i.jsxs)('div', {
                        className: h.gamesContainer,
                        children: [
                            (0, i.jsx)(s.Text, {
                                variant: 'text-xs/semibold',
                                color: 'text-muted',
                                children: m.intl.string(m.t.PgOVsL)
                            }),
                            (0, i.jsx)('div', {
                                className: h.gamesList,
                                children: C.map((e) =>
                                    (0, i.jsx)(
                                        s.Tooltip,
                                        {
                                            text: m.intl.string(m.t.C1K2XV),
                                            shouldShow: n,
                                            tooltipContentClassName: h.tooltip,
                                            children: (r) =>
                                                (0, i.jsx)('div', {
                                                    ...r,
                                                    children: (0, i.jsx)(
                                                        d.Z,
                                                        {
                                                            applicationId: e,
                                                            imageContainerClassName: t.size > o ? h.clickableGame : void 0,
                                                            selected: !0,
                                                            locked: n,
                                                            onClick: _
                                                        },
                                                        e
                                                    )
                                                })
                                        },
                                        e
                                    )
                                )
                            })
                        ]
                    })
            ]
        })
    });
}
function p(e) {
    let { guildId: t, selectedGameApplicationIds: n, onUpdateGames: l } = e,
        { topGames: a, tryFetchTopGames: c } = (0, o.B)(),
        u = a.get(t),
        [g, x] = r.useState(!1);
    r.useEffect(() => {
        x(!0),
            c(t).finally(() => {
                x(!1);
            });
    }, [t, c]);
    let p = r.useMemo(() => (null == u ? [] : Object.keys(u).sort((e, t) => u[t].score - u[e].score)), [u]),
        f = r.useCallback(
            (e) => {
                let t = new Set(n);
                n.has(e) ? t.delete(e) : t.add(e), l(t);
            },
            [l, n]
        );
    return g && null == u
        ? (0, i.jsx)(s.Spinner, { className: h.loadingSpinner })
        : null == p || 0 === p.length
          ? null
          : (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)('hr', { className: h.separator }),
                    (0, i.jsxs)('div', {
                        className: h.gamesContainer,
                        children: [
                            (0, i.jsx)(s.Text, {
                                variant: 'text-xs/semibold',
                                color: 'text-muted',
                                children: m.intl.string(m.t['0wEQQ0'])
                            }),
                            (0, i.jsx)('div', {
                                className: h.gamesList,
                                children: p.map((e) =>
                                    (0, i.jsx)(
                                        d.Z,
                                        {
                                            applicationId: e,
                                            imageContainerClassName: h.clickableGame,
                                            selected: n.has(e),
                                            onClick: f
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
t.Z = (e) => {
    let { title: t, description: n, onUpdateGames: r, gameApplicationIds: l, minGames: o = 1, error: c, guildId: d, includeSuggestedGames: u } = e,
        m = l.size <= o;
    return (0, i.jsxs)('div', {
        className: a()(g.slideContent, h.container),
        children: [
            (0, i.jsx)(s.Heading, {
                variant: 'heading-xxl/medium',
                className: g.title,
                children: t
            }),
            (0, i.jsx)(s.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                className: g.subtitle,
                children: n
            }),
            (0, i.jsx)(x, {
                minGames: o,
                gameApplicationIds: l,
                preventGameRemoval: m,
                onUpdateGames: r,
                error: c
            }),
            u &&
                null != d &&
                (0, i.jsx)(p, {
                    guildId: d,
                    selectedGameApplicationIds: l,
                    onUpdateGames: r
                })
        ]
    });
};
