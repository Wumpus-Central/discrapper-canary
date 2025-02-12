n.d(t, { Z: () => _ }), n(47120), n(773603);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(481060),
    o = n(368343),
    c = n(364083),
    d = n(92373),
    u = n(308083),
    m = n(388032),
    h = n(838371),
    g = n(212617);
function x(e) {
    let { gameApplicationIds: t, preventGameRemoval: n, onUpdateGames: l, minGames: o = 1, error: x } = e,
        { options: p, matchSorterOptions: _ } = (0, c.P)(),
        C = r.useMemo(() => Array.from(t), [t]),
        f = r.useCallback(
            (e) => {
                !(e.length < o) && l(new Set(e));
            },
            [o, l]
        ),
        v = r.useCallback(
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
        children: (0, i.jsxs)(a.xJW, {
            error: x,
            children: [
                (0, i.jsx)(a.VcW, {
                    multi: !0,
                    hidePills: !0,
                    autoFocus: !0,
                    wrapperClassName: s()(g.input, h.input),
                    options: p,
                    value: C,
                    placeholder: m.intl.string(m.t.acyezc),
                    onChange: f,
                    isDisabled: t.size === u.cm,
                    matchSorterOptions: _,
                    clearQueryOnSelect: !0,
                    customPillContainerClassName: h.pills,
                    renderCustomPill: N
                }),
                C.length > 0 &&
                    (0, i.jsxs)('div', {
                        className: h.gamesContainer,
                        children: [
                            (0, i.jsx)(a.Text, {
                                variant: 'text-xs/semibold',
                                color: 'text-muted',
                                children: m.intl.string(m.t.PgOVsL)
                            }),
                            (0, i.jsx)('div', {
                                className: h.gamesList,
                                children: C.map((e) =>
                                    (0, i.jsx)(
                                        a.ua7,
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
                                                            onClick: v
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
        { topGames: s, tryFetchTopGames: c } = (0, o.B)(),
        u = s.get(t),
        [g, x] = r.useState(!1);
    r.useEffect(() => {
        x(!0),
            c(t).finally(() => {
                x(!1);
            });
    }, [t, c]);
    let p = r.useMemo(() => (null == u ? [] : Object.keys(u).sort((e, t) => u[t].score - u[e].score)), [u]),
        _ = r.useCallback(
            (e) => {
                let t = new Set(n);
                n.has(e) ? t.delete(e) : t.add(e), l(t);
            },
            [l, n]
        );
    return g && null == u
        ? (0, i.jsx)(a.$jN, { className: h.loadingSpinner })
        : null == p || 0 === p.length
          ? null
          : (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)('hr', { className: h.separator }),
                    (0, i.jsxs)('div', {
                        className: h.gamesContainer,
                        children: [
                            (0, i.jsx)(a.Text, {
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
let _ = (e) => {
    let { title: t, description: n, onUpdateGames: r, gameApplicationIds: l, minGames: o = 1, error: c, guildId: d, includeSuggestedGames: u } = e,
        m = l.size <= o;
    return (0, i.jsxs)('div', {
        className: s()(g.slideContent, h.container),
        children: [
            (0, i.jsx)(a.X6q, {
                variant: 'heading-xxl/medium',
                className: g.title,
                children: t
            }),
            (0, i.jsx)(a.Text, {
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
