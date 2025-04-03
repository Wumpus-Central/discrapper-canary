n.d(t, { Z: () => b }), n(47120), n(773603), n(230036), n(266796);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(481060),
    o = n(279881),
    c = n(510231),
    d = n(92373),
    u = n(308083),
    m = n(388032),
    g = n(932270),
    p = n(130116);
function h(e) {
    let { gameApplicationIds: t, preventGameRemoval: n, onUpdateGames: s, minGames: o = 1, error: h } = e,
        { options: f, matchSorterOptions: b } = (0, c.h)(),
        x = i.useMemo(() => Array.from(t), [t]),
        j = i.useCallback(
            (e) => {
                e.length < o || s(new Set(e));
            },
            [o, s]
        ),
        N = i.useCallback(
            (e) => {
                if (n) return;
                let r = new Set(t);
                t.has(e) ? r.delete(e) : r.add(e), s(r);
            },
            [n, t, s]
        ),
        _ = i.useCallback(() => null, []);
    return (0, r.jsx)('div', {
        className: g.inputContainer,
        children: (0, r.jsxs)(l.xJW, {
            error: h,
            children: [
                (0, r.jsx)(l.VcW, {
                    multi: !0,
                    hidePills: !0,
                    autoFocus: !0,
                    wrapperClassName: a()(p.input, g.input),
                    options: f,
                    value: x,
                    placeholder: m.NW.string(m.t.acyezc),
                    onChange: j,
                    isDisabled: t.size === u.cm,
                    matchSorterOptions: b,
                    clearQueryOnSelect: !0,
                    customPillContainerClassName: g.pills,
                    renderCustomPill: _
                }),
                x.length > 0 &&
                    (0, r.jsxs)('div', {
                        className: g.gamesContainer,
                        children: [
                            (0, r.jsx)(l.Text, {
                                variant: 'text-xs/semibold',
                                color: 'text-muted',
                                children: m.NW.string(m.t.PgOVsL)
                            }),
                            (0, r.jsx)('div', {
                                className: g.gamesList,
                                children: x.map((e) =>
                                    (0, r.jsx)(
                                        l.ua7,
                                        {
                                            text: m.NW.string(m.t.C1K2XV),
                                            shouldShow: n,
                                            tooltipContentClassName: g.tooltip,
                                            children: (i) => {
                                                var s, a;
                                                return (0, r.jsx)(
                                                    'div',
                                                    ((s = (function (e) {
                                                        for (var t = 1; t < arguments.length; t++) {
                                                            var n = null != arguments[t] ? arguments[t] : {},
                                                                r = Object.keys(n);
                                                            'function' == typeof Object.getOwnPropertySymbols &&
                                                                (r = r.concat(
                                                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                                    })
                                                                )),
                                                                r.forEach(function (t) {
                                                                    var r;
                                                                    (r = n[t]),
                                                                        t in e
                                                                            ? Object.defineProperty(e, t, {
                                                                                  value: r,
                                                                                  enumerable: !0,
                                                                                  configurable: !0,
                                                                                  writable: !0
                                                                              })
                                                                            : (e[t] = r);
                                                                });
                                                        }
                                                        return e;
                                                    })({}, i)),
                                                    (a = a =
                                                        {
                                                            children: (0, r.jsx)(
                                                                d.Z,
                                                                {
                                                                    applicationId: e,
                                                                    imageContainerClassName: t.size > o ? g.clickableGame : void 0,
                                                                    selected: !0,
                                                                    locked: n,
                                                                    onClick: N
                                                                },
                                                                e
                                                            )
                                                        }),
                                                    Object.getOwnPropertyDescriptors
                                                        ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(a))
                                                        : (function (e, t) {
                                                              var n = Object.keys(e);
                                                              if (Object.getOwnPropertySymbols) {
                                                                  var r = Object.getOwnPropertySymbols(e);
                                                                  n.push.apply(n, r);
                                                              }
                                                              return n;
                                                          })(Object(a)).forEach(function (e) {
                                                              Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(a, e));
                                                          }),
                                                    s)
                                                );
                                            }
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
function f(e) {
    let { guildId: t, selectedGameApplicationIds: n, onUpdateGames: s } = e,
        { topGames: a, tryFetchTopGames: c } = (0, o.I)(),
        u = a.get(t),
        [p, h] = i.useState(!1);
    i.useEffect(() => {
        h(!0),
            c(t).finally(() => {
                h(!1);
            });
    }, [t, c]);
    let f = i.useMemo(() => (null == u ? [] : Object.keys(u).sort((e, t) => u[t].score - u[e].score)), [u]),
        b = i.useCallback(
            (e) => {
                let t = new Set(n);
                n.has(e) ? t.delete(e) : t.add(e), s(t);
            },
            [s, n]
        );
    return p && null == u
        ? (0, r.jsx)(l.$jN, { className: g.loadingSpinner })
        : null == f || 0 === f.length
          ? null
          : (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)('hr', { className: g.separator }),
                    (0, r.jsxs)('div', {
                        className: g.gamesContainer,
                        children: [
                            (0, r.jsx)(l.Text, {
                                variant: 'text-xs/semibold',
                                color: 'text-muted',
                                children: m.NW.string(m.t['0wEQQ0'])
                            }),
                            (0, r.jsx)('div', {
                                className: g.gamesList,
                                children: f.map((e) =>
                                    (0, r.jsx)(
                                        d.Z,
                                        {
                                            applicationId: e,
                                            imageContainerClassName: g.clickableGame,
                                            selected: n.has(e),
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
let b = (e) => {
    let { title: t, description: n, onUpdateGames: i, gameApplicationIds: s, minGames: o = 1, error: c, guildId: d, includeSuggestedGames: u } = e,
        m = s.size <= o;
    return (0, r.jsxs)('div', {
        className: a()(p.slideContent, g.container),
        children: [
            (0, r.jsx)(l.X6q, {
                variant: 'heading-xxl/medium',
                className: p.title,
                children: t
            }),
            (0, r.jsx)(l.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                className: p.subtitle,
                children: n
            }),
            (0, r.jsx)(h, {
                minGames: o,
                gameApplicationIds: s,
                preventGameRemoval: m,
                onUpdateGames: i,
                error: c
            }),
            u &&
                null != d &&
                (0, r.jsx)(f, {
                    guildId: d,
                    selectedGameApplicationIds: s,
                    onUpdateGames: i
                })
        ]
    });
};
